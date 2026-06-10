"use client";

import educationData from "@/data/education.json";

type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  dates: string;
  note: string;
  directoryLabel?: string;
  directoryUrl?: string;
  directoryLinkText?: string;
};

const education = educationData as EducationItem[];
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { dividerContours } from "@/lib/contours";
import { motion } from "framer-motion";
import { EducationJourney } from "@/components/sections/EducationJourney";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Education() {
  const reduced = useReducedMotion();

  return (
    <section id="education" className="scroll-mt-24 px-gutter py-section">
      <SectionReveal tier="arrival">
        <h2 className="type-section-title">Education</h2>
        <EducationJourney />
      </SectionReveal>

      <SectionDivider path={dividerContours.education} />

      <div className="relative mx-auto max-w-cards">
        <svg
          className="absolute left-0 top-0 hidden h-full w-16 md:block"
          viewBox="0 0 64 800"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M32 0 Q8 120 32 200 T28 400 Q52 520 32 640 T32 800"
            fill="none"
            className="contour-path"
            strokeWidth={1.2}
            style={{ strokeOpacity: 0.25 }}
          />
        </svg>

        <ol className="space-y-10 md:ml-20">
          {education.map((item, i) => (
            <motion.li
              key={item.degree}
              className="surface-card relative p-7 md:p-8"
              initial={{ opacity: 0, x: reduced ? 0 : -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              <motion.span
                className="absolute -left-10 top-8 hidden font-mono text-silt md:inline"
                aria-hidden
                initial={false}
                whileInView={
                  reduced ? undefined : { scale: [1, 1.35, 1], opacity: [0.6, 1, 1] }
                }
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                ~
              </motion.span>

              <div className="grid gap-3 md:grid-cols-[1fr_auto]">
                <div>
                  <h3 className="type-card-title">{item.degree}</h3>
                  <p className="type-org mt-1">{item.institution}</p>
                  <p className="type-meta mt-1">{item.location}</p>
                  {item.directoryUrl && (
                    <div className="mt-3">
                      {item.directoryLabel && (
                        <p className="type-meta">{item.directoryLabel}</p>
                      )}
                      <a
                        href={item.directoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="type-meta mt-1 inline-block text-watershed-teal transition-colors hover:text-alluvial-warm"
                      >
                        {item.directoryLinkText ?? item.directoryUrl} →
                      </a>
                    </div>
                  )}
                  <p className="type-body-sm mt-4">{item.note}</p>
                </div>
                <p className="type-meta-accent md:text-right">{item.dates}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
