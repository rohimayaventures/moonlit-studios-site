'use client';

import React, { useState } from 'react';
import {
  BookHeart,
  Calendar,
  BarChart3,
  Download,
  Brain,
  Sparkles,
  X,
  TrendingUp,
  MessageCircle,
  ChevronRight
} from 'lucide-react';

// --- Configuration ---
const moods = [
  { id: 'joyful', label: 'Joyful', color: 'bg-yellow-400', ring: 'ring-yellow-400/50' },
  { id: 'content', label: 'Content', color: 'bg-emerald-400', ring: 'ring-emerald-400/50' },
  { id: 'calm', label: 'Calm', color: 'bg-teal-400', ring: 'ring-teal-400/50' },
  { id: 'neutral', label: 'Neutral', color: 'bg-slate-400', ring: 'ring-slate-400/50' },
  { id: 'anxious', label: 'Anxious', color: 'bg-orange-400', ring: 'ring-orange-400/50' },
  { id: 'sad', label: 'Sad', color: 'bg-blue-400', ring: 'ring-blue-400/50' },
  { id: 'frustrated', label: 'Frustrated', color: 'bg-red-400', ring: 'ring-red-400/50' },
  { id: 'overwhelmed', label: 'Overwhelmed', color: 'bg-purple-400', ring: 'ring-purple-400/50' },
];

const reflectionPrompts: Record<string, string[]> = {
  joyful: [
    "What contributed to this feeling of joy today?",
    "How can you carry this positive energy forward?",
  ],
  content: [
    "What needs are being met that contribute to this contentment?",
    "What small pleasures are you noticing today?",
  ],
  calm: [
    "What practices helped you reach this peaceful state?",
    "How does your body feel in this state of ease?",
  ],
  neutral: [
    "What thoughts are present without strong emotions attached?",
    "What would help you move toward a more positive state?",
  ],
  anxious: [
    "What specific worries are present right now?",
    "Where do you feel the anxiety in your body?",
  ],
  sad: [
    "What comfort do you need right now?",
    "How can you be gentle with yourself today?",
  ],
  frustrated: [
    "What expectations aren't being met?",
    "What's one thing you can release control of?",
  ],
  overwhelmed: [
    "What can be removed from your plate right now?",
    "What's the single most important thing to focus on?",
  ],
};

// Mock Initial Data
const initialEntries = [
  {
    id: 1,
    date: new Date(Date.now() - 86400000 * 2).toLocaleDateString(),
    time: '08:30 AM',
    mood: 'anxious',
    intensity: 6,
    bodyAreas: ['chest', 'shoulders'],
    entry: "Big presentation today. Feeling tight.",
    prompt: "Where do you feel the anxiety in your body?"
  },
  {
    id: 2,
    date: new Date(Date.now() - 86400000).toLocaleDateString(),
    time: '09:00 PM',
    mood: 'content',
    intensity: 8,
    bodyAreas: [],
    entry: "Presentation went well. Relaxing now.",
    prompt: "What needs are being met?"
  }
];

