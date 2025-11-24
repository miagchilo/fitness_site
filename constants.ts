
import { NavItem, Program, Testimonial, ShopItem, BlogPost, Transformation } from './types';

// Animation Variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Data
export const NAV_ITEMS: NavItem[] = [
  { label: 'Programs', href: '#programs' },
  { label: 'Results', href: '#results' },
  { label: 'Shop', href: '#shop' },
  { label: 'Blog', href: '#blog' },
  { label: 'About', href: '#about' },
];

export const PROGRAMS: Program[] = [
  {
    id: 'p1',
    title: 'HYPERTROPHY X',
    subtitle: 'MASS BUILDING',
    description: 'Pure size. Heavy compound movements designed to maximize muscle tissue breakdown and repair.',
    longDescription: 'Hypertrophy X is not for the faint of heart. It is a high-volume, high-intensity protocol designed specifically for natural lifters looking to maximize lean tissue accrual. We utilize a blend of progressive overload on compound movements and metabolic stress techniques for isolation work.',
    image: 'https://picsum.photos/seed/gym1/800/1000',
    features: ['12 Week Program', 'Nutrition Guide', 'Video Library'],
    price: '$197.00',
    duration: '12 Weeks',
    difficulty: 'Advanced',
    curriculum: [
      'Phase 1: Accumulation (Weeks 1-4)',
      'Phase 2: Intensification (Weeks 5-8)',
      'Phase 3: Realization (Weeks 9-12)',
      'Bonus: Weak Point Specialization'
    ]
  },
  {
    id: 'p2',
    title: 'ATHLETE SHRED',
    subtitle: 'LEAN PERFORMANCE',
    description: 'Cut body fat while maintaining explosive power. The diet and training regimen for elite aesthetics.',
    longDescription: 'Designed for the modern athlete who needs to look like a statue but move like a sprinter. This program balances heavy lifting with plyometrics and conditioning work to strip body fat without sacrificing strength or size.',
    image: 'https://picsum.photos/seed/gym2/800/1000',
    features: ['8 Week Cut', 'Macro Calculator', 'HIIT Protocols'],
    price: '$147.00',
    duration: '8 Weeks',
    difficulty: 'Intermediate',
    curriculum: [
      'Metabolic Conditioning Circuits',
      'Strength Maintenance Protocol',
      'Carb Cycling Nutrition Plan',
      'Peak Week Guide'
    ]
  },
  {
    id: 'p3',
    title: 'ALPHA STRENGTH',
    subtitle: 'POWERLIFTING FOCUS',
    description: 'Build raw power. Focus on the big three: Squat, Bench, Deadlift. Become undeniable.',
    longDescription: 'A classic linear periodization model adapted for the modern lifter. We focus on sub-maximal volume work to build technique and neural efficiency, peaking for new 1 Rep Max attempts at the end of the cycle.',
    image: 'https://picsum.photos/seed/gym3/800/1000',
    features: ['16 Week Cycle', 'Peaking Phase', 'Form Analysis'],
    price: '$247.00',
    duration: '16 Weeks',
    difficulty: 'Elite',
    curriculum: [
      'Block 1: Hypertrophy & GPP',
      'Block 2: Strength Acclimation',
      'Block 3: Peaking & Taper',
      'Competition Day Strategy'
    ]
  }
];

export const TRANSFORMATIONS: Transformation[] = [
  { 
    id: 't1', 
    name: 'DAVID K.', 
    stats: '-18KG FAT / +4KG MUSCLE', 
    timeframe: '16 WEEKS',
    imageBefore: 'https://picsum.photos/seed/before1/600/800',
    imageAfter: 'https://picsum.photos/seed/after1/600/800'
  },
  { 
    id: 't2', 
    name: 'MARCUS R.', 
    stats: 'COMPETITION PREP', 
    timeframe: '12 WEEKS',
    imageBefore: 'https://picsum.photos/seed/before2/600/800',
    imageAfter: 'https://picsum.photos/seed/after2/600/800'
  },
  { 
    id: 't3', 
    name: 'JAMES L.', 
    stats: '+8KG LEAN MASS', 
    timeframe: '6 MONTHS',
    imageBefore: 'https://picsum.photos/seed/before3/600/800',
    imageAfter: 'https://picsum.photos/seed/after3/600/800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'ALEXANDER VOLKOV',
    role: 'PRO FIGHTER',
    quote: 'Stanislav’s programming isn’t for the weak. It pushed my conditioning to a level I didn’t know existed.',
    image: 'https://picsum.photos/seed/fighter/200/200'
  },
  {
    id: 't2',
    name: 'JASON K.',
    role: 'CEO & FOUNDER',
    quote: 'I needed efficiency and results. The executive coaching package delivered exactly that. No wasted time.',
    image: 'https://picsum.photos/seed/ceo/200/200'
  }
];

