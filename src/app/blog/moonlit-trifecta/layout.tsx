import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Moonlit Trifecta: Where Healthcare, Code, and Creativity Converge | Blog",
  description:
    "Not your typical developer origin story. Here's how healing, building, and storytelling became the three elements I bend to create digital magic.",
  keywords: [
    "developer origin story",
    "healthcare to tech",
    "nurse developer",
    "career transition",
    "healthcare and coding",
    "creative developer",
    "full-stack developer story",
    "tech career change",
    "multidisciplinary developer",
  ],
  openGraph: {
    title: "The Moonlit Trifecta: Where Healthcare, Code, and Creativity Converge",
    description:
      "How healing, building, and storytelling became the three elements I bend to create digital magic.",
    type: "article",
    url: "https://www.moonlstudios.com/blog/moonlit-trifecta",
    publishedTime: "2025-01-15T00:00:00.000Z",
    authors: ["Hannah Pagade"],
    tags: ["Personal Story", "Healthcare", "Development", "Creativity", "Brand Story"],
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Moonlit Trifecta - Healthcare, Code, and Creativity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Moonlit Trifecta: Healthcare, Code, and Creativity",
    description:
      "How healing, building, and storytelling converge to create digital magic.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.moonlstudios.com/blog/moonlit-trifecta",
  },
};

export default function MoonlitTrifectaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
