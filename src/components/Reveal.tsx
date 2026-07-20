"use client";

import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  /** Stagger delay in ms, applied when the element reveals */
  delay?: number;
  className?: string;
}

/**
 * Scroll-reveal wrapper. Content is fully visible in server HTML;
 * after hydration, elements still below the viewport are hidden and
 * revealed on scroll. Above-fold content never flashes.
 */
export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Only animate elements that start below the viewport.
    if (el.getBoundingClientRect().top >= window.innerHeight) {
      el.classList.add("reveal-pending");
      if (delay) el.style.transitionDelay = `${delay}ms`;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              el.classList.add("reveal-in");
              el.classList.remove("reveal-pending");
              observer.unobserve(el);
            }
          }
        },
        { threshold: 0.15, rootMargin: "0px 0px -20px 0px" }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
