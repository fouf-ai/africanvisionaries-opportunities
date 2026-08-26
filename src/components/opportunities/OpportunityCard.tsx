import Link from "next/link";
import { MapPin, GraduationCap, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import type { Locale } from "@/config/i18n";
import type { Dictionary } from "@/lib/get-dictionary";

export interface OpportunityItem {
  id: string;
  slug: string;
  title: string;
  organization: string;
  country: string;
  level: string;
  funding: "FULLY_FUNDED" | "PARTIALLY_FUNDED" | "FREE" | "PAID";
  daysLeft: number;
}

export default function OpportunityCard({
  item,
  lang,
  dict,
}: {
  item: OpportunityItem;
  lang: Locale;
  dict: Dictionary;
}) {
  const isFullyFunded = item.funding === "FULLY_FUNDED";

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between hover:shadow-xl hover:border-blue-900/30 transition-all duration-300">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
              isFullyFunded
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                : "bg-blue-50 text-blue-700 border border-blue-200"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            {isFullyFunded ? dict.featured.fully_funded : dict.featured.partially_funded}
          </span>
          <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-md flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {item.daysLeft} {dict.featured.days_left}
          </span>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-2 leading-snug">
            {item.title}
          </h3>
          <p className="text-xs font-medium text-slate-500 mt-1">{item.organization}</p>
        </div>

        <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-600 font-medium">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span className="truncate">{item.country}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-blue-900 shrink-0" />
            <span className="truncate">{item.level}</span>
          </div>
        </div>
      </div>

      <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          href={`/${lang}/opportunities/${item.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-teal-600 transition-colors"
        >
          <span>{dict.featured.view_details}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
