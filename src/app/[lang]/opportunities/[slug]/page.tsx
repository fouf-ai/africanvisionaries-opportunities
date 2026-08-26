import { notFound } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "@/config/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import { opportunitiesList, calculateDaysLeft } from "@/lib/opportunities-data";
import {
  MapPin,
  GraduationCap,
  Calendar,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Gift,
  ListOrdered,
  Building2,
  ChevronLeft,
} from "lucide-react";

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const locale of i18n.locales) {
    for (const opportunity of opportunitiesList) {
      params.push({ lang: locale, slug: opportunity.slug });
    }
  }
  return params;
}

export default async function OpportunityDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const currentLang = (i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale) as Locale;
  const dict = await getDictionary(currentLang);

  const opportunity = opportunitiesList.find((item) => item.slug === slug);

  if (!opportunity) {
    notFound();
  }

  const daysLeft = calculateDaysLeft(opportunity.deadline);
  const isFullyFunded = opportunity.funding === "FULLY_FUNDED";

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Link
        href={`/${currentLang}/opportunities`}
        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-900 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Retour aux opportunités</span>
      </Link>

      <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span
            className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold ${
              isFullyFunded
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                : "bg-blue-50 text-blue-700 border border-blue-200"
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            {isFullyFunded ? dict.featured.fully_funded : dict.featured.partially_funded}
          </span>
          <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-lg flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            Date limite : {opportunity.deadline} ({daysLeft} {dict.featured.days_left})
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            {opportunity.title}
          </h1>
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
            <Building2 className="w-4 h-4 text-blue-900" />
            <span>{opportunity.organization}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-slate-400 block font-medium">Pays d&apos;accueil</span>
            <div className="flex items-center gap-1.5 font-bold text-slate-800 mt-1">
              <MapPin className="w-3.5 h-3.5 text-teal-600" />
              <span>{opportunity.country}</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-slate-400 block font-medium">Niveau requis</span>
            <div className="flex items-center gap-1.5 font-bold text-slate-800 mt-1">
              <GraduationCap className="w-3.5 h-3.5 text-blue-900" />
              <span>{opportunity.targetLevel}</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 col-span-2 sm:col-span-1">
            <span className="text-slate-400 block font-medium">Domaine</span>
            <span className="font-bold text-slate-800 mt-1 block truncate">{opportunity.fieldOfStudy}</span>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-950 to-slate-900 text-white">
          <div>
            <span className="text-xs font-bold text-teal-300 block">Vérification AVA garantie</span>
            <span className="text-xs text-slate-300">Candidatures traitées directement par l&apos;organisme officiel.</span>
          </div>
          <a
            href={opportunity.officialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs rounded-xl shadow-md transition-all shrink-0"
          >
            <span>POSTULER SUR LE SITE OFFICIEL</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-3">
          <h2 className="text-lg font-extrabold text-slate-900">Description du programme</h2>
          <p className="text-sm text-slate-700 leading-relaxed">{opportunity.description}</p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-slate-900">
            <CheckCircle2 className="w-5 h-5 text-teal-600" />
            <h2 className="text-lg font-extrabold">Conditions d&apos;éligibilité</h2>
          </div>
          <ul className="space-y-2.5">
            {opportunity.eligibility.map((criterion, index) => (
              <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 shrink-0" />
                <span>{criterion}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-slate-900">
            <Gift className="w-5 h-5 text-amber-600" />
            <h2 className="text-lg font-extrabold">Avantages et couverture financière</h2>
          </div>
          <ul className="space-y-2.5">
            {opportunity.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-slate-900">
            <FileText className="w-5 h-5 text-blue-900" />
            <h2 className="text-lg font-extrabold">Documents requis pour postuler</h2>
          </div>
          <ul className="space-y-2.5">
            {opportunity.documents.map((document, index) => (
              <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-900 mt-2 shrink-0" />
                <span>{document}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-slate-900">
            <ListOrdered className="w-5 h-5 text-purple-700" />
            <h2 className="text-lg font-extrabold">Procédure de candidature étape par étape</h2>
          </div>
          <div className="space-y-3">
            {opportunity.procedure.map((step, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-800 font-bold flex items-center justify-center shrink-0 text-xs">
                  {index + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
