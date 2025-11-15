import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const RECIPE_SYSTEM_PROMPT = `You are a creative culinary AI assistant for Moonlit Studios' Author & Ghostwriting Studio. You help generate unique recipes that blend Mumbai and Southern American cuisines - the signature style of our published interactive cookbooks.

**CULINARY PHILOSOPHY:**
- Fusion of Mumbai spices and Southern comfort
- Interactive storytelling through food
- Family-friendly with adventurous options
- Practical ingredients, extraordinary results

**RESPONSE FORMAT:**
When given ingredients or a meal idea, provide:
1. **Recipe Name** - Creative, fusion-inspired title
2. **Story** - Brief 2-3 sentence narrative connecting the dish to its cultural fusion
3. **Ingredients** - Bulleted list with measurements
4. **Instructions** - Numbered steps, clear and concise
5. **Fusion Notes** - What makes this dish unique (Mumbai meets Southern)

**TONE:**
- Warm and inviting
- Educational but not preachy
- Celebrate both cuisines equally
- Encourage experimentation

Keep responses under 400 words for readability.`;

export async function POST(req: NextRequest) {
  try {
    const { ingredients, mealType, dietaryRestrictions } = await req.json();

    if (!ingredients || typeof ingredients !== 'string') {
      return NextResponse.json(
        { error: 'Invalid ingredients' },
        { status: 400 }
      );
    }

    const dietaryInfo = dietaryRestrictions
      ? `Dietary restrictions: ${dietaryRestrictions}`
      : 'No dietary restrictions specified';

    const mealInfo = mealType
      ? `Meal type: ${mealType}`
      : 'Any meal type';

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: RECIPE_SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: `${dietaryInfo}
${mealInfo}

Available ingredients: ${ingredients}

Create a fusion recipe that blends Mumbai and Southern American cuisines using these ingredients. Follow the response format with recipe name, story, ingredients, instructions, and fusion notes.`,
        },
      ],
    });

    const recipeText = response.content[0].type === 'text'
      ? response.content[0].text
      : 'Unable to generate recipe';

    return NextResponse.json({
      recipe: {
        content: recipeText,
        fusion: 'Mumbai x Southern American',
      },
      success: true,
    });
  } catch (error) {
    console.error('Recipe generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate recipe' },
      { status: 500 }
    );
  }
}
