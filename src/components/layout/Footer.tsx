import Link from "next/link";
import type { Locale } from "@/config/i18n";
import type { Dictionary } from "@/lib/get-dictionary";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";
import SafeImage from "@/components/common/SafeImage";

export default function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4 md:col-span-2"><div className="flex items-center gap-3"><div className="relative w-9 h-9 rounded-lg overflow-hidden bg-slate-900 border border-slate-800"><SafeImage src="/images/logo.png" alt="AVA Logo" className="w-full h-full object-contain p-0.5" fallbackIcon={<span className="flex h-full w-full items-center justify-center text-white font-extrabold text-xs">AVA</span>} /></div><span className="text-white font-extrabold text-lg tracking-tight">African Visionaries Alliance</span></div><p className="text-slate-400 max-w-md text-xs leading-relaxed">{dict.footer.tagline}</p><div className="space-y-1.5 text-xs text-slate-400 pt-2"><div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" /><span>Siège : Bangui, République Centrafricaine</span></div><div className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" /><span>Contact direct : +236 72 54 51 21</span></div><div className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" /><span>contact@africanvisionaries.org</span></div></div><div className="flex items-center gap-3 pt-3"><SocialLink href="https://www.facebook.com/AfricanVisionariesAlliance" label="Facebook African Visionaries Alliance" icon={FaFacebook} hoverClass="hover:bg-blue-600" /><SocialLink href="https://www.linkedin.com/company/african-visionaries-alliance/" label="LinkedIn African Visionaries Alliance" icon={FaLinkedin} hoverClass="hover:bg-sky-600" /><SocialLink href="https://www.youtube.com/@AfricanVisionariesAlliance" label="YouTube African Visionaries Alliance" icon={FaYoutube} hoverClass="hover:bg-rose-600" /></div></div>

          <div><h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">{dict.footer.quick_links}</h4><ul className="space-y-2 text-xs"><li><Link href={`/${lang}`} className="hover:text-white transition-colors">{dict.navigation.home}</Link></li><li><Link href={`/${lang}/opportunities`} className="hover:text-white transition-colors">{dict.navigation.opportunities}</Link></li><li><Link href={`/${lang}/countries`} className="hover:text-white transition-colors">{dict.navigation.countries}</Link></li><li><Link href={`/${lang}/about`} className="hover:text-white transition-colors">{dict.navigation.about}</Link></li><li><Link href={`/${lang}/team`} className="hover:text-white transition-colors">{dict.navigation.team}</Link></li></ul></div>
          <div><h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">{dict.footer.categories}</h4><ul className="space-y-2 text-xs"><li><Link href={`/${lang}/opportunities?type=scholarships`} className="hover:text-white transition-colors">{dict.navigation.scholarships}</Link></li><li><Link href={`/${lang}/opportunities?type=fellowships`} className="hover:text-white transition-colors">Fellowships &amp; Recherche</Link></li><li><Link href={`/${lang}/opportunities?type=grants`} className="hover:text-white transition-colors">Grants &amp; Financements</Link></li><li><Link href={`/${lang}/contact`} className="hover:text-white transition-colors">{dict.navigation.contact}</Link></li></ul></div>
        </div>
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500"><p>© {new Date().getFullYear()} African Visionaries Alliance (AVA). {dict.footer.all_rights}</p><div className="flex gap-6"><Link href={`/${lang}/about`} className="hover:text-slate-400 transition-colors">{dict.footer.legal}</Link><Link href={`/${lang}/contact`} className="hover:text-slate-400 transition-colors">{dict.navigation.contact}</Link></div></div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, icon: Icon, hoverClass }: { href: string; label: string; icon: typeof FaFacebook; hoverClass: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={`w-8 h-8 rounded-lg bg-white/10 ${hoverClass} text-white flex items-center justify-center transition-colors`}><Icon className="w-4 h-4" /></a>;
}
