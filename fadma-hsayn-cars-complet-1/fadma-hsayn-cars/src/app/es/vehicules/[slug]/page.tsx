import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cars, getCarBySlug } from "@/data/cars";
import { getCarDescription } from "@/data/cars-i18n";
import { getDict } from "@/data/i18n-dict";
import { pageMetadata } from "@/lib/seo";
import VehiclePage from "@/components/VehiclePage";

const locale = "es" as const;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) return {};
  const t = getDict(locale);
  const desc = getCarDescription(slug, locale) || car.description;
  const prefix = locale === "fr" ? "Location" : locale === "en" ? "Rent" : locale === "ar" ? "كراء" : "Alquiler";
  return pageMetadata({
    locale,
    path: `/vehicules/${slug}`,
    title: `${prefix} ${car.fullName} | ${t.common.from} ${car.price} MAD${t.common.day}`,
    description: desc,
    image: `/images/${car.image}`,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) notFound();
  return <VehiclePage locale={locale} car={car} />;
}
