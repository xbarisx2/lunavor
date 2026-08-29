
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, ShieldCheck, Cpu, Search, Trophy } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

const Engineering: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="engineering" className="py-32 px-6 lg:px-12 relative bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <span className="text-[10px] font-black tracking-[0.6em] text-blue-500 uppercase mb-6 block">{t.engineering.badge}</span>
            <h2 className="fluid-h2 font-black mb-10 tracking-tighter uppercase italic break-words">
              {t.engineering.title1} <br /><span className="gradient-text">{t.engineering.title2}</span>
            </h2>
            
            <p className="text-xl text-slate-400 mb-14 font-light leading-relaxed max-w-lg">
              {t.engineering.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {[
                { icon: <Search size={20}/>, text: t.engineering.seo },
                { icon: <Trophy size={20}/>, text: t.engineering.ux },
                { icon: <Database size={20}/>, text: t.engineering.cloud },
                { icon: <ShieldCheck size={20}/>, text: t.engineering.security }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-5 group cursor-default p-4 glass-card rounded-2xl border-white/5 hover:border-blue-500/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold text-slate-400 group-hover:text-white transition-colors uppercase tracking-widest">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative"
          >
            <div className="glass-card rounded-[3.5rem] p-1.5 border-white/5 shadow-[0_0_100px_rgba(30,58,138,0.2)]">
              <div className="bg-slate-950 rounded-[3.2rem] overflow-hidden">
                {/* Custom Terminal Header */}
                <div className="bg-slate-900 px-10 py-5 border-b border-white/5 flex items-center justify-between">
                  <div className="flex space-x-2.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-500/30" />
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/30" />
                    <div className="w-3.5 h-3.5 rounded-full bg-green-500/30" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <Terminal size={14} className="text-slate-600" />
                    <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">{t.engineering.terminal}</span>
                  </div>
                </div>
                
                {/* Terminal Body */}
                <div className="p-10 md:p-14 font-mono text-xs sm:text-sm md:text-base leading-relaxed overflow-x-auto whitespace-pre">
                  <div className="flex gap-4 mb-6">
                    <span className="text-slate-700">➜</span>
                    <span className="text-blue-400 font-bold">lunavor</span>
                    <span className="text-white">plan --design --develop --test --publish</span>
                  </div>
                  <div className="text-slate-500 mb-6 font-light italic opacity-60 break-all">{t.engineering.terminalProcess}</div>
                  <div className="text-slate-500 mb-10 font-light italic opacity-60 break-all">{t.engineering.terminalSuccess}</div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="p-8 bg-slate-900/50 border border-blue-500/10 rounded-3xl group-hover:border-blue-500/30 transition-all">
                      <div className="flex items-center space-x-3 mb-6">
                         <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                         <span className="text-[10px] text-slate-500 font-black tracking-[0.2em] uppercase">{t.engineering.conversion}</span>
                      </div>
                      <div className="text-2xl font-black text-white italic">Adım adım</div>
                    </div>
                    <div className="p-8 bg-slate-900/50 border border-blue-500/10 rounded-3xl group-hover:border-blue-500/30 transition-all">
                      <div className="flex items-center space-x-3 mb-6">
                         <Cpu size={18} className="text-blue-500" />
                         <span className="text-[10px] text-slate-500 font-black tracking-[0.2em] uppercase">Durum</span>
                      </div>
                      <div className="text-3xl font-black text-white italic">PLANLI</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual Decoration */}
            <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-blue-600/10 rounded-full blur-[100px] animate-pulse -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Engineering;
