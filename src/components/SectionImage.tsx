import Image from "next/image";

interface SectionImageProps {
  src: string;
  alt: string;
  aspect?: "video" | "wide" | "square";
  className?: string;
}

export default function SectionImage({
  src,
  alt,
  aspect = "video",
  className = "",
}: SectionImageProps) {
  const aspectClasses = {
    video: "aspect-video",
    wide: "aspect-[21/9]",
    square: "aspect-square",
  };

  return (
    <div className={`relative ${aspectClasses[aspect]} w-full overflow-hidden rounded-lg my-8 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 768px"
      />
    </div>
  );
}
