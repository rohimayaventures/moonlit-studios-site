'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Zap,
  Brain,
  Heart,
  Shield,
  Eye,
  BookOpen,
  Network,
  Mic,
  MicOff,
  Send,
  Activity,
  Users,
  Clock,
  TrendingUp,
  Camera,
  MessageCircle,
  FileText,
  Upload,
  Search,
  Loader2
} from 'lucide-react';

// ==================== TYPES ====================
type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

type TriageLevel = 'emergency' | 'urgent' | 'routine' | 'selfcare';

type AnalysisResult = {
  description: string;
  objects: string[];
  scene: string;
  colors: string[];
  text?: string;
};

type RAGResult = {
  answer: string;
  sources: string[];
  confidence: number;
};

// ==================== TYPEWRITER COMPONENT ====================
function Typewriter() {
  const phrases = [
    "Where Magic Meets Machine Learning",
    "The Nurse Who Codes AI Solutions",
    "Computer Vision • RAG • Voice AI • Healthcare Triage",
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < currentPhrase.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, displayText.length + 1));
      }, 90);
    } else if (!isDeleting && displayText.length === currentPhrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, displayText.length - 1));
      }, 50);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((phraseIndex + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <p className="mt-4 min-h-[2rem] text-lg md:text-xl font-medium text-starlight text-center">
      {displayText}
      <span className="ml-1 inline-block h-6 w-[2px] bg-starlight align-middle animate-pulse" />
    </p>
  );
}

