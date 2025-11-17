import { NextRequest, NextResponse } from 'next/server';
import { validateAuthToken, markTokenAsUsed, createSession, initPortalStorage } from '@/lib/portal/storage';
import { cookies } from 'next/headers';

// 🔐 VERIFY MAGIC LINK TOKEN - Complete Authentication
export async function GET(request: NextRequest) {
  try {
    await initPortalStorage();

    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.redirect(new URL('/portal/login?error=missing_token', request.url));
    }

    // Validate token
    const authToken = await validateAuthToken(token);
    if (!authToken) {
      return NextResponse.redirect(new URL('/portal/login?error=invalid_token', request.url));
    }

    // Mark token as used (one-time use)
    await markTokenAsUsed(token);

    // Create session (7 day expiry)
    const session = await createSession(authToken.clientId, authToken.email);
    if (!session) {
      return NextResponse.redirect(new URL('/portal/login?error=session_failed', request.url));
    }

    // Set session cookie
    const cookieStore = await cookies();
    cookieStore.set('portal_session', session.sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: '/',
    });

    console.log(`✅ Client logged in: ${authToken.email}`);

    // Redirect to dashboard
    return NextResponse.redirect(new URL('/portal/dashboard', request.url));
  } catch (error) {
    console.error('❌ Error verifying auth token:', error);
    return NextResponse.redirect(new URL('/portal/login?error=server_error', request.url));
  }
}
