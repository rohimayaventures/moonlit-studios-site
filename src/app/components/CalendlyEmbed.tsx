'use client';

import { useEffect, useRef } from 'react';

interface CalendlyEmbedProps {
  /**
   * Your Calendly scheduling page URL
   * Example: "https://calendly.com/your-username/30min"
   */
  url: string;

  /**
   * Minimum height of the embed
   */
  minHeight?: number;

  /**
   * Optional prefill data
   */
  prefill?: {
    name?: string;
    email?: string;
    customAnswers?: Record<string, string>;
  };
}

export function CalendlyEmbed({
  url,
  minHeight = 700,
  prefill
}: CalendlyEmbedProps) {
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore - Calendly is loaded from external script
      if (window.Calendly && calendlyRef.current) {
        // @ts-ignore
        window.Calendly.initInlineWidget({
          url,
          parentElement: calendlyRef.current,
          prefill,
        });
      }
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [url, prefill]);

  return (
    <>
      <div
        ref={calendlyRef}
        className="calendly-inline-widget"
        style={{ minWidth: '320px', height: `${minHeight}px` }}
      />
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
    </>
  );
}
