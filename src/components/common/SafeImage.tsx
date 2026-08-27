"use client";

import React, { useMemo, useState } from "react";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackIcon?: React.ReactNode;
}

const imageExtensions = ["png", "jpg", "jpeg", "webp"];

function getImageCandidates(src: string) {
  const extensionMatch = src.match(/\.([a-z0-9]+)(?=[?#]|$)/i);
  if (!extensionMatch) {
    return [src, ...imageExtensions.map((extension) => `${src}.${extension}`)];
  }

  const basePath = src.slice(0, extensionMatch.index);
  const suffix = src.slice((extensionMatch.index ?? 0) + extensionMatch[0].length);
  const currentExtension = extensionMatch[1].toLowerCase();
  const extensions = [currentExtension, ...imageExtensions.filter((extension) => extension !== currentExtension)];
  return extensions.map((extension) => `${basePath}.${extension}${suffix}`);
}

export default function SafeImage({ src, alt, className = "", fallbackIcon }: SafeImageProps) {
  const candidates = useMemo(() => getImageCandidates(src), [src]);
  const [candidateIndex, setCandidateIndex] = useState(0);
  const hasFailed = !src || candidateIndex >= candidates.length;

  if (hasFailed) {
    return (
      <div className={`flex items-center justify-center bg-slate-100 text-slate-400 ${className}`}>
        {fallbackIcon || <span className="text-xs font-bold">{alt.slice(0, 2).toUpperCase()}</span>}
      </div>
    );
  }

  return (
    <img
      src={candidates[candidateIndex]}
      alt={alt}
      className={className}
      onError={() => setCandidateIndex((index) => index + 1)}
      loading="lazy"
    />
  );
}
