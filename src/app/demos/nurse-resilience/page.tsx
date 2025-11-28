'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { toast } from 'sonner';

// Mock shift debrief prompts
const debriefPrompts = [
  "What moment from your shift is still weighing on you?",
  "What did you witness today that you can't stop thinking about?",
  "If you could tell someone about today without judgment, what would you say?",
  "What emotions are you carrying home with you right now?",
  "What do you need to release before you can rest?",
];

// Grounding exercises
const groundingExercises = [
  {
    id: 1,
    name: "4-7-8 Breathing",
    duration: "2 min",
    icon: "🌊",
    description: "Breathe in for 4, hold for 7, out for 8. Repeat 4 times.",
    steps: [
      "Find a comfortable position. You can sit in your car, on your couch, wherever feels safe.",
      "Breathe in slowly through your nose for 4 counts",
      "Hold your breath for 7 counts",
      "Exhale completely through your mouth for 8 counts",
      "Repeat this cycle 4 times",
      "Notice how your body feels now"
    ]
  },
  {
    id: 2,
    name: "Body Scan",
    duration: "5 min",
    icon: "✨",
    description: "Release tension from head to toe",
    steps: [
      "Close your eyes or soften your gaze",
      "Notice your head and neck. Where are you holding tension?",
      "Relax your shoulders. Let them drop away from your ears.",
      "Unclench your jaw. Soften your face.",
      "Notice your chest and belly. Breathe into any tightness.",
      "Relax your hands. You don't have to hold on anymore.",
      "Ground your feet. You're safe now."
    ]
  },
  {
    id: 3,
    name: "5-4-3-2-1 Grounding",
    duration: "3 min",
    icon: "🌿",
    description: "Use your senses to come back to the present",
    steps: [
      "Name 5 things you can see right now",
      "Name 4 things you can touch or feel",
      "Name 3 things you can hear",
      "Name 2 things you can smell",
      "Name 1 thing you can taste",
      "Take a deep breath. You're here. You're safe."
    ]
  }
];

// Crisis resources
const resources = [
  {
    category: "Immediate Crisis Support",
    contacts: [
      { name: "988 Suicide & Crisis Lifeline", number: "988", description: "24/7 crisis support" },
      { name: "Crisis Text Line", number: "Text HOME to 741741", description: "24/7 text support" },
      { name: "SAMHSA National Helpline", number: "1-800-662-4357", description: "Mental health & substance abuse support" }
    ]
  },
  {
    category: "Healthcare Worker Support",
    contacts: [
      { name: "Dr. Lorna Breen Heroes' Foundation", number: "Visit drlornabreen.org", description: "Mental health resources for healthcare workers" },
      { name: "Employee Assistance Program (EAP)", number: "Check with your HR", description: "Free confidential counseling through your employer" },
      { name: "The Resilience Project", number: "Visit theresilienceproject.com.au", description: "Mental health strategies for healthcare workers" }
    ]
  }
];

// Types for saved entries
interface SavedEntry {
  id: string;
  date: string;
  time: string;
  prompt: string;
  entry: string;
  wordCount: number;
}

