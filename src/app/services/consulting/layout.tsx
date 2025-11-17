import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Consulting - Expert Development Guidance | Moonlit Studios",
  description:
    "Strategic tech consulting from a full-stack expert with healthcare operations background. Code reviews ($150/hr), Architecture planning ($200/hr), Team mentoring ($175/hr), and Project rescue ($250/hr). Real-world experience meets technical excellence.",
  keywords: [
    "tech consulting",
    "development consulting",
    "code review services",
    "architecture consulting",
    "technical mentoring",
    "project rescue",
    "full-stack consulting",
    "healthcare tech consulting",
    "startup tech advisor",
    "CTO consulting",
    "technical advisory",
    "development strategy",
  ],
  openGraph: {
    title: "Tech Consulting - Expert Development Guidance | Moonlit Studios",
    description:
      "Strategic consulting for founders & teams. Code reviews, architecture, mentoring, project rescue. 15+ years operations + full-stack mastery.",
    type: "website",
    url: "https://www.moonlitstudios.com/services/consulting",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moonlit Studios - Tech Consulting Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Consulting - Expert Development Guidance | Moonlit Studios",
    description:
      "Code reviews, architecture, mentoring, project rescue. Real-world operational expertise.",
    images: ["/og-image.png"],
  },
};

export default function ConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
