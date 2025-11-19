import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Author & Ghostwriting Studio - Professional Writing Services | Moonlit Studios",
  description:
    "Turn your story into reality. Author websites ($2,000+), Ghostwriting services ($250+), Content strategy ($150/hr), and Book launch platforms ($3,500+). Where words meet wonder and stories come alive.",
  keywords: [
    "ghostwriting services",
    "author website development",
    "book writing services",
    "content writing",
    "professional ghostwriter",
    "author platform",
    "book launch website",
    "content strategy",
    "creative writing services",
    "fiction ghostwriting",
    "non-fiction ghostwriting",
    "author branding",
  ],
  openGraph: {
    title: "Author & Ghostwriting Studio - Professional Writing Services | Moonlit Studios",
    description:
      "Your voice, expertly crafted. Author sites, ghostwriting, content strategy, launch platforms. Stories that resonate, words that sell.",
    type: "website",
    url: "https://www.moonlitstudios.com/services/ghostwriting",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moonlit Studios - Author & Ghostwriting Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Author & Ghostwriting Studio - Professional Writing Services | Moonlit Studios",
    description:
      "Turn stories into success. Author sites, ghostwriting, strategy, launches. Words meet wonder.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.moonlitstudios.com/services/ghostwriting",
  },
};

export default function GhostwritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
