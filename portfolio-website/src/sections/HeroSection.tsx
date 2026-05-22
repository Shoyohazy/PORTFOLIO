// Cinematic Hero Section — fullscreen immersive entry point
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { staggerContainer, charReveal, fadeIn } from "@/animations/variants";
import { cn } from "@/lib/utils";

// 3D scene loaded lazily so it never blocks initial render
const HeroScene = lazy(() => import("@/scenes/HeroScene"));

// ─── Animated word reveal helper ─────────────────────────────────────
function WordReveal({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={cn("inline-flex flex-wrap gap-x-[0.35em]", className)}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span variants={charReveal} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// ─── Magnetic CTA Button ─────────────────────────────────────────────
interface CTAButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  href?: string;
  onClick?: () => void;
}

function CTAButton({
  children,
  primary = false,
  href = "#",
  onClick,
}: CTAButtonProps) {
  return (
    <motion.a
      href={href}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "px-7 py-3.5",
        "rounded-full text-sm font-medium",
        "transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30",
        primary
          ? "bg-white text-black hover:bg-white/90"
          : "border border-white/10 text-white/80 hover:text-white hover:border-white/18 hover:bg-white/4",
      )}
    >
      {children}
    </motion.a>
  );
}

// ─── Scroll Indicator ─────────────────────────────────────────────────
function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2.5 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      aria-hidden="true"
    >
      <span className="text-[10px] text-white/30 tracking-[0.2em] uppercase">
        scroll
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={14} className="text-white/30" />
      </motion.div>
    </motion.div>
  );
}

// ─── Tag chip ─────────────────────────────────────────────────────────
function Tag({ label }: { label: string }) {
  return (
    <motion.span
      variants={{
        hidden: { opacity: 0, scale: 0.92 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      className="inline-flex items-center px-3 py-1 rounded-full text-xs text-[#6e6e6e] border border-white/6 bg-white/2"
    >
      {label}
    </motion.span>
  );
}

// ─── Main Hero Section ────────────────────────────────────────────────
export default function HeroSection() {
  const handleWorkClick = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };
  const handleJourneyClick = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#000000]"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-overlay opacity-100 pointer-events-none" />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 30%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* Soft ambient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-150 h-75 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(175,175,175,0.04) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* 3D Scene — lazy loaded */}
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* Content layer */}
      <div className="relative z-10 flex flex-col justify-center flex-1 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto w-full pt-28 pb-16">
        {/* Staggered entry animation */}
        <motion.div
          variants={staggerContainer(0.14, 0.3)}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 max-w-4xl"
        >
          {/* System tag */}
          <motion.div variants={fadeIn} className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#afafaf] animate-pulse" />
            <span className="text-xs text-[#6e6e6e] tracking-[0.2em] uppercase font-medium">
              Portfolio
            </span>
          </motion.div>

          {/* Name heading */}
          <motion.h1
            variants={staggerContainer(0.1, 0)}
            className="text-[clamp(3rem,9vw,7.5rem)] font-semibold tracking-[-0.04em] leading-[0.95] text-white"
          >
            <WordReveal text="SHUBHAM" />
            <br />
            <WordReveal text="THAKUR" className="text-[#b5b5b5]" />
          </motion.h1>

          {/* Role tags */}
          <motion.div
            variants={staggerContainer(0.08, 0)}
            className="flex flex-wrap gap-2"
          >
            {[
              "Frontend Engineer",
              "System Builder",
              "Real-time Experiences",
            ].map((t) => (
              <Tag key={t} label={t} />
            ))}
          </motion.div>

          {/* Supporting text */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="max-w-xl text-[#6e6e6e] text-base md:text-lg leading-relaxed"
          >
            I build scalable production-grade applications with immersive user
            experiences and architecture-first engineering.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.1,
                },
              },
            }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <CTAButton primary href="#work" onClick={handleWorkClick}>
              View Work
              <ArrowRight size={14} />
            </CTAButton>
            <CTAButton href="#about" onClick={handleJourneyClick}>
              Explore Journey
            </CTAButton>
          </motion.div>
        </motion.div>

        {/* Bottom stat row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2 }}
          className="mt-auto pt-16 flex flex-wrap gap-8 md:gap-12"
        >
          {[
            { value: "3+", label: "Years building" },
            { value: "10+", label: "Production systems" },
            { value: "∞", label: "Scalable architecture" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="text-2xl font-semibold text-white tracking-tight">
                {value}
              </span>
              <span className="text-xs text-[#6e6e6e]">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #000000)",
        }}
      />
    </section>
  );
}
