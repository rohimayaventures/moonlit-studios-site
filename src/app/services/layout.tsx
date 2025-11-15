import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Full-Stack Development & AI Innovation | Moonlit Studios",
  description:
    "Premium tech services for founders, healthcare orgs, and creators. Creative Design & Development (Starting at $1,800), Health x Tech (Starting at $3,500), Consulting (Starting at $150/hr), AI Innovation (Starting at $5,000), and Ghostwriting (Starting at $250). Where clinical expertise meets cutting-edge development.",
  keywords: [
    "full-stack development services",
    "AI development services",
    "healthcare tech development",
    "HIPAA compliant development",
    "custom web development",
    "RAG chatbot development",
    "voice AI development",
    "healthcare UX design",
    "creative design services",
    "brand development",
    "tech consulting services",
    "ghostwriting services",
    "author website development"
  ],
  openGraph: {
    title: "Services - Full-Stack Development & AI Innovation | Moonlit Studios",
    description:
      "5 premium service suites: Creative Design, Health x Tech, Consulting, AI Innovation, Ghostwriting. Built by The Nurse Who Codes.",
    type: "website",
    url: "https://moonlstudios.com/services",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moonlit Studios Services - Premium Tech & Creative Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Full-Stack Development & AI Innovation | Moonlit Studios",
    description:
      "5 service suites: Creative Design, Health x Tech, AI Innovation, Consulting, Ghostwriting.",
    images: ["/og-image.png"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
