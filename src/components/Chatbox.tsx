import React, { useState, useRef, useEffect } from 'react';
import { X, Send, RefreshCw } from 'lucide-react';
import { Message } from '../types';
import { generateSessionId } from '../utils/sessionUtils';

interface ChatboxProps {
  isOpen: boolean;
  onClose: () => void;
  sessionId: string;
}

const Chatbox: React.FC<ChatboxProps> = ({ isOpen, onClose, sessionId }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load existing messages from localStorage if available
    const savedMessages = localStorage.getItem(`chat_messages_${sessionId}`);
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages).map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
        setMessages(parsedMessages);
      } catch (error) {
        console.error('Failed to parse saved messages:', error);
      }
    }
  }, [sessionId]);

  useEffect(() => {
    // Save messages to localStorage whenever they change
    localStorage.setItem(`chat_messages_${sessionId}`, JSON.stringify(messages));
  }, [messages, sessionId]);

  useEffect(() => {
    // Scroll to bottom whenever messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response after a delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `Thanks for your message! This is a simulated response for session ${sessionId}.`,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleNewSession = () => {
    const newSessionId = generateSessionId();
    localStorage.setItem('chatSessionId', newSessionId);
    setMessages([
      {
        id: '1',
        text: 'Hello! How can I help you today?',
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
    window.location.reload(); // Force reload to update session
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div 
      className={`fixed bottom-24 right-8 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden z-40
        transition-all duration-300 ease-in-out transform
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'}`}
      style={{ maxHeight: 'calc(100vh - 150px)' }}
    >
      {/* Header */}
      <div className="bg-indigo-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h3 className="font-medium">Chat Assistant</h3>
          <div className="text-xs opacity-75">Session: {sessionId.substring(0, 8)}...</div>
        </div>
        <div className="flex items-center space-x-2">
          <button 
            onClick={handleNewSession} 
            className="p-1 rounded-full hover:bg-indigo-500 transition-colors"
            title="Start new session"
          >
            <RefreshCw size={16} />
          </button>
          <button 
            onClick={onClose} 
            className="p-1 rounded-full hover:bg-indigo-500 transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      </div>
      
      {/* Messages Container */}
      <div className="h-80 overflow-y-auto p-4 bg-gray-50">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`mb-4 ${message.sender === 'user' ? 'text-right' : ''}`}
          >
            <div 
              className={`inline-block max-w-[75%] px-4 py-2 rounded-lg
                ${message.sender === 'user' 
                  ? 'bg-indigo-600 text-white rounded-tr-none' 
                  : 'bg-gray-200 text-gray-800 rounded-tl-none'}`}
            >
              {message.text}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="mb-4">
            <div className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded-lg rounded-tl-none">
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input Area */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            rows={1}
          />
          <button 
            onClick={handleSendMessage}
            disabled={inputValue.trim() === ''}
            className={`p-2 rounded-lg ${
              inputValue.trim() === '' 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;