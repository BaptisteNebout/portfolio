"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        buttonVariants({ variant: "outlineIcon", size: "icon" }),
        "h-6 w-6 p-0 rounded-[7px]"
      )}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={12} className="text-foreground" />
      ) : (
        <Moon size={12} className="text-foreground" />
      )}
    </button>
  );
}
export const ThemesToggle = ThemeToggle;