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
    light: "bg-black/40",
    heavy: "bg-black/70",
    gradient: "bg-gradient-to-t from-black via-black/60 to-black/30",
  };

  return (
    <section className={`relative ${height} flex items-end justify-center overflow-hidden`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
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
