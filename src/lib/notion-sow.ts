/**
 * Notion SOW (Statement of Work) Generator
 *
 * This module provides functionality to create fully structured Statement of Work
 * pages in Notion for Moonlit Studios / Pagade Ventures client projects.
 *
 * USAGE:
 * 1. Set NOTION_SOW_DATABASE_ID in .env.local
 * 2. Import and call createSowPage() with project data
 * 3. Returns Notion page ID or URL
 */

import { Client } from '@notionhq/client';

// Reuse existing Notion client configuration
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const SOW_DATABASE_ID = process.env.NOTION_SOW_DATABASE_ID || '';

// ========================================
// 🌙 MOONLIT STUDIOS — DEFAULT SOW CLAUSES
// ========================================

/**
 * Default revision policy clauses
 * Used when input.revisionPolicy is not provided
 */
export const DEFAULT_REVISION_POLICY: string[] = [
  "Includes up to two (2) rounds of revisions per major deliverable (e.g., homepage design, logo concept, core flows).",
  "Revisions are limited to adjustments and refinements based on the agreed project scope, not complete redesigns.",
  "Requests that materially change the original scope (new pages, new features, new integrations, or major strategic shifts) will be treated as a change request and require a separate estimate.",
  "Revisions must be requested within fourteen (14) days of delivery of the relevant deliverable unless otherwise agreed in writing.",
  "If the Client does not provide feedback within the agreed review window, the deliverable may be treated as approved for purposes of timeline and invoicing."
];

/**
 * Default out-of-scope items
 * Used when input.outOfScopeItems is not provided
 */
export const DEFAULT_OUT_OF_SCOPE_ITEMS: string[] = [
  "New pages, flows, or features that were not included in the original scope of work.",
  "Full brand strategy or naming exercises unless explicitly included in the proposal.",
  "Ongoing social media management, ad campaign management, or community management.",
  "Legal, tax, accounting, compliance, or regulatory advice of any kind.",
  "Custom integrations with tools, APIs, or platforms not specified in the agreed scope.",
  "Extensive copywriting or content creation beyond what is explicitly listed in the deliverables.",
  "Ongoing maintenance, monitoring, or support beyond the post-launch support window specified in this agreement.",
  "Data migration outside of what is explicitly agreed (for example, complex legacy system migrations)."
];

/**
 * Default data privacy and security notes
 * Used when input.dataPrivacyNotes is not provided
 */
export const DEFAULT_DATA_PRIVACY_NOTES: string[] = [
  "Moonlit Studios primarily processes business contact information (such as names, emails, job titles, and project-related details) for the purpose of delivering services.",
  "The Client is responsible for ensuring that any data they provide to Moonlit Studios is collected and shared lawfully and in compliance with applicable data protection regulations in their jurisdiction.",
  "Moonlit Studios does not request or require protected health information (PHI) or other highly sensitive personal data unless explicitly agreed in writing for a specific project.",
  "If the Client chooses to transmit any health-related or highly sensitive information, they do so at their own risk and remain fully responsible for any regulatory compliance obligations (including but not limited to HIPAA or GDPR).",
  "Moonlit Studios may use third-party processors (such as hosting providers, email services, analytics tools, and AI platforms) as part of the service delivery. Each such provider operates under its own privacy and security practices.",
  "Moonlit Studios takes reasonable measures to protect project-related information but does not guarantee absolute security of any system or platform."
];

/**
 * Default AI use and limitations notes
 * Used when input.aiUseNotes is not provided
 */
export const DEFAULT_AI_USE_NOTES: string[] = [
  "Moonlit Studios may use AI tools (such as large language models, code assistants, and design support tools) to accelerate and enhance delivery of creative, technical, and strategic work.",
  "AI-generated content may contain inaccuracies, omissions, or outdated information. All AI-assisted outputs are intended as a starting point and must be reviewed and approved by the Client before being used in production or shared externally.",
  "AI outputs do not constitute legal, medical, financial, or regulatory advice. The Client remains solely responsible for any decisions made or actions taken based on AI-assisted content.",
  "The Client is responsible for ensuring that their use of AI-assisted features in their own products or services complies with all applicable laws, platform policies, and industry regulations.",
  "Where third-party AI providers (such as OpenAI, Anthropic, or others) are used, their respective terms, policies, and limitations also apply."
];

