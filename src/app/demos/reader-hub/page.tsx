'use client';

import React, { useState, useEffect } from 'react';
import {
  BookOpen, Map, Users, Mail, Star, ChevronRight, Feather, Compass, X,
  Type, ShoppingCart, Download, Check, Sparkles, Instagram, BookMarked,
  Heart, Quote, Swords, Crown, Shield, Menu, Radio
} from 'lucide-react';

// --- Types & Data ---
interface Book {
  id: number;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  releaseDate: string;
  pages: number | null;
  rating: number | null;
  reviews: number | null;
  status: 'Available' | 'Pre-Order' | 'In Progress';
  sampleChapter: string | null;
}

interface Character {
  id: string;
  name: string;
  title: string;
  description: string;
  traits: string[];
  quote: string;
  icon: React.ElementType;
  relationships: { name: string; relation: string }[];
}

interface MapLocation {
  id: string;
  name: string;
  x: number;
  y: number;
  type: string;
  description: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "The Shattered Crown",
    subtitle: "Throne of Shadows, Book I",
    tagline: "A kingdom divided. A power awakened.",
    description: "When Princess Elara discovers she can wield forbidden shadow magic, she must choose between her birthright and the dark power that could save—or destroy—her kingdom. As civil war looms and ancient enemies stir, Elara finds unlikely allies in a disgraced knight and a mysterious stranger with secrets of his own.",
    releaseDate: "Available Now",
    pages: 412,
    rating: 4.7,
    reviews: 2847,
    status: 'Available',
    sampleChapter: `Chapter One: The Inheritance

The crown felt heavier than Elara remembered.

She stood before the mirror in her mother's chambers—her chambers now, she supposed—and adjusted the circlet of silver and onyx that marked her as heir to the Shadowthrone. The metal was cold against her temples, a weight that pressed not just on her brow but somewhere deeper, in the hollow space beneath her ribs where grief had taken root.

Three days since the Queen's burial. Three days since Elara had spoken the words that bound her to a kingdom on the brink of war.

"Your Highness." Commander Thorne's voice came from the doorway, carefully neutral. "The council awaits."

Elara met her own eyes in the mirror—her mother's eyes, everyone said, that peculiar shade of violet that marked the royal bloodline. But where Queen Seraphine's gaze had been steady as stone, Elara saw only uncertainty reflected back.

She was twenty-three years old, trained in diplomacy and swordcraft, educated in the histories of seven kingdoms. None of it had prepared her for this.

"Has there been word from the border?" she asked without turning.

"The Valdris forces have not moved. Yet." A pause. "But our scouts report their numbers growing. Duke Maren has called his banners."

Her uncle. Her mother's own brother, who had smiled at Elara's nameday celebrations and brought her sweets from the southern provinces. Who now marched an army toward the capital to take what he believed should have been his.

"How long do we have?"

"Perhaps a fortnight. Perhaps less."

Elara finally turned from the mirror. Commander Thorne stood at attention, his weathered face betraying nothing, though she'd known him since childhood. He'd taught her to hold a sword, had stood vigil outside her nursery, had wept at her mother's funeral when he thought no one was watching.

"Then we have work to do," she said, and swept past him into the corridor.

She did not see his expression shift—the flicker of something that might have been hope, or might have been fear. She did not see him touch the hidden scar beneath his sleeve, the one shaped like a crescent moon.

She did not know that everything was about to change.`
  },
  {
    id: 2,
    title: "The Ember Throne",
    subtitle: "Throne of Shadows, Book II",
    tagline: "Alliances forged. Secrets revealed.",
    description: "With civil war raging and her powers growing beyond her control, Elara must journey to the ancient citadel where shadow magic was born. But the path is guarded by those who would see her dead—and the answers she seeks may cost her everything she loves.",
    releaseDate: "Available Now",
    pages: 478,
    rating: 4.8,
    reviews: 1923,
    status: 'Available',
    sampleChapter: `Chapter One: Ashes

The citadel burned.

Elara watched from the ridge as flames consumed the place where she'd first learned to harness the darkness within her. Orange light painted the snow-covered peaks, and even from this distance, she could feel the heat on her face—or perhaps that was the fury building in her chest.

"They found us." Kael's voice was flat, dangerous. "Someone told them where we'd be."

She didn't answer. There would be time for traitors later. Now, she had to decide: flee into the mountains with winter closing in, or face the army below with barely a hundred soldiers at her back.

Her shadow stirred, restless, hungry. It wanted her to fight.

For the first time in months, she considered letting it.`
  },
  {
    id: 3,
    title: "The Obsidian War",
    subtitle: "Throne of Shadows, Book III",
    tagline: "The final battle for the realm begins.",
    description: "The epic conclusion. As the barrier between worlds weakens, Elara must unite fractured kingdoms against an enemy that cannot be killed by mortal weapons. The cost of victory may be her humanity—and her heart.",
    releaseDate: "Spring 2025",
    pages: null,
    rating: null,
    reviews: null,
    status: 'Pre-Order',
    sampleChapter: null
  }
];

