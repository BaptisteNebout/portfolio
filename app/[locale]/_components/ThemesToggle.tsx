"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        buttonVariants({ variant: "outlineIcon", size: "icon" }),
        "h-6 w-6 p-0 rounded-[7px]"
      )}
      aria-label="Toggle theme"
    >
      {mounted ? (
        isDark ? (
          <Sun size={12} className="text-foreground" />
        ) : (
          <Moon size={12} className="text-foreground" />
        )
      ) : (
        // Optionnel : afficher rien ou une icône neutre pendant le SSR
        <span className="sr-only">Loading theme</span>
      )}
    </button>
  );
}
export const ThemesToggle = ThemeToggle;
// ...existing code...