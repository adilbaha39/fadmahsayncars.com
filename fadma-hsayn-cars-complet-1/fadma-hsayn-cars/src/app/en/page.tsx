import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { pageMetadata } from "@/lib/seo";
import { getDict } from "@/data/i18n-dict";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/",
  title: getDict("en").home.title,
  description: getDict("en").home.description,
});

export default function Page() {
  return <HomePage locale="en" />;
}
