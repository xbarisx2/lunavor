import React from 'react';
import { Instagram, Mail } from 'lucide-react';
import { Service, Project, NavLink, Client, PricingPackage } from './types.ts';

export const CONTACT_EMAIL = 'lunavor.app@gmail.com';
export const EMAIL_LINK = `mailto:${CONTACT_EMAIL}?subject=Lunavor%20proje%20görüşmesi`;
export const INSTAGRAM_LINK = 'https://www.instagram.com/bariisyldrmm/?hl=tr';
export const WHATSAPP_LINK = `https://wa.me/905050627876?text=${encodeURIComponent('Merhaba, Lunavor projesi hakkında görüşmek istiyorum.')}`;

export const NAV_LINKS: NavLink[] = [
  { name: 'Hizmetler', href: '#services' },
  { name: 'Takasso', href: '#studio' },
  { name: 'Çalışma modeli', href: '#packages' },
  { name: 'Projeler', href: '#portfolio' },
  { name: 'İletişim', href: '#contact' },
];

export const SERVICES: Service[] = [
  { id: 'web-development', title: 'Web sitesi', description: 'Markanıza ve ihtiyacınıza uygun, hızlı ve mobil uyumlu web siteleri.', iconName: 'Layout' },
  { id: 'mobile-development', title: 'Mobil uygulama', description: 'Android ve iOS için sade, kullanışlı ve sürdürülebilir uygulamalar.', iconName: 'Smartphone' },
  { id: 'release-support', title: 'Yayın süreçleri', description: 'Google Play ve App Store yayın hazırlığı, mağaza düzeni ve teknik destek.', iconName: 'Code2' },
];

export const PACKAGES: PricingPackage[] = [
  { id: 'web', name: 'Web sitesi', price: 'İhtiyaca göre', features: ['İhtiyaç analizi', 'Mobil uyumlu tasarım', 'SEO temeli', 'Yayın desteği'] },
  { id: 'mobile', name: 'Mobil uygulama', price: 'İhtiyaca göre', features: ['Ürün planlama', 'Android ve iOS geliştirme', 'Test süreci', 'Mağaza yayın hazırlığı'], recommended: true },
  { id: 'release', name: 'Yayın ve destek', price: 'İhtiyaca göre', features: ['Google Play yayını', 'App Store yayını', 'Mağaza içerikleri', 'Teknik yönlendirme'] },
];

export const PROJECTS: Project[] = [
  { id: 1, title: 'Takasso', category: 'Mobil uygulama ve web platformu', imageUrl: '/media/takasso-app-icon-512.jpg', url: 'https://takasso.com.tr/' },
  { id: 2, title: 'Interakdeniz Alüminyum', category: 'Kurumsal web sitesi', imageUrl: '/media/interakdeniz-aluminyum-1200.jpg', url: 'https://www.interakdenizaluminyum.com/' },
  { id: 3, title: 'İkonyum Ahşap', category: 'Kurumsal web sitesi', imageUrl: '/media/ikonyum-ahsap-1200.jpg', url: 'https://www.ikonyumahsap.com.tr/' },
];

export const CLIENTS: Client[] = [
  { id: 1, name: 'Takasso', logoUrl: '/media/takasso-app-icon-512.jpg' },
  { id: 2, name: 'Interakdeniz Alüminyum', logoUrl: '/media/interakdeniz-aluminyum-1200.jpg' },
  { id: 3, name: 'İkonyum Ahşap', logoUrl: '/media/ikonyum-ahsap-1200.jpg' },
];

export const SOCIAL_LINKS = [
  { icon: <Instagram size={20} />, href: INSTAGRAM_LINK },
  { icon: <Mail size={20} />, href: EMAIL_LINK },
];

