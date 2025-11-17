import { NextRequest, NextResponse } from 'next/server';
import { deleteSession } from '@/lib/portal/storage';
import { cookies } from 'next/headers';

// 🚪 LOGOUT - End Session
export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const sessionId = cookieStore.get('portal_session')?.value;

    if (sessionId) {
      // Delete session from storage
      await deleteSession(sessionId);

      // Clear cookie
      cookieStore.delete('portal_session');

      console.log(`✅ Client logged out (session: ${sessionId})`);
    }

    return NextResponse.json({ success: true, message: 'Logged out successfully' });
  } catch (error) {
    console.error('❌ Error during logout:', error);
    return NextResponse.json(
      { success: false, error: 'Logout failed' },
      { status: 500 }
    );
  }
}
