import { NextRequest, NextResponse } from 'next/server';
import { validateSession, getClient } from '@/lib/portal/storage';
import { cookies } from 'next/headers';

// 🔍 CHECK SESSION - Validate Current Session
export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const sessionId = cookieStore.get('portal_session')?.value;

    if (!sessionId) {
      return NextResponse.json(
        { authenticated: false, error: 'No session found' },
        { status: 401 }
      );
    }

    // Validate session
    const session = await validateSession(sessionId);
    if (!session) {
      // Session expired or invalid
      cookieStore.delete('portal_session');
      return NextResponse.json(
        { authenticated: false, error: 'Session expired' },
        { status: 401 }
      );
    }

    // Get client info
    const client = await getClient(session.email);
    if (!client) {
      return NextResponse.json(
        { authenticated: false, error: 'Client not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      authenticated: true,
      client: {
        id: client.id,
        email: client.email,
        name: client.name,
        company: client.company,
      },
      session: {
        sessionId: session.sessionId,
        expiresAt: session.expiresAt,
      },
    });
  } catch (error) {
    console.error('❌ Error checking session:', error);
    return NextResponse.json(
      { authenticated: false, error: 'Server error' },
      { status: 500 }
    );
  }
}