const characters: Character[] = [
  {
    id: 'elara',
    name: "Princess Elara Valdris",
    title: "Shadow-Wielder, Heir to the Shadowthrone",
    description: "Born with the forbidden gift of shadow magic, Elara never expected to rule. But when her mother falls to an assassin's blade, she must claim her birthright while mastering powers that threaten to consume her.",
    traits: ["Determined", "Compassionate", "Struggling with darkness"],
    quote: "I will not let fear make me a monster. But I will not let mercy make me weak.",
    icon: Crown,
    relationships: [
      { name: "Commander Thorne", relation: "Mentor & Protector" },
      { name: "Kael", relation: "Unlikely ally, possible more" },
      { name: "Duke Maren", relation: "Uncle & Enemy" }
    ]
  },
  {
    id: 'kael',
    name: "Kael of the Wandering",
    title: "Exiled Prince, Shadow Walker",
    description: "A mysterious stranger with shadow powers of his own, Kael claims to be the last survivor of a kingdom destroyed by the same magic Elara now wields. His motives remain unclear—but his loyalty to Elara never wavers.",
    traits: ["Secretive", "Protective", "Haunted by the past"],
    quote: "I've seen what shadow magic can do when wielded without conscience. I won't let that happen again.",
    icon: Swords,
    relationships: [
      { name: "Princess Elara", relation: "Ally & Something more" },
      { name: "The Shadow Court", relation: "Former member" }
    ]
  },
  {
    id: 'thorne',
    name: "Commander Aldric Thorne",
    title: "Commander of the Royal Guard",
    description: "A veteran soldier who served Queen Seraphine for thirty years, Thorne has protected Elara since birth. His gruff exterior hides a fierce loyalty—and secrets he's kept for two decades.",
    traits: ["Loyal", "Honorable", "Burdened by old promises"],
    quote: "I swore an oath to your mother. I'll keep it until my last breath.",
    icon: Shield,
    relationships: [
      { name: "Princess Elara", relation: "Ward & Princess" },
      { name: "Queen Seraphine", relation: "Former Queen (deceased)" }
    ]
  },
  {
    id: 'maren',
    name: "Duke Aldric Maren",
    title: "Duke of the Southern Reaches, The Usurper",
    description: "Queen Seraphine's younger brother, Maren believes the throne should pass to him as the last male heir. His ambition has festered for decades, and he's gathered an army of loyalists who share his belief that women cannot rule.",
    traits: ["Ambitious", "Charismatic", "Ruthless"],
    quote: "I do not hate my niece. I simply believe she is unfit to rule. History will prove me right.",
    icon: Swords,
    relationships: [
      { name: "Princess Elara", relation: "Niece & Enemy" },
      { name: "Queen Seraphine", relation: "Sister (deceased)" }
    ]
  }
];

