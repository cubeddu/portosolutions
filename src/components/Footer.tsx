import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Tv } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo color="text-white" />
            <p className="mt-4 text-gray-400 max-w-xs">
              Professional TV mounting services with precision and care. We ensure your entertainment is perfectly installed.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Our Work</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">TV Mounting</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Cable Management</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Commercial Installation</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">In-Wall Wiring</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Custom Solutions</a>
              </li>
            </ul>
          </div>
          
          {/* <div>
            <h3 className="text-lg font-display font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p>123 Main Street</p>
              <p>Suite 100</p>
              <p>Anytown, ST 12345</p>
              <p className="mt-4">
                <a href="tel:+18005551234" className="hover:text-white transition-colors">
                  (800) 555-1234
                </a>
              </p>
              <p>
                <a href="mailto:info@premiermount.com" className="hover:text-white transition-colors">
                  info@premiermount.com
                </a>
              </p>
            </address>
          </div> */}
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} PremierMount. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;