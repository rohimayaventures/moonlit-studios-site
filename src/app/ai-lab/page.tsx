'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createLogger } from "@/lib/logger";
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
  Award,
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
    "Where System Skills Meet Machine Learning",
    "The Nurse Who Codes AI Solutions",
    "Vision • RAG • Voice • Triage — All Systems Online",
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
    <p className="mt-4 min-h-[2rem] text-base sm:text-lg md:text-xl font-medium text-starlight text-center px-4">
      {displayText}
      <span className="ml-1 inline-block h-5 sm:h-6 w-[2px] bg-starlight align-middle animate-pulse" />
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
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold hover:from-red-700 hover:to-orange-700 transition-all"
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
            className="w-full h-48 sm:h-64 object-cover rounded-lg border-2 border-red-600/50"
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
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Ask a question about my work..."
          className="flex-1 px-4 py-3 sm:py-2 rounded-lg bg-midnight/50 border border-blue-600/30 text-pearlWhite placeholder-moonlightSilver/50 focus:outline-none focus:border-blue-500 text-base"
        />
        <button
          onClick={handleSearch}
          disabled={isSearching || !query.trim()}
          className="w-full sm:w-auto px-6 py-3 sm:py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSearching ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Search className="w-5 h-5" />
          )}
          <span>Search</span>
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {sampleQuestions.map((q, idx) => (
          <button
            key={idx}
            onClick={() => setQuery(q)}
            className="text-xs sm:text-xs px-3 py-2 sm:py-1 rounded-full bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 transition-all"
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
          className="w-full px-4 py-3 text-base rounded-lg bg-midnight/50 border border-yellow-600/30 text-pearlWhite placeholder-moonlightSilver/50 focus:outline-none focus:border-yellow-500"
        />
        <textarea
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Describe your symptoms..."
          rows={4}
          className="w-full px-4 py-3 text-base rounded-lg bg-midnight/50 border border-yellow-600/30 text-pearlWhite placeholder-moonlightSilver/50 focus:outline-none focus:border-yellow-500 resize-none"
        />
        <button
          onClick={handleTriage}
          disabled={isAnalyzing || !symptoms.trim()}
          className="w-full px-6 py-4 text-base rounded-lg bg-gradient-to-r from-yellow-600 to-amber-600 text-white font-semibold hover:from-yellow-700 hover:to-amber-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <Activity className="w-5 h-5" />
              <span>Analyze Symptoms</span>
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
      content: "Greetings! I'm Echo, your AI sales assistant. I can help you explore Moonlit Studios' services. What brings you here today?"
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
      <div className="h-64 sm:h-80 overflow-y-auto space-y-3 p-3 sm:p-4 rounded-lg bg-midnight/30 border border-green-600/30">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] sm:max-w-[80%] px-3 sm:px-4 py-2 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                  : 'bg-midnight/50 text-moonlightSilver border border-green-600/20'
              }`}
            >
              <p className="text-sm break-words">{msg.content}</p>
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
          className={`p-3 rounded-lg transition-all flex-shrink-0 ${
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
          className="flex-1 min-w-0 px-3 sm:px-4 py-3 text-base rounded-lg bg-midnight/50 border border-green-600/30 text-pearlWhite placeholder-moonlightSilver/50 focus:outline-none focus:border-green-500"
        />
        <button
          onClick={() => handleSend()}
          disabled={!input.trim() || isTyping}
          className="px-4 sm:px-6 py-3 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold hover:from-green-700 hover:to-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>

      {isSpeaking && (
        <div className="flex items-center justify-center gap-2 text-green-400 text-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Echo is speaking...
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
      id: 'vision_system',
      title: 'Computer Vision',
      systemCall: 'Initialize.VisionScan',
      role: 'COMBAT VISION SYSTEM',
      tier: 'S-Rank',
      description: 'Blade-sharp image analysis for real-world scenarios',
      systemDescription: 'Real-time visual processing with tactical precision',
      icon: <Eye className="w-6 h-6" />,
      colors: 'from-red-600 to-orange-600',
      borderColor: 'border-red-600',
      component: <ComputerVisionDemo />
    },
    {
      id: 'archive_system',
      title: 'RAG Q&A System',
      systemCall: 'Access.KnowledgeLink',
      role: 'KNOWLEDGE ARCHIVE SYSTEM',
      tier: 'EX-Rank',
      description: 'Intelligence gathering through advanced RAG architecture',
      systemDescription: 'Deep search across knowledge repositories with context awareness',
      icon: <BookOpen className="w-6 h-6" />,
      colors: 'from-blue-600 to-indigo-600',
      borderColor: 'border-blue-600',
      component: <RAGDemo />
    },
    {
      id: 'support_triage',
      title: 'Healthcare Triage',
      systemCall: 'Execute.TriageAnalysis',
      role: 'MEDICAL TRIAGE SYSTEM',
      tier: 'A-Rank',
      description: 'Clinical decision support powered by healthcare AI',
      systemDescription: 'Nurse-trained precision for patient assessment and routing',
      icon: <Heart className="w-6 h-6" />,
      colors: 'from-yellow-600 to-amber-600',
      borderColor: 'border-yellow-600',
      component: <HealthcareTriageDemo />
    },
    {
      id: 'voice_link',
      title: 'Voice Link Console',
      systemCall: 'Launch.VoiceRelay',
      role: 'VOICE LINK SYSTEM',
      tier: 'S-Rank',
      description: 'Real-time voice synthesis for sales acceleration',
      systemDescription: 'Conversational AI with voice input/output capabilities',
      icon: <MessageCircle className="w-6 h-6" />,
      colors: 'from-green-600 to-emerald-600',
      borderColor: 'border-green-600',
      component: <VoiceSalesDemo />
    }
  ];

  return (
    <main className="min-h-screen bg-midnight text-pearlWhite">

      {/* ==================== SAO SYSTEM ANNOUNCEMENT ==================== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-midnight via-deepOcean to-midnight border-b-2 border-mermaidTeal/40">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-mermaidTeal/10 to-transparent animate-pulse"></div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-mermaidTeal"></div>
            <div className="text-center space-y-1 sm:space-y-2">
              <p className="text-xs sm:text-sm text-mermaidTeal/70 uppercase tracking-[0.3em] font-semibold">
                System Announcement
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-mermaidTeal tracking-wide flex items-center justify-center gap-2 sm:gap-3">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 animate-pulse" />
                <span>LINK START!</span>
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 animate-pulse" />
              </h2>
              <p className="text-xs sm:text-sm text-starlight">
                AI Experimental Lab • Status: <span className="text-lunarGold">ONLINE</span>
              </p>
            </div>
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-mermaidTeal"></div>
          </div>
        </div>
      </section>

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        {/* SAO-style Scan Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute inset-0 sao-scan-lines" />
        </div>

        {/* Digital Orbs Background */}
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-mermaidTeal/60 via-tealBright/40 to-deepOcean/60 blur-3xl animate-floatSlow sao-glow" />
          <div className="absolute -left-24 bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-lunarGold/40 via-mermaidTeal/30 to-transparent blur-3xl" style={{ animation: 'floatSlow 20s ease-in-out infinite 5s' }} />
        </div>

        <div className="relative mx-auto max-w-6xl space-y-6 sm:space-y-8">
          {/* System Status Indicator - SAO Moon Phases */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 flex-wrap mb-6 sm:mb-8">
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-midnight to-mermaidTeal/60 border-2 border-mermaidTeal/50 shadow-lg shadow-mermaidTeal/30 animate-pulse flex-shrink-0"
              title="System Standby"
              style={{ animationDuration: '3s' }}
            />
            <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-mermaidTeal/40 to-tealBright/40" />

            <div
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-mermaidTeal via-mermaidTeal/80 to-tealBright/80 border-2 border-tealBright/60 shadow-lg shadow-tealBright/40 animate-pulse flex-shrink-0"
              title="System Initializing"
              style={{ animationDuration: '3.5s' }}
            />
            <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-tealBright/50 to-lunarGold/60" />

            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-mermaidTeal via-tealBright to-lunarGold border-2 border-lunarGold/80 shadow-xl shadow-lunarGold/60 animate-pulse flex-shrink-0"
              title="All Systems Online - Full Power"
              style={{ animationDuration: '2.5s' }}
            />
            <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-lunarGold/60 to-tealBright/50" />

            <div
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-tealBright/90 via-midnight/70 to-tealBright/80 border-2 border-tealBright/60 shadow-lg shadow-tealBright/40 animate-pulse flex-shrink-0"
              title="System Active"
              style={{ animationDuration: '3.5s' }}
            />
            <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-tealBright/40 to-mermaidTeal/40" />

            <div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-midnight to-mermaidTeal/60 border-2 border-mermaidTeal/50 shadow-lg shadow-mermaidTeal/30 animate-pulse flex-shrink-0"
              title="System Standby"
              style={{ animationDuration: '3s' }}
            />
          </div>

          {/* Title */}
          <h1 className="font-elegant text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center bg-gradient-to-r from-mermaidTeal via-lunarGold to-tealBright bg-clip-text text-transparent px-4 tracking-tight">
            AI Lab
          </h1>

          {/* Typewriter */}
          <Typewriter />

          {/* Subtitle */}
          <p className="text-center text-moonlightSilver text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4">
            Experience four live AI demonstrations showcasing the fusion of healthcare expertise and cutting-edge technology—
            built with the precision of a clinical nurse and the strategic mind of a full-stack developer.
          </p>

          {/* Player Stats - SAO Style Showcase */}
          <div className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            <div className="group p-4 sm:p-5 rounded-lg bg-gradient-to-br from-deepOcean/60 via-midnight/80 to-deepOcean/60 border border-mermaidTeal/30 hover:border-mermaidTeal/60 transition-all hover:scale-105">
              <div className="text-center space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-mermaidTeal sao-glow-text">4</div>
                <div className="text-xs sm:text-sm text-moonlightSilver uppercase tracking-wider">Live Demos</div>
                <div className="text-[10px] sm:text-xs text-starlight/60">Fully Interactive</div>
              </div>
            </div>
            <div className="group p-4 sm:p-5 rounded-lg bg-gradient-to-br from-deepOcean/60 via-midnight/80 to-deepOcean/60 border border-lunarGold/30 hover:border-lunarGold/60 transition-all hover:scale-105">
              <div className="text-center space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-lunarGold sao-glow-text">5+</div>
                <div className="text-xs sm:text-sm text-moonlightSilver uppercase tracking-wider">AI Models</div>
                <div className="text-[10px] sm:text-xs text-starlight/60">Claude + OpenAI</div>
              </div>
            </div>
            <div className="group p-4 sm:p-5 rounded-lg bg-gradient-to-br from-deepOcean/60 via-midnight/80 to-deepOcean/60 border border-tealBright/30 hover:border-tealBright/60 transition-all hover:scale-105">
              <div className="text-center space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-tealBright sao-glow-text">15+</div>
                <div className="text-xs sm:text-sm text-moonlightSilver uppercase tracking-wider">Years as a Nurse & Healthcare Leader</div>
                <div className="text-[10px] sm:text-xs text-starlight/60">Healthcare + Tech</div>
              </div>
            </div>
            <div className="group p-4 sm:p-5 rounded-lg bg-gradient-to-br from-deepOcean/60 via-midnight/80 to-deepOcean/60 border border-purple-400/30 hover:border-purple-400/60 transition-all hover:scale-105">
              <div className="text-center space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 sao-glow-text">∞</div>
                <div className="text-xs sm:text-sm text-moonlightSilver uppercase tracking-wider">Possibilities</div>
                <div className="text-[10px] sm:text-xs text-starlight/60">Your Next Project</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CARDINAL SYSTEM LOG ==================== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-deepOcean/40 via-midnight/60 to-deepOcean/40 border border-mermaidTeal/30">
            {/* System Crystal Icon */}
            <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-mermaidTeal via-tealBright to-mermaidTeal flex items-center justify-center shadow-lg shadow-mermaidTeal/50 hover:scale-110 transition-transform">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-midnight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
            </div>

            <div className="text-center space-y-3 sm:space-y-4 mt-4">
              <p className="text-base sm:text-xl md:text-2xl text-moonlightSilver font-light italic leading-relaxed px-2">
                "Every system, like every sword skill, requires mastery through experience.
                Each console represents a different path to clearing the dungeon."
              </p>
              <p className="text-xs sm:text-sm text-mermaidTeal font-semibold uppercase tracking-wider">
                — SYSTEM LOG ENTRY: CARDINAL, FLOOR 50
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SKILL CONSOLE SECTION ==================== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">
              Select Your <span className="gradient-water">System</span>
            </h2>
            <p className="text-moonlightSilver text-base sm:text-lg max-w-2xl mx-auto px-4">
              Four AI consoles, each with unique capabilities. Click any card to activate the skill interface.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {demos.map((demo) => (
              <div
                key={demo.id}
                className={`group relative p-4 sm:p-6 rounded-xl bg-gradient-to-br from-deepOcean/40 via-midnight/60 to-deepOcean/40 border-2 ${demo.borderColor}/30 hover:${demo.borderColor}/60 transition-all duration-300 cursor-pointer overflow-hidden ${
                  activeDemo === demo.id ? `ring-2 ring-${demo.borderColor} ring-offset-2 ring-offset-midnight shadow-2xl shadow-${demo.borderColor}/40` : 'hover:shadow-xl'
                }`}
                onClick={() => setActiveDemo(activeDemo === demo.id ? null : demo.id)}
              >
                {/* SAO Hexagon Pattern Background */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <div className="absolute inset-0 sao-hex-pattern" />
                </div>

                {/* Animated Border Glow on Active */}
                {activeDemo === demo.id && (
                  <div className={`absolute inset-0 rounded-xl border-2 ${demo.borderColor} animate-pulse pointer-events-none`} />
                )}

                {/* Card Header */}
                <div className="relative flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                    <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${demo.colors} text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {demo.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-pearlWhite truncate">{demo.title}</h3>
                      <p className="text-xs text-starlight truncate">
                        <span className="hidden sm:inline">Role: </span>{demo.role} • <span className="font-bold text-lunarGold">{demo.tier}</span>
                      </p>
                    </div>
                  </div>
                  <div className={`flex-shrink-0 ml-2 px-2 sm:px-3 py-1 rounded text-[10px] sm:text-xs font-bold uppercase tracking-wide transition-all duration-300 ${
                    activeDemo === demo.id
                      ? 'bg-mermaidTeal/30 text-mermaidTeal border border-mermaidTeal/50 animate-pulse'
                      : 'bg-moonlightSilver/10 text-moonlightSilver/60 border border-moonlightSilver/20'
                  }`}>
                    {activeDemo === demo.id ? '[ONLINE]' : '[READY]'}
                  </div>
                </div>

                {/* System Call */}
                <div className={`relative mb-3 p-2 sm:p-3 rounded-lg transition-all duration-300 ${
                  activeDemo === demo.id
                    ? 'bg-mermaidTeal/20 border-2 border-mermaidTeal/40 shadow-lg shadow-mermaidTeal/20'
                    : 'bg-mermaidTeal/10 border border-mermaidTeal/20'
                }`}>
                  <p className="text-[10px] sm:text-xs text-mermaidTeal/70 uppercase tracking-wider font-semibold mb-1">SYSTEM CALL:</p>
                  <p className="text-xs sm:text-sm text-mermaidTeal font-mono break-all">&lt;&lt;{demo.systemCall}&gt;&gt;</p>
                </div>

                {/* Description */}
                <div className="relative space-y-2 mb-4">
                  <p className="text-sm sm:text-base text-moonlightSilver leading-relaxed">
                    {demo.description}
                  </p>
                  <p className="text-xs text-starlight/70 italic leading-relaxed">
                    {demo.systemDescription}
                  </p>
                </div>

                {/* Demo Content - FIXED: Added stopPropagation */}
                {activeDemo === demo.id && (
                  <div
                    className="relative mt-6 pt-6 border-t-2 border-mermaidTeal/30 animate-fadeIn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="mb-3 flex items-center gap-2 text-xs sm:text-sm text-mermaidTeal font-semibold uppercase tracking-wider">
                      <div className="w-2 h-2 rounded-full bg-mermaidTeal animate-pulse" />
                      <span>CONSOLE ACTIVE</span>
                    </div>
                    {demo.component}
                  </div>
                )}

                {/* Activate Skill Button */}
                <div className="relative mt-4">
                  <div className={`w-full px-4 py-2.5 sm:py-3 rounded-lg bg-gradient-to-r ${demo.colors} text-white font-bold text-center text-xs sm:text-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-95 cursor-pointer group-hover:shadow-2xl`}>
                    {activeDemo === demo.id ? (
                      <span className="flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="hidden sm:inline">EXIT INSTANCE</span>
                        <span className="sm:hidden">EXIT</span>
                        <span>•</span>
                        <span>Close Console</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="hidden sm:inline">ACTIVATE SKILL</span>
                        <span className="sm:hidden">ACTIVATE</span>
                        <span>•</span>
                        <span>Open Console</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TECH STACK SECTION ==================== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">
              Powered by <span className="text-mermaidTeal">Modern AI</span>
            </h2>
            <p className="text-sm sm:text-base text-moonlightSilver px-4">
              Built with industry-leading tools and frameworks
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              { name: 'Claude API', icon: <Brain className="w-6 h-6" /> },
              { name: 'Next.js 16', icon: <Zap className="w-6 h-6" /> },
              { name: 'TypeScript', icon: <Shield className="w-6 h-6" /> },
              { name: 'Tailwind CSS', icon: <Sparkles className="w-6 h-6" /> }
            ].map((tech, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-6 rounded-lg bg-gradient-to-br from-deepOcean/40 via-midnight/60 to-deepOcean/40 border border-mermaidTeal/30 hover:border-mermaidTeal/60 transition-all text-center space-y-2"
              >
                <div className="flex justify-center text-mermaidTeal">
                  {tech.icon}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-pearlWhite">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY HIRE ME SECTION ==================== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-midnight via-deepOcean/40 to-midnight">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">
              Why This <span className="gradient-water">Combination Works</span>
            </h2>
            <p className="text-sm sm:text-base text-moonlightSilver max-w-2xl mx-auto px-4">
              The rare intersection of clinical expertise and technical mastery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Healthcare Expertise Card */}
            <div className="group p-6 sm:p-8 rounded-xl bg-gradient-to-br from-deepOcean/60 via-midnight/80 to-deepOcean/60 border-2 border-lunarGold/30 hover:border-lunarGold/60 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-yellow-600 to-amber-600 text-white flex-shrink-0">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-lunarGold mb-2">15+ Years Healthcare Leader</h3>
                  <p className="text-xs sm:text-sm text-starlight uppercase tracking-wider">Nurse & Operations Expert</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm sm:text-base text-moonlightSilver">
                <li className="flex items-start gap-2">
                  <span className="text-lunarGold mt-1 flex-shrink-0">✓</span>
                  <span>Deep understanding of clinical workflows and pain points</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lunarGold mt-1 flex-shrink-0">✓</span>
                  <span>HIPAA compliance and healthcare security expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lunarGold mt-1 flex-shrink-0">✓</span>
                  <span>Real-world experience with patient data and triage systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lunarGold mt-1 flex-shrink-0">✓</span>
                  <span>Built solutions that actually work for frontline staff</span>
                </li>
              </ul>
            </div>

            {/* Technical Mastery Card */}
            <div className="group p-6 sm:p-8 rounded-xl bg-gradient-to-br from-deepOcean/60 via-midnight/80 to-deepOcean/60 border-2 border-mermaidTeal/30 hover:border-mermaidTeal/60 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-mermaidTeal to-tealBright text-white flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-mermaidTeal mb-2">Full-Stack AI Developer</h3>
                  <p className="text-xs sm:text-sm text-starlight uppercase tracking-wider">Cutting-Edge Tech Stack</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm sm:text-base text-moonlightSilver">
                <li className="flex items-start gap-2">
                  <span className="text-mermaidTeal mt-1 flex-shrink-0">✓</span>
                  <span>Production AI: Claude API, OpenAI, RAG systems, voice AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-mermaidTeal mt-1 flex-shrink-0">✓</span>
                  <span>Modern stack: Next.js 16, TypeScript, React, Tailwind</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-mermaidTeal mt-1 flex-shrink-0">✓</span>
                  <span>Backend: Python, Node.js, PostgreSQL, Supabase</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-mermaidTeal mt-1 flex-shrink-0">✓</span>
                  <span>Shipped real products used by actual users daily</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Unique Value Proposition */}
          <div className="mt-6 sm:mt-8 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-deepOcean/40 via-midnight/60 to-deepOcean/40 border-2 border-purple-400/30 text-center">
            <p className="text-base sm:text-lg md:text-xl text-moonlightSilver leading-relaxed">
              <span className="text-purple-400 font-bold">The Result?</span> AI solutions that aren't just technically impressive—
              they're <span className="text-lunarGold font-semibold">actually useful</span>,
              <span className="text-mermaidTeal font-semibold"> user-friendly</span>, and
              <span className="text-tealBright font-semibold"> production-ready</span>.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gradient-to-br from-mermaidTeal via-tealBright to-lunarGold blur-3xl animate-pulse" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mermaidTeal/20 border border-mermaidTeal/40 text-mermaidTeal text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
            <div className="w-2 h-2 rounded-full bg-mermaidTeal animate-pulse" />
            <span>Ready to Deploy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-4 leading-tight">
            Ready to Build Your <span className="gradient-water">AI Solution</span>?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-moonlightSilver max-w-2xl mx-auto px-4 leading-relaxed">
            From <span className="text-mermaidTeal font-semibold">prototype to production</span>,
            I combine healthcare expertise with cutting-edge AI to create
            <span className="text-lunarGold font-semibold"> intelligent applications</span> that make a real difference.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 py-4 sm:py-6">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-mermaidTeal">Fast</div>
              <div className="text-xs sm:text-sm text-starlight">Rapid Prototyping</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-lunarGold">Secure</div>
              <div className="text-xs sm:text-sm text-starlight">HIPAA Compliant</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-tealBright">Scalable</div>
              <div className="text-xs sm:text-sm text-starlight">Production Ready</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 pt-4">
            <a
              href="/get-quote"
              className="group w-full sm:w-auto px-8 py-4 sm:py-5 rounded-full bg-gradient-to-r from-lunarGold to-phoenixFire text-midnight font-bold text-base sm:text-lg shadow-xl shadow-lunarGold/40 hover:shadow-2xl hover:shadow-phoenixFire/60 hover:-translate-y-1 active:scale-95 transition-all text-center"
            >
              <span className="flex items-center justify-center gap-3">
                <span>💰</span>
                <span>Get Instant Quote</span>
              </span>
            </a>
            <a
              href="/contact"
              className="group w-full sm:w-auto px-8 py-4 sm:py-5 rounded-full bg-gradient-to-r from-mermaidTeal to-tealBright text-white font-bold text-base sm:text-lg shadow-xl shadow-mermaidTeal/40 hover:shadow-2xl hover:shadow-tealBright/60 hover:-translate-y-1 active:scale-95 transition-all text-center"
            >
              <span className="flex items-center justify-center gap-3">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-pulse" />
                <span>Book Consultation</span>
              </span>
            </a>
            <a
              href="/portfolio"
              className="group w-full sm:w-auto px-8 py-4 sm:py-5 rounded-full border-2 border-mermaidTeal/70 text-mermaidTeal font-bold text-base sm:text-lg hover:bg-mermaidTeal hover:text-white hover:-translate-y-1 active:scale-95 transition-all text-center"
            >
              <span className="flex items-center justify-center gap-3">
                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>View Portfolio</span>
              </span>
            </a>
          </div>

          {/* Trust Signal */}
          <p className="text-xs sm:text-sm text-starlight/70 italic px-4 pt-4">
            Fully interactive demos above • No signup required • Try it now
          </p>
        </div>
      </section>

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
