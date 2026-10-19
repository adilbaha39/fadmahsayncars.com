import { MetadataRoute } from "next";
import { cars } from "@/data/cars";
import { locales, defaultLocale, localizedPath } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://fadmahsayncars.com";
  const now = new Date();

  const paths = [
    "/",
    "/location-voiture-marrakech",
    "/location-voiture-merzouga",
    "/location-voiture-errachidia",
    "/location-voiture-aller-simple",
    "/faq",
    "/conditions",
    "/contact",
    "/blog",
    "/blog/marrakech-merzouga",
    "/blog/errachidia-merzouga",
    ...cars.map((c) => `/vehicules/${c.slug}`),
  ];

  const entries: MetadataRoute.Sitemap = [];
  for (const path of paths) {
    for (const locale of locales) {
      const url = `${base}${localizedPath(path, locale)}`;
      entries.push({
        url,
        lastModified: now,
        changeFrequency: path === "/" ? "weekly" : "monthly",
        priority: path === "/" ? 1 : path.startsWith("/location") ? 0.9 : 0.7,
      });
    }
  }
  return entries;
}
