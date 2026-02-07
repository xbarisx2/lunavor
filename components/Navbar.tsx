
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Menu, X, Instagram, MessageCircle, Globe } from 'lucide-react';
import { WHATSAPP_LINK, SOCIAL_LINKS } from '../constants.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import Logo from './Logo.tsx';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const { language, setLanguage, t } = useLanguage();

  const instagramLink = SOCIAL_LINKS.find(s => s.href.includes('instagram'))?.href || 'https://www.instagram.com/lunavor.com.tr/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.solutions, href: '#services' },
    { name: t.nav.studio, href: '#studio' },
    { name: t.nav.packages, href: '#packages' },
    { name: t.nav.portfolio, href: '#portfolio' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-4 ${
          isScrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'
        }`}
      >
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-blue-500 origin-left"
          style={{ scaleX: scrollYProgress }}
        />
        
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Logo size={42} />
          </motion.a>

          {/* Desktop Links & Icons */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8 border-r border-white/10 pr-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[10px] font-black tracking-widest uppercase text-slate-400 hover:text-white transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center space-x-5">
              {/* Language Switcher */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-white/10 hover:border-blue-500/50 transition-all group bg-white/5"
              >
                <Globe size={14} className="text-blue-400 group-hover:rotate-12 transition-transform" />
                <span className="text-[10px] font-black uppercase text-white tracking-widest">
                  {language === 'en' ? 'TR' : 'EN'}
                </span>
              </button>

              <motion.a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-slate-400 hover:text-pink-500 transition-colors"
                title="Instagram"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-slate-400 hover:text-green-500 transition-colors"
                title="WhatsApp"
              >
                <MessageCircle size={18} />
              </motion.a>
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-6 py-2.5 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all"
              >
                {t.nav.getQuote}
              </motion.a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
              className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-black"
            >
              {language === 'en' ? 'TR' : 'EN'}
            </button>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-slate-400">
               <MessageCircle size={22} />
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-slate-950 border-b border-white/10 overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col p-8 space-y-6">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-bold text-slate-300 hover:text-white"
                  >
                    {link.name}
                  </motion.a>
                ))}
                
                <div className="flex items-center space-x-6 pt-4 border-t border-white/5">
                   <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 flex items-center space-x-2">
                      <Instagram size={20} />
                      <span className="text-xs font-bold uppercase tracking-widest">Instagram</span>
                   </a>
                   <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-slate-400 flex items-center space-x-2">
                      <MessageCircle size={20} />
                      <span className="text-xs font-bold uppercase tracking-widest">WhatsApp</span>
                   </a>
                </div>

                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-4 rounded-xl bg-blue-600 text-white text-center font-bold text-lg"
                >
                  {t.nav.getQuote}
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
