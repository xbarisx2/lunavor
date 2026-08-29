
import React from 'react';
import { CLIENTS } from '../constants.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';

const References: React.FC = () => {
  const { t } = useLanguage();
  const marqueeClients = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section id="references" className="py-20 bg-slate-950 border-y border-white/5 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500/80 text-center">
          {t.references.title}
        </p>
      </div>
      
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      <div className="relative flex overflow-x-hidden">
        <div className="marquee-content py-6 items-center flex shrink-0">
          {marqueeClients.map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              className="flex items-center justify-center px-12 md:px-16 transition-all duration-700 cursor-default group"
            >
              <div className="relative flex items-center gap-4 opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
                <div className="w-10 h-10 rounded-xl border border-blue-500/30 bg-blue-500/10 flex items-center justify-center text-blue-300 font-black text-sm">
                  {client.name.charAt(0)}
                </div>
                <span className="text-white/80 font-bold tracking-tight whitespace-nowrap">{client.name}</span>
                <div className="absolute -inset-4 bg-blue-500/0 group-hover:bg-blue-500/10 blur-xl rounded-full transition-all duration-500 -z-10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
