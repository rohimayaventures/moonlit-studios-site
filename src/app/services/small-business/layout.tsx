import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Small Business Packages - Studio Ghibli Journeys | Moonlit Studios",
  description:
    "Affordable web development for local businesses. Choose from Totoro's Garden ($1,500+), Howl's Moving Castle ($3,500+), or Spirited Away ($6,000+). Big dreams start small.",
  keywords: [
    "small business website",
    "affordable web development",
    "local business website",
    "startup website packages",
    "small business web design",
    "budget-friendly website",
    "small business developer",
    "local business tech",
    "website packages",
    "web design pricing",
    "small business solutions",
    "affordable tech services",
  ],
  openGraph: {
    title: "Small Business Packages - Studio Ghibli Journeys | Moonlit Studios",
    description:
      "Every great story starts small. Magical web solutions for local businesses—from coffee shops to creative studios. Starting at $1,500.",
    type: "website",
    url: "https://www.moonlitstudios.com/services/small-business",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moonlit Studios - Small Business Packages with Studio Ghibli Magic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Business Packages - Studio Ghibli Journeys | Moonlit Studios",
    description:
      "Plant your roots, transform your presence, or cross into success. Beautiful websites for local heroes. Starting at $1,500.",
    images: ["/og-image.png"],
  },
};

export default function SmallBusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
