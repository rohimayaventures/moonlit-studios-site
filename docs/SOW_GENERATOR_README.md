# 📄 Notion SOW Generator - Complete Guide

## Overview

The **Notion SOW (Statement of Work) Generator** is a fully automated system that creates beautifully structured client contract documents in your Notion workspace. It takes project data and generates a comprehensive, professional SOW with all necessary sections.

---

## ✅ What Was Created

### 1. **New Files**

- **`src/lib/notion-sow.ts`** - Main SOW generator module with TypeScript types and logic
- **`scripts/test-create-sow.ts`** - Test harness script with demo data
- **`docs/SOW_GENERATOR_README.md`** - This documentation file

### 2. **Updated Files**

- **`src/lib/notion.ts`** - Exported `notion` client for reuse (no breaking changes)
- **`.env.example`** - Added comprehensive API documentation + `NOTION_SOW_DATABASE_ID`

---

## 🚀 Quick Start

### Step 1: Set Up Notion Database

1. **Create a new Notion database** with these properties:
   - **Name** (Title) - Auto-filled as "SOW – Client – Project"
   - **Client** (Text)
   - **Project** (Text)
   - **Service Category** (Select: Web & Brand, AI Development, Health-Tech, Ghostwriting, Consulting, Other)
   - **Start Date** (Date)
   - **End Date** (Date)
   - **Total Fee** (Number)

2. **Share the database** with your Notion integration:
   - Open database → Click "..." menu → "Add connections" → Select your integration

3. **Get the database ID** from the URL:
   ```
   https://notion.so/YOUR_WORKSPACE/DATABASE_ID?v=...
                                    ^^^^^^^^^^^^^^^^
   Copy this part
   ```

### Step 2: Add to Environment Variables

Add to your `.env.local`:

```bash
NOTION_SOW_DATABASE_ID=your-sow-database-id-here
```

### Step 3: Test the Connection

First, verify that your Notion integration can access the SOW database:

```bash
npm run test:sow:connection
```

This will test the connection and display database info. If successful, you're ready to create SOWs!

### Step 4: Create a Sample SOW

Run the demo script to create a test SOW in your Notion database:

```bash
npm run test:sow:create
```

This will create a fully populated demo SOW for "Aurora Wellness Studio" with all sections filled in.

---

## 🖥️ CLI Usage

### Quick Commands

```bash
# Test connection to SOW database
npm run test:sow:connection

# Create a sample SOW in Notion
npm run test:sow:create
```

### What to Expect

**If Connection Test Succeeds:**
```
✅ SUCCESS! Notion SOW database is reachable.

📊 Database Info:
   Title: SOW Database
   ID: 2ada9bdf2f32802e947ddd720f4fb35a
   URL: https://notion.so/...

✨ You're ready to create SOW documents!
```

**If Connection Test Fails:**
```
❌ FAILED to connect to Notion SOW database.

   Error: NOTION_SOW_DATABASE_ID not configured

🔧 Troubleshooting:
   1. Make sure NOTION_API_KEY is set in .env.local
   2. Make sure NOTION_SOW_DATABASE_ID is set in .env.local
   3. Verify the database is shared with your Notion integration
   4. Check that the database ID is correct (copy from Notion URL)
```

**If SOW Creation Succeeds:**
```
✅ Demo SOW created in Notion: https://notion.so/...
```

**If SOW Creation Fails:**
```
❌ Failed to create demo SOW

Possible issues:
1. Make sure NOTION_SOW_DATABASE_ID is set in .env.local
2. Verify your Notion database has the correct properties
3. Check that your NOTION_API_KEY has access to the database
```

---

## 💻 How to Use in Your Code

### Basic Example

```typescript
import { createSowPage, SowInput } from '@/lib/notion-sow';

const sowData: SowInput = {
  // BASIC INFO (Required)
  clientName: 'Aurora Wellness Studio',
  projectName: 'Therapist Portal & Booking System',
  projectOverview: 'A custom therapist/coach booking portal with Calendly integration...',

  // METADATA (Optional)
  serviceCategory: 'Web & Brand',
  startDate: '2025-02-01',
  endDate: '2025-04-30',
  totalFee: 8500,
  currency: 'USD',

  // SCOPE (Optional)
  includedServices: [
    'Brand consultation and mood board development',
    'Custom UI/UX design (Figma mockups)',
    'Full-stack web development (Next.js, TypeScript, Tailwind)',
  ],

  technicalRequirements: [
    'Next.js 14+ with App Router',
    'TypeScript for type safety',
    'Tailwind CSS for styling',
  ],

  // ... add more fields as needed
};

// Generate the SOW page
const pageUrl = await createSowPage(sowData);

console.log('✅ SOW created:', pageUrl);
```

