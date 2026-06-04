import skills from "@/data/skills.json";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Tag } from "@/components/ui/Tag";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { dividerContours } from "@/lib/contours";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-gutter py-section">
      <SectionReveal>
        <h2 className="type-section-title">Skills</h2>
        <p className="type-section-lead mt-4">
          Grouped as terrain regions—tools and methods mapped to the landscapes
          where they are applied.
        </p>
      </SectionReveal>

      <SectionDivider path={dividerContours.skills} />

      <div className="mx-auto grid max-w-cards gap-6 sm:grid-cols-2">
        {skills.map((region) => (
          <div
            key={region.region}
            className="overflow-hidden rounded-lg border border-chalk bg-limestone/30 dark:bg-surface/40"
          >
            <div className="border-b border-chalk px-4 py-3">
              <svg viewBox="0 0 200 12" className="h-3 w-full" aria-hidden>
                <path
                  d="M0 6 Q50 2 100 6 T200 6"
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
        ))}
      </div>
    </section>
  );
}
