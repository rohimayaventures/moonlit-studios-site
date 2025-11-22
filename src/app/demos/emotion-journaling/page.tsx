'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Mood options
const moods = [
  { id: 1, name: "Joy", emoji: "😊", color: "bg-yellow-500" },
  { id: 2, name: "Sadness", emoji: "😢", color: "bg-blue-500" },
  { id: 3, name: "Anger", emoji: "😠", color: "bg-red-500" },
  { id: 4, name: "Fear", emoji: "😰", color: "bg-purple-500" },
  { id: 5, name: "Surprise", emoji: "😲", color: "bg-pink-500" },
  { id: 6, name: "Calm", emoji: "😌", color: "bg-teal-500" },
  { id: 7, name: "Excited", emoji: "🤩", color: "bg-orange-500" },
  { id: 8, name: "Anxious", emoji: "😬", color: "bg-indigo-500" }
];

// Mock journal entries
const mockEntries = [
  {
    id: 1,
    date: "2025-11-19",
    time: "7:30 PM",
    mood: "Calm",
    emoji: "😌",
    entry: "Today was a good day. Took a long walk in the park and felt the stress melt away. Grateful for small moments of peace.",
    intensity: 7
  },
  {
    id: 2,
    date: "2025-11-18",
    time: "9:15 AM",
    mood: "Anxious",
    emoji: "😬",
    entry: "Big presentation today. Feeling nervous but trying to focus on my breathing exercises.",
    intensity: 6
  },
  {
    id: 3,
    date: "2025-11-17",
    time: "3:45 PM",
    mood: "Joy",
    emoji: "😊",
    entry: "Got great feedback from my team! Feeling proud and accomplished. Hard work pays off.",
    intensity: 9
  }
];

