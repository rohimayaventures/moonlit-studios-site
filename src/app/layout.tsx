import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { GlobalKaiWidget } from "./components/GlobalKaiWidget";
import { Header } from "./components/Header";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { StructuredData } from "./components/StructuredData";
import { AchievementSystem } from "./components/AchievementSystem";
import { PageTracker } from "./components/PageTracker";
import { KonamiCode } from "./components/KonamiCode";
import { EasterEggProvider } from "./components/EasterEggContext";
import { Footer } from "./components/Footer";
import { Inter, Playfair_Display, Crimson_Text } from 'next/font/google';

// Professional, elegant fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const crimson = Crimson_Text({
  subsets: ['latin'],
  variable: '--font-crimson',
  display: 'swap',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: "Moonlit Studios — Web Design, Branding, & AI Development",
  description:
    "Moonlit Studios builds high-conversion websites, AI copilots, healthcare AI tools, brand identities, and creative tech solutions for founders, small businesses, and innovators. Built by The Nurse Who Codes™.",
  metadataBase: new URL("https://www.moonlstudios.com"),
  keywords: [
    "web design",
    "AI development",
    "AI engineer",
    "small business branding",
    "Colorado web designer",
    "healthcare AI developer",
    "Next.js developer",
    "creative tech studio",
    "Moonlit Studios",
    "nurse who codes",
    "HIPAA compliant development",
    "RAG chatbots",
    "voice AI",
    "healthcare UX",
    "AI innovation",
    "custom web development",
    "brand identity design",
    "Denver web design",
    "Colorado AI development"
  ],
  authors: [{ name: "Moonlit Studios" }, { name: "The Nurse Who Codes" }],
  creator: "Moonlit Studios - The Nurse Who Codes",
  publisher: "Moonlit Studios",
  icons: {
    icon: [
      { url: '/square-logo.png', type: 'image/png', sizes: '32x32' },
      { url: '/square-logo.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/square-logo.png', type: 'image/png', sizes: '180x180' },
    ],
    shortcut: [{ url: '/square-logo.png' }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.moonlstudios.com",
    siteName: "Moonlit Studios",
    title: "Moonlit Studios — Web Design, Branding, & AI Development",
    description:
      "Moonlit Studios builds high-conversion websites, AI copilots, healthcare AI tools, brand identities, and creative tech solutions for founders, small businesses, and innovators. Built by The Nurse Who Codes™.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moonlit Studios - Where Dreams Surface and Ideas Flow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moonlit Studios — Web Design, Branding, & AI Development",
    description:
      "High-conversion websites, AI copilots, healthcare AI tools, and brand identities. Built by The Nurse Who Codes™.",
    images: ["/og-image.png"],
    creator: "@moonlitstudios",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.moonlstudios.com",
  },
  other: {
    'theme-color': '#0a1929',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <StructuredData type="Organization" />
        <StructuredData type="ProfessionalService" />
        <StructuredData type="Service" />
      </head>
      <body className={`min-h-screen bg-nightNavy text-glacierWhite ${inter.variable} ${playfair.variable} ${crimson.variable}`}>
        <EasterEggProvider>
          <ErrorBoundary>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">
                <ErrorBoundary>{children}</ErrorBoundary>
              </main>

          <Footer />
          </div>

          {/* 🌙 GLOBAL KAI WIDGET - Appears on all pages */}
          <ErrorBoundary>
            <GlobalKaiWidget />
          </ErrorBoundary>

          {/* 🏆 ACHIEVEMENT SYSTEM - Track visitor progress globally */}
          <ErrorBoundary>
            <AchievementSystem />
            <PageTracker />
          </ErrorBoundary>

          {/* 🎮 KONAMI CODE & AVATAR STATE - Secret easter egg system */}
          <ErrorBoundary>
            <KonamiCode />
          </ErrorBoundary>
        </ErrorBoundary>
        </EasterEggProvider>

        {/* 📊 VERCEL ANALYTICS - Privacy-friendly page view tracking */}
        <Analytics />
      </body>
    </html>
  );
}
