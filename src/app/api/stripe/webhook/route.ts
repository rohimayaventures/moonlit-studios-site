/**
 * STRIPE WEBHOOK HANDLER
 *
 * Receives and processes events from Stripe (payment confirmations, failures, etc.)
 *
 * IMPORTANT - TO GO LIVE:
 * 1. Update .env with live Stripe keys:
 *    - STRIPE_SECRET_KEY=sk_live_...
 *    - STRIPE_WEBHOOK_SECRET=whsec_live_...
 * 2. Create a webhook endpoint in Stripe Dashboard (live mode):
 *    - URL: https://moonlstudios.com/api/stripe/webhook
 *    - Events: checkout.session.completed, payment_intent.succeeded,
 *              payment_intent.payment_failed, invoice.paid, invoice.payment_failed
 * 3. Copy the webhook secret (whsec_live_...) to .env
 *
 * That's it! No code changes needed to go live.
 *
 * Endpoint: POST /api/stripe/webhook
 * Headers: stripe-signature (automatically sent by Stripe)
 */

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-10-29.clover',
  typescript: true,
});

// Initialize Supabase (for database updates)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    // Get the raw body for signature verification
    const body = await req.text();
    const signature = req.headers.get('stripe-signature');

    if (!signature) {
      console.error('❌ Webhook Error: No signature header');
      return NextResponse.json(
        { error: 'Missing stripe-signature header' },
        { status: 400 }
      );
    }

    if (!process.env.STRIPE_WEBHOOK_SECRET) {
      console.error('❌ Webhook Error: STRIPE_WEBHOOK_SECRET not configured');
      return NextResponse.json(
        { error: 'Webhook secret not configured' },
        { status: 500 }
      );
    }

    // Verify webhook signature
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err: any) {
      console.error('❌ Webhook signature verification failed:', err.message);
      return NextResponse.json(
        { error: `Webhook signature verification failed: ${err.message}` },
        { status: 400 }
      );
    }

    console.log(`✅ Webhook received: ${event.type} (ID: ${event.id})`);

    // Process different event types
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutSessionCompleted(event.data.object as Stripe.Checkout.Session);
        break;

      case 'payment_intent.succeeded':
        await handlePaymentIntentSucceeded(event.data.object as Stripe.PaymentIntent);
        break;

      case 'payment_intent.payment_failed':
        await handlePaymentIntentFailed(event.data.object as Stripe.PaymentIntent);
        break;

      case 'invoice.paid':
        await handleInvoicePaid(event.data.object as Stripe.Invoice);
        break;

      case 'invoice.payment_failed':
        await handleInvoicePaymentFailed(event.data.object as Stripe.Invoice);
        break;

      default:
        console.log(`ℹ️ Unhandled event type: ${event.type}`);
    }

    // Always return 200 to acknowledge receipt
    return NextResponse.json({ received: true });

  } catch (error: any) {
    console.error('❌ Webhook processing error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed', details: error.message },
      { status: 500 }
    );
  }
}

/**
 * Handle successful checkout session completion
 * This fires when customer completes payment
 */
