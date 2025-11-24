
export interface NavItem {
  label: string;
  href: string;
}

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  price: string;
  duration: string;
  difficulty: 'Intermediate' | 'Advanced' | 'Elite' | string;
  curriculum: string[];
}

export interface Transformation {
  id: string;
  name: string;
  stats: string;
  timeframe: string;
  imageBefore: string;
  imageAfter: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface ShopItem {
  id: string;
  title: string;
  price: string;
  image: string;
  category: string;
  description?: string;
  details?: string[];
  sizes?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  author: string;
  authorRole: string;
  content: string[];
}