// ==================== COMPUTER VISION DEMO (GRYFFINDOR) ====================
function ComputerVisionDemo() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        analyzeImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async (imageData: string) => {
    setIsAnalyzing(true);
    setAnalysis(null);

    try {
      const response = await fetch('/api/vision', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: imageData }),
      });

      const data = await response.json();
      setAnalysis(data.analysis);
    } catch (error) {
      console.error('Analysis error:', error);
      setAnalysis({
        description: "Unable to analyze image. Please try again.",
        objects: [],
        scene: "",
        colors: []
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-4">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold hover:from-red-700 hover:to-orange-700 transition-all"
        >
          <Upload className="w-5 h-5" />
          Upload Image
        </button>
      </div>

      {selectedImage && (
        <div className="mt-4">
          <img
            src={selectedImage}
            alt="Uploaded"
            className="w-full h-48 object-cover rounded-lg border-2 border-red-600/50"
          />
        </div>
      )}

      {isAnalyzing && (
        <div className="flex items-center justify-center gap-2 text-orange-400">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Analyzing image...</span>
        </div>
      )}

      {analysis && (
        <div className="mt-4 p-4 rounded-lg bg-midnight/50 border border-red-600/30 space-y-2">
          <p className="text-sm text-moonlightSilver">{analysis.description}</p>
          {analysis.objects.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-lunarGold">Detected Objects:</p>
              <p className="text-sm text-starlight">{analysis.objects.join(', ')}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ==================== RAG Q&A DEMO (RAVENCLAW) ====================
function RAGDemo() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<RAGResult | null>(null);

  const sampleQuestions = [
    "What services does Moonlit Studios offer?",
    "How does RAG technology work?",
    "What is Moonlit Studios' background?"
  ];

  const handleSearch = async () => {
    if (!query.trim()) return;

    setIsSearching(true);
    setResult(null);

    try {
      const response = await fetch('/api/rag', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error('Search error:', error);
      setResult({
        answer: "Unable to search documents. Please try again.",
        sources: [],
        confidence: 0
      });
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Ask a question about my work..."
          className="flex-1 px-4 py-2 rounded-lg bg-midnight/50 border border-blue-600/30 text-pearlWhite placeholder-moonlightSilver/50 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSearch}
          disabled={isSearching || !query.trim()}
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isSearching ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Search className="w-5 h-5" />
          )}
          Search
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {sampleQuestions.map((q, idx) => (
          <button
            key={idx}
            onClick={() => setQuery(q)}
            className="text-xs px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 transition-all"
          >
            {q}
          </button>
        ))}
      </div>

      {result && (
        <div className="mt-4 p-4 rounded-lg bg-midnight/50 border border-blue-600/30 space-y-3">
          <p className="text-sm text-moonlightSilver">{result.answer}</p>
          {result.sources.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-lunarGold">Sources:</p>
              <ul className="text-xs text-starlight space-y-1">
                {result.sources.map((source, idx) => (
                  <li key={idx}>• {source}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-midnight rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-indigo-600"
                style={{ width: `${result.confidence}%` }}
              />
            </div>
            <span className="text-xs text-starlight">{result.confidence}% confident</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ==================== HEALTHCARE TRIAGE DEMO (HUFFLEPUFF) ====================
function HealthcareTriageDemo() {
  const [symptoms, setSymptoms] = useState('');
  const [age, setAge] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [triage, setTriage] = useState<{
    level: TriageLevel;
    recommendation: string;
    reasoning: string;
  } | null>(null);

  const handleTriage = async () => {
    if (!symptoms.trim()) return;

    setIsAnalyzing(true);
    setTriage(null);

    try {
      const response = await fetch('/api/triage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ symptoms, age }),
      });

      const data = await response.json();
      setTriage(data.triage);
    } catch (error) {
      console.error('Triage error:', error);
      setTriage({
        level: 'routine',
        recommendation: "Unable to analyze symptoms. Please consult a healthcare professional.",
        reasoning: ""
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getLevelColor = (level: TriageLevel) => {
    switch (level) {
      case 'emergency': return 'from-red-600 to-red-700';
      case 'urgent': return 'from-orange-600 to-orange-700';
      case 'routine': return 'from-yellow-600 to-yellow-700';
      case 'selfcare': return 'from-green-600 to-green-700';
      default: return 'from-gray-600 to-gray-700';
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age (optional)"
          className="w-full px-4 py-2 rounded-lg bg-midnight/50 border border-yellow-600/30 text-pearlWhite placeholder-moonlightSilver/50 focus:outline-none focus:border-yellow-500"
        />
        <textarea
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Describe your symptoms..."
          rows={4}
          className="w-full px-4 py-2 rounded-lg bg-midnight/50 border border-yellow-600/30 text-pearlWhite placeholder-moonlightSilver/50 focus:outline-none focus:border-yellow-500 resize-none"
        />
        <button
          onClick={handleTriage}
          disabled={isAnalyzing || !symptoms.trim()}
          className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-600 to-amber-600 text-white font-semibold hover:from-yellow-700 hover:to-amber-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Activity className="w-5 h-5" />
              Analyze Symptoms
            </>
          )}
        </button>
      </div>

      {triage && (
        <div className={`mt-4 p-4 rounded-lg bg-midnight/50 border border-yellow-600/30 space-y-3`}>
          <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${getLevelColor(triage.level)} text-white font-semibold text-sm`}>
            {triage.level.toUpperCase()}
          </div>
          <p className="text-sm font-semibold text-pearlWhite">{triage.recommendation}</p>
          <p className="text-sm text-moonlightSilver">{triage.reasoning}</p>
          <p className="text-xs text-starlight italic">
            Disclaimer: This is a demo. Always consult a healthcare professional for medical advice.
          </p>
        </div>
      )}
    </div>
  );
}

// ==================== VOICE SALES DEMO (SLYTHERIN) ====================
function VoiceSalesDemo() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: "Greetings! I'm Nagini, your AI sales assistant. I can help you explore Moonlit Studios' services. What brings you here today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Cleanup: Stop audio when component unmounts or demo closes
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (textMessage?: string) => {
    const messageToSend = textMessage || input;
    if (!messageToSend.trim()) return;

    const userMessage: ChatMessage = { role: 'user', content: messageToSend };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/sales', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageToSend, history: messages }),
      });

      const data = await response.json();
      const assistantMessage: ChatMessage = { role: 'assistant', content: data.reply };
      setMessages(prev => [...prev, assistantMessage]);

      // Play OpenAI TTS audio
      if (data.audioUrl) {
        setIsSpeaking(true);
        const audio = new Audio(data.audioUrl);
        audioRef.current = audio;
        audio.onended = () => setIsSpeaking(false);
        audio.play();
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: ChatMessage = {
        role: 'assistant',
        content: "I apologize, I'm having trouble connecting. Please try again."
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const toggleVoiceInput = async () => {
    if (isRecording) {
      // Stop recording
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
        mediaRecorderRef.current.stop();
      }
      setIsRecording(false);
      return;
    }

    // Start recording
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        stream.getTracks().forEach(track => track.stop());

        // Send to Whisper API for transcription
        const formData = new FormData();
        formData.append('audio', audioBlob);

        try {
          const response = await fetch('/api/voice/transcribe', {
            method: 'POST',
            body: formData,
          });

          const data = await response.json();
          if (data.text) {
            setInput(data.text);
            // Auto-send the transcribed message
            handleSend(data.text);
          }
        } catch (error) {
          console.error('Transcription error:', error);
          alert('Failed to transcribe audio. Please try typing instead.');
        }
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Microphone error:', error);
      alert('Unable to access microphone. Please check permissions.');
    }
  };

  return (
    <div className="space-y-4">
      <div className="h-64 overflow-y-auto space-y-3 p-4 rounded-lg bg-midnight/30 border border-green-600/30">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] px-4 py-2 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                  : 'bg-midnight/50 text-moonlightSilver border border-green-600/20'
              }`}
            >
              <p className="text-sm">{msg.content}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="px-4 py-2 rounded-lg bg-midnight/50 border border-green-600/20">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex gap-2">
        <button
          onClick={toggleVoiceInput}
          className={`p-3 rounded-lg transition-all ${
            isRecording
              ? 'bg-gradient-to-r from-red-600 to-red-700 text-white animate-pulse'
              : 'bg-midnight/50 border border-green-600/30 text-green-400 hover:bg-green-600/10'
          }`}
          title={isRecording ? 'Recording... Click to stop' : 'Click to record voice message'}
        >
          {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
        </button>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && !isTyping && handleSend()}
          placeholder="Type or speak your message..."
          className="flex-1 px-4 py-2 rounded-lg bg-midnight/50 border border-green-600/30 text-pearlWhite placeholder-moonlightSilver/50 focus:outline-none focus:border-green-500"
        />
        <button
          onClick={() => handleSend()}
          disabled={!input.trim() || isTyping}
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold hover:from-green-700 hover:to-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>

      {isSpeaking && (
        <div className="flex items-center justify-center gap-2 text-green-400 text-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Nagini is speaking...
        </div>
      )}
    </div>
  );
}

// ==================== MAIN COMPONENT ====================
export default function AILabPage() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const demos = [
    {
      id: 'gryffindor',
      title: 'Computer Vision',
      house: 'Gryffindor',
      trait: 'Brave',
      description: 'Bold image analysis that sees what others miss',
      icon: <Eye className="w-6 h-6" />,
      colors: 'from-red-600 to-orange-600',
      borderColor: 'border-red-600',
      component: <ComputerVisionDemo />
    },
    {
      id: 'ravenclaw',
      title: 'RAG Q&A System',
      house: 'Ravenclaw',
      trait: 'Wise',
      description: 'Intelligent document search with thoughtful answers',
      icon: <BookOpen className="w-6 h-6" />,
      colors: 'from-blue-600 to-indigo-600',
      borderColor: 'border-blue-600',
      component: <RAGDemo />
    },
    {
      id: 'hufflepuff',
      title: 'Healthcare Triage',
      house: 'Hufflepuff',
      trait: 'Loyal',
      description: 'Compassionate AI that puts patient care first',
      icon: <Heart className="w-6 h-6" />,
      colors: 'from-yellow-600 to-amber-600',
      borderColor: 'border-yellow-600',
      component: <HealthcareTriageDemo />
    },
    {
      id: 'slytherin',
      title: 'Nagini Voice Sales',
      house: 'Slytherin',
      trait: 'Ambitious',
      description: 'Persuasive AI copilot that drives conversions',
      icon: <MessageCircle className="w-6 h-6" />,
      colors: 'from-green-600 to-emerald-600',
      borderColor: 'border-green-600',
      component: <VoiceSalesDemo />
    }
  ];

  return (
    <main className="min-h-screen bg-midnight text-pearlWhite">

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative overflow-hidden py-20 px-6">
        {/* Water Orbs Background */}
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-mermaidTeal/60 via-tealBright/40 to-deepOcean/60 blur-3xl animate-floatSlow" />
          <div className="absolute -left-24 bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-lunarGold/40 via-mermaidTeal/30 to-transparent blur-3xl" style={{ animation: 'floatSlow 20s ease-in-out infinite 5s' }} />
        </div>

        <div className="relative mx-auto max-w-6xl space-y-8">
          {/* Moon Phases */}
          <div className="flex justify-center items-center gap-4 md:gap-8 mb-8">
            <div
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-midnight border-2 border-moonlightSilver/40 hover:border-moonlightSilver/70 transition-all cursor-pointer"
              title="New Moon"
            />
            <div
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-midnight via-moonlightSilver/30 to-midnight border-2 border-moonlightSilver/40 hover:border-moonlightSilver/70 transition-all cursor-pointer"
              title="Waxing Crescent"
            />
            <div
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-moonlightSilver via-pearlWhite to-moonlightSilver border-2 border-lunarGold shadow-lg shadow-lunarGold/50"
              title="Full Moon - AI Lab at Full Power"
            />
            <div
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-l from-midnight via-moonlightSilver/30 to-midnight border-2 border-moonlightSilver/40 hover:border-moonlightSilver/70 transition-all cursor-pointer"
              title="Waning Crescent"
            />
            <div
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-midnight border-2 border-moonlightSilver/40 hover:border-moonlightSilver/70 transition-all cursor-pointer"
              title="New Moon"
            />
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-center bg-gradient-to-r from-mermaidTeal via-lunarGold to-tealBright bg-clip-text text-transparent">
            AI Lab
          </h1>

          {/* Typewriter */}
          <Typewriter />

          {/* Subtitle */}
          <p className="text-center text-moonlightSilver text-lg max-w-3xl mx-auto leading-relaxed">
            Explore four live AI demonstrations showcasing the future of intelligent applications—
            from computer vision to conversational AI, built with the precision of a healer and
            the creativity of a water bender.
          </p>
        </div>
      </section>

      {/* ==================== UNCLE IROH WISDOM SECTION ==================== */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-deepOcean/40 via-midnight/60 to-deepOcean/40 border border-lunarGold/30">
            {/* Tea Cup Icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lunarGold via-amber-500 to-lunarGold flex items-center justify-center shadow-lg shadow-lunarGold/50 hover:rotate-12 transition-transform">
                <svg className="w-6 h-6 text-midnight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            <div className="text-center space-y-4 mt-4">
              <p className="text-xl md:text-2xl text-moonlightSilver font-light italic leading-relaxed">
                "The best solutions, like the finest tea, require patience and the right temperature.
                Each of these demonstrations brews a different flavor of intelligence."
              </p>
              <p className="text-sm text-starlight">
                — Uncle Iroh's wisdom, applied to AI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4 HOUSES DEMO SECTION ==================== */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your <span className="gradient-water">Path</span>
            </h2>
            <p className="text-moonlightSilver text-lg max-w-2xl mx-auto">
              Four AI demonstrations, each with its own strength. Click any card to explore its magic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {demos.map((demo) => (
              <div
                key={demo.id}
                className={`group relative p-6 rounded-xl bg-gradient-to-br from-deepOcean/40 via-midnight/60 to-deepOcean/40 border-2 ${demo.borderColor}/30 hover:${demo.borderColor}/60 transition-all cursor-pointer ${
                  activeDemo === demo.id ? 'ring-2 ring-offset-2 ring-offset-midnight' : ''
                }`}
                onClick={() => setActiveDemo(activeDemo === demo.id ? null : demo.id)}
              >
                {/* Card Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${demo.colors} text-white`}>
                      {demo.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-pearlWhite">{demo.title}</h3>
                      <p className="text-xs text-starlight">{demo.house} • {demo.trait}</p>
                    </div>
                  </div>
                  <Sparkles className={`w-5 h-5 text-lunarGold ${activeDemo === demo.id ? 'animate-pulse' : ''}`} />
                </div>

                {/* Description */}
                <p className="text-sm text-moonlightSilver mb-4">
                  {demo.description}
                </p>

                {/* Demo Content - FIXED: Added stopPropagation */}
                {activeDemo === demo.id && (
                  <div
                    className="mt-6 pt-6 border-t border-moonlightSilver/20"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {demo.component}
                  </div>
                )}

                {/* Expand Indicator */}
                <div className="mt-4 text-center">
                  <span className="text-xs text-starlight">
                    {activeDemo === demo.id ? 'Click to close' : 'Click to try demo'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TECH STACK SECTION ==================== */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powered by <span className="text-mermaidTeal">Modern AI</span>
            </h2>
            <p className="text-moonlightSilver">
              Built with industry-leading tools and frameworks
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Claude API', icon: <Brain className="w-6 h-6" /> },
              { name: 'Next.js 16', icon: <Zap className="w-6 h-6" /> },
              { name: 'TypeScript', icon: <Shield className="w-6 h-6" /> },
              { name: 'Tailwind CSS', icon: <Sparkles className="w-6 h-6" /> }
            ].map((tech, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-gradient-to-br from-deepOcean/40 via-midnight/60 to-deepOcean/40 border border-mermaidTeal/30 hover:border-mermaidTeal/60 transition-all text-center space-y-2"
              >
                <div className="flex justify-center text-mermaidTeal">
                  {tech.icon}
                </div>
                <p className="text-sm font-semibold text-pearlWhite">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Build Your <span className="gradient-water">AI Solution</span>?
          </h2>
          <p className="text-lg text-moonlightSilver max-w-2xl mx-auto">
            From prototype to production, I combine healthcare expertise with cutting-edge AI
            to create intelligent applications that make a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-mermaidTeal to-tealBright text-white font-semibold shadow-xl shadow-mermaidTeal/40 hover:shadow-2xl hover:shadow-tealBright/60 hover:-translate-y-1 transition-all"
            >
              Start Your Project
            </a>
            <a
              href="/portfolio"
              className="px-8 py-4 rounded-full border-2 border-mermaidTeal/70 text-mermaidTeal font-semibold hover:bg-mermaidTeal hover:text-white hover:-translate-y-1 transition-all"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER WITH HP EASTER EGG ==================== */}
      <footer className="relative py-16 px-6 border-t border-deepOcean/30">
        <div className="mx-auto max-w-6xl">
          {/* HP Easter Egg - Hidden Wisdom */}
          <div className="relative py-8 mb-8">
            <div className="hidden-wisdom text-center select-text text-moonlightSilver/60 hover:text-lunarGold transition-all">
              I solemnly swear that I am up to no good
            </div>

            {/* Walking Footprints */}
            <div className="footprints left absolute" style={{ left: '10%', top: '50%' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-lunarGold/40">
                <path d="M8 18c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm4-8c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zM6 14c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm10-4c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z" fill="currentColor"/>
              </svg>
            </div>
            <div className="footprints right absolute" style={{ right: '10%', top: '55%' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-lunarGold/40">
                <path d="M8 18c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm4-8c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zM6 14c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm10-4c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z" fill="currentColor"/>
              </svg>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center mb-8">
            <p className="text-2xl md:text-3xl font-light text-mermaidTeal mb-2">
              Where Dreams Surface and Ideas Flow
            </p>
            <p className="text-sm text-starlight">
              The Nurse Who Codes
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-deepOcean/30">
            <p className="text-xs text-moonlightSilver/50">
              © {new Date().getFullYear()} Moonlit Studios. All rights reserved.
            </p>
            <p className="text-xs text-moonlightSilver/30 mt-2 italic">
              Mischief Managed
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }

        .animate-floatSlow {
          animation: floatSlow 15s ease-in-out infinite;
        }

        .gradient-water {
          background: linear-gradient(to right, #4A9B9B, #3AA7A3, #FFD700);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hidden-wisdom {
          font-family: 'Georgia', serif;
          font-style: italic;
          font-size: 0.875rem;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .hidden-wisdom:hover {
          opacity: 1;
        }

        .footprints {
          opacity: 0;
          transition: all 0.8s ease;
        }

        .hidden-wisdom:hover ~ .footprints.left {
          opacity: 1;
          animation: walkLeft 3s ease-in-out;
        }

        .hidden-wisdom:hover ~ .footprints.right {
          opacity: 1;
          animation: walkRight 3s ease-in-out 0.3s;
        }

        @keyframes walkLeft {
          0% { left: -5%; }
          100% { left: 45%; }
        }

        @keyframes walkRight {
          0% { right: -5%; }
          100% { right: 45%; }
        }
      `}</style>
    </main>
  );
}
