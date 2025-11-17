# 🧪 Payment System Testing Guide

**Quick guide to test your Stripe payments before going live**

---

## ✅ Step 1: Access the Test Page

Your dev server is running at: **http://localhost:3000**

Visit the test payment page:

### **🔗 http://localhost:3000/test-payment**

---

## 💳 Step 2: Run a Test Payment

1. **Click any payment button** on the test page:
   - Small: $10.00
   - Medium: $50.00
   - Large: $500.00
   - Enterprise: $2,500.00

2. **You'll be redirected to Stripe's checkout page** (secure Stripe-hosted page)

3. **Enter test card details:**
   ```
   Card Number: 4242 4242 4242 4242
   Expiry Date: 12/34 (any future date)
   CVC: 123 (any 3 digits)
   ZIP: 12345 (any 5 digits)
   ```

4. **Click "Pay"**

5. **You'll be redirected back to:**
   - Success: `http://localhost:3000/portal/success?session_id=cs_test_...`
   - Cancel: `http://localhost:3000/portal/cancel` (if you clicked back)

---

## 🔍 Step 3: Verify in Stripe Dashboard

After completing a test payment:

1. **Login to Stripe Dashboard:**
   - https://dashboard.stripe.com/test/payments

2. **You should see your test payment** with:
   - Amount: Whatever you selected
   - Status: Succeeded ✅
   - Description: The description you saw on the button

3. **Click on the payment to see details** including metadata (quoteId)

---

## 🧪 Test Different Scenarios

### ✅ Successful Payment
```
Card: 4242 4242 4242 4242
Result: Payment succeeds, redirects to success page
```

### ❌ Card Declined
```
Card: 4000 0000 0000 9995
Result: Payment fails with "Card declined" message
```

### ❌ Insufficient Funds
```
Card: 4000 0025 0000 3155
Result: Payment fails with "Insufficient funds" message
```

### 🔒 3D Secure Authentication
```
Card: 4000 0000 0000 3220
Result: Prompts for 3D Secure, click "Complete" to succeed
```

---

## 🔔 Step 4: Test Webhooks (Optional - Advanced)

If you want to test webhook events locally:

### Install Stripe CLI

Download from: https://stripe.com/docs/stripe-cli

### Forward Webhooks to Localhost

```bash
stripe login
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

### Copy Webhook Secret

The CLI will show:
```
> Ready! Your webhook signing secret is whsec_xxxxx
```

Add this to your `.env.local`:
```env
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
```

### Restart Dev Server

```bash
# Stop the current server (Ctrl+C)
npm run dev
```

### Run a Test Payment

Complete a payment, then watch your terminal running `stripe listen`. You should see:

```
✅ checkout.session.completed
✅ payment_intent.succeeded
```

And in your Next.js dev server logs:

```
✅ Webhook received: checkout.session.completed (ID: evt_...)
💰 Checkout session completed: cs_test_...
   Amount: $50.00
   Customer Email: test@example.com
   Payment Status: paid
```

---

## 🚀 Step 5: Going Live Checklist

Once testing is complete and everything works:

### 1. Get Live Stripe Keys

- Login to Stripe Dashboard
- **Switch to LIVE mode** (toggle in top left)
- Go to: https://dashboard.stripe.com/apikeys
- Copy your live keys:
  - Secret key: `sk_live_...`
  - Publishable key: `pk_live_...`

### 2. Update Environment Variables

**In `.env.local` (local testing):**
```env
STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxxxxxxxxxxxxxxxxxx
```

**In Vercel (production):**
1. Go to: https://vercel.com/your-project/settings/environment-variables
2. Update these 3 variables with LIVE keys:
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_WEBHOOK_SECRET` (from next step)
   - `NEXT_PUBLIC_SITE_URL` → `https://moonlstudios.com`

### 3. Create Live Webhook Endpoint

