import { NextRequest, NextResponse } from 'next/server';
import { getAuthenticatedClient } from '@/lib/portal/auth';
import { getProject, addMessage, initPortalStorage } from '@/lib/portal/storage';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// 💬 SEND MESSAGE - Client sends message to admin
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await initPortalStorage();

    const { id: projectId } = await params;

    // Require authentication
    const auth = await getAuthenticatedClient();
    if (!auth) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { client } = auth;

    // Verify project ownership
    const project = await getProject(projectId);
    if (!project || project.clientId !== client.id) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    // Get message content
    const body = await request.json();
    const { content } = body;

    if (!content || !content.trim()) {
      return NextResponse.json(
        { error: 'Message content is required' },
        { status: 400 }
      );
    }

    // Add message
    const message = await addMessage(projectId, {
      projectId,
      from: 'client',
      fromName: client.name,
      fromEmail: client.email,
      content: content.trim(),
      read: false,
    });

    if (!message) {
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      );
    }

    // Send email notification to business owner
    try {
      const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #1A202C;
      background-color: #F7FAFC;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(135deg, #4A9B9B 0%, #1A2332 100%);
      color: white;
      padding: 32px;
      text-align: center;
    }
    .content {
      padding: 32px;
    }
    .message-box {
      background: #F7FAFC;
      border-left: 4px solid #4A9B9B;
      padding: 16px;
      border-radius: 8px;
      margin: 16px 0;
    }
    .button {
      display: inline-block;
      background: linear-gradient(135deg, #4A9B9B 0%, #1A2332 100%);
      color: white;
      padding: 14px 32px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 28px;">💬 New Portal Message</h1>
      <p style="margin: 8px 0 0 0; opacity: 0.9;">Client sent you a message</p>
    </div>

    <div class="content">
      <p><strong>From:</strong> ${client.name} (${client.email})</p>
      <p><strong>Project:</strong> ${project.title}</p>

      <div class="message-box">
        <p style="margin: 0; white-space: pre-wrap;">${content}</p>
      </div>

      <div style="text-align: center; margin-top: 32px;">
        <a href="${process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://www.moonlstudios.com'}/admin/portal/projects/${projectId}" class="button">
          View in Admin Portal
        </a>
      </div>
    </div>
  </div>
</body>
</html>
      `;

      await resend.emails.send({
        from: 'Client Portal <hello@moonlstudios.com>',
        to: process.env.BUSINESS_EMAIL || 'hello@moonlstudios.com',
        subject: `💬 New message from ${client.name} - ${project.title}`,
        html: emailHtml,
      });
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
      // Don't fail the request if email fails
    }

    console.log(`✅ Message sent: ${client.name} → ${project.title}`);

    return NextResponse.json({ success: true, message });
  } catch (error) {
    console.error('❌ Error sending message:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
