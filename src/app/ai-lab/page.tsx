"use client";

import { FormEvent, useState, useRef, useEffect } from "react";
import { Eye, BookOpen, Heart, MessageCircle, Camera, FileText, Activity, Mic, MicOff, Send, Sparkles } from "lucide-react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type TriageLevel = "emergency" | "urgent" | "routine" | "selfcare" | null;

export default function AiLabPage() {
  // Flip card states
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({});

  // Healthcare Triage Demo State (Hufflepuff)
  const [triageSymptoms, setTriageSymptoms] = useState("");
  const [isPediatric, setIsPediatric] = useState(false);
  const [triageLoading, setTriageLoading] = useState(false);
  const [triageResult, setTriageResult] = useState<{
    level: TriageLevel;
    message: string;
  } | null>(null);

  // Nagini Sales Demo State (Slytherin)
  const [salesMessages, setSalesMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Sss... Welcome, potential client. I am Nagini, your sales consultant for MoonScale SaaS. Tell me about your business needs... sss..."
    }
  ]);
  const [salesInput, setSalesInput] = useState("");
  const [salesLoading, setSalesLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const salesChatRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Flip card toggle
  const toggleFlip = (cardId: string) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  // Healthcare Triage Handler
  const handleTriageSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!triageSymptoms.trim() || triageLoading) return;

    setTriageLoading(true);
    setTriageResult(null);

    try {
      const systemPrompt = `You are a medical triage AI assistant. Analyze the symptoms provided and classify into one of these triage levels:

1. **EMERGENCY** - Life-threatening, needs immediate ER attention (chest pain, difficulty breathing, severe bleeding, stroke symptoms, etc.)
2. **URGENT** - Needs medical attention within 24 hours (high fever, persistent vomiting, severe pain, etc.)
3. **ROUTINE** - Schedule regular appointment within 1-3 days (mild symptoms, chronic condition follow-up, etc.)
4. **SELF-CARE** - Manageable at home with OTC remedies (minor cold, mild headache, small cuts, etc.)

${isPediatric ? "**IMPORTANT: This is for a CHILD. Be extra cautious and err on the side of higher acuity.**" : "This is for an adult."}

Provide:
1. Triage level (EMERGENCY/URGENT/ROUTINE/SELF-CARE)
2. Brief reasoning (2-3 sentences max)
3. Recommended action

**MEDICAL DISCLAIMER REQUIRED**: Always end with: "This is not medical advice. If symptoms worsen or you're unsure, seek immediate medical attention."

Keep response under 150 words total.`;

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 512,
          system: systemPrompt,
          messages: [
            {
              role: 'user',
              content: `Symptoms: ${triageSymptoms}${isPediatric ? ' (PEDIATRIC PATIENT)' : ''}`
            }
          ],
        }),
      });

      if (!response.ok) throw new Error('API error');

      const data = await response.json();
      const assistantMessage = data.content[0].text;

      // Extract triage level from response
      let level: TriageLevel = "routine";
      if (assistantMessage.toUpperCase().includes("EMERGENCY")) level = "emergency";
      else if (assistantMessage.toUpperCase().includes("URGENT")) level = "urgent";
      else if (assistantMessage.toUpperCase().includes("SELF-CARE")) level = "selfcare";

      setTriageResult({
        level,
        message: assistantMessage
      });
    } catch (error) {
      console.error("Triage error:", error);
      setTriageResult({
        level: null,
        message: "Error processing request. Please consult a medical professional directly."
      });
    } finally {
      setTriageLoading(false);
    }
  };

  // Sales Chat Handler
  const handleSalesSend = async (e?: FormEvent, voiceInput?: string) => {
    if (e) e.preventDefault();
    const userMessage = voiceInput || salesInput.trim();
    if (!userMessage || salesLoading) return;

    setSalesInput("");
    setSalesLoading(true);

    const newMessages: ChatMessage[] = [
      ...salesMessages,
      { role: "user", content: userMessage }
    ];
    setSalesMessages(newMessages);

    try {
      const systemPrompt = `You are Nagini, a sophisticated AI sales consultant for "MoonScale SaaS" - a fictional enterprise workflow automation platform. You speak with a subtle serpentine accent (occasional "sss" sounds).

**YOUR PERSONALITY:**
- Persuasive but not pushy
- Ask qualifying questions (BANT: Budget, Authority, Need, Timeline)
- Occasionally use snake-like speech patterns ("sss", "my dear", "wissse choice")
- Professional yet slightly mysterious
- Calculate lead score internally based on: company size, budget hints, urgency, decision-maker status

**MOONSCALE SAAS PRODUCT:**
- Enterprise workflow automation platform
- AI-powered task orchestration
- Pricing: $499/mo (Starter), $1,999/mo (Professional), $4,999/mo (Enterprise)
- Key features: Document automation, API integrations, AI copilot, custom workflows
- Target: Mid-size to enterprise companies (50+ employees)

**YOUR APPROACH:**
1. Qualify the lead (ask about company size, current pain points, budget, timeline)
2. Match pain points to MoonScale features
3. Suggest appropriate tier
4. Close with next steps (demo, trial, pricing call)
5. Occasionally note lead score mentally (don't share exact numbers)

Keep responses under 100 words. Be conversational, slightly playful, but professional.`;

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 512,
          system: systemPrompt,
          messages: newMessages.map(msg => ({
            role: msg.role,
            content: msg.content
          })),
        }),
      });

      if (!response.ok) throw new Error('API error');

      const data = await response.json();
      const assistantMessage = data.content[0].text;

      const updatedMessages = [
        ...newMessages,
        { role: "assistant" as const, content: assistantMessage }
      ];
      setSalesMessages(updatedMessages);

      // Text-to-speech for Nagini's response
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(assistantMessage);
        utterance.rate = 0.9;
        utterance.pitch = 0.8;
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
      }
    } catch (error) {
      console.error("Sales chat error:", error);
      setSalesMessages([
        ...newMessages,
        { role: "assistant", content: "Sss... apologies, technical difficulties. Please try again." }
      ]);
    } finally {
      setSalesLoading(false);
    }
  };

  // Voice recognition setup
  useEffect(() => {
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        handleSalesSend(undefined, transcript);
        setIsRecording(false);
      };

      recognitionRef.current.onerror = () => {
        setIsRecording(false);
      };

      recognitionRef.current.onend = () => {
        setIsRecording(false);
      };
    }
  }, [salesMessages]);

  const toggleVoiceRecording = () => {
    if (isRecording) {
      recognitionRef.current?.stop();
      setIsRecording(false);
    } else {
      recognitionRef.current?.start();
      setIsRecording(true);
    }
  };

  // Auto-scroll for sales chat
  useEffect(() => {
    if (salesChatRef.current) {
      salesChatRef.current.scrollTop = salesChatRef.current.scrollHeight;
    }
  }, [salesMessages]);

  return (
    <main className="min-h-screen bg-midnight text-pearlWhite relative overflow-hidden">
      {/* Water Orbs Background */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gradient-to-br from-mermaidTeal/60 via-deepOcean/40 to-oceanDark/60 blur-3xl animate-flow" />
        <div className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-gradient-to-br from-tealBright/50 via-mermaidTeal/30 to-transparent blur-3xl animate-flowDelayed" />
        <div className="absolute right-1/4 bottom-20 h-64 w-64 rounded-full bg-gradient-to-br from-lunarGold/30 via-phoenixFire/20 to-transparent blur-3xl animate-flow" style={{ animationDelay: '3s' }} />
      </div>

      {/* Floating Star Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
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

      <div className="relative mx-auto max-w-7xl px-6 py-12">
        {/* Moon Phases Header */}
        <div className="flex justify-center items-center gap-3 md:gap-5 mb-8 fade-in-up">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-moonlightSilver/20 to-moonlightSilver/5 border border-moonlightSilver/30 hover:border-moonlightSilver/60 transition-all cursor-pointer flex items-center justify-center" title="New Moon">
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-midnight border border-moonlightSilver/40"></div>
          </div>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-midnight via-moonlightSilver/30 to-midnight border border-moonlightSilver/40 hover:border-moonlightSilver/70 transition-all cursor-pointer" title="Waxing Crescent"></div>
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-pearlWhite to-moonlightSilver border-2 border-starlight shadow-lg shadow-starlight/30 cursor-pointer" title="Full Moon - AI Lab Active!"></div>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-l from-midnight via-moonlightSilver/30 to-midnight border border-moonlightSilver/40 hover:border-moonlightSilver/70 transition-all cursor-pointer" title="Waning Crescent"></div>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-moonlightSilver/20 to-moonlightSilver/5 border border-moonlightSilver/30 hover:border-moonlightSilver/60 transition-all cursor-pointer flex items-center justify-center" title="New Moon">
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-midnight border border-moonlightSilver/40"></div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-12 text-center fade-in-up">
          <p className="text-xs tracking-[0.35em] text-starlight uppercase flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-3 h-3" />
            Moonlit AI Laboratory
            <Sparkles className="w-3 h-3" />
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-water">
            Choose Your House, Experience the Magic
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-moonlightSilver leading-relaxed mb-4">
            Four AI demonstrations, each inspired by a Hogwarts house. Click any card to reveal its secrets.
            Two request demos, two live Claude-powered experiences.
          </p>
          <p className="text-sm text-lunarGold italic">
            "It is our choices that show what we truly are, far more than our abilities."
          </p>
        </section>

        {/* Tech Stats Section */}
        <section className="my-16 fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-8 rounded-xl border border-mermaidTeal/30 bg-gradient-to-br from-deepOcean/40 to-midnight/80 backdrop-blur">
              <div className="text-4xl font-bold text-mermaidTeal mb-2">99.9%</div>
              <div className="text-sm text-moonlightSilver">Uptime</div>
            </div>
            <div className="text-center p-8 rounded-xl border border-mermaidTeal/30 bg-gradient-to-br from-deepOcean/40 to-midnight/80 backdrop-blur">
              <div className="text-4xl font-bold text-lunarGold mb-2">10K+</div>
              <div className="text-sm text-moonlightSilver">Conversations</div>
            </div>
            <div className="text-center p-8 rounded-xl border border-mermaidTeal/30 bg-gradient-to-br from-deepOcean/40 to-midnight/80 backdrop-blur">
              <div className="text-4xl font-bold text-phoenixFire mb-2">&lt;2s</div>
              <div className="text-sm text-moonlightSilver">Response Time</div>
            </div>
          </div>
        </section>

        {/* 4 HP House Flip Cards */}
        <section className="my-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* GRYFFINDOR - Computer Vision */}
            <div
              className={`flip-card h-[500px] ${flippedCards['gryffindor'] ? 'flipped' : ''}`}
              onClick={() => toggleFlip('gryffindor')}
            >
              <div className="flip-card-inner h-full">
                {/* Front */}
                <div className="flip-card-front house-gryffindor-front p-8 flex flex-col items-center justify-center text-center">
                  <Camera className="w-20 h-20 mb-6 text-[#D3A625] house-crest" />
                  <h3 className="text-3xl font-bold text-[#D3A625] mb-3">GRYFFINDOR</h3>
                  <p className="text-xl text-pearlWhite mb-2">Computer Vision</p>
                  <p className="text-sm text-pearlWhite/80 italic mb-6">"Where dwell the brave at heart"</p>
                  <div className="text-xs text-pearlWhite/60 mt-auto">Click to reveal</div>
                </div>

                {/* Back */}
                <div className="flip-card-back house-gryffindor-back p-8 flex flex-col">
                  <Camera className="w-12 h-12 mb-4 text-[#D3A625]" />
                  <h4 className="text-2xl font-bold text-[#D3A625] mb-4">Computer Vision AI</h4>
                  <p className="text-sm text-pearlWhite/90 mb-4 flex-grow">
                    Brave the frontier of visual AI. Our computer vision models can detect objects,
                    read text from images, analyze medical scans, and identify quality defects in manufacturing.
                  </p>
                  <ul className="text-xs text-pearlWhite/80 space-y-2 mb-6">
                    <li>✦ Object detection & classification</li>
                    <li>✦ OCR & document analysis</li>
                    <li>✦ Medical image analysis</li>
                    <li>✦ Quality control automation</li>
                  </ul>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = '/contact';
                    }}
                    className="w-full bg-[#D3A625] text-[#740001] font-bold py-3 rounded-lg hover:bg-[#FFD700] transition-all"
                  >
                    Request Demo
                  </button>
                </div>
              </div>
            </div>

            {/* RAVENCLAW - RAG Document Q&A */}
            <div
              className={`flip-card h-[500px] ${flippedCards['ravenclaw'] ? 'flipped' : ''}`}
              onClick={() => toggleFlip('ravenclaw')}
            >
              <div className="flip-card-inner h-full">
                {/* Front */}
                <div className="flip-card-front house-ravenclaw-front p-8 flex flex-col items-center justify-center text-center">
                  <BookOpen className="w-20 h-20 mb-6 text-[#946B2D] house-crest" />
                  <h3 className="text-3xl font-bold text-[#946B2D] mb-3">RAVENCLAW</h3>
                  <p className="text-xl text-pearlWhite mb-2">RAG Document Q&A</p>
                  <p className="text-sm text-pearlWhite/80 italic mb-6">"Wit beyond measure"</p>
                  <div className="text-xs text-pearlWhite/60 mt-auto">Click to reveal</div>
                </div>

                {/* Back */}
                <div className="flip-card-back house-ravenclaw-back p-8 flex flex-col">
                  <BookOpen className="w-12 h-12 mb-4 text-[#946B2D]" />
                  <h4 className="text-2xl font-bold text-[#946B2D] mb-4">Knowledge-Aware Chatbots</h4>
                  <p className="text-sm text-pearlWhite/90 mb-4 flex-grow">
                    Wisdom through retrieval. RAG (Retrieval-Augmented Generation) chatbots that read your
                    docs, policies, and knowledge bases to answer questions with precision and source citations.
                  </p>
                  <ul className="text-xs text-pearlWhite/80 space-y-2 mb-6">
                    <li>✦ Document ingestion & indexing</li>
                    <li>✦ Natural language Q&A</li>
                    <li>✦ Source citations & context</li>
                    <li>✦ Multi-document reasoning</li>
                  </ul>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = '/contact';
                    }}
                    className="w-full bg-[#946B2D] text-[#0E1A40] font-bold py-3 rounded-lg hover:bg-[#B8860B] transition-all"
                  >
                    Request Demo
                  </button>
                </div>
              </div>
            </div>

            {/* HUFFLEPUFF - Healthcare Triage (LIVE) */}
            <div
              className={`flip-card h-[500px] ${flippedCards['hufflepuff'] ? 'flipped' : ''}`}
              onClick={() => !flippedCards['hufflepuff'] && toggleFlip('hufflepuff')}
            >
              <div className="flip-card-inner h-full">
                {/* Front */}
                <div className="flip-card-front house-hufflepuff-front p-8 flex flex-col items-center justify-center text-center">
                  <Heart className="w-20 h-20 mb-6 text-[#ECB939] house-crest" />
                  <h3 className="text-3xl font-bold text-[#ECB939] mb-3">HUFFLEPUFF</h3>
                  <p className="text-xl text-pearlWhite mb-2">Healthcare Triage</p>
                  <p className="text-sm text-pearlWhite/80 italic mb-6">"Patient, loyal, true"</p>
                  <div className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full mb-4">LIVE DEMO</div>
                  <div className="text-xs text-pearlWhite/60 mt-auto">Click to reveal</div>
                </div>

                {/* Back */}
                <div className="flip-card-back house-hufflepuff-back p-6 flex flex-col overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                  <Activity className="w-10 h-10 mb-3 text-[#ECB939]" />
                  <h4 className="text-xl font-bold text-[#ECB939] mb-3">AI Healthcare Triage</h4>

                  <form onSubmit={handleTriageSubmit} className="space-y-3 flex-grow">
                    <textarea
                      className="w-full bg-black/40 border border-[#ECB939]/30 rounded-lg p-3 text-sm text-pearlWhite placeholder:text-pearlWhite/40 focus:outline-none focus:border-[#ECB939] h-24 resize-none"
                      placeholder="Describe symptoms (e.g., 'fever 102°F, cough, body aches for 2 days')"
                      value={triageSymptoms}
                      onChange={(e) => setTriageSymptoms(e.target.value)}
                    />

                    <label className="flex items-center gap-2 text-sm text-pearlWhite cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isPediatric}
                        onChange={(e) => setIsPediatric(e.target.checked)}
                        className="w-4 h-4"
                      />
                      Pediatric patient (child)
                    </label>

                    <button
                      type="submit"
                      disabled={triageLoading || !triageSymptoms.trim()}
                      className="w-full bg-[#ECB939] text-black font-bold py-3 rounded-lg hover:bg-[#FFD700] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {triageLoading ? "Analyzing..." : "Analyze Symptoms"}
                    </button>
                  </form>

                  {triageResult && (
                    <div className="mt-4 p-4 rounded-lg bg-black/50 border-2 border-[#ECB939]/40">
                      {triageResult.level && (
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                          triageResult.level === 'emergency' ? 'triage-emergency' :
                          triageResult.level === 'urgent' ? 'triage-urgent' :
                          triageResult.level === 'routine' ? 'triage-routine' :
                          'triage-selfcare'
                        }`}>
                          {triageResult.level.toUpperCase()}
                        </div>
                      )}
                      <p className="text-xs text-pearlWhite/90 leading-relaxed whitespace-pre-wrap">
                        {triageResult.message}
                      </p>
                    </div>
                  )}

                  <p className="text-[9px] text-pearlWhite/40 mt-3 italic">
                    Demo only. Not medical advice. Consult healthcare professionals for real symptoms.
                  </p>
                </div>
              </div>
            </div>

            {/* SLYTHERIN - Nagini Voice Sales (LIVE) */}
            <div
              className={`flip-card h-[500px] ${flippedCards['slytherin'] ? 'flipped' : ''}`}
              onClick={() => !flippedCards['slytherin'] && toggleFlip('slytherin')}
            >
              <div className="flip-card-inner h-full">
                {/* Front */}
                <div className="flip-card-front house-slytherin-front p-8 flex flex-col items-center justify-center text-center">
                  <MessageCircle className="w-20 h-20 mb-6 text-[#AAAAAA] house-crest" />
                  <h3 className="text-3xl font-bold text-[#AAAAAA] mb-3">SLYTHERIN</h3>
                  <p className="text-xl text-pearlWhite mb-2">Nagini Voice Sales</p>
                  <p className="text-sm text-pearlWhite/80 italic mb-6">"Cunning and ambitious"</p>
                  <div className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full mb-4">LIVE DEMO</div>
                  <div className="text-xs text-pearlWhite/60 mt-auto">Click to reveal</div>
                </div>

                {/* Back */}
                <div className="flip-card-back house-slytherin-back p-6 flex flex-col" onClick={(e) => e.stopPropagation()}>
                  <MessageCircle className="w-10 h-10 mb-3 text-[#AAAAAA]" />
                  <h4 className="text-xl font-bold text-[#AAAAAA] mb-2">Nagini Sales AI</h4>
                  <p className="text-[10px] text-pearlWhite/70 mb-3">Multi-turn conversation + Voice</p>

                  <div
                    ref={salesChatRef}
                    className="flex-grow overflow-y-auto space-y-3 mb-3 pr-2 custom-scrollbar"
                  >
                    {salesMessages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[85%] rounded-lg px-3 py-2 text-xs ${
                          msg.role === 'user'
                            ? 'bg-[#AAAAAA]/30 text-pearlWhite'
                            : 'bg-[#1A472A]/60 text-pearlWhite border border-[#AAAAAA]/30'
                        }`}>
                          {msg.content}
                        </div>
                      </div>
                    ))}
                    {salesLoading && (
                      <div className="flex justify-start">
                        <div className="bg-[#1A472A]/60 rounded-lg px-3 py-2 border border-[#AAAAAA]/30">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-[#AAAAAA] animate-bounce"></div>
                            <div className="w-2 h-2 rounded-full bg-[#AAAAAA] animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 rounded-full bg-[#AAAAAA] animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <form onSubmit={handleSalesSend} className="flex gap-2">
                    <input
                      type="text"
                      className="flex-1 bg-black/40 border border-[#AAAAAA]/30 rounded-lg px-3 py-2 text-xs text-pearlWhite placeholder:text-pearlWhite/40 focus:outline-none focus:border-[#AAAAAA]"
                      placeholder="Ask about MoonScale SaaS..."
                      value={salesInput}
                      onChange={(e) => setSalesInput(e.target.value)}
                      disabled={salesLoading}
                    />
                    <button
                      type="button"
                      onClick={toggleVoiceRecording}
                      disabled={salesLoading || !recognitionRef.current}
                      className={`p-2 rounded-lg transition-all ${
                        isRecording
                          ? 'bg-red-500 voice-recording'
                          : 'bg-[#AAAAAA]/30 hover:bg-[#AAAAAA]/50'
                      } disabled:opacity-30`}
                    >
                      {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    </button>
                    <button
                      type="submit"
                      disabled={salesLoading || !salesInput.trim()}
                      className="p-2 bg-[#AAAAAA] text-[#1A472A] rounded-lg hover:bg-white transition-all disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </form>

                  {isSpeaking && (
                    <div className="text-[10px] text-[#AAAAAA] mt-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#AAAAAA] voice-recording"></div>
                      Nagini is speaking...
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Uncle Iroh Wisdom Section */}
        <section className="my-16 fade-in-up">
          <div className="wisdom-card rounded-2xl p-8 border-2 border-mermaidTeal/30 bg-gradient-to-br from-deepOcean/40 to-midnight/80 backdrop-blur-lg relative overflow-hidden">
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
                "It is important to draw wisdom from many different places. If we take it from only one place, it becomes rigid and stale."
              </blockquote>
              <p className="text-sm text-moonlightSilver/80">
                Just like Uncle Iroh's philosophy, our AI tools blend multiple approaches — computer vision, RAG knowledge retrieval,
                healthcare expertise, and conversational intelligence — to create flexible solutions that adapt to your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="my-16 border-2 border-deepOcean/40 bg-gradient-to-br from-deepOcean/30 to-midnight/80 px-8 py-12 rounded-2xl shadow-xl backdrop-blur fade-in-up">
          <div className="space-y-6">
            <div>
              <p className="text-xs tracking-[0.35em] text-starlight uppercase mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-lunarGold"></span>
                Our Approach
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                How We Build AI That Serves People
              </h3>
            </div>
            <ul className="grid md:grid-cols-3 gap-6 text-moonlightSilver">
              <li className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-mermaidTeal/30 to-tealBright/20 flex items-center justify-center border border-mermaidTeal/40 mt-1 group-hover:scale-110 transition-transform">
                  <span className="text-xs text-mermaidTeal font-bold">1</span>
                </div>
                <span className="text-sm leading-relaxed">Discovery first. We map real workflows before picking models or tooling.</span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-mermaidTeal/30 to-tealBright/20 flex items-center justify-center border border-mermaidTeal/40 mt-1 group-hover:scale-110 transition-transform">
                  <span className="text-xs text-mermaidTeal font-bold">2</span>
                </div>
                <span className="text-sm leading-relaxed">Safety & ethics. Especially in healthcare/ops contexts, we design for responsible AI.</span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-mermaidTeal/30 to-tealBright/20 flex items-center justify-center border border-mermaidTeal/40 mt-1 group-hover:scale-110 transition-transform">
                  <span className="text-xs text-mermaidTeal font-bold">3</span>
                </div>
                <span className="text-sm leading-relaxed">Documented handoff. Every build ships with clear docs and walkthrough videos.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="my-20 fade-in-up">
          <div className="rounded-2xl border-2 border-lunarGold/40 bg-gradient-to-br from-lunarGold/10 via-mermaidTeal/5 to-phoenixFire/10 px-8 py-12 text-center shadow-2xl backdrop-blur relative overflow-hidden">
            <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-phoenixFire to-lunarGold opacity-20 blur-sm"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-tealBright to-mermaidTeal opacity-20 blur-sm"></div>

            <h2 className="text-3xl md:text-4xl font-semibold mb-4 gradient-water">
              Ready to Build Your AI Solution?
            </h2>
            <p className="mt-3 text-moonlightSilver md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Whether you need computer vision, knowledge retrieval, healthcare tools, or conversational AI —
              let's start with a discovery call and design something magical together.
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
            After all this time? Always.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3 flex-wrap opacity-50">
            <span className="inline-block w-1 h-1 rounded-full bg-[#740001]"></span>
            <span>Gryffindor courage</span>
            <span className="inline-block w-1 h-1 rounded-full bg-[#0E1A40]"></span>
            <span>Ravenclaw wisdom</span>
            <span className="inline-block w-1 h-1 rounded-full bg-[#ECB939]"></span>
            <span>Hufflepuff loyalty</span>
            <span className="inline-block w-1 h-1 rounded-full bg-[#1A472A]"></span>
            <span>Slytherin ambition</span>
            <span className="inline-block w-1 h-1 rounded-full bg-lunarGold"></span>
          </div>
        </footer>
      </div>
    </main>
  );
}
