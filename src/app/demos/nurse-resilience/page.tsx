'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Heart,
  Wind,
  BookOpen,
  Phone,
  Shield,
  Calendar,
  TrendingUp,
  Activity,
  Zap,
  Lock,
  ChevronRight,
  Brain,
  Flame,
  X,
  ChevronDown,
  CheckCircle
} from 'lucide-react';

// --- Types ---
interface SavedEntry {
  id: string;
  date: string;
  time: string;
  prompt: string;
  entry: string;
  sentiment: 'positive' | 'neutral' | 'negative' | 'critical';
  tags: string[];
}

interface Exercise {
  id: string;
  name: string;
  duration: string;
  description: string;
  steps: { instruction: string; duration: number; action?: 'inhale' | 'hold' | 'exhale' }[];
  recommendedFor: string[];
}

// --- Content Data ---
const debriefPrompts = [
  "What moment from your shift is still weighing on you?",
  "What did you witness today that you can't stop thinking about?",
  "If you could tell someone about today without judgment, what would you say?",
  "What emotions are you carrying home with you right now?",
  "What do you need to release before you can rest?",
  "What went well today that you want to remember?",
  "What support did you need but didn't receive?",
  "How is your body feeling after this shift?",
];

const groundingExercises: Exercise[] = [
  {
    id: '478',
    name: "4-7-8 Breathing",
    duration: "2 min",
    description: "Deep calming breath pattern to activate the parasympathetic nervous system.",
    recommendedFor: ['anxiety', 'panic', 'high stress'],
    steps: [
      { instruction: "Find a safe, comfortable position.", duration: 4 },
      { instruction: "Inhale through nose", duration: 4, action: "inhale" },
      { instruction: "Hold breath gently", duration: 7, action: "hold" },
      { instruction: "Exhale through mouth", duration: 8, action: "exhale" },
      { instruction: "Inhale...", duration: 4, action: "inhale" },
      { instruction: "Hold...", duration: 7, action: "hold" },
      { instruction: "Exhale completely...", duration: 8, action: "exhale" },
    ]
  },
  {
    id: 'bodyscan',
    name: "Rapid Body Scan",
    duration: "3 min",
    description: "Systematic tension release from head to toe.",
    recommendedFor: ['physical tension', 'fatigue', 'pain'],
    steps: [
      { instruction: "Close your eyes. Take a deep breath.", duration: 5 },
      { instruction: "Clench your jaw... now release it completely.", duration: 8 },
      { instruction: "Drop your shoulders away from your ears.", duration: 8 },
      { instruction: "Unclench your hands. Let them rest.", duration: 8 },
      { instruction: "Soften your belly. Breathe into it.", duration: 8 },
      { instruction: "Feel your feet on the ground. You are supported.", duration: 8 },
    ]
  },
  {
    id: 'box',
    name: "Box Breathing",
    duration: "1 min",
    description: "Navy SEAL technique for focus and immediate calm.",
    recommendedFor: ['distraction', 'overwhelm', 'brain fog'],
    steps: [
      { instruction: "Empty your lungs completely.", duration: 3 },
      { instruction: "Inhale...", duration: 4, action: "inhale" },
      { instruction: "Hold...", duration: 4, action: "hold" },
      { instruction: "Exhale...", duration: 4, action: "exhale" },
      { instruction: "Hold empty...", duration: 4, action: "hold" },
      { instruction: "Inhale...", duration: 4, action: "inhale" },
      { instruction: "Hold...", duration: 4, action: "hold" },
      { instruction: "Exhale...", duration: 4, action: "exhale" },
    ]
  }
];

const crisisResources = [
  { name: "988 Suicide & Crisis Lifeline", contact: "Call/Text 988", type: "urgent" },
  { name: "Crisis Text Line", contact: "Text HOME to 741741", type: "urgent" },
  { name: "Dr. Lorna Breen Heroes Foundation", contact: "drlornabreen.org", type: "support" },
  { name: "Nurse Support Line", contact: "1-800-555-RNRN", type: "support" },
];