### From an API Route

**The API route is already created** at `src/app/api/sow/create/route.ts`.

**Endpoint:** `POST /api/sow/create`

**Request Body:** SOW data as JSON (must include `clientName`, `projectName`, `projectOverview`)

**Response:** Returns Notion page URL on success

To use it from your frontend:

```typescript
const response = await fetch('/api/sow/create', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(sowData),
});

const { pageUrl } = await response.json();
```

### From a Dashboard Action

```typescript
'use client';

import { createSowPage, SowInput } from '@/lib/notion-sow';

function AdminDashboard() {
  const handleGenerateSOW = async () => {
    const sowData: SowInput = {
      clientName: 'Client Name',
      projectName: 'Project Name',
      projectOverview: 'Description...',
      // ... fill in project data
    };

    try {
      const pageUrl = await createSowPage(sowData);
      alert(`SOW created! ${pageUrl}`);
      window.open(pageUrl, '_blank');
    } catch (error) {
      console.error('Failed to create SOW:', error);
    }
  };

  return (
    <button onClick={handleGenerateSOW}>
      Generate SOW
    </button>
  );
}
```

---

## 📋 SOW Structure

The generated SOW includes all these sections:

1. **Project Overview** - High-level project description
2. **Scope of Work** - Included services, technical requirements, responsibilities
3. **Deliverables** - Design, development, AI features, launch items
4. **Timeline & Milestones** - Project phases with due dates
5. **Project Fees & Payment Schedule** - Total fee + payment breakdown
6. **Revision Policy** - How revisions are handled *(uses Moonlit Studios defaults if not specified)*
7. **Out-of-Scope Items** - What's NOT included *(uses Moonlit Studios defaults if not specified)*
8. **Data Privacy & Security** - HIPAA, PHI, compliance notes *(uses Moonlit Studios defaults if not specified)*
9. **AI Use & Limitations** - AI disclaimers and client responsibilities *(uses Moonlit Studios defaults if not specified)*
10. **Support & Maintenance** - Post-launch support terms *(uses Moonlit Studios defaults if not specified)*
11. **Cancellation & Refunds** - Cancellation policies *(uses Moonlit Studios defaults if not specified)*
12. **Confidentiality & Non-Disclosure** - NDA terms *(uses Moonlit Studios defaults if not specified)*
13. **Governing Law & Dispute Resolution** - Jurisdiction and legal terms *(defaults to Colorado, USA if not specified)*
14. **Communication** - Preferred channels, response times *(uses Moonlit Studios defaults if not specified)*
15. **Acceptance & Signatures** - Signature placeholders

---

## 🎨 Customization

All sections are optional except:
- `clientName`
- `projectName`
- `projectOverview`

**Default Behavior:**
- **Legal/Policy sections** (Revision Policy, Out-of-Scope, Data Privacy, AI Use, Support, Cancellation, Confidentiality, Jurisdiction, Communication) automatically use Moonlit Studios default legal clauses when not provided.
- **Project-specific sections** (Deliverables, Milestones, Payments, Responsibilities) are skipped if not provided.
- This ensures every SOW has professional, legally sound terms even with minimal input.

### Example: Minimal SOW

```typescript
const minimalSOW: SowInput = {
  clientName: 'Acme Corp',
  projectName: 'Website Redesign',
  projectOverview: 'Full redesign of the company website with modern UI/UX.',
};

// This will create a basic SOW with all Moonlit Studios default legal policies
const pageUrl = await createSowPage(minimalSOW);
```

**What gets generated from this minimal input:**
- ✅ Project Overview (your custom text)
- ✅ Revision Policy (Moonlit Studios defaults)
- ✅ Out-of-Scope Items (Moonlit Studios defaults)
- ✅ Data Privacy & Security (Moonlit Studios defaults)
- ✅ AI Use & Limitations (Moonlit Studios defaults)
- ✅ Support & Maintenance (Moonlit Studios defaults)
- ✅ Cancellation & Refunds (Moonlit Studios defaults)
- ✅ Confidentiality & NDA (Moonlit Studios defaults)
- ✅ Governing Law (Colorado, USA)
- ✅ Communication Guidelines (Moonlit Studios defaults)
- ⏭️ Deliverables, Milestones, Payments (skipped if not provided)

