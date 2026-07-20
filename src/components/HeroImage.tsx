import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  overlay?: "light" | "heavy" | "gradient";
  height?: string;
  children?: React.ReactNode;
}

export default function HeroImage({
  src,
  alt,
  priority = true,
  overlay = "gradient",
  height = "h-[50vh] min-h-[400px]",
  children,
}: HeroImageProps) {
  const overlayClasses = {
    light: "bg-ink/40",
    heavy: "bg-ink/70",
    gradient: "bg-gradient-to-t from-ink/90 via-ink/50 to-ink/20",
  };

  return (
    <section className={`relative ${height} flex items-end justify-center overflow-hidden`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="editorial-img object-cover"
        priority={priority}
        sizes="100vw"
      />
      <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
      {children && (
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 pb-12 lg:pb-16 text-center">
          {children}
        </div>
      )}
    </section>
  );
}
