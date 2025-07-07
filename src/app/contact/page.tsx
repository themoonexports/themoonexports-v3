import type { Metadata } from 'next';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with The Moon Exports for custom handicrafts, bulk orders, or export inquiries. Located in Sambhal, Moradabad, India.',
};

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ready to discuss your handicraft needs? We&apos;re here to help with custom orders, 
              bulk purchases, and export inquiries.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information and Form */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Get in Touch
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you&apos;re looking for custom handicrafts, bulk orders, or have questions 
              about our products, we&apos;d love to hear from you.
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex gap-x-4">
                <div className="flex h-7 w-7 flex-none items-center justify-center">
                  <PhoneIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Phone</h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    <a href="tel:+918909070131" className="hover:text-indigo-600">
                      +91 8909070131
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-x-4">
                <div className="flex h-7 w-7 flex-none items-center justify-center">
                  <EnvelopeIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Email</h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    <a href="mailto:info@themoonexports.com" className="hover:text-indigo-600">
                      info@themoonexports.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-x-4">
                <div className="flex h-7 w-7 flex-none items-center justify-center">
                  <MapPinIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Address</h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    Sambhal, Moradabad<br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-10 border-t border-gray-200 pt-10">
              <h3 className="text-base font-semibold leading-7 text-gray-900">Business Hours</h3>
              <div className="mt-4 space-y-2 text-base leading-7 text-gray-600">
                <p>Monday - Saturday: 9:00 AM - 6:00 PM (IST)</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
            <h3 className="text-base font-semibold leading-7 text-gray-900">Send us a message</h3>
            <form className="mt-8 space-y-6">
              <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">
                  Company
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section Placeholder */}
      <div className="bg-gray-100 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Visit Our Workshop</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Located in the heart of Sambhal, Moradabad - India&apos;s handicraft hub
            </p>
            <div className="mt-8 h-64 bg-gray-300 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Map will be integrated here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
