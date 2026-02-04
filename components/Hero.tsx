
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Rocket, Zap, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden px-6 lg:px-12">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px]" />
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 z-10"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 mb-10 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-md">
            <Zap size={14} className="text-blue-500 fill-blue-500" />
            <span className="text-[11px] font-black tracking-[0.4em] text-blue-400 uppercase">
              RECODING THE FUTURE
            </span>
          </div>

          <h1 className="fluid-h1 font-black tracking-tighter mb-10 uppercase leading-none">
            DİJİTAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 italic pr-4">DÜNYAYI</span> <br />
            <span className="relative inline-block">
              YENİDEN
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute -bottom-2 left-0 h-2 bg-blue-600/30 rounded-full" 
              />
            </span> <br />
            KODLUYORUZ.
          </h1>

          <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mb-14 leading-relaxed font-light">
            Sıradanlığın ötesinde, <span className="text-white font-bold">yüksek performanslı</span> yazılımlar ve markanızın ruhunu yansıtan <span className="text-white font-bold">dijital mimariler</span> inşa ediyoruz.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <motion.a
              href="#packages"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-12 py-6 bg-blue-600 text-white font-black rounded-2xl flex items-center justify-center space-x-3 transition-all shadow-[0_25px_50px_-12px_rgba(37,99,235,0.5)]"
            >
              <span>WEB PAKETLERİ</span>
              <Rocket size={20} />
            </motion.a>
            <motion.a
              href="#portfolio"
              className="w-full sm:w-auto px-12 py-6 bg-transparent border border-white/10 text-white font-black rounded-2xl flex items-center justify-center space-x-3 hover:bg-white/5 transition-all group"
            >
              <span>ÇALIŞMALARIMIZ</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform text-blue-500" />
            </motion.a>
          </div>
        </motion.div>

        {/* Responsive Code Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 relative group perspective-1000"
        >
          <div className="glass-card p-8 rounded-[3rem] border-white/10 shadow-[0_0_80px_rgba(30,58,138,0.3)] relative z-10 overflow-hidden transform-gpu hover:rotate-y-12 transition-transform duration-700">
            <div className="flex space-x-2.5 mb-10">
              <div className="w-3 h-3 rounded-full bg-red-500/40" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
              <div className="w-3 h-3 rounded-full bg-green-500/40" />
            </div>
            <div className="font-mono text-[12px] md:text-sm space-y-4 leading-relaxed">
              <p className="text-blue-400">class <span className="text-yellow-400 italic">LunavorEngine</span> {'{'}</p>
              <p className="pl-4 text-slate-500 font-light italic">// High-end architecture</p>
              <p className="pl-4"><span className="text-indigo-400">init</span>() {'{'}</p>
              <p className="pl-8 text-white">this.ux = <span className="text-green-400">'flawless'</span>;</p>
              <p className="pl-8 text-white">this.speed = <span className="text-green-400">'optimum'</span>;</p>
              <p className="pl-8 text-white">this.secure = <span className="text-green-400">true</span>;</p>
              <p className="pl-4 text-white">{'}'}</p>
              <p className="text-blue-400">{'}'}</p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
               <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Code2 size={20} className="text-blue-500" />
                  </div>
                  <span className="text-[11px] text-slate-500 font-black tracking-widest uppercase">LUNAVOR CORE</span>
               </div>
               <div className="px-3 py-1.5 rounded-lg bg-blue-500/20 text-blue-400 text-[9px] font-black tracking-widest">v3.0_STABLE</div>
            </div>
          </div>
          
          {/* Ambient Glow behind card */}
          <div className="absolute -inset-4 bg-blue-600/20 blur-[80px] rounded-full group-hover:bg-blue-600/30 transition-all duration-700 -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