/**
 * Default support and maintenance notes
 * Used when input.supportMaintenanceNotes is not provided
 */
export const DEFAULT_SUPPORT_MAINTENANCE_NOTES: string[] = [
  "Unless otherwise agreed in writing, Moonlit Studios provides a fourteen (14) day post-launch support window for critical bugs directly related to work delivered under this Agreement.",
  "Post-launch support covers bug fixes for issues that prevent the delivered site, app, or feature from functioning as originally intended within the agreed scope.",
  "Post-launch support does not include new features, design changes, additional integrations, or strategic pivots. These are treated as new work and will be quoted separately.",
  "Ongoing maintenance, monitoring, or feature development is not included by default and may be provided under a separate support or retainer agreement.",
  "Response times during the support window are based on reasonable efforts and are typically within 1–2 business days, excluding weekends and agreed holidays."
];

/**
 * Default cancellation and refund policy
 * Used when input.cancellationPolicy is not provided
 */
export const DEFAULT_CANCELLATION_POLICY: string[] = [
  "All deposits and initial payments are non-refundable once work has begun, as they reserve time and resources in the Moonlit Studios schedule.",
  "If the Client cancels the project after work has started but before completion, the Client agrees to pay for all work completed up to the date of cancellation, calculated based on the percentage of the project completed or time spent, at Moonlit Studios' discretion.",
  "If the project is placed on hold by the Client for more than thirty (30) days without prior written agreement, Moonlit Studios may treat the project as cancelled and invoice for work completed to date.",
  "If Moonlit Studios must cancel the project due to circumstances beyond its reasonable control, any unearned fees for work not performed will be refunded, and ownership of partially completed work will be clarified in good faith.",
  "Any third-party fees (such as licenses, hosting, or subscriptions) already incurred on behalf of the Client are non-refundable."
];

/**
 * Default confidentiality and NDA notes
 * Used when input.confidentialityNotes is not provided
 */
export const DEFAULT_CONFIDENTIALITY_NOTES: string[] = [
  "Both Parties agree to keep confidential any non-public information disclosed in the course of the project, including but not limited to business plans, strategies, technical details, and proprietary processes.",
  "Confidential information does not include information that is already publicly available, independently developed without use of the other Party's confidential information, or lawfully obtained from a third party without a duty of confidentiality.",
  "Moonlit Studios may reference the Client's name, logo, and high-level project description in its portfolio and marketing materials, unless the Parties agree in writing to a stricter NDA or non-disclosure requirement.",
  "Either Party may disclose confidential information if required by law, regulation, or court order, provided that (where legally permitted) the disclosing Party gives reasonable notice to the other Party."
];

/**
 * Default communication guidelines
 * Used when input.communicationNotes is not provided
 */
export const DEFAULT_COMMUNICATION_NOTES: string[] = [
  "Primary communication channels may include email, project management tools, and scheduled video calls, as agreed at the start of the project.",
  "Moonlit Studios' typical response time for non-urgent messages is within one to two business days during normal working hours, excluding weekends and agreed holidays.",
  "Live meetings or strategy calls will be scheduled in advance and may be limited in number according to the project scope or retainer agreement.",
  "Urgent issues should be clearly marked as such, and Moonlit Studios will make reasonable efforts to respond promptly, subject to availability and time zone differences.",
  "Scope changes, approvals, and key decisions should be confirmed in writing (for example, via email or the designated project management tool) to avoid misunderstandings."
];

/**
 * Default jurisdiction and governing law
 * Used when input.jurisdiction is not provided
 */
