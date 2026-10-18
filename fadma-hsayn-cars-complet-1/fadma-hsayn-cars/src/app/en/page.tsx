import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDict } from "@/data/i18n-dict";
import { pageMetadata } from "@/lib/seo";
import { localizedPath } from "@/lib/i18n";
import { cars } from "@/data/cars";

const locale = "en" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/",
  title: getDict(locale).home.title,
  description: getDict(locale).home.description,
});

export default function HomePage() {
  const t = getDict(locale);
  const lp = (p: string) => localizedPath(p, locale);

  return (
    <>
      <Navbar locale={locale} />
      <main className="mt-[70px]">
        <section className="relative min-h-[calc(100vh-70px)] max-h-[680px] overflow-hidden bg-[#e8eef5]">
          <div className="absolute inset-0">
            <img src="/images/location-voiture-aeroport-maroc.webp" alt={t.home.h1} className="w-full h-full object-cover opacity-40" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--blue)] mb-4">{t.home.h1}</h1>
            <p className="text-lg text-gray-700 mb-6">{t.home.subtitle}</p>
            <p className="text-sm text-gray-600 mb-2">{t.common.agencyMerzouga}</p>
            <p className="text-sm text-gray-600 mb-6">{t.common.deliveryMarrakech} · {t.common.deliveryErrachidia}</p>
            <a href="https://wa.me/212661371670" className="inline-block bg-gradient-to-r from-[var(--red)] to-[#c01820] text-white font-bold px-8 py-3.5 rounded-md">
              {t.common.bookNow}
            </a>
          </div>
        </section>

        <section className="py-16 px-4 md:px-10 bg-white">
          <h2 className="text-2xl font-extrabold text-[var(--blue)] text-center mb-10 uppercase">{t.home.agencies}</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { href: "/location-voiture-marrakech", title: t.nav.marrakech, img: "/images/location-voiture-marrakech-jamaa-elfna.webp" },
              { href: "/location-voiture-merzouga", title: t.nav.merzouga, img: "/images/location-voiture-merzouga-desert.webp" },
              { href: "/location-voiture-errachidia", title: t.nav.errachidia, img: "/images/location-voiture-errachidia.webp" },
            ].map((a) => (
              <Link key={a.href} href={lp(a.href)} className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition border">
                <img src={a.img} alt={a.title} className="w-full h-40 object-cover" />
                <div className="p-4 font-bold text-[var(--blue)]">{a.title}</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="py-16 px-4 md:px-10 bg-[var(--gray-light)]">
          <h2 className="text-2xl font-extrabold text-[var(--blue)] text-center mb-2 uppercase">{t.home.fleet}</h2>
          <p className="text-center text-sm text-gray-500 mb-10">{t.home.fleetSub}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cars.map((car) => (
              <Link key={car.slug} href={lp(`/vehicules/${car.slug}`)} className="bg-white rounded-2xl p-4 shadow hover:shadow-md transition">
                <img src={`/images/${car.image}`} alt={car.fullName} className="w-full h-48 object-cover rounded-lg mb-3" />
                <h3 className="font-bold uppercase text-sm">{car.name}</h3>
                <p className="text-[var(--red)] font-bold text-sm mt-1">{t.common.from} {car.price} MAD {t.common.day}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="py-16 px-4 text-center">
          <h2 className="text-2xl font-extrabold text-[var(--blue)] mb-2">{t.common.reviewsTitle}</h2>
          <p className="text-yellow-500 mb-4">★★★★★ {t.common.reviewsSub}</p>
          <a href="https://maps.app.goo.gl/2LELrDsP27MXXt3K9" target="_blank" rel="noopener noreferrer" className="text-[var(--blue)] font-semibold underline">
            {t.common.seeGoogleReviews}
          </a>
        </section>

        <section className="py-16 px-4 bg-[var(--gray-light)] text-center">
          <h2 className="text-3xl font-extrabold text-[var(--blue)] mb-3">{t.common.readyTitle}</h2>
          <p className="text-gray-600 mb-6">{t.common.readyText}</p>
          <a href="https://wa.me/212661371670" className="inline-block bg-[var(--red)] text-white font-bold px-8 py-3 rounded-md">{t.common.bookNow}</a>
        </section>
      </main>
      <Footer locale={locale} />
      <a href="https://wa.me/212661371670" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center text-2xl shadow-lg" aria-label="WhatsApp">
        <i className="fa-brands fa-whatsapp" />
      </a>
    </>
  );
}
