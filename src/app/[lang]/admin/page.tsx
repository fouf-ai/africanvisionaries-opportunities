import Link from "next/link";
import { i18n, type Locale } from "@/config/i18n";
import { opportunitiesList } from "@/lib/opportunities-data";
import { Compass, CheckCircle2, Clock, PlusCircle, TrendingUp } from "lucide-react";

export default async function AdminDashboardPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const currentLang = (i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale) as Locale;
  const total = opportunitiesList.length;

  const statistics = [
    { label: "PUBLIÉES", value: total, detail: "Actuellement visibles en ligne", icon: CheckCircle2, tone: "text-emerald-700 bg-emerald-50" },
    { label: "EN REVUE", value: 0, detail: "En attente de vérification source", icon: Clock, tone: "text-amber-700 bg-amber-50" },
    { label: "BROUILLONS", value: 0, detail: "En cours de rédaction", icon: TrendingUp, tone: "text-slate-700 bg-slate-100" },
    { label: "TOTAL RÉPERTOIRE", value: total, detail: "Toutes catégories confondues", icon: Compass, tone: "text-blue-900 bg-blue-50" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Tableau de Bord &amp; Workflow</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">Supervision du cycle de vie des opportunités et des publications AVA.</p>
        </div>
        <Link href={`/${currentLang}/admin/opportunities/new`} className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-900 hover:bg-slate-900 text-white text-xs font-bold rounded-xl shadow-md transition-colors w-fit">
          <PlusCircle className="w-4 h-4 text-teal-400" />
          <span>Nouvelle Opportunité</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statistics.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">{stat.label}</span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${stat.tone}`}><Icon className="w-4 h-4" /></div>
              </div>
              <p className="text-3xl font-black text-slate-900">{stat.value}</p>
              <span className="text-[11px] text-slate-600 font-semibold block">{stat.detail}</span>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between gap-4">
          <h2 className="text-base font-extrabold text-slate-900">Dernières opportunités enregistrées</h2>
          <span className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full">Contrôle d&apos;intégrité actif</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 text-slate-700 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
              <tr><th className="py-3.5 px-6">Titre</th><th className="py-3.5 px-4">Organisation</th><th className="py-3.5 px-4">Pays</th><th className="py-3.5 px-4">Date Limite</th><th className="py-3.5 px-4">Statut</th><th className="py-3.5 px-6 text-right">Action</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {opportunitiesList.map((opportunity) => (
                <tr key={opportunity.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 max-w-xs truncate">{opportunity.title}</td>
                  <td className="py-4 px-4">{opportunity.organization}</td>
                  <td className="py-4 px-4">{opportunity.country}</td>
                  <td className="py-4 px-4 text-amber-700 font-semibold">{opportunity.deadline}</td>
                  <td className="py-4 px-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">PUBLIÉ</span></td>
                  <td className="py-4 px-6 text-right"><Link href={`/${currentLang}/opportunities/${opportunity.slug}`} target="_blank" className="font-bold text-blue-900 hover:text-teal-600 transition-colors">Aperçu</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
