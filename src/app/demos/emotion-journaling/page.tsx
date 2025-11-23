'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Color scheme: Teal, Lavender, Sage green, Lighter midnight backgrounds, Moonlight silver
// Theme: Calm, introspective, supportive - LIGHTER than before

// Mood options
const moods = [
  { id: 1, name: "Joy", emoji: "😊", color: "bg-yellow-400" },
  { id: 2, name: "Sadness", emoji: "😢", color: "bg-blue-400" },
  { id: 3, name: "Anger", emoji: "😠", color: "bg-red-400" },
  { id: 4, name: "Fear", emoji: "😰", color: "bg-purple-400" },
  { id: 5, name: "Surprise", emoji: "😲", color: "bg-pink-400" },
  { id: 6, name: "Calm", emoji: "😌", color: "bg-teal-400" },
  { id: 7, name: "Excited", emoji: "🤩", color: "bg-orange-400" },
  { id: 8, name: "Anxious", emoji: "😬", color: "bg-indigo-400" }
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
    <div className="min-h-screen bg-gradient-to-br from-[#E8F4F4] via-[#F0E8F4] to-[#E8F0E8]">
      {/* Hero Image */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 mb-8 sm:mb-12">
        <div className="rounded-2xl overflow-hidden border-2 border-[#7ECECE]/30 shadow-lg">
          <Image
            src="/demos/emotion-journaling/Hero Image - Journal Interface.png"
            alt="Emotion-Aware Journaling Interface"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Hero Section - LIGHT THEME */}
        <div className="mb-8 sm:mb-12 lg:mb-16 text-center">
          <div className="inline-block p-3 sm:p-4 rounded-full bg-gradient-to-br from-[#7ECECE]/20 to-[#B8A8D8]/20 mb-4 sm:mb-6">
            <svg className="w-12 h-12 sm:w-16 sm:h-16 text-[#5AAEAE]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
            </svg>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A5A6A] mb-4">
            Emotion-Aware Journaling Companion
          </h1>
          <p className="text-base sm:text-lg text-[#6A7A8A] max-w-3xl mx-auto mb-2">
            Track your emotions, reflect on patterns, and support your mental wellness journey
          </p>
          <p className="text-xs sm:text-sm text-[#8A9AAA] italic">
            A mindful space for emotional processing and self-reflection
          </p>

          {/* Feature Pills - LIGHT THEME */}
          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border-2 border-[#7ECECE]/50 text-[#5AAEAE] font-semibold">
              <span>✓</span>
              <span>Mood Tracking</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border-2 border-[#B8A8D8]/50 text-[#8878B8] font-semibold">
              <span>✓</span>
              <span>Somatic Check-ins</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border-2 border-[#A8C8A8]/50 text-[#78A878] font-semibold">
              <span>✓</span>
              <span>Reflection Prompts</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border-2 border-[#7ECECE]/50 text-[#5AAEAE] font-semibold">
              <span>✓</span>
              <span>Privacy First</span>
            </div>
          </div>
        </div>

        {/* Main Journal Interface - LIGHT THEME */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Journal Entry Form - 2/3 width on desktop */}
          <div className="lg:col-span-2 space-y-6">
            {/* Mood Selector - LIGHT THEME */}
            <div className="p-5 sm:p-6 rounded-2xl border-2 border-[#7ECECE]/40 bg-white/80">
              <h2 className="text-lg sm:text-xl font-bold text-[#4A5A6A] mb-4">How are you feeling right now?</h2>

              {/* Mood Grid */}
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 mb-6">
                {moods.map((mood) => (
                  <button
                    key={mood.id}
                    onClick={() => setSelectedMood(mood)}
                    className={`aspect-square rounded-xl flex flex-col items-center justify-center gap-1 sm:gap-2 transition-all ${
                      selectedMood.id === mood.id
                        ? `${mood.color} shadow-lg scale-110`
                        : 'bg-[#F5FAFA] border-2 border-[#D8E8E8] hover:border-[#7ECECE]/60'
                    }`}
                  >
                    <span className="text-2xl sm:text-3xl">{mood.emoji}</span>
                    <span className="text-[0.6rem] sm:text-xs font-semibold text-[#4A5A6A]">{mood.name}</span>
                  </button>
                ))}
              </div>

              {/* Intensity Slider - LIGHT THEME */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm sm:text-base text-[#6A7A8A]">How intense is this feeling?</label>
                  <span className="text-lg sm:text-xl font-bold text-[#5AAEAE]">{moodIntensity}/10</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={moodIntensity}
                  onChange={(e) => setMoodIntensity(Number(e.target.value))}
                  className="w-full h-2 bg-[#E8F4F4] rounded-lg appearance-none cursor-pointer accent-teal-400"
                />
                <div className="flex justify-between text-xs text-[#8A9AAA] mt-1">
                  <span>Mild</span>
                  <span>Moderate</span>
                  <span>Intense</span>
                </div>
              </div>
            </div>

            {/* Journal Text Editor - LIGHT THEME */}
            <div className="p-5 sm:p-6 rounded-2xl border-2 border-[#B8A8D8]/40 bg-white/80">
              <h3 className="text-lg sm:text-xl font-bold text-[#4A5A6A] mb-4">What's on your mind?</h3>

              <textarea
                value={journalText}
                onChange={(e) => setJournalText(e.target.value)}
                rows={8}
                className="w-full px-4 py-3 rounded-xl bg-[#F8F4FC] border-2 border-[#E8DCF4] text-[#4A5A6A] text-sm sm:text-base leading-relaxed focus:border-[#B8A8D8] focus:outline-none transition-colors resize-none"
                placeholder="Start writing... let your thoughts flow freely. This is your safe space."
              />

              {/* Character Count */}
              <div className="flex justify-between items-center mt-3 text-xs sm:text-sm text-[#8A9AAA]">
                <span>{journalText.length} characters</span>
                <span className="flex items-center gap-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#5AAEAE]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                  <span>Private & Encrypted</span>
                </span>
              </div>
            </div>

            {/* Somatic Check-in - LIGHT THEME */}
            <div className="p-5 sm:p-6 rounded-2xl border-2 border-[#D8B8C8]/40 bg-white/80">
              <h3 className="text-lg sm:text-xl font-bold text-[#4A5A6A] mb-4">Body Scan: Where do you feel this emotion?</h3>

              {/* Body Diagram Placeholder */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                {["Head", "Chest", "Stomach", "Shoulders", "Arms", "Legs", "Hands", "Whole Body"].map((area) => (
                  <button
                    key={area}
                    className="px-3 py-2 rounded-lg bg-[#F8F4FC] border-2 border-[#E8DCF4] text-[#6A7A8A] text-xs sm:text-sm hover:border-[#D8B8C8] hover:text-[#A88898] transition-colors font-medium"
                  >
                    {area}
                  </button>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#8A9AAA] italic">
                Notice sensations without judgment. Where does this emotion live in your body?
              </p>
            </div>

            {/* Save Entry Button - LIGHT THEME */}
            <button className="w-full px-6 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#5AAEAE] to-[#8878B8] text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              Save Journal Entry
            </button>
          </div>

          {/* Sidebar - 1/3 width on desktop - LIGHT THEME */}
          <div className="lg:col-span-1 space-y-6">
            {/* Reflection Prompt - LIGHT THEME */}
            <div className="p-5 sm:p-6 rounded-2xl border-2 border-[#7ECECE]/40 bg-white/80 sticky top-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#7ECECE]/20 flex items-center justify-center">
                  <span className="text-xl">💭</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#4A5A6A]">Today's Reflection Prompt</h3>
              </div>

              <p className="text-sm sm:text-base text-[#5AAEAE] mb-4 leading-relaxed">
                "What would you say to a friend feeling this way? Can you offer yourself that same compassion?"
              </p>

              <button className="w-full px-4 py-2 rounded-lg border-2 border-[#7ECECE]/60 text-[#5AAEAE] text-xs sm:text-sm font-semibold hover:bg-[#7ECECE]/10 transition-colors">
                Generate New Prompt
              </button>
            </div>

            {/* Quick Stats - LIGHT THEME */}
            <div className="p-5 sm:p-6 rounded-2xl border-2 border-[#B8A8D8]/40 bg-white/80">
              <h3 className="text-base sm:text-lg font-bold text-[#4A5A6A] mb-4">Your Journey</h3>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-[#6A7A8A]">Entries This Week</span>
                  <span className="text-lg sm:text-xl font-bold text-[#8878B8]">5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-[#6A7A8A]">Current Streak</span>
                  <span className="text-lg sm:text-xl font-bold text-[#5AAEAE]">3 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-[#6A7A8A]">Total Entries</span>
                  <span className="text-lg sm:text-xl font-bold text-[#A88898]">42</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Entries - LIGHT THEME */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#4A5A6A] mb-6 sm:mb-8">Recent Entries</h2>

          <div className="space-y-4">
            {mockEntries.map((entry) => (
              <div
                key={entry.id}
                className="p-5 sm:p-6 rounded-xl border-2 border-[#D8E8E8] bg-white/80 hover:border-[#7ECECE]/60 transition-colors cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl">{entry.emoji}</span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#4A5A6A]">{entry.mood}</h3>
                      <p className="text-xs sm:text-sm text-[#8A9AAA]">{entry.date} at {entry.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#8A9AAA]">Intensity:</span>
                    <span className="text-sm font-bold text-[#5AAEAE]">{entry.intensity}/10</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#6A7A8A] leading-relaxed line-clamp-2">
                  {entry.entry}
                </p>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 px-6 py-3 rounded-full border-2 border-[#7ECECE]/60 text-[#5AAEAE] font-bold text-sm sm:text-base uppercase tracking-wider hover:bg-[#7ECECE]/10 transition-colors">
            View All Entries
          </button>
        </div>

        {/* Insights Dashboard Preview - LIGHT THEME */}
        <div className="mb-12 sm:mb-16 p-6 sm:p-8 lg:p-12 rounded-2xl border-2 border-[#B8A8D8]/40 bg-white/60">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#4A5A6A] text-center mb-6 sm:mb-8">
            Your Emotional Insights
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mock Chart 1 */}
            <div className="p-5 rounded-xl bg-[#F5FAFA] border-2 border-[#D8E8E8]">
              <h3 className="text-sm font-bold text-[#6A7A8A] uppercase tracking-wider mb-4">Mood Trends (30 Days)</h3>
              <div className="h-32 sm:h-40 flex items-end gap-2">
                {[7, 5, 8, 6, 9, 7, 8].map((height, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-[#5AAEAE] to-[#8878B8] rounded-t" style={{ height: `${height * 10}%` }}></div>
                ))}
              </div>
            </div>

            {/* Mock Chart 2 */}
            <div className="p-5 rounded-xl bg-[#F5FAFA] border-2 border-[#D8E8E8]">
              <h3 className="text-sm font-bold text-[#6A7A8A] uppercase tracking-wider mb-4">Most Common Emotions</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">😊</span>
                  <div className="flex-1 h-2 bg-[#E8F4F4] rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <span className="text-xs text-[#8A9AAA]">75%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">😌</span>
                  <div className="flex-1 h-2 bg-[#E8F4F4] rounded-full overflow-hidden">
                    <div className="h-full bg-teal-400 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <span className="text-xs text-[#8A9AAA]">60%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">😬</span>
                  <div className="flex-1 h-2 bg-[#E8F4F4] rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-400 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <span className="text-xs text-[#8A9AAA]">40%</span>
                </div>
              </div>
            </div>

            {/* Export to Therapy */}
            <div className="p-5 rounded-xl bg-[#F5FAFA] border-2 border-[#D8E8E8]">
              <h3 className="text-sm font-bold text-[#6A7A8A] uppercase tracking-wider mb-4">Share with Therapist</h3>
              <p className="text-xs sm:text-sm text-[#6A7A8A] mb-4">
                Export your entries as a PDF report to share with your mental health provider.
              </p>
              <button className="w-full px-4 py-2 rounded-lg bg-[#B8A8D8]/20 border-2 border-[#B8A8D8]/60 text-[#8878B8] text-xs sm:text-sm font-semibold hover:bg-[#B8A8D8]/30 transition-colors">
                Export PDF Report
              </button>
            </div>
          </div>
        </div>

        {/* Feature Highlights - LIGHT THEME */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="p-6 rounded-xl border-2 border-[#7ECECE]/40 bg-white/80">
            <span className="text-3xl sm:text-4xl mb-3 block">🔒</span>
            <h3 className="text-base sm:text-lg font-bold text-[#4A5A6A] mb-2">Privacy First</h3>
            <p className="text-xs sm:text-sm text-[#6A7A8A]">
              Your journal is encrypted and private. No one reads your entries but you.
            </p>
          </div>

          <div className="p-6 rounded-xl border-2 border-[#B8A8D8]/40 bg-white/80">
            <span className="text-3xl sm:text-4xl mb-3 block">📊</span>
            <h3 className="text-base sm:text-lg font-bold text-[#4A5A6A] mb-2">Pattern Recognition</h3>
            <p className="text-xs sm:text-sm text-[#6A7A8A]">
              Track emotional patterns over time. Notice what triggers certain feelings.
            </p>
          </div>

          <div className="p-6 rounded-xl border-2 border-[#A8C8A8]/40 bg-white/80">
            <span className="text-3xl sm:text-4xl mb-3 block">💝</span>
            <h3 className="text-base sm:text-lg font-bold text-[#4A5A6A] mb-2">Therapist-Friendly</h3>
            <p className="text-xs sm:text-sm text-[#6A7A8A]">
              Export insights to share with your mental health provider. Bridge journaling and therapy.
            </p>
          </div>
        </div>

        {/* Final CTA - LIGHT THEME */}
        <div className="p-6 sm:p-8 lg:p-12 rounded-2xl border-2 border-[#7ECECE]/50 bg-gradient-to-br from-[#E8F4F4]/60 via-white/80 to-[#F0E8F4]/40 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4A5A6A] mb-4">
            Build Your Own Mental Wellness Tool
          </h2>
          <p className="text-sm sm:text-base text-[#6A7A8A] mb-6 sm:mb-8 max-w-2xl mx-auto">
            This emotion-aware journaling companion demonstrates thoughtful UX design for mental health applications.
            Gentle, supportive, and privacy-focused.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/get-quote"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#5AAEAE] to-[#8878B8] text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all text-center"
            >
              Get Your Custom Wellness App →
            </Link>
            <Link
              href="/portfolio"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-[#7ECECE]/60 text-[#5AAEAE] bg-white/60 font-bold text-sm sm:text-base uppercase tracking-wider hover:bg-[#7ECECE]/10 transition-all text-center"
            >
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
