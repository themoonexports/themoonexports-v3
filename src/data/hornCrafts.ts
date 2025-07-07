// Horn Crafts Product Data for The Moon Exports
export interface HornProduct {
  id: string;
  name: string;
  description: string;
  category: 'plates' | 'bowls' | 'decorative' | 'accessories' | 'buttons' | 'walking-sticks';
  images: string[];
  features: string[];
  applications: string[];
  colors: string[];
  sizes?: string[];
}

export const hornCraftCategories = [
  {
    id: 'plates',
    name: 'Buffalo Horn Plates',
    description: 'Premium buffalo horn plates in various colors and finishes',
    image: '/images/brown-buffalo-horn-plates.jpg',
    href: '/buffalo-horn-plates',
  },
  {
    id: 'bowls',
    name: 'Horn Bowls',
    description: 'Handcrafted buffalo horn bowls for dining and decoration',
    image: '/images/bowl.jpg',
    href: '/buffalo-horn-bowls',
  },
  {
    id: 'decorative',
    name: 'Horn Decor',
    description: 'Decorative horn items and artistic pieces',
    image: '/images/horn-op.jpg',
    href: '/horn-decor',
  },
  {
    id: 'accessories',
    name: 'Horn Accessories',
    description: 'Jewelry, bracelets, pendants, and fashion accessories',
    image: '/images/hornbracelets.jpg',
    href: '/horn-accessories',
  },
  {
    id: 'buttons',
    name: 'Horn Buttons & Toggles',
    description: 'Professional horn buttons and toggles for garments',
    image: '/images/horntoggles.jpg',
    href: '/horn-buttons',
  },
  {
    id: 'walking-sticks',
    name: 'Walking Sticks',
    description: 'Traditional buffalo horn walking sticks and canes',
    image: '/images/walking-stick.jpg',
    href: '/horn-decor#walking-sticks',
  },
];

