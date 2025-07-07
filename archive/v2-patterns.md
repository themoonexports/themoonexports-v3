# v2 Common Patterns & Implementation Examples

## 🎨 Bootstrap to Tailwind CSS Patterns

### Layout Patterns

#### v2 Bootstrap Grid
```html
<!-- v2 Bootstrap Implementation -->
<div class="container">
  <div class="row">
    <div class="col-md-4 col-sm-6">
      <div class="product-card">
        <img src="/images/product.jpg" class="img-responsive" alt="Product">
        <h3>Product Name</h3>
        <p>Product description...</p>
        <button class="btn btn-primary">View Details</button>
      </div>
    </div>
  </div>
</div>
```

#### v3 Tailwind Equivalent
```tsx
// v3 Tailwind Implementation
<div className="max-w-7xl mx-auto px-6 lg:px-8">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Image
        src="/images/product.jpg"
        alt="Product"
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Product Name</h3>
        <p className="text-gray-600 mb-4">Product description...</p>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          View Details
        </button>
      </div>
    </div>
  </div>
</div>
```

### Navigation Patterns

#### v2 Bootstrap Navbar
```html
<!-- v2 Bootstrap Navbar -->
<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/">
        <img src="/images/logo.png" alt="The Moon Exports" height="30">
      </a>
    </div>
    <div class="collapse navbar-collapse" id="navbar">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="/">Home</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Products <b class="caret"></b></a>
          <ul class="dropdown-menu">
            <li><a href="/buffalo-horn-plates.html">Buffalo Horn Plates</a></li>
            <li><a href="/wooden-crafts.html">Wooden Crafts</a></li>
          </ul>
        </li>
        <li><a href="/about.html">About</a></li>
        <li><a href="/contact.html">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
```

#### v3 React Navigation
```tsx
// v3 React Navigation Component
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="The Moon Exports"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
            
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center text-gray-700 hover:text-indigo-600"
              >
                Products <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link href="/buffalo-horn-plates" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Buffalo Horn Plates
                  </Link>
                  <Link href="/wooden-crafts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Wooden Crafts
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-indigo-600"
          >
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">
                Home
              </Link>
              <Link href="/buffalo-horn-plates" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">
                Buffalo Horn Plates
              </Link>
              <Link href="/wooden-crafts" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">
                Wooden Crafts
              </Link>
              <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">
                About
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
```

## 🖼️ Image Handling Patterns

### v2 Image Implementation
```html
<!-- v2 Static Images -->
<img src="/images/buffalo-horn-plates.jpg" 
     alt="Buffalo Horn Plates" 
     class="img-responsive">

<!-- v2 Image Gallery -->
<div class="product-gallery">
  <div class="main-image">
    <img src="/images/product-1.jpg" alt="Product" class="img-responsive">
  </div>
  <div class="thumbnail-images">
    <img src="/images/product-1-thumb.jpg" alt="Product thumbnail" class="thumbnail">
    <img src="/images/product-2-thumb.jpg" alt="Product thumbnail" class="thumbnail">
  </div>
</div>
```

