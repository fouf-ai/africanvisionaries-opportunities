import { teamStructure } from "@/lib/team-data";
import { Users, ShieldCheck, UserCheck } from "lucide-react";

export default async function TeamPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  await params;
  const executiveCouncil = teamStructure.filter((member) => member.group === "EXECUTIVE_COUNCIL");
  const secretariat = teamStructure.filter((member) => member.group === "SECRETARIAT");
  const specialReps = teamStructure.filter((member) => member.group === "SPECIAL_REPRESENTATIVES");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-lg"><div className="max-w-3xl space-y-4"><span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/30"><Users className="w-3.5 h-3.5" />Gouvernance Statutaire AVA</span><h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Structure &amp; Équipe Exécutive</h1><p className="text-slate-300 text-sm leading-relaxed">L&apos;organigramme officiel d&apos;African Visionaries Alliance est structuré selon les statuts de l&apos;organisation. Les nominations officielles sont publiées au fur et à mesure des validations statutaires.</p></div></div>

      <TeamSection title="Conseil Exécutif" icon={ShieldCheck} members={executiveCouncil} cardClass="lg:grid-cols-4" />
      <TeamSection title="Secrétariat & Directions Opérationnelles" icon={Users} members={secretariat} cardClass="sm:grid-cols-3" />
      <TeamSection title="Représentations Thématiques & Jeunesse" icon={ShieldCheck} members={specialReps} cardClass="sm:grid-cols-2" />
    </div>
  );
}

function TeamSection({
  title,
  icon: Icon,
  members,
  cardClass,
}: {
  title: string;
  icon: typeof ShieldCheck;
  members: typeof teamStructure;
  cardClass: string;
}) {
  return (
    <section className="space-y-6"><div className="flex items-center gap-2 border-b border-slate-200 pb-3"><Icon className="w-5 h-5 text-teal-600" /><h2 className="text-xl font-extrabold text-slate-900">{title}</h2></div><div className={`grid grid-cols-1 ${cardClass} gap-6`}>{members.map((member) => <div key={member.id} className="bg-white rounded-2xl border border-slate-200/80 p-6 space-y-3 shadow-xs hover:border-teal-600/30 transition-colors">{title === "Conseil Exécutif" && <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-900"><UserCheck className="w-7 h-7" /></div>}<span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md uppercase tracking-wider block w-fit">{member.roleTitleFr}</span><h3 className="font-bold text-slate-900 text-sm">{member.name}</h3><p className="text-xs text-slate-500 leading-relaxed">{member.bioFr}</p></div>)}</div></section>
  );
}
