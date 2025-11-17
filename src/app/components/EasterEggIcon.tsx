"use client";

import { useEasterEgg } from "./EasterEggContext";

type EasterEggType = "avatar-state" | "link-start" | "owlery" | "totoro-rain" | "chaos-mode" | "you-shall-not-pass";

interface EasterEggIconProps {
  type: EasterEggType;
  icon: string;
  hint?: string;
  className?: string;
}

export function EasterEggIcon({ type, icon, hint, className = "" }: EasterEggIconProps) {
  const { triggerEasterEgg } = useEasterEgg();

  const handleClick = () => {
    triggerEasterEgg(type);
  };

  return (
    <button
      onClick={handleClick}
      className={`group relative inline-block text-2xl transition-all duration-300 hover:scale-125 hover:rotate-12 cursor-pointer ${className}`}
      title={hint || "Click to activate easter egg"}
      aria-label={hint || "Easter egg trigger"}
    >
      <span className="relative z-10 filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all">
        {icon}
      </span>
      {hint && (
        <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 bg-midnight/90 text-starlight text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          {hint}
        </span>
      )}
    </button>
  );
}

// Pre-made icon components for each fandom
export function AvatarStateIcon({ className }: { className?: string }) {
  return (
    <EasterEggIcon
      type="avatar-state"
      icon="💎"
      hint="Activate Avatar State (ATLA)"
      className={className}
    />
  );
}

export function LinkStartIcon({ className }: { className?: string }) {
  return (
    <EasterEggIcon
      type="link-start"
      icon="⚔️"
      hint="Link Start! (SAO)"
      className={className}
    />
  );
}

export function OwleryIcon({ className }: { className?: string }) {
  return (
    <EasterEggIcon
      type="owlery"
      icon="🦉"
      hint="Send an owl (Harry Potter)"
      className={className}
    />
  );
}

export function TotoroRainIcon({ className }: { className?: string }) {
  return (
    <EasterEggIcon
      type="totoro-rain"
      icon="🍃"
      hint="Totoro's Leaves (Ghibli)"
      className={className}
    />
  );
}

export function ChaosIcon({ className }: { className?: string }) {
  return (
    <EasterEggIcon
      type="chaos-mode"
      icon="🌀"
      hint="Embrace Chaos!"
      className={className}
    />
  );
}

export function GandalfIcon({ className }: { className?: string }) {
  return (
    <EasterEggIcon
      type="you-shall-not-pass"
      icon="🧙"
      hint="You shall not pass! (LOTR)"
      className={className}
    />
  );
}
