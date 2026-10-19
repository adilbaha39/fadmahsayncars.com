export const locales = ["fr", "en", "ar", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  ar: "العربية",
  es: "Español",
};

export const localeDir: Record<Locale, "ltr" | "rtl"> = {
  fr: "ltr",
  en: "ltr",
  ar: "rtl",
  es: "ltr",
};

export const localeOg: Record<Locale, string> = {
  fr: "fr_MA",
  en: "en_US",
  ar: "ar_MA",
  es: "es_ES",
};

/** Path without leading locale prefix */
export function stripLocale(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] && locales.includes(parts[0] as Locale) && parts[0] !== defaultLocale) {
    return "/" + parts.slice(1).join("/") || "/";
  }
  return pathname || "/";
}

/** Build localized href */
export function localizedPath(path: string, locale: Locale): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return clean === "" ? "/" : clean;
  if (clean === "/") return `/${locale}`;
  return `/${locale}${clean}`;
}

export function isLocale(s: string): s is Locale {
  return locales.includes(s as Locale);
}
