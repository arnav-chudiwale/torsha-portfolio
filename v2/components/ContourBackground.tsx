"use client";

import { useEffect, useState } from "react";
import { ambientContours } from "@/lib/contours";
import { ContourSvg } from "@/components/ui/ContourSvg";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const sectionOpacity: Record<string, number> = {
  research: 0.07,
  publications: 0.055,
  education: 0.06,
  experience: 0.05,
  recognition: 0.045,
  skills: 0.04,
  contact: 0.03,
  top: 0.065,
};

export function ContourBackground({ activeSection }: { activeSection: string }) {
  const [offset, setOffset] = useState(0);
  const reduced = useReducedMotion();
  const opacity = sectionOpacity[activeSection] ?? 0.05;

  useEffect(() => {
    if (reduced) return;
    const onScroll = () => setOffset(window.scrollY * 0.018);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  const navRailOpacityDark = Math.min(opacity * 2.75, 0.2);
  const navRailOpacityLight = Math.min(opacity * 4.8, 0.34);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity duration-700"
      style={{
        transform: reduced ? undefined : `translateY(${offset}px)`,
      }}
      aria-hidden
    >
      <ContourSvg
        viewBox={ambientContours.viewBox}
        paths={ambientContours.paths}
        opacity={opacity}
        strokeWidth={0.85}
      />
      {/* Stronger contours under the sidebar so glass frost reveals terrain */}
      <div className="absolute inset-y-0 left-0 w-60 overflow-hidden dark:hidden">
        <ContourSvg
          viewBox={ambientContours.viewBox}
          paths={ambientContours.paths}
          opacity={navRailOpacityLight}
          strokeWidth={1.15}
        />
      </div>
      <div className="absolute inset-y-0 left-0 hidden w-60 overflow-hidden dark:block">
        <ContourSvg
          viewBox={ambientContours.viewBox}
          paths={ambientContours.paths}
          opacity={navRailOpacityDark}
          strokeWidth={1.05}
        />
      </div>
    </div>
  );
}
