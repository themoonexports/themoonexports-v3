import Link from 'next/link';
import Image from 'next/image';

const navigation = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Terms and Conditions', href: '/legal/terms' },
  ],
  products: [
    { name: 'Horn Crafts', href: '/horn-crafts' },
    { name: 'Wooden Crafts', href: '/wooden-crafts' },
    { name: 'Resin Products', href: '/resin' },
    { name: 'Buffalo Horn Plates', href: '/buffalo-horn-plates' },
  ],
};

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/themoonexports' },
  { name: 'Instagram', href: 'https://instagram.com/themoonexports/' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/themoonexports/' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo.png"
              alt="The Moon Exports"
              width={150}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4">
              Premium handicrafts manufacturer and exporter specializing in buffalo horn, 
              wooden crafts, and resin products since 2015.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-300">
                <strong>Contact:</strong> +91 8909070131
              </p>
              <p className="text-sm text-gray-300">
                <strong>Email:</strong> info@themoonexports.com
              </p>
              <p className="text-sm text-gray-300">
                <strong>Location:</strong> Sambhal, Moradabad, India
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-400">
            &copy; {currentYear} The Moon Exports. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">{item.name}</span>
                <span className="text-sm">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
