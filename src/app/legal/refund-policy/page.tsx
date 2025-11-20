export const metadata = {
  title: "Refund & Cancellation Policy | Moonlit Studios",
  description: "Refund and cancellation terms for Moonlit Studios services.",
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-midnight via-deepOcean to-midnight text-moonlightSilver px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-pearlWhite">
            Refund & Cancellation Policy
          </h1>
          <p className="text-sm text-moonlightSilver/80">
            Last updated: {new Date().getFullYear()}
          </p>
        </header>

        <div className="space-y-8 text-sm md:text-base leading-relaxed">
          {/* General Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">General Overview</h2>
            <p>
              This policy covers refunds and cancellations for Moonlit Studios services, including strategy sessions,
              project deposits, retainers, and custom development work. Specific refund terms may also be outlined
              in your Statement of Work (SOW) or service agreement.
            </p>
          </section>

          {/* Consultations / Strategy Calls */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Consultations / Strategy Calls</h2>
            <p>
              <strong>Non-refundable once delivered.</strong> Once a consultation or strategy session has been
              completed, the fee is non-refundable due to the time and expertise provided.
            </p>
            <p>
              <strong>Rescheduling:</strong> If you need to reschedule, please provide at least 24-48 hours' notice.
              Last-minute cancellations (less than 24 hours before the scheduled time) may result in forfeiture of
              the session fee.
            </p>
          </section>

          {/* Project Deposits */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Project Deposits</h2>
            <p>
              <strong>Non-refundable once work has begun.</strong> Project deposits secure your spot in our schedule
              and cover the initial planning and setup work. Once we begin work on your project (kickoff calls,
              research, design, or development), the deposit is non-refundable.
            </p>
            <p>
              If you cancel before work begins, we may issue a partial refund at our discretion, minus any
              administrative fees.
            </p>
          </section>

          {/* In-Progress Projects */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">In-Progress Projects</h2>
            <p>
              If you choose to cancel a project after work has begun, you will be responsible for payment for all
              work completed up to the cancellation date. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Design work, mockups, and assets created</li>
              <li>Development work, code, and integrations completed</li>
              <li>Research, strategy, and planning hours invested</li>
              <li>Any third-party costs incurred on your behalf</li>
            </ul>
            <p className="mt-4">
              You will receive all deliverables completed up to the cancellation date (provided payment is received).
            </p>
            <p>
              Unused fees for work not yet performed will be refunded if applicable. Specific cancellation terms may
              be outlined in your SOW.
            </p>
          </section>

          {/* Digital Deliverables */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Digital Deliverables</h2>
            <p>
              <strong>Non-refundable once delivered.</strong> Digital products such as website code, designs, AI tools,
              branding assets, or written content are non-refundable once delivered due to their intangible nature.
            </p>
            <p>
              If you are dissatisfied with the deliverables, we encourage you to communicate your concerns so we can
              work together to address them within the agreed revision policy.
            </p>
          </section>

          {/* Moonlit Studios Cancellations */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Moonlit Studios Cancellations</h2>
            <p>
              If Moonlit Studios needs to cancel a project due to unforeseen circumstances beyond our control (such as
              health emergencies, technical failures, or force majeure events), we will refund any unused fees for work
              not yet performed.
            </p>
            <p>
              Deliverables completed prior to cancellation will be provided to you, and you will only be charged for
              work delivered.
            </p>
          </section>

          {/* How to Request a Cancellation */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">How to Request a Cancellation</h2>
            <p>
              To cancel a service or project, please send a written request via email to{" "}
              <a href="mailto:hello@moonlstudios.com" className="text-starlight hover:underline">
                hello@moonlstudios.com
              </a>.
            </p>
            <p>
              We will respond within 1-2 business days to confirm receipt and outline the next steps, including any
              applicable refunds or final invoices.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lunarGold">Contact</h2>
            <p>
              If you have questions about this Refund & Cancellation Policy, please contact us:
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
