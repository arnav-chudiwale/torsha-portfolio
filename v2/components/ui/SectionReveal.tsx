"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { motionTiers, MotionTier } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function SectionReveal({
  children,
  className = "",
  tier = "deposit",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  tier?: MotionTier;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const spec = motionTiers[tier];

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={spec.initial}
      whileInView={spec.animate}
      viewport={{ once: true, margin: "-72px" }}
      transition={{ ...spec.transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
