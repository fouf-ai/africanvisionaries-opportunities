import Link from "next/link";
import { i18n, type Locale } from "@/config/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import { opportunitiesList, calculateDaysLeft } from "@/lib/opportunities-data";
import OpportunityCard from "@/components/opportunities/OpportunityCard";
import { User, Bookmark, Bell, Compass, ArrowRight, ShieldCheck, GraduationCap } from "lucide-react";

export default async function UserDashboardPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const currentLang = (i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale) as Locale;
  const dict = await getDictionary(currentLang);
  const recommendedOpportunities = opportunitiesList.slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white border border-slate-800 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-black text-2xl shadow-md border-2 border-white/20"><User className="w-8 h-8" /></div>
          <div className="space-y-1"><div className="flex items-center gap-2"><h1 className="text-2xl font-black tracking-tight">Mon Espace Candidat</h1><span className="text-[10px] font-bold text-teal-300 bg-teal-500/20 border border-teal-500/30 px-2 py-0.5 rounded-full">Membre AVA</span></div><p className="text-xs text-slate-300">Gérez vos opportunités sauvegardées et découvrez nos recommandations ciblées.</p></div>
        </div>
        <Link href={`/${currentLang}/opportunities`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-md transition-colors w-fit"><Compass className="w-4 h-4" /><span>Explorer les programmes</span></Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <MetricCard label="Opportunités Sauvegardées" value="3" detail="Programmes prêts pour candidature" icon={Bookmark} iconClass="text-teal-600" />
        <MetricCard label="Alertes Actives" value="2" detail="Bourses Master & IA Canada" icon={Bell} iconClass="text-blue-900" />
        <MetricCard label="Niveau de Profil" value="Étudiant / Chercheur" detail="Profil 100% vérifié" icon={GraduationCap} iconClass="text-amber-600" valueClass="text-xl" />
      </div>

      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3"><div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-teal-600" /><h2 className="text-lg font-extrabold text-slate-900">Recommandé pour votre profil</h2></div><Link href={`/${currentLang}/opportunities`} className="text-xs font-bold text-blue-900 hover:text-teal-600 transition-colors flex items-center gap-1"><span>Voir tout</span><ArrowRight className="w-3.5 h-3.5" /></Link></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{recommendedOpportunities.map((opportunity) => <OpportunityCard key={opportunity.id} item={{ id: opportunity.id, slug: opportunity.slug, title: opportunity.title, organization: opportunity.organization, country: opportunity.country, level: opportunity.targetLevel, funding: opportunity.funding, daysLeft: calculateDaysLeft(opportunity.deadline) }} lang={currentLang} dict={dict} />)}</div>
      </section>
    </div>
  );
}

function MetricCard({
  label,
  value,
  detail,
  icon: Icon,
  iconClass,
  valueClass = "text-3xl",
}: {
  label: string;
  value: string;
  detail: string;
  icon: typeof Bookmark;
  iconClass: string;
  valueClass?: string;
}) {
  return <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-2 shadow-xs"><div className="flex items-center justify-between text-slate-500"><span className="text-xs font-bold uppercase tracking-wider">{label}</span><Icon className={`w-5 h-5 ${iconClass}`} /></div><p className={`${valueClass} font-black text-slate-900 mt-1`}>{value}</p><span className="text-[11px] text-slate-500 block">{detail}</span></div>;
}
