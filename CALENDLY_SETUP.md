# 📅 Calendly Automation Setup Guide

## Overview

You now have a fully automated Calendly integration that:
- ✅ Lets clients book consultations 24/7
- ✅ Sends you instant notifications when someone books
- ✅ Sends clients a personalized welcome email
- ✅ Shows your upcoming consultations in a dashboard
- ✅ Tracks cancellations for follow-up

This runs completely automatically while you're working your nursing shifts!

---

## 🚀 Quick Setup (15 minutes)

### Step 1: Get Your Calendly API Token (5 min)

1. **Login to Calendly**: https://calendly.com
2. **Go to Integrations**:
   - Click your profile picture (top right)
   - Select **"Integrations & Apps"**
   - Or visit directly: https://calendly.com/integrations
3. **Generate Token**:
   - Scroll down to **"API & Webhooks"**
   - Click **"Get a token"** or **"Generate New Token"**
   - Name it: `Moonlit Studios Site`
   - **COPY THE TOKEN** (you won't see it again!)
4. **Add to .env.local**:
   - You already did this! ✅
   - Token is saved as `CALENDLY_API_TOKEN` in your .env.local

### Step 2: Get Your Calendly Username (1 min)

Your Calendly booking page URL looks like:
```
https://calendly.com/YOUR-USERNAME/30min
```

The `YOUR-USERNAME` part is what you need!

You already added this as `CALENDLY_USERNAME` in .env.local ✅

### Step 3: Update Your Calendly URLs in Code (2 min)

Replace the placeholder URL in these 2 files:

**File 1:** `src/app/book/page.tsx` (Line 51)
```tsx
// BEFORE
const calendlyUrl = "https://calendly.com/your-username/30min";

// AFTER (use your actual username!)
const calendlyUrl = "https://calendly.com/YOUR-ACTUAL-USERNAME/30min";
```

**File 2:** `src/app/services/page.tsx` (Line 513)
```tsx
// BEFORE
url="https://calendly.com/your-username/30min"

// AFTER (use your actual username!)
url="https://calendly.com/YOUR-ACTUAL-USERNAME/30min"
```

### Step 4: Configure Webhooks for Real-Time Notifications (5 min)

This makes the automation work instantly when someone books!

1. **Go to Webhooks Page**: https://calendly.com/integrations/webhooks
2. **Create New Webhook**:
   - Click **"Create Webhook"**
   - **Webhook URL**: `https://moonlstudios.com/api/calendly/webhook`
     *(Note: This only works after you deploy to Vercel!)*
3. **Subscribe to Events**:
   - ✅ Check: `invitee.created` (new bookings)
   - ✅ Check: `invitee.canceled` (cancellations)
4. **Copy Signing Key**:
   - After creating, you'll see a "Signing Key"
   - Add it to .env.local:
     ```
     CALENDLY_WEBHOOK_SECRET=your-signing-key-here
     ```

### Step 5: Update Email Addresses (3 min)

Open `src/app/api/calendly/webhook/route.ts` and update:

**Your notification email** (Line 75):
```typescript
to: 'your-email@gmail.com', // ← Replace with YOUR email
```

**Your "from" domain** (Lines 72 and 142):
```typescript
from: 'Moonlit Studios <notifications@moonlstudios.com>', // ← Use your domain
```

**Client welcome email "from"** (Line 142):
```typescript
from: 'Moonlit Studios <hello@moonlstudios.com>', // ← Use your domain
```

> **Note**: You'll need to verify your domain with Resend to send emails from it. Until then, emails will come from Resend's sandbox (which works but isn't as professional).

---

## 🎯 What Happens When Someone Books

### 1. Client Books on Your Site
- Clicks "Book Free Consultation" button
- Fills out Calendly form
- Selects time slot
- Gets instant confirmation

### 2. You Get Notified (Instant!)
You receive an email like this:

```
Subject: 🎯 New Consultation Booked: Sarah Johnson

Client: Sarah Johnson
Email: sarah@example.com
Event: 30-Minute Consultation
Time: Tomorrow at 2:00 PM

Preparation Checklist:
✓ Review their answers from pre-call questionnaire
✓ Check if they mentioned specific services
✓ Prepare relevant portfolio examples
✓ Block 5 minutes before call for setup
```

### 3. Client Gets Welcome Email (Instant!)
They receive:

```
Subject: Looking forward to our chat, Sarah!

Hi Sarah,

Thanks for booking! I'm excited to learn about your project...

📅 When: Tomorrow at 2:00 PM
⏱️ Duration: 30 minutes

Before Our Call:
1. Check your calendar invite for Zoom link
2. Fill out optional pre-call form
3. Bring your questions

See you soon,
Destiny
The Nurse Who Codes
```

### 4. They Appear on Your Dashboard
The `UpcomingConsultations` component shows:
- Client name
- Email
- Time until call ("2h" or "Tomorrow")
- Booking status

---

## 🔧 Testing Your Setup

### Test the Booking Button:
1. Visit: `http://localhost:3000/book` (or your deployed site)
2. Check if the Calendly embed loads
3. Try booking a test appointment

### Test the API:
Visit: `http://localhost:3000/api/calendly/scheduled-events`

You should see JSON with your upcoming consultations:
```json
{
  "success": true,
  "events": [ ... ],
  "count": 5,
  "user": {
    "name": "Your Name",
    "email": "your@email.com"
  }
}
```

If you get an error, check:
- ✓ API token is correct in .env.local
- ✓ Username is correct in .env.local
- ✓ Dev server is restarted (restart after adding env vars!)

---

## 📊 Using the Dashboard Widget

Add the `UpcomingConsultations` component to any page:

```tsx
import { UpcomingConsultations } from '../components/UpcomingConsultations';

export default function DashboardPage() {
  return (
    <div>
      <h1>My Consultations</h1>
      <UpcomingConsultations />
    </div>
  );
}
```

Shows:
- Next 5 upcoming consultations
- Countdown timers ("2h", "Tomorrow", "3 days")
- Client names and emails
- Booking status

---

## 🚨 Troubleshooting

### "Error loading consultations"
**Cause**: API token not set or incorrect
**Fix**:
1. Check .env.local has `CALENDLY_API_TOKEN=your-token`
2. Restart dev server: `npm run dev`
3. Visit https://calendly.com/integrations and regenerate token if needed

### Emails not sending
**Cause**: Resend API key not configured or domain not verified
**Fix**:
1. Check .env.local has `RESEND_API_KEY=your-key`
2. Update email addresses in webhook route
3. Verify your domain at https://resend.com/domains

### Webhook not working
**Cause**: Site not deployed yet
**Fix**: Webhooks only work on deployed sites (not localhost)
1. Deploy to Vercel first
2. Then set up webhook with your live URL
3. Test by booking on the live site

---

## 🎁 Bonus: Advanced Automation Ideas

Now that you have the API set up, you can:

1. **Auto-send prep materials** before calls
2. **Track no-shows** and send follow-up
3. **Log bookings to Notion/Airtable** for CRM
4. **Send post-call surveys** for testimonials
5. **Create booking analytics dashboard**

Want me to implement any of these? Just ask!

---

## ✅ Checklist

Before going live, make sure:

- [x] Calendly API token added to .env.local
- [x] Calendly username added to .env.local
- [ ] Updated calendlyUrl in book/page.tsx with your username
- [ ] Updated calendlyUrl in services/page.tsx with your username
- [ ] Updated email addresses in webhook route
- [ ] Created Calendly event type (30min consultation)
- [ ] Set up webhook (after deploying to Vercel)
- [ ] Tested booking flow end-to-end
- [ ] Verified you receive notification emails

---

## 🎉 You're Ready!

Your site can now:
- Accept bookings 24/7 ✅
- Notify you instantly ✅
- Send professional welcome emails ✅
- Track all consultations ✅

All while you're working your nursing shifts! 🏥👩‍⚕️💻

Need help? Just ask!
