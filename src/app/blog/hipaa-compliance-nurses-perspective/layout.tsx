import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HIPAA Compliance for Developers: What Nurses Wish You Knew | Blog",
  description:
    "Building healthcare tech without clinical experience? Here are the 7 things developers get wrong about patient data—and how to get them right.",
  keywords: [
    "HIPAA compliance",
    "healthcare development",
    "patient data privacy",
    "healthcare tech",
    "HIPAA for developers",
    "clinical perspective",
    "healthcare software",
    "protected health information",
    "healthcare security",
    "nurse perspective",
  ],
  openGraph: {
    title: "HIPAA Compliance for Developers: What Nurses Wish You Knew",
    description:
      "7 things developers get wrong about patient data—and how to get them right. From a nurse's perspective.",
    type: "article",
    url: "https://www.moonlstudios.com/blog/hipaa-compliance-nurses-perspective",
    publishedTime: "2025-01-08T00:00:00.000Z",
    authors: ["Hannah Pagade"],
    tags: ["HIPAA", "Healthcare Tech", "Compliance", "Patient Privacy", "Development"],
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HIPAA Compliance from a Nurse's Perspective",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HIPAA Compliance for Developers: What Nurses Wish You Knew",
    description:
      "7 things developers get wrong about patient data. From a nurse's perspective.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.moonlstudios.com/blog/hipaa-compliance-nurses-perspective",
  },
};

export default function HIPAAComplianceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
