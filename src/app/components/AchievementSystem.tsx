"use client";

import { useState, useEffect } from "react";
import { getAchievementIcon } from "./AchievementIcons";

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
  themeSwitches: number;
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
  {
    id: "theme-switcher",
    title: "Style Shifter",
    description: "Switch themes 5 times",
    category: "secret",
    tier: "silver",
    condition: (data) => data.themeSwitches >= 5,
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
  const [achievementData, setAchievementData] = useState<AchievementData>({
    pagesVisited: [],
    kaiMessagesCount: 0,
    personalitySwitches: 0,
    demosTriedCount: 0,
    contactFormSubmitted: false,
    konamiCodeEntered: false,
    avatarStateActivated: false,
    themeSwitches: 0,
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
      incrementThemeSwitches: () => {
        setAchievementData((prev) => {
          const newData = {
            ...prev,
            themeSwitches: prev.themeSwitches + 1,
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
      {/* SAO-Style Achievement Notification */}
      {recentlyUnlocked && (
        <div className="fixed top-6 right-6 z-[100] animate-slide-in-right">
          <div className="bg-gradient-to-r from-midnight via-deepOcean to-midnight border-2 border-lunarGold/60 rounded-lg shadow-2xl shadow-lunarGold/50 overflow-hidden max-w-sm">
            {/* Achievement Header */}
            <div className="bg-gradient-to-r from-lunarGold/20 to-phoenixFire/20 px-4 py-2 border-b border-lunarGold/40">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-lunarGold animate-pulse"></div>
                <p className="text-xs text-lunarGold uppercase tracking-widest font-bold">
                  Achievement Unlocked!
                </p>
                <div className="w-2 h-2 rounded-full bg-lunarGold animate-pulse"></div>
              </div>
            </div>

            {/* Achievement Content */}
            <div className="p-4 flex items-center gap-4">
              <div className={`bg-gradient-to-br ${getTierColor(recentlyUnlocked.tier)} bg-clip-text text-transparent animate-bounce-subtle`}>
                {getAchievementIcon(recentlyUnlocked.id, "w-12 h-12")}
              </div>
              <div className="flex-1">
                <h3 className="text-pearlWhite font-bold text-sm mb-1">
                  {recentlyUnlocked.title}
                </h3>
                <p className="text-moonlightSilver text-xs">
                  {recentlyUnlocked.description}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <div className={`px-2 py-0.5 rounded-full bg-gradient-to-r ${getTierColor(recentlyUnlocked.tier)} text-white text-xs font-bold uppercase tracking-wide`}>
                    {recentlyUnlocked.tier}
                  </div>
                </div>
              </div>
            </div>

            {/* Progress bar animation */}
            <div className="h-1 bg-midnight/50">
              <div className="h-full bg-gradient-to-r from-lunarGold via-phoenixFire to-lunarGold animate-progress-bar"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
