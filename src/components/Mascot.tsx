import React, { useState } from 'react';
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
        `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative cursor-pointer">
        <img src='/ai.gif' alt="Mascot" className="w-24 h-24" />
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