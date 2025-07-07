// Comprehensive structured data for enterprise-level SEO

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "The Moon Exports",
  "alternateName": "Moon Exports",
  "description": "Premium handicrafts exporter specializing in buffalo horn, wooden crafts, and resin products from Sambhal, India. Established in 2015 by Kamran Khan.",
  "url": "https://www.themoonexports.com",
  "logo": "https://www.themoonexports.com/images/logo.png",
  "image": [
    "https://www.themoonexports.com/images/logo.png",
    "https://www.themoonexports.com/images/Horn-Crafts.JPG",
    "https://www.themoonexports.com/images/Kamran-Khan.jpg"
  ],
  "telephone": "+91-8909070131",
  "email": "info@themoonexports.com",
  "faxNumber": "+91-8909070131",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sambhal",
    "addressLocality": "Moradabad",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "244302",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.5833",
    "longitude": "78.5667"
  },
  "foundingDate": "2015-01-01",
  "founder": {
    "@type": "Person",
    "name": "Kamran Khan",
    "jobTitle": "Founder & CEO",
    "image": "https://www.themoonexports.com/images/Kamran-Khan.jpg"
  },
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "10-50"
  },
  "industry": "Handicrafts Manufacturing and Export",
  "naics": "339999",
  "legalName": "The Moon Exports",
  "sameAs": [
    "https://www.facebook.com/themoonexports",
    "https://www.instagram.com/themoonexports",
    "https://www.linkedin.com/company/themoonexports",
    "https://twitter.com/themoonexports",
    "https://www.youtube.com/channel/themoonexports",
    "https://in.pinterest.com/themoonexports"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-8909070131",
      "contactType": "customer service",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Hindi", "German"],
      "email": "info@themoonexports.com"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-8909070131",
      "contactType": "sales",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "German"],
      "email": "sales@themoonexports.com"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Handicrafts Product Catalog",
    "description": "Premium handicrafts including buffalo horn, wooden crafts, and resin products",
    "itemListElement": [
      {
        "@type": "Product",
        "name": "Buffalo Horn Crafts",
        "description": "Premium buffalo horn handicrafts including plates, bowls, jewelry, and decorative items",
        "category": "Handicrafts",
        "brand": "The Moon Exports",
        "manufacturer": "The Moon Exports",
        "image": "https://www.themoonexports.com/images/Horn-Crafts.JPG",
        "url": "https://www.themoonexports.com/horn-crafts"
      },
      {
        "@type": "Product",
        "name": "Wooden Crafts",
        "description": "Handcrafted wooden items including bowls, spoons, cutting boards, and decorative pieces",
        "category": "Handicrafts",
        "brand": "The Moon Exports",
        "manufacturer": "The Moon Exports",
        "image": "https://www.themoonexports.com/images/wooden-bowl.jpg",
        "url": "https://www.themoonexports.com/wooden-crafts"
      },
      {
        "@type": "Product",
        "name": "Resin Products",
        "description": "Premium resin crafts including jewelry, frames, and decorative accessories",
        "category": "Handicrafts",
        "brand": "The Moon Exports",
        "manufacturer": "The Moon Exports",
        "image": "https://www.themoonexports.com/images/resin-bangle.jpg",
        "url": "https://www.themoonexports.com/resin"
      }
    ]
  }
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "The Moon Exports",
  "alternateName": "Moon Exports Handicrafts",
  "description": "Premium handicrafts exporter from Sambhal, India specializing in buffalo horn, wooden crafts, and resin products. Quality handicrafts for global export since 2015.",
  "url": "https://www.themoonexports.com",
  "image": "https://www.themoonexports.com/images/logo.png",
  "publisher": {
    "@type": "Organization",
    "name": "The Moon Exports",
    "logo": "https://www.themoonexports.com/images/logo.png"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.themoonexports.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "inLanguage": ["en-US", "de-DE"],
  "isAccessibleForFree": true,
  "isFamilyFriendly": true,
  "copyrightYear": "2015",
  "copyrightHolder": {
    "@type": "Organization",
    "name": "The Moon Exports"
  }
};

export function generateProductStructuredData(product: {
  name: string;
  description: string;
  image: string;
  category: string;
  price?: string;
  currency?: string;
  availability?: string;
  condition?: string;
  brand?: string;
  sku?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": [product.image],
    "brand": {
      "@type": "Brand",
      "name": product.brand || "The Moon Exports"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "The Moon Exports",
      "url": "https://www.themoonexports.com"
    },
    "category": product.category,
    "sku": product.sku,
    "url": product.url,
    "material": product.category.includes('Horn') ? 'Buffalo Horn' : 
               product.category.includes('Wood') ? 'Wood' : 'Resin',
    "countryOfOrigin": {
      "@type": "Country",
      "name": "India"
    },
    "offers": {
      "@type": "Offer",
      "price": product.price || "Contact for pricing",
      "priceCurrency": product.currency || "USD",
      "availability": product.availability || "https://schema.org/InStock",
      "itemCondition": product.condition || "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": "The Moon Exports"
      }
    }
  };
}
