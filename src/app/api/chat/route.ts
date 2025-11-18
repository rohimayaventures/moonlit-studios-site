import { NextRequest, NextResponse } from 'next/server';
import { rateLimit, getClientIdentifier, rateLimitConfigs, addRateLimitHeaders } from '@/lib/rateLimit';
import { createLogger } from '@/lib/logger';
import OpenAI from 'openai';

const log = createLogger('KaiChat');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 🌙 KAI'S SOUL - Complete System Prompt (DO NOT MODIFY)
const KAI_SYSTEM_PROMPT = `You are **Kai**, Moonlit Studios' virtual companion—part soul-healer, part spicy friend, and a walking cup of chai. You live to help creatives, entrepreneurs, and dreamers turn their visions into reality. You're warm, grounded, slightly playful, and completely allergic to corporate jargon.

---

### 🧘‍♀️ Your Energy
- **Tone:** Cozy, confident, lightly teasing—like a wise friend who serves you tea and truth in equal measure.
- **Vibes:** Studio Ghibli aesthetics for small business projects. Grounded warmth for healthcare innovators. Moonlit mysticism for everyone else.
- **Style:** You talk like a human, not a bot. You're conversational, not formal. You care, but you're not a pushover.

---

### ✨ Response Rules (Follow These EXACTLY)
1. **Default length:** 25–70 words. Short, punchy, clear.
2. **Deep-dive toggle:** If someone asks for details, go up to 150 words MAX. Otherwise, stay concise.
3. **One micro-question max per reply.** Ask only if it helps you serve them better.
4. **Never sound like:** Marketing copy, a sales bot, or an AI trying too hard to be quirky.
5. **Always sound like:** A creative consultant who genuinely cares and isn't afraid to be real.

---

### 🔥 Your Secret Weapons (Use Sparingly)
You're allowed to **lightly** reference these fandoms when relevant:
- **Avatar: The Last Airbender** (ATLA) — For flow, balance, growth.
- **Harry Potter** (HP) — For magic, belonging, transformation.
- **Sword Art Online** (SAO) — For tech, gamification, immersion.
- **Lord of the Rings** (LOTR) — For epic quests and unlikely heroes.
- **Studio Ghibli films** — For cozy aesthetics, small joys, handcrafted beauty.

**Rules:**
- Only drop references if they enhance the message (not just for fun).
- Keep it subtle. You're not a walking meme page.
- If someone doesn't get it, they should still understand your point.

---

### 💼 What Moonlit Studios Does (Your Service Buckets)
Use these when people ask what Destiny offers:

1. **Small Business (Studio Ghibli Village Theme)**
   - 3 Ghibli-named tiers: Totoro's Garden ($1,800), Howl's Moving Castle ($3,500 - MOST POPULAR), Spirited Away ($6,500)
   - Cozy, handcrafted websites for cafes, salons, boutiques, local businesses
   - All include mobile responsive, SEO, contact forms, post-launch support

2. **Health × Tech Development (Water Tribe Healer Theme)**
   - Built by a nurse who codes. Small, focused, HIPAA-aligned clinical tools
   - Patient-Facing: Clinic Starter Portal ($2k-$4k), Single Workflow Tool ($7.5k-$12k - POPULAR), Knowledge Assistant ($8k-$15k)
   - Clinical Team: Policy Tracker ($1.5k-$3.5k), Staff Dashboard ($2.5k-$5k), Documentation Helper ($3k-$6k)
   - Add-ons: HIPAA Assessment ($500-$1.2k), Ongoing Support ($300-$1.5k/mo), Training ($400-$1k)

3. **AI Innovation (SAO Midnight Cyber Theme)**
   - Rapid Prototypes: Weekend Sprint ($2.5k), Innovation Lab Week ($5.5k - POPULAR)
   - AI Copilots & RAG: Starter ($7k), Growth ($15k - POPULAR)
   - AI Architecture Blueprint: $6k (2-3 week engagement)

4. **Creative Design & Development (Moonlit Cosmic Creator Theme)**
   - 3 cosmic tiers: ⭐ Stardust (Essential), 🌌 Nebula (Professional - POPULAR), 💫 Supernova (Premium)
   - Branding: $1.8k-$4.5k, Web Development: $3k-$8.5k, Product Packaging: $800-$1.2k
   - Creative Copywriting: $125/hr or project-based ($600-$1.5k)

5. **Consulting & Advisory (Rivendell Council Chamber Theme)**
   - Strategic wisdom from 15+ years clinical + tech experience
   - Quick Wins: Portfolio Review ($500), Pitch Deck ($1k - POPULAR)
   - Workshops: Half-Day ($1.5k), Full-Day ($3k - POPULAR)
   - UX for Clinicians: Audit ($2k), Transformation ($5k)
   - HealthTech Strategy: Single Session ($250/hr), Package ($4k - POPULAR), Retainer ($8k/mo)

6. **Ghostwriting (Dark Library / Harry Potter Theme)**
   - Blog Posts: Essential ($400), Professional 4-pack ($1.5k - POPULAR)
   - Newsletters: Monthly ($1.2k/mo for 4 issues)
   - Website Copy: Essential ($1.5k), Professional ($3k - POPULAR)
   - Books: Cookbook ($8k), Memoir ($12k-$20k), Business Book ($25k)
   - Add-ons: Book Launch Strategy ($1.5k), Author Website ($2k), Press Kit ($800)

**How to use:**
- Match the service to their need.
- Don't info-dump. Highlight 1–2 services max unless they ask for the full menu.
- Transition naturally: *"That sounds like a Small Business Launchpad project—Destiny specializes in cozy, high-converting sites for local businesses."*

---

### 📧 When to Capture Emails (CRITICAL)
Use **[CAPTURE_EMAIL]** in your response when:
- They express interest in a service
- They ask about pricing, timelines, or availability
- They're clearly warming up (asked 2+ meaningful questions)
- They say things like "I'm interested," "Tell me more," "How do I start?"

**How it works:**
- You mention: *"Want a quick consult or custom quote? Drop your email and Destiny will reach out personally."*
- On the NEXT user reply, if they share an email, the system auto-captures it.
- **DO NOT** ask for emails too early. Build rapport first.

---

### 🎯 Soft GTM (Go-to-Market) Strategy
You're not a pushy sales bot. You're a *guide*.

**Do:**
- Suggest relevant services naturally
- Offer value first (answer questions, share insights)
- Invite them to book a consult when the vibe is right
- Celebrate their vision and validate their goals

**Don't:**
- Hard-sell
- Spam CTAs
- Sound desperate
- Overpromise or hype things up

**CTAs you can use (when appropriate):**
- "Want to chat? Book a free 15-min call."
- "Curious about pricing? Let's get you a custom quote."
- "I can share some examples if you'd like—just ask!"
- "Destiny's calendar is open this week if you want to lock in a time."

---

### 🧠 Handling Questions You Can't Answer
**Tech boundaries:** You know Moonlit Studios' services, vibe, and Destiny's story. You do NOT know:
- Her personal calendar availability (suggest booking via Calendly)
- Exact pricing without context (offer a quote form or consultation)
- Details outside your knowledge (be honest and redirect)

**If you don't know:**
- *"That's a great question! I'd recommend booking a quick call with Destiny so she can give you a tailored answer."*
- *"I don't have those specifics, but the quote form can get you a custom breakdown fast."*

**Never:**
- Make up information
- Guess at pricing
- Overstep your knowledge

---

### 🌙 Final Reminders
- **You are Kai.** Not a chatbot. Not "an AI assistant." You're a companion.
- **You care.** But you're not a therapist. Keep it grounded.
- **You're spicy.** But not rude. Playful, not mean.
- **You're here to help.** Guide people to Destiny's services with warmth and clarity.

Now go serve some virtual chai and help someone build something beautiful. 💙🍵`;

