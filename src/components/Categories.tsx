import React from 'react';
import { Book, Flame, Heart, Coffee, Sparkles, Brain, Globe } from 'lucide-react';

const categories = [
  { 
    id: 1, 
    name: 'Fiction', 
    icon: <Book className="w-6 h-6" />, 
    description: 'Immerse yourself in captivating stories',
    image: 'https://images.pexels.com/photos/1516983/pexels-photo-1516983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  { 
    id: 2, 
    name: 'Thriller', 
    icon: <Flame className="w-6 h-6" />, 
    description: 'Heart-pounding suspense and excitement',
    image: 'https://images.pexels.com/photos/4153146/pexels-photo-4153146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  { 
    id: 3, 
    name: 'Romance', 
    icon: <Heart className="w-6 h-6" />, 
    description: 'Love stories that touch the heart',
    image: 'https://images.pexels.com/photos/16796629/pexels-photo-16796629/free-photo-of-close-up-of-a-book.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  { 
    id: 4, 
    name: 'Self-Help', 
    icon: <Coffee className="w-6 h-6" />, 
    description: 'Transform your life with powerful insights',
    image: 'https://images.pexels.com/photos/5834344/pexels-photo-5834344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  { 
    id: 5, 
    name: 'Fantasy', 
    icon: <Sparkles className="w-6 h-6" />, 
    description: 'Enter magical worlds of wonder',
    image: 'https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  { 
    id: 6, 
    name: 'Non-Fiction', 
    icon: <Brain className="w-6 h-6" />, 
    description: 'Expand your knowledge and understanding',
    image: 'https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const Categories: React.FC = () => {
  return (
    <section id="categories\" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#C19A6B] font-medium tracking-wider uppercase text-sm">Discover</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A365D] mt-1">Browse by Category</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Find your next favorite read by exploring our diverse collection of genres.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <a 
              key={category.id} 
              href={`#category-${category.id}`}
              className="group relative overflow-hidden rounded-lg h-64 shadow-md transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A365D]/90 to-[#1A365D]/30"></div>
              </div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <div className="mb-4 p-3 bg-white/10 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold">{category.name}</h3>
                <p className="mt-1 text-white/90">{category.description}</p>
                <span className="mt-3 inline-block text-[#C19A6B] font-medium group-hover:underline">
                  Explore books
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;