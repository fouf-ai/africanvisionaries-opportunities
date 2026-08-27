"use client";

import Image from "next/image";

export default function ImageWithFallback({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 64px, 96px"
      className={className}
      onError={(event) => {
        event.currentTarget.style.display = "none";
      }}
    />
  );
}
