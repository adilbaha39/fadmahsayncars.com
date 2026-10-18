import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDict } from "@/data/i18n-dict";
import { pageMetadata } from "@/lib/seo";

const locale = "en" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/conditions",
  title: getDict(locale).conditions.title,
  description: getDict(locale).conditions.description,
});

export default function Page() {
  const t = getDict(locale);
  return (
    <>
      <Navbar locale={locale} />
      <main className="mt-[70px] py-16 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-[var(--blue)] mb-6">{t.conditions.title}</h1>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>Valid driving licence held for at least 2 years. National licence accepted for foreign visitors.</p>
          <p>Deposit: 20,000 MAD (cheque, cash or card), returned if no damage.</p>
          <p>Insurance included. Unlimited mileage. Free cancellation up to 48h before pickup.</p>
          <p>Airport delivery: Marrakech 1,200 MAD · Errachidia 500 MAD. Main agency in Merzouga.</p>
          <p>One-way rentals available between Marrakech, Merzouga and Errachidia subject to confirmation.</p>
        </div>
        <a href="https://wa.me/212661371670" className="inline-block mt-10 bg-[var(--red)] text-white font-bold px-6 py-3 rounded-lg">
          {t.common.bookWhatsApp}
        </a>
      </main>
      <Footer locale={locale} />
    </>
  );
}
