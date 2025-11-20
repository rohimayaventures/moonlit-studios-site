export const metadata = {
  title: "AI Use Disclosure | Moonlit Studios",
  description: "How Moonlit Studios uses AI tools and what you need to know.",
};

export default function AIDisclosurePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-midnight via-deepOcean to-midnight text-moonlightSilver px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-pearlWhite">
            AI Use Disclosure
          </h1>
          <p className="text-sm text-moonlightSilver/80">
            Last updated: {new Date().getFullYear()}
          </p>
        </header>

        <div className="space-y-8 text-sm md:text-base leading-relaxed">
          {/* Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Overview</h2>
            <p>
              Moonlit Studios embraces AI as a powerful tool for creativity, productivity, and innovation. We use
              AI technologies (including tools like Kai, our AI assistant) to enhance our services, provide support,
              and deliver high-quality results for our clients.
            </p>
            <p>
              This disclosure explains how we use AI, its limitations, and your responsibilities when interacting
              with AI-powered features on our website.
            </p>
          </section>

          {/* How AI Is Used */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">How AI Is Used</h2>
            <p>
              We use AI tools across various aspects of our work, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Drafting and ideation:</strong> AI helps us brainstorm ideas, generate content outlines,
                and draft initial versions of text, code, or designs.
              </li>
              <li>
                <strong>Code scaffolding and development:</strong> AI assists in writing code, debugging, and
                automating repetitive tasks to speed up development.
              </li>
              <li>
                <strong>Interactive support:</strong> Our AI chat assistant (Kai) provides instant responses to
                common questions, project inquiries, and service information.
              </li>
              <li>
                <strong>Research and analysis:</strong> AI helps us gather information, analyze data, and stay
                current with industry trends.
              </li>
              <li>
                <strong>Internal productivity:</strong> AI tools streamline our workflows, automate admin tasks,
                and improve efficiency.
              </li>
            </ul>
            <p className="mt-4 font-semibold text-starlight">
              All AI-generated outputs are reviewed, edited, and refined by human experts before delivery.
            </p>
          </section>

          {/* Limitations of AI */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Limitations of AI</h2>
            <p>
              While AI is a powerful tool, it has important limitations:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>May generate incorrect or outdated information:</strong> AI models are trained on data
                up to a certain point in time and may not have the most current information.
              </li>
              <li>
                <strong>May produce inaccurate or incomplete outputs:</strong> AI-generated content should always
                be verified before relying on it for important decisions.
              </li>
              <li>
                <strong>Lacks human judgment and context:</strong> AI cannot fully understand nuance, emotion,
                or complex real-world scenarios the way a human can.
              </li>
              <li>
                <strong>Not a substitute for professional advice:</strong> AI-generated insights are informational
                only and should not replace expert consultation.
              </li>
            </ul>
            <p className="mt-4">
              <strong>You are responsible for verifying the accuracy of any AI-generated content before acting on it.</strong>
            </p>
          </section>

          {/* No Medical, Legal, Financial, or Mental Health Advice */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">No Medical, Legal, Financial, or Mental Health Advice</h2>
            <p className="font-semibold text-phoenixFire">
              ⚠️ IMPORTANT: AI tools (including Kai) do NOT provide medical, legal, financial, or mental health advice.
            </p>
            <p>
              Even though our founder is a nurse and healthcare leader, <strong>nothing generated by AI on this website or
              through our tools constitutes professional advice</strong> in the following areas:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Medical or healthcare advice:</strong> AI cannot diagnose, treat, or provide health recommendations.</li>
              <li><strong>Legal advice:</strong> AI cannot provide legal counsel or interpret laws specific to your situation.</li>
              <li><strong>Financial or tax advice:</strong> AI cannot provide personalized financial planning or tax guidance.</li>
              <li><strong>Mental health counseling:</strong> AI is not a therapist and cannot provide therapeutic support.</li>
            </ul>
            <p className="mt-4">
              <strong>If you need professional advice in any of these areas, please consult with a licensed
              professional.</strong>
            </p>
          </section>

          {/* Data You Share With AI Tools */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Data You Share With AI Tools</h2>
            <p>
              When you interact with AI-powered features (such as Kai or our quote tool), please be mindful of
              the information you share:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Avoid sharing ultra-sensitive data:</strong> Do not share passwords, financial account
                details, Social Security numbers, or other highly confidential information unless absolutely necessary.
              </li>
              <li>
                <strong>Health and PHI data:</strong> If you share Protected Health Information (PHI) or health-related
                data, you accept the risk and are responsible for ensuring compliance with HIPAA and other privacy laws.
              </li>
              <li>
                <strong>Confidential business information:</strong> Be cautious when sharing proprietary or
                confidential business details. While we take reasonable security measures, no system is 100% secure.
              </li>
            </ul>
            <p className="mt-4">
              AI chat logs may be stored temporarily for quality assurance and improvement purposes. We do not
              sell or share your data with third parties for marketing.
            </p>
          </section>

          {/* Third-Party AI Providers */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Third-Party AI Providers</h2>
            <p>
              We use third-party AI services (such as OpenAI, Anthropic, and others) to power our AI tools. These
              providers have their own terms of service and privacy policies:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <a href="https://openai.com/policies/terms-of-use" target="_blank" rel="noopener noreferrer" className="text-starlight hover:underline">
                  OpenAI Terms of Use
                </a>
              </li>
              <li>
                <a href="https://www.anthropic.com/legal/consumer-terms" target="_blank" rel="noopener noreferrer" className="text-starlight hover:underline">
                  Anthropic Terms of Service
                </a>
              </li>
            </ul>
            <p className="mt-4">
              By using AI-powered features on our site, you acknowledge that your interactions may be processed
              by these third-party providers in accordance with their policies.
            </p>
          </section>

          {/* Your Responsibility */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Your Responsibility</h2>
            <p>
              By using AI tools on this website, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Verify the accuracy of all AI-generated information before relying on it</li>
              <li>Not use AI outputs for medical, legal, financial, or mental health decisions without consulting a licensed professional</li>
              <li>Take responsibility for any information you share with AI tools</li>
              <li>Understand that AI outputs may contain errors, biases, or outdated information</li>
            </ul>
          </section>

          {/* Updates to This Disclosure */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Updates to This Disclosure</h2>
            <p>
              We may update this AI Use Disclosure from time to time to reflect new AI features, tools, or practices.
              When we make changes, we will update the "Last updated" date at the top of this page.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Contact</h2>
            <p>
              If you have questions about our use of AI or this disclosure, please contact us:
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
        </div>
      </div>
    </main>
  );
}
