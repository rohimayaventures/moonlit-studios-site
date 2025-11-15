import { NextRequest, NextResponse } from 'next/server';

/**
 * Calendly API - Get Scheduled Events
 *
 * This endpoint fetches scheduled events from Calendly.
 * Use this to:
 * - Display upcoming consultations on your dashboard
 * - Send automated follow-up emails
 * - Track booking metrics
 * - Prepare for calls (fetch invitee details)
 */

export async function GET(request: NextRequest) {
  const calendlyToken = process.env.CALENDLY_API_TOKEN;
  const calendlyUsername = process.env.CALENDLY_USERNAME;

  if (!calendlyToken) {
    return NextResponse.json(
      { error: 'Calendly API token not configured' },
      { status: 500 }
    );
  }

  try {
    // Get query parameters
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get('status') || 'active'; // active, canceled
    const count = parseInt(searchParams.get('count') || '20');

    // First, get your user URI
    const userResponse = await fetch('https://api.calendly.com/users/me', {
      headers: {
        'Authorization': `Bearer ${calendlyToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!userResponse.ok) {
      throw new Error(`Failed to fetch user: ${userResponse.statusText}`);
    }

    const userData = await userResponse.json();
    const userUri = userData.resource.uri;

    // Fetch scheduled events
    const eventsResponse = await fetch(
      `https://api.calendly.com/scheduled_events?user=${encodeURIComponent(userUri)}&status=${status}&count=${count}`,
      {
        headers: {
          'Authorization': `Bearer ${calendlyToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!eventsResponse.ok) {
      throw new Error(`Failed to fetch events: ${eventsResponse.statusText}`);
    }

    const eventsData = await eventsResponse.json();

    // Fetch invitee details for each event
    const eventsWithInvitees = await Promise.all(
      eventsData.collection.map(async (event: any) => {
        try {
          const inviteesResponse = await fetch(
            `https://api.calendly.com/scheduled_events/${event.uri.split('/').pop()}/invitees`,
            {
              headers: {
                'Authorization': `Bearer ${calendlyToken}`,
                'Content-Type': 'application/json',
              },
            }
          );

          if (inviteesResponse.ok) {
            const inviteesData = await inviteesResponse.json();
            return {
              ...event,
              invitees: inviteesData.collection,
            };
          }
          return event;
        } catch (error) {
          console.error('Error fetching invitees:', error);
          return event;
        }
      })
    );

    return NextResponse.json({
      success: true,
      events: eventsWithInvitees,
      count: eventsWithInvitees.length,
      user: {
        name: userData.resource.name,
        email: userData.resource.email,
      },
    });

  } catch (error: any) {
    console.error('Calendly API Error:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch Calendly events',
        details: error.message
      },
      { status: 500 }
    );
  }
}
