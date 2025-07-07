import Link from 'next/link';
import Image from 'next/image';
import { SVGProps } from 'react';

interface SocialLinkProps {
  name: string;
  href: string;
  icon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
}

const socialLinks: SocialLinkProps[] = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/themoonexports?__mref=message_bubble',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/themoonexports',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/themoonexports/',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.326-1.297L3.891 16.923c.688.688 1.51 1.193 2.448 1.51v-1.445zm7.07 0v1.445c.938-.317 1.76-.822 2.448-1.51l-1.232-1.232c-.878.807-2.029 1.297-3.326 1.297h.11zm0-9.41h-3.297c.11-.688.49-1.297 1.072-1.76L12.017 5.1c-.688 0-1.297.275-1.76.688-.463.413-.797.962-.962 1.566h3.297c.055-.467.275-.878.577-1.193.302-.315.688-.49 1.127-.49s.825.175 1.127.49c.302.315.522.726.577 1.193zm0 4.73c0 1.76-1.445 3.216-3.216 3.216s-3.216-1.456-3.216-3.216 1.445-3.216 3.216-3.216 3.216 1.456 3.216 3.216z" />
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    href: 'https://www.pinterest.com/themoonexports/',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.739.099.120.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.286-.744 2.840-.269 1.011-1.002 2.275-1.492 3.044 1.124.347 2.317.535 3.554.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/themoonexports/',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const footerNavigation = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Terms and Conditions', href: '/legal/terms' },
    { name: 'Impressum', href: '/legal/imprint' },
    { name: 'FAQ', href: '/faq' },
  ],
  products: [
    { name: 'Horn Crafts', href: '/horn-crafts' },
    { name: 'Wooden Crafts', href: '/wooden-crafts' },
    { name: 'Resin Products', href: '/resin' },
  ],
  support: [
    { name: 'Essential Oil', href: 'https://smellofmoon.com/' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image
              className="h-8"
              src="/images/logo.png"
              alt="The Moon Exports"
              width={120}
              height={32}
            />
            <p className="text-sm leading-6 text-gray-300">
              Premium handicrafts manufacturer and exporter specializing in buffalo horn, 
              wooden crafts, and resin products since 2015.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">The Moon Exports</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Products</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.products.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <h3 className="text-sm font-semibold leading-6 text-white mt-8">Essential Oil</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.support.map((item) => (
                    <li key={item.name}>
                      <a 
                        href={item.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        Diffuser essential oil
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <p className="text-sm leading-6 text-gray-300">
                      <strong>Contact No.:</strong> +91 8909070131
                    </p>
                  </li>
                  <li>
                    <p className="text-sm leading-6 text-gray-300">
                      <strong>Email:</strong> info@themoonexports.com
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter Signup Section */}
        <div className="mt-16 border-t border-gray-900/10 pt-8">
          <div className="text-center">
            <h3 className="text-sm font-semibold leading-6 text-white">Stay updated with our latest products</h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              Get the latest news about our handicrafts and special offers.
            </p>
            {/* Newsletter form would go here */}
          </div>
        </div>

        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <p className="text-xs leading-5 text-gray-400">
              &copy; {currentYear} The Moon Exports. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <a
                href="https://www.paypal.com/in/webapps/mpp/paypal-popup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="/images/paypal-secured.png"
                  alt="Secured by PayPal"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
