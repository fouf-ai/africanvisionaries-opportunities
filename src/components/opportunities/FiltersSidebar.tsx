"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { Locale } from "@/config/i18n";
import { Filter, RotateCcw } from "lucide-react";

export default function FiltersSidebar({ lang }: { lang: Locale }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentType = searchParams.get("type") || "";
  const currentFunding = searchParams.get("funding") || "";
  const currentLevel = searchParams.get("level") || "";

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    const query = params.toString();
    router.push(`/${lang}/opportunities${query ? `?${query}` : ""}`);
  };

  const resetFilters = () => {
    router.push(`/${lang}/opportunities`);
  };

  return (
    <aside className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6 shadow-xs">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
          <Filter className="w-4 h-4 text-blue-900" />
          <span>Filtres de recherche</span>
        </div>
        {(currentType || currentFunding || currentLevel) && (
          <button
            onClick={resetFilters}
            className="text-xs text-rose-600 hover:text-rose-700 font-semibold flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Réinitialiser</span>
          </button>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Type de programme</label>
        <select
          value={currentType}
          onChange={(event) => updateParam("type", event.target.value)}
          aria-label="Filtrer par type de programme"
          className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-900/20"
        >
          <option value="">Tous les types</option>
          <option value="scholarships">Bourses d&apos;études</option>
          <option value="fellowships">Fellowships & Recherche</option>
          <option value="grants">Grants & Financements</option>
          <option value="internships">Stages & Emplois</option>
          <option value="conferences">Forums & Conférences</option>
          <option value="trainings">Formations & Certifications</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Type de financement</label>
        <select
          value={currentFunding}
          onChange={(event) => updateParam("funding", event.target.value)}
          aria-label="Filtrer par type de financement"
          className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-900/20"
        >
          <option value="">Tous les financements</option>
          <option value="FULLY_FUNDED">Entièrement financé</option>
          <option value="PARTIALLY_FUNDED">Partiellement financé</option>
          <option value="FREE">Gratuit</option>
          <option value="PAID">Rémunéré</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Niveau ciblé</label>
        <select
          value={currentLevel}
          onChange={(event) => updateParam("level", event.target.value)}
          aria-label="Filtrer par niveau académique"
          className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-900/20"
        >
          <option value="">Tous les niveaux</option>
          <option value="HIGH_SCHOOL">Baccalauréat</option>
          <option value="BACHELOR">Licence / Bachelor</option>
          <option value="MASTER">Master</option>
          <option value="PHD">Doctorat / Ph.D.</option>
          <option value="YOUTH">Jeune Leader</option>
          <option value="PROFESSIONAL">Professionnel / Chercheur</option>
        </select>
      </div>
    </aside>
  );
}
