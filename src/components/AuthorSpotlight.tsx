import React from 'react';
import { authors } from '../data/authors';

const AuthorSpotlight: React.FC = () => {
  return (
    <section id="authors" className="py-16 md:py-24 bg-[#F8F5F0]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#C19A6B] font-medium tracking-wider uppercase text-sm">The Creative Minds</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A365D] mt-1">Author Spotlight</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Meet the brilliant authors behind our most beloved books and discover their literary journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {authors.slice(0, 4).map((author) => (
            <div key={author.id} className="group flex flex-col items-center">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-4">
                <img 
                  src={author.photo} 
                  alt={author.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#1A365D]">{author.name}</h3>
              <p className="text-[#C19A6B] font-medium mt-1">{author.genre}</p>
              <p className="text-center text-gray-600 mt-3 px-4">{author.bio}</p>
              <a 
                href={`#author-${author.id}`} 
                className="mt-4 inline-block px-6 py-2 border border-[#1A365D] text-[#1A365D] rounded-full hover:bg-[#1A365D] hover:text-white transition-colors duration-300"
              >
                View Books
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorSpotlight;