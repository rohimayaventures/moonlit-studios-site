# 🔑 API SETUP CHECKLIST - Get Your Free API Keys!

**Goal:** Set up all free API services in ~1 hour
**Cost:** $0 setup, ~$26/month ongoing (mostly from AI usage)

---

## ✅ APIs YOU ALREADY HAVE

- ✅ **OpenAI API Key** - `OPENAI_API_KEY`
- ✅ **Anthropic API Key** - `ANTHROPIC_API_KEY`
- ✅ **Resend API Key** - `RESEND_API_KEY`
- ✅ **Calendly API Token** - `CALENDLY_API_TOKEN`

**Great start! Now let's add the free ones...**

---

## 🆕 FREE API KEYS TO GET (Priority Order)

### 1. ⚡ SUPABASE (Database) - 5 minutes

**Why:** Free PostgreSQL database forever (500MB storage)

**Steps:**
1. Go to: https://supabase.com
2. Click **"Start your project"**
3. Sign in with GitHub
4. Click **"New Project"**
5. Project name: `moonlit-studios`
6. Database password: (generate strong one, save it!)
7. Region: Choose closest to you
8. Wait 2 minutes for provisioning

**Copy These 3 Keys:**
```
Project Settings → API
├─ Project URL → NEXT_PUBLIC_SUPABASE_URL
├─ anon public → NEXT_PUBLIC_SUPABASE_ANON_KEY
└─ service_role → SUPABASE_SERVICE_KEY (keep secret!)
```

**Add to `.env.local`:**
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Create Tables (Run in Supabase SQL Editor):**
```sql
-- Testimonials table
CREATE TABLE testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  role TEXT,
  company TEXT,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  feedback TEXT NOT NULL,
  service TEXT,
  event_id TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  submitted_at TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Quotes table
CREATE TABLE quotes (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  service_type TEXT NOT NULL,
  project_description TEXT NOT NULL,
  timeline TEXT,
  budget TEXT,
  features JSONB,
  complexity TEXT,
  additional_notes TEXT,
  ai_analysis JSONB NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Contacts table
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  service_type TEXT,
  budget TEXT,
  timeline TEXT,
  details TEXT,
  source TEXT DEFAULT 'contact_form',
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create indexes for better performance
CREATE INDEX idx_testimonials_status ON testimonials(status);
CREATE INDEX idx_quotes_email ON quotes(email);
CREATE INDEX idx_contacts_status ON contacts(status);
```

**Test Connection:**
```bash
npm install @supabase/supabase-js
```

---

### 2. 📇 NOTION (CRM) - 5 minutes

**Why:** Free unlimited database for tracking all leads

**Steps:**
1. Go to: https://www.notion.so
2. Sign up/login
3. Create new page: **"Moonlit Studios CRM"**
4. Add database (Table view)

**Create Columns:**
| Column Name | Type | Options |
|-------------|------|---------|
| Name | Title | - |
| Email | Email | - |
| Source | Select | Quote Form, Contact Form, Calendly, Referral |
| Service | Select | Creative Design, Health Tech, AI Innovation, Consulting, Ghostwriting |
| Status | Status | 🆕 New, 📞 Contacted, 💰 Quoted, 🎉 Won, ❌ Lost, 💤 Nurturing |
| Budget | Text | - |
| Quote Amount | Text | - |
| Created | Date | - |
| Last Contact | Date | - |
| Priority | Select | 🔥 Hot, ⚡ Warm, ❄️ Cold |
| Notes | Long Text | - |

**Get API Key:**
1. Go to: https://www.notion.so/my-integrations
2. Click **"+ New integration"**
3. Name: `Moonlit Studios Automation`
4. Associated workspace: Your workspace
5. Click **"Submit"**
6. Copy **"Internal Integration Token"** (starts with `secret_`)

**Connect Integration to Database:**
1. Open your CRM database in Notion
2. Click **"..."** (top right) → **"Add connections"**
3. Select **"Moonlit Studios Automation"**
4. Click **"Confirm"**

**Get Database ID:**
1. Open your CRM database
2. Look at URL: `https://notion.so/xxxxx?v=yyyyy`
3. The `xxxxx` part is your database ID (32 characters)

