import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section id="newsletter" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#1A365D]"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5834359/pexels-photo-5834359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block p-3 bg-[#C19A6B]/20 rounded-full mb-6">
            <Mail className="w-8 h-8 text-[#C19A6B]" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">Join Our Literary Community</h2>
          <p className="mt-4 text-white/80 text-lg">
            Subscribe to our newsletter for exclusive book recommendations, author interviews, 
            special offers, and literary events.
          </p>
          
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#C19A6B] focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-[#C19A6B] text-white rounded-lg hover:bg-[#A47F55] transition-colors duration-300 flex items-center justify-center whitespace-nowrap"
            >
              Subscribe <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </form>
          
          {isSubmitted && (
            <div className="mt-4 text-[#C19A6B] animate-fadeIn">
              Thank you for subscribing! Check your inbox soon.
            </div>
          )}
          
          <p className="mt-4 text-white/60 text-sm">
            By subscribing, you agree to receive marketing emails from HarperCollins India. 
            You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;