// 🌙 Moonlit Studios Blog Data
// All blog posts are defined here for easy management

export type BlogCategory =
  | 'Healthcare x Tech'
  | 'Business Growth'
  | 'AI & Automation'
  | 'Design & Brand'
  | 'Writing & Storytelling'
  | 'Studio Updates'
  | 'Tutorials'
  | 'Press & Features';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  tags: string[];
  date: string;
  readTime: string;
  author: string;
  image?: string;
  featured?: boolean;
  pinned?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'most-influential-women-2025',
    title: 'Featured in Most Influential Women: Building Moonlit Studios',
    excerpt: 'How Moonlit Studios came to be, why I\'m building it, and how it serves individuals, small businesses, and enterprises through healthcare tech, AI innovation, and creative design.',
    category: 'Press & Features',
    tags: ['Press', 'Most Influential Women', 'Moonlit Studios', 'Entrepreneurship'],
    date: '2025-01-18',
    readTime: '8 min',
    author: 'Hannah Pagade',
    image: '/blog/images/most-influential-women-2025/hero.jpg',
    featured: true,
    pinned: true,
  },
  {
    id: '2',
    slug: 'moonlit-trifecta',
    title: 'The Moonlit Trifecta: Where Healthcare, Code, and Creativity Converge',
    excerpt: 'Not your typical developer origin story. Here\'s how healing, building, and storytelling became the three elements I bend to create digital magic.',
    category: 'Studio Updates',
    tags: ['Personal Story', 'Healthcare', 'Development', 'Creativity', 'Brand Story'],
    date: '2025-01-15',
    readTime: '7 min',
    author: 'Hannah Pagade',
    image: '/blog/images/moonlit-trifecta/hero.jpg',
    featured: true,
  },
  {
    id: '3',
    slug: 'ghibli-ux-philosophy',
    title: 'The Studio Ghibli UX Philosophy: Why Cozy Websites Win',
    excerpt: 'Forget aggressive popups and overwhelming CTAs. I\'m building websites like Hayao Miyazaki builds films—with warmth, intention, and a little bit of magic.',
    category: 'Design & Brand',
    tags: ['UX Design', 'Studio Ghibli', 'Small Business', 'Web Design', 'User Experience'],
    date: '2025-01-12',
    readTime: '6 min',
    author: 'Hannah Pagade',
    image: '/blog/images/ghibli-ux-philosophy/hero.jpg',
    featured: true,
  },
  {
    id: '4',
    slug: 'rag-chatbots-context-matters',
    title: 'RAG Chatbots: Why Your AI Needs to Remember the Conversation',
    excerpt: 'Spoiler: Your business doesn\'t need ChatGPT. You need an AI that actually understands YOUR context. Here\'s how RAG (Retrieval Augmented Generation) changes everything.',
    category: 'AI & Automation',
    tags: ['AI', 'RAG', 'Chatbots', 'Business Automation', 'OpenAI'],
    date: '2025-01-10',
    readTime: '9 min',
    author: 'Hannah Pagade',
    image: '/blog/images/rag-chatbots/hero.jpg',
  },
  {
    id: '5',
    slug: 'hipaa-compliance-nurses-perspective',
    title: 'HIPAA Compliance for Developers: What Nurses Wish You Knew',
    excerpt: 'Building healthcare tech without clinical experience? Here are the 7 things developers get wrong about patient data—and how to get them right.',
    category: 'Healthcare x Tech',
    tags: ['HIPAA', 'Healthcare Tech', 'Compliance', 'Patient Privacy', 'Development'],
    date: '2025-01-08',
    readTime: '10 min',
    author: 'Hannah Pagade',
    image: '/blog/images/hipaa-compliance/hero.jpg',
  },
  {
    id: '6',
    slug: 'small-business-websites-what-converts',
    title: 'Small Business Websites: What Actually Converts (It\'s Not What You Think)',
    excerpt: 'You don\'t need 50 pages, a chatbot, and animated everything. Here\'s what cafe owners, salon owners, and boutique businesses ACTUALLY need to turn visitors into customers.',
    category: 'Business Growth',
    tags: ['Small Business', 'Web Design', 'Conversion', 'Local Business', 'Marketing'],
    date: '2025-01-05',
    readTime: '8 min',
    author: 'Hannah Pagade',
    image: '/blog/images/small-business-websites/hero.jpg',
  },
];

// Helper functions
export const getFeaturedPosts = () => blogPosts.filter(post => post.featured);
export const getPinnedPosts = () => blogPosts.filter(post => post.pinned);
export const getPostsByCategory = (category: BlogCategory) =>
  blogPosts.filter(post => post.category === category);
export const getPostBySlug = (slug: string) =>
  blogPosts.find(post => post.slug === slug);
export const getAllCategories = (): BlogCategory[] => [
  'Healthcare x Tech',
  'Business Growth',
  'AI & Automation',
  'Design & Brand',
  'Writing & Storytelling',
  'Studio Updates',
  'Tutorials',
  'Press & Features',
];
