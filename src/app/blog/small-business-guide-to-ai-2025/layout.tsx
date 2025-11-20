import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Small Business Guide to AI in 2025 — From The Nurse Who Codes™ | Blog",
  description:
    "Learn how small businesses are using AI in 2025. Real examples, cost breakdowns, and practical implementation from Moonlit Studios.",
  keywords: [
    "small business AI",
    "AI for small business 2025",
    "AI implementation guide",
    "business automation",
    "Hannah Pagade",
    "Moonlit Studios",
    "Colorado AI",
    "AI tools for entrepreneurs",
    "small business technology",
  ],
  openGraph: {
    title: "The Small Business Guide to AI in 2025 — From The Nurse Who Codes™",
    description:
      "Learn how small businesses are using AI in 2025. Real examples, cost breakdowns, and practical implementation from Moonlit Studios.",
    type: "article",
    url: "https://www.moonlstudios.com/blog/small-business-guide-to-ai-2025",
    publishedTime: "2025-01-20T00:00:00.000Z",
    authors: ["Hannah Pagade"],
    tags: ["AI", "Small Business", "Business Automation", "AI Tools", "Colorado"],
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Small Business Guide to AI in 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Small Business Guide to AI in 2025 — From The Nurse Who Codes™",
    description:
      "Learn how small businesses are using AI in 2025. Real examples, cost breakdowns, and practical implementation.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.moonlstudios.com/blog/small-business-guide-to-ai-2025",
  },
};

export default function SmallBusinessGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
