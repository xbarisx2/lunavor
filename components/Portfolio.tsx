import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants.tsx';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

const Portfolio: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="py-24 md:py-32 px-5 lg:px-12 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-20 gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <span className="text-xs font-black tracking-[0.4em] text-blue-500 uppercase mb-4 block">{t.portfolio.badge}</span>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter italic uppercase leading-[0.9]">
              {t.portfolio.title1} <br/><span className="gradient-text">{t.portfolio.title2}</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm text-base md:text-lg font-light lg:border-l-2 border-blue-600 lg:pl-8 leading-relaxed mx-auto lg:mx-0">
            {t.portfolio.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[400px] md:h-[550px] lg:h-[600px] rounded-[2.5rem] overflow-hidden border border-white/5 bg-slate-900 shadow-2xl"
            >
              <img 
                src={project.imageUrl} 
                alt={`${project.title} - ${project.category} by Lunavor`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale opacity-50 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full transform transition-all duration-500">
                <div className="flex flex-col md:flex-row justify-between md:items-end gap-5">
                  <div className="text-left">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-[9px] font-black uppercase tracking-widest mb-4 border border-blue-600/30">
                      {project.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tighter uppercase italic">{project.title}</h3>
                  </div>
                  <motion.a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} projesini görüntüle`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-white border border-white/20 hover:bg-blue-600 hover:border-blue-500 transition-all"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
