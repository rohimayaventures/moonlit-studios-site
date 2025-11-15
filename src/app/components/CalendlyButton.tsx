'use client';

import { useEffect } from 'react';

interface CalendlyButtonProps {
  /**
   * Your Calendly scheduling page URL
   * Example: "https://calendly.com/your-username/30min"
   */
  url: string;

  /**
   * Button text
   */
  text?: string;

  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'outline';

  /**
   * Optional prefill data
   */
  prefill?: {
    name?: string;
    email?: string;
    customAnswers?: Record<string, string>;
  };
}

export function CalendlyButton({
  url,
  text = 'Schedule a Call',
  variant = 'primary',
  prefill
}: CalendlyButtonProps) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleClick = () => {
    // @ts-ignore - Calendly is loaded from external script
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url,
        prefill,
      });
    }
  };

  const buttonStyles = {
    primary: 'inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-mermaidTeal/90 to-tealBright/80 px-8 py-4 text-base font-bold text-midnight transition-all hover:from-mermaidTeal hover:to-tealBright hover:shadow-lg hover:shadow-mermaidTeal/40 hover:-translate-y-0.5',
    secondary: 'inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-lunarGold/90 to-phoenixFire/80 px-8 py-4 text-base font-bold text-midnight transition-all hover:from-lunarGold hover:to-phoenixFire hover:shadow-lg hover:shadow-lunarGold/40 hover:-translate-y-0.5',
    outline: 'inline-flex items-center justify-center gap-2 rounded-full border-2 border-mermaidTeal/70 px-8 py-4 text-base font-semibold text-mermaidTeal transition-all hover:bg-mermaidTeal hover:text-midnight hover:border-mermaidTeal hover:shadow-lg hover:shadow-mermaidTeal/40',
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={buttonStyles[variant]}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {text}
      </button>

      {/* Calendly badge widget */}
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
    </>
  );
}
