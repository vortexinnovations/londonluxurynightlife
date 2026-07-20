"use client";

import dynamic from "next/dynamic";

const MobileNav = dynamic(() => import("./MobileNav"), {
  ssr: false,
  loading: () => (
    <button
      className="lg:hidden p-2 font-sans text-[11px] font-medium uppercase tracking-[0.35em] text-cream"
      aria-label="Toggle menu"
    >
      Menu
    </button>
  ),
});

export default function LazyMobileNav({
  onOpenChange,
}: {
  onOpenChange?: (open: boolean) => void;
}) {
  return <MobileNav onOpenChange={onOpenChange} />;
}
