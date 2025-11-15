import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Let's Build Together | Moonlit Studios",
  description:
    "Ready to transform your vision into reality? Get in touch with Moonlit Studios for full-stack development, AI innovation, healthcare tech, creative design, or ghostwriting services. Fast response guaranteed.",
  keywords: [
    "contact developer",
    "hire full-stack developer",
    "AI development inquiry",
    "healthcare tech consultation",
    "web development contact",
    "custom software quote",
    "freelance developer hire",
    "HIPAA developer contact",
    "Next.js developer hire",
    "AI chatbot development quote",
    "healthcare UX consultation",
    "ghostwriting services inquiry"
  ],
  openGraph: {
    title: "Contact - Let's Build Together | Moonlit Studios",
    description:
      "Transform your vision into reality. Full-stack development, AI innovation, healthcare tech, creative design, ghostwriting. Let's create something extraordinary.",
    type: "website",
    url: "https://moonlstudios.com/contact",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moonlit Studios Contact - Let's Build Together",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Let's Build Together | Moonlit Studios",
    description:
      "Full-stack dev, AI innovation, healthcare tech. Let's build something extraordinary together.",
    images: ["/og-image.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
