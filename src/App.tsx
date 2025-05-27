import React, { useState, useEffect } from 'react';
import Mascot from './components/Mascot';
import Chatbox from './components/Chatbox';
import LandingPage from './components/LandingPage';
import { getOrCreateSession } from './utils/sessionUtils';

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
      <LandingPage />
      
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