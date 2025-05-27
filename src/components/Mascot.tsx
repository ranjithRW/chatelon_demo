import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

interface MascotProps {
  onClick: () => void;
  isActive: boolean;
}

const Mascot: React.FC<MascotProps> = ({ onClick, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ease-in-out 
        ${isActive ? 'scale-90' : 'scale-100'} 
        ${isHovered ? 'transform translate-y-[-8px]' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative cursor-pointer">
        <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
          <MessageCircle size={28} className="text-white" />
        </div>
        
        {!isActive && (
          <div className={`absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full border-2 border-white
            ${isHovered ? 'animate-pulse' : ''}`}>
          </div>
        )}
        
        {isHovered && !isActive && (
          <div className="absolute -top-10 right-0 bg-gray-800 text-white text-xs py-1 px-3 rounded-full whitespace-nowrap">
            Click to chat with me!
          </div>
        )}
      </div>
    </div>
  );
};

export default Mascot;