import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Quest Chronicles | Moonlit Studios",
  description:
    "Journey through six realms of completed quests. From Bree's welcoming brands to the Shire's nourishing creations, Rivendell's healing platforms, Lothlórien's AI visions, Gondor's preserved lore, and the Grey Havens' experimental voyages. Every project a legend forged.",
  keywords: [
    "web development portfolio",
    "AI development projects",
    "healthcare tech portfolio",
    "full-stack projects",
    "RAG chatbot examples",
    "voice AI portfolio",
    "clinical UX portfolio",
    "brand design portfolio",
    "Next.js projects",
    "React development portfolio",
    "healthcare software examples",
    "HIPAA compliant projects",
    "creative development work",
    "AI innovation portfolio",
    "full-stack developer projects"
  ],
  openGraph: {
    title: "Portfolio - Quest Chronicles | Moonlit Studios",
    description:
      "6 realms explored. 19 legendary quests. Infinite honor earned. Journey through Bree, The Shire, Rivendell, Lothlórien, Gondor, and the Grey Havens.",
    type: "website",
    url: "https://www.moonlstudios.com/portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moonlit Studios Portfolio - Quest Chronicles of the Realms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Quest Chronicles | Moonlit Studios",
    description:
      "Journey through 6 realms of completed quests. Web design, healthcare tech, AI innovation, writing, and experimental labs.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.moonlstudios.com/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
