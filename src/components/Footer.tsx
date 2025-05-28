import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Rss } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2B5A8C] text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        {/* Logo and description */}
        <div className="text-center mb-12">
          <div>
            <p className="mx-auto h-16 w-auto"
            >HarperCollins Publishers India</p>

          </div>
          <p className="text-sm leading-relaxed max-w-4xl mx-auto">
            HarperCollins Publishers India Pvt. Ltd. (formerly known as HarperCollins Publishers India Ltd.),
            a wholly-owned subsidiary of HarperCollins Publishers Ltd., UK, came into being in 1991 and has
            completed more than 25 years in India. HarperCollins, as a brand, has completed over 200 years
            globally. HarperCollins India is one of the world's largest entertainment-to-education publishers.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Top Genres */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">TOP GENRES</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Poetry</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Hindi</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Graphic Novel</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Crime/Thriller/Mystery</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Biography, Memoir and True Story</a></li>
            </ul>
            <a href="#" className="text-sm font-semibold hover:text-gray-300 transition-colors mt-3 inline-block">
              Explore more
            </a>
          </div>

          {/* Popular Authors */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">POPULAR AUTHORS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Shrayana Bhattacharya</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Anindita Ghose</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Shivani Sibal</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Farah Bashir</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Sreedhar Bevara</a></li>
            </ul>
            <a href="#" className="text-sm font-semibold hover:text-gray-300 transition-colors mt-3 inline-block">
              Explore more
            </a>
          </div>

          {/* Bestselling Books */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">BESTSELLING BOOKS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Too Good To Be True</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Mahagatha</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Youth and Truth</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">The Book Of Dog</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Onam in a Nightie</a></li>
            </ul>
            <a href="#" className="text-sm font-semibold hover:text-gray-300 transition-colors mt-3 inline-block">
              Explore more
            </a>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">ABOUT US</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Company Profile</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">The Team</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Manage Preferences</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Catalogues</a></li>
            </ul>
          </div>

          {/* Global Divisions */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">GLOBAL DIVISIONS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">HarperCollins UK</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">HarperCollins US</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">HarperCollins Canada</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">HarperCollins Christian Publishing</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">HarperCollins Australia</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-sm mr-4">Follow HarperCollins India :</span>
            <div className="flex space-x-3">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Rss className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <span className="text-sm mr-4">Follow HarperCollinsChildren's Books :</span>
            <div className="flex space-x-3">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie notice */}
      <div className="bg-black text-white py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            This website uses "cookies" to give you the best, most relevant experience. By continuing to browse the site,
            you are agreeing to our use of cookies and privacy policy.
            <a href="#" className="underline hover:text-gray-300 ml-1">Learn more</a>
          </p>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;