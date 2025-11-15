'use client';

import { useState, useEffect } from 'react';

interface Testimonial {
  id: string;
  name: string;
  email: string;
  role?: string;
  company?: string;
  rating: number;
  feedback: string;
  service?: string;
  eventId?: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
}

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending');

  useEffect(() => {
    fetchTestimonials();
  }, [filter]);

  const fetchTestimonials = async () => {
    try {
      // TODO: Replace with actual API call to fetch ALL testimonials (including pending)
      // For now, showing mock pending testimonials
      const mockPendingTestimonials: Testimonial[] = [
        {
          id: 'testimonial_pending_1',
          name: 'Alex Morgan',
          email: 'alex@healthstartup.com',
          role: 'Founder',
          company: 'Health Startup Inc.',
          rating: 5,
          feedback: 'The consultation exceeded my expectations. Destiny provided actionable insights that I could implement right away. Her dual expertise in healthcare and technology is exactly what we needed.',
          service: 'General Consultation',
          eventId: 'event_123',
          status: 'pending',
          submittedAt: new Date().toISOString(),
        },
      ];

      setTestimonials(mockPendingTestimonials);
    } catch (error) {
      console.error('Failed to fetch testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id: string) => {
    // TODO: Implement approve API call
    console.log('Approving testimonial:', id);
    alert('Testimonial approved! (API endpoint coming soon)');
  };

  const handleReject = async (id: string) => {
    // TODO: Implement reject API call
    console.log('Rejecting testimonial:', id);
    alert('Testimonial rejected! (API endpoint coming soon)');
  };

  const filteredTestimonials = filter === 'all'
    ? testimonials
    : testimonials.filter(t => t.status === filter);

  return (
    <main className="min-h-screen bg-midnight text-pearlWhite py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Testimonial Management
          </h1>
          <p className="text-lg text-moonlightSilver">
            Review and approve client feedback to display on your site.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-4 mb-8 border-b border-moonlightSilver/20">
          {(['all', 'pending', 'approved', 'rejected'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-6 py-3 font-semibold capitalize transition-all ${
                filter === status
                  ? 'border-b-2 border-mermaidTeal text-mermaidTeal'
                  : 'text-moonlightSilver hover:text-pearlWhite'
              }`}
            >
              {status}
              {status === 'pending' && (
                <span className="ml-2 px-2 py-1 rounded-full bg-phoenixFire/20 text-phoenixFire text-xs">
                  {testimonials.filter(t => t.status === 'pending').length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Testimonials List */}
        {loading ? (
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-deepOcean/20 rounded-xl animate-pulse"></div>
            ))}
          </div>
        ) : filteredTestimonials.length === 0 ? (
          <div className="text-center py-20">
            <svg className="w-20 h-20 mx-auto mb-4 text-moonlightSilver/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <p className="text-xl text-moonlightSilver">
              No {filter !== 'all' && filter} testimonials found
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                onApprove={handleApprove}
                onReject={handleReject}
              />
            ))}
          </div>
        )}

        {/* Info Box */}
        <div className="mt-12 p-6 rounded-xl bg-deepOcean/30 border border-mermaidTeal/30">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <svg className="w-5 h-5 text-mermaidTeal" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            How It Works
          </h3>
          <ul className="space-y-2 text-sm text-moonlightSilver">
            <li>• Clients receive a survey email 1 hour after their consultation</li>
            <li>• They submit feedback via the testimonial form</li>
            <li>• You receive an instant email notification with their review</li>
            <li>• Approve testimonials here to display them on your site</li>
            <li>• Approved testimonials automatically appear in the TestimonialsSection component</li>
          </ul>

          <div className="mt-4 p-4 rounded-lg bg-lunarGold/10 border border-lunarGold/30">
            <p className="text-sm text-lunarGold">
              <strong>⚠️ Coming Soon:</strong> This admin page is currently showing mock data.
              When you're ready to go live, you'll need to set up a database (Supabase, Firebase, or PostgreSQL)
              to store real testimonials. Instructions will be provided!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function TestimonialCard({
  testimonial,
  onApprove,
  onReject,
}: {
  testimonial: Testimonial;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
}) {
  const statusColors = {
    pending: 'bg-lunarGold/20 text-lunarGold border-lunarGold/30',
    approved: 'bg-mermaidTeal/20 text-mermaidTeal border-mermaidTeal/30',
    rejected: 'bg-phoenixFire/20 text-phoenixFire border-phoenixFire/30',
  };

  return (
    <div className="bg-gradient-to-br from-deepOcean/40 to-midnight/60 border border-moonlightSilver/20 rounded-2xl p-6 hover:border-moonlightSilver/40 transition-all">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-bold text-pearlWhite">{testimonial.name}</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[testimonial.status]}`}>
              {testimonial.status}
            </span>
          </div>

          {(testimonial.role || testimonial.company) && (
            <p className="text-sm text-moonlightSilver mb-1">
              {testimonial.role}
              {testimonial.role && testimonial.company && ' at '}
              {testimonial.company}
            </p>
          )}

          <p className="text-sm text-moonlightSilver/70">{testimonial.email}</p>
        </div>

        {/* Rating */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < testimonial.rating
                  ? 'text-lunarGold fill-lunarGold'
                  : 'text-moonlightSilver/20'
              }`}
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ))}
        </div>
      </div>

      {/* Service Tag */}
      {testimonial.service && (
        <div className="mb-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-mermaidTeal/10 border border-mermaidTeal/30 text-xs text-mermaidTeal font-semibold">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            {testimonial.service}
          </span>
        </div>
      )}

      {/* Feedback */}
      <blockquote className="bg-deepOcean/30 border-l-4 border-mermaidTeal/40 rounded-r-lg p-4 mb-4">
        <p className="text-pearlWhite italic leading-relaxed">
          "{testimonial.feedback}"
        </p>
      </blockquote>

      {/* Metadata */}
      <div className="flex items-center gap-4 text-xs text-moonlightSilver/60 mb-4">
        <span>Submitted: {new Date(testimonial.submittedAt).toLocaleDateString()}</span>
        {testimonial.eventId && <span>Event ID: {testimonial.eventId}</span>}
      </div>

      {/* Actions */}
      {testimonial.status === 'pending' && (
        <div className="flex gap-3 pt-4 border-t border-moonlightSilver/10">
          <button
            onClick={() => onApprove(testimonial.id)}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-mermaidTeal/90 to-tealBright/80 px-6 py-3 text-sm font-bold text-midnight transition-all hover:from-mermaidTeal hover:to-tealBright hover:shadow-lg hover:shadow-mermaidTeal/40"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Approve & Publish
          </button>

          <button
            onClick={() => onReject(testimonial.id)}
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-phoenixFire/50 px-6 py-3 text-sm font-semibold text-phoenixFire transition-all hover:bg-phoenixFire/10 hover:border-phoenixFire"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Reject
          </button>
        </div>
      )}

      {testimonial.status === 'approved' && (
        <div className="pt-4 border-t border-moonlightSilver/10">
          <p className="text-sm text-mermaidTeal flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Published on website
          </p>
        </div>
      )}
    </div>
  );
}
