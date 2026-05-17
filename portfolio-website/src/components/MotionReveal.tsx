// MotionDiv — a lightweight reveal wrapper using Framer Motion
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export function Reveal({
  children,
  className,
  delay = 0,
  threshold = 0.15,
}: RevealProps) {
  const { ref, inView } = useScrollReveal(threshold);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
}

export function StaggerReveal({
  children,
  className,
  staggerDelay = 0.12,
  delayChildren = 0,
}: StaggerProps) {
  const { ref, inView } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer(staggerDelay, delayChildren)}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// FadeReveal — opacity only, no translate
interface FadeRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeReveal({
  children,
  className,
  delay = 0,
}: FadeRevealProps) {
  const { ref, inView } = useScrollReveal(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      className={cn("will-change-[opacity]", className)}
    >
      {children}
    </motion.div>
  );
}

export { fadeUp, staggerContainer };
