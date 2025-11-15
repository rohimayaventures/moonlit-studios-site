import type { Metadata } from "next";
import { CalendlyEmbed } from '../components/CalendlyEmbed';

export const metadata: Metadata = {
  title: "Book a Consultation | Moonlit Studios",
  description:
    "Schedule a free consultation to discuss your project. Healthcare tech, AI innovation, creative design, or ghostwriting—let's explore how we can work together.",
  keywords: [
    "book consultation",
    "schedule call",
    "project discovery call",
    "free consultation",
    "healthcare tech consultation",
    "AI development consultation",
    "design consultation",
    "ghostwriting consultation"
  ],
  openGraph: {
    title: "Book a Consultation | Moonlit Studios",
    description:
      "Schedule a free consultation. Healthcare tech, AI innovation, creative design, ghostwriting. Let's discuss your vision.",
    type: "website",
    url: "https://moonlstudios.com/book",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Consultation | Moonlit Studios",
    description:
      "Schedule a free consultation to discuss your project vision.",
  },
};

export default function BookPage() {
  // TODO: Replace this URL with your actual Calendly link
  // Get your link from: https://calendly.com/event_types/user/me
  const calendlyUrl = "https://calendly.com/your-username/30min";

  return (
    <main className="min-h-screen bg-midnight text-pearlWhite">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-6">
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-mermaidTeal/60 via-lunarGold/40 to-tealBright/60 blur-3xl animate-floatSlow" />
          <div className="absolute -left-24 bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-phoenixFire/40 via-mermaidTeal/30 to-deepOcean/40 blur-3xl" style={{ animation: 'floatSlow 20s ease-in-out infinite 5s' }} />
        </div>

        <div className="relative mx-auto max-w-6xl space-y-6 sm:space-y-8">
          <div className="text-center space-y-4 sm:space-y-6 fade-in-up px-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-mermaidTeal/20 to-lunarGold/20 border border-mermaidTeal/40">
              <svg className="w-5 h-5 text-mermaidTeal" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-xs sm:text-sm tracking-[0.35em] text-mermaidTeal uppercase font-semibold">
                Let's Connect
              </p>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Book Your Free Consultation
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-moonlightSilver leading-relaxed max-w-3xl mx-auto">
              30-minute discovery call to discuss your project, timeline, and vision.
              No pressure, no commitment—just honest conversation about what's possible.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
              <div className="text-center p-4 rounded-xl bg-deepOcean/20 border border-mermaidTeal/20">
                <div className="text-4xl mb-2">💬</div>
                <h3 className="text-lg font-semibold text-pearlWhite mb-1">Discuss Your Vision</h3>
                <p className="text-sm text-moonlightSilver">Share your goals, challenges, and timeline</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-deepOcean/20 border border-lunarGold/20">
                <div className="text-4xl mb-2">🎯</div>
                <h3 className="text-lg font-semibold text-pearlWhite mb-1">Get Expert Insights</h3>
                <p className="text-sm text-moonlightSilver">Healthcare + AI + creative expertise in one call</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-deepOcean/20 border border-phoenixFire/20">
                <div className="text-4xl mb-2">🚀</div>
                <h3 className="text-lg font-semibold text-pearlWhite mb-1">Explore Next Steps</h3>
                <p className="text-sm text-moonlightSilver">Learn about pricing, timeline, and approach</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALENDLY EMBED SECTION */}
      <section className="relative py-12 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-deepOcean/40 to-midnight/60 border border-mermaidTeal/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-mermaidTeal/10">
            <CalendlyEmbed
              url={calendlyUrl}
              minHeight={700}
            />
          </div>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="relative py-12 px-6 bg-gradient-to-b from-midnight via-deepOcean/20 to-midnight">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">What Happens Next?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-left p-6 rounded-xl bg-deepOcean/30 border border-moonlightSilver/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-mermaidTeal/20 text-mermaidTeal font-bold">1</span>
                <h3 className="text-lg font-semibold">Confirmation Email</h3>
              </div>
              <p className="text-moonlightSilver text-sm">
                You'll receive an instant confirmation with calendar invite and Zoom link.
              </p>
            </div>
            <div className="text-left p-6 rounded-xl bg-deepOcean/30 border border-moonlightSilver/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-lunarGold/20 text-lunarGold font-bold">2</span>
                <h3 className="text-lg font-semibold">Prep Questionnaire</h3>
              </div>
              <p className="text-moonlightSilver text-sm">
                Optional brief form to help me understand your project before we chat.
              </p>
            </div>
            <div className="text-left p-6 rounded-xl bg-deepOcean/30 border border-moonlightSilver/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-phoenixFire/20 text-phoenixFire font-bold">3</span>
                <h3 className="text-lg font-semibold">Discovery Call</h3>
              </div>
              <p className="text-moonlightSilver text-sm">
                We'll discuss your goals, technical needs, and how I can help bring your vision to life.
              </p>
            </div>
            <div className="text-left p-6 rounded-xl bg-deepOcean/30 border border-moonlightSilver/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-starlight/20 text-starlight font-bold">4</span>
                <h3 className="text-lg font-semibold">Custom Proposal</h3>
              </div>
              <p className="text-moonlightSilver text-sm">
                If it's a good fit, you'll receive a detailed proposal with timeline and pricing within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL OR TRUST SIGNAL */}
      <section className="relative py-12 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-lunarGold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg className="w-5 h-5 text-lunarGold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg className="w-5 h-5 text-lunarGold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg className="w-5 h-5 text-lunarGold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg className="w-5 h-5 text-lunarGold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <p className="text-moonlightSilver italic mb-2">
            "Working with a nurse-turned-developer who truly understands clinical workflows was game-changing.
            The discovery call alone surfaced insights that saved us months of development time."
          </p>
          <p className="text-sm text-starlight">— Healthcare Tech Founder</p>
        </div>
      </section>
    </main>
  );
}
