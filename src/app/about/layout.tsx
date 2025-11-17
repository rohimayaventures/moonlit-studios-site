import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - The Moonlit Archives | Moonlit Studios",
  description:
    "From bedside nurse to bending master. From published author to code warrior. Discover the Master's Journey through four phases: Healthcare Foundation, Creative Awakening, Technical Mastery, and the Avatar State. How 15 years of healing became digital transformation under moonlight.",
  keywords: [
    "healthcare developer",
    "nurse coder",
    "full-stack developer background",
    "clinical operations to tech",
    "healthcare technology expertise",
    "published author developer",
    "career transition story",
    "healthcare to software engineering",
    "Moonlit Studios founder",
    "AI healthcare developer",
    "creative technologist",
    "multi-disciplinary developer",
    "writer and coder",
    "healthcare tech consultant",
    "digital transformation specialist",
  ],
  openGraph: {
    title: "About - The Moonlit Archives | Moonlit Studios",
    description:
      "15 years of clinical operations meets full-stack mastery. The origin story of healthcare meets code.",
    type: "website",
    url: "https://www.moonlitstudios.com/about",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moonlit Studios - The Moonlit Archives",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About - The Moonlit Archives | Moonlit Studios",
    description:
      "From bedside to bending master. The Master's Journey from healthcare to code.",
    images: ["/og-image.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
