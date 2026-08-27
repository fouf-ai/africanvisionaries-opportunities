"use client";

import { useState } from "react";
import { ArrowRight, Bell, CheckCircle2, Mail, Sparkles } from "lucide-react";

const interests = [
  { value: "scholarships", label: "Bourses Master / Doctorat" },
  { value: "internships", label: "Stages" },
  { value: "trainings", label: "Formations" },
  { value: "emergency-funding", label: "Financements d'urgence" },
];

export default function NewsletterBox() {
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState(interests[0].value);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 border border-blue-900/60 p-6 sm:p-8 lg:p-10 text-white shadow-xl">
      <div className="absolute right-8 top-8 text-amber-300/20" aria-hidden="true">
        <Sparkles className="h-20 w-20" />
      </div>
      <div className="relative grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-300">
            <Bell className="h-4 w-4" />
            <span>Alertes AVA</span>
          </div>
          <h2 className="max-w-lg text-2xl font-black tracking-tight sm:text-3xl">
            Ne manquez plus aucune opportunité.
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300">
            Recevez les nouvelles bourses et programmes qui correspondent à votre projet, directement dans votre boîte mail.
          </p>
        </div>

        {submitted ? (
          <div className="flex items-center gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-sm text-emerald-100" role="status">
            <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-300" />
            <span>Votre alerte est activée. À très bientôt dans votre boîte mail.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <label htmlFor="newsletter-email" className="sr-only">Votre adresse email</label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3.5 focus-within:border-teal-400">
                <Mail className="h-4 w-4 shrink-0 text-amber-300" />
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="votre.email@exemple.com"
                  className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-slate-400"
                />
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-5 py-3 text-xs font-bold text-slate-950 transition-colors hover:bg-teal-400">
                <span>S&apos;inscrire</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <label htmlFor="newsletter-interest" className="sr-only">Votre centre d&apos;intérêt</label>
            <select
              id="newsletter-interest"
              value={interest}
              onChange={(event) => setInterest(event.target.value)}
              className="w-full rounded-xl border border-white/15 bg-slate-900 px-3.5 py-3 text-xs font-medium text-slate-200 outline-none focus:border-teal-400"
            >
              {interests.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
            <p className="text-[11px] text-slate-400">Un email utile, vérifié et sans publicité superflue.</p>
          </form>
        )}
      </div>
    </section>
  );
}
