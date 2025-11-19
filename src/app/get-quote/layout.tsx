import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Instant Quote - AI-Powered Pricing Calculator | Moonlit Studios",
  description:
    "Get an instant, accurate project quote powered by AI. Answer a few questions about your project and receive detailed pricing for web development, AI solutions, healthcare tech, and more. Free consultation included.",
  keywords: [
    "get quote",
    "project pricing",
    "web development quote",
    "AI development pricing",
    "instant quote",
    "pricing calculator",
    "project cost estimate",
    "free consultation",
    "custom development quote",
    "website pricing",
    "app development cost",
    "tech project estimate",
  ],
  openGraph: {
    title: "Get Instant Quote - AI-Powered Pricing Calculator | Moonlit Studios",
    description:
      "Answer a few questions, get instant pricing. AI-powered quote generator for web dev, AI solutions, healthcare tech, and creative projects.",
    type: "website",
    url: "https://www.moonlitstudios.com/get-quote",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moonlit Studios - Get Instant Project Quote",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Instant Quote - AI-Powered Pricing Calculator | Moonlit Studios",
    description:
      "AI-powered quote generator. Get instant pricing for web dev, AI, healthcare tech, and creative projects.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.moonlitstudios.com/get-quote",
  },
};

export default function GetQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
