'use client';

import { useState } from 'react';

// Book series data
const books = [
  {
    id: 1,
    title: "The Shattered Crown",
    subtitle: "Throne of Shadows, Book One",
    tagline: "A kingdom divided. A power awakened. A war begins.",
    description: "When Princess Elara discovers she can wield forbidden shadow magic, she must choose between her birthright and the dark power that could save—or destroy—her kingdom. As civil war looms and ancient enemies stir, Elara finds unlikely allies in a disgraced knight and a mysterious stranger with secrets of his own.",
    releaseDate: "March 2023",
    pages: 412,
    rating: 4.7,
    reviews: 2847,
    buyLinks: { amazon: '#', barnes: '#', bookshop: '#' },
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
    subtitle: "Throne of Shadows, Book Two",
    tagline: "Alliances forged. Secrets revealed. The shadows deepen.",
    description: "With civil war raging and her powers growing beyond her control, Elara must journey to the ancient citadel where shadow magic was born. But the path is guarded by those who would see her dead—and the answers she seeks may cost her everything she loves.",
    releaseDate: "September 2023",
    pages: 478,
    rating: 4.8,
    reviews: 1923,
    buyLinks: { amazon: '#', barnes: '#', bookshop: '#' },
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
    subtitle: "Throne of Shadows, Book Three",
    tagline: "The final battle for the realm begins.",
    description: "The epic conclusion to the Throne of Shadows trilogy. As the barrier between worlds weakens and an ancient evil awakens, Elara must unite fractured kingdoms against an enemy that cannot be killed by mortal weapons. The cost of victory may be her humanity—and her heart.",
    releaseDate: "Coming Spring 2025",
    pages: null,
    rating: null,
    reviews: null,
    buyLinks: null,
    sampleChapter: null
  }
];

// Character data
const characters = [
  {
    id: 'elara',
    name: "Princess Elara Valdris",
    title: "Shadow-Wielder, Heir to the Shadowthrone",
    description: "Born with the forbidden gift of shadow magic, Elara never expected to rule. But when her mother falls to an assassin's blade, she must claim her birthright while mastering powers that threaten to consume her.",
    traits: ["Determined", "Compassionate", "Struggling with darkness"],
    quote: "I will not let fear make me a monster. But I will not let mercy make me weak.",
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
    relationships: [
      { name: "Princess Elara", relation: "Niece & Enemy" },
      { name: "Queen Seraphine", relation: "Sister (deceased)" }
    ]
  }
];

// World map locations
const mapLocations = [
  { id: 'shadowkeep', name: 'Shadowkeep', x: 45, y: 35, description: 'The capital city and seat of the Shadowthrone' },
  { id: 'valdris', name: 'Valdris Reaches', x: 30, y: 65, description: "Duke Maren's stronghold in the south" },
  { id: 'citadel', name: 'The Citadel of Echoes', x: 75, y: 25, description: 'Ancient fortress where shadow magic was born' },
  { id: 'wandering', name: 'The Wandering Wastes', x: 85, y: 55, description: "Kael's homeland, destroyed by shadow magic" },
  { id: 'barrier', name: 'The Barrier Peaks', x: 55, y: 15, description: 'Mountain range separating the mortal realm from the beyond' },
];

