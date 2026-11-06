# AliExpress Affiliate Shopping Marketplace (AliMarket Global)

A complete, high-converting, modern affiliate shopping marketplace inspired by the official **AliExpress** shopping experience, tailored specifically for the **official AliExpress Affiliate Program**.

---

## 1. Business Model Architecture — Exclusively Affiliate

This marketplace operates strictly as an affiliate referral engine:
* **Zero Inventory**: You never buy, warehouse, or store products.
* **Zero Order Handling**: Customers do not submit delivery addresses or orders to your server.
* **Zero Payment Processing**: You never collect credit card or checkout payments.
* **Zero Packaging & Shipping**: 100% of order fulfillment, tracking numbers, customer disputes, and returns are managed directly by AliExpress.
* **Direct Authorized Redirection**: When a visitor clicks **"BUY ON ALIEXPRESS"**, they are transferred directly to the authentic AliExpress product page with your official affiliate tracking ID (`aff_fcid`, `sk`, `sub_id`, or `s.click.aliexpress.com` tracking link).
* **Guaranteed Earnings**: Commissions are tracked and paid out by the official AliExpress Affiliate Program.

---

## 2. Key Features

### 🛍️ Storefront & User Experience
* **AliExpress Design System**: Authentic AliExpress red branding, signature badges (*AliExpress Choice*, *SuperDeals*, *Top Seller*, *Free Shipping*).
* **Hero Banner Carousel**: Interactive auto-sliding promotional banners with countdown deal timers.
* **Live Search with Autocomplete**: Real-time search with debounced product suggestions and category filtering.
* **Dynamic Sorting & Filtering**: Sort by popularity, price (low-high, high-low), rating, and discount. Filter by price range, rating threshold, Free Shipping, and AliExpress Choice.
* **Wishlist Counter**: Instant local wishlist saving with counter badge in header.
* **Multi-Language & Arabic RTL**: Full translation and instant switching between:
  - 🇺🇸 **English** (LTR)
  - 🇫🇷 **French** (LTR)
  - 🇸🇦 **Arabic (العربية)** (Full RTL layout, mirrored navigation, Tajawal typography)

### 📦 Product Detail Pages (`product.html`)
* Multi-angle high-resolution photo gallery with interactive thumbnail switcher.
* Live savings calculator: displays current price, strikethrough original price, and savings badge.
* Prominent animated **"BUY ON ALIEXPRESS"** CTA button opening in a new tab.
* **AliExpress 75-Day Buyer Protection** trust badge.
* Transparent FTC affiliate disclosure notice.
* Technical specifications table and key features checklist.
* Verified customer reviews breakdown.
* Related "Similar AliExpress Choice Deals" recommendations.

### 🔐 Secure Admin Dashboard (`admin.html`)
* **PIN / Password Authentication**: Protected with admin PIN (Default: `marketali2026`, customizable in settings).
* **Product Management**: Add, edit, and delete products. Supports image URLs or file upload (auto-converted to Base64 so it runs without backend storage).
* **Category Management**: Edit, add, or delete categories and subcategories with custom icons.
* **Outbound Traffic Logger**: Real-time log of every visitor click to AliExpress, tracking product, category, timestamp, trigger source, and target URL.
* **Affiliate Link DeepLink Generator**: Test any raw AliExpress URL to inspect how tracking parameters are automatically attached.
* **Open Platform API Ready**: Dedicated configuration for AliExpress App Key, App Secret, and Tracking ID for future automated feed synchronization.
* **Bulk Export & Import**: 1-click JSON backup and restore to easily migrate or back up hundreds of products.
* **Demo Reset**: Instant 1-click reset to restore the original catalog if ever needed.

---

## 3. Pre-Loaded Categories

