import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  images?: string[];
  url?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  locale?: string;
  alternateLocales?: string[];
}

export function generateSEO(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    images = [],
    url = '',
    type = 'website',
    publishedTime,
    modifiedTime,
    section,
    tags = [],
    locale = 'en_US',
    alternateLocales = []
  } = config;

  const baseUrl = 'https://www.themoonexports.com';
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const defaultImage = '/images/logo.png';
  const ogImages = images.length > 0 ? images.map(img => ({
    url: img,
    width: 1200,
    height: 630,
    alt: title,
  })) : [{
    url: defaultImage,
    width: 800,
    height: 600,
    alt: 'The Moon Exports - Premium Handicrafts',
  }];

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    authors: [{ name: 'Kamran Khan' }],
    creator: 'The Moon Exports',
    publisher: 'The Moon Exports',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl,
      languages: alternateLocales.reduce((acc, locale) => {
        acc[locale] = `${fullUrl}/${locale === 'en' ? '' : locale}`;
        return acc;
      }, {} as Record<string, string>),
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: 'The Moon Exports',
      images: ogImages,
      locale,
      type: type === 'product' ? 'website' : type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      site: '@themoonexports',
      creator: '@themoonexports',
      title,
      description,
      images: images.length > 0 ? images : [defaultImage],
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
    category: 'business',
    classification: 'Handicrafts Export Business',
    other: {
      'article:author': 'Kamran Khan',
      'article:publisher': 'The Moon Exports',
      'product:brand': 'The Moon Exports',
      'product:category': 'Handicrafts',
      'product:availability': 'in stock',
      'product:condition': 'new',
      'business:contact_data:locality': 'Sambhal',
      'business:contact_data:region': 'Uttar Pradesh',
      'business:contact_data:country_name': 'India',
      'business:contact_data:phone_number': '+91-8909070131',
      'business:contact_data:email': 'info@themoonexports.com',
      'geo.region': 'IN-UP',
      'geo.placename': 'Sambhal, Moradabad',
      'geo.position': '28.5833;78.5667',
      'ICBM': '28.5833, 78.5667',
    },
  };
}

export function generateProductSEO(product: {
  name: string;
  description: string;
  category: string;
  images: string[];
  price?: string;
  availability?: string;
  condition?: string;
  brand?: string;
  sku?: string;
  url: string;
}): Metadata {
  return generateSEO({
    title: `${product.name} - Premium ${product.category} | The Moon Exports`,
    description: product.description,
    keywords: [
      product.name.toLowerCase(),
      product.category.toLowerCase(),
      'handicrafts',
      'export',
      'india',
      'sambhal',
      'premium quality',
      'handmade',
      'buffalo horn',
      'wooden crafts',
      'resin products'
    ],
    images: product.images,
    url: product.url,
    type: 'product',
    modifiedTime: new Date().toISOString(),
  });
}

export function generateCategorySEO(category: {
  name: string;
  description: string;
  image: string;
  url: string;
  productCount?: number;
}): Metadata {
  return generateSEO({
    title: `${category.name} - Premium Handicrafts | The Moon Exports`,
    description: category.description,
    keywords: [
      category.name.toLowerCase(),
      'handicrafts',
      'export quality',
      'handmade',
      'india',
      'sambhal',
      'premium',
      'luxury',
      'traditional crafts'
    ],
    images: [category.image],
    url: category.url,
    type: 'website',
    section: 'Products',
    modifiedTime: new Date().toISOString(),
  });
}
