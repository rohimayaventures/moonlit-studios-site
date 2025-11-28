'use client';

import { useState } from 'react';
import Link from 'next/link';
import { toast } from 'sonner';

// Mock book series data
const books = [
  {
    id: 1,
    title: "Crown of Shadows",
    subtitle: "The Shadowborn Legacy - Book 1",
    status: "Published",
    coverColor: "from-purple-600 to-indigo-600",
    rating: 4.8,
    reviews: 1247,
    description: "When a forbidden ritual awakens ancient magic, a reluctant heir must choose between her kingdom's salvation and a love that could doom them all.",
    sampleChapter: true
  },
  {
    id: 2,
    title: "Throne of Starlight",
    subtitle: "The Shadowborn Legacy - Book 2",
    status: "Published",
    coverColor: "from-blue-600 to-teal-600",
    rating: 4.9,
    reviews: 892,
    description: "With war on the horizon and betrayal lurking in every shadow, star-crossed lovers must unite divided realms before darkness consumes everything.",
    sampleChapter: true
  },
  {
    id: 3,
    title: "Empire of Moonfire",
    subtitle: "The Shadowborn Legacy - Book 3",
    status: "Coming 2026",
    coverColor: "from-pink-600 to-orange-600",
    rating: null,
    reviews: null,
    description: "The final confrontation. Prophecy fulfilled. Two souls bound by fate must sacrifice everything to save the world they love.",
    sampleChapter: false
  }
];

// Mock characters
const characters = [
  {
    id: 1,
    name: "Aria Nightshade",
    title: "The Shadowborn Heir",
    house: "House Nightshade",
    description: "Reluctant princess with forbidden magic running through her veins. Torn between duty and destiny, she must master powers she never asked for.",
    relationships: ["Kael (love interest)", "High Priestess Lyra (mentor)", "Lord Malachar (enemy)"]
  },
  {
    id: 2,
    name: "Kael Stormwind",
    title: "The Starlight Warrior",
    house: "House Stormwind",
    description: "A warrior bound by ancient vows, hiding secrets that could change the fate of the realm. His heart belongs to the one person he can never have.",
    relationships: ["Aria (love interest)", "Commander Theron (rival)", "Elena (sister)"]
  },
  {
    id: 3,
    name: "High Priestess Lyra",
    title: "The Oracle",
    house: "Temple of the Moon",
    description: "Guardian of ancient prophecies and keeper of forbidden knowledge. She knows the truth about the Shadowborn curse—but telling it could doom them all.",
    relationships: ["Aria (protégée)", "Lord Malachar (enemy)", "King Aldric (political ally)"]
  }
];

// Sample chapter content
const sampleChapterContent = `The night Aria Nightshade's powers awakened, the castle shook with thunder that had no clouds.

She had always known she was different. The whispers in the corridors, the way servants averted their eyes, the heavy silence that fell whenever she entered a room. But nothing had prepared her for the moment the shadows themselves reached out to greet her.

"You cannot run from what you are," the High Priestess had warned her, years ago. "The blood of the Shadowborn flows through your veins. One day, it will demand its due."

That day had finally come.

As purple lightning crackled between her fingers, Aria understood that her life as she knew it was over. The prophecy spoke of a Shadowborn heir who would either save the realm or destroy it entirely.

She had never asked for this power. She had never wanted it.

But as the castle guards burst through her chamber doors, weapons drawn and fear in their eyes, she knew one thing with absolute certainty:

She would not let them take her without a fight.

---

*End of Chapter 1 Preview*

Want to continue reading? Get the full book now!`;

