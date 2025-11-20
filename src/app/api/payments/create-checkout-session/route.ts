/**
 * STRIPE CHECKOUT SESSION API
 *
 * Creates a Stripe Checkout Session for payments.
 * Currently in TEST MODE - to go live, simply update .env with live keys.
 *
 * Endpoint: POST /api/payments/create-checkout-session
 *
 * Request Body:
 * {
 *   amount: number;        // Amount in cents (e.g., 5000 = $50.00)
 *   currency?: string;     // Default: "usd"
 *   description?: string;  // Line item description
 *   quoteId?: string;      // Optional: Link to quote in database
 *   projectId?: string;    // Optional: Link to project in database
 * }
 *
 * Response:
 * {
 *   url: string;          // Stripe Checkout URL to redirect user to
 *   sessionId: string;    // Session ID for tracking
 * }
 */

import { NextRequest, NextResponse } from 'next/server';
import { createLogger } from "@/lib/logger";
import Stripe from 'stripe';

// Initialize Stripe with secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-10-29.clover',
  typescript: true,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      amount,
      currency = 'usd',
      description = 'Moonlit Studios - Project Payment',
      quoteId,
      projectId,
    } = body;

    // Validation
    if (!amount || typeof amount !== 'number' || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount. Must be a positive number in cents.' },
        { status: 400 }
      );
    }

    if (amount < 50) {
      return NextResponse.json(
        { error: 'Amount must be at least $0.50 (50 cents)' },
        { status: 400 }
      );
    }

    // Get site URL for redirects
    // TODO: Update NEXT_PUBLIC_SITE_URL in .env for production
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    // Build metadata to track quote/project IDs
    const metadata: Record<string, string> = {};
    if (quoteId) metadata.quoteId = quoteId;
    if (projectId) metadata.projectId = projectId;
    metadata.source = 'moonlit_studios_website';

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: currency.toLowerCase(),
            product_data: {
              name: description,
              description: 'Professional development services by Moonlit Studios',
              images: ['https://www.moonlstudios.com/og-image.png'], // TODO: Update with actual logo URL
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${siteUrl}/portal/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/portal/cancel`,
      metadata,
      // Optional: Collect customer email for receipts
      customer_email: undefined, // Can be passed from frontend if needed
      // Optional: Allow promotion codes
      allow_promotion_codes: true,
      // Payment intent metadata for webhook processing
      payment_intent_data: {
        metadata,
      },
    });

    if (!session.url) {
      throw new Error('Failed to create checkout session URL');
    }

    return NextResponse.json({
      url: session.url,
      sessionId: session.id,
      success: true,
    });

  } catch (error: any) {
    console.error('❌ Stripe Checkout Session Error:', error);

    // Handle Stripe-specific errors
    if (error.type === 'StripeInvalidRequestError') {
      return NextResponse.json(
        { error: `Stripe configuration error: ${error.message}` },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        error: 'Failed to create checkout session',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// Only allow POST requests
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to create a checkout session.' },
    { status: 405 }
  );
}
