import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { image } = await req.json();

    if (!image || typeof image !== 'string') {
      return NextResponse.json(
        { error: 'Invalid image data' },
        { status: 400 }
      );
    }

    // Extract base64 data and media type
    const matches = image.match(/^data:(.+);base64,(.+)$/);
    if (!matches) {
      return NextResponse.json(
        { error: 'Invalid image format' },
        { status: 400 }
      );
    }

    const mediaType = matches[1];
    const base64Data = matches[2];

    // Analyze image with Claude
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: mediaType as 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp',
                data: base64Data,
              },
            },
            {
              type: 'text',
              text: `Analyze this image in detail. Provide:
1. A brief description of what you see
2. Key objects or elements present
3. The scene or context
4. Dominant colors
5. Any text visible in the image

Format your response as a natural paragraph, then list specific details.`,
            },
          ],
        },
      ],
    });

    const analysisText = response.content[0].type === 'text'
      ? response.content[0].text
      : 'Unable to analyze image';

    return NextResponse.json({
      analysis: {
        description: analysisText,
        objects: [],
        scene: '',
        colors: [],
      },
      success: true,
    });
  } catch (error) {
    console.error('Vision analysis error:', error);
    return NextResponse.json(
      { error: 'Failed to analyze image' },
      { status: 500 }
    );
  }
}
