import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
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
  title: "Moonlit Studios - The Nurse Who Codes | Full-Stack Development & AI Innovation",
  description:
    "Award-winning full-stack development, AI innovation, and healthcare tech solutions. 15+ years healthcare ops turned tech mastery. HIPAA-compliant platforms, RAG chatbots, voice AI & creative design.",
  metadataBase: new URL("https://www.moonlitstudios.com"),
  keywords: [
    "full-stack developer",
    "AI development",
    "healthcare technology",
    "HIPAA compliant development",
    "RAG chatbots",
    "voice AI",
    "Next.js developer",
    "React developer",
    "healthcare UX",
    "nurse developer",
    "AI innovation",
    "custom web development",
    "healthtech solutions",
    "clinical workflow tools",
    "ghostwriting services"
  ],
  authors: [{ name: "Moonlit Studios" }],
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
    url: "https://www.moonlitstudios.com",
    siteName: "Moonlit Studios",
    title: "Moonlit Studios - The Nurse Who Codes",
    description:
      "Full-stack development, AI innovation, and healthcare tech. From 15+ years healthcare ops to cutting-edge AI solutions. HIPAA-compliant platforms, RAG systems, voice AI.",
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
    title: "Moonlit Studios - The Nurse Who Codes",
    description:
      "Full-stack development, AI innovation, healthcare tech. 15+ years clinical experience meets cutting-edge development.",
    images: ["/og-image.png"],
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
      </body>
    </html>
  );
}
