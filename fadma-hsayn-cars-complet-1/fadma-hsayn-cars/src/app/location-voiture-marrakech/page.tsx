import type { Metadata } from "next";
import CityPage from "@/components/CityPage";
import { pageMetadata } from "@/lib/seo";
import { getDict } from "@/data/i18n-dict";

const locale = "fr" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/location-voiture-marrakech",
  title: getDict(locale).cities.marrakechTitle,
  description: getDict(locale).cities.marrakechDesc,
});

export default function Page() {
  return <CityPage locale={locale} city="marrakech" />;
}
