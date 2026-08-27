import { officialTeamStructure } from "@/lib/team-data";
import { Users, ShieldCheck, HeartHandshake, Globe2, UserCheck } from "lucide-react";
import SafeImage from "@/components/common/SafeImage";

export default async function TeamPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  await params;
  const executiveCouncil = officialTeamStructure.filter((member) => member.category === "EXECUTIVE_COUNCIL");
  const secretariat = officialTeamStructure.filter((member) => member.category === "SECRETARIAT");
  const regionalReps = officialTeamStructure.filter((member) => member.category === "REGIONAL_REPS");
  const specialReps = officialTeamStructure.filter((member) => member.category === "SPECIAL_REPS");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-lg space-y-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/30"><Users className="w-3.5 h-3.5" />Organigramme Statutaire Officiel</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Gouvernance &amp; Équipe Exécutive d&apos;AVA</h1>
        <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">Structure démocratique et collégiale conforme aux Statuts d&apos;African Visionaries Alliance. Les nominations sont publiées au fur et à mesure des validations statutaires de l&apos;Assemblée Générale.</p>
      </div>

      <TeamSection title="Conseil Exécutif" icon={ShieldCheck} members={executiveCouncil} gridClass="sm:grid-cols-2 lg:grid-cols-4" tone="teal" />
      <TeamSection title="Secrétariat & Directions Opérationnelles" icon={Users} members={secretariat} gridClass="sm:grid-cols-3" tone="blue" />
      <TeamSection title="Représentants Régionaux (5 Régions d'Afrique)" icon={Globe2} members={regionalReps} gridClass="sm:grid-cols-2 lg:grid-cols-3" tone="amber" />
      <TeamSection title="Représentations Thématiques (Jeunesse & Genre)" icon={HeartHandshake} members={specialReps} gridClass="sm:grid-cols-2 lg:grid-cols-3" tone="purple" />
    </div>
  );
}

function TeamSection({
  title,
  icon: Icon,
  members,
  gridClass,
  tone,
}: {
  title: string;
  icon: typeof ShieldCheck;
  members: typeof officialTeamStructure;
  gridClass: string;
  tone: "teal" | "blue" | "amber" | "purple";
}) {
  const badgeClass = { teal: "text-teal-700 bg-teal-50", blue: "text-blue-900 bg-blue-50", amber: "text-amber-800 bg-amber-50", purple: "text-purple-900 bg-purple-50" }[tone];
  return <section className="space-y-6"><div className="flex items-center gap-2 border-b border-slate-200 pb-3"><Icon className="w-5 h-5 text-teal-600" /><h2 className="text-xl font-extrabold text-slate-900">{title}</h2></div><div className={`grid grid-cols-1 ${gridClass} gap-6`}>{members.map((member) => <div key={member.id} className="bg-white rounded-2xl border border-slate-200/80 p-6 space-y-3 shadow-xs"><div className="flex items-center gap-4"><div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden shrink-0 shadow-inner"><SafeImage src={member.photoUrl || ""} alt={member.name} className="w-full h-full object-cover" fallbackIcon={<UserCheck className="w-7 h-7 text-slate-400" />} /></div><div><span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider block w-fit mb-1 ${badgeClass}`}>{member.roleTitleFr}</span><h3 className="font-bold text-slate-900 text-sm">{member.name}</h3></div></div><p className="text-xs text-slate-500 leading-relaxed">{member.bioFr}</p></div>)}</div></section>;
}
