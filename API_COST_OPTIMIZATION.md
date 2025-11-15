# 💰 API COST OPTIMIZATION GUIDE

## Current APIs You Have:
- ✅ **Anthropic (Claude)** - $ANTHROPIC_API_KEY
- ✅ **OpenAI** - $OPENAI_API_KEY
- ✅ **Resend** - $RESEND_API_KEY
- ✅ **Calendly** - $CALENDLY_API_TOKEN

---

## 💸 COST BREAKDOWN & OPTIMIZATIONS

### Current Auto-Quote System Cost:

**Using Claude Sonnet 4.5:**
- Input: ~1,500 tokens per quote
- Output: ~500 tokens per quote
- Cost per quote: ~$0.015 (1.5 cents)
- 100 quotes/month = **$1.50/month**

**OPTIMIZATION: Use OpenAI GPT-4o-mini Instead!**
- Same quality for simple analysis
- Cost: **~$0.001 per quote** (10x cheaper!)
- 100 quotes/month = **$0.10/month**

---

## 🎯 RECOMMENDED: Budget-Friendly AI Strategy

### Use THIS Hierarchy:

**1. GPT-4o-mini ($0.15/1M input, $0.60/1M output)**
- Auto-quotes ✅
- Email drafting ✅
- Simple analysis ✅
- **Cost:** $5-10/month for 1000s of requests

**2. GPT-4o ($2.50/1M input, $10/1M output)**
- Complex proposals
- Technical specifications
- **Cost:** Only when needed

**3. Claude Sonnet 4.5 ($3/1M input, $15/1M output)**
- **ONLY for AI Lab demos** (client-facing)
- Computer vision
- Healthcare triage
- **Cost:** ~$20/month (100-200 demo uses)

**Total AI Budget:** **~$30/month** (vs $300+ if using Claude for everything!)

---

## 📝 FREE API ALTERNATIVES

### 1. Email (Current: Resend)
**BETTER FREE OPTION: Brevo (formerly Sendinblue)**
- Free tier: 300 emails/day (9,000/month!)
- Resend free: 100/day (3,000/month)
- Both work great, Brevo gives 3x more

**Setup:**
```bash
npm install @getbrevo/brevo
```

```typescript
import * as SibApiV3Sdk from '@getbrevo/brevo';

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

await apiInstance.sendTransacEmail({
  sender: { email: 'hello@moonlstudios.com', name: 'Moonlit Studios' },
  to: [{ email: clientEmail, name: clientName }],
  subject: 'Your Custom Quote',
  htmlContent: quoteEmail
});
```

**Cost:** $0 (up to 9k/month!)

---

### 2. Database (Current: Planning Supabase)

**FREE OPTIONS:**

**A. Supabase (RECOMMENDED)**
- Free tier: 500MB database, 2GB bandwidth
- PostgreSQL (real database)
- Realtime subscriptions
- **Cost:** $0 forever (or $25/month if you scale)

**B. PlanetScale (MySQL)**
- Free tier: 1GB storage, 1 billion reads
- Serverless, auto-scaling
- **Cost:** $0 (hobby tier)

**C. Turso (SQLite)**
- Free tier: 9GB storage, 1 billion row reads
- Fastest queries
- **Cost:** $0

**Winner:** **Supabase** (best features, generous free tier)

---

### 3. File Storage

**FREE OPTIONS:**

**A. Cloudinary**
- Free: 25 GB storage, 25 GB bandwidth/month
- Image optimization
- Perfect for portfolio images
- **Cost:** $0

**B. Supabase Storage**
- Free: 1GB storage (included with database)
- CDN included
- **Cost:** $0

---

### 4. Forms & Surveys

**Instead of:** Typeform ($25/month)

**USE:**

**A. Tally.so**
- Unlimited forms
- Beautiful templates
- Conditional logic
- **Cost:** $0

**B. Google Forms**
- Free forever
- Integrates with Sheets
- **Cost:** $0

**C. Cal.com (Calendly Alternative)**
- Open source
- Self-hosted OR cloud ($12/month)
- More control than Calendly
- **Cost:** $0 (self-hosted) or $12/month

---

### 5. CRM

**Instead of:** HubSpot ($50/month)

**USE:**

**A. Notion (RECOMMENDED)**
- Free personal plan
- Unlimited pages/databases
- Great for small teams
- **Cost:** $0

**B. Airtable**
- Free: 1,000 records/base
- 5 bases (5k records total)
- API access
- **Cost:** $0

**C. Google Sheets + Zapier/n8n**
- Completely free
- Unlimited rows
- Real-time collaboration
- **Cost:** $0

