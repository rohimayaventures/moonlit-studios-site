"use client";

import { useState, useEffect } from "react";
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

export function KonamiCode() {
  const [keys, setKeys] = useState<string[]>([]);
  const [konamiActivated, setKonamiActivated] = useState(false);
  const [avatarStateActive, setAvatarStateActive] = useState(false);
  const [showSecretMenu, setShowSecretMenu] = useState(false);

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

  const triggerSecretAction = (actionId: string) => {
    // Track easter egg
    if (typeof window !== "undefined" && (window as any).trackAchievement) {
      (window as any).trackAchievement.addEasterEgg(actionId);
    }

    switch (actionId) {
      case "chaos-mode":
        // Activate maximum chaos
        alert("🌀 CHAOS MODE ACTIVATED! Expect the unexpected...");
        break;
      case "dev-console":
        // Show dev easter egg
        console.log(`
🌙 ═══════════════════════════════════════════ 🌙
    MOONLIT STUDIOS SECRET DEV CONSOLE
🌙 ═══════════════════════════════════════════ 🌙

You found the secret! Here's a message from the dev:

"Sometimes the best way to solve your own problems
is to help someone else." — Uncle Iroh

Built with:
- Next.js 16 (App Router + Turbopack)
- React 19
- TypeScript
- Tailwind CSS
- Claude AI API
- A whole lot of tea ☕

Stack: MERN → JAMstack → Serverless → AI-First
Journey: Nurse → Author → Full-Stack Dev

🎮 Achievement Unlocked: Dev Console Explorer
🌙 ═══════════════════════════════════════════ 🌙
        `);
        break;
      case "matrix-mode":
        // Trigger matrix rain effect
        document.body.classList.toggle("matrix-mode");
        setTimeout(() => {
          document.body.classList.remove("matrix-mode");
        }, 10000);
        break;
    }

    setShowSecretMenu(false);
  };

  return (
    <>
      {/* Secret Menu - Appears after Konami Code */}
      {showSecretMenu && !avatarStateActive && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-midnight/95 backdrop-blur-lg animate-fade-in">
          <div className="relative max-w-2xl mx-4">
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-mermaidTeal via-lunarGold to-phoenixFire rounded-2xl blur-xl opacity-75 animate-pulse"></div>

            <div className="relative bg-gradient-to-br from-deepOcean via-midnight to-nightNavy border-2 border-mermaidTeal/60 rounded-2xl p-8 shadow-2xl">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-mermaidTeal via-lunarGold to-phoenixFire mb-2">
                  SECRET MENU UNLOCKED
                </h2>
                <p className="text-sm text-starlight/70">
                  Konami Code Master Achievement Earned!
                </p>
              </div>

              {/* Secret Actions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Avatar State - The Ultimate Secret */}
                <button
                  onClick={activateAvatarState}
                  className="group relative overflow-hidden bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 border-2 border-cyan-300/60 rounded-xl p-6 text-left transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <div className="relative">
                    <div className="mb-2">
                      <AnimatedDiamond className="w-12 h-12" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      Avatar State
                    </h3>
                    <p className="text-xs text-white/80">
                      Master all four elements for 30 seconds
                    </p>
                  </div>
                </button>

                {/* Chaos Mode */}
                <button
                  onClick={() => triggerSecretAction("chaos-mode")}
                  className="group relative overflow-hidden bg-gradient-to-br from-red-500 via-purple-600 to-pink-700 border-2 border-red-300/60 rounded-xl p-6 text-left transition-all hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <div className="relative">
                    <div className="text-4xl mb-2">🌀</div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      Chaos Mode
                    </h3>
                    <p className="text-xs text-white/80">
                      Embrace the unpredictable
                    </p>
                  </div>
                </button>

                {/* Dev Console */}
                <button
                  onClick={() => triggerSecretAction("dev-console")}
                  className="group relative overflow-hidden bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 border-2 border-green-300/60 rounded-xl p-6 text-left transition-all hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <div className="relative">
                    <div className="text-4xl mb-2">🖥️</div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      Dev Console
                    </h3>
                    <p className="text-xs text-white/80">
                      View secret dev message
                    </p>
                  </div>
                </button>

                {/* Matrix Mode */}
                <button
                  onClick={() => triggerSecretAction("matrix-mode")}
                  className="group relative overflow-hidden bg-gradient-to-br from-gray-700 via-gray-800 to-black border-2 border-green-400/60 rounded-xl p-6 text-left transition-all hover:scale-105 hover:shadow-2xl hover:shadow-green-400/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <div className="relative">
                    <div className="text-4xl mb-2">🟢</div>
                    <h3 className="text-lg font-bold text-green-400 mb-1">
                      Matrix Mode
                    </h3>
                    <p className="text-xs text-green-300/80">
                      Follow the white rabbit
                    </p>
                  </div>
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setShowSecretMenu(false)}
                className="w-full px-6 py-3 bg-gradient-to-r from-midnight to-deepOcean border border-mermaidTeal/40 rounded-lg text-starlight hover:border-mermaidTeal transition-all"
              >
                Close Secret Menu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Avatar State Active Overlay */}
      {avatarStateActive && (
        <div className="fixed inset-0 z-[150] pointer-events-none">
          {/* Glowing eyes effect */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cyan-500/30 to-transparent animate-pulse"></div>

          {/* Energy aura */}
          <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent animate-pulse"></div>

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
    </>
  );
}
