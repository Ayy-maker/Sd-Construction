# SD Construction Builders - Modern Website

A modern, responsive construction company website featuring animated statistics, project showcases, and optimized for quick engagement.

![SD Construction](https://img.shields.io/badge/Construction-Website-0EA5E9?style=for-the-badge)
![Responsive](https://img.shields.io/badge/Mobile-Responsive-success?style=for-the-badge)
![No Framework](https://img.shields.io/badge/Pure-HTML%2FCSS%2FJS-orange?style=for-the-badge)

## ✨ Features

### 🎨 Modern Design
- **Sky Blue Color Scheme** - Professional and trustworthy
- **Gradient Effects** - Modern visual appeal
- **Smooth Animations** - Engaging user experience
- **Clean Layout** - Easy to navigate

### 📱 Fully Responsive
- **Desktop** (>1024px) - Full-featured layout
- **Tablet** (768-1024px) - Optimized for iPad
- **Mobile Landscape** (640-968px) - Compact design
- **Mobile Portrait** (<640px) - Single column, large text

### 🎬 Interactive Elements
- **Animated Stats Counter** - Numbers count from 0 to final value
- **Project Hover Effects** - Cards lift and highlight
- **Smooth Scrolling** - Navigation with smooth transitions
- **Mobile Menu** - Hamburger menu for small screens

### 🏗️ Content Sections
1. **Hero** - Showcasing 3 featured projects upfront
2. **Projects** - 6 detailed project cards with categories
3. **3D Visualization** - YouTube video embeds
4. **Services** - Architecture, Construction, Interior, Renovation
5. **Why Choose Us** - 10 years of experience highlights
6. **Testimonials** - Client feedback
7. **Process** - 4-step workflow
8. **FAQ** - Common questions
9. **Contact** - Form and location details

## 🚀 Quick Start

### View Locally
1. Clone or download this repository
2. Open `index.html` in your browser
3. That's it! No build process needed

### Deploy to Web
- **GitHub Pages** - Free hosting (see instructions below)
- **Netlify** - Drag & drop deployment
- **Vercel** - Import from GitHub
- **Traditional Hosting** - Upload via FTP

## 📊 Technical Details

### Performance
- **Fast Loading** - Optimized for 6-8 second attention span
- **Lightweight** - Total size ~1.1MB including images
- **No Dependencies** - Pure HTML/CSS/JavaScript
- **60fps Animations** - Smooth performance

### Browser Support
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Files Structure
```
sd-construction/
├── images/               # All project images (10 files)
│   ├── hero-bg.jpg
│   ├── project-*.jpg
│   └── service-*.jpg
├── index.html           # Main HTML file (498 lines)
├── styles.css          # All styles (1260+ lines)
├── script.js           # Interactive features (152 lines)
└── .gitignore          # Git ignore rules
```

## 🎯 Design Highlights

### Color Palette
```css
Primary Blue:    #0EA5E9  (Sky blue)
Primary Dark:    #0284C7  (Darker blue)
Primary Light:   #38BDF8  (Light blue)
Accent Cyan:     #06B6D4  (Teal)
Text Dark:       #0A0A0A  (Near black)
Text Light:      #666666  (Gray)
```

### Typography
- **Font:** Inter (Google Fonts)
- **Headings:** 900 weight, tight letter-spacing
- **Body:** 400-600 weight, optimal line height

### Responsive Breakpoints
- `1024px` - Tablet optimization
- `968px` - Mobile landscape
- `640px` - Mobile portrait

## 🌐 Enable GitHub Pages

After pushing to GitHub:

1. Go to **Settings** → **Pages**
2. Source: Deploy from branch `main`
3. Folder: `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes
6. Access at: `https://YOUR-USERNAME.github.io/Sd-Construction/`

## 📱 Mobile Preview

### Chrome DevTools
1. Open `index.html` in Chrome
2. Press `F12` (or `Cmd+Option+I` on Mac)
3. Click phone icon 📱 or press `Cmd+Shift+M`
4. Select device: iPhone, iPad, etc.

### Test on Real Device
1. Start local server: `python3 -m http.server 8000`
2. Find your IP: `ifconfig | grep "inet "`
3. Open on phone: `http://YOUR-IP:8000`

## 🔧 Customization

### Update Content
Edit `index.html` to change:
- Company name and contact info
- Project descriptions and images
- Service offerings
- Testimonials

### Change Colors
Edit `styles.css` at the top:
```css
:root {
    --primary: #0EA5E9;      /* Change this */
    --primary-dark: #0284C7;  /* And this */
    /* ... */
}
```

### Add/Remove Sections
Sections are clearly marked in `index.html`:
```html
<!-- Hero Section -->
<!-- Projects Section -->
<!-- Services Section -->
etc.
```

## 📈 Stats Animation

The counter animation triggers when scrolling into view:
- **80+** Projects Completed
- **100+** Happy Clients  
- **10+** Years Experience

Smooth 2-second animation, only plays once per page load.

## 🖼️ Images

All images optimized:
- Format: JPEG
- Total: 10 images (~1.1MB)
- Responsive: Multiple sizes via CSS
- Lazy loading ready

### Replace Images
1. Add new images to `images/` folder
2. Update `src` attributes in HTML
3. Maintain aspect ratios for best results

## 🤝 Contributing

This is a client project. For modifications:
1. Test on multiple devices
2. Verify all links work
3. Check mobile responsiveness
4. Test form functionality

## 📄 License

Proprietary - SD Construction Builders

## 📞 Contact

**SD Construction Company**
- Location: Hattigaunda Chowk, Budhanilkantha-07, Kathmandu, Nepal
- Email: info@sdconstructionbuilders.com
- Phone/WhatsApp: 9841206076
- Facebook: [SDContruction](https://www.facebook.com/ShivapuriDristiBudhanilkantha)

---

## 🎉 Key Achievements

✅ **Modern Design** - Contemporary aesthetic  
✅ **Fast Loading** - No heavy animations  
✅ **Mobile First** - Optimized for all devices  
✅ **SEO Ready** - Semantic HTML structure  
✅ **Animated Stats** - Engaging user experience  
✅ **Project Showcase** - Front and center  
✅ **Easy to Update** - Clear code structure  

Built with ❤️ for SD Construction Builders

---

**Version:** 1.0.0  
**Last Updated:** November 2024  
**Status:** ✅ Production Ready
