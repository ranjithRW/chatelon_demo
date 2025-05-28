import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingCart, BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent '
      }`}
    >
      <div className='bg-red-500 text-white text-center py-2'>
        <a href='#' className='hover:underline'>Want to stay in the loop with latest bookish news and views? Subscribe to HarperBroadcast!</a>
      </div>
      <br></br>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
           <img src="/hlogo.webp" alt="Bookstore Logo" className="h-8 w-auto" />
          </div>
         
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Books', 'Authors', 'Categories', 'About Us', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-[#1A365D] hover:text-[#C19A6B] transition-colors duration-200 font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button aria-label="Search" className="text-[#1A365D] hover:text-[#C19A6B] transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
          
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#1A365D]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute w-full">
          <nav className="flex flex-col space-y-4">
            {['Home', 'Books', 'Authors', 'Categories', 'About Us', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-[#1A365D] hover:text-[#C19A6B] transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-200">
            <button aria-label="Search" className="text-[#1A365D] hover:text-[#C19A6B] transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
            <button aria-label="Cart" className="text-[#1A365D] hover:text-[#C19A6B] transition-colors duration-200">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;