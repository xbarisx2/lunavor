import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Menu, X, Instagram, Mail } from 'lucide-react';
import { EMAIL_LINK, SOCIAL_LINKS } from '../constants.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import Logo from './Logo.tsx';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const { t } = useLanguage();
  const instagramLink = SOCIAL_LINKS.find((link) => link.href.includes('instagram'))?.href;
  const navLinks = [
    { name: t.nav.solutions, href: '#services' },
    { name: t.nav.studio, href: '#studio' },
    { name: t.nav.packages, href: '#packages' },
    { name: t.nav.portfolio, href: '#portfolio' },
    { name: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
        <motion.div className="absolute bottom-0 left-0 right-0 h-[1px] bg-blue-500 origin-left" style={{ scaleX: scrollYProgress }} />
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.a href="#" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center" aria-label="Lunavor ana sayfa">
            <Logo size={42} />
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8 border-r border-white/10 pr-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-[10px] font-black tracking-widest uppercase text-slate-400 hover:text-white transition-all duration-300 relative group">
                  {link.name}<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all group-hover:w-full" />
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-5">
              {instagramLink && <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-500 transition-colors" title="Instagram"><Instagram size={18} /></a>}
              <a href={EMAIL_LINK} className="text-slate-400 hover:text-blue-400 transition-colors" title="E-posta"><Mail size={18} /></a>
              <motion.a href={EMAIL_LINK} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="px-6 py-2.5 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all">
                {t.nav.getQuote}
              </motion.a>
            </div>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <a href={EMAIL_LINK} className="text-slate-400" aria-label="E-posta"><Mail size={22} /></a>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-300 hover:text-white p-2" aria-label={isMobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 right-0 bg-slate-950 border-b border-white/10 overflow-hidden shadow-2xl">
              <div className="flex flex-col p-8 space-y-6">
                {navLinks.map((link) => <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-slate-300 hover:text-white">{link.name}</a>)}
                <div className="flex items-center space-x-5 pt-4 border-t border-white/5">
                  {instagramLink && <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-slate-400"><Instagram size={22} /></a>}
                  <a href={EMAIL_LINK} className="text-slate-400"><Mail size={22} /></a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
