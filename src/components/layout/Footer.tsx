import Link from "next/link";
import type { Locale } from "@/config/i18n";
import type { Dictionary } from "@/lib/get-dictionary";

export default function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center text-white font-extrabold text-lg">
                AVA
              </div>
              <span className="text-white font-extrabold text-lg tracking-tight">African Visionaries Alliance</span>
            </div>
            <p className="text-slate-400 max-w-md text-xs leading-relaxed">
              {dict.footer.tagline}
            </p>
            <p className="text-slate-500 text-xs leading-relaxed">
              {dict.footer.initiative}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">{dict.footer.quick_links}</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href={`/${lang}`} className="hover:text-white transition-colors">{dict.navigation.home}</Link></li>
              <li><Link href={`/${lang}/opportunities`} className="hover:text-white transition-colors">{dict.navigation.opportunities}</Link></li>
              <li><Link href={`/${lang}/countries`} className="hover:text-white transition-colors">{dict.navigation.countries}</Link></li>
              <li><Link href={`/${lang}/about`} className="hover:text-white transition-colors">{dict.navigation.about}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">{dict.footer.categories}</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href={`/${lang}/opportunities?type=scholarships`} className="hover:text-white transition-colors">{dict.navigation.scholarships}</Link></li>
              <li><Link href={`/${lang}/opportunities?type=fellowships`} className="hover:text-white transition-colors">Fellowships</Link></li>
              <li><Link href={`/${lang}/opportunities?type=grants`} className="hover:text-white transition-colors">Grants & Financements</Link></li>
              <li><Link href={`/${lang}/opportunities?type=forums`} className="hover:text-white transition-colors">Forums & Conférences</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} African Visionaries Alliance (AVA). {dict.footer.all_rights}</p>
          <div className="flex gap-6">
            <Link href={`/${lang}/privacy`} className="hover:text-slate-400 transition-colors">{dict.footer.legal}</Link>
            <Link href={`/${lang}/contact`} className="hover:text-slate-400 transition-colors">{dict.navigation.contact}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
