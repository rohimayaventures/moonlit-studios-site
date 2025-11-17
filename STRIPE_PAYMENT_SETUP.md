# 💳 Stripe Payment System - Setup & Testing Guide

**Moonlit Studios - Complete Payment Infrastructure**

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Environment Setup](#environment-setup)
3. [API Endpoints](#api-endpoints)
4. [Testing in Test Mode](#testing-in-test-mode)
5. [Going Live](#going-live)
6. [Troubleshooting](#troubleshooting)

---

## 🎯 Overview

Your payment system is now fully configured with:

- ✅ **Stripe Checkout Sessions** - Secure hosted payment pages
- ✅ **Webhook Handler** - Real-time payment event processing
- ✅ **Test Mode Ready** - Works immediately with test keys
- ✅ **Live Mode Ready** - Switch to production with just env updates

### Architecture

```
Frontend Request
    ↓
POST /api/payments/create-checkout-session
    ↓
Stripe Checkout (hosted by Stripe)
    ↓
Payment Success/Failure
    ↓
Webhook: POST /api/stripe/webhook
    ↓
Database Update (Supabase)
    ↓
Email/Slack Notifications
```

---

## 🔧 Environment Setup

### 1. Copy Environment Template

```bash
cp .env.local.example .env.local
```

### 2. Get Your Stripe Test Keys

Visit: https://dashboard.stripe.com/test/apikeys

Add to `.env.local`:

```env
# Stripe Test Mode Keys
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxx
```

### 3. Create Webhook Endpoint

**For Local Development:**

1. Install Stripe CLI: https://stripe.com/docs/stripe-cli
2. Login: `stripe login`
3. Forward webhooks to local:
   ```bash
   stripe listen --forward-to localhost:3000/api/stripe/webhook
   ```
4. Copy the webhook secret (starts with `whsec_`) to `.env.local`:
   ```env
   STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxxx
   ```

**For Production (Vercel):**

1. Go to: https://dashboard.stripe.com/test/webhooks
2. Click **Add endpoint**
3. Endpoint URL: `https://moonlstudios.com/api/stripe/webhook`
4. Select events:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `invoice.paid`
   - `invoice.payment_failed`
5. Copy the **Signing secret** to `.env.local`

### 4. Required Environment Variables

```env
# Stripe (see above)
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Site URL (for redirects)
NEXT_PUBLIC_SITE_URL=http://localhost:3000  # or https://moonlstudios.com

# Supabase (already configured)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

---

## 📡 API Endpoints

### 1. Create Checkout Session

**Endpoint:** `POST /api/payments/create-checkout-session`

**Request Body:**

```json
{
  "amount": 5000,              // REQUIRED: Amount in cents ($50.00)
  "currency": "usd",           // Optional: Default "usd"
  "description": "Website Build Deposit",  // Optional
  "quoteId": "quote_123",      // Optional: Link to quote
  "projectId": "proj_456"      // Optional: Link to project
}
```

**Response:**

```json
{
  "url": "https://checkout.stripe.com/c/pay/cs_test_xxx",
  "sessionId": "cs_test_xxx",
  "success": true
}
```

**Frontend Usage:**

```typescript
const response = await fetch('/api/payments/create-checkout-session', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    amount: 5000,  // $50.00
    description: 'Moonlit Studios - Website Build Deposit',
    quoteId: 'quote_abc123'
  })
});

const { url } = await response.json();
window.location.href = url;  // Redirect to Stripe Checkout
```

### 2. Webhook Handler

**Endpoint:** `POST /api/stripe/webhook`

**Headers:** `stripe-signature` (automatically sent by Stripe)

**Events Handled:**

1. ✅ `checkout.session.completed` - Payment page completed
2. ✅ `payment_intent.succeeded` - Payment confirmed
3. ❌ `payment_intent.payment_failed` - Payment failed
4. 📄 `invoice.paid` - Subscription invoice paid
5. ❌ `invoice.payment_failed` - Invoice payment failed

**Webhook Flow:**

```typescript
// 1. Stripe sends webhook to your endpoint
// 2. Signature is verified using STRIPE_WEBHOOK_SECRET
// 3. Event is processed based on type
// 4. Database is updated (TODO: implement in webhook route)
// 5. Notifications sent (TODO: implement)
// 6. Always returns { received: true } to acknowledge
```

---

## 🧪 Testing in Test Mode

### Test Credit Cards

Stripe provides test cards that simulate different scenarios:

| Card Number         | Scenario              |
|--------------------|-----------------------|
| `4242 4242 4242 4242` | ✅ Success            |
| `4000 0000 0000 9995` | ❌ Declined           |
| `4000 0000 0000 3220` | 🔒 Requires 3D Secure |
| `4000 0025 0000 3155` | ❌ Insufficient funds |

**All test cards:**
- Expiry: Any future date (e.g., `12/34`)
- CVC: Any 3 digits (e.g., `123`)
- ZIP: Any 5 digits (e.g., `12345`)

### Testing Steps

#### Step 1: Start Dev Server

```bash
npm run dev
```

#### Step 2: Start Stripe Webhook Listener (in another terminal)

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

Copy the webhook secret and add to `.env.local`.

#### Step 3: Test Checkout Session Creation

```bash
curl -X POST http://localhost:3000/api/payments/create-checkout-session \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 5000,
    "description": "Test Payment",
    "quoteId": "test_quote_123"
  }'
```

**Expected Response:**

```json
{
  "url": "https://checkout.stripe.com/c/pay/cs_test_...",
  "sessionId": "cs_test_...",
  "success": true
}
```

#### Step 4: Complete Test Payment

1. Copy the `url` from the response
2. Open in browser
3. Use test card `4242 4242 4242 4242`
4. Fill in any future date, any CVC, any ZIP
5. Click "Pay"

#### Step 5: Verify Webhook Received

Check your terminal running `stripe listen`. You should see:

```
✅ checkout.session.completed
✅ payment_intent.succeeded
```

Check your Next.js dev server logs for:

```
✅ Webhook received: checkout.session.completed
💰 Checkout session completed: cs_test_...
   Amount: $50.00
   Customer Email: test@example.com
   Payment Status: paid
```

### Testing Failed Payments

Use card `4000 0000 0000 9995` (declined) and verify webhook logs show:

```
❌ Payment failed: pi_test_...
   Failure Message: Your card was declined
```

---

## 🚀 Going Live

When ready to accept real payments:

### Step 1: Switch to Live Keys

Update `.env.local` (and Vercel env vars):

```env
# Replace test keys with live keys
STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxxxxxxxxxxxxxxxxxx

# Update site URL
NEXT_PUBLIC_SITE_URL=https://moonlstudios.com
```

### Step 2: Create Live Webhook

1. Go to: https://dashboard.stripe.com/webhooks (LIVE MODE)
2. Click **Add endpoint**
3. Endpoint URL: `https://moonlstudios.com/api/stripe/webhook`
4. Select the same 5 events as test mode
5. Copy the **Signing secret** (starts with `whsec_`)

### Step 3: Update Webhook Secret

```env
STRIPE_WEBHOOK_SECRET=whsec_live_xxxxxxxxxxxxxxxxxxxxx
```

### Step 4: Deploy

```bash
git add .
git commit -m "feat: Add Stripe payment system"
git push
```

Vercel will auto-deploy. Update environment variables in Vercel dashboard.

### Step 5: Test with Real Card

Use your actual credit card in test mode first, then verify live mode works.

---

## 🔍 Troubleshooting

### Webhook Signature Verification Failed

**Error:** `Webhook signature verification failed`

**Solutions:**

1. Verify `STRIPE_WEBHOOK_SECRET` is correct in `.env.local`
2. Make sure you're using the secret from the correct mode (test vs live)
3. For local dev, ensure `stripe listen` is running
4. For production, verify endpoint URL matches exactly

### Checkout Session Not Redirecting

**Error:** No redirect after creating session

**Solutions:**

1. Check `NEXT_PUBLIC_SITE_URL` is set correctly
2. Verify `session.url` is being returned
3. Check browser console for JavaScript errors

### Database Not Updating After Payment

**Cause:** Webhook handler has TODO comments for database updates

**Solution:**

Edit `/api/stripe/webhook/route.ts` and implement the database update logic:

```typescript
async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  const metadata = session.metadata || {};

  if (metadata.quoteId) {
    await supabase
      .from('quotes')
      .update({
        payment_status: 'paid',
        stripe_session_id: session.id,
        paid_at: new Date().toISOString(),
      })
      .eq('id', metadata.quoteId);
  }
}
```

### Amount Validation Error

**Error:** `Amount must be at least $0.50`

**Solution:** Stripe requires minimum 50 cents. Ensure `amount >= 50` (in cents).

---

## 📊 Monitoring

### Stripe Dashboard

- **Test Mode:** https://dashboard.stripe.com/test/payments
- **Live Mode:** https://dashboard.stripe.com/payments

### Webhook Logs

- **Test Mode:** https://dashboard.stripe.com/test/webhooks
- **Live Mode:** https://dashboard.stripe.com/webhooks

### Server Logs

All webhook events are logged to your Next.js server console with detailed information.

---

## 🎓 Next Steps

### 1. Implement Database Updates

Edit webhook handlers to update your Supabase `quotes`, `projects`, and `payments` tables.

### 2. Add Email Notifications

Send confirmation emails to customers using Resend after successful payment.

### 3. Add Slack Notifications

Notify your team via Slack webhook when payments are received.

### 4. Create Success/Cancel Pages

Build UI pages at:
- `/portal/success` - Payment successful
- `/portal/cancel` - Payment canceled

### 5. Add Stripe Elements (Optional)

For embedded payment forms instead of Checkout:
- https://stripe.com/docs/payments/quickstart

---

## 📞 Support

- **Stripe Docs:** https://stripe.com/docs
- **Stripe Support:** https://support.stripe.com
- **Test Cards:** https://stripe.com/docs/testing

---

**✨ Your payment system is ready to accept payments in test mode!**

Test it thoroughly before going live, and remember: switching to live mode only requires updating environment variables.
