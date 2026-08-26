import type { MetadataRoute } from "next";
import { i18n } from "@/config/i18n";
import { opportunitiesList } from "@/lib/opportunities-data";
import { countriesList } from "@/lib/countries-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://africanvisionaries.org";
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of i18n.locales) {
    sitemapEntries.push(
      { url: `${baseUrl}/${locale}`, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
      { url: `${baseUrl}/${locale}/opportunities`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
      { url: `${baseUrl}/${locale}/countries`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
      { url: `${baseUrl}/${locale}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
      { url: `${baseUrl}/${locale}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
      { url: `${baseUrl}/${locale}/team`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    );

    for (const opportunity of opportunitiesList) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/opportunities/${opportunity.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
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
