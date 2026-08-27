import { notFound } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "@/config/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import { countriesList } from "@/lib/countries-data";
import { opportunitiesList, calculateDaysLeft } from "@/lib/opportunities-data";
import OpportunityCard from "@/components/opportunities/OpportunityCard";
import { ChevronLeft, MapPin, Search, UserCheck, Users, Mail, HeartHandshake, User } from "lucide-react";
import SafeImage from "@/components/common/SafeImage";

export async function generateStaticParams() {
  return i18n.locales.flatMap((locale) => countriesList.map((country) => ({ lang: locale, countryCode: country.code.toLowerCase() })));
}

export default async function CountryDetailPage({
  params,
}: {
  params: Promise<{ lang: string; countryCode: string }>;
}) {
  const { lang, countryCode } = await params;
  const currentLang = (i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale) as Locale;
  const dict = await getDictionary(currentLang);
  const country = countriesList.find((item) => item.code.toLowerCase() === countryCode.toLowerCase());

  if (!country) notFound();

  const countryOpportunities = opportunitiesList.filter((opportunity) => opportunity.country.toLowerCase() === country.name.toLowerCase() || (opportunity.country.toLowerCase() === "afrique" && country.region === "AFRICA"));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <Link href={`/${currentLang}/countries`} className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-900 transition-colors"><ChevronLeft className="w-4 h-4" /><span>Tous les pays</span></Link>

      <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-xs flex flex-col sm:flex-row items-start sm:items-center gap-6"><span className="text-6xl">{country.flagEmoji}</span><div className="space-y-2 flex-1"><div className="flex items-center gap-2 text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-md w-fit"><MapPin className="w-3.5 h-3.5" /><span>Région : {country.region}</span></div><h1 className="text-3xl font-extrabold text-slate-900">{country.name}</h1><p className="text-sm text-slate-600 max-w-3xl leading-relaxed">{country.description}</p></div></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-4 shadow-xs"><div className="flex items-center gap-2 text-blue-900 font-bold text-sm"><UserCheck className="w-5 h-5 text-teal-600" /><span>Représentant National AVA</span></div><div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3"><div className="flex items-center gap-3"><div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center overflow-hidden shrink-0"><SafeImage src={country.nationalRepresentative.photoUrl || ""} alt={country.nationalRepresentative.name} className="w-full h-full object-cover" fallbackIcon={<User className="w-6 h-6 text-slate-400" />} /></div><div><span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md uppercase tracking-wider block w-fit mb-0.5">{country.nationalRepresentative.title}</span><h3 className="font-bold text-slate-900 text-xs">{country.nationalRepresentative.name}</h3></div></div><div className="flex items-center gap-2 text-xs text-slate-500 pt-1 border-t border-slate-200/60"><Mail className="w-3.5 h-3.5 text-slate-400" /><span>{country.nationalRepresentative.email}</span></div></div></div>

        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-4 shadow-xs lg:col-span-2"><div className="flex items-center justify-between"><div className="flex items-center gap-2 text-slate-900 font-bold text-sm"><Users className="w-5 h-5 text-blue-900" /><span>Comité Local &amp; Bénévoles ({country.volunteersCount} membres)</span></div><span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full">Réseau actif</span></div><div className="grid grid-cols-1 sm:grid-cols-3 gap-3">{country.volunteersList.map((volunteer) => <div key={volunteer.id} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5"><div className="w-9 h-9 rounded-lg bg-slate-200 flex items-center justify-center overflow-hidden shrink-0"><SafeImage src={volunteer.photoUrl || ""} alt={volunteer.name} className="w-full h-full object-cover" fallbackIcon={<User className="w-4 h-4 text-slate-400" />} /></div><div className="space-y-0.5 truncate"><span className="text-xs font-bold text-slate-800 block truncate">{volunteer.name}</span><span className="text-[10px] text-teal-700 block truncate">{volunteer.role}</span><span className="text-[9px] text-slate-400 block">{volunteer.city}</span></div></div>)}</div><div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-950 to-slate-900 text-white"><div className="space-y-0.5"><span className="text-xs font-bold text-teal-300 flex items-center gap-1.5"><HeartHandshake className="w-4 h-4" />Rejoindre les bénévoles en {country.name}</span><p className="text-[11px] text-slate-300">Contribuez à la veille des opportunités et aux actions d&apos;urgence.</p></div><Link href={`/${currentLang}/contact?subject=Benevolat-${country.code}`} className="w-full sm:w-auto px-5 py-2.5 bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold rounded-xl shadow-md transition-colors text-center shrink-0">Devenir bénévole</Link></div></div>
      </div>

      <div className="space-y-6"><h2 className="text-xl font-bold text-slate-900">Opportunités académiques et professionnelles ({countryOpportunities.length})</h2>{countryOpportunities.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{countryOpportunities.map((opportunity) => <OpportunityCard key={opportunity.id} item={{ id: opportunity.id, slug: opportunity.slug, title: opportunity.title, organization: opportunity.organization, country: opportunity.country, level: opportunity.targetLevel, funding: opportunity.funding, daysLeft: calculateDaysLeft(opportunity.deadline) }} lang={currentLang} dict={dict} />)}</div> : <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3"><Search className="w-10 h-10 text-slate-300 mx-auto" /><h3 className="font-bold text-slate-800 text-base">Aucune opportunité active pour l&apos;instant</h3><p className="text-slate-500 text-xs max-w-sm mx-auto">Le comité AVA pour ce pays vérifie régulièrement de nouveaux programmes et bourses.</p></div>}</div>
    </div>
  );
}
