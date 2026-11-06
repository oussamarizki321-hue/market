/**
 * Store Engine: Manages local data persistence, CRUD operations,
 * Outbound Click Analytics, and catalog synchronization.
 */

const Store = {
  KEYS: {
    PRODUCTS: "ali_products_data_v1",
    CATEGORIES: "ali_categories_data_v1",
    BANNERS: "ali_banners_data_v1",
    SETTINGS: "ali_settings_data_v1",
    CLICKS: "ali_clicks_log_v1",
    WISHLIST: "ali_wishlist_ids_v1"
  },

  init() {
    // If first load or empty, populate with initial data
    if (!localStorage.getItem(this.KEYS.PRODUCTS)) {
      this.saveProducts(window.INITIAL_PRODUCTS || []);
    } else {
      // Auto-upgrade product images and descriptions to exact matching catalog assets
      const currentProducts = this.getProducts();
      let repaired = false;
      const initialMap = {};
      const fullInitialList = [...(window.INITIAL_PRODUCTS || []), ...(window.VIRAL_ALIEXPRESS_CATALOG || [])];
      
      fullInitialList.forEach(p => { initialMap[p.id] = p; });

      // 1. Upgrade images and Arabic descriptions if using legacy or unsplash paths
      currentProducts.forEach(p => {
        const reference = initialMap[p.id];
        if (reference) {
          const hasOldImage = !p.images || !Array.isArray(p.images) || p.images.length === 0 || 
                              p.images[0].includes("unsplash.com") || p.images[0].startsWith("http");
          if (hasOldImage && reference.images && reference.images.length > 0) {
            p.images = [...reference.images];
            repaired = true;
          }
          // Also sync Arabic name and description if missing or out of date
          if (reference.name && reference.name.ar && (!p.name || !p.name.ar || p.name.ar !== reference.name.ar)) {
            p.name = { ...(p.name || {}), ar: reference.name.ar };
            repaired = true;
          }
          if (reference.description && (!p.description || p.description !== reference.description)) {
            p.description = reference.description;
            p.specs = reference.specs || p.specs;
            p.features = reference.features || p.features;
            repaired = true;
          }
        }
      });

      // 2. Add new catalog expansions if not already present
      const existingIds = new Set(currentProducts.map(p => p.id));
      fullInitialList.forEach(p => {
        if (!existingIds.has(p.id)) {
          currentProducts.push(p);
          existingIds.add(p.id);
          repaired = true;
        }
      });

      if (repaired) {
        this.saveProducts(currentProducts);
      }
    }
    if (!localStorage.getItem(this.KEYS.CATEGORIES)) {
      this.saveCategories(window.INITIAL_CATEGORIES || []);
    } else {
      // Sync Arabic category names
      const cats = this.getCategories();
      if (window.INITIAL_CATEGORIES && Array.isArray(window.INITIAL_CATEGORIES)) {
        const catMap = {};
        window.INITIAL_CATEGORIES.forEach(c => { catMap[c.id] = c; });
        let updatedCats = false;
        cats.forEach(c => {
          if (catMap[c.id] && catMap[c.id].name && catMap[c.id].name.ar) {
            c.name = catMap[c.id].name;
            updatedCats = true;
          }
        });
        if (updatedCats) this.saveCategories(cats);
      }
    }
    if (!localStorage.getItem(this.KEYS.BANNERS)) {
      this.saveBanners(window.INITIAL_BANNERS || []);
    } else {
      // Sync Arabic banners
      if (window.INITIAL_BANNERS && Array.isArray(window.INITIAL_BANNERS)) {
        this.saveBanners(window.INITIAL_BANNERS);
      }
    }
    if (!localStorage.getItem(this.KEYS.SETTINGS)) {
      this.saveSettings(window.INITIAL_SETTINGS || {});
    } else {
      // Ensure adminPin is updated to requested PIN marketali2026 if it was default
      const currentSettings = this.getSettings();
      if (!currentSettings.adminPin || currentSettings.adminPin === "admin123") {
        currentSettings.adminPin = "marketali2026";
        this.saveSettings(currentSettings);
      }
    }
    if (!localStorage.getItem(this.KEYS.CLICKS)) {
      this.saveClicks([]);
    }
    if (!localStorage.getItem(this.KEYS.WISHLIST)) {
      this.saveWishlist([]);
    }
  },

  // PRODUCTS
  getProducts() {
    try {
      const data = localStorage.getItem(this.KEYS.PRODUCTS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Error reading products:", e);
      return [];
    }
  },

  getProductById(id) {
    const products = this.getProducts();
    return products.find(p => p.id === id) || null;
  },

  saveProducts(products) {
    localStorage.setItem(this.KEYS.PRODUCTS, JSON.stringify(products));
  },

  addProduct(product) {
    const products = this.getProducts();
    if (!product.id) {
      product.id = "ali-prod-" + Date.now();
    }
    products.unshift(product);
    this.saveProducts(products);
    return product;
  },

  updateProduct(id, updatedFields) {
    const products = this.getProducts();
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
      products[index] = { ...products[index], ...updatedFields };
      this.saveProducts(products);
      return products[index];
    }
    return null;
  },

  deleteProduct(id) {
    let products = this.getProducts();
    products = products.filter(p => p.id !== id);
    this.saveProducts(products);
    return true;
  },

  // CATEGORIES
  getCategories() {
    try {
      const data = localStorage.getItem(this.KEYS.CATEGORIES);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Error reading categories:", e);
      return [];
    }
  },

  saveCategories(categories) {
    localStorage.setItem(this.KEYS.CATEGORIES, JSON.stringify(categories));
  },

  addCategory(cat) {
    const categories = this.getCategories();
    if (!cat.id) {
      cat.id = "cat-" + Date.now();
    }
    categories.push(cat);
    this.saveCategories(categories);
    return cat;
  },

  updateCategory(id, updatedFields) {
    const categories = this.getCategories();
    const index = categories.findIndex(c => c.id === id);
    if (index !== -1) {
      categories[index] = { ...categories[index], ...updatedFields };
      this.saveCategories(categories);
      return categories[index];
    }
    return null;
  },

  deleteCategory(id) {
    let categories = this.getCategories();
    categories = categories.filter(c => c.id !== id);
    this.saveCategories(categories);
    return true;
  },

  // BANNERS
  getBanners() {
    try {
      const data = localStorage.getItem(this.KEYS.BANNERS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  saveBanners(banners) {
    localStorage.setItem(this.KEYS.BANNERS, JSON.stringify(banners));
  },

  // SETTINGS
  getSettings() {
    try {
      const data = localStorage.getItem(this.KEYS.SETTINGS);
      return data ? JSON.parse(data) : (window.INITIAL_SETTINGS || {});
    } catch (e) {
      return window.INITIAL_SETTINGS || {};
    }
  },

  saveSettings(settings) {
    localStorage.setItem(this.KEYS.SETTINGS, JSON.stringify(settings));
  },

  updateSettings(partial) {
    const current = this.getSettings();
    const updated = { ...current, ...partial };
    this.saveSettings(updated);
    return updated;
  },

  // CLICKS TRACKING & ANALYTICS
  getClicks() {
    try {
      const data = localStorage.getItem(this.KEYS.CLICKS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  saveClicks(clicks) {
    localStorage.setItem(this.KEYS.CLICKS, JSON.stringify(clicks));
  },

  logAffiliateClick(product, source = "product_card") {
    if (!product) return null;
    const clicks = this.getClicks();
    const clickEvent = {
      id: "click-" + Date.now() + "-" + Math.random().toString(36).substr(2, 5),
      productId: product.id,
      productName: typeof product.name === "object" ? (product.name.en || Object.values(product.name)[0]) : product.name,
      category: product.category,
      price: product.price,
      affiliateUrl: product.affiliateUrl,
      source: source,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer || "direct"
    };

    // Keep up to 2,000 most recent click records
    clicks.unshift(clickEvent);
    if (clicks.length > 2000) clicks.pop();
    this.saveClicks(clicks);

    // Also update product's internal click count
    const products = this.getProducts();
    const idx = products.findIndex(p => p.id === product.id);
    if (idx !== -1) {
      products[idx].clicks = (products[idx].clicks || 0) + 1;
      this.saveProducts(products);
    }

    return clickEvent;
  },

  getAnalyticsSummary() {
    const clicks = this.getClicks();
    const products = this.getProducts();
    const totalClicks = clicks.length;

    // Clicks per product count
    const productClickMap = {};
    const categoryClickMap = {};
    const dailyClickMap = {};

    clicks.forEach(c => {
      // Per product
      productClickMap[c.productId] = (productClickMap[c.productId] || 0) + 1;

      // Per category
      if (c.category) {
        categoryClickMap[c.category] = (categoryClickMap[c.category] || 0) + 1;
      }

      // Per date
      const dateKey = c.timestamp.split("T")[0];
      dailyClickMap[dateKey] = (dailyClickMap[dateKey] || 0) + 1;
    });

    // Top products by clicks
    const topProducts = products
      .map(p => ({
        ...p,
        totalClicks: productClickMap[p.id] || p.clicks || 0
      }))
      .sort((a, b) => b.totalClicks - a.totalClicks)
      .slice(0, 8);

    return {
      totalClicks,
      productClickMap,
      categoryClickMap,
      dailyClickMap,
      topProducts,
      recentClicks: clicks.slice(0, 25)
    };
  },

  // WISHLIST
  getWishlist() {
    try {
      const data = localStorage.getItem(this.KEYS.WISHLIST);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  saveWishlist(list) {
    localStorage.setItem(this.KEYS.WISHLIST, JSON.stringify(list));
  },

  toggleWishlist(productId) {
    const list = this.getWishlist();
    const index = list.indexOf(productId);
    let added = false;
    if (index === -1) {
      list.push(productId);
      added = true;
    } else {
      list.splice(index, 1);
      added = false;
    }
    this.saveWishlist(list);
    window.dispatchEvent(new CustomEvent("wishlistUpdated", { detail: { list, added, productId } }));
    return added;
  },

  isWishlisted(productId) {
    const list = this.getWishlist();
    return list.includes(productId);
  },

  // EXPORT / IMPORT / RESET
  exportCatalogJSON() {
    const exportData = {
      version: "1.0",
      exportedAt: new Date().toISOString(),
      products: this.getProducts(),
      categories: this.getCategories(),
      banners: this.getBanners(),
      settings: this.getSettings()
    };
    return JSON.stringify(exportData, null, 2);
  },

  importCatalogJSON(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.products && Array.isArray(parsed.products)) {
        this.saveProducts(parsed.products);
      }
      if (parsed.categories && Array.isArray(parsed.categories)) {
        this.saveCategories(parsed.categories);
      }
      if (parsed.banners && Array.isArray(parsed.banners)) {
        this.saveBanners(parsed.banners);
      }
      if (parsed.settings && typeof parsed.settings === "object") {
        this.saveSettings(parsed.settings);
      }
      return { success: true, count: (parsed.products || []).length };
    } catch (e) {
      return { success: false, error: e.message };
    }
  },

  resetToDefault() {
    this.saveProducts(window.INITIAL_PRODUCTS || []);
    this.saveCategories(window.INITIAL_CATEGORIES || []);
    this.saveBanners(window.INITIAL_BANNERS || []);
    this.saveSettings(window.INITIAL_SETTINGS || {});
    this.saveClicks([]);
    this.saveWishlist([]);
    return true;
  }
};

// Initialize on script load
if (typeof window !== "undefined") {
  window.Store = Store;
  Store.init();
}
