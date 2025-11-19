'use client';

import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { PageCTASection } from '../../components/PageCTASection';

export default function GhibliUXArticle() {
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
              Design & Brand
            </span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime="2025-01-12">January 12, 2025</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>6 min read</span>
            </div>
          </div>

          <h1 className="font-elegant text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            The Studio Ghibli UX Philosophy: Why Cozy Websites Win
          </h1>

          <p className="font-serif text-lg sm:text-xl text-moonlightSilver leading-relaxed italic">
            Forget aggressive popups and overwhelming CTAs. I'm building websites like Hayao Miyazaki builds films—with warmth, intention, and a little bit of magic.
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
            <p className="text-xl font-serif italic text-pearlWhite/90 leading-relaxed">
              <span className="text-6xl font-elegant text-lunarGold float-left leading-none mr-2 mt-2">𝒫</span>
              icture this: You land on a website. Before you even finish reading the headline, a popup blocks half your screen demanding your email. You close it. Another popup appears offering a discount. You scroll. A chatbot bubble expands with an aggressive "CAN I HELP YOU???" You leave.
            </p>

            <p>
              Now picture this: You land on a website. The colors are gentle. The typography breathes. You read a bit, scroll naturally, and by the time you reach the bottom, you're not annoyed—you're <em>charmed</em>. You want to book that call. You want to sign up. Not because you were bullied into it, but because the experience made you <em>feel</em> something.
            </p>

            <p>
              Welcome to what I call <strong>Ghibli UX</strong>—and it's about to change how you think about web design.
            </p>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">What Is Ghibli UX?</h2>

            <p>
              If you've ever watched a Studio Ghibli film—<em>Spirited Away</em>, <em>My Neighbor Totoro</em>, <em>Howl's Moving Castle</em>—you know the feeling. These films don't assault you with action sequences every five minutes. They don't manipulate your emotions with cheap tricks. They <em>invite</em> you into a world and make you want to stay there.
            </p>

            <p>
              Hayao Miyazaki, the creative genius behind Ghibli, builds worlds with incredible intentionality. Every frame is art. Every moment serves the story. There's <em>space</em>—quiet moments where characters just exist. The pacing respects your intelligence. The beauty is in the details, not the spectacle.
            </p>

            <p>
              <strong>Ghibli UX applies that philosophy to web design.</strong> It's about creating digital experiences that feel cozy, intentional, and emotionally resonant—not aggressive, overwhelming, or manipulative.
            </p>

            <div className="bg-deepOcean/40 border-l-4 border-lunarGold/60 p-6 my-8">
              <p className="text-lg italic text-mermaidTeal/90 m-0">
                "The best websites don't feel like marketing. They feel like coming home."
              </p>
            </div>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">The Problem with Modern Web Design</h2>

            <p>
              Let's be real: most websites are exhausting. They're built on this assumption that users are idiots who need to be tricked into converting. So we get:
            </p>

            <ul className="space-y-2 text-moonlightSilver ml-6 my-6">
              <li><strong className="text-pearlWhite">Aggressive popups</strong> that block content before you've even decided if you like the site</li>
              <li><strong className="text-pearlWhite">Countdown timers</strong> creating fake urgency ("Only 3 spots left!" ...sure, Jan)</li>
              <li><strong className="text-pearlWhite">Chatbots</strong> that expand automatically and interrupt your reading flow</li>
              <li><strong className="text-pearlWhite">Dark patterns</strong> that make it hard to say no or leave</li>
              <li><strong className="text-pearlWhite">Overwhelming CTAs</strong> plastered everywhere screaming BUY NOW BOOK NOW SIGN UP NOW</li>
            </ul>

            <p>
              Does this increase conversions in the short term? Maybe. Does it build trust, loyalty, and a brand people actually <em>like</em>? Absolutely not.
            </p>

            <p>
              This is the equivalent of someone following you around a store yelling "BUY SOMETHING!" every three seconds. Yeah, you might buy something just to make them stop. But you're not coming back. And you're definitely not recommending that store to your friends.
            </p>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">The Ghibli Approach: Cozy {'>'} Aggressive</h2>

            <p>
              Ghibli UX flips the script. Instead of <em>demanding</em> attention, it <em>earns</em> it. Instead of overwhelming users, it invites them. Instead of manipulating behavior, it builds trust.
            </p>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">1. Breathing Room (Ma)</h3>

            <p>
              In Japanese aesthetics, there's a concept called <em>ma</em> (間)—the space between things. It's the pause between notes in music. The silence between dialogue. The emptiness that gives meaning to what surrounds it.
            </p>

            <p>
              Ghibli films use <em>ma</em> beautifully. There are scenes where characters just... sit. Cook breakfast. Watch rain fall. No dialogue. No plot advancement. Just <em>space</em>.
            </p>

            <p>
              <strong>Web equivalent:</strong> White space. Generous padding. Not cramming every pixel with content. Letting headlines breathe. Giving users room to think before hitting them with the next section.
            </p>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">2. Intentional Beauty</h3>

            <p>
              Every frame of a Ghibli film is meticulously crafted. Colors are chosen carefully. Lighting sets the mood. Details matter—the way steam rises from soup, how light filters through trees, the exact shade of twilight.
            </p>

            <p>
              <strong>Web equivalent:</strong> Thoughtful color palettes (not just "what's trendy"). Typography that enhances readability. Micro-interactions that delight without distracting. Every design choice serves a purpose—it's not decoration for decoration's sake.
            </p>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">3. Respect for the Audience</h3>

            <p>
              Miyazaki trusts his audience. He doesn't over-explain. He doesn't pander. He creates rich, complex worlds and trusts viewers to keep up. Kids and adults both find meaning in his films—just different layers of it.
            </p>

            <p>
              <strong>Web equivalent:</strong> Clear, concise copy that doesn't insult intelligence. No manipulative tactics. Trusting users to make informed decisions. If your product/service is good, you don't <em>need</em> countdown timers and fake scarcity. You just need to communicate value clearly and let people decide.
            </p>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">4. Emotional Resonance</h3>

            <p>
              Ghibli films make you <em>feel</em> things. Not through manipulation or shock value, but through genuine storytelling, relatable characters, and universal themes. You cry at the end of <em>Grave of the Fireflies</em> not because they forced it, but because they <em>earned</em> it.
            </p>

            <p>
              <strong>Web equivalent:</strong> Brand storytelling that connects. User experiences that feel personal, not transactional. Copy that speaks to real pain points and desires—not generic marketing fluff. Design that evokes emotion—calm, excitement, trust, inspiration—depending on what the brand needs.
            </p>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">Real-World Examples: Ghibli UX in Action</h2>

            <p>
              Let's get practical. What does this actually look like for different types of businesses?
            </p>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">For a Coffee Shop:</h3>

            <p>
              <strong>Aggressive approach:</strong> BOOK YOUR TABLE NOW! Limited seating! Order ahead and save 10%! Join our rewards program! (popup blocks menu)
            </p>

            <p>
              <strong>Ghibli approach:</strong> Beautiful imagery of steam rising from a latte. Warm color palette (amber, cream, soft brown). Menu presented clearly with enticing descriptions. One gentle CTA: "Visit us at [address] or order ahead." No popups. Just an invitation to experience something lovely.
            </p>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">For a Healthcare Portal:</h3>

            <p>
              <strong>Aggressive approach:</strong> Cluttered dashboard with 50 buttons. Medical jargon everywhere. Requires 12 clicks to schedule an appointment. Chatbot auto-expands asking "HOW CAN I HELP?"
            </p>

            <p>
              <strong>Ghibli approach:</strong> Clean, calm interface. Clear hierarchy—"Schedule Appointment," "View Results," "Message Your Doctor." Plain language explanations. Gentle animations that reduce anxiety. Optional chatbot that stays tucked away unless needed. Design that makes a stressful situation feel more manageable.
            </p>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">For a Design Studio (Ahem, Like Mine):</h3>

            <p>
              <strong>Aggressive approach:</strong> Book a free consultation NOW! See why we're the BEST! (testimonials everywhere) Don't miss out! (countdown timer)
            </p>

            <p>
              <strong>Ghibli approach:</strong> Portfolio speaks for itself. Clear descriptions of services. Client stories that feel genuine, not salesy. One clear path to get in touch. Trust that the right clients will recognize quality and reach out—no desperation needed.
            </p>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">Does Ghibli UX Actually Convert?</h2>

            <p>
              Here's the question everyone asks: "But does being <em>nice</em> actually work? Don't aggressive tactics convert better?"
            </p>

            <p>
              Short answer: <strong>It depends on what you're optimizing for.</strong>
            </p>

            <p>
              If you want to maximize immediate conversions from cold traffic and don't care about brand loyalty, retention, or customer lifetime value? Sure, aggressive tactics might win.
            </p>

            <p>
              But if you want to build a brand people actually <em>like</em>? If you want customers who stick around, refer friends, and become genuine advocates? <strong>Ghibli UX wins every time.</strong>
            </p>

            <div className="bg-deepOcean/40 border-l-4 border-lunarGold/60 p-6 my-8">
              <p className="text-lg italic text-mermaidTeal/90 m-0">
                "The best conversion isn't tricking someone into clicking. It's building trust so strong that clicking feels like the obvious next step."
              </p>
            </div>

            <p>
              I've seen it with my own clients. Small businesses with Ghibli-style websites get comments like:
            </p>

            <ul className="space-y-2 text-moonlightSilver ml-6 my-6">
              <li>"Your website is so relaxing to browse."</li>
              <li>"I spent way longer here than I planned—in a good way."</li>
              <li>"This feels like YOU. I knew I had to book."</li>
              <li>"Finally, a website that doesn't feel like it's yelling at me."</li>
            </ul>

            <p>
              <em>That's</em> the conversion that matters. Not the panicked click. The <em>confident</em> one.
            </p>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">How to Implement Ghibli UX</h2>

            <p>
              Ready to make your website feel less like a used car lot and more like a cozy Studio Ghibli cafe? Here's where to start:
            </p>

            <ol className="space-y-4 text-moonlightSilver ml-6 my-6 list-decimal">
              <li>
                <strong className="text-pearlWhite">Audit your aggressive elements.</strong> Popups, countdown timers, auto-expanding chats—kill them or tone them way down.
              </li>
              <li>
                <strong className="text-pearlWhite">Add breathing room.</strong> Increase padding, reduce clutter, let your content breathe.
              </li>
              <li>
                <strong className="text-pearlWhite">Choose colors intentionally.</strong> Think about the <em>feeling</em> you want to evoke, not just what looks trendy.
              </li>
              <li>
                <strong className="text-pearlWhite">Write like a human.</strong> Ditch the corporate jargon. Talk to users like friends, not targets.
              </li>
              <li>
                <strong className="text-pearlWhite">Make CTAs invitations, not demands.</strong> "Let's work together" {'>'} "BOOK NOW!!!"
              </li>
              <li>
                <strong className="text-pearlWhite">Prioritize delight over conversion hacks.</strong> Subtle animations, thoughtful micro-interactions, details that make users smile.
              </li>
            </ol>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">The Bottom Line</h2>

            <p>
              The internet is exhausting enough. Let's stop making websites that add to the noise. Let's build digital spaces that people actually <em>enjoy</em> being in—not because we tricked them, but because we created something worth experiencing.
            </p>

            <p>
              <strong>Ghibli UX isn't just a design philosophy. It's a rebellion against the aggressive, manipulative, anxiety-inducing web we've normalized.</strong> It's a return to craftsmanship, intentionality, and respect for the humans on the other side of the screen.
            </p>

            <p className="text-xl text-pearlWhite/90 font-serif italic mt-8">
              Because the best websites don't feel like marketing. They feel like coming home. And <em>that's</em> what converts.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-moonlightSilver/20">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-mermaidTeal" />
              <span className="text-sm text-moonlightSilver">Tagged:</span>
              <span className="px-3 py-1 rounded-full bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal text-sm">UX Design</span>
              <span className="px-3 py-1 rounded-full bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal text-sm">Studio Ghibli</span>
              <span className="px-3 py-1 rounded-full bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal text-sm">Small Business</span>
              <span className="px-3 py-1 rounded-full bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal text-sm">Web Design</span>
              <span className="px-3 py-1 rounded-full bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal text-sm">User Experience</span>
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
            <Link href="/blog/small-business-websites-what-converts" className="group overflow-hidden rounded-xl border border-moonlightSilver/20 bg-gradient-to-br from-deepOcean/30 to-midnight/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-mermaidTeal/20 p-6">
              <span className="px-2 py-1 rounded-md bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal font-semibold text-xs">Business Growth</span>
              <h3 className="font-elegant text-xl font-semibold text-pearlWhite mt-4 mb-3 group-hover:text-lunarGold transition-colors">
                Small Business Websites: What Actually Converts
              </h3>
              <p className="text-moonlightSilver text-sm">You don't need 50 pages...</p>
            </Link>

            <Link href="/blog/moonlit-trifecta" className="group overflow-hidden rounded-xl border border-moonlightSilver/20 bg-gradient-to-br from-deepOcean/30 to-midnight/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-mermaidTeal/20 p-6">
              <span className="px-2 py-1 rounded-md bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal font-semibold text-xs">Studio Updates</span>
              <h3 className="font-elegant text-xl font-semibold text-pearlWhite mt-4 mb-3 group-hover:text-lunarGold transition-colors">
                The Moonlit Trifecta
              </h3>
              <p className="text-moonlightSilver text-sm">Where Healthcare, Code, and Creativity Converge...</p>
            </Link>

            <Link href="/blog/rag-chatbots-context-matters" className="group overflow-hidden rounded-xl border border-moonlightSilver/20 bg-gradient-to-br from-deepOcean/30 to-midnight/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-mermaidTeal/20 p-6">
              <span className="px-2 py-1 rounded-md bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal font-semibold text-xs">AI & Automation</span>
              <h3 className="font-elegant text-xl font-semibold text-pearlWhite mt-4 mb-3 group-hover:text-lunarGold transition-colors">
                RAG Chatbots: Why Context Matters
              </h3>
              <p className="text-moonlightSilver text-sm">Your business doesn't need ChatGPT...</p>
            </Link>
          </div>
        </div>
      </section>

      <PageCTASection />
    </main>
  );
}
