
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Rocket, Zap, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden px-6 lg:px-12">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-8 z-10"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 mb-8 bg-blue-500/5 border border-blue-500/10 rounded-full">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" />
            <span className="text-[10px] font-black tracking-[0.3em] text-blue-400 uppercase">
              NEXT-GEN SOFTWARE LAB
            </span>
          </div>

          <h1 className="fluid-h1 font-black tracking-tighter mb-8 uppercase">
            GELECEĞİN <br />
            <span className="gradient-text italic">YAZILIM MİMARİSİ</span> <br />
            BURADA BAŞLAR.
          </h1>

          <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-light">
            İşletmeniz için yüksek performanslı <span className="text-white font-medium">web sistemleri</span> ve 
            <span className="text-white font-medium"> e-ticaret çözümleri</span> geliştiriyoruz. 
            Mühendislik ve estetiğin mükemmel dengesi.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <motion.a
              href="#packages"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white font-black rounded-2xl flex items-center justify-center space-x-3 transition-all shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)]"
            >
              <span>WEB PAKETLERİ</span>
              <Rocket size={18} />
            </motion.a>
            <motion.a
              href="#portfolio"
              className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/10 text-white font-black rounded-2xl flex items-center justify-center space-x-3 hover:bg-white/5 transition-all group"
            >
              <span>ÇALIŞMALARIMIZ</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>

        {/* Responsive Code Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="lg:col-span-4 relative group"
        >
          <div className="glass-card p-6 rounded-[2.5rem] border-white/5 shadow-2xl relative z-10 overflow-hidden">
            <div className="flex space-x-2 mb-8">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
            </div>
            <div className="font-mono text-[11px] md:text-xs space-y-3 leading-relaxed">
              <p className="text-blue-400">class <span className="text-yellow-400 italic">LunavorEngine</span> {'{'}</p>
              <p className="pl-4 text-slate-500 font-light">// High-end architecture</p>
              <p className="pl-4"><span className="text-indigo-400">init</span>() {'{'}</p>
              <p className="pl-8 text-white">this.ux = <span className="text-green-400">'flawless'</span>;</p>
              <p className="pl-8 text-white">this.code = <span className="text-green-400">'optimized'</span>;</p>
              <p className="pl-4 text-white">{'}'}</p>
              <p className="text-blue-400">{'}'}</p>
            </div>
            
            <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between">
               <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Code2 size={16} className="text-blue-500" />
                  </div>
                  <span className="text-[10px] text-slate-500 font-black tracking-widest uppercase">Verified Code</span>
               </div>
               <div className="px-2 py-1 rounded bg-blue-500/20 text-blue-400 text-[8px] font-black">L-CORE v2</div>
            </div>
          </div>
          
          {/* Ambient Glow behind card */}
          <div className="absolute inset-0 bg-blue-600/10 blur-[60px] rounded-full group-hover:bg-blue-600/20 transition-all" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;