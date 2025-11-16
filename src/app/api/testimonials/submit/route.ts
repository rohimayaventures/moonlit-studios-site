import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabase';

const resend = new Resend(process.env.RESEND_API_KEY);
const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || 'hello@moonlstudios.com';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, role, company, rating, feedback, service, eventId } = body;

    // Validate required fields
    if (!name || !email || !rating || !feedback) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Save testimonial to Supabase
    const { data: testimonial, error: dbError } = await supabase
      .from('testimonials')
      .insert({
        name,
        email,
        role: role || null,
        company: company || null,
        rating,
        content: feedback,
        project_type: service || 'General Consultation',
        approved: false, // Requires admin approval
        featured: false
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Failed to save testimonial', details: dbError.message },
        { status: 500 }
      );
    }

    // Create lead entry for CRM tracking
    await supabase.from('leads').insert({
      source: 'testimonial',
      name,
      email,
      company: company || null,
      message: feedback,
      metadata: {
        rating,
        service,
        eventId,
        testimonial_id: testimonial.id
      }
    });

    // Send notification to you that a new testimonial was submitted
    await resend.emails.send({
      from: 'Moonlit Studios <notifications@moonlstudios.com>',
      to: BUSINESS_EMAIL,
      subject: `⭐ New Testimonial Submitted: ${rating}/5 stars from ${name}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9;">New Testimonial Submitted!</h2>

          <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Client:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${role ? `<p><strong>Role:</strong> ${role}</p>` : ''}
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Rating:</strong> ${'⭐'.repeat(rating)} (${rating}/5)</p>
          </div>

          <div style="background: #ffffff; padding: 20px; border-left: 4px solid #0ea5e9; margin: 20px 0;">
            <h3 style="margin-top: 0;">Feedback:</h3>
            <p style="font-style: italic; color: #475569;">"${feedback}"</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 14px;">
              <strong>Next Steps:</strong><br>
              1. Review the testimonial<br>
              2. If approved, it will automatically appear on your testimonials page<br>
              3. Consider reaching out to thank them personally
            </p>
          </div>

          <div style="margin-top: 20px; text-align: center;">
            <a href="https://moonlstudios.com/admin/testimonials"
               style="display: inline-block; background: #0ea5e9; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600;">
              Review Testimonial
            </a>
          </div>
        </div>
      `,
    });

    // Send thank you email to client
    await resend.emails.send({
      from: 'Moonlit Studios <hello@moonlstudios.com>',
      to: email,
      subject: 'Thank you for your feedback! 🙏',
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9;">Thank You, ${name}!</h2>

          <p style="font-size: 16px; line-height: 1.6; color: #334155;">
            I truly appreciate you taking the time to share your feedback about our work together.
            Your insights help me continue to improve and better serve healthcare innovators like you.
          </p>

          <div style="background: #f0fdfa; padding: 20px; border-radius: 8px; border-left: 4px solid #14b8a6; margin: 20px 0;">
            <p style="margin: 0; color: #0f766e;">
              <strong>Your ${rating}-star review means the world to me!</strong>
              ${rating >= 4 ? "I'm thrilled you had a great experience." : "I'll use your feedback to keep improving."}
            </p>
          </div>

          <p style="font-size: 16px; line-height: 1.6; color: #334155;">
            If you know other healthcare professionals or organizations working on innovative projects,
            I'd be honored if you'd consider referring them my way.
          </p>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 14px; margin: 0;">
              Best regards,<br>
              <strong>Destiny</strong><br>
              <em>The Nurse Who Codes</em><br>
              Moonlit Studios
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you for your feedback!',
      testimonialId: testimonial?.id,
    });

  } catch (error: any) {
    console.error('Testimonial submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit testimonial', details: error.message },
      { status: 500 }
    );
  }
}
