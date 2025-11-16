import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { createNotionLead } from '@/lib/notion';
import { notifyNewQuote } from '@/lib/slack';

/**
 * POST /api/quote
 *
 * Quote submission endpoint that saves to both Supabase and Notion CRM
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      company,
      project_type,
      budget,
      timeline,
      description,
      features,
      ai_generated_quote,
      estimated_cost,
      estimated_timeline,
      status,
      notes
    } = body;

    // Validate required fields
    if (!name || !email || !project_type || !description) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, project_type, description' },
        { status: 400 }
      );
    }

    // Generate quote ID if not provided
    const quoteId = `QT-${Date.now()}-${crypto.randomUUID().substring(0, 8)}`;

    // Insert into Supabase quotes table
    const { data, error } = await supabaseAdmin
      .from('quotes')
      .insert({
        id: quoteId,
        name,
        email,
        company: company || null,
        project_type,
        budget: budget || null,
        timeline: timeline || null,
        description,
        features: features || null,
        ai_generated_quote: ai_generated_quote || null,
        estimated_cost: estimated_cost || null,
        estimated_timeline: estimated_timeline || null,
        status: status || 'new',
        notes: notes || null
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Database error', details: error.message },
        { status: 500 }
      );
    }

    // Create lead entry in Supabase
    const { data: leadData, error: leadError } = await supabaseAdmin
      .from('leads')
      .insert({
        source: 'quote_request',
        name,
        email,
        company: company || null,
        message: description,
        metadata: {
          quoteId,
          project_type,
          budget,
          timeline,
          estimated_cost,
          estimated_timeline
        }
      })
      .select()
      .single();

    if (leadError) {
      console.error('Lead creation error:', leadError);
      // Continue anyway - don't fail the whole request
    }

    // Sync to Notion CRM
    const notionPageId = await createNotionLead({
      name,
      email,
      source: 'Quote Form',
      service: project_type,
      budget: budget || undefined,
      quoteAmount: estimated_cost ? `$${estimated_cost}` : undefined,
      priority: estimated_cost && estimated_cost > 10000 ? '🔥 Hot' : '⚡ Warm',
      notes: `${description}\n\nTimeline: ${timeline || 'Not specified'}\nFeatures: ${features ? JSON.stringify(features) : 'Not specified'}`,
      supabaseId: leadData?.id || quoteId
    });

    // Update lead with Notion page ID if successful
    if (notionPageId && leadData) {
      await supabaseAdmin
        .from('leads')
        .update({ notion_page_id: notionPageId })
        .eq('id', leadData.id);
    }

    // Send Slack notification
    await notifyNewQuote({
      name,
      email,
      company,
      project_type,
      budget,
      timeline,
      description,
      estimated_cost
    });

    return NextResponse.json({
      ok: true,
      data,
      leadId: leadData?.id,
      notionPageId
    }, { status: 201 });

  } catch (error: any) {
    console.error('Quote submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}
