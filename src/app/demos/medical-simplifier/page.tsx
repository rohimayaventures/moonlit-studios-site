'use client';

import React, { useState } from 'react';
import {
  Check,
  Copy,
  RefreshCw,
  FileText,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Activity,
  Stethoscope,
  Brain,
  Radio
} from 'lucide-react';

// Sample clinical notes with icons
const sampleClinicalNotes = [
  {
    id: 1,
    title: "Cardiac Discharge",
    iconType: 'heart' as const,
    input: `DISCHARGE DIAGNOSIS: Acute exacerbation of CHF (ICD-10: I50.9) secondary to dietary indiscretion and medication non-compliance. EF 35% on TTE. BNP elevated at 1,247 pg/mL on admission, trending to 489 pg/mL at discharge.

HOSPITAL COURSE: Pt admitted via ED with acute dyspnea, bilateral LE edema 3+, and JVD. IV Lasix 40mg BID initiated with aggressive diuresis achieving net negative 3.2L over 72hrs. Transitioned to PO Lasix 40mg daily. Carvedilol uptitrated to 12.5mg BID. Lisinopril held due to Cr elevation (1.8 from baseline 1.2), to restart when Cr normalizes.

DISCHARGE INSTRUCTIONS: Daily weights AM before breakfast. Call if weight increases >3lbs in 24hrs or >5lbs in 1 week. Fluid restriction 1.5L/day. Low sodium diet <2g/day. Follow-up cardiology in 7 days. Return to ED for worsening SOB, chest pain, or syncope.`,
    output: `**What Happened During Your Hospital Stay**

Your heart is having trouble pumping as strongly as it should. This is called heart failure. You came to the hospital because you were having trouble breathing and your legs were very swollen with fluid.

**What We Did to Help**

We gave you medicine through your IV to help your body get rid of the extra fluid. You lost about 3 quarts of fluid during your stay, which is why you can breathe easier now.

**Your Medicines**

- **Lasix (furosemide) 40mg:** Take 1 pill every morning. This is your "water pill" that helps remove extra fluid.
- **Carvedilol 12.5mg:** Take 1 pill twice daily. This helps your heart pump better.
- **Lisinopril:** DO NOT take this medicine right now. Your kidneys need a rest.

**Important Warning Signs - Call Your Doctor If:**

- You gain more than 3 pounds in ONE day
- You gain more than 5 pounds in ONE week
- You feel more short of breath than today
- Your legs or feet start swelling again

**Daily Tasks**

1. Weigh yourself every morning BEFORE breakfast
2. Drink no more than 6 cups of liquid total per day (1.5 liters)
3. Avoid salty foods`
  },
  {
    id: 2,
    title: "Post-Op Appendectomy",
    iconType: 'activity' as const,
    input: `POST-OPERATIVE DIAGNOSIS: Acute appendicitis, non-perforated (ICD-10: K35.80)
PROCEDURE: Laparoscopic appendectomy, uncomplicated. EBL <50mL.
ANESTHESIA: General endotracheal. Reversed with Sugammadex 200mg.

POST-OP ORDERS: NPO until flatus, then advance diet as tolerated. Ambulate TID. IS q1h while awake. Foley d/c'd in PACU. Pain management: Toradol 30mg IV q6h x 24hrs, transition to PO Ibuprofen 600mg q6h PRN. Oxycodone 5mg PO q4h PRN for breakthrough.

DISCHARGE: Anticipated POD#1 if tolerating PO and ambulating independently. Wound care: Keep incisions clean and dry x 48hrs. May shower POD#2. No baths/swimming x 2 weeks. Activity: No heavy lifting >10lbs x 2 weeks.`,
    output: `**Your Surgery Went Well**

We removed your appendix using small incisions (laparoscopic surgery). The surgery went smoothly with no complications. Your appendix had not burst, which is good news for your recovery.

**Pain Management**

- **Ibuprofen 600mg:** Take 1 tablet every 6 hours as needed for pain. Take with food.
- **Oxycodone 5mg:** Take 1 tablet every 4 hours ONLY if ibuprofen isn't enough. This is strong medicine.

**Eating and Drinking**

- Start with clear liquids (water, broth, jello).
- Once you pass gas, you can start eating regular foods.
- Drink plenty of water to stay hydrated.

**Taking Care of Your Incisions**

- Keep your incisions dry for 48 hours.
- You may shower after 2 days - gently pat dry.
- Do NOT take baths or go swimming for 2 weeks.

**Activity Guidelines**

- Walk around the house starting today - this prevents blood clots.
- Do NOT lift anything heavier than 10 pounds (like a gallon of milk) for 2 weeks.`
  },
  {
    id: 3,
    title: "Diabetes Plan Update",
    iconType: 'brain' as const,
    input: `ASSESSMENT: T2DM poorly controlled. A1C 9.2% (goal <7%). Fasting glucose log shows range 180-240 mg/dL. Current regimen: Metformin 1000mg BID, Glipizide 10mg BID. BMI 34.2.

PLAN: Add Ozempic (semaglutide) 0.25mg SQ weekly x 4 weeks, then increase to 0.5mg weekly. Continue current oral agents. Reinforce carbohydrate counting - goal 45-60g carbs per meal. Refer to CDE for insulin start education as backup plan if A1C not improved in 3 months.

HYPOGLYCEMIA EDUCATION: Signs include shakiness, sweating, confusion, rapid heartbeat. Treat with 15g fast-acting carbs (4 glucose tabs, 4oz juice). Recheck in 15 min.`,
    output: `**Understanding Your Diabetes Update**

Your blood sugar has been running higher than we'd like. Your A1C is 9.2%, and our goal is to get it below 7%.

**Your New Medicine Plan**

We're adding a new weekly injection to help lower your blood sugar:

- **Ozempic (semaglutide):** This is a once-weekly injection.
  - Weeks 1-4: Use the 0.25mg dose.
  - After 4 weeks: Increase to 0.5mg dose.
- **Keep taking:** Metformin and Glipizide as usual.

**Eating Goals**

Try to eat 45-60 grams of carbohydrates at each meal. That's roughly 3-4 servings of carbs per meal.

**Warning: Know the Signs of Low Blood Sugar**

If you feel shaky, sweaty, or confused:
1. Eat/drink 15 grams of fast sugar (4oz juice or 4 glucose tabs).
2. Wait 15 minutes.
3. Check your blood sugar again.`
  }
];

