'use client';

import { useState } from 'react';
import { ChevronDown, ArrowRight, Star, CheckCircle, Flame, Droplets, Wind, Mountain, Sparkles, Store } from 'lucide-react';
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

// --- Data Configuration ---
const suites = [
  {
    id: "commerce",
    name: "Small Business Launchpads",
    pathName: "The Path of Commerce",
    element: "Commerce",
    elementIcon: Store,
    master: "The Merchant of the Crossroads",
    description: "Where local heroes meet digital magic. Approachable websites and systems for cafés, studios, salons, and service providers—big dreams start small.",
    includes: ["Single to 5-page sites", "Booking integrations", "Google Business SEO", "Social connections"],
    rewards: ["Professional presence", "Lead capture system", "Mobile-first design"],
    starting: "$1,500+",
    href: "/services/small-business",
    difficulty: 1,
    // Static classes for Tailwind purging
    cardClass: "service-card-commerce",
    textColorClass: "text-lunarGold",
    borderColorClass: "border-lunarGold",
    bgGradientClass: "from-lunarGold/20 to-amber-900/20",
    tiers: [
      { name: "The Teahouse", price: "$1,500+", features: ["Beautiful single-page site", "Mobile-responsive", "Contact & Booking forms", "Google Business Setup", "Basic SEO"] },
      { name: "The Market Stall", price: "$3,500+", popular: true, features: ["3-5 Page Custom Site", "Advanced Booking Calendar", "Payment Processing", "Blog/News Section", "Local SEO Dominance"] },
      { name: "The Trade Route", price: "$6,000+", features: ["Full E-Commerce Store", "Customer Login Portal", "Inventory Management", "Email Automation", "Analytics Dashboard"] },
    ],
  },
  {
    id: "water",
    name: "Creative Design & Development",
    pathName: "The Path of Water",
    element: "Water",
    elementIcon: Droplets,
    master: "The Shaper of Tides",
    description: "Like water flowing around obstacles, branding and design that adapts to your vision while maintaining its essential nature.",
    includes: ["Brand Identity Systems", "Custom Web/UI Builds", "Product Visuals", "Creative Direction"],
    rewards: ["Cohesive Brand Identity", "Custom Web Presence", "Marketing Assets"],
    starting: "$1,800+",
    href: "/services/creative-design-development",
    difficulty: 2,
    cardClass: "service-card-water",
    textColorClass: "text-mermaidTeal",
    borderColorClass: "border-mermaidTeal",
    bgGradientClass: "from-mermaidTeal/20 to-cyan-900/20",
    tiers: [
      { name: "River's Flow (Identity)", price: "$1,800", features: ["Logo Suite (3 Variations)", "Color & Typography System", "Brand Guidelines", "Social Media Kit"] },
      { name: "Ocean's Depth (Web)", price: "$5,500", popular: true, features: ["5-7 Page Custom Site", "Advanced Animations", "CMS Integration", "SEO Optimization", "Interactive Elements"] },
      { name: "Tsunami (Full Suite)", price: "$8,000+", features: ["Complete Brand & Web", "E-Commerce Capability", "3D/Advanced Visuals", "Performance Optimization", "3 Months Support"] },
    ],
  },
  {
    id: "earth",
    name: "Health x Tech Development",
    pathName: "The Path of Earth",
    element: "Earth",
    elementIcon: Mountain,
    master: "The Healer of Roots",
    description: "Rooted in clinical reality like bedrock. Healthcare platforms built with the unwavering strength, stability, and compliance of stone.",
    includes: ["HIPAA-Aligned UI", "Nurse-to-Nurse Platforms", "Health Dashboards", "Clinical Workflows"],
    rewards: ["HIPAA Compliance", "Clinical Workflow Fit", "Enterprise Security"],
    starting: "$3,500+",
    href: "/services/health-tech-development",
    difficulty: 3,
    cardClass: "service-card-earth",
    textColorClass: "text-emerald-400",
    borderColorClass: "border-emerald-500",
    bgGradientClass: "from-emerald-500/20 to-green-900/20",
    tiers: [
      { name: "Foundation", price: "$3,500", features: ["Clinical Dashboard UI (Non-PHI)", "Prototype/MVP Development", "Staff Directory", "Shift Handoff Tools", "Team Communication Hub"] },
      { name: "Bedrock", price: "$10,000", popular: true, features: ["HIPAA-Compliant Core", "User Authentication", "3-5 Custom Workflows", "Secure Messaging", "1 Month Support"] },
      { name: "Mountain", price: "$30,000+", features: ["Full Platform Build", "EHR/EMR Integration", "Advanced Analytics", "Multi-Facility Support", "Regulatory Documentation"] },
    ],
  },
  {
    id: "air",
    name: "Strategic Consulting",
    pathName: "The Path of Air",
    element: "Air",
    elementIcon: Wind,
    master: "The Sage of the Winds",
    description: "Strategic wisdom that flows freely, seeing from heights others cannot reach. Guidance as light and adaptable as the wind itself.",
    includes: ["Healthtech Strategy", "Clinical UX Audits", "Workflow Analysis", "Go-To-Market Plans"],
    rewards: ["Clear Product Roadmap", "Clinical Validation", "Risk Reduction"],
    starting: "$250/hr",
    href: "/services/consulting",
    difficulty: 1,
    cardClass: "service-card-air",
    textColorClass: "text-starlight",
    borderColorClass: "border-starlight",
    bgGradientClass: "from-starlight/20 to-slate-800/20",
    tiers: [
      { name: "The Gust (Audit)", price: "$2,000", features: ["Clinical UX Audit", "Workflow Friction Analysis", "Adoption Barrier Report", "Action Plan"] },
      { name: "The Wind (Strategy)", price: "$4,000", popular: true, features: ["Go-To-Market Strategy", "Pilot Program Design", "Regulatory Pathway Guide", "Pitch Deck Review"] },
      { name: "The Gale (Partner)", price: "$8,000/mo", features: ["Fractional Chief Clinical Officer", "Weekly Strategy Calls", "Investor Relations Support", "Unlimited Async Advice"] },
    ],
  },
  {
    id: "fire",
    name: "AI Innovation Suite",
    pathName: "The Path of Fire",
    element: "Fire",
    elementIcon: Flame,
    master: "The Forger of Sparks",
    description: "Transformative AI forged in the flames of innovation. Power that burns away the impossible, creating entirely new possibilities.",
    includes: ["AI Product Architecture", "Conversational Agents", "RAG Systems", "Voice AI"],
    rewards: ["Intelligent Automation", "24/7 AI Copilots", "Competitive Edge"],
    starting: "$12,000+",
    href: "/services/ai-innovation",
    difficulty: 3,
    cardClass: "service-card-fire",
    textColorClass: "text-phoenixFire",
    borderColorClass: "border-phoenixFire",
    bgGradientClass: "from-phoenixFire/20 to-red-900/20",
    tiers: [
      { name: "The Spark", price: "$12,000", features: ["Basic RAG Chatbot", "Document Ingestion", "OpenAI/Claude Integration", "Web Embed"] },
      { name: "The Flame", price: "$25,000", popular: true, features: ["Multimodal Agent (Text+Image)", "Context-Aware Memory", "Custom UI/UX", "Advanced Prompt Engineering"] },
      { name: "The Inferno", price: "$50,000+", features: ["Multi-Agent Orchestration", "Custom Knowledge Graphs", "Real-time Learning", "Enterprise Security Guardrails"] },
    ],
  },
  {
    id: "spirit",
    name: "Author & Ghostwriting",
    pathName: "The Path of Spirit",
    element: "Spirit",
    elementIcon: Sparkles,
    master: "The Keeper of Stories",
    description: "Channel the spiritual essence of your authentic voice. Stories that bridge worlds and connect deeply with readers' spirits.",
    includes: ["Ghostwriting", "Book Coaching", "Brand Storytelling", "Newsletters"],
    rewards: ["Published Legacy", "Authentic Voice", "Reader Connection"],
    starting: "$18,000+",
    href: "/services/ghostwriting",
    difficulty: 2,
    cardClass: "service-card-spirit",
    textColorClass: "text-roseGold",
    borderColorClass: "border-roseGold",
    bgGradientClass: "from-roseGold/20 to-purple-900/20",
    tiers: [
      { name: "The Scroll", price: "$18,000", features: ["Short Book (50k words)", "Voice Alignment", "Structure Planning", "One Revision Cycle"] },
      { name: "The Tome", price: "$35,000", popular: true, features: ["Full Novel (80k words)", "Character Development", "Plot Consulting", "Two Revision Cycles"] },
      { name: "The Legend", price: "$50,000+", features: ["Premium Book (100k+ words)", "Marketing Strategy", "Launch Materials", "Platform Development"] },
    ],
  },
];

