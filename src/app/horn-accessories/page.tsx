import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { hornProducts } from '@/data/hornCrafts';

export const metadata: Metadata = {
  title: 'Horn Accessories - Buffalo Horn Jewelry & Fashion Items | The Moon Exports',
  description: 'Premium buffalo horn accessories including bracelets, pendants, necklaces, and fashion jewelry. Handcrafted horn accessories with natural beauty and hypoallergenic properties.',
  keywords: ['horn accessories', 'buffalo horn jewelry', 'horn bracelets', 'horn pendants', 'natural jewelry', 'handcrafted accessories'],
  openGraph: {
    title: 'Horn Accessories - Buffalo Horn Jewelry & Fashion Items',
    description: 'Jewelry, bracelets, pendants, and fashion accessories',
    images: ['/images/hornbracelets.jpg'],
  },
};

export default function HornAccessoriesPage() {
  const accessoryProducts = hornProducts.filter(p => p.category === 'accessories');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <Image
          src="/images/hornbracelets.jpg"
          alt="Horn Accessories"
          fill
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Horn Accessories
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200">
              Fashionable buffalo horn accessories including bracelets, pendants, necklaces, 
              and fashion jewelry. Each piece showcases natural beauty with hypoallergenic 
              properties and unique patterns that make every item one-of-a-kind.
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
              Horn Accessories Collection
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Handcrafted jewelry and fashion accessories from natural buffalo horn
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {accessoryProducts.map((product) => (
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
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
                            <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Applications */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Perfect For:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.applications.slice(0, 3).map((app, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Colors */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Available Colors:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.colors.map((color, index) => (
                          <span key={index} className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full">
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Link
                        href="/contact"
                        className="flex-1 bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium text-center hover:bg-indigo-700 transition-colors"
                      >
                        Order Now
                      </Link>
                      <Link
                        href={`/contact?product=${encodeURIComponent(product.name)}`}
                        className="flex-1 border border-gray-300 text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-center hover:bg-gray-50 transition-colors"
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

      {/* Product Gallery */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Accessory Gallery
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Explore our collection of buffalo horn accessories
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              '/images/hornbracelets.jpg',
              '/images/hornbracelets2.jpg',
              '/images/bracelet.jpg',
              '/images/bracelet2.jpg',
              '/images/horn-pendant.jpg',
              '/images/horn-pendant2.jpg',
              '/images/necklace.jpg',
              '/images/necklace2.jpg',
              '/images/horntoggles.jpg',
              '/images/horntoggles2.jpg',
              '/images/shoeshorn.jpg',
              '/images/shoeshorn2.jpg',
            ].map((image, index) => (
              <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`Horn Accessory ${index + 1}`}
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
              Accessory Categories
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Browse our range of horn accessories by category
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Jewelry */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-[4/3] w-full relative">
                <Image
                  src="/images/hornbracelets.jpg"
                  alt="Horn Jewelry"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Fashion Jewelry
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Beautiful horn bracelets, bangles, and wearable jewelry pieces
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Bracelets & bangles</li>
                  <li>• Natural patterns</li>
                  <li>• Lightweight design</li>
                  <li>• Hypoallergenic</li>
                </ul>
              </div>
            </div>

            {/* Pendants & Necklaces */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-[4/3] w-full relative">
                <Image
                  src="/images/horn-pendant.jpg"
                  alt="Horn Pendants"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Pendants & Necklaces
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Elegant horn pendants and necklace pieces with artistic designs
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Artistic designs</li>
                  <li>• Statement pieces</li>
                  <li>• Cultural accessories</li>
                  <li>• Unique patterns</li>
                </ul>
              </div>
            </div>

            {/* Functional Accessories */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-[4/3] w-full relative">
                <Image
                  src="/images/shoeshorn.jpg"
                  alt="Horn Functional Items"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Functional Items
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Practical horn accessories including shoe horns and toggles
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Shoe horns</li>
                  <li>• Toggles & buttons</li>
                  <li>• Daily use items</li>
                  <li>• Ergonomic design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose Horn Accessories?
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Natural benefits of buffalo horn accessories
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Natural Properties */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Natural Properties
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Hypoallergenic:</strong> Natural horn is gentle on sensitive skin</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Lightweight:</strong> Comfortable for extended wear</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Unique Patterns:</strong> Each piece has distinctive natural markings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Durable:</strong> Long-lasting with proper care</span>
                  </li>
                </ul>
              </div>

              {/* Style Benefits */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Style Benefits
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Versatile:</strong> Complements both casual and formal attire</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Natural Beauty:</strong> Warm, organic appearance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Conversation Starter:</strong> Unique material draws attention</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Sustainable:</strong> Eco-friendly material choice</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Care Instructions */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Care Instructions
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                How to maintain your horn accessories for lasting beauty
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Care</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Wipe with a soft, dry cloth after wear</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Store in a cool, dry place</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Avoid exposure to direct sunlight</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Keep away from perfumes and chemicals</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Deep Cleaning</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Use lukewarm water and mild soap if needed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Dry immediately with a soft cloth</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Apply a small amount of natural oil monthly</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Buff gently to restore natural shine</span>
                    </li>
                  </ul>
                </div>
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
              Ready to Add Natural Beauty to Your Style?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
              Discover the unique charm of buffalo horn accessories. Perfect for personal use, 
              gifts, or retail collections.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Order Now
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