export const DEFAULT_JURISDICTION: string =
  "This Agreement is governed by and construed in accordance with the laws of the State of Colorado, United States of America, without regard to its conflicts of law principles. Any disputes arising out of or relating to this Agreement shall be resolved in the state or federal courts located in Colorado, and both Parties consent to the exclusive jurisdiction and venue of such courts.";

// ========================================

/**
 * Service categories available at Moonlit Studios
 */
export type ServiceCategory =
  | "Web & Brand"
  | "AI Development"
  | "Health-Tech"
  | "Ghostwriting"
  | "Consulting"
  | "Other";

/**
 * Milestone for project timeline
 */
export interface SowMilestone {
  name: string;
  description?: string;
  dueDate?: string; // ISO date string
}

/**
 * Payment schedule entry
 */
export interface SowPayment {
  label: string;
  amount?: number;
  dueCondition?: string;
}

/**
 * Complete SOW input data structure
 * All optional fields will gracefully skip if not provided
 */
export interface SowInput {
  // BASIC INFO
  clientName: string;
  projectName: string;
  projectOverview: string;

  // PROJECT METADATA (Optional)
  serviceCategory?: ServiceCategory;
  startDate?: string;  // ISO date
  endDate?: string;    // ISO date
  totalFee?: number;
  currency?: string;   // e.g. "USD"

  // SCOPE OF WORK
  includedServices?: string[];
  technicalRequirements?: string[];
  clientResponsibilities?: string[];
  studioResponsibilities?: string[];

  // DELIVERABLES
  designDeliverables?: string[];
  developmentDeliverables?: string[];
  aiFeatures?: string[];
  launchDeliverables?: string[];

  // TIMELINE
  milestones?: SowMilestone[];

  // PAYMENTS
  paymentSchedule?: SowPayment[];

  // POLICIES & LEGAL
  revisionPolicy?: string[];
  outOfScopeItems?: string[];
  dataPrivacyNotes?: string[];
  aiUseNotes?: string[];
  supportMaintenanceNotes?: string[];
  cancellationPolicy?: string[];
  jurisdiction?: string;
  confidentialityNotes?: string[];

  // COMMUNICATION
  communicationNotes?: string[];

  // SIGNATURES
  clientContactName?: string;
  studioRepName?: string;
}

/**
 * Helper: Create a heading block
 */
function heading(level: 1 | 2 | 3, text: string): any {
  if (level === 1) {
    return {
      object: 'block',
      type: 'heading_1',
      heading_1: {
        rich_text: [{ type: 'text', text: { content: text } }],
      },
    };
  }
  if (level === 2) {
    return {
      object: 'block',
      type: 'heading_2',
      heading_2: {
        rich_text: [{ type: 'text', text: { content: text } }],
      },
    };
  }
  return {
    object: 'block',
    type: 'heading_3',
    heading_3: {
      rich_text: [{ type: 'text', text: { content: text } }],
    },
  };
}

/**
 * Helper: Create a paragraph block
 */
function paragraph(text: string): any {
  return {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      rich_text: [{ type: 'text', text: { content: text } }],
    },
  };
}

/**
 * Helper: Create a bulleted list item
 */
function bulletItem(text: string): any {
  return {
    object: 'block',
    type: 'bulleted_list_item',
    bulleted_list_item: {
      rich_text: [{ type: 'text', text: { content: text } }],
    },
  };
}

/**
 * Helper: Create a divider block
 */
function divider(): any {
  return {
    object: 'block',
    type: 'divider',
    divider: {},
  };
}

/**
 * Create a fully structured Statement of Work page in Notion
 *
 * @param input - SOW data including client info, scope, deliverables, terms
 * @returns Notion page URL
 */