Includes all 11 required categories with realistic, high-converting AliExpress items:
1. **Electronics & Accessories** (HiFi Earbuds, GaN Chargers, Mechanical Keyboards)
2. **Smartphones & Accessories** (MagSafe Power Banks, Shockproof Cases)
3. **Fashion & Clothing** (Waterproof Windbreakers, Oversized Knit Cardigans)
4. **Shoes & Sandals** (Air Mesh Running Sneakers, Pillow Cloud Slides)
5. **Watches & Accessories** (Automatic Sapphire Diver Watches, Smart Fitness Bands)
6. **Home & Kitchen** (Flame Aroma Diffusers, 14-in-1 Vegetable Choppers)
7. **Beauty & Personal Care** (High-Speed Ionic Hair Dryers, IPL Laser Devices)
8. **Sports & Outdoor** (Hydraulic Pop-Up Tents, Resistance Workout Sets)
9. **Toys & Games** (4K GPS Drones, R36S Retro Handheld Consoles)
10. **Car Accessories** (4K WiFi Dashcams, Cordless High-Power Car Vacuums)
11. **Other Products** (Portable Thermal Label Makers, Ultrasonic Cleaners)

---

## 4. How to Run Locally

### Option A: Double-Click (Easiest for Windows)
1. Double-click `start-server.bat`.
2. The server starts at `http://localhost:3000` and automatically opens in your default web browser.

### Option B: Open `index.html` Directly
Because this marketplace is built with modern vanilla web standards (HTML5, CSS3, ES modules, LocalStorage), you can also simply **double-click `index.html`** in any web browser without needing any web server at all!

---

## 5. Connecting Your Official AliExpress Affiliate Account

1. Register or sign in at [AliExpress Portals](https://portals.aliexpress.com).
2. Go to **Settings > Tracking ID** and copy your authorized Tracking ID (e.g., `yourname_2026`).
3. In your store:
   - Click **Admin** in the top bar.
   - Enter PIN: `marketali2026`.
   - Go to the **Affiliate & Links** tab.
   - Paste your **Tracking ID** and **Sub-ID**, then click **Save Affiliate Settings**.
4. When adding individual products in Admin, paste your affiliate links from the AliExpress Portals Link Generator (or standard item links). The store automatically appends your tracking tags to guarantee referral commissions.

---

## 6. Free 100% Free Hosting Options

You can host this entire marketplace for **$0 / month** on any of these free platforms:

* **GitHub Pages**:
  1. Create a free repository on GitHub.
  2. Push this folder to your repository.
  3. In repository Settings > Pages, select Branch: `main` and Folder: `/ (root)`.
  4. Your website is live worldwide with free SSL!

* **Netlify**:
  - Drag and drop the `market` folder directly into [Netlify Drop](https://app.netlify.com/drop).

* **Vercel**:
  - Deploy directly via the Vercel CLI (`vercel`) or connect your GitHub repository.

* **Cloudflare Pages**:
  - Connect your GitHub repository for lightning-fast global CDN delivery.

---

## 7. File Structure

```
market/
├── index.html                   # Main Marketplace Homepage
├── product.html                 # Product Detail Page with Affiliate CTAs
├── admin.html                   # Secure Admin Dashboard & Analytics Portal
├── redirect.html                # Outbound Interstitial Click Tracker
├── privacy-affiliate-disclosure.html # FTC & AliExpress Legal Compliance Notice
├── server.ps1                   # Zero-dependency PowerShell local server
├── start-server.bat             # 1-click Windows launcher
├── README.md                    # Documentation & setup guide
├── css/
│   ├── main.css                 # AliExpress design system, hero, cards, filters
│   ├── product.css              # Product gallery, specs, sticky CTA styles
│   ├── admin.css                # Admin panel tables, modals, analytics styles
│   └── rtl.css                  # Full Arabic RTL mirroring & typography
└── js/
    ├── data.js                  # Initial rich catalog across all 11 categories
    ├── store.js                 # Unified LocalStorage persistence & CRUD
    ├── i18n.js                  # Multi-lingual translations (EN, FR, AR RTL)
    ├── tracker.js               # Authorized AliExpress link builder & click logger
    ├── main.js                  # Homepage controller & search
    ├── product.js               # Product detail page controller
    └── admin.js                 # Admin portal logic & backup controls
```
"# market" 
"# market" 
"# market" 