1. Go to: https://dashboard.stripe.com/webhooks (LIVE MODE)
2. Click **"Add endpoint"**
3. **Endpoint URL:** `https://moonlstudios.com/api/stripe/webhook`
4. **Events to send:**
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `invoice.paid`
   - `invoice.payment_failed`
5. Click **"Add endpoint"**
6. Copy the **Signing secret** (`whsec_live_...`)
7. Add to Vercel environment variables as `STRIPE_WEBHOOK_SECRET`

### 4. Deploy to Vercel

```bash
git add .
git commit -m "feat: Add payment testing pages and prepare for live mode"
git push
```

Vercel will auto-deploy. Make sure environment variables are updated!

### 5. Test in Production

1. Visit: `https://moonlstudios.com/test-payment`
2. Run a small test payment with your **real credit card**
3. Verify it appears in your Stripe Dashboard (LIVE mode)
4. Check webhook delivery in Stripe Dashboard
5. **Once confirmed working, remove the /test-payment page** or add authentication

---

## ⚠️ IMPORTANT: Before Going Live

### Security Checklist

- [ ] Verified webhook signature verification is working
- [ ] Confirmed live webhook endpoint is created in Stripe
- [ ] Updated all environment variables in Vercel
- [ ] Tested with real card for small amount ($1-5)
- [ ] Removed or protected /test-payment page from public access
- [ ] Verified success/cancel pages work correctly
- [ ] Confirmed email receipts are being sent (check Stripe settings)
- [ ] Set up Stripe email notifications for yourself

### Test Payment Page Security

**Option 1: Delete the test page** (safest for production)
```bash
rm -rf src/app/test-payment
```

**Option 2: Add password protection** (if you want to keep for future testing)
- Implement NextAuth or simple password check
- Only allow access with authentication

---

## 📊 Monitoring Live Payments

### Stripe Dashboard
- **Payments:** https://dashboard.stripe.com/payments
- **Webhooks:** https://dashboard.stripe.com/webhooks
- **Logs:** https://dashboard.stripe.com/logs

### Email Notifications

Set up email notifications in Stripe:
1. Settings → Notifications
2. Enable "Successful payments" emails to your business email

### Slack Notifications (Optional)

Update webhook handler to send Slack notifications:
```typescript
// In /api/stripe/webhook/route.ts
async function handleCheckoutSessionCompleted(session) {
  // Send Slack notification
  await fetch(process.env.SLACK_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text: `💰 New payment received: $${session.amount_total / 100} from ${session.customer_email}`
    })
  });
}
```

---

## 🆘 Troubleshooting

### Payment succeeds but webhook not received

**Check:**
1. Webhook endpoint URL is correct (`https://moonlstudios.com/api/stripe/webhook`)
2. Webhook secret in Vercel matches Stripe Dashboard
3. Check Stripe Dashboard → Webhooks → [your endpoint] → "Attempts" tab
4. Look for any delivery errors

### "Webhook signature verification failed"

**Solution:**
1. Make sure `STRIPE_WEBHOOK_SECRET` is from the correct webhook endpoint
2. Verify you're using the live webhook secret for live mode
3. Check that webhook secret in Vercel exactly matches Stripe

### Payment works locally but not in production

**Check:**
1. Vercel environment variables are set correctly
2. You're using LIVE keys, not test keys
3. `NEXT_PUBLIC_SITE_URL` is set to `https://moonlstudios.com`
4. Webhook endpoint is created in LIVE mode Stripe Dashboard

---

## ✅ Success Criteria

You're ready to go live when:

- ✅ Test payments complete successfully
- ✅ Stripe Checkout page loads correctly
- ✅ Success page shows with transaction ID
- ✅ Payment appears in Stripe Dashboard
- ✅ Webhooks are delivered and logged
- ✅ Live keys are configured in Vercel
- ✅ Live webhook endpoint is created
- ✅ Production test with real card succeeds

---

**🎉 You're ready to accept real payments!**

Once you've completed all testing and the checklist above, your payment system is production-ready and secure.