export const hornProducts: HornProduct[] = [
  // Buffalo Horn Plates
  {
    id: 'brown-horn-plates',
    name: 'Brown Buffalo Horn Plates',
    description: 'Natural brown buffalo horn plates with rich, warm tones perfect for serving and decoration.',
    category: 'plates',
    images: [
      '/images/brown-buffalo-horn-plates.jpg',
      '/images/hornmtplates.jpg',
      '/images/hornmtplates2.jpg',
    ],
    features: [
      'Natural brown coloration',
      'Smooth polished finish',
      'Food-safe surface',
      'Unique grain patterns',
      'Durable construction',
    ],
    applications: [
      'Serving plates',
      'Decorative displays',
      'Restaurant tableware',
      'Gift items',
      'Collector pieces',
    ],
    colors: ['Natural Brown', 'Dark Brown', 'Medium Brown'],
    sizes: ['Small (6-8 inches)', 'Medium (8-10 inches)', 'Large (10-12 inches)'],
  },
  {
    id: 'black-horn-plates',
    name: 'Black Buffalo Horn Plates',
    description: 'Elegant black buffalo horn plates with sophisticated appearance for upscale dining.',
    category: 'plates',
    images: [
      '/images/black1-buffalo-horn-plates.jpg',
      '/images/black-with-white -buffalo-horn-plates.jpg',
      '/images/dark-brown-buffalo-horn-plates.jpg',
    ],
    features: [
      'Deep black coloration',
      'High-gloss finish',
      'Premium quality',
      'Scratch resistant',
      'Heat resistant',
    ],
    applications: [
      'Fine dining',
      'Special occasions',
      'Hotel restaurants',
      'Luxury settings',
      'Professional catering',
    ],
    colors: ['Jet Black', 'Black with White Streaks', 'Dark Charcoal'],
  },
  {
    id: 'light-horn-plates',
    name: 'Light Buffalo Horn Plates',
    description: 'Light-colored buffalo horn plates with natural cream and white tones.',
    category: 'plates',
    images: [
      '/images/light-white-buffalo-horn-plates.jpg',
      '/images/milk-white-buffalo-horn-plates.jpg',
    ],
    features: [
      'Light natural colors',
      'Cream and white tones',
      'Translucent appearance',
      'Elegant finish',
      'Versatile design',
    ],
    applications: [
      'Casual dining',
      'Breakfast service',
      'Light meal presentation',
      'Decorative use',
      'Photography props',
    ],
    colors: ['Milk White', 'Cream', 'Light Ivory'],
  },

  // Horn Bowls
  {
    id: 'horn-bowls',
    name: 'Buffalo Horn Bowls',
    description: 'Traditional handcrafted buffalo horn bowls for serving and decoration.',
    category: 'bowls',
    images: [
      '/images/bowl.jpg',
      '/images/bowl2.jpg',
    ],
    features: [
      'Traditional craftsmanship',
      'Natural horn material',
      'Smooth interior',
      'Comfortable grip',
      'Various sizes',
    ],
    applications: [
      'Soup serving',
      'Salad bowls',
      'Decorative pieces',
      'Gift items',
      'Cultural dining',
    ],
    colors: ['Natural Horn', 'Dark Brown', 'Light Brown'],
  },

  // Horn Accessories
  {
    id: 'horn-bracelets',
    name: 'Horn Bracelets',
    description: 'Fashionable buffalo horn bracelets and bangles in various styles.',
    category: 'accessories',
    images: [
      '/images/hornbracelets.jpg',
      '/images/hornbracelets2.jpg',
      '/images/bracelet.jpg',
      '/images/bracelet2.jpg',
    ],
    features: [
      'Fashion jewelry',
      'Lightweight design',
      'Comfortable wear',
      'Natural patterns',
      'Hypoallergenic',
    ],
    applications: [
      'Fashion accessories',
      'Gift jewelry',
      'Casual wear',
      'Ethnic styling',
      'Collector items',
    ],
    colors: ['Natural Horn', 'Polished Black', 'Brown Tones'],
  },
  {
    id: 'horn-pendants',
    name: 'Horn Pendants',
    description: 'Elegant buffalo horn pendants and necklace pieces.',
    category: 'accessories',
    images: [
      '/images/horn-pendant.jpg',
      '/images/horn-pendant2.jpg',
      '/images/necklace.jpg',
      '/images/necklace2.jpg',
    ],
    features: [
      'Artistic designs',
      'Lightweight',
      'Natural beauty',
      'Unique patterns',
      'Durable finish',
    ],
    applications: [
      'Fashion jewelry',
      'Statement pieces',
      'Cultural accessories',
      'Gift items',
      'Artistic wear',
    ],
    colors: ['Natural Tones', 'Polished Finish', 'Multi-toned'],
  },
  {
    id: 'horn-toggles',
    name: 'Horn Toggles & Buttons',
    description: 'Functional and decorative horn toggles and buttons for garments.',
    category: 'buttons',
    images: [
      '/images/horntoggles.jpg',
      '/images/horntoggles2.jpg',
      '/images/button-blank.jpg',
      '/images/button-blank2.jpg',
      '/images/finished-button.jpg',
      '/images/finished-button2.jpg',
    ],
    features: [
      'Garment accessories',
      'Durable construction',
      'Professional finish',
      'Various sizes',
      'Custom designs',
    ],
    applications: [
      'Clothing buttons',
      'Jacket toggles',
      'Coat fasteners',
      'Fashion accessories',
      'Craft projects',
    ],
    colors: ['Natural Horn', 'Polished Black', 'Brown Finish'],
  },

  // Decorative Items
  {
    id: 'horn-decorative',
    name: 'Horn Decorative Items',
    description: 'Artistic and decorative buffalo horn pieces for interior design.',
    category: 'decorative',
    images: [
      '/images/horn-op.jpg',
      '/images/horn-op2.jpg',
      '/images/decor.jpg',
      '/images/decor2.jpg',
    ],
    features: [
      'Artistic design',
      'Interior decoration',
      'Handcrafted quality',
      'Natural beauty',
      'Unique pieces',
    ],
    applications: [
      'Home decoration',
      'Office displays',
      'Gift items',
      'Collector pieces',
      'Interior design',
    ],
    colors: ['Natural Horn Tones', 'Polished Finish'],
  },

  // Walking Sticks & Accessories
  {
    id: 'walking-sticks',
    name: 'Buffalo Horn Walking Sticks',
    description: 'Traditional buffalo horn walking sticks and canes.',
    category: 'walking-sticks',
    images: [
      '/images/walking-stick.jpg',
      '/images/walking-stick2.jpg',
    ],
    features: [
      'Traditional craftsmanship',
      'Ergonomic design',
      'Durable construction',
      'Comfortable grip',
      'Decorative elements',
    ],
    applications: [
      'Walking assistance',
      'Decorative pieces',
      'Cultural items',
      'Gift accessories',
      'Collector items',
    ],
    colors: ['Natural Horn', 'Polished Finish'],
  },
  {
    id: 'shoe-horns',
    name: 'Buffalo Horn Shoe Horns',
    description: 'Traditional buffalo horn shoe horns for footwear assistance.',
    category: 'accessories',
    images: [
      '/images/shoeshorn.jpg',
      '/images/shoeshorn2.jpg',
    ],
    features: [
      'Traditional tool',
      'Smooth finish',
      'Durable material',
      'Ergonomic shape',
      'Long-lasting',
    ],
    applications: [
      'Footwear assistance',
      'Daily use items',
      'Gift accessories',
      'Hotel amenities',
      'Personal care',
    ],
    colors: ['Natural Horn', 'Polished Brown'],
  },
];

// Horn Craft Manufacturing Information
export const hornCraftInfo = {
  materials: {
    source: 'Ethically sourced buffalo horn from India',
    sustainability: 'Natural byproduct of food industry - zero waste approach',
    properties: 'Naturally antibacterial, water-resistant, and durable',
    processing: 'Hand-selected, cleaned, shaped, and polished by skilled artisans',
  },
  manufacturing: {
    location: 'Sambhal, Moradabad, India',
    established: '2015',
    artisans: 'Skilled local craftspeople with traditional techniques',
    quality: 'Each piece individually inspected for quality and finish',
    customization: 'Custom sizes, colors, and designs available on request',
  },
  certifications: {
    ethical: 'Ethical sourcing practices',
    quality: 'Premium grade horn selection',
    safety: 'Food-safe finishes where applicable',
    export: 'International export quality standards',
  },
};

const hornCraftData = { hornCraftCategories, hornProducts, hornCraftInfo };
export default hornCraftData;
