"use client";

import { Sidebar } from "@/components/navigation/Sidebar";
import { MobileNav } from "@/components/navigation/MobileNav";
import { ThemeToggleBar } from "@/components/navigation/ThemeToggleBar";
import { ContourBackground } from "@/components/ContourBackground";
import { useActiveSection } from "@/hooks/useActiveSection";

export function PortfolioShell({ children }: { children: React.ReactNode }) {
  const active = useActiveSection();

  return (
    <>
      <ContourBackground />
      <ThemeToggleBar />
      <Sidebar active={active} />
      <MobileNav />
      <main className="relative z-10 lg:ml-60">{children}</main>
    </>
  );
}
