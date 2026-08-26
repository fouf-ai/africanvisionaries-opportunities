"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Save, ShieldCheck } from "lucide-react";

const inputClassName = "w-full px-4 py-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900/20 text-slate-900 font-medium";

export default function NewOpportunityPage() {
  const router = useRouter();
  const params = useParams<{ lang?: string }>();
  const lang = params?.lang || "fr";
  const [form, setForm] = useState({
    title: "", organization: "", country: "", category: "scholarships", funding: "FULLY_FUNDED",
    targetLevel: "MASTER", fieldOfStudy: "", deadline: "", officialLink: "", summary: "", description: "",
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setStatusMessage("");

    if (!form.officialLink.startsWith("http://") && !form.officialLink.startsWith("https://")) {
      setStatusMessage("Le lien officiel doit obligatoirement commencer par http:// ou https://");
      setLoading(false);
      return;
    }

    window.setTimeout(() => {
      setLoading(false);
      setStatusMessage("Opportunité enregistrée avec succès dans le workflow de vérification !");
      window.setTimeout(() => router.push(`/${lang}/admin`), 1500);
    }, 1000);
  };

  return (
    <div className="max-w-4xl space-y-6">
      <Link href={`/${lang}/admin`} className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-900 transition-colors">
        <ChevronLeft className="w-4 h-4" /><span>Retour au tableau de bord</span>
      </Link>

      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Ajouter une nouvelle opportunité</h1>
          <p className="text-xs text-slate-500 mt-1">Les opportunités créées intègrent le circuit de vérification avant publication publique.</p>
        </div>

        {statusMessage && <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-xs font-medium flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" /><span>{statusMessage}</span></div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">Titre de l&apos;opportunité *</label>
              <input required value={form.title} onChange={(event) => updateField("title", event.target.value)} placeholder="Ex: Bourse d'Excellence Master Cybersécurité" className={inputClassName} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><label className="text-xs font-bold text-slate-700 block mb-1.5">Organisation / Institution émettrice *</label><input required value={form.organization} onChange={(event) => updateField("organization", event.target.value)} placeholder="Ex: Confédération Suisse / Université Laval" className={inputClassName} /></div>
              <div><label className="text-xs font-bold text-slate-700 block mb-1.5">Pays d&apos;accueil *</label><input required value={form.country} onChange={(event) => updateField("country", event.target.value)} placeholder="Ex: Suisse, Canada, Centrafrique..." className={inputClassName} /></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div><label className="text-xs font-bold text-slate-700 block mb-1.5">Catégorie *</label><select value={form.category} onChange={(event) => updateField("category", event.target.value)} aria-label="Catégorie de l'opportunité" className={inputClassName}><option value="scholarships">Bourse d&apos;études</option><option value="fellowships">Fellowship &amp; Recherche</option><option value="grants">Grant &amp; Financement</option><option value="internships">Stage &amp; Emploi</option><option value="conferences">Forum &amp; Conférence</option><option value="trainings">Formation</option></select></div>
              <div><label className="text-xs font-bold text-slate-700 block mb-1.5">Financement *</label><select value={form.funding} onChange={(event) => updateField("funding", event.target.value)} aria-label="Type de financement" className={inputClassName}><option value="FULLY_FUNDED">Entièrement financé</option><option value="PARTIALLY_FUNDED">Partiellement financé</option><option value="FREE">Gratuit</option><option value="PAID">Rémunéré</option></select></div>
              <div><label className="text-xs font-bold text-slate-700 block mb-1.5">Niveau ciblé *</label><select value={form.targetLevel} onChange={(event) => updateField("targetLevel", event.target.value)} aria-label="Niveau académique ciblé" className={inputClassName}><option value="MASTER">Master</option><option value="PHD">Doctorat / Ph.D.</option><option value="BACHELOR">Licence / Bachelor</option><option value="YOUTH">Jeune Leader</option><option value="PROFESSIONAL">Professionnel</option></select></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><label className="text-xs font-bold text-slate-700 block mb-1.5">Domaine d&apos;études / Thématique *</label><input required value={form.fieldOfStudy} onChange={(event) => updateField("fieldOfStudy", event.target.value)} placeholder="Ex: Informatique, Santé, Économie..." className={inputClassName} /></div>
              <div><label className="text-xs font-bold text-slate-700 block mb-1.5">Date limite de candidature *</label><input type="date" required value={form.deadline} onChange={(event) => updateField("deadline", event.target.value)} className={inputClassName} /></div>
            </div>

            <div><label className="text-xs font-bold text-slate-700 block mb-1.5">Lien officiel de candidature (URL obligatoire) *</label><input type="url" required value={form.officialLink} onChange={(event) => updateField("officialLink", event.target.value)} placeholder="https://organisme-officiel.org/candidatures" className={inputClassName} /></div>
            <div><label className="text-xs font-bold text-slate-700 block mb-1.5">Résumé court *</label><textarea required rows={2} value={form.summary} onChange={(event) => updateField("summary", event.target.value)} placeholder="Bref résumé en 2 phrases pour l'affichage dans les cartes..." className={inputClassName} /></div>
            <div><label className="text-xs font-bold text-slate-700 block mb-1.5">Description complète détaillée *</label><textarea required rows={4} value={form.description} onChange={(event) => updateField("description", event.target.value)} placeholder="Détails du programme, objectifs, critères d'éligibilité et couverture financière..." className={inputClassName} /></div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
            <Link href={`/${lang}/admin`} className="px-5 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors">Annuler</Link>
            <button type="submit" disabled={loading} className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-900 hover:bg-slate-900 text-white text-xs font-bold rounded-xl shadow-md transition-colors disabled:opacity-50"><Save className="w-4 h-4 text-teal-400" /><span>{loading ? "Enregistrement..." : "Enregistrer l&apos;opportunité"}</span></button>
          </div>
        </form>
      </div>
    </div>
  );
}
