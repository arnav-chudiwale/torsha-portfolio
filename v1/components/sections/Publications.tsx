"use client";

import pubs from "@/data/publications.json";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { PubEntry } from "@/components/ui/PubEntry";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { dividerContours } from "@/lib/contours";
import { motion } from "framer-motion";

function entryKey(
  prefix: string,
  item: { title: string; year: string; venue?: string },
  index: number
) {
  return `${prefix}-${item.year}-${item.venue ?? "entry"}-${index}`;
}

export function Publications() {
  return (
    <section id="publications" className="scroll-mt-24 px-gutter py-section">
      <SectionReveal>
        <h2 className="type-section-title">Publications</h2>
      </SectionReveal>

      <SectionDivider path={dividerContours.publications} />

      <div className="mx-auto max-w-prose">
        <h3 className="type-label mb-8">
          Peer-reviewed
        </h3>
        {pubs.peerReviewed.map((p, i) => (
          <motion.div
            key={entryKey("peer", { ...p, venue: p.venue }, i)}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
          >
            <PubEntry {...p} />
          </motion.div>
        ))}

        <h3 className="type-label mb-8 mt-14">
          Conference presentations
        </h3>
        {pubs.conferences.map((p, i) => (
          <motion.div
            key={entryKey("conf", p, i)}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
          >
            <PubEntry
              authors={p.authors}
              title={p.title}
              venue={p.venue}
              year={p.year}
              type={p.type}
              location={p.location}
            />
          </motion.div>
        ))}

        <h3 className="type-label mb-8 mt-14">
          Technical reports
        </h3>
        {pubs.reports.map((p, i) => (
          <PubEntry
            key={entryKey("report", { ...p, venue: "Technical Report" }, i)}
            authors={p.authors}
            title={p.title}
            venue="Technical Report"
            year={p.year}
            type={p.type}
          />
        ))}

        <h3 className="type-label mb-8 mt-14">
          Media
        </h3>
        {pubs.media.map((p, i) => (
          <PubEntry
            key={entryKey("media", { ...p, year: p.year }, i)}
            authors={p.authors}
            title={p.title}
            venue={p.venue}
            year={p.year}
            type="Press"
            url={p.url}
          />
        ))}
      </div>
    </section>
  );
}
