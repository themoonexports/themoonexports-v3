# v2 Site Architecture Documentation

## 🏗️ Original Technology Stack

### Frontend Framework
- **HTML5** - Static HTML pages
- **Bootstrap 3.x** - CSS framework for responsive design
- **jQuery** - JavaScript library for DOM manipulation
- **Font Awesome** - Icon library
- **Glyphicons** - Additional icons from Bootstrap

### File Structure (v2)
```
v2-site/
├── index.html                  # Homepage
├── about.html                  # About page
├── contact.html                # Contact form
├── products.html               # Product overview
├── buffalo-horn-plates.html    # Product category pages
├── wooden-crafts.html
├── resin-products.html
├── css/
│   ├── bootstrap.min.css       # Bootstrap framework
│   ├── font-awesome.min.css    # Icons
│   └── custom.css              # Custom styles
├── js/
│   ├── jquery.min.js           # jQuery library
│   ├── bootstrap.min.js        # Bootstrap JS
│   └── custom.js               # Custom JavaScript
├── fonts/
│   └── glyphicons/             # Bootstrap icons
└── images/                     # All product images (88 files)
```

### Key Components (v2)

#### Navigation
- **Bootstrap Navbar** - Responsive navigation bar
- **Dropdown Menus** - Product categories
- **Mobile Menu** - Hamburger menu for mobile

#### Hero Section
- **Carousel** - Image slider with multiple slides
- **Overlay Text** - Call-to-action content
- **Responsive Images** - Bootstrap responsive image classes

#### Product Grid
- **Bootstrap Grid System** - 12-column layout
- **Product Cards** - Bootstrap panels/cards
- **Image Galleries** - jQuery image viewers
- **Modal Windows** - Product detail popups

#### Contact Forms
- **Bootstrap Forms** - Styled form elements
- **jQuery Validation** - Client-side form validation
- **PHP Backend** - Form submission handling

#### Footer
- **Multi-column Layout** - Bootstrap columns
- **Social Media Icons** - Font Awesome icons
- **Contact Information** - Business details

## 🎨 Design Patterns (v2)

### CSS Architecture
```css
/* Bootstrap-based responsive design */
.container {
    max-width: 1200px;
    margin: 0 auto;
}

.row {
    display: flex;
    flex-wrap: wrap;
}

.col-md-4 {
    width: 33.33%;
}

/* Custom overrides */
.custom-navbar {
    background-color: #2c3e50;
    border: none;
}

.product-card {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 15px;
    margin-bottom: 20px;
}
```

### JavaScript Patterns
```javascript
// jQuery-based interactions
$(document).ready(function() {
    // Carousel initialization
    $('.carousel').carousel({
        interval: 5000,
        pause: 'hover'
    });
    
    // Product image gallery
    $('.product-image').on('click', function() {
        var imageUrl = $(this).data('full-image');
        showImageModal(imageUrl);
    });
    
    // Form validation
    $('#contact-form').on('submit', function(e) {
        if (!validateForm()) {
            e.preventDefault();
        }
    });
});
```

## 📱 Responsive Design (v2)

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 991px
- **Desktop**: 992px - 1199px
- **Large Desktop**: > 1200px

### Mobile Optimizations
- **Collapsible Navigation** - Bootstrap navbar collapse
- **Stack Layout** - Vertical stacking on small screens
- **Touch-friendly** - Larger buttons and touch targets
- **Optimized Images** - Smaller images for mobile

## 🔍 SEO Implementation (v2)

### Meta Tags
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Buffalo horn handicrafts from India">
<meta name="keywords" content="buffalo horn, handicrafts, export">
<meta name="author" content="The Moon Exports">

<!-- Open Graph -->
<meta property="og:title" content="The Moon Exports">
<meta property="og:description" content="Premium buffalo horn handicrafts">
<meta property="og:image" content="/images/logo.png">
<meta property="og:url" content="https://themoonexports.com">
```

### Structured Data
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "The Moon Exports",
  "url": "https://themoonexports.com",
  "logo": "/images/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-8909070131",
    "contactType": "sales"
  }
}
</script>
```

## 📊 Analytics & Tracking (v2)

### Google Analytics
```html
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-XXXXXXXX-X', 'auto');
ga('send', 'pageview');
</script>
```

### Yandex Metrika
```html
<script type="text/javascript">
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(XXXXXXXX, "init", {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true
});
</script>
```

## 🔗 URL Structure (v2)

### Page URLs
- `/` - Homepage
- `/about.html` - About page
- `/contact.html` - Contact page
- `/products.html` - Product overview
- `/buffalo-horn-plates.html` - Horn plates category
- `/wooden-crafts.html` - Wooden crafts category
- `/resin-products.html` - Resin products category

### Asset URLs
- `/images/` - All product images
- `/css/` - Stylesheets
- `/js/` - JavaScript files
- `/fonts/` - Font files

## 🎯 Key Features (v2)

### Homepage
- **Hero Carousel** - 3-slide image carousel
- **Product Categories** - Grid layout with category cards
- **Company Introduction** - About section
- **Contact Information** - Footer with details

### Product Pages
- **Category Overview** - Introduction to product category
- **Product Grid** - Bootstrap grid with product cards
- **Image Galleries** - Lightbox-style image viewers
- **Specifications** - Product details and features
- **Contact Forms** - Quote request forms

### Contact Page
- **Contact Form** - Multi-field form with validation
- **Company Details** - Address, phone, email
- **Google Maps** - Embedded map location
- **Social Media** - Links to social profiles

## 📈 Performance Characteristics (v2)

### Loading Times
- **Homepage**: ~2-3 seconds
- **Product Pages**: ~3-4 seconds
- **Image Loading**: Progressive loading

### Optimization Techniques
- **Minified CSS/JS** - Compressed files
- **Image Optimization** - Compressed JPEGs
- **Browser Caching** - Cache headers
- **CDN Usage** - Bootstrap/jQuery from CDN

---

**Historical Note**: This v2 architecture served The Moon Exports from 2015-2025, providing a solid foundation for the business's online presence before migration to Next.js 15.
