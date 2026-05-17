// ─── Motion Variants & Configs ──────────────────────────────────────
// Centralised Framer Motion animation presets for cinematic consistency

import type { Variants } from "framer-motion";

// ── Easing presets
export const easings = {
  cinematic: [0.16, 1, 0.3, 1] as [number, number, number, number],
  smooth: [0.4, 0, 0.2, 1] as [number, number, number, number],
  outExpo: [0, 0, 0.3, 1] as [number, number, number, number],
  inOutCubic: [0.645, 0.045, 0.355, 1] as [number, number, number, number],
};

// ── Fade + slide up (primary reveal)
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easings.cinematic },
  },
};

// ── Fade in only
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: easings.smooth },
  },
};

// ── Staggered container
export const staggerContainer = (
  staggerChildren = 0.12,
  delayChildren = 0,
): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

// ── Slide in from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: easings.cinematic },
  },
};

// ── Slide in from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: easings.cinematic },
  },
};

// ── Scale fade (for 3D scene wrapper)
export const scaleFade: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: easings.cinematic },
  },
};

// ── Cinematic heading — each char/word reveal
export const charReveal: Variants = {
  hidden: { opacity: 0, y: "110%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.85, ease: easings.cinematic },
  },
};

// ── Navbar entrance
export const navbarVariant: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easings.cinematic, delay: 0.2 },
  },
};

// ── Hover magnetic scale
export const hoverScale = {
  scale: 1.03,
  transition: { duration: 0.2, ease: easings.smooth },
};
