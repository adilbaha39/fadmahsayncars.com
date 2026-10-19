import type { Metadata } from "next";
import FaqPage from "@/components/FaqPage";
import { pageMetadata } from "@/lib/seo";
import { getDict } from "@/data/i18n-dict";

const locale = "en" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/faq",
  title: getDict(locale).faq.title,
  description: getDict(locale).faq.description,
});

export default function Page() {
  return <FaqPage locale={locale} />;
}
