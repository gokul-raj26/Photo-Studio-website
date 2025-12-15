import { Camera, Phone, MapPin, Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Camera className="w-8 h-8 text-amber-500" />
              <div>
                <h3 className="text-2xl font-bold text-white">X4Studio</h3>
                <p className="text-sm text-amber-500">எக்ஸ்4ஸ்டுடியோ</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted photography studio in Pammal, Chennai. Capturing moments and creating memories with passion and professionalism.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">⭐</span>
              <span className="text-xl font-semibold text-white">4.9</span>
              <span className="text-gray-500">(59 reviews)</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('#home')}
                  className="hover:text-amber-500 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="hover:text-amber-500 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#services')}
                  className="hover:text-amber-500 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#portfolio')}
                  className="hover:text-amber-500 transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="hover:text-amber-500 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <a href="tel:09840571773" className="hover:text-amber-500 transition-colors">
                  098405 71773
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  H.L.L. Colony, Pammal<br />
                  Chennai – 600075
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">info@x4studio.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} X4Studio (எக்ஸ்4ஸ்டுடியோ). All Rights Reserved.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-gray-900 transition-all duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-gray-900 transition-all duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919840571773"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-gray-900 transition-all duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
