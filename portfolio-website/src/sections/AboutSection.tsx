// About Section — minimal, storytelling-focused
import { Reveal } from "@/components/MotionReveal";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "FastAPI", "REST APIs", "WebSockets", "GraphQL"],
  },
  {
    category: "Systems",
    items: ["Firebase", "PostgreSQL", "Redis", "Docker", "CI/CD"],
  },
  {
    category: "Craft",
    items: ["System Design", "PWA", "Performance", "Accessibility", "Testing"],
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-[#090909] px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
      {/* Top border line */}
      <div className="absolute top-0 left-6 right-6 md:left-16 md:right-16 h-px bg-white/4" />

      <div className="relative max-w-7xl mx-auto py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* ── Left: Story ─────────────────────────────────────── */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <Reveal>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-[#afafaf]/40" />
                  <span className="text-xs text-[#6e6e6e] tracking-[0.2em] uppercase font-medium">
                    About
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
                  Engineering with intent.
                </h2>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <p className="text-[#b5b5b5] text-base leading-relaxed">
                I'm Shubham Thakur — a frontend engineer who thinks in systems.
                I approach every project as an infrastructure challenge first,
                building UIs that are fast, accessible, and resilient at scale.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-[#6e6e6e] text-sm leading-relaxed">
                My work spans real-time delivery systems, enterprise logistics
                platforms, and high-performance web applications. I care deeply
                about the craft — clean architecture, thoughtful interactions,
                and measurable performance.
              </p>
            </Reveal>

            {/* Philosophy cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {[
                {
                  title: "Architecture first",
                  desc: "Systems designed to scale from day one.",
                },
                {
                  title: "Performance aware",
                  desc: "Every millisecond matters in production.",
                },
                {
                  title: "Detail oriented",
                  desc: "Craft lives in the interactions.",
                },
                {
                  title: "Ship and iterate",
                  desc: "Build fast, learn faster, improve always.",
                },
              ].map(({ title, desc }, i) => (
                <Reveal key={title} delay={0.1 * i}>
                  <div className="p-4 rounded-xl border border-white/5 bg-white/2 flex flex-col gap-1.5">
                    <span className="text-sm font-medium text-white/80">
                      {title}
                    </span>
                    <span className="text-xs text-[#6e6e6e] leading-relaxed">
                      {desc}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* ── Right: Skills ────────────────────────────────────── */}
          <div className="flex flex-col gap-8">
            {skills.map(({ category, items }, ci) => (
              <Reveal key={category} delay={ci * 0.08}>
                <div className="flex flex-col gap-3">
                  <span className="text-xs text-[#6e6e6e] tracking-[0.15em] uppercase font-medium">
                    {category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-xs text-[#afafaf] bg-white/3 border border-white/5 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Availability tag */}
            <Reveal delay={0.4}>
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/6 bg-white/2 w-fit">
                <div className="w-1.5 h-1.5 rounded-full bg-[#afafaf] animate-pulse" />
                <span className="text-xs text-[#b5b5b5]">
                  Available for new projects
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
