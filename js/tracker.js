/**
 * Outbound Click Tracker & AliExpress Affiliate Link Builder
 * Ensures valid, authorized tracking parameters are attached and outbound events logged.
 */

const Tracker = {
  /**
   * Generates a fully qualified AliExpress affiliate tracking link
   */
  buildAffiliateUrl(originalUrl, productId, customSubId = "") {
    if (!originalUrl) return "#";

    const settings = window.Store ? window.Store.getSettings() : {};
    const trackingId = settings.affiliateTrackingId || "alimarket_affiliate";
    const subId = customSubId || settings.affiliateSubId || "web_portal";

    try {
      // Check if URL is valid
      const url = new URL(originalUrl);

      // If it's already an authorized shortlink like s.click.aliexpress.com, keep it but append sub_id if missing
      if (url.hostname.includes("click.aliexpress.com")) {
        if (!url.searchParams.has("sub_id")) {
          url.searchParams.set("sub_id", subId);
        }
        return url.toString();
      }

      // If standard aliexpress.com item page, ensure tracking parameters are appended
      if (url.hostname.includes("aliexpress.com")) {
        if (!url.searchParams.has("aff_fcid")) {
          url.searchParams.set("aff_fcid", trackingId);
        }
        if (!url.searchParams.has("aff_platform")) {
          url.searchParams.set("aff_platform", "portals-tool");
        }
        if (!url.searchParams.has("sk")) {
          url.searchParams.set("sk", "_" + trackingId);
        }
        if (!url.searchParams.has("aff_trace_key")) {
          url.searchParams.set("aff_trace_key", trackingId + "_" + (productId || "direct"));
        }
        url.searchParams.set("sub_id", subId);
        return url.toString();
      }

      return originalUrl;
    } catch (e) {
      // Fallback for relative or non-standard URLs
      return originalUrl;
    }
  },

  /**
   * Tracks an outbound affiliate click event and opens the AliExpress product in a new tab
   * Optionally shows a branded interstitial redirect modal.
   */
  redirectToAliExpress(product, source = "product_card", showModal = true) {
    if (!product) return;

    // 1. Log outbound click in store
    if (window.Store) {
      window.Store.logAffiliateClick(product, source);
    }

    // 2. Build authorized affiliate link
    const targetUrl = this.buildAffiliateUrl(product.affiliateUrl, product.id, source);

    // 3. If modal requested, show beautiful interstitial modal
    if (showModal && typeof this.showRedirectModal === "function") {
      this.showRedirectModal(product, targetUrl);
    } else {
      // Direct opening in a new tab
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    }
  },

  showRedirectModal(product, targetUrl) {
    let modal = document.getElementById("ali-redirect-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "ali-redirect-modal";
      modal.className = "ali-modal-backdrop";
      document.body.appendChild(modal);
    }

    const t = window.I18n ? window.I18n.t.bind(window.I18n) : (k) => k;
    const prodName = window.I18n ? window.I18n.localize(product.name) : (product.name.en || product.name);
    const prodImg = (product.images && product.images[0]) || "";
    const symbol = (window.Store && window.Store.getSettings().currencySymbol) || "$";

    modal.innerHTML = `
      <div class="ali-redirect-card">
        <button class="ali-modal-close" onclick="Tracker.closeModal()">&times;</button>
        <div class="ali-redirect-header">
          <div class="ali-brand-icon">
            <span class="ali-logo-badge">AliExpress</span>
            <i class="bi bi-box-arrow-up-right"></i>
          </div>
          <h3 class="ali-redirect-title">${t("redirecting_title", "Connecting to AliExpress...")}</h3>
          <p class="ali-redirect-subtitle">${t("redirecting_desc", "Redirecting you safely to the official seller page with verified tracking.")}</p>
        </div>

        <div class="ali-redirect-item-preview">
          <img src="${prodImg}" alt="${prodName}" class="ali-redirect-thumb" />
          <div class="ali-redirect-item-info">
            <div class="ali-redirect-item-name">${prodName}</div>
            <div class="ali-redirect-price-row">
              <span class="ali-redirect-price">${symbol}${product.price ? product.price.toFixed(2) : ""}</span>
              ${product.originalPrice ? `<span class="ali-redirect-original">${symbol}${product.originalPrice.toFixed(2)}</span>` : ""}
              ${product.discount ? `<span class="ali-redirect-discount">-${product.discount}%</span>` : ""}
            </div>
            <div class="ali-redirect-badge-row">
              ${product.choice ? `<span class="badge-choice"><i class="bi bi-patch-check-fill"></i> Choice</span>` : ""}
              ${product.freeShipping ? `<span class="badge-shipping"><i class="bi bi-truck"></i> Free Shipping</span>` : ""}
            </div>
          </div>
        </div>

        <div class="ali-redirect-progress">
          <div class="ali-progress-bar" id="ali-modal-bar"></div>
        </div>

        <div class="ali-redirect-actions">
          <a href="${targetUrl}" target="_blank" rel="noopener noreferrer" class="btn-proceed-aliexpress" id="ali-btn-direct" onclick="Tracker.closeModal()">
            <span>${t("proceed_now", "Proceed to AliExpress Now")}</span>
            <i class="bi bi-arrow-right"></i>
          </a>
        </div>

        <div class="ali-redirect-footer-note">
          <i class="bi bi-shield-check text-success"></i>
          <span>Official Authorized Affiliate Link • 75-Day Buyer Protection</span>
        </div>
      </div>
    `;

    modal.classList.add("active");

    // Animate progress bar and trigger redirect
    const bar = document.getElementById("ali-modal-bar");
    if (bar) {
      setTimeout(() => {
        bar.style.width = "100%";
      }, 50);
    }

    // Auto redirect after 1.8 seconds
    if (this._redirectTimeout) clearTimeout(this._redirectTimeout);
    this._redirectTimeout = setTimeout(() => {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
      setTimeout(() => {
        this.closeModal();
      }, 500);
    }, 1800);
  },

  closeModal() {
    if (this._redirectTimeout) clearTimeout(this._redirectTimeout);
    const modal = document.getElementById("ali-redirect-modal");
    if (modal) {
      modal.classList.remove("active");
    }
  }
};

if (typeof window !== "undefined") {
  window.Tracker = Tracker;
}