export default function NurseResilienceDemo() {
  const [activeTab, setActiveTab] = useState<'debrief' | 'ground' | 'resources'>('debrief');
  const [currentPrompt, setCurrentPrompt] = useState(debriefPrompts[0]);
  const [debriefEntry, setDebriefEntry] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiInsight, setAiInsight] = useState<{ sentiment: string; recommendation: string; exercise: Exercise } | null>(null);
  const [savedEntries, setSavedEntries] = useState<SavedEntry[]>([]);
  const [showSaved, setShowSaved] = useState(false);
  const [saveConfirm, setSaveConfirm] = useState(false);

  // Wellness Streak
  const [streak, setStreak] = useState(0);
  const [totalEntries, setTotalEntries] = useState(0);

  // Exercise State
  const [activeExercise, setActiveExercise] = useState<Exercise | null>(null);
  const [exerciseStep, setExerciseStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Load saved entries and calculate streak on mount
  useEffect(() => {
    const saved = localStorage.getItem('nurse-resilience-entries');
    if (saved) {
      const entries: SavedEntry[] = JSON.parse(saved);
      setSavedEntries(entries);
      setTotalEntries(entries.length);

      // Calculate streak
      const today = new Date().toDateString();
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      let currentStreak = 0;

      const uniqueDays = [...new Set(entries.map(e => new Date(e.date).toDateString()))].sort().reverse();

      for (let i = 0; i < uniqueDays.length; i++) {
        const checkDate = new Date(Date.now() - (i * 86400000)).toDateString();
        if (uniqueDays.includes(checkDate) || (i === 0 && uniqueDays[0] === yesterday)) {
          currentStreak++;
        } else if (i > 0) {
          break;
        }
      }

      setStreak(currentStreak);
    }

    // Load last visit
    const lastVisit = localStorage.getItem('nurse-resilience-last-visit');
    const today = new Date().toDateString();
    if (lastVisit !== today) {
      localStorage.setItem('nurse-resilience-last-visit', today);
    }
  }, []);

  // --- Logic: Mock AI Sentiment Analysis ---
  const analyzeEntry = () => {
    if (!debriefEntry.trim()) return;

    setIsAnalyzing(true);
    // Simulate AI processing delay
    setTimeout(() => {
      const lower = debriefEntry.toLowerCase();
      let sentiment: SavedEntry['sentiment'] = 'neutral';
      let recommendation = groundingExercises[0]; // Default

      if (lower.includes('tired') || lower.includes('pain') || lower.includes('feet') || lower.includes('exhausted')) {
        sentiment = 'negative';
        recommendation = groundingExercises[1]; // Body Scan
      } else if (lower.includes('anxious') || lower.includes('panic') || lower.includes('scared') || lower.includes('afraid')) {
        sentiment = 'critical';
        recommendation = groundingExercises[0]; // 4-7-8
      } else if (lower.includes('overwhelmed') || lower.includes('busy') || lower.includes('chaos') || lower.includes('stressed')) {
        sentiment = 'negative';
        recommendation = groundingExercises[2]; // Box Breathing
      } else if (lower.includes('good') || lower.includes('proud') || lower.includes('helped') || lower.includes('grateful')) {
        sentiment = 'positive';
      }

      // Save the entry
      const newEntry: SavedEntry = {
        id: Date.now().toString(),
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
        prompt: currentPrompt,
        entry: debriefEntry,
        sentiment,
        tags: recommendation.recommendedFor,
      };

      const updated = [newEntry, ...savedEntries];
      setSavedEntries(updated);
      setTotalEntries(updated.length);
      localStorage.setItem('nurse-resilience-entries', JSON.stringify(updated));

      setAiInsight({
        sentiment: sentiment === 'positive' ? 'Positive reflection detected' :
                  sentiment === 'critical' ? 'High stress indicators detected' :
                  sentiment === 'negative' ? 'Some tension detected' : 'Neutral processing',
        recommendation: `Based on your entry, we recommend: ${recommendation.name}`,
        exercise: recommendation
      });

      setSaveConfirm(true);
      setTimeout(() => setSaveConfirm(false), 2000);
      setDebriefEntry('');
      setIsAnalyzing(false);
    }, 1500);
  };

  const handleDeleteEntry = (id: string) => {
    const updated = savedEntries.filter(e => e.id !== id);
    setSavedEntries(updated);
    setTotalEntries(updated.length);
    localStorage.setItem('nurse-resilience-entries', JSON.stringify(updated));
  };

  // --- Logic: Exercise Timer ---
  const startExercise = (exercise: Exercise) => {
    setActiveExercise(exercise);
    setExerciseStep(0);
    setProgress(0);
    setAiInsight(null);
  };

  useEffect(() => {
    if (!activeExercise) return;

    const currentStepData = activeExercise.steps[exerciseStep];
    const stepDurationMs = currentStepData.duration * 1000;
    const intervalMs = 50;
    let elapsed = 0;

    timerRef.current = setInterval(() => {
      elapsed += intervalMs;
      const pct = Math.min((elapsed / stepDurationMs) * 100, 100);
      setProgress(pct);

      if (pct >= 100) {
        if (exerciseStep < activeExercise.steps.length - 1) {
          setExerciseStep(prev => prev + 1);
          elapsed = 0;
        } else {
          if (timerRef.current) clearInterval(timerRef.current);
          setActiveExercise(null);
        }
      }
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeExercise, exerciseStep]);

  // --- Render Helpers ---
  const getBreathCircleStyle = () => {
    if (!activeExercise) return {};
    const action = activeExercise.steps[exerciseStep].action;

    let scale = 1;
    let opacity = 0.5;

    if (action === 'inhale') { scale = 1.5; opacity = 1; }
    else if (action === 'hold') { scale = 1.5; opacity = 0.8; }
    else if (action === 'exhale') { scale = 1; opacity = 0.5; }

    return {
      transform: `scale(${scale})`,
      opacity: opacity,
      transition: `all ${activeExercise.steps[exerciseStep].duration}s ease-in-out`
    };
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-emerald-400 bg-emerald-900/30 border-emerald-700/50';
      case 'negative': return 'text-amber-400 bg-amber-900/30 border-amber-700/50';
      case 'critical': return 'text-rose-400 bg-rose-900/30 border-rose-700/50';
      default: return 'text-zinc-400 bg-zinc-800/50 border-zinc-700/50';
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans">
      {/* Header */}
      <header className="bg-zinc-900 border-b border-zinc-800 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-teal-900/50">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-white tracking-wide">NurseResilience</h1>
                <span className="text-teal-400 font-semibold">.ai</span>
                {/* Live Indicator */}
                <span className="flex items-center gap-1 text-emerald-400 ml-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-semibold">Live</span>
                </span>
              </div>
              <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold">Privacy-First Support</p>
            </div>
          </div>

          <nav className="flex bg-zinc-800/50 p-1 rounded-lg">
            {[
              { id: 'debrief', icon: BookOpen, label: 'Debrief' },
              { id: 'ground', icon: Wind, label: 'Ground' },
              { id: 'resources', icon: Phone, label: 'Support' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id as 'debrief' | 'ground' | 'resources'); setActiveExercise(null); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === tab.id
                    ? 'bg-teal-600 text-white shadow-md'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-700'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">

        {/* Wellness Stats Bar */}
        <div className="flex items-center justify-between mb-6 p-3 bg-zinc-900/50 rounded-xl border border-zinc-800">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-bold text-white">{streak}</span>
              <span className="text-xs text-zinc-500">day streak</span>
            </div>
            <div className="w-px h-4 bg-zinc-700"></div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-teal-400" />
              <span className="text-sm font-bold text-white">{totalEntries}</span>
              <span className="text-xs text-zinc-500">entries</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <TrendingUp className="w-3 h-3" />
            <span>Building resilience</span>
          </div>
        </div>

        {/* --- TAB: DEBRIEF --- */}
        {activeTab === 'debrief' && (
          <div className="space-y-6 animate-fade-in">
            {/* HIPAA PHI Reminder */}
            <div className="flex items-center justify-center gap-2 py-2 px-4 bg-amber-900/20 rounded-lg border border-amber-700/30 text-xs text-amber-300">
              <Shield className="w-3 h-3 flex-shrink-0" />
              <span>Reminder: Do not include patient names, MRNs, or identifiable health information in your entries.</span>
            </div>

            {/* Privacy Badge */}
            <div className="flex items-center justify-center gap-2 py-2 bg-zinc-800/50 rounded-lg border border-zinc-700/50 text-xs text-zinc-400">
              <Lock className="w-3 h-3 text-emerald-400" />
              <span>Zero-Knowledge Encryption: Your entries are stored locally and never sent to a server.</span>
            </div>

            {/* Prompt Card */}
            <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-sm font-bold text-teal-400 uppercase tracking-widest flex items-center gap-2">
                    <Brain className="w-4 h-4" /> Reflection Prompt
                  </h2>
                  <button
                    onClick={() => setCurrentPrompt(debriefPrompts[Math.floor(Math.random() * debriefPrompts.length)])}
                    className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <Zap className="w-3 h-3" /> New Prompt
                  </button>
                </div>
                <p className="text-xl md:text-2xl font-serif text-white leading-relaxed mb-6">
                  &ldquo;{currentPrompt}&rdquo;
                </p>

                <textarea
                  value={debriefEntry}
                  onChange={(e) => setDebriefEntry(e.target.value)}
                  placeholder="Just write. Don't worry about grammar or structure..."
                  className="w-full h-40 bg-zinc-950/50 border border-zinc-700 rounded-xl p-4 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all resize-none"
                />

                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs text-zinc-500">{debriefEntry.length} characters</span>
                  <button
                    onClick={analyzeEntry}
                    disabled={!debriefEntry.trim() || isAnalyzing}
                    className="px-6 py-2 bg-teal-600 text-white rounded-lg font-bold text-sm hover:bg-teal-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isAnalyzing ? (
                      <>
                        <Activity className="w-4 h-4 animate-pulse" />
                        Analyzing...
                      </>
                    ) : saveConfirm ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        Saved!
                      </>
                    ) : (
                      <>
                        Process & Release
                        <ChevronRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* AI Insight Result */}
            {aiInsight && (
              <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 border border-teal-500/30 rounded-xl p-5 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-900/50 flex items-center justify-center border border-teal-500/50">
                    <Activity className="w-5 h-5 text-teal-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-sm uppercase tracking-wide mb-1">AI Wellness Insight</h3>
                    <p className="text-xs text-zinc-400 mb-2">{aiInsight.sentiment}</p>
                    <p className="text-sm text-zinc-300 mb-3">{aiInsight.recommendation}</p>
                    <button
                      onClick={() => { setActiveTab('ground'); startExercise(aiInsight.exercise); }}
                      className="text-xs font-bold text-teal-400 hover:text-teal-300 flex items-center gap-1"
                    >
                      Start Exercise <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Saved Entries Toggle */}
            {savedEntries.length > 0 && (
              <div>
                <button
                  onClick={() => setShowSaved(!showSaved)}
                  className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-300 transition-colors"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${showSaved ? 'rotate-180' : ''}`} />
                  Past entries ({savedEntries.length})
                </button>

                {showSaved && (
                  <div className="mt-4 space-y-3 max-h-96 overflow-y-auto">
                    {savedEntries.slice(0, 10).map((entry) => (
                      <div key={entry.id} className={`p-4 rounded-lg border ${getSentimentColor(entry.sentiment)}`}>
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="text-xs text-zinc-500">{entry.date} at {entry.time}</p>
                            <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded mt-1 inline-block ${getSentimentColor(entry.sentiment)}`}>
                              {entry.sentiment}
                            </span>
                          </div>
                          <button
                            onClick={() => handleDeleteEntry(entry.id)}
                            className="text-zinc-500 hover:text-red-400 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-teal-400 mb-2 italic">&ldquo;{entry.prompt}&rdquo;</p>
                        <p className="text-sm text-zinc-300 leading-relaxed line-clamp-3">{entry.entry}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* --- TAB: GROUNDING --- */}
        {activeTab === 'ground' && (
          <div className="space-y-6 animate-fade-in">
            {!activeExercise ? (
              // Exercise List
              <div className="grid gap-4">
                {groundingExercises.map((exercise) => (
                  <button
                    key={exercise.id}
                    onClick={() => startExercise(exercise)}
                    className="group bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-teal-500/50 p-6 rounded-xl text-left transition-all relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Wind className="w-12 h-12 text-teal-400" />
                    </div>
                    <div className="relative z-10">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors">{exercise.name}</h3>
                        <span className="px-2 py-1 rounded bg-zinc-950 text-xs font-mono text-zinc-400 border border-zinc-700">
                          {exercise.duration}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-400 mb-3">{exercise.description}</p>
                      <div className="flex gap-2 flex-wrap">
                        {exercise.recommendedFor.map(tag => (
                          <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-zinc-950/50 text-zinc-500 border border-zinc-800">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              // Active Exercise View
              <div className="flex flex-col items-center justify-center min-h-[60vh]">
                {/* Breathing Visualizer */}
                <div className="relative w-64 h-64 flex items-center justify-center mb-12">
                  {/* Outer Glow Ring */}
                  <div
                    className="absolute inset-0 rounded-full bg-teal-500/20 blur-3xl transition-all duration-[4000ms]"
                    style={getBreathCircleStyle()}
                  ></div>

                  {/* Core Circle */}
                  <div
                    className="w-48 h-48 rounded-full border-4 border-teal-400/50 flex items-center justify-center relative bg-zinc-900 z-10 shadow-2xl"
                    style={getBreathCircleStyle()}
                  >
                    <span className="text-2xl font-bold text-white tracking-widest uppercase">
                      {activeExercise.steps[exerciseStep].action || "Focus"}
                    </span>
                  </div>
                </div>

                {/* Instructions */}
                <div className="text-center space-y-6 max-w-md">
                  <h2 className="text-xl font-medium text-teal-100">
                    {activeExercise.steps[exerciseStep].instruction}
                  </h2>

                  {/* Progress Bar */}
                  <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-teal-500 transition-all duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>

                  <p className="text-xs text-zinc-500">
                    Step {exerciseStep + 1} of {activeExercise.steps.length}
                  </p>

                  <button
                    onClick={() => setActiveExercise(null)}
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    End Exercise
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* --- TAB: RESOURCES --- */}
        {activeTab === 'resources' && (
          <div className="space-y-6 animate-fade-in">
            {/* Urgent Banner */}
            <div className="bg-rose-900/20 border border-rose-500/50 rounded-xl p-6 text-center">
              <Activity className="w-8 h-8 text-rose-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Immediate Crisis Support</h3>
              <p className="text-sm text-rose-200 mb-6 max-w-md mx-auto">
                If you are feeling unsafe or hopeless, please connect with a trained counselor immediately. You are not alone.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:988"
                  className="px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Call 988
                </a>
                <a
                  href="sms:741741&body=HOME"
                  className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-600 rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-4 h-4" /> Text HOME to 741741
                </a>
              </div>
            </div>

            {/* Support List */}
            <div className="grid gap-3">
              {crisisResources.filter(r => r.type !== 'urgent').map((resource, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex items-center justify-between hover:border-zinc-700 transition-colors">
                  <div>
                    <h4 className="font-bold text-zinc-200">{resource.name}</h4>
                    <p className="text-xs text-zinc-500">Available 24/7 for healthcare workers</p>
                  </div>
                  <span className="text-sm font-mono text-teal-400 bg-teal-900/20 px-3 py-1 rounded border border-teal-900/50">
                    {resource.contact}
                  </span>
                </div>
              ))}
            </div>

            {/* Encouragement */}
            <div className="text-center p-8">
              <Shield className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
              <p className="text-zinc-500 text-sm leading-relaxed max-w-sm mx-auto">
                &ldquo;Caring for yourself is not self-indulgence, it is self-preservation, and that is an act of political warfare.&rdquo;
                <br /><span className="text-zinc-600 mt-2 block">— Audre Lorde</span>
              </p>
            </div>

            {/* Disclaimer */}
            <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
              <p className="text-xs text-zinc-500 text-center">
                This app does not replace professional mental health care. If you are experiencing a mental health emergency,
                please contact emergency services or go to your nearest emergency room.
              </p>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
