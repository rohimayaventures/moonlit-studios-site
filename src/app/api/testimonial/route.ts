import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { createNotionLead } from '@/lib/notion';
import { notifyNewTestimonial } from '@/lib/slack';

/**
 * POST /api/testimonial
 *
 * Testimonial submission endpoint that saves to both Supabase and Notion CRM
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      company,
      role,
      rating,
      content,
      project_type,
      approved,
      featured
    } = body;

    // Validate required fields
    if (!name || !email || !rating || !content) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, rating, content' },
        { status: 400 }
      );
    }

    // Validate rating range
    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }

    // Insert into Supabase testimonials table
    const { data, error } = await supabaseAdmin
      .from('testimonials')
      .insert({
        name,
        email,
        company: company || null,
        role: role || null,
        rating,
        content,
        project_type: project_type || null,
        approved: approved ?? false, // Default to false (requires approval)
        featured: featured ?? false
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
        source: 'testimonial',
        name,
        email,
        company: company || null,
        message: content,
        metadata: {
          testimonialId: data.id,
          rating,
          role,
          project_type
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
      source: 'Testimonial',
      service: project_type || undefined,
      priority: rating >= 5 ? '🔥 Hot' : rating >= 4 ? '⚡ Warm' : '❄️ Cold',
      status: '🎉 Won', // They're already a satisfied client
      notes: `Testimonial Submission (${rating}/5 ⭐):\n\n${content}\n\n${role ? `Role: ${role}` : ''}${company ? `\nCompany: ${company}` : ''}`,
      supabaseId: leadData?.id || data.id
    });

    // Update lead with Notion page ID if successful
    if (notionPageId && leadData) {
      await supabaseAdmin
        .from('leads')
        .update({ notion_page_id: notionPageId })
        .eq('id', leadData.id);
    }

    // Send Slack notification
    await notifyNewTestimonial({
      name,
      email,
      company,
      role,
      rating,
      content,
      project_type
    });

    return NextResponse.json({
      ok: true,
      data,
      leadId: leadData?.id,
      notionPageId
    }, { status: 201 });

  } catch (error: any) {
    console.error('Testimonial submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}
