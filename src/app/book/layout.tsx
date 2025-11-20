import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation - Schedule Your Free Strategy Call | Moonlit Studios",
  description:
    "Schedule a free 30-minute consultation with The Nurse Who Codes. Discuss your project, explore possibilities, and get expert guidance on web development, AI solutions, healthcare tech, and more.",
  keywords: [
    "book consultation",
    "schedule call",
    "free consultation",
    "strategy session",
    "project discussion",
    "discovery call",
    "tech consultation",
    "web development consultation",
    "AI consultation",
    "healthcare tech consultation",
    "calendly booking",
  ],
  openGraph: {
    title: "Book a Consultation - Schedule Your Free Strategy Call | Moonlit Studios",
    description:
      "Free 30-minute strategy call. Discuss your project, explore solutions, get expert guidance. No obligation.",
    type: "website",
    url: "https://www.moonlstudios.com/book",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moonlit Studios - Book Your Free Consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Consultation - Schedule Your Free Strategy Call | Moonlit Studios",
    description:
      "Free 30-minute strategy call. Discuss your project with The Nurse Who Codes.",
    images: ["/og-image.png"],
  },
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
