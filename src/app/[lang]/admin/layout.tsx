import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { i18n, type Locale } from "@/config/i18n";
import { authOptions } from "@/lib/auth";
import { LayoutDashboard, Compass, Globe2, Users, ArrowLeft, PlusCircle } from "lucide-react";

export default async function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const currentLang = (i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale) as Locale;
  const session = await getServerSession(authOptions);

  if (!session?.user || session.user.role === "USER") {
    redirect(`/${currentLang}/login`);
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-slate-950 text-slate-300 p-6 flex flex-col justify-between shrink-0">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-600 text-white font-extrabold flex items-center justify-center text-sm">AVA</div>
            <div>
              <span className="font-extrabold text-white text-sm block">Espace Gestion</span>
              <span className="text-[10px] text-teal-400 font-semibold uppercase tracking-wider">Administration</span>
            </div>
          </div>

          <nav className="space-y-1.5 text-xs font-semibold">
            <Link href={`/${currentLang}/admin`} className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/10 text-white hover:bg-white/15 transition-colors">
              <LayoutDashboard className="w-4 h-4 text-teal-400" />
              <span>Tableau de bord</span>
            </Link>
            <Link href={`/${currentLang}/admin/opportunities`} className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
              <Compass className="w-4 h-4" />
              <span>Opportunités</span>
            </Link>
            <Link href={`/${currentLang}/admin/opportunities/new`} className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-teal-600/20 text-teal-300 border border-teal-500/30 hover:bg-teal-600/30 transition-colors">
              <PlusCircle className="w-4 h-4 text-teal-400" />
              <span>Ajouter une opportunité</span>
            </Link>
            <Link href={`/${currentLang}/admin/countries`} className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
              <Globe2 className="w-4 h-4" />
              <span>Gestion des Pays</span>
            </Link>
            <Link href={`/${currentLang}/admin/team`} className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
              <Users className="w-4 h-4" />
              <span>Équipe &amp; Staff</span>
            </Link>
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-900">
          <Link href={`/${currentLang}`} className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Retour au site public</span>
          </Link>
        </div>
      </aside>
      <main className="flex-1 p-6 sm:p-10 max-w-7xl">{children}</main>
    </div>
  );
}
