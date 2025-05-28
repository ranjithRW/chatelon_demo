import React, { useState, useEffect } from 'react';

interface MascotProps {
  onClick: () => void;
  isActive: boolean;
}

const Mascot: React.FC<MascotProps> = ({ onClick, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [gifSrc, setGifSrc] = useState('/ai.gif');

  // Force GIF to restart and ensure continuous looping
  useEffect(() => {
    const forceGifReload = () => {
      setGifSrc(`/ai.gif?t=${Date.now()}`);
    };

    // Reload GIF every few seconds to prevent any potential gaps
    const interval = setInterval(forceGifReload, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out 
        ${isActive ? 'scale-90' : 'scale-100'} 
        `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative cursor-pointer">
        <img
          src={gifSrc}
          alt="Mascot"
          className="w-24 h-24 sm:w-48 sm:h-48"
          style={{
            imageRendering: 'auto',
            userSelect: 'none',
            // Ensure smooth rendering
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)'
          }}
          onError={() => {
            // Fallback if GIF fails to load
            setGifSrc('/ai.gif');
          }}
        />
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