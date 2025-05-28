import React, { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div 
      className="group relative bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <img 
          src={book.cover} 
          alt={book.title} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        
        {/* Quick action buttons */}
        <div className={`absolute top-2 right-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button 
            onClick={() => setIsFavorite(!isFavorite)} 
            className="p-2 bg-white rounded-full shadow-md hover:bg-[#F8F5F0] transition-colors"
            aria-label="Add to favorites"
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-[#C19A6B] text-[#C19A6B]' : 'text-gray-600'}`} />
          </button>
        </div>
      </div>

      <div className="p-4">
        <span className="text-sm text-[#C19A6B] font-medium">{book.category}</span>
        <h3 className="font-serif font-bold text-lg text-[#1A365D] mt-1 leading-tight">{book.title}</h3>
        <p className="text-gray-600 mt-1">{book.author}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-bold text-[#1A365D]">₹{book.price}</span>
          <button className="p-2 text-[#1A365D] hover:text-[#C19A6B] transition-colors" aria-label="Add to cart">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* View details button (appears on hover) */}
      <div 
        className={`absolute bottom-0 left-0 right-0 bg-[#1A365D] text-white py-3 text-center font-medium transform transition-transform duration-300 ${
          isHovered ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        View Details
      </div>
    </div>
  );
};