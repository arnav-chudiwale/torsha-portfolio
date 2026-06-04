"use client";

import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <span className="inline-block h-9 w-9 rounded-full border border-chalk bg-limestone/50" />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="glass-bar group flex items-center gap-2 rounded-full border px-3.5 py-2 font-mono text-meta-sm text-graphite transition hover:border-watershed-teal/40 hover:text-watershed-teal"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <span className="text-base leading-none" aria-hidden>
        {theme === "light" ? "◐" : "◑"}
      </span>
      <span className="uppercase tracking-widest">
        {theme === "light" ? "Night" : "Day"}
      </span>
    </button>
  );
}
