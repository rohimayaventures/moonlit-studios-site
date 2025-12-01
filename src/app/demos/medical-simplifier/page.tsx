'use client';

import { useState } from 'react';
import { Check, Copy, RefreshCw, FileText, ArrowRight, ShieldCheck, Sparkles, Activity } from 'lucide-react';

// Sample clinical notes for demonstration
const sampleClinicalNotes = [
  {
    id: 1,
    title: "Discharge Summary - Cardiac",
    input: `DISCHARGE DIAGNOSIS: Acute exacerbation of CHF (ICD-10: I50.9) secondary to dietary indiscretion and medication non-compliance. EF 35% on TTE. BNP elevated at 1,247 pg/mL on admission, trending to 489 pg/mL at discharge.

HOSPITAL COURSE: Pt admitted via ED with acute dyspnea, bilateral LE edema 3+, and JVD. IV Lasix 40mg BID initiated with aggressive diuresis achieving net negative 3.2L over 72hrs. Transitioned to PO Lasix 40mg daily. Carvedilol uptitrated to 12.5mg BID. Lisinopril held due to Cr elevation (1.8 from baseline 1.2), to restart when Cr normalizes.

DISCHARGE INSTRUCTIONS: Daily weights AM before breakfast. Call if weight increases >3lbs in 24hrs or >5lbs in 1 week. Fluid restriction 1.5L/day. Low sodium diet <2g/day. Follow-up cardiology in 7 days. Return to ED for worsening SOB, chest pain, or syncope.`,
    output: `**What Happened During Your Hospital Stay**

Your heart is having trouble pumping as strongly as it should. This is called heart failure. You came to the hospital because you were having trouble breathing and your legs were very swollen with fluid.

**What We Did to Help**

We gave you medicine through your IV to help your body get rid of the extra fluid. You lost about 3 quarts of fluid during your stay, which is why you can breathe easier now. We also adjusted your heart medicines to help your heart work better.

**Your Medicines**

- **Lasix (furosemide) 40mg** - Take 1 pill every morning. This is your "water pill" that helps remove extra fluid.
- **Carvedilol 12.5mg** - Take 1 pill twice daily (morning and evening). This helps your heart pump better.
- **Lisinopril** - DO NOT take this medicine right now. Your kidneys need a rest. Your doctor will tell you when to restart it.

**Important Warning Signs - Call Your Doctor If:**

- You gain more than 3 pounds in ONE day
- You gain more than 5 pounds in ONE week
- You feel more short of breath than today
- Your legs or feet start swelling again
- You feel dizzy or faint

**Daily Tasks**

1. Weigh yourself every morning BEFORE breakfast, after using the bathroom
2. Write down your weight in a notebook
3. Drink no more than 6 cups of liquid total per day (about 1.5 liters)
4. Avoid salty foods - aim for less than 1 teaspoon of salt per day

**Your Next Appointment**

See your heart doctor (cardiologist) in 7 days. They will check how you're doing and may adjust your medicines.

**Go to the Emergency Room Right Away If:**

- You can't catch your breath even when sitting still
- You have chest pain or pressure
- You faint or pass out`
  },
  {
    id: 2,
    title: "Post-Op Instructions - Appendectomy",
    input: `POST-OPERATIVE DIAGNOSIS: Acute appendicitis, non-perforated (ICD-10: K35.80)
PROCEDURE: Laparoscopic appendectomy, uncomplicated. EBL <50mL.

ANESTHESIA: General endotracheal. Reversed with Sugammadex 200mg. Extubated in OR without complication.

POST-OP ORDERS: NPO until flatus, then advance diet as tolerated. Ambulate TID. IS q1h while awake. Foley d/c'd in PACU. Pain management: Toradol 30mg IV q6h x 24hrs, transition to PO Ibuprofen 600mg q6h PRN. Oxycodone 5mg PO q4h PRN for breakthrough. Ondansetron 4mg IV q6h PRN N/V.

DISCHARGE: Anticipated POD#1 if tolerating PO and ambulating independently. Wound care: Keep incisions clean and dry x 48hrs. May shower POD#2. No baths/swimming x 2 weeks. Activity: No heavy lifting >10lbs x 2 weeks. May return to desk work in 3-5 days. Strenuous activity/exercise after 4 weeks.`,
    output: `**Your Surgery Went Well**

We removed your appendix using small incisions (laparoscopic surgery). The surgery went smoothly with no complications. Your appendix was inflamed but had not burst, which is good news for your recovery.

**Pain Management**

For the first few days, you may have some discomfort. This is normal.

- **Ibuprofen 600mg** - Take 1 tablet every 6 hours as needed for pain. Take with food to protect your stomach.
- **Oxycodone 5mg** - Take 1 tablet every 4 hours ONLY if ibuprofen isn't enough. This is a strong pain medicine that can make you drowsy and constipated.

**Eating and Drinking**

- Start with clear liquids (water, broth, jello, apple juice)
- Once you pass gas, you can start eating regular foods
- Eat small, light meals at first
- Drink plenty of water to stay hydrated

**Taking Care of Your Incisions**

- Keep your incisions dry for 48 hours
- You may shower after 2 days - gently pat the area dry
- Do NOT take baths, go swimming, or soak in a hot tub for 2 weeks
- You'll see small strips of tape (steri-strips) - let these fall off on their own

**Activity Guidelines**

- Walk around the house starting today - this helps prevent blood clots
- Take deep breaths every hour while awake to keep your lungs clear
- Do NOT lift anything heavier than 10 pounds (like a gallon of milk) for 2 weeks
- You can return to desk work in 3-5 days if you feel up to it
- Wait 4 weeks before exercising or doing strenuous activities

**Call Your Doctor If You Notice:**

- Fever over 101.5F
- Increasing redness, swelling, or drainage from your incisions
- Severe pain that isn't helped by your medicine
- Nausea or vomiting that won't stop
- You can't have a bowel movement for 3+ days`
  },
  {
    id: 3,
    title: "Diabetes Management Update",
    input: `ASSESSMENT: T2DM poorly controlled. A1C 9.2% (goal <7%). Fasting glucose log shows range 180-240 mg/dL. Current regimen: Metformin 1000mg BID, Glipizide 10mg BID. BMI 34.2.

PLAN: Add Ozempic (semaglutide) 0.25mg SQ weekly x 4 weeks, then increase to 0.5mg weekly. Continue current oral agents. Reinforce carbohydrate counting - goal 45-60g carbs per meal. Refer to CDE for insulin start education as backup plan if A1C not improved in 3 months. Labs: Repeat A1C, CMP, lipid panel in 12 weeks.

HYPOGLYCEMIA EDUCATION: Signs include shakiness, sweating, confusion, rapid heartbeat. Treat with 15g fast-acting carbs (4 glucose tabs, 4oz juice, 5 Life Savers). Recheck in 15 min. Repeat if still <70. Glucagon kit prescribed for severe episodes.`,
    output: `**Understanding Your Diabetes Update**

Your blood sugar has been running higher than we'd like. Your A1C test (which shows your average blood sugar over 3 months) is 9.2%. Our goal is to get it below 7%.

**Your New Medicine Plan**

We're adding a new weekly injection to help lower your blood sugar AND help with weight loss:

- **Ozempic (semaglutide)** - This is a once-weekly injection you give yourself
  - Weeks 1-4: Use the 0.25mg dose (the starting dose)
  - After 4 weeks: Increase to 0.5mg dose
  - Pick the same day each week (like every Sunday)
  - Can be given any time of day, with or without food

- **Keep taking your current pills:**
  - Metformin 1000mg - twice daily with meals
  - Glipizide 10mg - twice daily with meals

**Eating Goals**

Try to eat 45-60 grams of carbohydrates at each meal. That's roughly:
- 3-4 servings of carbs per meal
- 1 serving = 1 slice bread, 1/3 cup rice, 1 small fruit, or 1 cup milk

**Warning: Know the Signs of Low Blood Sugar**

Your blood sugar can drop too low (below 70). Watch for:
- Shaking or trembling
- Sweating
- Fast heartbeat
- Feeling confused or "foggy"
- Sudden hunger

**If This Happens - The "Rule of 15":**

1. Eat or drink 15 grams of fast sugar:
   - 4 glucose tablets, OR
   - 4 ounces (half cup) of juice or regular soda, OR
   - 5 Life Savers candies
2. Wait 15 minutes
3. Check your blood sugar again
4. If still low, repeat

**Your Follow-Up Plan**

- We'll check your blood work again in 12 weeks
- If your A1C doesn't improve, we'll discuss starting insulin
- A diabetes educator will call you to schedule a teaching session`
  }
];

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

    // Simulate AI processing with 1.5s delay
    setTimeout(() => {
      setIsProcessing(false);
      setShowOutput(true);
      setReadingLevel("5th Grade");
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
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center shadow-md">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800 tracking-tight">HealthLiteracy.ai</h1>
              <p className="text-xs text-slate-500 font-medium">Patient-First Medical Translation</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">HIPAA Compliant Mode</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Note Selector */}
        <div className="mb-8">
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Select Clinical Scenario</label>
          <div className="flex gap-3 flex-wrap">
            {sampleClinicalNotes.map((note) => (
              <button
                key={note.id}
                onClick={() => handleNoteChange(note.id)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 border ${
                  selectedNote.id === note.id
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md transform scale-105'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-600'
                }`}
              >
                {note.title}
              </button>
            ))}
          </div>
        </div>

        {/* Split Screen */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">

          {/* Left Panel - Clinical Input */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[600px]">
            <div className="px-5 py-4 border-b border-slate-200 bg-slate-50/80 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-slate-500" />
                  <h2 className="font-semibold text-slate-800 text-sm">Raw Clinical Source</h2>
                </div>
                <span className="text-[10px] px-2 py-1 bg-amber-100 text-amber-700 rounded border border-amber-200 font-bold">HL7/FHIR</span>
              </div>
            </div>

            <div className="flex-1 p-5 overflow-hidden flex flex-col">
              <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-sm text-slate-600 whitespace-pre-wrap overflow-y-auto leading-relaxed shadow-inner">
                {selectedNote.input}
              </div>

              <div className="mt-5 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs text-slate-500">
                  Detected Level: <span className="font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded">College+</span>
                </div>
                <button
                  onClick={handleTranslate}
                  disabled={isProcessing}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <ArrowRight className="w-4 h-4" />
                      <span>Translate for Patient</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel - Patient Output */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg ring-1 ring-slate-200/50 overflow-hidden flex flex-col h-[600px] relative">

            {/* Success Overlay Background */}
            <div className={`absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-white pointer-events-none transition-opacity duration-700 ${showOutput ? 'opacity-100' : 'opacity-0'}`} />

            <div className="relative px-5 py-4 border-b border-slate-200 bg-white/80 backdrop-blur-sm z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-600" />
                  <h2 className="font-bold text-emerald-900 text-sm">Patient-Friendly Explanation</h2>
                </div>
                <div className="flex items-center gap-2">
                  {readingLevel && (
                    <span className="text-[10px] px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full border border-emerald-200 font-bold flex items-center gap-1 animate-fade-in">
                      <Check className="w-3 h-3" />
                      {readingLevel} Level
                    </span>
                  )}
                  {showOutput && (
                    <button
                      onClick={copyToClipboard}
                      className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"
                      title="Copy to Clipboard"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="relative flex-1 p-0 overflow-hidden">
              {isProcessing ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 z-20">
                  <div className="w-16 h-16 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
                  <p className="text-lg font-medium text-slate-800">Analyzing clinical context...</p>
                  <p className="text-sm text-slate-500 mt-1 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    Running anti-hallucination guardrails
                  </p>
                </div>
              ) : showOutput ? (
                <div className="h-full overflow-y-auto p-6 md:p-8">
                  <div className="prose prose-slate max-w-none prose-p:text-slate-600 prose-headings:text-indigo-900 prose-strong:text-slate-800 leading-relaxed">
                    {selectedNote.output.split('\n').map((line, idx) => {
                      // Header parsing (**Header**)
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return (
                          <h3 key={idx} className="text-lg font-bold text-indigo-800 mt-6 mb-3 first:mt-0 pb-2 border-b border-indigo-100">
                            {line.replace(/\*\*/g, '')}
                          </h3>
                        );
                      }
                      // Bullet with bold (- **Bold** text)
                      if (line.startsWith('- **')) {
                        const parts = line.replace('- **', '').split('**');
                        return (
                          <div key={idx} className="flex gap-3 mb-3 ml-1">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                            <p className="m-0"><strong className="text-slate-900 font-semibold">{parts[0]}</strong>{parts[1]}</p>
                          </div>
                        );
                      }
                      // Standard Bullet (- Text)
                      if (line.startsWith('- ')) {
                        return (
                          <div key={idx} className="flex gap-3 mb-3 ml-1">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                            <p className="m-0 text-slate-600">{line.replace('- ', '')}</p>
                          </div>
                        );
                      }
                      // Numbered List (1. Text)
                      if (line.match(/^\d+\./)) {
                        return (
                          <div key={idx} className="flex gap-3 mb-3 ml-1">
                            <span className="font-bold text-indigo-600 font-mono">{line.match(/^\d+/)?.[0]}.</span>
                            <p className="m-0 text-slate-600">{line.replace(/^\d+\.\s*/, '')}</p>
                          </div>
                        );
                      }
                      // Empty line
                      if (line.trim() === '') return <div key={idx} className="h-4" />;

                      // Standard Paragraph
                      return <p key={idx} className="mb-4 text-base text-slate-600">{line}</p>;
                    })}
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 p-8 bg-slate-50/50">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 border border-slate-100">
                    <Sparkles className="w-8 h-8 text-indigo-300" />
                  </div>
                  <p className="text-lg font-medium text-slate-600">Waiting for clinical input...</p>
                  <p className="text-sm text-slate-400 mt-1">Select a scenario above to begin</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Safety Features Banner */}
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-indigo-600 mt-0.5" />
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Anti-Hallucination</h4>
              <p className="text-xs text-slate-500 mt-1">Strict grounding to source HL7 data.</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
            <Check className="w-5 h-5 text-emerald-600 mt-0.5" />
            <div>
              <h4 className="font-bold text-slate-800 text-sm">5th Grade Level</h4>
              <p className="text-xs text-slate-500 mt-1">Optimized for universal comprehension.</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
            <Activity className="w-5 h-5 text-amber-500 mt-0.5" />
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Critical Alerts</h4>
              <p className="text-xs text-slate-500 mt-1">Warning signs are preserved & highlighted.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
