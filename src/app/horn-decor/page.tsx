import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { hornProducts } from '@/data/hornCrafts';

export const metadata: Metadata = {
  title: 'Horn Decorative Items - Artistic Buffalo Horn Decor | The Moon Exports',
  description: 'Premium decorative buffalo horn items and artistic pieces for interior design. Handcrafted luxury decor items perfect for homes, offices, and collector displays.',
  keywords: ['horn decor', 'decorative horn items', 'buffalo horn art', 'luxury decor', 'interior design', 'handcrafted decor'],
  openGraph: {
    title: 'Horn Decorative Items - Artistic Buffalo Horn Decor',
    description: 'Decorative horn items and artistic pieces for interior design',
    images: ['/images/horn-op.jpg'],
  },
};

export default function HornDecorPage() {
  const decorativeProducts = hornProducts.filter(p => p.category === 'decorative');
  const walkingSticks = hornProducts.filter(p => p.category === 'walking-sticks');
  const allDecorItems = [...decorativeProducts, ...walkingSticks];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <Image
          src="/images/horn-op.jpg"
          alt="Horn Decorative Items"
          fill
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Horn Decorative Items
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200">
              Artistic and decorative buffalo horn pieces for interior design. Each piece 
              showcases the natural beauty of horn with unique patterns and textures, 
              perfect for luxury homes, offices, and collector displays.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                Request Quote
              </Link>
              <Link href="#products" className="text-base font-semibold leading-7 text-white">
                View Collection <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Product Collection */}
      <div className="py-24 sm:py-32" id="products">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Decorative Horn Collection
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Handcrafted artistic pieces and decorative items
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {allDecorItems.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                  {/* Image Gallery */}
                  <div className="aspect-[4/3] w-full relative">
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
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {product.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        {product.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Applications */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.slice(0, 4).map((app, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Colors */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Available Finishes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.colors.map((color, index) => (
                          <span key={index} className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full">
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <Link
                        href="/contact"
                        className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium text-center hover:bg-indigo-700 transition-colors"
                      >
                        Request Quote
                      </Link>
                      <Link
                        href={`/contact?product=${encodeURIComponent(product.name)}`}
                        className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium text-center hover:bg-gray-50 transition-colors"
                      >
                        Get Info
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Luxury Horn Decor Gallery */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Luxury Horn Decor Gallery
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Explore our collection of luxury horn decorative items
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              '/images/horn-op.jpg',
              '/images/horn-op2.jpg',
              '/images/decor.jpg',
              '/images/decor2.jpg',
              '/images/walking-stick.jpg',
              '/images/walking-stick2.jpg',
              '/images/vase.jpg',
              '/images/vase2.jpg',
            ].map((image, index) => (
              <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`Horn Decor Item ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Decorative Categories
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Browse our range of decorative horn items by category
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Artistic Pieces */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-[4/3] w-full relative">
                <Image
                  src="/images/horn-op.jpg"
                  alt="Artistic Horn Pieces"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Artistic Pieces
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Unique artistic horn sculptures and decorative items for sophisticated interiors
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Sculptural pieces</li>
                  <li>• Abstract designs</li>
                  <li>• Custom artwork</li>
                  <li>• Collector items</li>
                </ul>
              </div>
            </div>

            {/* Walking Sticks */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-[4/3] w-full relative">
                <Image
                  src="/images/walking-stick.jpg"
                  alt="Horn Walking Sticks"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Walking Sticks
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Traditional buffalo horn walking sticks and canes with ergonomic design
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Traditional craftsmanship</li>
                  <li>• Ergonomic handles</li>
                  <li>• Decorative elements</li>
                  <li>• Collector pieces</li>
                </ul>
              </div>
            </div>

            {/* Vases & Containers */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-[4/3] w-full relative">
                <Image
                  src="/images/vase.jpg"
                  alt="Horn Vases"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Vases & Containers
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Decorative horn vases and containers for modern and traditional interiors
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Decorative vases</li>
                  <li>• Storage containers</li>
                  <li>• Display pieces</li>
                  <li>• Interior accents</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Applications & Use Cases */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Applications & Use Cases
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Where our decorative horn items shine brightest
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Commercial Applications */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Commercial Applications
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Luxury hotels and resorts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>High-end restaurants and bars</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Corporate offices and lobbies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Art galleries and museums</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Retail store displays</span>
                  </li>
                </ul>
              </div>

              {/* Residential Applications */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Residential Applications
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Living room centerpieces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Home office decoration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Bedroom accent pieces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Personal collections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Gift and heirloom items</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Transform Your Space with Horn Decor
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
              Create stunning interiors with our handcrafted horn decorative items. 
              Perfect for luxury hotels, high-end homes, and commercial spaces.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get Custom Quote
              </Link>
              <Link href="/horn-crafts" className="text-sm font-semibold leading-6 text-white">
                View All Products <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
