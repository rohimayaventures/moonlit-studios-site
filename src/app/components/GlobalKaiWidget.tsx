"use client";

import { FormEvent, useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { TeaCupIcon, OwlIcon, SwordIcon, StaffIcon, BriefcaseIcon, ChaosIcon } from "./PersonalityIcons";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type PersonalityMode = "iroh" | "hedwig" | "kirito" | "gandalf" | "professional" | "chaos";

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

  // Load chat history and personality from sessionStorage on mount
  useEffect(() => {
    const savedMessages = sessionStorage.getItem("kai-chat-history");
    const hasShown = sessionStorage.getItem("kai-initial-shown");
    const savedPersonality = sessionStorage.getItem("kai-personality") as PersonalityMode;

    if (savedPersonality && personalities[savedPersonality]) {
      setPersonality(savedPersonality);
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
  useEffect(() => {
    if (messages.length > 0) {
      sessionStorage.setItem("kai-chat-history", JSON.stringify(messages));
    }
  }, [messages]);

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
  }, [pathname]);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

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

    const basePrompt = `${personalityPrompt}

**CORE RESPONSIBILITIES (All Modes):**
- Tech-savvy AI assistant for Moonlit Studios
- Help visitors understand services and navigate the site
- Share wisdom while staying helpful
- Connect business needs to appropriate solutions
- Reference fandom themes naturally when contextually appropriate

**MOONLIT STUDIOS SERVICES:**

1. **Creative Design & Development**
   - Branding & Identity starts at $1,800
   - Web Design & Development starts at $3,000
   - Three tiers: Essential, Professional, Premium

2. **Health x Tech Development**
   - Starts at $4,500
   - HIPAA-compliant platforms
   - Clinical workflow tools
   - Built by someone who lived healthcare operations (15+ years!)
   - Three tiers: Foundation, Comprehensive, Enterprise

3. **Consulting**
   - Hourly sessions start at $150/hr
   - Discovery sessions start at $500
   - UX audits start at $2,000

4. **AI Innovation Suite**
   - RAG Chatbots start at $5,000
   - Voice AI starts at $8,000
   - Vision AI starts at $10,000
   - Enterprise custom starts at $15,000

5. **Author & Ghostwriting Studio**
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
3. If they need actual help: "Email Moonlit Studios at hello@moonlstudios.com"
4. Don't hallucinate services or prices
5. Be conversational but occasionally profound
6. Share wisdom naturally (not forced!)
7. **FANDOM AWARENESS**: On contact page, acknowledge the 4 theme options and match personality to visitor's vibe
8. Use fandom references tastefully - enhance the experience, don't overwhelm it

**SMART NAVIGATION:**
When relevant, suggest pages:
- "Want to see pricing? [Check Services →](/services)"
- "Curious about the Moonlit Studios journey? [Visit About →](/about)"
- "Ready to see AI in action? [Head to AI Lab →](/ai-lab)"
- "See her work? [Browse Portfolio →](/portfolio)"
- "Let's talk! [Go to Contact →](/contact)"

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
        pageContext = "\n\n**CURRENT PAGE**: Homepage - Help them explore! Offer to show them services, portfolio, or AI Lab.";
        break;
      case "/about":
        pageContext = "\n\n**CURRENT PAGE**: About - Share details about Moonlit Studios' unique journey. Emphasize the 'nurse who codes' angle.";
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

    return basePrompt + pageContext;
  }

  const handleSend = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setIsLoading(true);

    // Track message count for achievements
    if (typeof window !== "undefined" && (window as any).trackAchievement) {
      (window as any).trackAchievement.incrementKaiMessages();
    }

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
      const assistantMessage = data.content[0].text;

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
            "Oops! Something went wrong. Try again or email Moonlit Studios directly at hello@moonlstudios.com",
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
    sessionStorage.removeItem("kai-chat-history");
    setMessages([
      {
        role: "assistant",
        content: getContextualGreeting(pathname),
      },
    ]);
  };

  const changePersonality = (newPersonality: PersonalityMode) => {
    setPersonality(newPersonality);
    sessionStorage.setItem("kai-personality", newPersonality);
    setShowPersonalityMenu(false);

    // Track personality switch for achievements
    if (typeof window !== "undefined" && (window as any).trackAchievement) {
      (window as any).trackAchievement.incrementPersonalitySwitches();
    }

    // Add system message about personality change
    const personalityName = personalities[newPersonality].name;
    setMessages([
      ...messages,
      {
        role: "assistant",
        content: `*Kai shifts form into ${personalityName} mode* - How can I assist you now?`,
      },
    ]);
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
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] flex flex-col shadow-2xl shadow-mermaidTeal/30 rounded-2xl overflow-hidden animate-fade-in-up">
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
                  className="text-starlight/50 hover:text-starlight transition-colors text-xs flex items-center gap-1 px-2 py-1 rounded hover:bg-mermaidTeal/10"
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
                  className="text-starlight/50 hover:text-starlight transition-colors text-xs"
                  title="Clear chat"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
                {/* Minimize button */}
                <button
                  onClick={toggleWidget}
                  className="text-starlight/50 hover:text-starlight transition-colors"
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
            className="flex-1 h-96 overflow-y-auto bg-gradient-to-br from-midnight/95 to-deepOcean/95 backdrop-blur p-4 space-y-3 custom-scrollbar"
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
                  <p className="leading-relaxed whitespace-pre-wrap">{message.content}</p>
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
              className="flex-1 px-4 py-2 bg-midnight/80 border border-mermaidTeal/30 rounded-full text-sm text-pearlWhite placeholder-moonlightSilver/50 focus:outline-none focus:border-mermaidTeal/70 focus:ring-2 focus:ring-mermaidTeal/30 transition-all"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="px-5 py-2 bg-gradient-to-r from-mermaidTeal to-tealBright text-midnight font-semibold rounded-full text-sm hover:shadow-lg hover:shadow-mermaidTeal/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "..." : "Send"}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
