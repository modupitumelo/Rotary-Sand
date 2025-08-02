import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Our Products', path: '/products', scrollToTop: true },
    { name: 'Services', path: '/services', scrollToTop: true },
    { name: 'B-BBEE', path: '/bee', scrollToTop: true },
    { name: 'Gallery', path: '/gallery', scrollToTop: true },
  ];

  const services = [
    { name: 'Filter Sands & Grits', path: '/services', section: 'filter-sands' },
    { name: 'Industrial Sands', path: '/services', section: 'industrial-sands' },
    { name: 'Building Materials', path: '/services', section: 'building-materials' },
    { name: 'Sports & Leisure Sands', path: '/services', section: 'sports-leisure' }
  ];

  const handleQuickLinkClick = (path: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (path: string, section: string) => {
    // Navigate to services page and scroll to section
    window.location.href = `${path}#${section}`;
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <img src="/logo2.png" alt="Rotary Sand Logo" className="h-12 w-auto object-contain group-hover:opacity-80 transition-opacity duration-200" />
              </div>
              
            </Link>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Your trusted partner in premium sand & stone solutions. 
              Supplying top-quality materials across South Africa since 2015.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <div className="bg-gray-800 p-2 rounded-md">
                  <span className="text-white font-bold text-xs">Level 1</span>
                </div>
                <span className="text-gray-400">B-BBEE Contributor</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-gray-800 p-2 rounded-md">
                  <span className="text-white font-bold text-xs">Quality</span>
                </div>
                <span className="text-gray-400">Assured Standards</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                 onClick={() => handleQuickLinkClick(link.path)}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 group flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="bg-gray-800 p-2 rounded-md group-hover:bg-gray-700 transition-colors duration-200">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <a href="tel:+27813807867" className="text-gray-300 hover:text-white transition-colors duration-200">
                    +27 81 380 7867
                  </a>
                  <p className="text-xs text-gray-500">Mon-Fri: 7am-5pm</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="bg-gray-800 p-2 rounded-md group-hover:bg-gray-700 transition-colors duration-200">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <div>
                  <a href="mailto:info@rotarysand.co.za" className="text-gray-300 hover:text-white transition-colors duration-200">
                    info@rotarysand.co.za
                  </a>
                  <p className="text-xs text-gray-500">24h response</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="bg-gray-800 p-2 rounded-md group-hover:bg-gray-700 transition-colors duration-200">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div>
                  <span className="text-gray-300">Bronkhorstspruit</span>
                  <p className="text-xs text-gray-500">South Africa</p>
                </div>
              </div>
            </div>
          </div>
        </div>

    

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 Rotary Sand. All rights reserved.
              </p>
            
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm mr-2">Follow us:</span>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-200 group">
                <Facebook className="h-4 w-4 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-200 group">
                <Twitter className="h-4 w-4 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-200 group">
                <Linkedin className="h-4 w-4 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-200 group">
                <Instagram className="h-4 w-4 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
