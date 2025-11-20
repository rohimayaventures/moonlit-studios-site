export const metadata = {
  title: "Privacy Policy | Moonlit Studios",
  description: "How Moonlit Studios collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-midnight via-deepOcean to-midnight text-moonlightSilver px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-pearlWhite">
            Privacy Policy
          </h1>
          <p className="text-sm text-moonlightSilver/80">
            Last updated: {new Date().getFullYear()}
          </p>
        </header>

        <div className="space-y-8 text-sm md:text-base leading-relaxed">
          {/* Who We Are */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Who We Are</h2>
            <p>
              Moonlit Studios is a brand of <strong>Pagade Ventures</strong>, based in <strong>Colorado, USA</strong>.
              We provide creative and technical services including web development, AI innovation, health-tech solutions,
              consulting, and ghostwriting.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, and protect your personal information when you use
              our website and services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Contact Information:</strong> Name, email address, phone number, and company details
                submitted through contact forms, quote tools, or booking systems.
              </li>
              <li>
                <strong>Project Information:</strong> Details about your business, requested services,
                project scope, budget preferences, and timeline.
              </li>
              <li>
                <strong>Payment Information:</strong> Payment data is processed securely by our payment provider
                (Stripe). We do not directly store your full credit card information.
              </li>
              <li>
                <strong>Usage Data:</strong> We may collect analytics data such as pages visited, time spent
                on the site, and interaction patterns using privacy-friendly tools.
              </li>
              <li>
                <strong>Communications:</strong> Any information you share via AI chat tools (like Kai),
                client portals, or email correspondence.
              </li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Respond to inquiries and provide quotes for services</li>
              <li>Manage bookings, onboarding, and project delivery</li>
              <li>Send transactional emails such as project updates, invoices, and legal notices</li>
              <li>Improve our website, services, and user experience</li>
              <li>Comply with legal obligations and resolve disputes</li>
            </ul>
            <p className="mt-4">
              We will not use your information for marketing purposes without your explicit consent.
            </p>
          </section>

          {/* Legal Basis */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Legal Basis for Processing</h2>
            <p>We process your personal information based on:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Consent:</strong> When you voluntarily provide information through forms or tools</li>
              <li><strong>Legitimate Interest:</strong> To respond to inquiries and improve our services</li>
              <li><strong>Performance of a Contract:</strong> To fulfill our contractual obligations when delivering services</li>
            </ul>
          </section>

          {/* Sharing of Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Sharing of Information</h2>
            <p>
              We may share your information with trusted third-party service providers who help us deliver
              our services, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Payment processors (e.g., Stripe)</li>
              <li>Booking and scheduling tools (e.g., Calendly)</li>
              <li>Database and hosting providers (e.g., Supabase, Vercel)</li>
              <li>Email service providers</li>
              <li>AI API providers (e.g., OpenAI, Anthropic)</li>
            </ul>
            <p className="mt-4">
              <strong>We do not sell your personal data to third parties.</strong>
            </p>
          </section>

          {/* Data Retention */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our services and
              meet legal, financial, and contractual obligations. You may request deletion of your data
              where applicable by contacting us at{" "}
              <a href="mailto:hello@moonlstudios.com" className="text-starlight hover:underline">
                hello@moonlstudios.com
              </a>.
            </p>
          </section>

          {/* Your Rights */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Your Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (where applicable)</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails at any time</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at{" "}
              <a href="mailto:hello@moonlstudios.com" className="text-starlight hover:underline">
                hello@moonlstudios.com
              </a>.
            </p>
          </section>

          {/* Security */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect your personal information
              from unauthorized access, disclosure, alteration, or destruction. However, no system is 100% secure,
              and we cannot guarantee absolute security.
            </p>
          </section>

          {/* International Transfers */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">International Transfers</h2>
            <p>
              Some of our third-party service providers may store or process your data outside of your country.
              These providers maintain their own data protection safeguards in accordance with applicable laws.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Contact</h2>
            <p>
              If you have questions about this Privacy Policy or how we handle your data, please contact us:
            </p>
            <p className="ml-4">
              <strong>Email:</strong>{" "}
              <a href="mailto:hello@moonlstudios.com" className="text-starlight hover:underline">
                hello@moonlstudios.com
              </a>
              <br />
              <strong>Location:</strong> Colorado, USA
            </p>
          </section>

          {/* Updates to This Policy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal
              requirements. When we make changes, we will update the "Last updated" date at the top of this page.
              We encourage you to review this policy periodically.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
