import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[#F8F5F0] opacity-60 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3847770/pexels-photo-3847770.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="animate-fadeIn">
              <span className="text-[#C19A6B] font-medium tracking-wider uppercase text-sm">New Release</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A365D] mt-2 leading-tight">
                Discover worlds within pages
              </h1>
              <p className="mt-4 md:mt-6 text-gray-700 text-lg md:text-xl max-w-xl leading-relaxed">
                Explore our curated collection of bestsellers, new releases, and timeless classics from renowned authors across the globe.
              </p>
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
                <a 
                  href="#featured-books" 
                  className="px-6 py-3 bg-[#1A365D] text-white rounded hover:bg-[#0F2442] transition-colors duration-300 inline-flex items-center justify-center text-base font-medium"
                >
                  Explore Books <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a 
                  href="#newsletter" 
                  className="px-6 py-3 border border-[#1A365D] text-[#1A365D] rounded hover:bg-[#F8F5F0] transition-colors duration-300 inline-flex items-center justify-center text-base font-medium"
                >
                  Join Book Club
                </a>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
            <div className="w-72 h-96 md:w-80 md:h-[30rem] relative animate-float">
              <img 
                src="https://images.pexels.com/photos/2943603/pexels-photo-2943603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Featured book" 
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded shadow-lg">
                <span className="block text-[#C19A6B] font-bold">Best Seller</span>
                <span className="block text-[#1A365D] font-medium">4.8 ★★★★★</span>
              </div>
            </div>
            <div className="absolute top-1/4 -left-8 w-40 h-60 bg-[#F8F5F0] rounded-lg shadow-lg transform -rotate-6 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;