import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { hornProducts } from '@/data/hornCrafts';

export const metadata: Metadata = {
  title: 'Horn Buttons & Toggles - Buffalo Horn Garment Accessories | The Moon Exports',
  description: 'Premium buffalo horn buttons and toggles for garments and fashion. Handcrafted button blanks and finished buttons with professional quality finish.',
  keywords: ['horn buttons', 'buffalo horn toggles', 'garment buttons', 'fashion buttons', 'horn button blanks', 'clothing accessories'],
  openGraph: {
    title: 'Horn Buttons & Toggles - Buffalo Horn Garment Accessories',
    description: 'Functional and decorative horn toggles and buttons for garments',
    images: ['/images/horntoggles.jpg'],
  },
};

export default function HornButtonsPage() {
  const buttonProducts = hornProducts.filter(p => p.category === 'buttons');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <Image
          src="/images/horntoggles.jpg"
          alt="Horn Buttons & Toggles"
          fill
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Horn Buttons & Toggles
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200">
              Premium buffalo horn buttons and toggles for garments and fashion applications. 
              Available as finished buttons or blanks for custom manufacturing, featuring 
              professional quality finish and durable construction.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                Request Quote
              </Link>
              <Link href="#products" className="text-base font-semibold leading-7 text-white">
                View Products <span aria-hidden="true">↓</span>
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
              Button & Toggle Collection
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Professional quality horn buttons and toggles for garment applications
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {buttonProducts.map((product) => (
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

      {/* Product Types */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Product Types
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Choose from button blanks or finished buttons
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Button Blanks */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-[4/3] w-full relative">
                <Image
                  src="/images/button-blank.jpg"
                  alt="Horn Button Blanks"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Button Blanks
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Raw horn pieces ready for custom drilling and finishing
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Various sizes available</li>
                  <li>• Natural horn material</li>
                  <li>• Custom drilling options</li>
                  <li>• Bulk quantities</li>
                </ul>
              </div>
            </div>

            {/* Finished Buttons */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-[4/3] w-full relative">
                <Image
                  src="/images/finished-button.jpg"
                  alt="Finished Horn Buttons"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Finished Buttons
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Ready-to-use buttons with professional finish and holes
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 2-hole and 4-hole options</li>
                  <li>• Polished finish</li>
                  <li>• Standard sizes</li>
                  <li>• Quality tested</li>
                </ul>
              </div>
            </div>

            {/* Toggles */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-[4/3] w-full relative">
                <Image
                  src="/images/horntoggles.jpg"
                  alt="Horn Toggles"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Horn Toggles
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Decorative toggles for coats, jackets, and fashion accessories
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Coat toggles</li>
                  <li>• Jacket fasteners</li>
                  <li>• Fashion accessories</li>
                  <li>• Custom shapes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Manufacturing Process */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Manufacturing Process
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                From raw horn to finished button
              </p>
            </div>
            
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      1
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Material Selection
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    High-quality buffalo horn is carefully selected for color, density, and grain pattern. 
                    Each piece is inspected to ensure it meets our quality standards.
                  </p>
                </div>
                <div className="flex-1">
                  <div className="aspect-[4/3] w-full relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/button-blank.jpg"
                      alt="Horn Material Selection"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      2
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Shaping & Sizing
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Horn pieces are cut to size and shaped according to specifications. 
                    Skilled craftsmen ensure consistent dimensions and smooth edges.
                  </p>
                </div>
                <div className="flex-1">
                  <div className="aspect-[4/3] w-full relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/button-blank2.jpg"
                      alt="Horn Shaping Process"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      3
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Drilling & Finishing
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Button holes are precisely drilled and the surface is polished to a smooth finish. 
                    Quality control ensures each button meets professional standards.
                  </p>
                </div>
                <div className="flex-1">
                  <div className="aspect-[4/3] w-full relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/finished-button.jpg"
                      alt="Finished Horn Buttons"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Product Gallery
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              See our horn buttons and toggles in detail
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-3">
            {[
              '/images/horntoggles.jpg',
              '/images/horntoggles2.jpg',
              '/images/button-blank.jpg',
              '/images/button-blank2.jpg',
              '/images/finished-button.jpg',
              '/images/finished-button2.jpg',
            ].map((image, index) => (
              <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`Horn Button ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Specifications & Options
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Available sizes, colors, and customization options
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Size Options */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Size Options
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Small</span>
                    <span className="text-gray-900 font-medium">12mm - 15mm</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Medium</span>
                    <span className="text-gray-900 font-medium">16mm - 20mm</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Large</span>
                    <span className="text-gray-900 font-medium">22mm - 25mm</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700">Extra Large</span>
                    <span className="text-gray-900 font-medium">28mm - 32mm</span>
                  </div>
                </div>
              </div>

              {/* Customization Options */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Customization Options
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Custom sizes and shapes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>2-hole or 4-hole drilling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Engraving and embossing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Special finishes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Bulk packaging options</span>
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
              Need Custom Horn Buttons?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
              We specialize in custom horn button manufacturing for fashion brands, 
              garment manufacturers, and designers worldwide.
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
