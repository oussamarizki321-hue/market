/**
 * Main Application Controller for AliExpress Affiliate Marketplace
 * Handles homepage rendering, live search, filters, sorting, and user interactions.
 */

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});

const App = {
  currentCategory: "all",
  currentSort: "popular",
  searchQuery: "",
  filters: {
    minPrice: null,
    maxPrice: null,
    freeShipping: false,
    choiceOnly: false,
    minRating: 0
  },
  currentSlide: 0,
  slideInterval: null,

  init() {
    // 1. Initialize i18n
    if (window.I18n) window.I18n.init();

    // 2. Setup Listeners
    this.setupEventListeners();

    // 3. Render Navigation & Categories
    this.renderCategoriesMenu();
    this.renderCategoryChips();

    // 4. Render Hero Slider & Deals
    this.renderHeroSlider();
    this.startDealCountdown();

    // 5. Render Products
    this.renderProducts();

    // 6. Update Wishlist Counter
    this.updateWishlistCount();

    // 7. Update Store Settings (Name, Currency, etc.)
    this.applyStoreSettings();

    // Listen for language change events
    window.addEventListener("languageChanged", () => {
      this.renderCategoriesMenu();
      this.renderCategoryChips();
      this.renderHeroSlider();
      this.renderProducts();
    });

    window.addEventListener("wishlistUpdated", () => {
      this.updateWishlistCount();
      this.renderProducts();
    });
  },

  applyStoreSettings() {
    if (!window.Store) return;
    const settings = window.Store.getSettings();
    if (settings.siteName) {
      document.querySelectorAll(".site-name-display").forEach(el => {
        el.textContent = settings.siteName;
      });
    }
    if (settings.disclosureNotice) {
      document.querySelectorAll(".site-disclosure-text").forEach(el => {
        el.textContent = settings.disclosureNotice;
      });
    }
  },

  setupEventListeners() {
    // Language Buttons
    document.querySelectorAll("[data-lang-btn]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const lang = btn.getAttribute("data-lang-btn");
        if (window.I18n) window.I18n.setLanguage(lang);
      });
    });

    // Live Search Input with Debounce
    const searchInput = document.getElementById("main-search-input");
    const searchDropdown = document.getElementById("search-dropdown-menu");
    const searchBtn = document.getElementById("main-search-btn");
    const categorySelect = document.getElementById("search-category-select");

    let searchTimeout = null;
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim();
        searchTimeout = setTimeout(() => {
          this.handleLiveSearch(query);
        }, 250);
      });

      searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          this.executeSearch(searchInput.value.trim());
          if (searchDropdown) searchDropdown.classList.remove("active");
        }
      });
    }

    if (searchBtn) {
      searchBtn.addEventListener("click", () => {
        if (searchInput) {
          this.executeSearch(searchInput.value.trim());
          if (searchDropdown) searchDropdown.classList.remove("active");
        }
      });
    }

    if (categorySelect) {
      categorySelect.addEventListener("change", (e) => {
        this.currentCategory = e.target.value;
        this.renderCategoryChips();
        this.renderProducts();
      });
    }

    // Close search dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (searchDropdown && !e.target.closest(".header-search-wrap")) {
        searchDropdown.classList.remove("active");
      }
    });

    // Sorting Dropdown
    const sortSelect = document.getElementById("product-sort-select");
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        this.currentSort = e.target.value;
        this.renderProducts();
      });
    }

    // Filters Form
    const btnApplyFilter = document.getElementById("btn-apply-filter");
    const btnClearFilter = document.getElementById("btn-clear-filter");

    if (btnApplyFilter) {
      btnApplyFilter.addEventListener("click", () => {
        const minVal = parseFloat(document.getElementById("filter-min-price").value);
        const maxVal = parseFloat(document.getElementById("filter-max-price").value);
        const freeShip = document.getElementById("filter-free-shipping").checked;
        const choice = document.getElementById("filter-choice-only").checked;
        const rating = parseFloat(document.getElementById("filter-min-rating").value || "0");

        this.filters.minPrice = isNaN(minVal) ? null : minVal;
        this.filters.maxPrice = isNaN(maxVal) ? null : maxVal;
        this.filters.freeShipping = freeShip;
        this.filters.choiceOnly = choice;
        this.filters.minRating = rating;

        this.renderProducts();
        this.showToast(window.I18n ? window.I18n.t("apply_filter") : "Filters Applied");
      });
    }

    if (btnClearFilter) {
      btnClearFilter.addEventListener("click", () => {
        document.getElementById("filter-min-price").value = "";
        document.getElementById("filter-max-price").value = "";
        document.getElementById("filter-free-shipping").checked = false;
        document.getElementById("filter-choice-only").checked = false;
        document.getElementById("filter-min-rating").value = "0";

        this.filters = {
          minPrice: null,
          maxPrice: null,
          freeShipping: false,
          choiceOnly: false,
          minRating: 0
        };
        this.renderProducts();
      });
    }

    // Header Wishlist Shortcut
    const wishlistBtn = document.getElementById("header-wishlist-btn");
    if (wishlistBtn) {
      wishlistBtn.addEventListener("click", () => {
        this.showWishlistOnly();
      });
    }

    // All Categories Mega Menu Trigger
    const allCatBtn = document.getElementById("btn-all-categories");
    if (allCatBtn) {
      allCatBtn.addEventListener("click", () => {
        const catSidebar = document.querySelector(".category-sidebar");
        if (catSidebar && window.getComputedStyle(catSidebar).display !== "none") {
          catSidebar.scrollIntoView({ behavior: "smooth" });
        } else {
          const chips = document.getElementById("category-chips-row");
          if (chips) chips.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  },

  renderCategoriesMenu() {
    const listEl = document.getElementById("category-sidebar-list");
    const selectEl = document.getElementById("search-category-select");
    if (!listEl && !selectEl) return;

    const categories = window.Store ? window.Store.getCategories() : [];

    if (listEl) {
      listEl.innerHTML = `
        <li class="category-menu-item ${this.currentCategory === 'all' ? 'active' : ''}" onclick="App.selectCategory('all')">
          <div class="category-menu-item-left">
            <i class="bi bi-grid-fill"></i>
            <span>${window.I18n ? window.I18n.t("all_categories") : "All Categories"}</span>
          </div>
          <i class="bi bi-chevron-right"></i>
        </li>
      `;

      categories.forEach(cat => {
        const catName = window.I18n ? window.I18n.localize(cat.name) : cat.name.en;
        const isActive = this.currentCategory === cat.id;
        listEl.innerHTML += `
          <li class="category-menu-item ${isActive ? 'active' : ''}" onclick="App.selectCategory('${cat.id}')">
            <div class="category-menu-item-left">
              <i class="bi ${cat.icon || 'bi-tag'}"></i>
              <span>${catName}</span>
            </div>
            ${cat.badge ? `<span class="cat-item-badge">${cat.badge}</span>` : `<i class="bi bi-chevron-right"></i>`}
          </li>
        `;
      });
    }

    if (selectEl) {
      const currentVal = selectEl.value;
      selectEl.innerHTML = `<option value="all">${window.I18n ? window.I18n.t("all_categories") : "All Categories"}</option>`;
      categories.forEach(cat => {
        const catName = window.I18n ? window.I18n.localize(cat.name) : cat.name.en;
        selectEl.innerHTML += `<option value="${cat.id}">${catName}</option>`;
      });
      if (currentVal) selectEl.value = currentVal;
    }
  },

  renderCategoryChips() {
    const container = document.getElementById("category-chips-row");
    if (!container) return;

    const categories = window.Store ? window.Store.getCategories() : [];
    container.innerHTML = `
      <div class="category-chip ${this.currentCategory === 'all' ? 'active' : ''}" onclick="App.selectCategory('all')">
        <i class="bi bi-stars"></i>
        <span>${window.I18n ? window.I18n.t("all_categories") : "All"}</span>
      </div>
    `;

    categories.forEach(cat => {
      const catName = window.I18n ? window.I18n.localize(cat.name) : cat.name.en;
      const isActive = this.currentCategory === cat.id;
      container.innerHTML += `
        <div class="category-chip ${isActive ? 'active' : ''}" onclick="App.selectCategory('${cat.id}')">
          <i class="bi ${cat.icon || 'bi-tag'}"></i>
          <span>${catName}</span>
        </div>
      `;
    });
  },

  selectCategory(catId) {
    this.currentCategory = catId;
    const catSelect = document.getElementById("search-category-select");
    if (catSelect) catSelect.value = catId;

    this.renderCategoriesMenu();
    this.renderCategoryChips();
    this.renderProducts();

    // Smooth scroll to product grid
    const gridEl = document.getElementById("products-container");
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  },

  renderHeroSlider() {
    const sliderContainer = document.getElementById("hero-slider-wrap");
    const dotsContainer = document.getElementById("hero-slider-dots");
    if (!sliderContainer) return;

    const banners = window.Store ? window.Store.getBanners() : [];
    const activeBanners = banners.filter(b => b.active !== false);

    if (activeBanners.length === 0) return;

    let slidesHtml = "";
    let dotsHtml = "";

    activeBanners.forEach((banner, idx) => {
      const title = window.I18n ? window.I18n.localize(banner.title) : (banner.title.en || banner.title);
      const subtitle = window.I18n ? window.I18n.localize(banner.subtitle) : (banner.subtitle.en || banner.subtitle);
      const cta = window.I18n ? window.I18n.localize(banner.ctaText) : (banner.ctaText.en || "Shop Now");

      slidesHtml += `
        <div class="hero-slide ${idx === 0 ? 'active' : ''}" style="background-image: url('${banner.imageUrl}')" data-slide-index="${idx}">
          <div class="hero-slide-overlay"></div>
          <div class="hero-slide-content">
            ${banner.badge ? `<span class="hero-slide-badge">${banner.badge}</span>` : ""}
            <h2 class="hero-slide-title">${title}</h2>
            <p class="hero-slide-subtitle">${subtitle}</p>
            <button class="hero-cta-btn" onclick="App.selectCategory('${banner.category || 'all'}')">
              <span>${cta}</span>
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      `;

      dotsHtml += `
        <div class="hero-dot ${idx === 0 ? 'active' : ''}" onclick="App.goToSlide(${idx})"></div>
      `;
    });

    sliderContainer.innerHTML = slidesHtml;
    if (dotsContainer) dotsContainer.innerHTML = dotsHtml;

    // Start auto slide rotation
    if (this.slideInterval) clearInterval(this.slideInterval);
    this.currentSlide = 0;
    this.slideInterval = setInterval(() => {
      this.nextSlide(activeBanners.length);
    }, 5500);
  },

  nextSlide(total) {
    this.currentSlide = (this.currentSlide + 1) % total;
    this.updateSlideDisplay();
  },

  goToSlide(index) {
    this.currentSlide = index;
    this.updateSlideDisplay();
  },

  updateSlideDisplay() {
    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".hero-dot");

    slides.forEach((s, idx) => {
      if (idx === this.currentSlide) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });

    dots.forEach((d, idx) => {
      if (idx === this.currentSlide) {
        d.classList.add("active");
      } else {
        d.classList.remove("active");
      }
    });
  },

  startDealCountdown() {
    const hoursEl = document.getElementById("timer-hours");
    const minsEl = document.getElementById("timer-mins");
    const secsEl = document.getElementById("timer-secs");
    if (!hoursEl || !minsEl || !secsEl) return;

    let totalSeconds = 14 * 3600 + 42 * 60 + 19; // initial 14h 42m 19s
    setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;
        hoursEl.textContent = String(h).padStart(2, "0");
        minsEl.textContent = String(m).padStart(2, "0");
        secsEl.textContent = String(s).padStart(2, "0");
      }
    }, 1000);
  },

  handleLiveSearch(query) {
    const dropdown = document.getElementById("search-dropdown-menu");
    if (!dropdown) return;

    if (!query || query.length < 2) {
      dropdown.classList.remove("active");
      return;
    }

    const products = window.Store ? window.Store.getProducts() : [];
    const qLower = query.toLowerCase();

    const matches = products.filter(p => {
      const name = window.I18n ? window.I18n.localize(p.name).toLowerCase() : (p.name.en || "").toLowerCase();
      const cat = (p.category || "").toLowerCase();
      const tags = (p.tags || []).join(" ").toLowerCase();
      return name.includes(qLower) || cat.includes(qLower) || tags.includes(qLower);
    }).slice(0, 5);

    if (matches.length === 0) {
      dropdown.innerHTML = `
        <div style="padding: 16px; text-align: center; color: #888; font-size: 13px;">
          No direct matches found for "${query}"
        </div>
      `;
    } else {
      const symbol = (window.Store && window.Store.getSettings().currencySymbol) || "$";
      dropdown.innerHTML = matches.map(p => {
        const pName = window.I18n ? window.I18n.localize(p.name) : (p.name.en || p.name);
        const pImg = (p.images && p.images[0]) || "";
        return `
          <div class="search-dropdown-item" onclick="window.location.href='product.html?id=${p.id}'">
            <div class="search-dropdown-item-left">
              <img src="${pImg}" alt="${pName}" class="search-dropdown-thumb" />
              <div class="search-dropdown-name">${pName}</div>
            </div>
            <div class="search-dropdown-price">${symbol}${p.price ? p.price.toFixed(2) : ""}</div>
          </div>
        `;
      }).join("");
    }

    dropdown.classList.add("active");
  },

  executeSearch(query) {
    this.searchQuery = query;
    this.renderProducts();
    const gridEl = document.getElementById("products-container");
    if (gridEl) gridEl.scrollIntoView({ behavior: "smooth" });
  },

  showWishlistOnly() {
    const wishlistIds = window.Store ? window.Store.getWishlist() : [];
    if (wishlistIds.length === 0) {
      this.showToast("Your wishlist is currently empty!");
      return;
    }
    this.isWishlistView = true;
    this.renderProducts();
    this.showToast(`Showing ${wishlistIds.length} saved wishlist items`);
  },

  renderProducts() {
    const grid = document.getElementById("products-grid");
    const countEl = document.getElementById("results-count");
    if (!grid) return;

    let products = window.Store ? window.Store.getProducts() : [];

    // Filter by Wishlist if view is active
    if (this.isWishlistView) {
      const wishlistIds = window.Store ? window.Store.getWishlist() : [];
      products = products.filter(p => wishlistIds.includes(p.id));
    }

    // Filter by Category
    if (this.currentCategory && this.currentCategory !== "all") {
      products = products.filter(p => p.category === this.currentCategory);
    }

    // Filter by Search Query
    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      products = products.filter(p => {
        const name = window.I18n ? window.I18n.localize(p.name).toLowerCase() : (p.name.en || "").toLowerCase();
        const tags = (p.tags || []).join(" ").toLowerCase();
        return name.includes(q) || tags.includes(q);
      });
    }

    // Filter by Sidebar criteria
    if (this.filters.minPrice !== null) {
      products = products.filter(p => p.price >= this.filters.minPrice);
    }
    if (this.filters.maxPrice !== null) {
      products = products.filter(p => p.price <= this.filters.maxPrice);
    }
    if (this.filters.freeShipping) {
      products = products.filter(p => p.freeShipping === true);
    }
    if (this.filters.choiceOnly) {
      products = products.filter(p => p.choice === true);
    }
    if (this.filters.minRating > 0) {
      products = products.filter(p => (p.rating || 0) >= this.filters.minRating);
    }

    // Sorting
    switch (this.currentSort) {
      case "price-low":
        products.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case "price-high":
        products.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case "rating":
        products.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "discount":
        products.sort((a, b) => (b.discount || 0) - (a.discount || 0));
        break;
      case "popular":
      default:
        products.sort((a, b) => (b.orders || 0) - (a.orders || 0));
        break;
    }

    // Update count display
    if (countEl) {
      const label = window.I18n ? window.I18n.t("results_found") : "products found";
      countEl.innerHTML = `<strong>${products.length}</strong> ${label}`;
    }

    // Empty state check
    if (products.length === 0) {
      const emptyText = window.I18n ? window.I18n.t("no_products") : "No products found.";
      grid.innerHTML = `
        <div class="empty-state-wrap">
          <i class="bi bi-search empty-state-icon"></i>
          <div class="empty-state-text">${emptyText}</div>
          <button class="btn-primary-admin" onclick="App.resetFilters()">
            <i class="bi bi-arrow-counterclockwise"></i> ${window.I18n ? window.I18n.t("clear_all", "إعادة ضبط الفلاتر") : "إعادة ضبط الفلاتر"}
          </button>
        </div>
      `;
      return;
    }

    const symbol = (window.Store && window.Store.getSettings().currencySymbol) || "$";
    const t = window.I18n ? window.I18n.t.bind(window.I18n) : (k) => k;

    const fallbackImg = "images/products/lenovo-earbuds.svg";

    grid.innerHTML = products.map(product => {
      const name = window.I18n ? window.I18n.localize(product.name) : (product.name.en || product.name);
      const img = (product.images && product.images[0]) ? product.images[0] : fallbackImg;
      const isFav = window.Store && window.Store.isWishlisted(product.id);
      const ordersFormatted = product.orders ? (product.orders >= 1000 ? (product.orders / 1000).toFixed(1) + "k" : product.orders) : "500+";

      return `
        <div class="product-card" id="card-${product.id}">
          <div class="product-card-thumb-wrap">
            <a href="product.html?id=${product.id}">
              <img src="${img}" alt="${name}" class="product-card-thumb" loading="lazy" onerror="this.onerror=null; this.src='${fallbackImg}';" />
            </a>

            <div class="product-card-badges">
              ${product.choice ? `<span class="badge-choice"><i class="bi bi-patch-check-fill"></i> ${t("choice_badge", "Choice")}</span>` : ""}
              ${product.discount ? `<span class="badge-discount">-${product.discount}% ${t("off", "OFF")}</span>` : ""}
            </div>

            <button class="product-card-wish-btn ${isFav ? 'active' : ''}" onclick="App.toggleWishlist('${product.id}', event)" title="Add to Wishlist">
              <i class="bi ${isFav ? 'bi-heart-fill' : 'bi-heart'}"></i>
            </button>
          </div>

          <div class="product-card-body">
            <a href="product.html?id=${product.id}" class="product-card-title" title="${name}">
              ${name}
            </a>

            <div class="product-card-rating-row">
              <div class="rating-stars">
                <i class="bi bi-star-fill"></i>
                <span>${product.rating ? product.rating.toFixed(1) : "4.8"}</span>
              </div>
              <span>•</span>
              <span class="orders-sold-text">${ordersFormatted} ${t("orders_count", "sold")}</span>
            </div>

            <div class="product-card-price-row">
              <span class="product-card-price">${symbol}${product.price ? product.price.toFixed(2) : ""}</span>
              ${product.originalPrice ? `<span class="product-card-orig-price">${symbol}${product.originalPrice.toFixed(2)}</span>` : ""}
            </div>

            ${product.freeShipping ? `
              <div class="product-card-shipping-tag">
                <i class="bi bi-truck"></i> ${t("free_shipping", "Free Shipping")}
              </div>
            ` : ""}

            <div class="product-card-actions">
              <button class="btn-buy-aliexpress" onclick="App.buyNow('${product.id}')">
                <span>${t("buy_on_aliexpress", "Buy on AliExpress")}</span>
                <i class="bi bi-box-arrow-up-right"></i>
              </button>
              <a href="product.html?id=${product.id}" class="btn-view-card">
                ${t("view_details", "View Details")}
              </a>
            </div>
          </div>
        </div>
      `;
    }).join("");
  },

  buyNow(productId) {
    const product = window.Store ? window.Store.getProductById(productId) : null;
    if (!product) return;
    if (window.Tracker) {
      window.Tracker.redirectToAliExpress(product, "product_card_btn", true);
    }
  },

  toggleWishlist(productId, e) {
    if (e) e.stopPropagation();
    if (!window.Store) return;
    const added = window.Store.toggleWishlist(productId);
    const msg = added ? "Added to Wishlist ❤️" : "Removed from Wishlist";
    this.showToast(msg);
  },

  updateWishlistCount() {
    const badge = document.getElementById("header-wishlist-count");
    if (!badge || !window.Store) return;
    const list = window.Store.getWishlist();
    badge.textContent = list.length;
    badge.style.display = list.length > 0 ? "inline-block" : "none";
  },

  resetFilters() {
    this.currentCategory = "all";
    this.searchQuery = "";
    this.isWishlistView = false;
    this.filters = { minPrice: null, maxPrice: null, freeShipping: false, choiceOnly: false, minRating: 0 };
    const searchInput = document.getElementById("main-search-input");
    if (searchInput) searchInput.value = "";
    this.renderCategoriesMenu();
    this.renderCategoryChips();
    this.renderProducts();
  },

  showToast(message) {
    let toast = document.getElementById("global-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "global-toast";
      toast.className = "toast-notice";
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="bi bi-info-circle-fill"></i> <span>${message}</span>`;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  }
};

if (typeof window !== "undefined") {
  window.App = App;
}
