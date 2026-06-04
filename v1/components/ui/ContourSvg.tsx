"use client";

import { motion } from "framer-motion";

type ContourSvgProps = {
  viewBox: string;
  paths: string[];
  className?: string;
  strokeWidth?: number;
  opacity?: number;
  animate?: boolean;
  parallax?: boolean;
};

export function ContourSvg({
  viewBox,
  paths,
  className = "",
  strokeWidth = 1,
  opacity = 0.06,
  animate = false,
  parallax = false,
}: ContourSvgProps) {
  return (
    <motion.svg
      viewBox={viewBox}
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden
      style={parallax ? { willChange: "transform" } : undefined}
    >
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          className="contour-path"
          strokeWidth={strokeWidth}
          initial={animate ? { opacity: 0 } : undefined}
          animate={
            animate
              ? {
                  opacity: 1,
                  transition: {
                    opacity: { duration: 1.2, delay: i * 0.06, ease: "easeOut" },
                  },
                }
              : undefined
          }
          style={{ strokeOpacity: opacity }}
        />
      ))}
    </motion.svg>
  );
}
