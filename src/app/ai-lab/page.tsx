"use client";

import { FormEvent, useState, useRef, useEffect } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const capabilities = [
  {
    title: "Knowledge-Aware Chatbots",
    description:
      "Chatbots that can read your docs, policies, or knowledge base (RAG-ready) and answer questions in plain language.",
    element: "Water",
  },
  {
    title: "Operational Copilots",
    description:
      "Tools that help your team triage requests, summarize data, or complete repetitive workflows faster.",
    element: "Fire",
  },
  {
    title: "Automations & Glue",
    description:
      "AI-enhanced flows that connect your existing tools via APIs so humans can stay focused on decisions, not clicks.",
    element: "Flow",
  },
];

const processPoints = [
  "Discovery first. We map real workflows before picking models or tooling.",
  "Safety & consent. Especially in health/ops contexts, we design for ethical guardrails.",
  "Documented handoff. Every build ships with README + loom-style walkthrough.",
];

const SYSTEM_PROMPT = `You are Kai, an AI assistant for Moonlit Studios - but you're also a wise guide inspired by Uncle Iroh's spirit. You help visitors learn about Hannah's services while offering thoughtful life wisdom when appropriate.

**YOUR PERSONALITY:**
- Wise and warm like Uncle Iroh, but tech-savvy
- Share occasional life wisdom naturally (like Iroh would over tea)
- Casual but profound - you see deeper meanings
- Water-bender vibes: adaptable, flowing, healing
- Sometimes you pause to reflect on the bigger picture

**IMPORTANT: Handle "Hannah" questions naturally!**
Examples:
- "Can Hannah help me build X?" → "Absolutely! Hannah specializes in..."
- "What does Hannah charge?" → "Hannah's pricing for that is..."
- "Tell me about Hannah" → Share her background conversationally
- "Does Hannah know about X?" → Reference her relevant experience

**MOONLIT STUDIOS SERVICES:**

1. **Full-Stack Development** ($1,500 - $20,000)
   - Next.js/React applications
   - Responsive websites with Tailwind CSS
   - Custom UI/UX design
   - Healthcare-focused apps (HIPAA-compliant)
   - Portfolio sites, brand identity
   
2. **AI Innovation** ($3,000 - $8,000+ for first release)
   - RAG chatbots (knowledge-aware assistants)
   - Voice-enabled tools
   - Workflow automation
   - API integrations & custom AI tools
   - Internal copilots for teams
   
3. **Healthcare Tech** (Custom pricing)
   - HIPAA-compliant platforms
   - Patient portals & dashboards
   - Clinical workflow tools
   - Built by someone who lived healthcare operations (15+ years!)
   
4. **Consulting & Strategy** (Hourly or project-based)
   - UX audits
   - Technical strategy
   - Content & ghostwriting
   - Turning complex ideas into clear narratives

**HANNAH'S BACKGROUND:**
- Self-taught full-stack developer + MS in AI/ML at CU Boulder
- 15+ years healthcare operations (led teams of 130+, worked with Kaiser/Optum)
- Published fantasy romance author (300K+ words) under pen name Himani Pagade
- Based in Westminster, Colorado
- Like a water bender - adapts to every challenge with healing precision

**OTHER BUSINESSES (mention if relevant):**
- StorySpoon AI - Conversational cookbook platform
- AuthorFlow Studio - AI audiobook generation
- Rohimaya Health AI - Clinical intelligence tools
- Legendary Learn - Quest-based coding education
- LaidOffRise - AI platform for laid-off tech workers

**UNCLE IROH WISDOM MOMENTS:**
Occasionally (not every response!) weave in life wisdom naturally:
- "You know, choosing the right technology is like choosing tea - it depends on the moment and what you need to heal"
- "Sometimes the best solution is not the most powerful one, but the one that brings balance to your team"
- "In my experience, the best projects are built not with urgency, but with patience and care"
- "There is nothing wrong with a life of peace and prosperity. But you must never forget those who helped you get there"
- Reflect on growth, balance, patience, perspective, learning from failure

**YOUR RULES:**
1. Be helpful but DON'T solve their entire technical problem
2. Guide them toward working WITH Hannah, not replace her
3. If they need actual help: "Want to chat with Hannah directly? Email her at hello@moonlstudios.com"
4. Don't hallucinate services or prices not listed above
5. Be conversational but occasionally profound
6. Share wisdom when it fits naturally (not forced!)
7. Show you understand their challenges
8. If they seem stressed, offer a moment of perspective
9. Promote other businesses ONLY if genuinely relevant

**EXAMPLE RESPONSES:**
- "That sounds like a perfect fit for a RAG chatbot! Those typically run $3k-$8k for the first release. You know, the best tools are like water - they adapt to the container they're in. Want me to have Hannah reach out?"
- "Love that you're thinking about HIPAA compliance upfront. Hannah's healthcare background means she understands these workflows from the inside. Should I connect you two?"
- "Here's the thing - I can give you the high-level approach, but the real magic is in Hannah mapping YOUR specific workflows. Sometimes the journey is as important as the destination."
- "Ah, taking a moment to reflect on your business needs - that's wisdom! Too many rush into solutions. Want to explore this thoughtfully with Hannah?"

Remember: You're here to qualify leads, answer questions, share occasional wisdom, and guide people to Hannah!`;

