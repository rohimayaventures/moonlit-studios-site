import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Design & Development - Beautiful Web Solutions | Moonlit Studios",
  description:
    "Stunning websites that convert. Professional portfolios ($1,800+), Brand websites ($2,500+), E-commerce platforms ($4,000+), and Custom web apps ($5,000+). Design that delights, code that performs.",
  keywords: [
    "web design and development",
    "creative web development",
    "portfolio website design",
    "brand website development",
    "e-commerce development",
    "custom web applications",
    "responsive web design",
    "modern web development",
    "UI/UX design",
    "creative design services",
    "brand identity web",
    "conversion-focused design",
  ],
  openGraph: {
    title: "Creative Design & Development - Beautiful Web Solutions | Moonlit Studios",
    description:
      "Portfolios, brand sites, e-commerce, custom apps. Where art meets engineering for conversion-focused excellence.",
    type: "website",
    url: "https://www.moonlitstudios.com/services/creative-design-development",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moonlit Studios - Creative Design & Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Design & Development - Beautiful Web Solutions | Moonlit Studios",
    description:
      "Design that delights, code that performs. Portfolios, brands, e-commerce, custom apps.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.moonlitstudios.com/services/creative-design-development",
  },
};

export default function CreativeDesignDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
