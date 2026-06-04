import recognition from "@/data/recognition.json";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { dividerContours } from "@/lib/contours";

export function Recognition() {
  return (
    <section id="recognition" className="scroll-mt-24 px-gutter py-section">
      <SectionReveal>
        <h2 className="type-section-title">Recognition</h2>
      </SectionReveal>

      <SectionDivider path={dividerContours.recognition} />

      <div className="mx-auto flex max-w-cards gap-4 overflow-x-auto pb-4 md:hidden">
        {recognition.map((a) => (
          <article
            key={a.name}
            className="min-w-[220px] shrink-0 rounded-lg border border-chalk bg-limestone/50 p-4"
          >
            <AwardContent {...a} />
          </article>
        ))}
      </div>

      <div className="mx-auto hidden max-w-cards columns-1 gap-4 sm:columns-2 lg:columns-3 md:block">
        {recognition.map((a) => (
          <article
            key={a.name}
            className={`mb-4 break-inside-avoid rounded-lg border border-chalk bg-limestone/50 p-4 dark:bg-surface/50 ${
              a.featured ? "p-5 shadow-sm" : ""
            }`}
          >
            <AwardContent {...a} featured={a.featured} />
          </article>
        ))}
      </div>
    </section>
  );
}

function AwardContent({
  name,
  org,
  year,
  featured,
}: {
  name: string;
  org: string;
  year: string;
  featured?: boolean;
}) {
  return (
    <>
      <h3
        className={`font-body font-medium text-slate-depth ${
          featured ? "text-body-lg" : "text-body-sm"
        }`}
      >
        {name}
      </h3>
      <p className="type-meta-accent mt-2">{year}</p>
      <p className="type-meta mt-1.5">{org}</p>
    </>
  );
}
