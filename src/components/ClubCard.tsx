import Link from "next/link";
import Image from "next/image";
import type { Club } from "@/lib/constants";
import { CLUB_THUMBNAILS } from "@/lib/images";

export default function ClubCard({ club }: { club: Club }) {
  const thumbnail = CLUB_THUMBNAILS[club.slug];

  return (
    <Link
      href={`/clubs/${club.slug}`}
      className="group block bg-dark-surface border border-dark-border rounded-lg overflow-hidden hover:border-gold/30 transition-all"
    >
      {thumbnail && (
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            src={thumbnail}
            alt={`${club.name} nightclub interior`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <span className="absolute bottom-3 left-4 text-xs text-white/80 bg-black/40 px-2 py-0.5 rounded">
            {club.area}
          </span>
        </div>
      )}
      <div className="p-5">
        <h3 className="font-serif text-xl font-bold text-cream group-hover:text-gold transition-colors mb-2">
          {club.name}
        </h3>
        <p className="text-sm text-gold/80 font-serif italic mb-2">{club.tagline}</p>
        <p className="text-sm text-warm-gray leading-relaxed mb-3">{club.shortDescription}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-warm-gray">
          <span>{club.musicStyle}</span>
          <span>Tables from {club.tablesFrom}</span>
          <span>{club.openingNights}</span>
        </div>
      </div>
    </Link>
  );
}
