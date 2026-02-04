
import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 40, showText = true }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.div 
        whileHover={{ rotate: 5, scale: 1.05 }}
        className="relative flex-shrink-0"
        style={{ width: size, height: size }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Crescent Moon Path */}
          <path 
            d="M85 50A35 35 0 1 0 35 85A45 45 0 1 1 85 50Z" 
            fill="url(#logoGrad)" 
          />
          
          {/* Vortex / Swirl Effect */}
          <motion.path 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            d="M50 35C55 35 60 40 60 45C60 50 55 55 50 55C45 55 40 50 40 45C40 40 45 35 50 35ZM50 25C65 25 75 35 75 45C75 55 65 65 50 65C35 65 25 55 25 45C25 35 35 25 50 25Z" 
            fill="white" 
            fillOpacity="0.1"
            style={{ originX: '50px', originY: '45px' }}
          />
          
          {/* Stylized 'V' */}
          <path 
            d="M38 68L50 42L62 68" 
            stroke="white" 
            strokeWidth="6" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            filter="url(#glow)"
          />
          
          {/* Accent Lines */}
          <path 
            d="M45 48L50 40L55 48" 
            stroke="#60a5fa" 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
        </svg>
      </motion.div>
      
      {showText && (
        <span className="text-2xl font-black tracking-tighter gradient-text uppercase font-heading">
          LUNAVOR
        </span>
      )}
    </div>
  );
};

export default Logo;
