import recognition from "@/data/recognition.json";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { dividerContours } from "@/lib/contours";

export function Recognition() {
  return (
    <section id="recognition" className="scroll-mt-24 px-gutter py-section">
      <SectionReveal tier="arrival">
        <h2 className="type-section-title">Recognition</h2>
      </SectionReveal>

      <SectionDivider path={dividerContours.recognition} />

      <div className="relative mx-auto max-w-cards md:hidden">
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-field-paper to-transparent dark:from-field-paper" />
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-field-paper to-transparent dark:from-field-paper" />
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {recognition.map((a) => (
            <article
              key={a.name}
              className={`surface-card min-w-[220px] shrink-0 snap-center p-4 ${
                a.featured ? "ring-1 ring-prairie-gold/30" : ""
              }`}
            >
              <AwardContent {...a} featured={a.featured} />
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto hidden max-w-cards columns-1 gap-4 sm:columns-2 lg:columns-3 md:block">
        {recognition.map((a) => (
          <article
            key={a.name}
            className={`surface-card mb-4 break-inside-avoid p-4 md:p-5 ${
              a.featured
                ? "ring-1 ring-prairie-gold/35 shadow-[var(--inset-paper),0_8px_28px_rgba(212,168,67,0.12)]"
                : ""
            }`}
          >
            {a.featured && (
              <div
                className="mb-3 h-0.5 w-12 rounded-full bg-prairie-gold/70"
                aria-hidden
              />
            )}
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
