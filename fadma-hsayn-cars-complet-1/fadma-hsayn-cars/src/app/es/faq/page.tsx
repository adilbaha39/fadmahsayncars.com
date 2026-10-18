import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDict } from "@/data/i18n-dict";
import { faqByLocale } from "@/data/cars-i18n";
import { pageMetadata } from "@/lib/seo";

const locale = "es" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/faq",
  title: getDict(locale).faq.title,
  description: getDict(locale).faq.description,
});

export default function FaqPage() {
  const t = getDict(locale);
  const items = faqByLocale[locale];
  return (
    <>
      <Navbar locale={locale} />
      <main className="mt-[70px] py-16 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-[var(--blue)] mb-4">{t.faq.title}</h1>
        <p className="text-gray-600 mb-10">{t.faq.description}</p>
        <div className="space-y-6">
          {items.map((item, i) => (
            <div key={i} className="border-b border-gray-100 pb-5">
              <h2 className="text-lg font-bold text-[var(--blue)] mb-2">{item.q}</h2>
              <p className="text-gray-700 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
        <a href="https://wa.me/212661371670" className="inline-block mt-10 bg-[var(--red)] text-white font-bold px-6 py-3 rounded-lg">
          {t.common.bookWhatsApp}
        </a>
      </main>
      <Footer locale={locale} />
    </>
  );
}
