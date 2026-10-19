import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { pageMetadata } from "@/lib/seo";
import { getDict } from "@/data/i18n-dict";

export const metadata: Metadata = pageMetadata({
  locale: "ar",
  path: "/",
  title: getDict("ar").home.title,
  description: getDict("ar").home.description,
});

export default function Page() {
  return <HomePage locale="ar" />;
}