// Helper for difficulty stars (Mastery Level)
const getMasteryStars = (difficulty: number) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(3)].map((_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 ${i < difficulty ? "fill-lunarGold text-lunarGold" : "text-stone-700"}`}
        />
      ))}
    </div>
  );
};

// Get mastery level label
const getMasteryLabel = (difficulty: number) => {
  switch (difficulty) {
    case 1:
      return "NOVICE PATH";
    case 2:
      return "INTERMEDIATE";
    case 3:
      return "MASTER BENDER";
    default:
      return "BENDING PATH";
  }
};

// Get icon component based on suite ID
const getIconComponent = (suiteId: string, className?: string) => {
  switch (suiteId) {
    case "commerce":
      return <AnimatedDiamond className={className} />;
    case "water":
      return <AnimatedPalette className={className} />;
    case "earth":
      return <AnimatedMedical className={className} />;
    case "air":
      return <AnimatedWizard className={className} />;
    case "fire":
      return <AnimatedLightning className={className} />;
    case "spirit":
      return <AnimatedBook className={className} />;
    default:
      return <AnimatedScroll className={className} />;
  }
};

export default function ServicesPage() {
  const [expandedTier, setExpandedTier] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState('');

  const toggleTierDetails = (tierId: string) => {
    setExpandedTier(expandedTier === tierId ? null : tierId);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value) {
      window.location.href = value;
    }
  };

  return (
    <main className="min-h-screen bg-midnight text-pearlWhite selection:bg-mermaidTeal/30">

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative overflow-hidden px-6 py-16 md:py-24">
        {/* Ambient Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-deepOcean/20 via-midnight/50 to-midnight rounded-full blur-3xl -z-10"></div>

        <div className="relative mx-auto max-w-6xl text-center space-y-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md animate-fade-in-up">
            <AnimatedScroll className="w-4 h-4 text-lunarGold" />
            <span className="text-xs font-bold tracking-[0.2em] text-lunarGold uppercase">
              Master The Elements
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-elegant text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up delay-100">
            Choose Your Path.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mermaidTeal via-starlight to-phoenixFire">
              Master Your Vision.
            </span>
          </h1>

          <p className="font-serif text-lg md:text-xl text-moonlightSilver max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Like the Avatar mastering the elements, every project requires a unique discipline.
            From the grounded stability of Health-Tech to the transformative fire of AI.
          </p>

          {/* "Choose Your Element" Navigation Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-12 animate-fade-in-up delay-300">
            {suites.map((suite) => {
              const Icon = suite.elementIcon;
              return (
                <button
                  key={suite.id}
                  onClick={() => scrollToSection(suite.id)}
                  className={`group flex flex-col items-center justify-center p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-1 hover:border-white/20`}
                >
                  <div className={`mb-2 text-moonlightSilver transition-colors ${suite.textColorClass.replace('text-', 'group-hover:text-')}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-moonlightSilver group-hover:text-white">
                    {suite.element}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Service Dropdown Navigation */}
          <div className="max-w-md mx-auto pt-6 animate-fade-in-up delay-400">
            <div className="relative">
              <select
                value={selectedService}
                onChange={handleServiceChange}
                className="w-full appearance-none rounded-2xl bg-gradient-to-r from-deepOcean/80 via-midnight/90 to-deepOcean/80 border-2 border-mermaidTeal/50 px-6 py-4 pr-12 text-base text-pearlWhite cursor-pointer hover:border-mermaidTeal hover:bg-gradient-to-r hover:from-deepOcean hover:to-midnight transition-all focus:outline-none focus:ring-2 focus:ring-mermaidTeal/70 focus:border-mermaidTeal backdrop-blur-sm"
                style={{ colorScheme: 'dark' }}
              >
                <option value="" style={{ backgroundColor: '#0A1128', color: '#FAFAFA' }}>Jump to a service...</option>
                {suites.map((suite) => (
                  <option key={suite.href} value={suite.href} style={{ backgroundColor: '#0A1128', color: '#FAFAFA' }}>
                    {suite.name} — Starting at {suite.starting}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-mermaidTeal pointer-events-none" />
            </div>
            <p className="text-xs text-moonlightSilver/70 mt-2">Or scroll down to browse all paths</p>
          </div>

          {/* CTA */}
          <div className="pt-8 animate-fade-in-up delay-500">
            <CalendlyButton
              url="https://calendly.com/pagadeventures/30min"
              text="Consult The Oracle (Book Call)"
              variant="primary"
            />
          </div>
        </div>
      </section>

      {/* --- SERVICES LIST --- */}
      <div className="max-w-6xl mx-auto px-6 pb-24 space-y-24">
        {suites.map((suite) => {
          const Icon = suite.elementIcon;
          return (
            <section key={suite.id} id={suite.id} className={`scroll-mt-32 ${suite.cardClass}`}>

              {/* Section Header */}
              <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${suite.bgGradientClass} border ${suite.borderColorClass} service-icon-container`}>
                  <Icon className={`w-8 h-8 ${suite.textColorClass}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-bold uppercase tracking-widest ${suite.textColorClass}`}>
                      {suite.pathName}
                    </span>
                    <div className="h-px w-12 bg-white/20"></div>
                    {getMasteryStars(suite.difficulty)}
                    <span className="text-[10px] text-moonlightSilver/60 uppercase tracking-wider">
                      {getMasteryLabel(suite.difficulty)}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{suite.name}</h2>
                  <p className="text-moonlightSilver text-lg max-w-2xl leading-relaxed">
                    {suite.description}
                  </p>

                  {/* Master & ROI Chips */}
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2 text-xs text-stone-400">
                      <span className="uppercase tracking-wider font-bold text-stone-500">Master:</span>
                      <span className="text-white font-serif italic">{suite.master}</span>
                    </div>
                    <div className="h-4 w-px bg-white/10"></div>
                    <div className="flex flex-wrap gap-2">
                      {suite.rewards.map((reward) => (
                        <span key={reward} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-moonlightSilver font-medium">
                          <AnimatedDiamond className={`w-3 h-3 ${suite.textColorClass}`} />
                          {reward}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Starting Price Badge */}
                <div className="text-right hidden md:block">
                  <p className="text-xs text-stone-500 uppercase tracking-widest font-bold mb-1">Investment</p>
                  <p className={`text-2xl font-bold ${suite.textColorClass}`}>{suite.starting}</p>
                </div>
              </div>

              {/* Pricing Tiers Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {suite.tiers.map((tier, i) => {
                  const tierId = `${suite.id}-${i}`;
                  const isExpanded = expandedTier === tierId;
                  // Show first 3 features in collapsed state
                  const previewFeatures = tier.features.slice(0, 3);
                  const hasMoreFeatures = tier.features.length > 3;

                  return (
                    <div
                      key={i}
                      className={`relative p-6 rounded-xl border transition-all duration-300 group ${
                        tier.popular
                          ? `tier-card-popular border-white/30 shadow-xl z-10 md:scale-105`
                          : 'bg-midnight/50 border-white/10 hover:border-white/20'
                      }`}
                    >
                      {tier.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest tier-popular-badge shadow-lg">
                          Mastery Path
                        </div>
                      )}

                      <div className="mb-4">
                        <h3 className={`text-lg font-bold mb-2 ${tier.popular ? 'text-white' : 'text-stone-300'}`}>
                          {tier.name}
                        </h3>
                        <p className={`text-2xl font-bold ${suite.textColorClass}`}>{tier.price}</p>
                      </div>

                      {/* Preview Features */}
                      <ul className="space-y-2 mb-4">
                        {previewFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-moonlightSilver">
                            <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${suite.textColorClass}`} />
                            <span className="leading-tight">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* View More Button & Dropdown */}
                      {hasMoreFeatures && (
                        <div className="relative mb-4">
                          <button
                            onClick={() => toggleTierDetails(tierId)}
                            className={`flex items-center gap-2 text-xs font-semibold ${suite.textColorClass} hover:underline underline-offset-2`}
                          >
                            <span>{isExpanded ? 'Hide Details' : `+${tier.features.length - 3} more features`}</span>
                            <ChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                          </button>

                          {/* Dropdown Overlay */}
                          {isExpanded && (
                            <div className="absolute left-0 right-0 top-full mt-2 p-3 md:p-4 rounded-lg bg-midnight/98 border border-white/20 shadow-2xl z-50 backdrop-blur-sm animate-fade-in max-h-48 overflow-y-auto">
                              <ul className="space-y-2">
                                {tier.features.slice(3).map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-moonlightSilver">
                                    <CheckCircle className={`w-3 h-3 md:w-4 md:h-4 mt-0.5 flex-shrink-0 ${suite.textColorClass}`} />
                                    <span className="leading-tight">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}

                      <a
                        href={suite.href}
                        className={`block w-full py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all text-center mt-auto ${
                          tier.popular
                            ? 'service-cta-btn'
                            : 'bg-white/5 text-white hover:bg-white/10'
                        }`}
                      >
                        Begin Training
                      </a>
                    </div>
                  );
                })}
              </div>

              {/* Link to full service page */}
              <div className="mt-8 text-center">
                <a
                  href={suite.href}
                  className={`inline-flex items-center gap-2 text-sm font-semibold ${suite.textColorClass} hover:underline underline-offset-4 transition-all group`}
                >
                  <span>Explore Full {suite.name} Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </section>
          );
        })}
      </div>

      {/* --- CROSS-REALM PORTALS --- */}
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
                  <AnimatedLightning className="w-5 h-5 text-lunarGold" />
                </div>
                <h3 className="text-lg font-semibold text-pearlWhite mb-1 group-hover:text-lunarGold transition-colors">AI Battle System</h3>
                <p className="text-xs text-moonlightSilver">Four AI warriors ready to deploy. See the systems in action.</p>
              </div>
            </a>

            {/* Portfolio Portal */}
            <a href="/portfolio" className="group block">
              <div className="p-6 rounded-xl bg-gradient-to-br from-silverMist/10 to-slate-800/10 border border-silverMist/30 hover:border-silverMist transition-all hover:shadow-lg hover:shadow-silverMist/20">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-silverMist/30 to-lunarGold/20 flex items-center justify-center mb-3 border border-silverMist/50 group-hover:scale-110 transition-transform">
                  <AnimatedBook className="w-5 h-5 text-silverMist" />
                </div>
                <h3 className="text-lg font-semibold text-pearlWhite mb-1 group-hover:text-silverMist transition-colors">Quest Chronicles</h3>
                <p className="text-xs text-moonlightSilver">Journey through five realms of completed legends and victories.</p>
              </div>
            </a>

            {/* About Portal */}
            <a href="/about" className="group block">
              <div className="p-6 rounded-xl bg-gradient-to-br from-starlight/10 to-moonlightSilver/10 border border-starlight/30 hover:border-starlight transition-all hover:shadow-lg hover:shadow-starlight/20">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-starlight/30 to-moonlightSilver/20 flex items-center justify-center mb-3 border border-starlight/50 group-hover:scale-110 transition-transform">
                  <AnimatedWizard className="w-5 h-5 text-starlight" />
                </div>
                <h3 className="text-lg font-semibold text-pearlWhite mb-1 group-hover:text-starlight transition-colors">Moonlit Archives</h3>
                <p className="text-xs text-moonlightSilver">The Master&apos;s Journey from nurse to code warrior to Avatar State.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <TestimonialsSection limit={3} showTitle={true} />

      {/* --- FOOTER CTA --- */}
      <section id="help" className="border-t border-deepOcean/30 bg-midnightNavy/50 relative overflow-hidden py-20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-mermaidTeal via-midnight to-midnight"></div>

        {/* Background quest scroll */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute left-10 top-10">
            <AnimatedScroll className="w-24 h-24" />
          </div>
          <div className="absolute right-10 bottom-10">
            <AnimatedSword className="w-24 h-24" />
          </div>
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center space-y-6">
          <div className="inline-flex justify-center mb-4">
            <AnimatedWizard className="w-16 h-16 text-starlight" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            The Scroll is Open. The Path is Yours.
          </h2>
          <p className="text-moonlightSilver text-lg max-w-2xl mx-auto">
            Whether you seek the stability of Earth or the innovation of Fire, we are ready to begin your training.
            Finding balance between elements requires wisdom—let&apos;s discuss which path aligns with your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <CalendlyButton
              url="https://calendly.com/pagadeventures/30min"
              text="Consult The Oracle"
              variant="primary"
            />
            <a
              href="/contact?topic=services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-mermaidTeal/70 text-mermaidTeal font-bold hover:bg-mermaidTeal hover:text-midnight transition-all"
            >
              Send a Message <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
