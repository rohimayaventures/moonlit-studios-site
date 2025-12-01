'use client';

import { useState, useEffect } from 'react';

// Mock patient data with vital history for trends
const mockPatients = [
  {
    id: 1,
    name: "Rodriguez, Maria",
    mrn: "MRN-847291",
    age: 67,
    gender: "F",
    chiefComplaint: "Chest pain radiating to left arm, onset 45 min ago",
    acuity: 2,
    acuityLabel: "ESI-2 Emergent",
    acuityColor: "bg-orange-500",
    vitals: {
      hr: 105,
      bp: "165/95",
      temp: 98.6,
      spo2: 94,
      rr: 22,
      pain: 8
    },
    vitalHistory: {
      hr: [98, 102, 105, 108, 105],
      spo2: [96, 95, 94, 94, 94],
      bp: [158, 160, 163, 165, 165]
    },
    arrivalTime: "14:23",
    waitTime: 12,
    location: "Triage Bay 1",
    assignedTo: "RN Thompson",
    assignedMD: "Dr. Patel",
    allergies: ["Penicillin", "Sulfa"],
    pmh: ["HTN", "DM Type 2", "Hyperlipidemia"],
    alerts: ["Cardiac Protocol", "High BP"],
    lastAssessed: "14:31",
    orders: ["12-Lead EKG", "Troponin", "BMP", "CBC"],
    notes: "Patient appears diaphoretic, clutching chest. Denies SOB. Family at bedside."
  },
  {
    id: 2,
    name: "Chen, William",
    mrn: "MRN-392847",
    age: 34,
    gender: "M",
    chiefComplaint: "Laceration to right hand - needs sutures",
    acuity: 4,
    acuityLabel: "ESI-4 Less Urgent",
    acuityColor: "bg-green-500",
    vitals: {
      hr: 82,
      bp: "128/76",
      temp: 98.2,
      spo2: 99,
      rr: 16,
      pain: 4
    },
    vitalHistory: {
      hr: [80, 81, 82, 82, 82],
      spo2: [99, 99, 99, 99, 99],
      bp: [126, 127, 128, 128, 128]
    },
    arrivalTime: "14:45",
    waitTime: 34,
    location: "Waiting Room",
    assignedTo: "RN Martinez",
    assignedMD: "Dr. Kim",
    allergies: ["NKDA"],
    pmh: [],
    alerts: [],
    lastAssessed: "14:52",
    orders: ["Wound care", "Tetanus if needed"],
    notes: "Clean laceration ~3cm, controlled bleeding with pressure. Pt stable."
  },
  {
    id: 3,
    name: "Thompson, Aiden",
    mrn: "MRN-194728",
    age: 8,
    gender: "M",
    chiefComplaint: "Fever 102.3°F, vomiting x3, decreased PO intake",
    acuity: 3,
    acuityLabel: "ESI-3 Urgent",
    acuityColor: "bg-yellow-500",
    vitals: {
      hr: 118,
      bp: "95/62",
      temp: 102.3,
      spo2: 98,
      rr: 24,
      pain: 5
    },
    vitalHistory: {
      hr: [110, 112, 115, 118, 118],
      spo2: [99, 99, 98, 98, 98],
      bp: [98, 96, 95, 95, 95]
    },
    arrivalTime: "15:02",
    waitTime: 17,
    location: "Peds Bay 2",
    assignedTo: "RN Chen",
    assignedMD: "Dr. Williams",
    allergies: ["NKDA"],
    pmh: ["Asthma"],
    alerts: ["Pediatric", "Fever Protocol"],
    lastAssessed: "15:08",
    orders: ["IV access", "Flu swab", "CBC", "BMP"],
    notes: "Mom reports illness started 2 days ago. Last void 6 hrs ago. Appears lethargic."
  },
  {
    id: 4,
    name: "Jackson, Dorothy",
    mrn: "MRN-582910",
    age: 52,
    gender: "F",
    chiefComplaint: "Difficulty breathing, wheezing, productive cough x2 days",
    acuity: 2,
    acuityLabel: "ESI-2 Emergent",
    acuityColor: "bg-orange-500",
    vitals: {
      hr: 112,
      bp: "142/88",
      temp: 99.1,
      spo2: 91,
      rr: 28,
      pain: 3
    },
    vitalHistory: {
      hr: [105, 108, 110, 112, 112],
      spo2: [94, 93, 92, 91, 91],
      bp: [138, 140, 141, 142, 142]
    },
    arrivalTime: "15:11",
    waitTime: 8,
    location: "Room 4",
    assignedTo: "RN Thompson",
    assignedMD: "Dr. Patel",
    allergies: ["Aspirin"],
    pmh: ["COPD", "CHF", "Former smoker"],
    alerts: ["Low O2", "Resp Distress", "COPD Exacerbation"],
    lastAssessed: "15:15",
    orders: ["Nebulizer", "ABG", "Chest X-ray", "Prednisone"],
    notes: "On 4L NC, still labored. Tripoding. Continuous pulse ox ordered. May need BiPAP."
  },
  {
    id: 5,
    name: "Martinez, Carlos",
    mrn: "MRN-847261",
    age: 23,
    gender: "M",
    chiefComplaint: "Right ankle injury after basketball, unable to bear weight",
    acuity: 4,
    acuityLabel: "ESI-4 Less Urgent",
    acuityColor: "bg-green-500",
    vitals: {
      hr: 78,
      bp: "118/72",
      temp: 98.4,
      spo2: 99,
      rr: 14,
      pain: 6
    },
    vitalHistory: {
      hr: [76, 77, 78, 78, 78],
      spo2: [99, 99, 99, 99, 99],
      bp: [118, 118, 118, 118, 118]
    },
    arrivalTime: "15:18",
    waitTime: 1,
    location: "Waiting Room",
    assignedTo: "RN Martinez",
    assignedMD: "Dr. Kim",
    allergies: ["NKDA"],
    pmh: [],
    alerts: [],
    lastAssessed: "15:19",
    orders: ["X-ray right ankle"],
    notes: "Visible swelling lateral ankle. Good distal pulses. Ice applied."
  },
  {
    id: 6,
    name: "Williams, Robert",
    mrn: "MRN-019283",
    age: 71,
    gender: "M",
    chiefComplaint: "Altered mental status, found confused by family",
    acuity: 2,
    acuityLabel: "ESI-2 Emergent",
    acuityColor: "bg-orange-500",
    vitals: {
      hr: 88,
      bp: "178/102",
      temp: 98.8,
      spo2: 96,
      rr: 18,
      pain: 0
    },
    vitalHistory: {
      hr: [85, 86, 87, 88, 88],
      spo2: [97, 96, 96, 96, 96],
      bp: [172, 175, 176, 178, 178]
    },
    arrivalTime: "15:25",
    waitTime: 3,
    location: "Room 2",
    assignedTo: "RN Chen",
    assignedMD: "Dr. Patel",
    allergies: ["Codeine"],
    pmh: ["A-fib", "HTN", "Prior CVA 2019"],
    alerts: ["Stroke Alert", "High BP", "Fall Risk"],
    lastAssessed: "15:26",
    orders: ["STAT CT Head", "Stroke protocol", "Neuro consult", "BMP", "CBC", "PT/INR"],
    notes: "Last known well 2 hours ago per wife. Slurred speech, right-sided weakness. CODE STROKE activated."
  }
];

