import type { Metadata } from "next";
import CityPage from "@/components/CityPage";
import { pageMetadata } from "@/lib/seo";
import { getDict } from "@/data/i18n-dict";

const locale = "ar" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/location-voiture-merzouga",
  title: getDict(locale).cities.merzougaTitle,
  description: getDict(locale).cities.merzougaDesc,
});

export default function Page() {
  return <CityPage locale={locale} city="merzouga" />;
}
