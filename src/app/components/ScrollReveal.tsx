"use client";

import { useEffect, useRef, ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  delay?: number; // Delay in milliseconds (for stagger effect)
  threshold?: number; // Intersection threshold (0-1)
  className?: string;
};

export function ScrollReveal({
  children,
  delay = 0,
  threshold = 0.1,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add visible class after delay
            setTimeout(() => {
              element.classList.add("scroll-reveal-visible");
            }, delay);

            // Stop observing once revealed
            observer.unobserve(element);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before element enters viewport
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay, threshold]);

  return (
    <div ref={ref} className={`scroll-reveal ${className}`}>
      {children}
    </div>
  );
}

// Variant for list items with automatic stagger
type ScrollRevealListProps = {
  children: ReactNode[];
  staggerDelay?: number; // Delay between each item in ms
  threshold?: number;
  className?: string;
};

export function ScrollRevealList({
  children,
  staggerDelay = 100,
  threshold = 0.1,
  className = "",
}: ScrollRevealListProps) {
  return (
    <>
      {children.map((child, index) => (
        <ScrollReveal
          key={index}
          delay={index * staggerDelay}
          threshold={threshold}
          className={className}
        >
          {child}
        </ScrollReveal>
      ))}
    </>
  );
}
