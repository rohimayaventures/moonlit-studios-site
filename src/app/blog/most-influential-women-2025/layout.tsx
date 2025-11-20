import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured in Most Influential Women: Building Moonlit Studios | Blog",
  description:
    "How Moonlit Studios came to be, why I'm building it, and how it serves individuals, small businesses, and enterprises through healthcare tech, AI innovation, and creative design.",
  keywords: [
    "most influential women",
    "women in tech",
    "women entrepreneurs",
    "Moonlit Studios founder",
    "healthcare tech entrepreneur",
    "women in AI",
    "tech founder story",
    "women in business",
    "startup founder",
    "female developer",
  ],
  openGraph: {
    title: "Featured in Most Influential Women: Building Moonlit Studios",
    description:
      "How Moonlit Studios came to be and how it serves through healthcare tech, AI innovation, and creative design.",
    type: "article",
    url: "https://www.moonlstudios.com/blog/most-influential-women-2025",
    publishedTime: "2025-01-18T00:00:00.000Z",
    authors: ["Hannah Pagade"],
    tags: ["Press", "Most Influential Women", "Moonlit Studios", "Entrepreneurship"],
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moonlit Studios - Most Influential Women 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Featured in Most Influential Women: Building Moonlit Studios",
    description:
      "How Moonlit Studios came to be and serves through healthcare tech, AI, and creative design.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.moonlstudios.com/blog/most-influential-women-2025",
  },
};

export default function MostInfluentialWomen2025Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
