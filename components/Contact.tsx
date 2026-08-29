
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, ExternalLink } from 'lucide-react';
import { CONTACT_EMAIL, EMAIL_LINK } from '../constants.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xknadjzo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `Lunavor proje iletişimi: ${formState.name}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Mesaj gönderilemedi. Lütfen tekrar deneyin veya e-posta ile ulaşın.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter italic uppercase">{t.contact.title1} <br /><span className="gradient-text">{t.contact.title2}</span></h2>
            <p className="text-slate-400 mb-12 text-xl font-light leading-relaxed">
              {t.contact.desc}
            </p>

            <div className="space-y-8">
              <a href={EMAIL_LINK} className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center text-blue-500 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">{t.contact.email}</p>
                  <p className="text-white font-bold text-lg">{CONTACT_EMAIL}</p>
                </div>
              </a>
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center text-cyan-500 transition-colors group-hover:bg-cyan-600 group-hover:text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">{t.contact.hq}</p>
                  <p className="text-white font-bold text-lg">{t.contact.hqLoc}</p>
                </div>
              </div>
            </div>
            
            <a href={EMAIL_LINK} className="mt-16 p-6 border border-blue-500/20 bg-blue-500/5 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-blue-500/10 transition-all block text-left">
              <div>
                <p className="text-white font-bold text-sm">{t.contact.quickChat}</p>
                <p className="text-slate-500 text-xs">{t.contact.quickChatSub}</p>
              </div>
              <ExternalLink size={20} className="text-blue-500" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-12 rounded-[2.5rem] bg-slate-900/50 border border-white/5 backdrop-blur-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t.contact.formName}</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  placeholder="Adınızı yazın"
                  className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-blue-500 transition-all focus:ring-4 ring-blue-500/10"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t.contact.formEmail}</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  placeholder="example@mail.com"
                  className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-blue-500 transition-all focus:ring-4 ring-blue-500/10"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t.contact.formProject}</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  placeholder={t.contact.formPlaceholder}
                  className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-blue-500 transition-all focus:ring-4 ring-blue-500/10 resize-none"
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-5 rounded-2xl flex items-center justify-center space-x-3 font-black text-xs uppercase tracking-[0.2em] text-white transition-all ${
                  submitted ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-500'
                } shadow-2xl shadow-blue-950`}
              >
                {isSubmitting ? (
                   <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : submitted ? (
                  <span>{t.contact.received}</span>
                ) : (
                  <>
                    <span>{t.contact.submit}</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
