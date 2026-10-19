import type { Metadata } from "next";
import CityPage from "@/components/CityPage";
import { pageMetadata } from "@/lib/seo";
import { getDict } from "@/data/i18n-dict";

const locale = "es" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/location-voiture-aller-simple",
  title: getDict(locale).cities.oneWayTitle,
  description: getDict(locale).cities.oneWayDesc,
});

export default function Page() {
  return <CityPage locale={locale} city="oneWay" />;
}
