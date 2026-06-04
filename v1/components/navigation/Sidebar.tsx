"use client";

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

export function Sidebar({ active }: { active: string }) {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-60 flex-col justify-between border-r border-chalk bg-field-paper/90 px-7 py-10 backdrop-blur-sm lg:flex dark:bg-field-paper/95">
      <div>
        <a
          href="#top"
          className="font-display text-brand text-slate-depth transition hover:text-watershed-teal"
        >
          {site.initials}
        </a>
        <nav className="mt-14 flex flex-col gap-5">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`type-nav transition ${
                active === s.id
                  ? "text-watershed-teal"
                  : "text-graphite hover:text-watershed-teal"
              }`}
            >
              <span className="relative inline-block">
                {s.label}
                {active === s.id && (
                  <svg
                    viewBox="0 0 80 8"
                    className="absolute -bottom-1 left-0 w-full"
                    aria-hidden
                  >
                    <path
                      d="M0 4 Q20 0 40 4 T80 4"
                      fill="none"
                      className="contour-path"
                      strokeWidth={1.5}
                      style={{ strokeOpacity: 0.5 }}
                    />
                  </svg>
                )}
              </span>
            </a>
          ))}
        </nav>
      </div>
      <div className="flex flex-col gap-2.5 type-meta text-silt">
          <a
            href={`mailto:${site.contact.emailAcademic}`}
            className="hover:text-watershed-teal"
          >
            Email
          </a>
          <a
            href={site.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-watershed-teal"
          >
            LinkedIn
          </a>
          <a
            href={site.contact.researchgate}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-watershed-teal"
          >
            ResearchGate
          </a>
      </div>
    </aside>
  );
}