export const SHOP_ITEMS: ShopItem[] = [
  {
    id: 's1',
    title: 'ONYX PERF TEE',
    price: '$55.00',
    image: 'https://picsum.photos/seed/shirt/800/800',
    category: 'APPAREL',
    description: 'Engineered for the hardest workers in the room. The Onyx Performance Tee features moisture-wicking technology wrapped in a luxury matte finish.',
    details: ['Slim, athletic fit', 'Sweat-wicking blend', 'Reinforced stitching', 'Matte black logo'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 's2',
    title: 'TITANIUM WRAPS',
    price: '$35.00',
    image: 'https://picsum.photos/seed/gear/800/800',
    category: 'ACCESSORIES',
    description: 'Support your heaviest lifts. These wrist wraps offer competition-grade stability with a premium aesthetic.',
    details: ['Heavy-duty elastic', 'Thumb loop', 'Velcro closure', 'Length: 24 inches'],
    sizes: ['One Size']
  },
  {
    id: 's3',
    title: 'PURE CREATINE',
    price: '$45.00',
    image: 'https://picsum.photos/seed/supp/800/800',
    category: 'SUPPLEMENTS',
    description: 'No fillers. No flavor. Just pure, micronized Creatine Monohydrate for maximum power output and cell hydration.',
    details: ['5g per serving', '100 servings', 'Micronized for solubility', 'Unflavored'],
    sizes: ['500g']
  },
  {
    id: 's4',
    title: 'MATTE SHAKER',
    price: '$25.00',
    image: 'https://picsum.photos/seed/bottle/800/800',
    category: 'ACCESSORIES',
    description: 'Minimalist design meets rugged utility. Stainless steel construction keeps your pre-workout cold and your style clean.',
    details: ['Stainless Steel', 'Leak-proof lid', '24oz capacity', 'Matte coating'],
    sizes: ['24oz']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'THE MYTH OF OVERTRAINING',
    excerpt: 'Why your body can handle more than you think. The science of high-volume adaptation.',
    date: 'OCT 12, 2024',
    image: 'https://picsum.photos/seed/blog1/800/600',
    category: 'TRAINING',
    author: 'Stanislav Miagchilo',
    authorRole: 'Head Coach',
    content: [
      "In the modern fitness landscape, fear is the primary product being sold. Fear of injury, fear of doing it wrong, and perhaps most pervasively, fear of overtraining. We have become a generation of athletes terrified of hard work.",
      "The concept of overtraining is clinically real, but functionally irrelevant for 99% of the population. Unless you are an Olympic athlete training 4-6 hours a day with disrupted sleep and poor nutrition, you are likely not overtraining. You are under-recovering.",
      "The human body is an adaptation machine. It craves stress. It needs a stimulus significant enough to force a survival response. When we treat our training with kid gloves, we deny our biology its primary function: growth.",
      "High-volume training, when paired with adequate caloric surplus and prioritized sleep, creates a systemic demand that low-volume 'minimalist' approaches simply cannot match. It teaches the nervous system to fire under fatigue. It expands capillary density. It builds mental calluses.",
      "Stop worrying about cortisol. Start worrying about mediocrity. If you want extraordinary results, you must be willing to endure extraordinary effort. The body will follow where the mind leads."
    ]
  },
  {
    id: 'b2',
    title: 'MACROS FOR MASS',
    excerpt: 'Stop eating like a bird. The exact nutritional protocol I use for adding lean tissue.',
    date: 'SEP 28, 2024',
    image: 'https://picsum.photos/seed/blog2/800/600',
    category: 'NUTRITION',
    author: 'Elena K.',
    authorRole: 'Sports Nutritionist',
    content: [
      "The equation for mass is simple, yet most fail to solve it. It is not about 'eating clean' or 'intuitive eating'. When the goal is hypertrophy, food is data. It is fuel. And you need more of it than you think.",
      "Protein is the building block, yes. You should be aiming for 1g to 1.5g per pound of body weight. But protein alone does not build size; it repairs damage. Energy surplus builds size. That comes from carbohydrates.",
      "Carbohydrates are protein sparing. If you are training with the intensity required to change your physique, your glycogen stores are being depleted. Without adequate carb intake, your body turns to amino acids for energy. You are literally burning your gains for fuel.",
      "My protocol for massing clients is aggressive: 50% Carbohydrates, 30% Protein, 20% Fats. We prioritize easily digestible sources: white rice, potatoes, fruit. We want insulin spikes around the workout window. We want the body in an anabolic state.",
      "Do not fear the scale going up. If you want to occupy more space in the room, you must consume the resources to build that structure. Eat with purpose."
    ]
  },
  {
    id: 'b3',
    title: 'MINDSET OF A CHAMPION',
    excerpt: 'Mental resilience is the first muscle you need to build. Here is how to forge it.',
    date: 'SEP 15, 2024',
    image: 'https://picsum.photos/seed/blog3/800/600',
    category: 'MINDSET',
    author: 'Stanislav Miagchilo',
    authorRole: 'Head Coach',
    content: [
      "The iron never lies. You can cheat on your taxes, you can cheat on your partner, but you cannot cheat 405 pounds. If you haven't done the work, it will not move. This absolute truth is why the gym is the ultimate forge for character.",
      "Resilience is not a trait you are born with. It is a muscle. It is built through repetition. Every time you want to quit but do one more rep, you are hypertrophying your willpower.",
      "Champions are not defined by their victories, but by their relationship with failure. They seek out the point of failure because they know that is where the adaptation occurs. The average person avoids discomfort. The elite athlete chases it.",
      "Visualize your success, yes. But more importantly, visualize the suffering required to get there. Accept it. Embrace it. When the pain sets in during a set, do not panic. Smile. That is the feeling of weakness leaving the body.",
      "Your physical form is a direct reflection of your mental state. A disciplined mind creates a disciplined body. Harden your mind, and the steel will follow."
    ]
  }
];
