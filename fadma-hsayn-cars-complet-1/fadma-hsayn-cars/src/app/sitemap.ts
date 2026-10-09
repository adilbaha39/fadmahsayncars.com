import { MetadataRoute } from "next";
import { cars } from "@/data/cars";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://fadmahsayncars.com";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/location-voiture-marrakech`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/location-voiture-merzouga`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/location-voiture-errachidia`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/location-voiture-aller-simple`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/conditions`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog/marrakech-merzouga`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/errachidia-merzouga`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const carPages: MetadataRoute.Sitemap = cars.map((car) => ({
    url: `${base}/vehicules/${car.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...carPages];
}
