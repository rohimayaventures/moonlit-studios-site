/**
 * Test harness for SOW Generator
 *
 * HOW TO RUN:
 * 1. Make sure NOTION_SOW_DATABASE_ID is set in .env.local
 * 2. Run: npx tsx scripts/test-create-sow.ts
 *    (or if you have ts-node: ts-node scripts/test-create-sow.ts)
 *
 * This will create a demo SOW page in your Notion database.
 */

import { createSowPage, SowInput } from '../src/lib/notion-sow';

// Sample SOW data for testing
const demoSowData: SowInput = {
  // BASIC INFO
  clientName: 'Aurora Wellness Studio',
  projectName: 'Therapist Portal & Booking System',
  projectOverview:
    'Moonlit Studios will design and develop a custom therapist/coach booking portal for Aurora Wellness Studio. ' +
    'The platform will feature service pages with calming brand aesthetics, Calendly integration for client bookings, ' +
    'and contact forms with email notifications. This is a full-stack web application built with Next.js, Tailwind CSS, and Supabase.',

  // METADATA
  serviceCategory: 'Web & Brand',
  startDate: '2025-02-01',
  endDate: '2025-04-30',
  totalFee: 8500,
  currency: 'USD',

  // SCOPE
  includedServices: [
    'Brand consultation and mood board development',
    'Custom UI/UX design (Figma mockups)',
    'Full-stack web development (Next.js 14, TypeScript, Tailwind)',
    'Calendly integration for online booking',
    'Contact form with email notifications',
    'Mobile-responsive design',
    'SEO optimization (meta tags, sitemap, etc.)',
    '30 days of post-launch support',
  ],

  technicalRequirements: [
    'Next.js 14+ with App Router',
    'TypeScript for type safety',
    'Tailwind CSS for styling',
    'Supabase for backend (forms, contact data)',
    'Calendly API integration',
    'Vercel deployment',
    'Custom domain setup',
  ],

  clientResponsibilities: [
    'Provide brand assets (logo, color palette, fonts)',
    'Provide written content for service pages',
    'Provide access to Calendly account for integration',
    'Review and approve designs within 5 business days',
    'Test the site on staging before launch',
    'Provide timely feedback during development phases',
  ],

  studioResponsibilities: [
    'Design calming, on-brand UI/UX',
    'Develop fully functional booking and contact system',
    'Integrate Calendly and configure email notifications',
    'Deploy to production and configure custom domain',
    'Provide 30 days of bug fixes post-launch',
    'Deliver source code and documentation',
  ],

  // DELIVERABLES
  designDeliverables: [
    'Figma design file with full site mockups (desktop + mobile)',
    'Brand style guide (colors, typography, spacing)',
    'Final design assets exported for development',
  ],

  developmentDeliverables: [
    'Fully functional Next.js web application',
    'Responsive design (mobile, tablet, desktop)',
    'Calendly booking integration',
    'Contact form with Supabase backend',
    'Email notification system',
    'SEO optimization (meta tags, Open Graph, sitemap)',
  ],

  launchDeliverables: [
    'Production deployment on Vercel',
    'Custom domain configuration',
    'Analytics setup (Google Analytics or similar)',
    'Handoff documentation (README, deployment guide)',
    'Source code repository access',
  ],

  // TIMELINE
  milestones: [
    {
      name: 'Kickoff & Brand Discovery',
      description: 'Initial consultation, gather brand assets, finalize mood board',
      dueDate: '2025-02-07',
    },
    {
      name: 'Design Phase Complete',
      description: 'Figma mockups approved by client',
      dueDate: '2025-02-28',
    },
    {
      name: 'Development Phase 1 (Core Site)',
      description: 'Homepage, service pages, responsive layout built',
      dueDate: '2025-03-21',
    },
    {
      name: 'Development Phase 2 (Integrations)',
      description: 'Calendly booking, contact forms, email notifications working',
      dueDate: '2025-04-11',
    },
    {
      name: 'Testing & Launch',
      description: 'Client testing, bug fixes, production deployment',
      dueDate: '2025-04-30',
    },
  ],

  // PAYMENTS
  paymentSchedule: [
    {
      label: 'Deposit (Non-refundable)',
      amount: 2550,
      dueCondition: 'Due upon signing SOW',
    },
    {
      label: 'Design Milestone',
      amount: 2125,
      dueCondition: 'Due upon Figma design approval',
    },
    {
      label: 'Development Milestone',
      amount: 2125,
      dueCondition: 'Due upon staging site delivery',
    },
    {
      label: 'Final Payment',
      amount: 1700,
      dueCondition: 'Due upon production launch',
    },
  ],

  // POLICIES
  revisionPolicy: [
    'Included: Up to 2 rounds of design revisions',
    'Included: Reasonable feedback-driven development adjustments',
    'Additional major scope changes will be quoted separately',
  ],

  outOfScopeItems: [
    'Ongoing content updates after launch',
    'Custom CMS or blog functionality',
    'E-commerce or payment processing',
    'Third-party app integrations beyond Calendly',
    'Hosting costs (client responsible for Vercel/domain fees)',
    'Marketing or advertising services',
  ],

  dataPrivacyNotes: [
    'No PHI (Protected Health Information) will be collected or stored unless explicitly agreed upon.',
    'Client is responsible for HIPAA compliance if applicable to their practice.',
    'Contact form data stored in Supabase (client owns the Supabase account).',
    'Calendly has its own privacy policy – client responsible for compliance.',
  ],

  supportMaintenanceNotes: [
    'Included: 30 days of bug fixes post-launch',
    'Excluded: New features, content updates, design changes',
    'Optional: Monthly retainer available for ongoing support ($500-$1500/mo based on needs)',
  ],

  cancellationPolicy: [
    'Deposit is non-refundable.',
    'If cancelled after design phase: 50% of total project fee owed.',
    'If cancelled after development starts: 75% of total project fee owed.',
    'Client retains rights to all deliverables paid for up to cancellation date.',
  ],

  confidentialityNotes: [
    'Both parties agree to keep proprietary information confidential.',
    'Moonlit Studios may showcase general project details in portfolio (with client approval).',
    'Client data will not be shared with third parties except as required for project delivery.',
  ],

  jurisdiction: 'the State of Colorado, USA',

  communicationNotes: [
    'Primary communication via email (hello@moonlitstudios.com)',
    'Project updates shared via Notion workspace (read-only client access)',
    "Bi-weekly check-in calls scheduled at client's convenience",
    'Response time: 24-48 hours for non-urgent requests',
  ],

  // SIGNATURES
  clientContactName: 'Sarah Johnson, Founder',
  studioRepName: 'Destiny Pagade, Moonlit Studios',
};

// Run the test
async function main() {
  console.log('🚀 Creating demo SOW page in Notion...\n');

  try {
    const pageUrl = await createSowPage(demoSowData);

    console.log('\n✅ SUCCESS!');
    console.log(`📄 Your SOW page is ready: ${pageUrl}`);
    console.log('\nOpen the link above to view your Statement of Work.');

  } catch (error: any) {
    console.error('\n❌ ERROR:', error.message);
    console.error('\nPossible issues:');
    console.error('1. Make sure NOTION_SOW_DATABASE_ID is set in .env.local');
    console.error('2. Verify your Notion database has the correct properties (Name, Client, Project, etc.)');
    console.error('3. Check that your NOTION_API_KEY has access to the database');
    process.exit(1);
  }
}

main();
