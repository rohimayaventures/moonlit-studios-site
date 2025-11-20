import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Studio Ghibli UX Philosophy: Why Cozy Websites Win | Blog",
  description:
    "Forget aggressive popups and overwhelming CTAs. I'm building websites like Hayao Miyazaki builds films—with warmth, intention, and a little bit of magic.",
  keywords: [
    "Studio Ghibli UX",
    "cozy web design",
    "user experience design",
    "gentle UX",
    "small business web design",
    "Studio Ghibli philosophy",
    "thoughtful design",
    "conversion-focused UX",
    "web design trends",
  ],
  openGraph: {
    title: "The Studio Ghibli UX Philosophy: Why Cozy Websites Win",
    description:
      "Building websites like Hayao Miyazaki builds films—with warmth, intention, and a little bit of magic.",
    type: "article",
    url: "https://www.moonlstudios.com/blog/ghibli-ux-philosophy",
    publishedTime: "2025-01-12T00:00:00.000Z",
    authors: ["Hannah Pagade"],
    tags: ["UX Design", "Studio Ghibli", "Small Business", "Web Design", "User Experience"],
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Studio Ghibli UX Philosophy - Cozy Web Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Studio Ghibli UX Philosophy: Why Cozy Websites Win",
    description:
      "Building websites like Miyazaki builds films—with warmth, intention, and magic.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.moonlstudios.com/blog/ghibli-ux-philosophy",
  },
};

export default function GhibliUXPhilosophyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