// Team messages
const teamMessages = [
  { id: 1, from: "Charge RN", time: "15:28", message: "Room 7 ready for next patient", urgent: false },
  { id: 2, from: "Dr. Patel", time: "15:26", message: "Need RN in Room 2 for stroke protocol NOW", urgent: true },
  { id: 3, from: "Lab", time: "15:20", message: "STAT troponin resulted for Rodriguez - see chart", urgent: true },
  { id: 4, from: "Radiology", time: "15:15", message: "Portable chest ready for Room 4", urgent: false },
  { id: 5, from: "RN Thompson", time: "15:10", message: "Taking Rodriguez to EKG, back in 10", urgent: false },
];

// Sparkline component for vital trends
function Sparkline({ data, color, alert }: { data: number[]; color: string; alert?: boolean }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  return (
    <div className="flex items-end gap-0.5 h-4">
      {data.map((value, i) => (
        <div
          key={i}
          className={`w-1 rounded-sm ${alert ? 'bg-red-400' : color}`}
          style={{ height: `${((value - min) / range) * 100}%`, minHeight: '2px' }}
        />
      ))}
    </div>
  );
}

export default function ClinicalTriageDashboard() {
  const [selectedPatient, setSelectedPatient] = useState(mockPatients[0]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState(teamMessages);
  const [showNewPatientModal, setShowNewPatientModal] = useState(false);
  const [patients, setPatients] = useState(mockPatients);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      from: "You",
      time: currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      message: messageInput,
      urgent: false
    };

    setMessages([newMessage, ...messages]);
    setMessageInput('');
  };

  const handleAssignRoom = (room: string) => {
    setPatients(patients.map(p =>
      p.id === selectedPatient.id
        ? { ...p, location: room, waitTime: 0 }
        : p
    ));
    setSelectedPatient({ ...selectedPatient, location: room, waitTime: 0 });
  };

  const getAcuityStats = () => {
    const stats = { esi1: 0, esi2: 0, esi3: 0, esi4: 0, esi5: 0 };
    patients.forEach(p => {
      if (p.acuity === 1) stats.esi1++;
      else if (p.acuity === 2) stats.esi2++;
      else if (p.acuity === 3) stats.esi3++;
      else if (p.acuity === 4) stats.esi4++;
      else stats.esi5++;
    });
    return stats;
  };

  const acuityStats = getAcuityStats();
  const waitingCount = patients.filter(p => p.location === "Waiting Room").length;
  const criticalCount = patients.filter(p => p.acuity <= 2).length;

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Top Navigation Bar - Clinical Software Style */}
      <header className="bg-slate-800 border-b border-slate-700 px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            {/* Logo/Title */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-teal-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h1 className="text-sm font-bold text-white">TriageFlow</h1>
                <p className="text-[10px] text-slate-400">Emergency Department</p>
              </div>
            </div>

            {/* Department Quick Stats */}
            <div className="hidden md:flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2 px-3 py-1 rounded bg-slate-700">
                <span className="text-slate-400">Census:</span>
                <span className="font-bold text-white">{patients.length}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded bg-slate-700">
                <span className="text-slate-400">Waiting:</span>
                <span className="font-bold text-amber-400">{waitingCount}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded bg-red-900/50 border border-red-700">
                <span className="text-red-300">Critical:</span>
                <span className="font-bold text-red-400">{criticalCount}</span>
              </div>
            </div>
          </div>

          {/* Right Side - User & Time */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-slate-400">
                {currentTime.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
              </p>
              <p className="text-sm font-mono font-bold text-white">
                {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-slate-700">
              <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-xs font-bold">
                ST
              </div>
              <div className="hidden sm:block">
                <p className="text-xs font-semibold">Sarah Thompson, RN</p>
                <p className="text-[10px] text-slate-400">Triage Lead</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Acuity Bar */}
      <div className="bg-slate-800/50 border-b border-slate-700 px-4 py-2">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-400 mr-2">Acuity:</span>
          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-red-600">
            <span>ESI-1</span>
            <span className="font-bold">{acuityStats.esi1}</span>
          </div>
          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-orange-500">
            <span>ESI-2</span>
            <span className="font-bold">{acuityStats.esi2}</span>
          </div>
          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-yellow-500 text-slate-900">
            <span>ESI-3</span>
            <span className="font-bold">{acuityStats.esi3}</span>
          </div>
          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-green-500 text-slate-900">
            <span>ESI-4</span>
            <span className="font-bold">{acuityStats.esi4}</span>
          </div>
          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-blue-500">
            <span>ESI-5</span>
            <span className="font-bold">{acuityStats.esi5}</span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={() => setShowNewPatientModal(true)}
              className="px-3 py-1 rounded bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold transition-colors"
            >
              + New Patient
            </button>
          </div>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="p-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          {/* Patient Queue - Left Panel */}
          <div className="lg:col-span-5 space-y-2">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-bold text-slate-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Patient Queue
              </h2>
              <span className="text-xs text-slate-500">Sorted by acuity & wait time</span>
            </div>

            <div className="space-y-2 max-h-[calc(100vh-220px)] overflow-y-auto pr-2">
              {patients
                .sort((a, b) => a.acuity - b.acuity || b.waitTime - a.waitTime)
                .map((patient) => (
                <div
                  key={patient.id}
                  onClick={() => setSelectedPatient(patient)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    selectedPatient.id === patient.id
                      ? 'border-teal-500 bg-teal-500/10'
                      : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                  }`}
                >
                  {/* Patient Header */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-bold text-white truncate">{patient.name}</h3>
                        <span className="text-[10px] text-slate-500">{patient.mrn}</span>
                      </div>
                      <p className="text-xs text-slate-400 truncate">{patient.chiefComplaint}</p>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold whitespace-nowrap ${patient.acuityColor}`}>
                      {patient.acuityLabel}
                    </span>
                  </div>

                  {/* Vitals Row with Sparklines */}
                  <div className="grid grid-cols-5 gap-1 mb-2">
                    <div className="text-center p-1.5 rounded bg-slate-900/50">
                      <div className="flex items-center justify-center gap-1">
                        <span className={`text-xs font-bold ${patient.vitals.hr > 100 ? 'text-red-400' : 'text-white'}`}>
                          {patient.vitals.hr}
                        </span>
                        <Sparkline
                          data={patient.vitalHistory.hr}
                          color="bg-teal-400"
                          alert={patient.vitals.hr > 100}
                        />
                      </div>
                      <p className="text-[9px] text-slate-500 uppercase">HR</p>
                    </div>
                    <div className="text-center p-1.5 rounded bg-slate-900/50">
                      <p className={`text-xs font-bold ${parseInt(patient.vitals.bp.split('/')[0]) > 160 ? 'text-red-400' : 'text-white'}`}>
                        {patient.vitals.bp}
                      </p>
                      <p className="text-[9px] text-slate-500 uppercase">BP</p>
                    </div>
                    <div className="text-center p-1.5 rounded bg-slate-900/50">
                      <div className="flex items-center justify-center gap-1">
                        <span className={`text-xs font-bold ${patient.vitals.spo2 < 94 ? 'text-red-400' : 'text-white'}`}>
                          {patient.vitals.spo2}%
                        </span>
                        <Sparkline
                          data={patient.vitalHistory.spo2}
                          color="bg-blue-400"
                          alert={patient.vitals.spo2 < 94}
                        />
                      </div>
                      <p className="text-[9px] text-slate-500 uppercase">SpO2</p>
                    </div>
                    <div className="text-center p-1.5 rounded bg-slate-900/50">
                      <p className={`text-xs font-bold ${patient.vitals.temp > 100.4 ? 'text-red-400' : 'text-white'}`}>
                        {patient.vitals.temp}°
                      </p>
                      <p className="text-[9px] text-slate-500 uppercase">Temp</p>
                    </div>
                    <div className="text-center p-1.5 rounded bg-slate-900/50">
                      <p className={`text-xs font-bold ${patient.vitals.rr > 24 ? 'text-red-400' : 'text-white'}`}>
                        {patient.vitals.rr}
                      </p>
                      <p className="text-[9px] text-slate-500 uppercase">RR</p>
                    </div>
                  </div>

                  {/* Footer Row */}
                  <div className="flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500">
                        <span className="text-slate-400">Loc:</span> {patient.location}
                      </span>
                      <span className={`font-semibold ${patient.waitTime > 30 ? 'text-amber-400' : 'text-slate-400'}`}>
                        Wait: {patient.waitTime} min
                      </span>
                    </div>
                    <span className="text-slate-500">{patient.assignedTo}</span>
                  </div>

                  {/* Alerts */}
                  {patient.alerts.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {patient.alerts.map((alert) => (
                        <span
                          key={alert}
                          className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-red-900/50 border border-red-700 text-red-300"
                        >
                          ⚠ {alert}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Patient Detail - Center Panel */}
          <div className="lg:col-span-4 space-y-3">
            {/* Patient Header Card */}
            <div className="p-4 rounded-lg bg-slate-800 border border-slate-700">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="text-lg font-bold text-white">{selectedPatient.name}</h2>
                  <p className="text-xs text-slate-400">
                    {selectedPatient.age} y/o {selectedPatient.gender} • {selectedPatient.mrn}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded text-xs font-bold ${selectedPatient.acuityColor}`}>
                  {selectedPatient.acuityLabel}
                </span>
              </div>

              <div className="p-3 rounded bg-slate-900/50 mb-3">
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Chief Complaint</p>
                <p className="text-sm text-white">{selectedPatient.chiefComplaint}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-500">Location:</span>
                  <span className="ml-2 text-white">{selectedPatient.location}</span>
                </div>
                <div>
                  <span className="text-slate-500">Arrived:</span>
                  <span className="ml-2 text-white">{selectedPatient.arrivalTime}</span>
                </div>
                <div>
                  <span className="text-slate-500">RN:</span>
                  <span className="ml-2 text-white">{selectedPatient.assignedTo}</span>
                </div>
                <div>
                  <span className="text-slate-500">MD:</span>
                  <span className="ml-2 text-white">{selectedPatient.assignedMD}</span>
                </div>
              </div>
            </div>

            {/* Clinical Info */}
            <div className="p-4 rounded-lg bg-slate-800 border border-slate-700">
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="text-slate-400 uppercase tracking-wide mb-1">Allergies</p>
                  <div className="flex flex-wrap gap-1">
                    {selectedPatient.allergies.map((allergy) => (
                      <span key={allergy} className={`px-2 py-0.5 rounded ${allergy === 'NKDA' ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'}`}>
                        {allergy}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-slate-400 uppercase tracking-wide mb-1">PMH</p>
                  <div className="flex flex-wrap gap-1">
                    {selectedPatient.pmh.length > 0 ? selectedPatient.pmh.map((condition) => (
                      <span key={condition} className="px-2 py-0.5 rounded bg-slate-700 text-slate-300">
                        {condition}
                      </span>
                    )) : <span className="text-slate-500">None documented</span>}
                  </div>
                </div>
              </div>
            </div>

            {/* SBAR Card */}
            <div className="p-4 rounded-lg bg-gradient-to-br from-teal-900/30 to-slate-800 border border-teal-700/50">
              <h3 className="text-sm font-bold text-teal-400 mb-3 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                SBAR Handoff
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <p className="font-bold text-teal-300 uppercase tracking-wide mb-0.5">Situation</p>
                  <p className="text-slate-300">
                    {selectedPatient.age} y/o {selectedPatient.gender} presenting with {selectedPatient.chiefComplaint.toLowerCase()}.
                    {selectedPatient.alerts.length > 0 && ` Active alerts: ${selectedPatient.alerts.join(', ')}.`}
                  </p>
                </div>
                <div>
                  <p className="font-bold text-blue-300 uppercase tracking-wide mb-0.5">Background</p>
                  <p className="text-slate-300">
                    PMH: {selectedPatient.pmh.length > 0 ? selectedPatient.pmh.join(', ') : 'None'}.
                    Allergies: {selectedPatient.allergies.join(', ')}.
                    Arrived {selectedPatient.arrivalTime}, waiting {selectedPatient.waitTime} min.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-amber-300 uppercase tracking-wide mb-0.5">Assessment</p>
                  <p className="text-slate-300">
                    VS: HR {selectedPatient.vitals.hr}, BP {selectedPatient.vitals.bp}, SpO2 {selectedPatient.vitals.spo2}%,
                    RR {selectedPatient.vitals.rr}, Temp {selectedPatient.vitals.temp}°F, Pain {selectedPatient.vitals.pain}/10.
                    <br />{selectedPatient.notes}
                  </p>
                </div>
                <div>
                  <p className="font-bold text-red-300 uppercase tracking-wide mb-0.5">Recommendation</p>
                  <p className="text-slate-300">
                    {selectedPatient.orders.length > 0
                      ? `Orders: ${selectedPatient.orders.join(', ')}.`
                      : 'Awaiting provider orders.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleAssignRoom('Room 7')}
                className="p-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold transition-colors"
              >
                Assign to Room
              </button>
              <button
                onClick={() => {
                  const newMsg = {
                    id: messages.length + 1,
                    from: "ALERT",
                    time: currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    message: `ESCALATION: ${selectedPatient.name} - ${selectedPatient.alerts[0] || 'Needs immediate attention'}`,
                    urgent: true
                  };
                  setMessages([newMsg, ...messages]);
                }}
                className="p-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold transition-colors"
              >
                Escalate Alert
              </button>
              <button
                onClick={() => window.print()}
                className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold transition-colors"
              >
                Print SBAR
              </button>
              <button
                onClick={() => {
                  setPatients(patients.map(p =>
                    p.id === selectedPatient.id
                      ? { ...p, lastAssessed: currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
                      : p
                  ));
                }}
                className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold transition-colors"
              >
                Update Assessment
              </button>
            </div>
          </div>

          {/* Team Messages - Right Panel */}
          <div className="lg:col-span-3">
            <div className="p-4 rounded-lg bg-slate-800 border border-slate-700 h-full flex flex-col">
              <h3 className="text-sm font-bold text-slate-300 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Team Messages
              </h3>

              {/* Message List */}
              <div className="flex-1 space-y-2 overflow-y-auto max-h-[400px] mb-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-2 rounded text-xs ${
                      msg.urgent
                        ? 'bg-red-900/30 border border-red-700'
                        : 'bg-slate-900/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`font-bold ${msg.urgent ? 'text-red-400' : 'text-teal-400'}`}>
                        {msg.from}
                      </span>
                      <span className="text-slate-500">{msg.time}</span>
                    </div>
                    <p className={msg.urgent ? 'text-red-200' : 'text-slate-300'}>
                      {msg.message}
                    </p>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type message..."
                  className="flex-1 px-3 py-2 rounded bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-teal-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-3 py-2 rounded bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Patient Modal */}
      {showNewPatientModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="w-full max-w-md p-6 rounded-lg bg-slate-800 border border-slate-700">
            <h3 className="text-lg font-bold text-white mb-4">Quick Registration</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Patient Name (Last, First)"
                className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-teal-500"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="number"
                  placeholder="Age"
                  className="px-3 py-2 rounded bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-teal-500"
                />
                <select className="px-3 py-2 rounded bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-teal-500">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <textarea
                placeholder="Chief Complaint"
                rows={2}
                className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-teal-500"
              />
              <select className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-teal-500">
                <option>ESI-1 Resuscitation</option>
                <option>ESI-2 Emergent</option>
                <option>ESI-3 Urgent</option>
                <option>ESI-4 Less Urgent</option>
                <option>ESI-5 Non-Urgent</option>
              </select>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowNewPatientModal(false)}
                className="flex-1 px-4 py-2 rounded bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowNewPatientModal(false)}
                className="flex-1 px-4 py-2 rounded bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold transition-colors"
              >
                Add Patient
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
