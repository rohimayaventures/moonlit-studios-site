"use client";

import { useEffect, useState } from "react";

const phrases = [
  "The Nurse Who Codes",
  "Full-Stack Developer & AI Partner",
  "Healthcare Ops Meets Modern Tech",
];

export function HeroTypewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < currentPhrase.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, displayText.length + 1));
      }, 90);
    } else if (!isDeleting && displayText.length === currentPhrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, displayText.length - 1));
      }, 50);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((phraseIndex + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <p className="mt-2 min-h-[1.5rem] text-sm font-medium text-starlight md:text-base">
      {displayText}
      <span className="ml-1 inline-block h-5 w-[2px] bg-starlight align-middle animate-pulse" />
    </p>
  );
}
