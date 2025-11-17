# USER TASKS - Moonlit Studios Website

## CRITICAL - Must Complete Before Launch

### 1. Environment Variables Verification
- [ ] **Vercel Environment Variables**: Copy ALL variables from `.env.local` to Vercel dashboard
  - Go to: https://vercel.com/your-project/settings/environment-variables
  - Add each variable from `.env.local`
  - Ensure `NEXT_PUBLIC_*` variables are set for Production, Preview, AND Development environments
  - Non-public variables only need Production environment

- [ ] **Domain Verification**:
  - [ ] Update domain to `www.moonlitstudios.com` in Vercel project settings
  - [ ] Update domain in Resend verified domains
  - [ ] Update Calendly webhook URL to: `https://www.moonlitstudios.com/api/calendly/webhook`
  - [ ] Update Stripe webhook URL to: `https://www.moonlitstudios.com/api/stripe/webhook`

### 2. Email Configuration
- [ ] **Resend Setup**:
  - [ ] Verify sending domain `moonlitstudios.com` in Resend dashboard
  - [ ] Add SPF/DKIM/DMARC records to DNS
  - [ ] Test email sending from production environment
  - [ ] Verify emails don't go to spam (send test to Gmail, Outlook, etc.)

- [ ] **Email Addresses**:
  - [ ] Create `hello@moonlitstudios.com` inbox
  - [ ] Create `kai@moonlitstudios.com` inbox (for Kai widget emails)
  - [ ] Set up email forwarding if needed
  - [ ] Update `BUSINESS_EMAIL` in Vercel to correct address

### 3. Stripe Payment Testing
- [ ] **Webhook Configuration**:
  - [ ] Go to Stripe Dashboard > Developers > Webhooks
  - [ ] Add endpoint: `https://www.moonlitstudios.com/api/stripe/webhook`
  - [ ] Copy webhook signing secret to Vercel as `STRIPE_WEBHOOK_SECRET`
  - [ ] Select events to listen for:
    - [ ] `checkout.session.completed`
    - [ ] `payment_intent.succeeded`
    - [ ] `payment_intent.payment_failed`

- [ ] **Test Payment Flow**:
  - [ ] Use Stripe test mode card: `4242 4242 4242 4242`
  - [ ] Test each service checkout (Small Business, Creative Design, etc.)
  - [ ] Verify email notifications are sent
  - [ ] Verify Notion CRM entries are created
  - [ ] Verify Slack notifications work
  - [ ] Check success/cancel page redirects work

- [ ] **Switch to Live Mode** (when ready):
  - [ ] Update `STRIPE_SECRET_KEY` to live key
  - [ ] Update `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` to live key
  - [ ] Update webhook secret to live webhook secret
  - [ ] Test one live transaction (can refund immediately)

### 4. Database & CRM Testing
- [ ] **Supabase**:
  - [ ] Verify tables exist: `testimonials`, `quotes`, `leads`
  - [ ] Test testimonial submission from /testimonial page
  - [ ] Test quote generation from /get-quote page
  - [ ] Verify RLS (Row Level Security) policies are correct

- [ ] **Notion CRM**:
  - [ ] Test lead creation from contact form
  - [ ] Test lead creation from quote form
  - [ ] Verify all fields populate correctly
  - [ ] Check lead scoring/priority assignment works

### 5. Calendly Integration
- [ ] **Webhook Configuration**:
  - [ ] Login to Calendly
  - [ ] Go to Integrations > Webhooks
  - [ ] Add webhook: `https://www.moonlitstudios.com/api/calendly/webhook`
  - [ ] Select events: scheduled, canceled, rescheduled
  - [ ] Test by booking/canceling a test consultation

- [ ] **Testing**:
  - [ ] Book test consultation from /book page
  - [ ] Verify confirmation email sent to you
  - [ ] Verify confirmation email sent to client
  - [ ] Check Notion CRM lead created
  - [ ] Check Slack notification sent
  - [ ] Test cancellation flow

### 6. Analytics & Monitoring
- [ ] **Optional - Plausible/Umami**:
  - [ ] If using analytics, uncomment variables in `.env.local`
  - [ ] Add analytics script to Vercel
  - [ ] Verify tracking works on production

- [ ] **Error Monitoring** (Recommended):
  - [ ] Consider adding Sentry for error tracking
  - [ ] Update logger.ts to send errors to Sentry in production

### 7. SEO & Performance
- [ ] **Google Search Console**:
  - [ ] Add property for `www.moonlitstudios.com`
  - [ ] Submit sitemap: `https://www.moonlitstudios.com/sitemap.xml`
  - [ ] Verify ownership via DNS or meta tag

