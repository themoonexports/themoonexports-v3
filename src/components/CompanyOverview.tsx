import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleIcon, GlobeAltIcon, TruckIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Premium Quality',
    description: 'Handcrafted with traditional techniques',
    icon: CheckCircleIcon,
  },
  {
    name: 'Global Export',
    description: 'Serving clients worldwide since 2015',
    icon: GlobeAltIcon,
  },
  {
    name: 'Fast Delivery',
    description: 'Timely delivery worldwide',
    icon: TruckIcon,
  },
  {
    name: 'Trusted Brand',
    description: 'Established reputation in handicrafts',
    icon: ShieldCheckIcon,
  },
];

const stats = [
  { name: 'Years of Experience', value: '10+' },
  { name: 'Products Exported', value: '50,000+' },
  { name: 'Countries Served', value: '25+' },
  { name: 'Happy Clients', value: '1,000+' },
];

export default function CompanyOverview() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Company Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Moon Exports
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Established in 2015, we are a premier manufacturer and exporter of handcrafted items 
              specializing in buffalo horn, wooden crafts, and resin products from Sambhal, Moradabad, India.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature.name} className="flex items-start">
                  <feature.icon className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.name}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/images/Kamran-Khan.jpg"
              alt="Kamran Khan - Founder of The Moon Exports"
              width={500}
              height={400}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Our Impact in Numbers</h3>
            <p className="text-gray-600 mt-2">Building trust through quality and reliability</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.name}>
                <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gray-900 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Order?
          </h3>
          <p className="text-gray-300 mb-6">
            Contact us for custom handicrafts, bulk orders, or export inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-medium"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
