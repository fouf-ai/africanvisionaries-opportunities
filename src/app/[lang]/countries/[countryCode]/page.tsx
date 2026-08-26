import { notFound } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "@/config/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import { countriesList } from "@/lib/countries-data";
import { opportunitiesList, calculateDaysLeft } from "@/lib/opportunities-data";
import OpportunityCard from "@/components/opportunities/OpportunityCard";
import { ChevronLeft, MapPin, Search } from "lucide-react";

export async function generateStaticParams() {
  const params: { lang: string; countryCode: string }[] = [];
  for (const locale of i18n.locales) {
    for (const country of countriesList) {
      params.push({ lang: locale, countryCode: country.code.toLowerCase() });
    }
  }
  return params;
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

  if (!country) {
    notFound();
  }

  const countryOpportunities = opportunitiesList.filter(
    (opportunity) =>
      opportunity.country.toLowerCase() === country.name.toLowerCase() ||
      (opportunity.country.toLowerCase() === "afrique" && country.region === "AFRICA"),
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Link
        href={`/${currentLang}/countries`}
        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-900 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Tous les pays</span>
      </Link>

      <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-xs flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <span className="text-6xl">{country.flagEmoji}</span>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-md w-fit">
            <MapPin className="w-3.5 h-3.5" />
            <span>Région : {country.region}</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900">{country.name}</h1>
          <p className="text-sm text-slate-600 max-w-2xl">{country.description}</p>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900">
          Opportunités disponibles pour {country.name} ({countryOpportunities.length})
        </h2>

        {countryOpportunities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countryOpportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.id}
                item={{
                  id: opportunity.id,
                  slug: opportunity.slug,
                  title: opportunity.title,
                  organization: opportunity.organization,
                  country: opportunity.country,
                  level: opportunity.targetLevel,
                  funding: opportunity.funding,
                  daysLeft: calculateDaysLeft(opportunity.deadline),
                }}
                lang={currentLang}
                dict={dict}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
            <Search className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="font-bold text-slate-800 text-base">Aucune opportunité active</h3>
            <p className="text-slate-500 text-xs max-w-sm mx-auto">
              De nouveaux programmes pour ce pays sont régulièrement ajoutés et vérifiés par l&apos;équipe AVA.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
