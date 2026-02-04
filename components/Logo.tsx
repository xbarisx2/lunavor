
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
        <img 
          src="https://github.com/xbarisx2/logo/blob/main/lunavor_logo%20(1).png?raw=true" 
          alt="Lunavor Logo"
          className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(59,130,246,0.5)]"
        />
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
