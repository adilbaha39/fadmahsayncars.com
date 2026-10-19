import type { Metadata } from "next";
import ConditionsPage from "@/components/ConditionsPage";
import { pageMetadata } from "@/lib/seo";
import { getDict } from "@/data/i18n-dict";

const locale = "en" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/conditions",
  title: getDict(locale).conditions.title,
  description: getDict(locale).conditions.description,
});

export default function Page() {
  return <ConditionsPage locale={locale} />;
}
