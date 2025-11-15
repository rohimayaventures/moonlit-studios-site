import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

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

    return NextResponse.json({
      triage: {
        level: triageResult.level as TriageLevel,
        recommendation: triageResult.recommendation,
        reasoning: triageResult.reasoning,
      },
      success: true,
    });
  } catch (error) {
    console.error('Triage error:', error);
    return NextResponse.json(
      { error: 'Failed to analyze symptoms' },
      { status: 500 }
    );
  }
}
