'use client';

import { useState } from 'react';
import Link from 'next/link';

// Mock patient data
const mockPatients = [
  {
    id: 1,
    name: "Patient A",
    mrn: "MRN-001234",
    age: 67,
    chiefComplaint: "Chest pain radiating to left arm",
    acuity: "Level 2 - Urgent",
    acuityColor: "bg-orange-500",
    vitals: {
      hr: 105,
      bp: "165/95",
      temp: "98.6°F",
      spo2: 94,
      rr: 22
    },
    arrivalTime: "14:23",
    waitTime: "12 min",
    assignedTo: "RN Thompson",
    alerts: ["High BP", "Cardiac Alert"]
  },
  {
    id: 2,
    name: "Patient B",
    mrn: "MRN-005678",
    age: 34,
    chiefComplaint: "Laceration to right hand - needs sutures",
    acuity: "Level 3 - Less Urgent",
    acuityColor: "bg-yellow-500",
    vitals: {
      hr: 82,
      bp: "128/76",
      temp: "98.2°F",
      spo2: 99,
      rr: 16
    },
    arrivalTime: "14:45",
    waitTime: "34 min",
    assignedTo: "RN Martinez",
    alerts: []
  },
  {
    id: 3,
    name: "Patient C",
    mrn: "MRN-009012",
    age: 8,
    chiefComplaint: "Fever 102°F, vomiting x3",
    acuity: "Level 3 - Less Urgent",
    acuityColor: "bg-yellow-500",
    vitals: {
      hr: 118,
      bp: "95/62",
      temp: "102.3°F",
      spo2: 98,
      rr: 24
    },
    arrivalTime: "15:02",
    waitTime: "17 min",
    assignedTo: "RN Chen",
    alerts: ["Pediatric", "High Temp"]
  },
  {
    id: 4,
    name: "Patient D",
    mrn: "MRN-003456",
    age: 52,
    chiefComplaint: "Difficulty breathing, wheezing",
    acuity: "Level 2 - Urgent",
    acuityColor: "bg-orange-500",
    vitals: {
      hr: 112,
      bp: "142/88",
      temp: "98.9°F",
      spo2: 91,
      rr: 28
    },
    arrivalTime: "15:11",
    waitTime: "8 min",
    assignedTo: "RN Thompson",
    alerts: ["Low O2", "Respiratory"]
  },
  {
    id: 5,
    name: "Patient E",
    mrn: "MRN-007890",
    age: 23,
    chiefComplaint: "Ankle sprain after fall",
    acuity: "Level 4 - Standard",
    acuityColor: "bg-green-500",
    vitals: {
      hr: 78,
      bp: "118/72",
      temp: "98.4°F",
      spo2: 99,
      rr: 14
    },
    arrivalTime: "15:18",
    waitTime: "1 min",
    assignedTo: "RN Martinez",
    alerts: []
  }
];

