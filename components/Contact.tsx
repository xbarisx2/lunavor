
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Formspree API üzerinden barisyldrm@pm.me adresine gönderim
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
          _subject: `Lunavor Yeni İletişim Formu: ${formState.name}`,
          // Formspree dashboard üzerinden barisyldrm@pm.me tanımlandığı varsayılır. 
          // Eğer ID yoksa direkt e-posta adresi de kullanılabilir: https://formspree.io/barisyldrm@pm.me
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Bir sorun oluştu, lütfen daha sonra tekrar deneyin veya WhatsApp üzerinden ulaşın.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Gönderim sırasında bir hata oluştu.");
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
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter italic uppercase">İŞE <br /><span className="gradient-text">BAŞLAYALIM.</span></h2>
            <p className="text-slate-400 mb-12 text-xl font-light leading-relaxed">
              Özel bir projeniz mi var yoksa hazır paketlerimizden birini mi istiyorsunuz? 
              Bize mesaj gönderin, profesyonel ekibimiz 24 saat içinde çözüm önerileriyle size dönsün.
            </p>

            <div className="space-y-8">
              <a href="mailto:barisyldrm@pm.me" className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center text-blue-500 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Doğrudan E-posta</p>
                  <p className="text-white font-bold text-lg">barisyldrm@pm.me</p>
                </div>
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center text-cyan-500 transition-colors group-hover:bg-cyan-600 group-hover:text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">WhatsApp Hattı</p>
                  <p className="text-white font-bold text-lg">0505 062 78 76</p>
                </div>
              </a>
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center text-indigo-500 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Genel Merkez</p>
                  <p className="text-white font-bold text-lg">Beyhekim Mah. Sanat Sok., Selçuklu, Konya</p>
                </div>
              </div>
            </div>
            
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-16 p-6 border border-blue-500/20 bg-blue-500/5 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-blue-500/10 transition-all block">
              <div>
                <p className="text-white font-bold text-sm">Hemen WhatsApp üzerinden yazın</p>
                <p className="text-slate-500 text-xs">Size en hızlı bu kanaldan yardımcı olabiliriz.</p>
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
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Adınız & Şirketiniz</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  placeholder="Barış Yıldırım"
                  className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-blue-500 transition-all focus:ring-4 ring-blue-500/10"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">İletişim Adresi</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  placeholder="ornek@mail.com"
                  className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-blue-500 transition-all focus:ring-4 ring-blue-500/10"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Proje Detayları</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  placeholder="Projeniz veya ilgilendiğiniz paket hakkında bilgi verin..."
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
                  <span>Mesajınız Bize Ulaştı!</span>
                ) : (
                  <>
                    <span>Talebi Gönder</span>
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
