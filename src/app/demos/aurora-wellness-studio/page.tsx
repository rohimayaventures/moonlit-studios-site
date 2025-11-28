'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'sonner';

// Color palette: Soft Lavender, Sage Green, Warm Beige
// Background: Light pastels
// Text: Deep purple/charcoal

// Mock services data
const services = [
  {
    id: 1,
    title: "Individual Therapy",
    icon: "🧘",
    description: "One-on-one sessions focused on your unique journey toward healing and growth.",
    duration: "50 min",
    price: "$150",
    features: [
      "Personalized treatment plans",
      "Evidence-based techniques",
      "Safe, confidential space",
      "Flexible scheduling"
    ]
  },
  {
    id: 2,
    title: "Couples Counseling",
    icon: "💑",
    description: "Strengthen your relationship through compassionate, structured guidance.",
    duration: "60 min",
    price: "$200",
    features: [
      "Communication skills",
      "Conflict resolution",
      "Emotional intimacy",
      "Relationship patterns"
    ]
  },
  {
    id: 3,
    title: "Life Coaching",
    icon: "🌱",
    description: "Goal-oriented sessions to help you navigate life transitions and achieve clarity.",
    duration: "45 min",
    price: "$125",
    features: [
      "Goal setting & accountability",
      "Career transitions",
      "Personal development",
      "Mindfulness practices"
    ]
  },
  {
    id: 4,
    title: "Group Therapy",
    icon: "👥",
    description: "Connect with others on similar journeys in a supportive group environment.",
    duration: "90 min",
    price: "$75",
    features: [
      "Peer support network",
      "Shared experiences",
      "Facilitated discussions",
      "Weekly sessions"
    ]
  }
];

// Mock testimonials
const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Individual Therapy Client",
    text: "Aurora Wellness helped me find peace after years of anxiety. The sessions are thoughtful, gentle, and genuinely transformative.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael & Jessica",
    role: "Couples Counseling",
    text: "We were on the brink of divorce. Now we're closer than ever. The tools we learned here saved our marriage.",
    rating: 5
  },
  {
    id: 3,
    name: "David P.",
    role: "Life Coaching Client",
    text: "I was stuck in a career I hated. Life coaching gave me the clarity and courage to make a change. Best decision ever.",
    rating: 5
  }
];

