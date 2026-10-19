import type { Metadata } from "next";
import BlogIndexPage from "@/components/BlogIndexPage";
import { pageMetadata } from "@/lib/seo";
import { getDict } from "@/data/i18n-dict";

const locale = "fr" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/blog",
  title: getDict(locale).blog.title,
  description: getDict(locale).blog.description,
});

export default function Page() {
  return <BlogIndexPage locale={locale} />;
}
