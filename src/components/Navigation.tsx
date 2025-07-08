'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  {
    name: 'Handicrafts',
    href: '/products',
    submenu: [
      { name: 'Horn Crafts', href: '/horn-crafts' },
      { name: 'Buffalo Horn Plates', href: '/buffalo-horn-plates' },
      { name: 'Wooden Crafts', href: '/wooden-crafts' },
      { name: 'Resin Products', href: '/resin' },
    ],
  },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Blog', href: '/blog' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">The Moon Exports</span>
            <Image
              className="h-8 w-auto"
              src="/images/logo.png"
              alt="The Moon Exports"
              width={120}
              height={32}
              priority
            />
          </Link>
        </div>
        
        {/* Language Switcher */}
        <div className="hidden lg:flex lg:gap-x-4 items-center">
          <Link href="/de" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
            <Image
              src="/images/german.png"
              alt="Deutsch"
              width={20}
              height={20}
              className="rounded-full mr-1"
            />
            DE
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.submenu ? (
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="flex items-center text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600">
                      {item.name}
                      <ChevronDownIcon className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          <Link
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            <Image
                              src="/images/dropdown.jpg"
                              alt="Handicrafts"
                              width={200}
                              height={120}
                              className="w-full h-20 object-cover rounded mb-2"
                            />
                            All Products
                          </Link>
                        </Menu.Item>
                        {item.submenu.map((subItem) => (
                          <Menu.Item key={subItem.name}>
                            <Link
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {subItem.name}
                            </Link>
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">The Moon Exports</span>
                <Image
                  className="h-8 w-auto"
                  src="/images/logo.png"
                  alt="The Moon Exports"
                  width={120}
                  height={32}
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <div className="ml-4 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block rounded-lg px-3 py-2 text-sm leading-6 text-gray-600 hover:bg-gray-50"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
