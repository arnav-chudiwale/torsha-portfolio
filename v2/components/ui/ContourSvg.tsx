"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type ContourSvgProps = {
  viewBox: string;
  paths: string[];
  className?: string;
  strokeWidth?: number;
  opacity?: number;
  animate?: boolean;
};

export function ContourSvg({
  viewBox,
  paths,
  className = "",
  strokeWidth = 1,
  opacity = 0.06,
  animate = false,
}: ContourSvgProps) {
  const reduced = useReducedMotion();

  return (
    <motion.svg
      viewBox={viewBox}
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden
    >
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          className="contour-path"
          strokeWidth={strokeWidth}
          initial={
            animate && !reduced
              ? { pathLength: 0, opacity: 0 }
              : { opacity: opacity }
          }
          animate={
            animate && !reduced
              ? {
                  pathLength: 1,
                  opacity,
                  transition: {
                    pathLength: {
                      duration: 2.2,
                      delay: i * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    opacity: { duration: 0.5, delay: i * 0.05 },
                  },
                }
              : { opacity }
          }
        />
      ))}
    </motion.svg>
  );
}
