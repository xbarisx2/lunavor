
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';
import { PACKAGES, WHATSAPP_LINK } from '../constants.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';

const Packages: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="packages" className="py-32 px-6 lg:px-12 bg-[#020617] relative">
      <div className="absolute inset-0 bg-blue-600/5 -z-10 blur-[150px]" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-28">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-black tracking-[0.6em] text-blue-500 uppercase mb-6 block"
          >
            {t.packages.badge}
          </motion.span>
          <h2 className="fluid-h2 font-black mb-8 uppercase italic tracking-tighter">
            {t.packages.title1} <span className="gradient-text">{t.packages.title2}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            {t.packages.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col p-12 rounded-[3.5rem] transition-all duration-500 border ${
                pkg.recommended 
                ? 'bg-blue-600 border-blue-400 shadow-[0_40px_80px_-20px_rgba(37,99,235,0.4)] md:scale-105 z-10' 
                : 'glass-card border-white/5 hover:border-white/15'
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-8 py-2.5 bg-white text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full flex items-center space-x-2 shadow-2xl">
                  <Star size={14} className="fill-blue-600" />
                  <span>{t.packages.popular}</span>
                </div>
              )}

              <div className="mb-12">
                <h3 className={`text-3xl font-bold mb-6 text-white`}>{pkg.name}</h3>
                <div className="flex items-baseline">
                  <span className={`text-5xl font-black tracking-tighter ${pkg.recommended ? 'text-white' : 'text-blue-500'}`}>{pkg.price}</span>
                  {pkg.price !== 'Custom Quote' && pkg.price !== 'Özel Teklif' && (
                    <span className={`text-[10px] ml-2 font-black uppercase tracking-widest ${pkg.recommended ? 'text-blue-100' : 'text-slate-500'}`}>
                      {t.packages.startingFrom}
                    </span>
                  )}
                </div>
              </div>
              
              <ul className="space-y-6 mb-14 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-4">
                    <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${pkg.recommended ? 'bg-white/30' : 'bg-blue-500/10'}`}>
                      <Check size={12} className={pkg.recommended ? 'text-white' : 'text-blue-500'} />
                    </div>
                    <span className={`text-sm md:text-base font-medium ${pkg.recommended ? 'text-blue-50' : 'text-slate-400'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center space-x-3 ${
                  pkg.recommended 
                  ? 'bg-white text-blue-600 shadow-xl' 
                  : 'bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black hover:border-white'
                }`}
              >
                <span>{t.packages.getStarted}</span>
                <ArrowRight size={16} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
