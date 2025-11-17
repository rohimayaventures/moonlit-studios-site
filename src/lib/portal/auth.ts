// 🔐 PORTAL AUTHENTICATION UTILITIES
// Helper functions for client portal authentication

import { cookies } from 'next/headers';
import { validateSession, getClient } from './storage';
import type { Client, PortalSession } from './types';

export interface AuthenticatedClient {
  client: Client;
  session: PortalSession;
}

/**
 * Get the currently authenticated client from the session
 * Returns null if not authenticated
 */
export async function getAuthenticatedClient(): Promise<AuthenticatedClient | null> {
  try {
    const cookieStore = await cookies();
    const sessionId = cookieStore.get('portal_session')?.value;

    if (!sessionId) {
      return null;
    }

    // Validate session
    const session = await validateSession(sessionId);
    if (!session) {
      // Session expired or invalid - clear cookie
      cookieStore.delete('portal_session');
      return null;
    }

    // Get client info
    const client = await getClient(session.email);
    if (!client) {
      return null;
    }

    return { client, session };
  } catch (error) {
    console.error('Error getting authenticated client:', error);
    return null;
  }
}

/**
 * Require authentication - use in Server Components
 * Redirects to login if not authenticated
 */
export async function requireAuth(): Promise<AuthenticatedClient> {
  const auth = await getAuthenticatedClient();
  if (!auth) {
    // This should be used with redirect from next/navigation
    throw new Error('UNAUTHENTICATED');
  }
  return auth;
}

/**
 * Check if user is authenticated (for conditional rendering)
 */
export async function isAuthenticated(): Promise<boolean> {
  const auth = await getAuthenticatedClient();
  return auth !== null;
}
