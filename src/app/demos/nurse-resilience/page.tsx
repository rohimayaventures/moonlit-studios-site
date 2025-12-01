'use client';

import { useState, useEffect, useCallback } from 'react';

// Shift debrief prompts
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

// Grounding exercises with detailed steps
const groundingExercises = [
  {
    id: '478',
    name: "4-7-8 Breathing",
    duration: "2 minutes",
    description: "A calming breath pattern that activates your parasympathetic nervous system.",
    steps: [
      { instruction: "Find a comfortable position. Sit or lie down wherever feels safe.", duration: 5 },
      { instruction: "Breathe in slowly through your nose for 4 counts.", duration: 4, action: "inhale" },
      { instruction: "Hold your breath gently for 7 counts.", duration: 7, action: "hold" },
      { instruction: "Exhale completely through your mouth for 8 counts.", duration: 8, action: "exhale" },
      { instruction: "That's one cycle. Let's do three more.", duration: 3 },
      { instruction: "Breathe in for 4...", duration: 4, action: "inhale" },
      { instruction: "Hold for 7...", duration: 7, action: "hold" },
      { instruction: "Exhale for 8...", duration: 8, action: "exhale" },
      { instruction: "Two more. Breathe in for 4...", duration: 4, action: "inhale" },
      { instruction: "Hold for 7...", duration: 7, action: "hold" },
      { instruction: "Exhale for 8...", duration: 8, action: "exhale" },
      { instruction: "Last one. Breathe in for 4...", duration: 4, action: "inhale" },
      { instruction: "Hold for 7...", duration: 7, action: "hold" },
      { instruction: "And release for 8...", duration: 8, action: "exhale" },
      { instruction: "Notice how your body feels now. Take a moment here.", duration: 5 },
    ]
  },
  {
    id: 'bodyscan',
    name: "Body Scan",
    duration: "5 minutes",
    description: "Release tension you're holding from head to toe.",
    steps: [
      { instruction: "Close your eyes or soften your gaze. Take a deep breath.", duration: 5 },
      { instruction: "Bring your attention to the top of your head. Notice any tension.", duration: 8 },
      { instruction: "Let your forehead soften. Unclench your jaw.", duration: 8 },
      { instruction: "Relax your neck. Let your shoulders drop away from your ears.", duration: 10 },
      { instruction: "Notice your arms and hands. You don't have to hold on anymore.", duration: 8 },
      { instruction: "Breathe into your chest. Notice your heartbeat.", duration: 8 },
      { instruction: "Soften your belly. Let go of any tightness.", duration: 8 },
      { instruction: "Relax your lower back. Let it sink into support.", duration: 8 },
      { instruction: "Notice your legs. Let them feel heavy and grounded.", duration: 8 },
      { instruction: "Feel your feet connecting to the floor. You're safe now.", duration: 8 },
      { instruction: "Take three slow breaths. You did hard work today.", duration: 12 },
    ]
  },
  {
    id: '54321',
    name: "5-4-3-2-1 Grounding",
    duration: "3 minutes",
    description: "Use your senses to anchor yourself in the present moment.",
    steps: [
      { instruction: "Look around and name 5 things you can see.", duration: 15 },
      { instruction: "Notice 4 things you can physically feel right now.", duration: 12 },
      { instruction: "Listen for 3 things you can hear.", duration: 10 },
      { instruction: "Identify 2 things you can smell.", duration: 8 },
      { instruction: "Notice 1 thing you can taste.", duration: 6 },
      { instruction: "Take a deep breath. You're here. You're present. You're safe.", duration: 8 },
    ]
  }
];

// Crisis resources
const crisisResources = [
  {
    name: "988 Suicide & Crisis Lifeline",
    contact: "988",
    type: "call/text",
    description: "24/7 crisis support for anyone in distress"
  },
  {
    name: "Crisis Text Line",
    contact: "Text HOME to 741741",
    type: "text",
    description: "Free 24/7 text-based crisis support"
  },
  {
    name: "Dr. Lorna Breen Heroes Foundation",
    contact: "drlornabreen.org",
    type: "website",
    description: "Mental health resources specifically for healthcare workers"
  },
  {
    name: "Employee Assistance Program",
    contact: "Contact your HR department",
    type: "info",
    description: "Free confidential counseling through your employer"
  }
];

// Saved entry type
interface SavedEntry {
  id: string;
  date: string;
  time: string;
  prompt: string;
  entry: string;
}

