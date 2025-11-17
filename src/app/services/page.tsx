'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatedPalette } from '../components/AnimatedPalette';
import { AnimatedMedical } from '../components/AnimatedMedical';
import { AnimatedWizard } from '../components/AnimatedWizard';
import { AnimatedLightning } from '../components/AnimatedLightning';
import { AnimatedBook } from '../components/AnimatedBook';
import { AnimatedScroll } from '../components/AnimatedScroll';
import { AnimatedSword } from '../components/AnimatedSword';
import { AnimatedDiamond } from '../components/AnimatedDiamond';
import { CalendlyButton } from '../components/CalendlyButton';
import { TestimonialsSection } from '../components/TestimonialsSection';

const suites = [
  {
    name: "Small Business Launchpads",
    questTitle: "The Path of the Crossroads",
    element: "Commerce",
    elementDesc: "Local • Accessible • Practical",
    difficulty: 1, // Novice Path
    description:
      "Where local heroes meet digital magic. Approachable websites and systems for cafés, studios, salons, and service providers—big dreams start small.",
    includes: [
      "Single-page to 5-page websites",
      "Booking & contact integrations",
      "Google Business + SEO setup",
      "Social media connections",
    ],
    rewards: [
      "Professional web presence",
      "Lead capture system",
      "Mobile-friendly design",
    ],
    starting: "$1,500+",
    href: "/services/small-business",
    color: "lunarGold",
    tiers: [
      { name: "Totoro's Garden", price: "$1,500+", popular: true, features: ["Beautiful single-page website", "Mobile-responsive design", "Contact form with email notifications", "Google Business Profile setup", "Basic SEO optimization", "Social media integration", "1 month of support & updates"] },
      { name: "Howl's Moving Castle", price: "$3,500+", features: ["3-5 page custom website", "Advanced booking calendar", "Payment processing (Stripe/Square)", "Blog or portfolio section", "Newsletter signup system", "Enhanced SEO + local search", "2 months support & updates"] },
      { name: "Spirited Away", price: "$6,000+", features: ["Full e-commerce capabilities", "Customer portal with login", "Inventory management", "Email automation sequences", "Analytics dashboard", "Advanced integrations", "3 months premium support"] },
    ],
  },
  {
    name: "Creative Design & Development",
    questTitle: "The Path of Water",
    element: "Water",
    elementDesc: "Adaptability • Flow • Creativity",
    difficulty: 2, // Intermediate Bender
    description:
      "Like water flowing around obstacles, branding and design that adapts to your vision while maintaining its essential nature.",
    includes: [
      "Branding & identity systems",
      "Custom web + UI builds",
      "Packaging & product visuals",
      "Creative visual direction",
    ],
    rewards: [
      "Professional brand identity",
      "Custom-built web presence",
      "Client-ready marketing assets",
    ],
    starting: "$1,800+",
    href: "/services/creative-design-development",
    color: "coralPink",
    tiers: [
      { name: "Branding Essential", price: "$1,800", features: ["Logo suite (3 variations)", "2-color palette + 2 fonts", "Basic brand guidelines", "1 round of revisions"] },
      { name: "Branding Professional", price: "$2,800", popular: true, features: ["Logo suite (5 variations)", "Full color palette + font pairing", "Comprehensive brand guidelines", "Social media kit", "2 rounds of revisions"] },
      { name: "Branding Premium", price: "$4,500", features: ["Everything in Professional", "Brand strategy workshop", "Extended logo suite (10+ variations)", "Print collateral designs", "3 rounds of revisions"] },
      { name: "Web Essential", price: "$3,000", features: ["3-page website", "Mobile responsive", "Basic SEO setup", "Contact form integration", "1 month post-launch support"] },
      { name: "Web Professional", price: "$5,500", popular: true, features: ["5-7 page website", "Blog or portfolio section", "Advanced SEO optimization", "Newsletter signup integration", "Custom animations", "2 months support"] },
      { name: "Web Premium", price: "$8,000", features: ["10+ page site", "CMS integration", "E-commerce capabilities", "Advanced animations", "Performance optimization", "3 months support"] },
    ],
  },
  {
    name: "Health x Tech Development",
    questTitle: "The Path of Earth",
    element: "Earth",
    elementDesc: "Foundation • Stability • Strength",
    difficulty: 3, // Master Bender
    description:
      "Rooted in clinical reality like bedrock beneath your feet. Healthcare platforms built with the unwavering strength and stability of stone.",
    includes: [
      "HIPAA-aligned UI and flows",
      "Nurse-to-nurse platforms",
      "Health data dashboards",
    ],
    rewards: [
      "HIPAA-compliant platform",
      "Clinical workflow mastery",
      "Healthcare-grade security",
    ],
    starting: "$10,000+",
    href: "/services/health-tech-development",
    color: "mermaidTeal",
    tiers: [
      { name: "Healthcare Platform Essential", price: "$10,000", features: ["3-5 core features", "Basic HIPAA compliance", "User authentication", "Simple dashboard", "1 user role", "1 month post-launch support"] },
      { name: "Healthcare Platform Professional", price: "$18,000", popular: true, features: ["5-10 features", "Full HIPAA compliance (BAA)", "Multi-role user system", "Advanced workflows", "Data visualization", "Integration with 1 third-party system", "2 months support"] },
      { name: "Healthcare Platform Premium", price: "$30,000", features: ["Complex clinical workflows", "Multi-facility support", "Advanced data analytics", "EHR/EMR integration", "Custom API development", "Regulatory documentation package", "3 months support + training"] },
      { name: "Clinical Dashboard Basic", price: "$3,500", features: ["Census tracking", "Alert system", "Basic metrics & KPIs", "Staff directory", "Shift handoff tools"] },
      { name: "Clinical Dashboard Advanced", price: "$6,500", popular: true, features: ["Real-time data feeds", "Custom charts & visualizations", "Predictive analytics", "Quality metrics tracking", "Automated reporting"] },
      { name: "Patient Portal Essential", price: "$4,000", features: ["Secure messaging", "Appointment scheduling", "Medical records access", "Prescription refills", "Educational resources"] },
    ],
  },
  {
    name: "Consulting",
    questTitle: "The Path of Air",
    element: "Air",
    elementDesc: "Wisdom • Freedom • Perspective",
    difficulty: 1, // Novice Path
    description:
      "Strategic wisdom that flows freely, seeing from heights others cannot reach. Guidance as light and adaptable as the wind itself.",
    includes: [
      "Healthtech product strategy",
      "UX for clinician workflows",
      "Creative/portfolio coaching",
    ],
    rewards: [
      "Clear product roadmap",
      "Expert guidance",
      "Actionable insights",
    ],
    starting: "$250/hr",
    href: "/services/consulting",
    color: "starlight",
    tiers: [
      { name: "Single Session", price: "$250/hr", features: ["Product roadmap review", "Safety pattern assessment", "Clinical validation insights", "Risk reduction strategies"] },
      { name: "Strategy Package", price: "$4,000", popular: true, features: ["Everything in Single Session", "Go-to-market planning (5 sessions)", "Pilot program design", "Regulatory pathway guidance", "Stakeholder presentation deck", "30-day Slack/email support"] },
      { name: "Strategic Partner", price: "$8,000/mo", features: ["Everything in Strategy Package", "Weekly strategic sessions", "Unlimited async consultation", "Board/investor deck review", "Clinical advisory network access", "Priority response time"] },
      { name: "UX Audit", price: "$2,000", features: ["Heuristic evaluation (clinical lens)", "Workflow friction analysis", "Adoption barrier identification", "Actionable improvement list"] },
      { name: "UX Transformation", price: "$5,000", features: ["Everything in UX Audit", "User testing with clinicians", "Interface redesign recommendations", "Load reduction strategies"] },
    ],
  },
  {
    name: "AI Innovation Suite",
    questTitle: "The Path of Fire",
    element: "Fire",
    elementDesc: "Power • Innovation • Transformation",
    difficulty: 3, // Master Bender
    description:
      "Transformative AI forged in the flames of innovation. Power that burns away the impossible, creating entirely new possibilities.",
    includes: [
      "AI product architecture",
      "Conversational & voice AI",
      "Moonlit Labs experiments",
    ],
    rewards: [
      "Intelligent automation",
      "Custom AI copilot",
      "Competitive advantage",
    ],
    starting: "$12,000+",
    href: "/services/ai-innovation",
    color: "lunarGold",
    tiers: [
      { name: "Essential RAG", price: "$12,000", features: ["Basic RAG chatbot setup", "Document ingestion pipeline", "Claude/OpenAI integration", "Simple query handling", "Basic UI implementation"] },
      { name: "Professional RAG", price: "$25,000", popular: true, features: ["Everything in Essential", "Multimodal capabilities (text + images)", "Context-aware conversations", "Role-based assistants", "Advanced prompt engineering", "Custom UI/UX design", "2 weeks post-launch support"] },
      { name: "Enterprise RAG", price: "$50,000", features: ["Everything in Professional", "Multi-agent orchestration", "Custom knowledge graphs", "Real-time learning loops", "Advanced safety guardrails", "Analytics & monitoring dashboard", "30-day premium support"] },
    ],
  },
  {
    name: "Author & Ghostwriting Studio",
    questTitle: "The Path of Spirit",
    element: "Spirit",
    elementDesc: "Connection • Balance • Voice",
    difficulty: 2, // Intermediate Bender
    description:
      "Channel the spiritual essence of your authentic voice. Stories that bridge worlds and connect deeply with readers' spirits.",
    includes: [
      "Book & cookbook ghostwriting",
      "Blogs + newsletters",
      "Brand stories & about pages",
      "Speeches & launch flows",
      "Author websites + reader magnets",
    ],
    rewards: [
      "Published work in your voice",
      "Author platform presence",
      "Reader engagement system",
    ],
    starting: "$250+",
    href: "/services/ghostwriting",
    color: "roseGold",
    tiers: [
      { name: "Short Book (50K words)", price: "$18,000", features: ["Voice alignment interviews", "Structure & chapter planning", "Full manuscript drafting (50K words)", "One revision cycle", "Final polish & formatting"] },
      { name: "Full Novel (80K words)", price: "$35,000", popular: true, features: ["Everything in Short Book", "Extended manuscript (80K words)", "Character development sessions", "Two revision cycles", "Plot structure consulting", "Query letter & synopsis"] },
      { name: "Premium Book (100K+ words)", price: "$50,000", features: ["Everything in Full Novel", "Extended manuscript (100K+ words)", "Multiple POV coordination", "Three revision cycles", "Author platform development", "Marketing copy & launch materials", "6 months post-completion support"] },
      { name: "Essential Cookbook", price: "$18,000", features: ["Recipe structuring + headnotes (50 recipes)", "Cultural storytelling integration", "Testing support notes", "Interior copy & introductions", "One revision cycle"] },
      { name: "Premium Cookbook", price: "$32,000", popular: true, features: ["75+ recipes", "Extended storytelling sections", "Recipe development collaboration", "Photography direction notes", "Two revision cycles", "Marketing copy"] },
    ],
  },
];

