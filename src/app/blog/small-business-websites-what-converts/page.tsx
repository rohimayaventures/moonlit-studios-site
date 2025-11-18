'use client';

import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { PageCTASection } from '../../components/PageCTASection';

export default function SmallBusinessWebsitesArticle() {
  return (
    <main className="min-h-screen bg-midnight text-pearlWhite">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 px-6">
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-mermaidTeal/45 via-lunarGold/30 to-phoenixFire/35 blur-3xl animate-floatSlow" />
          <div className="absolute -left-24 bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-starlight/30 via-tealBright/25 to-deepOcean/40 blur-3xl" style={{ animation: 'floatSlow 20s ease-in-out infinite 5s' }} />
        </div>

        <div className="relative mx-auto max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-mermaidTeal hover:text-lunarGold transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blog</span>
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-moonlightSilver">
            <span className="px-3 py-1 rounded-full bg-mermaidTeal/20 border border-mermaidTeal/40 text-mermaidTeal font-semibold">
              Business Growth
            </span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime="2025-01-05">January 5, 2025</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
          </div>

          <h1 className="font-elegant text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            Small Business Websites: What Actually Converts (It's Not What You Think)
          </h1>

          <p className="font-serif text-lg sm:text-xl text-moonlightSilver leading-relaxed italic">
            You don't need 50 pages, a chatbot, and animated everything. Here's what cafe owners, salon owners, and boutique businesses ACTUALLY need to turn visitors into customers.
          </p>

          <div className="mt-8 pt-8 border-t border-moonlightSilver/20">
            <p className="text-sm text-moonlightSilver">
              By <span className="text-mermaidTeal font-semibold">Hannah Pagade</span>
            </p>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <article className="py-12 px-6">
        <div className="mx-auto max-w-3xl prose prose-invert prose-lg">
          <div className="space-y-6 text-moonlightSilver leading-relaxed">
            <p className="text-xl font-serif italic text-pearlWhite/90 first-letter:text-6xl first-letter:font-elegant first-letter:text-lunarGold first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:mt-2">
              Every small business owner I've ever talked to has been sold the same lie: "You need a comprehensive website with 47 pages, an interactive blog, live chat, customer portal, email capture popups, and integration with seventeen different platforms." And then they pay $10k+ for a beautiful website that... doesn't actually bring in customers.
            </p>

            <p>
              Here's the truth nobody tells you: <strong>Small business websites don't need to be complicated. They need to answer three questions clearly: What do you do? Why should I care? How do I get started?</strong>
            </p>

            <p>
              That's it. That's the formula. Everything else is noise.
            </p>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">What Small Businesses Actually Need</h2>

            <p>
              Let's break this down by business type, because a cafe needs different things than a law firm.
            </p>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">Local Service Businesses (Salons, Contractors, Pet Groomers)</h3>

            <p>
              <strong>What converts:</strong>
            </p>

            <ul className="space-y-2 text-moonlightSilver ml-6 my-6">
              <li><strong className="text-pearlWhite">Clear services menu with prices</strong> (people want to know costs upfront)</li>
              <li><strong className="text-pearlWhite">Easy booking system</strong> (one-click to schedule, not 12 forms)</li>
              <li><strong className="text-pearlWhite">Before/after photos</strong> (show your work, it speaks louder than copy)</li>
              <li><strong className="text-pearlWhite">Google Maps integration</strong> (make it stupidly easy to find you)</li>
              <li><strong className="text-pearlWhite">Real reviews</strong> (not testimonials you wrote yourself—actual Google/Yelp feeds)</li>
            </ul>

            <p>
              <strong>What you DON'T need:</strong> Blog, chatbot, lengthy "About Us" origin story, complex navigation, membership portal
            </p>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">Cafes & Restaurants</h3>

            <p>
              <strong>What converts:</strong>
            </p>

            <ul className="space-y-2 text-moonlightSilver ml-6 my-6">
              <li><strong className="text-pearlWhite">Menu with prices</strong> (for the love of all that is good, include prices)</li>
              <li><strong className="text-pearlWhite">Hours & location</strong> (prominently displayed, not buried in a footer)</li>
              <li><strong className="text-pearlWhite">Mouth-watering photos</strong> (invest in ONE good photo shoot, use those images everywhere)</li>
              <li><strong className="text-pearlWhite">Reservation or ordering system</strong> (if applicable)</li>
              <li><strong className="text-pearlWhite">Vibes</strong> (show your space, your aesthetic, your atmosphere)</li>
            </ul>

            <p>
              <strong>What you DON'T need:</strong> A blog about coffee bean origins, animated menu transitions, popup for email list
            </p>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">Boutiques & E-Commerce</h3>

            <p>
              <strong>What converts:</strong>
            </p>

            <ul className="space-y-2 text-moonlightSilver ml-6 my-6">
              <li><strong className="text-pearlWhite">Easy product browsing</strong> (clear categories, good search, fast filtering)</li>
              <li><strong className="text-pearlWhite">Quality product photos</strong> (multiple angles, zoom, lifestyle shots)</li>
              <li><strong className="text-pearlWhite">Dead-simple checkout</strong> (guest checkout, auto-fill, saved carts)</li>
              <li><strong className="text-pearlWhite">Clear shipping & return policies</strong> (eliminate objections before they happen)</li>
              <li><strong className="text-pearlWhite">Size guides & fit info</strong> (reduce returns by being ultra-clear)</li>
            </ul>

            <p>
              <strong>What you DON'T need:</strong> Quizzes, complex loyalty programs (unless you're big enough to manage them), overly animated product pages
            </p>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">Creative Professionals (Photographers, Designers, Coaches)</h3>

            <p>
              <strong>What converts:</strong>
            </p>

            <ul className="space-y-2 text-moonlightSilver ml-6 my-6">
              <li><strong className="text-pearlWhite">Portfolio that loads fast</strong> (quality over quantity—20 great pieces, not 200 okay ones)</li>
              <li><strong className="text-pearlWhite">Clear pricing or packages</strong> (even if you say "starting at $X")</li>
              <li><strong className="text-pearlWhite">Personality-driven copy</strong> (people hire <em>you</em>, not just your skills)</li>
              <li><strong className="text-pearlWhite">Easy contact form</strong> (name, email, project details—that's it)</li>
              <li><strong className="text-pearlWhite">Social proof</strong> (who you've worked with, results you've delivered)</li>
            </ul>

            <p>
              <strong>What you DON'T need:</strong> Lengthy blog, complex process diagrams, case studies with 47 sections
            </p>

            <div className="bg-deepOcean/40 border-l-4 border-lunarGold/60 p-6 my-8">
              <p className="text-lg italic text-mermaidTeal/90 m-0">
                "The best small business website is the one that gets out of the customer's way. Show them what they need, make it easy to buy, done."
              </p>
            </div>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">The 5-Page Formula That Actually Works</h2>

            <p>
              Most small businesses can thrive with just five pages. Yes, five. Here's the structure:
            </p>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">1. Homepage (Your Elevator Pitch)</h3>

            <p>
              <strong>Purpose:</strong> Answer "What do you do?" in 3 seconds.
            </p>

            <p>
              <strong>What it needs:</strong>
            </p>

            <ul className="space-y-2 text-moonlightSilver ml-6 my-6">
              <li>Clear headline (what you do, who it's for)</li>
              <li>Supporting subhead (why you're different/better)</li>
              <li>Hero image/video that shows your work or space</li>
              <li>One clear CTA (Book Now, Shop Now, Get Started)</li>
              <li>Social proof snippet (testimonial, logo bar, review stars)</li>
              <li>Overview of services/products (3-4 key offerings max)</li>
            </ul>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">2. Services/Products Page</h3>

            <p>
              <strong>Purpose:</strong> Detail what you offer and how much it costs.
            </p>

            <p>
              <strong>What it needs:</strong>
            </p>

            <ul className="space-y-2 text-moonlightSilver ml-6 my-6">
              <li>Clear list of offerings with descriptions</li>
              <li>Pricing (even if it's "starting at..." or ranges)</li>
              <li>What's included in each package/service</li>
              <li>FAQ addressing common objections</li>
              <li>CTA to book/buy/inquire</li>
            </ul>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">3. About Page</h3>

            <p>
              <strong>Purpose:</strong> Build trust and connection.
            </p>

            <p>
              <strong>What it needs:</strong>
            </p>

            <ul className="space-y-2 text-moonlightSilver ml-6 my-6">
              <li>Your story (brief—why you started, what drives you)</li>
              <li>Photo of you/your team (humans trust humans)</li>
              <li>Your values or approach (what makes you different)</li>
              <li>Credentials/experience (briefly—this isn't a resume)</li>
            </ul>

            <p>
              <strong>Pro tip:</strong> Write this in second person ("you") not first person ("I"). Make it about how you help <em>them</em>, not just your journey.
            </p>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">4. Portfolio/Gallery (If Applicable)</h3>

            <p>
              <strong>Purpose:</strong> Show, don't tell.
            </p>

            <p>
              <strong>What it needs:</strong>
            </p>

            <ul className="space-y-2 text-moonlightSilver ml-6 my-6">
              <li>High-quality images that load fast (compress those files!)</li>
              <li>Categorization if you have multiple service types</li>
              <li>Brief context (what the project was, results achieved)</li>
              <li>Easy navigation (no infinite scroll frustration)</li>
            </ul>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">5. Contact Page</h3>

            <p>
              <strong>Purpose:</strong> Make it absurdly easy to reach you.
            </p>

            <p>
              <strong>What it needs:</strong>
            </p>

            <ul className="space-y-2 text-moonlightSilver ml-6 my-6">
              <li>Simple form (name, email, message—maybe phone)</li>
              <li>Your hours & response time expectations</li>
              <li>Phone number (clickable on mobile)</li>
              <li>Physical address if you have a storefront</li>
              <li>Map embed if location matters</li>
              <li>Links to social media (if you're active there)</li>
            </ul>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">Design Elements That Actually Convert</h2>

            <p>
              Okay, so we've covered content. Now let's talk about design—because good design <em>is</em> conversion optimization.
            </p>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">Mobile-First (Not Mobile-Friendly)</h3>

            <p>
              Most small business traffic is mobile. If your site doesn't work perfectly on phones, you're losing money. Period.
            </p>

            <ul className="space-y-2 text-moonlightSilver ml-6 my-6">
              <li>Thumb-friendly buttons (big enough to tap easily)</li>
              <li>Readable text without zooming (16px minimum)</li>
              <li>Fast load times (compress images, minimize scripts)</li>
              <li>Click-to-call phone numbers</li>
              <li>Easy mobile navigation (hamburger menus are fine, just make them obvious)</li>
            </ul>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">One Clear CTA Per Page</h3>

            <p>
              Decision paralysis is real. Don't give visitors 47 options. Give them <em>one clear next step</em>.
            </p>

            <ul className="space-y-2 text-moonlightSilver ml-6 my-6">
              <li>Homepage: "Book Now" or "Shop Now"</li>
              <li>Services page: "Schedule Consultation"</li>
              <li>About page: "Work With Us"</li>
              <li>Contact page: "Send Message"</li>
            </ul>

            <p>
              Make the button big, contrasting, and repeated (top, middle, bottom of page).
            </p>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">Speed Matters More Than Fancy</h3>

            <p>
              I've seen gorgeous websites with 8-second load times that convert at 2%. And simple, fast sites that convert at 15%. Speed wins.
            </p>

            <ul className="space-y-2 text-moonlightSilver ml-6 my-6">
              <li>Compress all images (use tools like TinyPNG)</li>
              <li>Lazy load images below the fold</li>
              <li>Minimize scripts and plugins</li>
              <li>Use modern formats (WebP for images, MP4 for video)</li>
              <li>Test on actual mobile devices, not just desktop simulators</li>
            </ul>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">Trust Signals</h3>

            <p>
              People need to trust you before they buy. Build that trust visually:
            </p>

            <ul className="space-y-2 text-moonlightSilver ml-6 my-6">
              <li><strong className="text-pearlWhite">Reviews:</strong> Google, Yelp, Facebook—embed real ones</li>
              <li><strong className="text-pearlWhite">Logos:</strong> Who you've worked with or certifications you have</li>
              <li><strong className="text-pearlWhite">Security badges:</strong> SSL certificates, payment security icons</li>
              <li><strong className="text-pearlWhite">Photos of real people:</strong> Your team, your space, your work—not stock photos</li>
            </ul>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">Common Conversion Killers (Stop Doing These)</h2>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">1. Mystery Pricing</h3>

            <p>
              "Contact us for pricing" is a conversion killer. Yes, every project is different. But give <em>some</em> guidance. Starting rates. Ranges. Packages. Something.
            </p>

            <p>
              People who can't afford you will contact you anyway. People who <em>can</em> afford you won't if they think you're hiding prices.
            </p>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">2. Aggressive Popups</h3>

            <p>
              If I land on your site and immediately get hit with "WAIT! Before you go..." I am, in fact, going.
            </p>

            <p>
              If you <em>must</em> have email capture, make it:
            </p>

            <ul className="space-y-2 text-moonlightSilver ml-6 my-6">
              <li>Delayed (after 30+ seconds or when they scroll 50%)</li>
              <li>Exit-intent only (when they're already leaving)</li>
              <li>Offering real value (not just "subscribe for updates")</li>
              <li>Easy to dismiss (big X, works on first click)</li>
            </ul>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">3. Auto-Play Video/Music</h3>

            <p>
              Just... no. People browse at work, in waiting rooms, on public transit. Don't make their phone start blaring music.
            </p>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">4. Complicated Navigation</h3>

            <p>
              Your menu should have 5-7 items max. If you have more, you need subcategories or a rethink.
            </p>

            <p>
              Visitors shouldn't need a site map to find your contact page.
            </p>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">5. Tiny Text</h3>

            <p>
              If I need to pinch-zoom to read your copy on mobile, I'm leaving. 16px minimum font size. Always.
            </p>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">The Real ROI of a Good Website</h2>

            <p>
              Here's what a properly done small business website gets you:
            </p>

            <ul className="space-y-3 text-moonlightSilver ml-6 my-6">
              <li><strong className="text-pearlWhite">Credibility:</strong> People Google you before buying. No website = no trust.</li>
              <li><strong className="text-pearlWhite">24/7 salesperson:</strong> Your site books appointments while you sleep.</li>
              <li><strong className="text-pearlWhite">Reduced admin time:</strong> FAQ page = fewer "what are your hours?" calls.</li>
              <li><strong className="text-pearlWhite">Better leads:</strong> Clear pricing filters out tire-kickers, attracts ready buyers.</li>
              <li><strong className="text-pearlWhite">Competitive edge:</strong> Your competitor's site is probably bad. Yours doesn't have to be.</li>
            </ul>

            <p>
              You don't need to spend $20k. You don't need 50 pages. You don't need bleeding-edge tech.
            </p>

            <p>
              You need clarity, speed, and a clear path to "yes."
            </p>

            <div className="bg-deepOcean/40 border-l-4 border-lunarGold/60 p-6 my-8">
              <p className="text-lg italic text-mermaidTeal/90 m-0">
                "The best website is the one that makes it easier for customers to choose you. Everything else is ego."
              </p>
            </div>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">Getting Started: Your Next Steps</h2>

            <p>
              If you're ready to build (or rebuild) your small business website:
            </p>

            <ol className="space-y-3 text-moonlightSilver ml-6 my-6 list-decimal">
              <li>
                <strong className="text-pearlWhite">Audit your current site</strong> (or competitors' sites if you don't have one): What's working? What's annoying? What questions aren't answered?
              </li>
              <li>
                <strong className="text-pearlWhite">Map your 5 core pages:</strong> What does each page need to accomplish?
              </li>
              <li>
                <strong className="text-pearlWhite">Gather assets:</strong> Photos, copy, reviews, pricing info—get it all in one place.
              </li>
              <li>
                <strong className="text-pearlWhite">Choose your path:</strong> DIY with a builder (Squarespace, Wix) or hire someone who gets small business needs (hi 👋).
              </li>
              <li>
                <strong className="text-pearlWhite">Launch and iterate:</strong> Perfect is the enemy of done. Get it live, then improve based on real user behavior.
              </li>
            </ol>

            <p className="text-xl text-pearlWhite/90 font-serif italic mt-8">
              Your website isn't a brochure. It's not art. It's a tool that should make you money by making it <em>easy</em> for customers to choose you. Build accordingly.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-moonlightSilver/20">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-mermaidTeal" />
              <span className="text-sm text-moonlightSilver">Tagged:</span>
              <span className="px-3 py-1 rounded-full bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal text-sm">Small Business</span>
              <span className="px-3 py-1 rounded-full bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal text-sm">Web Design</span>
              <span className="px-3 py-1 rounded-full bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal text-sm">Conversion</span>
              <span className="px-3 py-1 rounded-full bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal text-sm">Local Business</span>
              <span className="px-3 py-1 rounded-full bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal text-sm">Marketing</span>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-12 px-6 bg-deepOcean/30 border-t border-moonlightSilver/20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-elegant text-2xl sm:text-3xl font-semibold text-pearlWhite mb-8 text-center">
            Continue Reading
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/blog/ghibli-ux-philosophy" className="group overflow-hidden rounded-xl border border-moonlightSilver/20 bg-gradient-to-br from-deepOcean/30 to-midnight/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-mermaidTeal/20 p-6">
              <span className="px-2 py-1 rounded-md bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal font-semibold text-xs">Design & Brand</span>
              <h3 className="font-elegant text-xl font-semibold text-pearlWhite mt-4 mb-3 group-hover:text-lunarGold transition-colors">
                The Ghibli UX Philosophy
              </h3>
              <p className="text-moonlightSilver text-sm">Why cozy websites win...</p>
            </Link>

            <Link href="/blog/rag-chatbots-context-matters" className="group overflow-hidden rounded-xl border border-moonlightSilver/20 bg-gradient-to-br from-deepOcean/30 to-midnight/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-mermaidTeal/20 p-6">
              <span className="px-2 py-1 rounded-md bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal font-semibold text-xs">AI & Automation</span>
              <h3 className="font-elegant text-xl font-semibold text-pearlWhite mt-4 mb-3 group-hover:text-lunarGold transition-colors">
                RAG Chatbots: Why Context Matters
              </h3>
              <p className="text-moonlightSilver text-sm">Your business doesn't need ChatGPT...</p>
            </Link>

            <Link href="/blog/moonlit-trifecta" className="group overflow-hidden rounded-xl border border-moonlightSilver/20 bg-gradient-to-br from-deepOcean/30 to-midnight/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-mermaidTeal/20 p-6">
              <span className="px-2 py-1 rounded-md bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal font-semibold text-xs">Studio Updates</span>
              <h3 className="font-elegant text-xl font-semibold text-pearlWhite mt-4 mb-3 group-hover:text-lunarGold transition-colors">
                The Moonlit Trifecta
              </h3>
              <p className="text-moonlightSilver text-sm">Where Healthcare, Code, and Creativity Converge...</p>
            </Link>
          </div>
        </div>
      </section>

      <PageCTASection />
    </main>
  );
}
