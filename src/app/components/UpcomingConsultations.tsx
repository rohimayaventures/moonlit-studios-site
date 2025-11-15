'use client';

import { useState, useEffect } from 'react';

interface CalendlyEvent {
  uri: string;
  name: string;
  start_time: string;
  end_time: string;
  status: string;
  invitees?: Array<{
    name: string;
    email: string;
  }>;
}

export function UpcomingConsultations() {
  const [events, setEvents] = useState<CalendlyEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/calendly/scheduled-events');
      const data = await response.json();

      if (data.success) {
        // Sort by start time (earliest first)
        const sortedEvents = data.events.sort((a: CalendlyEvent, b: CalendlyEvent) =>
          new Date(a.start_time).getTime() - new Date(b.start_time).getTime()
        );
        setEvents(sortedEvents);
      } else {
        setError(data.error || 'Failed to load events');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDateTime = (isoString: string) => {
    const date = new Date(isoString);
    return {
      date: date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      }),
      time: date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
      }),
    };
  };

  const getTimeUntil = (isoString: string) => {
    const now = new Date();
    const eventTime = new Date(isoString);
    const diffMs = eventTime.getTime() - now.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffMs < 0) return 'Past event';
    if (diffDays > 7) return `${diffDays} days`;
    if (diffDays > 0) return `${diffDays}d ${diffHours % 24}h`;
    if (diffHours > 0) return `${diffHours}h`;
    return 'Soon!';
  };

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-24 bg-deepOcean/20 rounded-xl"></div>
        <div className="h-24 bg-deepOcean/20 rounded-xl"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 rounded-xl bg-phoenixFire/10 border border-phoenixFire/30">
        <p className="text-phoenixFire">
          <strong>Error loading consultations:</strong> {error}
        </p>
        <p className="text-sm text-moonlightSilver mt-2">
          Make sure you've added your Calendly API token to .env.local
        </p>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="p-6 rounded-xl bg-deepOcean/20 border border-moonlightSilver/20 text-center">
        <p className="text-moonlightSilver">No upcoming consultations scheduled</p>
        <p className="text-sm text-moonlightSilver/60 mt-2">
          New bookings will appear here automatically
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {events.slice(0, 5).map((event) => {
        const { date, time } = formatDateTime(event.start_time);
        const timeUntil = getTimeUntil(event.start_time);
        const invitee = event.invitees?.[0];

        return (
          <div
            key={event.uri}
            className="p-4 rounded-xl bg-gradient-to-br from-deepOcean/40 to-midnight/60 border border-mermaidTeal/30 hover:border-mermaidTeal/60 transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-mermaidTeal animate-pulse"></div>
                  <span className="text-xs text-mermaidTeal font-semibold uppercase tracking-wide">
                    {timeUntil}
                  </span>
                </div>

                <h4 className="text-base font-semibold text-pearlWhite mb-1">
                  {invitee?.name || 'New Consultation'}
                </h4>

                <div className="flex items-center gap-4 text-sm text-moonlightSilver">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span>{time}</span>
                  </div>
                </div>

                {invitee?.email && (
                  <p className="text-xs text-moonlightSilver/70 mt-2">
                    {invitee.email}
                  </p>
                )}
              </div>

              <div className="flex-shrink-0 ml-4">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                  event.status === 'active'
                    ? 'bg-mermaidTeal/20 text-mermaidTeal'
                    : 'bg-moonlightSilver/20 text-moonlightSilver'
                }`}>
                  {event.status}
                </span>
              </div>
            </div>
          </div>
        );
      })}

      {events.length > 5 && (
        <p className="text-center text-sm text-moonlightSilver/60">
          +{events.length - 5} more upcoming consultation{events.length - 5 !== 1 ? 's' : ''}
        </p>
      )}
    </div>
  );
}
