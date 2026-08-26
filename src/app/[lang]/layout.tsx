import type { Metadata } from "next";
import { i18n, type Locale } from "@/config/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DocumentLocale from "@/components/layout/DocumentLocale";

export const metadata: Metadata = {
  title: "AVA Opportunities | African Visionaries Alliance",
  description: "Bourses, stages, formations, fellowships, grants et opportunités internationales réunis sur une seule plateforme.",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const currentLang = (i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale) as Locale;
  const dict = await getDictionary(currentLang);
  const isRtl = currentLang === "ar";

  return (
    <>
      <DocumentLocale lang={currentLang} />
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 antialiased" dir={isRtl ? "rtl" : "ltr"}>
        <Header lang={currentLang} dict={dict} />
        <div className="flex-1">{children}</div>
        <Footer lang={currentLang} dict={dict} />
      </div>
    </>
  );
}
