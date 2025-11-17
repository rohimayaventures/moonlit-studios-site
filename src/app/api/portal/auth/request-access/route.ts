import { NextRequest, NextResponse } from 'next/server';
import { getClient, createAuthToken, initPortalStorage } from '@/lib/portal/storage';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// 🔐 REQUEST PORTAL ACCESS - Magic Link Authentication
export async function POST(request: NextRequest) {
  try {
    await initPortalStorage();

    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    // Check if client exists
    const client = await getClient(email);
    if (!client) {
      return NextResponse.json(
        { success: false, error: 'No client account found with this email. Please contact us if you believe this is an error.' },
        { status: 404 }
      );
    }

    // Create magic link token (15 minute expiry)
    const authToken = await createAuthToken(email);
    if (!authToken) {
      return NextResponse.json(
        { success: false, error: 'Failed to generate access link' },
        { status: 500 }
      );
    }

    // Build magic link
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://www.moonlitstudios.com';
    const magicLink = `${siteUrl}/portal/auth/verify?token=${authToken.token}`;

    // Send magic link email
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
    .button {
      display: inline-block;
      background: linear-gradient(135deg, #4A9B9B 0%, #1A2332 100%);
      color: white;
      padding: 16px 32px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      margin: 24px 0;
    }
    .code-box {
      background: #F7FAFC;
      border: 2px dashed #4A9B9B;
      padding: 16px;
      border-radius: 8px;
      text-align: center;
      font-family: monospace;
      font-size: 18px;
      letter-spacing: 2px;
      margin: 16px 0;
    }
    .footer {
      text-align: center;
      padding: 24px;
      color: #718096;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 28px;">🌙 Client Portal Access</h1>
      <p style="margin: 8px 0 0 0; opacity: 0.9;">Your secure login link is ready</p>
    </div>

    <div class="content">
      <p>Hi ${client.name},</p>

      <p>Click the button below to securely access your Moonlit Studios client portal:</p>

      <div style="text-align: center;">
        <a href="${magicLink}" class="button">
          Access Client Portal
        </a>
      </div>

      <p style="color: #718096; font-size: 14px; margin-top: 24px;">
        🔒 This link is valid for <strong>15 minutes</strong> and can only be used once.<br/>
        If you didn't request this, you can safely ignore this email.
      </p>

      <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #E2E8F0;">
        <p style="font-size: 14px; color: #4A5568;">
          <strong>What you'll find in your portal:</strong>
        </p>
        <ul style="color: #718096;">
          <li>📊 Real-time project status updates</li>
          <li>📁 Download deliverables and share files</li>
          <li>💬 Message our team directly</li>
          <li>📅 View project timeline and milestones</li>
          <li>💳 Access payment history and invoices</li>
        </ul>
      </div>
    </div>

    <div class="footer">
      <p>Questions? Reply to this email or contact us at <a href="mailto:hello@moonlitstudios.com" style="color: #4A9B9B;">hello@moonlitstudios.com</a></p>
      <p style="margin-top: 8px;">Built with 🌙 by Moonlit Studios</p>
    </div>
  </div>
</body>
</html>
    `;

    await resend.emails.send({
      from: 'Moonlit Studios Portal <hello@moonlitstudios.com>',
      to: email,
      subject: '🔐 Your Moonlit Studios Portal Access Link',
      html: emailHtml,
    });

    console.log(`✅ Magic link sent to ${email}`);

    return NextResponse.json({
      success: true,
      message: 'Access link sent! Check your email for a secure login link (valid for 15 minutes).',
    });
  } catch (error) {
    console.error('❌ Error sending magic link:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send access link' },
      { status: 500 }
    );
  }
}
