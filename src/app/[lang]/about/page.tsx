import { ShieldCheck, Target, Compass, Building2, Mail, Phone, Globe2, CheckCircle2 } from "lucide-react";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  await params;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-14 text-white border border-slate-800 shadow-xl space-y-6">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/30"><ShieldCheck className="w-4 h-4" />Organisation Panafricaine Indépendante</span>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight max-w-3xl">African Visionaries Alliance (AVA)</h1>
        <p className="text-teal-400 font-semibold text-sm sm:text-base max-w-2xl">Alliance des Visionnaires Africains pour les Réponses aux Urgences Sociales en Afrique</p>
        <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">AVA est une organisation indépendante, non politique et à but non lucratif, initiée et portée par la jeunesse africaine. Notre vocation est d&apos;unir les compétences, de répondre aux urgences sociales et de bâtir des passerelles concrètes vers les opportunités mondiales d&apos;éducation, de leadership et d&apos;innovation.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 space-y-4 shadow-xs"><div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-900 flex items-center justify-center border border-blue-100"><Target className="w-6 h-6" /></div><h2 className="text-xl font-black text-slate-900">Notre Mission</h2><p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Mobiliser la force et l&apos;intelligence de la jeunesse africaine pour concevoir des réponses rapides et structurées aux défis sociaux, éducatifs et sanitaires, tout en ouvrant l&apos;accès sans barrière aux meilleures opportunités de formation et de recherche internationales.</p></div>
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 space-y-4 shadow-xs"><div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100"><Compass className="w-6 h-6" /></div><h2 className="text-xl font-black text-slate-900">Notre Vision</h2><p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Bâtir une Afrique résiliente, solidaire et souveraine où chaque jeune, quel que soit son pays ou son milieu social, dispose des outils numériques, des bourses d&apos;études et de l&apos;accompagnement nécessaire pour accomplir son plein potentiel et servir sa communauté.</p></div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 space-y-8 shadow-xs"><h2 className="text-2xl font-black text-slate-900">Nos Principes Directeurs</h2><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          ["Leadership Jeunesse", "La jeunesse n'est pas seulement bénéficiaire mais actrice centrale et décisionnaire de chaque programme."],
          ["Intégrité & Transparence", "Une éthique rigoureuse dans la vérification des sources, la gestion des partenariats et la publication des données."],
          ["Unité Panafricaine", "Une solidarité active au-delà des frontières nationales, réunissant les talents de toutes les régions du continent."],
        ].map(([title, text]) => <div key={title} className="space-y-2"><div className="flex items-center gap-2 text-blue-900 font-bold text-sm"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /><span>{title}</span></div><p className="text-xs text-slate-600 leading-relaxed">{text}</p></div>)}
      </div></div>

      <div className="bg-slate-950 rounded-3xl p-8 sm:p-12 text-white border border-slate-900 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"><div className="space-y-4"><span className="text-xs font-bold text-teal-400 uppercase tracking-wider">Siège &amp; Représentation</span><h3 className="text-2xl font-black">African Visionaries Alliance</h3><p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Siège statutaire établi à Bangui, République Centrafricaine, avec vocation de déploiement et de coordination sur l&apos;ensemble du continent africain.</p></div><div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3 text-xs text-slate-300">{[[Building2, "Bangui, République Centrafricaine"], [Mail, "contact@africanvisionaries.org"], [Phone, "+236 72 62 40 06"], [Globe2, "africanvisionaries.org"]].map(([Icon, text]) => <div key={String(text)} className="flex items-center gap-3"><Icon className="w-4 h-4 text-teal-400 shrink-0" /><span>{text as string}</span></div>)}</div></div>
    </div>
  );
}
