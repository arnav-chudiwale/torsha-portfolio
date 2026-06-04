"use client";

import { Sidebar } from "@/components/navigation/Sidebar";
import { MobileNav } from "@/components/navigation/MobileNav";
import { ThemeToggleBar } from "@/components/navigation/ThemeToggleBar";
import { ContourBackground } from "@/components/ContourBackground";
import { useActiveSection } from "@/hooks/useActiveSection";

/** Chrome only (nav, contours, theme). Main content lives in `app/page.tsx` beside this. */
export function PortfolioShell() {
  const active = useActiveSection();

  return (
    <>
      <ContourBackground activeSection={active} />
      <ThemeToggleBar />
      <Sidebar active={active} />
      <MobileNav />
    </>
  );
}
