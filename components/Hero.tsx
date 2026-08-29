import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Zap, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <header className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden px-5 lg:px-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-blue-600/10 rounded-full blur-[120px] md:blur-[160px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-indigo-600/10 rounded-full blur-[100px] md:blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-8 z-10 text-center lg:text-left"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 mb-8 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-md">
            <Zap size={12} className="text-blue-500 fill-blue-500" />
            <span className="text-[9px] md:text-[11px] font-black tracking-[0.3em] text-blue-400 uppercase">
              {t.hero.badge}
            </span>
          </div>

          <h1 className="fluid-h1 font-black tracking-tighter mb-8 uppercase leading-none">
            {t.hero.title1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 italic pr-2">{t.hero.title2}</span> <br />
            <span className="relative inline-block">
              {t.hero.title3}
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute -bottom-1 left-0 h-1.5 bg-blue-600/40 rounded-full" 
              />
            </span> <br />
            {t.hero.title4}
          </h1>

          <p className="text-base md:text-xl lg:text-2xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed font-light">
            {t.hero.desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
            <motion.a
              href="#packages"
              aria-label="Proje hakkında iletişime geç"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white font-black rounded-2xl flex items-center justify-center space-x-3 transition-all shadow-xl shadow-blue-900/20"
            >
              <span className="text-sm tracking-widest">{t.hero.ctaPrimary}</span>
              <Rocket size={18} />
            </motion.a>
            <motion.a
              href="#portfolio"
              aria-label="Çalışmaları görüntüle"
              className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/10 text-white font-black rounded-2xl flex items-center justify-center space-x-3 hover:bg-white/5 transition-all group"
            >
              <span className="text-sm tracking-widest">{t.hero.ctaSecondary}</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform text-blue-500" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="lg:col-span-4 relative group perspective-1000 hidden md:block"
        >
          <div className="glass-card p-8 rounded-[2.5rem] border-white/10 shadow-2xl relative z-10 overflow-hidden transform-gpu transition-transform duration-500">
            <div className="flex space-x-2 mb-8">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>
            <div className="font-mono text-xs space-y-3 leading-relaxed">
              <p className="text-blue-400">proje <span className="text-yellow-400">Lunavor</span> {'{'}</p>
              <p className="pl-4 text-slate-500 italic">{t.hero.codeComment}</p>
              <p className="pl-4"><span className="text-indigo-400">planla</span>() {'{'}</p>
              <p className="pl-8 text-white">web = <span className="text-green-400">hazır</span>;</p>
              <p className="pl-8 text-white">mobil = <span className="text-green-400">uyumlu</span>;</p>
              <p className="pl-4 text-white">{'}'}</p>
              <p className="text-blue-400">{'}'}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
