import research from "@/data/research.json";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { FieldCard } from "@/components/ui/FieldCard";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { dividerContours } from "@/lib/contours";

export function Research() {
  return (
    <section id="research" className="scroll-mt-24 px-gutter py-section">
      <SectionReveal tier="arrival">
        <h2 className="type-section-title">Research</h2>
      </SectionReveal>

      <SectionDivider path={dividerContours.research} />

      <div className="mx-auto max-w-cards space-y-16">
        {research.map((group, gi) => (
          <SectionReveal key={group.group} tier="deposit" delay={gi * 0.05}>
            <h3 className="type-group-title mb-10">
              <span className="font-mono text-watershed-teal">{gi + 1})</span>{" "}
              {group.group}
            </h3>
            <div className="space-y-14">
              {group.projects.map((p, pi) => (
                <FieldCard
                  key={p.title}
                  project={p}
                  index={gi * 3 + pi}
                />
              ))}
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