// Helper Icons
function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function getIconForType(iconType: 'heart' | 'activity' | 'brain', className?: string) {
  switch (iconType) {
    case 'heart':
      return <HeartIcon className={className} />;
    case 'activity':
      return <Activity className={className} />;
    case 'brain':
      return <Brain className={className} />;
  }
}

export default function MedicalSimplifierPage() {
  const [selectedNote, setSelectedNote] = useState(sampleClinicalNotes[0]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [readingLevel, setReadingLevel] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleTranslate = () => {
    setIsProcessing(true);
    setShowOutput(false);
    setReadingLevel(null);

    setTimeout(() => {
      setIsProcessing(false);
      setShowOutput(true);
      setReadingLevel("Patient-Friendly");
    }, 1500);
  };

  const handleNoteChange = (noteId: number) => {
    const note = sampleClinicalNotes.find(n => n.id === noteId);
    if (note) {
      setSelectedNote(note);
      setShowOutput(false);
      setReadingLevel(null);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(selectedNote.output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">

      {/* Background Aesthetics */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl -ml-20 -mb-20"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-700 flex items-center justify-center shadow-lg shadow-indigo-500/20 text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900">HealthLiteracy<span className="text-indigo-600">.ai</span></h1>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Clinical NLP Engine</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Live Demo Indicator */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full">
              <Radio className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide">Live Demo</span>
            </div>

            {/* HIPAA Badge */}
            <div className="hidden sm:flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">HIPAA Compliant</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">

        {/* Scenario Selector */}
        <div className="mb-8 md:mb-10">
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 ml-1">Select Clinical Scenario</label>
          <div className="flex flex-wrap gap-3">
            {sampleClinicalNotes.map((note) => (
              <button
                key={note.id}
                onClick={() => handleNoteChange(note.id)}
                className={`group flex items-center gap-3 px-4 md:px-5 py-2.5 md:py-3 rounded-xl text-sm font-medium transition-all duration-200 border shadow-sm ${
                  selectedNote.id === note.id
                    ? 'bg-slate-900 text-white border-slate-900 ring-2 ring-slate-900 ring-offset-2'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:shadow-md'
                }`}
              >
                {getIconForType(note.iconType, `w-4 h-4 ${selectedNote.id === note.id ? 'text-indigo-300' : 'text-slate-400 group-hover:text-indigo-500'}`)}
                <span className="hidden sm:inline">{note.title}</span>
                <span className="sm:hidden">{note.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Workspace Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">

          {/* Left Panel: Clinical Source */}
          <div className="flex flex-col h-[550px] md:h-[650px] bg-white rounded-2xl md:rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden transition-all hover:shadow-2xl hover:shadow-slate-200/60">
            {/* Panel Header */}
            <div className="px-4 md:px-6 py-4 md:py-5 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <FileText className="w-4 h-4 text-slate-500" />
                </div>
                <span className="text-sm font-bold text-slate-700">Raw Clinical Note</span>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-1 bg-amber-100 text-amber-800 rounded-md border border-amber-200">HL7 / FHIR</span>
            </div>

            {/* Editor Area */}
            <div className="flex-1 p-4 md:p-6 bg-slate-50/30 overflow-y-auto">
              <div className="font-mono text-xs md:text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">
                {selectedNote.input}
              </div>
            </div>

            {/* Action Bar */}
            <div className="p-4 md:p-6 border-t border-slate-100 bg-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Complexity</p>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      <div className="w-1.5 md:w-2 h-5 md:h-6 bg-rose-500 rounded-sm"></div>
                      <div className="w-1.5 md:w-2 h-5 md:h-6 bg-rose-500 rounded-sm"></div>
                      <div className="w-1.5 md:w-2 h-5 md:h-6 bg-rose-500 rounded-sm"></div>
                      <div className="w-1.5 md:w-2 h-5 md:h-6 bg-slate-200 rounded-sm"></div>
                    </div>
                    <span className="text-xs md:text-sm font-bold text-rose-600">College+</span>
                  </div>
                </div>

                <button
                  onClick={handleTranslate}
                  disabled={isProcessing}
                  className={`group relative overflow-hidden px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-xs md:text-sm text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0 ${
                    isProcessing ? 'bg-slate-800' : 'bg-indigo-600 hover:bg-indigo-700'
                  }`}
                >
                  <div className="relative z-10 flex items-center gap-2">
                    {isProcessing ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span className="hidden sm:inline">Analyzing...</span>
                      </>
                    ) : (
                      <>
                        <span className="hidden sm:inline">Generate Summary</span>
                        <span className="sm:hidden">Translate</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </div>
                  {/* Animated sheen effect */}
                  {!isProcessing && (
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel: Patient Output */}
          <div className="flex flex-col h-[550px] md:h-[650px] bg-white rounded-2xl md:rounded-3xl border border-slate-200 shadow-xl shadow-indigo-100/50 overflow-hidden relative">

            {/* Active Processing State Overlay */}
            {isProcessing && (
              <div className="absolute inset-0 z-20 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center">
                <div className="relative w-20 md:w-24 h-20 md:h-24 mb-6">
                  <div className="absolute inset-0 border-4 border-indigo-100 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
                  <Brain className="absolute inset-0 m-auto w-6 md:w-8 h-6 md:h-8 text-indigo-600 animate-pulse" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2">Simplifying Terminology...</h3>
                <div className="flex flex-col gap-2 text-xs md:text-sm text-slate-500 items-center">
                  <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Checking Medical Accuracy</span>
                  <span className="flex items-center gap-2"><Activity className="w-4 h-4 text-indigo-500" /> Adjusting Tone & Empathy</span>
                </div>
              </div>
            )}

            {/* Panel Header */}
            <div className={`px-4 md:px-6 py-4 md:py-5 border-b transition-colors duration-500 flex justify-between items-center ${showOutput ? 'bg-emerald-50/50 border-emerald-100' : 'bg-slate-50/50 border-slate-100'}`}>
              <div className="flex items-center gap-2.5">
                <div className={`p-2 rounded-lg border shadow-sm transition-colors duration-500 ${showOutput ? 'bg-emerald-100 border-emerald-200' : 'bg-white border-slate-200'}`}>
                  <Stethoscope className={`w-4 h-4 ${showOutput ? 'text-emerald-600' : 'text-slate-400'}`} />
                </div>
                <span className={`text-sm font-bold transition-colors duration-500 ${showOutput ? 'text-emerald-900' : 'text-slate-400'}`}>Patient-Friendly</span>
              </div>

              <div className="flex items-center gap-2">
                {readingLevel && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 md:px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wide border border-emerald-200 shadow-sm">
                    <Check className="w-3 h-3" /> {readingLevel}
                  </span>
                )}
                {showOutput && (
                  <button
                    onClick={copyToClipboard}
                    className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                    title="Copy to Clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                )}
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 relative p-0 overflow-hidden bg-white">
              {!showOutput && !isProcessing ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-300">
                  <div className="w-20 md:w-24 h-20 md:h-24 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                    <Sparkles className="w-8 md:w-10 h-8 md:h-10 opacity-50" />
                  </div>
                  <p className="font-medium text-slate-400">Ready to Generate</p>
                </div>
              ) : (
                <div className={`h-full overflow-y-auto p-4 md:p-8 transition-opacity duration-700 ${showOutput ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-indigo-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600">
                    {selectedNote.output.split('\n').map((line, idx) => {
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return (
                          <h3 key={idx} className="text-base md:text-lg font-bold text-indigo-900 mt-6 md:mt-8 mb-3 md:mb-4 first:mt-0 flex items-center gap-2">
                            {line.replace(/\*\*/g, '')}
                          </h3>
                        );
                      }
                      if (line.startsWith('- **')) {
                        const parts = line.replace('- **', '').split('**');
                        return (
                          <div key={idx} className="flex gap-3 mb-2 md:mb-3 p-2.5 md:p-3 rounded-lg bg-slate-50 border border-slate-100">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                            <p className="m-0 text-xs md:text-sm"><strong className="text-slate-900 font-semibold block mb-0.5">{parts[0]}</strong>{parts[1]}</p>
                          </div>
                        );
                      }
                      if (line.startsWith('- ')) {
                        return (
                          <div key={idx} className="flex gap-3 mb-2 ml-1">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                            <p className="m-0 text-xs md:text-sm text-slate-600">{line.replace('- ', '')}</p>
                          </div>
                        );
                      }
                      if (line.match(/^\d+\./)) {
                         return (
                          <div key={idx} className="flex gap-3 md:gap-4 mb-3 md:mb-4 items-start">
                            <span className="flex-shrink-0 w-5 md:w-6 h-5 md:h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-[10px] md:text-xs flex items-center justify-center mt-0.5">
                              {line.match(/^\d+/)?.[0]}
                            </span>
                            <p className="m-0 text-xs md:text-sm text-slate-700 bg-white p-2 md:p-3 rounded-lg border border-slate-100 shadow-sm w-full">
                              {line.replace(/^\d+\.\s*/, '')}
                            </p>
                          </div>
                         );
                      }
                      if (line.trim() === '') return <div key={idx} className="h-2" />;
                      return <p key={idx} className="mb-3 md:mb-4 text-xs md:text-sm">{line}</p>;
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Feature Cards */}
        <div className="mt-8 md:mt-12 grid sm:grid-cols-3 gap-4">
          <div className="bg-white p-4 md:p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3 hover:shadow-md transition-shadow">
            <div className="p-2 bg-indigo-50 rounded-lg">
              <ShieldCheck className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Anti-Hallucination</h4>
              <p className="text-xs text-slate-500 mt-1">Strict grounding to source HL7/FHIR data.</p>
            </div>
          </div>
          <div className="bg-white p-4 md:p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3 hover:shadow-md transition-shadow">
            <div className="p-2 bg-emerald-50 rounded-lg">
              <Check className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Patient-Friendly Language</h4>
              <p className="text-xs text-slate-500 mt-1">Clear, accessible explanations for everyone.</p>
            </div>
          </div>
          <div className="bg-white p-4 md:p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3 hover:shadow-md transition-shadow">
            <div className="p-2 bg-amber-50 rounded-lg">
              <Activity className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Critical Alerts Preserved</h4>
              <p className="text-xs text-slate-500 mt-1">Warning signs are never omitted or softened.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200 bg-white/80 backdrop-blur-sm py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span>HealthLiteracy.ai Demo</span>
          </div>
          <p className="text-xs text-slate-400 text-center sm:text-right">
            Interactive demonstration by <span className="font-semibold text-slate-600">Moonlit Studios</span> · Healthcare AI Solutions
          </p>
        </div>
      </footer>
    </div>
  );
}