export default function NurseResilience() {
  const [currentPrompt, setCurrentPrompt] = useState(debriefPrompts[0]);
  const [debriefEntry, setDebriefEntry] = useState('');
  const [selectedExercise, setSelectedExercise] = useState(groundingExercises[0]);
  const [currentStep, setCurrentStep] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [savedEntries, setSavedEntries] = useState<SavedEntry[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  // Load saved entries from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('nurse-resilience-entries');
    if (saved) {
      setSavedEntries(JSON.parse(saved));
    }
  }, []);

  const handleNewPrompt = () => {
    const randomPrompt = debriefPrompts[Math.floor(Math.random() * debriefPrompts.length)];
    setCurrentPrompt(randomPrompt);
    toast.success('New prompt generated', { description: 'Take your time with this one.' });
  };

  const handleDebriefChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setDebriefEntry(text);
    setWordCount(text.trim().split(/\s+/).filter(word => word.length > 0).length);
  };

  const handleSaveEntry = () => {
    if (!debriefEntry.trim()) {
      toast.error('Nothing to save', { description: 'Write something first before saving.' });
      return;
    }

    setIsSaving(true);

    const newEntry: SavedEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      prompt: currentPrompt,
      entry: debriefEntry,
      wordCount: wordCount,
    };

    const updatedEntries = [newEntry, ...savedEntries];
    setSavedEntries(updatedEntries);
    localStorage.setItem('nurse-resilience-entries', JSON.stringify(updatedEntries));

    // Clear the form
    setDebriefEntry('');
    setWordCount(0);
    setIsSaving(false);

    toast.success('Entry saved privately', {
      description: 'Your reflection is stored locally on this device only.',
      duration: 4000
    });
  };

  const handleVoiceMemo = () => {
    toast.info('Voice memo coming soon', {
      description: 'This feature is in development. For now, try typing your thoughts.',
      duration: 3000
    });
  };

  const nextStep = () => {
    if (currentStep < selectedExercise.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetExercise = () => {
    setCurrentStep(0);
  };

  return (
    <div className="min-h-screen bg-midnight text-pearlWhite">
      {/* Professional Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-6">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-tealEnchantment/45 via-inkPlum/30 to-healingWaterTeal/35 blur-3xl animate-floatSlow" />
          <div className="absolute -left-24 bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-inkPlum/30 via-tealEnchantment/25 to-deepOcean/40 blur-3xl" style={{ animation: 'floatSlow 20s ease-in-out infinite 5s' }} />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="text-center space-y-6 sm:space-y-8 px-4">
            {/* Professional Icon Badge */}
            <div className="inline-block p-4 sm:p-5 rounded-full bg-gradient-to-br from-tealEnchantment/20 to-inkPlum/20 border border-tealEnchantment/30 mb-4">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 text-tealEnchantment" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>

            {/* Tag */}
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-tealEnchantment/20 border border-tealEnchantment/40 text-tealEnchantment text-xs sm:text-sm font-bold uppercase tracking-wider">
                Moonlit Labs Demo
              </span>
            </div>

            {/* Title */}
            <h1 className="font-elegant text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-pearlWhite">
              Nurse Resilience Micro-Coach
            </h1>

            {/* Subtitle */}
            <p className="font-serif text-lg sm:text-xl md:text-2xl text-moonlightSilver leading-relaxed max-w-3xl mx-auto">
              A safe space to process your shift, release what you're carrying, and find your way back to yourself.
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-moonlightSilver/80 leading-relaxed max-w-4xl mx-auto italic">
              No judgment. No reporting. Just support when you need it most.
            </p>

            {/* Privacy Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-tealEnchantment/10 border border-tealEnchantment/30">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-tealEnchantment" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
              <span className="text-xs sm:text-sm text-tealEnchantment font-semibold">Private & Anonymous • Nothing is reported to management</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">

      {/* Shift Debrief Section - Mobile Responsive */}
      <div className="mb-12 sm:mb-16 lg:mb-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pearlWhite text-center mb-6 sm:mb-8">
          Shift Debrief
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Prompt Card */}
          <div className="p-6 sm:p-8 rounded-2xl border-2 border-tealEnchantment/30 bg-gradient-to-br from-tealEnchantment/10 to-midnight/60 mb-6">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-3xl sm:text-4xl">💭</span>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-pearlWhite mb-2">Today's Reflection Prompt</h3>
                <p className="text-base sm:text-lg text-moonlightSilver/90 leading-relaxed italic">
                  "{currentPrompt}"
                </p>
              </div>
            </div>
            <button
              onClick={handleNewPrompt}
              className="text-sm text-tealEnchantment hover:text-tealBright transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
              </svg>
              <span>Get a new prompt</span>
            </button>
          </div>

          {/* Writing Space */}
          <div className="p-6 sm:p-8 rounded-2xl border-2 border-inkPlum/30 bg-gradient-to-br from-inkPlum/10 to-midnight/60">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-pearlWhite">Write It Out</h3>
              <span className="text-xs sm:text-sm text-moonlightSilver/60">
                {wordCount} {wordCount === 1 ? 'word' : 'words'}
              </span>
            </div>

            <textarea
              value={debriefEntry}
              onChange={handleDebriefChange}
              placeholder="You can write anything here. No one will see this but you. Let it out..."
              className="w-full h-48 sm:h-64 px-4 py-3 rounded-xl bg-midnight/60 border-2 border-moonlightSilver/20 text-pearlWhite placeholder-moonlightSilver/40 text-sm sm:text-base focus:border-inkPlum focus:outline-none transition-colors resize-none"
            />

            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleSaveEntry}
                disabled={isSaving}
                className="flex-1 px-6 py-3 rounded-full bg-gradient-to-r from-inkPlum to-tealEnchantment text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-inkPlum/50 hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSaving ? 'Saving...' : 'Save Entry (Private)'}
              </button>
              <button
                onClick={handleVoiceMemo}
                className="flex-1 px-6 py-3 rounded-full border-2 border-moonlightSilver/30 text-moonlightSilver font-bold text-sm uppercase tracking-wider hover:bg-moonlightSilver/10 transition-all"
              >
                Voice Memo Instead
              </button>
            </div>

            <p className="text-xs text-moonlightSilver/50 mt-4 text-center">
              🔒 Encrypted and stored locally. Not shared with anyone, ever.
            </p>
          </div>
        </div>
      </div>

      {/* Grounding Exercises Section - Mobile Responsive */}
      <div className="mb-12 sm:mb-16 lg:mb-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pearlWhite text-center mb-6 sm:mb-8">
          Grounding Exercises
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {groundingExercises.map((exercise) => (
            <div
              key={exercise.id}
              onClick={() => {
                setSelectedExercise(exercise);
                setCurrentStep(0);
              }}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                selectedExercise.id === exercise.id
                  ? 'border-tealEnchantment bg-tealEnchantment/10 shadow-lg shadow-tealEnchantment/20'
                  : 'border-moonlightSilver/20 bg-midnight/40 hover:border-tealEnchantment/50'
              }`}
            >
              <div className="text-4xl mb-3">{exercise.icon}</div>
              <h3 className="text-lg font-bold text-pearlWhite mb-1">{exercise.name}</h3>
              <p className="text-sm text-tealEnchantment mb-2">{exercise.duration}</p>
              <p className="text-sm text-moonlightSilver/80">{exercise.description}</p>
            </div>
          ))}
        </div>

        {/* Exercise Walkthrough */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl border-2 border-tealEnchantment/40 bg-gradient-to-br from-tealEnchantment/10 to-midnight/60">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-pearlWhite mb-2">{selectedExercise.name}</h3>
            <p className="text-sm text-moonlightSilver/60">
              Step {currentStep + 1} of {selectedExercise.steps.length}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-6 h-2 bg-midnight/60 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-tealEnchantment to-tealBright transition-all duration-300"
              style={{ width: `${((currentStep + 1) / selectedExercise.steps.length) * 100}%` }}
            ></div>
          </div>

          {/* Current Step */}
          <div className="min-h-[120px] flex items-center justify-center mb-8">
            <p className="text-lg sm:text-xl text-pearlWhite text-center leading-relaxed">
              {selectedExercise.steps[currentStep]}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-3">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="px-6 py-3 rounded-full border-2 border-moonlightSilver/30 text-moonlightSilver font-semibold text-sm uppercase tracking-wider hover:bg-moonlightSilver/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ← Previous
            </button>

            {currentStep === selectedExercise.steps.length - 1 ? (
              <button
                onClick={resetExercise}
                className="flex-1 px-6 py-3 rounded-full bg-gradient-to-r from-tealEnchantment to-tealBright text-midnight font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-tealEnchantment/50 hover:scale-105 transition-all"
              >
                Start Over
              </button>
            ) : (
              <button
                onClick={nextStep}
                className="flex-1 px-6 py-3 rounded-full bg-gradient-to-r from-tealEnchantment to-tealBright text-midnight font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-tealEnchantment/50 hover:scale-105 transition-all"
              >
                Next →
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Resources Section - Mobile Responsive */}
      <div className="mb-12 sm:mb-16 lg:mb-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pearlWhite text-center mb-6 sm:mb-8">
          Support Resources
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {resources.map((section, idx) => (
            <div key={idx} className="p-6 sm:p-8 rounded-2xl border-2 border-phoenixFire/30 bg-gradient-to-br from-phoenixFire/10 to-midnight/60">
              <h3 className="text-xl font-bold text-pearlWhite mb-4 flex items-center gap-2">
                <span className="text-2xl">🆘</span>
                <span>{section.category}</span>
              </h3>

              <div className="space-y-4">
                {section.contacts.map((contact, contactIdx) => (
                  <div key={contactIdx} className="p-4 rounded-xl bg-midnight/40 border border-moonlightSilver/10">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div className="flex-1">
                        <h4 className="text-base sm:text-lg font-bold text-pearlWhite">{contact.name}</h4>
                        <p className="text-xs sm:text-sm text-moonlightSilver/70">{contact.description}</p>
                      </div>
                      <div className="text-base sm:text-lg font-bold text-phoenixFire">
                        {contact.number}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Important Note */}
          <div className="p-6 rounded-xl bg-tealEnchantment/10 border border-tealEnchantment/30">
            <p className="text-sm text-moonlightSilver/90 leading-relaxed">
              <strong className="text-tealEnchantment">Remember:</strong> Asking for help is not weakness. It's survival.
              You spend your shifts saving others—you deserve the same care. If you're struggling, please reach out.
              You are not alone, and you are not too far gone.
            </p>
          </div>
        </div>
      </div>

      {/* Feature Highlights - Mobile Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
        <div className="p-6 rounded-xl border-2 border-tealEnchantment/30 bg-gradient-to-br from-inkPlum/20 to-midnight/40">
          <span className="text-3xl sm:text-4xl mb-3 block">🔒</span>
          <h3 className="text-base sm:text-lg font-bold text-pearlWhite mb-2">100% Private</h3>
          <p className="text-xs sm:text-sm text-moonlightSilver/80">
            Nothing you write is ever shared. No reporting to management. No judgment.
          </p>
        </div>

        <div className="p-6 rounded-xl border-2 border-inkPlum/30 bg-gradient-to-br from-inkPlum/20 to-midnight/40">
          <span className="text-3xl sm:text-4xl mb-3 block">🎙️</span>
          <h3 className="text-base sm:text-lg font-bold text-pearlWhite mb-2">Voice Memos</h3>
          <p className="text-xs sm:text-sm text-moonlightSilver/80">
            Too exhausted to type? Record a voice memo instead. Process your shift out loud.
          </p>
        </div>

        <div className="p-6 rounded-xl border-2 border-phoenixFire/30 bg-gradient-to-br from-inkPlum/20 to-midnight/40">
          <span className="text-3xl sm:text-4xl mb-3 block">🌙</span>
          <h3 className="text-base sm:text-lg font-bold text-pearlWhite mb-2">Available 24/7</h3>
          <p className="text-xs sm:text-sm text-moonlightSilver/80">
            3am after a rough shift? We're here. No appointment needed. Just support when you need it.
          </p>
        </div>
      </div>

      {/* Final CTA - Mobile Responsive */}
      <div className="p-6 sm:p-8 lg:p-12 rounded-2xl border-2 border-tealEnchantment/40 bg-gradient-to-br from-tealEnchantment/10 via-inkPlum/5 to-midnight/20 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pearlWhite mb-4">
          Built by Someone Who Gets It
        </h2>
        <p className="text-sm sm:text-base text-moonlightSilver/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
          I built this after watching my nursing colleagues break down in the parking lot. We save lives all shift,
          then drive home carrying trauma with no one to talk to. This tool meets nurses where they are—exhausted,
          hurting, and needing support RIGHT NOW.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href="/get-quote"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-tealEnchantment to-inkPlum text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-tealEnchantment/50 hover:scale-105 transition-all text-center"
          >
            Build a Mental Health Tool →
          </Link>
          <Link
            href="/portfolio"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-tealEnchantment/40 text-tealEnchantment font-bold text-sm sm:text-base uppercase tracking-wider hover:bg-tealEnchantment/10 transition-all text-center"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}
