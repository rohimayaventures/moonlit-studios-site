"use client";

import { useState, useEffect } from "react";
import { createLogger } from "@/lib/logger";
import { AnimatedWaterDrop } from "./AnimatedWaterDrop";
import { AnimatedFlame } from "./AnimatedFlame";
import { AnimatedEarth } from "./AnimatedEarth";
import { AnimatedWind } from "./AnimatedWind";
import { AnimatedDiamond } from "./AnimatedDiamond";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

const THEMES = ["default", "phoenix", "twilight", "earth", "storm", "blossom"];

export function KonamiCode() {
  const [keys, setKeys] = useState<string[]>([]);
  const [konamiActivated, setKonamiActivated] = useState(false);
  const [avatarStateActive, setAvatarStateActive] = useState(false);
  const [showSecretMenu, setShowSecretMenu] = useState(false);
  const [linkStartActive, setLinkStartActive] = useState(false);
  const [owleryActive, setOwleryActive] = useState(false);
  const [totoroActive, setTotoroActive] = useState(false);
  const [chaosActive, setChaosActive] = useState(false);
  const [gandalfActive, setGandalfActive] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newKeys = [...keys, e.code].slice(-10);
      setKeys(newKeys);

      // Check if Konami Code is entered
      if (
        !konamiActivated &&
        newKeys.length === 10 &&
        newKeys.every((key, index) => key === KONAMI_CODE[index])
      ) {
        setKonamiActivated(true);
        setShowSecretMenu(true);

        // Track achievement
        if (typeof window !== "undefined" && (window as any).trackAchievement) {
          (window as any).trackAchievement.triggerKonamiCode();
        }

        // Play success sound (optional)
        playKonamiSound();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [keys, konamiActivated]);

  const playKonamiSound = () => {
    // Optional: Add sound effect here
    console.log("🎮 KONAMI CODE ACTIVATED!");
  };

  // EASTER EGG 1: Avatar State (ATLA)
  const activateAvatarState = () => {
    setAvatarStateActive(true);
    setShowSecretMenu(false);

    // Track achievement
    if (typeof window !== "undefined" && (window as any).trackAchievement) {
      (window as any).trackAchievement.triggerAvatarState();
      (window as any).trackAchievement.addEasterEgg("avatar-state");
    }

    // Apply full-site Avatar State effects
    document.body.classList.add("avatar-state-active");

    // Auto-deactivate after 30 seconds
    setTimeout(() => {
      setAvatarStateActive(false);
      document.body.classList.remove("avatar-state-active");
    }, 30000);
  };

  // EASTER EGG 2: Link Start (SAO)
  const activateLinkStart = () => {
    setLinkStartActive(true);
    setShowSecretMenu(false);

    if (typeof window !== "undefined" && (window as any).trackAchievement) {
      (window as any).trackAchievement.addEasterEgg("link-start");
    }

    // Auto-deactivate after 3 seconds
    setTimeout(() => {
      setLinkStartActive(false);
    }, 3000);
  };

  // EASTER EGG 3: Owlery (Harry Potter)
  const activateOwlery = () => {
    setOwleryActive(true);
    setShowSecretMenu(false);

    if (typeof window !== "undefined" && (window as any).trackAchievement) {
      (window as any).trackAchievement.addEasterEgg("owlery");
    }

    // Hedwig flies across, then show message
    setTimeout(() => {
      // Message stays for 5 seconds
      setTimeout(() => {
        setOwleryActive(false);
      }, 5000);
    }, 4000);
  };

  // EASTER EGG 4: Totoro Rain (Studio Ghibli)
  const activateTotoroRain = () => {
    setTotoroActive(true);
    setShowSecretMenu(false);

    if (typeof window !== "undefined" && (window as any).trackAchievement) {
      (window as any).trackAchievement.addEasterEgg("totoro-rain");
    }

    // Auto-deactivate after 15 seconds
    setTimeout(() => {
      setTotoroActive(false);
    }, 15000);
  };

  // EASTER EGG 5: Chaos Mode
  const activateChaosMode = () => {
    setChaosActive(true);
    setShowSecretMenu(false);

    if (typeof window !== "undefined" && (window as any).trackAchievement) {
      (window as any).trackAchievement.addEasterEgg("chaos-mode");
    }

    document.body.classList.add("chaos-mode");

    // Theme cycling madness
    let themeIndex = 0;
    const chaosInterval = setInterval(() => {
      const theme = THEMES[themeIndex % THEMES.length];
      document.documentElement.setAttribute("data-theme", theme);
      themeIndex++;
    }, 500);

    // Auto-deactivate after 15 seconds
    setTimeout(() => {
      clearInterval(chaosInterval);
      setChaosActive(false);
      document.body.classList.remove("chaos-mode");
      document.documentElement.setAttribute("data-theme", "default");
    }, 15000);
  };

  // EASTER EGG 6: You Shall Not Pass (LOTR)
  const activateGandalf = () => {
    setGandalfActive(true);
    setShowSecretMenu(false);

    if (typeof window !== "undefined" && (window as any).trackAchievement) {
      (window as any).trackAchievement.addEasterEgg("you-shall-not-pass");
    }

    // Auto-deactivate after 4 seconds
    setTimeout(() => {
      setGandalfActive(false);
    }, 4000);
  };

  // Dev Console (keep this one)
  const triggerDevConsole = () => {
    setShowSecretMenu(false);

    if (typeof window !== "undefined" && (window as any).trackAchievement) {
      (window as any).trackAchievement.addEasterEgg("dev-console");
    }

    console.log(`
═══════════════════════════════════════════════
    🌙 MOONLIT STUDIOS SECRET DEV CONSOLE 🌙
═══════════════════════════════════════════════

You found the secret! Here's a message from the dev:

"Sometimes the best way to solve your own problems
is to help someone else." — Uncle Iroh 🍵

Built with:
- Next.js 16 (App Router + Turbopack)
- React 19
- TypeScript
- Tailwind CSS
- Claude AI API
- Supabase
- A whole lot of tea ☕

Stack Evolution: MERN → JAMstack → Serverless → AI-First
Journey: Nurse → Author → Full-Stack Dev → The Nurse Who Codes

Easter Eggs Found: ${Object.keys(typeof window !== "undefined" && (window as any).achievements || {}).length}

Achievement Unlocked: Dev Console Explorer 🎮
═══════════════════════════════════════════════
    `);
  };

  // Generate random leaves for Totoro Rain
  const generateLeaves = () => {
    const leaves = [];
    for (let i = 0; i < 30; i++) {
      const delay = Math.random() * 10;
      const duration = 8 + Math.random() * 4;
      const left = Math.random() * 100;
      const size = 20 + Math.random() * 30;

      leaves.push(
        <div
          key={i}
          className="totoro-leaf"
          style={{
            left: `${left}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
            fontSize: `${size}px`,
          }}
        >
          🍃
        </div>
      );
    }
    return leaves;
  };

  return (
    <>
      {/* Secret Menu - Appears after Konami Code */}
      {showSecretMenu && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-midnight/95 backdrop-blur-lg animate-fade-in">
          <div className="relative max-w-3xl mx-4">
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-mermaidTeal via-lunarGold to-phoenixFire rounded-2xl blur-xl opacity-75 animate-pulse"></div>

            <div className="relative bg-gradient-to-br from-deepOcean via-midnight to-nightNavy border-2 border-mermaidTeal/60 rounded-2xl p-8 shadow-2xl">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-mermaidTeal via-lunarGold to-phoenixFire mb-2">
                  🎮 MULTIVERSE EASTER EGG MENU 🌙
                </h2>
                <p className="text-sm text-starlight/70">
                  Konami Code Master Achievement Unlocked!
                </p>
              </div>

              {/* Secret Actions Grid - 6 Fandom Easter Eggs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* Avatar State - ATLA */}
                <button
                  onClick={activateAvatarState}
                  className="group relative overflow-hidden bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 border-2 border-cyan-300/60 rounded-xl p-6 text-left transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <div className="relative">
                    <div className="mb-2">
                      <AnimatedDiamond className="w-10 h-10" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-1">
                      Avatar State
                    </h3>
                    <p className="text-xs text-white/80">
                      Master all 4 elements (ATLA)
                    </p>
                  </div>
                </button>

                {/* Link Start - SAO */}
                <button
                  onClick={activateLinkStart}
                  className="group relative overflow-hidden bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-700 border-2 border-teal-300/60 rounded-xl p-6 text-left transition-all hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <div className="relative">
                    <div className="mb-2 text-3xl">⚔️</div>
                    <h3 className="text-base font-bold text-white mb-1">
                      Link Start
                    </h3>
                    <p className="text-xs text-white/80">
                      NerveGear login (SAO)
                    </p>
                  </div>
                </button>

                {/* Owlery - Harry Potter */}
                <button
                  onClick={activateOwlery}
                  className="group relative overflow-hidden bg-gradient-to-br from-amber-500 via-yellow-600 to-orange-700 border-2 border-amber-300/60 rounded-xl p-6 text-left transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <div className="relative">
                    <div className="mb-2 text-3xl">🦉</div>
                    <h3 className="text-base font-bold text-white mb-1">
                      Owlery
                    </h3>
                    <p className="text-xs text-white/80">
                      Hedwig delivery (HP)
                    </p>
                  </div>
                </button>

                {/* Totoro Rain - Studio Ghibli */}
                <button
                  onClick={activateTotoroRain}
                  className="group relative overflow-hidden bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 border-2 border-green-300/60 rounded-xl p-6 text-left transition-all hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <div className="relative">
                    <div className="mb-2 text-3xl">🍃</div>
                    <h3 className="text-base font-bold text-white mb-1">
                      Totoro Rain
                    </h3>
                    <p className="text-xs text-white/80">
                      Falling leaves (Ghibli)
                    </p>
                  </div>
                </button>

                {/* Chaos Mode */}
                <button
                  onClick={activateChaosMode}
                  className="group relative overflow-hidden bg-gradient-to-br from-red-500 via-purple-600 to-pink-700 border-2 border-red-300/60 rounded-xl p-6 text-left transition-all hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <div className="relative">
                    <div className="mb-2 text-3xl">🌀</div>
                    <h3 className="text-base font-bold text-white mb-1">
                      Chaos Mode
                    </h3>
                    <p className="text-xs text-white/80">
                      Theme cycling madness
                    </p>
                  </div>
                </button>

                {/* You Shall Not Pass - LOTR */}
                <button
                  onClick={activateGandalf}
                  className="group relative overflow-hidden bg-gradient-to-br from-gray-600 via-slate-700 to-stone-800 border-2 border-slate-300/60 rounded-xl p-6 text-left transition-all hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <div className="relative">
                    <div className="mb-2 text-3xl">🧙</div>
                    <h3 className="text-base font-bold text-white mb-1">
                      You Shall Not Pass
                    </h3>
                    <p className="text-xs text-white/80">
                      Gandalf blocks (LOTR)
                    </p>
                  </div>
                </button>
              </div>

              {/* Bonus: Dev Console */}
              <button
                onClick={triggerDevConsole}
                className="w-full mb-4 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-700 border-2 border-green-400/60 rounded-lg text-white hover:shadow-lg hover:shadow-green-500/50 transition-all text-sm font-semibold"
              >
                💻 Dev Console (Open Browser DevTools)
              </button>

              {/* Close Button */}
              <button
                onClick={() => setShowSecretMenu(false)}
                className="w-full px-6 py-3 bg-gradient-to-r from-midnight to-deepOcean border border-mermaidTeal/40 rounded-lg text-starlight hover:border-mermaidTeal transition-all"
              >
                Close Menu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Avatar State Active Overlay */}
      {avatarStateActive && (
        <div className="fixed inset-0 z-[9998] pointer-events-none">
          {/* Glowing eyes effect */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cyan-500/30 to-transparent animate-pulse"></div>

          {/* Four element symbols floating */}
          <div className="absolute top-20 left-20 animate-floatSlow">
            <AnimatedWaterDrop className="w-20 h-20" />
          </div>
          <div className="absolute top-20 right-20 animate-floatSlow" style={{ animationDelay: "0.5s" }}>
            <AnimatedFlame className="w-20 h-20" />
          </div>
          <div className="absolute bottom-20 left-20 animate-floatSlow" style={{ animationDelay: "1s" }}>
            <AnimatedEarth className="w-20 h-20" />
          </div>
          <div className="absolute bottom-20 right-20 animate-floatSlow" style={{ animationDelay: "1.5s" }}>
            <AnimatedWind className="w-20 h-20" />
          </div>

          {/* Status indicator */}
          <div className="absolute top-6 right-6 bg-gradient-to-r from-cyan-500/90 to-blue-600/90 border-2 border-cyan-300 rounded-lg px-6 py-3 shadow-2xl shadow-cyan-500/50 animate-pulse">
            <div className="flex items-center gap-3">
              <div>
                <AnimatedDiamond className="w-8 h-8" />
              </div>
              <div>
                <p className="text-xs text-white/80 uppercase tracking-wider font-bold">Avatar State</p>
                <p className="text-sm text-white font-bold">ACTIVE</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Link Start Overlay (SAO) */}
      {linkStartActive && (
        <div className="link-start-overlay">
          <div className="link-start-scanner"></div>
          <div className="link-start-hex sao-hex-pattern"></div>
          <div className="link-start-text">LINK START</div>
          <p className="text-mermaidTeal text-xl z-10">🎮 NerveGear Connected</p>
          <p className="text-starlight/60 text-sm z-10">Welcome to Moonlit Studios</p>
        </div>
      )}

      {/* Owlery (Harry Potter) */}
      {owleryActive && (
        <>
          {/* Hedwig flying */}
          <div className="hedwig-container">
            <div className="text-6xl owl-float">🦉</div>
          </div>
          {/* Message scroll (appears after Hedwig passes) */}
          {owleryActive && (
            <div className="scroll-message">
              <div className="text-center">
                <div className="text-4xl mb-4">📜</div>
                <h3 className="text-xl font-bold text-lunarGold mb-2">
                  Owl Post Delivered!
                </h3>
                <p className="text-starlight mb-4">
                  "Happiness can be found even in the darkest of times, if one only remembers to turn on the light."
                </p>
                <p className="text-sm text-starlight/60 italic">
                  — Albus Dumbledore
                </p>
              </div>
            </div>
          )}
        </>
      )}

      {/* Totoro Rain (Studio Ghibli) */}
      {totoroActive && <div className="fixed inset-0 z-[9998] pointer-events-none">{generateLeaves()}</div>}

      {/* Chaos Mode Indicator */}
      {chaosActive && (
        <div className="fixed top-6 left-6 z-[9999] bg-gradient-to-r from-red-500/90 to-purple-600/90 border-2 border-red-300 rounded-lg px-6 py-3 shadow-2xl shadow-red-500/50 pointer-events-none">
          <p className="text-white font-bold text-lg">🌀 CHAOS MODE ACTIVE</p>
          <p className="text-white/80 text-xs">Theme cycling enabled</p>
        </div>
      )}

      {/* You Shall Not Pass (LOTR) */}
      {gandalfActive && (
        <div className="gandalf-block">
          <div className="gandalf-staff">🪄</div>
          <h2 className="gandalf-text">YOU SHALL NOT PASS!</h2>
          <p className="text-starlight text-center max-w-md">
            "A wizard is never late, nor is he early. He arrives precisely when he means to."
          </p>
          <p className="text-starlight/60 text-sm italic">— Gandalf the Grey</p>
        </div>
      )}
    </>
  );
}
