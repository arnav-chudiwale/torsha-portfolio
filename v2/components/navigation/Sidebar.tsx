"use client";

import site from "@/data/site.json";
import { motion } from "framer-motion";

const sections = [
  { id: "research", label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "recognition", label: "Recognition" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const navContourPaths: Record<string, string> = {
  research: "M0 5 Q22 1 42 4 T80 5",
  publications: "M0 4 Q18 6 38 3 T80 4",
  education: "M0 3 Q30 5 55 2 T80 4",
  experience: "M0 5 Q15 2 45 5 T80 3",
  recognition: "M0 4 Q28 0 50 5 T80 4",
  skills: "M0 3 Q20 6 48 2 T80 5",
  contact: "M0 4 Q35 3 60 4 T80 4",
};

export function Sidebar({ active }: { active: string }) {
  const contourD =
    navContourPaths[active] ?? "M0 4 Q20 0 40 4 T80 4";

  return (
    <aside className="glass-sidebar fixed left-0 top-0 z-40 hidden h-screen w-60 flex-col justify-between overflow-hidden px-7 py-10 lg:flex">
      <div>
        <a
          href="#top"
          className="font-display text-brand text-slate-depth transition-colors duration-300 hover:text-watershed-teal"
        >
          {site.initials}
        </a>
        <nav className="mt-14 flex flex-col gap-5" aria-label="Primary">
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`type-nav transition-colors duration-300 ${
                  isActive
                    ? "text-watershed-teal"
                    : "text-graphite hover:text-watershed-teal"
                }`}
              >
                <span className="relative inline-block pb-2">
                  {s.label}
                  {isActive && (
                    <svg
                      viewBox="0 0 80 8"
                      className="absolute -bottom-0.5 left-0 w-full overflow-visible"
                      aria-hidden
                    >
                      <motion.path
                        d={contourD}
                        fill="none"
                        className="contour-path"
                        strokeWidth={1.5}
                        initial={false}
                        animate={{ d: contourD }}
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{ strokeOpacity: 0.55 }}
                      />
                    </svg>
                  )}
                </span>
              </a>
            );
          })}
        </nav>
      </div>
      <div className="flex flex-col gap-2.5 type-meta text-silt">
        <a
          href={`mailto:${site.contact.emailAcademic}`}
          className="link-contour w-fit"
        >
          Email
        </a>
        <a
          href={site.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-watershed-teal"
        >
          LinkedIn
        </a>
        <a
          href={site.contact.researchgate}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-watershed-teal"
        >
          ResearchGate
        </a>
      </div>
    </aside>
  );
}
