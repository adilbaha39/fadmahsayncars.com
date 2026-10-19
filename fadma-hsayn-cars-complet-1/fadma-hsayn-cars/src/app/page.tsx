import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { pageMetadata } from "@/lib/seo";
import { getDict } from "@/data/i18n-dict";

export const metadata: Metadata = pageMetadata({
  locale: "fr",
  path: "/",
  title: getDict("fr").home.title,
  description: getDict("fr").home.description,
});

export default function Page() {
  return <HomePage locale="fr" />;
}
