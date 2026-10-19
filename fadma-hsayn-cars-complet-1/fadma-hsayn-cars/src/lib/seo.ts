import type { Metadata } from "next";
import { defaultLocale, locales, localizedPath, localeOg, type Locale } from "./i18n";

const BASE = "https://fadmahsayncars.com";

export function buildAlternates(path: string): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const loc of locales) {
    languages[loc] = `${BASE}${localizedPath(path, loc)}`;
  }
  languages["x-default"] = `${BASE}${localizedPath(path, defaultLocale)}`;
  return {
    canonical: undefined, // set per page
    languages,
  };
}

export function pageMetadata(opts: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  image?: string;
}): Metadata {
  const url = `${BASE}${localizedPath(opts.path, opts.locale)}`;
  const alts = buildAlternates(opts.path);
  return {
    title: opts.title,
    description: opts.description,
    alternates: {
      canonical: url,
      languages: alts?.languages,
    },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      locale: localeOg[opts.locale],
      siteName: "Fadma Hsayn Cars",
      type: "website",
      images: opts.image ? [opts.image] : ["/images/location-voiture-aeroport-maroc.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
    },
  };
}
