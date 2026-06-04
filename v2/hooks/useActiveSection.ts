"use client";

import { useEffect, useState } from "react";

const sectionIds = [
  "top",
  "research",
  "publications",
  "education",
  "experience",
  "recognition",
  "skills",
  "contact",
];

export function useActiveSection() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-42% 0px -48% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}
