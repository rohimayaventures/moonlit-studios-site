import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Get API key from environment variables
    const apiKey = process.env.ANTHROPIC_API_KEY;
    
    console.log("==== API ROUTE DEBUG ====");
    console.log("🔑 API Key exists?", !!apiKey);
    console.log("🔑 API Key length:", apiKey?.length || 0);
    console.log("🔑 First 15 chars:", apiKey?.substring(0, 15) || "NOT FOUND");
    console.log("📦 Request body:", JSON.stringify(body, null, 2));
    console.log("========================");
    
    if (!apiKey) {
      console.error("❌ API key not found!");
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    // Call Anthropic API from the server (no CORS issues!)
    console.log("📤 Calling Anthropic API...");
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify(body),
    });

    console.log("📥 Response status:", response.status);
    console.log("📥 Response ok?", response.ok);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("❌ Anthropic API Error:", JSON.stringify(errorData, null, 2));
      return NextResponse.json(
        { error: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log("✅ Success! Returning response to client");
    return NextResponse.json(data);
    
  } catch (error) {
    console.error('💥 API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}