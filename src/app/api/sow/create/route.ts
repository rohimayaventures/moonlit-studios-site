/**
 * API Route: Create SOW in Notion
 *
 * POST /api/sow/create
 *
 * Accepts SOW data and creates a Statement of Work page in Notion.
 * Returns the Notion page URL on success.
 *
 * NOTE: This route currently has no authentication.
 * TODO: Add admin-only authentication before production use.
 */

import { NextRequest, NextResponse } from 'next/server';
import { createSowPage, SowInput } from '@/lib/notion-sow';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = (await request.json()) as SowInput;

    // Basic validation – ensure required fields exist
    if (!body.clientName || !body.projectName || !body.projectOverview) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required SOW fields (clientName, projectName, projectOverview)',
        },
        { status: 400 }
      );
    }

    // Create SOW page in Notion
    const pageUrl = await createSowPage(body);

    return NextResponse.json({
      success: true,
      pageUrl,
      message: 'SOW created successfully in Notion',
    });
  } catch (error: any) {
    console.error('❌ Error creating SOW via API:', error);

    // Return detailed error for debugging
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Internal server error',
        details: error?.code || undefined,
      },
      { status: 500 }
    );
  }
}
