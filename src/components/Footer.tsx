import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, BookOpen, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F8F5F0] pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 text-[#1A365D] mr-2" />
              <span className="text-2xl font-serif font-bold text-[#1A365D]">HarperCollins</span>
              <span className="text-xs text-[#C19A6B] mt-1">INDIA</span>
            </div>
            <p className="text-gray-600 mb-6">
              HarperCollins India publishes some of the finest writers from India and around the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A365D] flex items-center justify-center text-white hover:bg-[#C19A6B] transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A365D] flex items-center justify-center text-white hover:bg-[#C19A6B] transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A365D] flex items-center justify-center text-white hover:bg-[#C19A6B] transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A365D] flex items-center justify-center text-white hover:bg-[#C19A6B] transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-[#1A365D] mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Books', 'Authors', 'Events', 'News', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-[#C19A6B] transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-[#1A365D] mb-4">Categories</h3>
            <ul className="space-y-3">
              {['Fiction', 'Non-Fiction', 'Children\'s Books', 'Business', 'Biography', 'Self-Help', 'Fantasy', 'Romance'].map((item) => (
                <li key={item}>
                  <a href={`#category-${item.toLowerCase()}`} className="text-gray-600 hover:text-[#C19A6B] transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-[#1A365D] mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[#C19A6B] mr-3 mt-0.5" />
                <span className="text-gray-600">
                  A-75, Sector 57, Noida, Uttar Pradesh 201301, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-[#C19A6B] mr-3" />
                <span className="text-gray-600">+91 120 404 4800</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-[#C19A6B] mr-3" />
                <span className="text-gray-600">customer.service@harpercollins.co.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} HarperCollins Publishers India. All Rights Reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="text-gray-600 hover:text-[#C19A6B] transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-[#C19A6B] transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-[#C19A6B] transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;