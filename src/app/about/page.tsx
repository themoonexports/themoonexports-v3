import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about The Moon Exports - Premium handicrafts manufacturer and exporter since 2015. Located in Sambhal, Moradabad, India.',
};

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <Image
          src="/images/about-hero.jpg"
          alt="The Moon Exports Workshop"
          fill
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-30"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              About The Moon Exports
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Handcrafting excellence since 2015. From our workshop in Sambhal, Moradabad, 
              we create premium buffalo horn, wooden crafts, and resin products for global markets.
            </p>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Founded in 2015 by Kamran Khan, The Moon Exports began as a vision to showcase 
                the rich tradition of Indian handicrafts to the world. Based in Sambhal, Moradabad, 
                we specialize in creating premium quality buffalo horn products, wooden crafts, 
                and resin items.
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Our commitment to traditional craftsmanship combined with modern design sensibilities 
                has made us a trusted partner for luxury decor businesses and B2B clients across 
                25+ countries worldwide.
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Every piece we create tells a story of skilled artisanship, attention to detail, 
                and respect for natural materials. From horn button blanks to decorative bowls, 
                our products represent the finest in Indian handicraft tradition.
              </p>
            </div>
            <div className="lg:pl-8">
              <Image
                src="/images/founder.jpg"
                alt="Kamran Khan - Founder of The Moon Exports"
                width={500}
                height={600}
                className="w-full rounded-2xl object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Values</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What drives us every day
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our values guide everything we do, from selecting materials to delivering finished products.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  Quality First
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    We never compromise on quality. Each product undergoes rigorous quality checks 
                    to ensure it meets our high standards and exceeds customer expectations.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  Traditional Craftsmanship
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    We preserve and honor traditional Indian handicraft techniques while 
                    incorporating modern design elements to create timeless pieces.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  Customer Success
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Your success is our success. We work closely with each client to understand 
                    their needs and deliver products that help their business thrive.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-indigo-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to work together?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
              Get in touch to discuss your handicraft needs, custom orders, or export requirements.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Us
              </Link>
              <Link href="/products" className="text-sm font-semibold leading-6 text-white">
                View Products <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
