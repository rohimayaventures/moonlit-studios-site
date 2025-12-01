'use client';

import { useState, useEffect } from 'react';

// Mood options
const moods = [
  { id: 'joyful', label: 'Joyful', color: 'bg-yellow-400', emoji: '' },
  { id: 'content', label: 'Content', color: 'bg-green-400', emoji: '' },
  { id: 'calm', label: 'Calm', color: 'bg-teal-400', emoji: '' },
  { id: 'neutral', label: 'Neutral', color: 'bg-slate-400', emoji: '' },
  { id: 'anxious', label: 'Anxious', color: 'bg-orange-400', emoji: '' },
  { id: 'sad', label: 'Sad', color: 'bg-blue-400', emoji: '' },
  { id: 'frustrated', label: 'Frustrated', color: 'bg-red-400', emoji: '' },
  { id: 'overwhelmed', label: 'Overwhelmed', color: 'bg-purple-400', emoji: '' },
];

// Body areas for somatic check-in
const bodyAreas = [
  { id: 'head', label: 'Head', top: '8%', left: '50%' },
  { id: 'throat', label: 'Throat', top: '18%', left: '50%' },
  { id: 'chest', label: 'Chest', top: '30%', left: '50%' },
  { id: 'stomach', label: 'Stomach', top: '42%', left: '50%' },
  { id: 'shoulders', label: 'Shoulders', top: '24%', left: '50%' },
  { id: 'hands', label: 'Hands', top: '52%', left: '30%' },
  { id: 'legs', label: 'Legs', top: '70%', left: '50%' },
];

// Reflection prompts based on mood
const reflectionPrompts: Record<string, string[]> = {
  joyful: [
    "What contributed to this feeling of joy today?",
    "How can you carry this positive energy forward?",
    "Who or what are you grateful for right now?",
  ],
  content: [
    "What needs are being met that contribute to this contentment?",
    "How does your body feel in this state of ease?",
    "What small pleasures are you noticing today?",
  ],
  calm: [
    "What practices helped you reach this peaceful state?",
    "How can you protect this sense of calm?",
    "What does your ideal calm environment look like?",
  ],
  neutral: [
    "What thoughts are present without strong emotions attached?",
    "Is there anything you're avoiding feeling?",
    "What would help you move toward a more positive state?",
  ],
  anxious: [
    "What specific worries are present right now?",
    "Where do you feel the anxiety in your body?",
    "What's one small thing within your control today?",
  ],
  sad: [
    "What losses or disappointments might be contributing to this sadness?",
    "What comfort do you need right now?",
    "How can you be gentle with yourself today?",
  ],
  frustrated: [
    "What expectations aren't being met?",
    "What boundary might need to be set?",
    "What's one thing you can release control of?",
  ],
  overwhelmed: [
    "What can be removed from your plate right now?",
    "What's the single most important thing to focus on?",
    "Who can you ask for support?",
  ],
};

// Sample journal entries
const sampleEntries = [
  {
    id: 1,
    date: 'November 28, 2024',
    time: '8:15 AM',
    mood: 'calm',
    intensity: 7,
    bodyAreas: ['chest'],
    prompt: "What practices helped you reach this peaceful state?",
    entry: "Morning meditation made a huge difference. Even just 10 minutes of breathing before checking my phone. The house was quiet and I could hear birds outside. I want to make this a daily habit.",
  },
  {
    id: 2,
    date: 'November 27, 2024',
    time: '9:30 PM',
    mood: 'anxious',
    intensity: 6,
    bodyAreas: ['chest', 'stomach'],
    prompt: "Where do you feel the anxiety in your body?",
    entry: "Work presentation tomorrow. Tightness in my chest and that familiar knot in my stomach. Reminded myself that I've prepared well. Going to do some box breathing before bed.",
  },
  {
    id: 3,
    date: 'November 26, 2024',
    time: '2:00 PM',
    mood: 'content',
    intensity: 8,
    bodyAreas: [],
    prompt: "What small pleasures are you noticing today?",
    entry: "Had lunch with an old friend. We laughed about memories from college. Realized I need to prioritize these connections more often. Feeling grateful for the people in my life.",
  },
];

// Weekly mood data for chart
const weeklyMoodData = [
  { day: 'Mon', mood: 'content', intensity: 7 },
  { day: 'Tue', mood: 'anxious', intensity: 6 },
  { day: 'Wed', mood: 'calm', intensity: 8 },
  { day: 'Thu', mood: 'frustrated', intensity: 5 },
  { day: 'Fri', mood: 'content', intensity: 7 },
  { day: 'Sat', mood: 'joyful', intensity: 9 },
  { day: 'Sun', mood: 'calm', intensity: 8 },
];

