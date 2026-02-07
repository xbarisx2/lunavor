
import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Camera, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

const Studio: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="studio" className="py-32 px-6 bg-[#020617] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex items-center space-x-3 mb-8">
              <span className="w-12 h-[2px] bg-blue-600" />
              <span className="text-xs font-black tracking-[0.5em] text-blue-500 uppercase">{t.studio.badge}</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black mb-10 tracking-tighter leading-tight text-white italic">
              {t.studio.title1} <br />
              <span className="gradient-text">{t.studio.title2}</span>
            </h2>
            
            <p className="text-xl text-slate-400 mb-14 leading-relaxed font-light border-l-2 border-blue-900 pl-8">
              {t.studio.desc}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="group">
                <div className="flex items-center space-x-4 mb-4">
                   <div className="p-3 bg-blue-950/50 rounded-lg group-hover:bg-blue-600 transition-colors">
                      <Camera size={22} className="text-white" />
                   </div>
                   <span className="text-white font-bold tracking-tight uppercase text-sm">{t.studio.docs}</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed uppercase tracking-wider font-bold">{t.studio.docsSub}</p>
              </div>
              <div className="group">
                <div className="flex items-center space-x-4 mb-4">
                   <div className="p-3 bg-blue-950/50 rounded-lg group-hover:bg-blue-600 transition-colors">
                      <Globe size={22} className="text-white" />
                   </div>
                   <span className="text-white font-bold tracking-tight uppercase text-sm">{t.studio.adverts}</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed uppercase tracking-wider font-bold">{t.studio.advertsSub}</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(30,58,138,0.2)] bg-slate-900 border border-white/5 group">
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200" 
                alt="Production Hub" 
                className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-900/10 pointer-events-none group-hover:bg-transparent transition-all" />
              <div className="absolute bottom-8 left-8 flex items-center space-x-4 bg-slate-950/90 backdrop-blur-xl p-4 rounded-xl border border-white/10">
                 <div className="w-12 h-12 rounded-full border border-blue-500 flex items-center justify-center animate-pulse">
                    <PlayCircle size={24} className="text-blue-500" />
                 </div>
                 <div>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{t.studio.latest}</p>
                    <p className="text-xs text-white font-bold uppercase">Corporate Showreel 2024</p>
                 </div>
              </div>
            </div>
            
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Studio;
