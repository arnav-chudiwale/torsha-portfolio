import research from "@/data/research.json";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { FieldCard } from "@/components/ui/FieldCard";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { dividerContours } from "@/lib/contours";

export function Research() {
  return (
    <section id="research" className="scroll-mt-24 px-gutter py-section">
      <SectionReveal>
        <h2 className="type-section-title">Research</h2>
      </SectionReveal>

      <SectionDivider path={dividerContours.research} />

      <div className="mx-auto max-w-cards space-y-16">
        {research.map((group, index) => (
          <SectionReveal key={group.group}>
            <h3 className="type-group-title mb-10">
              <span className="font-mono text-watershed-teal">
                {index + 1})
              </span>{" "}
              {group.group}
            </h3>
            <div className="space-y-14">
              {group.projects.map((p) => (
                <FieldCard key={p.title} project={p} />
              ))}
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