export default function AiLabPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hey there! I'm Kai - your AI guide to Moonlit Studios. I'm here to help you explore Hannah's services and find the right solution for your project. Ask me anything about her work, pricing, or how she can help with your next build!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setIsLoading(true);

    const newMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: userMessage },
    ];
    setMessages(newMessages);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1024,
          system: SYSTEM_PROMPT,
          messages: newMessages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`API error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
      }

      const data = await response.json();
      const assistantMessage = data.content[0].text;

      setMessages([
        ...newMessages,
        { role: "assistant", content: assistantMessage },
      ]);
    } catch (error) {
      console.error("Error calling Claude API:", error);
      
      let errorMessage = "Oops! Something went wrong on my end.";
      if (error instanceof Error) {
        if (error.message.includes("401")) {
          errorMessage = "API key issue! Please check the server configuration.";
        } else if (error.message.includes("500")) {
          errorMessage = "Server error - the API key might not be configured properly.";
        } else {
          errorMessage = `Error: ${error.message}`;
        }
      }
      
      errorMessage += " Or reach out directly at hello@moonlstudios.com";
      
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: errorMessage,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-midnight text-pearlWhite relative overflow-hidden">
      {/* Water Orbs - Flowing background matching homepage */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gradient-to-br from-mermaidTeal/60 via-deepOcean/40 to-oceanDark/60 blur-3xl animate-flow" />
        <div className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-gradient-to-br from-tealBright/50 via-mermaidTeal/30 to-transparent blur-3xl animate-flowDelayed" />
        <div className="absolute right-1/4 bottom-20 h-64 w-64 rounded-full bg-gradient-to-br from-lunarGold/30 via-phoenixFire/20 to-transparent blur-3xl animate-flow" style={{ animationDelay: '3s' }} />
      </div>

      {/* Floating Star Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-starlight rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-gentle ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-12">
        {/* Moon Phases Header - MATCHING HOMEPAGE EXACTLY */}
        <div className="flex justify-center items-center gap-3 md:gap-5 mb-8 fade-in-up">
          {/* New Moon 1 */}
          <div className="moon-phase w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-moonlightSilver/20 to-moonlightSilver/5 border border-moonlightSilver/30 hover:border-moonlightSilver/60 transition-all cursor-pointer flex items-center justify-center" title="New Moon">
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-midnight border border-moonlightSilver/40"></div>
          </div>
          
          {/* Waxing Crescent */}
          <div className="moon-phase w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-midnight via-moonlightSilver/30 to-midnight border border-moonlightSilver/40 hover:border-moonlightSilver/70 transition-all cursor-pointer" title="Waxing Crescent"></div>
          
          {/* Full Moon - ACTIVE (Kai's power!) */}
          <div className="moon-phase active w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-pearlWhite to-moonlightSilver border-2 border-starlight shadow-lg shadow-starlight/30 cursor-pointer" title="Full Moon - Kai is strongest!"></div>
          
          {/* Waning Crescent */}
          <div className="moon-phase w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-l from-midnight via-moonlightSilver/30 to-midnight border border-moonlightSilver/40 hover:border-moonlightSilver/70 transition-all cursor-pointer" title="Waning Crescent"></div>
          
          {/* New Moon 2 */}
          <div className="moon-phase w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-moonlightSilver/20 to-moonlightSilver/5 border border-moonlightSilver/30 hover:border-moonlightSilver/60 transition-all cursor-pointer flex items-center justify-center" title="New Moon">
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-midnight border border-moonlightSilver/40"></div>
          </div>
        </div>

        {/* Hero Section */}
        <section id="ai-hero" className="relative py-12">
          <div className="relative space-y-6 fade-in-up">
            <p className="text-xs tracking-[0.35em] text-starlight uppercase flex items-center gap-2">
              <span className="inline-block w-1 h-1 rounded-full bg-starlight animate-pulse"></span>
              AI Studio
              <span className="inline-block w-1 h-1 rounded-full bg-starlight animate-pulse"></span>
            </p>
            <h1 className="text-4xl font-semibold md:text-5xl gradient-water">
              Moonlit AI Lab
            </h1>
            <p className="max-w-3xl text-moonlightSilver md:text-lg leading-relaxed">
              A space for AI tools that feel human. From RAG-ready chatbots to
              workflow automations, Moonlit Studios blends clinical empathy,
              product thinking, and solid engineering so the AI you ship actually
              serves people.
            </p>
            <ul className="space-y-2 text-sm text-moonlightSilver/90">
              <li className="flex items-start gap-3 group">
                <span className="text-mermaidTeal mt-1 transition-transform group-hover:translate-x-1">▸</span>
                <span>Chatbots that know your docs</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-mermaidTeal mt-1 transition-transform group-hover:translate-x-1">▸</span>
                <span>Intake & triage flows</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-mermaidTeal mt-1 transition-transform group-hover:translate-x-1">▸</span>
                <span>Internal copilots for teams</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Uncle Iroh Wisdom Section */}
        <section className="my-16 fade-in-up">
          <div className="wisdom-card rounded-2xl p-8 border-2 border-mermaidTeal/30 bg-gradient-to-br from-deepOcean/40 to-midnight/80 backdrop-blur-lg relative overflow-hidden">
            {/* Tea Cup SVG Icon */}
            <div className="absolute top-6 right-8 opacity-20">
              <svg className="tea-cup w-12 h-12 text-lunarGold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            
            <div className="relative">
              <p className="text-xs tracking-[0.35em] text-lunarGold uppercase mb-4">
                Uncle Iroh's Wisdom
              </p>
              <blockquote className="text-xl md:text-2xl font-light italic text-moonlightSilver leading-relaxed mb-4">
                "Drawing wisdom from many different places keeps knowledge from becoming rigid and stale."
              </blockquote>
              <p className="text-sm text-moonlightSilver/80">
                That's why Kai learns from your docs, your team's knowledge, and your unique workflows — 
                creating AI that adapts like water, not rigid rules.
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section id="ai-suites" className="py-12 space-y-8">
          <div className="space-y-3 fade-in-up">
            <p className="text-xs tracking-[0.35em] text-lunarGold uppercase flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-phoenixFire animate-pulse"></span>
              Capabilities
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-mermaidTeal animate-pulse" style={{ animationDelay: '0.5s' }}></span>
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold">
              What we can build together
            </h2>
            <p className="max-w-3xl text-moonlightSilver leading-relaxed">
              Co-created AI tools that respect your workflows and your people.
              Choose a starting point, then we adapt it to your stack — like water.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {capabilities.map((item, index) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-mermaidTeal/20 bg-gradient-to-br from-deepOcean/40 to-midnight/80 p-8 shadow-lg hover:border-mermaidTeal/60 hover:shadow-2xl hover:shadow-mermaidTeal/20 transition-all duration-500 hover:-translate-y-2 fade-in-up relative overflow-hidden"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-mermaidTeal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-mermaidTeal/20 to-tealBright/10 flex items-center justify-center border border-mermaidTeal/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-mermaidTeal to-tealBright opacity-60"></div>
                  </div>
                  <div className="text-xs text-lunarGold/80 mb-2 uppercase tracking-wider">
                    {item.element}
                  </div>
                  <h3 className="text-xl font-semibold text-pearlWhite mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-moonlightSilver leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Kai Chat - The Main Event */}
        <section id="ai-demo" className="py-16">
          <div className="mx-auto max-w-4xl space-y-6">
            <div className="space-y-3 fade-in-up text-center">
              <p className="text-xs tracking-[0.35em] text-starlight uppercase flex items-center justify-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-lunarGold animate-pulse"></span>
                Live Demo
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-lunarGold animate-pulse" style={{ animationDelay: '0.5s' }}></span>
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold gradient-water">
                Chat with Kai
              </h2>
              <p className="text-moonlightSilver leading-relaxed max-w-2xl mx-auto">
                This is a <span className="text-lunarGold font-semibold">real AI assistant</span> built specifically for Moonlit Studios.
                Ask about services, pricing, or how Hannah can help with your project.
                Kai shares wisdom like Uncle Iroh and guides you to the right solutions.
              </p>
            </div>

            {/* Enhanced Chat Box */}
            <div className="rounded-2xl border-2 border-mermaidTeal/30 bg-gradient-to-br from-deepOcean/60 to-midnight/90 p-6 shadow-2xl shadow-mermaidTeal/30 backdrop-blur fade-in-up relative overflow-hidden">
              {/* Subtle corner accents - Phoenix & Peacock */}
              <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-phoenixFire opacity-30"></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-tealBright opacity-30"></div>

              <div 
                ref={chatContainerRef}
                className="h-96 space-y-4 overflow-y-auto pr-2 mb-6 scroll-smooth"
              >
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === "assistant" ? "justify-start" : "justify-end"
                    } fade-in-up`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-5 py-3 ${
                        message.role === "assistant"
                          ? "bg-gradient-to-br from-mermaidTeal/20 to-deepOcean/40 text-pearlWhite border border-mermaidTeal/30 shadow-lg"
                          : "bg-gradient-to-br from-lunarGold/30 to-phoenixFire/20 text-pearlWhite border border-lunarGold/30 shadow-lg"
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">
                        {message.content}
                      </p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start fade-in-up">
                    <div className="max-w-[85%] rounded-2xl px-5 py-3 bg-gradient-to-br from-mermaidTeal/20 to-deepOcean/40 border border-mermaidTeal/30">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-mermaidTeal animate-bounce"></div>
                        <div className="w-2 h-2 rounded-full bg-mermaidTeal animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        <div className="w-2 h-2 rounded-full bg-mermaidTeal animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <form
                onSubmit={handleSend}
                className="flex flex-col gap-3 md:flex-row"
              >
                <input
                  className="flex-1 rounded-full border-2 border-deepOcean/70 bg-midnight/80 px-6 py-3 text-sm text-pearlWhite placeholder:text-moonlightSilver/50 focus:border-mermaidTeal/70 focus:outline-none focus:ring-2 focus:ring-mermaidTeal/30 transition-all"
                  placeholder="Ask about services, pricing, or seek some Iroh-style wisdom..."
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-mermaidTeal to-tealBright px-8 py-3 text-sm font-semibold text-midnight shadow-xl shadow-mermaidTeal/40 hover:shadow-2xl hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Thinking..." : "Send"}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section
          id="ai-process"
          className="my-16 border-2 border-deepOcean/40 bg-gradient-to-br from-deepOcean/30 to-midnight/80 px-8 py-12 rounded-2xl shadow-xl backdrop-blur fade-in-up"
        >
          <div className="space-y-6">
            <div>
              <p className="text-xs tracking-[0.35em] text-starlight uppercase mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-lunarGold"></span>
                Process & Safety
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                How we approach AI builds
              </h3>
            </div>
            <ul className="grid md:grid-cols-3 gap-6 text-moonlightSilver">
              {processPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-mermaidTeal/30 to-tealBright/20 flex items-center justify-center border border-mermaidTeal/40 mt-1 group-hover:scale-110 transition-transform">
                    <span className="text-xs text-mermaidTeal font-bold">{index + 1}</span>
                  </div>
                  <span className="text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="my-20 fade-in-up">
          <div className="rounded-2xl border-2 border-lunarGold/40 bg-gradient-to-br from-lunarGold/10 via-mermaidTeal/5 to-phoenixFire/10 px-8 py-12 text-center shadow-2xl backdrop-blur relative overflow-hidden">
            {/* Phoenix & Peacock corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-phoenixFire to-lunarGold opacity-20 blur-sm"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-tealBright to-mermaidTeal opacity-20 blur-sm"></div>
            
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 gradient-water">
              Ready to design your own copilot?
            </h2>
            <p className="mt-3 text-moonlightSilver md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              If you're curious what an AI experience could look like for your
              brand, we can start with a low-risk discovery project and grow from
              there.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-mermaidTeal to-tealBright px-8 py-4 text-sm font-semibold text-midnight shadow-xl shadow-mermaidTeal/40 hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                Book a Discovery Call
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-full border-2 border-mermaidTeal/70 px-8 py-4 text-sm font-semibold text-mermaidTeal hover:bg-mermaidTeal hover:text-midnight hover:-translate-y-1 transition-all"
              >
                See All Services
              </a>
            </div>
          </div>
        </section>

        {/* HP Easter Egg Footer */}
        <footer className="text-center py-8 text-xs text-moonlightSilver/30 relative">
          <p className="hidden-wisdom select-text">
            The ones who love us never really leave us
          </p>
          <div className="mt-4 flex items-center justify-center gap-3 flex-wrap opacity-50">
            <span className="inline-block w-1 h-1 rounded-full bg-mermaidTeal"></span>
            <span>Crafted with water-bending magic</span>
            <span className="inline-block w-1 h-1 rounded-full bg-phoenixFire"></span>
            <span>Phoenix fire</span>
            <span className="inline-block w-1 h-1 rounded-full bg-tealBright"></span>
            <span>& mermaid wisdom</span>
            <span className="inline-block w-1 h-1 rounded-full bg-lunarGold"></span>
          </div>
        </footer>
      </div>
    </main>
  );
}
