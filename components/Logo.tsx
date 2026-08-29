
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
        whileHover={{ scale: 1.05 }}
        className="relative flex-shrink-0"
        style={{ width: size, height: size }}
      >
        <svg viewBox="0 0 48 48" role="img" aria-label="Lunavor" className="w-full h-full drop-shadow-[0_0_12px_rgba(59,130,246,0.5)]">
          <defs>
            <linearGradient id="lunavor-mark" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          <rect width="48" height="48" rx="14" fill="#0f172a" stroke="#334155" />
          <path d="M13 31c5-13 15-18 23-14-5 1-10 5-13 11 4-2 8-2 12 0-5 6-13 8-22 3Z" fill="url(#lunavor-mark)" />
          <circle cx="32" cy="15" r="2.5" fill="#fff" />
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
