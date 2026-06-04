"use client";

import { useState } from "react";
import site from "@/data/site.json";

const sections = [
  { id: "research", label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "recognition", label: "Recognition" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="glass-bar fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b py-4 pl-gutter pr-[8.5rem] lg:hidden">
        <a href="#top" className="font-display text-brand text-slate-depth">
          {site.initials}
        </a>
        <div className="flex items-center">
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded border border-chalk"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <span className="block h-0.5 w-5 bg-slate-depth" />
            <span className="block h-0.5 w-5 bg-slate-depth" />
            <span className="block h-0.5 w-5 bg-slate-depth" />
          </button>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-[60] bg-slate-depth/40 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      <nav
        className={`glass-sidebar fixed left-0 top-0 z-[70] flex h-full w-[min(85vw,320px)] flex-col justify-between px-8 py-10 transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <button
            type="button"
            className="mb-8 font-mono text-body-sm text-graphite"
            onClick={() => setOpen(false)}
          >
            Close ×
          </button>
          <div className="flex flex-col gap-5">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="type-nav text-graphite hover:text-watershed-teal"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2.5 type-meta text-silt">
          <a href={`mailto:${site.contact.emailAcademic}`}>Email</a>
          <a href={site.contact.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={site.contact.researchgate} target="_blank" rel="noopener noreferrer">
            ResearchGate
          </a>
        </div>
      </nav>
    </>
  );
}
