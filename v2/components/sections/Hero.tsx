"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import site from "@/data/site.json";
import { heroContours } from "@/lib/contours";
import { ContourSvg } from "@/components/ui/ContourSvg";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden pb-14 pt-24 lg:min-h-[94vh] lg:pb-20 lg:pt-16"
    >
      <ContourSvg
        viewBox={heroContours.viewBox}
        paths={heroContours.paths}
        opacity={0.08}
        animate={!reduced}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-hero gap-12 px-gutter lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start lg:gap-x-16 lg:gap-y-0">
        <div className="lg:pr-4 lg:pt-[clamp(0.5rem,2vh,1.5rem)]">
          <motion.p
            className="type-eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduced ? 0 : 1.4, duration: 0.6 }}
          >
            Terrain · Portfolio
          </motion.p>

          <motion.h1
            className="mt-5 font-display text-hero text-slate-depth"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduced ? 0 : 1, duration: 0.85, ease: "easeOut" }}
          >
            {site.name}
          </motion.h1>

          <svg viewBox="0 0 400 16" className="mt-3 h-4 w-48 max-w-full" aria-hidden>
            <motion.path
              d="M0 8 Q100 2 200 8 T400 8"
              fill="none"
              className="contour-path"
              strokeWidth={1.5}
              initial={reduced ? undefined : { pathLength: 0 }}
              animate={reduced ? undefined : { pathLength: 1 }}
              transition={{ delay: 1.2, duration: 1.2, ease: "easeInOut" }}
              style={{ strokeOpacity: 0.45 }}
            />
          </svg>

          <motion.p
            className="mt-8 font-body text-body-lg font-medium text-slate-depth"
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduced ? 0 : 1.15, duration: 0.55 }}
          >
            {site.title}
          </motion.p>

          <motion.p
            className="mt-3 type-meta"
            initial={{ opacity: 0, y: reduced ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduced ? 0 : 1.25, duration: 0.5 }}
          >
            {site.affiliation}
          </motion.p>

          <motion.p
            className="mt-10 max-w-prose font-display text-quote italic text-graphite"
            initial={{ opacity: 0, y: reduced ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduced ? 0 : 1.35, duration: 0.55 }}
          >
            {site.tagline}
          </motion.p>

          <motion.a
            href="#research"
            className="link-contour mt-12 inline-block font-mono text-meta uppercase tracking-[0.14em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduced ? 0 : 1.55, duration: 0.45 }}
          >
            ↓ Explore
          </motion.a>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[280px] sm:max-w-[260px] lg:mx-0 lg:ml-auto lg:max-w-[300px] lg:mt-[clamp(3.25rem,11vh,7.25rem)]"
          initial={{ opacity: 0, y: reduced ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduced ? 0 : 1.3, duration: 0.7 }}
        >
          <div className="surface-card relative aspect-[3/4] overflow-hidden p-0">
            <Image
              src="/portrait.jpg"
              alt="Torsha Goswami"
              fill
              className="object-cover object-[50%_26%] saturate-[0.88] contrast-[1.02] transition-transform duration-700 ease-out hover:scale-[1.02]"
              sizes="(max-width: 1024px) 260px, 300px"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
