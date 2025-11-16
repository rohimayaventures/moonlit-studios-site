import { NextRequest, NextResponse } from 'next/server';
import { testNotionConnection } from '@/lib/notion';

/**
 * GET /api/notion/test
 *
 * Test endpoint to verify Notion CRM connection
 */
export async function GET(request: NextRequest) {
  try {
    const result = await testNotionConnection();

    if (result.success) {
      return NextResponse.json({
        ok: true,
        message: result.message,
        database: result.database
      }, { status: 200 });
    } else {
      return NextResponse.json({
        ok: false,
        message: result.message,
        error: result.error
      }, { status: 500 });
    }

  } catch (error: any) {
    console.error('Notion test error:', error);
    return NextResponse.json({
      ok: false,
      message: 'Failed to test Notion connection',
      error: error.message
    }, { status: 500 });
  }
}