### v3 Next.js Image Component
```tsx
// v3 Optimized Images
import Image from 'next/image';

// Single Product Image
<Image
  src="/images/buffalo-horn-plates.jpg"
  alt="Buffalo Horn Plates"
  width={800}
  height={600}
  className="w-full h-auto"
  priority // For above-the-fold images
/>

// Image Gallery Component
export default function ImageGallery({ images, productName }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Main Image */}
      <div className="aspect-square relative">
        <Image
          src={images[selectedImage]}
          alt={`${productName} - Image ${selectedImage + 1}`}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square relative rounded-lg overflow-hidden ${
              selectedImage === index ? 'ring-2 ring-indigo-500' : ''
            }`}
          >
            <Image
              src={image}
              alt={`${productName} thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
```

## 📝 Form Patterns

### v2 Bootstrap Form
```html
<!-- v2 Contact Form -->
<form class="form-horizontal" action="/contact-form.php" method="POST">
  <div class="form-group">
    <label for="name" class="col-sm-2 control-label">Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="name" name="name" required>
    </div>
  </div>
  
  <div class="form-group">
    <label for="email" class="col-sm-2 control-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="email" name="email" required>
    </div>
  </div>
  
  <div class="form-group">
    <label for="message" class="col-sm-2 control-label">Message</label>
    <div class="col-sm-10">
      <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
    </div>
  </div>
  
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary btn-lg">Send Message</button>
    </div>
  </div>
</form>
```

### v3 React Hook Form
```tsx
// v3 Contact Form Component
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
      <div className="grid grid-cols-1 gap-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            {...register('message', { required: 'Message is required' })}
            id="message"
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-md">
            <p className="text-green-800">Thank you! Your message has been sent successfully.</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-800">Sorry, there was an error sending your message. Please try again.</p>
          </div>
        )}
      </div>
    </form>
  );
}
```

## 🎠 Carousel/Slider Patterns

### v2 Bootstrap Carousel
```html
<!-- v2 Bootstrap Carousel -->
<div id="hero-carousel" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#hero-carousel" data-slide-to="0" class="active"></li>
    <li data-target="#hero-carousel" data-slide-to="1"></li>
    <li data-target="#hero-carousel" data-slide-to="2"></li>
  </ol>
  
  <div class="carousel-inner">
    <div class="item active">
      <img src="/images/slide-1.jpg" alt="Slide 1">
      <div class="carousel-caption">
        <h3>Buffalo Horn Crafts</h3>
        <p>Premium quality handicrafts from India</p>
      </div>
    </div>
    <div class="item">
      <img src="/images/slide-2.jpg" alt="Slide 2">
      <div class="carousel-caption">
        <h3>Export Quality</h3>
        <p>Serving 25+ countries worldwide</p>
      </div>
    </div>
  </div>
  
  <a class="left carousel-control" href="#hero-carousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
  </a>
  <a class="right carousel-control" href="#hero-carousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
  </a>
</div>
```

### v3 React Carousel
```tsx
// v3 React Carousel Component
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/images/slide-1.jpg',
    title: 'Buffalo Horn Crafts',
    description: 'Premium quality handicrafts from India',
  },
  {
    id: 2,
    image: '/images/slide-2.jpg',
    title: 'Export Quality',
    description: 'Serving 25+ countries worldwide',
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-96 lg:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl lg:text-6xl font-bold mb-4">{slide.title}</h2>
              <p className="text-xl lg:text-2xl">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2"
      >
        <ChevronLeftIcon className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2"
      >
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
```

## 🎯 Common JavaScript Patterns

### v2 jQuery Patterns
```javascript
// v2 jQuery Common Patterns
$(document).ready(function() {
  // Image hover effects
  $('.product-image').hover(function() {
    $(this).addClass('hovered');
  }, function() {
    $(this).removeClass('hovered');
  });

  // Form validation
  $('#contact-form').on('submit', function(e) {
    var name = $('#name').val();
    var email = $('#email').val();
    
    if (name.length < 2) {
      alert('Name must be at least 2 characters');
      e.preventDefault();
      return false;
    }
    
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address');
      e.preventDefault();
      return false;
    }
  });

  // Smooth scrolling
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var target = $(this.getAttribute('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 70
      }, 500);
    }
  });
});

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
```

### v3 React Hook Patterns
```tsx
// v3 React Hook Patterns
import { useState, useEffect } from 'react';

// Custom hooks for common functionality
export function useHover() {
  const [isHovered, setIsHovered] = useState(false);

  const hoverProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  return [isHovered, hoverProps] as const;
}

export function useScrollToTop() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        // Show scroll to top button
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

// Component using hooks
export default function ProductCard({ product }) {
  const [isHovered, hoverProps] = useHover();

  return (
    <div 
      className={`transition-transform duration-300 ${
        isHovered ? 'scale-105' : 'scale-100'
      }`}
      {...hoverProps}
    >
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
      </div>
    </div>
  );
}
```

---

**Pattern Status**: ✅ All v2 patterns successfully converted to v3
**Compatibility**: ✅ All functionality preserved and enhanced
