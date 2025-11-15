import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Simulated knowledge base - in production, this would be in a vector database
const KNOWLEDGE_BASE = `
# Moonlit Studios Knowledge Base

## About Moonlit Studios
Moonlit Studios is led by a nurse-turned-developer with 15+ years of healthcare operations leadership. As "The Nurse Who Codes," we bring clinical precision, creative vision, and technical mastery to every project. We're also a published author with 300,000+ words across fantasy novels and interactive storytelling cookbooks blending Mumbai and Southern American cuisines.

## Service Suites Offered

### Creative Design & Development
Branding, websites, and visual direction for founders, authors, and small studios.
- Branding & Identity: $1,800 - $4,500
- Web Design & Development: $3,000 - $8,500
Three tiers: Essential, Professional, Premium

### Health x Tech Development
Clinical-grade UX and HIPAA-compliant interfaces designed by someone who understands healthcare workflows.
- $4,500 - $15,000+
Three tiers: Foundation, Comprehensive, Enterprise

### Consulting
Strategy, audits, and workshops at the intersection of healthcare, UX, and product.
- $150 - $200/hr
- Discovery Sessions: $500 - $1,000
- UX Audits: $2,000 - $5,000

### AI Innovation Suite
Applied AI systems including RAG chatbots, voice AI, computer vision, and healthcare triage systems.
- Chatbots: $5,000 - $8,000
- Voice AI: $8,000 - $12,000
- Vision AI: $10,000 - $15,000
- Enterprise Custom: $15,000 - $18,000+

### Author & Ghostwriting Studio
Author platforms, books, cookbooks, and ongoing written content done in your voice.
- Written Content: $250 - $600 per piece
- Books & Cookbooks: $18,000 - $50,000+
- Author Platforms: $1,800 - $4,500

## Technology Stack
- Frontend: Next.js 16, React, TypeScript, Tailwind CSS
- Backend: Node.js, API integrations
- AI/ML: Claude (Anthropic), OpenAI Whisper, RAG systems
- Databases: PostgreSQL, Vector databases
- Cloud: Vercel

## Brand Philosophy
"Where Dreams Surface and Ideas Flow" - Moonlit Studios combines the adaptability of water (inspired by Avatar: The Last Airbender) with the precision of technical excellence. Every project is approached with patience, balance, and a focus on healing broken systems.

## Contact
Email: hello@moonlstudios.com
`;

export async function POST(req: NextRequest) {
  try {
    const { query } = await req.json();

    if (!query || typeof query !== 'string') {
      return NextResponse.json(
        { error: 'Invalid query' },
        { status: 400 }
      );
    }

    // Use Claude to answer based on knowledge base
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 512,
      system: `You are a helpful assistant for Moonlit Studios. Answer questions based on the knowledge base provided. If the answer isn't in the knowledge base, say so politely and suggest contacting our team directly.

Keep answers concise (2-3 sentences) and cite which section of the knowledge base you used.

Knowledge Base:
${KNOWLEDGE_BASE}`,
      messages: [
        {
          role: 'user',
          content: query,
        },
      ],
    });

    const answerText = response.content[0].type === 'text'
      ? response.content[0].text
      : 'Unable to find answer';

    // Determine confidence based on response
    const confidence = answerText.toLowerCase().includes("i don't") ||
                      answerText.toLowerCase().includes("not sure")
                      ? 60
                      : 95;

    // Extract sources (simplified - in production use vector similarity)
    const sources: string[] = [];
    if (query.toLowerCase().includes('service') || query.toLowerCase().includes('offer')) {
      sources.push('Services Documentation');
    }
    if (query.toLowerCase().includes('price') || query.toLowerCase().includes('cost')) {
      sources.push('Pricing Structure');
    }
    if (query.toLowerCase().includes('background') || query.toLowerCase().includes('about')) {
      sources.push('About Moonlit Studios');
    }
    if (query.toLowerCase().includes('tech') || query.toLowerCase().includes('stack')) {
      sources.push('Technology Stack');
    }
    if (sources.length === 0) {
      sources.push('General Knowledge Base');
    }

    return NextResponse.json({
      result: {
        answer: answerText,
        sources,
        confidence,
      },
      success: true,
    });
  } catch (error) {
    console.error('RAG search error:', error);
    return NextResponse.json(
      { error: 'Failed to search knowledge base' },
      { status: 500 }
    );
  }
}
