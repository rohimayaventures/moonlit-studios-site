import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How AI Helps Small Business Owners Save 10 Hours a Week | Blog",
  description:
    "Discover 8 proven ways AI saves small business owners 10+ hours per week with real examples and time breakdowns.",
  keywords: [
    "AI time savings",
    "small business automation",
    "AI productivity tools",
    "business efficiency",
    "Hannah Pagade",
    "Moonlit Studios",
    "AI tools for entrepreneurs",
    "workflow automation",
    "small business AI",
  ],
  openGraph: {
    title: "How AI Helps Small Business Owners Save 10 Hours a Week",
    description:
      "Discover 8 proven ways AI saves small business owners 10+ hours per week with real examples and time breakdowns.",
    type: "article",
    url: "https://www.moonlstudios.com/blog/how-ai-saves-10-hours-per-week",
    publishedTime: "2025-01-20T00:00:00.000Z",
    authors: ["Hannah Pagade"],
    tags: ["AI", "Productivity", "Small Business", "Automation", "Time Management"],
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "How AI Saves 10 Hours Per Week",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How AI Helps Small Business Owners Save 10 Hours a Week",
    description:
      "Discover 8 proven ways AI saves small business owners 10+ hours per week.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.moonlstudios.com/blog/how-ai-saves-10-hours-per-week",
  },
};

export default function AITimeSavingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
