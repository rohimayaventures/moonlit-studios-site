export const metadata = {
  title: "Cookie & Tracking Notice | Moonlit Studios",
  description: "How Moonlit Studios uses cookies and tracking technologies.",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-midnight via-deepOcean to-midnight text-moonlightSilver px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-pearlWhite">
            Cookie & Tracking Notice
          </h1>
          <p className="text-sm text-moonlightSilver/80">
            Last updated: {new Date().getFullYear()}
          </p>
        </header>

        <div className="space-y-8 text-sm md:text-base leading-relaxed">
          {/* What Are Cookies */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device (computer, phone, or tablet) when you visit
              a website. They help websites remember your preferences, improve your user experience, and gather
              analytics data.
            </p>
            <p>
              Cookies can be "session cookies" (deleted when you close your browser) or "persistent cookies"
              (remain on your device for a set period or until you delete them).
            </p>
          </section>

          {/* How We Use Cookies */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">How We Use Cookies</h2>
            <p>
              Moonlit Studios uses cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Essential site functionality:</strong> Enable core features like form submissions,
                authentication, and session management.
              </li>
              <li>
                <strong>Performance and analytics:</strong> Understand how visitors use our site (pages visited,
                time spent, bounce rates) using privacy-friendly analytics tools.
              </li>
              <li>
                <strong>Preferences:</strong> Remember your settings and choices (e.g., dark mode, language
                preferences).
              </li>
            </ul>
            <p className="mt-4">
              <strong>We do not use intrusive third-party advertising cookies or tracking pixels.</strong>
            </p>
          </section>

          {/* Types of Cookies */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Types of Cookies</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-starlight">1. Essential Cookies</h3>
                <p>
                  These cookies are necessary for the website to function properly. They enable core features like
                  form submissions, secure login sessions, and CSRF protection. You cannot opt out of essential
                  cookies.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-starlight">2. Performance / Analytics Cookies</h3>
                <p>
                  We may use privacy-friendly analytics tools (such as Plausible or Umami) to collect anonymous
                  data about site usage. These tools do not track you across websites or sell your data to third parties.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-starlight">3. Preference Cookies</h3>
                <p>
                  These cookies remember your choices and preferences (such as theme settings or form auto-fill)
                  to improve your experience on future visits.
                </p>
              </div>
            </div>
          </section>

          {/* Your Choices */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Your Choices</h2>
            <p>
              You have control over how cookies are used on your device:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Browser settings:</strong> Most browsers allow you to block or delete cookies through
                their settings menu. Please note that blocking cookies may affect the functionality of some features.
              </li>
              <li>
                <strong>Analytics opt-out:</strong> If we use analytics tools, you can opt out by adjusting your
                browser settings or using browser extensions that block tracking scripts.
              </li>
            </ul>
            <p className="mt-4">
              Learn more about managing cookies in your browser:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-starlight hover:underline">
                  Google Chrome
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-starlight hover:underline">
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-starlight hover:underline">
                  Safari
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-starlight hover:underline">
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Third-Party Services</h2>
            <p>
              Our website integrates with third-party services that may set their own cookies, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Stripe:</strong> Payment processing (when you make a purchase or submit payment information)
              </li>
              <li>
                <strong>Calendly:</strong> Consultation booking and scheduling
              </li>
              <li>
                <strong>Analytics providers:</strong> Privacy-friendly analytics tools (if enabled)
              </li>
            </ul>
            <p className="mt-4">
              These third-party services have their own privacy policies and cookie policies, which we encourage
              you to review.
            </p>
          </section>

          {/* Updates to This Notice */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Updates to This Notice</h2>
            <p>
              We may update this Cookie & Tracking Notice from time to time to reflect changes in our practices
              or legal requirements. When we make changes, we will update the "Last updated" date at the top of
              this page.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Contact</h2>
            <p>
              If you have questions about our use of cookies, please contact us:
            </p>
            <p className="ml-4">
              <strong>Email:</strong>{" "}
              <a href="mailto:hello@moonlitstudios.com" className="text-starlight hover:underline">
                hello@moonlitstudios.com
              </a>
              <br />
              <strong>Location:</strong> Colorado, USA
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
