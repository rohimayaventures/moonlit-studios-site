# 🚀 Stripe Payment System - GO LIVE CHECKLIST

**Complete this checklist before accepting real payments**

---

## ✅ STEP 1: Get Live Stripe Keys

1. **Login to Stripe Dashboard:** https://dashboard.stripe.com
2. **Switch to LIVE MODE** (toggle in top-left corner)
3. **Get your API keys:** https://dashboard.stripe.com/apikeys
   - Copy **Secret key** (starts with `sk_live_...`)
   - Copy **Publishable key** (starts with `pk_live_...`)

---

## ✅ STEP 2: Create Live Webhook Endpoint

### In Stripe Dashboard (LIVE MODE):

1. Go to: https://dashboard.stripe.com/webhooks
2. Click **"Add endpoint"**
3. **Endpoint URL:** `https://moonlstudios.com/api/stripe/webhook`
4. **Description:** "Moonlit Studios Production Webhook"
5. **Events to send:** Click "Select events" and choose:
   - ✅ `checkout.session.completed`
   - ✅ `payment_intent.succeeded`
   - ✅ `payment_intent.payment_failed`
   - ✅ `invoice.paid` (if using subscriptions)
   - ✅ `invoice.payment_failed` (if using subscriptions)
6. Click **"Add endpoint"**
7. **Copy the Signing Secret** (starts with `whsec_...`)

---

## ✅ STEP 3: Update Vercel Environment Variables

### Go to: https://vercel.com/your-project/settings/environment-variables

Add or update these variables for **Production** environment:

### **Stripe (LIVE MODE):**
```
STRIPE_SECRET_KEY=sk_live_your_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_publishable_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_live_webhook_secret_here
NEXT_PUBLIC_SITE_URL=https://moonlstudios.com
```

### **Email (Brevo):**
```
BREVO_API_KEY=your_brevo_api_key_here
BUSINESS_EMAIL=hello@moonlstudios.com
```

### **Notifications (Slack):**
```
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
```

### **Database (Supabase):**
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

### **AI Services:**
```
ANTHROPIC_API_KEY=sk-ant-your_key_here
OPENAI_API_KEY=sk-your_key_here
```

---

## ✅ STEP 4: Deploy to Production

### Option A: Via GitHub Push (Recommended)

```bash
git add .
git commit -m "chore: Update to live Stripe keys"
git push
```

Vercel will auto-deploy in ~2 minutes.

### Option B: Manual Deploy via Vercel Dashboard

1. Go to your Vercel project
2. Click "Deployments"
3. Click "Redeploy" on the latest deployment

---

## ✅ STEP 5: Test in Production

### 5.1 Verify Webhook Endpoint

1. Go to: https://dashboard.stripe.com/webhooks
2. Click on your webhook endpoint
3. Click **"Send test webhook"**
4. Select `checkout.session.completed`
5. Click **"Send test webhook"**
6. **Verify:** Status shows "Succeeded" (green checkmark)

### 5.2 Test Small Real Payment

**IMPORTANT:** Start with a small amount ($1-5) using YOUR OWN credit card!

1. Visit: https://moonlstudios.com/test-payment
2. Click the **$10 payment button**
3. Enter **your own credit card** (real payment!)
4. Complete the payment
5. **Verify:**
   - ✅ Redirected to success page
   - ✅ Payment appears in Stripe Dashboard (LIVE mode)
   - ✅ Received confirmation email at the email you entered
   - ✅ Received Slack notification (if configured)
   - ✅ Webhook shows "Succeeded" in Stripe Dashboard

### 5.3 Check Logs

1. **Vercel Logs:** https://vercel.com/your-project/logs
   - Look for: `✅ Webhook received: checkout.session.completed`
   - Look for: `✅ Confirmation email sent to...`
   - Look for: `✅ Slack notification sent`

2. **Stripe Webhook Logs:** https://dashboard.stripe.com/webhooks
   - Click on your webhook
   - Click "Attempts" tab
   - Verify recent deliveries show "Succeeded"

---

## ✅ STEP 6: Remove Test Payment Page (Security)

### Option A: Delete the Page (Recommended)

```bash
rm -rf src/app/test-payment
git commit -m "chore: Remove test payment page for production"
git push
```

### Option B: Add Password Protection

Keep the page for future testing but protect it with authentication (implement NextAuth or similar).

---

## ✅ STEP 7: Enable Stripe Email Receipts (Backup)

As a backup to your custom Brevo emails:

1. Go to: https://dashboard.stripe.com/settings/emails
2. Enable **"Successful payments"**
3. Customers will receive Stripe's default receipts + your branded Brevo emails

