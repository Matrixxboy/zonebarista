import { useState } from 'react';

const PUNS = [
  "I need a purr-over!",
  "Are you feline the caffeine?",
  "Time for a cat-puccino!",
  "Stay grounded, human.",
  "Meow-chiato anyone?",
  "Espresso yourself!",
  "I'm feeling purr-colated.",
  "That shot was purr-fect."
];

export default function CafeCat() {
  const [pun, setPun] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isWiggling, setIsWiggling] = useState(false);

  const handleClick = () => {
    const randomPun = PUNS[Math.floor(Math.random() * PUNS.length)];
    setPun(randomPun);
    setIsVisible(true);
    setIsWiggling(true);
    
    setTimeout(() => setIsWiggling(false), 500);
    
    // Hide bubble after 3 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Speech Bubble */}
      <div 
        className={`mb-4 mr-8 p-4 bg-white border-4 border-black text-black font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 transform origin-bottom-right pointer-events-auto ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
      >
        {pun}
        <div className="absolute -bottom-3 right-4 w-4 h-4 bg-white border-b-4 border-r-4 border-black transform rotate-45"></div>
      </div>

      {/* The Cat */}
      <div 
        onClick={handleClick}
        className={`cursor-pointer pointer-events-auto transition-transform ${isWiggling ? 'animate-bounce' : 'hover:-translate-y-2'}`}
      >
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          {/* Ears */}
          <path d="M20 50 L20 15 L45 35 Z" fill="#F97316" stroke="#000" strokeWidth="6" strokeLinejoin="round" />
          <path d="M80 50 L80 15 L55 35 Z" fill="#F97316" stroke="#000" strokeWidth="6" strokeLinejoin="round" />
          
          {/* Head */}
          <rect x="20" y="30" width="60" height="50" rx="20" fill="#F97316" stroke="#000" strokeWidth="6" />
          
          {/* Eyes */}
          <circle cx="40" cy="55" r="5" fill="#000" />
          <circle cx="60" cy="55" r="5" fill="#000" />
          
          {/* Nose/Mouth */}
          <path d="M45 65 Q 50 70 55 65" stroke="#000" strokeWidth="4" strokeLinecap="round" fill="none" />
          <circle cx="50" cy="62" r="3" fill="#000" />
          
          {/* Whiskers */}
          <line x1="5" y1="50" x2="25" y2="52" stroke="#000" strokeWidth="4" strokeLinecap="round" />
          <line x1="5" y1="60" x2="25" y2="58" stroke="#000" strokeWidth="4" strokeLinecap="round" />
          <line x1="75" y1="52" x2="95" y2="50" stroke="#000" strokeWidth="4" strokeLinecap="round" />
          <line x1="75" y1="58" x2="95" y2="60" stroke="#000" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

    </div>
  );
}
