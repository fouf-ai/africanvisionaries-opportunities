import Link from "next/link";
import { i18n, type Locale } from "@/config/i18n";
import { getDictionary, type Dictionary } from "@/lib/get-dictionary";
import OpportunityCard, { type OpportunityItem } from "@/components/opportunities/OpportunityCard";
import NewsletterBox from "@/components/opportunities/NewsletterBox";
import {
  Sparkles,
  Search,
  GraduationCap,
  Award,
  DollarSign,
  Briefcase,
  Users,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Target,
} from "lucide-react";

const sampleOpportunities: OpportunityItem[] = [
  {
    id: "1",
    slug: "bourse-excellence-gouvernement-suisse",
    title: "Bourses d'Excellence du Gouvernement Suisse",
    organization: "Confédération Suisse (FCS)",
    country: "Suisse",
    level: "Master / Doctorat",
    funding: "FULLY_FUNDED",
    daysLeft: 45,
  },
  {
    id: "2",
    slug: "programme-leadership-jeunes-africains",
    title: "Fellowship Panafricain pour Jeunes Leaders",
    organization: "African Visionaries Alliance",
    country: "Afrique / International",
    level: "Jeune Leader / Professionnel",
    funding: "FULLY_FUNDED",
    daysLeft: 28,
  },
  {
    id: "3",
    slug: "bourse-master-informatique-ia-canada",
    title: "Bourse de Recherche en Cybersécurité et IA",
    organization: "Institut Panafricain & Universités Partenaires",
    country: "Canada",
    level: "Master",
    funding: "FULLY_FUNDED",
    daysLeft: 60,
  },
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const currentLang = (i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale) as Locale;
  const dict: Dictionary = await getDictionary(currentLang);

  const categories = [
    { title: dict.categories.scholarships, icon: GraduationCap, href: `/${currentLang}/opportunities?type=scholarship`, color: "bg-blue-50 text-blue-900 border-blue-200" },
    { title: dict.categories.fellowships, icon: Award, href: `/${currentLang}/opportunities?type=fellowship`, color: "bg-purple-50 text-purple-900 border-purple-200" },
    { title: dict.categories.grants, icon: DollarSign, href: `/${currentLang}/opportunities?type=grant`, color: "bg-amber-50 text-amber-800 border-amber-200" },
    { title: dict.categories.internships, icon: Briefcase, href: `/${currentLang}/opportunities?type=internship`, color: "bg-emerald-50 text-emerald-800 border-emerald-200" },
    { title: dict.categories.conferences, icon: Users, href: `/${currentLang}/opportunities?type=conference`, color: "bg-rose-50 text-rose-800 border-rose-200" },
    { title: dict.categories.trainings, icon: BookOpen, href: `/${currentLang}/opportunities?type=training`, color: "bg-teal-50 text-teal-800 border-teal-200" },
  ];

  return (
    <div className="space-y-16 pb-20">
      <section className="relative overflow-hidden bg-linear-to-b from-slate-900 via-blue-950 to-slate-950 text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent"></div>
        <div className="relative max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs sm:text-sm font-semibold text-teal-300">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{dict.hero.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
            {dict.hero.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {dict.hero.subtitle}
          </p>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-2 sm:p-3 shadow-2xl flex flex-col sm:flex-row items-center gap-2 border border-white/20">
            <div className="flex items-center gap-3 w-full px-3 text-slate-400">
              <Search className="w-5 h-5 text-blue-900 shrink-0" />
              <input
                type="text"
                placeholder={dict.hero.search_placeholder}
                className="w-full bg-transparent text-slate-800 text-sm focus:outline-none placeholder:text-slate-400 font-medium"
              />
            </div>
            <Link
              href={`/${currentLang}/opportunities`}
              className="w-full sm:w-auto px-8 py-3.5 bg-blue-900 hover:bg-slate-900 text-white text-sm font-bold rounded-xl transition-colors shrink-0 text-center shadow-md"
            >
              {dict.hero.search_btn}
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs sm:text-sm">
            <Link
              href={`/${currentLang}/opportunities`}
              className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold transition-all shadow-lg hover:shadow-teal-500/25 flex items-center gap-2"
            >
              <span>{dict.hero.btn_explore}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={`/${currentLang}/opportunities?funding=fully_funded`}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition-all backdrop-blur"
            >
              {dict.hero.btn_scholarships}
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{dict.categories.title}</h2>
          <p className="text-sm text-slate-600">{dict.categories.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Link
                key={idx}
                href={cat.href}
                className="group flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-slate-200/80 hover:shadow-lg hover:border-blue-900/30 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 border ${cat.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-900 transition-colors">
                  {cat.title}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterBox />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{dict.featured.title}</h2>
            <p className="text-sm text-slate-600 mt-1">{dict.featured.subtitle}</p>
          </div>
          <Link
            href={`/${currentLang}/opportunities`}
            className="text-xs font-bold text-blue-900 hover:text-teal-600 flex items-center gap-1.5 transition-colors"
          >
            <span>{dict.navigation.explore}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleOpportunities.map((op) => (
            <OpportunityCard key={op.id} item={op} lang={currentLang} dict={dict} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/30">
              <ShieldCheck className="w-4 h-4" />
              {dict.ava_about.badge}
            </span>
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                {dict.ava_about.title}
              </h2>
              <p className="text-xs sm:text-sm text-teal-400 font-semibold">{dict.ava_about.subtitle}</p>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{dict.ava_about.desc}</p>
            <div className="pt-2">
              <Link
                href={`/${currentLang}/about`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-teal-50 transition-colors shadow-md"
              >
                <span>{dict.ava_about.btn_learn_more}</span>
                <ArrowRight className="w-4 h-4 text-teal-600" />
              </Link>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 backdrop-blur">
            <div className="w-10 h-10 rounded-lg bg-teal-600/30 text-teal-400 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">{dict.ava_about.mission_title}</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {dict.ava_about.mission_desc}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
