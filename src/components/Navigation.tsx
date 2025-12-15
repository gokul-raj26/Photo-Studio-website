import { useState, useEffect } from 'react';
import { Camera, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <Camera className="w-8 h-8 text-amber-500" />
            <div>
              <h1 className="text-2xl font-bold text-white">X4Studio</h1>
              <p className="text-xs text-amber-500">எக்ஸ்4ஸ்டுடியோ</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-300 hover:text-amber-500 transition-colors duration-200 font-medium"
              >
                {link.name}
              </button>
            ))}
            <a
              href="tel:09840571773"
              className="bg-amber-500 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-amber-400 transition-all duration-200"
            >
              Call Now
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900/98 backdrop-blur-sm">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-gray-300 hover:text-amber-500 py-2 transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
            <a
              href="tel:09840571773"
              className="block w-full text-center bg-amber-500 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-amber-400 transition-all duration-200 mt-4"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
