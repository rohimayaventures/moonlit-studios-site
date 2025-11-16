import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabase";
import { createNotionLead } from "@/lib/notion";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, serviceType, budget, timeline, details } = body;

    // Validation
    if (!name || !email || !details) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, and project details are required." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Save to Supabase leads table
    const { data: leadData, error: dbError } = await supabaseAdmin
      .from('leads')
      .insert({
        source: 'contact_form',
        name,
        email,
        company: null,
        message: details,
        metadata: {
          serviceType,
          budget,
          timeline
        }
      })
      .select()
      .single();

    if (dbError) {
      console.error('Supabase error:', dbError);
      // Continue anyway - don't fail the whole request if DB fails
    }

    // Sync to Notion CRM
    const notionPageId = await createNotionLead({
      name,
      email,
      source: 'Contact Form',
      service: serviceType || undefined,
      budget: budget || undefined,
      priority: '⚡ Warm',
      notes: `Contact Form Inquiry:\n\n${details}\n\nTimeline: ${timeline || 'Not specified'}`,
      supabaseId: leadData?.id
    });

    // Update lead with Notion page ID if successful
    if (notionPageId && leadData) {
      await supabaseAdmin
        .from('leads')
        .update({ notion_page_id: notionPageId })
        .eq('id', leadData.id);
    }

    // Send notification email to Moonlit Studios
    const ownerEmail = await resend.emails.send({
      from: "Moonlit Studios Contact Form <hello@moonlstudios.com>",
      to: ["hello@moonlstudios.com"],
      subject: `New Inquiry from ${name} - ${serviceType || "General Inquiry"}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #4A9B9B 0%, #3AA7A3 100%);
                color: white;
                padding: 30px;
                border-radius: 12px 12px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 600;
              }
              .header p {
                margin: 10px 0 0;
                font-size: 14px;
                opacity: 0.95;
              }
              .content {
                background: #f8f9fa;
                padding: 30px;
                border-radius: 0 0 12px 12px;
              }
              .field {
                margin-bottom: 20px;
              }
              .field-label {
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: #666;
                font-weight: 600;
                margin-bottom: 5px;
              }
              .field-value {
                font-size: 16px;
                color: #0A1128;
                background: white;
                padding: 12px;
                border-radius: 8px;
                border-left: 3px solid #4A9B9B;
              }
              .details-box {
                background: white;
                padding: 15px;
                border-radius: 8px;
                border-left: 3px solid #FFD700;
                white-space: pre-wrap;
                font-size: 15px;
                line-height: 1.6;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 2px solid #e0e0e0;
                text-align: center;
                font-size: 12px;
                color: #666;
              }
              .footer a {
                color: #4A9B9B;
                text-decoration: none;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>🌙 New Contact Form Submission</h1>
              <p>Someone is interested in working with Moonlit Studios!</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Name</div>
                <div class="field-value">${name}</div>
              </div>

              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value">
                  <a href="mailto:${email}" style="color: #4A9B9B; text-decoration: none;">${email}</a>
                </div>
              </div>

              ${serviceType ? `
              <div class="field">
                <div class="field-label">Service Interest</div>
                <div class="field-value">${serviceType}</div>
              </div>
              ` : ''}

              ${budget ? `
              <div class="field">
                <div class="field-label">Budget Range</div>
                <div class="field-value">${budget}</div>
              </div>
              ` : ''}

              ${timeline ? `
              <div class="field">
                <div class="field-label">Timeline</div>
                <div class="field-value">${timeline}</div>
              </div>
              ` : ''}

              <div class="field">
                <div class="field-label">Project Details</div>
                <div class="details-box">${details}</div>
              </div>

              <div class="footer">
                <p>Submitted from <a href="https://moonlstudios.com/contact">moonlstudios.com/contact</a></p>
                <p>🌙 Where Dreams Surface and Ideas Flow</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Send auto-response to the person who submitted the form
    const userEmail = await resend.emails.send({
      from: "Moonlit Studios <hello@moonlstudios.com>",
      to: [email],
      subject: "Thank you for reaching out to Moonlit Studios 🌙",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.7;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #0A1128 0%, #1B4965 50%, #4A9B9B 100%);
                color: white;
                padding: 40px 30px;
                border-radius: 12px 12px 0 0;
                text-align: center;
              }
              .moon {
                font-size: 48px;
                margin-bottom: 10px;
              }
              .header h1 {
                margin: 0;
                font-size: 26px;
                font-weight: 600;
              }
              .header p {
                margin: 10px 0 0;
                font-size: 14px;
                opacity: 0.9;
                font-style: italic;
              }
              .content {
                background: #f8f9fa;
                padding: 35px;
                border-radius: 0 0 12px 12px;
              }
              .greeting {
                font-size: 18px;
                color: #0A1128;
                margin-bottom: 20px;
              }
              .message {
                font-size: 16px;
                color: #333;
                line-height: 1.8;
                margin-bottom: 15px;
              }
              .quote-box {
                background: linear-gradient(135deg, #4A9B9B15 0%, #3AA7A315 100%);
                border-left: 4px solid #4A9B9B;
                padding: 20px;
                margin: 25px 0;
                border-radius: 8px;
                font-style: italic;
                color: #1B4965;
              }
              .cta-box {
                background: white;
                padding: 20px;
                border-radius: 8px;
                margin: 25px 0;
                text-align: center;
                border: 2px solid #FFD700;
              }
              .cta-box h3 {
                margin: 0 0 10px;
                color: #0A1128;
                font-size: 18px;
              }
              .cta-box p {
                margin: 0;
                color: #666;
                font-size: 14px;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 2px solid #e0e0e0;
                text-align: center;
                font-size: 13px;
                color: #666;
              }
              .footer a {
                color: #4A9B9B;
                text-decoration: none;
                font-weight: 500;
              }
              .signature {
                margin-top: 30px;
                font-size: 15px;
                color: #0A1128;
              }
              .signature strong {
                color: #4A9B9B;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <div class="moon">🌙</div>
              <h1>Thank You for Reaching Out!</h1>
              <p>Where Dreams Surface and Ideas Flow</p>
            </div>
            <div class="content">
              <div class="greeting">Hi ${name},</div>

              <div class="message">
                Thank you for getting in touch! I've received your inquiry and I'm excited to learn more about your project.
              </div>

              <div class="message">
                I typically respond within 24-48 hours. In the meantime, here's what you can expect:
              </div>

              <div class="cta-box">
                <h3>What happens next?</h3>
                <p>I'll review your project details, check if we're a good fit, and reach out with next steps, suggested timelines, and any questions I might have.</p>
              </div>

              <div class="quote-box">
                💧 "It is important to draw wisdom from many different places. If we take it from only one place, it becomes rigid and stale." — Uncle Iroh
              </div>

              <div class="message">
                If you have any additional thoughts or materials you'd like to share in the meantime, feel free to reply to this email directly.
              </div>

              <div class="signature">
                Looking forward to connecting,<br/>
                <strong>The Nurse Who Codes</strong><br/>
                Moonlit Studios
              </div>

              <div class="footer">
                <p>
                  <a href="https://moonlstudios.com">moonlstudios.com</a> •
                  <a href="mailto:hello@moonlstudios.com">hello@moonlstudios.com</a>
                </p>
                <p style="margin-top: 15px; font-size: 12px; color: #999;">
                  Creative Design • HealthTech Development • AI Innovation • Consulting • Ghostwriting
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      {
        ok: true,
        success: true,
        message: "Your inquiry has been sent! Check your email for confirmation.",
        data: leadData || {
          ownerEmailId: ownerEmail.data?.id,
          userEmailId: userEmail.data?.id
        },
        leadId: leadData?.id,
        notionPageId
      },
      { status: 200 }
    );

  } catch (error: unknown) {
    console.error("Contact form error:", error);

    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";

    return NextResponse.json(
      {
        error: "Failed to send your inquiry. Please try again or email hello@moonlstudios.com directly.",
        details: errorMessage
      },
      { status: 500 }
    );
  }
}
