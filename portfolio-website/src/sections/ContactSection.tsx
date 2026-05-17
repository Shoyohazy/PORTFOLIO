// Contact Section — minimal cinematic footer
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Globe, Mail } from "lucide-react";
import { Reveal } from "@/components/MotionReveal";
import { cn } from "@/lib/utils";

const socials = [
  { icon: Code2, label: "GitHub", href: "https://github.com/shubham" },
  { icon: Globe, label: "LinkedIn", href: "https://linkedin.com/in/shubham" },
  { icon: Mail, label: "Email", href: "mailto:shubham@example.com" },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-[#000000] px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      <div className="absolute top-0 left-6 right-6 md:left-16 md:right-16 h-px bg-white/4" />

      <div className="relative max-w-7xl mx-auto py-28">
        <div className="flex flex-col gap-12 max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#afafaf]/40" />
              <span className="text-xs text-[#6e6e6e] tracking-[0.2em] uppercase font-medium">
                Contact
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight">
              Let's build
              <br />
              <span className="text-[#6e6e6e]">something great.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="text-[#6e6e6e] text-base leading-relaxed max-w-md">
              I'm open to full-time roles, contract work, and interesting
              engineering conversations. If you're building something ambitious,
              let's talk.
            </p>
          </Reveal>

          {/* Email CTA */}
          <Reveal delay={0.25}>
            <motion.a
              href="mailto:shubham@example.com"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "inline-flex items-center gap-3 group",
                "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded",
              )}
            >
              <span className="text-lg md:text-2xl font-medium text-white/70 group-hover:text-white transition-colors duration-200">
                shubham@example.com
              </span>
              <ArrowUpRight
                size={20}
                className="text-[#afafaf] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
              />
            </motion.a>
          </Reveal>

          {/* Social links */}
          <Reveal delay={0.3}>
            <div className="flex items-center gap-4">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "w-10 h-10 flex items-center justify-center rounded-full",
                    "border border-white/6 bg-white/2",
                    "text-[#6e6e6e] hover:text-white hover:border-white/10 hover:bg-white/5",
                    "transition-all duration-200",
                  )}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Footer line */}
        <div className="mt-24 pt-8 border-t border-white/4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="text-[11px] text-[#6e6e6e]">
            © 2024 Shubham Thakur. Crafted with precision.
          </span>
          <span className="text-[11px] text-[#6e6e6e]">
            React · TypeScript · Three.js · Framer Motion
          </span>
        </div>
      </div>
    </section>
  );
}
