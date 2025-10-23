# 🌟 AETERNA - Luxury Fragrance Website

A beautiful, fully responsive luxury fragrance e-commerce website built with pure HTML, CSS, and JavaScript.

![Aeterna](attached_assets/logo_1760546447927.jpg)

## 📦 What's Included

```
aeterna-website/
├── index.html              # Main HTML structure
├── styles.css              # All styling (dark luxury theme)
├── script.js               # Interactive features & navigation
├── HOW_TO_RUN.txt         # Quick start guide
├── README.md              # This file
└── attached_assets/       # All images (13 files)
    ├── fragrance1_*.png
    ├── fragrance2_*.png
    ├── fragrancewomen1_*.png
    ├── fw2_*.png
    ├── fw3_*.png
    ├── gift1_*.jpg
    ├── huge_*.png
    ├── logo_*.jpg
    ├── menimage_*.png
    ├── set1_*.png
    ├── set2_*.png
    ├── towel_*.png
    └── women_*.jpg
```

## 🚀 Quick Start

### Method 1: Double-Click (Easiest)
Simply double-click `index.html` to open in your browser.

### Method 2: Python Server (Recommended)
```bash
cd aeterna-website
python -m http.server 8000
```
Then open: `http://localhost:8000`

### Method 3: Node.js
```bash
cd aeterna-website
npx serve
```

## ✨ Features

### Hero Section
- **Background Collage Layout**
  - Left: Women's fragrance lifestyle image
  - Right Top: Luxury couple with fragrances
  - Right Bottom: Sophisticated man with fragrance
  - Beautiful gaps between images
  - Dark overlay for text readability

### Product Collections
- **Men's Fragrances**: 6 products
- **Women's Fragrances**: 6 products
- **4 Categories**: New In, Nightfall Elixirs, The Limited Edit, Most Celebrated

### Interactive Features
- ✅ Category filtering
- ✅ Smooth animations & hover effects
- ✅ Mobile-responsive navigation
- ✅ Admin dashboard for product management
- ✅ Shopping cart functionality
- ✅ Dark luxury theme with gold accents

## 🎨 Design

- **Typography**: Playfair Display (headings) + Inter (body)
- **Color Scheme**: Dark background with warm gold (#D4AF37) accents
- **Animations**: Smooth zoom, rotation, and transition effects
- **Layout**: CSS Grid & Flexbox for responsive design

## 📝 Customization

### Changing Products
Edit `script.js` - find the `products` object:

```javascript
const products = {
    men: [
        { 
            id: 1, 
            name: "Midnight Essence", 
            price: 149, 
            image: "attached_assets/fragrance1_*.png", 
            category: "nightfall-elixirs",
            // ... more fields
        },
        // Add more products here
    ],
    women: [ /* ... */ ]
};
```

### Changing Colors
Edit `styles.css` - find the `:root.dark` variables:

```css
:root.dark {
    --background: hsl(12, 8%, 8%);      /* Dark background */
    --foreground: hsl(40, 15%, 92%);    /* Light text */
    --primary: hsl(45, 80%, 58%);       /* Gold accent */
    /* ... */
}
```

### Adding Images
1. Add your image to `attached_assets/` folder
2. Reference it in products: `image: "attached_assets/your-image.png"`

## 💻 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)  
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Pages Included

1. **Home** (`#home`)
   - Hero collage section
   - Category cards
   - Footer

2. **Men's Collection** (`#men`)
   - Filterable product grid
   - Category filters

3. **Women's Collection** (`#women`)
   - Filterable product grid
   - Category filters

4. **Admin Dashboard** (`#admin`)
   - Product management
   - Add new products form

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid & Flexbox
- **JavaScript (ES6+)** - Interactive features
- **Google Fonts** - Playfair Display, Inter, Cormorant Garamond

## 📄 No Dependencies!

This website runs completely standalone:
- ❌ No npm install required
- ❌ No build process
- ❌ No frameworks (React, Vue, etc.)
- ❌ No backend server needed
- ✅ Just open and run!

## 🔧 Development

All code is clean, commented, and easy to modify:
- Organized CSS with clear sections
- Modular JavaScript functions
- Semantic HTML structure
- Mobile-first responsive design

## 📞 Support

All code is self-contained and documented. Simply:
1. Edit files in any text editor
2. Refresh browser to see changes
3. No compilation or build steps needed

---

**Built with passion for luxury and elegance** ✨

*Aeterna - Luxury Lasts for an Eternity*
