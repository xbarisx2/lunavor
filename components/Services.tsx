
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ShoppingCart, Layout, ArrowUpRight, Zap, Globe, Cpu } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="fluid-h2 font-black tracking-tighter mb-8 uppercase italic">
              DİJİTAL <br /><span className="gradient-text">GÜCÜNÜZ.</span>
            </h2>
            <div className="h-2 w-24 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[420px]">
          {/* Main Card */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="md:col-span-7 glass-card rounded-[3rem] p-10 md:p-14 flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] group-hover:bg-blue-600/15 transition-all duration-700" />
            <div>
              <div className="w-20 h-20 rounded-3xl bg-blue-600 flex items-center justify-center mb-10 shadow-2xl">
                <Code2 size={40} className="text-white" />
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Enterprise Yazılım</h3>
              <p className="text-slate-400 text-lg lg:text-xl font-light leading-relaxed max-w-lg">
                Karmaşık iş süreçlerinizi modern teknolojilerle ölçeklenebilir ve sürdürülebilir sistemlere dönüştürüyoruz.
              </p>
            </div>
            <div className="flex items-center justify-between mt-12">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">Scale without limits</span>
              <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowUpRight size={24} />
              </div>
            </div>
          </motion.div>

          {/* Performance Mini */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="md:col-span-5 bg-slate-900 rounded-[3rem] p-12 flex flex-col justify-center items-center text-center border border-white/5 relative overflow-hidden group shadow-2xl"
          >
            <Zap size={56} className="text-yellow-400 mb-8 animate-pulse" />
            <div className="text-7xl font-black text-white mb-4 tracking-tighter italic">99.9%</div>
            <p className="text-xs font-black uppercase tracking-[0.5em] text-slate-500">Uptime & Speed</p>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* E-commerce */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="md:col-span-5 glass-card rounded-[3rem] p-12 flex flex-col justify-between group"
          >
            <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-white/5 flex items-center justify-center mb-8">
              <ShoppingCart size={32} className="text-cyan-500" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">E-Ticaret</h3>
              <p className="text-slate-400 leading-relaxed font-light">Global ödeme sistemleri ve tam entegrasyonlu uçtan uca mağaza yönetimi.</p>
            </div>
            <div className="mt-10 flex flex-col gap-4">
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '92%' }}
                  className="h-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                />
              </div>
              <div className="flex justify-between items-center text-[10px] text-cyan-500 font-black uppercase tracking-widest">
                <span>Market Growth</span>
                <span>+92% Efficiency</span>
              </div>
            </div>
          </motion.div>

          {/* UI/UX Card */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="md:col-span-7 glass-card rounded-[3rem] p-10 md:p-14 flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-transparent pointer-events-none" />
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-12">
              <div className="max-w-md">
                <div className="w-20 h-20 rounded-3xl bg-indigo-600/10 flex items-center justify-center mb-10 border border-indigo-500/20">
                  <Layout size={40} className="text-indigo-500" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">Eşsiz UI/UX</h3>
                <p className="text-slate-400 text-lg font-light leading-relaxed">
                  Kullanıcılarınızın bağ kuracağı, yüksek dönüşüm odaklı ve akışkan dijital deneyimler tasarlıyoruz.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 self-center md:self-start">
                <div className="p-5 bg-white/5 rounded-3xl border border-white/5 flex flex-col items-center">
                  <Globe size={24} className="text-slate-500 mb-3" />
                  <span className="text-[9px] font-black uppercase text-slate-500 tracking-widest">SEO Optimized</span>
                </div>
                <div className="p-5 bg-white/5 rounded-3xl border border-white/5 flex flex-col items-center">
                  <Cpu size={24} className="text-slate-500 mb-3" />
                  <span className="text-[9px] font-black uppercase text-slate-500 tracking-widest">Core Web Vitals</span>
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