---

### 6. Automation (Instead of Zapier)

**n8n (RECOMMENDED)**
- Self-hosted: $0
- Cloud: $20/month
- Unlimited workflows
- 350+ integrations

**FREE HOSTING OPTIONS:**

**A. Railway**
- $5/month for always-on
- Easy deployment
- **Cost:** $5/month

**B. Render**
- Free tier with spin-down
- Good for low-traffic workflows
- **Cost:** $0 (with 15min spin-up delay)

**C. Self-host on VPS**
- DigitalOcean Droplet: $6/month
- Run n8n + database + everything
- **Cost:** $6/month total

---

### 7. Analytics

**Instead of:** Mixpanel ($20/month)

**USE:**

**A. Plausible (Privacy-first)**
- Self-hosted: Free
- Cloud: $9/month
- GDPR compliant
- **Cost:** $0 (self-hosted) or $9/month

**B. Google Analytics 4**
- Free forever
- Full feature set
- **Cost:** $0

**C. Umami (RECOMMENDED)**
- Open source
- Self-hosted free
- Beautiful dashboard
- **Cost:** $0

```bash
# Deploy Umami on Railway
git clone https://github.com/umami-software/umami
# Connect to Railway
# Done!
```

---

### 8. Payments

**Stripe (No Alternative Needed)**
- No monthly fee
- Pay per transaction (2.9% + $0.30)
- Industry standard
- **Cost:** $0 (until you get paid!)

---

### 9. Proposals & Contracts

**Instead of:** PandaDoc ($49/month)

**USE:**

**A. DocuSeal (Open Source)**
- Self-hosted: Free
- E-signatures included
- PDF generation
- **Cost:** $0

**B. OneDrive + Word Templates**
- Free with Microsoft account
- E-sign via Adobe free tier
- **Cost:** $0

**C. Google Docs + HelloSign**
- Free: 3 documents/month
- Good enough to start
- **Cost:** $0

---

## 💰 OPTIMIZED TECH STACK (TOTAL: ~$20/MONTH!)

| Service | Tool | Cost |
|---------|------|------|
| **Hosting** | Vercel | $0 (hobby) |
| **Database** | Supabase | $0 (free tier) |
| **Email** | Brevo | $0 (9k/month) |
| **Automation** | n8n (Railway) | $5 |
| **AI (Quotes)** | OpenAI GPT-4o-mini | ~$1 |
| **AI (Demos)** | Claude Sonnet | ~$20 |
| **Analytics** | Umami (self-hosted) | $0 |
| **CRM** | Notion | $0 |
| **Forms** | Tally.so | $0 |
| **File Storage** | Cloudinary | $0 |
| **Payments** | Stripe | $0* |
| **Scheduling** | Calendly | $0 (free tier) |

**TOTAL: ~$26/month**
**With revenue: ~$20/month** (Stripe fees only on sales!)

---

## 🔄 UPDATED AUTO-QUOTE API (Using OpenAI)

Let me update the quote API to use GPT-4o-mini instead:

```typescript
// /api/quote/generate/route.ts

import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Replace Anthropic call with:
const completion = await openai.chat.completions.create({
  model: 'gpt-4o-mini', // 10x cheaper than Claude!
  messages: [{
    role: 'system',
    content: 'You are an expert project estimator for Moonlit Studios...'
  }, {
    role: 'user',
    content: analysisPrompt
  }],
  response_format: { type: 'json_object' },
  max_tokens: 1000
});

const aiAnalysis = JSON.parse(completion.choices[0].message.content);

// Cost: ~$0.001 per quote instead of $0.015!
```

---

## 🎯 API KEYS YOU NEED (All Free Tiers!)

### Already Have:
- ✅ OpenAI API Key
- ✅ Anthropic API Key
- ✅ Resend API Key
- ✅ Calendly API Token

### Get These (All FREE):

**1. Brevo (Email - Better than Resend)**
```
1. Go to https://www.brevo.com
2. Sign up (free account)
3. API Keys → Create new key
4. Add to .env.local:
   BREVO_API_KEY=your-key-here
```
**Benefit:** 3x more free emails (9k vs 3k/month)

**2. Supabase (Database)**
```
1. Go to https://supabase.com
2. New project → Copy these:
   NEXT_PUBLIC_SUPABASE_URL=your-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_KEY=your-service-key
```
**Benefit:** Free PostgreSQL database forever

