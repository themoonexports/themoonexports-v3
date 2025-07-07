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
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Product Categories
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Discover our range of premium handcrafted products made with traditional techniques
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category.name} className="group relative">
              <Link href={category.href} className="block">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                  <div className="relative h-80 w-full">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Category Title Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                          {category.name}
                        </h3>
                        <p className="text-sm opacity-90 drop-shadow-md px-4">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
