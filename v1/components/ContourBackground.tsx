"use client";

import { useEffect, useState } from "react";
import { ambientContours } from "@/lib/contours";
import { ContourSvg } from "@/components/ui/ContourSvg";

export function ContourBackground() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.02);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-80"
      style={{ transform: `translateY(${offset}px)` }}
      aria-hidden
    >
      <ContourSvg
        viewBox={ambientContours.viewBox}
        paths={ambientContours.paths}
        opacity={0.05}
        strokeWidth={0.8}
      />
    </div>
  );
}
