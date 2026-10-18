import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDict } from "@/data/i18n-dict";
import { pageMetadata } from "@/lib/seo";
import { localizedPath } from "@/lib/i18n";

const locale = "en" as const;
const path = "/location-voiture-aller-simple";

export const metadata: Metadata = pageMetadata({
  locale,
  path,
  title: getDict(locale).cities.oneWayTitle,
  description: getDict(locale).cities.oneWayDesc,
  image: "/images/location-voiture-marrakech-jamaa-elfna.webp",
});

export default function Page() {
  const t = getDict(locale);
  const lp = (p: string) => localizedPath(p, locale);
  return (
    <>
      <Navbar locale={locale} />
      <main className="mt-[70px]">
        <section className="bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{t.cities.oneWayTitle}</h1>
            <p className="text-lg text-white/90">{t.cities.oneWayDesc}</p>
          </div>
        </section>
        <section className="py-12 px-4 max-w-3xl mx-auto space-y-4 text-gray-700 leading-relaxed">
          <img src="/images/location-voiture-marrakech-jamaa-elfna.webp" alt={t.cities.oneWayTitle} className="w-full h-56 object-cover rounded-2xl mb-4" />
          <p>One-way rental: pick up in one city and return in another (e.g. Marrakech → Merzouga, Errachidia → Merzouga).</p>
          <p>A supplement may apply depending on dates and vehicle. Confirm with the agency before booking.</p>
          <p>Check deposit, insurance, mileage and exact pickup/return points in the contract.</p>
          <p>Ideal for road trips to the desert without returning to the start point.</p>
          <p>{t.common.agencyMerzouga}</p>
          <p>{t.common.deliveryMarrakech}</p>
          <p>{t.common.deliveryErrachidia}</p>
          <p className="pt-2">
            <Link href={lp("/faq")} className="text-[var(--red)] font-semibold">{t.nav.faq}</Link>
            {" · "}
            <Link href={lp("/conditions")} className="text-[var(--red)] font-semibold">{t.nav.conditions}</Link>
            {" · "}
            <Link href={lp("/contact")} className="text-[var(--red)] font-semibold">{t.nav.contact}</Link>
            {" · "}
            <Link href={lp("/location-voiture-aller-simple")} className="text-[var(--red)] font-semibold">{t.nav.oneWay}</Link>
          </p>
          <a href="https://wa.me/212661371670" className="inline-block mt-4 bg-[var(--red)] text-white font-bold px-6 py-3 rounded-lg">
            {t.common.bookWhatsApp}
          </a>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
