"use client";

import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function ThemeToggleBar() {
  return (
    <div className="fixed right-gutter top-5 z-[45] lg:top-6">
      <ThemeToggle />
    </div>
  );
}
