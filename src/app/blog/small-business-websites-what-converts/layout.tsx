import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Small Business Websites: What Actually Converts (It's Not What You Think) | Blog",
  description:
    "You don't need 50 pages, a chatbot, and animated everything. Here's what cafe owners, salon owners, and boutique businesses ACTUALLY need to turn visitors into customers.",
  keywords: [
    "small business websites",
    "website conversion",
    "local business marketing",
    "small business web design",
    "conversion optimization",
    "local business websites",
    "small business growth",
    "website ROI",
    "local marketing",
  ],
  openGraph: {
    title: "Small Business Websites: What Actually Converts",
    description:
      "What cafe owners, salon owners, and boutique businesses ACTUALLY need to convert visitors into customers.",
    type: "article",
    url: "https://www.moonlstudios.com/blog/small-business-websites-what-converts",
    publishedTime: "2025-01-05T00:00:00.000Z",
    authors: ["Hannah Pagade"],
    tags: ["Small Business", "Web Design", "Conversion", "Local Business", "Marketing"],
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Small Business Websites - What Actually Converts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Business Websites: What Actually Converts",
    description:
      "What small businesses ACTUALLY need to convert visitors into customers.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.moonlstudios.com/blog/small-business-websites-what-converts",
  },
};

export default function SmallBusinessWebsitesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
