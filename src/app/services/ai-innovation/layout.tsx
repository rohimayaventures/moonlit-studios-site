import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Innovation Suite - Advanced AI Development | Moonlit Studios",
  description:
    "Enterprise AI solutions powered by clinical expertise. Custom RAG chatbots ($5,000+), Voice AI assistants ($7,500+), AI workflow automation ($6,000+), and Health AI platforms ($10,000+). Where healthcare intelligence meets artificial intelligence.",
  keywords: [
    "AI development",
    "RAG chatbot development",
    "voice AI development",
    "AI automation",
    "healthcare AI",
    "custom AI solutions",
    "enterprise AI",
    "AI consulting",
    "machine learning development",
    "LLM integration",
    "AI workflow automation",
    "clinical AI development",
  ],
  openGraph: {
    title: "AI Innovation Suite - Advanced AI Development | Moonlit Studios",
    description:
      "Enterprise-grade AI solutions: RAG chatbots, Voice AI, workflow automation, healthcare platforms. Built by The Nurse Who Codes with 15+ years clinical expertise.",
    type: "website",
    url: "https://www.moonlitstudios.com/services/ai-innovation",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moonlit Studios - AI Innovation Suite",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Innovation Suite - Advanced AI Development | Moonlit Studios",
    description:
      "RAG chatbots, Voice AI, automation, healthcare platforms. Clinical expertise meets AI innovation.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.moonlitstudios.com/services/ai-innovation",
  },
};

export default function AIInnovationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