// Helper function to get quest icon component
const getQuestIcon = (suiteName: string, className?: string) => {
  switch (suiteName) {
    case "Small Business Launchpads":
      return <AnimatedDiamond className={className} />;
    case "Creative Design & Development":
      return <AnimatedPalette className={className} />;
    case "Health x Tech Development":
      return <AnimatedMedical className={className} />;
    case "Consulting":
      return <AnimatedWizard className={className} />;
    case "AI Innovation Suite":
      return <AnimatedLightning className={className} />;
    case "Author & Ghostwriting Studio":
      return <AnimatedBook className={className} />;
    default:
      return <AnimatedScroll className={className} />;
  }
};

// Helper function to render difficulty stars
const getDifficultyStars = (difficulty: number) => {
  const stars = [];
  for (let i = 0; i < 3; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-4 h-4 ${i < difficulty ? "opacity-100" : "opacity-20"}`}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#D4AF37"/>
      </svg>
    );
  }
  return stars;
};

// Get mastery level label (ATLA theme)
const getMasteryLabel = (difficulty: number) => {
  switch (difficulty) {
    case 1:
      return "NOVICE PATH";
    case 2:
      return "INTERMEDIATE BENDER";
    case 3:
      return "MASTER BENDER";
    default:
      return "BENDING PATH";
  }
};

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState('');
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(null);

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value) {
      window.location.href = value;
    }
  };

  const toggleAccordion = (suiteName: string) => {
    setExpandedAccordion(expandedAccordion === suiteName ? null : suiteName);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="min-h-screen bg-midnight text-pearlWhite">
      {/* HERO SECTION with Moon Phases */}
      <section id="hero" className="relative overflow-hidden px-6 py-12 sm:py-16 md:py-20">
        {/* Background Orbs */}
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-phoenixFire/60 via-lunarGold/40 to-mermaidTeal/60 blur-3xl animate-floatSlow" />
          <div className="absolute -left-24 bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-mermaidTeal/40 via-tealBright/30 to-transparent blur-3xl" style={{ animation: 'floatSlow 20s ease-in-out infinite 5s' }} />
        </div>

        <div className="relative mx-auto max-w-6xl space-y-6 sm:space-y-8">
          {/* Moon Phases */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-midnight border-2 border-moonlightSilver/40 hover:border-moonlightSilver/70 hover:scale-110 transition-all cursor-pointer flex-shrink-0 group relative"
              title="New Moon - Top"
              aria-label="Scroll to top"
            >
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-moonlightSilver opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Top</span>
            </button>
            <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-moonlightSilver/30 to-mermaidTeal/30" />
            <button
              onClick={() => scrollToSection('quests')}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-midnight via-moonlightSilver/30 to-moonlightSilver/60 border-2 border-moonlightSilver/50 hover:border-moonlightSilver/80 hover:scale-110 transition-all cursor-pointer flex-shrink-0 group relative"
              title="Waxing Crescent - Quest Board"
              aria-label="Scroll to quest board"
            >
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-moonlightSilver opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Quests</span>
            </button>
            <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-moonlightSilver/30 to-lunarGold/40" />
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-lunarGold via-moonlightSilver to-starlight border-2 border-lunarGold/70 transition-all shadow-lg shadow-lunarGold/30 flex-shrink-0"
              title="Full Moon - You are here"
            />
            <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-lunarGold/40 to-phoenixFire/30" />
            <button
              onClick={() => scrollToSection('help')}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-l from-midnight via-moonlightSilver/30 to-moonlightSilver/60 border-2 border-moonlightSilver/50 hover:border-moonlightSilver/80 hover:scale-110 transition-all cursor-pointer flex-shrink-0 group relative"
              title="Waning Crescent - Get Help"
              aria-label="Scroll to help section"
            >
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-moonlightSilver opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Help</span>
            </button>
            <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-phoenixFire/30 to-moonlightSilver/30" />
            <button
              onClick={() => scrollToSection('help')}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-midnight border-2 border-moonlightSilver/40 hover:border-moonlightSilver/70 hover:scale-110 transition-all cursor-pointer flex-shrink-0 group relative"
              title="New Moon - Contact"
              aria-label="Scroll to contact"
            >
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-moonlightSilver opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Contact</span>
            </button>
          </div>

          <div className="text-center space-y-4 sm:space-y-6">
            {/* Bending Paths Title */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-mermaidTeal/20 to-tealBright/20 border border-mermaidTeal/40">
              <AnimatedScroll className="w-6 h-6" />
              <p className="text-xs sm:text-sm tracking-[0.35em] text-mermaidTeal uppercase font-semibold">
                Six Bending Paths
              </p>
            </div>
            <h1 className="font-elegant text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold px-4">
              Choose your element. Master your path.
            </h1>
            <p className="font-serif text-base sm:text-lg text-moonlightSilver max-w-3xl mx-auto px-4 italic">
              Like the Avatar mastering all elements, every journey begins by choosing your path. Led by a nurse who codes,
              these six bending disciplines offer unique approaches—from local business magic to enterprise AI.
              Which path resonates with your vision?
            </p>

            {/* Service Dropdown Navigation */}
            <div className="max-w-md mx-auto pt-4">
              <div className="relative">
                <select
                  value={selectedService}
                  onChange={handleServiceChange}
                  className="w-full appearance-none rounded-2xl bg-gradient-to-r from-deepOcean/80 via-midnight/90 to-deepOcean/80 border-2 border-mermaidTeal/50 px-6 py-4 pr-12 text-base text-pearlWhite cursor-pointer hover:border-mermaidTeal hover:bg-gradient-to-r hover:from-deepOcean hover:to-midnight transition-all focus:outline-none focus:ring-2 focus:ring-mermaidTeal/70 focus:border-mermaidTeal backdrop-blur-sm"
                  style={{
                    colorScheme: 'dark'
                  }}
                >
                  <option value="" style={{ backgroundColor: '#0A1128', color: '#FAFAFA' }}>Select a service to explore...</option>
                  {suites.map((suite) => (
                    <option key={suite.href} value={suite.href} style={{ backgroundColor: '#0A1128', color: '#FAFAFA' }}>
                      {suite.name} — Starting at {suite.starting}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-mermaidTeal pointer-events-none" />
              </div>
              <p className="text-xs text-moonlightSilver/70 mt-2">Or scroll down to browse all suites</p>
            </div>

            {/* Primary CTA - Book Free Consultation */}
            <div className="pt-6 fade-in-up">
              <CalendlyButton
                url="https://calendly.com/pagadeventures/30min"
                text="Book Free Consultation"
                variant="primary"
              />
              <p className="text-xs text-moonlightSilver/60 mt-3">
                Not sure which path to choose? Let's discuss your vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="quests" className="px-6 pb-16">
        <div className="mx-auto max-w-6xl space-y-8">
          {/* Bending Paths Header */}
          <div className="space-y-3 text-center">
            <div className="inline-flex items-center gap-2">
              <AnimatedSword className="w-5 h-5" />
              <p className="text-sm tracking-[0.35em] text-starlight uppercase">
                Master The Elements
              </p>
              <AnimatedSword className="w-5 h-5" />
            </div>
            <p className="text-moonlightSilver max-w-2xl mx-auto">
              Each path adapts to your resources and timeline. Choose your element to begin training.
            </p>
          </div>

          {/* Quest Cards - Parchment Style */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {suites.map((suite, index) => (
              <article
                key={suite.name}
                className="relative rounded-2xl border-2 border-lunarGold/30 bg-gradient-to-br from-[#2a2520]/95 via-[#1a1510]/98 to-midnight/95 p-6 text-moonlightSilver shadow-2xl shadow-black/60 transition-all hover:border-lunarGold/70 hover:shadow-lunarGold/20 hover:-translate-y-1 animate-fadeInUp backdrop-blur-sm"
                style={{
                  animationDelay: `${(index + 1) * 0.1}s`,
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3CfeColorMatrix values=\'0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 0.03 0\' /%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' /%3E%3C/svg%3E")'
                }}
              >
                {/* Quest Icon */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-lunarGold/40 to-phoenixFire/30 border-2 border-lunarGold/60 flex items-center justify-center shadow-lg backdrop-blur">
                  {getQuestIcon(suite.name, "w-7 h-7")}
                </div>

                {/* Difficulty Stars */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5 text-sm">
                    {getDifficultyStars(suite.difficulty)}
                  </div>
                  <span className="text-[0.65rem] tracking-[0.2em] text-lunarGold/70 font-semibold">
                    {getMasteryLabel(suite.difficulty)}
                  </span>
                </div>

                {/* Quest Title */}
                <h2 className="text-xl font-bold text-pearlWhite mb-1 font-serif">
                  {suite.questTitle}
                </h2>
                <h3 className="text-sm text-lunarGold/80 mb-3">
                  {suite.name}
                </h3>

                {/* Quest Description */}
                <p className="mt-2 text-sm leading-relaxed">{suite.description}</p>

                {/* Training Focus */}
                <div className="mt-4 space-y-2">
                  <p className="text-xs text-lunarGold/70 uppercase tracking-wider font-semibold">Training Focus:</p>
                  <ul className="space-y-1.5 text-xs">
                    {suite.includes.map((item) => (
                      <li key={item} className="flex gap-2 items-start">
                        <svg className="mt-1 w-3 h-3 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 0L14 9L23 9L16 14L19 23L12 18L5 23L8 14L1 9L10 9L12 0Z" fill="#D4AF37"/>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mastery Achievements */}
                <div className="mt-4 p-3 rounded-xl bg-lunarGold/10 border border-lunarGold/20">
                  <p className="text-xs text-lunarGold/70 uppercase tracking-wider font-semibold mb-2">Mastery Achievements:</p>
                  <ul className="space-y-1 text-xs">
                    {suite.rewards.map((reward) => (
                      <li key={reward} className="flex gap-2 items-start">
                        <span className="inline-block w-4 h-4">
                          <AnimatedDiamond className="w-4 h-4" />
                        </span>
                        <span className="text-pearlWhite">{reward}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Training Investment */}
                <div className="mt-4 flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="url(#coinGold)" stroke="#D4AF37" strokeWidth="2"/>
                    <text x="12" y="16" fontSize="12" fill="#654321" textAnchor="middle" fontWeight="bold">$</text>
                    <defs>
                      <linearGradient id="coinGold" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#FFD700' }} />
                        <stop offset="100%" style={{ stopColor: '#D4AF37' }} />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-xs text-moonlightSilver/70">Training Investment</span>
                    <span className="text-xl font-bold text-lunarGold">{suite.starting}</span>
                  </div>
                </div>

                {/* Pricing Tiers Accordion */}
                {suite.tiers && suite.tiers.length > 0 && (
                  <div className="mt-4">
                    <button
                      onClick={() => toggleAccordion(suite.name)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-lunarGold/10 border border-lunarGold/30 hover:bg-lunarGold/20 hover:border-lunarGold/50 transition-all text-left"
                    >
                      <span className="text-sm font-semibold text-lunarGold">View Pricing Tiers</span>
                      <ChevronDown className={`w-4 h-4 text-lunarGold transition-transform ${expandedAccordion === suite.name ? 'rotate-180' : ''}`} />
                    </button>

                    {expandedAccordion === suite.name && (
                      <div className="mt-2 space-y-2 animate-fade-in-up">
                        {suite.tiers.map((tier: any, tierIndex: number) => (
                          <div
                            key={tierIndex}
                            className={`p-3 rounded-lg border ${tier.popular ? 'bg-mermaidTeal/10 border-mermaidTeal/40' : 'bg-deepOcean/40 border-deepOcean/60'} hover:border-lunarGold/50 transition-all`}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <h4 className="text-sm font-bold text-pearlWhite">{tier.name}</h4>
                                  {tier.popular && (
                                    <span className="px-2 py-0.5 text-[0.6rem] bg-mermaidTeal/30 text-mermaidTeal rounded-full font-semibold uppercase tracking-wide">
                                      Popular
                                    </span>
                                  )}
                                </div>
                                <p className="text-lg font-bold text-lunarGold mt-1">{tier.price}</p>
                              </div>
                            </div>
                            <ul className="space-y-1 text-xs text-moonlightSilver">
                              {tier.features.map((feature: string, featureIndex: number) => (
                                <li key={featureIndex} className="flex gap-2 items-start">
                                  <span className="text-lunarGold mt-0.5">•</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Begin Training Button */}
                <a
                  href={suite.href}
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-lunarGold/90 to-phoenixFire/80 px-6 py-3 text-sm font-bold text-midnight transition-all hover:from-lunarGold hover:to-phoenixFire hover:shadow-lg hover:shadow-lunarGold/40 hover:-translate-y-0.5 group"
                >
                  <span>Begin Training</span>
                  <span className="group-hover:translate-x-1 transition-transform inline-block w-4 h-4">
                    <AnimatedSword className="w-4 h-4" />
                  </span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-REALM PORTALS */}
      <section className="py-16 bg-gradient-to-b from-midnight to-midnightNavy border-t border-deepOcean/40">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-pearlWhite mb-3">
              Explore Other Realms
            </h2>
            <p className="text-moonlightSilver text-sm">
              Your journey doesn&apos;t end here. Each realm offers unique wisdom and power.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {/* AI Lab Portal */}
            <a href="/ai-lab" className="group block">
              <div className="p-6 rounded-xl bg-gradient-to-br from-lunarGold/10 to-phoenixFire/10 border border-lunarGold/30 hover:border-lunarGold transition-all hover:shadow-lg hover:shadow-lunarGold/20">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lunarGold/30 to-phoenixFire/30 flex items-center justify-center mb-3 border border-lunarGold/50 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-lunarGold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-pearlWhite mb-1 group-hover:text-lunarGold transition-colors">AI Battle System</h3>
                <p className="text-xs text-moonlightSilver">Four AI warriors ready to deploy. See the systems in action.</p>
              </div>
            </a>

            {/* Portfolio Portal */}
            <a href="/portfolio" className="group block">
              <div className="p-6 rounded-xl bg-gradient-to-br from-silverMist/10 to-stoneGray/10 border border-silverMist/30 hover:border-silverMist transition-all hover:shadow-lg hover:shadow-silverMist/20">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-silverMist/30 to-lunarGold/20 flex items-center justify-center mb-3 border border-silverMist/50 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-silverMist" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-pearlWhite mb-1 group-hover:text-silverMist transition-colors">Quest Chronicles</h3>
                <p className="text-xs text-moonlightSilver">Journey through five realms of completed legends and victories.</p>
              </div>
            </a>

            {/* About Portal */}
            <a href="/about" className="group block">
              <div className="p-6 rounded-xl bg-gradient-to-br from-starlight/10 to-moonlightSilver/10 border border-starlight/30 hover:border-starlight transition-all hover:shadow-lg hover:shadow-starlight/20">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-starlight/30 to-moonlightSilver/20 flex items-center justify-center mb-3 border border-starlight/50 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-starlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-pearlWhite mb-1 group-hover:text-starlight transition-colors">Moonlit Archives</h3>
                <p className="text-xs text-moonlightSilver">The Master&apos;s Journey from nurse to code warrior to Avatar State.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <TestimonialsSection limit={6} showTitle={true} />

      <section id="help" className="border-t border-deepOcean/60 bg-nightNavy/70 relative overflow-hidden">
        {/* Background quest scroll */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute left-10 top-10">
            <AnimatedScroll className="w-24 h-24" />
          </div>
          <div className="absolute right-10 bottom-10">
            <AnimatedSword className="w-24 h-24" />
          </div>
        </div>

        <div className="relative mx-auto flex max-w-4xl flex-col gap-4 px-6 py-10 text-center">
          <div className="inline-flex justify-center mb-2">
            <AnimatedWizard className="w-16 h-16" />
          </div>
          <h3 className="text-2xl font-semibold text-pearlWhite mb-2">
            Need guidance choosing your element?
          </h3>
          <p className="text-sm text-moonlightSilver max-w-2xl mx-auto">
            Finding balance between elements requires wisdom. Let's discuss which bending path aligns with your vision, timeline, and resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
            <CalendlyButton
              url="https://calendly.com/pagadeventures/30min"
              text="Book Free Consultation"
              variant="primary"
            />
            <a
              href="/contact?topic=services"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-mermaidTeal/70 px-8 py-4 text-base font-semibold text-mermaidTeal transition-all hover:bg-mermaidTeal hover:text-midnight hover:border-mermaidTeal hover:shadow-lg hover:shadow-mermaidTeal/40 group"
            >
              <span>Send a Message</span>
              <span className="group-hover:rotate-12 transition-transform inline-block">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" opacity="0.5"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="2" fill="currentColor"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
