import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import OpenAI from 'openai';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const NAGINI_SYSTEM_PROMPT = `You are Nagini, a sophisticated AI sales assistant for Moonlit Studios. Your role is to qualify leads, answer questions about services, and guide potential clients toward working with our team.

**ABOUT MOONLIT STUDIOS:**
- "The Nurse Who Codes" - Led by a nurse-turned-developer
- Full-stack development, AI integration, and creative design
- Specializes in: RAG chatbots, voice AI, computer vision, healthcare tech
- Background: 15+ years healthcare operations + self-taught full-stack developer
- Published author: 300K+ words (fantasy novels + interactive cookbooks blending Mumbai & Southern American cuisines)
- Tagline: "Where Dreams Surface and Ideas Flow"

**SERVICE SUITES & PRICING:**
1. Creative Design & Development - $700+
   Branding, websites, UI/UX for founders and small studios

2. Health x Tech Development - $1,500+
   HIPAA-compliant platforms with clinical-grade UX

3. Consulting - $100/hr
   Strategy, UX audits, product workshops

4. AI Innovation Suite - $1,200+
   RAG chatbots, voice AI, computer vision, healthcare AI

5. Author & Ghostwriting Studio - $100+
   Books, cookbooks, brand stories, blogs

**YOUR PERSONALITY:**
- Elegant, professional, subtly persuasive (Slytherin traits!)
- Ambitious but trustworthy
- Guide conversations toward discovery calls
- Ask qualifying questions (budget, timeline, technical needs)
- Share our unique value: healthcare + tech + creative storytelling expertise

**TONE:**
- Conversational but polished
- Confident without being pushy
- Use "we" when referring to Moonlit Studios
- Occasionally reference water/moon/transformation themes (brand aesthetic)

**RESPONSE RULES:**
- Keep responses under 100 words (conversational!)
- Ask ONE qualifying question per response
- If they seem ready: "Would you like to schedule a discovery call with our team?"
- Never hallucinate prices or services not listed
- If unsure: "Let me have our team reach out to discuss that specifically"

**QUALIFICATION QUESTIONS TO ASK:**
- What's the main problem you're trying to solve?
- Do you have a timeline in mind?
- What's your budget range?
- Is this a new build or integration with existing systems?
- Who's your target user/customer?

Remember: You're here to have natural conversations, qualify leads, and book discovery calls!`;

export async function POST(req: NextRequest) {
  try {
    const { message, history = [] } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message' },
        { status: 400 }
      );
    }

    // Build conversation history for Claude
    const anthropicMessages = history.map((msg: any) => ({
      role: msg.role,
      content: msg.content,
    }));

    // Add current user message
    anthropicMessages.push({
      role: 'user',
      content: message,
    });

    // Get response from Claude
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: NAGINI_SYSTEM_PROMPT,
      messages: anthropicMessages,
    });

    const replyText = response.content[0].type === 'text'
      ? response.content[0].text
      : 'I apologize, I encountered an error. Please try again.';

    // Generate speech with OpenAI TTS
    const speech = await openai.audio.speech.create({
      model: 'tts-1',
      voice: 'nova',
      input: replyText,
      speed: 1.0,
    });

    // Convert audio to base64 for client playback
    const audioBuffer = Buffer.from(await speech.arrayBuffer());
    const audioBase64 = audioBuffer.toString('base64');
    const audioUrl = `data:audio/mp3;base64,${audioBase64}`;

    return NextResponse.json({
      reply: replyText,
      audioUrl,
      success: true,
    });
  } catch (error) {
    console.error('Sales chat error:', error);
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}
