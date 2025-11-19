export const metadata = {
  title: "Terms of Service | Moonlit Studios",
  description: "Terms and conditions for using Moonlit Studios services and website.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-midnight via-deepOcean to-midnight text-moonlightSilver px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-pearlWhite">
            Terms of Service
          </h1>
          <p className="text-sm text-moonlightSilver/80">
            Last updated: {new Date().getFullYear()}
          </p>
        </header>

        <div className="space-y-8 text-sm md:text-base leading-relaxed">
          {/* Acceptance of Terms */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Acceptance of Terms</h2>
            <p>
              By accessing or using the Moonlit Studios website (moonlitstudios.com) or engaging our services,
              you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not
              use our website or services.
            </p>
          </section>

          {/* Who We Are */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Who We Are</h2>
            <p>
              Moonlit Studios is a brand of <strong>Pagade Ventures</strong>, based in <strong>Colorado, USA</strong>.
              We provide strategic design, technical development, AI innovation, health-tech solutions, consulting,
              and ghostwriting services.
            </p>
          </section>

          {/* Use of the Site */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Use of the Site</h2>
            <p>You agree to use our website and services only for lawful purposes. You may not:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Engage in any activity that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Use automated tools (bots, scrapers, etc.) to extract content without permission</li>
              <li>Transmit harmful code, viruses, or malware</li>
              <li>Misrepresent your identity or affiliation</li>
              <li>Infringe on the intellectual property rights of Moonlit Studios or third parties</li>
            </ul>
          </section>

          {/* No Medical, Legal, or Financial Advice */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">No Medical, Legal, or Financial Advice</h2>
            <p>
              While our founder is a nurse and healthcare leader, <strong>nothing on this website or provided through our
              AI tools constitutes medical, legal, or financial advice</strong>. All content, including insights
              shared through AI chat tools like Kai, is provided for informational and creative purposes only.
            </p>
            <p>
              You should consult with appropriate licensed professionals for medical, legal, or financial guidance.
            </p>
          </section>

          {/* AI Tools and Kai */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">AI Tools and Kai</h2>
            <p>
              Our website features AI-powered tools, including Kai, our interactive AI assistant. By using these
              tools, you acknowledge that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>AI-generated content may be inaccurate, incomplete, or outdated</li>
              <li>You must verify all information before relying on it for any purpose</li>
              <li>Moonlit Studios is not responsible for decisions made based on AI outputs</li>
              <li>AI tools are provided "as is" with no guarantee of uptime or accuracy</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Intellectual Property</h2>
            <p>
              All branding, designs, website content, code, frameworks, and creative work created by Moonlit Studios
              remain the intellectual property of <strong>Moonlit Studios / Pagade Ventures</strong> unless
              otherwise specified in a signed Statement of Work (SOW) or contract.
            </p>
            <p>
              Clients receive licenses or ownership rights only as explicitly outlined in their project agreements.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Third-Party Services</h2>
            <p>
              Our website and services may integrate with third-party tools such as Stripe (payments),
              Calendly (booking), analytics providers, and AI APIs (OpenAI, Anthropic). These services have
              their own terms and privacy policies, which you are responsible for complying with.
            </p>
            <p>
              Moonlit Studios is not responsible for the actions, policies, or practices of third-party providers.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Moonlit Studios and Pagade Ventures shall not be liable for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Indirect, incidental, consequential, or special damages arising from your use of our services</li>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Errors or inaccuracies in AI-generated content</li>
              <li>Downtime, service interruptions, or technical failures</li>
            </ul>
            <p className="mt-4">
              In any case, our total liability shall not exceed the amount you have paid for the specific service
              in question.
            </p>
          </section>

          {/* Indemnification */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Moonlit Studios, Pagade Ventures, and their
              affiliates from any claims, damages, losses, or expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your use or misuse of our website or services</li>
              <li>Your violation of these Terms of Service</li>
              <li>Your infringement of any third-party rights</li>
            </ul>
          </section>

          {/* Governing Law */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of the <strong>State of Colorado, USA</strong>.
              Any disputes arising from these terms or your use of our services shall be resolved in the courts
              of Colorado.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Changes to Terms</h2>
            <p>
              We may update these Terms of Service from time to time. When we make changes, we will update the
              "Last updated" date at the top of this page. Continued use of our website or services after changes
              are posted constitutes acceptance of the updated terms.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Contact</h2>
            <p>
              If you have questions about these Terms of Service, please contact us:
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
