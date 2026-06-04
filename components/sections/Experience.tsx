import experience from "@/data/experience.json";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { dividerContours } from "@/lib/contours";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-gutter py-section">
      <SectionReveal>
        <h2 className="type-section-title">Experience & Leadership</h2>
      </SectionReveal>

      <SectionDivider path={dividerContours.experience} />

      <div className="mx-auto grid max-w-cards gap-4 sm:grid-cols-2">
        {experience.map((role) => {
          const border =
            role.type === "outreach"
              ? "border-l-riparian-green"
              : "border-l-watershed-teal";

          return (
            <article
              key={`${role.role}-${role.dates}`}
              className={`rounded-r-lg border border-chalk border-l-4 bg-limestone/30 p-6 md:p-7 ${border} dark:bg-surface/50`}
            >
              <h3 className="font-body text-body font-medium text-slate-depth">
                {role.role}
              </h3>
              <p className="type-org mt-1">{role.organization}</p>
              <p className="type-meta mt-3">
                {role.location} · {role.dates}
              </p>
              <p className="type-body-sm mt-4">
                {role.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
