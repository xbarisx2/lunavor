
export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Project {
  id: number;
  kind?: 'mobile' | 'web';
  title: string;
  category: string;
  imageUrl: string;
  logoUrl?: string;
  imageAlt?: string;
  url: string;
  status?: string;
  linkLabel?: string;
}

export interface Client {
  id: number;
  name: string;
  logoUrl: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export type NavLink = {
  name: string;
  href: string;
};
