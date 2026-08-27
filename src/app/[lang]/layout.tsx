import type { Metadata } from "next";
import { i18n, type Locale } from "@/config/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DocumentLocale from "@/components/layout/DocumentLocale";
import AuthProvider from "@/components/providers/AuthProvider";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const baseUrl = "https://africanvisionaries.org";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "AVA Opportunities | Bourses, Fellowships & Urgences Sociales en Afrique",
      template: "%s | African Visionaries Alliance",
    },
    description: "Plateforme panafricaine officielle centralisant les bourses d'études mondiales vérifiées, formations et opportunités pour la jeunesse africaine.",
    keywords: ["Bourses d'études Afrique", "African Visionaries Alliance", "AVA Opportunities", "Bourses Master Doctorat", "Jeunesse africaine", "Opportunités internationales"],
    authors: [{ name: "African Visionaries Alliance", url: baseUrl }],
    creator: "African Visionaries Alliance",
    publisher: "African Visionaries Alliance",
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        fr: `${baseUrl}/fr`,
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
        es: `${baseUrl}/es`,
        pt: `${baseUrl}/pt`,
      },
    },
    openGraph: {
      type: "website",
      locale: lang,
      url: `${baseUrl}/${lang}`,
      title: "AVA Opportunities | Bourses & Opportunités Internationales",
      description: "Portail officiel d'accès aux bourses d'excellence, financements et urgences sociales pour la jeunesse africaine.",
      siteName: "African Visionaries Alliance",
      images: [{ url: `${baseUrl}/images/logo.png`, width: 800, height: 800, alt: "African Visionaries Alliance Logo" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "AVA Opportunities | African Visionaries Alliance",
      description: "Bourses d'études et opportunités internationales vérifiées pour l'Afrique.",
      images: [`${baseUrl}/images/logo.png`],
    },
    icons: {
      icon: "/images/logo.png",
      shortcut: "/images/logo.png",
      apple: "/images/logo.png",
    },
    verification: {
      google: "soPi60ttuwYnPT66SCUThp6WKS5RGsN8JSuLZ26bvhM",
    },
  };
}

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
      <AuthProvider>
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 antialiased" dir={isRtl ? "rtl" : "ltr"}>
          <Header lang={currentLang} dict={dict} />
          <div className="flex-1">{children}</div>
          <Footer lang={currentLang} dict={dict} />
        </div>
      </AuthProvider>
    </>
  );
}
