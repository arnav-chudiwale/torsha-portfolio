"use client";

import education from "@/data/education.json";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { dividerContours } from "@/lib/contours";
import { motion } from "framer-motion";
import { EducationJourney } from "@/components/sections/EducationJourney";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 px-gutter py-section">
      <SectionReveal>
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
              className="relative rounded-lg border border-chalk/80 bg-limestone/40 p-7 md:p-8 dark:bg-surface/60"
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <span
                className="absolute -left-10 top-8 hidden font-mono text-silt md:inline"
                aria-hidden
              >
                ~
              </span>

              <div className="grid gap-3 md:grid-cols-[1fr_auto]">
                <div>
                  <h3 className="type-card-title">{item.degree}</h3>
                  <p className="type-org mt-1">{item.institution}</p>
                  <p className="type-meta mt-1">{item.location}</p>
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