async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  console.log(`💰 Checkout session completed: ${session.id}`);
  console.log(`   Amount: $${(session.amount_total || 0) / 100}`);
  console.log(`   Customer Email: ${session.customer_email || 'N/A'}`);
  console.log(`   Payment Status: ${session.payment_status}`);

  const metadata = session.metadata || {};
  const amount = (session.amount_total || 0) / 100;
  const customerEmail = session.customer_email;

  // Send confirmation email to customer via Brevo
  if (customerEmail) {
    try {
      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': process.env.BREVO_API_KEY!,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          sender: {
            name: 'Moonlit Studios',
            email: process.env.BUSINESS_EMAIL || 'hello@moonlstudios.com',
          },
          to: [{ email: customerEmail }],
          subject: `Payment Confirmation - $${amount.toFixed(2)} - Moonlit Studios`,
          htmlContent: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px; border-radius: 10px; text-align: center;">
                <h1 style="color: #f4d03f; margin: 0;">Payment Confirmed! ✨</h1>
              </div>

              <div style="background: #ffffff; padding: 30px; border-radius: 10px; margin-top: 20px;">
                <p style="font-size: 16px; color: #333;">Thank you for your payment!</p>

                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <p style="margin: 10px 0; color: #666;">
                    <strong>Amount Paid:</strong> $${amount.toFixed(2)}
                  </p>
                  <p style="margin: 10px 0; color: #666;">
                    <strong>Transaction ID:</strong> ${session.id}
                  </p>
                  <p style="margin: 10px 0; color: #666;">
                    <strong>Date:</strong> ${new Date().toLocaleDateString()}
                  </p>
                </div>

                <h3 style="color: #1a1a2e; margin-top: 30px;">What's Next?</h3>
                <ul style="color: #666; line-height: 1.8;">
                  <li>Our team will reach out within 24 hours to begin your project</li>
                  <li>You can track your project progress in your client portal</li>
                  <li>Questions? Just reply to this email!</li>
                </ul>

                <div style="margin-top: 30px; text-align: center;">
                  <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://moonlstudios.com'}"
                     style="background: #f4d03f; color: #1a1a2e; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
                    Visit Your Portal
                  </a>
                </div>
              </div>

              <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
                <p>Moonlit Studios - Where Dreams Surface and Ideas Flow</p>
                <p>hello@moonlstudios.com</p>
              </div>
            </div>
          `,
        }),
      });
      console.log(`   ✅ Confirmation email sent to ${customerEmail}`);
    } catch (emailError) {
      console.error(`   ❌ Failed to send email:`, emailError);
    }
  }

  // Send Slack notification to admin
  if (process.env.SLACK_WEBHOOK_URL) {
    try {
      await fetch(process.env.SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `💰 *New Payment Received!*`,
          blocks: [
            {
              type: 'header',
              text: {
                type: 'plain_text',
                text: '💰 New Payment Received!',
                emoji: true,
              },
            },
            {
              type: 'section',
              fields: [
                {
                  type: 'mrkdwn',
                  text: `*Amount:*\n$${amount.toFixed(2)}`,
                },
                {
                  type: 'mrkdwn',
                  text: `*Customer:*\n${customerEmail || 'N/A'}`,
                },
                {
                  type: 'mrkdwn',
                  text: `*Session ID:*\n${session.id}`,
                },
                {
                  type: 'mrkdwn',
                  text: `*Quote ID:*\n${metadata.quoteId || 'N/A'}`,
                },
              ],
            },
            {
              type: 'actions',
              elements: [
                {
                  type: 'button',
                  text: {
                    type: 'plain_text',
                    text: 'View in Stripe',
                  },
                  url: `https://dashboard.stripe.com/payments/${session.payment_intent}`,
                },
              ],
            },
          ],
        }),
      });
      console.log(`   ✅ Slack notification sent`);
    } catch (slackError) {
      console.error(`   ❌ Failed to send Slack notification:`, slackError);
    }
  }

  // TODO: Update your Supabase database here
  // Example:
  // if (metadata.quoteId) {
  //   await supabase
  //     .from('quotes')
  //     .update({
  //       payment_status: 'paid',
  //       stripe_session_id: session.id,
  //       paid_at: new Date().toISOString(),
  //     })
  //     .eq('id', metadata.quoteId);
  // }

  console.log('   Metadata:', metadata);
}

/**
 * Handle successful payment intent
 * This fires when payment is confirmed
 */
async function handlePaymentIntentSucceeded(paymentIntent: Stripe.PaymentIntent) {
  console.log(`✅ Payment succeeded: ${paymentIntent.id}`);
  console.log(`   Amount: $${paymentIntent.amount / 100}`);
  console.log(`   Status: ${paymentIntent.status}`);

  const metadata = paymentIntent.metadata || {};

  // TODO: Update database with payment confirmation
  // Example:
  // await supabase
  //   .from('payments')
  //   .insert({
  //     stripe_payment_intent_id: paymentIntent.id,
  //     amount: paymentIntent.amount,
  //     currency: paymentIntent.currency,
  //     status: paymentIntent.status,
  //     quote_id: metadata.quoteId,
  //     project_id: metadata.projectId,
  //     created_at: new Date().toISOString(),
  //   });

  console.log('   Metadata:', metadata);
}

/**
 * Handle failed payment
 */
async function handlePaymentIntentFailed(paymentIntent: Stripe.PaymentIntent) {
  console.log(`❌ Payment failed: ${paymentIntent.id}`);
  console.log(`   Amount: $${paymentIntent.amount / 100}`);
  console.log(`   Failure Message: ${paymentIntent.last_payment_error?.message || 'Unknown'}`);

  const metadata = paymentIntent.metadata || {};

  // TODO: Update database with failure
  // TODO: Send notification to admin
  // TODO: Optionally notify customer with retry instructions

  console.log('   Metadata:', metadata);
}

/**
 * Handle invoice paid (for subscriptions or recurring payments)
 */
async function handleInvoicePaid(invoice: Stripe.Invoice) {
  console.log(`📄 Invoice paid: ${invoice.id}`);
  console.log(`   Amount: $${(invoice.amount_paid || 0) / 100}`);
  console.log(`   Customer: ${invoice.customer}`);

  // TODO: Update subscription status in database
  // TODO: Grant access to premium features
}

/**
 * Handle invoice payment failure
 */
async function handleInvoicePaymentFailed(invoice: Stripe.Invoice) {
  console.log(`❌ Invoice payment failed: ${invoice.id}`);
  console.log(`   Amount: $${(invoice.amount_due || 0) / 100}`);
  console.log(`   Customer: ${invoice.customer}`);

  // TODO: Send payment failure notification
  // TODO: Update subscription status
  // TODO: Trigger retry logic if applicable
}

// Disable body parsing - we need raw body for signature verification
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
