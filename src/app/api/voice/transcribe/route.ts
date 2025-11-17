import { NextRequest, NextResponse } from 'next/server';
import { createLogger } from "@/lib/logger";
import OpenAI from 'openai';
import { rateLimit, getClientIdentifier, rateLimitConfigs, addRateLimitHeaders } from '@/lib/rateLimit';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    // Rate limiting - AI operations
    const identifier = getClientIdentifier(req);
    const rateLimitResult = rateLimit(identifier, rateLimitConfigs.ai);

    if (!rateLimitResult.success) {
      const headers = new Headers();
      addRateLimitHeaders(headers, rateLimitResult);
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers }
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

    return NextResponse.json({
      text: transcription.text,
      success: true,
    });
  } catch (error) {
    console.error('Transcription error:', error);
    return NextResponse.json(
      { error: 'Failed to transcribe audio' },
      { status: 500 }
    );
  }
}
