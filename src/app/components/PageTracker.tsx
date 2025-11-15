"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function PageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).trackAchievement) {
      (window as any).trackAchievement.visitPage(pathname);
    }
  }, [pathname]);

  return null;
}