export default function NurseResilience() {
  const [activeTab, setActiveTab] = useState<'debrief' | 'ground' | 'resources'>('debrief');
  const [currentPrompt, setCurrentPrompt] = useState(debriefPrompts[0]);
  const [debriefEntry, setDebriefEntry] = useState('');
  const [savedEntries, setSavedEntries] = useState<SavedEntry[]>([]);
  const [showSaved, setShowSaved] = useState(false);
  const [saveConfirm, setSaveConfirm] = useState(false);

  // Grounding exercise state
  const [selectedExercise, setSelectedExercise] = useState(groundingExercises[0]);
  const [isExerciseActive, setIsExerciseActive] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [stepProgress, setStepProgress] = useState(0);

  // Load saved entries
  useEffect(() => {
    const saved = localStorage.getItem('nurse-resilience-entries');
    if (saved) {
      setSavedEntries(JSON.parse(saved));
    }
  }, []);

  // Timer for active exercise
  useEffect(() => {
    if (!isExerciseActive) return;

    const step = selectedExercise.steps[currentStepIndex];
    const totalDuration = step.duration * 1000;
    const interval = 50;

    const timer = setInterval(() => {
      setStepProgress(prev => {
        const newProgress = prev + (interval / totalDuration) * 100;
        if (newProgress >= 100) {
          if (currentStepIndex < selectedExercise.steps.length - 1) {
            setCurrentStepIndex(currentStepIndex + 1);
            return 0;
          } else {
            setIsExerciseActive(false);
            return 100;
          }
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isExerciseActive, currentStepIndex, selectedExercise]);

  const handleNewPrompt = () => {
    const otherPrompts = debriefPrompts.filter(p => p !== currentPrompt);
    setCurrentPrompt(otherPrompts[Math.floor(Math.random() * otherPrompts.length)]);
  };

  const handleSaveEntry = () => {
    if (!debriefEntry.trim()) return;

    const newEntry: SavedEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
      prompt: currentPrompt,
      entry: debriefEntry,
    };

    const updated = [newEntry, ...savedEntries];
    setSavedEntries(updated);
    localStorage.setItem('nurse-resilience-entries', JSON.stringify(updated));

    setDebriefEntry('');
    setSaveConfirm(true);
    setTimeout(() => setSaveConfirm(false), 2000);
  };

  const handleDeleteEntry = (id: string) => {
    const updated = savedEntries.filter(e => e.id !== id);
    setSavedEntries(updated);
    localStorage.setItem('nurse-resilience-entries', JSON.stringify(updated));
  };

  const startExercise = () => {
    setCurrentStepIndex(0);
    setStepProgress(0);
    setIsExerciseActive(true);
  };

  const stopExercise = () => {
    setIsExerciseActive(false);
    setCurrentStepIndex(0);
    setStepProgress(0);
  };

  const getCurrentBreathAction = () => {
    if (!isExerciseActive) return null;
    const step = selectedExercise.steps[currentStepIndex];
    return (step as { action?: string }).action || null;
  };

  const breathAction = getCurrentBreathAction();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* App Header */}
      <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-40">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="font-semibold">Resilience</span>
            </div>

            <div className="flex items-center gap-1 bg-slate-700 p-1 rounded-lg">
              {(['debrief', 'ground', 'resources'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all capitalize ${
                    activeTab === tab
                      ? 'bg-slate-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab === 'ground' ? 'Ground' : tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-6">

        {/* Debrief Tab */}
        {activeTab === 'debrief' && (
          <div className="space-y-6">
            {/* Privacy Notice */}
            <div className="flex items-center gap-2 p-3 bg-teal-900/30 border border-teal-700/50 rounded-lg">
              <svg className="w-4 h-4 text-teal-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
              <p className="text-xs text-teal-300">Private and anonymous. Stored only on your device.</p>
            </div>

            {/* Prompt Card */}
            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Reflection Prompt</h2>
                <button
                  onClick={handleNewPrompt}
                  className="text-xs text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-1"
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  New prompt
                </button>
              </div>
              <p className="text-lg text-slate-200 leading-relaxed">{currentPrompt}</p>
            </div>

            {/* Writing Area */}
            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
              <textarea
                value={debriefEntry}
                onChange={(e) => setDebriefEntry(e.target.value)}
                placeholder="Write it out. No one will see this but you..."
                className="w-full h-48 bg-transparent text-slate-200 placeholder-slate-500 resize-none focus:outline-none text-base leading-relaxed"
              />
              <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                <span className="text-xs text-slate-500">
                  {debriefEntry.trim().split(/\s+/).filter(w => w).length} words
                </span>
                <button
                  onClick={handleSaveEntry}
                  disabled={!debriefEntry.trim()}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    debriefEntry.trim()
                      ? 'bg-teal-600 text-white hover:bg-teal-500'
                      : 'bg-slate-700 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  {saveConfirm ? 'Saved' : 'Save Entry'}
                </button>
              </div>
            </div>

            {/* Saved Entries Toggle */}
            {savedEntries.length > 0 && (
              <div>
                <button
                  onClick={() => setShowSaved(!showSaved)}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-300 transition-colors"
                >
                  <svg className={`w-4 h-4 transition-transform ${showSaved ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Past entries ({savedEntries.length})
                </button>

                {showSaved && (
                  <div className="mt-4 space-y-3">
                    {savedEntries.map((entry) => (
                      <div key={entry.id} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                        <div className="flex items-start justify-between mb-2">
                          <p className="text-xs text-slate-500">{entry.date} at {entry.time}</p>
                          <button
                            onClick={() => handleDeleteEntry(entry.id)}
                            className="text-slate-500 hover:text-red-400 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        <p className="text-xs text-teal-400 mb-2 italic">"{entry.prompt}"</p>
                        <p className="text-sm text-slate-300 leading-relaxed">{entry.entry}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Grounding Tab */}
        {activeTab === 'ground' && (
          <div className="space-y-6">
            {/* Exercise Selector */}
            {!isExerciseActive && (
              <div className="grid gap-3">
                {groundingExercises.map((exercise) => (
                  <button
                    key={exercise.id}
                    onClick={() => setSelectedExercise(exercise)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedExercise.id === exercise.id
                        ? 'border-teal-500 bg-teal-900/20'
                        : 'border-slate-700 bg-slate-800 hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-slate-200">{exercise.name}</h3>
                      <span className="text-xs text-slate-500">{exercise.duration}</span>
                    </div>
                    <p className="text-sm text-slate-400">{exercise.description}</p>
                  </button>
                ))}
              </div>
            )}

            {/* Active Exercise Display */}
            {!isExerciseActive ? (
              <button
                onClick={startExercise}
                className="w-full py-4 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-500 transition-colors"
              >
                Begin {selectedExercise.name}
              </button>
            ) : (
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                {/* Breathing Visual */}
                {breathAction && (
                  <div className="flex justify-center mb-8">
                    <div className={`w-32 h-32 rounded-full border-4 transition-all duration-1000 flex items-center justify-center ${
                      breathAction === 'inhale'
                        ? 'border-teal-400 scale-110 bg-teal-900/30'
                        : breathAction === 'hold'
                        ? 'border-amber-400 scale-110 bg-amber-900/30'
                        : 'border-blue-400 scale-90 bg-blue-900/30'
                    }`}>
                      <span className="text-lg font-medium capitalize text-slate-200">{breathAction}</span>
                    </div>
                  </div>
                )}

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-slate-500 mb-2">
                    <span>Step {currentStepIndex + 1} of {selectedExercise.steps.length}</span>
                    <span>{selectedExercise.name}</span>
                  </div>
                  <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-teal-500 transition-all duration-100"
                      style={{ width: `${stepProgress}%` }}
                    />
                  </div>
                </div>

                {/* Current Instruction */}
                <p className="text-lg text-center text-slate-200 leading-relaxed min-h-[80px] flex items-center justify-center">
                  {selectedExercise.steps[currentStepIndex].instruction}
                </p>

                {/* Stop Button */}
                <button
                  onClick={stopExercise}
                  className="w-full mt-6 py-3 border border-slate-600 text-slate-400 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  End Early
                </button>
              </div>
            )}

            {/* Exercise Complete */}
            {!isExerciseActive && currentStepIndex === selectedExercise.steps.length - 1 && stepProgress >= 100 && (
              <div className="p-6 bg-teal-900/20 border border-teal-700/50 rounded-xl text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-teal-600/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-teal-300 font-medium">Exercise Complete</p>
                <p className="text-sm text-slate-400 mt-1">Take a moment to notice how you feel.</p>
              </div>
            )}
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <div className="space-y-6">
            <div className="p-4 bg-red-900/20 border border-red-700/50 rounded-xl">
              <h2 className="font-semibold text-red-300 mb-2">In Crisis?</h2>
              <p className="text-sm text-slate-400 mb-3">
                If you're having thoughts of self-harm or suicide, please reach out now.
              </p>
              <a
                href="tel:988"
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-500 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 988 Now
              </a>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Support Resources</h2>

              {crisisResources.map((resource, i) => (
                <div key={i} className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-slate-200">{resource.name}</h3>
                      <p className="text-xs text-slate-500 mt-1">{resource.description}</p>
                    </div>
                    <span className="text-sm font-medium text-teal-400">{resource.contact}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 bg-slate-800 rounded-xl border border-slate-700">
              <h3 className="font-medium text-slate-200 mb-2">Remember</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Asking for help is not weakness. You spend your shifts caring for others—you deserve
                the same care. If you're struggling, please reach out. You are not alone.
              </p>
            </div>

            <div className="p-4 bg-teal-900/20 border border-teal-700/50 rounded-xl">
              <p className="text-xs text-teal-300 text-center">
                This app does not replace professional mental health care.
                If you're experiencing a mental health emergency, please contact emergency services or go to your nearest emergency room.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
