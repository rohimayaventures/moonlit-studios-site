import { NextRequest, NextResponse } from 'next/server';
import { createLogger } from "@/lib/logger";
import OpenAI from 'openai';
import {
  rateLimit,
  getClientIdentifier,
  addRateLimitHeaders,
  isAiLabDemoMode,
  getAiLabConfig,
} from '@/lib/rateLimit';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    // AI Lab specific rate limiting
    const identifier = getClientIdentifier(req);
    const config = getAiLabConfig('voice');
    const rateLimitResult = rateLimit(`ai-lab:voice:${identifier}`, config);

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
          text: "Demo transcription: Hi, I'd love to learn more about your AI Lab demos and how you built them.",
          success: true,
        },
        { headers }
      );
    }

    const formData = await req.formData();
    const audioFile = formData.get('audio') as File;

    if (!audioFile) {
      return NextResponse.json(
        { error: 'No audio file provided' },
        { status: 400 }
      );
    }

    // Convert File to format Whisper expects
    const transcription = await openai.audio.transcriptions.create({
      file: audioFile,
      model: 'whisper-1',
      language: 'en',
    });

    const headers = new Headers();
    addRateLimitHeaders(headers, rateLimitResult);

    return NextResponse.json({
      text: transcription.text,
      success: true,
    }, { headers });
  } catch (error) {
    console.error('Transcription error:', error);
    return NextResponse.json(
      { error: 'Failed to transcribe audio' },
      { status: 500 }
    );
  }
}
