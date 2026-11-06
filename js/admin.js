/**
 * Admin Dashboard Controller
 * Handles authentication, full CRUD operations, image base64 conversion,
 * outbound click analytics, affiliate parameter builder, and catalog import/export.
 */

document.addEventListener("DOMContentLoaded", () => {
  Admin.init();
});

const Admin = {
  isAuthenticated: false,
  activeTab: "overview",
  editingProductId: null,
  editingCategoryId: null,

  init() {
    if (window.I18n) window.I18n.init();

    // Check existing session
    const sessionAuth = sessionStorage.getItem("ali_admin_authenticated");
    if (sessionAuth === "true") {
      this.isAuthenticated = true;
      this.hideLoginOverlay();
      this.renderDashboard();
    } else {
      this.showLoginOverlay();
    }

    this.setupEventListeners();
  },

  setupEventListeners() {
    // Login form
    const loginBtn = document.getElementById("admin-login-submit");
    const pinInput = document.getElementById("admin-pin-field");

    if (loginBtn && pinInput) {
      loginBtn.addEventListener("click", () => this.handleLogin());
      pinInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") this.handleLogin();
      });
    }

    // Sidebar navigation
    document.querySelectorAll(".admin-menu-link").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const tab = link.getAttribute("data-tab");
        if (tab) this.switchTab(tab);
      });
    });

    // Logout
    const logoutBtn = document.getElementById("btn-admin-logout");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => this.handleLogout());
    }

    // Product search inside admin table
    const prodSearch = document.getElementById("admin-prod-search");
    if (prodSearch) {
      prodSearch.addEventListener("input", () => this.renderProductsTable());
    }

    // Product image file upload preview
    const fileInput = document.getElementById("prod-image-file");
    if (fileInput) {
      fileInput.addEventListener("change", (e) => this.handleImageFileUpload(e));
    }

    // Image URL live preview
    const urlInput = document.getElementById("prod-image-url");
    if (urlInput) {
      urlInput.addEventListener("input", (e) => {
        const preview = document.getElementById("prod-image-preview");
        if (preview && e.target.value) preview.src = e.target.value;
      });
    }
  },

  handleLogin() {
    const pinInput = document.getElementById("admin-pin-field");
    const errorMsg = document.getElementById("admin-login-error");
    if (!pinInput) return;

    const enteredPin = pinInput.value.trim();
    const settings = window.Store ? window.Store.getSettings() : {};
    const validPin = settings.adminPin || "marketali2026";

    if (enteredPin === validPin) {
      this.isAuthenticated = true;
      sessionStorage.setItem("ali_admin_authenticated", "true");
      this.hideLoginOverlay();
      this.renderDashboard();
      if (errorMsg) errorMsg.style.display = "none";
    } else {
      if (errorMsg) {
        errorMsg.textContent = "Invalid PIN. Access denied.";
        errorMsg.style.display = "block";
      }
    }
  },

  handleLogout() {
    sessionStorage.removeItem("ali_admin_authenticated");
    this.isAuthenticated = false;
    this.showLoginOverlay();
  },

  showLoginOverlay() {
    const overlay = document.getElementById("admin-login-overlay");
    if (overlay) overlay.style.display = "flex";
  },

  hideLoginOverlay() {
    const overlay = document.getElementById("admin-login-overlay");
    if (overlay) overlay.style.display = "none";
  },

  switchTab(tabName) {
    this.activeTab = tabName;

    // Update menu highlight
    document.querySelectorAll(".admin-menu-link").forEach(link => {
      if (link.getAttribute("data-tab") === tabName) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Update tab visibility
    document.querySelectorAll(".admin-tab-content").forEach(content => {
      if (content.id === `tab-${tabName}`) {
        content.classList.add("active");
      } else {
        content.classList.remove("active");
      }
    });

    // Update page header title
    const titleEl = document.getElementById("admin-header-title");
    if (titleEl) {
      const titles = {
        overview: "Dashboard Overview & Key Metrics",
        products: "Affiliate Product Management",
        categories: "Marketplace Categories",
        analytics: "Outbound Traffic & Affiliate Click Log",
        affiliate: "AliExpress Affiliate Link & API Config",
        banners: "Homepage Hero Banners & Deals",
        settings: "Global Site Settings & PIN"
      };
      titleEl.textContent = titles[tabName] || "Admin Dashboard";
    }

    // Refresh content for active tab
    if (tabName === "overview") this.renderOverviewStats();
    if (tabName === "products") this.renderProductsTable();
    if (tabName === "categories") this.renderCategoriesTable();
    if (tabName === "analytics") this.renderAnalyticsTable();
    if (tabName === "affiliate") this.renderAffiliateConfig();
    if (tabName === "banners") this.renderBannersTable();
    if (tabName === "settings") this.renderSettingsForm();
  },

  renderDashboard() {
    this.renderOverviewStats();
    this.renderProductsTable();
    this.renderCategoriesTable();
    this.renderAnalyticsTable();
    this.renderAffiliateConfig();
    this.renderBannersTable();
    this.renderSettingsForm();
  },

  // 1. OVERVIEW & METRICS
  renderOverviewStats() {
    if (!window.Store) return;
    const products = window.Store.getProducts();
    const categories = window.Store.getCategories();
    const analytics = window.Store.getAnalyticsSummary();

    const totalProdEl = document.getElementById("stat-total-products");
    const totalClicksEl = document.getElementById("stat-total-clicks");
    const activeCatEl = document.getElementById("stat-active-categories");
    const potentialEl = document.getElementById("stat-conversion-potential");

    if (totalProdEl) totalProdEl.textContent = products.length;
    if (totalClicksEl) totalClicksEl.textContent = analytics.totalClicks;
    if (activeCatEl) activeCatEl.textContent = categories.length;
    if (potentialEl) potentialEl.textContent = `${analytics.totalClicks} Visits`;

    // Render Top Performing Products Table
    const topGrid = document.getElementById("overview-top-products-body");
    if (topGrid) {
      const symbol = window.Store.getSettings().currencySymbol || "$";
      topGrid.innerHTML = analytics.topProducts.map((p, idx) => `
        <tr>
          <td><strong>#${idx + 1}</strong></td>
          <td>
            <div style="display: flex; align-items: center; gap: 10px;">
              <img src="${(p.images && p.images[0]) || ''}" style="width: 36px; height: 36px; object-fit: cover; border-radius: 4px;" />
              <div style="font-weight: 600; max-width: 280px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                ${p.name.en || p.name}
              </div>
            </div>
          </td>
          <td><span class="badge-status active">${p.category}</span></td>
          <td><strong>${symbol}${p.price ? p.price.toFixed(2) : ''}</strong></td>
          <td>
            <span style="font-weight: 800; color: var(--ali-red);">${p.totalClicks || 0}</span> clicks
          </td>
          <td>
            <a href="${p.affiliateUrl}" target="_blank" rel="noopener" class="btn-icon-action" title="Open AliExpress Link">
              <i class="bi bi-box-arrow-up-right"></i>
            </a>
          </td>
        </tr>
      `).join("");
    }
  },

  // 2. PRODUCTS TABLE
  renderProductsTable() {
    const tbody = document.getElementById("products-table-body");
    if (!tbody || !window.Store) return;

    // Populate category dropdown for the importer if present
    const impSelect = document.getElementById("importer-cat-select");
    if (impSelect && impSelect.options.length === 0) {
      this.populateCategoryOptions("importer-cat-select");
    }

    let products = window.Store.getProducts();
    const searchVal = (document.getElementById("admin-prod-search")?.value || "").toLowerCase();

    if (searchVal) {
      products = products.filter(p => {
        const name = (p.name.en || p.name || "").toLowerCase();
        const cat = (p.category || "").toLowerCase();
        return name.includes(searchVal) || cat.includes(searchVal);
      });
    }

    const symbol = window.Store.getSettings().currencySymbol || "$";

    tbody.innerHTML = products.map(p => {
      const name = p.name.en || p.name;
      const img = (p.images && p.images[0]) || "";
      const isChoice = p.choice ? '<span class="badge-status active">Choice</span>' : '<span class="badge-status pending">Standard</span>';

      return `
        <tr>
          <td>
            <img src="${img}" alt="${name}" class="product-row-thumb" />
          </td>
          <td>
            <div style="font-weight: 600; color: #111; max-width: 280px; line-height: 1.3;">
              ${name}
            </div>
            <div style="font-size: 11.5px; color: #6B7280; margin-top: 4px;">
              ID: <code>${p.id}</code>
            </div>
          </td>
          <td><span class="badge-status active">${p.category}</span></td>
          <td>
            <div style="font-weight: 700; color: var(--ali-red);">${symbol}${p.price ? p.price.toFixed(2) : ""}</div>
            ${p.originalPrice ? `<div style="font-size: 11px; color: #999; text-decoration: line-through;">${symbol}${p.originalPrice.toFixed(2)}</div>` : ""}
          </td>
          <td>${isChoice}</td>
          <td><strong>${p.clicks || 0}</strong></td>
          <td>
            <div class="action-btns-group">
              <button class="btn-icon-action" onclick="Admin.openEditProductModal('${p.id}')" title="Edit Product">
                <i class="bi bi-pencil"></i>
              </button>
              <a href="product.html?id=${p.id}" target="_blank" class="btn-icon-action" title="View Store Page">
                <i class="bi bi-eye"></i>
              </a>
              <button class="btn-icon-action delete" onclick="Admin.deleteProduct('${p.id}')" title="Delete Product">
                <i class="bi bi-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join("");
  },

  handleInstantImport() {
    const input = document.getElementById("importer-url-input");
    const catSelect = document.getElementById("importer-cat-select");
    if (!input || !input.value.trim()) {
      alert("Please enter an AliExpress product URL or Item ID to import.");
      return;
    }

    const val = input.value.trim();
    const cat = catSelect ? catSelect.value : "electronics";

    if (window.Importer) {
      const imported = window.Importer.importByUrl(val, cat);
      if (imported) {
        input.value = "";
        alert(`Successfully imported product: "${imported.name.en}"!`);
        this.renderProductsTable();
        this.renderOverviewStats();
      }
    }
  },

  populateViralDeals() {
    if (window.Importer) {
      const count = window.Importer.populateViralCatalog();
      if (count > 0) {
        alert(`Added ${count} top viral AliExpress deals to your catalog!`);
      } else {
        alert("All top viral AliExpress deals are already in your catalog!");
      }
      this.renderProductsTable();
      this.renderOverviewStats();
    }
  },

  // ADD / EDIT PRODUCT MODAL
  openAddProductModal() {
    this.editingProductId = null;
    document.getElementById("modal-product-title").textContent = "Add New AliExpress Affiliate Product";

    // Populate category dropdown
    this.populateCategoryOptions("prod-category");

    // Reset fields
    if (document.getElementById("prod-name-en")) document.getElementById("prod-name-en").value = "";
    if (document.getElementById("prod-name-ar")) document.getElementById("prod-name-ar").value = "";
    document.getElementById("prod-price").value = "";
    document.getElementById("prod-orig-price").value = "";
    document.getElementById("prod-discount").value = "";
    document.getElementById("prod-image-url").value = "";
    document.getElementById("prod-affiliate-url").value = "";
    document.getElementById("prod-desc").value = "";
    document.getElementById("prod-choice").checked = true;
    document.getElementById("prod-free-shipping").checked = true;
    document.getElementById("prod-featured").checked = false;

    const preview = document.getElementById("prod-image-preview");
    if (preview) preview.src = "images/products/lenovo-earbuds.svg";

    document.getElementById("admin-product-modal").classList.add("active");
  },

  openEditProductModal(productId) {
    if (!window.Store) return;
    const p = window.Store.getProductById(productId);
    if (!p) return;

    this.editingProductId = productId;
    document.getElementById("modal-product-title").textContent = "تعديل المنتج / Edit Product";

    this.populateCategoryOptions("prod-category", p.category);

    if (document.getElementById("prod-name-ar")) document.getElementById("prod-name-ar").value = (p.name && p.name.ar) || "";
    if (document.getElementById("prod-name-en")) document.getElementById("prod-name-en").value = (p.name && (p.name.en || p.name)) || "";
    document.getElementById("prod-price").value = p.price || "";
    document.getElementById("prod-orig-price").value = p.originalPrice || "";
    document.getElementById("prod-discount").value = p.discount || "";
    document.getElementById("prod-image-url").value = (p.images && p.images[0]) || "";
    document.getElementById("prod-affiliate-url").value = p.affiliateUrl || "";
    document.getElementById("prod-desc").value = typeof p.description === "object" ? (p.description.ar || p.description.en || "") : (p.description || "");
    document.getElementById("prod-choice").checked = !!p.choice;
    document.getElementById("prod-free-shipping").checked = !!p.freeShipping;
    document.getElementById("prod-featured").checked = !!p.featured;

    const preview = document.getElementById("prod-image-preview");
    if (preview && p.images && p.images[0]) {
      preview.src = p.images[0];
    }

    document.getElementById("admin-product-modal").classList.add("active");
  },

  closeProductModal() {
    document.getElementById("admin-product-modal").classList.remove("active");
  },

  populateCategoryOptions(selectId, selectedVal = "") {
    const select = document.getElementById(selectId);
    if (!select || !window.Store) return;
    const categories = window.Store.getCategories();
    select.innerHTML = categories.map(c => `
      <option value="${c.id}" ${c.id === selectedVal ? 'selected' : ''}>
        ${(c.name && (c.name.ar || c.name.en)) || c.name}
      </option>
    `).join("");
  },

  handleImageFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target.result;
      document.getElementById("prod-image-url").value = base64;
      const preview = document.getElementById("prod-image-preview");
      if (preview) preview.src = base64;
    };
    reader.readAsDataURL(file);
  },

  saveProductForm() {
    const nameAr = document.getElementById("prod-name-ar") ? document.getElementById("prod-name-ar").value.trim() : "";
    const nameEn = (document.getElementById("prod-name-en") ? document.getElementById("prod-name-en").value.trim() : "") || nameAr;
    const resolvedNameAr = nameAr || nameEn;
    const category = document.getElementById("prod-category").value;
    const price = parseFloat(document.getElementById("prod-price").value) || 0;
    const origPrice = parseFloat(document.getElementById("prod-orig-price").value) || (price * 1.5);
    const discount = parseInt(document.getElementById("prod-discount").value) || Math.round((1 - price/origPrice) * 100);
    const imageUrl = document.getElementById("prod-image-url").value.trim() || "images/products/lenovo-earbuds.svg";
    const affiliateUrl = document.getElementById("prod-affiliate-url").value.trim() || "https://s.click.aliexpress.com/e/_example";
    const desc = document.getElementById("prod-desc").value.trim();
    const choice = document.getElementById("prod-choice").checked;
    const freeShipping = document.getElementById("prod-free-shipping").checked;
    const featured = document.getElementById("prod-featured").checked;

    if (!resolvedNameAr && !nameEn) {
      alert("يرجى إدخال اسم المنتج / Product name is required.");
      return;
    }
    if (price <= 0) {
      alert("Please enter a valid price.");
      return;
    }

    const existing = this.editingProductId ? window.Store.getProductById(this.editingProductId) : null;

    const productData = {
      ...(existing || {}),
      name: { ar: resolvedNameAr, en: nameEn },
      category: category,
      price: price,
      originalPrice: origPrice,
      discount: discount,
      images: [imageUrl, ...(existing && existing.images ? existing.images.slice(1) : [])],
      affiliateUrl: affiliateUrl,
      description: desc,
      choice: choice,
      freeShipping: freeShipping,
      featured: featured,
      rating: existing ? existing.rating : 4.8,
      orders: existing ? existing.orders : 1500,
      reviewsCount: existing ? existing.reviewsCount : 340,
      tags: existing && existing.tags ? existing.tags : [category, "aliexpress", "deal"]
    };

    if (this.editingProductId) {
      window.Store.updateProduct(this.editingProductId, productData);
      alert("Product updated successfully! Changes saved.");
    } else {
      window.Store.addProduct(productData);
      alert("Product added successfully! Changes saved.");
    }

    this.closeProductModal();
    this.renderProductsTable();
    this.renderOverviewStats();
  },

  deleteProduct(productId) {
    if (confirm("Are you sure you want to delete this product?")) {
      window.Store.deleteProduct(productId);
      this.renderProductsTable();
      this.renderOverviewStats();
    }
  },

  // 3. CATEGORIES MANAGEMENT
  renderCategoriesTable() {
    const tbody = document.getElementById("categories-table-body");
    if (!tbody || !window.Store) return;

    const categories = window.Store.getCategories();
    tbody.innerHTML = categories.map(c => `
      <tr>
        <td><i class="bi ${c.icon || 'bi-tag'}" style="font-size: 20px; color: var(--ali-red);"></i></td>
        <td><strong>${c.name.en || c.name}</strong></td>
        <td>${c.name.fr || "-"}</td>
        <td>${c.name.ar || "-"}</td>
        <td><code>${c.slug || c.id}</code></td>
        <td>
          <div class="action-btns-group">
            <button class="btn-icon-action" onclick="Admin.openEditCategoryModal('${c.id}')" title="Edit">
              <i class="bi bi-pencil"></i>
            </button>
            <button class="btn-icon-action delete" onclick="Admin.deleteCategory('${c.id}')" title="Delete">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    `).join("");
  },

  openAddCategoryModal() {
    this.editingCategoryId = null;
    document.getElementById("modal-category-title").textContent = "إضافة قسم جديد / Add Category";
    if (document.getElementById("cat-name-ar")) document.getElementById("cat-name-ar").value = "";
    if (document.getElementById("cat-name-en")) document.getElementById("cat-name-en").value = "";
    document.getElementById("cat-icon").value = "bi-tag";
    document.getElementById("cat-slug").value = "";
    document.getElementById("admin-category-modal").classList.add("active");
  },

  openEditCategoryModal(catId) {
    const cat = window.Store.getCategories().find(c => c.id === catId);
    if (!cat) return;
    this.editingCategoryId = catId;
    document.getElementById("modal-category-title").textContent = "تعديل القسم / Edit Category";
    if (document.getElementById("cat-name-ar")) document.getElementById("cat-name-ar").value = (cat.name && cat.name.ar) || "";
    if (document.getElementById("cat-name-en")) document.getElementById("cat-name-en").value = (cat.name && (cat.name.en || cat.name)) || "";
    document.getElementById("cat-icon").value = cat.icon || "bi-tag";
    document.getElementById("cat-slug").value = cat.slug || cat.id;
    document.getElementById("admin-category-modal").classList.add("active");
  },

  closeCategoryModal() {
    document.getElementById("admin-category-modal").classList.remove("active");
  },

  saveCategoryForm() {
    const ar = document.getElementById("cat-name-ar") ? document.getElementById("cat-name-ar").value.trim() : "";
    const en = (document.getElementById("cat-name-en") ? document.getElementById("cat-name-en").value.trim() : "") || ar;
    const resolvedAr = ar || en;
    const icon = document.getElementById("cat-icon").value.trim() || "bi-tag";
    const slug = document.getElementById("cat-slug").value.trim() || en.toLowerCase().replace(/\s+/g, "-");

    if (!resolvedAr && !en) {
      alert("يرجى إدخال اسم القسم / Category name is required.");
      return;
    }

    const catData = {
      name: { ar: resolvedAr, en: en },
      icon,
      slug
    };

    if (this.editingCategoryId) {
      window.Store.updateCategory(this.editingCategoryId, catData);
    } else {
      catData.id = slug;
      window.Store.addCategory(catData);
    }

    this.closeCategoryModal();
    this.renderCategoriesTable();
    this.renderOverviewStats();
  },

  deleteCategory(catId) {
    if (confirm("Delete this category? Products in this category will remain.")) {
      window.Store.deleteCategory(catId);
      this.renderCategoriesTable();
      this.renderOverviewStats();
    }
  },

  // 4. OUTBOUND TRAFFIC & ANALYTICS
  renderAnalyticsTable() {
    const tbody = document.getElementById("analytics-clicks-body");
    if (!tbody || !window.Store) return;

    const clicks = window.Store.getClicks();
    if (clicks.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: #888; padding: 24px;">No outbound clicks recorded yet. Clicks will appear when visitors click 'Buy on AliExpress'.</td></tr>`;
      return;
    }

    const symbol = window.Store.getSettings().currencySymbol || "$";

    tbody.innerHTML = clicks.slice(0, 50).map(c => `
      <tr>
        <td><small>${new Date(c.timestamp).toLocaleString()}</small></td>
        <td><strong>${c.productName}</strong></td>
        <td><span class="badge-status active">${c.category || 'General'}</span></td>
        <td>${symbol}${c.price ? c.price.toFixed(2) : '-'}</td>
        <td><span class="badge-status pending">${c.source}</span></td>
        <td>
          <a href="${c.affiliateUrl}" target="_blank" rel="noopener" style="font-size: 12px; color: var(--ali-red); text-decoration: underline;">
            Outbound Link <i class="bi bi-box-arrow-up-right"></i>
          </a>
        </td>
      </tr>
    `).join("");
  },

  clearClickLogs() {
    if (confirm("Are you sure you want to clear outbound click history?")) {
      window.Store.saveClicks([]);
      this.renderAnalyticsTable();
      this.renderOverviewStats();
    }
  },

  // 5. AFFILIATE LINK & API CONFIG
  renderAffiliateConfig() {
    if (!window.Store) return;
    const settings = window.Store.getSettings();

    document.getElementById("aff-tracking-id").value = settings.affiliateTrackingId || "";
    document.getElementById("aff-sub-id").value = settings.affiliateSubId || "";

    const apiConfig = settings.aliExpressApiConfig || {};
    document.getElementById("api-app-key").value = apiConfig.appKey || "";
    document.getElementById("api-app-secret").value = apiConfig.appSecret || "";
    document.getElementById("api-tracking-id").value = apiConfig.trackingId || "";
  },

  saveAffiliateConfig() {
    const trackingId = document.getElementById("aff-tracking-id").value.trim();
    const subId = document.getElementById("aff-sub-id").value.trim();
    const appKey = document.getElementById("api-app-key").value.trim();
    const appSecret = document.getElementById("api-app-secret").value.trim();
    const apiTrackingId = document.getElementById("api-tracking-id").value.trim();

    window.Store.updateSettings({
      affiliateTrackingId: trackingId,
      affiliateSubId: subId,
      aliExpressApiConfig: {
        appKey,
        appSecret,
        trackingId: apiTrackingId,
        configured: !!(appKey && appSecret)
      }
    });

    alert("Affiliate settings saved successfully!");
  },

  testDeeplinkBuilder() {
    const inputUrl = document.getElementById("test-original-url").value.trim();
    const resultBox = document.getElementById("test-output-url");
    if (!inputUrl) {
      alert("Please enter an AliExpress product link to test.");
      return;
    }

    if (window.Tracker) {
      const built = window.Tracker.buildAffiliateUrl(inputUrl, "test_item", "admin_tester");
      resultBox.value = built;
    }
  },

  // 6. HERO BANNERS MANAGEMENT
  renderBannersTable() {
    const tbody = document.getElementById("banners-table-body");
    if (!tbody || !window.Store) return;

    const banners = window.Store.getBanners();
    tbody.innerHTML = banners.map((b, idx) => `
      <tr>
        <td><strong>#${idx + 1}</strong></td>
        <td>
          <img src="${b.imageUrl}" style="width: 80px; height: 45px; object-fit: cover; border-radius: 4px;" />
        </td>
        <td>
          <strong>${b.title.en || b.title}</strong>
          <div style="font-size: 11.5px; color: #666;">${b.subtitle.en || b.subtitle}</div>
        </td>
        <td><span class="badge-status active">${b.category}</span></td>
        <td>${b.active !== false ? '<span class="badge-status active">Active</span>' : '<span class="badge-status pending">Disabled</span>'}</td>
      </tr>
    `).join("");
  },

  // 7. SETTINGS & PIN FORM
  renderSettingsForm() {
    if (!window.Store) return;
    const settings = window.Store.getSettings();

    document.getElementById("setting-site-name").value = settings.siteName || "";
    document.getElementById("setting-currency").value = settings.currency || "USD";
    document.getElementById("setting-currency-symbol").value = settings.currencySymbol || "$";
    document.getElementById("setting-default-lang").value = settings.defaultLanguage || "en";
    document.getElementById("setting-disclosure").value = settings.disclosureNotice || "";
  },

  saveSiteSettings() {
    const siteName = document.getElementById("setting-site-name").value.trim();
    const currency = document.getElementById("setting-currency").value;
    const currencySymbol = document.getElementById("setting-currency-symbol").value.trim();
    const defaultLanguage = document.getElementById("setting-default-lang").value;
    const disclosureNotice = document.getElementById("setting-disclosure").value.trim();
    const newPin = document.getElementById("setting-admin-pin").value.trim();

    const updates = {
      siteName,
      currency,
      currencySymbol,
      defaultLanguage,
      disclosureNotice
    };

    if (newPin && newPin.length >= 4) {
      updates.adminPin = newPin;
      alert("Settings and Admin PIN updated successfully!");
    } else {
      alert("Settings updated successfully!");
    }

    window.Store.updateSettings(updates);
  },

  // EXPORT / IMPORT / RESET
  exportCatalog() {
    if (!window.Store) return;
    const jsonStr = window.Store.exportCatalogJSON();
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `aliexpress_affiliate_catalog_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  },

  importCatalogFile(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const res = window.Store.importCatalogJSON(event.target.result);
      if (res.success) {
        alert(`Successfully imported catalog! ${res.count} products loaded.`);
        this.renderDashboard();
      } else {
        alert("Import failed: " + res.error);
      }
    };
    reader.readAsText(file);
  },

  resetDemoCatalog() {
    if (confirm("Reset everything to original default AliExpress demo catalog? This will overwrite recent modifications.")) {
      window.Store.resetToDefault();
      alert("Reset complete! Default AliExpress catalog restored.");
      this.renderDashboard();
    }
  }
};

if (typeof window !== "undefined") {
  window.Admin = Admin;
}
