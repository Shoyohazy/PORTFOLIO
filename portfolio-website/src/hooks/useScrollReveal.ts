import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// ── Trigger animation when element enters viewport
export function useScrollReveal(threshold = 0.15) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });
  return { ref, inView };
}

// ── Parallax offset based on scroll position
export function useParallax(strength = 0.1) {
  const [offset, setOffset] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setOffset(window.scrollY * strength);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [strength]);

  return offset;
}

// ── Track cursor position for magnetic / 3D effects
export function useCursorPosition() {
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handle, { passive: true });
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return pos;
}

// ── Detect reduced-motion preference
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}
