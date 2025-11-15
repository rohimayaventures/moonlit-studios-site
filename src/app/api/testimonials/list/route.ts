import { NextRequest, NextResponse } from 'next/server';

/**
 * GET /api/testimonials/list
 *
 * Returns approved testimonials for display on the site.
 * Query parameters:
 * - service: Filter by specific service (optional)
 * - limit: Number of testimonials to return (default: 6)
 * - status: Filter by status (default: 'approved')
 *
 * TODO: Replace with actual database query
 * For now, this returns mock data. Once you set up a database (Supabase, Firebase, etc.),
 * replace the mockTestimonials array with a real database query.
 */

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const service = searchParams.get('service');
    const limit = parseInt(searchParams.get('limit') || '6');
    const status = searchParams.get('status') || 'approved';

    // TODO: Replace with database query
    // Example: const testimonials = await db.testimonials.findMany({ where: { status: 'approved' } })

    const mockTestimonials = [
      {
        id: 'testimonial_1',
        name: 'Dr. Sarah Chen',
        role: 'Chief Medical Officer',
        company: 'HealthTech Innovations',
        rating: 5,
        feedback: 'Working with a nurse-turned-developer who truly understands clinical workflows was game-changing. The discovery call alone surfaced insights that saved us months of development time.',
        service: 'Healthcare Tech Development',
        submittedAt: '2025-01-10T14:30:00Z',
        status: 'approved' as const,
      },
      {
        id: 'testimonial_2',
        name: 'Marcus Williams',
        role: 'Founder & CEO',
        company: 'MedConnect',
        rating: 5,
        feedback: 'Destiny\'s unique combination of healthcare expertise and technical skills is rare. She didn\'t just build what we asked for—she anticipated problems we didn\'t even know we had.',
        service: 'AI Innovation & Automation',
        submittedAt: '2025-01-08T10:15:00Z',
        status: 'approved' as const,
      },
      {
        id: 'testimonial_3',
        name: 'Jennifer Park',
        role: 'Director of Product',
        company: 'PatientFirst',
        rating: 5,
        feedback: 'The consultation was incredibly thorough. Destiny asked the right questions to understand our vision and provided actionable recommendations we could implement immediately.',
        service: 'General Consultation',
        submittedAt: '2025-01-05T16:45:00Z',
        status: 'approved' as const,
      },
      {
        id: 'testimonial_4',
        name: 'Dr. James Rodriguez',
        role: 'Medical Director',
        company: 'CareSync',
        rating: 4,
        feedback: 'Professional, knowledgeable, and truly passionate about improving healthcare through technology. The automated systems she built have streamlined our entire workflow.',
        service: 'Healthcare Tech Development',
        submittedAt: '2025-01-03T09:20:00Z',
        status: 'approved' as const,
      },
      {
        id: 'testimonial_5',
        name: 'Emily Foster',
        role: 'Healthcare Entrepreneur',
        company: '',
        rating: 5,
        feedback: 'I came in with a vague idea and left with a clear roadmap. Destiny\'s ability to translate healthcare needs into technical solutions is unmatched.',
        service: 'General Consultation',
        submittedAt: '2025-01-01T11:00:00Z',
        status: 'approved' as const,
      },
      {
        id: 'testimonial_6',
        name: 'Michael Thompson',
        role: 'VP of Innovation',
        company: 'HealthBridge',
        rating: 5,
        feedback: 'The AI-powered automation she implemented has transformed how we handle patient data. Her insights into both the clinical and technical aspects were invaluable.',
        service: 'AI Innovation & Automation',
        submittedAt: '2024-12-28T13:30:00Z',
        status: 'approved' as const,
      },
    ];

    // Filter by service if specified
    let filteredTestimonials = mockTestimonials.filter(t => t.status === status);

    if (service) {
      filteredTestimonials = filteredTestimonials.filter(
        t => t.service === service
      );
    }

    // Sort by most recent first
    filteredTestimonials.sort((a, b) =>
      new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    );

    // Apply limit
    const limitedTestimonials = filteredTestimonials.slice(0, limit);

    return NextResponse.json({
      success: true,
      testimonials: limitedTestimonials,
      count: limitedTestimonials.length,
      total: filteredTestimonials.length,
    });

  } catch (error: any) {
    console.error('Failed to fetch testimonials:', error);
    return NextResponse.json(
      { error: 'Failed to fetch testimonials', details: error.message },
      { status: 500 }
    );
  }
}
