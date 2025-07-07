import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleIcon, GlobeAltIcon, TruckIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Premium Quality',
    description: 'Handcrafted with traditional techniques and premium materials',
    icon: CheckCircleIcon,
  },
  {
    name: 'Global Export',
    description: 'Serving luxury decor businesses and B2B clients worldwide',
    icon: GlobeAltIcon,
  },
  {
    name: 'Fast Delivery',
    description: 'Timely delivery to meet your business requirements',
    icon: TruckIcon,
  },
  {
    name: 'Trusted Since 2015',
    description: 'Established reputation in handicrafts manufacturing',
    icon: ShieldCheckIcon,
  },
];

const stats = [
  { id: 1, name: 'Years of Experience', value: '10+' },
  { id: 2, name: 'Products Exported', value: '50,000+' },
  { id: 3, name: 'Countries Served', value: '25+' },
  { id: 4, name: 'Happy Clients', value: '1,000+' },
];

export default function CompanyOverview() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Company Introduction */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">About Us</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                The Moon Exports
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Established in 2015 by Kamran Khan, The Moon Exports is a premier manufacturer and 
                exporter of handcrafted items specializing in buffalo horn, wooden crafts, and resin products. 
                Located in Sambhal, Moradabad, India, we serve luxury decor businesses and B2B clients globally.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <Link
                  href="/about"
                  className="inline-flex items-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Learn more about us
                </Link>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/Kamran-Khan.jpg"
              alt="Kamran Khan - Founder of The Moon Exports"
              width={600}
              height={400}
              className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10"
            />
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg ring-1 ring-gray-900/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">2015</div>
                <div className="text-sm text-gray-600">Established</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 sm:mt-32">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Impact in Numbers
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Over the years, we have built a strong reputation in the handicrafts industry, 
              serving clients across the globe with our premium quality products.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                <dt className="text-sm leading-6 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-24 sm:mt-32">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Your Order?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Get in touch with us for custom handicrafts, bulk orders, or export inquiries. 
              Our team is ready to help bring your vision to life.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Us
              </Link>
              <Link href="/products" className="text-sm font-semibold leading-6 text-white">
                View Products <span aria-hidden="true">→</span>
              </Link>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
