import type { TargetAndTransition, Transition } from "framer-motion";

export type MotionTier = "genesis" | "arrival" | "deposit" | "instrument";

type TierSpec = {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  transition: Transition;
};

export const motionTiers: Record<MotionTier, TierSpec> = {
  genesis: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
  arrival: {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, ease: "easeOut" },
  },
  deposit: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  instrument: {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.2 },
  },
};

export const staggerStep = 0.055;
