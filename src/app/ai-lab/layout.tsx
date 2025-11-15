import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Lab - Interactive AI Demos | Moonlit Studios",
  description:
    "Experience AI innovation firsthand. Try interactive demos: Computer Vision (image analysis), RAG Q&A (intelligent search), Healthcare Triage (clinical AI), and Voice AI Sales. Built with Claude API, OpenAI, and cutting-edge ML.",
  keywords: [
    "AI demos",
    "computer vision demo",
    "RAG chatbot demo",
    "healthcare AI demo",
    "voice AI demo",
    "Claude API examples",
    "OpenAI integration",
    "AI ML demonstrations",
    "interactive AI examples",
    "healthcare triage AI",
    "RAG question answering",
    "voice sales AI",
    "live AI demos"
  ],
  openGraph: {
    title: "AI Lab - Interactive AI Demos | Moonlit Studios",
    description:
      "Try live AI demos: Computer Vision, RAG Q&A, Healthcare Triage, Voice Sales. Experience the future of intelligent systems built by The Nurse Who Codes.",
    type: "website",
    url: "https://moonlstudios.com/ai-lab",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moonlit Studios AI Lab - Interactive Demos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Lab - Interactive AI Demos | Moonlit Studios",
    description:
      "Live AI demos: Computer Vision, RAG, Healthcare Triage, Voice AI. Try the future today.",
    images: ["/og-image.png"],
  },
};

export default function AILabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
