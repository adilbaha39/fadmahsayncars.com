import type { Metadata } from "next";
import CityPage from "@/components/CityPage";
import { pageMetadata } from "@/lib/seo";
import { getDict } from "@/data/i18n-dict";

const locale = "ar" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/location-voiture-errachidia",
  title: getDict(locale).cities.errachidiaTitle,
  description: getDict(locale).cities.errachidiaDesc,
});

export default function Page() {
  return <CityPage locale={locale} city="errachidia" />;
}
