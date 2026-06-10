"use client";

import { useState } from "react";
import { Tag } from "./Tag";

export type FieldCardData = {
  title: string;
  areaOfStudy?: string;
  institution: string;
  location: string;
  dates: string;
  summary: string;
  details: string[];
  tags: string[];
};

const cardContourPaths = [
  "M0 12 Q240 4 480 12 T960 12",
  "M0 14 Q200 6 480 10 T960 11",
  "M0 10 Q280 8 520 14 T960 10",
  "M0 13 Q160 2 440 12 T960 13",
];

export function FieldCard({
  project,
  index = 0,
}: {
  project: FieldCardData;
  index?: number;
}) {
  const [open, setOpen] = useState(false);
  const contourD = cardContourPaths[index % cardContourPaths.length];

  return (
    <article className="group relative border-t border-chalk/90 pt-8 transition-colors duration-300 hover:bg-limestone/20 dark:hover:bg-surface/30">
      <svg
        viewBox="0 0 960 24"
        className="absolute -top-px left-0 h-6 w-full opacity-70 transition-opacity duration-300 group-hover:opacity-100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d={contourD}
          fill="none"
          className="contour-path contour-animate-once"
          strokeWidth={1.2}
          style={{ strokeOpacity: 0.38 }}
        />
      </svg>

      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:gap-8">
        <div>
          <h3 className="type-card-title transition-colors group-hover:text-watershed-teal">
            {project.title}
          </h3>
          {project.areaOfStudy && (
            <p className="type-body-sm mt-2 text-left text-text-secondary">
              {project.areaOfStudy}
            </p>
          )}
        </div>
        <div className="type-meta lg:text-right">
          <div>{project.dates}</div>
          <div>{project.institution}</div>
          <div>{project.location}</div>
        </div>
      </div>

      <p className="type-body mt-5">{project.summary}</p>

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
            className="min-h-[44px] font-mono text-meta text-watershed-teal transition-colors hover:text-alluvial-warm"
          >
            {open ? "▾ Hide details" : "▸ View details"}
          </button>
          <div
            className={`grid transition-all duration-300 ease-out ${
              open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <ul className="type-body-sm mt-3 max-w-prose list-disc space-y-2.5 overflow-hidden pl-6">
              {project.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  );
}
