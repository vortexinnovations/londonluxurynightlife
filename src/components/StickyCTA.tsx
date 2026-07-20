"use client";

import { useEffect, useState } from "react";

interface StickyCTAProps {
  href: string;
  label: string;
  children: React.ReactNode; // WhatsApp glyph
}

/**
 * Mobile sticky conversion bar. The entire bar is one gold tap target.
 * Slides up after 600px of scroll so it never covers the hero CTA.
 */
export default function StickyCTA({ href, label, children }: StickyCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      // On pages too short to scroll past the threshold, show immediately
      // (the old always-on behavior); on long pages, reveal after 600px so
      // the bar never covers the hero CTA.
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const threshold = Math.min(600, Math.max(0, maxScroll - 100));
      setVisible(window.scrollY >= threshold);
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-ink border-t border-hairline-gold p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-transform duration-300 ease-[var(--ease-lux)] ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold w-full py-3.5"
      >
        {children}
        <span className="flex flex-col items-start leading-tight">
          <span>{label}</span>
          <span className="normal-case tracking-[0.08em] font-normal text-[10px] opacity-80 inline-flex items-center gap-1.5">
            <span className="live-dot !bg-ink/60" aria-hidden />
            Tonight &middot; Replies in minutes
          </span>
        </span>
      </a>
    </div>
  );
}
