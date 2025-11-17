"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type EasterEggType = "avatar-state" | "link-start" | "owlery" | "totoro-rain" | "chaos-mode" | "you-shall-not-pass";

interface EasterEggContextType {
  triggerEasterEgg: (type: EasterEggType) => void;
  activeEasterEgg: EasterEggType | null;
}

const EasterEggContext = createContext<EasterEggContextType | undefined>(undefined);

export function EasterEggProvider({ children }: { children: ReactNode }) {
  const [activeEasterEgg, setActiveEasterEgg] = useState<EasterEggType | null>(null);

  const triggerEasterEgg = (type: EasterEggType) => {
    setActiveEasterEgg(type);

    // Track in achievement system
    if (typeof window !== "undefined" && (window as any).trackAchievement) {
      (window as any).trackAchievement.addEasterEgg(type);
    }

    // Auto-clear after animation duration
    const duration = type === "avatar-state" ? 30000 : type === "totoro-rain" || type === "chaos-mode" ? 15000 : type === "you-shall-not-pass" ? 4000 : type === "owlery" ? 9000 : 3000;

    setTimeout(() => {
      setActiveEasterEgg(null);
    }, duration);
  };

  return (
    <EasterEggContext.Provider value={{ triggerEasterEgg, activeEasterEgg }}>
      {children}
    </EasterEggContext.Provider>
  );
}

export function useEasterEgg() {
  const context = useContext(EasterEggContext);
  if (!context) {
    throw new Error("useEasterEgg must be used within EasterEggProvider");
  }
  return context;
}
