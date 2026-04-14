"use client";

import { useState, useEffect } from "react";
import { getAchievementIcon } from "./AchievementIcons";

declare global {
  interface Window {
    moonlitTrophyRoom?: {
      open: () => void;
    };
  }
}

export type Achievement = {
  id: string;
  title: string;
  description: string;
  category: "explorer" | "social" | "magic" | "secret" | "master";
  tier: "bronze" | "silver" | "gold" | "platinum" | "legendary";
  condition: (data: AchievementData) => boolean;
  hidden?: boolean; // Hidden until unlocked
};

export type AchievementData = {
  pagesVisited: string[];
  kaiMessagesCount: number;
  personalitySwitches: number;
  demosTriedCount: number;
  contactFormSubmitted: boolean;
  konamiCodeEntered: boolean;
  avatarStateActivated: boolean;
  easterEggsFound: string[];
  timeOnSite: number; // in seconds
};

export const ACHIEVEMENTS: Achievement[] = [
  // ==================== EXPLORER TIER ====================
  {
    id: "first-steps",
    title: "First Steps",
    description: "Visit your first page at Moonlit Studios",
    category: "explorer",
    tier: "bronze",
    condition: (data) => data.pagesVisited.length >= 1,
  },
  {
    id: "curious-wanderer",
    title: "Curious Wanderer",
    description: "Explore 3 different pages",
    category: "explorer",
    tier: "bronze",
    condition: (data) => data.pagesVisited.length >= 3,
  },
  {
    id: "completionist",
    title: "The Completionist",
    description: "Visit every major page (7+ pages)",
    category: "explorer",
    tier: "gold",
    condition: (data) => data.pagesVisited.length >= 7,
  },

  // ==================== SOCIAL TIER ====================
  {
    id: "chat-initiate",
    title: "Chat Initiate",
    description: "Send your first message to Kai",
    category: "social",
    tier: "bronze",
    condition: (data) => data.kaiMessagesCount >= 1,
  },
  {
    id: "deep-conversation",
    title: "Deep Conversation",
    description: "Exchange 10+ messages with Kai",
    category: "social",
    tier: "silver",
    condition: (data) => data.kaiMessagesCount >= 10,
  },
  {
    id: "shapeshifter",
    title: "The Shapeshifter",
    description: "Try all 6 of Kai's personality modes",
    category: "social",
    tier: "gold",
    condition: (data) => data.personalitySwitches >= 6,
  },

  // ==================== MAGIC TIER ====================
  {
    id: "spell-caster",
    title: "Apprentice Spell Caster",
    description: "Cast your first spell in the AI Lab",
    category: "magic",
    tier: "bronze",
    condition: (data) => data.demosTriedCount >= 1,
  },
  {
    id: "hogwarts-graduate",
    title: "Hogwarts Graduate",
    description: "Cast all 4 house spells in the AI Lab",
    category: "magic",
    tier: "silver",
    condition: (data) => data.demosTriedCount >= 4,
  },
  {
    id: "owl-dispatched",
    title: "Owl Dispatched",
    description: "Send a message via the contact form",
    category: "magic",
    tier: "silver",
    condition: (data) => data.contactFormSubmitted,
  },

  // ==================== SECRET TIER ====================
  {
    id: "konami-master",
    title: "Konami Code Master",
    description: "Discovered the legendary Konami Code",
    category: "secret",
    tier: "platinum",
    condition: (data) => data.konamiCodeEntered,
    hidden: true,
  },
  {
    id: "avatar-state",
    title: "Avatar State",
    description: "Achieved the ultimate power",
    category: "secret",
    tier: "legendary",
    condition: (data) => data.avatarStateActivated,
    hidden: true,
  },

  // ==================== MASTER TIER ====================
  {
    id: "dedicated-visitor",
    title: "Dedicated Visitor",
    description: "Spend 10+ minutes exploring",
    category: "master",
    tier: "silver",
    condition: (data) => data.timeOnSite >= 600, // 10 minutes
  },
  {
    id: "easter-egg-hunter",
    title: "Easter Egg Hunter",
    description: "Find 3 hidden easter eggs",
    category: "master",
    tier: "gold",
    condition: (data) => data.easterEggsFound.length >= 3,
  },
  {
    id: "moonlit-legend",
    title: "Moonlit Legend",
    description: "Unlock all non-hidden achievements",
    category: "master",
    tier: "legendary",
    condition: (data) => {
      // Check if all non-hidden achievements would be unlocked
      const nonHiddenAchievements = ACHIEVEMENTS.filter(a => !a.hidden && a.id !== "moonlit-legend");
      return nonHiddenAchievements.every(a => a.condition(data));
    },
  },
];

