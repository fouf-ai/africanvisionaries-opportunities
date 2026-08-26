"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Mail, ArrowRight, AlertCircle } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const params = useParams<{ lang?: string }>();
  const lang = params?.lang || "fr";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    const response = await signIn("credentials", { email, password, redirect: false });
    if (response?.error) {
      setError(response.error);
      setLoading(false);
      return;
    }

    router.push(`/${lang}`);
    router.refresh();
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-10 h-10 rounded-xl bg-blue-900 flex items-center justify-center text-white font-black mx-auto shadow-md">AVA</div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Connexion</h1>
          <p className="text-xs text-slate-500">Accédez à votre espace AVA Opportunities</p>
        </div>

        {error && <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2"><AlertCircle className="w-4 h-4 shrink-0" /><span>{error}</span></div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1.5">Adresse Email</label>
            <div className="relative"><Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" /><input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="votre.email@exemple.com" className="w-full pl-10 pr-4 py-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900/20 text-slate-900 font-medium" /></div>
          </div>
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1.5">Mot de passe</label>
            <div className="relative"><Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" /><input type="password" required value={password} onChange={(event) => setPassword(event.target.value)} placeholder="••••••••" className="w-full pl-10 pr-4 py-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900/20 text-slate-900 font-medium" /></div>
          </div>
          <button type="submit" disabled={loading} className="w-full py-3.5 bg-blue-900 hover:bg-slate-900 text-white font-bold text-xs rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 disabled:opacity-50"><span>{loading ? "Connexion en cours..." : "Se connecter"}</span><ArrowRight className="w-4 h-4" /></button>
        </form>

        <div className="text-center pt-4 border-t border-slate-100 text-xs text-slate-500">Pas encore de compte ?{" "}<Link href={`/${lang}/register`} className="font-bold text-blue-900 hover:text-teal-600 transition-colors">Créer un compte</Link></div>
      </div>
    </div>
  );
}
