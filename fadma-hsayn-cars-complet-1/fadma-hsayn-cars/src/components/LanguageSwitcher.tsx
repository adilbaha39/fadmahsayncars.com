"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeNames, stripLocale, localizedPath, type Locale } from "@/lib/i18n";

export default function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname() || "/";
  const pathWithoutLocale = stripLocale(pathname);

  return (
    <div className="flex items-center gap-1 text-[12px] font-semibold">
      {locales.map((loc) => (
        <Link
          key={loc}
          href={localizedPath(pathWithoutLocale, loc)}
          className={`px-1.5 py-0.5 rounded ${
            loc === current
              ? "bg-[var(--blue)] text-white"
              : "text-gray-600 hover:text-[var(--red)]"
          }`}
          hrefLang={loc}
        >
          {loc.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
