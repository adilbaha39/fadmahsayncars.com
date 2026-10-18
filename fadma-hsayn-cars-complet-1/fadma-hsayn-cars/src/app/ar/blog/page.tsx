import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDict } from "@/data/i18n-dict";
import { pageMetadata } from "@/lib/seo";
import { localizedPath } from "@/lib/i18n";

const locale = "ar" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/blog",
  title: getDict(locale).blog.title,
  description: getDict(locale).blog.description,
});

export default function Page() {
  const t = getDict(locale);
  const lp = (p: string) => localizedPath(p, locale);
  return (
    <>
      <Navbar locale={locale} />
      <main className="mt-[70px] py-16 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-[var(--blue)] mb-4">{t.blog.title}</h1>
        <p className="text-gray-600 mb-8">{t.blog.description}</p>
        
        <div className="space-y-4 mb-8">
          <Link href={lp("/blog/marrakech-merzouga")} className="block p-4 border rounded-xl hover:border-[var(--red)]">
            <h2 className="font-bold text-[var(--blue)]">{t.blog.mmTitle}</h2>
            <p className="text-sm text-gray-600">{t.blog.mmDesc}</p>
          </Link>
          <Link href={lp("/blog/errachidia-merzouga")} className="block p-4 border rounded-xl hover:border-[var(--red)]">
            <h2 className="font-bold text-[var(--blue)]">{t.blog.emTitle}</h2>
            <p className="text-sm text-gray-600">{t.blog.emDesc}</p>
          </Link>
        </div>
        <a href="https://wa.me/212661371670" className="inline-block bg-[var(--red)] text-white font-bold px-6 py-3 rounded-lg">
          {t.common.bookWhatsApp}
        </a>
      </main>
      <Footer locale={locale} />
    </>
  );
}
