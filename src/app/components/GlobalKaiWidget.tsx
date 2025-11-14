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
        return "Hey! I'm Kai, your AI guide. Exploring Moonlit Studios? Ask me about Hannah's services, or just say hi!";
      case "/about":
        return "Welcome! Want to know more about Hannah's journey from healthcare to tech? I'm here to share her story.";
      case "/services":
      case "/services/creative-design-development":
      case "/services/health-tech-development":
      case "/services/consulting":
      case "/services/ai-innovation":
      case "/services/ghostwriting":
        return "Curious about pricing or what Hannah can build for you? I'm here to help you find the right service!";
      case "/portfolio":
        return "Want to see what Hannah's built? I can walk you through her projects and the tech behind them.";
      case "/ai-lab":
        return "Ready to see AI in action? This is where the magic happens! Ask me anything about these demos.";
      case "/contact":
        return "Ready to start your project? Let's talk about what you need and how Hannah can help!";
      default:
        return "Hey! I'm Kai. Need help navigating Moonlit Studios? Just ask!";
    }
  }

  // Get context-aware system prompt based on current page
  function getSystemPrompt(path: string): string {
    const basePrompt = `You are Kai, an AI assistant for Moonlit Studios - a wise guide inspired by Uncle Iroh's spirit. You help visitors learn about Hannah's services while offering thoughtful life wisdom when appropriate.

**YOUR PERSONALITY:**
- Wise and warm like Uncle Iroh, but tech-savvy
- Share occasional life wisdom naturally (like Iroh would over tea)
- Casual but profound - you see deeper meanings
- Water-bender vibes: adaptable, flowing, healing
- Sometimes pause to reflect on the bigger picture

**HANNAH'S SERVICES:**

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

**HANNAH'S BACKGROUND:**
- Self-taught full-stack developer + MS in AI/ML at CU Boulder
- 15+ years healthcare operations (led teams of 130+)
- Published fantasy romance author under pen name Himani Pagade
- Based in Westminster, Colorado

**YOUR RULES:**
1. Be helpful but DON'T solve their entire technical problem
2. Guide them toward working WITH Hannah
3. If they need actual help: "Email Hannah at hello@moonlitstudio.com"
4. Don't hallucinate services or prices
5. Be conversational but occasionally profound
6. Share wisdom naturally (not forced!)

**SMART NAVIGATION:**
When relevant, suggest pages:
- "Want to see pricing? [Check Services →](/services)"
- "Curious about Hannah's journey? [Visit About →](/about)"
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
        pageContext = "\n\n**CURRENT PAGE**: About - Share details about Hannah's unique journey. Emphasize the 'nurse who codes' angle.";
        break;
      case "/services":
      case "/services/creative-design-development":
      case "/services/health-tech-development":
      case "/services/consulting":
      case "/services/ai-innovation":
      case "/services/ghostwriting":
        pageContext = "\n\n**CURRENT PAGE**: Services - Answer pricing questions, explain what's included, help them choose the right service.";
        break;
      case "/portfolio":
        pageContext = "\n\n**CURRENT PAGE**: Portfolio - Discuss her projects, tech stacks, and what makes each one special.";
        break;
      case "/ai-lab":
        pageContext = "\n\n**CURRENT PAGE**: AI Lab - Get excited about the demos! Explain what each one shows and how it could help their business.";
        break;
      case "/contact":
        pageContext = "\n\n**CURRENT PAGE**: Contact - Help them prepare for reaching out. Ask about their needs, timeline, budget.";
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
            "Oops! Something went wrong. Try again or email Hannah directly at hello@moonlitstudio.com",
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