import Link from "next/link";
import Image from "next/image";
import type { Club } from "@/lib/constants";
import { CLUB_THUMBNAILS } from "@/lib/images";

export default function ClubCard({ club, index }: { club: Club; index?: number }) {
  const thumbnail = CLUB_THUMBNAILS[club.slug];

  return (
    <Link href={`/clubs/${club.slug}`} className="group block">
      {thumbnail && (
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={thumbnail}
            alt={`${club.name} nightclub interior`}
            fill
            className="editorial-img object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-[var(--ease-lux)]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
          {typeof index === "number" && (
            <span className="index-num absolute top-4 left-4 text-base">
              No. {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </div>
      )}
      <div className="pt-4 border-t border-dark-border mt-[1px]">
        <h3 className="font-serif text-2xl font-medium text-foreground group-hover:text-gold-light transition-colors duration-200 mb-1.5">
          {club.name}
        </h3>
        <p className="font-serif italic text-sm text-gold/90 mb-2.5">{club.tagline}</p>
        <p className="font-prose text-sm text-warm-gray leading-relaxed mb-3.5">{club.shortDescription}</p>
        <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-warm-gray leading-relaxed">
          {club.area} &middot; Tables from {club.tablesFrom} &middot; {club.openingNights}
        </p>
        <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-warm-gray/70 mt-1">
          {club.musicStyle}
        </p>
      </div>
    </Link>
  );
}
