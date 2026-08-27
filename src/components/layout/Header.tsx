import Link from "next/link";
import type { Locale } from "@/config/i18n";
import type { Dictionary } from "@/lib/get-dictionary";
import LanguageSwitcher from "./LanguageSwitcher";
import SafeImage from "@/components/common/SafeImage";
import { Compass, GraduationCap, Globe2 } from "lucide-react";

export default function Header({ lang, dict }: { lang: Locale; dict: Dictionary }) {

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <Link href={`/${lang}`} className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center bg-slate-900 border border-slate-800 shadow-sm group-hover:scale-105 transition-transform shrink-0">
            <SafeImage
              src="/images/logo.png"
              alt="AVA Logo"
              className="w-full h-full object-contain p-0.5"
              fallbackIcon={<span className="text-white font-black text-xs">AVA</span>}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg text-slate-900 leading-tight">AVA Opportunities</span>
            <span className="text-xs text-slate-500 font-medium">African Visionaries Alliance</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <Link href={`/${lang}`} className="hover:text-blue-900 transition-colors">
            {dict.navigation.home}
          </Link>
          <Link href={`/${lang}/opportunities`} className="hover:text-blue-900 transition-colors flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-blue-900" />
            <span>{dict.navigation.opportunities}</span>
          </Link>
          <Link href={`/${lang}/opportunities?category=scholarships`} className="hover:text-blue-900 transition-colors flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-amber-600" />
            <span>{dict.navigation.scholarships}</span>
          </Link>
          <Link href={`/${lang}/countries`} className="hover:text-blue-900 transition-colors flex items-center gap-1.5">
            <Globe2 className="w-4 h-4 text-teal-600" />
            <span>{dict.navigation.countries}</span>
          </Link>
          <Link href={`/${lang}/about`} className="hover:text-blue-900 transition-colors">
            {dict.navigation.about}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher currentLang={lang} />
          <Link
            href={`/${lang}/opportunities`}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-bold rounded-lg text-white bg-blue-900 hover:bg-slate-900 transition-all shadow-sm"
          >
            {dict.navigation.explore}
          </Link>
        </div>
      </div>
    </header>
  );
}
