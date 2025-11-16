import { Client } from '@notionhq/client';

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const DATABASE_ID = process.env.NOTION_CRM_DATABASE_ID || '';

// Types for Notion CRM entries
export type NotionLeadSource = 'Quote Form' | 'Contact Form' | 'Calendly' | 'Testimonial' | 'Referral';
export type NotionLeadStatus = '🆕 New' | '📞 Contacted' | '💰 Quoted' | '🎉 Won' | '❌ Lost' | '💤 Nurturing';
export type NotionPriority = '🔥 Hot' | '⚡ Warm' | '❄️ Cold';

export interface NotionLeadData {
  name: string;
  email: string;
  source: NotionLeadSource;
  service?: string;
  status?: NotionLeadStatus;
  budget?: string;
  quoteAmount?: string;
  priority?: NotionPriority;
  notes?: string;
  supabaseId?: string; // Link back to Supabase record
}

/**
 * Create a new lead in Notion CRM
 */
export async function createNotionLead(data: NotionLeadData) {
  try {
    if (!DATABASE_ID) {
      console.warn('Notion database ID not configured');
      return null;
    }

    const response = await notion.pages.create({
      parent: {
        database_id: DATABASE_ID,
      },
      properties: {
        // Title field (Name column)
        Name: {
          title: [
            {
              text: {
                content: data.name,
              },
            },
          ],
        },
        // Email field
        Email: {
          email: data.email,
        },
        // Source (Select)
        Source: {
          select: {
            name: data.source,
          },
        },
        // Service (Select)
        ...(data.service && {
          Service: {
            select: {
              name: data.service,
            },
          },
        }),
        // Status (Status)
        Status: {
          status: {
            name: data.status || '🆕 New',
          },
        },
        // Budget (Text)
        ...(data.budget && {
          Budget: {
            rich_text: [
              {
                text: {
                  content: data.budget,
                },
              },
            ],
          },
        }),
        // Quote Amount (Text)
        ...(data.quoteAmount && {
          'Quote Amount': {
            rich_text: [
              {
                text: {
                  content: data.quoteAmount,
                },
              },
            ],
          },
        }),
        // Created (Date) - auto-filled by Notion
        Created: {
          date: {
            start: new Date().toISOString(),
          },
        },
        // Last Contact (Date)
        'Last Contact': {
          date: {
            start: new Date().toISOString(),
          },
        },
        // Priority (Select)
        Priority: {
          select: {
            name: data.priority || '⚡ Warm',
          },
        },
        // Notes (Long Text)
        ...(data.notes && {
          Notes: {
            rich_text: [
              {
                text: {
                  content: data.notes.substring(0, 2000), // Notion has character limits
                },
              },
            ],
          },
        }),
      },
    });

    console.log('✅ Notion lead created:', response.id);
    return response.id;
  } catch (error: any) {
    console.error('❌ Notion API error:', error.message);
    // Don't throw - we don't want to fail the whole request if Notion fails
    return null;
  }
}

/**
 * Update a lead in Notion CRM
 */
export async function updateNotionLead(pageId: string, updates: Partial<NotionLeadData>) {
  try {
    const properties: any = {};

    if (updates.status) {
      properties.Status = {
        status: {
          name: updates.status,
        },
      };
    }

    if (updates.quoteAmount) {
      properties['Quote Amount'] = {
        rich_text: [
          {
            text: {
              content: updates.quoteAmount,
            },
          },
        ],
      };
    }

    if (updates.priority) {
      properties.Priority = {
        select: {
          name: updates.priority,
        },
      };
    }

    if (updates.notes) {
      properties.Notes = {
        rich_text: [
          {
            text: {
              content: updates.notes.substring(0, 2000),
            },
          },
        ],
      };
    }

    // Update Last Contact date
    properties['Last Contact'] = {
      date: {
        start: new Date().toISOString(),
      },
    };

    const response = await notion.pages.update({
      page_id: pageId,
      properties,
    });

    console.log('✅ Notion lead updated:', response.id);
    return response.id;
  } catch (error: any) {
    console.error('❌ Notion update error:', error.message);
    return null;
  }
}

/**
 * Get all leads from Notion CRM
 */
export async function getNotionLeads(filter?: {
  status?: NotionLeadStatus;
  source?: NotionLeadSource;
  priority?: NotionPriority;
}) {
  try {
    if (!DATABASE_ID) {
      console.warn('Notion database ID not configured');
      return [];
    }

    const queryFilter: any = {};

    if (filter?.status) {
      queryFilter.and = queryFilter.and || [];
      queryFilter.and.push({
        property: 'Status',
        status: {
          equals: filter.status,
        },
      });
    }

    if (filter?.source) {
      queryFilter.and = queryFilter.and || [];
      queryFilter.and.push({
        property: 'Source',
        select: {
          equals: filter.source,
        },
      });
    }

    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: Object.keys(queryFilter).length > 0 ? queryFilter : undefined,
      sorts: [
        {
          property: 'Created',
          direction: 'descending',
        },
      ],
    });

    return response.results;
  } catch (error: any) {
    console.error('❌ Notion query error:', error.message);
    return [];
  }
}

/**
 * Test Notion connection
 */
export async function testNotionConnection() {
  try {
    if (!DATABASE_ID) {
      return {
        success: false,
        message: 'Notion database ID not configured',
      };
    }

    // Try to retrieve the database
    const database = await notion.databases.retrieve({
      database_id: DATABASE_ID,
    });

    return {
      success: true,
      message: 'Notion connection successful!',
      database: {
        id: database.id,
        title: (database as any).title?.[0]?.plain_text || 'Untitled',
        url: database.url,
      },
    };
  } catch (error: any) {
    return {
      success: false,
      message: `Notion connection failed: ${error.message}`,
      error: error.code || error.message,
    };
  }
}
