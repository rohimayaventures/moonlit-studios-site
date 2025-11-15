import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Calendly Webhook Handler
 *
 * This endpoint receives real-time notifications from Calendly when:
 * - Someone books a consultation (invitee.created)
 * - Someone cancels a booking (invitee.canceled)
 * - Someone reschedules (invitee.canceled + invitee.created)
 *
 * Automated Actions:
 * 1. Send you an instant notification email
 * 2. Send the client a personalized welcome email
 * 3. Add them to your CRM/follow-up system
 * 4. Log the event for analytics
 *
 * Setup Instructions:
 * 1. Go to https://calendly.com/integrations/webhooks
 * 2. Click "Create Webhook"
 * 3. Set URL to: https://moonlstudios.com/api/calendly/webhook
 * 4. Subscribe to events: invitee.created, invitee.canceled
 * 5. Copy the webhook signing key and add to .env.local as CALENDLY_WEBHOOK_SECRET
 */

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const event = payload.event;
    const eventType = payload.event;

    console.log('Calendly Webhook received:', eventType);

    // Handle different event types
    switch (eventType) {
      case 'invitee.created':
        await handleNewBooking(payload);
        break;

      case 'invitee.canceled':
        await handleCancellation(payload);
        break;

      default:
        console.log('Unhandled event type:', eventType);
    }

    return NextResponse.json({ success: true, received: true });

  } catch (error: any) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed', details: error.message },
      { status: 500 }
    );
  }
}

// Handle new booking
async function handleNewBooking(payload: any) {
  const invitee = payload.payload;
  const eventDetails = invitee.event;

  const inviteeName = invitee.name;
  const inviteeEmail = invitee.email;
  const eventTime = new Date(eventDetails.start_time);
  const eventName = eventDetails.name;

  console.log(`New booking: ${inviteeName} (${inviteeEmail}) for ${eventName} at ${eventTime}`);

  // 1. Send notification to you (the owner)
  try {
    await resend.emails.send({
      from: 'Moonlit Studios <notifications@moonlstudios.com>', // Update with your verified domain
      to: 'your-email@gmail.com', // Replace with your email
      subject: `🎯 New Consultation Booked: ${inviteeName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0EA5E9;">New Consultation Booked!</h2>

          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Client:</strong> ${inviteeName}</p>
            <p><strong>Email:</strong> ${inviteeEmail}</p>
            <p><strong>Event:</strong> ${eventName}</p>
            <p><strong>Time:</strong> ${eventTime.toLocaleString()}</p>
          </div>

          <h3>Preparation Checklist:</h3>
          <ul>
            <li>Review their answers from the pre-call questionnaire</li>
            <li>Check if they mentioned specific services</li>
            <li>Prepare relevant portfolio examples</li>
            <li>Block 5 minutes before the call for setup</li>
          </ul>

          <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
            This is an automated notification from your Moonlit Studios booking system.
          </p>
        </div>
      `,
    });

    console.log('Owner notification sent successfully');
  } catch (error) {
    console.error('Failed to send owner notification:', error);
  }

  // 2. Send welcome email to the client
  try {
    await resend.emails.send({
      from: 'Moonlit Studios <hello@moonlstudios.com>', // Update with your verified domain
      to: inviteeEmail,
      subject: `Looking forward to our chat, ${inviteeName.split(' ')[0]}!`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0EA5E9;">Your Consultation is Confirmed</h2>

          <p>Hi ${inviteeName.split(' ')[0]},</p>

          <p>Thanks for booking a consultation with Moonlit Studios! I'm excited to learn about your project and explore how we can work together.</p>

          <div style="background: #f0f9ff; padding: 20px; border-left: 4px solid #0EA5E9; margin: 20px 0;">
            <p style="margin: 0;"><strong>📅 When:</strong> ${eventTime.toLocaleString()}</p>
            <p style="margin: 10px 0 0 0;"><strong>⏱️ Duration:</strong> 30 minutes</p>
          </div>

          <h3>Before Our Call:</h3>
          <ol>
            <li><strong>Check your calendar invite</strong> - It includes the Zoom link</li>
            <li><strong>Optional: Fill out the pre-call form</strong> - Helps me prepare specific insights for you</li>
            <li><strong>Bring your questions</strong> - No topic is off-limits</li>
          </ol>

          <h3>What We'll Cover:</h3>
          <ul>
            <li>Your project vision and goals</li>
            <li>Timeline and budget considerations</li>
            <li>Technical approach and recommendations</li>
            <li>Next steps if it's a good fit</li>
          </ul>

          <p style="margin-top: 30px;">If you need to reschedule, just use the link in your calendar invite. No worries!</p>

          <p>See you soon,<br/>
          <strong>Destiny</strong><br/>
          <span style="color: #6b7280; font-size: 14px;">The Nurse Who Codes</span></p>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">

          <p style="color: #6b7280; font-size: 12px;">
            Moonlit Studios | Where healthcare expertise meets cutting-edge development<br/>
            <a href="https://moonlstudios.com" style="color: #0EA5E9;">moonlstudios.com</a>
          </p>
        </div>
      `,
    });

    console.log('Client welcome email sent successfully');
  } catch (error) {
    console.error('Failed to send client welcome email:', error);
  }

  // 3. TODO: Add to CRM/database for follow-up tracking
  // You can add code here to save to a database or send to a CRM like Notion, Airtable, etc.
}

// Handle cancellation
async function handleCancellation(payload: any) {
  const invitee = payload.payload;
  const inviteeName = invitee.name;
  const inviteeEmail = invitee.email;

  console.log(`Cancellation: ${inviteeName} (${inviteeEmail})`);

  // Send notification to you about cancellation
  try {
    await resend.emails.send({
      from: 'Moonlit Studios <notifications@moonlstudios.com>',
      to: 'your-email@gmail.com', // Replace with your email
      subject: `❌ Consultation Canceled: ${inviteeName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ef4444;">Consultation Canceled</h2>

          <p><strong>Client:</strong> ${inviteeName}</p>
          <p><strong>Email:</strong> ${inviteeEmail}</p>

          <p style="color: #6b7280; margin-top: 20px;">
            Consider sending a friendly follow-up to reschedule or see if they have questions.
          </p>
        </div>
      `,
    });
  } catch (error) {
    console.error('Failed to send cancellation notification:', error);
  }
}