---

## 🏛️ Default Moonlit Studios Policies

The SOW generator includes professional default legal clauses for all policy sections. These are automatically applied when you don't provide custom values, ensuring every SOW has solid legal protections.

### 1. Revision Policy (DEFAULT_REVISION_POLICY)

**Default includes:**
- Up to 2 rounds of revisions per major deliverable
- Revisions limited to refinements within agreed scope (not complete redesigns)
- Material scope changes require separate estimate
- 14-day feedback window for each deliverable
- Auto-approval if no feedback within review window

**Override by passing:**
```typescript
revisionPolicy: [
  'Custom revision policy item 1',
  'Custom revision policy item 2',
]
```

### 2. Out-of-Scope Items (DEFAULT_OUT_OF_SCOPE_ITEMS)

**Default excludes:**
- Ongoing content updates post-launch
- Third-party integrations not explicitly listed
- Custom features beyond SOW scope
- Marketing/SEO/advertising services
- Hosting/domain/license fees
- Training or documentation beyond delivery handoff
- Physical materials or print design
- Legal/compliance review of content

**Override by passing:**
```typescript
outOfScopeItems: [
  'Custom out-of-scope item 1',
  'Custom out-of-scope item 2',
]
```

### 3. Data Privacy & Security (DEFAULT_DATA_PRIVACY_NOTES)

**Default includes:**
- Client owns all project data
- Moonlit Studios acts as data processor for project delivery only
- Client responsible for HIPAA/GDPR compliance if applicable
- No PHI/PII storage unless explicitly agreed
- Third-party processors (Stripe, Supabase, etc.) have own policies
- Reasonable security measures (encryption, access controls)

**Override by passing:**
```typescript
dataPrivacyNotes: [
  'Custom data privacy note 1',
  'Custom data privacy note 2',
]
```

### 4. AI Use & Limitations (DEFAULT_AI_USE_NOTES)

**Default includes:**
- AI tools used for drafting, research, code scaffolding
- All AI outputs reviewed and edited by humans
- Client must verify accuracy before relying on AI-generated content
- AI may produce inaccurate/outdated information
- No medical, legal, financial, or mental health advice

**Override by passing:**
```typescript
aiUseNotes: [
  'Custom AI use note 1',
  'Custom AI use note 2',
]
```

### 5. Support & Maintenance (DEFAULT_SUPPORT_MAINTENANCE_NOTES)

**Default includes:**
- 30 days post-launch bug fixes included
- Bug fixes cover functionality breaking from original deliverables
- Excludes new features, design changes, content updates
- Excludes issues from client modifications or third-party changes
- Optional ongoing retainer available

**Override by passing:**
```typescript
supportMaintenanceNotes: [
  'Custom support note 1',
  'Custom support note 2',
]
```

### 6. Cancellation & Refunds (DEFAULT_CANCELLATION_POLICY)

**Default includes:**
- Deposit/retainer non-refundable once work begins
- Cancellation requires written notice
- Client pays for work completed to cancellation date
- Refund of unused fees for work not yet performed
- Delivered assets up to cancellation remain client's property (if paid)

**Override by passing:**
```typescript
cancellationPolicy: [
  'Custom cancellation policy 1',
  'Custom cancellation policy 2',
]
```

### 7. Confidentiality & Non-Disclosure (DEFAULT_CONFIDENTIALITY_NOTES)

**Default includes:**
- Both parties protect confidential information
- Client data not shared without consent (except as needed for delivery)
- Moonlit Studios may showcase work in portfolio with client approval
- Confidentiality survives contract termination

**Override by passing:**
```typescript
confidentialityNotes: [
  'Custom confidentiality note 1',
  'Custom confidentiality note 2',
]
```

### 8. Governing Law & Jurisdiction (DEFAULT_JURISDICTION)

**Default:** "the State of Colorado, USA"

**Override by passing:**
```typescript
jurisdiction: 'the State of California, USA'
```

### 9. Communication Guidelines (DEFAULT_COMMUNICATION_NOTES)

**Default includes:**
- Primary communication via email
- Response time: 24-48 hours for non-urgent requests
- Project updates via Notion workspace
- Emergency contact process for urgent issues
- Regular check-in calls scheduled as needed