export default function AuroraWellnessStudio() {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBookNow = (serviceName: string) => {
    toast.success(`Booking ${serviceName}`, {
      description: 'In a production site, this would open a Calendly scheduling widget.',
      duration: 4000
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
      toast.error('Please fill in all fields', { description: 'All fields are required.' });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) {
      toast.error('Invalid email', { description: 'Please enter a valid email address.' });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success('Message sent!', {
        description: 'Dr. Chen will respond within 24 hours.',
        duration: 5000
      });
      setContactForm({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F0FA] via-[#FAF5F0] to-[#F0F5F0]">
      {/* Hero Image */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 mb-8 sm:mb-12">
        <div className="rounded-2xl overflow-hidden border-2 border-[#D4B5E8]/30 shadow-lg">
          <Image
            src="/demos/aurora-wellness-studio/Aurora Wellness Studio Hero Image.png"
            alt="Aurora Wellness Studio Homepage"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Hero Section - LIGHT THEME */}
        <div className="mb-8 sm:mb-12 lg:mb-16 text-center">
          <div className="inline-block p-3 sm:p-4 rounded-full bg-gradient-to-br from-[#D4B5E8]/30 to-[#A8C5A0]/20 mb-4 sm:mb-6">
            <svg className="w-12 h-12 sm:w-16 sm:h-16 text-[#9B7DB8]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5A4570] mb-4">
            Aurora Wellness Studio
          </h1>
          <p className="text-base sm:text-lg text-[#6B5F7B] max-w-2xl mx-auto mb-2">
            Compassionate therapy and coaching for your healing journey
          </p>
          <p className="text-xs sm:text-sm text-[#8B7B9B]/70 italic">
            Dr. Aurora Bennett, LMFT • Westminster, CO
          </p>

          {/* CTA Buttons - LIGHT THEME */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button
              onClick={() => handleBookNow('Session')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#9B7DB8] to-[#D4B5E8] text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Book a Session
            </button>
            <button
              onClick={() => handleBookNow('Free Consultation')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-[#A8C5A0] text-[#5A7C55] bg-white/60 font-bold text-sm sm:text-base uppercase tracking-wider hover:bg-[#A8C5A0]/20 transition-all"
            >
              Free Consultation
            </button>
          </div>

          {/* Trust Badges - LIGHT THEME */}
          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#6B5F7B]">
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 border border-[#D4B5E8]/40">
              <span className="text-[#9B7DB8]">✓</span>
              <span>Licensed Therapist</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 border border-[#D4B5E8]/40">
              <span className="text-[#9B7DB8]">✓</span>
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 border border-[#A8C5A0]/40">
              <span className="text-[#A8C5A0]">✓</span>
              <span>Telehealth Available</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 border border-[#D4B5E8]/40">
              <span className="text-[#9B7DB8]">✓</span>
              <span>Insurance Accepted</span>
            </div>
          </div>
        </div>

        {/* Services Section - LIGHT PASTEL CARDS */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#5A4570] text-center mb-8 sm:mb-12">
            Services & Pricing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`p-5 sm:p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                  selectedService.id === service.id
                    ? 'border-[#9B7DB8] bg-[#E8DDEF] shadow-lg'
                    : 'border-[#E8DDEF] bg-white/80 hover:border-[#D4B5E8]'
                }`}
              >
                {/* Service Icon */}
                <div className="text-4xl sm:text-5xl mb-4">{service.icon}</div>

                {/* Service Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#5A4570] mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#6B5F7B] mb-4 line-clamp-2 sm:line-clamp-none">
                  {service.description}
                </p>

                {/* Duration & Price */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#E8DDEF]">
                  <span className="text-xs sm:text-sm text-[#8B7B9B]">{service.duration}</span>
                  <span className="text-lg sm:text-xl font-bold text-[#9B7DB8]">{service.price}</span>
                </div>

                {/* Features List */}
                <ul className="space-y-2 text-xs sm:text-sm">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="text-[#A8C5A0] mt-0.5">✓</span>
                      <span className="text-[#6B5F7B]">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Book Button */}
                <button
                  onClick={() => handleBookNow(service.title)}
                  className="w-full mt-4 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#9B7DB8] to-[#D4B5E8] text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:shadow-lg transition-all"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Calendly Integration Preview - LIGHT THEME */}
        <div className="mb-12 sm:mb-16 lg:mb-20 p-6 sm:p-8 lg:p-12 rounded-2xl border-2 border-[#D4B5E8]/40 bg-white/60">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#5A4570] text-center mb-4">
              Seamless Online Booking
            </h2>
            <p className="text-sm sm:text-base text-[#6B5F7B] text-center mb-8">
              Integrated with Calendly for easy appointment scheduling
            </p>

            {/* Mock Calendly Widget */}
            <div className="bg-white rounded-xl p-6 sm:p-8 min-h-[300px] sm:min-h-[400px] flex flex-col items-center justify-center border-2 border-[#E8DDEF]">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#D4B5E8]/30 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#9B7DB8]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#5A4570] mb-2 text-center">Calendly Integration</h3>
              <p className="text-xs sm:text-sm text-[#6B5F7B] text-center max-w-md">
                Click "Book Now" on any service to see available appointment slots in real-time. Automatic email confirmations and calendar invites included.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="px-4 py-2 rounded-lg bg-[#E8DDEF] border border-[#D4B5E8] text-[#5A4570] text-xs sm:text-sm font-semibold text-center">
                  📅 View Available Times
                </div>
                <div className="px-4 py-2 rounded-lg bg-[#D9E8D6] border border-[#A8C5A0] text-[#5A7C55] text-xs sm:text-sm font-semibold text-center">
                  ✉️ Instant Confirmation
                </div>
                <div className="px-4 py-2 rounded-lg bg-[#F5E8D8] border border-[#D4B89B] text-[#7A6450] text-xs sm:text-sm font-semibold text-center">
                  🔔 Reminders Sent
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section - LIGHT THEME */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#5A4570] text-center mb-8 sm:mb-12">
            Client Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-5 sm:p-6 rounded-2xl border-2 border-[#E8DDEF] bg-white/80 hover:shadow-lg transition-all"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4A574] fill-current" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-sm sm:text-base text-[#6B5F7B] mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-[#E8DDEF] pt-3">
                  <p className="text-sm sm:text-base font-bold text-[#5A4570]">{testimonial.name}</p>
                  <p className="text-xs text-[#8B7B9B]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section - LIGHT SAGE GREEN ACCENTS */}
        <div className="mb-12 sm:mb-16 lg:mb-20 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Form */}
          <div className="p-6 sm:p-8 rounded-2xl border-2 border-[#A8C5A0]/50 bg-white/80">
            <h3 className="text-xl sm:text-2xl font-bold text-[#5A4570] mb-4">Get In Touch</h3>
            <p className="text-sm sm:text-base text-[#6B5F7B] mb-6">
              Have questions? Send us a message and we'll respond within 24 hours.
            </p>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-xs sm:text-sm text-[#6B5F7B] mb-2">Name</label>
                <input
                  type="text"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-white border-2 border-[#E8DDEF] text-[#5A4570] text-sm sm:text-base focus:border-[#9B7DB8] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm text-[#6B5F7B] mb-2">Email</label>
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-white border-2 border-[#E8DDEF] text-[#5A4570] text-sm sm:text-base focus:border-[#9B7DB8] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm text-[#6B5F7B] mb-2">Message</label>
                <textarea
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-white border-2 border-[#E8DDEF] text-[#5A4570] text-sm sm:text-base focus:border-[#9B7DB8] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about what you're looking for..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-[#A8C5A0] to-[#8AB58A] text-white font-bold text-sm sm:text-base uppercase tracking-wider hover:shadow-lg transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info & Location */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="p-6 sm:p-8 rounded-2xl border-2 border-[#D4B5E8]/50 bg-white/80">
              <h3 className="text-xl sm:text-2xl font-bold text-[#5A4570] mb-4">Location & Hours</h3>

              <div className="space-y-4 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-xl sm:text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-[#5A4570]">Aurora Wellness Studio</p>
                    <p className="text-[#6B5F7B]">123 Healing Way, Suite 200</p>
                    <p className="text-[#6B5F7B]">Westminster, CO 80031</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl sm:text-2xl">📞</span>
                  <div>
                    <p className="font-semibold text-[#5A4570]">(720) 555-HEAL</p>
                    <p className="text-[#8B7B9B] text-xs sm:text-sm">Call or text anytime</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl sm:text-2xl">⏰</span>
                  <div>
                    <p className="font-semibold text-[#5A4570]">Office Hours</p>
                    <p className="text-[#6B5F7B] text-xs sm:text-sm">Mon-Fri: 9am - 7pm</p>
                    <p className="text-[#6B5F7B] text-xs sm:text-sm">Sat: 10am - 4pm</p>
                    <p className="text-[#6B5F7B] text-xs sm:text-sm">Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Insurance Info */}
            <div className="p-6 sm:p-8 rounded-2xl border-2 border-[#D4B89B]/50 bg-white/80">
              <h3 className="text-lg sm:text-xl font-bold text-[#5A4570] mb-3">Insurance Accepted</h3>
              <div className="flex flex-wrap gap-2">
                {["Aetna", "Cigna", "Blue Cross", "United", "Kaiser", "Humana"].map((insurance) => (
                  <span
                    key={insurance}
                    className="px-3 py-1.5 rounded-full bg-[#E8DDEF]/50 border border-[#D4B5E8] text-[#5A4570] text-xs sm:text-sm font-semibold"
                  >
                    {insurance}
                  </span>
                ))}
              </div>
              <p className="text-xs text-[#8B7B9B] mt-3">
                Self-pay and sliding scale options also available
              </p>
            </div>
          </div>
        </div>

        {/* Feature Highlights - LIGHT THEME */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="p-6 rounded-xl border-2 border-[#D4B5E8]/40 bg-white/80">
            <span className="text-3xl sm:text-4xl mb-3 block">🔒</span>
            <h3 className="text-base sm:text-lg font-bold text-[#5A4570] mb-2">HIPAA Compliant</h3>
            <p className="text-xs sm:text-sm text-[#6B5F7B]">
              Your privacy is our priority. All sessions and records are fully encrypted and secure.
            </p>
          </div>

          <div className="p-6 rounded-xl border-2 border-[#A8C5A0]/40 bg-white/80">
            <span className="text-3xl sm:text-4xl mb-3 block">💻</span>
            <h3 className="text-base sm:text-lg font-bold text-[#5A4570] mb-2">Telehealth Ready</h3>
            <p className="text-xs sm:text-sm text-[#6B5F7B]">
              Meet from anywhere via secure video. Same quality care from the comfort of home.
            </p>
          </div>

          <div className="p-6 rounded-xl border-2 border-[#D4B89B]/40 bg-white/80">
            <span className="text-3xl sm:text-4xl mb-3 block">📅</span>
            <h3 className="text-base sm:text-lg font-bold text-[#5A4570] mb-2">Flexible Scheduling</h3>
            <p className="text-xs sm:text-sm text-[#6B5F7B]">
              Evening and weekend appointments available. Book online 24/7 with instant confirmation.
            </p>
          </div>
        </div>

        {/* Final CTA - LIGHT THEME */}
        <div className="p-6 sm:p-8 lg:p-12 rounded-2xl border-2 border-[#D4B5E8]/50 bg-gradient-to-br from-[#E8DDEF]/30 via-white/60 to-[#D9E8D6]/20 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#5A4570] mb-4">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-sm sm:text-base text-[#6B5F7B] mb-6 sm:mb-8 max-w-2xl mx-auto">
            Book your first session today. New clients receive a free 15-minute consultation to ensure we're the right fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => handleBookNow('First Session')}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#9B7DB8] to-[#D4B5E8] text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Book Your Session →
            </button>
            <Link
              href="/get-quote"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-[#A8C5A0] text-[#5A7C55] bg-white/60 font-bold text-sm sm:text-base uppercase tracking-wider hover:bg-[#A8C5A0]/20 transition-all text-center"
            >
              Build Your Own Wellness Site
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
