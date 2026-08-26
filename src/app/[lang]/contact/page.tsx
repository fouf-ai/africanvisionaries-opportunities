"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, HelpCircle, FileCheck, GraduationCap, ExternalLink } from "lucide-react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const inputClassName = "w-full px-4 py-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900/20 text-slate-900 font-medium";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    window.setTimeout(() => setForm({ name: "", email: "", subject: "", message: "" }), 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-lg space-y-4"><span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/30"><HelpCircle className="w-3.5 h-3.5" />Écoute, Orientation &amp; Réseau</span><h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Contact &amp; Accompagnement AVA</h1><p className="text-slate-300 text-sm max-w-2xl leading-relaxed">Une question sur une bourse, un projet d&apos;urgence sociale, un partenariat ou un accompagnement de candidature ? Contactez notre secrétariat ou suivez nos activités sur nos plateformes officielles.</p></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        <div className="space-y-6 lg:col-span-1">
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-6 shadow-xs"><h2 className="text-lg font-black text-slate-900">Coordonnées Directes</h2><div className="space-y-4 text-xs text-slate-600">
            <ContactDetail icon={MapPin} title="Siège Statutaire">Bangui, République Centrafricaine</ContactDetail>
            <ContactDetail icon={Mail} title="Courriel Institutionnel"><a href="mailto:contact@africanvisionaries.org" className="hover:text-teal-700 font-medium text-slate-800">contact@africanvisionaries.org</a></ContactDetail>
            <ContactDetail icon={Phone} title="Téléphone &amp; WhatsApp Direct"><a href="tel:+23672545121" className="hover:text-amber-800 font-semibold text-slate-800 block">+236 72 54 51 21</a><a href="tel:+23672624006" className="text-slate-500 hover:text-slate-700 font-normal text-[11px] block mt-0.5">Ligne siège : +236 72 62 40 06</a></ContactDetail>
          </div>
          <div className="pt-6 border-t border-slate-100 space-y-3"><h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Nos Réseaux Sociaux</h3><div className="flex flex-col gap-2.5">
            <SocialLink href="https://www.facebook.com/AfricanVisionariesAlliance" label="Facebook AVA" icon={FaFacebook} className="bg-blue-50 text-blue-700 hover:bg-blue-100" />
            <SocialLink href="https://www.linkedin.com/company/african-visionaries-alliance/" label="LinkedIn Officiel" icon={FaLinkedin} className="bg-sky-50 text-sky-800 hover:bg-sky-100" />
            <SocialLink href="https://www.youtube.com/@AfricanVisionariesAlliance" label="Chaîne YouTube AVA" icon={FaYoutube} className="bg-rose-50 text-rose-700 hover:bg-rose-100" />
          </div></div></div>

          <div className="bg-gradient-to-br from-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 border border-blue-900 shadow-md"><div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider"><GraduationCap className="w-4 h-4" /><span>Pôle Candidats &amp; Bourses</span></div><h3 className="text-base font-black">Besoin d&apos;un accompagnement ?</h3><ul className="space-y-2 text-xs text-slate-300"><li className="flex items-center gap-2"><FileCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" /><span>Relecture de CV et lettres de motivation</span></li><li className="flex items-center gap-2"><FileCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" /><span>Vérification d&apos;éligibilité aux bourses</span></li><li className="flex items-center gap-2"><FileCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" /><span>Orientation universitaire personnalisée</span></li></ul></div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-xs lg:col-span-2 space-y-6"><div className="space-y-1"><h2 className="text-xl font-black text-slate-900">Envoyez-nous un message</h2><p className="text-xs text-slate-500">Notre équipe administrative et nos points focaux vous répondent rapidement.</p></div>{sent && <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" /><span>Merci ! Votre message a bien été transmis au secrétariat d&apos;AVA.</span></div>}<form onSubmit={handleSubmit} className="space-y-4"><div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label className="text-xs font-bold text-slate-700 block mb-1.5">Votre Nom complet *</label><input required value={form.name} onChange={(event) => updateField("name", event.target.value)} placeholder="Ex: Jean-Lucien FOUF" className={inputClassName} /></div><div><label className="text-xs font-bold text-slate-700 block mb-1.5">Adresse Email *</label><input type="email" required value={form.email} onChange={(event) => updateField("email", event.target.value)} placeholder="votre.email@domaine.com" className={inputClassName} /></div></div><div><label className="text-xs font-bold text-slate-700 block mb-1.5">Objet de la demande *</label><input required value={form.subject} onChange={(event) => updateField("subject", event.target.value)} placeholder="Ex: Demande d'orientation bourse Master / Partenariat" className={inputClassName} /></div><div><label className="text-xs font-bold text-slate-700 block mb-1.5">Votre Message *</label><textarea required rows={5} value={form.message} onChange={(event) => updateField("message", event.target.value)} placeholder="Détaillez votre projet, vos études ou votre demande..." className={inputClassName} /></div><button type="submit" className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-900 hover:bg-slate-900 text-white font-bold text-xs rounded-xl shadow-md transition-colors"><Send className="w-4 h-4 text-teal-400" /><span>Transmettre le message</span></button></form></div>
      </div>
    </div>
  );
}

function ContactDetail({ icon: Icon, title, children }: { icon: typeof MapPin; title: string; children: React.ReactNode }) {
  return <div className="flex items-start gap-3"><div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 border border-blue-100"><Icon className="w-4 h-4" /></div><div><span className="font-bold text-slate-800 block">{title}</span><span>{children}</span></div></div>;
}

function SocialLink({ href, label, icon: Icon, className }: { href: string; label: string; icon: typeof FaFacebook; className: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-between p-2.5 rounded-xl transition-colors text-xs font-bold ${className}`}><div className="flex items-center gap-2"><Icon className="w-4 h-4" /><span>{label}</span></div><ExternalLink className="w-3.5 h-3.5" /></a>;
}