**Override by passing:**
```typescript
communicationNotes: [
  'Custom communication note 1',
  'Custom communication note 2',
]
```

---

## 🔧 TypeScript Types

All types are fully documented:

```typescript
export interface SowInput {
  // Basic Info
  clientName: string;
  projectName: string;
  projectOverview: string;

  // Metadata
  serviceCategory?: ServiceCategory;
  startDate?: string;  // ISO date
  endDate?: string;    // ISO date
  totalFee?: number;
  currency?: string;

  // Scope
  includedServices?: string[];
  technicalRequirements?: string[];
  clientResponsibilities?: string[];
  studioResponsibilities?: string[];

  // Deliverables
  designDeliverables?: string[];
  developmentDeliverables?: string[];
  aiFeatures?: string[];
  launchDeliverables?: string[];

  // Timeline
  milestones?: SowMilestone[];

  // Payments
  paymentSchedule?: SowPayment[];

  // Policies
  revisionPolicy?: string[];
  outOfScopeItems?: string[];
  dataPrivacyNotes?: string[];
  aiUseNotes?: string[];
  supportMaintenanceNotes?: string[];
  cancellationPolicy?: string[];
  jurisdiction?: string;
  confidentialityNotes?: string[];
  communicationNotes?: string[];

  // Signatures
  clientContactName?: string;
  studioRepName?: string;
}
```

---

## 🧪 Testing

### Test the Connection

```typescript
import { testSowConnection } from '@/lib/notion-sow';

const result = await testSowConnection();

if (result.success) {
  console.log('✅ Connected to SOW database:', result.database.title);
} else {
  console.error('❌ Connection failed:', result.message);
}
```

### Run the Demo Script

```bash
npx tsx scripts/test-create-sow.ts
```

This creates a fully populated SOW with sample data for Aurora Wellness Studio.

---

## 🎯 Use Cases

1. **Quote Acceptance Flow**
   - Client accepts quote → Auto-generate SOW → Send for signature

2. **Onboarding Automation**
   - New client onboarded → Generate SOW from CRM data → Email to client

3. **Admin Dashboard**
   - Manual SOW generation for custom projects
   - Bulk SOW generation from project database

4. **Integration with Docusign/HelloSign**
   - Generate SOW → Convert to PDF → Send for e-signature

---

## 📚 API Reference

### `createSowPage(input: SowInput): Promise<string>`

Creates a new SOW page in Notion.

**Parameters:**
- `input` - SOW data (see `SowInput` type)

**Returns:**
- Promise resolving to Notion page URL

**Throws:**
- Error if `NOTION_SOW_DATABASE_ID` not configured
- Error if Notion API request fails

### `testSowConnection(): Promise<{success: boolean, message: string, database?: object}>`

Tests connection to Notion SOW database.

**Returns:**
- Object with success status, message, and optional database info

---

## 🚨 Troubleshooting

### "NOTION_SOW_DATABASE_ID not configured"

**Solution:** Add `NOTION_SOW_DATABASE_ID` to `.env.local`

### "Database not found"

**Solutions:**
1. Verify database ID is correct
2. Share database with your Notion integration
3. Check integration has proper permissions

### "Invalid database schema"

**Solution:** Ensure database has all required properties (see Step 1 above)

### "Page creation failed"

**Solutions:**
1. Check Notion API key is valid
2. Verify integration has write access
3. Review Notion API error message in console

---

## 🔐 Security Notes

- `NOTION_API_KEY` and `NOTION_SOW_DATABASE_ID` are server-side only
- Never expose these in client-side code
- SOW pages contain sensitive client data - ensure proper Notion permissions
- Consider adding user authentication before allowing SOW generation

---

## 🎉 Next Steps

1. **Create your SOW database** in Notion
2. **Add `NOTION_SOW_DATABASE_ID`** to `.env.local`
3. **Run the test script** to verify setup
4. **Review the default legal policies** in the "Default Moonlit Studios Policies" section above
5. **Integrate into your app** (API route, dashboard, etc.)
6. **Customize default policies** as needed by passing custom values to override defaults

---

## 📞 Support

If you need help:
1. Check the Notion database schema matches requirements
2. Verify environment variables are set correctly
3. Review error messages in console
4. Check Notion integration permissions

---

**Created by:** Claude Code
**For:** Moonlit Studios / Pagade Ventures
**Date:** January 2025