export default function ReaderHub() {
  const [selectedBook, setSelectedBook] = useState(books[0]);
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);
  const [showSampleModal, setShowSampleModal] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleReadSample = () => {
    setShowSampleModal(true);
  };

  const handleBuyNow = () => {
    toast.success('Opening bookstore...', {
      description: 'In a live site, this would take you to Amazon, Bookshop.org, or your preferred retailer.',
      duration: 4000
    });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newsletterEmail.trim()) {
      toast.error('Email required', { description: 'Please enter your email address.' });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      toast.error('Invalid email', { description: 'Please enter a valid email address.' });
      return;
    }

    setIsSubscribing(true);

    // Simulate API call
    setTimeout(() => {
      toast.success('Welcome to the community!', {
        description: 'Check your inbox for exclusive bonus content and updates.',
        duration: 5000
      });
      setNewsletterEmail('');
      setIsSubscribing(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-midnight text-pearlWhite">
      {/* Professional Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-6">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-owleryGold/45 via-tealEnchantment/30 to-inkPlum/35 blur-3xl animate-floatSlow" />
          <div className="absolute -left-24 bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-inkPlum/30 via-tealEnchantment/25 to-deepOcean/40 blur-3xl" style={{ animation: 'floatSlow 20s ease-in-out infinite 5s' }} />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="text-center space-y-6 sm:space-y-8 px-4">
            {/* Professional Icon Badge */}
            <div className="inline-block p-4 sm:p-5 rounded-full bg-gradient-to-br from-owleryGold/20 to-inkPlum/20 border border-owleryGold/30 mb-4">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 text-owleryGold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
              </svg>
            </div>

            {/* Tag */}
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-owleryGold/20 border border-owleryGold/40 text-owleryGold text-xs sm:text-sm font-bold uppercase tracking-wider">
                Author Platform Demo
              </span>
            </div>

            {/* Title */}
            <h1 className="font-elegant text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-pearlWhite">
              The Shadowborn Legacy
            </h1>

            {/* Subtitle */}
            <p className="font-serif text-lg sm:text-xl md:text-2xl text-moonlightSilver leading-relaxed max-w-3xl mx-auto">
              A fantasy romance trilogy where ancient magic awakens, forbidden love ignites, and destiny demands sacrifice.
            </p>

            {/* Author */}
            <p className="text-base sm:text-lg text-moonlightSilver/70 italic">
              By Elara Nightwood
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4">
              <button
                onClick={handleReadSample}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-owleryGold to-tealEnchantment text-midnight font-bold text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-owleryGold/50 hover:scale-105 transition-all"
              >
                Read Sample Chapter →
              </button>
              <a
                href="#newsletter"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-owleryGold/40 text-owleryGold font-bold text-sm sm:text-base uppercase tracking-wider hover:bg-owleryGold/10 transition-all text-center"
              >
                Join Newsletter for Bonus Content
              </a>
            </div>

            {/* Series Stats */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 pt-6">
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-owleryGold">3</p>
                <p className="text-xs sm:text-sm text-moonlightSilver/60 uppercase tracking-wider">Books</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-tealEnchantment">15K+</p>
                <p className="text-xs sm:text-sm text-moonlightSilver/60 uppercase tracking-wider">Readers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-inkPlum">4.8★</p>
                <p className="text-xs sm:text-sm text-moonlightSilver/60 uppercase tracking-wider">Average Rating</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-owleryGold">2026</p>
                <p className="text-xs sm:text-sm text-moonlightSilver/60 uppercase tracking-wider">Book 3 Release</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">

      {/* Books Section - Mobile Responsive */}
      <div className="mb-12 sm:mb-16 lg:mb-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pearlWhite text-center mb-8 sm:mb-12">
          The Series
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              onClick={() => setSelectedBook(book)}
              className={`group cursor-pointer transition-all ${
                selectedBook.id === book.id ? 'scale-105' : 'hover:scale-102'
              }`}
            >
              {/* Book Cover Mockup - Mobile Responsive */}
              <div className="relative mb-4 sm:mb-6">
                <div className={`aspect-[2/3] rounded-xl bg-gradient-to-br ${book.coverColor} shadow-2xl flex items-center justify-center p-6 sm:p-8 border-2 ${
                  selectedBook.id === book.id ? 'border-owleryGold' : 'border-transparent'
                }`}>
                  <div className="text-center">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">
                      {book.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 mb-4 sm:mb-6">
                      {book.subtitle}
                    </p>
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute -top-3 -right-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    book.status === "Published"
                      ? "bg-tealEnchantment text-midnight"
                      : "bg-inkPlum text-white"
                  }`}>
                    {book.status}
                  </span>
                </div>
              </div>

              {/* Book Details - Mobile Responsive */}
              <div className="p-4 sm:p-6 rounded-xl border-2 border-owleryGold/30 bg-midnight/40">
                <h4 className="text-lg sm:text-xl font-bold text-pearlWhite mb-2">
                  {book.title}
                </h4>
                <p className="text-xs sm:text-sm text-moonlightSilver/80 mb-4 line-clamp-3">
                  {book.description}
                </p>

                {/* Rating - Mobile Responsive */}
                {book.rating && (
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-moonlightSilver/10">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${
                            i < Math.floor(book.rating!) ? 'text-owleryGold' : 'text-moonlightSilver/30'
                          } fill-current`}
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-moonlightSilver/70">
                      {book.rating} ({book.reviews} reviews)
                    </span>
                  </div>
                )}

                {/* Action Buttons - Mobile Responsive */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  {book.sampleChapter ? (
                    <>
                      <button
                        onClick={handleReadSample}
                        className="flex-1 px-4 py-2 rounded-full bg-gradient-to-r from-owleryGold to-tealEnchantment text-midnight font-bold text-xs sm:text-sm uppercase tracking-wider hover:shadow-lg transition-all"
                      >
                        Read Sample
                      </button>
                      <button
                        onClick={handleBuyNow}
                        className="flex-1 px-4 py-2 rounded-full border-2 border-owleryGold/40 text-owleryGold font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-owleryGold/10 transition-all"
                      >
                        Buy Now
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => toast.info('Coming in 2026!', { description: 'Join the newsletter to be notified when this book releases.' })}
                      className="w-full px-4 py-2 rounded-full bg-inkPlum/40 border border-inkPlum/60 text-inkPlum font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-inkPlum/50 transition-all"
                    >
                      Coming 2026
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Character Encyclopedia - Mobile Responsive */}
      <div className="mb-12 sm:mb-16 lg:mb-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pearlWhite text-center mb-8 sm:mb-12">
          Character Encyclopedia
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {characters.map((character) => (
            <div
              key={character.id}
              onClick={() => setSelectedCharacter(character)}
              className={`p-5 sm:p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                selectedCharacter.id === character.id
                  ? 'border-tealEnchantment bg-tealEnchantment/10 shadow-lg shadow-tealEnchantment/20'
                  : 'border-moonlightSilver/20 bg-midnight/40 hover:border-tealEnchantment/50'
              }`}
            >
              {/* Character Portrait Placeholder - Mobile Responsive */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-owleryGold to-inkPlum flex items-center justify-center">
                <span className="text-3xl sm:text-4xl">👤</span>
              </div>

              {/* Character Name & Title */}
              <h3 className="text-lg sm:text-xl font-bold text-pearlWhite text-center mb-1">
                {character.name}
              </h3>
              <p className="text-xs sm:text-sm text-tealEnchantment text-center mb-3 font-semibold">
                {character.title}
              </p>
              <p className="text-xs text-moonlightSilver/60 text-center mb-4 pb-4 border-b border-moonlightSilver/10">
                {character.house}
              </p>

              {/* Character Description */}
              <p className="text-xs sm:text-sm text-moonlightSilver/80 mb-4 leading-relaxed">
                {character.description}
              </p>

              {/* Relationships */}
              <div>
                <p className="text-xs text-owleryGold/70 uppercase tracking-wider font-semibold mb-2">
                  Key Relationships
                </p>
                <div className="flex flex-wrap gap-2">
                  {character.relationships.map((rel) => (
                    <span
                      key={rel}
                      className="px-2 py-1 rounded-full bg-inkPlum/20 border border-inkPlum/40 text-inkPlum text-[0.65rem] sm:text-xs"
                    >
                      {rel}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Relationship Map Placeholder - Mobile Responsive */}
        <div className="mt-8 sm:mt-12 p-6 sm:p-8 lg:p-12 rounded-2xl border-2 border-tealEnchantment/30 bg-gradient-to-br from-inkPlum/20 to-midnight/60">
          <h3 className="text-xl sm:text-2xl font-bold text-pearlWhite text-center mb-6 sm:mb-8">
            Character Relationship Web
          </h3>
          <div className="min-h-[200px] sm:min-h-[300px] flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-tealEnchantment/20 flex items-center justify-center">
                <span className="text-3xl sm:text-4xl">🕸️</span>
              </div>
              <p className="text-sm sm:text-base text-moonlightSilver/80">
                Interactive relationship diagram showing alliances, rivalries, and hidden connections
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup - Mobile Responsive */}
      <div id="newsletter" className="mb-12 sm:mb-16 p-6 sm:p-8 lg:p-12 rounded-2xl border-2 border-owleryGold/40 bg-gradient-to-br from-owleryGold/10 via-tealEnchantment/5 to-inkPlum/10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-owleryGold/20 flex items-center justify-center">
            <span className="text-3xl sm:text-4xl">📬</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pearlWhite mb-4">
            Join the Reader Community
          </h2>
          <p className="text-sm sm:text-base text-moonlightSilver/90 mb-6 sm:mb-8">
            Get exclusive bonus content, deleted scenes, character art, early chapter previews, and behind-the-scenes writing updates.
          </p>

          {/* Newsletter Form - Mobile Responsive */}
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-midnight/60 border-2 border-owleryGold/30 text-pearlWhite text-sm sm:text-base focus:border-owleryGold focus:outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={isSubscribing}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-owleryGold to-tealEnchantment text-midnight font-bold text-sm sm:text-base uppercase tracking-wider hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap disabled:opacity-50"
            >
              {isSubscribing ? 'Subscribing...' : 'Subscribe →'}
            </button>
          </form>

          {/* Subscriber Benefits - Mobile Responsive */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-moonlightSilver/70">
              <span>✓</span>
              <span>Deleted Scenes</span>
            </div>
            <div className="flex items-center gap-2 text-moonlightSilver/70">
              <span>✓</span>
              <span>Character Art</span>
            </div>
            <div className="flex items-center gap-2 text-moonlightSilver/70">
              <span>✓</span>
              <span>Early Previews</span>
            </div>
            <div className="flex items-center gap-2 text-moonlightSilver/70">
              <span>✓</span>
              <span>Writing Updates</span>
            </div>
          </div>

          <p className="text-xs text-moonlightSilver/50 mt-6">
            No spam. Unsubscribe anytime. Emails sent monthly.
          </p>
        </div>
      </div>

      {/* Feature Highlights - Mobile Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
        <div className="p-6 rounded-xl border-2 border-owleryGold/30 bg-gradient-to-br from-inkPlum/20 to-midnight/40">
          <span className="text-3xl sm:text-4xl mb-3 block">📖</span>
          <h3 className="text-base sm:text-lg font-bold text-pearlWhite mb-2">Sample Chapters</h3>
          <p className="text-xs sm:text-sm text-moonlightSilver/80">
            Read the first three chapters of each book before you buy. No email required.
          </p>
        </div>

        <div className="p-6 rounded-xl border-2 border-tealEnchantment/30 bg-gradient-to-br from-inkPlum/20 to-midnight/40">
          <span className="text-3xl sm:text-4xl mb-3 block">🗺️</span>
          <h3 className="text-base sm:text-lg font-bold text-pearlWhite mb-2">Interactive World Map</h3>
          <p className="text-xs sm:text-sm text-moonlightSilver/80">
            Explore the kingdoms, cities, and landmarks from the series with an illustrated map.
          </p>
        </div>

        <div className="p-6 rounded-xl border-2 border-inkPlum/30 bg-gradient-to-br from-inkPlum/20 to-midnight/40">
          <span className="text-3xl sm:text-4xl mb-3 block">👥</span>
          <h3 className="text-base sm:text-lg font-bold text-pearlWhite mb-2">Character Encyclopedia</h3>
          <p className="text-xs sm:text-sm text-moonlightSilver/80">
            Dive deep into character backstories, relationships, and hidden secrets.
          </p>
        </div>
      </div>

      {/* Final CTA - Mobile Responsive */}
      <div className="p-6 sm:p-8 lg:p-12 rounded-2xl border-2 border-owleryGold/40 bg-gradient-to-br from-owleryGold/10 via-tealEnchantment/5 to-midnight/20 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pearlWhite mb-4">
          Build Your Own Reader Hub
        </h2>
        <p className="text-sm sm:text-base text-moonlightSilver/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
          As an author AND developer, I built this platform to showcase books, engage readers, and grow my audience.
          Let me build yours.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href="/get-quote"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-owleryGold to-tealEnchantment text-midnight font-bold text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-owleryGold/50 hover:scale-105 transition-all text-center"
          >
            Get Your Author Platform →
          </Link>
          <Link
            href="/portfolio"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-owleryGold/40 text-owleryGold font-bold text-sm sm:text-base uppercase tracking-wider hover:bg-owleryGold/10 transition-all text-center"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
      </div>

      {/* Sample Chapter Modal */}
      {showSampleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight/90 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-2xl border-2 border-owleryGold/40 bg-gradient-to-br from-midnight to-deepOcean shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 sm:p-6 border-b border-owleryGold/20 bg-midnight/95">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-pearlWhite">Crown of Shadows</h3>
                <p className="text-xs sm:text-sm text-owleryGold">Chapter 1 Preview</p>
              </div>
              <button
                onClick={() => setShowSampleModal(false)}
                className="p-2 rounded-full hover:bg-owleryGold/20 transition-colors"
              >
                <svg className="w-6 h-6 text-moonlightSilver" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(80vh-140px)]">
              <div className="prose prose-invert prose-sm sm:prose-base max-w-none">
                {sampleChapterContent.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-moonlightSilver/90 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 p-4 sm:p-6 border-t border-owleryGold/20 bg-midnight/95">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => {
                    handleBuyNow();
                    setShowSampleModal(false);
                  }}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-owleryGold to-tealEnchantment text-midnight font-bold text-sm uppercase tracking-wider hover:shadow-lg transition-all"
                >
                  Get the Full Book →
                </button>
                <button
                  onClick={() => setShowSampleModal(false)}
                  className="px-6 py-3 rounded-full border-2 border-moonlightSilver/30 text-moonlightSilver font-semibold text-sm hover:bg-moonlightSilver/10 transition-all"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
