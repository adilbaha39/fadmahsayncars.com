import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cars, getCarBySlug } from "@/data/cars";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";


type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) notFound();

  return {
    title: `Location ${car.fullName} | Dès ${car.price} MAD/jour`,
    description: `Location ${car.fullName} à Marrakech, Merzouga, Errachidia. ${car.transmission === "automatic" ? "Automatique" : "Manuelle"}, ${car.seats} places, dès ${car.price} MAD/jour. Assurance incluse.`,
    keywords: car.keywords,
    alternates: {
      canonical: `https://fadmahsayncars.com/vehicules/${car.slug}`,
    },
    openGraph: {
      title: `Location ${car.fullName}`,
      description: car.description,
      url: `https://fadmahsayncars.com/vehicules/${car.slug}`,
      images: [`/images/${car.image}`],
    },
    twitter: {
      card: "summary_large_image",
      title: `Location ${car.fullName}`,
      description: car.description,
    },
  };
}

export default async function CarPage({ params }: Props) {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: car.fullName,
    description: car.description,
    image: `https://fadmahsayncars.com/images/${car.image}`,
    brand: { "@type": "Brand", name: car.fullName.split(" ")[0] },
    category: car.category,
    offers: {
      "@type": "Offer",
      priceCurrency: "MAD",
      price: car.price,
      availability: "https://schema.org/InStock",
      url: `https://fadmahsayncars.com/vehicules/${car.slug}`,
      seller: { "@type": "Organization", name: "Fadma Hsayn Cars" },
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Transmission", value: car.transmission === "automatic" ? "Automatique" : "Manuelle" },
      { "@type": "PropertyValue", name: "Seats", value: String(car.seats) },
    ],
  };

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="mt-[70px]">
        <section className="bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white py-12 px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb
              items={[
                { name: "Accueil", url: "https://fadmahsayncars.com/" },
                { name: "Véhicules", url: "https://fadmahsayncars.com/#fleet" },
                { name: car.fullName, url: `https://fadmahsayncars.com/vehicules/${car.slug}` },
              ]}
            />
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
              Location {car.fullName}
            </h1>
            <p className="text-white/90">
              Dès <strong>{car.price} MAD/jour</strong> — {car.transmission === "automatic" ? "Automatique" : "Manuelle"} — {car.seats} places
            </p>
          </div>
        </section>

        <section className="py-12 px-4 md:px-10 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <img
                src={`/images/${car.image}`}
                alt={`Location ${car.fullName} Maroc - Fadma Hsayn Cars`}
                className="w-full rounded-2xl shadow-lg object-cover"
               
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--blue)] mb-4">{car.fullName}</h2>
              <p className="text-gray-700 mb-6">{car.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-xs text-gray-500">Transmission</p>
                  <p className="font-bold text-[var(--blue)]">{car.transmission === "automatic" ? "Automatique" : "Manuelle"}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-xs text-gray-500">Places</p>
                  <p className="font-bold text-[var(--blue)]">{car.seats}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-xs text-gray-500">Catégorie</p>
                  <p className="font-bold text-[var(--blue)] capitalize">{car.category === "suv" ? "SUV" : car.category === "economy" ? "Économique" : car.category === "family" ? "Familiale" : "Compacte"}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-xs text-gray-500">Prix / jour</p>
                  <p className="font-bold text-[var(--red)]">{car.price} MAD</p>
                </div>
              </div>

              <a
                href={`https://wa.me/212661371670?text=${encodeURIComponent(`Bonjour, je souhaite louer une ${car.fullName}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--red)] hover:bg-[#c01820] text-white font-bold px-8 py-4 rounded-lg transition w-full justify-center"
              >
                Réserver cette voiture <i className="fa-brands fa-whatsapp text-xl" />
              </a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold text-[var(--blue)] mb-4">Disponible à</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/location-voiture-marrakech" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-[var(--red)] hover:text-white transition">Aéroport Marrakech</Link>
              <Link href="/location-voiture-merzouga" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-[var(--red)] hover:text-white transition">Merzouga</Link>
              <Link href="/location-voiture-errachidia" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-[var(--red)] hover:text-white transition">Aéroport Errachidia</Link>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
            <h3 className="font-bold text-[var(--blue)] mb-3">Inclus dans le tarif</h3>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
              <li>✓ Assurance incluse</li>
              <li>✓ Kilométrage illimité</li>
              <li>✓ Support 24/7</li>
              <li>✓ Annulation gratuite (48h)</li>
            </ul>
          </div>

          <div className="mt-10">
            <h3 className="font-bold text-[var(--blue)] mb-4">Autres véhicules</h3>
            <div className="flex flex-wrap gap-2">
              {cars
                .filter((c) => c.slug !== car.slug && c.category === car.category)
                .concat(cars.filter((c) => c.slug !== car.slug && c.category !== car.category))
                .slice(0, 8)
                .map((c) => (
                <Link key={c.id} href={`/vehicules/${c.slug}`} className="px-3 py-1.5 bg-white border rounded-lg text-sm hover:border-[var(--red)] hover:text-[var(--red)] transition">
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <a href="https://wa.me/212661371670" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition text-2xl">
        <i className="fa-brands fa-whatsapp" />
      </a>
    </>
  );
}
