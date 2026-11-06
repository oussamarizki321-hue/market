/**
 * Initial Catalog Data for AliExpress Affiliate Marketplace
 * Includes all 11 required categories and realistic, high-converting AliExpress items
 * Exclusively in Arabic (ar) with exact matching product vector images
 */

const INITIAL_CATEGORIES = [
  {
    id: "electronics",
    name: {
      ar: "الإلكترونيات والملحقات",
      en: "Electronics & Accessories"
    },
    icon: "bi-cpu",
    badge: "الأكثر مبيعاً",
    slug: "electronics",
    subcategories: [
      { id: "audio", name: { ar: "سماعات وصوتيات", en: "Earbuds & Audio" } },
      { id: "chargers", name: { ar: "شواحن وكابلات", en: "Chargers & Cables" } },
      { id: "keyboards", name: { ar: "لوحات مفاتيح وفأرات", en: "Keyboards & Mice" } },
      { id: "hubs", name: { ar: "محولات وموزعات USB", en: "USB Hubs & Adapters" } }
    ]
  },
  {
    id: "smartphones",
    name: {
      ar: "الهواتف الذكية والملحقات",
      en: "Smartphones & Accessories"
    },
    icon: "bi-phone",
    badge: "شائع الآن",
    slug: "smartphones",
    subcategories: [
      { id: "cases", name: { ar: "أغطية وحافظات الهواتف", en: "Phone Cases & Covers" } },
      { id: "wireless_chargers", name: { ar: "شواحن لاسلكية وقواعد شحن", en: "Wireless Chargers" } },
      { id: "screen_protectors", name: { ar: "واقيات الشاشة الزجاجية", en: "Screen Protectors" } },
      { id: "power_banks", name: { ar: "بنوك الطاقة والبطاريات الخارجية", en: "Power Banks" } }
    ]
  },
  {
    id: "fashion",
    name: {
      ar: "الموضة والملابس",
      en: "Fashion & Clothing"
    },
    icon: "bi-bag-heart",
    slug: "fashion",
    subcategories: [
      { id: "mens_jackets", name: { ar: "سترات ومعاطف رجالية", en: "Men's Jackets & Outerwear" } },
      { id: "womens_dresses", name: { ar: "فساتين وملابس نسائية", en: "Women's Dresses & Tops" } },
      { id: "hoodies", name: { ar: "سويت شيرت وهوديز شتوية", en: "Hoodies & Sweatshirts" } },
      { id: "belts_accessories", name: { ar: "أحزمة وإكسسوارات الموضة", en: "Belts & Accessories" } }
    ]
  },
  {
    id: "shoes",
    name: {
      ar: "الأحذية والصنادل",
      en: "Shoes & Sandals"
    },
    icon: "bi-shield-check",
    slug: "shoes",
    subcategories: [
      { id: "sneakers", name: { ar: "أحذية رياضية وجري", en: "Sneakers & Running Shoes" } },
      { id: "sandals", name: { ar: "صنادل وشباشب مريحة", en: "Casual Sandals & Slides" } },
      { id: "boots", name: { ar: "أحذية تسلق ورحلات جبلية", en: "Boots & Outdoor Footwear" } }
    ]
  },
  {
    id: "watches",
    name: {
      ar: "الساعات والملحقات",
      en: "Watches & Accessories"
    },
    icon: "bi-smartwatch",
    badge: "خصومات",
    slug: "watches",
    subcategories: [
      { id: "smartwatches", name: { ar: "ساعات ذكية وأساور لياقة", en: "Smartwatches & Fitness Bands" } },
      { id: "mechanical_watches", name: { ar: "ساعات ميكانيكية وأوتوماتيكية", en: "Mechanical & Automatic" } },
      { id: "watch_straps", name: { ar: "أحزمة وأدوات صيانة الساعات", en: "Straps & Tools" } }
    ]
  },
  {
    id: "home",
    name: {
      ar: "المنزل والمطبخ",
      en: "Home & Kitchen"
    },
    icon: "bi-house-door",
    slug: "home",
    subcategories: [
      { id: "kitchen_gadgets", name: { ar: "أدوات ومبتكرات المطبخ", en: "Kitchen Gadgets & Tools" } },
      { id: "lighting", name: { ar: "إضاءة وفواحات ذكية", en: "Smart LED Lighting & Diffusers" } },
      { id: "cleaning", name: { ar: "مكانس ذكية ومعدات تنظيف", en: "Robot Vacuums & Cleaners" } }
    ]
  },
  {
    id: "beauty",
    name: {
      ar: "الجمال والعناية الشخصية",
      en: "Beauty & Personal Care"
    },
    icon: "bi-stars",
    slug: "beauty",
    subcategories: [
      { id: "haircare", name: { ar: "مجففات وأدوات تصفيف الشعر", en: "Hair Dryers & Styling" } },
      { id: "face_cleansers", name: { ar: "أجهزة إزالة الشعر والليزر المنزلي", en: "Laser Hair Removers & Cleansers" } },
      { id: "massage", name: { ar: "أجهزة التدليك والمساج", en: "Massage Devices" } }
    ]
  },
  {
    id: "sports",
    name: {
      ar: "الرياضة والأنشطة الخارجية",
      en: "Sports & Outdoor"
    },
    icon: "bi-trophy",
    badge: "ترند",
    slug: "sports",
    subcategories: [
      { id: "camping", name: { ar: "خيام ولوازم التخييم والرحلات", en: "Camping & Hiking Gear" } },
      { id: "fitness", name: { ar: "أحزمة المقاومة ومعدات اللياقة", en: "Fitness Equipment" } },
      { id: "cycling", name: { ar: "إكسسوارات الدراجات الهوائية", en: "Cycling Accessories" } }
    ]
  },
  {
    id: "toys",
    name: {
      ar: "الألعاب والهوايات",
      en: "Toys & Games"
    },
    icon: "bi-controller",
    slug: "toys",
    subcategories: [
      { id: "retro_gaming", name: { ar: "أجهزة ألعاب كلاسيكية محمولة", en: "Retro Gaming Consoles" } },
      { id: "drones", name: { ar: "طائرات درون بكاميرات عالية الدقة", en: "RC Drones & Quadcopters" } },
      { id: "puzzles", name: { ar: "ألغاز وألعاب تعليمية", en: "Educational Toys" } }
    ]
  },
  {
    id: "auto",
    name: {
      ar: "إكسسوارات السيارات",
      en: "Car Accessories"
    },
    icon: "bi-car-front",
    slug: "auto",
    subcategories: [
      { id: "dashcams", name: { ar: "كاميرات مراقبة وتسجيل داش كام", en: "Car Dash Cameras" } },
      { id: "car_cleaners", name: { ar: "مكانس سيارات وأدوات غسيل", en: "Cordless Car Vacuums" } },
      { id: "obd_scanners", name: { ar: "أجهزة فحص محرك السيارة OBD2", en: "OBD2 Diagnostic Scanners" } }
    ]
  },
  {
    id: "other",
    name: {
      ar: "منتجات أخرى ومميزة",
      en: "Other Products"
    },
    icon: "bi-grid-3x3-gap",
    slug: "other",
    subcategories: [
      { id: "office", name: { ar: "طابعات ملصقات ولوازم مكتبية", en: "Label Printers & Office" } },
      { id: "gadgets", name: { ar: "أجهزة تنظيف بالموجات فوق الصوتية", en: "Ultrasonic Cleaners & Gadgets" } }
    ]
  }
];

