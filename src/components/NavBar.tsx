import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Logo color={scrolled ? 'text-secondary-900' : 'text-white'} />
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <NavLink href="#services" scrolled={scrolled}>Services</NavLink>
              <NavLink href="#gallery" scrolled={scrolled}>Our Work</NavLink>
              <NavLink href="#pricing" scrolled={scrolled}>Pricing</NavLink>
              <NavLink href="#testimonials" scrolled={scrolled}>Testimonials</NavLink>
              <NavLink href="#faq" scrolled={scrolled}>FAQ</NavLink>
              {/* <NavLink href="#contact" scrolled={scrolled}>Contact</NavLink> */}
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+18005551234" 
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors"
            >
              <Phone className="mr-2 h-4 w-4" />
              <span className={scrolled ? 'text-secondary-900' : 'text-white'}>832-708-0293</span>
            </a>
            <a 
              href="#booking" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-accent-600 hover:bg-accent-700 transition-colors"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book Now
            </a>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled ? 'text-secondary-900' : 'text-white'
              } hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-500`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
            <MobileNavLink href="#gallery" onClick={() => setIsOpen(false)}>Our Work</MobileNavLink>
            <MobileNavLink href="#pricing" onClick={() => setIsOpen(false)}>Pricing</MobileNavLink>
            <MobileNavLink href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</MobileNavLink>
            <MobileNavLink href="#faq" onClick={() => setIsOpen(false)}>FAQ</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <a 
                href="tel:+18005551234" 
                className="flex-1 px-4 py-2 text-center text-sm font-medium text-secondary-900 rounded-md border border-gray-300"
              >
                <Phone className="inline-block mr-2 h-4 w-4" />
                Call Us
              </a>
              <div className="w-4"></div>
              <a 
                href="#booking" 
                className="flex-1 px-4 py-2 text-center text-sm font-medium rounded-md text-white bg-accent-600"
              >
                <Calendar className="inline-block mr-2 h-4 w-4" />
                Book Now
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  scrolled: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, scrolled }) => {
  return (
    <a
      href={href}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        scrolled
          ? 'text-secondary-600 hover:text-secondary-900'
          : 'text-white hover:text-accent-300'
      }`}
    >
      {children}
    </a>
  );
};

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, children, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block px-3 py-2 rounded-md text-base font-medium text-secondary-900 hover:bg-secondary-50"
    >
      {children}
    </a>
  );
};

export default NavBar;