- [ ] **OpenGraph Images**:
  - [ ] Create/update `/public/og-image.png` (1200x630px)
  - [ ] Test social sharing on Facebook, LinkedIn, Twitter
  - [ ] Use debuggers: facebook.com/sharing/debugger, cards-dev.twitter.com/validator

- [ ] **Performance Testing**:
  - [ ] Run Lighthouse audit on all major pages
  - [ ] Aim for 90+ performance score
  - [ ] Check mobile performance specifically

### 8. Security
- [ ] **API Rate Limiting** (Future):
  - [ ] Consider adding Upstash Redis for rate limiting
  - [ ] Uncomment variables when ready
  - [ ] Implement rate limiting middleware

- [ ] **CORS & Security Headers**:
  - [ ] Verify CORS settings in API routes
  - [ ] Check security headers are set in production

### 9. Content Review
- [ ] **About Page**:
  - [ ] Update bio/story if needed
  - [ ] Verify all links work
  - [ ] Check images load properly

- [ ] **Services Pages**:
  - [ ] Verify pricing is current
  - [ ] Check service descriptions are accurate
  - [ ] Test all CTA buttons work

- [ ] **Portfolio** (when ready):
  - [ ] Add real project case studies
  - [ ] Add client testimonials
  - [ ] Ensure all images are optimized

### 10. Mobile Testing
- [ ] Test on real devices:
  - [ ] iPhone (Safari)
  - [ ] Android (Chrome)
  - [ ] iPad/Tablet
- [ ] Test all forms on mobile
- [ ] Test Kai widget on mobile
- [ ] Verify navigation works smoothly

## NICE TO HAVE - Post-Launch

### 11. Blog Setup (Future)
- [ ] Create blog content plan
- [ ] Set up MDX or CMS for blog posts
- [ ] Create blog layout and components
- [ ] Add RSS feed
- [ ] Implement related posts feature

### 12. Advanced Features
- [ ] A/B testing for landing pages
- [ ] Advanced analytics dashboards
- [ ] Client portal for project updates
- [ ] Case study templates
- [ ] Referral program

### 13. Marketing
- [ ] Set up Google Business Profile
- [ ] Create LinkedIn company page
- [ ] Prepare launch announcement
- [ ] Plan social media strategy
- [ ] Consider paid ads (Google, LinkedIn, Facebook)

## DEPLOYMENT CHECKLIST

Before each deployment:
1. [ ] Run `npm run build` locally to check for errors
2. [ ] Test critical user flows (contact, quote, booking)
3. [ ] Verify all environment variables are set in Vercel
4. [ ] Check lighthouse scores haven't regressed
5. [ ] Test on mobile device
6. [ ] Clear browser cache and test again
7. [ ] Merge to main branch (triggers auto-deploy)
8. [ ] Monitor Vercel deployment logs
9. [ ] Test production URL after deploy
10. [ ] Check error logs in Vercel dashboard

## MAINTENANCE TASKS

### Weekly
- [ ] Check Vercel analytics for errors
- [ ] Review new leads in Notion CRM
- [ ] Respond to contact form submissions
- [ ] Check Slack for important notifications
- [ ] Test critical user flows still work

### Monthly
- [ ] Review and respond to testimonials
- [ ] Update services/pricing if needed
- [ ] Check and renew SSL certificates (auto in Vercel)
- [ ] Review API usage costs (Anthropic, OpenAI, etc.)
- [ ] Backup Supabase database
- [ ] Update dependencies: `npm update`

### Quarterly
- [ ] Rotate API keys for security
- [ ] Review and update portfolio
- [ ] Analyze traffic and conversion metrics
- [ ] Plan content updates
- [ ] Review and optimize SEO

## SUPPORT & DOCUMENTATION

- **Project Documentation**: See `/docs` folder for technical details
- **Kai Widget**: See `/docs/kai/KAI_COMPLETE.md`
- **Setup Guides**: See `/docs/setup/` folder
- **API Docs**: See `/docs/api/` folder

## EMERGENCY CONTACTS

- **Vercel Support**: https://vercel.com/support
- **Stripe Support**: https://support.stripe.com
- **Supabase Support**: https://supabase.com/support
- **Resend Support**: hello@resend.com
- **Calendly Support**: https://help.calendly.com

## NOTES

- All API keys and secrets should NEVER be committed to Git
- Always test in preview deployment before merging to main
- Keep `.env.local` file secure and backed up separately
- Monitor costs in each service dashboard weekly

---

**Last Updated**: November 17, 2025
**Status**: Ready for final testing and deployment
