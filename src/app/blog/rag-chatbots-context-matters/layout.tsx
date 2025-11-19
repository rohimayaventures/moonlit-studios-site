import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RAG Chatbots: Why Your AI Needs to Remember the Conversation | Blog",
  description:
    "Spoiler: Your business doesn't need ChatGPT. You need an AI that actually understands YOUR context. Here's how RAG (Retrieval Augmented Generation) changes everything.",
  keywords: [
    "RAG chatbots",
    "retrieval augmented generation",
    "AI chatbots",
    "business AI",
    "custom AI solutions",
    "ChatGPT alternative",
    "AI with context",
    "OpenAI",
    "AI automation",
    "intelligent chatbots",
  ],
  openGraph: {
    title: "RAG Chatbots: Why Your AI Needs to Remember the Conversation",
    description:
      "Your business needs an AI that understands YOUR context. How RAG changes everything.",
    type: "article",
    url: "https://www.moonlitstudios.com/blog/rag-chatbots-context-matters",
    publishedTime: "2025-01-10T00:00:00.000Z",
    authors: ["Hannah Pagade"],
    tags: ["AI", "RAG", "Chatbots", "Business Automation", "OpenAI"],
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RAG Chatbots - AI That Remembers Context",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RAG Chatbots: Why Your AI Needs to Remember the Conversation",
    description:
      "Your business needs AI that understands YOUR context. How RAG changes everything.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.moonlitstudios.com/blog/rag-chatbots-context-matters",
  },
};

export default function RAGChatbotsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
