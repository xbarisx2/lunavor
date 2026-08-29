import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Layout, ArrowUpRight, Globe, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 md:py-32 px-5 lg:px-12 bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="fluid-h2 font-black tracking-tighter mb-6 uppercase italic">
              {t.services.title1} <br /><span className="gradient-text">{t.services.title2}</span>
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 rounded-full mx-auto md:mx-0" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-8">
          {/* Software Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-12 lg:col-span-7 glass-card rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px]" />
            <div>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-blue-600 flex items-center justify-center mb-10 shadow-lg shadow-blue-900/40">
                <Code2 size={32} className="text-white md:size-10" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight">{t.services.enterprise.title}</h3>
              <p className="text-slate-400 text-sm md:text-lg font-light leading-relaxed max-w-lg">
                {t.services.enterprise.desc}
              </p>
            </div>
            <div className="flex items-center justify-between mt-10">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-500">Lunavor hizmetleri</span>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </motion.div>

          {/* Performance Card */}
          <motion.div 
            className="md:col-span-6 lg:col-span-5 bg-slate-900 rounded-[2.5rem] p-10 flex flex-col justify-center items-center text-center border border-white/5 relative overflow-hidden group shadow-xl"
          >
            <Smartphone size={48} className="text-yellow-400 mb-6" />
            <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter italic">Android &amp; iOS</div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">{t.services.perf}</p>
          </motion.div>

          {/* E-commerce Card */}
          <motion.div 
            className="md:col-span-6 lg:col-span-5 glass-card rounded-[2.5rem] p-10 flex flex-col justify-between"
          >
            <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-white/5 flex items-center justify-center mb-8">
              <Code2 size={24} className="text-cyan-500" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight">{t.services.ecommerce.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">{t.services.ecommerce.desc}</p>
            </div>
            <div className="mt-8">
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-3">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  className="h-full bg-cyan-500"
                />
              </div>
              <div className="flex justify-between items-center text-[9px] text-cyan-500 font-black uppercase tracking-widest">
                <span>{t.services.growth}</span>
                <span>{t.services.efficiency}</span>
              </div>
            </div>
          </motion.div>

          {/* UI/UX Card */}
          <motion.div 
            className="md:col-span-12 lg:col-span-7 glass-card rounded-[2.5rem] p-10 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1">
                <div className="w-16 h-16 rounded-3xl bg-indigo-600/10 flex items-center justify-center mb-8 border border-indigo-500/20">
                  <Layout size={32} className="text-indigo-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{t.services.uiux.title}</h3>
                <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                  {t.services.uiux.desc}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                <div className="p-5 bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center">
                  <Globe size={20} className="text-slate-500 mb-2" />
                  <span className="text-[8px] font-black uppercase text-slate-500 tracking-widest">SEO TEMELİ</span>
                </div>
                <div className="p-5 bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center">
                  <Cpu size={20} className="text-slate-500 mb-2" />
                  <span className="text-[8px] font-black uppercase text-slate-500 tracking-widest">MOBİL UYUM</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
