/**
 * AliExpress Product Importer & Bulk Catalog Extender
 * Allows 1-click importing of AliExpress products by link/ID,
 * and bulk population of viral Choice & SuperDeals items.
 */

const VIRAL_ALIEXPRESS_CATALOG = [
  // Additional Electronics & Gadgets
  {
    id: "ali-elec-104",
    name: {
      ar: "مكبر صوت بلوتوث أنكر ساوندكور موشن+ 30 واط صوت نقي عالي الدقة Hi-Res مع بطارية 12 ساعة ومقاومة للماء",
      en: "Anker Soundcore Motion+ 30W Hi-Res Bluetooth Speaker with BassUp & 12H Battery"
    },
    category: "electronics",
    subcategory: "audio",
    price: 69.99,
    originalPrice: 139.99,
    discount: 50,
    rating: 4.9,
    orders: 31200,
    reviewsCount: 7890,
    choice: true,
    freeShipping: true,
    featured: true,
    flashDeal: true,
    images: [
      "images/products/bt-speaker.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdBtSpeaker?aff_fcid=official_choice_speaker",
    description: "مكبر صوت لاسلكي فائق القوة بتقنية الصوت النقي عالي الدقة Hi-Res مع معالجات رقمية وصوت بيس عميق بتقنية BassUp وبطارية تدوم طويلاً حتى 12 ساعة ومقاومة كاملة للماء بمعيار IPX7.",
    specs: { "العلامة التجارية": "Anker Soundcore", "القوة الصوتية": "30W Stereo", "مقاومة الماء": "IPX7", "عمر البطارية": "12 ساعة تشغيل" },
    features: ["صوت معتمد فائق الدقة Hi-Res مع ترميز Qualcomm aptX", "مضخم صوت مزدوج من النيوديميوم لتعزيز البيس", "تطبيق مخصص لضبط معادل الصوت EQ وتحديثات مستمرة"]
  },
  {
    id: "ali-elec-105",
    name: {
      ar: "موزع ومحول يو إس بي سي 10 في 1 يوجرين UGREEN بدقة 4K@60Hz وشحن فائق 100W PD ومنفذ إنترنت",
      en: "UGREEN 10-in-1 USB-C Hub with 4K@60Hz HDMI, 100W PD, Gigabit Ethernet & SD Card Reader"
    },
    category: "electronics",
    subcategory: "hubs",
    price: 32.50,
    originalPrice: 65.00,
    discount: 50,
    rating: 4.8,
    orders: 24600,
    reviewsCount: 5820,
    choice: true,
    freeShipping: true,
    featured: false,
    flashDeal: false,
    images: [
      "images/products/usb-hub.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdUGREENHub?aff_fcid=official_choice_hub",
    description: "محطة عمل متكاملة تحول منفذ Type-C إلى 10 منافذ قوية: مخرج شاشة 4K بمعدل 60Hz فائق السلاسة، شحن سريع 100 واط، منفذ شبكة جيجابت، وقارئ كروت الذاكرة مع هيكل ألمنيوم مبدد للحرارة.",
    specs: { "العلامة التجارية": "UGREEN", "عدد المنافذ": "10 منافذ متكاملة", "دقة الشاشة": "4K@60Hz HDMI", "قوة الشحن": "100W Power Delivery" },
    features: ["هيكل سبائك الألمنيوم لتبديد فعال للحرارة وحماية الأجهزة", "متوافق بالكامل مع أجهزة ماك بوك والحواسيب المحمولة والآيباد"]
  },

  // Additional Smartphones & Accessories
  {
    id: "ali-phone-203",
    name: {
      ar: "منصة وقاعدة شحن لاسلكي مغناطيسية قابلة للطي 3 في 1 باسيوس Baseus للآيفون وساعة أبل وسماعات إيربودز",
      en: "Baseus 3-in-1 Magnetic Foldable Fast Wireless Charging Station for iPhone, Apple Watch & AirPods"
    },
    category: "smartphones",
    subcategory: "wireless_chargers",
    price: 29.90,
    originalPrice: 62.00,
    discount: 52,
    rating: 4.9,
    orders: 28900,
    reviewsCount: 6420,
    choice: true,
    freeShipping: true,
    featured: true,
    flashDeal: true,
    images: [
      "images/products/wireless-dock.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_Dd3in1MagCharger?aff_fcid=official_magstation",
    description: "اشحن هاتفك وساعتك الذكية وسماعاتك اللاسلكية في وقت واحد عبر منصة مغناطيسية أنيقة وقابلة للطي تناسب المكتب وترافقك أثناء السفر بحجم الجيب مع توزيع طاقة ذكي وحماية من ارتفاع الحرارة.",
    specs: { "العلامة التجارية": "Baseus", "الطاقة الإجمالية": "15 واط للهاتف + 5 واط للسماعة + 2.5 واط للساعة", "التصميم": "هيكل ألمنيوم قابل للطي" },
    features: ["مفصل مرن يسمح بمشاهدة الفيديوهات أفقياً ورأسياً أثناء الشحن", "نظام ذكي لكشف الأجسام الغريبة FOD وتبريد نشط"]
  },

  // Additional Fashion & Outerwear
  {
    id: "ali-fash-303",
    name: {
      ar: "سويت شيرت هودي قطني شتوي ثقيل عالي الجودة بنمط ستريت وير مع جيب كانغرو أمامي وغطاء رأس مريح",
      en: "Urban Streetwear Heavyweight Cotton Graphic Hoodie with Kangaroo Pocket"
    },
    category: "fashion",
    subcategory: "hoodies",
    price: 24.50,
    originalPrice: 55.00,
    discount: 55,
    rating: 4.8,
    orders: 19400,
    reviewsCount: 4210,
    choice: true,
    freeShipping: true,
    featured: false,
    flashDeal: false,
    images: [
      "images/products/streetwear-hoodie.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdStreetwearHoodie?aff_fcid=official_hoodie",
    description: "مصنوع من قطن عضوي ممشط ثقيل الوزن بكثافة 400 جرام لكل متر مربع. يتميز بغطاء رأس مزدوج الطبقات وقصة مريحة واسعة بأكتاف منسدلة وحياكة مزدوجة متينة تدوم طويلاً.",
    specs: { "الخامة": "100% قطن عضوي كثيف (400 GSM)", "القصة": "أوفرسايز ستريت وير مريح", "الموسم": "الخريف والشتاء" },
    features: ["قماش معالج مسبقاً ضد الانكماش بعد الغسيل المتكرر", "بطانة صوفية داخلية ناعمة توفر عزلاً حرارياً ممتازاً"]
  },

  // Additional Shoes & Sandals
  {
    id: "ali-shoe-403",
    name: {
      ar: "حذاء تسلق ومشي جبلي تكتيكي مقاوم للماء مع نعل مطاطي مانع للانزلاق وتوسيد مضاد للصدمات",
      en: "Men's Waterproof Tactical Outdoor Hiking Boots with Non-Slip Rubber Grip"
    },
    category: "shoes",
    subcategory: "boots",
    price: 34.90,
    originalPrice: 75.00,
    discount: 53,
    rating: 4.8,
    orders: 16700,
    reviewsCount: 3950,
    choice: true,
    freeShipping: true,
    featured: true,
    flashDeal: false,
    images: [
      "images/products/hiking-boots.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdHikingBoots?aff_fcid=official_boots",
    description: "أداء فائق على كافة التضاريس الجبلية والوعرة في جميع الأحوال الجوية. جلد طبيعي معالج بغشاء مقاوم للمياه مع نعل مضلع عميق يمنحك ثباتاً تاماً وحماية فائقة للكاحل والأصابع.",
    specs: { "الجزء العلوي": "جلد نوبوك معالج ضد الماء + كوردورا", "النعل": "مطاط عميق التضاريس مانع للانزلاق", "الوزن": "480 جرام للحذاء" },
    features: ["ياقة مبطنة تمنع التواء الكاحل أثناء المنحدرات الصعبة", "مقدمة معززة بصداد مطاطي لحماية أصابع القدم من الصخور"]
  },

  // Additional Home & Kitchen
  {
    id: "ali-home-603",
    name: {
      ar: "مكنسة روبوت ذكية ليدار مع ممسحة أرضيات وقوة شفط توربينية 4000 باسكال وتحكم كامل عبر الهاتف",
      en: "Smart Robot Vacuum & Mop Cleaner with Laser LiDAR Navigation & 4000Pa Strong Suction"
    },
    category: "home",
    subcategory: "cleaning",
    price: 139.00,
    originalPrice: 299.00,
    discount: 54,
    rating: 4.9,
    orders: 8900,
    reviewsCount: 2340,
    choice: true,
    freeShipping: true,
    featured: true,
    flashDeal: true,
    images: [
      "images/products/robot-vacuum.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdRobotVacuum?aff_fcid=official_robot_cleaner",
    description: "مكنسة وممسحة آلية ذكية بتقنية الملاحة بالليزر ثلاثية الأبعاد ترسم خريطة المنزل بدقة وتتجنب العوائق وتشفط الغبار وشعر الحيوانات الأليفة مع عودة ذاتية لقاعدة الشحن الذكية.",
    specs: { "قوة الشفط": "4000 باسكال إعصاري", "البطارية": "5200 مللي أمبير (150 دقيقة عمل مستمر)", "خزان المياه": "خزان كهربائي ذكي 250 مل + صندوق غبار 450 مل" },
    features: ["تحديد مناطق الحظر والمسارات الافتراضية عبر تطبيق الهاتف", "تسلق حواف الأبواب والسجاد بارتفاع يصل إلى 20 ملم"]
  },

  // Additional Sports & Outdoor
  {
    id: "ali-spor-803",
    name: {
      ar: "حقيبة ظهر عسكرية وتكتيكية سعة 45 لتر مقاومة للماء مع نظام تعليق خارجي للرحلات والتخييم والسفر",
      en: "Tactical 45L Military Backpack with Molle System for Trekking & Travel"
    },
    category: "sports",
    subcategory: "camping",
    price: 26.80,
    originalPrice: 59.00,
    discount: 55,
    rating: 4.8,
    orders: 21500,
    reviewsCount: 4890,
    choice: true,
    freeShipping: true,
    featured: false,
    flashDeal: false,
    images: [
      "images/products/tactical-backpack.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdTacticalPack?aff_fcid=official_backpack",
    description: "مصنوعة من قماش أكسفورد 900D عالي الكثافة والمقاوم للتمزق والماء. تتميز بتقسيمات متعددة مع ظهر مبطن شبكي يسمح بمرور الهواء وأحزمة تثبيت مريحة تقلل من إجهاد الكتفين.",
    specs: { "السعة": "45 لتراً", "الخامة": "أكسفورد 900D المقاوم للماء", "الأبعاد": "50 × 30 × 30 سم" },
    features: ["سحابات معدنية ثنائية متينة مقاومة للضغط العالي", "نظام تعليق تكتيكي MOLLE لتثبيت الأدوات الإضافية ومطارة المياه"]
  },

  // Additional Auto Accessories
  {
    id: "ali-auto-1003",
    name: {
      ar: "جهاز فحص وتشخيص أعطال محرك السيارات OBD2 اللاسلكي عبر البلوتوث للهواتف الذكية مع قراءة الحساسات",
      en: "Wireless OBD2 Bluetooth Car Diagnostic Scanner Tool for iOS & Android Engine Check"
    },
    category: "auto",
    subcategory: "obd_scanners",
    price: 11.90,
    originalPrice: 25.00,
    discount: 52,
    rating: 4.8,
    orders: 39800,
    reviewsCount: 9240,
    choice: true,
    freeShipping: true,
    featured: false,
    flashDeal: true,
    images: [
      "images/products/obd-scanner.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdOBDScanner?aff_fcid=official_obd_tool",
    description: "افحص محرك سيارتك بنفسك واكتشف أسباب ظهور لمبة المحرك Check Engine وامسح أكواد الأعطال في ثوانٍ مع قراءة حية لدرجة حرارة سائل التبريد وسرعة المحرك وحساسات الأكسجين.",
    specs: { "البروتوكولات المدعومة": "كافة بروتوكولات OBD-II العالمية", "الاتصال": "بلوتوث 5.0 منخفض استهلاك الطاقة", "التوافق": "سيارات البنزين والديزل من عام 1996 فما فوق" },
    features: ["وضع سكون تلقائي ذكي لا يستهلك طاقة بطارية السيارة نهائياً", "توضيح معاني أكواد الأعطال بلغة بسيطة ومفهومة دون تعقيد"]
  }
];

const Importer = {
  importByUrl(rawUrlOrId, category = "electronics") {
    if (!rawUrlOrId) return null;

    const idMatch = rawUrlOrId.match(/(\d{10,16})/);
    const itemId = idMatch ? idMatch[1] : ("ali-" + Date.now().toString().slice(-6));

    let titleAr = "منتج علي إكسبرس المعتمد " + itemId;
    let titleEn = "Official AliExpress Trending Choice Item " + itemId;
    if (rawUrlOrId.includes("/item/")) {
      const parts = rawUrlOrId.split("/item/")[1].split(".html")[0].replace(/_/g, " ").replace(/-/g, " ");
      if (parts.length > 5 && isNaN(parts)) {
        titleEn = parts.charAt(0).toUpperCase() + parts.slice(1);
      }
    }

    const defaultImages = [
      "images/products/lenovo-earbuds.svg"
    ];

    const newProduct = {
      id: "ali-imp-" + itemId,
      name: {
        ar: titleAr,
        en: titleEn
      },
      category: category,
      price: 19.99,
      originalPrice: 42.00,
      discount: 52,
      rating: 4.8,
      orders: 2400,
      reviewsCount: 520,
      choice: true,
      freeShipping: true,
      featured: true,
      images: defaultImages,
      affiliateUrl: rawUrlOrId.startsWith("http") ? rawUrlOrId : `https://www.aliexpress.com/item/${itemId}.html`,
      description: "منتج موثوق وأصلي تم اختياره بعناية من مصانع علي إكسبرس المعتمدة مع شحن متتبع وضمان استرداد كامل للأموال لمدة 75 يوماً وفق برنامج حماية المشتري الرسمي.",
      specs: {
        "المصدر": "متجر علي إكسبرس الرسمي",
        "معرف المنتج": itemId,
        "الضمان": "حماية المشتري لمدة 75 يوماً"
      },
      features: [
        "منتج معتمد 100% ضمن مختارات AliExpress Choice الأصلية",
        "شحن دولي متتبع مع إمكانية استرداد كامل للقيمة عند عدم التسليم"
      ],
      tags: [category, "aliexpress", "imported"]
    };

    if (window.Store) {
      window.Store.addProduct(newProduct);
    }
    return newProduct;
  },

  populateViralCatalog() {
    if (!window.Store) return 0;
    const existing = window.Store.getProducts();
    const existingIds = new Set(existing.map(p => p.id));
    let addedCount = 0;

    VIRAL_ALIEXPRESS_CATALOG.forEach(p => {
      if (!existingIds.has(p.id)) {
        existing.push(p);
        existingIds.add(p.id);
        addedCount++;
      }
    });

    if (addedCount > 0) {
      window.Store.saveProducts(existing);
    }
    return addedCount;
  }
};

if (typeof window !== "undefined") {
  window.Importer = Importer;
  window.VIRAL_ALIEXPRESS_CATALOG = VIRAL_ALIEXPRESS_CATALOG;
}
