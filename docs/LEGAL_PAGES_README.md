# ⚖️ Legal Pages System - Complete Guide

## Overview

The **Legal Pages System** provides 5 comprehensive, public-facing legal policy pages for Moonlit Studios. These pages cover privacy, terms of service, refunds, cookies, and AI use disclosure. All pages are integrated into the site footer with consistent Moonlit Studios branding and styling.

---

## ✅ What Was Created

### 1. **Legal Page Routes (App Router)**

All pages are located in `src/app/legal/*` and follow Next.js App Router conventions:

- **`src/app/legal/privacy-policy/page.tsx`** - Privacy Policy
- **`src/app/legal/terms/page.tsx`** - Terms of Service
- **`src/app/legal/refund-policy/page.tsx`** - Refund & Cancellation Policy
- **`src/app/legal/cookies/page.tsx`** - Cookie & Tracking Notice
- **`src/app/legal/ai-disclosure/page.tsx`** - AI Use Disclosure

### 2. **Updated Footer Component**

- **`src/app/components/Footer.tsx`** - Added legal links row with centered layout

---

## 📋 Legal Pages Overview

### 1. Privacy Policy (`/legal/privacy-policy`)

**Purpose:** Explains how Moonlit Studios collects, uses, and protects user information.

**Key Sections:**
- **Who We Are** - Moonlit Studios, a Pagade Ventures brand, based in Colorado, USA
- **Information We Collect** - Contact info, project data, payment info (via Stripe), usage data, AI chat logs
- **How We Use Your Information** - Respond to inquiries, manage projects, send transactional emails, improve services
- **Legal Basis** - Consent, legitimate interest, performance of a contract
- **Sharing of Information** - Third-party processors (Stripe, Calendly, Supabase, AI APIs) - **No selling of personal data**
- **Data Retention** - Retain as long as necessary; deletion requests available
- **Your Rights** - Access, correction, deletion, opt-out of marketing
- **Security** - Reasonable measures; no system is 100% secure
- **International Transfers** - Some providers may store data outside user's country
- **Contact** - hello@moonlitstudios.com
- **Updates** - Policy may be updated; check "Last updated" date

**Tone:** Professional but human-readable. Transparent about data practices.

---

### 2. Terms of Service (`/legal/terms`)

**Purpose:** Legal terms and conditions for using the Moonlit Studios website and services.

**Key Sections:**
- **Acceptance of Terms** - By using the site, you agree to these terms
- **Who We Are** - Moonlit Studios / Pagade Ventures, Colorado, USA
- **Use of the Site** - Lawful purposes only; no unauthorized access, scraping, or malware
- **No Medical, Legal, or Financial Advice** ⚠️ - **Even though founder is a nurse, nothing on the site constitutes professional advice**
- **AI Tools and Kai** - AI outputs may be inaccurate/incomplete; user must verify before relying on them
- **Intellectual Property** - Branding, designs, code belong to Moonlit Studios unless specified in SOW
- **Third-Party Services** - Stripe, Calendly, analytics, AI APIs have their own terms
- **Limitation of Liability** - Not liable for indirect/consequential damages; liability capped at fees paid
- **Indemnification** - User agrees to indemnify Moonlit Studios against claims from misuse
- **Governing Law** - Colorado, USA
- **Changes to Terms** - May be updated; continued use implies acceptance

**Tone:** Clear legal protection while remaining accessible. Strong disclaimers about AI and professional advice.

---

### 3. Refund & Cancellation Policy (`/legal/refund-policy`)

**Purpose:** Outlines refund and cancellation terms for services, projects, and consultations.

**Key Sections:**
- **General Overview** - Covers strategy sessions, deposits, retainers, custom work
- **Consultations / Strategy Calls** - **Non-refundable once delivered**; rescheduling requires 24-48 hours' notice
- **Project Deposits** - **Non-refundable once work begins**; secures spot in schedule
- **In-Progress Projects** - Client pays for work completed to cancellation date; unused fees refunded
- **Digital Deliverables** - **Non-refundable once delivered** (intangible nature)
- **Moonlit Studios Cancellations** - If we cancel, unused fees refunded
- **How to Request a Cancellation** - Written email to hello@moonlitstudios.com; response within 1-2 business days

**Tone:** Fair but firm. Clear expectations about non-refundable items.

---

### 4. Cookie & Tracking Notice (`/legal/cookies`)

**Purpose:** Explains how cookies and tracking technologies are used on the site.

