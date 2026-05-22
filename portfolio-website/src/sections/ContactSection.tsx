// Contact Section — minimal cinematic footer
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Globe, Mail } from "lucide-react";
import { Reveal } from "@/components/MotionReveal";
import { cn } from "@/lib/utils";

const socials = [
  {
    icon: Code2,
    label: "GitHub",
    href: "https://github.com/shubham",
  },
  {
    icon: Globe,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shubh07/",
  },
  {
    icon: Mail,
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=shubhamdthakur55@gmail.com",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-6 md:px-16 lg:px-24"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-6 right-6 h-px bg-white/4 md:left-16 md:right-16" />

      <div className="relative z-10 mx-auto max-w-7xl py-28">
        <div className="flex max-w-3xl flex-col gap-12">
          {/* Section label */}
          <Reveal>
            <div className="relative z-10 flex items-center gap-3">
              <div className="h-px w-8 bg-[#afafaf]/40" />

              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#6e6e6e]">
                Contact
              </span>
            </div>
          </Reveal>

          {/* Heading */}
          <Reveal delay={0.1}>
            <h2 className="relative z-10 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Let's build
              <br />
              <span className="text-[#6e6e6e]">something great.</span>
            </h2>
          </Reveal>

          {/* Description */}
          <Reveal delay={0.18}>
            <p className="relative z-10 max-w-md text-base leading-relaxed text-[#6e6e6e]">
              I'm open to full-time roles, contract work, and interesting
              engineering conversations. If you're building something ambitious,
              let's talk.
            </p>
          </Reveal>

          {/* Email CTA */}
          <Reveal delay={0.25}>
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shubhamdthakur55@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "group relative z-20 inline-flex w-fit items-center gap-3",
                "rounded-md focus-visible:outline-none",
                "focus-visible:ring-1 focus-visible:ring-white/20",
              )}
            >
              <span className="text-lg font-medium text-white/70 transition-colors duration-200 group-hover:text-white md:text-2xl">
                shubhamdthakur55@gmail.com
              </span>

              <ArrowUpRight
                size={20}
                className="text-[#afafaf] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>
          </Reveal>

          {/* Social links */}
          <Reveal delay={0.3}>
            <div className="relative z-20 flex items-center gap-4">
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
                    "relative z-20 flex h-10 w-10 items-center justify-center rounded-full",
                    "border border-white/6 bg-white/[0.02]",
                    "text-[#6e6e6e]",
                    "transition-all duration-200",
                    "hover:border-white/10 hover:bg-white/[0.05] hover:text-white",
                  )}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Footer */}
        <div className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-white/4 pt-8 sm:flex-row sm:items-center">
          <span className="text-[11px] text-[#8a8989]">
            © 2026 Shubham Thakur. Crafted with precision.
          </span>

          <span className="text-[11px] text-[#8a8989]">
            React · TypeScript · Three.js · Framer Motion
          </span>
        </div>
      </div>
    </section>
  );
}
