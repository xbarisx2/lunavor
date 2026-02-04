
import React from 'react';
import { Layout, Code, ShoppingCart, Github, Linkedin, Instagram, Globe, Database, ShieldCheck } from 'lucide-react';
import { Service, Project, NavLink, Client, PricingPackage } from './types';

export const WHATSAPP_NUMBER = '905050627876';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Merhaba%20Lunavor%20ekibi!%20Projem%20i%C3%A7in%20teklif%20almak%20istiyorum.`;

export const NAV_LINKS: NavLink[] = [
  { name: 'Çözümler', href: '#services' },
  { name: 'Paketler', href: '#packages' },
  { name: 'Referanslar', href: '#references' },
  { name: 'Portfolyo', href: '#portfolio' },
  { name: 'İletişim', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'web-development',
    title: 'Kurumsal Web Tasarım',
    description: 'Şirketinizin dijital prestijini artıran, yüksek performanslı ve SEO uyumlu kurumsal web çözümleri.',
    iconName: 'Layout'
  },
  {
    id: 'ecommerce',
    title: 'E-Ticaret Sistemleri',
    description: 'Gelişmiş ödeme sistemleri ve stok yönetimi ile donatılmış, satış odaklı profesyonel mağaza altyapıları.',
    iconName: 'ShoppingCart'
  },
  {
    id: 'custom-software',
    title: 'Özel Yazılım Geliştirme',
    description: 'İşletme süreçlerinizi otomatize eden, size özel kurgulanmış web tabanlı uygulama ve yazılım sistemleri.',
    iconName: 'Code'
  }
];

export const PACKAGES: PricingPackage[] = [
  {
    id: 'starter',
    name: 'Kurumsal Başlangıç',
    price: '9.500₺',
    features: ['Modern Kurumsal Tasarım', 'SEO Altyapısı', 'Mobil Uyumluluk', 'Yönetim Paneli', 'SSL Sertifikası Dahil']
  },
  {
    id: 'pro',
    name: 'E-Ticaret Pro',
    price: '18.500₺',
    features: ['Sanal POS Entegrasyonu', 'Gelişmiş Kargo Takip', 'Stok Takip Sistemi', 'Kampanya Yönetimi', '7/24 Teknik Destek'],
    recommended: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise Custom',
    price: 'Teklif Alın',
    features: ['Özel API Geliştirme', 'Mikroservis Mimarisi', 'SaaS Çözümleri', 'Dedicated Altyapı', 'Bakım & Destek Anlaşması']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Interakdeniz Alüminyum',
    category: 'Endüstriyel Web & Katalog',
    imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200',
    url: 'https://www.interakdenizaluminyum.com/'
  },
  {
    id: 2,
    title: 'Hell Gym Center',
    category: 'Hizmet & Rezervasyon',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200',
    url: 'https://www.hellgymcenter.com/'
  },
  {
    id: 3,
    title: 'Ikonyum Ahşap',
    category: 'Ahşap Tasarım & Kurumsal',
    imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1200',
    url: 'https://www.ikonyumahsap.com.tr/'
  }
];

export const CLIENTS: Client[] = [
  { 
    id: 1, 
    name: 'Interakdeniz Alüminyum', 
    logoUrl: 'https://github.com/xbarisx2/logo/blob/main/logoointer-removebg-preview.png?raw=true' 
  },
  { 
    id: 2, 
    name: 'Hell Gym Center', 
    logoUrl: 'https://www.hellgymcenter.com/images/hellogo.png' 
  },
  { 
    id: 3, 
    name: 'Ikonyum Ahşap', 
    logoUrl: 'https://www.ikonyumahsap.com.tr/img/ikonyum-ahsap.png' 
  },
  { 
    id: 4, 
    name: 'TechSolutions', 
    logoUrl: 'https://logo.clearbit.com/nvidia.com' 
  },
  { 
    id: 5, 
    name: 'DigitalFlow', 
    logoUrl: 'https://logo.clearbit.com/adobe.com' 
  },
  { 
    id: 6, 
    name: 'GlobalConnect', 
    logoUrl: 'https://logo.clearbit.com/intel.com' 
  },
];

export const SOCIAL_LINKS = [
  { icon: <Instagram size={20} />, href: 'https://www.instagram.com/lunavor.com.tr/' },
  { icon: <Linkedin size={20} />, href: 'https://linkedin.com' },
  { icon: <Github size={20} />, href: 'https://github.com' },
];