**Key Sections:**
- **What Are Cookies?** - Simple explanation of cookies (session vs. persistent)
- **How We Use Cookies** - Essential functionality, privacy-friendly analytics (Plausible/Umami), preferences
- **Types of Cookies:**
  - **Essential Cookies** - Required for site function; cannot opt out
  - **Performance / Analytics Cookies** - Anonymous usage data; privacy-friendly tools (no cross-site tracking)
  - **Preference Cookies** - Remember settings (theme, form auto-fill)
- **Your Choices** - Browser settings to block/delete cookies; analytics opt-out options
  - Links to cookie management guides for Chrome, Firefox, Safari, Edge
- **Third-Party Services** - Stripe, Calendly, analytics providers may set their own cookies
- **Updates** - Notice may be updated; check "Last updated" date

**Tone:** Educational and transparent. **No intrusive advertising cookies.**

---

### 5. AI Use Disclosure (`/legal/ai-disclosure`)

**Purpose:** Comprehensive disclosure about how AI is used and its limitations.

**Key Sections:**
- **Overview** - AI used for creativity, productivity, and innovation
- **How AI Is Used:**
  - Drafting and ideation
  - Code scaffolding and development
  - Interactive support (Kai AI assistant)
  - Research and analysis
  - Internal productivity tools
  - **All AI outputs reviewed and edited by humans before delivery**
- **Limitations of AI:**
  - May generate incorrect/outdated information
  - May produce inaccurate/incomplete outputs
  - Lacks human judgment and context
  - Not a substitute for professional advice
  - **User must verify AI content before acting on it**
- **No Medical, Legal, Financial, or Mental Health Advice** ⚠️ - **Prominent warning section**
  - Even though founder is a nurse, **AI does not provide professional advice**
  - **Must consult licensed professionals**
- **Data You Share With AI Tools:**
  - Avoid ultra-sensitive data (passwords, SSN, financial details)
  - Be cautious with PHI (Protected Health Information) - user responsible for HIPAA compliance
  - Confidential business info - user accepts risk
- **Third-Party AI Providers** - OpenAI, Anthropic; links to their terms/privacy policies
- **Your Responsibility:**
  - Verify accuracy before relying on AI outputs
  - Don't use for professional decisions without consulting experts
  - Understand AI may contain errors/biases

**Tone:** Transparent, educational, and protective. Strong disclaimers about professional advice.

---

## 🎨 Design & Styling

All legal pages share a consistent design:

### Layout
```tsx
<main className="min-h-screen bg-gradient-to-b from-midnight via-deepOcean to-midnight text-moonlightSilver px-6 py-16">
  <div className="max-w-4xl mx-auto space-y-8">
    {/* Header */}
    <header className="space-y-2">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-pearlWhite">
        Page Title
      </h1>
      <p className="text-sm text-moonlightSilver/80">
        Last updated: {new Date().getFullYear()}
      </p>
    </header>

    {/* Content sections */}
    <div className="space-y-8 text-sm md:text-base leading-relaxed">
      {/* Sections with h2 headings, paragraphs, lists */}
    </div>
  </div>
</main>
```

### Typography
- **H1** (Page Title): `text-3xl md:text-4xl font-semibold text-pearlWhite`
- **H2** (Section Headings): `text-2xl font-semibold text-lunarGold`
- **H3** (Subsection Headings): `text-lg font-semibold text-starlight`
- **Body Text**: `text-sm md:text-base text-moonlightSilver`
- **Links**: `text-starlight hover:underline`

### Custom Colors (from Tailwind config)
- **midnight** - Dark blue-black background
- **deepOcean** - Deep blue gradient
- **moonlightSilver** - Light silver text
- **pearlWhite** - Bright white for headings
- **lunarGold** - Gold accent for section headings
- **starlight** - Bright blue for links
- **phoenixFire** - Red/orange for warnings

### Spacing
- **Section spacing**: `space-y-8` (2rem between sections)
- **Paragraph spacing**: `space-y-4` (1rem between paragraphs)
- **List spacing**: `space-y-2` (0.5rem between list items)

---

## 🔗 Footer Integration

The footer component was updated to include legal links in a centered row:

### Location
`src/app/components/Footer.tsx` (lines 168-199)

