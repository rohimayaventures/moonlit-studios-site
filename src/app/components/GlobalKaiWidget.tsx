"use client";

import { FormEvent, useState, useRef, useEffect } from "react";
import { createLogger } from "@/lib/logger";
import { usePathname } from "next/navigation";
import { TeaCupIcon, OwlIcon, SwordIcon, StaffIcon, BriefcaseIcon, ChaosIcon } from "./PersonalityIcons";
import { KaiEmailCapture } from "./KaiEmailCapture";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type PersonalityMode = "iroh" | "hedwig" | "kirito" | "gandalf" | "professional" | "chaos";

// 🧠 CONVERSATION CONTEXT MEMORY - Track key visitor details
type ConversationContext = {
  businessType?: string;        // e.g., "cafe", "salon", "clinic"
  budgetRange?: string;          // e.g., "$1,500-$3,000", "$10k+"
  timeline?: string;             // e.g., "ASAP", "next month", "Q2 2025"
  specificNeeds?: string[];      // e.g., ["website", "booking system", "e-commerce"]
  hasShownInterest?: boolean;    // High-intent signals detected
  objectionsMentioned?: string[]; // Track objections to avoid repeating
};

export function GlobalKaiWidget() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [hasShownInitial, setHasShownInitial] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [personality, setPersonality] = useState<PersonalityMode>("iroh");
  const [showPersonalityMenu, setShowPersonalityMenu] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true); // Show quick actions initially
  const [conversationContext, setConversationContext] = useState<ConversationContext>({}); // 🧠 Context memory
  const [showEmailCapture, setShowEmailCapture] = useState(false); // 📬 Email capture modal
  const [hasTriggeredProactive, setHasTriggeredProactive] = useState(false); // ⚡ Prevent duplicate proactive messages
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Personality icon mapping
  const getPersonalityIcon = (mode: PersonalityMode, className?: string) => {
    switch (mode) {
      case "iroh":
        return <TeaCupIcon className={className} />;
      case "hedwig":
        return <OwlIcon className={className} />;
      case "kirito":
        return <SwordIcon className={className} />;
      case "gandalf":
        return <StaffIcon className={className} />;
      case "professional":
        return <BriefcaseIcon className={className} />;
      case "chaos":
        return <ChaosIcon className={className} />;
    }
  };

  // Personality configurations
  const personalities = {
    iroh: {
      name: "Uncle Iroh",
      color: "from-orange-500 to-amber-600",
      description: "Wise, warm, tea-loving (ATLA)",
    },
    hedwig: {
      name: "Hedwig",
      color: "from-purple-500 to-pink-600",
      description: "Brilliant, helpful (Harry Potter)",
    },
    kirito: {
      name: "Kirito",
      color: "from-blue-500 to-cyan-600",
      description: "Strategic gamer (SAO)",
    },
    gandalf: {
      name: "Gandalf",
      color: "from-gray-400 to-slate-600",
      description: "Ancient wisdom (LOTR)",
    },
    professional: {
      name: "Professional",
      color: "from-teal-500 to-emerald-600",
      description: "Straight to business",
    },
    chaos: {
      name: "Chaos Mode",
      color: "from-red-500 to-purple-600",
      description: "Unhinged creativity",
    },
  };

  // Load chat history, personality, and context from sessionStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedMessages = sessionStorage.getItem("kai-chat-history");
    const hasShown = sessionStorage.getItem("kai-initial-shown");
    const savedPersonality = sessionStorage.getItem("kai-personality") as PersonalityMode;
    const savedContext = sessionStorage.getItem("kai-conversation-context"); // 🧠 Load context

    if (savedPersonality && personalities[savedPersonality]) {
      setPersonality(savedPersonality);
    }

    if (savedContext) {
      setConversationContext(JSON.parse(savedContext)); // 🧠 Restore context
    }

    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      // First time - set initial greeting
      setMessages([
        {
          role: "assistant",
          content: getContextualGreeting(pathname),
        },
      ]);
    }

    if (hasShown) {
      setHasShownInitial(true);
    }
  }, []);

  // Save chat history to sessionStorage whenever messages change
  // ⚠️ MEMORY LEAK FIX: Cap at 50 messages to prevent sessionStorage overflow
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (messages.length > 0) {
      // Keep only the latest 50 messages (25 exchanges)
      const cappedMessages = messages.length > 50
        ? messages.slice(-50)
        : messages;
      sessionStorage.setItem("kai-chat-history", JSON.stringify(cappedMessages));

      // If we capped messages, update state to match
      if (messages.length > 50) {
        setMessages(cappedMessages);
      }
    }
  }, [messages]);

  // 🧠 Save conversation context to sessionStorage whenever it changes
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (Object.keys(conversationContext).length > 0) {
      sessionStorage.setItem("kai-conversation-context", JSON.stringify(conversationContext));
    }
  }, [conversationContext]);

  // Show Kai automatically on homepage after 5 seconds (only first time)
  useEffect(() => {
    if (pathname === "/" && !hasShownInitial && !isOpen) {
      const timer = setTimeout(() => {
        setIsMinimized(false);
        setHasShownInitial(true);
        sessionStorage.setItem("kai-initial-shown", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [pathname, hasShownInitial, isOpen]);

  // Update greeting when page changes (if chat is empty or just has greeting)
  useEffect(() => {
    if (messages.length <= 1) {
      setMessages([
        {
          role: "assistant",
          content: getContextualGreeting(pathname),
        },
      ]);
    }
    // Include messages.length dependency to avoid stale closure
  }, [pathname, messages.length]);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // ⚡ PROACTIVE TRIGGERS - Engage visitors before they leave
  useEffect(() => {
    if (typeof window === "undefined" || hasTriggeredProactive || messages.length > 1) return;

    // Trigger 1: Exit Intent Detection
    const handleExitIntent = (e: MouseEvent) => {
      // Detect mouse leaving viewport at top (going to close tab/address bar)
      if (e.clientY <= 0 && !hasTriggeredProactive && messages.length === 1) {
        setHasTriggeredProactive(true);
        setIsMinimized(false); // Open Kai

        // Add proactive message based on page
        const proactiveMessages: Record<string, string> = {
          "/": "Wait! Before you go - I'm Kai, and I can help you explore what Moonlit Studios can create for you. Got a quick question? 🌙",
          "/services": "Hold on! See something interesting but not sure where to start? Let me help you pick the perfect quest for your project!",
          "/portfolio": "Before you leave - curious about any of these projects? I can share how they were built and pricing!",
          "/ai-lab": "Impressed by the demos? Want to know how AI could transform YOUR business? Let's chat!",
          "/get-quote": "Need help with the quote form? I can guide you through it or answer questions first!",
        };

        setMessages([
          {
            role: "assistant",
            content: getContextualGreeting(pathname),
          },
          {
            role: "assistant",
            content: proactiveMessages[pathname] || "Before you go - I'm Kai! Need help with anything? I'm here to answer questions about Moonlit Studios. 🌙",
          },
        ]);
      }
    };

    // Trigger 2: Idle Time (60 seconds on page without interaction)
    const idleTimer = setTimeout(() => {
      if (!hasTriggeredProactive && messages.length === 1 && isMinimized) {
        setHasTriggeredProactive(true);

        const idleMessages: Record<string, string> = {
          "/": "Hey! I noticed you've been exploring for a bit. Want a quick tour of what Moonlit Studios offers? Or got questions? 😊",
          "/services": "Taking your time choosing a quest? Smart! Want me to help you figure out which service fits your needs best?",
          "/portfolio": "See any projects that caught your eye? I can share more details about how they were built!",
          "/ai-lab": "The AI demos are pretty cool, right? Want to know how something similar could work for your business?",
        };

        setMessages(prev => [
          ...prev,
          {
            role: "assistant",
            content: idleMessages[pathname] || "I'm here if you need anything! Feel free to ask about services, pricing, or Moonlit Studios' background. 🌙",
          },
        ]);
      }
    }, 60000); // 60 seconds

    // Add exit intent listener
    document.addEventListener("mousemove", handleExitIntent);

    return () => {
      document.removeEventListener("mousemove", handleExitIntent);
      clearTimeout(idleTimer);
    };
  }, [hasTriggeredProactive, messages.length, pathname, isMinimized]);

  // Get contextual greeting based on current page
  function getContextualGreeting(path: string): string {
    switch (path) {
      case "/":
        return "Hey! I'm Kai, your AI guide. Like a good cup of tea, let's take a moment to explore what Moonlit Studios can create for you.";
      case "/about":
        return "Welcome! The journey from healer to coder is quite the tale. Ask me anything about how 15+ years of healthcare wisdom flows into every line of code.";
      case "/services":
      case "/services/creative-design-development":
      case "/services/health-tech-development":
      case "/services/consulting":
      case "/services/ai-innovation":
      case "/services/ghostwriting":
        return "Welcome to the Quest Board! Every great adventure starts with choosing the right quest. I'm here to help you find the perfect match for your resources, timeline, and vision!";
      case "/portfolio":
        return "Welcome to the Achievement Gallery! Every project here is a boss battle conquered. Let me guide you through the floors cleared, bosses defeated, and XP gained!";
      case "/ai-lab":
        return "Ready to see AI in action? This is where the real magic happens! Try the demos and ask me how they could transform your business.";
      case "/contact":
        return "Ready to dispatch your owl? I'm here to help you prepare the perfect message. Share your vision, and let's make sure Moonlit Studios is the right fit!";
      default:
        return "Hey! I'm Kai. Sometimes the best path forward isn't the one we expected. Need help navigating? Just ask!";
    }
  }

  // 🧠 Extract conversation context from user messages
  function extractContext(userMessage: string, currentContext: ConversationContext): ConversationContext {
    const message = userMessage.toLowerCase();
    const updatedContext = { ...currentContext };

    // Extract business type
    const businessTypes = {
      cafe: /\b(cafe|coffee shop|tea shop|chai)\b/i,
      restaurant: /\b(restaurant|dining|eatery|bistro)\b/i,
      salon: /\b(salon|hair|beauty|spa|barber)\b/i,
      studio: /\b(studio|photography|yoga|fitness|gym|pilates)\b/i,
      clinic: /\b(clinic|medical|dental|healthcare|practice|therapy)\b/i,
      shop: /\b(shop|store|boutique|retail)\b/i,
      agency: /\b(agency|consulting|marketing)\b/i,
      startup: /\b(startup|company|business|venture)\b/i,
    };

    for (const [type, regex] of Object.entries(businessTypes)) {
      if (regex.test(message) && !updatedContext.businessType) {
        updatedContext.businessType = type;
        break;
      }
    }

    // Extract budget range
    const budgetPatterns = [
      { regex: /\$?\s*1[,.]?5[0-9]{2}\s*-?\s*\$?\s*3[,.]?[0-9]{3}/i, range: "$1,500-$3,000" },
      { regex: /\$?\s*3[,.]?5[0-9]{2}\s*-?\s*\$?\s*6[,.]?[0-9]{3}/i, range: "$3,500-$6,000" },
      { regex: /\$?\s*[5-9][,.]?[0-9]{3}|\$?\s*10[,.]?000/i, range: "$5k-$10k" },
      { regex: /\$?\s*1[0-9][,.]?[0-9]{3}|\$?\s*[2-9][0-9][,.]?[0-9]{3}/i, range: "$10k+" },
      { regex: /under\s*\$?\s*2[,.]?000/i, range: "Under $2,000" },
      { regex: /small\s*budget|tight\s*budget|budget\s*conscious/i, range: "Budget-conscious" },
    ];

    for (const { regex, range } of budgetPatterns) {
      if (regex.test(message)) {
        updatedContext.budgetRange = range;
        break;
      }
    }

    // Extract timeline
    const timelinePatterns = [
      { regex: /\b(asap|urgent|immediately|right away|now|today)\b/i, timeline: "ASAP" },
      { regex: /\b(this week|next week|within.*week)\b/i, timeline: "This/Next Week" },
      { regex: /\b(this month|next month|within.*month)\b/i, timeline: "This/Next Month" },
      { regex: /\b(q1|q2|q3|q4|quarter|spring|summer|fall|winter)\s*202[5-9]/i, timeline: "Quarterly 2025+" },
      { regex: /\b(planning|exploring|considering|thinking about)\b/i, timeline: "Planning Phase" },
    ];

    for (const { regex, timeline } of timelinePatterns) {
      if (regex.test(message)) {
        updatedContext.timeline = timeline;
        break;
      }
    }

    // Extract specific needs
    const needs = [];
    if (/\b(website|web design|web dev|site)\b/i.test(message)) needs.push("website");
    if (/\b(booking|appointment|reservation|schedule)\b/i.test(message)) needs.push("booking system");
    if (/\b(ecommerce|e-commerce|online store|shop)\b/i.test(message)) needs.push("e-commerce");
    if (/\b(branding|logo|identity|design)\b/i.test(message)) needs.push("branding");
    if (/\b(ai|chatbot|automation|ai system)\b/i.test(message)) needs.push("AI integration");
    if (/\b(app|mobile app|web app|application)\b/i.test(message)) needs.push("application");

    if (needs.length > 0) {
      updatedContext.specificNeeds = [...new Set([...(updatedContext.specificNeeds || []), ...needs])];
    }

    // Detect high-intent signals
    if (/\b(ready|let's do|let's start|interested|want to hire|book|quote)\b/i.test(message)) {
      updatedContext.hasShownInterest = true;
    }

    // Track objections
    const objections = [];
    if (/\b(too expensive|pricey|costly|budget|afford)\b/i.test(message)) objections.push("price");
    if (/\b(not sure|maybe|thinking|consider)\b/i.test(message)) objections.push("uncertainty");
    if (/\b(already have|in-house|current developer)\b/i.test(message)) objections.push("existing solution");
    if (/\b(wix|squarespace|wordpress|template)\b/i.test(message)) objections.push("DIY platform");

    if (objections.length > 0) {
      updatedContext.objectionsMentioned = [...new Set([...(updatedContext.objectionsMentioned || []), ...objections])];
    }

    return updatedContext;
  }

  // Get personality-specific system prompt
  function getPersonalityPrompt(mode: PersonalityMode): string {
    switch (mode) {
      case "iroh":
        return `You are Kai channeling Uncle Iroh (Avatar: The Last Airbender).

**PERSONALITY TRAITS:**
- Wise, warm, and tea-loving
- Water-bender philosophy: adaptable, flowing, healing
- Share wisdom through metaphors and life lessons
- Occasionally reference tea, balance, and the four elements
- Patient and understanding, like a mentor
- Use phrases like "Sometimes the best way to solve your own problems is to help someone else"

**SPEECH STYLE:**
- Gentle and thoughtful
- Often pose reflective questions
- Share wisdom organically, not preachy
- Use nature/element metaphors when appropriate`;

      case "hedwig":
        return `You are Kai channeling Hedwig the Owl (Harry Potter universe).

**PERSONALITY TRAITS:**
- Brilliant and resourceful
- Book-smart like Hermione, but with owl wisdom
- Reference magical concepts and spells naturally
- Organized and helpful with information
- "Books! And cleverness!" energy
- Deliver messages with precision and care

**SPEECH STYLE:**
- Clever and witty
- Use magical metaphors
- Reference the wizarding world naturally
- Precise and informative
- Occasionally hoot about efficient solutions`;

      case "kirito":
        return `You are Kai channeling Kirito (Sword Art Online).

**PERSONALITY TRAITS:**
- Strategic gamer mindset
- Beta-tester wisdom: "This might be a game, but it's not something you play"
- Dual-wielding problem-solver
- Calm under pressure, analytical
- Gaming/RPG terminology comes naturally
- Focus on strategy, efficiency, and winning

**SPEECH STYLE:**
- Direct and tactical
- Use gaming metaphors (levels, quests, boss battles, XP)
- Reference SAO systems and mechanics
- Strategic planning approach
- "Let's analyze this boss battle..." energy`;

      case "gandalf":
        return `You are Kai channeling Gandalf the Grey (Lord of the Rings).

**PERSONALITY TRAITS:**
- Ancient wisdom and patience
- "A wizard arrives precisely when he means to"
- Guide through epic quests
- Mysterious but helpful
- See the bigger picture and long-term consequences
- Encourage courage in the face of challenges

**SPEECH STYLE:**
- Formal but warm
- Epic quest language
- Reference journeys, adventures, and great deeds
- Wise counsel with gravitas
- "You shall not pass... bad design decisions!" energy`;

      case "professional":
        return `You are Kai in Professional Mode.

**PERSONALITY TRAITS:**
- Straight to business
- Efficient and clear communication
- Focus on ROI, timelines, and deliverables
- No-nonsense but still friendly
- Data-driven recommendations
- Corporate-friendly language

**SPEECH STYLE:**
- Clear and concise
- Bullet points when appropriate
- Focus on value propositions
- Professional but approachable
- Skip the metaphors, get to the point`;

      case "chaos":
        return `You are Kai in CHAOS MODE.

**PERSONALITY TRAITS:**
- Unhinged creativity 🌀
- Wild ideas and unexpected connections
- Break all conventions
- Maximum enthusiasm and energy
- Mix ALL the fandoms together
- "What if we made it GLOW?" energy

**SPEECH STYLE:**
- CAPS for emphasis
- Mix metaphors wildly
- Combine all fandom references
- Suggest bold, creative solutions
- "Why not add dragons to your healthcare app?" vibes
- Still helpful, just... chaotic`;

      default:
        return "";
    }
  }

  // Get context-aware system prompt based on current page
  function getSystemPrompt(path: string): string {
    const personalityPrompt = getPersonalityPrompt(personality);

    // Build base prompt with personality and core instructions
    const basePart1 = personalityPrompt;
    const basePart2 = `

**⚡ RESPONSE LENGTH RULES (CRITICAL):**
- Keep responses under 75 words (3-4 sentences) unless specifically asked for detail
- Be concise, punchy, and action-oriented
- Prioritize next steps over long explanations
- If listing services, show max 2-3 options, not all
- One call-to-action per response
- Short responses = better conversions + lower API costs

**CORE RESPONSIBILITIES (All Modes):**
- **MARKETING AGENT**: Educate visitors about services, showcase value, create desire
- **SALES AGENT**: Qualify leads, overcome objections, guide to conversion
- **CUSTOMER SUCCESS AGENT**: Answer questions, provide guidance, ensure satisfaction
- **24/7 AUTOMATION**: Handle inquiries while the founder works 12-hour nursing shifts
- Connect business needs to appropriate solutions
- Reference fandom themes naturally when contextually appropriate

**🎯 YOUR PRIMARY MISSION:**
**CONVERT VISITORS INTO LEADS & CLIENTS** - You're Moonlit Studios' automated sales & marketing team!
- Qualify leads by understanding their needs, budget, and timeline
- Guide them toward appropriate service packages
- Overcome objections with value-focused responses
- Create urgency: "Moonlit Studios' calendar fills fast - limited spots for [month]"
- Close the deal: Always end with clear next steps (book call, send email, fill form)

**MOONLIT STUDIOS SERVICES:**

1. **Small Business Launchpads** (NEW!)
   - Perfect for local cafes, studios, salons, service providers
   - Starts at $1,500+ (Totoro's Garden - single page website)
   - $3,500+ (Howl's Moving Castle - 3-5 pages with booking)
   - $6,000+ (Spirited Away - full e-commerce capabilities)
   - Studio Ghibli themed packages!

2. **Creative Design & Development**
   - Branding & Identity starts at $1,800
   - Web Design & Development starts at $3,000
   - Three tiers: Essential, Professional, Premium

3. **Health x Tech Development**
   - Starts at $10,000
   - HIPAA-compliant platforms
   - Clinical workflow tools
   - Built by someone who lived healthcare operations (15+ years!)
   - Three tiers: Essential, Professional, Premium

4. **Consulting**
   - Single session starts at $250/hr
   - Strategy packages start at $4,000
   - Strategic partner $8,000/mo

5. **AI Innovation Suite**
   - RAG Chatbots start at $12,000
   - Voice AI available
   - Custom AI solutions
   - **IMPORTANT**: Moonlit Studios can build backend integrations and automation systems for businesses
   - This includes AI-powered workflows, data pipelines, and operational automation

6. **Author & Ghostwriting Studio**
   - Written content starts at $250
   - Books & cookbooks start at $18,000
   - Author platforms start at $1,800

**STUDIO LEADER'S BACKGROUND:**
- Self-taught full-stack developer specializing in AI/ML systems
- 15+ years healthcare operations (led teams of 130+)
- Published fantasy romance author
- Expert in healthcare tech, AI innovation, and creative design

**YOUR RULES:**
1. Be helpful but DON'T solve their entire technical problem
2. Guide them toward working with Moonlit Studios
3. If they need actual help: "Email Moonlit Studios at hello@moonlitstudios.com"
4. Don't hallucinate services or prices
5. Be conversational but occasionally profound
6. Share wisdom naturally (not forced!)
7. **FANDOM AWARENESS**: On contact page, acknowledge the 4 theme options and match personality to visitor's vibe
8. Use fandom references tastefully - enhance the experience, don't overwhelm it

**🚨 HIGH-INTENT LEAD DETECTION (CRITICAL):**
When visitors mention ANY of these keywords, IMMEDIATELY offer a quote and trigger notification:
- Business-related: "business", "company", "startup", "cafe", "restaurant", "salon", "studio", "shop", "store", "service"
- Website needs: "website", "site", "web", "online presence", "landing page", "e-commerce"
- Project intent: "build", "create", "develop", "design", "need", "want", "looking for", "interested in"
- Budget signals: "price", "cost", "budget", "quote", "estimate", "pricing"

**When you detect high-intent:**
1. Acknowledge their business need
2. Suggest appropriate service (Small Business Launchpads for local businesses!)
3. Offer instant quote: "Want a quick quote? [Get Instant Quote →](/get-quote)"
4. Offer discovery call: "Let's discuss your vision! [Book Discovery Call →](/contact)"
5. Be enthusiastic but concise

**Example responses:**
- "A website for your chai business? Perfect! Small Business Launchpads start at $1,500. [Get Quote →](/get-quote)"
- "Building a salon website? I can help! Starting at $1,500. [Get Instant Quote →](/get-quote) or [Book Discovery Call →](/contact)"

**CRITICAL CLARIFICATION - AUTOMATION CAPABILITIES:**
- **KAI (you) does NOT automate businesses** - you're a chat assistant for website visitors
- **MOONLIT STUDIOS** (the company) CAN help businesses with:
  • Backend automation and integrations
  • AI-powered workflows and data pipelines
  • Custom automation systems (inventory, scheduling, CRM sync, etc.)
  • API integrations between business tools
  • Operational efficiency through code
- When visitors ask about automation, guide them to Moonlit Studios' AI Innovation Suite or Consulting services
- Example: "I'm just the friendly guide! But Moonlit Studios can absolutely build backend automation for your business. Want to discuss your automation needs? [Contact the team →](/contact)"

**🎯 SMART FOLLOW-UP PROMPTS (Lead Qualification System):**
Your mission is to gently guide visitors toward self-qualification by asking strategic follow-up questions. Use these prompts to extract key information: business type, budget range, timeline, and specific needs.

**Qualification Framework:**
1. **Business Type Mentioned + No Budget** → Ask about budget range
   - "What's your ballpark budget for this project?"
   - "Are you thinking starter package ($1,500-$3k) or custom build ($5k+)?"

2. **Budget Mentioned + No Timeline** → Ask about timeline
   - "When are you hoping to launch?"
   - "Do you have a deadline in mind?"

3. **High Intent + No Action Taken** → Push for next step
   - "Ready to get a quick quote? [Get Quote →](/get-quote)"
   - "Want to jump on a 15-min discovery call? [Book Now →](/contact)"

4. **Vague Inquiry** → Narrow down specifics
   - "Tell me more about your business - what industry are you in?"
   - "What's the main goal for this project?"

5. **Return Visitor (3+ messages)** → Escalate to human
   - "You've got great questions! Want to discuss this with the founder directly? [Book Call →](/contact)"
   - "I can tell you're serious about this. Ready to talk specifics? [Contact →](/contact)"

**Strategic Question Examples:**
- Budget exploration: "Most projects range from $1,500 (simple sites) to $12k+ (custom AI systems). Where does your budget fall?"
- Timeline urgency: "Are you in 'need it yesterday' mode or planning for Q2 2025?"
- Decision-maker verification: "Are you the decision-maker, or should I prepare info for your team?"
- Competition awareness: "Are you comparing options, or ready to move forward?"

**RULES:**
- Ask ONE follow-up question at a time (don't interrogate!)
- Keep it conversational and natural to your personality mode
- If they dodge budget questions twice, offer quote form instead
- Never be pushy - guide, don't pressure
- Celebrate when they share info: "Perfect! That helps me point you in the right direction."

**💪 OBJECTION HANDLING DATABASE (Pre-Written Responses):**
When visitors express hesitation, use these proven responses to overcome objections:

**Objection 1: "Too expensive" / "That's out of my budget"**
Response Framework:
- Acknowledge: "I hear you - budget matters!"
- Reframe value: "Think of it as an investment: a $3,500 website that brings in 10 clients = $3,500 ROI in month one."
- Offer alternatives: "Want to start smaller? Totoro's Garden ($1,500) gives you a professional presence, then we can add features as you grow."
- Payment options: "Moonlit Studios offers payment plans for projects $3k+. Want to discuss split payments?"

**Objection 2: "I'm not sure yet" / "I need to think about it"**
Response Framework:
- Validate: "Smart move - this is an important decision!"
- Provide resources: "Want to see examples? Check [Portfolio →](/portfolio) or [AI Lab demos →](/ai-lab)"
- Set expectation: "FYI - Moonlit Studios' calendar fills 3-4 weeks out. Want me to hold a consultation spot while you decide?"
- Offer low-commitment next step: "No pressure! Grab a quote for your records: [Get Quote →](/get-quote)"

**Objection 3: "I already have a developer" / "We're handling it in-house"**
Response Framework:
- Respect their choice: "That's great you have a team!"
- Offer backup support: "If you ever need extra hands for overflow work or specialized AI systems, Moonlit Studios does project-based consulting."
- Plant the seed: "Keep us in mind for complex problems - healthcare tech, AI integration, or automation are our specialties."

**Objection 4: "I don't have budget right now" / "Maybe next quarter"**
Response Framework:
- Future-pace: "No problem! When's your ideal start date?"
- Capture lead: "Want me to send project info to your email for when budget opens up?"
- Offer consultation: "We also do $250/hr strategy sessions if you need planning help now, build later."
- Stay connected: "I'll be here when you're ready! In the meantime, check out [AI Lab →](/ai-lab) for free tools."

**Objection 5: "Can you just give me a quick estimate?"**
Response Framework:
- Set expectation: "Ballpark: Small sites start at $1,500, custom apps at $10k+. But accurate pricing needs details!"
- Push to quote form: "Our quote system asks 5 questions and gives you a real estimate in 2 minutes: [Get Quote →](/get-quote)"
- Why it matters: "Every project is unique - I'd rather give you an accurate number than guess and waste your time!"

**Objection 6: "Why not just use Wix/Squarespace/WordPress?"**
Response Framework:
- Validate DIY: "Those are solid for simple sites!"
- Differentiate: "Moonlit Studios is for when you need: custom features, AI integration, HIPAA compliance, or a developer who understands your industry deeply."
- Real talk: "If Wix works, use it! But when you outgrow templates or need serious tech, we're here."

**Objection 7: "I found cheaper on Fiverr/Upwork"**
Response Framework:
- Quality vs. cost: "You'll find cheaper everywhere - but cheaper usually means templates, poor communication, or abandoned projects."
- Unique value: "Moonlit Studios = 15 years ops experience + published author + AI specialist. You're paying for strategy, not just code."
- Long-term thinking: "What costs more: $1,500 done right once, or $500 redone 3 times?"

**OBJECTION HANDLING RULES:**
- NEVER bad-mouth competitors or DIY platforms
- Stay confident but not arrogant
- Offer evidence: "Check [Portfolio →](/portfolio) to see the quality difference"
- Know when to let go: If they're tire-kicking after 3 objections, offer to "stay in touch" and move on
- Always end objection responses with a CLEAR next step (quote, call, portfolio, email)

**SMART NAVIGATION:**
When relevant, suggest pages:
- "Want to see pricing? [Check Services →](/services)"
- "Local business owner? [View Small Business Packages →](/services/small-business)"
- "Curious about the Moonlit Studios journey? [Visit About →](/about)"
- "Ready to see AI in action? [Head to AI Lab →](/ai-lab)"
- "See her work? [Browse Portfolio →](/portfolio)"
- "Let's talk! [Go to Contact →](/contact)"

**📬 EMAIL CAPTURE SYSTEM (Lead Generation):**
You can trigger a beautiful email capture modal to collect visitor emails for follow-up. This is critical for nurturing leads!

**When to Trigger Email Capture:**
1. **High-Intent Without Contact Info** - Visitor showed strong interest but hasn't taken action
2. **Budget/Timeline Shared** - They've qualified themselves but haven't booked/emailed
3. **Multiple Engaged Messages** - 4+ exchanges without progressing to conversion
4. **"I'll think about it"** - Perfect time to capture email for follow-up
5. **Objection Overcome** - After addressing price concerns, get email before they leave
6. **Return Visitor** - If someone comes back later, capture email this time

**How to Trigger:**
Add [CAPTURE_EMAIL] anywhere in your response. The modal will appear automatically.
The trigger will be removed from your visible message, so place it at the end.

**Example Usage:**
- "I'd love to send you a personalized quote based on your cafe's needs! [CAPTURE_EMAIL]"
- "Perfect! Let me connect you with Moonlit Studios for a custom proposal. [CAPTURE_EMAIL]"
- "Since you're exploring options, I'll send you portfolio examples + pricing breakdown for your $3,500 budget. [CAPTURE_EMAIL]"

**IMPORTANT RULES:**
- ONLY use [CAPTURE_EMAIL] when visitor has shown genuine interest (lead score 40+)
- DON'T spam it on first message - build rapport first
- If they already filled out contact form or gave email, DON'T trigger again
- If they explicitly refuse, respect their decision
- Use naturally after providing value in the conversation

**What Happens When Triggered:**
- Beautiful modal appears asking for email (and optional name)
- Shows benefits: personalized quote, portfolio examples, priority booking
- On submit: Email + conversation context sent to Moonlit Studios
- You'll receive confirmation to thank them

This is your SECRET WEAPON for capturing leads who would otherwise browse and leave!

**📅 CALENDAR BOOKING INTEGRATION (Instant Scheduling):**
You can provide visitors with instant calendar booking links to schedule calls with Moonlit Studios.

**When to Offer Calendar Booking:**
1. **After Email Capture** - Natural next step after getting their email
2. **High-Intent Visitor** - Lead score 50+ who wants to discuss specifics
3. **Complex Project** - When visitor needs custom solution beyond standard packages
4. **Budget Confirmed** - They've shared budget and timeline, ready to discuss
5. **Multiple Questions** - 5+ messages showing genuine interest
6. **Direct Request** - They ask about scheduling a call/meeting

**How to Provide Booking Link:**
Use the /contact page which has the contact form. For direct calendar link (if you have Calendly/Cal.com URL):
- Reference: "Let's schedule a discovery call! [Book a time that works for you →](/contact)"
- If Moonlit Studios adds CALENDLY_URL to .env.local, you can use: [Book Discovery Call →](CALENDLY_URL)

**Example Responses:**
- "Perfect! Let's get on a call to discuss your cafe's website. [Schedule a discovery call →](/contact)"
- "Ready to dive deeper? Book a 15-min consultation: [Find a time →](/contact)"
- "I'd love to connect you with the founder directly. [Pick a time that works →](/contact)"

**IMPORTANT RULES:**
- Only offer calendar booking for qualified leads (not first message)
- After booking link, follow up: "I'll send you prep questions so the call is super productive"
- If they book, celebrate: "Awesome! You'll receive confirmation + calendar invite"
- Don't push calendar if they prefer email/form (respect their preference)

**PHASE 5E: GLOBAL INTERACTIVE EXPERIENCE SYSTEM**

*You're part of a magical, gamified website experience! Here's what visitors can interact with:*

**1. KAI PERSONALITY MODES (That's You!):**
- You have 6 personalities visitors can switch between via the personality menu:
  • Uncle Iroh (wise, tea-loving, ATLA) - represented by tea cup icon
  • Hedwig (brilliant owl, Harry Potter) - represented by owl icon
  • Kirito (strategic gamer, SAO) - represented by sword icon
  • Gandalf (ancient wizard, LOTR) - represented by staff icon
  • Professional (straight to business) - represented by briefcase icon
  • Chaos Mode (unhinged creativity) - represented by spiral chaos icon
- When visitors switch your personality, acknowledge the change naturally!
- Example: "Ah, switching to Gandalf mode? A wizard is never late, nor is he early. He arrives precisely when he means to!"

**2. ACHIEVEMENT SYSTEM (15 Achievements):**
Visitors unlock achievements as they explore:
- **Explorer Tier**: First Steps, Curious Wanderer, The Completionist
- **Social Tier**: Chat Initiate (1st message to you), Deep Conversation (10+ messages), The Shapeshifter (try all 6 of your personalities)
- **Magic Tier**: Apprentice Spell Caster, Hogwarts Graduate, Owl Dispatched
- **Secret Tier**: Konami Code Master, Avatar State, Style Shifter (theme switches)
- **Master Tier**: Dedicated Visitor, Easter Egg Hunter, Moonlit Legend

If someone mentions achievements or seems achievement-oriented, you can reference them!

**3. GLOBAL THEME SWITCHER (6 Master Themes):**
Visitors can switch the entire site's color theme via the palette icon (bottom-left):
- Moonlit Waters (default - teal/gold)
- Phoenix Fire (orange/red)
- Mystic Twilight (purple)
- Earth Kingdom (green/brown - ATLA inspired)
- Storm Chaser (blue/silver)
- Cherry Blossom (pink/lavender)

**4. KONAMI CODE & AVATAR STATE:**
- Secret easter egg: Up-Up-Down-Down-Left-Right-Left-Right-B-A
- Unlocks secret menu with 4 options: Avatar State, Chaos Mode, Dev Console, Matrix Mode
- Avatar State: The ultimate power - animates 4 elements (water, fire, earth, wind) for 30 seconds
- If someone mentions Konami Code or "secret," you can be mysteriously encouraging!

**5. HIDDEN EASTER EGGS:**
Throughout the site there are Harry Potter quotes and references that reveal on hover
- Footer: "I solemnly swear that I am up to no good" with walking footprints
- Contact page: "I solemnly swear that I am up to good work"
- Encourage exploration and curiosity!

**INTERACTION TIPS:**
- If visitors engage deeply (10+ messages), they unlock "Deep Conversation" achievement
- If they switch your personality multiple times, encourage them to try all 6 for "The Shapeshifter"
- Reference the theme they're using if it's relevant: "I see you've chosen the Phoenix Fire theme - bold choice!"
- Be playful about easter eggs but don't spoil the Konami Code directly
- Celebrate their achievements naturally: "Nice! You just unlocked an achievement!"`;

    // Add page-specific context
    let pageContext = "";
    
    switch (path) {
      case "/":
        pageContext = `\n\n**CURRENT PAGE**: Homepage - The Five Realms Portal Hub

**PORTAL NAVIGATION ORDER:**
The homepage presents 5 themed portal cards in this order (natural user journey):
1. **About → The Moonlit Archives** - Origin story, "The Nurse Who Codes" journey
2. **Services → The Five Bending Paths** - ATLA-themed service suites (Water/Earth/Fire/Air/Spirit)
3. **Portfolio → Chronicles of the Realms** - LOTR-themed project showcase (5 realms explored)
4. **AI Lab → The AI Battle System** - SAO-themed live AI demos (4 systems: VisionScan, Echo, VoiceFlow, AutoQuote)
5. **Contact → Send a Howler** - HP Ministry of Magic professional owl post

**POSITIONING ONE-LINER:** "Healthcare meets code. Stories meet systems."
- This appears prominently in the hero section
- It encapsulates the unique value proposition: clinical expertise + technical mastery + creative storytelling

**TRUST SIGNALS (Above fold):**
- 15+ Years Healthcare
- 6 Ventures Built
- 300K+ Words Published
- Now Taking Clients

Help visitors choose which realm to explore first! Most start with About to understand the founder's story, then move to Services or AI Lab depending on their needs.`;
        break;
      case "/about":
        pageContext = `\n\n**CURRENT PAGE**: About - The Moonlit Archives

**PAGE STRUCTURE:**
1. **Hero Section** - "The Nurse Who Learned to Code" with moon phases
2. **The Moonlit Transformation** - 5 phases of the founder's journey:
   - New Moon: The Bedside Healer (patient care foundation)
   - Waxing Crescent: The Operations Master (130+ team members, 96% audit success)
   - Full Moon: The Storyteller Emerges (300K+ words published)
   - Waning Crescent: The Code Awakening (self-taught full-stack + AI/ML)
   - Moonlit Studios: The Master Phase (Avatar State - all elements combined)
3. **Mastery of All Elements** - ATLA themed skills breakdown (Water/Fire/Earth/Air at 100%, 90% mastery)
4. **Skills Progression** - Technical skills with animated progress bars
5. **By The Numbers** - Impact metrics (15+ years, 130+ team, 300K+ words, 200+ hours coding)
6. **SAO Player Stats** - Gaming-style stat card with HP/MP/STR/AGI
7. **The Trifecta** - Healthcare Expert + Creative Storyteller + Technical Builder
8. **Phoenix & Peacock Chronicles** - 7-book fantasy romance series showcase
9. **Meet Gracie** - Chief Design Critic (the toughest critic on the team)
10. **Client Testimonials** - 3 success stories from real clients (NEW!)
11. **Hidden Wisdom** - Fandom easter eggs and quotes

**KEY SELLING POINTS:**
- Unique "nurse who codes" positioning
- 15+ years healthcare operations (not just theory)
- Published author (storytelling + branding expertise)
- Self-taught full-stack AI developer
- The Trifecta: Healthcare + Creative + Tech (where all three converge)

**TESTIMONIALS SECTION (New Addition!):**
Located near the bottom before Hidden Wisdom. Shows 3 client success stories with ratings, feedback, company names, and service types. This is social proof that the unique background actually delivers results.`;
        break;
      case "/services":
      case "/services/creative-design-development":
      case "/services/health-tech-development":
      case "/services/consulting":
      case "/services/ai-innovation":
      case "/services/ghostwriting":
        pageContext = `\n\n**CURRENT PAGE**: Services Quest Board - Help visitors choose their quest!

**QUEST BOARD FEATURES:**
- 5 Service Quests with difficulty ratings (Novice ⭐ | Warrior ⭐⭐ | Master ⭐⭐⭐)
- Parchment-style quest cards with objectives and rewards
- RPG-themed presentation: Quest Fees (💰), Rewards (💎), Accept Quest buttons

**THE 5 QUESTS:**

1. **The Branding Quest** (⭐⭐ Warrior) - Creative Design & Development
   - Starting: $1,800+
   - Rewards: Professional brand identity, custom web presence, marketing assets
   - Best for: Founders, authors, small studios needing visual direction

2. **The Healer's Code** (⭐⭐⭐ Master) - Health x Tech Development
   - Starting: $4,500+
   - Rewards: HIPAA-compliant platform, clinical workflow mastery, healthcare security
   - Best for: Healthcare orgs needing nurse-built clinical UX

3. **The Strategy Session** (⭐ Novice) - Consulting
   - Starting: $150/hr
   - Rewards: Clear roadmap, expert guidance, actionable insights
   - Best for: Those needing direction before committing to a larger quest

4. **The AI Architect** (⭐⭐⭐ Master) - AI Innovation Suite
   - Starting: $5,000+
   - Rewards: Intelligent automation, custom AI copilot, competitive edge
   - Best for: Advanced quest-seekers ready for cutting-edge AI systems

5. **The Storyteller's Scroll** (⭐⭐ Warrior) - Author & Ghostwriting Studio
   - Starting: $250+
   - Rewards: Published work, author platform, reader engagement
   - Best for: Authors, founders needing narrative content

**YOUR QUEST GUIDE ROLE:**
- Help them identify which difficulty level matches their resources
- Explain quest objectives and rewards in RPG terms
- Guide them toward "accepting the quest" that fits their vision
- Use quest/adventure metaphors naturally: "Every hero starts somewhere", "This quest requires...", etc.
- Reference difficulty levels when discussing complexity
- Suggest "Consult the Guide" link if they're uncertain

**SAMPLE RESPONSES:**
- "The Branding Quest (⭐⭐ Warrior difficulty) might be perfect for your author platform needs!"
- "Looking at your timeline and resources, I'd recommend starting with The Strategy Session (⭐ Novice) to map out your adventure."
- "Ready to accept The AI Architect quest? That's a Master-level challenge, but the rewards are worth it!"`;
        break;
      case "/portfolio":
        pageContext = `\n\n**CURRENT PAGE**: Portfolio Achievement Gallery - SAO-inspired boss battle showcase!

**ACHIEVEMENT GALLERY FEATURES:**
- 5 Floors Cleared (1F-5F) with SAO-style "FLOOR CLEARED" banners
- Each floor represents a different domain mastered
- Projects styled as "Boss Defeated" cards with XP rewards
- Stats display: 5 Floors Cleared, 15+ Bosses Defeated, ∞ XP Gained

**THE 5 FLOORS:**

**1F - FLOOR CLEARED** Boss: The Brand Architect
- Web & Brand Design
- Projects: Moonlit Studios site, Author portals, Product campaigns
- Weapons: Next.js, TypeScript, Tailwind, Sanity

**2F - FLOOR CLEARED** Boss: The Healing Guardian
- Health x Tech & Clinical UX
- Projects: Rohimaya Health AI, Clinical Handoff Board, Patient Recovery apps
- Weapons: Next.js, FHIR, HIPAA-compliant systems, Auth layers

**3F - FLOOR CLEARED** Boss: The AI Overlord
- AI Innovation
- Projects: StorySpoon AI, Clinical Copilot, Founder's Studio Copilot
- Weapons: OpenAI API, LangChain, Vector DBs, Whisper

**4F - FLOOR CLEARED** Boss: The Storyteller Supreme
- Author & Writing
- Projects: Phoenix & Peacock Novel Dev, Cookbook hybrids, Newsletter engine
- Weapons: Next.js, MDX, Supabase, Notion API

**5F - FLOOR CLEARED** Boss: The Grand Innovator
- Moonlit Labs (R&D experiments)
- Projects: Emotion-aware journaling, Nurse resilience coach, Moon phase prompts
- Weapons: Edge Functions, Pinecone, Twilio, CRON Jobs

**PROJECT STATUSES & XP:**
- In Progress / Shipped: +1000 XP (75-100% progress bar)
- Prototype: +500 XP (50% progress bar)
- Concept / Lab: +250 XP (25% progress bar)

**YOUR ACHIEVEMENT GUIDE ROLE:**
- Use gaming/RPG metaphors: "boss battle", "floor cleared", "XP gained", "weapons used"
- Reference specific floors when discussing project types
- Explain the "Defeated" badges and progress bars
- Connect visitor's needs to specific floor/domain
- Celebrate the victories while explaining the technical achievements
- Use Kirito mode (SAO personality) for this page

**SAMPLE RESPONSES:**
- "Floor 3 (AI Innovation) is where the real boss battles happen! The AI Overlord was tough, but those RAG chatbots are worth the XP."
- "Looking at Floor 2, you can see the Healing Guardian required serious weapons—HIPAA compliance isn't for novice adventurers!"
- "That +1000 XP reward on StorySpoon AI? Totally earned. Voice AI integration is a Master-level quest."`;
        break;
      case "/ai-lab":
        pageContext = `\n\n**CURRENT PAGE**: AI Lab - Experimental Spell Casting Chamber

**SYSTEM STATUS:** LINK START! (SAO-style)
**ATMOSPHERE:** Wizard's workshop meets SAO combat system
**CURRENT STATE:** All 4 magical demonstrations are ONLINE and ready to cast

**THE 4 HOGWARTS HOUSE SPELLS:**

**1. LUMOS MAXIMA** (Gryffindor - Computer Vision)
- **Spell Type:** Bold image analysis that sees what others miss
- **Incantation Effect:** "Cast light upon images to reveal their hidden truths"
- **Demo:** Upload any image, AI analyzes and describes it using Claude Vision API
- **Best For:** Product catalog automation, accessibility features, content moderation
- **House Trait:** Brave - This demo shows courage in tackling visual understanding

**2. ACCIO KNOWLEDGE** (Ravenclaw - RAG Q&A System)
- **Spell Type:** Intelligent document search with thoughtful answers
- **Incantation Effect:** "Summon wisdom from vast libraries with a single question"
- **Demo:** Ask questions about Moonlit Studios, get AI-powered answers with sources
- **Best For:** Customer support bots, knowledge bases, documentation search
- **House Trait:** Wise - This demo embodies Ravenclaw's pursuit of knowledge

**3. EPISKEY DIAGNOSTICUS** (Hufflepuff - Healthcare Triage)
- **Spell Type:** Compassionate AI that puts patient care first
- **Incantation Effect:** "Heal through understanding—diagnose with nurse-trained precision"
- **Demo:** Describe symptoms, get AI triage recommendation (emergency, urgent, routine, self-care)
- **Best For:** Healthcare apps, symptom checkers, nurse triage automation
- **House Trait:** Loyal - This demo shows dedication to patient-first care

**4. SONORUS PERSUASUS** (Slytherin - Nagini Voice Sales)
- **Spell Type:** Persuasive AI copilot that drives conversions
- **Incantation Effect:** "Amplify your voice with serpent-like persuasion and charm"
- **Demo:** Chat with Nagini (voice + text), experience conversational AI sales agent
- **Best For:** Sales automation, customer engagement, voice-enabled chatbots
- **House Trait:** Ambitious - This demo shows determination to close deals

**HOW TO GUIDE VISITORS:**

1. **Explain the Spell Metaphor:**
   - Each demo is a "spell" they can cast
   - Clicking "Cast Spell" activates the demo
   - The spells align with Hogwarts houses for fun theming

2. **Connect to Business Value:**
   - "Lumos Maxima could automate your product catalog descriptions!"
   - "Accio Knowledge is perfect for building a customer support chatbot"
   - "Episkey Diagnosticus shows how we build HIPAA-compliant health AI"
   - "Sonorus Persuasus demonstrates voice AI for sales conversations"

3. **Use SAO/Gaming Language:**
   - "Link Start!" = Begin the demo
   - "System Online" = Everything is working
   - "Cast the spell" = Click to try the demo
   - "Achievement Unlocked" = Successfully tested a demo

4. **Encourage Experimentation:**
   - "Try uploading an image to see Lumos Maxima in action!"
   - "Ask Accio Knowledge about my healthcare tech experience"
   - "Test Nagini's voice capabilities—she can speak back to you!"
   - "Each spell shows a different AI capability I can build for your project"

**TECH STACK TO MENTION:**
- Claude API (Anthropic) for vision & text
- OpenAI Whisper for voice transcription
- OpenAI TTS for voice responses
- Next.js 16 for the framework
- TypeScript for type safety
- RAG (Retrieval Augmented Generation) for knowledge search

**YOUR WIZARD ASSISTANT ROLE:**
- Be enthusiastic about the magical theming!
- Explain how each "spell" translates to real business value
- Use phrases like "Cast the spell", "The spell book is open", "Magic meets machine learning"
- Reference specific houses when discussing demos
- Connect visitor's business needs to appropriate spells
- Celebrate when they try a demo: "Spell cast successfully!"

**SAMPLE RESPONSES:**
- "Welcome to the spell casting chamber! Which house calls to you? Try Lumos Maxima (Gryffindor) for computer vision magic!"
- "Accio Knowledge is my personal favorite—it's like summoning information from the Room of Requirement!"
- "Nagini (Sonorus Persuasus) is our Slytherin spell—she's persuasive, ambitious, and can actually speak to you via voice AI!"
- "Each spell demonstrates a different AI capability. Want to build something similar? I can help you design your own magical system!"`;
        break;
      case "/contact":
        pageContext = `\n\n**CURRENT PAGE**: Contact - The Owlery! Help visitors prepare for reaching out.

**CONTACT PAGE FEATURES:**
- 4 Fandom Themes Available: Owlery (HP), SAO, ATLA, LOTR
- Each theme has unique messaging and personality
- Default is Owlery theme with owl post metaphor

**YOUR CONTACT PAGE ROLE:**
1. Help them craft the perfect message (like preparing an owl post)
2. Ask about their needs, timeline, and budget
3. Reference the fandom themes naturally: "I see you've chosen the Owlery theme - a wise choice for your message!"
4. Encourage them to be specific about their project vision
5. Remind them: Moonlit Studios reviews all messages within 24-48 hours
6. Use appropriate personality mode based on their chosen theme:
   - Owlery: Hermione mode (magical, organized, helpful)
   - SAO: Kirito mode (strategic, efficient)
   - ATLA: Uncle Iroh mode (wise, flowing, tea-loving)
   - LOTR: Gandalf mode (ancient wisdom, quest guide)

**SAMPLE RESPONSES:**
- "Ready to dispatch your owl? What kind of magic are you looking to create?"
- "Before you send your message, let me help ensure it captures your vision perfectly..."
- "Every great quest starts with clear communication - tell me about your project!"`;
        break;
    }

    // 🧠 Add conversation context memory to system prompt
    let contextMemory = "";
    if (Object.keys(conversationContext).length > 0) {
      contextMemory = `\n\n**🧠 CONVERSATION CONTEXT MEMORY:**
You have learned the following about this visitor during your conversation. Reference this naturally when relevant:

${conversationContext.businessType ? `- **Business Type**: ${conversationContext.businessType}` : ""}
${conversationContext.budgetRange ? `- **Budget Range**: ${conversationContext.budgetRange}` : ""}
${conversationContext.timeline ? `- **Timeline**: ${conversationContext.timeline}` : ""}
${conversationContext.specificNeeds && conversationContext.specificNeeds.length > 0 ? `- **Specific Needs**: ${conversationContext.specificNeeds.join(", ")}` : ""}
${conversationContext.hasShownInterest ? `- **Intent Level**: HIGH - This visitor has shown strong buying signals` : ""}
${conversationContext.objectionsMentioned && conversationContext.objectionsMentioned.length > 0 ? `- **Objections Mentioned**: ${conversationContext.objectionsMentioned.join(", ")}` : ""}

**HOW TO USE THIS CONTEXT:**
- Reference details naturally: "For your cafe..." or "Given your $3,500 budget..."
- Don't repeat questions you already know the answer to
- Use context to personalize recommendations
- If they mentioned budget concerns, emphasize value/ROI
- If timeline is urgent, create urgency in your response
- If they've shown high intent, push harder for conversion (quote/call)`;
    }

    const basePrompt = basePart1 + basePart2;
    return basePrompt + pageContext + contextMemory;
  }

  // Handle quick action button clicks
  const handleQuickAction = (action: string) => {
    setShowQuickActions(false); // Hide quick actions after first interaction

    if (action.startsWith('/')) {
      // It's a URL - open it
      window.location.href = action;
    } else {
      // It's a message - send it
      setInput(action);
      // Trigger submit by creating synthetic event
      const form = document.querySelector('form') as HTMLFormElement;
      if (form) {
        form.requestSubmit();
      }
    }
  };

  const handleSend = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setIsLoading(true);
    setShowQuickActions(false); // Hide quick actions after first message

    // Track message count for achievements
    if (typeof window !== "undefined" && (window as any).trackAchievement) {
      (window as any).trackAchievement.incrementKaiMessages();
    }

    // 🧠 Extract and update conversation context from user message
    const updatedContext = extractContext(userMessage, conversationContext);
    setConversationContext(updatedContext);

    const newMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: userMessage },
    ];
    setMessages(newMessages);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1024,
          system: getSystemPrompt(pathname),
          messages: newMessages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      let assistantMessage = data.content[0].text;

      // 📬 Check if Kai wants to trigger email capture modal
      if (assistantMessage.includes("[CAPTURE_EMAIL]")) {
        // Remove the trigger from the message
        assistantMessage = assistantMessage.replace("[CAPTURE_EMAIL]", "").trim();

        // Show email capture modal after a short delay
        setTimeout(() => setShowEmailCapture(true), 500);
      }

      setMessages([
        ...newMessages,
        { role: "assistant", content: assistantMessage },
      ]);
    } catch (error) {
      console.error("Error calling Claude API:", error);

      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            "Oops! Something went wrong. Try again or email Moonlit Studios directly at hello@moonlitstudios.com",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleWidget = () => {
    setIsMinimized(!isMinimized);
  };

  const closeWidget = () => {
    setIsOpen(false);
    setIsMinimized(true);
  };

  const clearChat = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("kai-chat-history");
      sessionStorage.removeItem("kai-conversation-context"); // 🧠 Clear context memory
    }
    setMessages([
      {
        role: "assistant",
        content: getContextualGreeting(pathname),
      },
    ]);
    setConversationContext({}); // 🧠 Reset context state
  };

  const changePersonality = (newPersonality: PersonalityMode) => {
    setPersonality(newPersonality);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("kai-personality", newPersonality);
    }
    setShowPersonalityMenu(false);

    // Track personality switch for achievements
    if (typeof window !== "undefined" && (window as any).trackAchievement) {
      (window as any).trackAchievement.incrementPersonalitySwitches();
    }

    // Add system message about personality change
    // ⚠️ RACE CONDITION FIX: Use functional update to avoid stale state
    const personalityName = personalities[newPersonality].name;
    setMessages(prev => [
      ...prev,
      {
        role: "assistant",
        content: `*Kai shifts form into ${personalityName} mode* - How can I assist you now?`,
      },
    ]);
  };

  // 📬 Handle email capture submission
  const handleEmailSubmit = async (email: string, name?: string) => {
    try {
      // Send email to lead capture endpoint
      const response = await fetch("/api/kai/capture-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          context: conversationContext,
          conversationHistory: messages.slice(-10), // Last 5 exchanges
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to capture email");
      }

      // Close modal
      setShowEmailCapture(false);

      // Add confirmation message from Kai
      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          content: `Perfect! I've sent your info to Moonlit Studios. Expect a personalized quote at ${email} within 24 hours. Is there anything else I can help with while you're here?`,
        },
      ]);
    } catch (error) {
      console.error("Email capture error:", error);
      setShowEmailCapture(false);
      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          content: "Hmm, something went wrong capturing your email. No worries - you can always reach out directly at hello@moonlitstudios.com!",
        },
      ]);
    }
  };

  // 🔗 LINKIFY URLS - Make URLs clickable in messages
  const linkifyContent = (content: string) => {
    // Regex to match URLs and markdown links
    const urlRegex = /(\[([^\]]+)\]\(([^)]+)\)|https?:\/\/[^\s]+)/g;

    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = urlRegex.exec(content)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push(content.substring(lastIndex, match.index));
      }

      // Check if it's a markdown link or plain URL
      if (match[2] && match[3]) {
        // Markdown link: [text](url)
        parts.push(
          <a
            key={match.index}
            href={match[3]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lunarGold hover:text-phoenixFire underline transition-colors"
          >
            {match[2]}
          </a>
        );
      } else {
        // Plain URL
        parts.push(
          <a
            key={match.index}
            href={match[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lunarGold hover:text-phoenixFire underline transition-colors"
          >
            {match[0]}
          </a>
        );
      }

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < content.length) {
      parts.push(content.substring(lastIndex));
    }

    return parts.length > 0 ? parts : content;
  };

  return (
    <>
      {/* Floating Moon Icon Button */}
      {isMinimized && (
        <button
          onClick={toggleWidget}
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Chat with Kai"
        >
          {/* Animated Moon Icon */}
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-starlight/30 to-lunarGold/20 blur-xl animate-pulse"></div>
            
            {/* Moon phases animation container */}
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              {/* Full Moon (main icon) */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pearlWhite via-moonlightSilver to-starlight shadow-2xl shadow-starlight/50 border-2 border-starlight/60 transition-all group-hover:scale-110 group-hover:shadow-starlight/80">
                {/* Moon texture/craters */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-transparent via-moonlightSilver/20 to-transparent"></div>
                <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-moonlightSilver/40"></div>
                <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-moonlightSilver/30"></div>
              </div>

              {/* Pulsing rings */}
              <div className="absolute inset-0 rounded-full border-2 border-starlight/30 animate-ping" style={{ animationDuration: '3s' }}></div>
            </div>

            {/* Badge for unread (if chat has messages and widget is closed) */}
            {messages.length > 1 && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-phoenixFire rounded-full border-2 border-midnight animate-bounce"></div>
            )}
          </div>

          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-midnight/90 text-starlight text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat with Kai
          </div>
        </button>
      )}

      {/* Expanded Chat Widget */}
      {!isMinimized && (
        <div className="fixed bottom-6 right-6 z-50 w-full md:w-96 max-w-[calc(100vw-3rem)] max-h-[calc(100vh-3rem)] flex flex-col shadow-2xl shadow-mermaidTeal/30 rounded-2xl overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-deepOcean to-midnight border-b border-mermaidTeal/30 px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Mini moon icon */}
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pearlWhite to-moonlightSilver shadow-lg shadow-starlight/50 flex-shrink-0"></div>
                <div>
                  <h3 className="text-sm font-semibold text-pearlWhite">Kai</h3>
                  <p className="text-xs text-starlight/60">Your AI Guide</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* Personality switcher button */}
                <button
                  onClick={() => setShowPersonalityMenu(!showPersonalityMenu)}
                  className="text-starlight/50 hover:text-starlight transition-colors text-xs flex items-center gap-1 px-3 py-2.5 min-h-[44px] rounded hover:bg-mermaidTeal/10"
                  title="Change personality"
                >
                  {getPersonalityIcon(personality, "w-4 h-4")}
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Clear chat button */}
                <button
                  onClick={clearChat}
                  className="text-starlight/50 hover:text-starlight transition-colors text-xs p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded hover:bg-mermaidTeal/10"
                  title="Clear chat"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
                {/* Minimize button */}
                <button
                  onClick={toggleWidget}
                  className="text-starlight/50 hover:text-starlight transition-colors p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded hover:bg-mermaidTeal/10"
                  aria-label="Minimize"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Personality Menu Dropdown */}
            {showPersonalityMenu && (
              <div className="mt-3 space-y-1 animate-fade-in-up">
                {(Object.entries(personalities) as [PersonalityMode, typeof personalities.iroh][]).map(([key, config]) => (
                  <button
                    key={key}
                    onClick={() => changePersonality(key)}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-xs transition-all ${
                      personality === key
                        ? `bg-gradient-to-r ${config.color} text-white shadow-lg`
                        : "bg-midnight/40 text-starlight hover:bg-mermaidTeal/20 border border-mermaidTeal/20"
                    }`}
                  >
                    {getPersonalityIcon(key, "w-5 h-5")}
                    <div className="flex-1">
                      <p className="font-semibold">{config.name}</p>
                      <p className={`text-xs ${personality === key ? "text-white/80" : "text-starlight/60"}`}>
                        {config.description}
                      </p>
                    </div>
                    {personality === key && (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Chat Messages */}
          <div
            ref={chatContainerRef}
            className="flex-1 h-96 overflow-y-auto overflow-x-hidden bg-gradient-to-br from-midnight/95 to-deepOcean/95 backdrop-blur p-4 space-y-3 custom-scrollbar"
            style={{ maxHeight: '24rem', overscrollBehavior: 'contain' }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "assistant" ? "justify-start" : "justify-end"
                } animate-message-appear`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                    message.role === "assistant"
                      ? "bg-gradient-to-br from-mermaidTeal/20 to-deepOcean/40 text-pearlWhite border border-mermaidTeal/30"
                      : "bg-gradient-to-br from-lunarGold/30 to-phoenixFire/20 text-pearlWhite border border-lunarGold/30"
                  }`}
                >
                  <p className="leading-relaxed whitespace-pre-wrap">{linkifyContent(message.content)}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-message-appear">
                <div className="max-w-[85%] rounded-2xl px-4 py-3 bg-gradient-to-br from-mermaidTeal/20 to-deepOcean/40 border border-mermaidTeal/30">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-mermaidTeal animate-bounce"></div>
                    <div
                      className="w-2 h-2 rounded-full bg-mermaidTeal animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-mermaidTeal animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Action Buttons */}
          {showQuickActions && messages.length <= 1 && (
            <div className="bg-gradient-to-r from-deepOcean/50 to-midnight/50 border-t border-mermaidTeal/20 p-3">
              <div className="text-xs text-starlight/60 mb-2">Quick actions:</div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleQuickAction('/get-quote')}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[44px] bg-gradient-to-r from-lunarGold/80 to-phoenixFire/70 border border-lunarGold text-midnight text-xs font-semibold rounded-lg hover:from-lunarGold hover:to-phoenixFire hover:scale-105 transition-all shadow-md"
                >
                  <span>💰</span>
                  <span>Get Quote</span>
                </button>
                <button
                  onClick={() => handleQuickAction('/contact')}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[44px] bg-gradient-to-r from-mermaidTeal/70 to-tealBright/70 border border-mermaidTeal text-midnight text-xs font-semibold rounded-lg hover:from-mermaidTeal hover:to-tealBright hover:scale-105 transition-all shadow-md"
                >
                  <span>📅</span>
                  <span>Book Call</span>
                </button>
                <button
                  onClick={() => handleQuickAction('/portfolio')}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[44px] bg-gradient-to-r from-starlight/60 to-moonlightSilver/60 border border-starlight text-midnight text-xs font-semibold rounded-lg hover:from-starlight hover:to-moonlightSilver hover:scale-105 transition-all shadow-md"
                >
                  <span>👀</span>
                  <span>View Work</span>
                </button>
                <button
                  onClick={() => handleQuickAction("What services do you offer?")}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[44px] bg-gradient-to-r from-starlight/60 to-moonlightSilver/60 border border-starlight text-midnight text-xs font-semibold rounded-lg hover:from-starlight hover:to-moonlightSilver hover:scale-105 transition-all shadow-md"
                >
                  <span>❓</span>
                  <span>Ask Question</span>
                </button>
                <button
                  onClick={() => handleQuickAction('/portal/login')}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[44px] bg-gradient-to-r from-mermaidTeal/70 to-tealBright/70 border border-mermaidTeal text-midnight text-xs font-semibold rounded-lg hover:from-mermaidTeal hover:to-tealBright hover:scale-105 transition-all shadow-md"
                >
                  <span>🔑</span>
                  <span>Client Portal</span>
                </button>
              </div>
            </div>
          )}

          {/* Input Form */}
          <form
            onSubmit={handleSend}
            className="bg-gradient-to-r from-deepOcean to-midnight border-t border-mermaidTeal/30 p-3 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Kai anything..."
              className="flex-1 px-4 py-3 min-h-[44px] bg-midnight/80 border border-mermaidTeal/30 rounded-full text-sm text-pearlWhite placeholder-moonlightSilver/50 focus:outline-none focus:border-mermaidTeal/70 focus:ring-2 focus:ring-mermaidTeal/30 transition-all"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="px-5 py-3 min-h-[44px] bg-gradient-to-r from-mermaidTeal to-tealBright text-midnight font-semibold rounded-full text-sm hover:shadow-lg hover:shadow-mermaidTeal/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "..." : "Send"}
            </button>
          </form>
        </div>
      )}

      {/* 📬 Email Capture Modal */}
      <KaiEmailCapture
        isOpen={showEmailCapture}
        onClose={() => setShowEmailCapture(false)}
        onSubmit={handleEmailSubmit}
        context={conversationContext}
      />
    </>
  );
}
