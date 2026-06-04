"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import site from "@/data/site.json";
import { heroContours } from "@/lib/contours";
import { ContourSvg } from "@/components/ui/ContourSvg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-20 lg:pt-0"
    >
      <ContourSvg
        viewBox={heroContours.viewBox}
        paths={heroContours.paths}
        opacity={0.07}
        animate
        className="dark:opacity-100"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-hero gap-10 px-gutter lg:grid-cols-[1fr_280px] lg:items-center lg:gap-16">
        <div>
          <motion.p
            className="type-eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            Terrain · Portfolio
          </motion.p>

          <motion.h1
            className="mt-5 font-display text-hero text-slate-depth"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
          >
            {site.name}
          </motion.h1>

          <svg viewBox="0 0 400 16" className="mt-3 h-4 w-48 max-w-full" aria-hidden>
            <path
              d="M0 8 Q100 2 200 8 T400 8"
              fill="none"
              className="contour-path"
              strokeWidth={1.5}
              style={{ strokeOpacity: 0.4 }}
            />
          </svg>

          <motion.p
            className="mt-8 font-body text-body-lg font-medium text-slate-depth"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            {site.title}
          </motion.p>

          <motion.p
            className="mt-3 type-meta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {site.affiliation}
          </motion.p>

          <motion.p
            className="mt-10 max-w-prose font-display text-quote italic text-graphite"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.6 }}
          >
            {site.tagline}
          </motion.p>

          <motion.a
            href="#research"
            className="mt-12 inline-block font-mono text-meta uppercase tracking-[0.14em] text-watershed-teal hover:text-alluvial-warm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            ↓ Explore
          </motion.a>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[260px] lg:mx-0 lg:max-w-[300px]"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.7 }}
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-chalk shadow-lg">
            <Image
              src="/portrait.jpg"
              alt="Torsha Goswami"
              fill
              className="object-cover object-top saturate-[0.85] contrast-[1.02]"
              sizes="(max-width: 1024px) 240px, 280px"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
