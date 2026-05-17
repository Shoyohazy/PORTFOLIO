// Animated tech stack badge
import { motion } from "framer-motion";

interface TechBadgeProps {
  label: string;
  index: number;
}

export function TechBadge({ label, index }: TechBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.06,
      }}
      whileHover={{ y: -2, transition: { duration: 0.15 } }}
      className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium
        text-[#afafaf] bg-white/4 border border-white/6
        hover:bg-white/7 hover:border-white/10
        transition-colors duration-200 cursor-default"
    >
      {label}
    </motion.span>
  );
}