export default function EmotionJournaling() {
  const [selectedMood, setSelectedMood] = useState(moods[0]);
  const [moodIntensity, setMoodIntensity] = useState(5);
  const [journalText, setJournalText] = useState("");

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      {/* Hero Image */}
      <div className="mb-8 sm:mb-12 rounded-2xl overflow-hidden border-2 border-teal-400/30">
        <Image
          src="/demos/emotion-journaling/Hero Image - Journal Interface.png"
          alt="Emotion-Aware Journaling Interface"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Hero Section - Mobile Responsive */}
      <div className="mb-8 sm:mb-12 lg:mb-16 text-center">
        <div className="inline-block p-3 sm:p-4 rounded-full bg-gradient-to-br from-teal-400/20 to-purple-400/20 mb-4 sm:mb-6">
          <svg className="w-12 h-12 sm:w-16 sm:h-16 text-teal-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
          </svg>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pearlWhite mb-4">
          Emotion-Aware Journaling Companion
        </h1>
        <p className="text-base sm:text-lg text-moonlightSilver/80 max-w-3xl mx-auto mb-2">
          Track your emotions, reflect on patterns, and support your mental wellness journey
        </p>
        <p className="text-xs sm:text-sm text-moonlightSilver/60 italic">
          A mindful space for emotional processing and self-reflection
        </p>

        {/* Feature Pills - Mobile Responsive */}
        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300">
            <span>✓</span>
            <span>Mood Tracking</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300">
            <span>✓</span>
            <span>Somatic Check-ins</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300">
            <span>✓</span>
            <span>Reflection Prompts</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300">
            <span>✓</span>
            <span>Privacy First</span>
          </div>
        </div>
      </div>

      {/* Main Journal Interface - Mobile Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
        {/* Journal Entry Form - 2/3 width on desktop */}
        <div className="lg:col-span-2 space-y-6">
          {/* Mood Selector */}
          <div className="p-5 sm:p-6 rounded-2xl border-2 border-teal-400/30 bg-gradient-to-br from-teal-900/20 to-midnight/60">
            <h2 className="text-lg sm:text-xl font-bold text-pearlWhite mb-4">How are you feeling right now?</h2>

            {/* Mood Grid - Mobile Responsive */}
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 mb-6">
              {moods.map((mood) => (
                <button
                  key={mood.id}
                  onClick={() => setSelectedMood(mood)}
                  className={`aspect-square rounded-xl flex flex-col items-center justify-center gap-1 sm:gap-2 transition-all ${
                    selectedMood.id === mood.id
                      ? `${mood.color} shadow-lg scale-110`
                      : 'bg-midnight/40 border border-moonlightSilver/20 hover:border-teal-400/50'
                  }`}
                >
                  <span className="text-2xl sm:text-3xl">{mood.emoji}</span>
                  <span className="text-[0.6rem] sm:text-xs font-semibold text-white">{mood.name}</span>
                </button>
              ))}
            </div>

            {/* Intensity Slider - Mobile Responsive */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm sm:text-base text-moonlightSilver/80">How intense is this feeling?</label>
                <span className="text-lg sm:text-xl font-bold text-teal-300">{moodIntensity}/10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={moodIntensity}
                onChange={(e) => setMoodIntensity(Number(e.target.value))}
                className="w-full h-2 bg-midnight/60 rounded-lg appearance-none cursor-pointer accent-teal-400"
              />
              <div className="flex justify-between text-xs text-moonlightSilver/60 mt-1">
                <span>Mild</span>
                <span>Moderate</span>
                <span>Intense</span>
              </div>
            </div>
          </div>

          {/* Journal Text Editor */}
          <div className="p-5 sm:p-6 rounded-2xl border-2 border-purple-400/30 bg-gradient-to-br from-purple-900/20 to-midnight/60">
            <h3 className="text-lg sm:text-xl font-bold text-pearlWhite mb-4">What's on your mind?</h3>

            <textarea
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
              rows={8}
              className="w-full px-4 py-3 rounded-xl bg-midnight/60 border border-moonlightSilver/20 text-pearlWhite text-sm sm:text-base leading-relaxed focus:border-purple-400 focus:outline-none transition-colors resize-none"
              placeholder="Start writing... let your thoughts flow freely. This is your safe space."
            />

            {/* Character Count - Mobile Responsive */}
            <div className="flex justify-between items-center mt-3 text-xs sm:text-sm text-moonlightSilver/60">
              <span>{journalText.length} characters</span>
              <span className="flex items-center gap-2">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
                <span>Private & Encrypted</span>
              </span>
            </div>
          </div>

          {/* Somatic Check-in - Mobile Responsive */}
          <div className="p-5 sm:p-6 rounded-2xl border-2 border-pink-400/30 bg-gradient-to-br from-pink-900/20 to-midnight/60">
            <h3 className="text-lg sm:text-xl font-bold text-pearlWhite mb-4">Body Scan: Where do you feel this emotion?</h3>

            {/* Body Diagram Placeholder - Mobile Responsive */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {["Head", "Chest", "Stomach", "Shoulders", "Arms", "Legs", "Hands", "Whole Body"].map((area) => (
                <button
                  key={area}
                  className="px-3 py-2 rounded-lg bg-midnight/60 border border-moonlightSilver/20 text-moonlightSilver/80 text-xs sm:text-sm hover:border-pink-400/50 hover:text-pink-300 transition-colors"
                >
                  {area}
                </button>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-moonlightSilver/70 italic">
              Notice sensations without judgment. Where does this emotion live in your body?
            </p>
          </div>

          {/* Save Entry Button - Mobile Responsive */}
          <button className="w-full px-6 py-3 sm:py-4 rounded-full bg-gradient-to-r from-teal-500 to-purple-500 text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-teal-500/50 hover:scale-105 transition-all">
            Save Journal Entry
          </button>
        </div>

        {/* Sidebar - 1/3 width on desktop */}
        <div className="lg:col-span-1 space-y-6">
          {/* Reflection Prompt */}
          <div className="p-5 sm:p-6 rounded-2xl border-2 border-teal-400/30 bg-gradient-to-br from-teal-900/20 to-midnight/60 sticky top-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-teal-400/20 flex items-center justify-center">
                <span className="text-xl">💭</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-pearlWhite">Today's Reflection Prompt</h3>
            </div>

            <p className="text-sm sm:text-base text-teal-200 mb-4 leading-relaxed">
              "What would you say to a friend feeling this way? Can you offer yourself that same compassion?"
            </p>

            <button className="w-full px-4 py-2 rounded-lg border border-teal-400/40 text-teal-300 text-xs sm:text-sm font-semibold hover:bg-teal-400/10 transition-colors">
              Generate New Prompt
            </button>
          </div>

          {/* Quick Stats */}
          <div className="p-5 sm:p-6 rounded-2xl border-2 border-purple-400/30 bg-gradient-to-br from-purple-900/20 to-midnight/60">
            <h3 className="text-base sm:text-lg font-bold text-pearlWhite mb-4">Your Journey</h3>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs sm:text-sm text-moonlightSilver/80">Entries This Week</span>
                <span className="text-lg sm:text-xl font-bold text-purple-300">5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs sm:text-sm text-moonlightSilver/80">Current Streak</span>
                <span className="text-lg sm:text-xl font-bold text-teal-300">3 days</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs sm:text-sm text-moonlightSilver/80">Total Entries</span>
                <span className="text-lg sm:text-xl font-bold text-pink-300">42</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Entries - Mobile Responsive */}
      <div className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-pearlWhite mb-6 sm:mb-8">Recent Entries</h2>

        <div className="space-y-4">
          {mockEntries.map((entry) => (
            <div
              key={entry.id}
              className="p-5 sm:p-6 rounded-xl border-2 border-moonlightSilver/20 bg-midnight/40 hover:border-teal-400/50 transition-colors cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl">{entry.emoji}</span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-pearlWhite">{entry.mood}</h3>
                    <p className="text-xs sm:text-sm text-moonlightSilver/60">{entry.date} at {entry.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-moonlightSilver/60">Intensity:</span>
                  <span className="text-sm font-bold text-teal-300">{entry.intensity}/10</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-moonlightSilver/80 leading-relaxed line-clamp-2">
                {entry.entry}
              </p>
            </div>
          ))}
        </div>

        <button className="w-full mt-6 px-6 py-3 rounded-full border-2 border-teal-400/40 text-teal-300 font-bold text-sm sm:text-base uppercase tracking-wider hover:bg-teal-400/10 transition-colors">
          View All Entries
        </button>
      </div>

      {/* Insights Dashboard Preview - Mobile Responsive */}
      <div className="mb-12 sm:mb-16 p-6 sm:p-8 lg:p-12 rounded-2xl border-2 border-purple-400/30 bg-gradient-to-br from-purple-900/20 to-midnight/60">
        <h2 className="text-2xl sm:text-3xl font-bold text-pearlWhite text-center mb-6 sm:mb-8">
          Your Emotional Insights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Mock Chart 1 */}
          <div className="p-5 rounded-xl bg-midnight/60 border border-moonlightSilver/10">
            <h3 className="text-sm font-bold text-moonlightSilver/70 uppercase tracking-wider mb-4">Mood Trends (30 Days)</h3>
            <div className="h-32 sm:h-40 flex items-end gap-2">
              {[7, 5, 8, 6, 9, 7, 8].map((height, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-teal-500 to-purple-500 rounded-t" style={{ height: `${height * 10}%` }}></div>
              ))}
            </div>
          </div>

          {/* Mock Chart 2 */}
          <div className="p-5 rounded-xl bg-midnight/60 border border-moonlightSilver/10">
            <h3 className="text-sm font-bold text-moonlightSilver/70 uppercase tracking-wider mb-4">Most Common Emotions</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">😊</span>
                <div className="flex-1 h-2 bg-midnight/80 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <span className="text-xs text-moonlightSilver/60">75%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">😌</span>
                <div className="flex-1 h-2 bg-midnight/80 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-500 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <span className="text-xs text-moonlightSilver/60">60%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">😬</span>
                <div className="flex-1 h-2 bg-midnight/80 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: '40%' }}></div>
                </div>
                <span className="text-xs text-moonlightSilver/60">40%</span>
              </div>
            </div>
          </div>

          {/* Export to Therapy */}
          <div className="p-5 rounded-xl bg-midnight/60 border border-moonlightSilver/10">
            <h3 className="text-sm font-bold text-moonlightSilver/70 uppercase tracking-wider mb-4">Share with Therapist</h3>
            <p className="text-xs sm:text-sm text-moonlightSilver/80 mb-4">
              Export your entries as a PDF report to share with your mental health provider.
            </p>
            <button className="w-full px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs sm:text-sm font-semibold hover:bg-purple-500/30 transition-colors">
              Export PDF Report
            </button>
          </div>
        </div>
      </div>

      {/* Feature Highlights - Mobile Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
        <div className="p-6 rounded-xl border-2 border-teal-400/30 bg-gradient-to-br from-teal-900/20 to-midnight/40">
          <span className="text-3xl sm:text-4xl mb-3 block">🔒</span>
          <h3 className="text-base sm:text-lg font-bold text-pearlWhite mb-2">Privacy First</h3>
          <p className="text-xs sm:text-sm text-moonlightSilver/80">
            Your journal is encrypted and private. No one reads your entries but you.
          </p>
        </div>

        <div className="p-6 rounded-xl border-2 border-purple-400/30 bg-gradient-to-br from-purple-900/20 to-midnight/40">
          <span className="text-3xl sm:text-4xl mb-3 block">📊</span>
          <h3 className="text-base sm:text-lg font-bold text-pearlWhite mb-2">Pattern Recognition</h3>
          <p className="text-xs sm:text-sm text-moonlightSilver/80">
            Track emotional patterns over time. Notice what triggers certain feelings.
          </p>
        </div>

        <div className="p-6 rounded-xl border-2 border-pink-400/30 bg-gradient-to-br from-pink-900/20 to-midnight/40">
          <span className="text-3xl sm:text-4xl mb-3 block">💝</span>
          <h3 className="text-base sm:text-lg font-bold text-pearlWhite mb-2">Therapist-Friendly</h3>
          <p className="text-xs sm:text-sm text-moonlightSilver/80">
            Export insights to share with your mental health provider. Bridge journaling and therapy.
          </p>
        </div>
      </div>

      {/* Final CTA - Mobile Responsive */}
      <div className="p-6 sm:p-8 lg:p-12 rounded-2xl border-2 border-teal-400/40 bg-gradient-to-br from-teal-400/10 via-purple-400/5 to-midnight/20 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pearlWhite mb-4">
          Build Your Own Mental Wellness Tool
        </h2>
        <p className="text-sm sm:text-base text-moonlightSilver/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
          This emotion-aware journaling companion demonstrates thoughtful UX design for mental health applications.
          Gentle, supportive, and privacy-focused.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href="/get-quote"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-teal-500 to-purple-500 text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-teal-500/50 hover:scale-105 transition-all text-center"
          >
            Get Your Custom Wellness App →
          </Link>
          <Link
            href="/portfolio"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-teal-400/40 text-teal-300 font-bold text-sm sm:text-base uppercase tracking-wider hover:bg-teal-400/10 transition-all text-center"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
