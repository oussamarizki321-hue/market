/**
 * Internationalization (i18n) & RTL Management
 * Arabic (ar) as the Primary & Exclusive Language
 */

const TRANSLATIONS = {
  ar: {
    // Top Bar
    affiliate_disclosure_short: "إفصاح الشفافية التسويقية: قد نحصل على عمولة رسمية عند إتمام الشراء عبر علي إكسبرس دون أي تكلفة إضافية عليك.",
    learn_more: "تعرف على المزيد",
    admin_access: "لوحة التحكم",
    buyer_protection: "حماية المشتري المعتمدة من علي إكسبرس",

    // Header
    search_placeholder: "ابحث في آلاف منتجات وعروض علي إكسبرس الحصرية...",
    search_btn: "بحث",
    all_categories: "جميع الأقسام",
    categories_menu: "الأقسام",
    super_deals: "أقوى العروض SuperDeals",
    aliexpress_choice: "مختارات Choice المعتمدة",
    flash_sales: "عروض البرق الفورية",
    wishlist: "المفضلة",
    items: "منتجات",

    // Hero
    ends_in: "ينتهي العرض خلال",
    shop_now: "تسوق الآن على AliExpress",
    explore_deals: "استكشف العروض",

    // Filter Bar & Sorting
    filters: "تصفية المنتجات",
    sort_by: "ترتيب حسب",
    sort_popular: "الأكثر شعبية ومبيعاً",
    sort_price_low: "السعر: من الأقل للأعلى",
    sort_price_high: "السعر: من الأعلى للأقل",
    sort_rating: "الأعلى تقييماً",
    sort_discount: "أعلى نسبة خصم",
    price_range: "نطاق السعر ($)",
    min_price: "الحد الأدنى",
    max_price: "الحد الأقصى",
    apply_filter: "تطبيق الفلتر",
    clear_all: "مسح الفلاتر",
    rating_filter: "تقييم المشترين",
    up_rating: "نجوم فما فوق",
    free_shipping_only: "شحن مجاني فقط",
    choice_only: "منتجات Choice فقط",
    results_found: "منتج متوفر",
    no_products: "لم نتمكن من العثور على منتجات مطابقة لبحثك. يرجى تجربة كلمات أو فلاتر أخرى.",

    // Product Card
    buy_on_aliexpress: "الشراء من علي إكسبرس",
    view_details: "تفاصيل المنتج",
    off: "خصم",
    orders_count: "تم بيعها",
    free_shipping: "شحن مجاني",
    choice_badge: "Choice",
    reviews: "تقييم",

    // Product Detail Page
    back_to_shop: "العودة للمنتجات",
    home_crumb: "الرئيسية",
    in_stock: "متوفر على AliExpress",
    guaranteed_safe: "رابط معتمد رسمي من برنامج الشركاء",
    specifications: "المواصفات الفنية والتفاصيل",
    features: "أهم مميزات ومواصفات المنتج",
    customer_reviews: "آراء وتقييمات المشترين",
    buyer_guarantee_title: "ضمان حماية المشتري لمدة 75 يوماً من علي إكسبرس",
    buyer_guarantee_desc: "تسوق براحة وأمان تامين. يحق لك استرداد كامل للمبلغ إذا لم يتم تسليم الطلب أو كان المنتج مختلفاً عن الوصف المذكور.",
    secure_redirect_notice: "سيتم تحويلك مباشرة وبأمان تام إلى صفحة المنتج الرسمية على موقع أو تطبيق علي إكسبرس عبر رابط الإحالة المعتمد.",
    share_product: "مشاركة العرض",
    copied_to_clipboard: "تم نسخ رابط العرض إلى الحافظة بنجاح!",
    similar_products: "منتجات مشابهة قد تنال إعجابك",

    // Redirect Modal
    redirecting_title: "جاري نقلك بأمان إلى AliExpress...",
    redirecting_desc: "يتم توجيهك الآن إلى صفحة المنتج الرسمية لدى البائع المعتمد بأفضل سعر متتبع.",
    proceed_now: "الانتقال فوراً إلى AliExpress",
    redirecting_notice: "إذا لم يتم نقلك تلقائياً خلال ثانيتين، انقر فوق الزر أعلاه.",

    // Footer
    about_title: "عن المنصة التسويقية",
    about_text: "منصة تسوق وإحالة تسويقية مستقلة متخصصة في اكتشاف أفضل المنتجات والعروض الحصرية ومختارات Choice مباشرة من موقع علي إكسبرس. نحن لا نملك مخزوناً ولا نقوم بمعالجة الطلبات أو الدفع - عملية الشراء الآمنة تتم بالكامل على موقع AliExpress الرسمي.",
    quick_links: "روابط سريعة",
    legal_title: "الشفافية والمصداقية",
    terms_disclosure: "إخلاء المسؤولية وسياسة الإحالة",
    privacy_policy: "سياسة الخصوصية",
    contact_support: "تواصل واستفسارات",
    copyright: "جميع العلامات التجارية وحقوق أسماء المنتجات هي ملك لشركة AliExpress ومجموعة Alibaba. جميع الحقوق محفوظة.",

    // Admin Dashboard
    dashboard: "لوحة التحكم الرئيسية",
    products_mgmt: "إدارة المنتجات",
    categories_mgmt: "إدارة الأقسام",
    analytics_mgmt: "تحليلات النقرات والإحالات",
    affiliate_mgmt: "إعدادات الشركاء والروابط",
    banners_mgmt: "بنرات الصفحة الرئيسية",
    settings_mgmt: "إعدادات الموقع والأمان",
    logout: "تسجيل الخروج",
    login_title: "تسجيل الدخول إلى لوحة التحكم",
    enter_pin: "أدخل رمز المرور السري (PIN)",
    login_btn: "دخول لوحة الإدارة",
    invalid_pin: "رمز المرور غير صحيح. يرجى المحاولة مرة أخرى.",
    total_products: "إجمالي المنتجات",
    total_clicks: "إجمالي النقرات الصادرة",
    active_categories: "الأقسام النشطة",
    conversion_potential: "نقرات الإحالة المسجلة",
    add_new_product: "إضافة منتج جديد",
    edit_product: "تعديل المنتج",
    delete: "حذف",
    save_changes: "حفظ التعديلات",
    cancel: "إلغاء",
    actions: "الإجراءات",
    bulk_export: "تصدير الكتالوج (JSON)",
    bulk_import: "استيراد منتجات",
    reset_demo: "استعادة الكتالوج الافتراضي"
  },

  en: {
    // Top Bar
    affiliate_disclosure_short: "Affiliate Disclosure: We earn commissions from qualified AliExpress purchases at no extra cost to you.",
    learn_more: "Learn More",
    admin_access: "Admin Dashboard",
    buyer_protection: "AliExpress Buyer Protection Guaranteed",

    // Header
    search_placeholder: "Search over 100,000+ AliExpress deals, gadgets, fashion...",
    search_btn: "Search",
    all_categories: "All Categories",
    categories_menu: "Categories",
    super_deals: "SuperDeals",
    aliexpress_choice: "Choice Selection",
    flash_sales: "Flash Deals",
    wishlist: "Wishlist",
    items: "items",

    // Hero
    ends_in: "Ends in",
    shop_now: "Shop Now",
    explore_deals: "Explore Deals",

    // Filter Bar & Sorting
    filters: "Filters",
    sort_by: "Sort by",
    sort_popular: "Most Popular",
    sort_price_low: "Price: Low to High",
    sort_price_high: "Price: High to Low",
    sort_rating: "Highest Rated",
    sort_discount: "Biggest Discount",
    price_range: "Price Range",
    min_price: "Min",
    max_price: "Max",
    apply_filter: "Apply",
    clear_all: "Clear All",
    rating_filter: "Customer Rating",
    up_rating: "& Up",
    free_shipping_only: "Free Shipping Only",
    choice_only: "AliExpress Choice Only",
    results_found: "products found",
    no_products: "No products matched your criteria. Try adjusting your filters.",

    // Product Card
    buy_on_aliexpress: "Buy on AliExpress",
    view_details: "View Details",
    off: "OFF",
    orders_count: "sold",
    free_shipping: "Free Shipping",
    choice_badge: "Choice",
    reviews: "reviews",

    // Product Detail Page
    back_to_shop: "Back to Products",
    home_crumb: "Home",
    in_stock: "Available on AliExpress",
    guaranteed_safe: "Official AliExpress Authorized Product",
    specifications: "Specifications",
    features: "Key Features & Highlights",
    customer_reviews: "Verified Reviews",
    buyer_guarantee_title: "AliExpress 75-Day Buyer Protection",
    buyer_guarantee_desc: "Shop with peace of mind. Get a full refund if your item isn't delivered or doesn't match the description.",
    secure_redirect_notice: "You will be securely redirected to the official AliExpress product page using our authorized affiliate link.",
    share_product: "Share Deal",
    copied_to_clipboard: "Product link copied to clipboard!",
    similar_products: "You May Also Like on AliExpress",

    // Redirect Modal
    redirecting_title: "Connecting to AliExpress...",
    redirecting_desc: "Redirecting you safely to the official AliExpress seller page with the lowest tracked price.",
    proceed_now: "Proceed to AliExpress Now",
    redirecting_notice: "If you are not redirected automatically in 3 seconds, click the button above.",

    // Footer
    about_title: "About Our Marketplace",
    about_text: "We are an independent affiliate discovery platform curating top-rated items, trending viral products, and exclusive Choice deals directly from AliExpress. We never hold inventory, handle shipping, or charge customers directly.",
    quick_links: "Explore",
    legal_title: "Transparency & Trust",
    terms_disclosure: "Affiliate Terms & Disclaimer",
    privacy_policy: "Privacy Policy",
    contact_support: "Contact / Inquiries",
    copyright: "All product trademarks and brand names are property of AliExpress & Alibaba Group. All rights reserved.",

    // Admin Dashboard
    dashboard: "Dashboard",
    products_mgmt: "Products",
    categories_mgmt: "Categories",
    analytics_mgmt: "Outbound Clicks",
    affiliate_mgmt: "Affiliate Settings",
    banners_mgmt: "Hero Banners",
    settings_mgmt: "Site Settings",
    logout: "Log Out",
    login_title: "Admin Portal Authentication",
    enter_pin: "Enter Admin Password / PIN",
    login_btn: "Access Portal",
    invalid_pin: "Invalid Password or PIN. Please try again.",
    total_products: "Total Products",
    total_clicks: "Outbound Clicks",
    active_categories: "Active Categories",
    conversion_potential: "Outbound Referrals Logged",
    add_new_product: "Add New Product",
    edit_product: "Edit Product",
    delete: "Delete",
    save_changes: "Save Changes",
    cancel: "Cancel",
    actions: "Actions",
    bulk_export: "Export Catalog (JSON)",
    bulk_import: "Import Products",
    reset_demo: "Reset to Default Catalog"
  }
};

