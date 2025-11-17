"use client";

import { useState, FormEvent } from "react";

type EmailCaptureProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string, name?: string) => void;
  context?: {
    businessType?: string;
    budgetRange?: string;
    specificNeeds?: string[];
  };
};

export function KaiEmailCapture({ isOpen, onClose, onSubmit, context }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    await onSubmit(email, name || undefined);
    setIsSubmitting(false);

    // Reset form
    setEmail("");
    setName("");
  };

  // Dynamic messaging based on context
  const getHeadline = () => {
    if (context?.businessType) {
      return `Perfect! Let's help your ${context.businessType} succeed`;
    }
    return "Stay Connected - Let's Keep the Conversation Going";
  };

  const getSubtext = () => {
    if (context?.budgetRange && context?.specificNeeds) {
      return `I'll send you tailored info on ${context.specificNeeds[0]} within your ${context.budgetRange} budget.`;
    }
    if (context?.specificNeeds) {
      return `I'll send you resources and examples for ${context.specificNeeds.join(", ")}.`;
    }
    return "Get custom quotes, portfolio examples, and priority booking for your project.";
  };

  return (
    <div className="fixed inset-0 bg-midnight/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-deepOcean via-midnight to-deepOcean border-2 border-mermaidTeal/30 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-slideUp">
        {/* Header */}
        <div className="bg-gradient-to-r from-mermaidTeal/20 to-lunarGold/20 p-6 border-b border-mermaidTeal/20">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-starlight mb-1 flex items-center gap-2">
                <span className="text-2xl">📬</span>
                {getHeadline()}
              </h3>
              <p className="text-sm text-starlight/70">
                {getSubtext()}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-starlight/60 hover:text-starlight transition-colors ml-4"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Name (Optional) */}
          <div>
            <label htmlFor="kai-name" className="block text-sm font-medium text-starlight mb-2">
              Your Name <span className="text-starlight/50">(optional)</span>
            </label>
            <input
              type="text"
              id="kai-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Sarah Chen"
              className="w-full px-4 py-3 bg-deepOcean/50 border border-mermaidTeal/30 rounded-lg text-starlight placeholder-starlight/40 focus:outline-none focus:ring-2 focus:ring-mermaidTeal/50 transition-all"
            />
          </div>

          {/* Email (Required) */}
          <div>
            <label htmlFor="kai-email" className="block text-sm font-medium text-starlight mb-2">
              Email Address <span className="text-phoenixFire">*</span>
            </label>
            <input
              type="email"
              id="kai-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="sarah@example.com"
              className="w-full px-4 py-3 bg-deepOcean/50 border border-mermaidTeal/30 rounded-lg text-starlight placeholder-starlight/40 focus:outline-none focus:ring-2 focus:ring-mermaidTeal/50 transition-all"
            />
          </div>

          {/* Benefits List */}
          <div className="bg-mermaidTeal/10 border border-mermaidTeal/20 rounded-lg p-4">
            <p className="text-xs text-starlight/70 mb-2 font-semibold">You'll receive:</p>
            <ul className="space-y-1 text-xs text-starlight/80">
              <li className="flex items-center gap-2">
                <span className="text-mermaidTeal">✓</span>
                Personalized project quote within 24 hours
              </li>
              <li className="flex items-center gap-2">
                <span className="text-mermaidTeal">✓</span>
                Portfolio examples relevant to your industry
              </li>
              <li className="flex items-center gap-2">
                <span className="text-mermaidTeal">✓</span>
                Priority access to Moonlit Studios' calendar
              </li>
              <li className="flex items-center gap-2">
                <span className="text-mermaidTeal">✓</span>
                Monthly tips on business growth & tech
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-deepOcean/50 text-starlight/70 rounded-lg hover:bg-deepOcean/70 transition-all font-medium"
            >
              Maybe Later
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !email.trim()}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-mermaidTeal to-lunarGold text-midnight font-bold rounded-lg hover:shadow-lg hover:shadow-mermaidTeal/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Get My Quote"}
            </button>
          </div>

          {/* Privacy Note */}
          <p className="text-xs text-starlight/50 text-center">
            🔒 Your email is safe with us. Unsubscribe anytime. No spam, just value.
          </p>
        </form>
      </div>
    </div>
  );
}
