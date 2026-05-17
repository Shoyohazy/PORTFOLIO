import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/portfolio";
import { navbarVariant } from "@/animations/variants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      variants={navbarVariant}
      initial="hidden"
      animate="visible"
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      {/* Pill Container */}
      <div
        className={cn(
          "relative flex items-center justify-between gap-8 px-6 py-3 rounded-full transition-all duration-500",
          "border border-white/6",
          scrolled
            ? "bg-black/80 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.6)]"
            : "bg-black/40 backdrop-blur-md",
        )}
      >
        {/* Logo / Name */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="text-sm font-semibold tracking-tight text-white hover:text-[#afafaf] transition-colors duration-200"
        >
          ST
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={cn(
                "relative px-4 py-1.5 text-sm text-[#b5b5b5] rounded-full",
                "hover:text-white transition-colors duration-200",
                "hover:bg-white/4",
                "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="mailto:shubham@example.com"
          className={cn(
            "hidden md:inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium",
            "text-white border border-white/8",
            "hover:bg-white/6 hover:border-white/12",
            "transition-all duration-200",
          )}
        >
          Let's talk
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.25"
        >
          <span
            className={cn(
              "block h-px w-5 bg-white/70 transition-all duration-300",
              menuOpen && "rotate-45 translate-y-1.5",
            )}
          />
          <span
            className={cn(
              "block h-px w-5 bg-white/70 transition-all duration-300",
              menuOpen && "-rotate-45 -translate-y-1.5",
            )}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "absolute top-[calc(100%+8px)] left-0 right-0 mx-4 rounded-2xl",
              "bg-[#111111]/95 backdrop-blur-xl",
              "border border-white/6",
              "py-2",
            )}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-6 py-3 text-sm text-[#b5b5b5] hover:text-white transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
            <div className="mx-6 mt-1 pt-2 border-t border-white/6">
              <a
                href="mailto:shubham@example.com"
                className="block py-2 text-sm text-white"
              >
                Let's talk →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