const I18n = {
  // Arabic is the primary and permanent default language
  currentLang: "ar",

  init() {
    this.currentLang = "ar";
    localStorage.setItem("ali_market_lang", "ar");
    this.applyLanguage("ar", false);
  },

  setLanguage(lang) {
    // Only Arabic is supported per user requirements
    this.currentLang = "ar";
    localStorage.setItem("ali_market_lang", "ar");
    this.applyLanguage("ar", true);
  },

  applyLanguage(lang, triggerEvent = true) {
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
    document.body.classList.add("rtl");

    // Translate all elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const translation = this.t(key);
      if (translation) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.setAttribute("placeholder", translation);
        } else {
          el.textContent = translation;
        }
      }
    });

    // Translate all elements with data-i18n-title
    document.querySelectorAll("[data-i18n-title]").forEach(el => {
      const key = el.getAttribute("data-i18n-title");
      const translation = this.t(key);
      if (translation) el.setAttribute("title", translation);
    });

    if (triggerEvent) {
      window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang: "ar", isRtl: true } }));
    }
  },

  t(key, fallback = "") {
    const dict = TRANSLATIONS.ar;
    if (dict && dict[key] !== undefined) return dict[key];
    if (TRANSLATIONS.en && TRANSLATIONS.en[key] !== undefined) return TRANSLATIONS.en[key];
    return fallback || key;
  },

  localize(val) {
    if (!val) return "";
    if (typeof val === "string") return val;
    if (val.ar) return val.ar;
    if (val.en) return val.en;
    const keys = Object.keys(val);
    return keys.length > 0 ? val[keys[0]] : "";
  },

  isRTL() {
    return true;
  }
};

if (typeof window !== "undefined") {
  window.I18n = I18n;
  window.TRANSLATIONS = TRANSLATIONS;
}
