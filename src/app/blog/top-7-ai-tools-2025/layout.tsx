import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top 7 AI Tools Every Entrepreneur Should Use in 2025 | Blog",
  description:
    "The 7 must-have AI tools for entrepreneurs. Real recommendations, pricing, and use cases from Moonlit Studios.",
  keywords: [
    "AI tools for entrepreneurs",
    "best AI tools 2025",
    "business AI software",
    "entrepreneur productivity",
    "Hannah Pagade",
    "Moonlit Studios",
    "AI productivity tools",
    "small business AI",
    "AI software recommendations",
  ],
  openGraph: {
    title: "Top 7 AI Tools Every Entrepreneur Should Use in 2025",
    description:
      "The 7 must-have AI tools for entrepreneurs. Real recommendations, pricing, and use cases from Moonlit Studios.",
    type: "article",
    url: "https://www.moonlstudios.com/blog/top-7-ai-tools-2025",
    publishedTime: "2025-01-20T00:00:00.000Z",
    authors: ["Hannah Pagade"],
    tags: ["AI Tools", "Productivity", "Entrepreneurship", "Business Software", "AI"],
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Top 7 AI Tools for Entrepreneurs in 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top 7 AI Tools Every Entrepreneur Should Use in 2025",
    description:
      "The 7 must-have AI tools for entrepreneurs. Real recommendations, pricing, and use cases.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.moonlstudios.com/blog/top-7-ai-tools-2025",
  },
};

export default function Top7AIToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