**Add to `.env.local`:**
```env
NOTION_API_KEY=secret_xxxxxxxxxxxxx
NOTION_CRM_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Test Connection:**
```bash
npm install @notionhq/client
```

---

### 3. 📣 SLACK (Notifications) - 3 minutes

**Why:** Instant notifications on your phone when leads come in

**Steps:**
1. Go to: https://api.slack.com/messaging/webhooks
2. Click **"Create your Slack app"**
3. Choose **"From scratch"**
4. App name: `Moonlit Studios Alerts`
5. Workspace: Your workspace (or create free one)
6. Click **"Create App"**

**Create Webhook:**
1. In app settings → **"Incoming Webhooks"**
2. Toggle **"Activate Incoming Webhooks"** ON
3. Click **"Add New Webhook to Workspace"**
4. Choose channel: **#leads** (create if needed)
5. Click **"Allow"**
6. Copy **Webhook URL** (starts with `https://hooks.slack.com/...`)

**Add to `.env.local`:**
```env
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXX
```

**Test Notification:**
```bash
curl -X POST -H 'Content-type: application/json' \
--data '{"text":"🎉 Moonlit Studios automation is live!"}' \
YOUR_WEBHOOK_URL
```

---

### 4. 🖼️ CLOUDINARY (Image Storage) - 3 minutes

**Why:** Free 25GB storage + CDN for portfolio images

**Steps:**
1. Go to: https://cloudinary.com/users/register/free
2. Sign up (free account)
3. Verify email
4. Go to **Dashboard**

**Copy These 3 Values:**
```
Dashboard (top of page)
├─ Cloud Name: moonlit-studios-xxx
├─ API Key: 123456789012345
└─ API Secret: xxxxxxxxxxxxxxxxxxxxx
```

**Add to `.env.local`:**
```env
CLOUDINARY_CLOUD_NAME=moonlit-studios-xxx
CLOUDINARY_API_KEY=123456789012345
CLOUDINARY_API_SECRET=xxxxxxxxxxxxxxxxxxxxx
```

**Test Upload:**
```bash
npm install cloudinary
```

---

### 5. 📧 BREVO (Email Alternative) - 5 minutes