export default function ClinicalTriageDashboard() {
  const [selectedPatient, setSelectedPatient] = useState(mockPatients[0]);
  const [showSBAR, setShowSBAR] = useState(false);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      {/* Hero Section - Mobile Responsive */}
      <div className="mb-6 sm:mb-8 lg:mb-12">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-healingWaterTeal to-spiritGlowBlue flex items-center justify-center">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-midnight" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
            </svg>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pearlWhite">
              Clinical Triage Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-moonlightSilver/70 mt-1">
              Emergency Department Workflow System
            </p>
          </div>
        </div>

        <p className="text-sm sm:text-base text-moonlightSilver/90 leading-relaxed max-w-3xl">
          Built by a nurse AND full-stack developer who understands ED chaos. Real-time patient queue management,
          acuity scoring, SBAR handoff cards, and alert escalation designed for clinical workflows.
        </p>

        {/* Tech Stack - Mobile Responsive */}
        <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
          {["Next.js", "TypeScript", "Supabase", "Pusher", "FHIR"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-healingWaterTeal/20 border border-healingWaterTeal/40 text-healingWaterTeal text-xs sm:text-sm font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Dashboard Grid - Mobile Responsive */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Patient Queue - Full width on mobile, 2/3 on desktop */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-pearlWhite flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-healingWaterTeal animate-pulse"></span>
              Patient Queue ({mockPatients.length})
            </h2>
            <button className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-healingWaterTeal/20 border border-healingWaterTeal/40 text-healingWaterTeal text-xs sm:text-sm font-semibold hover:bg-healingWaterTeal/30 transition-colors">
              + New Patient
            </button>
          </div>

          {/* Patient Cards - Scrollable on mobile */}
          <div className="space-y-3 sm:space-y-4">
            {mockPatients.map((patient) => (
              <div
                key={patient.id}
                onClick={() => {
                  setSelectedPatient(patient);
                  setShowSBAR(false);
                }}
                className={`p-4 sm:p-5 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedPatient.id === patient.id
                    ? 'border-healingWaterTeal bg-healingWaterTeal/10'
                    : 'border-moonlightSilver/20 bg-midnight/40 hover:border-healingWaterTeal/50'
                }`}
              >
                {/* Patient Header - Mobile Responsive */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 sm:gap-3 mb-1">
                      <h3 className="text-base sm:text-lg font-bold text-pearlWhite">{patient.name}</h3>
                      <span className="text-xs text-moonlightSilver/60">{patient.mrn}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-moonlightSilver/80 line-clamp-1">
                      {patient.chiefComplaint}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className={`px-3 py-1 rounded-full ${patient.acuityColor} text-white text-xs font-bold whitespace-nowrap`}>
                      {patient.acuity}
                    </span>
                  </div>
                </div>

                {/* Vitals - Mobile Responsive Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3 mb-3">
                  <div className="text-center p-2 rounded-lg bg-deepOcean/60">
                    <p className="text-[0.65rem] text-moonlightSilver/60 uppercase">HR</p>
                    <p className="text-sm sm:text-base font-bold text-pearlWhite">{patient.vitals.hr}</p>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-deepOcean/60">
                    <p className="text-[0.65rem] text-moonlightSilver/60 uppercase">BP</p>
                    <p className="text-sm sm:text-base font-bold text-pearlWhite">{patient.vitals.bp}</p>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-deepOcean/60">
                    <p className="text-[0.65rem] text-moonlightSilver/60 uppercase">SpO2</p>
                    <p className="text-sm sm:text-base font-bold text-pearlWhite">{patient.vitals.spo2}%</p>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-deepOcean/60">
                    <p className="text-[0.65rem] text-moonlightSilver/60 uppercase">Temp</p>
                    <p className="text-sm sm:text-base font-bold text-pearlWhite">{patient.vitals.temp}</p>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-deepOcean/60">
                    <p className="text-[0.65rem] text-moonlightSilver/60 uppercase">RR</p>
                    <p className="text-sm sm:text-base font-bold text-pearlWhite">{patient.vitals.rr}</p>
                  </div>
                </div>

                {/* Footer - Mobile Responsive */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="text-moonlightSilver/60">Arrived: {patient.arrivalTime}</span>
                    <span className="text-lunarGold font-semibold">Wait: {patient.waitTime}</span>
                  </div>
                  <span className="text-moonlightSilver/60">{patient.assignedTo}</span>
                </div>

                {/* Alerts - Mobile Responsive */}
                {patient.alerts.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {patient.alerts.map((alert) => (
                      <span
                        key={alert}
                        className="px-2 py-1 rounded-full bg-phoenixFire/20 border border-phoenixFire/40 text-phoenixFire text-[0.65rem] font-bold"
                      >
                        ⚠️ {alert}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Patient Detail Sidebar - Full width on mobile, 1/3 on desktop */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-4">
            {/* SBAR Handoff Card */}
            <div className="p-4 sm:p-5 rounded-xl border-2 border-spiritGlowBlue/30 bg-gradient-to-br from-deepOcean/80 to-midnight/60 backdrop-blur">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-bold text-pearlWhite">Patient Detail</h3>
                <button
                  onClick={() => setShowSBAR(!showSBAR)}
                  className="px-3 py-1.5 rounded-lg bg-spiritGlowBlue/20 border border-spiritGlowBlue/40 text-spiritGlowBlue text-xs font-semibold hover:bg-spiritGlowBlue/30 transition-colors"
                >
                  {showSBAR ? 'Hide' : 'View'} SBAR
                </button>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-xs text-moonlightSilver/60 uppercase tracking-wider mb-1">Patient</p>
                  <p className="text-sm sm:text-base font-bold text-pearlWhite">{selectedPatient.name}</p>
                  <p className="text-xs text-moonlightSilver/70">{selectedPatient.mrn} • Age {selectedPatient.age}</p>
                </div>

                <div>
                  <p className="text-xs text-moonlightSilver/60 uppercase tracking-wider mb-1">Chief Complaint</p>
                  <p className="text-sm text-moonlightSilver/90">{selectedPatient.chiefComplaint}</p>
                </div>

                <div>
                  <p className="text-xs text-moonlightSilver/60 uppercase tracking-wider mb-1">Acuity Level</p>
                  <span className={`inline-block px-3 py-1 rounded-full ${selectedPatient.acuityColor} text-white text-xs font-bold`}>
                    {selectedPatient.acuity}
                  </span>
                </div>

                {showSBAR && (
                  <div className="mt-4 p-4 rounded-lg bg-midnight/60 border border-healingWaterTeal/30 space-y-3">
                    <div>
                      <p className="text-xs font-bold text-healingWaterTeal uppercase tracking-wider mb-1">
                        Situation
                      </p>
                      <p className="text-xs text-moonlightSilver/90">
                        {selectedPatient.age}-year-old presenting with {selectedPatient.chiefComplaint.toLowerCase()}.
                        {selectedPatient.alerts.length > 0 && ` Active alerts: ${selectedPatient.alerts.join(', ')}.`}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-spiritGlowBlue uppercase tracking-wider mb-1">
                        Background
                      </p>
                      <p className="text-xs text-moonlightSilver/90">
                        Patient arrived at {selectedPatient.arrivalTime}, currently waiting {selectedPatient.waitTime}.
                        Assigned to {selectedPatient.assignedTo}.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-lunarGold uppercase tracking-wider mb-1">
                        Assessment
                      </p>
                      <p className="text-xs text-moonlightSilver/90">
                        Vital signs: HR {selectedPatient.vitals.hr}, BP {selectedPatient.vitals.bp},
                        SpO2 {selectedPatient.vitals.spo2}%, RR {selectedPatient.vitals.rr},
                        Temp {selectedPatient.vitals.temp}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-phoenixFire uppercase tracking-wider mb-1">
                        Recommendation
                      </p>
                      <p className="text-xs text-moonlightSilver/90">
                        {selectedPatient.acuity === "Level 2 - Urgent"
                          ? "Expedite to treatment room. Consider EKG/labs/imaging based on complaint."
                          : "Continue monitoring in waiting room. Reassess if condition changes."}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions - Mobile Responsive */}
            <div className="p-4 rounded-xl border-2 border-moonlightSilver/20 bg-midnight/40 space-y-2">
              <h4 className="text-sm font-bold text-pearlWhite mb-3">Quick Actions</h4>
              <button className="w-full px-4 py-2 rounded-lg bg-healingWaterTeal/20 border border-healingWaterTeal/40 text-healingWaterTeal text-sm font-semibold hover:bg-healingWaterTeal/30 transition-colors">
                Send to Room
              </button>
              <button className="w-full px-4 py-2 rounded-lg bg-phoenixFire/20 border border-phoenixFire/40 text-phoenixFire text-sm font-semibold hover:bg-phoenixFire/30 transition-colors">
                Escalate Alert
              </button>
              <button className="w-full px-4 py-2 rounded-lg bg-lunarGold/20 border border-lunarGold/40 text-lunarGold text-sm font-semibold hover:bg-lunarGold/30 transition-colors">
                Print SBAR
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Highlights - Mobile Responsive */}
      <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="p-6 rounded-xl border-2 border-healingWaterTeal/30 bg-gradient-to-br from-deepOcean/60 to-midnight/40">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-healingWaterTeal/20 flex items-center justify-center mb-4">
            <span className="text-2xl">⏱️</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-pearlWhite mb-2">Real-Time Queue Management</h3>
          <p className="text-xs sm:text-sm text-moonlightSilver/80">
            Track patient wait times, acuity levels, and room assignments in real-time. Built for the chaos of ED workflows.
          </p>
        </div>

        <div className="p-6 rounded-xl border-2 border-spiritGlowBlue/30 bg-gradient-to-br from-deepOcean/60 to-midnight/40">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-spiritGlowBlue/20 flex items-center justify-center mb-4">
            <span className="text-2xl">📋</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-pearlWhite mb-2">SBAR Handoff Cards</h3>
          <p className="text-xs sm:text-sm text-moonlightSilver/80">
            Structured handoff communication designed by a nurse. Reduce cognitive load, prevent critical details from falling through cracks.
          </p>
        </div>

        <div className="p-6 rounded-xl border-2 border-phoenixFire/30 bg-gradient-to-br from-deepOcean/60 to-midnight/40">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-phoenixFire/20 flex items-center justify-center mb-4">
            <span className="text-2xl">🚨</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-pearlWhite mb-2">Alert Escalation System</h3>
          <p className="text-xs sm:text-sm text-moonlightSilver/80">
            Automated alerts for critical vitals, prolonged wait times, and high-acuity patients. Never miss a decompensating patient.
          </p>
        </div>
      </div>

      {/* CTA Section - Mobile Responsive */}
      <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl border-2 border-healingWaterTeal/40 bg-gradient-to-br from-healingWaterTeal/10 via-spiritGlowBlue/5 to-deepOcean/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-pearlWhite mb-4">
            Built by Someone Who's Actually Worked ED
          </h2>
          <p className="text-sm sm:text-base text-moonlightSilver/90 mb-6">
            I'm a nurse AND full-stack developer. I've triaged patients, worked code blues, and felt the frustration
            of clunky EHR systems. This dashboard is designed for real clinical workflows—not tech demos.
          </p>
          <Link
            href="/get-quote"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-healingWaterTeal to-spiritGlowBlue text-midnight font-bold text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-healingWaterTeal/50 hover:scale-105 transition-all"
          >
            Get a Custom Health x Tech Solution →
          </Link>
        </div>
      </div>
    </div>
  );
}