export default function ReaderHub() {
  const [activeTab, setActiveTab] = useState<'books' | 'characters' | 'world' | 'newsletter'>('books');
  const [selectedBook, setSelectedBook] = useState(books[0]);
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);
  const [showSampleChapter, setShowSampleChapter] = useState(false);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      {/* Navigation */}
      <nav className="bg-stone-900 border-b border-stone-800 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-amber-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-stone-950" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <div>
                <span className="font-semibold text-stone-100">Victoria Blackwood</span>
                <span className="hidden sm:block text-xs text-stone-400">Fantasy Author</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {(['books', 'characters', 'world', 'newsletter'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 sm:px-4 py-2 text-sm font-medium rounded-lg transition-colors capitalize ${
                    activeTab === tab
                      ? 'bg-amber-600/20 text-amber-500'
                      : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-stone-900 via-stone-950 to-stone-950 py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-3">The Throne of Shadows Series</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-100 mb-4">
            Where Darkness Becomes Power
          </h1>
          <p className="text-lg sm:text-xl text-stone-400 mb-8 max-w-2xl mx-auto">
            An epic fantasy trilogy of forbidden magic, political intrigue, and a princess who must embrace
            the shadows to save her kingdom.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => {
                setActiveTab('books');
                setSelectedBook(books[0]);
                setShowSampleChapter(true);
              }}
              className="px-6 py-3 bg-amber-600 text-stone-950 font-semibold rounded-lg hover:bg-amber-500 transition-colors"
            >
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

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

        {/* Books Tab */}
        {activeTab === 'books' && (
          <div>
            {/* Book Selection */}
            <div className="flex gap-3 overflow-x-auto pb-4 mb-8">
              {books.map((book) => (
                <button
                  key={book.id}
                  onClick={() => {
                    setSelectedBook(book);
                    setShowSampleChapter(false);
                  }}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedBook.id === book.id
                      ? 'bg-amber-600 text-stone-950'
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  Book {book.id}
                </button>
              ))}
            </div>

            {/* Book Detail */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Book Cover Placeholder */}
              <div className="lg:col-span-1">
                <div className="aspect-[2/3] bg-gradient-to-br from-stone-800 via-stone-900 to-stone-950 rounded-xl border border-stone-800 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-600/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                      </svg>
                    </div>
                    <p className="text-amber-500 text-xs uppercase tracking-widest mb-2">Throne of Shadows</p>
                    <h3 className="text-xl font-serif font-bold text-stone-100 mb-1">{selectedBook.title}</h3>
                    <p className="text-sm text-stone-500">Book {selectedBook.id}</p>
                  </div>
                </div>

                {/* Book Stats */}
                {selectedBook.rating && (
                  <div className="mt-4 p-4 bg-stone-900 rounded-xl border border-stone-800">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(selectedBook.rating!) ? 'text-amber-500' : 'text-stone-700'}`}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                        <span className="ml-2 text-sm font-medium text-stone-300">{selectedBook.rating}</span>
                      </div>
                      <span className="text-xs text-stone-500">{selectedBook.reviews?.toLocaleString()} reviews</span>
                    </div>
                    <div className="text-sm text-stone-400">
                      <span>{selectedBook.pages} pages</span>
                      <span className="mx-2">·</span>
                      <span>{selectedBook.releaseDate}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Book Info */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <p className="text-amber-500 text-sm font-medium mb-2">{selectedBook.subtitle}</p>
                  <h2 className="text-3xl font-serif font-bold text-stone-100 mb-3">{selectedBook.title}</h2>
                  <p className="text-xl text-stone-400 italic mb-6">"{selectedBook.tagline}"</p>
                  <p className="text-stone-300 leading-relaxed">{selectedBook.description}</p>
                </div>

                {/* Buy Links or Coming Soon */}
                {selectedBook.buyLinks ? (
                  <div className="mb-8">
                    <p className="text-sm text-stone-500 mb-3">Available at:</p>
                    <div className="flex flex-wrap gap-3">
                      <a href="#" className="px-5 py-2.5 bg-amber-600 text-stone-950 font-medium rounded-lg hover:bg-amber-500 transition-colors">
                        Amazon
                      </a>
                      <a href="#" className="px-5 py-2.5 bg-stone-800 text-stone-200 font-medium rounded-lg border border-stone-700 hover:bg-stone-700 transition-colors">
                        Barnes & Noble
                      </a>
                      <a href="#" className="px-5 py-2.5 bg-stone-800 text-stone-200 font-medium rounded-lg border border-stone-700 hover:bg-stone-700 transition-colors">
                        Bookshop.org
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="mb-8 p-4 bg-amber-600/10 border border-amber-600/30 rounded-lg">
                    <p className="text-amber-500 font-medium">{selectedBook.releaseDate}</p>
                    <p className="text-sm text-stone-400 mt-1">Join the newsletter to be notified when pre-orders open.</p>
                  </div>
                )}

                {/* Sample Chapter */}
                {selectedBook.sampleChapter && (
                  <div>
                    <button
                      onClick={() => setShowSampleChapter(!showSampleChapter)}
                      className="flex items-center gap-2 text-amber-500 font-medium hover:text-amber-400 transition-colors"
                    >
                      <svg className={`w-5 h-5 transition-transform ${showSampleChapter ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {showSampleChapter ? 'Hide Sample Chapter' : 'Read Sample Chapter'}
                    </button>

                    {showSampleChapter && (
                      <div className="mt-6 p-6 bg-stone-900 rounded-xl border border-stone-800">
                        <div className="prose prose-invert prose-stone max-w-none">
                          <div className="whitespace-pre-line text-stone-300 leading-relaxed font-serif">
                            {selectedBook.sampleChapter}
                          </div>
                        </div>
                        <div className="mt-6 pt-6 border-t border-stone-800 text-center">
                          <p className="text-stone-500 mb-3">Want to keep reading?</p>
                          <a href="#" className="inline-block px-6 py-2.5 bg-amber-600 text-stone-950 font-medium rounded-lg hover:bg-amber-500 transition-colors">
                            Get the Full Book
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Characters Tab */}
        {activeTab === 'characters' && (
          <div>
            <h2 className="text-2xl font-serif font-bold text-stone-100 mb-6">Character Encyclopedia</h2>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Character List */}
              <div className="space-y-2">
                {characters.map((char) => (
                  <button
                    key={char.id}
                    onClick={() => setSelectedCharacter(char)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      selectedCharacter.id === char.id
                        ? 'bg-amber-600/20 border border-amber-600/40'
                        : 'bg-stone-900 border border-stone-800 hover:border-stone-700'
                    }`}
                  >
                    <h3 className={`font-semibold ${selectedCharacter.id === char.id ? 'text-amber-500' : 'text-stone-200'}`}>
                      {char.name}
                    </h3>
                    <p className="text-sm text-stone-500">{char.title}</p>
                  </button>
                ))}
              </div>

              {/* Character Detail */}
              <div className="lg:col-span-2 bg-stone-900 rounded-xl border border-stone-800 p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-serif font-bold text-stone-100 mb-1">{selectedCharacter.name}</h3>
                  <p className="text-amber-500">{selectedCharacter.title}</p>
                </div>

                <p className="text-stone-300 leading-relaxed mb-6">{selectedCharacter.description}</p>

                <blockquote className="mb-6 p-4 bg-stone-950 rounded-lg border-l-4 border-amber-600">
                  <p className="text-stone-300 italic">"{selectedCharacter.quote}"</p>
                </blockquote>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-stone-400 uppercase tracking-wider mb-3">Character Traits</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCharacter.traits.map((trait) => (
                      <span key={trait} className="px-3 py-1 bg-stone-800 text-stone-300 text-sm rounded-full">
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-stone-400 uppercase tracking-wider mb-3">Key Relationships</h4>
                  <div className="space-y-2">
                    {selectedCharacter.relationships.map((rel, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-stone-950 rounded-lg">
                        <span className="text-stone-200">{rel.name}</span>
                        <span className="text-sm text-stone-500">{rel.relation}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* World Tab */}
        {activeTab === 'world' && (
          <div>
            <h2 className="text-2xl font-serif font-bold text-stone-100 mb-6">The Realm of Shadows</h2>

            {/* Interactive Map */}
            <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
              <div className="relative aspect-[16/9] bg-gradient-to-br from-stone-800 via-stone-900 to-stone-950 rounded-lg overflow-hidden">
                {/* Map Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-amber-500"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Location Markers */}
                {mapLocations.map((loc) => (
                  <div
                    key={loc.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                    onMouseEnter={() => setHoveredLocation(loc.id)}
                    onMouseLeave={() => setHoveredLocation(null)}
                  >
                    <div className={`w-4 h-4 rounded-full transition-all ${
                      hoveredLocation === loc.id
                        ? 'bg-amber-500 scale-150'
                        : 'bg-amber-600/60'
                    }`}>
                      <div className="absolute inset-0 rounded-full bg-amber-500 animate-ping opacity-30"></div>
                    </div>

                    {/* Tooltip */}
                    {hoveredLocation === loc.id && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-stone-950 border border-stone-700 rounded-lg shadow-xl z-10">
                        <h4 className="font-semibold text-amber-500 text-sm">{loc.name}</h4>
                        <p className="text-xs text-stone-400 mt-1">{loc.description}</p>
                      </div>
                    )}
                  </div>
                ))}

                {/* Map Labels */}
                <div className="absolute bottom-4 left-4 text-xs text-stone-500">
                  <p>Hover over locations to explore</p>
                </div>
              </div>
            </div>

            {/* Location List */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mapLocations.map((loc) => (
                <div
                  key={loc.id}
                  className={`p-4 rounded-lg border transition-all ${
                    hoveredLocation === loc.id
                      ? 'bg-amber-600/10 border-amber-600/40'
                      : 'bg-stone-900 border-stone-800'
                  }`}
                  onMouseEnter={() => setHoveredLocation(loc.id)}
                  onMouseLeave={() => setHoveredLocation(null)}
                >
                  <h3 className="font-semibold text-stone-100 mb-1">{loc.name}</h3>
                  <p className="text-sm text-stone-400">{loc.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter Tab */}
        {activeTab === 'newsletter' && (
          <div className="max-w-2xl mx-auto">
            {!subscribed ? (
              <div className="bg-stone-900 rounded-xl border border-stone-800 p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-amber-600/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-100 mb-2">Join the Reader Circle</h2>
                <p className="text-stone-400 mb-6">
                  Get exclusive content, early cover reveals, deleted scenes, and be the first to know about new releases.
                </p>

                <form onSubmit={handleSubscribe} className="mb-6">
                  <div className="flex gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 bg-stone-950 border border-stone-700 rounded-lg text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                      required
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-amber-600 text-stone-950 font-semibold rounded-lg hover:bg-amber-500 transition-colors"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>

                <div className="text-left bg-stone-950 rounded-lg p-6">
                  <h3 className="font-semibold text-stone-200 mb-4">Subscriber Bonus Content:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-amber-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-stone-300">Exclusive prequel short story: "The Night Before the Crown"</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-amber-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-stone-300">High-resolution character art and world map</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-amber-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-stone-300">Deleted scenes from Books 1 & 2</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-amber-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-stone-300">Early access to cover reveals and release dates</span>
                    </li>
                  </ul>
                </div>

                <p className="text-xs text-stone-500 mt-6">No spam, ever. Unsubscribe anytime.</p>
              </div>
            ) : (
              <div className="bg-stone-900 rounded-xl border border-stone-800 p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-600/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-100 mb-2">Welcome to the Reader Circle!</h2>
                <p className="text-stone-400 mb-6">
                  Check your inbox for a welcome email with your exclusive bonus content.
                </p>
                <div className="p-4 bg-stone-950 rounded-lg">
                  <p className="text-sm text-stone-400">
                    Didn't receive the email? Check your spam folder or contact support@victoriablackwood.com
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 border-t border-stone-800 py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded bg-amber-600 flex items-center justify-center">
                  <svg className="w-5 h-5 text-stone-950" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                </div>
                <span className="font-semibold text-stone-100">Victoria Blackwood</span>
              </div>
              <p className="text-sm text-stone-400">
                Epic fantasy author. Lover of morally complex characters and kingdoms on the brink.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-stone-200 mb-3">Quick Links</h4>
              <div className="space-y-2 text-sm text-stone-400">
                <p><a href="#" className="hover:text-amber-500 transition-colors">All Books</a></p>
                <p><a href="#" className="hover:text-amber-500 transition-colors">About the Author</a></p>
                <p><a href="#" className="hover:text-amber-500 transition-colors">Media Kit</a></p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-stone-200 mb-3">Connect</h4>
              <div className="space-y-2 text-sm text-stone-400">
                <p><a href="#" className="hover:text-amber-500 transition-colors">Instagram</a></p>
                <p><a href="#" className="hover:text-amber-500 transition-colors">Goodreads</a></p>
                <p><a href="#" className="hover:text-amber-500 transition-colors">Contact</a></p>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-stone-800 text-center text-sm text-stone-500">
            <p>© 2024 Victoria Blackwood. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
