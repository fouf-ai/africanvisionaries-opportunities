"use client";

import { useEffect } from "react";
import type { Locale } from "@/config/i18n";

export default function DocumentLocale({ lang }: { lang: Locale }) {
  useEffect(() => {
    const isRtl = lang === "ar";
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
  }, [lang]);

  return null;
}
