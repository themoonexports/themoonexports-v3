import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { hornCraftCategories, hornProducts, hornCraftInfo } from '@/data/hornCrafts';

export const metadata: Metadata = {
  title: 'Buffalo Horn Crafts - Premium Handmade Horn Products',
  description: 'Discover our extensive collection of premium buffalo horn crafts including plates, bowls, jewelry, and decorative items. Handcrafted in Sambhal, India since 2015.',
  keywords: ['buffalo horn', 'horn crafts', 'horn plates', 'horn bowls', 'horn jewelry', 'handmade', 'India', 'export'],
  openGraph: {
    title: 'Buffalo Horn Crafts - The Moon Exports',
    description: 'Premium handcrafted buffalo horn products for global export',
    images: ['/images/Horn-Crafts.JPG'],
  },
};

export default function HornCraftsPage() {
  const plateProducts = hornProducts.filter(p => p.category === 'plates');
  const accessoryProducts = hornProducts.filter(p => p.category === 'accessories');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <Image
          src="/images/Horn-Crafts.JPG"
          alt="Buffalo Horn Crafts"
          fill
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-80"
        />
        <div className="absolute inset-0 -z-10 bg-black bg-opacity-50" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Buffalo Horn Crafts
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Discover our premium collection of handcrafted buffalo horn products. Each piece is 
              carefully crafted by skilled artisans in Sambhal, India, using traditional techniques 
              passed down through generations.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Overview */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Horn Craft Categories
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Explore our diverse range of buffalo horn products
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {hornCraftCategories.map((category) => (
              <Link key={category.id} href={category.href} className="group">
                <div className="relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                  <div className="aspect-[3/2] w-full">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products - Buffalo Horn Plates */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Buffalo Horn Plates
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Premium serving plates in various natural colors and finishes
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {plateProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-square w-full relative">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <div className="space-y-2">
                    <div>
                      <span className="text-xs font-medium text-gray-500">Colors:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {product.colors.map((color) => (
                          <span key={color} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">
                            {color}
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

      {/* Horn Accessories Section */}
      <div className="py-24 sm:py-32" id="accessories">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Horn Accessories & Jewelry
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Fashion accessories and functional items crafted from buffalo horn
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-16">
            {accessoryProducts.map((product) => (
              <div key={product.id} className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/2">
                  <div className="aspect-square w-full relative rounded-lg overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Applications:</h4>
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

      {/* Manufacturing Information */}
      <div className="bg-indigo-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Craftsmanship
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Traditional techniques meet modern quality standards
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Sustainable Materials
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <p><span className="font-medium">Source:</span> {hornCraftInfo.materials.source}</p>
                  <p><span className="font-medium">Sustainability:</span> {hornCraftInfo.materials.sustainability}</p>
                  <p><span className="font-medium">Properties:</span> {hornCraftInfo.materials.properties}</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Manufacturing Excellence
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <p><span className="font-medium">Location:</span> {hornCraftInfo.manufacturing.location}</p>
                  <p><span className="font-medium">Established:</span> {hornCraftInfo.manufacturing.established}</p>
                  <p><span className="font-medium">Quality:</span> {hornCraftInfo.manufacturing.quality}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Interested in Our Horn Crafts?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Contact us for custom orders, wholesale pricing, or to discuss your specific requirements.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Quote
              </Link>
              <Link href="/buffalo-horn-plates" className="text-base font-semibold leading-7 text-white">
                View Horn Plates <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
