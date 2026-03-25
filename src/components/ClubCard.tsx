import Link from "next/link";
import type { Club } from "@/lib/constants";

export default function ClubCard({ club }: { club: Club }) {
  return (
    <Link
      href={`/clubs/${club.slug}`}
      className="group block bg-dark-surface border border-dark-border rounded-lg p-6 hover:border-gold/30 transition-all"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-serif text-xl font-bold text-cream group-hover:text-gold transition-colors">
          {club.name}
        </h3>
        <span className="shrink-0 text-xs text-warm-gray bg-dark-surface-2 px-2.5 py-1 rounded">
          {club.area}
        </span>
      </div>
      <p className="text-sm text-gold/80 font-serif italic mb-3">{club.tagline}</p>
      <p className="text-sm text-warm-gray leading-relaxed mb-4">{club.shortDescription}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-warm-gray">
        <span>{club.musicStyle}</span>
        <span>Tables from {club.tablesFrom}</span>
        <span>{club.openingNights}</span>
      </div>
    </Link>
  );
}
