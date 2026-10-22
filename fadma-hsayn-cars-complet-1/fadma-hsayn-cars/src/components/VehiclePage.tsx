import Link from "next/link";
import { cars, type Car } from "@/data/cars";
import { getCarDescription } from "@/data/cars-i18n";
import { getDict } from "@/data/i18n-dict";
import { localizedPath, type Locale } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

const ui: Record<
  Locale,
  {
    locationPrefix: string;
    transmission: string;
    places: string;
    category: string;
    priceDay: string;
    reserve: string;
    availableAt: string;
    included: string;
    insurance: string;
    mileage: string;
    support: string;
    cancel: string;
    otherVehicles: string;
    cat: Record<string, string>;
    waMsg: (name: string) => string;
  }
> = {
  fr: {
    locationPrefix: "Location",
    transmission: "Transmission",
    places: "Places",
    category: "Catégorie",
    priceDay: "Prix / jour",
    reserve: "Réserver cette voiture",
    availableAt: "Disponible à",
    included: "Inclus dans le tarif",
    insurance: "Assurance incluse",
    mileage: "Kilométrage illimité",
    support: "Support 24/7",
    cancel: "Annulation gratuite (48h)",
    otherVehicles: "Autres véhicules",
    cat: { suv: "SUV", economy: "Économique", family: "Familiale", compact: "Compacte" },
    waMsg: (name) => `Bonjour, je souhaite louer une ${name}`,
  },
  en: {
    locationPrefix: "Rent",
    transmission: "Transmission",
    places: "Seats",
    category: "Category",
    priceDay: "Price / day",
    reserve: "Book this car",
    availableAt: "Available in",
    included: "Included in the rate",
    insurance: "Insurance included",
    mileage: "Unlimited mileage",
    support: "Support 24/7",
    cancel: "Free cancellation (48h)",
    otherVehicles: "Other vehicles",
    cat: { suv: "SUV", economy: "Economy", family: "Family", compact: "Compact" },
    waMsg: (name) => `Hello, I would like to rent a ${name}`,
  },
  ar: {
    locationPrefix: "كراء",
    transmission: "ناقل الحركة",
    places: "مقاعد",
    category: "الفئة",
    priceDay: "السعر / يوم",
    reserve: "احجز هذه السيارة",
    availableAt: "متوفرة في",
    included: "مشمول في السعر",
    insurance: "تأمين مشمول",
    mileage: "كيلومترات غير محدودة",
    support: "دعم 24/7",
    cancel: "إلغاء مجاني (48 ساعة)",
    otherVehicles: "سيارات أخرى",
    cat: { suv: "SUV", economy: "اقتصادية", family: "عائلية", compact: "مدمجة" },
    waMsg: (name) => `مرحبا، أرغب في كراء ${name}`,
  },
  es: {
    locationPrefix: "Alquiler",
    transmission: "Transmisión",
    places: "Plazas",
    category: "Categoría",
    priceDay: "Precio / día",
    reserve: "Reservar este coche",
    availableAt: "Disponible en",
    included: "Incluido en la tarifa",
    insurance: "Seguro incluido",
    mileage: "Kilometraje ilimitado",
    support: "Soporte 24/7",
    cancel: "Cancelación gratuita (48h)",
    otherVehicles: "Otros vehículos",
    cat: { suv: "SUV", economy: "Económico", family: "Familiar", compact: "Compacto" },
    waMsg: (name) => `Hola, deseo alquilar un ${name}`,
  },
};

