import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    name: 'Horn Crafts',
    href: '/horn-crafts',
    image: '/images/Horn-Crafts.JPG',
    description: 'Premium buffalo horn handicrafts and accessories',
  },
  {
    name: 'Wooden Crafts',
    href: '/wooden-crafts',
    image: '/images/pizza-cutter.jpg',
    description: 'Handcrafted wooden items and kitchen accessories',
  },
  {
    name: 'Resin Products',
    href: '/resin',
    image: '/images/resin-bangle.jpg',
    description: 'Beautiful resin jewelry and decorative items',
  },
];

export default function ProductCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Product Categories
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover our range of premium handcrafted products
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.name} 
              href={category.href}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.description}
                </p>
                <div className="mt-4">
                  <span className="text-blue-600 font-medium group-hover:text-blue-700">
                    View Products →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
