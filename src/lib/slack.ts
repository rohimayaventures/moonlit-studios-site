/**
 * Slack Integration Helper
 *
 * Sends notifications to Slack webhook for new leads and important events
 */

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL || '';

/**
 * Send a message to Slack webhook
 */
export async function sendSlackMessage(text: string): Promise<void> {
  try {
    if (!SLACK_WEBHOOK_URL) {
      console.warn('Slack webhook URL not configured');
      return;
    }

    const response = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      console.error('Slack webhook error:', response.statusText);
    } else {
      console.log('✅ Slack notification sent');
    }
  } catch (error: any) {
    console.error('❌ Slack notification failed:', error.message);
    // Don't throw - we don't want to fail the whole request if Slack fails
  }
}

/**
 * Format a new quote notification for Slack
 */
export async function notifyNewQuote(data: {
  name: string;
  email: string;
  company?: string;
  project_type: string;
  budget?: string;
  timeline?: string;
  description: string;
  estimated_cost?: number;
}): Promise<void> {
  const message = `
🌙 *NEW QUOTE REQUEST* 💰

*Client:* ${data.name}
*Email:* ${data.email}
${data.company ? `*Company:* ${data.company}` : ''}
*Service:* ${data.project_type}
${data.budget ? `*Budget:* ${data.budget}` : ''}
${data.timeline ? `*Timeline:* ${data.timeline}` : ''}
${data.estimated_cost ? `*Estimated Cost:* $${data.estimated_cost}` : ''}

*Summary:* ${data.description.substring(0, 200)}${data.description.length > 200 ? '...' : ''}

_Source: Quote Form_
  `.trim();

  await sendSlackMessage(message);
}

/**
 * Format a new contact form submission for Slack
 */
export async function notifyNewContact(data: {
  name: string;
  email: string;
  serviceType?: string;
  budget?: string;
  timeline?: string;
  details: string;
}): Promise<void> {
  const message = `
🌙 *NEW CONTACT INQUIRY* 📧

*Client:* ${data.name}
*Email:* ${data.email}
${data.serviceType ? `*Service Interest:* ${data.serviceType}` : ''}
${data.budget ? `*Budget:* ${data.budget}` : ''}
${data.timeline ? `*Timeline:* ${data.timeline}` : ''}

*Message:* ${data.details.substring(0, 200)}${data.details.length > 200 ? '...' : ''}

_Source: Contact Form_
  `.trim();

  await sendSlackMessage(message);
}

/**
 * Format a new testimonial submission for Slack
 */
export async function notifyNewTestimonial(data: {
  name: string;
  email: string;
  company?: string;
  role?: string;
  rating: number;
  content: string;
  project_type?: string;
}): Promise<void> {
  const stars = '⭐'.repeat(data.rating);
  const message = `
🌙 *NEW TESTIMONIAL* ${stars}

*Client:* ${data.name}
*Email:* ${data.email}
${data.role ? `*Role:* ${data.role}` : ''}
${data.company ? `*Company:* ${data.company}` : ''}
${data.project_type ? `*Service:* ${data.project_type}` : ''}
*Rating:* ${data.rating}/5 ${stars}

*Feedback:* ${data.content.substring(0, 200)}${data.content.length > 200 ? '...' : ''}

_Source: Testimonial Form_
  `.trim();

  await sendSlackMessage(message);
}