export default function VehiclePage({ locale, car }: { locale: Locale; car: Car }) {
  const t = getDict(locale);
  const u = ui[locale];
  const lp = (p: string) => localizedPath(p, locale);
  const desc = getCarDescription(car.slug, locale) || car.description;
  const base = "https://fadmahsayncars.com";
  const path = locale === "fr" ? `/vehicules/${car.slug}` : `/${locale}/vehicules/${car.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": ["Product", "Car"],
    name: car.fullName,
    description: desc,
    image: `${base}/images/${car.image}`,
    brand: { "@type": "Brand", name: car.fullName.split(" ")[0] },
    category: car.category,
    vehicleTransmission: car.transmission === "automatic" ? "AutomaticTransmission" : "ManualTransmission",
    seatingCapacity: car.seats,
    offers: {
      "@type": "Offer",
      priceCurrency: "MAD",
      price: String(car.price),
      availability: "https://schema.org/InStock",
      url: `${base}${path}`,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(car.price),
        priceCurrency: "MAD",
        unitText: "DAY",
      },
      seller: { "@type": "Organization", name: "Fadma Hsayn Cars" },
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Transmission",
        value: car.transmission === "automatic" ? t.common.automatic : t.common.manual,
      },
      { "@type": "PropertyValue", name: "Seats", value: String(car.seats) },
    ],
  };

  const transLabel = car.transmission === "automatic" ? t.common.automatic : t.common.manual;
  const catLabel = u.cat[car.category] || car.category;

  return (
    <>
      <Navbar locale={locale} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="mt-[70px]">
        <section className="bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white py-12 px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb
              items={[
                { name: t.nav.home, url: `${base}${locale === "fr" ? "/" : `/${locale}`}` },
                { name: t.nav.home === "Accueil" || locale === "fr" ? "Véhicules" : locale === "en" ? "Vehicles" : locale === "ar" ? "السيارات" : "Vehículos", url: `${base}${locale === "fr" ? "/" : `/${locale}`}#fleet` },
                { name: car.fullName, url: `${base}${path}` },
              ]}
            />
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
              {u.locationPrefix} {car.fullName}
            </h1>
            <p className="text-white/90">
              {t.common.from} <strong>{car.price} MAD{t.common.day}</strong> — {transLabel} — {car.seats} {t.common.seats}
            </p>
          </div>
        </section>

        <section className="py-12 px-4 md:px-10 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <img
                src={`/images/${car.image}`}
                alt={`${u.locationPrefix} ${car.fullName} Maroc - Fadma Hsayn Cars`}
                className="w-full rounded-2xl shadow-lg object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--blue)] mb-4">{car.fullName}</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{desc}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-xs text-gray-500">{u.transmission}</p>
                  <p className="font-bold text-[var(--blue)]">{transLabel}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-xs text-gray-500">{u.places}</p>
                  <p className="font-bold text-[var(--blue)]">{car.seats}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-xs text-gray-500">{u.category}</p>
                  <p className="font-bold text-[var(--blue)] capitalize">{catLabel}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-xs text-gray-500">{u.priceDay}</p>
                  <p className="font-bold text-[var(--red)]">{car.price} MAD</p>
                </div>
              </div>

              <a
                href={`https://wa.me/212661371670?text=${encodeURIComponent(u.waMsg(car.fullName))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--red)] hover:bg-[#c01820] text-white font-bold px-8 py-4 rounded-lg transition w-full justify-center"
              >
                {u.reserve} <i className="fa-brands fa-whatsapp text-xl" />
              </a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold text-[var(--blue)] mb-4">{u.availableAt}</h3>
            <div className="flex flex-wrap gap-3">
              <Link href={lp("/location-voiture-marrakech")} className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-[var(--red)] hover:text-white transition">
                {t.nav.marrakech}
              </Link>
              <Link href={lp("/location-voiture-merzouga")} className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-[var(--red)] hover:text-white transition">
                {t.nav.merzouga}
              </Link>
              <Link href={lp("/location-voiture-errachidia")} className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-[var(--red)] hover:text-white transition">
                {t.nav.errachidia}
              </Link>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
            <h3 className="font-bold text-[var(--blue)] mb-3">{u.included}</h3>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
              <li>✓ {u.insurance}</li>
              <li>✓ {u.mileage}</li>
              <li>✓ {u.support}</li>
              <li>✓ {u.cancel}</li>
            </ul>
          </div>

          <div className="mt-10">
            <h3 className="font-bold text-[var(--blue)] mb-4">{u.otherVehicles}</h3>
            <div className="flex flex-wrap gap-2">
              {cars
                .filter((c) => c.slug !== car.slug && c.category === car.category)
                .concat(cars.filter((c) => c.slug !== car.slug && c.category !== car.category))
                .slice(0, 8)
                .map((c) => (
                  <Link
                    key={c.id}
                    href={lp(`/vehicules/${c.slug}`)}
                    className="px-3 py-1.5 bg-white border rounded-lg text-sm hover:border-[var(--red)] hover:text-[var(--red)] transition"
                  >
                    {c.name}
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
      <a
        href="https://wa.me/212661371670"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition text-2xl"
        aria-label="WhatsApp"
      >
        <i className="fa-brands fa-whatsapp" />
      </a>
    </>
  );
}
