import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";
import { pageMetadata } from "@/lib/seo";
import { getDict } from "@/data/i18n-dict";

const locale = "ar" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/contact",
  title: getDict(locale).contact.title,
  description: getDict(locale).contact.description,
});

export default function Page() {
  return <ContactPage locale={locale} />;
}
