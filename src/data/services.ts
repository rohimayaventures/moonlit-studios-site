export type ServiceCategory = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  startingPrice: string;
  highlights: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "brand",
    name: "Brand Design Suite",
    tagline: "Visual identities that feel like home.",
    description:
      "Full-stack brand systems for founders, authors, and studios who need a cohesive, soulful visual presence.",
    startingPrice: "$1,200+",
    highlights: [
      "Logo, submark, icon set",
      "Color palette & typography",
      "Mini brand guide",
      "Launch graphics for web & social"
    ]
  },
  {
    id: "web",
    name: "Web & Product Experience",
    tagline: "From first impression to final click.",
    description:
      "Conversion-aware, human-centered web experiences built with Next.js, React, and Tailwind.",
    startingPrice: "$2,000+",
    highlights: [
      "Marketing & landing pages",
      "Founders & portfolio sites",
      "Author & book experiences",
      "Deployment & hosting setup"
    ]
  },
  {
    id: "ai",
    name: "AI Development Suite",
    tagline: "Systems that think with you, not for you.",
    description:
      "Domain-aware AI tools tailored to your business, from chatbots to workflow automation.",
    startingPrice: "$3,000+",
    highlights: [
      "Custom chatbots & RAG systems",
      "Voice-enabled assistants",
      "Client intake & quoting flows",
      "Healthcare & cookbook use-cases"
    ]
  },
  {
    id: "author",
    name: "Author & Cookbook Studio",
    tagline: "Stories, recipes, and worlds that breathe.",
    description:
      "From manuscript to interactive web experiences, especially for hybrid cookbook-memoirs.",
    startingPrice: "$1,500+",
    highlights: [
      "Manuscript formatting & layout",
      "Cover & wrap design guidance",
      "Interactive recipe experiences",
      "Author portfolio sites"
    ]
  }
];