const INITIAL_PRODUCTS = [
  // 1. Electronics & Accessories
  {
    id: "ali-elec-101",
    name: {
      ar: "سماعات بلوتوث لينوفو ثينك بلس Lenovo Thinkplus اللاسلكية الأصلية بصوت بيس عميق وعزل ضوضاء للمكالمات",
      en: "Lenovo Thinkplus TWS Bluetooth 5.3 Earbuds with HiFi Deep Bass & HD Mic"
    },
    category: "electronics",
    subcategory: "audio",
    price: 11.49,
    originalPrice: 28.99,
    discount: 60,
    rating: 4.8,
    orders: 45200,
    reviewsCount: 12430,
    choice: true,
    freeShipping: true,
    featured: true,
    flashDeal: true,
    images: [
      "images/products/lenovo-earbuds.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdElectronics101?aff_fcid=official_choice_audio",
    description: "استمتع بنقاء صوتي استثنائي مع أحدث شريحة بلوتوث 5.3 من لينوفو. تتميز بوضع الألعاب فائق السرعة بزمن استجابة شبه معدوم، وبطارية ممتدة تمنحك 24 ساعة من التشغيل مع علبة الشحن، ومقاومة قطرات العرق ورذاذ الماء بمعيار IPX5 مع تحكم كامل باللمس.",
    specs: {
      "العلامة التجارية": "لينوفو Lenovo Thinkplus",
      "إصدار البلوتوث": "Bluetooth 5.3 فائق الاستقرار",
      "المدى اللاسلكي": "10 إلى 15 متراً",
      "عمر البطارية": "5 ساعات للسماعة (24 ساعة مع علبة الشحن)",
      "منفذ الشحن": "Type-C شحن سريع",
      "مقاومة الماء": "IPX5 مقاومة للتعرق والرذاذ",
      "تقنية الميكروفون": "عزل الضوضاء الرقمي ENC للمكالمات الواضحة"
    },
    features: [
      "صوت ستيريو نقي بتأثير محيطي غامر للألعاب والموسيقى والفيديوهات",
      "بنية مضيفة مزدوجة تتيح استخدام كل سماعة بشكل منفصل أو معاً",
      "تصميم هندسي خفيف ومريح لا يسبب إجهاداً للأذن طوال اليوم",
      "منتج رسمي ضمن مختارات AliExpress Choice مع ضمان التوصيل السريع"
    ],
    tags: ["سماعات", "بلوتوث", "لينوفو", "صوتيات", "choice"]
  },
  {
    id: "ali-elec-102",
    name: {
      ar: "شاحن جداري باسيوس Baseus 65W GaN5 Pro فائق السرعة بتقنية نيتريد الغاليوم بـ 3 منافذ للحواسيب والهواتف",
      en: "Baseus 65W GaN5 Pro USB-C Fast Charger with 3 Ports for Laptops & Phones"
    },
    category: "electronics",
    subcategory: "chargers",
    price: 24.80,
    originalPrice: 49.99,
    discount: 50,
    rating: 4.9,
    orders: 38900,
    reviewsCount: 9410,
    choice: true,
    freeShipping: true,
    featured: true,
    flashDeal: false,
    images: [
      "images/products/gan-charger.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdBaseus65W?aff_fcid=official_choice_charger",
    description: "شاحن متطور يعتمد تقنية الجيل الخامس GaN5 Pro لتوفير حجم أصغر بكثير وكفاءة شحن أعلى مع تحكم ذكي في درجة الحرارة. يشحن حواسيب ماك بوك والحواسيب المحمولة وهواتف آيفون وسامسونج في وقت واحد بأمان تام.",
    specs: {
      "العلامة التجارية": "باسيوس Baseus",
      "القدرة القصوى": "65 واط شحن فائق السرعة",
      "المنافذ المتاحة": "2x USB-C + 1x USB-A",
      "التقنية المستخدمة": "نيتريد الغاليوم GaN5 Pro",
      "الحماية الكهربائية": "حماية متعددة من الجهد الزائد وارتفاع الحرارة وقصر الدائرة",
      "الجهد الكهربائي": "100-240 فولت للاستخدام العالمي"
    },
    features: [
      "توزيع ديناميكي ذكي للطاقة عبر تقنية BPS II بين الأجهزة المتصلة",
      "يشحن حاسوب ماك بوك برو حتى 100% في حوالي 1.5 ساعة فقط",
      "قابس قابل للطي وحجم مدمج مثالي للاستخدام المكتبي والسفر"
    ],
    tags: ["شاحن", "باسيوس", "gan", "شحن سريع", "usb-c"]
  },
  {
    id: "ali-elec-103",
    name: {
      ar: "لوحة مفاتيح ميكانيكية أجاز Ajazz AK820 Pro مع شاشة ذكية ملونة واتصال ثلاثي النمط وأزرار مريحة",
      en: "Ajazz AK820 Pro Tri-Mode 75% Mechanical Keyboard with TFT Color Smart Screen"
    },
    category: "electronics",
    subcategory: "keyboards",
    price: 49.90,
    originalPrice: 99.00,
    discount: 50,
    rating: 4.9,
    orders: 16700,
    reviewsCount: 3820,
    choice: true,
    freeShipping: true,
    featured: false,
    flashDeal: true,
    images: [
      "images/products/mechanical-keyboard.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdAjazzAK820?aff_fcid=official_keyboard",
    description: "كيبورد ميكانيكي احترافي بنظام الجاسكيت لامتصاص الصوت والشعور بالنعومة، مع شاشة TFT ملونة قابلة للتخصيص لعرض التاريخ والبطارية والرسوم المتحركة GIF ومفتاح دوار معدني للتحكم بمستوى الصوت وإضاءة RGB رائعة.",
    specs: {
      "التخطيط": "75% مع مقبض تحكم بالصوت وشاشة TFT ملونة",
      "طرق الاتصال": "بلوتوث 5.1 / لاسلكي 2.4Ghz / سلكي USB-C",
      "نوع الأغطية": "أغطية PBT متينة مقاومة للمعان والتآكل",
      "البنية": "نظام Gasket Mount مع 5 طبقات عزل صوتي",
      "البطارية": "4000 مللي أمبير قابلة لإعادة الشحن"
    },
    features: [
      "لوحة دوائر تدعم التبديل السريع Hot-Swap للمفاتيح الميكانيكية 3-pin و 5-pin",
      "إضاءة خلفية RGB بتوجيه سفلي مع 20 نمطاً حركياً مختلفاً",
      "مفتاح معدني مدمج للتحكم الفوري بالصوت والوسائط المتعددة"
    ],
    tags: ["كيبورد", "ميكانيكي", "ألعاب", "rgb", "ajazz"]
  },

  // 2. Smartphones & Accessories
  {
    id: "ali-phone-201",
    name: {
      ar: "باور بانك مغناطيسي باسيوس Baseus MagSafe سعة 10000 مللي أمبير بقوة 20 واط شحن لاسلكي سريع للآيفون والسامسونج",
      en: "Baseus Magnetic Power Bank 10000mAh 20W Fast Wireless Charging for iPhone & Android"
    },
    category: "smartphones",
    subcategory: "power_banks",
    price: 26.50,
    originalPrice: 52.00,
    discount: 49,
    rating: 4.8,
    orders: 31200,
    reviewsCount: 7890,
    choice: true,
    freeShipping: true,
    featured: true,
    flashDeal: false,
    images: [
      "images/products/magsafe-powerbank.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdBaseusMagBank?aff_fcid=official_magbank",
    description: "قوة التصاق مغناطيسية هائلة تتوافق بدقة مع هواتف آيفون المزودة بتقنية MagSafe. يدعم الشحن اللاسلكي السريع والشحن السلكي السريع عبر منفذ Type-C بقوة 20 واط، بتصميم مدمج لا يعيق عدسات الكاميرا.",
    specs: {
      "السعة": "10000 مللي أمبير / 38.5 واط ساعي",
      "الشحن اللاسلكي": "حتى 15 واط (7.5 واط لهواتف آيفون)",
      "شحن Type-C السلكي": "20W PD شحن فائق السرعة",
      "الوزن": "حوالي 208 جرام فقط",
      "الأبعاد": "104.6 × 68.9 × 20 ملم"
    },
    features: [
      "مغناطيس نيوديميوم قوي يضمن ثباتاً محكماً أثناء إجراء المكالمات أو اللعب",
      "مؤشر ضوئي ذكي لعرض نسبة البطارية وحالة الشحن المتبقية",
      "معتمد ومصرح به لحمله على متن الطائرات بأمان تام"
    ],
    tags: ["باور بانك", "magsafe", "آيفون", "شاحن لاسلكي"]
  },
  {
    id: "ali-phone-202",
    name: {
      ar: "جراب هاتف مغناطيسي فاخر مضاد للصدمات مع ألياف الكربون ودعم كامل لشواحن ماج سيف MagSafe",
      en: "Luxury Shockproof Carbon Fiber Matte Magnetic Phone Case for iPhone 15 & 14 Series"
    },
    category: "smartphones",
    subcategory: "cases",
    price: 6.99,
    originalPrice: 15.99,
    discount: 56,
    rating: 4.7,
    orders: 54000,
    reviewsCount: 14200,
    choice: true,
    freeShipping: true,
    featured: false,
    flashDeal: true,
    images: [
      "images/products/phone-case.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdCaseMagSafe?aff_fcid=official_phone_case",
    description: "حماية عسكرية معززة ضد الصدمات والسقوط مع لمسة نهائية غير لامعة بمظهر ألياف الكربون الفاخر المقاوم لبصمات الأصابع والخدوش مع حلقة مغناطيسية قوية مدمجة للشحن اللاسلكي.",
    specs: {
      "الخامة": "ألياف الأراميد + حواف TPU ممتصة للصدمات",
      "مستوى الحماية": "معيار الحماية العسكرية MIL-STD-810G",
      "السماكة": "1.2 ملم مظهر نحيف وأنيق",
      "حافة الكاميرا": "بروز 1.5 ملم لحماية العدسات من الخدوش"
    },
    features: [
      "طلاء نانو ماتي غير لامع مقاوم تماماً لآثار البصمات والزيوت",
      "مصفوفة مغناطيسية مدمجة مكوّنة من 38 قطعة مغناطيس N52 قوي",
      "فتحات ليزرية دقيقة لمكبر الصوت ومنفذ الشحن والأزرار"
    ],
    tags: ["كفر", "جراب", "آيفون", "ألياف كربون", "حماية"]
  },

  // 3. Fashion & Clothing
  {
    id: "ali-fash-301",
    name: {
      ar: "جاكيت رجالي خفيف ومقاوم للماء والرياح ومزود بغطاء رأس قابل للتعديل وسحابات محكمة للتنقل والرياضة",
      en: "Men's Lightweight Breathable Waterproof Windbreaker Softshell Hooded Jacket"
    },
    category: "fashion",
    subcategory: "mens_jackets",
    price: 21.90,
    originalPrice: 55.00,
    discount: 60,
    rating: 4.7,
    orders: 22100,
    reviewsCount: 4620,
    choice: true,
    freeShipping: true,
    featured: true,
    flashDeal: false,
    images: [
      "images/products/windbreaker-jacket.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdMenJacket?aff_fcid=official_fashion_jacket",
    description: "مصمم للأنشطة الخارجية واليومية مع عزل فائق ضد الرياح والأمطار وقماش شبكي داخلي يسمح بمرور الهواء وتصريف العرق، ومزود بجيوب آمنة بسحابات وعاكسات ضوئية ليلية.",
    specs: {
      "الخامة": "100% بوليستر عالي الكثافة Softshell",
      "مقاومة الماء": "مؤشر عزل 3000mm H2O ضد الأمطار",
      "السحاب": "سحاب معدني YKK متين وسلس",
      "المقاسات المتاحة": "من M إلى 5XL"
    },
    features: [
      "وزن خفيف للغاية يمكن طيه وحمله بسهولة داخل حقيبة الظهر",
      "أساور قابلة للتعديل بأشرطة فيلكرو وحاشية سفلية برباط شد",
      "جيوب متعددة لحفظ الهاتف والمحفظة والمفاتيح بأمان"
    ],
    tags: ["جاكيت", "سترة", "مقاوم للماء", "ملابس رجالية"]
  },
  {
    id: "ali-fash-302",
    name: {
      ar: "كارديجان نسائي أنيق تريكو منسوج بقصة مريحة وأزرار خشبية كلاسيكية وياقة V للطقس الخريفي والشتوي",
      en: "Women's Oversized Knit Cardigan with Horn Buttons & V-Neck Casual Vintage Sweater"
    },
    category: "fashion",
    subcategory: "womens_dresses",
    price: 18.30,
    originalPrice: 42.00,
    discount: 56,
    rating: 4.8,
    orders: 14500,
    reviewsCount: 3120,
    choice: true,
    freeShipping: true,
    featured: false,
    flashDeal: false,
    images: [
      "images/products/knit-cardigan.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdKnitCardigan?aff_fcid=official_cardigan",
    description: "سويتر صوفي دافئ وناعم بقصة أوفرسايز راقية ولمسة كلاسيكية مميزة. خيوط مرنة تحتفظ بشكلها وملمسها الناعم حتى بعد الغسيل المتكرر دون تكتل.",
    specs: {
      "نوع النسيج": "مزيج أكريليك ناعم بملمس الكشمير",
      "القصة": "قصة كورية كاجوال مريحة بأكتاف منسدلة",
      "الموسم": "الخريف والشتاء والربيع"
    },
    features: [
      "ألياف فائقة النعومة ولطيفة تماماً على البشرة لا تسبب أي وخز",
      "جيوب جانبية عميقة لتدفئة اليدين وحفظ الاحتياجات الصغيرة",
      "تنسيق متعدد وسهل فوق القمصان أو الفساتين أو التيشيرتات"
    ],
    tags: ["كارديجان", "سويتر", "ملابس نسائية", "تريكو"]
  },

  // 4. Shoes & Sandals
  {
    id: "ali-shoe-401",
    name: {
      ar: "حذاء رياضي للجري والمشي خفيف الوزن للغاية مع شبكة تهوية ونعل مرن ممتص للصدمات ومريح للقدمين",
      en: "Ultra-Lightweight Breathable Air Mesh Running Sneakers with Cushioning Foam Sole"
    },
    category: "shoes",
    subcategory: "sneakers",
    price: 16.90,
    originalPrice: 38.00,
    discount: 55,
    rating: 4.7,
    orders: 28400,
    reviewsCount: 6520,
    choice: true,
    freeShipping: true,
    featured: true,
    flashDeal: true,
    images: [
      "images/products/running-sneakers.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdAirSneakers?aff_fcid=official_shoes_sneakers",
    description: "مصمم للرياضة والجري والمشي الطويل والتمارين الرياضية اليومية. نسيج شبكي متطور يضمن تدفق الهواء المستمر وانتعاش القدمين، مع نعل مرن يخفف الضغط على المفاصل والركب.",
    specs: {
      "الخامة العلوية": "نسيج شبكي Flyknit عالي التهوية",
      "النعل الخارجي": "مطاط مرن مقاوم للانزلاق والتآكل",
      "النعل الداخلي": "وسادة Ortholite رغوية مريحة",
      "الوزن": "حوالي 230 جرام للحذاء الواحد"
    },
    features: [
      "مسام تهوية مانعة للروائح وتراكم الحرارة أثناء الجري الطويل",
      "نقشة سفلية عميقة تمنحك ثباتاً ممتازاً على الأرضيات المبللة",
      "ياقة ولسان مبطنان لتوفير أقصى درجات الراحة ودعم الكاحل"
    ],
    tags: ["حذاء", "سنيكرز", "رياضي", "جري", "أحذية رجالية"]
  },
  {
    id: "ali-shoe-402",
    name: {
      ar: "شبشب سحابي صيفي مريح بنعل سميك 4 سم مانع للانزلاق وممتص للصدمات للمنزل والشاطئ",
      en: "Ergonomic Thick Sole Cloud Slides Pillow Sandals for Indoor & Summer Beach"
    },
    category: "shoes",
    subcategory: "sandals",
    price: 7.99,
    originalPrice: 19.99,
    discount: 60,
    rating: 4.8,
    orders: 62000,
    reviewsCount: 15400,
    choice: true,
    freeShipping: true,
    featured: false,
    flashDeal: false,
    images: [
      "images/products/cloud-slides.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdCloudSlides?aff_fcid=official_sandals",
    description: "اشعر وكأنك تمشي فوق السحاب بنعل EVA السميك بارتفاع 4 سم الذي يخفف إجهاد القدمين والظهر. مقاوم للماء وسريع الجفاف ومضاد للروائح بنقشة سفلية تمنع الانزلاق في الحمام أو المسبح.",
    specs: {
      "سماكة النعل": "4.0 سم توسيد هوائي مضاعف",
      "الخامة": "مادة EVA الصديقة للبيئة وعالية المرونة",
      "خاصية الأمان": "قاعدة سفلية مموجة مانعة للانزلاق"
    },
    features: [
      "تصميم مقعر يلتف حول القدمين ليمنحهما الراحة والاستقرار التام",
      "انحناء أمامي بمقدار 30 درجة لحماية أصابع القدم أثناء الحركة",
      "سهل التنظيف تماماً بالماء ويجف خلال دقائق معدودة"
    ],
    tags: ["شبشب", "صندل", "مريح", "صيفي", "سحابي"]
  },

  // 5. Watches & Accessories
  {
    id: "ali-wat-501",
    name: {
      ar: "ساعة أوتوماتيكية ميكانيكية رجالية فاخرة باجاني ديزاين Pagani Design بزجاج ياقوتي ومقاومة للماء حتى 100 متر",
      en: "Pagani Design Luxury Men's Automatic Mechanical Sapphire Glass 100M Diver Watch"
    },
    category: "watches",
    subcategory: "mechanical_watches",
    price: 88.50,
    originalPrice: 198.00,
    discount: 55,
    rating: 4.9,
    orders: 11200,
    reviewsCount: 3410,
    choice: true,
    freeShipping: true,
    featured: true,
    flashDeal: true,
    images: [
      "images/products/pagani-watch.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdPaganiWatch?aff_fcid=official_watches_pagani",
    description: "محرك ياباني سيكو Seiko NH35A أوتوماتيكي ذاتي التعبئة بحركة اليد. زجاج ياقوتي مقاوم للخدش تماماً مع طلاء مانع للانعكاس، وإطار سيراميك دوار أحادي الاتجاه وهيكل من الفولاذ المقاوم للصدأ 316L.",
    specs: {
      "المحرك الداخلي": "سيكو Seiko NH35A ياباني أوتوماتيكي",
      "الزجاج": "ياقوت كريستال Synthetic Sapphire ضد الخدش",
      "الإطار": "سيراميك بـ 120 تكة دوار أحادي الاتجاه",
      "خامة الهيكل": "فولاذ صلب مقاوم للصدأ 316L Stainless Steel",
      "مقاومة الماء": "100 متر / 10 بار مناسبة للسباحة والغوص",
      "الإضاءة الليلية": "BGW9 فسفوري أزرق ساطع في الظلام"
    },
    features: [
      "تعبئة تلقائية بحركة المعصم مع احتياطي طاقة يدوم 41 ساعة",
      "تاج لولبي محكم الإغلاق وظهر زجاجي شفاف يكشف دقة المحرك الداخلي",
      "سوار فولاذي مصمت مع قفل أمان مزدوج قابل للتعديل الدقيق"
    ],
    tags: ["ساعة", "ميكانيكية", "أوتوماتيك", "باغاني ديزاين", "فاخرة"]
  },
  {
    id: "ali-wat-502",
    name: {
      ar: "ساعة ذكية كولمي Colmi P71 بشاشة لمس عالية الدقة 1.9 بوصة مع إجراء واستقبال المكالمات ومراقبة النبض",
      en: "Colmi P71 1.9-Inch HD Screen Smartwatch with Bluetooth Voice Calling & Health Tracker"
    },
    category: "watches",
    subcategory: "smartwatches",
    price: 19.80,
    originalPrice: 45.00,
    discount: 56,
    rating: 4.8,
    orders: 39500,
    reviewsCount: 8940,
    choice: true,
    freeShipping: true,
    featured: false,
    flashDeal: false,
    images: [
      "images/products/smartwatch.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdColmiSmartwatch?aff_fcid=official_smartwatch",
    description: "شاشة لمس ملونة كبرى مقاس 1.9 بوصة برؤية فائقة الوضوح. مزودة بمكبر صوت وميكروفون مدمجين لإجراء المكالمات الهاتفية عبر البلوتوث، مع قياس نبضات القلب ونسبة أكسجين الدم SpO2 ومتابعة النوم وأكثر من 100 وضع رياضي.",
    specs: {
      "الشاشة": "1.9 بوصة IPS عالية الدقة (240 × 284 بكسل)",
      "عمر البطارية": "230 مللي أمبير (7 أيام استخدام عادي، 15 يوماً وضع الاستعداد)",
      "مقاومة الماء": "معيار IP68 المقاوم للماء والغبار",
      "التوافق": "متوافقة مع أجهزة أندرويد وآيفون iOS"
    },
    features: [
      "إجراء واستقبال المكالمات والتحدث مباشرة من معصمك عبر البلوتوث",
      "مراقبة مستمرة لمعدل ضربات القلب ونسبة الأكسجين ومستويات التوتر",
      "أكثر من 200 واجهة وتصميم مختلف للساعة عبر التطبيق المخصص"
    ],
    tags: ["ساعة ذكية", "مكالمات بلوتوث", "لياقة", "كولمي", "رياضية"]
  },

  // 6. Home & Kitchen
  {
    id: "ali-home-601",
    name: {
      ar: "فواحة عطرية ذكية بالموجات فوق الصوتية بتأثير لهب النار الدافئ مع إضاءة LED ملونة وإيقاف تلقائي",
      en: "Smart Ultrasonic Essential Oil Aroma Diffuser with 7-Color LED Flame Night Light"
    },
    category: "home",
    subcategory: "lighting",
    price: 14.50,
    originalPrice: 32.00,
    discount: 55,
    rating: 4.8,
    orders: 33400,
    reviewsCount: 7120,
    choice: true,
    freeShipping: true,
    featured: true,
    flashDeal: true,
    images: [
      "images/products/flame-diffuser.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdFlameDiffuser?aff_fcid=official_diffuser",
    description: "تجمع بين الرذاذ البارد فائق النعومة ومحاكاة لهب النار الضوئي الجذاب لتوفير أجواء استرخاء هادئة ورائحة عطرة للمنزل أو المكتب، مع ميزة الإيقاف الذاتي عند نفاد الماء وتشغيل فائق الهدوء بأقل من 24 ديسيبل.",
    specs: {
      "سعة الخزان": "200 مل مناسب لعدة ساعات مستمرة",
      "معدل الرذاذ": "20 إلى 30 مل في الساعة",
      "مستوى الصوت": "أقل من 24dB هادئ جداً للنوم والعمل",
      "مصدر الطاقة": "منفذ Type-C عالمي (5V 2A)"
    },
    features: [
      "محاكاة واقعية لشعلة النار دون أي حرارة أو خطر حريق نهائياً",
      "نظام حماية ذكي يغلق الجهاز تلقائياً فور نفاد الماء لحماية المحرك",
      "متوافقة مع كافة الزيوت العطرية الطبيعية لتعطير وانتعاش الغرفة"
    ],
    tags: ["فواحة", "زيوت عطرية", "لهب", "منزل", "إضاءة ديكور"]
  },
  {
    id: "ali-home-602",
    name: {
      ar: "قطاعة خضروات وفواكه متعددة الوظائف 14 في 1 مع شفرات حادة من الفولاذ المقاوم للصدأ وحاوية تجميع",
      en: "Multi-Functional 14-in-1 Vegetable Chopper Onion Cutter & Mandoline Slicer with Container"
    },
    category: "home",
    subcategory: "kitchen_gadgets",
    price: 13.99,
    originalPrice: 29.99,
    discount: 53,
    rating: 4.7,
    orders: 41000,
    reviewsCount: 11200,
    choice: true,
    freeShipping: true,
    featured: false,
    flashDeal: false,
    images: [
      "images/products/veggie-chopper.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdVeggieChopper?aff_fcid=official_kitchen_chopper",
    description: "اختصر وقت إعداد الطعام إلى ثوانٍ معدودة. تقطيع وفرم ومكعبات وشرائح لكافة الخضروات والفواكه بشفرات فولاذ 420 حادة مقاومة للصدأ مع واقي يد آمن وحاوية تفريغ شفافة مانعة للفوضى.",
    specs: {
      "الشفرات": "8 شفرات قابلة للتبديل من فولاذ 420 المقاوم للصدأ",
      "سعة الحاوية": "1.2 لتر مع مصفاة تفريغ مياه مدمجة",
      "الخامة": "بلاستيك ABS خالي من مادة BPA وآمن صحياً 100%"
    },
    features: [
      "تقطيع البصل والبطاطس بضغطة واحدة سريعة دون دموع أو إجهاد",
      "قاعدة سفلية مطاطية مانعة للانزلاق مع واقي يد لحماية الأصابع من الشفرات",
      "قابلة للغسل بالكامل في غسالة الأطباق بسهولة وأمان"
    ],
    tags: ["قطاعة", "خضروات", "مطبخ", "طبخ", "أدوات منزلية"]
  },

  // 7. Beauty & Personal Care
  {
    id: "ali-beau-701",
    name: {
      ar: "استشوار ومجفف شعر أيوني فائق السرعة بمحرك بدون فحمات 110,000 دورة بالدقيقة مع تحكم حراري ذكي",
      en: "High-Speed Ionic Hair Dryer with 110,000 RPM Brushless Motor & Thermo-Control"
    },
    category: "beauty",
    subcategory: "haircare",
    price: 43.90,
    originalPrice: 95.00,
    discount: 54,
    rating: 4.9,
    orders: 19800,
    reviewsCount: 4780,
    choice: true,
    freeShipping: true,
    featured: true,
    flashDeal: true,
    images: [
      "images/products/hair-dryer.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdIonicHairDryer?aff_fcid=official_hairdryer",
    description: "يجفف الشعر الطويل في أقل من 3 دقائق دون التسبب في تلف الشعر بالحرارة المفرطة. يطلق 200 مليون أيون سالب للقضاء الفوري على الهيشان والتطاير ومنح الشعر لمعاناً ونعومة كصالونات التجميل.",
    specs: {
      "المحرك": "محرك فائق السرعة 110,000 دورة بالدقيقة بدون فحمات",
      "سرعة الهواء": "تدفق هواء جبار 22 متر في الثانية",
      "الأيونات السالبة": "200 مليون أيون سالب لكل سم مكعب",
      "مستوى الضجيج": "تشغيل هادئ 59 ديسيبل",
      "الفوهات": "فوهة مغناطيسية لتوجيه وتصفيف الهواء"
    },
    features: [
      "مستشعر ذكي يفحص حرارة الهواء 100 مرة بالثانية لحماية بصيلات الشعر",
      "حلقة ضوئية LED تعرض مستويات الحرارة بالألوان (أزرق، أصفر، أحمر)",
      "هيكل خفيف ومتوازن بوزن 407 جرام لراحة تامة أثناء التصفيف"
    ],
    tags: ["مجفف شعر", "استشوار", "أيوني", "عناية بالشعر", "تجميل"]
  },
  {
    id: "ali-beau-702",
    name: {
      ar: "جهاز إزالة الشعر بالليزر المنزلي والنبضات الضوئية IPL مع 999,999 ومضة وتقنية التبريد الثلجي غير المؤلمة",
      en: "Permanent IPL Laser Hair Removal Handset with 999,999 Flashes & Ice Cool Sensation"
    },
    category: "beauty",
    subcategory: "face_cleansers",
    price: 36.80,
    originalPrice: 79.99,
    discount: 54,
    rating: 4.8,
    orders: 25400,
    reviewsCount: 5690,
    choice: true,
    freeShipping: true,
    featured: false,
    flashDeal: false,
    images: [
      "images/products/ipl-laser.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdIPLHairRemover?aff_fcid=official_ipl_laser",
    description: "نتائج صالونات التجميل في منزلك بأمان وخصوصية تامة. نافذة تبريد ثلجي تحافظ على برودة الجلد عند 8 درجات مئوية لتجربة ناعمة وغير مؤلمة نهائياً، مع عداد ومضات يكفي مدى الحياة دون الحاجة لشراء بدائل.",
    specs: {
      "مستويات الطاقة": "5 مستويات طاقة قابلة للتعديل حسب لون البشرة",
      "عدد الومضات": "999,999 ومضة تدوم مدى الحياة",
      "أنماط التشغيل": "وميض يدوي للمناطق الحساسة ووميض تلقائي سريع للمناطق الواسعة"
    },
    features: [
      "انخفاض ملحوظ ومثبت في كثافة ونمو الشعر خلال 4 أسابيع فقط",
      "تقنية التبريد الياقوتية تمنع الاحمرار والتهيج بعد الجلسة",
      "يأتي مع نظارات حماية من الأشعة وشفرة حلاقة تجهيزية داخل العلبة"
    ],
    tags: ["ليزر منزلي", "إزالة الشعر", "ipl", "عناية بالبشرة"]
  },

  // 8. Sports & Outdoor
  {
    id: "ali-spor-801",
    name: {
      ar: "خيمة تخييم أوتوماتيكية بنظام هيدروليكي فوري لـ 3-4 أشخاص مع عزل كامل للأمطار والشمس والرياح",
      en: "Automatic Pop-Up Hydraulic Camping Tent for 3-4 Persons with UV & Waterproof Coating"
    },
    category: "sports",
    subcategory: "camping",
    price: 49.50,
    originalPrice: 110.00,
    discount: 55,
    rating: 4.8,
    orders: 14800,
    reviewsCount: 3290,
    choice: true,
    freeShipping: true,
    featured: true,
    flashDeal: false,
    images: [
      "images/products/camping-tent.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdCampingTent?aff_fcid=official_camping_tent",
    description: "تفتح وتتثبت في 3 ثوانٍ فقط بفضل النظام الهيدروليكي الزنبركي الذكي. تصميم ببابين كبيرين ونافذتين يمنحك تهوية شاملة 360 درجة مع شبك عالي الكثافة لمنع دخول الحشرات وقماش معالج ضد أشعة الشمس والمطر.",
    specs: {
      "السعة": "تتسع لـ 3 إلى 4 أشخاص بالغين براحة تامة",
      "الخامة الخارجية": "قماش أكسفورد 210D مع طلاء PU3000mm عازل للمطر",
      "الأبعاد": "210 × 200 × 135 سم",
      "الحجم عند الطي": "75 × 15 سم داخل حقيبة حمل مدمجة"
    },
    features: [
      "نظام زنبركي هيدروليكي يفتح الخيمة فورياً دون عناء التركيب المعقد",
      "بطانة فضية داخلية تعكس 99% من الأشعة فوق البنفسجية الضارة وتخفض الحرارة",
      "أعمدة فايبر جلاس متينة وأوتاد تثبيت لمقاومة الرياح القوية"
    ],
    tags: ["خيمة", "تخييم", "رحلات", "مقاوم للمطر", "كشتة"]
  },
  {
    id: "ali-spor-802",
    name: {
      ar: "مجموعة أحزمة مقاومة رياضية 11 قطعة لتمارين اللياقة البدنية وبناء العضلات المنزلية بقوة تصل لـ 150 رطلاً",
      en: "11-Piece Heavy-Duty Resistance Bands Fitness Set with Door Anchor & Ankle Straps"
    },
    category: "sports",
    subcategory: "fitness",
    price: 12.80,
    originalPrice: 28.00,
    discount: 54,
    rating: 4.8,
    orders: 37200,
    reviewsCount: 8400,
    choice: true,
    freeShipping: true,
    featured: false,
    flashDeal: true,
    images: [
      "images/products/resistance-bands.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdFitnessBands?aff_fcid=official_fitness_bands",
    description: "نادٍ رياضي متكامل داخل حقيبة صغيرة. 5 أنابيب مقاومة مطاطية من اللاتكس الطبيعي الماليزي المقاوم للقطع تتدرج من 10 إلى 50 رطلاً ويمكن دمجها معاً لتصل إلى 150 رطلاً لتمارين الصدر والظهر والأرجل والذراعين.",
    specs: {
      "الخامة": "100% لاتكس ماليزي طبيعي فائق المرونة مع خطافات فولاذية",
      "المقاومة القصوى": "150 رطلاً قابلة للتدرج والدمج",
      "المحتويات": "5 أحزمة مقاومة، مقبضان رغويان، حزامان للكاحل، مرساة باب، حقيبة حمل"
    },
    features: [
      "خطافات فولاذية سميكة تضمن الأمان التام أثناء تمارين الشد العالي",
      "تتيح مئات التمارين لكافة عضلات الجسم وإعادة التأهيل البدني",
      "سهلة الحمل في السفر والمنزل لممارسة الرياضة في أي وقت ومكان"
    ],
    tags: ["أحزمة مقاومة", "جيم منزلي", "لياقة", "كمال أجسام", "رياضة"]
  },

  // 9. Toys & Games
  {
    id: "ali-toy-901",
    name: {
      ar: "طائرة درون احترافية بكاميرا مزدوجة 4K ومحركات قوية بدون فحمات ونظام GPS للعودة التلقائية إلى مكان الإقلاع",
      en: "KF102 4K Dual Camera GPS Drone with Brushless Motor & 2-Axis Gimbal Stabilization"
    },
    category: "toys",
    subcategory: "drones",
    price: 68.90,
    originalPrice: 149.00,
    discount: 54,
    rating: 4.8,
    orders: 9800,
    reviewsCount: 2650,
    choice: true,
    freeShipping: true,
    featured: true,
    flashDeal: false,
    images: [
      "images/products/gps-drone.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdDroneKF102?aff_fcid=official_drone",
    description: "التقط صوراً وفيديوهات جوية بدقة 4K فائقة الوضوح مع جيمبال ميكانيكي مانع للاهتزاز. ميزة العودة الذكية التلقائية إلى نقطة الانطلاق بضغطة زر أو عند ضعف إشارة التحكم أو انخفاض البطارية، ومحركات تقاوم الرياح.",
    specs: {
      "الكاميرا": "كاميرا مزدوجة 4K EIS بزاوية إمالة 90 درجة بالريموت",
      "المحرك": "محركات Brushless قوية مقاومة للرياح حتى المستوى 7",
      "زمن الطيران": "حوالي 25 دقيقة طيران مستمر للبطارية",
      "مدى الإرسال": "1200 متر عبر بث 5GHz FPV المباشر على الهاتف",
      "البطارية": "بطارية ليثيوم ذكية قابلة للإزالة 7.4V 2200mAh"
    },
    features: [
      "عودة ذاتية ذكية عبر نظام الملاحة الفضائية GPS في حال فقدان الاتصال",
      "تحديد الموقع بالتدفق البصري لثبات استثنائي أثناء الطيران في الأماكن المغلقة",
      "التصوير بإشارات اليد وميزة التتبع الذكي للأشخاص Follow Me"
    ],
    tags: ["درون", "طائرة", "كاميرا 4k", "تصوير جوي", "ألعاب"]
  },
  {
    id: "ali-toy-902",
    name: {
      ar: "جهاز ألعاب كلاسيكي محمول R36S بشاشة IPS عالية الوضوح مقاس 3.5 بوصة وذاكرة 64 جيجابايت تضم أكثر من 15,000 لعبة",
      en: "R36S Open Source Linux Retro Handheld Video Game Console with 64GB 15,000+ Games"
    },
    category: "toys",
    subcategory: "retro_gaming",
    price: 34.20,
    originalPrice: 69.99,
    discount: 51,
    rating: 4.9,
    orders: 48900,
    reviewsCount: 13800,
    choice: true,
    freeShipping: true,
    featured: false,
    flashDeal: true,
    images: [
      "images/products/r36s-console.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdR36SConsole?aff_fcid=official_retro_console",
    description: "جهاز الألعاب الأكثر شهرة وانتشاراً! مزود بمعالج رباعي النواة بنظام لينكس مفتوح المصدر لتشغيل كافة محاكيات ألعاب الطفولة الكلاسيكية PS1 و GBA و N64 و MAME وغيرها بسلاسة 60 إطاراً في الثانية مع شاشة زجاجية بدون فراغات.",
    specs: {
      "الشاشة": "3.5 بوصة IPS بدقة 640 × 480 بزجاج OCA المصفح بالكامل",
      "المعالج": "RK3326 رباعي النواة 1.5 جيجاهرتز 64 بت",
      "الذاكرة العشوائية": "DDR3L سعة 1 جيجابايت",
      "البطارية": "3500 مللي أمبير تدوم حتى 8 ساعات لعب متواصلة",
      "التخزين": "منفذ مزدوج لبطاقات TF (تتضمن بطاقة 64GB محملة بالألعاب)"
    },
    features: [
      "محمل مسبقاً بأكثر من 15,000 لعبة كلاسيكية من ألعاب الأركيد والطفولة",
      "عصي تحكم تناظرية ثلاثية الأبعاد مزدوجة 3D وأزرار كتف تكتيكية مريحة",
      "يدعم توصيل أذرع التحكم الخارجية OTG للعب الجماعي مع الأصدقاء"
    ],
    tags: ["r36s", "ألعاب ريترو", "بلايستيشن", "جيم بوي", "ألعاب كلاسيكية"]
  },

  // 10. Car Accessories
  {
    id: "ali-auto-1001",
    name: {
      ar: "كاميرا مراقبة القيادة للسيارة داش كام 4K بعدسة مزدوجة مع واي فاي وتتبع GPS ورؤية ليلية وحراسة للمواقف 24 ساعة",
      en: "4K Dual Lens Car Dash Cam with Built-In WiFi, GPS, Night Vision & 24H Parking Monitor"
    },
    category: "auto",
    subcategory: "dashcams",
    price: 39.99,
    originalPrice: 89.00,
    discount: 55,
    rating: 4.8,
    orders: 29300,
    reviewsCount: 6810,
    choice: true,
    freeShipping: true,
    featured: true,
    flashDeal: true,
    images: [
      "images/products/dashcam.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdDashCam4K?aff_fcid=official_dashcam",
    description: "سجل كل لحظة على الطريق بدقة 4K الترا إتش دي فائقة الوضوح. مستشعر سوني المتطور يضمن قراءة لوحات السيارات بوضوح حتى في الظلام الدامس، مع مستشعر صدمات G-Sensor يقفل تسجيلات الحوادث تلقائياً لمنع مسحها.",
    specs: {
      "الدقة الأمامية": "4K Ultra HD (3840 × 2160 بكسل بمعدل 30 إطاراً)",
      "زاوية الرؤية": "170 درجة زاوية عريضة تغطي 4 مسارات طريق",
      "مستشعر الصورة": "مستشعر Sony مع تقنية النطاق الديناميكي الواسع WDR",
      "الاتصال": "واي فاي مدمج لعرض وحفظ الفيديوهات على الهاتف + نظام GPS",
      "التخزين": "يدعم بطاقات ذاكرة MicroSD حتى 256 جيجابايت"
    },
    features: [
      "تسجيل حلقي مستمر يكتب فوق المقاطع القديمة تلقائياً دون انقطاع",
      "تطبيق للهواتف الذكية لمشاهدة وتنزيل المقاطع في ثوانٍ دون استهلاك بيانات",
      "وضع مراقبة المواقف والحراسة على مدار 24 ساعة عند استشعار أي حركة أو صدمة"
    ],
    tags: ["داش كام", "كاميرا سيارة", "4k", "مراقبة", "إكسسوارات سيارات"]
  },
  {
    id: "ali-auto-1002",
    name: {
      ar: "مكنسة سيارة لاسلكية باسيوس Baseus بقوة شفط إعصارية 12000 باسكال مع فلتر هيبا قابل للغسل وملحقات متعددة",
      en: "Baseus Cordless Handheld Car Vacuum Cleaner High Power with Washable HEPA Filter"
    },
    category: "auto",
    subcategory: "car_cleaners",
    price: 22.40,
    originalPrice: 48.00,
    discount: 53,
    rating: 4.8,
    orders: 34100,
    reviewsCount: 8200,
    choice: true,
    freeShipping: true,
    featured: false,
    flashDeal: false,
    images: [
      "images/products/car-vacuum.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdBaseusCarVacuum?aff_fcid=official_car_vacuum",
    description: "تصميم أسطواني معدني فخم ومدمج يوضع بسهولة في حامل الأكواب بالسيارة. تشفط الأتربة والرمال وبقايا الطعام وشعر الحيوانات الأليفة في ثوانٍ دون أسلاك متشابكة مع فلترة مزدوجة تنقي الهواء.",
    specs: {
      "قوة الشفط": "شفط إعصاري جبار بقوة 12000 باسكال",
      "البطارية": "بطارية ليثيوم مدمجة تدوم لأكثر من 25 دقيقة تشغيل مستمر",
      "نظام الفلترة": "فلتر معدني خارجي + فلتر HEPA قابل للغسل وإعادة الاستخدام",
      "الشحن": "منفذ Type-C شحن سريع في السيارة أو المنزل"
    },
    features: [
      "تتضمن فوهة رفيعة للمناطق الضيقة وفرشاة لمقاعد السيارة وفتحات التكييف",
      "تفريغ حاوية الغبار بضغطة زر واحدة دون لمس الأوساخ باليدين",
      "هيكل متين من سبائك الألمنيوم المقاوم للصدمات والحرارة"
    ],
    tags: ["مكنسة سيارة", "باسيوس", "تنظيف", "لاسلكي", "سيارات"]
  },

  // 11. Other Products
  {
    id: "ali-oth-1101",
    name: {
      ar: "طابعة ملصقات حرارية لاسلكية محمولة نيمبوت Niimbot D110 تعمل بالبلوتوث وتطبع بدون حبر للمنزل والمكتب",
      en: "Niimbot D110 Portable Wireless Bluetooth Thermal Label Maker Printer with Sticker Tape"
    },
    category: "other",
    subcategory: "office",
    price: 15.90,
    originalPrice: 34.00,
    discount: 53,
    rating: 4.9,
    orders: 36700,
    reviewsCount: 9940,
    choice: true,
    freeShipping: true,
    featured: true,
    flashDeal: true,
    images: [
      "images/products/label-printer.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdNiimbotPrinter?aff_fcid=official_label_maker",
    description: "تقنية الطباعة الحرارية المباشرة لا تحتاج إلى حبر أو مسحوق تونر نهائياً! تتصل بالهاتف عبر تطبيق مجاني غني بمئات الخطوط والأيقونات والباركود لتنظيم المطبخ والأسلاك والأدراج والملفات المدرسية والمكتبية.",
    specs: {
      "تقنية الطباعة": "حرارية مباشرة (بدون حبر)",
      "عرض الشريط": "12 إلى 15 ملم للملصقات المتنوعة",
      "الدقة": "203 DPI خطوط ورسومات حادة وواضحة",
      "البطارية": "1200 مللي أمبير قابلة لإعادة الشحن بالـ Type-C"
    },
    features: [
      "ملصقات متينة مقاومة للماء والزيوت والتمزق ولا تترك أي أثر صمغي عند إزالتها",
      "مثالية لتنظيم برطمانات التوابل وتسمية كابلات الشحن ومستحضرات التجميل",
      "حجم جيب صغير وخفيف يزن 137 جرام فقط لحملها معك إلى أي مكان"
    ],
    tags: ["طابعة ملصقات", "حرارية", "تنظيم", "مكتب", "نيمبوت"]
  },
  {
    id: "ali-oth-1102",
    name: {
      ar: "جهاز تنظيف احترافي بالموجات فوق الصوتية للمجوهرات والنظارات والساعات والفرش بتردد عالي 45,000 هرتز",
      en: "Ultrasonic Professional Jewelry & Eyeglasses Cleaner 45,000Hz High Frequency Bath"
    },
    category: "other",
    subcategory: "gadgets",
    price: 13.50,
    originalPrice: 28.00,
    discount: 52,
    rating: 4.8,
    orders: 22800,
    reviewsCount: 5120,
    choice: true,
    freeShipping: true,
    featured: false,
    flashDeal: false,
    images: [
      "images/products/ultrasonic-cleaner.svg"
    ],
    affiliateUrl: "https://s.click.aliexpress.com/e/_DdUltrasonicCleaner?aff_fcid=official_cleaner",
    description: "تنظيف صوتي متقدم بتردد 45000 هرتز يولد ملايين الفقاعات المجهرية التي تزيل الأوساخ والدهون الصعبة المتراكمة في أدق ثنايا الخواتم والنظارات وأحزمة الساعات وأدوات الحلاقة في 3 دقائق بماء الصنبور العادي.",
    specs: {
      "تردد الموجات": "45,000 هرتز اهتزاز تنظيف صوتي عالي التردد",
      "خامة الحوض": "فولاذ مقاوم للصدأ SUS304 آمن تماماً",
      "السعة": "حوض بسعة 350 مل يتسع للنظارات والساعات الكبيرة",
      "دورة التشغيل": "مؤقت تلقائي بضغطة زر واحدة لمدة 3 دقائق"
    },
    features: [
      "يعيد اللمعان والبريق للذهب والفضة والمجوهرات والنظارات دون أي خدش",
      "آمن وغير كاشط ويعمل بكفاءة فقط باستخدام ماء الصنبور النظيف",
      "قواعد سيليكونية سفلية مانعة للاهتزاز وتضمن هدوء التشغيل"
    ],
    tags: ["جهاز تنظيف", "موجات فوق صوتية", "مجوهرات", "نظارات", "منزل"]
  }
];

const INITIAL_BANNERS = [
  {
    id: "banner-1",
    title: {
      ar: "عروض يوم تشويس الكبرى من علي إكسبرس Choice Day",
      en: "AliExpress Choice Day Mega Deals"
    },
    subtitle: {
      ar: "خصومات تصل إلى 70% مع شحن مجاني متتبع وضمان استرداد كامل للأموال لمدة 75 يوماً",
      en: "Up to 70% Off with verified free shipping and 75-day buyer protection guarantee."
    },
    ctaText: {
      ar: "تسوق أفضل عروض علي إكسبرس الآن",
      en: "Explore Choice Deals"
    },
    ctaUrl: "#choice",
    badge: {
      ar: "مختارات Choice الرسمية",
      en: "OFFICIAL CHOICE SELECTION"
    },
    bgGradient: "linear-gradient(135deg, #FF4747 0%, #FF6E40 50%, #FF9100 100%)",
    active: true
  },
  {
    id: "banner-2",
    title: {
      ar: "تخفيضات الإلكترونيات والملحقات الذكية لعام 2026",
      en: "Smart Tech & Electronics SuperDeals 2026"
    },
    subtitle: {
      ar: "أقوى الشواحن وسماعات البلوتوث الذكية وأجهزة الألعاب بأقل أسعار ترويجية متتبعة",
      en: "Trending GaN fast chargers, HiFi earbuds, and retro gaming consoles at rock-bottom prices."
    },
    ctaText: {
      ar: "استعرض قسم الإلكترونيات",
      en: "Shop Electronics"
    },
    ctaUrl: "#electronics",
    badge: {
      ar: "أقوى العروض SuperDeals",
      en: "SUPERDEALS"
    },
    bgGradient: "linear-gradient(135deg, #1E3C72 0%, #2A5298 50%, #00C9FF 100%)",
    active: true
  }
];

const INITIAL_SETTINGS = {
  siteName: "AliMarket Global",
  siteTagline: "البوابة المعتمدة لاكتشاف أفضل عروض ومختارات AliExpress الحصرية",
  affiliateId: "official_ali_2026",
  defaultAffiliateUrl: "https://s.click.aliexpress.com/e/_DEmoAffiliateLink",
  currency: "USD",
  currencySymbol: "$",
  defaultLanguage: "ar",
  adminPin: "marketali2026",
  disclosureText: "إفصاح الشفافية التسويقية: نعمل كوسيط استعراض وإحالة تسويقي رسمي. عند نقرك على زر الشراء وإتمام التسوق على موقع أو تطبيق AliExpress الرسمي، قد نحصل على عمولة تسويقية معتمدة دون أن يترتب عليك أي مبلغ إضافي نهائياً.",
  contactEmail: "support@alimarket-deals.com"
};

if (typeof window !== "undefined") {
  window.INITIAL_CATEGORIES = INITIAL_CATEGORIES;
  window.INITIAL_PRODUCTS = INITIAL_PRODUCTS;
  window.INITIAL_BANNERS = INITIAL_BANNERS;
  window.INITIAL_SETTINGS = INITIAL_SETTINGS;
}
