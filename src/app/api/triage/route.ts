import { NextRequest, NextResponse } from 'next/server';
import { createLogger } from "@/lib/logger";
import Anthropic from '@anthropic-ai/sdk';
import {
  rateLimit,
  getClientIdentifier,
  addRateLimitHeaders,
  isAiLabDemoMode,
  getAiLabConfig,
} from '@/lib/rateLimit';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

type TriageLevel = 'emergency' | 'urgent' | 'routine' | 'selfcare';

const TRIAGE_SYSTEM_PROMPT = `You are a healthcare triage AI assistant. Based on the symptoms described, provide a triage recommendation.

**IMPORTANT DISCLAIMERS:**
- This is a demonstration only
- NOT a substitute for professional medical advice
- Always recommend consulting healthcare providers for actual medical concerns

**TRIAGE LEVELS:**

1. **EMERGENCY** - Seek immediate medical attention (911/ER)
   - Chest pain, difficulty breathing, severe bleeding
   - Loss of consciousness, stroke symptoms
   - Severe allergic reactions, poisoning
   - Severe trauma or burns

2. **URGENT** - See a doctor within 24 hours
   - High fever (>103°F), persistent vomiting
   - Moderate pain, suspected infections
   - Injuries requiring evaluation

3. **ROUTINE** - Schedule appointment within a few days
   - Mild symptoms, chronic condition management
   - Follow-up care, non-urgent concerns
   - Preventive care questions

4. **SELFCARE** - Manage at home with OTC remedies
   - Minor cold/flu symptoms
   - Mild headaches, minor aches
   - Conditions improving on their own

**RESPONSE FORMAT:**
You must respond with a JSON object containing:
{
  "level": "emergency|urgent|routine|selfcare",
  "recommendation": "Brief, clear recommendation",
  "reasoning": "Why this triage level was chosen"
}

Be conservative - when in doubt, recommend higher level of care.`;

export async function POST(req: NextRequest) {
  try {
    // AI Lab specific rate limiting
    const identifier = getClientIdentifier(req);
    const config = getAiLabConfig('triage');
    const rateLimitResult = rateLimit(`ai-lab:triage:${identifier}`, config);

    if (!rateLimitResult.success) {
      const headers = new Headers();
      addRateLimitHeaders(headers, rateLimitResult);
      return NextResponse.json(
        {
          error: 'rate_limited',
          message: 'This demo has reached its safe usage limit. Please try again in a few minutes.',
        },
        { status: 429, headers }
      );
    }

    // Demo mode - return mocked response
    if (isAiLabDemoMode()) {
      const headers = new Headers();
      addRateLimitHeaders(headers, rateLimitResult);
      return NextResponse.json(
        {
          triage: {
            level: 'routine',
            recommendation: "Demo mode: Based on your description, this would typically be appropriate for a routine clinic visit within the next few days.",
            reasoning: "This demo illustrates how a clinical triage assistant analyzes symptoms while encouraging follow-up with a real healthcare provider. Always consult a licensed professional for medical advice.",
          },
          success: true,
        },
        { headers }
      );
    }

    const { symptoms, age } = await req.json();

    if (!symptoms || typeof symptoms !== 'string') {
      return NextResponse.json(
        { error: 'Invalid symptoms' },
        { status: 400 }
      );
    }

    const ageInfo = age ? `Patient age: ${age}` : 'Age not provided';

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 512,
      system: TRIAGE_SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: `${ageInfo}

Symptoms: ${symptoms}

Provide triage recommendation in JSON format.`,
        },
      ],
    });

    const responseText = response.content[0].type === 'text'
      ? response.content[0].text
      : '{"level": "routine", "recommendation": "Unable to process. Please consult a healthcare professional.", "reasoning": "System error"}';

    // Parse JSON response
    let triageResult;
    try {
      // Extract JSON from response (Claude might wrap it in markdown)
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      const jsonText = jsonMatch ? jsonMatch[0] : responseText;
      triageResult = JSON.parse(jsonText);
    } catch (parseError) {
      // Fallback if JSON parsing fails
      triageResult = {
        level: 'routine',
        recommendation: 'Please consult a healthcare professional for proper evaluation.',
        reasoning: responseText,
      };
    }

    const headers = new Headers();
    addRateLimitHeaders(headers, rateLimitResult);

    return NextResponse.json({
      triage: {
        level: triageResult.level as TriageLevel,
        recommendation: triageResult.recommendation,
        reasoning: triageResult.reasoning,
      },
      success: true,
    }, { headers });
  } catch (error) {
    console.error('Triage error:', error);
    return NextResponse.json(
      { error: 'Failed to analyze symptoms' },
      { status: 500 }
    );
  }
}
