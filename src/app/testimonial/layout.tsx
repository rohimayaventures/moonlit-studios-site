import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Share Your Experience - Submit a Testimonial | Moonlit Studios",
  description:
    "Share your experience working with Moonlit Studios. Help others discover quality web development, AI solutions, and healthcare technology services. Your feedback matters.",
  keywords: [
    "submit testimonial",
    "client review",
    "project feedback",
    "customer testimonial",
    "client experience",
    "review submission",
    "project review",
    "client feedback",
  ],
  openGraph: {
    title: "Share Your Experience - Submit a Testimonial | Moonlit Studios",
    description:
      "Share your project experience with Moonlit Studios. Help others discover quality tech services.",
    type: "website",
    url: "https://www.moonlitstudios.com/testimonial",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moonlit Studios - Submit Your Testimonial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Share Your Experience - Submit a Testimonial | Moonlit Studios",
    description:
      "Share your project experience. Help others discover quality tech services.",
    images: ["/og-image.png"],
  },
};

export default function TestimonialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