---

## ✅ STEP 8: Set Up Monitoring

### 8.1 Stripe Email Notifications

1. Go to: https://dashboard.stripe.com/settings/notifications
2. Enable notifications for:
   - Successful payments
   - Failed payments
   - Disputes/chargebacks

### 8.2 Webhook Delivery Monitoring

1. Go to: https://dashboard.stripe.com/webhooks
2. Click on your webhook
3. Monitor the "Attempts" tab regularly
4. Set up alerts if deliveries start failing

---

## ⚠️ CRITICAL SECURITY CHECKLIST

Before going live, verify:

- [ ] **API keys are LIVE** (not test) in Vercel
- [ ] **Webhook secret is LIVE** (not test) in Vercel
- [ ] **Webhook endpoint URL is correct** (https://moonlstudios.com/api/stripe/webhook)
- [ ] **All environment variables are set** in Vercel Production environment
- [ ] **.env.local is in .gitignore** (never committed to GitHub)
- [ ] **Test payment page is removed or protected** from public access
- [ ] **Brevo email from address is verified** in Brevo dashboard
- [ ] **Slack webhook is working** (test with manual POST)

---

## 🔍 TROUBLESHOOTING

### Emails Not Being Sent

**Check:**
1. Webhook endpoint is created in Stripe Dashboard (LIVE mode)
2. Webhook secret in Vercel matches Stripe Dashboard
3. `BREVO_API_KEY` is set in Vercel
4. `BUSINESS_EMAIL` is set in Vercel
5. Sender email (`hello@moonlstudios.com`) is verified in Brevo
6. Check Vercel logs for email errors

**Fix:**
- Verify Brevo sender domain at: https://app.brevo.com/senders
- Check Brevo API limits at: https://app.brevo.com/settings/keys/api

### Webhook Signature Verification Failed

**Check:**
1. `STRIPE_WEBHOOK_SECRET` in Vercel is from LIVE webhook (not test)
2. Webhook endpoint URL exactly matches: `https://moonlstudios.com/api/stripe/webhook`
3. No trailing slashes or extra paths

**Fix:**
- Delete old webhook, create new one
- Copy fresh webhook secret to Vercel
- Redeploy

### Payment Success But No Email

**This means webhooks aren't being delivered**

**Check:**
1. Stripe Dashboard → Webhooks → Your endpoint → Attempts tab
2. Look for recent delivery attempts
3. If showing errors, click to see details

**Fix:**
- Verify webhook URL is accessible (not blocked by firewall)
- Check Vercel deployment is live and healthy
- Ensure webhook handler doesn't have runtime errors

---

## 📊 POST-LAUNCH MONITORING

### Daily (First Week)

- [ ] Check Stripe Dashboard for payments
- [ ] Verify webhook delivery success rate
- [ ] Check Vercel logs for errors
- [ ] Confirm emails are being sent

### Weekly

- [ ] Review Brevo email delivery stats
- [ ] Check Stripe for any failed payments
- [ ] Monitor webhook error rate
- [ ] Review customer feedback on payment flow

### Monthly

- [ ] Review total payment volume
- [ ] Check for any disputes/chargebacks
- [ ] Audit Brevo email quota usage
- [ ] Review Stripe fees and costs

---

## ✅ SUCCESS CRITERIA

Your payment system is LIVE and working when:

- ✅ Real payment completes successfully
- ✅ Customer receives branded confirmation email via Brevo
- ✅ Admin receives Slack notification
- ✅ Payment appears in Stripe Dashboard (LIVE mode)
- ✅ Webhook shows "Succeeded" in delivery attempts
- ✅ Success page displays correctly with transaction ID
- ✅ No errors in Vercel logs
- ✅ No errors in Stripe webhook logs

---

## 🆘 ROLLBACK PLAN

If something goes wrong after going live:

1. **Immediate:** Disable the webhook in Stripe Dashboard
2. **Quick fix:** Switch back to test keys in Vercel
3. **Communication:** Email any affected customers
4. **Debug:** Check Vercel logs and Stripe logs for errors
5. **Fix:** Resolve issues in test mode first
6. **Re-deploy:** Follow this checklist again

---

## 📞 SUPPORT RESOURCES

- **Stripe Docs:** https://stripe.com/docs/payments
- **Stripe Support:** https://support.stripe.com
- **Brevo Support:** https://help.brevo.com
- **Vercel Support:** https://vercel.com/support
- **Webhook Testing:** https://stripe.com/docs/webhooks/test

---

**🎉 Once all checks pass, you're ready to accept real payments!**

Save this checklist and refer back to it whenever you need to troubleshoot or make changes to your payment system.
