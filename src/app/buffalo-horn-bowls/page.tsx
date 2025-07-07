import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { hornProducts } from '@/data/hornCrafts';

export const metadata: Metadata = {
  title: 'Buffalo Horn Bowls - Handcrafted Serving Bowls | The Moon Exports',
  description: 'Premium buffalo horn bowls handcrafted in India. Perfect for serving soups, salads, and decorative displays. Natural antibacterial properties with unique grain patterns.',
  keywords: ['buffalo horn bowls', 'horn serving bowls', 'natural horn bowls', 'handicraft bowls', 'serving bowls', 'export quality'],
  openGraph: {
    title: 'Buffalo Horn Bowls - Handcrafted Serving Bowls',
    description: 'Traditional handcrafted buffalo horn bowls for serving and decoration',
    images: ['/images/bowl.jpg'],
  },
};

export default function BuffaloHornBowlsPage() {
  const bowlProducts = hornProducts.filter(p => p.category === 'bowls');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <Image
          src="/images/bowl.jpg"
          alt="Buffalo Horn Bowls"
          fill
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Buffalo Horn Bowls
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200">
              Traditional handcrafted buffalo horn bowls for serving and decoration. 
              Each bowl features unique natural grain patterns and antibacterial properties 
              that make them perfect for both functional and decorative use.
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
              Horn Bowl Collection
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Handcrafted buffalo horn bowls in various sizes and finishes
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {bowlProducts.map((product) => (
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
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Available Colors:</h4>
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

      {/* Product Gallery */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Product Gallery
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              See our buffalo horn bowls in detail
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-3">
            {[
              '/images/bowl.jpg',
              '/images/bowl2.jpg',
            ].map((image, index) => (
              <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`Buffalo Horn Bowl ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Manufacturing & Care */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Manufacturing */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Traditional Craftsmanship
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Our buffalo horn bowls are handcrafted by skilled artisans in Sambhal, India, 
                    using traditional techniques passed down through generations. Each bowl is 
                    carefully shaped, polished, and finished to highlight the natural beauty 
                    of the horn material.
                  </p>
                  <p>
                    The manufacturing process ensures that each bowl maintains the natural 
                    antibacterial properties of buffalo horn while providing a smooth, 
                    food-safe surface perfect for serving.
                  </p>
                </div>
              </div>

              {/* Care Instructions */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Care Instructions
                </h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Hand wash with warm water and mild soap</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Avoid soaking in water for extended periods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Dry immediately with a soft cloth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Apply food-safe mineral oil occasionally to maintain luster</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Store in a dry place away from direct sunlight</span>
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
              Ready to Place Your Order?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
              Contact us today for wholesale pricing and custom orders. We offer worldwide shipping 
              and can accommodate bulk orders for restaurants, hotels, and retailers.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get Quote
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
