
import React from 'react';
import { Layout, Code, ShoppingCart, Github, Linkedin, Instagram, Globe, Database, ShieldCheck } from 'lucide-react';
import { Service, Project, NavLink, Client, PricingPackage } from './types';

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
    category: 'Kurumsal Web Tasarım',
    imageUrl: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1200',
    url: 'https://interakdeniz.com'
  },
  {
    id: 2,
    title: 'Hell Gym Center',
    category: 'Hizmet & Rezervasyon',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200',
    url: 'https://hellgym.com'
  },
  {
    id: 3,
    title: 'Endüstriyel B2B Portalı',
    category: 'Özel Yazılım',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    url: 'https://lunavor.com/b2b-portal'
  }
];

export const CLIENTS: Client[] = [
  { id: 1, name: 'Interakdeniz', logoUrl: 'https://logo.clearbit.com/google.com' },
  { id: 2, name: 'HellGym', logoUrl: 'https://logo.clearbit.com/spotify.com' },
  { id: 3, name: 'Stripe', logoUrl: 'https://logo.clearbit.com/stripe.com' },
  { id: 4, name: 'DigitalOcean', logoUrl: 'https://logo.clearbit.com/digitalocean.com' },
  { id: 5, name: 'GitHub', logoUrl: 'https://logo.clearbit.com/github.com' },
];

export const SOCIAL_LINKS = [
  { icon: <Instagram size={20} />, href: 'https://instagram.com' },
  { icon: <Linkedin size={20} />, href: 'https://linkedin.com' },
  { icon: <Github size={20} />, href: 'https://github.com' },
];