**3. Cloudinary (Image Storage)**
```
1. Go to https://cloudinary.com
2. Sign up (free account)
3. Dashboard → Copy:
   CLOUDINARY_CLOUD_NAME=your-cloud
   CLOUDINARY_API_KEY=your-key
   CLOUDINARY_API_SECRET=your-secret
```
**Benefit:** Free image optimization & CDN

**4. Notion API (CRM)**
```
1. Go to https://www.notion.so/my-integrations
2. New integration → "Moonlit CRM"
3. Copy Internal Integration Token
4. Add to .env.local:
   NOTION_API_KEY=secret_...
   NOTION_CRM_DATABASE_ID=your-database-id
```
**Benefit:** Free unlimited CRM records

**5. Slack Incoming Webhook (Notifications)**
```
1. Go to https://api.slack.com/messaging/webhooks
2. Create webhook for #leads channel
3. Copy webhook URL:
   SLACK_WEBHOOK_URL=https://hooks.slack.com/...
```
**Benefit:** Free instant notifications

---

## 📊 MONTHLY COST COMPARISON

### 😱 EXPENSIVE STACK:
- Hosting: Vercel Pro ($20)
- Database: MongoDB Atlas ($57)
- Email: SendGrid ($20)
- Automation: Zapier ($30)
- AI: Only Claude ($100)
- CRM: HubSpot ($50)
- Forms: Typeform ($25)
- Analytics: Mixpanel ($20)
- Proposals: PandaDoc ($49)

**TOTAL: $371/month** 💸

### 🎉 OPTIMIZED STACK:
- Hosting: Vercel ($0)
- Database: Supabase ($0)
- Email: Brevo ($0)
- Automation: n8n Railway ($5)
- AI: GPT-4o-mini + Claude ($21)
- CRM: Notion ($0)
- Forms: Tally.so ($0)
- Analytics: Umami ($0)
- Proposals: DocuSeal ($0)

**TOTAL: $26/month** ✅

**SAVINGS: $345/month = $4,140/year!**

---

## 🚀 IMMEDIATE ACTION PLAN

**Today (15 minutes):**
1. ✅ Keep current OpenAI key (you have it!)
2. ✅ Update auto-quote to use GPT-4o-mini (I'll do this)
3. ⬜ Sign up for Brevo (5 min)
4. ⬜ Sign up for Supabase (5 min)
5. ⬜ Get Notion API key (5 min)

**Tomorrow (30 minutes):**
1. Connect Supabase to app
2. Migrate testimonials to real database
3. Set up Notion CRM
4. Test quote → Notion workflow

**This Week:**
1. Deploy n8n on Railway ($5/month)
2. Create first automation workflow
3. Set up Slack notifications
4. Launch live and profit!

---

## 💡 PRO TIPS

**1. Use Free Tiers Wisely**
- Most services have generous free tiers
- Only upgrade when you HIT the limits
- Track usage in first month

**2. Batch API Calls**
- Don't call AI for every tiny thing
- Cache results when possible
- Use cheaper models for simple tasks

**3. Self-Host When Possible**
- n8n, Umami, DocuSeal all open source
- One $6 VPS can run everything
- More control, zero vendor lock-in

**4. Stack Services**
- Supabase = Database + Storage + Auth
- Railway = Hosting + Database + CI/CD
- Get multiple features from one tool

---

## 🎯 COST PER CLIENT CALCULATION

**Scenario:** You close 2 projects/month @ $5,000 each

**Monthly Costs:**
- Tech Stack: $26
- Your Time: 20 hours @ $100/hr = $2,000 (billing yourself)

**Revenue:** $10,000
**Costs:** $2,026
**Net Profit:** $7,974

**Tech costs = 0.26% of revenue** ✅

Even with automation, your tech is basically FREE!

---

## ✅ FINAL RECOMMENDED STACK

```env
# Essential (Already Have)
OPENAI_API_KEY=sk-proj-...
ANTHROPIC_API_KEY=sk-ant-...
CALENDLY_API_TOKEN=eyJraWQ...

# Add These (All Free!)
BREVO_API_KEY=xkeysib-...
NEXT_PUBLIC_SUPABASE_URL=https://...
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_KEY=eyJhbGc...
NOTION_API_KEY=secret_...
NOTION_CRM_DATABASE_ID=abc123...
SLACK_WEBHOOK_URL=https://hooks.slack.com/...
CLOUDINARY_CLOUD_NAME=moonlit-studios
CLOUDINARY_API_KEY=123456789
CLOUDINARY_API_SECRET=abc...

# Later (When Needed)
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
```

---

**Bottom Line:** You can run a $10k/month business on a $26/month tech stack! 🚀

*Updated: 2025-11-15*
