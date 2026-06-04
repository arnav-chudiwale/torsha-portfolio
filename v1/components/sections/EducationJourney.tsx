"use client";

import { motion } from "framer-motion";
import { CountryFlag } from "@/components/ui/CountryFlag";

const stops = [
  {
    place: "Calcutta",
    region: "India",
    flagCode: "IN" as const,
    country: "India",
  },
  {
    place: "Ghent",
    region: "Belgium",
    flagCode: "BE" as const,
    country: "Belgium",
  },
  {
    place: "Stillwater",
    region: "OK, USA",
    flagCode: "US" as const,
    country: "United States",
  },
  {
    place: "Manhattan",
    region: "KS, USA",
    flagCode: "US" as const,
    country: "United States",
  },
];

export function EducationJourney() {
  return (
    <motion.div
      className="relative mx-auto mt-6 w-full max-w-cards overflow-hidden rounded-lg border border-chalk bg-limestone/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] dark:bg-surface/50"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      aria-label="Geographic progression of study and research"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <svg
          className="h-full w-full"
          viewBox="0 0 900 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0 72 Q150 40 300 68 T600 52 T900 64"
            fill="none"
            className="contour-path"
            strokeWidth={1.5}
            style={{ strokeOpacity: 0.22 }}
          />
          <path
            d="M0 88 Q200 60 450 82 T900 76"
            fill="none"
            className="contour-path"
            strokeWidth={1}
            style={{ strokeOpacity: 0.12 }}
          />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-field-paper/30 dark:to-field-paper/20" />
      </div>

      <div className="relative z-10 px-5 py-5 md:px-8 md:py-6">
        <div className="mb-5 border-b border-chalk/80 pb-3">
          <span className="type-label text-watershed-teal">Field corridor</span>
        </div>

        <div className="overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ol className="flex min-w-max items-center gap-0 md:min-w-0 md:w-full">
            {stops.map((stop, i) => (
              <li
                key={stop.place}
                className="flex items-center md:flex-1 md:min-w-0"
              >
                <div className="flex flex-col items-center px-3 text-center md:px-2 md:flex-1">
                  <span
                    className="mb-2.5 flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full border-2 border-watershed-teal bg-field-paper ring-2 ring-watershed-teal/20"
                    aria-hidden
                  />
                  <span className="font-mono text-body-sm font-medium leading-tight text-slate-depth">
                    {stop.place}
                  </span>
                  <span className="mt-0.5 font-mono text-meta-sm text-silt">
                    {stop.region}
                  </span>
                  <CountryFlag code={stop.flagCode} label={stop.country} />
                </div>

                {i < stops.length - 1 && (
                  <span
                    className="flex shrink-0 items-center self-center px-1 font-mono text-lg text-watershed-teal"
                    aria-hidden
                  >
                    <svg
                      viewBox="0 0 48 12"
                      className="hidden h-3 w-10 md:block"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 6 Q12 2 24 6 T48 6"
                        fill="none"
                        className="contour-path"
                        strokeWidth={1.2}
                        style={{ strokeOpacity: 0.55 }}
                      />
                    </svg>
                    <span className="md:hidden">→</span>
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </motion.div>
  );
}
