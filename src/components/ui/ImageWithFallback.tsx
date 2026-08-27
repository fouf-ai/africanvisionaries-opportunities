"use client";

import SafeImage from "@/components/common/SafeImage";

export default function ImageWithFallback({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return <SafeImage src={src} alt={alt} className={`absolute inset-0 ${className}`} />;
}
