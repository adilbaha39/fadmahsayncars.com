import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cars } from "@/data/cars";
import { getCarDescription } from "@/data/cars-i18n";
import { getDict } from "@/data/i18n-dict";
import { pageMetadata } from "@/lib/seo";
import { localizedPath } from "@/lib/i18n";

const locale = "es" as const;

export function generateStaticParams() {
  return cars.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const car = cars.find((c) => c.slug === slug);
  if (!car) return {};
  const t = getDict(locale);
  const desc = getCarDescription(slug, locale) || car.description;
  return pageMetadata({
    locale,
    path: `/vehicules/${slug}`,
    title: `${car.fullName} | ${t.common.from} ${car.price} MAD ${t.common.day} | Fadma Hsayn Cars`,
    description: desc,
    image: `/images/${car.image}`,
  });
}

export default async function VehiclePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const car = cars.find((c) => c.slug === slug);
  if (!car) notFound();
  const t = getDict(locale);
  const desc = getCarDescription(slug, locale) || car.description;
  const lp = (p: string) => localizedPath(p, locale);
  return (
    <>
      <Navbar locale={locale} />
      <main className="mt-[70px] py-12 px-4 max-w-3xl mx-auto">
        <img src={`/images/${car.image}`} alt={car.fullName} className="w-full h-64 object-cover rounded-2xl mb-6" />
        <h1 className="text-3xl font-extrabold text-[var(--blue)] mb-2">{car.fullName}</h1>
        <p className="text-[var(--red)] font-bold mb-4">{t.common.from} {car.price} MAD {t.common.day}</p>
        <p className="text-gray-700 mb-6 leading-relaxed">{desc}</p>
        <p className="text-sm text-gray-500 mb-6">
          {car.transmission === "automatic" ? t.common.automatic : t.common.manual} · {car.seats} {t.common.seats}
        </p>
        <p className="text-sm text-gray-600 mb-4">{t.common.agencyMerzouga}</p>
        <p className="text-sm text-gray-600 mb-6">{t.common.deliveryMarrakech} · {t.common.deliveryErrachidia}</p>
        <a href={`https://wa.me/212661371670?text=${encodeURIComponent(car.fullName)}`} className="inline-block bg-[var(--red)] text-white font-bold px-6 py-3 rounded-lg">
          {t.common.bookWhatsApp}
        </a>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={lp("/")} className="text-[var(--blue)] underline">{t.nav.home}</Link>
          <Link href={lp("/location-voiture-merzouga")} className="text-[var(--blue)] underline">{t.nav.merzouga}</Link>
          <Link href={lp("/faq")} className="text-[var(--blue)] underline">{t.nav.faq}</Link>
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}