### Footer Structure
```tsx
{/* Copyright Section */}
<div className="border-t border-deepOcean/60">
  <div className="mx-auto max-w-6xl px-6 py-6 space-y-4">
    {/* Legal Links */}
    <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-moonlightSilver/70">
      <Link href="/legal/privacy-policy">Privacy</Link>
      <span className="text-moonlightSilver/40">·</span>
      <Link href="/legal/terms">Terms</Link>
      <span className="text-moonlightSilver/40">·</span>
      <Link href="/legal/refund-policy">Refunds</Link>
      <span className="text-moonlightSilver/40">·</span>
      <Link href="/legal/cookies">Cookies</Link>
      <span className="text-moonlightSilver/40">·</span>
      <Link href="/legal/ai-disclosure">AI Use</Link>
    </div>

    {/* Copyright and Mischief Managed */}
    <div className="flex flex-col gap-2 text-xs text-moonlightSilver/80 md:flex-row md:items-center md:justify-between">
      <p>© 2025 Moonlit Studios · A Pagade Ventures Brand</p>
      <p className="italic text-starlight/70">Mischief Managed</p>
    </div>
  </div>
</div>
```

### Key Features
- **Centered layout** - Legal links centered for better visual balance
- **Dot separators** - Subtle `·` separators between links
- **Hover effects** - Links change to `moonlightSilver` on hover
- **Mobile responsive** - `flex-wrap` ensures links wrap on small screens
- **Maintains existing footer** - Keeps logo, quick links, services, connect sections, and Harry Potter easter egg intact

---

## 📱 Mobile Responsiveness

All legal pages are fully responsive:

- **Text sizing**: `text-sm md:text-base` (smaller on mobile, larger on desktop)
- **Heading sizing**: `text-3xl md:text-4xl` for H1
- **Padding**: Consistent `px-6 py-16` for mobile comfort
- **Max width**: `max-w-4xl mx-auto` prevents overly wide text on large screens
- **Footer links**: `flex-wrap` allows links to stack on narrow screens

---

## 🧪 Testing

### Build Status
✅ All pages built successfully and are included in the static build:

```
Route (app)
├ ○ /legal/ai-disclosure
├ ○ /legal/cookies
├ ○ /legal/privacy-policy
├ ○ /legal/refund-policy
└ ○ /legal/terms

○ (Static) prerendered as static content
```

### Manual Testing Checklist
- [ ] All 5 legal pages load without errors
- [ ] Footer links navigate to correct pages
- [ ] All pages render correctly on mobile, tablet, desktop
- [ ] External links (browser cookie guides, AI provider terms) open in new tabs
- [ ] Text is readable with sufficient contrast
- [ ] No console errors or warnings
- [ ] SEO metadata is present (title, description)

---

## 🔧 Customization

### Updating Content

To update legal content, edit the respective page file:

```tsx
// Example: Update Privacy Policy
// File: src/app/legal/privacy-policy/page.tsx

<section className="space-y-4">
  <h2 className="text-2xl font-semibold text-lunarGold">New Section Title</h2>
  <p>Your updated content here...</p>
  <ul className="list-disc list-inside space-y-2 ml-4">
    <li>New policy point 1</li>
    <li>New policy point 2</li>
  </ul>
</section>
```

### Updating "Last Updated" Date

The date is automatically set to the current year:
```tsx
<p className="text-sm text-moonlightSilver/80">
  Last updated: {new Date().getFullYear()}
</p>
```

To use a specific date:
```tsx
<p className="text-sm text-moonlightSilver/80">
  Last updated: January 19, 2025
</p>
```

### Adding a New Legal Page

1. **Create directory:**
   ```bash
   mkdir -p src/app/legal/new-policy
   ```

2. **Create `page.tsx`:**
   ```tsx
   export const metadata = {
     title: "New Policy | Moonlit Studios",
     description: "Description of the new policy.",
   };

   export default function NewPolicyPage() {
     return (
       <main className="min-h-screen bg-gradient-to-b from-midnight via-deepOcean to-midnight text-moonlightSilver px-6 py-16">
         <div className="max-w-4xl mx-auto space-y-8">
           <header className="space-y-2">
             <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-pearlWhite">
               New Policy Title
             </h1>
             <p className="text-sm text-moonlightSilver/80">
               Last updated: {new Date().getFullYear()}
             </p>
           </header>

           <div className="space-y-8 text-sm md:text-base leading-relaxed">
             {/* Your sections here */}
           </div>
         </div>
       </main>
     );
   }
   ```

