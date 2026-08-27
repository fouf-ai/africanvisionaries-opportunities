import { i18n, type Locale } from "@/config/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import { opportunitiesList, calculateDaysLeft } from "@/lib/opportunities-data";
import OpportunityCard from "@/components/opportunities/OpportunityCard";
import FiltersSidebar from "@/components/opportunities/FiltersSidebar";
import NewsletterBox from "@/components/opportunities/NewsletterBox";
import { Search, Sparkles } from "lucide-react";

export default async function OpportunitiesPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { lang } = await params;
  const sParams = await searchParams;
  const currentLang = (i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale) as Locale;
  const dict = await getDictionary(currentLang);

  const query = sParams.q?.toLowerCase() || "";
  const filterType = sParams.type || "";
  const filterFunding = sParams.funding || "";
  const filterLevel = sParams.level || "";

  const filtered = opportunitiesList.filter((item) => {
    const matchQuery =
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.organization.toLowerCase().includes(query) ||
      item.country.toLowerCase().includes(query);

    const matchType = !filterType || item.category === filterType;
    const matchFunding = !filterFunding || item.funding === filterFunding;
    const matchLevel = !filterLevel || item.targetLevel === filterLevel;

    return matchQuery && matchType && matchFunding && matchLevel;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-lg">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            Répertoire Vérifié AVA
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Toutes les opportunités internationales
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            Consultez les bourses d&apos;études, programmes de recherche, stages et subventions ouverts aux candidatures. Chaque opportunité est vérifiée avec un lien direct vers la source officielle.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        <div className="lg:col-span-1">
          <FiltersSidebar lang={currentLang} />
        </div>

        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between text-xs font-bold text-slate-600 bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-xs">
            <span>{filtered.length} opportunité(s) trouvée(s)</span>
            <span>Trié par : Plus récentes</span>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((opportunity) => (
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
              <h3 className="font-bold text-slate-800 text-base">Aucune opportunité trouvée</h3>
              <p className="text-slate-500 text-xs max-w-sm mx-auto">
                Essayez d&apos;ajuster ou de réinitialiser vos filtres pour découvrir d&apos;autres opportunités disponibles.
              </p>
            </div>
          )}
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
}
