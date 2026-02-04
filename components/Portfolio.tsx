
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-xs font-black tracking-[0.5em] text-blue-500 uppercase mb-4 block">Proven Experience</span>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter italic uppercase leading-[0.9] break-text">
              MASTER <br/><span className="gradient-text">WORKS</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm text-lg md:text-xl font-light border-l-2 border-blue-600 pl-8 leading-relaxed">
            Interakdeniz ve Hell Gym gibi prestijli markalar için tasarladığımız dijital ekosistemler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative h-[450px] md:h-[650px] rounded-[3.5rem] overflow-hidden border border-white/5"
            >
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-60 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
                  <div>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6 border border-blue-600/30">
                      {project.category}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter uppercase italic">{project.title}</h3>
                  </div>
                  <div className="flex items-center space-x-4">
                    <motion.a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 rounded-full glass-card flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-black transition-all cursor-pointer"
                    >
                      <ExternalLink size={24} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;