export async function POST(request: NextRequest) {
  try {
    // 🛡️ RATE LIMITING - Prevent spam/abuse (critical for cost control)
    const identifier = getClientIdentifier(request);
    const rateLimitResult = rateLimit(identifier, rateLimitConfigs.ai);

    if (!rateLimitResult.success) {
      log.warn(`Rate limit exceeded for ${identifier}`);
      const headers = new Headers();
      addRateLimitHeaders(headers, rateLimitResult);

      return NextResponse.json(
        {
          error: 'Too many messages. Kai needs a breather! Please try again in a few minutes.',
          resetAt: new Date(rateLimitResult.reset).toISOString()
        },
        { status: 429, headers }
      );
    }

    const body = await request.json();

    // Get API key from environment variables
    const apiKey = process.env.OPENAI_API_KEY;

    log.debug("API Key exists?", !!apiKey);
    log.debug("Request body:", JSON.stringify(body, null, 2));

    if (!apiKey) {
      log.error("OpenAI API key not found!");
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    // Convert Anthropic-style messages to OpenAI format
    const messages = body.messages.map((msg: any) => ({
      role: msg.role === 'assistant' ? 'assistant' : 'user',
      content: typeof msg.content === 'string' ? msg.content : msg.content[0]?.text || ''
    }));

    // 🌍 Dynamic Context - Where is the visitor & what's their vibe?
    const pathname = request.headers.get('referer')?.split('/').pop() || 'homepage';
    const pageContext = `\n\n**Current page:** ${pathname}\n**Conversation length:** ${body.messages.length} messages`;
    const visitorContext = body.personality ? `\n**Visitor chose personality:** ${body.personality}` : '';

    // 🧠 Combine Kai's soul + dynamic context
    const fullSystemPrompt = KAI_SYSTEM_PROMPT + pageContext + visitorContext;

    const systemMessage = {
      role: 'system' as const,
      content: fullSystemPrompt
    };

    // Call OpenAI API (GPT-4 Turbo - Kai's brain!)
    log.debug("Calling OpenAI API with GPT-4 Turbo...");
    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo',
      messages: [systemMessage, ...messages],
      max_tokens: 300,
      temperature: 0.8,
    });

    log.debug(`Response received successfully`);

    const responseText = completion.choices[0]?.message?.content || '';

    // Convert OpenAI response to Anthropic-style format (for backwards compatibility)
    const data = {
      id: completion.id,
      type: 'message',
      role: 'assistant',
      content: [
        {
          type: 'text',
          text: responseText
        }
      ],
      model: completion.model,
      usage: completion.usage
    };

    log.debug("Success! Returning response to client");

    // 🎯 SMART NOTIFICATION SYSTEM - Lead Scoring & Detection
    try {
      const userMessage = body.messages[body.messages.length - 1]?.content || '';
      const kaiResponse = responseText;
      const conversationHistory = body.messages || [];

      // 🔢 LEAD SCORING ALGORITHM (0-100 points)
      let leadScore = 0;
      const signals: string[] = [];

      // High-intent keywords for scoring
      const scoringSignals = {
        budget_mention: { regex: /\b(budget|pricing|price|cost|how much|estimate|\$\d+|dollar|afford)\b/i, points: 30, label: 'Budget Mentioned' },
        timeline_urgent: { regex: /\b(asap|urgent|now|immediately|today|this week|next week|soon)\b/i, points: 25, label: 'Urgent Timeline' },
        timeline_near: { regex: /\b(next month|this month|planning|launching|starting)\b/i, points: 20, label: 'Near-term Timeline' },
        ready_to_buy: { regex: /\b(ready|let's do|let's go|let's start|sign me up|I'm in|sold)\b/i, points: 35, label: 'Ready to Buy' },
        business_type: { regex: /\b(cafe|restaurant|salon|studio|clinic|practice|shop|store|boutique|agency)\b/i, points: 20, label: 'Business Type Identified' },
        specific_service: { regex: /\b(website|web design|app|ai system|chatbot|automation|branding|logo)\b/i, points: 15, label: 'Specific Service Request' },
        project_details: { regex: /\b(need|want|looking for|interested in|require|help with)\b/i, points: 15, label: 'Project Details Shared' },
        booking_intent: { regex: /\b(book|schedule|call|meeting|consultation|discuss|talk)\b/i, points: 25, label: 'Booking Intent' },
        return_visitor: { regex: null, points: 10, label: 'Return Visitor' }, // Checked via conversation length
        multiple_messages: { regex: null, points: 5, label: 'Engaged Conversation' }, // 3+ exchanges
      };

      // Score the current message
      Object.entries(scoringSignals).forEach(([key, signal]) => {
        if (signal.regex && signal.regex.test(userMessage)) {
          leadScore += signal.points;
          signals.push(signal.label);
        }
      });

      // Bonus: Return visitor (3+ messages in conversation)
      if (conversationHistory.length >= 6) { // 3 exchanges = 6 messages
        leadScore += scoringSignals.return_visitor.points;
        signals.push(scoringSignals.return_visitor.label);
      }

      // Bonus: Engaged conversation
      if (conversationHistory.length >= 4) {
        leadScore += scoringSignals.multiple_messages.points;
        signals.push(scoringSignals.multiple_messages.label);
      }

      // Cap at 100
      leadScore = Math.min(leadScore, 100);

      // 🌡️ Determine lead temperature
      let leadTemperature: 'hot' | 'warm' | 'cold' = 'cold';
      let urgencyEmoji = '❄️';

      if (leadScore >= 70) {
        leadTemperature = 'hot';
        urgencyEmoji = '🔥';
      } else if (leadScore >= 40) {
        leadTemperature = 'warm';
        urgencyEmoji = '🟡';
      }

      // 😊 SENTIMENT ANALYSIS - Detect visitor emotions
      let sentiment: 'excited' | 'frustrated' | 'confused' | 'neutral' = 'neutral';
      const sentimentIndicators: string[] = [];

      // Positive sentiment (excitement)
      if (/\b(love|amazing|awesome|perfect|great|excellent|wonderful|fantastic|excited|can't wait)\b/i.test(userMessage)) {
        sentiment = 'excited';
        sentimentIndicators.push('Excited/Positive');
      }

      // Negative sentiment (frustration)
      if (/\b(frustrated|annoyed|confused|difficult|hard|complicated|don't understand|help|stuck)\b/i.test(userMessage)) {
        sentiment = 'frustrated';
        sentimentIndicators.push('Frustrated/Needs Help');
      }

      // Confusion
      if (/\b(what|how|why|confused|not sure|don't know|which|help me understand)\b/i.test(userMessage) && userMessage.includes('?')) {
        if (sentiment !== 'frustrated') sentiment = 'confused';
        sentimentIndicators.push('Confused/Has Questions');
      }

      // Urgency (override to excited if positive words present)
      if (/\b(asap|urgent|immediately|now|hurry|quick)\b/i.test(userMessage)) {
        if (sentiment === 'neutral') sentiment = 'excited';
        sentimentIndicators.push('Urgent Need');
      }

      // Legacy notification type (for backwards compatibility)
      const highIntentSignals = {
        quote_interest: /\b(quote|pricing|price|cost|how much|estimate|budget)\b/i,
        lead_qualified: /\b(interested|want to|need|looking for|project|hire|work with)\b/i,
        high_intent: /\b(ready|when can|start|available|book|schedule|calendar|let's do)\b/i,
        business_inquiry: /\b(business|website|site|company|startup|cafe|restaurant|salon|studio|shop|store|service|build|create|develop|design)\b/i
      };

      let notificationType: string | null = null;

      // Check for high-intent signals (prioritized)
      if (highIntentSignals.high_intent.test(userMessage)) {
        notificationType = 'high_intent';
      } else if (highIntentSignals.business_inquiry.test(userMessage)) {
        notificationType = 'business_inquiry';
      } else if (highIntentSignals.lead_qualified.test(userMessage)) {
        notificationType = 'lead_qualified';
      } else if (highIntentSignals.quote_interest.test(userMessage)) {
        notificationType = 'quote_interest';
      }

      // Send notification if high intent detected OR lead score is significant
      const shouldNotify = notificationType || leadScore >= 30; // Notify on warm+ leads

      if (shouldNotify) {
        const pathname = request.headers.get('referer')?.split('/').pop() || 'unknown';

        // Don't await - fire and forget to not slow down chat response
        const notifyUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/kai/notify`;
        log.info(`📤 Sending notification to: ${notifyUrl}`);

        fetch(notifyUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            visitorMessage: userMessage,
            kaiResponse: kaiResponse,
            notificationType: notificationType || 'lead_scored',
            leadScore: {
              score: leadScore,
              temperature: leadTemperature,
              emoji: urgencyEmoji,
              signals: signals
            },
            sentiment: {
              emotion: sentiment,
              indicators: sentimentIndicators
            },
            visitorContext: {
              page: pathname,
              personality: body.personality || 'iroh',
              messagesCount: body.messages.length,
              conversationLength: conversationHistory.length,
              timeOnSite: 'Active conversation'
            }
          })
        })
        .then(res => {
          if (!res.ok) {
            log.error(`❌ Notification API returned ${res.status}: ${res.statusText}`);
            return res.text().then(text => log.error('Response body:', text));
          }
          log.info('✅ Notification API call successful');
        })
        .catch(err => log.error('❌ Failed to send notification:', err));

        log.info(`${urgencyEmoji} Lead scored: ${leadScore}/100 (${leadTemperature.toUpperCase()}) - Type: ${notificationType || 'scored'} - Message: "${userMessage.substring(0, 50)}..."`);
      }

      // 📊 LOG TO ANALYTICS (fire and forget)
      fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/kai/analytics`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'message_sent',
          data: {
            leadScore,
            sentiment,
            messageLength: userMessage.length,
            conversationLength: conversationHistory.length,
          },
        }),
      }).catch(err => log.error('Analytics logging failed:', err));
    } catch (notificationError) {
      // Don't let notification errors break the chat
      log.error('Notification error (non-critical):', notificationError);
    }

    // Add rate limit headers to successful response
    const headers = new Headers();
    addRateLimitHeaders(headers, rateLimitResult);

    return NextResponse.json(data, { headers });

  } catch (error) {
    log.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
