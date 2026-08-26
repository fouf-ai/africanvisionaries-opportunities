import Link from "next/link";
import { i18n, type Locale } from "@/config/i18n";
import { countriesList } from "@/lib/countries-data";
import { opportunitiesList } from "@/lib/opportunities-data";
import { Globe2, ArrowRight } from "lucide-react";

export default async function CountriesIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const currentLang = (i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale) as Locale;

  const regions = [
    { key: "AFRICA", label: "Afrique" },
    { key: "EUROPE", label: "Europe" },
    { key: "AMERICA", label: "Amérique" },
    { key: "ASIA", label: "Asie" },
    { key: "MIDDLE_EAST", label: "Moyen-Orient" },
    { key: "OCEANIA", label: "Océanie" },
  ] as const;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-lg">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/30">
            <Globe2 className="w-3.5 h-3.5" />
            Répertoire Mondial AVA
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Explorer les opportunités par Pays
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            Trouvez les bourses d&apos;études, programmes de formation, conférences et financements disponibles selon le pays d&apos;accueil ou de provenance.
          </p>
        </div>
      </div>

      {regions.map((region) => {
        const countriesInRegion = countriesList.filter((country) => country.region === region.key);
        if (countriesInRegion.length === 0) return null;

        return (
          <section key={region.key} className="space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-600" />
              <h2 className="text-xl font-extrabold text-slate-900">{region.label}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {countriesInRegion.map((country) => {
                const count = opportunitiesList.filter(
                  (opportunity) =>
                    opportunity.country.toLowerCase() === country.name.toLowerCase() ||
                    (opportunity.region === country.region && country.region === "AFRICA"),
                ).length;

                return (
                  <Link
                    key={country.code}
                    href={`/${currentLang}/countries/${country.code.toLowerCase()}`}
                    className="group bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between hover:shadow-xl hover:border-blue-900/30 transition-all duration-300"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-3xl">{country.flagEmoji}</span>
                        <span className="text-xs font-bold text-blue-900 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
                          {count} opportunité(s)
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                        {country.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{country.description}</p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-700">
                      <span>Voir les opportunités</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
