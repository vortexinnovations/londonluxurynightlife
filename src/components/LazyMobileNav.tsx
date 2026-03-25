"use client";

import dynamic from "next/dynamic";

const MobileNav = dynamic(() => import("./MobileNav"), {
  ssr: false,
  loading: () => (
    <button className="lg:hidden p-2 text-warm-gray" aria-label="Toggle menu">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  ),
});

export default function LazyMobileNav() {
  return <MobileNav />;
}