3. **Add link to Footer:**
   ```tsx
   <Link href="/legal/new-policy" className="hover:text-moonlightSilver transition">
     New Policy
   </Link>
   ```

---

## 🎯 Use Cases

### 1. Client Onboarding
- Share links to Terms of Service and Refund Policy in onboarding emails
- Include Privacy Policy link in all email footers

### 2. AI Tool Compliance
- Link to AI Use Disclosure in Kai chat widget
- Reference in SOW templates when AI is used in project delivery

### 3. Marketing Compliance
- Privacy Policy link required for GDPR compliance
- Cookie Notice for EU visitors

### 4. Legal Protection
- Terms of Service provides liability protection
- Refund Policy sets clear expectations about deposits and cancellations

### 5. Transparency & Trust
- AI Use Disclosure builds trust by being transparent about AI usage
- Privacy Policy demonstrates commitment to data protection

---

## 📚 Key Legal Points

### Disclaimers

**Medical/Legal/Financial Advice:**
- Even though founder is a nurse and healthcare leader, **nothing on the site or from AI tools constitutes professional advice**
- Strong disclaimers in both Terms of Service and AI Use Disclosure

**AI Limitations:**
- AI may produce inaccurate/incomplete information
- Users must verify before relying on AI outputs
- Not a substitute for human expertise

### Liability Protection

**Limitation of Liability:**
- Not liable for indirect, consequential, or special damages
- Liability capped at fees paid for services

**Indemnification:**
- Users agree to indemnify Moonlit Studios against claims from misuse

### Refund Terms

**Non-Refundable Items:**
- Strategy calls/consultations (once delivered)
- Project deposits (once work begins)
- Digital deliverables (once delivered)

**Refundable Scenarios:**
- Unused fees for work not yet performed (if project cancelled)
- If Moonlit Studios cancels due to unforeseen circumstances

### Data Privacy

**What We Collect:**
- Contact info, project data, usage analytics
- Payment data processed by Stripe (not stored directly)

**What We Don't Do:**
- **We do not sell personal data to third parties**
- No intrusive advertising cookies

### Jurisdiction

**Governing Law:**
- All policies governed by **Colorado, USA** law
- Disputes resolved in Colorado courts

---

## 🔐 Security & Compliance

### GDPR Considerations
- Privacy Policy covers data collection, usage, retention, and user rights
- Cookie Notice allows users to manage cookie preferences
- Contact email for data deletion requests

### HIPAA Awareness
- Privacy Policy notes that client is responsible for HIPAA compliance
- AI Use Disclosure warns about sharing PHI
- Data Privacy & Security section in SOW generator

### Accessibility
- Semantic HTML (proper heading hierarchy: h1 → h2 → h3)
- Sufficient color contrast for readability
- Mobile-responsive design

---

## 🚨 Important Notes

### Before Launching
1. **Have a lawyer review** - These pages are written in human-readable language but should be reviewed by a licensed attorney before relying on them for legal protection.
2. **Update "Last Updated" dates** - When content changes, update the date manually or use a specific date instead of `getFullYear()`.
3. **Verify all links** - Check that external links (browser cookie guides, AI provider terms) are current.
4. **Test on production** - Ensure all pages render correctly on the live site.

### Maintenance
- **Review annually** - Update policies as business practices change
- **Track changes** - Keep a changelog of policy updates
- **Notify users** - For significant changes, send notification emails to existing clients
- **Archive old versions** - Keep previous policy versions for legal records

---

## 📞 Contact

For questions about legal pages or to request changes:
- **Email:** hello@moonlitstudios.com
- **Location:** Colorado, USA

---

## 🎉 Summary

**What You Now Have:**
- ✅ 5 comprehensive legal policy pages
- ✅ Footer integration with centered legal links
- ✅ Mobile-responsive, branded design
- ✅ Strong disclaimers for AI use and professional advice
- ✅ Clear refund/cancellation policies
- ✅ Privacy-friendly approach (no intrusive tracking)
- ✅ Colorado, USA jurisdiction
- ✅ SEO metadata on all pages

**Next Steps:**
1. Have a lawyer review all 5 pages
2. Update any content to match your specific business practices
3. Set specific "Last updated" dates (if desired)
4. Add links to legal pages in email templates (Privacy Policy in footer)
5. Reference AI Use Disclosure in Kai chat widget
6. Include Terms of Service link in client contracts/SOWs

---

**Created by:** Claude Code
**For:** Moonlit Studios / Pagade Ventures
**Date:** January 2025