export default function EmotionJournaling() {
  const [activeTab, setActiveTab] = useState<'journal' | 'history' | 'insights'>('journal');
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [intensity, setIntensity] = useState(5);
  const [selectedBodyAreas, setSelectedBodyAreas] = useState<string[]>([]);
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);
  const [journalEntry, setJournalEntry] = useState('');
  const [entries, setEntries] = useState(sampleEntries);
  const [showSaveConfirm, setShowSaveConfirm] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const handleBodyAreaToggle = (areaId: string) => {
    setSelectedBodyAreas(prev =>
      prev.includes(areaId)
        ? prev.filter(id => id !== areaId)
        : [...prev, areaId]
    );
  };

  const handleSaveEntry = () => {
    if (!selectedMood || !journalEntry.trim()) return;

    const newEntry = {
      id: entries.length + 1,
      date: currentTime.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      time: currentTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
      mood: selectedMood,
      intensity,
      bodyAreas: selectedBodyAreas,
      prompt: selectedPrompt || '',
      entry: journalEntry,
    };

    setEntries([newEntry, ...entries]);
    setShowSaveConfirm(true);

    // Reset form
    setTimeout(() => {
      setSelectedMood(null);
      setIntensity(5);
      setSelectedBodyAreas([]);
      setSelectedPrompt(null);
      setJournalEntry('');
      setShowSaveConfirm(false);
    }, 2000);
  };

  const handleExport = () => {
    const exportData = entries.map(entry => ({
      Date: entry.date,
      Time: entry.time,
      Mood: entry.mood,
      Intensity: `${entry.intensity}/10`,
      'Body Sensations': entry.bodyAreas.join(', ') || 'None noted',
      Prompt: entry.prompt,
      Entry: entry.entry,
    }));

    const csv = [
      Object.keys(exportData[0]).join(','),
      ...exportData.map(row => Object.values(row).map(v => `"${v}"`).join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `journal-export-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const getMoodColor = (moodId: string) => {
    return moods.find(m => m.id === moodId)?.color || 'bg-slate-400';
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="font-semibold text-slate-800">Reflect</span>
            </div>

            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
              {(['journal', 'history', 'insights'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all capitalize ${
                    activeTab === tab
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6">

        {/* Journal Tab */}
        {activeTab === 'journal' && (
          <div className="space-y-6">
            {/* Date/Time Header */}
            <div className="text-center">
              <p className="text-sm text-slate-500">
                {currentTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </p>
              <p className="text-xs text-slate-400">
                {currentTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
              </p>
            </div>

            {/* Mood Selection */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-sm font-semibold text-slate-700 mb-4">How are you feeling?</h2>
              <div className="grid grid-cols-4 gap-3">
                {moods.map((mood) => (
                  <button
                    key={mood.id}
                    onClick={() => {
                      setSelectedMood(mood.id);
                      setSelectedPrompt(null);
                    }}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      selectedMood === mood.id
                        ? 'border-slate-800 bg-slate-50'
                        : 'border-transparent bg-slate-50 hover:bg-slate-100'
                    }`}
                  >
                    <div className={`w-8 h-8 mx-auto rounded-full ${mood.color} mb-2`}></div>
                    <span className="text-xs font-medium text-slate-700">{mood.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Intensity Slider */}
            {selectedMood && (
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-semibold text-slate-700">Intensity</h2>
                  <span className="text-2xl font-bold text-slate-800">{intensity}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={intensity}
                  onChange={(e) => setIntensity(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span>Mild</span>
                  <span>Moderate</span>
                  <span>Intense</span>
                </div>
              </div>
            )}

            {/* Somatic Check-in */}
            {selectedMood && (
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h2 className="text-sm font-semibold text-slate-700 mb-4">Where do you feel it in your body?</h2>
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Body outline */}
                  <div className="relative w-32 h-64 mx-auto sm:mx-0 bg-slate-100 rounded-full flex-shrink-0">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-48 bg-slate-200 rounded-full"></div>
                    </div>
                    {/* Head */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-12 bg-slate-200 rounded-full"></div>

                    {/* Clickable areas */}
                    {bodyAreas.map((area) => (
                      <button
                        key={area.id}
                        onClick={() => handleBodyAreaToggle(area.id)}
                        className={`absolute w-6 h-6 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all ${
                          selectedBodyAreas.includes(area.id)
                            ? `${getMoodColor(selectedMood)} ring-2 ring-offset-2 ring-slate-400`
                            : 'bg-white border-2 border-slate-300 hover:border-slate-400'
                        }`}
                        style={{ top: area.top, left: area.left }}
                        title={area.label}
                      />
                    ))}
                  </div>

                  {/* Body area labels */}
                  <div className="flex-1">
                    <p className="text-xs text-slate-500 mb-3">Tap areas where you notice sensations:</p>
                    <div className="flex flex-wrap gap-2">
                      {bodyAreas.map((area) => (
                        <button
                          key={area.id}
                          onClick={() => handleBodyAreaToggle(area.id)}
                          className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                            selectedBodyAreas.includes(area.id)
                              ? 'bg-teal-100 text-teal-800 font-medium'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {area.label}
                        </button>
                      ))}
                    </div>
                    {selectedBodyAreas.length > 0 && (
                      <p className="text-xs text-slate-500 mt-3">
                        Selected: {selectedBodyAreas.map(id => bodyAreas.find(a => a.id === id)?.label).join(', ')}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Reflection Prompt */}
            {selectedMood && (
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h2 className="text-sm font-semibold text-slate-700 mb-4">Reflection prompts</h2>
                <div className="space-y-2">
                  {reflectionPrompts[selectedMood]?.map((prompt, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedPrompt(prompt)}
                      className={`w-full text-left p-3 rounded-lg text-sm transition-all ${
                        selectedPrompt === prompt
                          ? 'bg-teal-50 border-2 border-teal-200 text-teal-800'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Journal Entry */}
            {selectedMood && (
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h2 className="text-sm font-semibold text-slate-700 mb-4">
                  {selectedPrompt || "Write your thoughts..."}
                </h2>
                <textarea
                  value={journalEntry}
                  onChange={(e) => setJournalEntry(e.target.value)}
                  placeholder="Start writing..."
                  className="w-full h-40 p-4 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                />
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-slate-400">{journalEntry.length} characters</span>
                  <button
                    onClick={handleSaveEntry}
                    disabled={!journalEntry.trim()}
                    className={`px-6 py-2 rounded-lg font-medium transition-all ${
                      journalEntry.trim()
                        ? 'bg-teal-600 text-white hover:bg-teal-700'
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    {showSaveConfirm ? 'Saved!' : 'Save Entry'}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-800">Journal History</h2>
              <button
                onClick={handleExport}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-teal-700 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Export for Therapy
              </button>
            </div>

            {entries.map((entry) => (
              <div key={entry.id} className="bg-white rounded-xl border border-slate-200 p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-medium text-slate-800">{entry.date}</p>
                    <p className="text-xs text-slate-500">{entry.time}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${getMoodColor(entry.mood)}`}></div>
                    <span className="text-sm font-medium text-slate-700 capitalize">{entry.mood}</span>
                    <span className="text-xs text-slate-400">({entry.intensity}/10)</span>
                  </div>
                </div>

                {entry.bodyAreas.length > 0 && (
                  <div className="mb-3">
                    <p className="text-xs text-slate-500 mb-1">Body sensations:</p>
                    <div className="flex gap-1">
                      {entry.bodyAreas.map((area) => (
                        <span key={area} className="px-2 py-0.5 bg-slate-100 rounded text-xs text-slate-600 capitalize">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {entry.prompt && (
                  <p className="text-sm text-slate-500 italic mb-2">"{entry.prompt}"</p>
                )}

                <p className="text-slate-700 text-sm leading-relaxed">{entry.entry}</p>
              </div>
            ))}
          </div>
        )}

        {/* Insights Tab */}
        {activeTab === 'insights' && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-slate-800">Your Insights</h2>

            {/* Weekly Mood Chart */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-sm font-semibold text-slate-700 mb-4">This Week's Moods</h3>
              <div className="flex items-end justify-between h-40 gap-2">
                {weeklyMoodData.map((day, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center">
                    <div
                      className={`w-full rounded-t-lg ${getMoodColor(day.mood)} transition-all`}
                      style={{ height: `${day.intensity * 10}%` }}
                    ></div>
                    <span className="text-xs text-slate-500 mt-2">{day.day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mood Distribution */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-sm font-semibold text-slate-700 mb-4">Mood Distribution</h3>
              <div className="space-y-3">
                {['calm', 'content', 'joyful', 'anxious'].map((mood) => {
                  const count = entries.filter(e => e.mood === mood).length;
                  const percentage = (count / entries.length) * 100;
                  return (
                    <div key={mood} className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${getMoodColor(mood)}`}></div>
                      <span className="text-sm text-slate-700 capitalize w-24">{mood}</span>
                      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${getMoodColor(mood)} transition-all`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-slate-500 w-8">{count}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Body Patterns */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-sm font-semibold text-slate-700 mb-4">Common Body Sensations</h3>
              <div className="flex flex-wrap gap-2">
                {bodyAreas.map((area) => {
                  const count = entries.filter(e => e.bodyAreas.includes(area.id)).length;
                  return (
                    <div
                      key={area.id}
                      className={`px-3 py-2 rounded-lg ${count > 0 ? 'bg-teal-50 text-teal-800' : 'bg-slate-50 text-slate-400'}`}
                    >
                      <span className="font-medium">{area.label}</span>
                      {count > 0 && <span className="ml-2 text-xs">({count})</span>}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Export Section */}
            <div className="bg-gradient-to-r from-teal-500 to-emerald-600 rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2">Share with Your Therapist</h3>
              <p className="text-sm text-teal-100 mb-4">
                Export your journal entries as a CSV file to share patterns and insights with your mental health provider.
              </p>
              <button
                onClick={handleExport}
                className="px-5 py-2 bg-white text-teal-700 font-medium rounded-lg hover:bg-teal-50 transition-colors"
              >
                Export Journal Data
              </button>
            </div>

            {/* Patterns & Tips */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-sm font-semibold text-slate-700 mb-4">Patterns We've Noticed</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800">Morning entries tend to be calmer</p>
                    <p className="text-xs text-slate-500">Your entries before 10am show higher contentment levels.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800">Chest tension appears with anxiety</p>
                    <p className="text-xs text-slate-500">You frequently note chest sensations when feeling anxious.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