**Why:** 9,000 free emails/month (vs Resend's 3,000)

**Steps:**
1. Go to: https://www.brevo.com
2. Click **"Sign up free"**
3. Fill form, verify email
4. Complete onboarding (skip SMS setup)
5. Go to: **Settings → SMTP & API**
6. Click **"Create a new API key"**
7. Name: `Moonlit Studios`
8. Copy key (starts with `xkeysib-...`)

**Add to `.env.local`:**
```env
BREVO_API_KEY=xkeysib-xxxxxxxxxxxxxxxxxxxxx
```

**Optional: Verify Domain**
1. Settings → **Senders & IP**
2. **Domains** → Add domain
3. Add DNS records from Brevo
4. Wait 24-48h for verification

**Test Email:**
```bash
npm install @getbrevo/brevo
```

---

### 6. 📊 UMAMI (Analytics) - 10 minutes

**Why:** Free, privacy-first analytics (GDPR compliant)

**Option A: Cloud (Easiest)**
1. Go to: https://cloud.umami.is
2. Sign up (free)
3. Add website
4. Copy tracking code

**Option B: Self-Hosted (Free)**
1. Deploy to Railway: https://railway.app
2. New Project → Deploy from GitHub
3. Use template: `umami-software/umami`
4. Add PostgreSQL database
5. Deploy!

**Add Tracking Script:**
```typescript
// In layout.tsx or _app.tsx
<Script
  src="https://analytics.umami.is/script.js"
  data-website-id="your-website-id"
  strategy="afterInteractive"
/>
```

---

### 7. 🔄 n8n (Automation) - 15 minutes

**Why:** Free Zapier alternative for unlimited workflows

**Option A: Railway (Easiest - $5/month)**
1. Go to: https://railway.app
2. Sign up with GitHub
3. **New Project** → **Deploy from template**
4. Search: `n8n`
5. Click **"Deploy n8n"**
6. Wait 3 minutes for deployment
7. Click domain to access n8n

**Environment Variables (Railway):**
```
N8N_BASIC_AUTH_USER=admin
N8N_BASIC_AUTH_PASSWORD=your-secure-password
N8N_HOST=your-app.railway.app
WEBHOOK_URL=https://your-app.railway.app/
```

**Option B: Render (Free with sleep)**
1. Go to: https://render.com
2. New → Web Service
3. Connect GitHub repo
4. Deploy n8n Docker image
5. Free tier (sleeps after 15min inactivity)

**Access n8n:**
```
https://your-n8n-url.railway.app
Username: admin
Password: your-password
```

---

### 8. 💳 STRIPE (Payments) - 5 minutes

**Why:** Accept payments, no monthly fee (pay per transaction)

**Steps:**
1. Go to: https://stripe.com
2. Sign up
3. Complete business verification
4. Go to **Developers → API keys**

**Copy Keys:**
```
Test Mode:
├─ Publishable key (pk_test_...)
└─ Secret key (sk_test_...)

Live Mode (after verification):
├─ Publishable key (pk_live_...)
└─ Secret key (sk_live_...)
```

**Add to `.env.local`:**
```env
# Test mode first
STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx

# Switch to live when ready
# STRIPE_PUBLISHABLE_KEY=pk_live_xxxxxxxxxxxxx
# STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxxxx
```

**Install SDK:**
```bash
npm install stripe @stripe/stripe-js
```

---

## 📝 OPTIONAL (But Useful)

### 9. GOOGLE ANALYTICS 4 (Free)

**Steps:**
1. Go to: https://analytics.google.com
2. Create account → Create property
3. Copy **Measurement ID** (G-XXXXXXXXXX)

**Add to `.env.local`:**
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

### 10. VERCEL (Deployment)

**Steps:**
1. Go to: https://vercel.com
2. Sign up with GitHub
3. Import repository: `moonlit-studios-site`
4. Add all environment variables from `.env.local`
5. Deploy!

**Add Environment Variables in Vercel:**
```
Settings → Environment Variables
└─ Copy each key from .env.local
```

---

## 🎯 COMPLETE `.env.local` TEMPLATE

```env
# === ALREADY HAVE (Keep These) ===
ANTHROPIC_API_KEY=sk-ant-api03-xxxxx
OPENAI_API_KEY=sk-proj-xxxxx
RESEND_API_KEY=re_xxxxx
CALENDLY_API_TOKEN=eyJraWQiOiIxxxxx
CALENDLY_USERNAME=pagadeventures

# === GET THESE (All Free!) ===

# Supabase (Database)
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxx
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxx

# Notion (CRM)
NOTION_API_KEY=secret_xxxxxxxxxxxxx
NOTION_CRM_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Slack (Notifications)
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXX

# Cloudinary (Images)
CLOUDINARY_CLOUD_NAME=moonlit-studios-xxx
CLOUDINARY_API_KEY=123456789012345
CLOUDINARY_API_SECRET=xxxxxxxxxxxxxxxxxxxxx

# Brevo (Email Alternative - Optional)
BREVO_API_KEY=xkeysib-xxxxxxxxxxxxxxxxxxxxx

# Stripe (Payments)
STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx

# Google Analytics (Optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# n8n Webhooks (After deploying n8n)
N8N_WEBHOOK_URL=https://your-n8n.railway.app
```

---

## ✅ VERIFICATION CHECKLIST

After getting all API keys, test each one:

### Database (Supabase)
```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Test query
const { data, error } = await supabase
  .from('testimonials')
  .select('*')
  .limit(1);

console.log('✅ Supabase connected:', data ? 'Success' : 'Error');
```

### CRM (Notion)
```typescript
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

// Test query
const response = await notion.databases.query({
  database_id: process.env.NOTION_CRM_DATABASE_ID!
});

console.log('✅ Notion connected:', response.results.length, 'records');
```

### Notifications (Slack)
```bash
curl -X POST -H 'Content-type: application/json' \
--data '{"text":"✅ Slack integration working!"}' \
$SLACK_WEBHOOK_URL
```

### Email (Brevo)
```typescript
import * as SibApiV3Sdk from '@getbrevo/brevo';

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
apiInstance.setApiKey(
  SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);

// Test email
await apiInstance.sendTransacEmail({
  sender: { email: 'test@moonlstudios.com' },
  to: [{ email: 'your-email@gmail.com' }],
  subject: '✅ Brevo Working!',
  htmlContent: '<p>Email integration successful!</p>'
});
```

---

## 🚀 DEPLOYMENT STEPS

### 1. Update Package Dependencies
```bash
npm install @supabase/supabase-js @notionhq/client @getbrevo/brevo stripe @stripe/stripe-js
```

### 2. Update API Routes

**Auto-Quote Route** (already uses OpenAI ✅)
**Testimonials Route** (update to use Supabase)
**Contact Route** (add Notion CRM integration)
**Calendly Webhook** (add Slack notifications)

### 3. Deploy to Vercel
```bash
# Connect GitHub repo
# Add all environment variables
# Deploy!
```

### 4. Test Live
```
1. Visit live site
2. Request quote → Check email + Notion
3. Book consultation → Check email + Slack
4. Submit testimonial → Check Supabase
5. Verify all automations work
```

---

## 💰 MONTHLY COST BREAKDOWN

| Service | Free Tier | When You'll Need Paid |
|---------|-----------|----------------------|
| Supabase | 500MB DB | When > 500MB (~10k records) |
| Notion | Unlimited | Never (or $10/month for teams) |
| Slack | Unlimited messages | When > 10 members ($8/user) |
| Cloudinary | 25GB | When > 25GB images |
| Brevo | 9,000 emails/month | When > 9k sends ($25/month) |
| n8n | $5/month Railway | Never (self-host free) |
| OpenAI | Pay per use | ~$1/month for quotes |
| Claude | Pay per use | ~$20/month for demos |
| Stripe | 2.9% + $0.30/transaction | Only when you get paid! |
| Vercel | Free | When > 100GB bandwidth |

**TOTAL MONTHLY:** ~$26/month (can drop to $20 if self-hosting n8n)

---

## 🎯 TIME TO COMPLETE

**Total Time:** ~1 hour

- Supabase: 5 min
- Notion: 5 min
- Slack: 3 min
- Cloudinary: 3 min
- Brevo: 5 min
- Umami: 10 min
- n8n: 15 min
- Stripe: 5 min
- Testing: 15 min

**Break it up:**
- Morning: Supabase, Notion, Slack (15 min)
- Lunch: Cloudinary, Brevo (10 min)
- Evening: n8n, Stripe, Testing (35 min)

---

## ✨ WHAT YOU'LL HAVE AFTER SETUP

✅ **Professional Database** (Supabase)
- All quotes stored
- All testimonials tracked
- All contacts logged

✅ **Complete CRM** (Notion)
- All leads in one place
- Status tracking
- Priority scoring

✅ **Instant Notifications** (Slack)
- Phone pings on new leads
- High-value lead alerts

✅ **Image Optimization** (Cloudinary)
- Portfolio images served fast
- Automatic optimization

✅ **More Free Emails** (Brevo)
- 9k/month vs 3k/month
- Same quality as Resend

✅ **Workflow Automation** (n8n)
- Unlimited automations
- No per-task pricing

✅ **Payment Processing** (Stripe)
- Accept deposits online
- Professional checkout

✅ **Analytics** (Umami/GA4)
- Know what's working
- Track conversions

---

## 🎊 READY TO SCALE

With this setup, you can handle:
- ✅ 100+ quotes/month
- ✅ 50+ consultation bookings/month
- ✅ 10,000+ testimonial records
- ✅ 500MB+ database storage
- ✅ 9,000 emails/month
- ✅ Unlimited workflow automations
- ✅ Unlimited CRM records (Notion)

**All for ~$26/month!**

When you outgrow free tiers, you'll be making $10k+/month and can easily afford upgrades. But honestly, these free tiers will last you until you're at $50k-$100k annual revenue!

---

## 🆘 TROUBLESHOOTING

**Supabase not connecting?**
- Check URL includes `https://`
- Verify keys are from same project
- Check if using `anon` key for client-side

**Notion permission denied?**
- Make sure integration is connected to database
- Check database ID is correct (32 chars)
- Verify API key starts with `secret_`

**Slack not posting?**
- Check webhook URL is complete
- Verify channel exists
- Test with curl first

**n8n not working?**
- Check basic auth credentials
- Verify Railway/Render deployment
- Look at deployment logs

---

## 📚 HELPFUL RESOURCES

- **Supabase Docs:** https://supabase.com/docs
- **Notion API:** https://developers.notion.com
- **n8n Tutorials:** https://docs.n8n.io
- **Stripe Integration:** https://stripe.com/docs/payments/checkout
- **Next.js + Supabase:** https://supabase.com/docs/guides/getting-started/quickstarts/nextjs

---

## ✅ FINAL CHECKLIST

Before going live, make sure:

- [ ] All API keys added to `.env.local`
- [ ] All API keys added to Vercel environment variables
- [ ] Supabase tables created
- [ ] Notion CRM database set up
- [ ] Slack channel created
- [ ] Tested each integration locally
- [ ] Deployed to Vercel
- [ ] Tested on live site
- [ ] Calendly webhook pointed to live domain
- [ ] All emails going to correct addresses
- [ ] n8n workflows created and active

**When all checked:** 🎉 **YOU'RE LIVE AND AUTOMATED!**

---

*Setup Guide Created: 2025-11-15*
*For The Nurse Who Codes*

🌙 **Get these APIs and your business runs itself!** 🌙
