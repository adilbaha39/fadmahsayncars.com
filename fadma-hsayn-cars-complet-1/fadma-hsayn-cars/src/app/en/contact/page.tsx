import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDict } from "@/data/i18n-dict";
import { pageMetadata } from "@/lib/seo";
import { localizedPath } from "@/lib/i18n";

const locale = "en" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/contact",
  title: getDict(locale).contact.title,
  description: getDict(locale).contact.description,
});

export default function Page() {
  const t = getDict(locale);
  const lp = (p: string) => localizedPath(p, locale);
  return (
    <>
      <Navbar locale={locale} />
      <main className="mt-[70px] py-16 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-[var(--blue)] mb-4">{t.contact.title}</h1>
        <p className="text-gray-600 mb-8">{t.contact.description}</p>
        
        <ul className="space-y-2 mb-8 text-gray-700">
          <li><strong>{t.contact.whatsapp}</strong>: <a href="https://wa.me/212661371670" className="text-[var(--red)]">+212 6 61 37 16 70</a></li>
          <li><strong>{t.contact.phone}</strong>: +212 6 61 37 16 70</li>
          <li><strong>{t.contact.email}</strong>: fadmahsayncarrs@gmail.com</li>
        </ul>
        <a href="https://wa.me/212661371670" className="inline-block bg-[var(--red)] text-white font-bold px-6 py-3 rounded-lg">
          {t.common.bookWhatsApp}
        </a>
      </main>
      <Footer locale={locale} />
    </>
  );
}
