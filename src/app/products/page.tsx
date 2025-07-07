import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Products',
  description: 'Explore our range of premium handicrafts including buffalo horn crafts, wooden items, and resin products. Handmade in India.',
};

const productCategories = [
  {
    name: 'Horn Crafts',
    href: '/horn-crafts',
    image: '/images/Horn-Crafts.JPG',
    description: 'Premium buffalo horn handicrafts including bowls, plates, accessories, and decorative items.',
    features: ['Horn Bowls', 'Horn Plates', 'Horn Buttons', 'Walking Sticks', 'Horn Jewelry'],
  },
  {
    name: 'Wooden Crafts',
    href: '/wooden-crafts',
    image: '/images/pizza-cutter.jpg',
    description: 'Handcrafted wooden items including kitchen accessories, decorative pieces, and functional art.',
    features: ['Kitchen Utensils', 'Pizza Cutters', 'Wooden Bowls', 'Decorative Items', 'Custom Designs'],
  },
  {
    name: 'Resin Products',
    href: '/resin',
    image: '/images/resin-bangle.jpg',
    description: 'Beautiful resin jewelry and decorative items combining traditional craftsmanship with modern materials.',
    features: ['Resin Bangles', 'Jewelry', 'Decorative Items', 'Custom Colors', 'Modern Designs'],
  },
];

const features = [
  {
    name: 'Handcrafted Quality',
    description: 'Each piece is carefully handcrafted by skilled artisans using traditional techniques.',
  },
  {
    name: 'Natural Materials',
    description: 'We use only the finest natural materials including buffalo horn, premium wood, and quality resin.',
  },
  {
    name: 'Custom Designs',
    description: 'Work with our team to create custom pieces that meet your specific requirements.',
  },
  {
    name: 'Export Ready',
    description: 'All products are export-ready with proper packaging and documentation.',
  },
];

export default function Products() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <Image
          src="/images/products-hero.jpg"
          alt="The Moon Exports Products"
          fill
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Our Products
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Discover our collection of premium handicrafts made from natural materials 
              using traditional Indian craftsmanship techniques.
            </p>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Product Categories
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Each category represents years of expertise and traditional craftsmanship
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {productCategories.map((category) => (
            <div key={category.name} className="group relative">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 group-hover:shadow-xl">
                <div className="relative h-64 w-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold leading-6 text-gray-900 group-hover:text-indigo-600">
                    <Link href={category.href}>
                      <span className="absolute inset-0" />
                      {category.name}
                    </Link>
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {category.description}
                  </p>
                  
                  <ul className="mt-4 space-y-1">
                    {category.features.map((feature) => (
                      <li key={feature} className="text-sm text-gray-500 flex items-center">
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6">
                    <span className="text-sm font-semibold text-indigo-600 group-hover:text-indigo-500">
                      Explore {category.name} →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Quality Assurance</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Products
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our commitment to quality and traditional craftsmanship sets us apart in the handicrafts industry.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <div className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to place an order?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
              Contact us for custom orders, bulk purchases, or to discuss your specific requirements.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get Quote
              </Link>
              <Link href="/about" className="text-sm font-semibold leading-6 text-white">
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