export default function EmotionJournalingDemo() {
  const [activeTab, setActiveTab] = useState<'journal' | 'history' | 'insights'>('journal');
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [intensity, setIntensity] = useState(5);
  const [selectedBodyAreas, setSelectedBodyAreas] = useState<string[]>([]);
  const [journalEntry, setJournalEntry] = useState('');
  const [entries, setEntries] = useState(initialEntries);
  const [showSaveConfirm, setShowSaveConfirm] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState<string | null>(null);
  const [filterMood, setFilterMood] = useState<string | null>(null);

  // --- Logic ---
  const handleBodyClick = (area: string) => {
    setSelectedBodyAreas(prev =>
      prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area]
    );
  };

  const handleSave = () => {
    if (!selectedMood) return;

    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      mood: selectedMood,
      intensity,
      bodyAreas: selectedBodyAreas,
      entry: journalEntry,
      prompt: currentPrompt || ''
    };

    setEntries([newEntry, ...entries]);
    setShowSaveConfirm(true);

    setTimeout(() => {
      setSelectedMood(null);
      setJournalEntry('');
      setSelectedBodyAreas([]);
      setIntensity(5);
      setCurrentPrompt(null);
      setShowSaveConfirm(false);
      setActiveTab('history');
    }, 1500);
  };

  // Get mood color helper
  const getMoodColor = (id: string) => moods.find(m => m.id === id)?.color || 'bg-slate-500';

  // Filter entries for history tab
  const displayedEntries = filterMood
    ? entries.filter(e => e.mood === filterMood)
    : entries;

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-200 font-sans selection:bg-teal-500/30 relative">

      {/* Header */}
      <header className="bg-zinc-900/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-teal-900/20">
              <BookHeart className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center">
              <h1 className="font-bold text-lg tracking-tight">Inner<span className="text-teal-400">Voice</span></h1>
              {/* Live Indicator */}
              <span className="flex items-center gap-1 text-emerald-400 ml-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-semibold">Live</span>
              </span>
            </div>
          </div>

          <nav className="flex bg-white/5 p-1 rounded-lg">
            {[
              { id: 'journal', icon: Sparkles, label: 'Reflect' },
              { id: 'history', icon: Calendar, label: 'History' },
              { id: 'insights', icon: BarChart3, label: 'Insights' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'journal' | 'history' | 'insights')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === tab.id
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 pb-24">

        {/* --- JOURNAL TAB --- */}
        {activeTab === 'journal' && (
          <div className="space-y-8 animate-fade-in">

            {/* 1. Mood Selector */}
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">How are you feeling right now?</h2>
              <div className="grid grid-cols-4 gap-3">
                {moods.map(mood => (
                  <button
                    key={mood.id}
                    onClick={() => {
                      setSelectedMood(mood.id);
                      const prompts = reflectionPrompts[mood.id];
                      setCurrentPrompt(prompts[Math.floor(Math.random() * prompts.length)]);
                    }}
                    className={`p-3 rounded-xl border transition-all duration-200 flex flex-col items-center gap-2 ${
                      selectedMood === mood.id
                        ? `bg-zinc-800 border-teal-500/50 shadow-lg shadow-teal-900/20 scale-105 ring-1 ${mood.ring}`
                        : 'bg-zinc-900 border-white/5 hover:bg-zinc-800 hover:border-white/10'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full ${mood.color} shadow-inner`} />
                    <span className="text-xs font-medium text-slate-300">{mood.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {selectedMood && (
              <div className="space-y-8 animate-fade-in">

                {/* 2. Intensity Slider */}
                <div className="bg-zinc-900/50 rounded-2xl p-6 border border-white/5">
                  <div className="flex justify-between mb-4">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Intensity</label>
                    <span className="text-2xl font-bold text-teal-400">{intensity}<span className="text-sm text-slate-500">/10</span></span>
                  </div>
                  <input
                    type="range"
                    min="1" max="10"
                    value={intensity}
                    onChange={(e) => setIntensity(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-teal-500"
                  />
                  <div className="flex justify-between mt-2 text-xs text-slate-500">
                    <span>Mild</span>
                    <span>Moderate</span>
                    <span>Overwhelming</span>
                  </div>
                </div>

                {/* 3. Somatic Body Map (SVG) */}
                <div className="bg-zinc-900/50 rounded-2xl p-6 border border-white/5 flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Somatic Check-in</h2>
                    <p className="text-sm text-slate-500 mb-4">Tap where you feel this emotion in your body.</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedBodyAreas.map(area => (
                        <span key={area} className="px-3 py-1 rounded-full bg-teal-900/30 border border-teal-500/30 text-teal-300 text-xs flex items-center gap-2">
                          {area} <X className="w-3 h-3 cursor-pointer" onClick={() => handleBodyClick(area)} />
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interactive SVG Body */}
                  <div className="relative h-64 w-32 flex-shrink-0">
                    <svg viewBox="0 0 100 200" className="w-full h-full drop-shadow-2xl">
                      {/* Silhouette */}
                      <path
                        d="M50,10 C60,10 65,18 65,28 C65,35 60,40 55,42 L65,45 L75,50 L85,80 L80,85 L65,65 L65,110 L75,180 L60,190 L50,130 L40,190 L25,180 L35,110 L35,65 L20,85 L15,80 L25,50 L35,45 L45,42 C40,40 35,35 35,28 C35,18 40,10 50,10 Z"
                        fill="#27272a"
                        stroke="#3f3f46"
                        strokeWidth="1"
                      />
                      {/* Clickable Zones */}
                      <circle cx="50" cy="25" r="12" fill={selectedBodyAreas.includes('head') ? '#2dd4bf' : 'transparent'} className="cursor-pointer hover:fill-white/10 transition-colors" onClick={() => handleBodyClick('head')} />
                      <rect x="40" y="45" width="20" height="25" fill={selectedBodyAreas.includes('chest') ? '#2dd4bf' : 'transparent'} className="cursor-pointer hover:fill-white/10 transition-colors" onClick={() => handleBodyClick('chest')} />
                      <rect x="40" y="75" width="20" height="25" fill={selectedBodyAreas.includes('stomach') ? '#2dd4bf' : 'transparent'} className="cursor-pointer hover:fill-white/10 transition-colors" onClick={() => handleBodyClick('stomach')} />
                      <circle cx="20" cy="80" r="8" fill={selectedBodyAreas.includes('hands') ? '#2dd4bf' : 'transparent'} className="cursor-pointer hover:fill-white/10 transition-colors" onClick={() => handleBodyClick('hands')} />
                      <circle cx="80" cy="80" r="8" fill={selectedBodyAreas.includes('hands') ? '#2dd4bf' : 'transparent'} className="cursor-pointer hover:fill-white/10 transition-colors" onClick={() => handleBodyClick('hands')} />
                    </svg>
                  </div>
                </div>

                {/* 4. Reflection Prompt */}
                <div className="bg-zinc-900/50 rounded-2xl p-6 border border-white/5">
                  <div className="flex items-center gap-2 mb-4">
                    <Brain className="w-4 h-4 text-indigo-400" />
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">AI Reflection Prompt</span>
                  </div>
                  <p className="text-lg text-slate-200 font-medium mb-4 italic">&ldquo;{currentPrompt}&rdquo;</p>
                  <textarea
                    value={journalEntry}
                    onChange={(e) => setJournalEntry(e.target.value)}
                    placeholder="Start writing here..."
                    className="w-full h-32 bg-black/20 border border-white/10 rounded-xl p-4 text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-teal-500/50 transition-all resize-none"
                  />
                </div>

                {/* Save Button */}
                <button
                  onClick={handleSave}
                  disabled={!journalEntry}
                  className="w-full py-4 bg-teal-600 hover:bg-teal-500 text-white rounded-xl font-bold tracking-wide transition-all shadow-lg shadow-teal-900/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {showSaveConfirm ? <span className="text-white">Saved Successfully!</span> : <span>Save Entry</span>}
                </button>
              </div>
            )}
          </div>
        )}

        {/* --- HISTORY TAB --- */}
        {activeTab === 'history' && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-white">
                {filterMood ? `Entries tagged '${filterMood}'` : 'Recent Entries'}
                {filterMood && <button onClick={() => setFilterMood(null)} className="ml-2 text-xs text-teal-400 hover:underline">(Clear Filter)</button>}
              </h2>
              <button className="text-xs font-bold text-teal-400 hover:text-teal-300 flex items-center gap-1">
                <Download className="w-3 h-3" /> Export PDF
              </button>
            </div>

            {displayedEntries.length === 0 ? (
               <p className="text-slate-500 text-center py-8">No entries found.</p>
            ) : (
               displayedEntries.map(entry => (
                <div key={entry.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${getMoodColor(entry.mood)}`} />
                      <div>
                        <p className="text-sm font-bold text-slate-200 capitalize">{entry.mood}</p>
                        <p className="text-xs text-slate-500">{entry.date} &bull; {entry.time}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-600 bg-zinc-950 px-2 py-1 rounded">
                      Intensity: {entry.intensity}
                    </span>
                  </div>
                  {entry.bodyAreas.length > 0 && (
                    <div className="flex gap-2 mb-3">
                      {entry.bodyAreas.map(area => (
                        <span key={area} className="text-[10px] px-2 py-0.5 bg-zinc-800 text-slate-400 rounded-full capitalize">
                          {area}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {entry.entry}
                  </p>
                </div>
              ))
            )}
          </div>
        )}

        {/* --- INSIGHTS TAB --- */}
        {activeTab === 'insights' && (
          <div className="space-y-6 animate-fade-in">

            {/* Weekly Trend (Resilience Pulse) */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-teal-400" /> Weekly Mood Pattern
              </h3>
              <div className="h-40 flex items-end justify-between gap-2 relative">
                {/* Grid lines for visual reference */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                   <div className="border-t border-zinc-800/50 w-full h-px"></div>
                   <div className="border-t border-zinc-800/50 w-full h-px"></div>
                   <div className="border-t border-zinc-800/50 w-full h-px"></div>
                   <div className="border-t border-zinc-800/50 w-full h-px"></div>
                </div>

                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
                  // Mock heights for visual demo
                  const heights = [45, 60, 35, 80, 55, 70, 65];
                  const colors = ['bg-teal-500', 'bg-blue-500', 'bg-yellow-500', 'bg-emerald-500', 'bg-orange-500', 'bg-teal-500', 'bg-blue-500'];

                  return (
                    <div key={day} className="flex-1 flex flex-col items-center gap-2 group z-10">
                      <div
                        className={`w-full rounded-t-sm opacity-60 group-hover:opacity-100 transition-all ${colors[i]}`}
                        style={{ height: `${heights[i]}%` }}
                      />
                      <span className="text-xs text-slate-600 font-mono">{day}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Insight Cards (Clickable) */}
            <div className="grid sm:grid-cols-2 gap-4">
              <button
                onClick={() => { setFilterMood('anxious'); setActiveTab('history'); }}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 cursor-pointer hover:bg-zinc-800/80 transition-colors group text-left"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-purple-400" />
                    <h4 className="text-sm font-bold text-slate-200 group-hover:text-white">Top Trigger</h4>
                  </div>
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-slate-400" />
                </div>
                <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300">
                  &ldquo;Chest tightness&rdquo; appears in 80% of your &lsquo;Anxious&rsquo; entries. Tap to review.
                </p>
              </button>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <h4 className="text-sm font-bold text-slate-200">Resilience Win</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  You&apos;ve logged 3 &lsquo;Joyful&rsquo; or &lsquo;Content&rsquo; entries this week, up from 1 last week. Keep it up!
                </p>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* AI Coach Chat Bubble (Floating) */}
      <div className="fixed bottom-6 right-6 z-50">
         <button
            className="w-12 h-12 bg-teal-600 rounded-full shadow-lg shadow-teal-900/50 flex items-center justify-center text-white hover:scale-110 transition-transform hover:bg-teal-500 group"
            title="Ask AI Coach"
         >
            <MessageCircle className="w-6 h-6" />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-zinc-800 text-slate-200 text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-zinc-700">
               Try Box Breathing now?
            </span>
         </button>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 py-4 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-slate-500">
            InnerVoice.ai | Demo for Moonlit Studios Portfolio
          </p>
        </div>
      </footer>
    </div>
  );
}
