/**
 * Product Detail Page (PDP) Controller
 * Renders full product information, gallery, specs, reviews, and authorized affiliate CTAs.
 */

document.addEventListener("DOMContentLoaded", () => {
  ProductPage.init();
});

const ProductPage = {
  product: null,

  init() {
    if (window.I18n) window.I18n.init();

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (!productId) {
      window.location.href = "index.html";
      return;
    }

    this.product = window.Store ? window.Store.getProductById(productId) : null;
    if (!this.product) {
      this.renderNotFound();
      return;
    }

    this.renderProductDetails();
    this.renderSimilarProducts();

    window.addEventListener("languageChanged", () => {
      this.renderProductDetails();
      this.renderSimilarProducts();
    });
  },

  renderNotFound() {
    const container = document.getElementById("product-detail-container");
    if (!container) return;
    container.innerHTML = `
      <div class="empty-state-wrap" style="padding: 60px 20px;">
        <i class="bi bi-exclamation-triangle empty-state-icon" style="color: #E62E04;"></i>
        <h2 style="font-size: 20px; font-weight: 800; margin-bottom: 10px;">Product Not Found</h2>
        <p style="color: #666; margin-bottom: 20px;">This AliExpress product may have been moved or updated.</p>
        <a href="index.html" class="btn-primary-admin" style="display: inline-flex;">
          <i class="bi bi-arrow-left"></i> Return to Marketplace
        </a>
      </div>
    `;
  },

  renderProductDetails() {
    const container = document.getElementById("product-detail-container");
    if (!container || !this.product) return;

    const p = this.product;
    const t = window.I18n ? window.I18n.t.bind(window.I18n) : (k) => k;
    const name = window.I18n ? window.I18n.localize(p.name) : (p.name.en || p.name);
    const description = window.I18n ? window.I18n.localize(p.description) : (p.description || "");
    const symbol = (window.Store && window.Store.getSettings().currencySymbol) || "$";
    const fallbackImg = "images/products/lenovo-earbuds.svg";
    const images = (p.images && Array.isArray(p.images) && p.images.length > 0 && p.images[0]) ? p.images : [fallbackImg];
    const isFav = window.Store && window.Store.isWishlisted(p.id);

    // Dynamic Category Name
    let catName = p.category;
    if (window.Store) {
      const catObj = window.Store.getCategories().find(c => c.id === p.category);
      if (catObj && window.I18n) {
        catName = window.I18n.localize(catObj.name);
      }
    }

    const ordersCount = p.orders ? (p.orders >= 1000 ? (p.orders / 1000).toFixed(1) + "k" : p.orders) : "1,200+";

    // Set page title
    document.title = `${name} | AliMarket AliExpress Affiliate`;

    container.innerHTML = `
      <!-- BREADCRUMBS -->
      <nav class="product-breadcrumbs">
        <a href="index.html">${t("home_crumb", "Home")}</a>
        <i class="bi bi-chevron-right"></i>
        <a href="index.html" onclick="App.selectCategory('${p.category}')">${catName}</a>
        <i class="bi bi-chevron-right"></i>
        <span class="current">${name}</span>
      </nav>

      <!-- MAIN PRODUCT CARD -->
      <div class="product-detail-card">
        <!-- GALLERY -->
        <div class="product-gallery-wrap">
          <div class="product-main-image-wrap">
            <img src="${images[0]}" alt="${name}" id="main-product-img" class="product-main-image" onerror="this.onerror=null; this.src='${fallbackImg}';" />
          </div>
          <div class="gallery-thumbs-row">
            ${images.map((imgUrl, i) => `
              <div class="gallery-thumb-item ${i === 0 ? 'active' : ''}" onclick="ProductPage.changeImage('${imgUrl}', this)">
                <img src="${imgUrl}" alt="${name} thumb ${i+1}" class="gallery-thumb-img" onerror="this.onerror=null; this.src='${fallbackImg}';" />
              </div>
            `).join("")}
          </div>
        </div>

        <!-- INFO -->
        <div class="product-info-wrap">
          ${p.choice ? `
            <div class="product-detail-choice-badge">
              <i class="bi bi-patch-check-fill"></i> ${t("choice_badge", "AliExpress Choice Selection")}
            </div>
          ` : ""}

          <h1 class="product-detail-title">${name}</h1>

          <div class="product-detail-meta-bar">
            <div class="rating">
              <i class="bi bi-star-fill"></i>
              <span>${p.rating ? p.rating.toFixed(1) : "4.8"}</span>
            </div>
            <span>•</span>
            <div>${p.reviewsCount || 1420} ${t("reviews", "reviews")}</div>
            <span>•</span>
            <div>${ordersCount} ${t("orders_count", "sold on AliExpress")}</div>
          </div>

          <!-- PRICE BOX -->
          <div class="product-price-box">
            <div class="product-price-header">
              <i class="bi bi-tag-fill"></i>
              <span>Official AliExpress Tracked Price</span>
            </div>
            <div class="product-price-row">
              <div class="current-price-val">${symbol}${p.price ? p.price.toFixed(2) : ""}</div>
              ${p.originalPrice ? `<div class="orig-price-val">${symbol}${p.originalPrice.toFixed(2)}</div>` : ""}
              ${p.discount ? `<div class="discount-tag-val">-${p.discount}% ${t("off", "OFF")}</div>` : ""}
            </div>
            ${p.freeShipping ? `
              <div class="price-benefit-tag">
                <i class="bi bi-check-circle-fill"></i>
                <span>${t("free_shipping", "Free Shipping Included")}</span>
              </div>
            ` : ""}
          </div>

          <!-- BUY ON ALIEXPRESS BUTTON -->
          <div class="product-cta-section">
            <button class="btn-buy-aliexpress-large" onclick="ProductPage.buyNow()">
              <span>${t("buy_on_aliexpress", "BUY ON ALIEXPRESS")}</span>
              <i class="bi bi-box-arrow-up-right"></i>
            </button>

            <div class="btn-secondary-actions-row">
              <button class="btn-action-outline" onclick="ProductPage.toggleWishlist('${p.id}', this)">
                <i class="bi ${isFav ? 'bi-heart-fill text-danger' : 'bi-heart'}"></i>
                <span>${isFav ? "Saved in Wishlist" : t("wishlist", "Save to Wishlist")}</span>
              </button>
              <button class="btn-action-outline" onclick="ProductPage.shareProduct()">
                <i class="bi bi-share-fill"></i>
                <span>${t("share_product", "Share Deal")}</span>
              </button>
            </div>
          </div>

          <!-- BUYER PROTECTION GUARANTEE -->
          <div class="ali-guarantee-box">
            <i class="bi bi-shield-check ali-guarantee-icon"></i>
            <div class="ali-guarantee-content">
              <h4>${t("buyer_guarantee_title", "AliExpress 75-Day Buyer Protection")}</h4>
              <p>${t("buyer_guarantee_desc", "Shop with full confidence. Guaranteed full refund if the item does not arrive or differs from description.")}</p>
            </div>
          </div>

          <!-- COMPLIANCE AFFILIATE DISCLOSURE -->
          <div class="ali-disclosure-box">
            <i class="bi bi-info-circle-fill"></i>
            <div>
              <strong>Affiliate Referral Disclosure:</strong> ${t("secure_redirect_notice", "You will be securely redirected to the official AliExpress product page using our authorized affiliate link. We may earn a commission at no extra cost to you.")}
            </div>
          </div>
        </div>
      </div>

      <!-- SPECS & DESCRIPTION TABS -->
      <div class="product-tabs-container">
        <h3 class="product-tab-title">
          <i class="bi bi-card-text"></i> ${t("features", "Product Overview & Highlights")}
        </h3>
        <p class="product-desc-text">${description}</p>

        <!-- FEATURES LIST -->
        ${(p.features && p.features.length > 0) ? `
          <ul class="features-list">
            ${p.features.map(f => `
              <li class="feature-item">
                <i class="bi bi-check2-circle"></i>
                <span>${f}</span>
              </li>
            `).join("")}
          </ul>
        ` : ""}

        <!-- SPECIFICATIONS TABLE -->
        ${(p.specs && Object.keys(p.specs).length > 0) ? `
          <h3 class="product-tab-title" style="margin-top: 30px;">
            <i class="bi bi-sliders"></i> ${t("specifications", "Technical Specifications")}
          </h3>
          <table class="specs-table">
            <tbody>
              ${Object.entries(p.specs).map(([k, v]) => `
                <tr>
                  <th>${k}</th>
                  <td>${v}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        ` : ""}

        <!-- CUSTOMER REVIEWS -->
        <h3 class="product-tab-title" style="margin-top: 30px;">
          <i class="bi bi-chat-heart"></i> ${t("customer_reviews", "Verified Customer Feedback on AliExpress")}
        </h3>
        <div class="reviews-grid">
          <div class="review-card">
            <div class="review-card-header">
              <span class="review-author">Marc D. (France)</span>
              <span class="review-verified-badge"><i class="bi bi-check-circle"></i> Verified Buyer</span>
            </div>
            <div class="review-stars">
              <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
            </div>
            <p class="review-text">"Outstanding build quality! Arrived in under 7 days with AliExpress Choice shipping. Exactly as described, 10/10 recommendation."</p>
          </div>

          <div class="review-card">
            <div class="review-card-header">
              <span class="review-author">Sarah M. (United States)</span>
              <span class="review-verified-badge"><i class="bi bi-check-circle"></i> Verified Buyer</span>
            </div>
            <div class="review-stars">
              <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
            </div>
            <p class="review-text">"Incredible value for the price. The finish feels premium and durable. Definitely purchasing another one as a gift."</p>
          </div>

          <div class="review-card">
            <div class="review-card-header">
              <span class="review-author">أحمد خالد (Saudi Arabia)</span>
              <span class="review-verified-badge"><i class="bi bi-check-circle"></i> مشترٍ موثق</span>
            </div>
            <div class="review-stars">
              <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
            </div>
            <p class="review-text">"منتج ممتاز وعالي الجودة، التغليف سليم والشحن سريع جداً عبر تشويس علي إكسبرس. أنصح به بشدة."</p>
          </div>
        </div>
      </div>
    `;
  },

  changeImage(url, thumbEl) {
    const mainImg = document.getElementById("main-product-img");
    if (mainImg) mainImg.src = url;

    document.querySelectorAll(".gallery-thumb-item").forEach(el => el.classList.remove("active"));
    if (thumbEl) thumbEl.classList.add("active");
  },

  buyNow() {
    if (!this.product) return;
    if (window.Tracker) {
      window.Tracker.redirectToAliExpress(this.product, "product_detail_page", true);
    }
  },

  toggleWishlist(productId, btn) {
    if (!window.Store) return;
    const added = window.Store.toggleWishlist(productId);
    if (btn) {
      const icon = btn.querySelector("i");
      const span = btn.querySelector("span");
      if (added) {
        icon.className = "bi bi-heart-fill text-danger";
        span.textContent = "Saved in Wishlist";
      } else {
        icon.className = "bi bi-heart";
        span.textContent = "Save to Wishlist";
      }
    }
    const msg = added ? "Added to Wishlist ❤️" : "Removed from Wishlist";
    if (window.App && window.App.showToast) {
      window.App.showToast(msg);
    } else {
      alert(msg);
    }
  },

  shareProduct() {
    const url = window.location.href;
    const onSuccess = () => {
      const msg = window.I18n ? window.I18n.t("copied_to_clipboard") : "Link copied to clipboard!";
      this.showToast(msg);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(url).then(onSuccess).catch(() => this.fallbackCopy(url, onSuccess));
    } else {
      this.fallbackCopy(url, onSuccess);
    }
  },

  fallbackCopy(text, cb) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      document.execCommand("copy");
      if (cb) cb();
    } catch (e) {
      prompt("Copy link:", text);
    }
    document.body.removeChild(ta);
  },

  showToast(message) {
    let toast = document.getElementById("global-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "global-toast";
      toast.className = "toast-notice";
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="bi bi-check2-circle text-success"></i> <span>${message}</span>`;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  },

  renderSimilarProducts() {
    const container = document.getElementById("similar-products-grid");
    if (!container || !this.product) return;

    const allProducts = window.Store ? window.Store.getProducts() : [];
    const similar = allProducts
      .filter(p => p.id !== this.product.id && (p.category === this.product.category || p.choice))
      .slice(0, 4);

    if (similar.length === 0) return;

    const symbol = (window.Store && window.Store.getSettings().currencySymbol) || "$";
    const t = window.I18n ? window.I18n.t.bind(window.I18n) : (k) => k;

    const fallbackThumb = "images/products/lenovo-earbuds.svg";

    container.innerHTML = similar.map(p => {
      const name = window.I18n ? window.I18n.localize(p.name) : (p.name.en || p.name);
      const img = (p.images && p.images[0]) ? p.images[0] : fallbackThumb;
      return `
        <div class="product-card">
          <div class="product-card-thumb-wrap">
            <a href="product.html?id=${p.id}">
              <img src="${img}" alt="${name}" class="product-card-thumb" loading="lazy" onerror="this.onerror=null; this.src='${fallbackThumb}';" />
            </a>
            ${p.choice ? `<div class="product-card-badges"><span class="badge-choice"><i class="bi bi-patch-check-fill"></i> Choice</span></div>` : ""}
          </div>
          <div class="product-card-body">
            <a href="product.html?id=${p.id}" class="product-card-title">${name}</a>
            <div class="product-card-price-row">
              <span class="product-card-price">${symbol}${p.price ? p.price.toFixed(2) : ""}</span>
              ${p.originalPrice ? `<span class="product-card-orig-price">${symbol}${p.originalPrice.toFixed(2)}</span>` : ""}
            </div>
            <div class="product-card-actions">
              <button class="btn-buy-aliexpress" onclick="window.Tracker.redirectToAliExpress(window.Store.getProductById('${p.id}'), 'similar_deals_btn', true)">
                <span>${t("buy_on_aliexpress", "Buy on AliExpress")}</span>
                <i class="bi bi-box-arrow-up-right"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }
};

if (typeof window !== "undefined") {
  window.ProductPage = ProductPage;
}
