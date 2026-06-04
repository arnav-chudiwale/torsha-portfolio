import site from "@/data/site.json";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { dividerContours } from "@/lib/contours";

export function Contact() {
  const { contact } = site;

  return (
    <section id="contact" className="scroll-mt-24 px-gutter pb-section pt-section">
      <SectionReveal tier="arrival">
        <h2 className="type-section-title">Contact</h2>
      </SectionReveal>

      <SectionDivider path={dividerContours.contact} />

      <SectionReveal tier="deposit">
        <div className="surface-card mx-auto max-w-prose px-10 py-14 text-center">
          <p className="font-display text-contact text-slate-depth">
            Let&apos;s connect.
          </p>
          <p className="mt-8">
            <a
              href={`mailto:${contact.emailAcademic}`}
              className="link-contour font-mono text-body"
            >
              {contact.emailAcademic}
            </a>
          </p>
          <p className="mt-3 font-mono text-body-sm text-text-secondary">
            {contact.phone}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-5 font-mono text-meta">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-contour min-h-[44px] leading-[44px]"
            >
              LinkedIn
            </a>
            <span className="text-chalk">·</span>
            <a
              href={contact.researchgate}
              target="_blank"
              rel="noopener noreferrer"
              className="link-contour min-h-[44px] leading-[44px]"
            >
              ResearchGate
            </a>
          </div>
          <p className="type-meta mt-10 leading-relaxed">
            {contact.address}
            <br />
            {contact.city}
          </p>
        </div>

        <footer className="mx-auto mt-16 max-w-prose text-center font-mono text-meta-sm uppercase tracking-[0.12em] text-silt">
          Terrain · {site.name} · {new Date().getFullYear()}
        </footer>
      </SectionReveal>
    </section>
  );
}
