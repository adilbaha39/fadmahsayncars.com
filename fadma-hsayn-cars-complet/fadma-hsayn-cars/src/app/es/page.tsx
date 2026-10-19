import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { pageMetadata } from "@/lib/seo";
import { getDict } from "@/data/i18n-dict";

export const metadata: Metadata = pageMetadata({
  locale: "es",
  path: "/",
  title: getDict("es").home.title,
  description: getDict("es").home.description,
});

export default function Page() {
  return <HomePage locale="es" />;
}
