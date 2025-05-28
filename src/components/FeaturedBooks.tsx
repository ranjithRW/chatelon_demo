import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { BookCard } from './BookCard';
import { books } from '../data/books';

const FeaturedBooks: React.FC = () => {
  return (
    <section id="featured-books" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[#C19A6B] font-medium tracking-wider uppercase text-sm">Curated Selection</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A365D] mt-1">Featured Books</h2>
            <p className="mt-2 text-gray-600 max-w-2xl">
              Discover our handpicked selection of the most compelling reads across diverse genres.
            </p>
          </div>
          <a 
            href="#all-books" 
            className="mt-4 md:mt-0 inline-flex items-center text-[#1A365D] font-medium hover:text-[#C19A6B] transition-colors duration-200"
          >
            View all books <ArrowRight className="ml-1 w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {books.slice(0, 8).map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;