import React, { useState, useEffect } from 'react';
import Mascot from './components/Mascot';
import Chatbox from './components/Chatbox';
import LandingPage from './components/LandingPage';
import { getOrCreateSession } from './utils/sessionUtils';
import Header from './components/Header';
import FeaturedBooks from './components/FeaturedBooks';
import AuthorSpotlight from './components/AuthorSpotlight';
import Categories from './components/Categories';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    // Get or create a session ID on component mount
    const currentSessionId = getOrCreateSession();
    setSessionId(currentSessionId);
  }, []);

  const toggleChat = () => {
    setIsChatOpen(prev => !prev);
  };

  return (
    <div className="relative">
      <div className="min-h-screen bg-white">
        <Header />
        <main className='py-12 sm:py-0'>
          <Hero />
          <FeaturedBooks />
          <AuthorSpotlight />
          <Categories />
          <Newsletter />
        </main>
        <Footer />
      </div>

      {/* Chatbot UI */}
      <Mascot
        onClick={toggleChat}
        isActive={isChatOpen}
      />

      <Chatbox
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        sessionId={sessionId}
      />
    </div>
  );
}

export default App;