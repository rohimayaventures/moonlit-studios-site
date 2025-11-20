import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health x Tech Development - HIPAA-Compliant Healthcare Solutions | Moonlit Studios",
  description:
    "Healthcare technology built by a nurse-turned-developer. Patient portals ($3,500+), Clinical workflow tools ($5,000+), HIPAA platforms ($7,500+), and Telehealth solutions ($6,000+). 15+ years clinical experience meets cutting-edge development.",
  keywords: [
    "healthcare technology development",
    "HIPAA compliant development",
    "patient portal development",
    "clinical workflow software",
    "telehealth platform",
    "healthcare UX design",
    "medical software development",
    "nurse developer",
    "healthcare tech solutions",
    "clinical software",
    "health IT development",
    "medical app development",
  ],
  openGraph: {
    title: "Health x Tech Development - HIPAA-Compliant Healthcare Solutions | Moonlit Studios",
    description:
      "Built by The Nurse Who Codes. Patient portals, clinical tools, HIPAA platforms, telehealth. 15+ years bedside experience meets full-stack mastery.",
    type: "website",
    url: "https://www.moonlstudios.com/services/health-tech-development",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moonlit Studios - Health x Tech Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health x Tech Development - HIPAA-Compliant Healthcare Solutions | Moonlit Studios",
    description:
      "The Nurse Who Codes. Patient portals, clinical tools, HIPAA platforms, telehealth. Clinical expertise meets tech excellence.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.moonlstudios.com/services/health-tech-development",
  },
};

export default function HealthTechDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
