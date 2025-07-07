import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { hornProducts } from '@/data/hornCrafts';

export const metadata: Metadata = {
  title: 'Buffalo Horn Plates - 10 Years of Craftsmanship Excellence | The Moon Exports',
  description: 'Established 2015. Premium buffalo horn plates crafted by master artisans in Sambhal, India. 10+ years expertise in natural horn serving plates for fine dining, luxury hotels & restaurants worldwide. Export quality guaranteed.',
  keywords: [
    'buffalo horn plates', 'horn serving plates', 'natural horn plates', 'dining plates', 
    'restaurant tableware', 'export quality', 'sambhal handicrafts', 'luxury tableware',
    'established 2015', '10 years experience', 'buffalo horn authority', 'master craftsmen',
    'traditional horn craft', 'indian handicrafts export', 'premium serving plates',
    'horn plate manufacturer', 'authentic buffalo horn', 'artisan crafted plates'
  ],
  authors: [{ name: 'Kamran Khan', url: 'https://www.themoonexports.com/about' }],
  creator: 'The Moon Exports - Est. 2015',
  publisher: 'The Moon Exports',
  category: 'handicrafts',
  classification: 'Premium Buffalo Horn Tableware',
  metadataBase: new URL('https://www.themoonexports.com'),
  alternates: {
    canonical: '/buffalo-horn-plates',
    languages: {
      'en-US': '/buffalo-horn-plates',
      'de-DE': '/de/buffalo-horn-plates',
    },
  },
  openGraph: {
    title: 'Buffalo Horn Plates - 10 Years of Craftsmanship Excellence | The Moon Exports',
    description: 'Since 2015: Master-crafted buffalo horn plates from Sambhal, India. Premium serving plates for luxury dining worldwide.',
    url: 'https://www.themoonexports.com/buffalo-horn-plates',
    siteName: 'The Moon Exports - Buffalo Horn Authority Since 2015',
    images: [
      {
        url: '/images/brown-buffalo-horn-plates.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Buffalo Horn Plates - The Moon Exports',
      },
      {
        url: '/images/black1-buffalo-horn-plates.jpg',
        width: 800,
        height: 600,
        alt: 'Black Buffalo Horn Plates Collection',
      },
      {
        url: '/images/light-white-buffalo-horn-plates.jpg',
        width: 800,
        height: 600,
        alt: 'Light Buffalo Horn Plates - Natural Finish',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@themoonexports',
    creator: '@themoonexports',
    title: 'Buffalo Horn Plates - 10 Years of Excellence',
    description: 'Master-crafted since 2015. Premium buffalo horn serving plates from Sambhal, India.',
    images: ['/images/brown-buffalo-horn-plates.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'established': '2015',
    'experience-years': '10+',
    'specialty': 'Buffalo Horn Crafts',
    'location': 'Sambhal, Moradabad, India',
    'founder': 'Kamran Khan',
    'website-version': '3.0',
    'domain-age': '2015-present',
    'expertise-area': 'Buffalo Horn Handicrafts Manufacturing',
    'product:brand': 'The Moon Exports',
    'product:category': 'Buffalo Horn Plates',
    'product:availability': 'in stock',
    'product:condition': 'new',
    'product:price:currency': 'USD',
    'product:retailer': 'The Moon Exports',
    'article:published_time': '2015-01-01',
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Kamran Khan',
    'article:section': 'Buffalo Horn Products',
    'article:tag': 'buffalo horn plates, serving plates, handicrafts, established 2015',
    'business:contact_data:locality': 'Sambhal',
    'business:contact_data:region': 'Uttar Pradesh',
    'business:contact_data:country_name': 'India',
    'business:contact_data:phone_number': '+91-8909070131',
  },
};

export default function BuffaloHornPlatesPage() {
  const plateProducts = hornProducts.filter(p => p.category === 'plates');

  // Enhanced structured data for buffalo horn plates authority
  const buffaloHornPlatesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Buffalo Horn Plates - Premium Serving Plates",
    "description": "Master-crafted buffalo horn serving plates from The Moon Exports. Established 2015, 10+ years expertise in authentic buffalo horn crafts from Sambhal, India.",
    "brand": {
      "@type": "Brand",
      "name": "The Moon Exports",
      "foundingDate": "2015-01-01",
      "description": "Buffalo horn crafts authority since 2015"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "The Moon Exports",
      "foundingDate": "2015-01-01",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sambhal",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "IN"
      },
      "founder": {
        "@type": "Person",
        "name": "Kamran Khan"
      }
    },
    "category": "Buffalo Horn Serving Plates",
    "material": "Natural Buffalo Horn",
    "countryOfOrigin": {
      "@type": "Country",
      "name": "India"
    },
    "hasVariant": [
      {
        "@type": "Product",
        "name": "Brown Buffalo Horn Plates",
        "color": "Brown",
        "image": "https://www.themoonexports.com/images/brown-buffalo-horn-plates.jpg"
      },
      {
        "@type": "Product", 
        "name": "Black Buffalo Horn Plates",
        "color": "Black",
        "image": "https://www.themoonexports.com/images/black1-buffalo-horn-plates.jpg"
      },
      {
        "@type": "Product",
        "name": "Light Buffalo Horn Plates", 
        "color": "Light",
        "image": "https://www.themoonexports.com/images/light-white-buffalo-horn-plates.jpg"
      }
    ],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": "The Moon Exports",
        "foundingDate": "2015-01-01"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "isRelatedTo": {
      "@type": "WebSite",
      "name": "The Moon Exports",
      "url": "https://www.themoonexports.com",
      "datePublished": "2015-01-01",
      "dateModified": new Date().toISOString(),
      "version": "3.0",
      "about": "Buffalo horn handicrafts authority since 2015"
    }
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.themoonexports.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Horn Crafts",
        "item": "https://www.themoonexports.com/horn-crafts"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Buffalo Horn Plates",
        "item": "https://www.themoonexports.com/buffalo-horn-plates"
      }
    ]
  };

  return (
    <div className="bg-white">
      {/* Enhanced Structured Data */}
      <Script
        id="buffalo-horn-plates-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buffaloHornPlatesStructuredData),
        }}
      />
      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <Image
          src="/images/brown-buffalo-horn-plates.jpg"
          alt="Buffalo Horn Plates"
          fill
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="mb-4">
              <span className="inline-flex items-center rounded-md bg-indigo-600/10 px-3 py-1.5 text-sm font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/20">
                🏆 Established 2015 • 10+ Years Authority in Buffalo Horn Crafts
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Buffalo Horn Plates
              <span className="block text-2xl sm:text-3xl text-indigo-400 mt-2">Master-Crafted Since 2015</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200">
              <strong>Version 3.0 of our acclaimed website</strong> - Premium serving plates handcrafted by master artisans in Sambhal, India. 
              <span className="text-indigo-300">10+ years of expertise</span> in creating authentic buffalo horn tableware for luxury dining worldwide.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              <div className="bg-black/20 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">2015</div>
                <div className="text-sm text-gray-300">Established</div>
              </div>
              <div className="bg-black/20 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="bg-black/20 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">25+</div>
                <div className="text-sm text-gray-300">Countries Served</div>
              </div>
            </div>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Request Quote - Expert Consultation
              </Link>
              <Link href="#authority" className="text-base font-semibold leading-7 text-white">
                Our 10-Year Legacy <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Authority & Expertise Section */}
      <div className="bg-white py-24 sm:py-32" id="authority">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Buffalo Horn Authority Since 2015</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              10 Years of Mastering Buffalo Horn Crafts
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              <strong>The Moon Exports</strong> has been the leading authority in buffalo horn handicrafts since 2015. 
              Our master craftsmen in Sambhal, India have perfected the art of transforming natural buffalo horn 
              into premium serving plates for luxury establishments worldwide.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600">
                    <span className="text-white font-bold">2015</span>
                  </div>
                  Established Heritage
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Founded in 2015 by master craftsman Kamran Khan, establishing the foundation for 
                    buffalo horn expertise in Sambhal, the traditional handicrafts hub of India.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600">
                    <span className="text-white font-bold">V3</span>
                  </div>
                  Website Evolution
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    This is the 3rd version of our website, continuously evolving to serve our global 
                    clientele better while maintaining our commitment to authentic buffalo horn crafts.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600">
                    <span className="text-white font-bold">25+</span>
                  </div>
                  Global Reach
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Over 10 years, we&apos;ve exported premium buffalo horn plates to 25+ countries, 
                    establishing ourselves as the trusted source for authentic horn tableware.
                  </p>
                </dd>
              </div>
            </dl>
          </div>

          {/* Timeline of Excellence */}
          <div className="mt-24">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                A Decade of Buffalo Horn Excellence
              </h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Our journey from local craftsmen to global buffalo horn authority
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-indigo-200"></div>
              
              <div className="space-y-12">
                <div className="relative flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                      <h4 className="font-semibold text-gray-900">2015 - Foundation</h4>
                      <p className="text-gray-600 text-sm mt-2">
                        Kamran Khan establishes The Moon Exports in Sambhal, focusing on authentic buffalo horn crafts
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white"></div>
                  <div className="flex-1 pl-8"></div>
                </div>
                
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white"></div>
                  <div className="flex-1 pl-8">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                      <h4 className="font-semibold text-gray-900">2018 - International Recognition</h4>
                      <p className="text-gray-600 text-sm mt-2">
                        First major international orders, establishing export quality standards for buffalo horn plates
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                      <h4 className="font-semibold text-gray-900">2022 - Digital Evolution</h4>
                      <p className="text-gray-600 text-sm mt-2">
                        Launch of website version 2.0, expanding global reach and digital presence
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white"></div>
                  <div className="flex-1 pl-8"></div>
                </div>
                
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white"></div>
                  <div className="flex-1 pl-8">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                      <h4 className="font-semibold text-gray-900">2025 - Modern Excellence</h4>
                      <p className="text-gray-600 text-sm mt-2">
                        Website 3.0 launch with enhanced SEO, showcasing 10 years of buffalo horn mastery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="bg-gray-50 py-24 sm:py-32" id="products">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Master-Crafted Buffalo Horn Plates
              <span className="block text-lg text-indigo-600 mt-2">10 Years of Perfecting Each Design</span>
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Each plate represents a decade of expertise in buffalo horn craftsmanship. 
              Choose from our authentic collection of natural horn colors and traditional finishes, 
              <strong>perfected since 2015</strong>.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {plateProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                  {/* Image Gallery */}
                  <div className="aspect-square w-full relative">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.images.length > 1 && (
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                        +{product.images.length - 1} more
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {product.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Colors */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Available Colors:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.colors.map((color) => (
                          <span key={color} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Sizes */}
                    {product.sizes && (
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Available Sizes:</h4>
                        <div className="space-y-1">
                          {product.sizes.map((size) => (
                            <div key={size} className="text-xs text-gray-600">
                              • {size}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Applications */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Perfect For:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.applications.slice(0, 3).map((app) => (
                          <span key={app} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-indigo-50 text-indigo-700">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Image Gallery */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Product Gallery
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              See our buffalo horn plates in detail
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-3">
            {[
              '/images/brown-buffalo-horn-plates.jpg',
              '/images/black1-buffalo-horn-plates.jpg',
              '/images/black-with-white -buffalo-horn-plates.jpg',
              '/images/dark-brown-buffalo-horn-plates.jpg',
              '/images/light-white-buffalo-horn-plates.jpg',
              '/images/milk-white-buffalo-horn-plates.jpg',
              '/images/hornmtplates.jpg',
              '/images/hornmtplates2.jpg',
            ].map((image, index) => (
              <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`Buffalo Horn Plate ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specifications & Care */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Specifications */}
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Product Specifications
                </h3>
                <div className="space-y-4">
                  <div className="border-b border-gray-100 pb-3">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-600">Material</span>
                      <span className="text-sm text-gray-900">Natural Buffalo Horn</span>
                    </div>
                  </div>
                  <div className="border-b border-gray-100 pb-3">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-600">Finish</span>
                      <span className="text-sm text-gray-900">Hand Polished</span>
                    </div>
                  </div>
                  <div className="border-b border-gray-100 pb-3">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-600">Food Safe</span>
                      <span className="text-sm text-gray-900">Yes</span>
                    </div>
                  </div>
                  <div className="border-b border-gray-100 pb-3">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-600">Sizes Available</span>
                      <span className="text-sm text-gray-900">6&quot; - 12&quot; diameter</span>
                    </div>
                  </div>
                  <div className="border-b border-gray-100 pb-3">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-600">Colors</span>
                      <span className="text-sm text-gray-900">Natural, Brown, Black, Light</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-600">Origin</span>
                      <span className="text-sm text-gray-900">Sambhal, India</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Care Instructions */}
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Care Instructions
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Cleaning:</span> Hand wash with mild soap and warm water
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Drying:</span> Pat dry immediately with soft cloth
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Storage:</span> Store in dry place away from direct sunlight
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Avoid:</span> Dishwasher, microwave, soaking in water
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Maintenance:</span> Apply food-safe oil occasionally to maintain luster
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Order Buffalo Horn Plates?
            </h2>
            <p className="mt-6 text-lg leading-8 text-indigo-200">
              Contact us for pricing, custom sizes, bulk orders, or any questions about our buffalo horn plates.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50"
              >
                Get Quote
              </Link>
              <Link href="/horn-crafts" className="text-base font-semibold leading-7 text-white">
                View All Horn Crafts <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
