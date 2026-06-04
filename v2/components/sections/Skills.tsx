import skills from "@/data/skills.json";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Tag } from "@/components/ui/Tag";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { dividerContours } from "@/lib/contours";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-gutter py-section">
      <SectionReveal tier="arrival">
        <h2 className="type-section-title">Skills</h2>
        <p className="type-section-lead mt-4">
          Grouped as terrain regions—tools and methods mapped to the landscapes
          where they are applied.
        </p>
      </SectionReveal>

      <SectionDivider path={dividerContours.skills} />

      <div className="mx-auto grid max-w-cards gap-6 sm:grid-cols-2">
        {skills.map((region, i) => (
          <SectionReveal key={region.region} tier="deposit" delay={i * 0.04}>
            <div className="surface-instrument overflow-hidden">
              <div className="border-b border-chalk/80 px-4 py-3">
                <svg viewBox="0 0 200 12" className="h-3 w-full" aria-hidden>
                  <path
                    d={
                      i === 0
                        ? "M0 6 Q50 2 100 6 T200 8"
                        : "M0 5 Q40 8 120 4 T200 6"
                    }
                    fill="none"
                    className="contour-path"
                    strokeWidth={1}
                    style={{ strokeOpacity: 0.35 }}
                  />
                </svg>
                <h3 className="type-label mt-3 text-watershed-teal">
                  {region.region}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 p-4">
                {region.skills.map((s) => (
                  <Tag key={s} label={s} />
                ))}
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
