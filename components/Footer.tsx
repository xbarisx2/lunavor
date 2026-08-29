
import React from 'react';
import { CONTACT_EMAIL, SOCIAL_LINKS } from '../constants.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import Logo from './Logo.tsx';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-20 px-6 border-t border-white/5 mt-12 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <Logo size={50} className="mb-6" />
            <p className="text-slate-500 max-w-sm mb-8">
              {t.footer.desc}
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/5 bg-slate-900 flex items-center justify-center text-slate-500 hover:text-white hover:bg-blue-600 transition-all"
                  aria-label="Social Media"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">{t.footer.quickLinks}</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#services" className="hover:text-blue-500 transition-colors">{t.nav.solutions}</a></li>
              <li><a href="#packages" className="hover:text-blue-500 transition-colors">{t.nav.packages}</a></li>
              <li><a href="#portfolio" className="hover:text-blue-500 transition-colors">{t.nav.portfolio}</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">{t.footer.connect}</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li>{CONTACT_EMAIL}</li>
              <li>Proje bazlı ve uzaktan çalışma</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-600 text-xs font-medium">© 2026 Lunavor. {t.footer.rights}</p>
          <div className="flex space-x-8 text-[10px] font-black text-slate-600 tracking-widest uppercase">
            <span>Web ve mobil ürün geliştirme</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
