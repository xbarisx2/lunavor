
import React from 'react';
import { Layout, Code, ShoppingCart, Github, Linkedin, Instagram, Globe, Database, ShieldCheck } from 'lucide-react';
import { Service, Project, NavLink, Client, PricingPackage } from './types.ts';

export const WHATSAPP_NUMBER = '905050627876';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Lunavor%20Team!%20I'd%20like%20to%20get%20a%20quote%20for%20a%20global%20project.`;

export const NAV_LINKS: NavLink[] = [
  { name: 'Solutions', href: '#services' },
  { name: 'Studio', href: '#studio' },
  { name: 'Packages', href: '#packages' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'web-development',
    title: 'Enterprise Web Design',
    description: 'High-performance, SEO-centric digital architectures that redefine your global presence.',
    iconName: 'Layout'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Engines',
    description: 'Sales-focused professional infrastructures with integrated payment and global inventory management.',
    iconName: 'ShoppingCart'
  },
  {
    id: 'custom-software',
    title: 'Custom Engineering',
    description: 'Automated business processes through bespoke web applications and scalable software systems.',
    iconName: 'Code'
  }
];

export const PACKAGES: PricingPackage[] = [
  {
    id: 'starter',
    name: 'Corporate Essential',
    price: '12.500₺',
    features: ['Modern Global Design', 'SEO Infrastructure', 'Responsive Architecture', 'Management Panel', 'SSL Certified']
  },
  {
    id: 'pro',
    name: 'E-Commerce Elite',
    price: '24.500₺',
    features: ['Global Payment Gateway', 'Advanced Logistics Integration', 'Stock Automation', 'Campaign Engine', '24/7 Priority Support'],
    recommended: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise Custom',
    price: 'Custom Quote',
    features: ['Bespoke API Engineering', 'Microservices Architecture', 'SaaS Solutions', 'Dedicated Infrastructure', 'SLA Agreement']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Interakdeniz Aluminum',
    category: 'Industrial Web & Catalog',
    imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200',
    url: 'https://www.interakdenizaluminyum.com/'
  },
  {
    id: 2,
    title: 'Hell Gym Center',
    category: 'Service & Reservation',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200',
    url: 'https://www.hellgymcenter.com/'
  },
  {
    id: 3,
    title: 'Ikonyum Wood',
    category: 'Design & Corporate',
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
    name: 'Nvidia Partners', 
    logoUrl: 'https://logo.clearbit.com/nvidia.com' 
  },
  { 
    id: 5, 
    name: 'Adobe Creative', 
    logoUrl: 'https://logo.clearbit.com/adobe.com' 
  },
  { 
    id: 6, 
    name: 'Intel Systems', 
    logoUrl: 'https://logo.clearbit.com/intel.com' 
  },
];

export const SOCIAL_LINKS = [
  { icon: <Instagram size={20} />, href: 'https://www.instagram.com/lunavor.com.tr/' },
  { icon: <Linkedin size={20} />, href: 'https://linkedin.com' },
  { icon: <Github size={20} />, href: 'https://github.com' },
];