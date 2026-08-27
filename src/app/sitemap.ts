import type { MetadataRoute } from "next";
import { i18n } from "@/config/i18n";
import { opportunitiesList } from "@/lib/opportunities-data";
import { countriesList } from "@/lib/countries-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://africanvisionaries.org";
  const sitemapEntries: MetadataRoute.Sitemap = [];

  const staticRoutes = ["", "/opportunities", "/countries", "/about", "/team", "/contact"];

  for (const locale of i18n.locales) {
    for (const route of staticRoutes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" || route === "/opportunities" ? "daily" : "weekly",
        priority: route === "" ? 1.0 : 0.8,
      });
    }

    for (const opportunity of opportunitiesList) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/opportunities/${opportunity.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      });
    }

    for (const country of countriesList) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/countries/${country.code.toLowerCase()}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }

  return sitemapEntries;
}