export async function createSowPage(input: SowInput): Promise<string> {
  try {
    if (!SOW_DATABASE_ID) {
      throw new Error('NOTION_SOW_DATABASE_ID not configured in environment variables');
    }

    // Build the page title
    const pageTitle = `SOW – ${input.clientName} – ${input.projectName}`;

    // Build page properties (adapt to your Notion database schema)
    const properties: any = {
      // Title field (assuming "Name" or "Title" column)
      Name: {
        title: [
          {
            text: {
              content: pageTitle,
            },
          },
        ],
      },
    };

    // Add optional properties if provided
    if (input.clientName) {
      properties.Client = {
        rich_text: [{ text: { content: input.clientName } }],
      };
    }

    if (input.projectName) {
      properties.Project = {
        rich_text: [{ text: { content: input.projectName } }],
      };
    }

    if (input.serviceCategory) {
      properties['Service Category'] = {
        select: { name: input.serviceCategory },
      };
    }

    if (input.startDate) {
      properties['Start Date'] = {
        date: { start: input.startDate },
      };
    }

    if (input.endDate) {
      properties['End Date'] = {
        date: { start: input.endDate },
      };
    }

    if (input.totalFee !== undefined) {
      properties['Total Fee'] = {
        number: input.totalFee,
      };
    }

    // ========== MERGE INPUT WITH DEFAULTS ==========
    // If the user doesn't provide values, use Moonlit Studios defaults

    const revisionPolicy = (input.revisionPolicy && input.revisionPolicy.length > 0)
      ? input.revisionPolicy
      : DEFAULT_REVISION_POLICY;

    const outOfScopeItems = (input.outOfScopeItems && input.outOfScopeItems.length > 0)
      ? input.outOfScopeItems
      : DEFAULT_OUT_OF_SCOPE_ITEMS;

    const dataPrivacyNotes = (input.dataPrivacyNotes && input.dataPrivacyNotes.length > 0)
      ? input.dataPrivacyNotes
      : DEFAULT_DATA_PRIVACY_NOTES;

    const aiUseNotes = (input.aiUseNotes && input.aiUseNotes.length > 0)
      ? input.aiUseNotes
      : DEFAULT_AI_USE_NOTES;

    const supportMaintenanceNotes = (input.supportMaintenanceNotes && input.supportMaintenanceNotes.length > 0)
      ? input.supportMaintenanceNotes
      : DEFAULT_SUPPORT_MAINTENANCE_NOTES;

    const cancellationPolicy = (input.cancellationPolicy && input.cancellationPolicy.length > 0)
      ? input.cancellationPolicy
      : DEFAULT_CANCELLATION_POLICY;

    const confidentialityNotes = (input.confidentialityNotes && input.confidentialityNotes.length > 0)
      ? input.confidentialityNotes
      : DEFAULT_CONFIDENTIALITY_NOTES;

    const communicationNotes = (input.communicationNotes && input.communicationNotes.length > 0)
      ? input.communicationNotes
      : DEFAULT_COMMUNICATION_NOTES;

    const jurisdiction = input.jurisdiction || DEFAULT_JURISDICTION;

    // Build page content blocks
    const blocks: any[] = [];

    // ========== TITLE ==========
    blocks.push(heading(1, `Statement of Work – ${input.projectName}`));
    blocks.push(divider());

    // ========== 1. PROJECT OVERVIEW ==========
    blocks.push(heading(2, '1. Project Overview'));
    blocks.push(paragraph(input.projectOverview));
    blocks.push(paragraph('')); // Spacer

    // ========== 2. SCOPE OF WORK ==========
    blocks.push(heading(2, '2. Scope of Work'));

    if (input.includedServices && input.includedServices.length > 0) {
      blocks.push(heading(3, 'Included Services'));
      input.includedServices.forEach(service => blocks.push(bulletItem(service)));
      blocks.push(paragraph(''));
    }

    if (input.technicalRequirements && input.technicalRequirements.length > 0) {
      blocks.push(heading(3, 'Technical Requirements'));
      input.technicalRequirements.forEach(req => blocks.push(bulletItem(req)));
      blocks.push(paragraph(''));
    }

    if (input.clientResponsibilities && input.clientResponsibilities.length > 0) {
      blocks.push(heading(3, 'Client Responsibilities'));
      input.clientResponsibilities.forEach(resp => blocks.push(bulletItem(resp)));
      blocks.push(paragraph(''));
    }

    if (input.studioResponsibilities && input.studioResponsibilities.length > 0) {
      blocks.push(heading(3, 'Moonlit Studios Responsibilities'));
      input.studioResponsibilities.forEach(resp => blocks.push(bulletItem(resp)));
      blocks.push(paragraph(''));
    }

    // ========== 3. DELIVERABLES ==========
    blocks.push(heading(2, '3. Deliverables'));

    if (input.designDeliverables && input.designDeliverables.length > 0) {
      blocks.push(heading(3, 'Design Deliverables'));
      input.designDeliverables.forEach(del => blocks.push(bulletItem(del)));
      blocks.push(paragraph(''));
    }

    if (input.developmentDeliverables && input.developmentDeliverables.length > 0) {
      blocks.push(heading(3, 'Development Deliverables'));
      input.developmentDeliverables.forEach(del => blocks.push(bulletItem(del)));
      blocks.push(paragraph(''));
    }

    if (input.aiFeatures && input.aiFeatures.length > 0) {
      blocks.push(heading(3, 'AI Features & Integrations'));
      input.aiFeatures.forEach(feature => blocks.push(bulletItem(feature)));
      blocks.push(paragraph(''));
    }

    if (input.launchDeliverables && input.launchDeliverables.length > 0) {
      blocks.push(heading(3, 'Launch Deliverables'));
      input.launchDeliverables.forEach(del => blocks.push(bulletItem(del)));
      blocks.push(paragraph(''));
    }

    // ========== 4. TIMELINE & MILESTONES ==========
    blocks.push(heading(2, '4. Timeline & Milestones'));

    if (input.milestones && input.milestones.length > 0) {
      input.milestones.forEach(milestone => {
        let text = `${milestone.name}`;
        if (milestone.description) {
          text += ` – ${milestone.description}`;
        }
        if (milestone.dueDate) {
          text += ` (Due: ${milestone.dueDate})`;
        }
        blocks.push(bulletItem(text));
      });
      blocks.push(paragraph(''));
    } else {
      blocks.push(paragraph('Timeline milestones to be defined during project kickoff.'));
      blocks.push(paragraph(''));
    }

    // ========== 5. PROJECT FEES & PAYMENT SCHEDULE ==========
    blocks.push(heading(2, '5. Project Fees & Payment Schedule'));

    if (input.totalFee !== undefined) {
      const currency = input.currency || 'USD';
      blocks.push(paragraph(`Total Project Fee: $${input.totalFee.toLocaleString()} ${currency}`));
      blocks.push(paragraph(''));
    }

    if (input.paymentSchedule && input.paymentSchedule.length > 0) {
      blocks.push(heading(3, 'Payment Schedule'));
      input.paymentSchedule.forEach(payment => {
        let text = payment.label;
        if (payment.amount) {
          const currency = input.currency || 'USD';
          text += `: $${payment.amount.toLocaleString()} ${currency}`;
        }
        if (payment.dueCondition) {
          text += ` – ${payment.dueCondition}`;
        }
        blocks.push(bulletItem(text));
      });
      blocks.push(paragraph(''));
    }

    // ========== 6. REVISION POLICY ==========
    blocks.push(heading(2, '6. Revision Policy'));
    revisionPolicy.forEach(policy => blocks.push(bulletItem(policy)));
    blocks.push(paragraph(''));

    // ========== 7. OUT-OF-SCOPE ITEMS ==========
    blocks.push(heading(2, '7. Out-of-Scope Items'));
    outOfScopeItems.forEach(item => blocks.push(bulletItem(item)));
    blocks.push(paragraph(''));

    // ========== 8. DATA PRIVACY & SECURITY ==========
    blocks.push(heading(2, '8. Data Privacy & Security'));
    dataPrivacyNotes.forEach(note => blocks.push(bulletItem(note)));
    blocks.push(paragraph(''));

    // ========== 9. AI USE & LIMITATIONS ==========
    blocks.push(heading(2, '9. AI Use & Limitations'));
    aiUseNotes.forEach(note => blocks.push(bulletItem(note)));
    blocks.push(paragraph(''));

    // ========== 10. SUPPORT, MAINTENANCE & RETAINERS ==========
    blocks.push(heading(2, '10. Support & Maintenance'));
    supportMaintenanceNotes.forEach(note => blocks.push(bulletItem(note)));
    blocks.push(paragraph(''));

    // ========== 11. CANCELLATION & REFUNDS ==========
    blocks.push(heading(2, '11. Cancellation & Refunds'));
    cancellationPolicy.forEach(policy => blocks.push(bulletItem(policy)));
    blocks.push(paragraph(''));

    // ========== 12. CONFIDENTIALITY & NON-DISCLOSURE ==========
    blocks.push(heading(2, '12. Confidentiality & Non-Disclosure'));
    confidentialityNotes.forEach(note => blocks.push(bulletItem(note)));
    blocks.push(paragraph(''));

    // ========== 13. GOVERNING LAW & DISPUTE RESOLUTION ==========
    blocks.push(heading(2, '13. Governing Law & Dispute Resolution'));
    blocks.push(paragraph(jurisdiction));
    blocks.push(paragraph(''));

    // ========== 14. COMMUNICATION ==========
    blocks.push(heading(2, '14. Communication'));
    communicationNotes.forEach(note => blocks.push(bulletItem(note)));
    blocks.push(paragraph(''));

    // ========== 15. ACCEPTANCE & SIGNATURES ==========
    blocks.push(heading(2, '15. Acceptance'));
    blocks.push(paragraph('By signing below, both parties agree to the terms outlined in this Statement of Work.'));
    blocks.push(paragraph(''));

    const clientContact = input.clientContactName || '_______________________';
    const studioRep = input.studioRepName || 'Destiny Pagade, Moonlit Studios';

    blocks.push(paragraph(`Client: ${input.clientName} – ${clientContact}`));
    blocks.push(paragraph('Signature: _______________________     Date: ___________'));
    blocks.push(paragraph(''));
    blocks.push(paragraph(`Moonlit Studios Representative: ${studioRep}`));
    blocks.push(paragraph('Signature: _______________________     Date: ___________'));

    // Create the Notion page
    const response = await notion.pages.create({
      parent: {
        database_id: SOW_DATABASE_ID,
      },
      properties,
      children: blocks,
    });

    // Construct the page URL
    const pageId = response.id.replace(/-/g, '');
    const pageUrl = `https://notion.so/${pageId}`;

    console.log('✅ SOW page created successfully!');
    console.log(`📄 Page URL: ${pageUrl}`);
    console.log(`📋 Page ID: ${response.id}`);

    return pageUrl;

  } catch (error: any) {
    console.error('❌ Failed to create SOW page:', error.message);
    throw new Error(`SOW creation failed: ${error.message}`);
  }
}

/**
 * Test Notion SOW database connection
 */
export async function testSowConnection() {
  try {
    if (!SOW_DATABASE_ID) {
      return {
        success: false,
        message: 'NOTION_SOW_DATABASE_ID not configured',
      };
    }

    const database = await notion.databases.retrieve({
      database_id: SOW_DATABASE_ID,
    });

    return {
      success: true,
      message: 'SOW database connection successful!',
      database: {
        id: database.id,
        title: (database as any).title?.[0]?.plain_text || 'Untitled',
        url: (database as any).url || '',
      },
    };
  } catch (error: any) {
    return {
      success: false,
      message: `SOW database connection failed: ${error.message}`,
      error: error.code || error.message,
    };
  }
}
