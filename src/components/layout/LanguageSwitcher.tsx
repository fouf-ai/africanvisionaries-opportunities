"use client";
import { usePathname, useRouter } from "next/navigation";
import { i18n, type Locale } from "@/config/i18n";
import { Globe } from "lucide-react";

const languageNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  ar: "العربية",
  es: "Español",
  pt: "Português",
};

export default function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (newLang: Locale) => {
    if (!pathname) return;
    const segments = pathname.split("/");
    segments[1] = newLang;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <div className="relative inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white/80 border border-slate-200 rounded-full px-3 py-1.5 shadow-sm hover:border-slate-300">
      <Globe className="w-3.5 h-3.5 text-teal-600" />
      <select
        value={currentLang}
        onChange={(e) => handleLanguageChange(e.target.value as Locale)}
        aria-label="Sélectionner la langue"
        className="bg-transparent border-none outline-none cursor-pointer text-slate-800 pr-1"
      >
        {i18n.locales.map((locale) => (
          <option key={locale} value={locale}>
            {languageNames[locale]}
          </option>
        ))}
      </select>
    </div>
  );
}
