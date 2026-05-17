// Work Section — immersive storytelling project showcase
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Reveal } from "@/components/MotionReveal";
import { TechBadge } from "@/components/TechBadge";
import DeliveryNetworkViz from "@/components/DeliveryNetworkViz";
import LogisticsRouteViz from "@/components/LogisticsRouteViz";
import { cn } from "@/lib/utils";

// Map project id → visualization component
const vizMap: Record<string, React.ComponentType> = {
  spiritx: DeliveryNetworkViz,
  ortiz: LogisticsRouteViz,
};

// ─── Feature list item ───────────────────────────────────────────────
function FeatureItem({ label, index }: { label: string; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.07,
      }}
      className="flex items-center gap-3 text-sm text-[#b5b5b5]"
    >
      <span className="w-1 h-1 rounded-full bg-[#afafaf] shrink-0" />
      {label}
    </motion.li>
  );
}

// ─── Single project storytelling block ───────────────────────────────
interface ProjectBlockProps {
  project: (typeof projects)[0];
  index: number;
}

function ProjectBlock({ project, index }: ProjectBlockProps) {
  const Viz = vizMap[project.id];
  const isEven = index % 2 === 0;

  return (
    <div
      className={cn(
        "relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 lg:py-28",
        "border-t border-white/4",
      )}
    >
      {/* Index decoration */}
      <div className="absolute top-8 right-0 text-[120px] font-bold text-white/2 leading-none select-none pointer-events-none hidden lg:block">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* ── Text side ─────────────────────────────────────────────── */}
      <div className={cn("flex flex-col gap-8", isEven ? "" : "lg:order-2")}>
        {/* Project header */}
        <div className="flex flex-col gap-3">
          <Reveal delay={0.05}>
            <span className="text-xs text-[#6e6e6e] tracking-[0.2em] uppercase font-medium">
              Project {String(index + 1).padStart(2, "0")} — {project.year}
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight leading-tight">
              {project.title}
            </h3>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-sm text-[#6e6e6e] font-medium">
              {project.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Description */}
        <Reveal delay={0.2}>
          <p className="text-[#b5b5b5] text-sm leading-relaxed max-w-lg">
            {project.description}
          </p>
        </Reveal>

        {/* Features */}
        <div className="flex flex-col gap-3">
          <Reveal delay={0.25}>
            <span className="text-xs text-[#6e6e6e] tracking-widest uppercase">
              Core Systems
            </span>
          </Reveal>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
            {project.features.map((f, i) => (
              <FeatureItem key={f} label={f} index={i} />
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="flex flex-col gap-3">
          <Reveal delay={0.3}>
            <span className="text-xs text-[#6e6e6e] tracking-widest uppercase">
              Stack
            </span>
          </Reveal>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, i) => (
              <TechBadge key={tech} label={tech} index={i} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <Reveal delay={0.35}>
          <motion.button
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "inline-flex items-center gap-2 text-sm text-[#afafaf]",
              "hover:text-white transition-colors duration-200 group w-fit",
              "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded",
            )}
          >
            <span>View case study</span>
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </motion.button>
        </Reveal>
      </div>

      {/* ── Visualization side ────────────────────────────────────── */}
      <div className={cn("relative", isEven ? "" : "lg:order-1")}>
        {/* Card frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className={cn(
            "relative rounded-2xl overflow-hidden",
            "border border-white/6 bg-[#090909]",
            "min-h-75 lg:min-h-90",
          )}
        >
          {/* Subtle inner gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,255,255,0.02), transparent)",
            }}
          />

          {/* Grid micro-texture */}
          <div className="absolute inset-0 grid-overlay opacity-60 pointer-events-none" />

          {/* Viz */}
          <div className="relative z-10 w-full h-full min-h-75 p-6">
            {Viz && <Viz />}
          </div>

          {/* Top bar chrome */}
          <div className="absolute top-0 left-0 right-0 flex items-center gap-2 px-5 py-3.5 border-b border-white/4">
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-white/8" />
              ))}
            </div>
            <span className="ml-2 text-[10px] text-[#6e6e6e] font-mono">
              {project.id}.system
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Work Section ──────────────────────────────────────────────────
export default function WorkSection() {
  return (
    <section
      id="work"
      className="relative bg-[#000000] px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background continuity */}
      <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="pt-28 pb-12 flex flex-col gap-6 max-w-2xl">
          <Reveal>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#afafaf]/40" />
              <span className="text-xs text-[#6e6e6e] tracking-[0.2em] uppercase font-medium">
                Selected Work
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
              Systems I've Built
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-[#6e6e6e] text-base leading-relaxed">
              Production-grade platforms engineered for scale, performance, and
              real-world usage.
            </p>
          </Reveal>
        </div>

        {/* Project blocks */}
        <div className="flex flex-col">
          {projects.map((project, i) => (
            <ProjectBlock key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="py-20 flex items-center justify-center border-t border-white/4">
          <Reveal threshold={0.3}>
            <p className="text-[#6e6e6e] text-sm text-center">
              More systems in progress.{" "}
              <a
                href="mailto:shubham@example.com"
                className="text-[#afafaf] hover:text-white transition-colors duration-200 underline underline-offset-4"
              >
                Let's talk about what I can build for you.
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
