import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: {
    default: "The Moon Exports - Buffalo Horn Crafts | Wooden Crafts | Resin Products",
    template: "%s | The Moon Exports",
  },
  description: "Handicrafts exporter The Moon Exports (Wikidata: Q101242602) provides a large range of Vintage and Modern Handicrafts and Manufactures as per clients requirement from Horn, Bone, Wood and Resin. We are suppliers cum manufacturers located at Sambhal, Moradabad, India. Established in 2015, recognized in international business directories and knowledge graphs.",
  keywords: ["buffalo horn", "handicrafts", "wooden crafts", "resin products", "horn crafts", "export", "india", "sambhal", "moradabad", "vintage jewelry", "wikidata", "Q101242602", "handcraft shop", "manufacturing", "global location number", "business entity", "knowledge graph", "structured data"],
  authors: [{ name: "Kamran Khan" }],
  creator: "The Moon Exports",
  publisher: "The Moon Exports",
  metadataBase: new URL("https://www.themoonexports.com"),
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/',
      'de-DE': '/de',
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.themoonexports.com",
    siteName: "The Moon Exports",
    title: "The Moon Exports - Premium Handicrafts Exporter",
    description: "Premium buffalo horn, wooden crafts, and resin products. Handmade handicrafts from Sambhal, India.",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "The Moon Exports Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@themoonexports",
    creator: "@themoonexports",
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
  verification: {
    google: "your-google-site-verification-code",
    yandex: "7be55e5d79a93733",
    other: {
      'msvalidate.01': '16BD6C369F5C625E1A4E42C9BE5BFB3F',
      'p:domain_verify': 'f760fac5120b861a6831cf1a338fec84',
      'baidu-site-verification': 'baidu-verification-code',
    },
  },
  category: 'business',
  classification: 'Handicrafts Export Business',
  generator: 'Next.js 15',
  applicationName: 'The Moon Exports',
  referrer: 'origin-when-cross-origin',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'The Moon Exports',
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
  abstract: 'Premium handicrafts exporter specializing in buffalo horn, wooden crafts, and resin products from Sambhal, India.',
  archives: ['https://www.themoonexports.com/sitemap.xml'],
  assets: ['https://www.themoonexports.com'],
  bookmarks: ['https://www.themoonexports.com'],
  other: {
    'google-adsense-account': 'ca-pub-your-adsense-id',
    'google-analytics': 'G-your-ga4-id',
    'yandex-verification': '7be55e5d79a93733',
    'facebook-domain-verification': 'your-facebook-domain-verification',
    'pinterest-site-verification': 'your-pinterest-verification',
    'geo.region': 'IN-UP',
    'geo.placename': 'Sambhal, Moradabad',
    'geo.position': '28.5833;78.5667',
    'ICBM': '28.5833, 78.5667',
    'business:contact_data:locality': 'Sambhal',
    'business:contact_data:region': 'Uttar Pradesh',
    'business:contact_data:country_name': 'India',
    'business:contact_data:phone_number': '+91-8909070131',
    'business:contact_data:email': 'info@themoonexports.com',
    'HandheldFriendly': 'True',
    'MobileOptimized': '320',
    // Wikidata Entity Information
    'wikidata:entity': 'Q101242602',
    'wikidata:url': 'https://www.wikidata.org/wiki/Q101242602',
    'crunchbase:organization': 'the-moon-exports',
    'linkedin:company': '6636178',
    'google:maps_cid': '7721261087930652332',
    'global_location_number': '12001092641460',
    'business:classification': 'Handicrafts Export Business',
    'business:naics': '339999',
    'business:category': 'Manufacturing and Export',
    'business:establishment_year': '2015',
    'business:specialization': 'Buffalo Horn Handicrafts, Wooden Crafts, Resin Products',
  },
};

// Export viewport separately for Next.js 15 compatibility
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-inter">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://mc.yandex.ru" />
        
        {/* DNS prefetch for improved loading */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://mc.yandex.ru" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.themoonexports.com" />
        
        {/* Hreflang for internationalization */}
        <link rel="alternate" hrefLang="en" href="https://www.themoonexports.com" />
        <link rel="alternate" hrefLang="de" href="https://www.themoonexports.com/de" />
        <link rel="alternate" hrefLang="x-default" href="https://www.themoonexports.com" />
        
        {/* RSS and Atom feeds */}
        <link rel="alternate" type="application/rss+xml" title="The Moon Exports - Product Updates" href="/rss.xml" />
        <link rel="alternate" type="application/atom+xml" title="The Moon Exports - News Feed" href="/atom.xml" />
        
        {/* Manifest for PWA */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        
        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Enhanced Structured Data with Wikidata Integration */}
        <StructuredData page="home" />
        
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                  "name": "Products",
                  "item": "https://www.themoonexports.com/products"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Horn Crafts",
                  "item": "https://www.themoonexports.com/horn-crafts"
                }
              ]
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-GA4-ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YOUR-GA4-ID', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: true
            });
          `}
        </Script>
        
        {/* Yandex Metrika */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            ym(YOUR_YANDEX_METRIKA_ID, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `}
        </Script>
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
