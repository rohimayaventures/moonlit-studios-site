"use client";

import { useState, useEffect } from "react";
import { Palette } from "lucide-react";

export type ThemeMode = "moonlit" | "phoenix" | "twilight" | "earth" | "storm" | "blossom";

export function ThemeSwitcher() {
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>("moonlit");

  const themes = {
    moonlit: {
      name: "Moonlit Waters",
      primary: "#4A9B9B",
      secondary: "#FFD700",
      background: "#0A1128",
      description: "Water-bending teal & navy (Default)",
      gradient: "from-mermaidTeal to-deepOcean",
    },
    phoenix: {
      name: "Phoenix Fire",
      primary: "#FF8C42",
      secondary: "#DC143C",
      background: "#1A0F0A",
      description: "Warm oranges, golds, reds",
      gradient: "from-orange-500 to-red-600",
    },
    twilight: {
      name: "Mystic Twilight",
      primary: "#9B8AA8",
      secondary: "#D4C5E2",
      background: "#0F0A15",
      description: "Purple wisdom & magic",
      gradient: "from-purple-500 to-pink-600",
    },
    earth: {
      name: "Earth Kingdom",
      primary: "#6B8E23",
      secondary: "#8B7355",
      background: "#0F130A",
      description: "Greens & browns (Nature)",
      gradient: "from-green-700 to-amber-900",
    },
    storm: {
      name: "Storm Chaser",
      primary: "#4169E1",
      secondary: "#C9D3D8",
      background: "#0A0F1A",
      description: "Electric blues & silvers",
      gradient: "from-blue-500 to-cyan-400",
    },
    blossom: {
      name: "Cherry Blossom",
      primary: "#FFB4A7",
      secondary: "#E8D5F2",
      background: "#15100F",
      description: "Soft pinks & creams (Zen)",
      gradient: "from-pink-400 to-purple-300",
    },
  };

  // Load theme from localStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedTheme = localStorage.getItem("moonlit-theme") as ThemeMode;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      // Ensure default theme is set on first load
      document.documentElement.setAttribute("data-theme", "moonlit");
    }
  }, []);

  const applyTheme = (theme: ThemeMode) => {
    setCurrentTheme(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("moonlit-theme", theme);
      document.documentElement.setAttribute("data-theme", theme);

      // Track theme switch for achievements
      if ((window as any).trackAchievement) {
        (window as any).trackAchievement.incrementThemeSwitches();
      }
    }

    // Close menu after selection
    setShowThemeMenu(false);
  };

  return (
    <>
      {/* Floating Theme Orb Button (Bottom-left, opposite of Kai) */}
      <button
        onClick={() => setShowThemeMenu(!showThemeMenu)}
        className="fixed bottom-6 left-6 z-50 group"
        aria-label="Change theme"
      >
        <div className="relative">
          {/* Outer glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-mermaidTeal/30 to-lunarGold/20 blur-xl animate-pulse"></div>

          {/* Theme orb */}
          <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-deepOcean to-midnight border-2 border-mermaidTeal/60 shadow-2xl shadow-mermaidTeal/50 transition-all group-hover:scale-110 group-hover:shadow-mermaidTeal/80 flex items-center justify-center">
            <Palette className="w-6 h-6 md:w-7 md:h-7 text-mermaidTeal" />
          </div>

          {/* Pulsing ring */}
          <div className="absolute inset-0 rounded-full border-2 border-mermaidTeal/30 animate-ping" style={{ animationDuration: '3s' }}></div>
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full left-0 mb-2 px-3 py-1 bg-midnight/90 text-starlight text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Change Theme
        </div>
      </button>

      {/* Theme Palette Menu */}
      {showThemeMenu && (
        <div className="fixed bottom-24 left-6 z-50 animate-fade-in-up">
          <div className="relative">
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-mermaidTeal via-lunarGold to-phoenixFire rounded-2xl blur-lg opacity-50"></div>

            <div className="relative bg-gradient-to-br from-deepOcean/98 to-midnight/98 backdrop-blur-xl border-2 border-mermaidTeal/40 rounded-2xl p-4 shadow-2xl min-w-[280px] max-w-sm">
              {/* Header */}
              <div className="mb-4 pb-3 border-b border-mermaidTeal/30">
                <h3 className="text-sm font-bold text-pearlWhite uppercase tracking-wider">
                  Choose Your Aesthetic
                </h3>
                <p className="text-xs text-starlight/60 mt-1">
                  Transform the entire site
                </p>
              </div>

              {/* Theme Grid */}
              <div className="grid grid-cols-2 gap-3">
                {(Object.entries(themes) as [ThemeMode, typeof themes.moonlit][]).map(([key, theme]) => (
                  <button
                    key={key}
                    onClick={() => applyTheme(key)}
                    className={`group relative overflow-hidden rounded-xl p-4 text-left transition-all ${
                      currentTheme === key
                        ? 'ring-2 ring-lunarGold ring-offset-2 ring-offset-midnight scale-105 shadow-lg'
                        : 'hover:scale-105 hover:shadow-lg'
                    }`}
                  >
                    {/* Theme gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}></div>

                    {/* Content */}
                    <div className="relative">
                      <p className="text-xs font-bold text-white mb-1">{theme.name}</p>
                      <p className="text-[10px] text-white/80 leading-tight">{theme.description}</p>

                      {/* Active indicator */}
                      {currentTheme === key && (
                        <div className="absolute top-0 right-0">
                          <svg className="w-4 h-4 text-lunarGold" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Close button */}
              <button
                onClick={() => setShowThemeMenu(false)}
                className="mt-4 w-full px-4 py-2 bg-midnight/60 hover:bg-mermaidTeal/20 border border-mermaidTeal/40 rounded-lg text-starlight text-xs font-semibold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