export function AchievementSystem() {
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
  const [recentlyUnlocked, setRecentlyUnlocked] = useState<Achievement | null>(null);
  const [showTrophyRoom, setShowTrophyRoom] = useState(false);
  const [achievementData, setAchievementData] = useState<AchievementData>({
    pagesVisited: [],
    kaiMessagesCount: 0,
    personalitySwitches: 0,
    demosTriedCount: 0,
    contactFormSubmitted: false,
    konamiCodeEntered: false,
    avatarStateActivated: false,
    easterEggsFound: [],
    timeOnSite: 0,
  });

  // Load achievements from localStorage on mount
  useEffect(() => {
    const savedUnlocked = localStorage.getItem("moonlit-achievements");
    const savedData = localStorage.getItem("moonlit-achievement-data");

    if (savedUnlocked) {
      setUnlockedAchievements(JSON.parse(savedUnlocked));
    }

    if (savedData) {
      setAchievementData(JSON.parse(savedData));
    }

    // Track time on site
    const startTime = Date.now();
    const interval = setInterval(() => {
      setAchievementData((prev) => {
        const newData = {
          ...prev,
          timeOnSite: prev.timeOnSite + 1,
        };
        localStorage.setItem("moonlit-achievement-data", JSON.stringify(newData));
        return newData;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Check for new achievements whenever data changes
  useEffect(() => {
    ACHIEVEMENTS.forEach((achievement) => {
      if (
        !unlockedAchievements.includes(achievement.id) &&
        achievement.condition(achievementData)
      ) {
        unlockAchievement(achievement);
      }
    });
  }, [achievementData, unlockedAchievements]);

  const unlockAchievement = (achievement: Achievement) => {
    const newUnlocked = [...unlockedAchievements, achievement.id];
    setUnlockedAchievements(newUnlocked);
    localStorage.setItem("moonlit-achievements", JSON.stringify(newUnlocked));

    // Show notification
    setRecentlyUnlocked(achievement);
    setTimeout(() => setRecentlyUnlocked(null), 5000);

    // Dispatch custom event for other components to listen to
    window.dispatchEvent(
      new CustomEvent("achievementUnlocked", { detail: achievement })
    );
  };

  // Expose global functions for tracking
  useEffect(() => {
    (window as any).trackAchievement = {
      visitPage: (path: string) => {
        setAchievementData((prev) => {
          if (!prev.pagesVisited.includes(path)) {
            const newData = {
              ...prev,
              pagesVisited: [...prev.pagesVisited, path],
            };
            localStorage.setItem("moonlit-achievement-data", JSON.stringify(newData));
            return newData;
          }
          return prev;
        });
      },
      incrementKaiMessages: () => {
        setAchievementData((prev) => {
          const newData = {
            ...prev,
            kaiMessagesCount: prev.kaiMessagesCount + 1,
          };
          localStorage.setItem("moonlit-achievement-data", JSON.stringify(newData));
          return newData;
        });
      },
      incrementPersonalitySwitches: () => {
        setAchievementData((prev) => {
          const newData = {
            ...prev,
            personalitySwitches: prev.personalitySwitches + 1,
          };
          localStorage.setItem("moonlit-achievement-data", JSON.stringify(newData));
          return newData;
        });
      },
      incrementDemosTried: () => {
        setAchievementData((prev) => {
          const newData = {
            ...prev,
            demosTriedCount: prev.demosTriedCount + 1,
          };
          localStorage.setItem("moonlit-achievement-data", JSON.stringify(newData));
          return newData;
        });
      },
      markContactFormSubmitted: () => {
        setAchievementData((prev) => {
          const newData = {
            ...prev,
            contactFormSubmitted: true,
          };
          localStorage.setItem("moonlit-achievement-data", JSON.stringify(newData));
          return newData;
        });
      },
      triggerKonamiCode: () => {
        setAchievementData((prev) => {
          const newData = {
            ...prev,
            konamiCodeEntered: true,
          };
          localStorage.setItem("moonlit-achievement-data", JSON.stringify(newData));
          return newData;
        });
      },
      triggerAvatarState: () => {
        setAchievementData((prev) => {
          const newData = {
            ...prev,
            avatarStateActivated: true,
          };
          localStorage.setItem("moonlit-achievement-data", JSON.stringify(newData));
          return newData;
        });
      },
      addEasterEgg: (eggId: string) => {
        setAchievementData((prev) => {
          if (!prev.easterEggsFound.includes(eggId)) {
            const newData = {
              ...prev,
              easterEggsFound: [...prev.easterEggsFound, eggId],
            };
            localStorage.setItem("moonlit-achievement-data", JSON.stringify(newData));
            return newData;
          }
          return prev;
        });
      },
    };
  }, []);

  useEffect(() => {
    window.moonlitTrophyRoom = {
      open: () => setShowTrophyRoom(true),
    };

    return () => {
      delete window.moonlitTrophyRoom;
    };
  }, []);

  const getTierColor = (tier: Achievement["tier"]) => {
    switch (tier) {
      case "bronze":
        return "from-amber-700 to-amber-900";
      case "silver":
        return "from-gray-300 to-gray-500";
      case "gold":
        return "from-yellow-400 to-yellow-600";
      case "platinum":
        return "from-cyan-300 to-blue-500";
      case "legendary":
        return "from-purple-500 to-pink-600";
    }
  };

  return (
    <>
      {showTrophyRoom && (
        <div className="fixed inset-0 z-[10001] bg-midnight/95 backdrop-blur-lg">
          <div className="absolute inset-x-0 bottom-0 max-h-[90vh] rounded-t-3xl border-t border-lunarGold/30 bg-gradient-to-b from-deepOcean via-midnight to-midnight p-6 shadow-2xl shadow-black/60">
            <button
              type="button"
              aria-label="Close Trophy Room"
              onClick={() => setShowTrophyRoom(false)}
              className="absolute right-6 top-6 text-moonlightSilver/80 hover:text-lunarGold transition-colors text-2xl"
            >
              ×
            </button>

            <div className="mx-auto max-w-6xl h-full overflow-y-auto pr-1">
              <h2 className="text-3xl font-bold text-lunarGold">🏆 Trophy Room</h2>
              <p className="mt-2 text-sm text-moonlightSilver/80">
                Secrets discovered by explorers of Moonlit Studios
              </p>

              <div className="mt-5 rounded-xl border border-lunarGold/20 bg-midnight/50 p-4">
                <div className="flex items-center justify-between text-sm text-moonlightSilver">
                  <span>Progress</span>
                  <span className="font-semibold text-lunarGold">
                    {unlockedAchievements.length}/{ACHIEVEMENTS.length} achievements unlocked
                  </span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-deepOcean/70 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-mermaidTeal via-lunarGold to-phoenixFire transition-all"
                    style={{ width: `${(unlockedAchievements.length / ACHIEVEMENTS.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {ACHIEVEMENTS.map((achievement) => {
                  const unlocked = unlockedAchievements.includes(achievement.id);
                  const isHiddenLocked = achievement.hidden && !unlocked;

                  return (
                    <div
                      key={achievement.id}
                      className={`rounded-xl border p-4 transition-all ${
                        unlocked
                          ? "border-lunarGold/40 bg-midnight/60"
                          : "border-moonlightSilver/20 bg-midnight/30 grayscale"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={unlocked ? `bg-gradient-to-br ${getTierColor(achievement.tier)} bg-clip-text text-transparent` : "text-moonlightSilver/40"}>
                          {unlocked ? (
                            getAchievementIcon(achievement.id, "w-10 h-10")
                          ) : (
                            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 11V8a5 5 0 0110 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                              <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
                            </svg>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`font-semibold ${unlocked ? "text-pearlWhite" : "text-moonlightSilver/60"}`}>
                            {isHiddenLocked ? "???" : achievement.title}
                          </p>
                          <p className={`text-sm mt-1 ${unlocked ? "text-moonlightSilver/80" : "text-moonlightSilver/50"}`}>
                            {isHiddenLocked ? "???" : achievement.description}
                          </p>
                          <div className="mt-3">
                            <span
                              className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                                unlocked
                                  ? `bg-gradient-to-r ${getTierColor(achievement.tier)} text-white`
                                  : "bg-moonlightSilver/20 text-moonlightSilver/60"
                              }`}
                            >
                              {achievement.tier}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