const content = {
  nav: { solutions: 'Hizmetler', studio: 'Takasso', packages: 'Çalışma modeli', portfolio: 'Projeler', contact: 'İletişim', getQuote: 'Proje konuşalım' },
  hero: { badge: 'WEB SİTESİ VE MOBİL UYGULAMA GELİŞTİRME', title1: 'FİKRİNİZİ', title2: 'DİJİTALE', title3: 'TAŞIYALIM', title4: '', desc: 'Lunavor, kişiye ve işletmeye özel web siteleri ve mobil uygulamalar geliştirir. Tasarımdan yayın sürecine kadar tek ekip olarak ilerleriz.', ctaPrimary: 'PROJEYİ KONUŞALIM', ctaSecondary: 'ÇALIŞMALARI GÖR', codeComment: '// Sade plan, sağlam ürün', codeFocus: 'Web ve mobil', codeScope: 'Yayın' },
  references: { title: 'GELİŞTİRDİĞİMİZ ÜRÜNLER VE ÇALIŞMALAR' },
  services: { title1: 'DİJİTAL', title2: 'ÜRÜNLER.', enterprise: { title: 'Web sitesi', desc: 'İşinizi anlatan, mobil cihazlarda iyi çalışan ve arama motorlarına hazır web siteleri.' }, ecommerce: { title: 'Mobil uygulama', desc: 'Kullanıcı deneyimini merkeze alan Android ve iOS uygulamaları.' }, uiux: { title: 'Yayın süreçleri', desc: 'Google Play ve App Store yayınları için gerekli hazırlıkları birlikte tamamlarız.' }, perf: 'Sade planlama', growth: 'Ürüne odaklı', efficiency: 'çalışma' },
  studio: { badge: 'ANA ÜRÜNÜMÜZ', title1: "TAKASSO'YU", title2: 'GELİŞTİRİYORUZ.', desc: 'Takasso, ikinci el ürünleri keşfetmeyi, ilan vermeyi ve kullanıcıların doğrudan iletişim kurmasını kolaylaştıran pazar yeri uygulamamızdır.', docs: 'Mobil uygulama', docsSub: 'Android ve iOS yayın süreçleri', adverts: 'Web platformu', advertsSub: 'Ürün ve topluluk deneyimi', latest: 'Ürün vitrini' },
  packages: { badge: 'İHTİYACA GÖRE GELİŞTİRME', title1: 'ÇALIŞMA', title2: 'MODELİ.', desc: 'Her proje için ihtiyacı, kapsamı ve yayın hedefini birlikte netleştiririz. Sabit paket yerine doğru çözümü planlarız.', popular: 'ÖNE ÇIKAN ÇÖZÜM', startingFrom: '', getStarted: 'Bize yazın' },
  portfolio: { badge: 'GERÇEK ÇALIŞMALAR', title1: 'ÜRÜN', title2: 'VİTRİNİ.', desc: 'Lunavor çatısı altında geliştirdiğimiz web siteleri, uygulamalar ve dijital ürünlerden seçmeler.' },
  engineering: { badge: 'GELİŞTİRME SÜRECİ', title1: 'SAĞLAM', title2: 'TEMELLER.', desc: 'İhtiyacı anlayıp sade bir planla tasarım, geliştirme, test ve yayın adımlarını birlikte yürütüyoruz.', seo: 'SEO uyumlu yapı', ux: 'Mobil uyum', cloud: 'Ölçeklenebilir altyapı', security: 'Bakımı kolay kod', terminal: 'lunavor_project.flow', terminalProcess: '[SÜREÇ] İhtiyaçlar analiz ediliyor...', terminalSuccess: '[HAZIR] Tasarım, geliştirme, test ve yayın planı oluşturuldu.', conversion: 'Teslim yaklaşımı' },
  contact: { title1: 'BİRLİKTE', title2: 'ÜRETELİM.', desc: 'Yeni bir web sitesi, mobil uygulama veya yayın desteği için bize yazın. Projenizi ve hedefinizi dinleyip uygun yol haritasını paylaşalım.', email: 'E-posta', whatsapp: 'WhatsApp', hq: 'Çalışma şekli', hqLoc: 'Proje bazlı ve uzaktan', quickChat: 'E-posta ile iletişime geçin', quickChatSub: 'Projenizi kısaca anlatın, size dönüş yapalım.', formName: 'Ad soyad / Firma', formEmail: 'E-posta adresi', formProject: 'Proje detayları', formPlaceholder: 'Projenizden ve hedefinizden bahsedin...', submit: 'Mesajı gönder', received: 'Mesaj alındı' },
  footer: { desc: 'Kişiye ve işletmeye özel web siteleri, mobil uygulamalar ve yayın çözümleri geliştiren yazılım şirketi.', quickLinks: 'Hızlı bağlantılar', connect: 'İletişim', rights: 'Tüm hakları saklıdır.' }
};

export const translations = { en: content, tr: content };
