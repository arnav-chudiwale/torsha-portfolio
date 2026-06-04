"use client";

import { useState } from "react";
import { Tag } from "./Tag";

export type FieldCardData = {
  title: string;
  institution: string;
  location: string;
  dates: string;
  summary: string;
  details: string[];
  tags: string[];
};

export function FieldCard({ project }: { project: FieldCardData }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="group relative border-t border-chalk pt-8 transition">
      <svg
        viewBox="0 0 960 24"
        className="absolute -top-px left-0 h-6 w-full opacity-60 transition group-hover:opacity-100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0 12 Q240 4 480 12 T960 12"
          fill="none"
          className="contour-path group-hover:animate-[contour-pulse_2s_ease-in-out_infinite]"
          strokeWidth={1.2}
          style={{ strokeOpacity: 0.35 }}
        />
      </svg>

      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:gap-8">
        <h3 className="type-card-title">{project.title}</h3>
        <div className="type-meta lg:text-right">
          <div>{project.dates}</div>
          <div>{project.institution}</div>
          <div>{project.location}</div>
        </div>
      </div>

      <p className="type-body mt-5">
        {project.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>

      {project.details.length > 0 && (
        <div className="mt-4">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="font-mono text-meta text-watershed-teal hover:text-alluvial-warm"
          >
            {open ? "▾ Hide details" : "▸ View details"}
          </button>
          {open && (
            <ul className="type-body-sm mt-4 max-w-prose list-disc space-y-2.5 pl-6">
              {project.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </article>
  );
}
