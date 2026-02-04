
import React from 'react';
import { CLIENTS } from '../constants';

const References: React.FC = () => {
  // Duplicate clients for seamless loop
  const marqueeClients = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section id="references" className="py-16 bg-slate-950 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500/60 text-center">
          DÜNYA STANDARTLARINDA ÇÖZÜM ORTAKLARI
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="marquee-content py-4">
          {marqueeClients.map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              className="flex items-center justify-center px-12 md:px-20 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              <img 
                src={client.logoUrl} 
                alt={client.name} 
                className="h-8 md:h-10 w-auto object-contain brightness-200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;