import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

/**
 * GET /api/testimonials/list
 *
 * Returns approved testimonials for display on the site.
 * Query parameters:
 * - service: Filter by specific service (optional)
 * - limit: Number of testimonials to return (default: 6)
 * - featured: Filter for featured testimonials only (optional)
 */

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const service = searchParams.get('service');
    const limit = parseInt(searchParams.get('limit') || '6');
    const featuredOnly = searchParams.get('featured') === 'true';

    // Build Supabase query
    let query = supabase
      .from('testimonials')
      .select('*')
      .eq('approved', true) // Only show approved testimonials
      .order('created_at', { ascending: false });

    // Apply filters
    if (service) {
      query = query.eq('project_type', service);
    }

    if (featuredOnly) {
      query = query.eq('featured', true);
    }

    // Apply limit
    query = query.limit(limit);

    // Execute query
    const { data: testimonials, error: dbError, count } = await query;

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Failed to fetch testimonials', details: dbError.message },
        { status: 500 }
      );
    }

    // Transform data to match frontend expectations
    const formattedTestimonials = testimonials?.map(t => ({
      id: t.id,
      name: t.name,
      role: t.role || '',
      company: t.company || '',
      rating: t.rating,
      feedback: t.content,
      service: t.project_type || 'General Consultation',
      submittedAt: t.created_at,
      status: 'approved' as const,
      featured: t.featured
    })) || [];

    return NextResponse.json({
      success: true,
      testimonials: formattedTestimonials,
      count: formattedTestimonials.length,
      total: count || formattedTestimonials.length,
    });

  } catch (error: any) {
    console.error('Failed to fetch testimonials:', error);
    return NextResponse.json(
      { error: 'Failed to fetch testimonials', details: error.message },
      { status: 500 }
    );
  }
}
