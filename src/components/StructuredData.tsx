import { Organization, WebSite, WithContext } from 'schema-dts';

interface StructuredDataProps {
  page?: 'home' | 'about' | 'products' | 'contact';
}

export default function StructuredData({ page = 'home' }: StructuredDataProps) {
  // Base organization schema with Wikidata information
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.wikidata.org/wiki/Q101242602',
    name: 'The Moon Exports',
    legalName: 'The Moon Exports',
    description: 'Exporter of handicrafts made from buffalo horn, wooden crafts, and resin products',
    url: 'https://www.themoonexports.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.themoonexports.com/images/logo.png',
      width: '200',
      height: '80'
    },
    foundingDate: '2015',
    foundingLocation: {
      '@type': 'Place',
      name: 'Sambhal, Moradabad, Uttar Pradesh, India'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sambhal',
      addressLocality: 'Moradabad',
      addressRegion: 'Uttar Pradesh',
      postalCode: '244302',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-8909070131',
      email: 'info@themoonexports.com',
      contactType: 'customer service',
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Hindi']
    },
    sameAs: [
      'https://www.wikidata.org/wiki/Q101242602',
      'https://www.linkedin.com/company/6636178',
      'https://www.crunchbase.com/organization/the-moon-exports',
      'https://www.google.com/maps?cid=7721261087930652332'
    ],
    additionalType: [
      'https://www.wikidata.org/wiki/Q4830453', // business
      'https://www.wikidata.org/wiki/Q101061294', // handcraft shop
      'https://www.wikidata.org/wiki/Q783794' // company
    ],
    knowsAbout: [
      'Buffalo Horn Handicrafts',
      'Wooden Crafts',
      'Resin Products',
      'Handmade Jewelry',
      'Kitchen Accessories',
      'Decorative Items'
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '28.590000',
        longitude: '78.550000'
      },
      geoRadius: 'Global'
    },
    brand: {
      '@type': 'Brand',
      name: 'The Moon Exports',
      logo: 'https://www.themoonexports.com/images/logo.png'
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '10-50'
    },
    naics: '339999', // All Other Miscellaneous Manufacturing
    globalLocationNumber: '12001092641460',
    identifier: [
      {
        '@type': 'PropertyValue',
        propertyID: 'Wikidata Entity ID',
        value: 'Q101242602'
      },
      {
        '@type': 'PropertyValue',
        propertyID: 'Global Location Number',
        value: '12001092641460'
      },
      {
        '@type': 'PropertyValue',
        propertyID: 'Google Maps CID',
        value: '7721261087930652332'
      },
      {
        '@type': 'PropertyValue',
        propertyID: 'LinkedIn Company ID',
        value: '6636178'
      },
      {
        '@type': 'PropertyValue',
        propertyID: 'Crunchbase Organization',
        value: 'the-moon-exports'
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Handicrafts Catalog',
      itemListElement: [
        {
          '@type': 'Product',
          name: 'Buffalo Horn Crafts',
          description: 'Premium buffalo horn handicrafts including plates, bowls, and decorative items'
        },
        {
          '@type': 'Product',
          name: 'Wooden Crafts',
          description: 'Handcrafted wooden items including bowls, spoons, and decorative pieces'
        },
        {
          '@type': 'Product',
          name: 'Resin Products',
          description: 'Premium resin crafts including jewelry, decorative items, and accessories'
        }
      ]
    }
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'The Moon Exports',
    url: 'https://www.themoonexports.com',
    description: 'Premium buffalo horn handicrafts, wooden crafts, and resin products from India',
    publisher: {
      '@type': 'Organization',
      name: 'The Moon Exports',
      '@id': 'https://www.wikidata.org/wiki/Q101242602'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.themoonexports.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema, null, 2)
        }}
      />
      {page === 'home' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema, null, 2)
          }}
        />
      )}
    </>
  );
}
