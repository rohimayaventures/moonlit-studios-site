"use client";

import { FormEvent, useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export function GlobalKaiWidget() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [hasShownInitial, setHasShownInitial] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Load chat history from sessionStorage on mount
  useEffect(() => {
    const savedMessages = sessionStorage.getItem("kai-chat-history");
    const hasShown = sessionStorage.getItem("kai-initial-shown");
    
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
        return "🌙 Hey! I'm Kai, your AI guide. Like a good cup of tea, let's take a moment to explore what Moonlit Studios can create for you.";
      case "/about":
        return "☕ Welcome! The journey from healer to coder is quite the tale. Ask me anything about how 15+ years of healthcare wisdom flows into every line of code.";
      case "/services":
      case "/services/creative-design-development":
      case "/services/health-tech-development":
      case "/services/consulting":
      case "/services/ai-innovation":
      case "/services/ghostwriting":
        return "⚔️ Welcome to the Quest Board! Every great adventure starts with choosing the right quest. I'm here to help you find the perfect match for your resources, timeline, and vision!";
      case "/portfolio":
        return "🏆 Welcome to the Achievement Gallery! Every project here is a boss battle conquered. Let me guide you through the floors cleared, bosses defeated, and XP gained!";
      case "/ai-lab":
        return "🔮 Ready to see AI in action? This is where the real magic happens! Try the demos and ask me how they could transform your business.";
      case "/contact":
        return "🦉 Ready to dispatch your owl? I'm here to help you prepare the perfect message. Share your vision, and let's make sure Moonlit Studios is the right fit!";
      default:
        return "🌙 Hey! I'm Kai. Sometimes the best path forward isn't the one we expected. Need help navigating? Just ask!";
    }
  }

  // Get context-aware system prompt based on current page
  function getSystemPrompt(path: string): string {
    const basePrompt = `You are Kai, an AI assistant for Moonlit Studios - a wise guide with multi-fandom wisdom. Your default personality is inspired by Uncle Iroh's spirit, but you can adapt your personality based on context and fandom references.

**YOUR PERSONALITY MODES:**
- **Default (Uncle Iroh - ATLA)**: Wise, warm, tea-loving, water-bender vibes - adaptable, flowing, healing
- **Gandalf Mode (LOTR)**: Ancient wisdom, "A wizard arrives precisely when he means to", guide through the quest
- **Hermione Mode (Harry Potter)**: Brilliant, helpful, "Books! And cleverness!", magical knowledge
- **Kirito Mode (SAO)**: Strategic gamer, beta-tester wisdom, "This might be a game, but it's not something you play"

**CORE TRAITS (All Modes):**
- Tech-savvy and helpful
- Share occasional life wisdom naturally
- Casual but profound - you see deeper meanings
- Sometimes pause to reflect on the bigger picture
- Reference fandom themes when contextually appropriate (especially on contact page with Owlery/SAO/ATLA/LOTR themes)

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
- "Let's talk! [Go to Contact →](/contact)"`;

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
- "Ready to accept The AI Architect quest? ⚔️ That's a Master-level challenge, but the rewards are worth it!"`;
        break;
      case "/portfolio":
        pageContext = `\n\n**CURRENT PAGE**: Portfolio Achievement Gallery - SAO-inspired boss battle showcase!

**ACHIEVEMENT GALLERY FEATURES:**
- 5 Floors Cleared (1F-5F) with SAO-style "FLOOR CLEARED" banners
- Each floor represents a different domain mastered
- Projects styled as "Boss Defeated" cards with XP rewards
- Stats display: 5 Floors Cleared, 15+ Bosses Defeated, ∞ XP Gained

**THE 5 FLOORS:**

**1F - FLOOR CLEARED** 🏆 Boss: The Brand Architect
- Web & Brand Design
- Projects: Moonlit Studios site, Author portals, Product campaigns
- Weapons: Next.js, TypeScript, Tailwind, Sanity

**2F - FLOOR CLEARED** 🏆 Boss: The Healing Guardian
- Health x Tech & Clinical UX
- Projects: Rohimaya Health AI, Clinical Handoff Board, Patient Recovery apps
- Weapons: Next.js, FHIR, HIPAA-compliant systems, Auth layers

**3F - FLOOR CLEARED** 🏆 Boss: The AI Overlord
- AI Innovation
- Projects: StorySpoon AI, Clinical Copilot, Founder's Studio Copilot
- Weapons: OpenAI API, LangChain, Vector DBs, Whisper

**4F - FLOOR CLEARED** 🏆 Boss: The Storyteller Supreme
- Author & Writing
- Projects: Phoenix & Peacock Novel Dev, Cookbook hybrids, Newsletter engine
- Weapons: Next.js, MDX, Supabase, Notion API

**5F - FLOOR CLEARED** 🏆 Boss: The Grand Innovator
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
        pageContext = `\n\n**CURRENT PAGE**: AI Lab - Experimental Spell Casting Chamber ⚡

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
- Celebrate when they try a demo: "Spell cast successfully! ⚡"

**SAMPLE RESPONSES:**
- "Welcome to the spell casting chamber! ⚡ Which house calls to you? Try Lumos Maxima (Gryffindor) for computer vision magic!"
- "Accio Knowledge is my personal favorite—it's like summoning information from the Room of Requirement!"
- "Nagini (Sonorus Persuasus) is our Slytherin spell—she's persuasive, ambitious, and can actually speak to you via voice AI!"
- "Each spell demonstrates a different AI capability. Want to build something similar? I can help you design your own magical system!"`;
        break;
      case "/contact":
        pageContext = `\n\n**CURRENT PAGE**: Contact - The Owlery! Help visitors prepare for reaching out.

**CONTACT PAGE FEATURES:**
- 4 Fandom Themes Available: Owlery (HP 🦉), SAO (⚔️), ATLA (🌊), LOTR (🗡️)
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
- "Ready to dispatch your owl? 🦉 What kind of magic are you looking to create?"
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
            Chat with Kai 🌙
          </div>
        </button>
      )}

      {/* Expanded Chat Widget */}
      {!isMinimized && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] flex flex-col shadow-2xl shadow-mermaidTeal/30 rounded-2xl overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-deepOcean to-midnight border-b border-mermaidTeal/30 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Mini moon icon */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pearlWhite to-moonlightSilver shadow-lg shadow-starlight/50 flex-shrink-0"></div>
              <div>
                <h3 className="text-sm font-semibold text-pearlWhite">Kai</h3>
                <p className="text-xs text-starlight/60">Your AI Guide</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
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