const mapLocations: MapLocation[] = [
  { id: 'shadowkeep', name: 'Shadowkeep', x: 45, y: 35, type: 'Capital City', description: 'The capital city and seat of the Shadowthrone' },
  { id: 'valdris', name: 'Valdris Reaches', x: 30, y: 65, type: 'Stronghold', description: "Duke Maren's stronghold in the south" },
  { id: 'citadel', name: 'Citadel of Echoes', x: 75, y: 25, type: 'Ancient Fortress', description: 'Ancient fortress where shadow magic was born' },
  { id: 'wandering', name: 'The Wandering Wastes', x: 85, y: 55, type: 'Ruined Kingdom', description: "Kael's homeland, destroyed by shadow magic" },
  { id: 'barrier', name: 'The Barrier Peaks', x: 55, y: 15, type: 'Mountain Range', description: 'Mountain range separating the mortal realm from the beyond' },
];

export default function ReaderHub() {
  const [activeTab, setActiveTab] = useState<'books' | 'characters' | 'world' | 'newsletter'>('books');
  const [selectedBook, setSelectedBook] = useState(books[0]);
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);
  const [readingMode, setReadingMode] = useState(false);
  const [fontSize, setFontSize] = useState(18);
  const [useSerif, setUseSerif] = useState(true);
  const [mapHover, setMapHover] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to top when reading mode activates
  useEffect(() => {
    if (readingMode) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [readingMode]);

  // Email validation
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');

    if (!email) {
      setEmailError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setSubscribed(true);
  };

  // Series progress calculation
  const getSeriesProgress = () => {
    const completedBooks = books.filter(b => b.status === 'Available').length;
    return {
      completed: completedBooks,
      total: books.length,
      percentage: (completedBooks / books.length) * 100
    };
  };

  const seriesProgress = getSeriesProgress();

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-sans selection:bg-amber-900/50">

      {/* --- Reading Mode Overlay (The "RX" Upgrade) --- */}
      {readingMode && selectedBook.sampleChapter && (
        <div className="fixed inset-0 z-50 bg-stone-50 text-stone-900 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-6 py-12">
            {/* Reader Controls */}
            <div className="fixed top-0 left-0 right-0 bg-stone-50/95 backdrop-blur-sm border-b border-stone-200 p-4 flex justify-between items-center z-10">
              <button
                onClick={() => setReadingMode(false)}
                className="flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors"
              >
                <X className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-wider">Exit Reader</span>
              </button>
              <div className="flex items-center gap-4">
                {/* Font Size Control */}
                <div className="flex items-center gap-2 bg-stone-100 rounded-full px-3 py-1.5">
                  <Type className="w-4 h-4 text-stone-400" />
                  <input
                    type="range" min="14" max="24"
                    value={fontSize}
                    onChange={(e) => setFontSize(Number(e.target.value))}
                    className="w-20 h-1 bg-stone-300 rounded-lg appearance-none cursor-pointer accent-amber-600"
                  />
                </div>

                {/* Serif/Sans Toggle */}
                <button
                  onClick={() => setUseSerif(!useSerif)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                    useSerif
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-stone-100 text-stone-600'
                  }`}
                >
                  {useSerif ? 'Serif' : 'Sans'}
                </button>

                <button className="bg-amber-900 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-amber-800 transition-colors shadow-md flex items-center gap-2">
                  <ShoppingCart className="w-3 h-3" />
                  Buy Full Book
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="mt-20">
              <p className="text-amber-800 text-sm font-bold uppercase tracking-widest mb-2 text-center">Sample Chapter</p>
              <h2 className={`text-4xl font-bold text-center mb-12 text-stone-900 ${useSerif ? 'font-serif' : 'font-sans'}`}>
                {selectedBook.title}
              </h2>
              <div
                className={`prose prose-stone max-w-none leading-loose ${useSerif ? 'font-serif' : 'font-sans'}`}
                style={{ fontSize: `${fontSize}px`, lineHeight: '1.8' }}
              >
                {selectedBook.sampleChapter?.split('\n\n').map((para, i) => (
                  <p key={i} className="mb-6">
                    {i === 1 ? (
                      <span>
                        <span className="text-5xl font-bold text-amber-900 float-left mr-3 mt-[-8px] leading-none">
                          {para.charAt(0)}
                        </span>
                        {para.slice(1)}
                      </span>
                    ) : para}
                  </p>
                ))}
              </div>

              <div className="mt-20 p-8 bg-stone-100 rounded-2xl text-center border border-stone-200">
                <h3 className="font-serif text-2xl text-stone-900 mb-4">Hooked? Continue the Journey.</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-3 bg-amber-900 text-white rounded-lg font-bold hover:bg-amber-800 transition-all shadow-lg flex items-center justify-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Order on Amazon
                  </button>
                  <button className="px-8 py-3 bg-white border border-stone-300 text-stone-700 rounded-lg font-bold hover:bg-stone-50 transition-all flex items-center justify-center gap-2">
                    <BookMarked className="w-4 h-4" />
                    Add to Goodreads
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- Global Nav --- */}
      <nav className="sticky top-0 z-40 bg-stone-950/90 backdrop-blur-md border-b border-stone-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-purple-900 rounded-lg flex items-center justify-center shadow-lg shadow-amber-900/20">
              <Feather className="w-5 h-5 text-stone-100" />
            </div>
            <div>
              <span className="block font-serif text-lg sm:text-xl leading-none tracking-wide text-stone-100">Victoria Blackwood</span>
              <span className="text-[10px] text-amber-500/80 font-bold uppercase tracking-[0.2em]">Fantasy Author</span>
            </div>
          </div>

          {/* Live Demo Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Live Demo</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex bg-stone-900/50 p-1 rounded-lg border border-stone-800">
            {(['books', 'characters', 'world', 'newsletter'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === tab
                    ? 'bg-stone-800 text-amber-500 shadow-sm'
                    : 'text-stone-500 hover:text-stone-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-stone-800 transition-colors"
          >
            <Menu className="w-6 h-6 text-stone-300" />
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-stone-900 border-t border-stone-800 px-4 py-3">
            <div className="flex flex-col gap-2">
              {(['books', 'characters', 'world', 'newsletter'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all text-left ${
                    activeTab === tab
                      ? 'bg-stone-800 text-amber-500'
                      : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            {/* Mobile Live Badge */}
            <div className="mt-3 pt-3 border-t border-stone-800 flex items-center gap-2">
              <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Live Demo</span>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* --- BOOKS TAB (Immersive Catalog) --- */}
        {activeTab === 'books' && (
          <div className="animate-in fade-in duration-500">
            {/* Hero Section */}
            <section className="relative pt-16 sm:pt-20 pb-24 sm:pb-32 px-4 sm:px-6 overflow-hidden">
              {/* Atmospheric Background - CSS gradients only, no external images */}
              <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-purple-950/20 to-stone-950"></div>
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px]"></div>
              </div>

              <div className="max-w-4xl mx-auto text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
                  <Sparkles className="w-3 h-3" /> Epic Fantasy Trilogy
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                  Where Darkness <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-purple-500">Becomes Power</span>
                </h1>
                <p className="text-lg sm:text-xl text-stone-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                  The <span className="text-stone-200 italic">Throne of Shadows</span> trilogy. An epic saga of forbidden magic, political intrigue, and the price of power.
                </p>

                {/* Series Progress Bar */}
                <div className="max-w-md mx-auto mb-10">
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                    <span className="uppercase tracking-wider font-bold">Series Progress</span>
                    <span>{seriesProgress.completed} of {seriesProgress.total} books released</span>
                  </div>
                  <div className="h-2 bg-stone-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-600 to-amber-500 rounded-full transition-all duration-500"
                      style={{ width: `${seriesProgress.percentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    {books.map((book, i) => (
                      <div key={book.id} className="flex flex-col items-center">
                        <div className={`w-3 h-3 rounded-full border-2 ${
                          book.status === 'Available'
                            ? 'bg-amber-500 border-amber-500'
                            : 'bg-transparent border-stone-600'
                        }`} />
                        <span className="text-[10px] text-stone-500 mt-1">Book {['I', 'II', 'III'][i]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={() => {
                      setSelectedBook(books[0]);
                      setReadingMode(true);
                    }}
                    className="px-6 py-3 bg-amber-600 text-stone-950 font-semibold rounded-lg hover:bg-amber-500 transition-colors flex items-center gap-2"
                  >
                    <BookOpen className="w-4 h-4" />
                    Read Chapter One Free
                  </button>
                  <button
                    onClick={() => setActiveTab('newsletter')}
                    className="px-6 py-3 bg-stone-800 text-stone-100 font-semibold rounded-lg border border-stone-700 hover:bg-stone-700 transition-colors"
                  >
                    Join the Reader Circle
                  </button>
                </div>
              </div>
            </section>

            {/* Book Showcase */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                {/* Sidebar List */}
                <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-28">
                  <h3 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-4 pl-2">The Trilogy</h3>
                  {books.map((book, i) => (
                    <button
                      key={book.id}
                      onClick={() => setSelectedBook(book)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-300 group relative overflow-hidden ${
                        selectedBook.id === book.id
                          ? 'bg-stone-900 border-amber-500/50 shadow-2xl shadow-amber-900/20'
                          : 'bg-stone-900/30 border-stone-800 hover:bg-stone-900 hover:border-stone-700'
                      }`}
                    >
                      <div className="relative z-10 flex justify-between items-center">
                        <div>
                          <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${selectedBook.id === book.id ? 'text-amber-500' : 'text-stone-500'}`}>
                            Book {['I', 'II', 'III'][i]}
                          </p>
                          <h3 className={`font-serif text-lg ${selectedBook.id === book.id ? 'text-white' : 'text-stone-400 group-hover:text-stone-200'}`}>
                            {book.title}
                          </h3>
                          <span className={`text-[10px] uppercase tracking-wider mt-1 inline-block ${
                            book.status === 'Available' ? 'text-emerald-500' : 'text-amber-500'
                          }`}>
                            {book.status}
                          </span>
                        </div>
                        {selectedBook.id === book.id && <ChevronRight className="w-5 h-5 text-amber-500" />}
                      </div>
                      {selectedBook.id === book.id && (
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent"></div>
                      )}
                    </button>
                  ))}
                </div>

                {/* Main Detail View */}
                <div className="lg:col-span-8">
                  <div className="bg-stone-900 rounded-2xl border border-stone-800 p-6 sm:p-8 md:p-10 relative overflow-hidden shadow-2xl">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -mr-20 -mt-20"></div>

                    <div className="relative z-10">
                      <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                          selectedBook.status === 'Available'
                            ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                            : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
                        }`}>
                          {selectedBook.status}
                        </span>
                        {selectedBook.rating && (
                          <div className="flex items-center gap-1 text-amber-400">
                            <Star className="w-3 h-3 fill-current" />
                            <span className="text-xs font-bold">{selectedBook.rating}</span>
                            <span className="text-xs text-stone-600">({selectedBook.reviews?.toLocaleString()} reviews)</span>
                          </div>
                        )}
                        {selectedBook.pages && (
                          <span className="text-xs text-stone-500">{selectedBook.pages} pages</span>
                        )}
                      </div>

                      <p className="text-amber-500 text-sm font-medium mb-2">{selectedBook.subtitle}</p>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">{selectedBook.title}</h2>
                      <p className="text-lg sm:text-xl text-stone-400 italic mb-8 border-l-2 border-amber-500/50 pl-4">
                        &ldquo;{selectedBook.tagline}&rdquo;
                      </p>

                      <p className="text-stone-300 leading-relaxed text-base sm:text-lg mb-10 max-w-2xl">
                        {selectedBook.description}
                      </p>

                      <div className="flex flex-wrap gap-4 border-t border-stone-800 pt-8">
                        {selectedBook.sampleChapter ? (
                          <button
                            onClick={() => setReadingMode(true)}
                            className="px-6 sm:px-8 py-3 bg-stone-100 text-stone-950 rounded-lg font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center gap-2"
                          >
                            <BookOpen className="w-4 h-4" /> Read Sample
                          </button>
                        ) : (
                          <button disabled className="px-6 sm:px-8 py-3 bg-stone-800 text-stone-500 rounded-lg font-bold cursor-not-allowed">
                            Sample Coming Soon
                          </button>
                        )}

                        {selectedBook.status === 'Available' && (
                           <button className="px-6 sm:px-8 py-3 bg-amber-900/30 border border-amber-500/30 text-amber-400 rounded-lg font-bold hover:bg-amber-900/50 transition-all flex items-center gap-2">
                             <ShoppingCart className="w-4 h-4" /> Buy Now
                           </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>
        )}

        {/* --- CHARACTERS TAB (Encyclopedia) --- */}
        {activeTab === 'characters' && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 animate-in fade-in duration-500">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-white mb-2">Character Encyclopedia</h2>
              <p className="text-stone-400">The heroes and villains of the Throne of Shadows</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Character List */}
              <div className="space-y-3">
                {characters.map((char) => {
                  const IconComponent = char.icon;
                  return (
                    <button
                      key={char.id}
                      onClick={() => setSelectedCharacter(char)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 ${
                        selectedCharacter.id === char.id
                          ? 'bg-amber-600/10 border-amber-600/40 shadow-lg shadow-amber-900/10'
                          : 'bg-stone-900 border-stone-800 hover:border-stone-700 hover:bg-stone-900/80'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        selectedCharacter.id === char.id ? 'bg-amber-500/20' : 'bg-stone-800'
                      }`}>
                        <IconComponent className={`w-5 h-5 ${selectedCharacter.id === char.id ? 'text-amber-500' : 'text-stone-500'}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-semibold truncate ${selectedCharacter.id === char.id ? 'text-amber-500' : 'text-stone-200'}`}>
                          {char.name.split(' ')[0]} {char.name.split(' ').slice(-1)[0]}
                        </h3>
                        <p className="text-xs text-stone-500 truncate">{char.title.split(',')[0]}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Character Detail */}
              <div className="lg:col-span-2 bg-stone-900 rounded-2xl border border-stone-800 p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -mr-10 -mt-10"></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      {React.createElement(selectedCharacter.icon, { className: "w-7 h-7 text-amber-500" })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-white mb-1">{selectedCharacter.name}</h3>
                      <p className="text-amber-500 text-sm">{selectedCharacter.title}</p>
                    </div>
                  </div>

                  <p className="text-stone-300 leading-relaxed mb-6">{selectedCharacter.description}</p>

                  <blockquote className="mb-6 p-4 bg-stone-950 rounded-xl border-l-4 border-amber-600">
                    <Quote className="w-5 h-5 text-amber-500/50 mb-2" />
                    <p className="text-stone-300 italic">&ldquo;{selectedCharacter.quote}&rdquo;</p>
                  </blockquote>

                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-3">Character Traits</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCharacter.traits.map((trait) => (
                        <span key={trait} className="px-3 py-1.5 bg-stone-800 text-stone-300 text-sm rounded-full border border-stone-700">
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-3">Key Relationships</h4>
                    <div className="space-y-2">
                      {selectedCharacter.relationships.map((rel, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-stone-950 rounded-lg border border-stone-800">
                          <span className="text-stone-200 font-medium">{rel.name}</span>
                          <span className="text-xs text-stone-500 bg-stone-800 px-2 py-1 rounded-full">{rel.relation}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- WORLD TAB (Interactive Atlas) --- */}
        {activeTab === 'world' && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 animate-in fade-in duration-500">
             <div className="text-center mb-12">
               <h2 className="text-3xl font-serif font-bold text-white mb-2">Atlas of the Shadow Realm</h2>
               <p className="text-stone-400">Explore the lands where the saga unfolds</p>
             </div>

             <div className="relative aspect-video bg-stone-900 rounded-2xl border border-stone-800 overflow-hidden shadow-2xl mb-8">
                {/* Map Base Layer with terrain hints */}
                <div className="absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-900 to-stone-950">
                  {/* Terrain gradient hints */}
                  <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-stone-700/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-amber-900/10 to-transparent"></div>
                  <div className="absolute top-1/4 right-0 w-1/4 h-1/2 bg-gradient-to-l from-purple-900/10 to-transparent"></div>
                </div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" width="100%" height="100%">
                    <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="1" fill="#d4a574"></circle>
                    </pattern>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
                  </svg>
                </div>

                {/* Map Locations */}
                {mapLocations.map(loc => (
                  <button
                    key={loc.id}
                    onMouseEnter={() => setMapHover(loc.id)}
                    onMouseLeave={() => setMapHover(null)}
                    onClick={() => setMapHover(mapHover === loc.id ? null : loc.id)}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 focus:outline-none"
                    style={{ top: `${loc.y}%`, left: `${loc.x}%` }}
                  >
                    <div className={`relative flex items-center justify-center w-8 h-8 transition-all duration-300 ${mapHover === loc.id ? 'scale-125' : 'scale-100'}`}>
                      <div className={`absolute inset-0 rounded-full transition-opacity duration-300 ${mapHover === loc.id ? 'bg-amber-500/20 animate-ping' : 'opacity-0'}`}></div>
                      <div className="relative z-10 w-4 h-4 bg-amber-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.6)] border-2 border-amber-400"></div>
                    </div>

                    {/* Tooltip */}
                    <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-52 p-4 bg-stone-950/95 backdrop-blur-sm border border-amber-500/30 rounded-xl text-center transition-all duration-300 shadow-2xl ${mapHover === loc.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                      <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-1">{loc.type}</p>
                      <p className="font-serif text-white text-lg mb-1">{loc.name}</p>
                      <p className="text-xs text-stone-400">{loc.description}</p>
                    </div>
                  </button>
                ))}

                {/* Compass Rose */}
                <div className="absolute bottom-6 right-6 opacity-30">
                   <Compass className="w-16 h-16 text-amber-500/50" />
                </div>

                {/* Map Legend */}
                <div className="absolute bottom-6 left-6 text-xs text-stone-500">
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    Tap or hover to explore
                  </p>
                </div>
             </div>

             {/* Location Cards */}
             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
               {mapLocations.map((loc) => (
                 <div
                   key={loc.id}
                   className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                     mapHover === loc.id
                       ? 'bg-amber-600/10 border-amber-600/40 shadow-lg shadow-amber-900/10'
                       : 'bg-stone-900 border-stone-800 hover:border-stone-700'
                   }`}
                   onMouseEnter={() => setMapHover(loc.id)}
                   onMouseLeave={() => setMapHover(null)}
                 >
                   <div className="flex items-center gap-3 mb-2">
                     <Map className={`w-4 h-4 ${mapHover === loc.id ? 'text-amber-500' : 'text-stone-600'}`} />
                     <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">{loc.type}</span>
                   </div>
                   <h3 className="font-serif font-semibold text-white text-lg mb-1">{loc.name}</h3>
                   <p className="text-sm text-stone-400">{loc.description}</p>
                 </div>
               ))}
             </div>
          </div>
        )}

        {/* --- NEWSLETTER TAB (VIP Reader Club) --- */}
        {activeTab === 'newsletter' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 animate-in fade-in duration-500">
            {!subscribed ? (
              <div className="bg-gradient-to-b from-stone-900 to-stone-950 border border-stone-800 rounded-2xl p-8 sm:p-12 relative overflow-hidden text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-stone-800 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner border border-stone-700">
                    <Mail className="w-10 h-10 text-amber-500" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Join the Inner Circle</h2>
                  <p className="text-stone-400 mb-10 max-w-lg mx-auto leading-relaxed">
                    Get early access to cover reveals, exclusive bonus chapters, and a free digital copy of the prequel novella <span className="text-amber-400 italic">&ldquo;The First Shadow.&rdquo;</span>
                  </p>

                  <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-8">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="flex-1">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setEmailError('');
                          }}
                          placeholder="Enter your email address"
                          className={`w-full px-5 py-4 bg-stone-950 border rounded-lg text-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all text-center sm:text-left placeholder:text-stone-600 ${
                            emailError ? 'border-red-500' : 'border-stone-800 focus:border-amber-600'
                          }`}
                        />
                        {emailError && (
                          <p className="text-red-400 text-xs mt-2 text-left">{emailError}</p>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="px-6 py-4 bg-amber-600 text-stone-950 font-bold uppercase tracking-widest rounded-lg hover:bg-amber-500 transition-colors shadow-lg shadow-amber-900/20 flex items-center justify-center gap-2 whitespace-nowrap"
                      >
                        <Download className="w-4 h-4" />
                        Claim Free Book
                      </button>
                    </div>
                  </form>

                  {/* Bonus Content List */}
                  <div className="text-left bg-stone-950 rounded-xl p-6 border border-stone-800 max-w-md mx-auto">
                    <h3 className="font-semibold text-stone-200 mb-4 text-center">Subscriber Bonus Content:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-stone-300 text-sm">Exclusive prequel: &ldquo;The Night Before the Crown&rdquo;</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-stone-300 text-sm">High-resolution character art and world map</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-stone-300 text-sm">Deleted scenes from Books 1 & 2</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-stone-300 text-sm">Early access to cover reveals and release dates</span>
                      </li>
                    </ul>
                  </div>

                  {/* Trust Signals */}
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-500 font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2">
                      <Download className="w-3 h-3" /> Instant Delivery
                    </span>
                    <span className="flex items-center gap-2">
                      <Users className="w-3 h-3" /> 15k+ Readers
                    </span>
                    <span className="flex items-center gap-2">
                      <Heart className="w-3 h-3" /> No Spam, Ever
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-stone-900 rounded-2xl border border-stone-800 p-8 sm:p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>

                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-600/20 flex items-center justify-center">
                  <Check className="w-10 h-10 text-emerald-500" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-white mb-4">Welcome to the Inner Circle!</h2>
                <p className="text-stone-400 mb-8 max-w-md mx-auto">
                  Check your inbox for a welcome email with your exclusive bonus content and free prequel novella.
                </p>

                <div className="p-4 bg-stone-950 rounded-xl border border-stone-800 max-w-md mx-auto">
                  <p className="text-sm text-stone-400">
                    Didn&apos;t receive the email? Check your spam folder or contact <span className="text-amber-500">support@victoriablackwood.com</span>
                  </p>
                </div>

                <button
                  onClick={() => setActiveTab('books')}
                  className="mt-8 px-6 py-3 bg-amber-600 text-stone-950 font-semibold rounded-lg hover:bg-amber-500 transition-colors"
                >
                  Explore the Books
                </button>
              </div>
            )}
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-stone-900 border-t border-stone-800 py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-purple-900 rounded-lg flex items-center justify-center">
                  <Feather className="w-5 h-5 text-stone-100" />
                </div>
                <span className="font-serif text-lg text-stone-100">Victoria Blackwood</span>
              </div>
              <p className="text-sm text-stone-400 leading-relaxed">
                Epic fantasy author. Lover of morally complex characters and kingdoms on the brink.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-stone-200 mb-4 text-sm uppercase tracking-wider">Books</h4>
              <div className="space-y-2 text-sm text-stone-400">
                {books.map(book => (
                  <p key={book.id}>
                    <button
                      onClick={() => {
                        setSelectedBook(book);
                        setActiveTab('books');
                      }}
                      className="hover:text-amber-500 transition-colors text-left"
                    >
                      {book.title}
                    </button>
                  </p>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold text-stone-200 mb-4 text-sm uppercase tracking-wider">Connect</h4>
              <div className="space-y-2 text-sm text-stone-400">
                <p><a href="#" className="hover:text-amber-500 transition-colors flex items-center gap-2"><Instagram className="w-4 h-4" /> Instagram</a></p>
                <p><a href="#" className="hover:text-amber-500 transition-colors flex items-center gap-2"><BookMarked className="w-4 h-4" /> Goodreads</a></p>
                <p><a href="#" className="hover:text-amber-500 transition-colors flex items-center gap-2"><Mail className="w-4 h-4" /> Contact</a></p>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-stone-200 mb-4 text-sm uppercase tracking-wider">Resources</h4>
              <div className="space-y-2 text-sm text-stone-400">
                <p><a href="#" className="hover:text-amber-500 transition-colors">About the Author</a></p>
                <p><a href="#" className="hover:text-amber-500 transition-colors">Media Kit</a></p>
                <p><a href="#" className="hover:text-amber-500 transition-colors">Book Clubs</a></p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-500">
            <p>© 2024 Victoria Blackwood. All rights reserved.</p>
            <p className="text-stone-600">Demo built for Moonlit Studios Portfolio</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
