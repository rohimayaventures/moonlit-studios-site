'use client';

import { useState, useEffect } from 'react';

interface Testimonial {
  id: string;
  name: string;
  role?: string;
  company?: string;
  rating: number;
  feedback: string;
  service?: string;
  submittedAt: string;
  status: 'pending' | 'approved' | 'rejected';
}

interface TestimonialsSectionProps {
  limit?: number;
  showTitle?: boolean;
  service?: string; // Filter by specific service
}

export function TestimonialsSection({
  limit = 6,
  showTitle = true,
  service
}: TestimonialsSectionProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, [service]);

  const fetchTestimonials = async () => {
    try {
      const params = new URLSearchParams();
      if (service) params.append('service', service);
      params.append('limit', limit.toString());

      const response = await fetch(`/api/testimonials/list?${params}`);
      const data = await response.json();

      if (data.success) {
        setTestimonials(data.testimonials);
      }
    } catch (error) {
      console.error('Failed to fetch testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="animate-pulse space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-48 bg-deepOcean/20 rounded-xl"></div>
        ))}
      </div>
    );
  }

  if (testimonials.length === 0) {
    return null; // Don't show section if no testimonials
  }

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {showTitle && (
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-lunarGold/20 to-phoenixFire/20 border border-lunarGold/40 mb-6">
              <svg className="w-5 h-5 text-lunarGold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <p className="text-xs sm:text-sm tracking-[0.35em] text-lunarGold uppercase font-semibold">
                Client Success Stories
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              What Clients Say
            </h2>
            <p className="text-lg text-moonlightSilver max-w-3xl mx-auto">
              Real feedback from healthcare innovators who've worked with Moonlit Studios
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="group relative bg-gradient-to-br from-deepOcean/40 to-midnight/60 border border-moonlightSilver/20 rounded-2xl p-6 hover:border-lunarGold/40 transition-all hover:shadow-xl hover:shadow-lunarGold/10 hover:-translate-y-1">
      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating
                ? 'text-lunarGold fill-lunarGold'
                : 'text-moonlightSilver/20 fill-moonlightSilver/20'
            }`}
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ))}
      </div>

      {/* Feedback */}
      <blockquote className="text-pearlWhite mb-6 leading-relaxed">
        <span className="text-mermaidTeal text-3xl leading-none">"</span>
        {testimonial.feedback}
        <span className="text-mermaidTeal text-3xl leading-none">"</span>
      </blockquote>

      {/* Author */}
      <div className="mt-auto">
        <div className="flex items-center gap-3">
          {/* Avatar placeholder */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-mermaidTeal/40 to-lunarGold/40 flex items-center justify-center border border-mermaidTeal/30">
            <span className="text-lg font-bold text-pearlWhite">
              {testimonial.name.charAt(0)}
            </span>
          </div>

          <div className="flex-1">
            <p className="font-semibold text-pearlWhite">{testimonial.name}</p>
            {(testimonial.role || testimonial.company) && (
              <p className="text-sm text-moonlightSilver">
                {testimonial.role}
                {testimonial.role && testimonial.company && ' at '}
                {testimonial.company}
              </p>
            )}
          </div>
        </div>

        {/* Service tag */}
        {testimonial.service && (
          <div className="mt-4 pt-4 border-t border-moonlightSilver/10">
            <p className="text-xs text-mermaidTeal font-semibold uppercase tracking-wide">
              {testimonial.service}
            </p>
          </div>
        )}
      </div>

      {/* Decorative quote icon */}
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <svg className="w-16 h-16 text-lunarGold" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
        </svg>
      </div>
    </div>
  );
}
