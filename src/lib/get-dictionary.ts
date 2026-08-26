import "server-only";
import type { Locale } from "@/config/i18n";

export type Dictionary = {
  navigation: {
    home: string;
    opportunities: string;
    scholarships: string;
    countries: string;
    about: string;
    team: string;
    contact: string;
    explore: string;
    find_scholarship: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    search_placeholder: string;
    search_btn: string;
    btn_explore: string;
    btn_scholarships: string;
  };
  categories: {
    title: string;
    subtitle: string;
    scholarships: string;
    fellowships: string;
    grants: string;
    internships: string;
    conferences: string;
    trainings: string;
  };
  featured: {
    title: string;
    subtitle: string;
    fully_funded: string;
    partially_funded: string;
    days_left: string;
    view_details: string;
    apply_official: string;
  };
  ava_about: {
    badge: string;
    title: string;
    subtitle: string;
    desc: string;
    mission_title: string;
    mission_desc: string;
    btn_learn_more: string;
  };
  footer: {
    tagline: string;
    initiative: string;
    quick_links: string;
    categories: string;
    legal: string;
    all_rights: string;
  };
};

const dictionaries = {
  fr: () => import("@/dictionaries/fr.json").then((module) => module.default),
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  ar: () => import("@/dictionaries/ar.json").then((module) => module.default),
  es: () => import("@/dictionaries/es.json").then((module) => module.default),
  pt: () => import("@/dictionaries/pt.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale] ? await dictionaries[locale]() : await dictionaries.fr();
};
