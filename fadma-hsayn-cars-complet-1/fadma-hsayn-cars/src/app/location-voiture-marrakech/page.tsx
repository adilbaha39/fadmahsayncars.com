import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Location Voiture Aéroport Marrakech | Dès 300 MAD",
  description:
    "Location de voiture à l'aéroport Marrakech Menara. Livraison à l'aéroport, assurance incluse, kilométrage illimité. Duster, Clio, Tucson dès 300 MAD/jour. Réservez via WhatsApp.",
  keywords: [
    "location voiture Marrakech",
    "location voiture aéroport Marrakech",
    "location voiture Marrakech Menara",
    "location voiture pas cher Marrakech",
    "location Dacia Duster Marrakech",
    "location voiture automatique Marrakech",
  ],
  alternates: { canonical: "https://fadmahsayncars.com/location-voiture-marrakech" },
  openGraph: {
    title: "Location Voiture Aéroport Marrakech | Dès 300 MAD",
    description: "Louez une voiture à l'aéroport Marrakech Menara. Assurance incluse, kilométrage illimité.",
    url: "https://fadmahsayncars.com/location-voiture-marrakech",
    images: ["/images/sora2.jpeg"],
  },
};

export default function MarrakechPage() {
  return (
    <>
      <Navbar />
      <main className="mt-[70px]">
        <section className="bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white py-16 px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb
              items={[
                { name: "Accueil", url: "https://fadmahsayncars.com/" },
                { name: "Location voiture Marrakech", url: "https://fadmahsayncars.com/location-voiture-marrakech" },
              ]}
            />
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              Location de voiture à l&apos;aéroport Marrakech Menara
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-8">
              Récupérez votre véhicule dès votre arrivée. Assurance incluse, kilométrage illimité, support 24/7. Dès 300 MAD/jour.
            </p>
            <a href="https://wa.me/212661371670?text=Bonjour%2C%20je%20souhaite%20louer%20une%20voiture%20%C3%A0%20Marrakech" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[var(--red)] hover:bg-[#c01820] text-white font-bold px-8 py-4 rounded-lg transition">
              Réserver via WhatsApp <i className="fa-brands fa-whatsapp text-xl" />
            </a>
          </div>
        </section>

        <section className="py-16 px-4 md:px-10 max-w-4xl mx-auto prose prose-lg text-gray-700">
          <div className="mb-8 not-prose">
            <img src="/images/sora2.jpeg" alt="Aéroport Marrakech Menara - location de voiture" className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg" />
          </div>
          <h2 className="text-2xl font-bold text-[var(--blue)]">Pourquoi louer une voiture à Marrakech ?</h2>
          <p>L&apos;aéroport Marrakech Menara est l&apos;une des principales portes d&apos;entrée du Maroc. Disposer d&apos;une voiture dès votre arrivée vous offre une liberté totale pour explorer la ville rouge, l&apos;Atlas, Essaouira ou partir vers Merzouga.</p>
          <p>Fadma Hsayn Cars propose une prise en charge rapide à l&apos;aéroport. Nos tarifs commencent à <strong>300 MAD/jour</strong>, assurance incluse, kilométrage illimité, annulation gratuite jusqu&apos;à 48h.</p>
          <div className="grid grid-cols-2 gap-4 my-8 not-prose">
            <img src="/images/cars1.jpeg" alt="Location Dacia Duster Marrakech" className="w-full h-40 object-cover rounded-xl shadow" />
            <img src="/images/cars20.jpeg" alt="Location Hyundai Tucson Marrakech" className="w-full h-40 object-cover rounded-xl shadow" />
          </div>

          <h2 className="text-2xl font-bold text-[var(--blue)] mt-10">Prise en charge à l&apos;aéroport</h2>
          <p>Après réservation WhatsApp, vous recevez une confirmation. À l&apos;arrivée, notre équipe vous accueille, vous signez le contrat, inspectez le véhicule et partez. Procédure rapide, même en soirée.</p>
          <p>Permis national accepté pour les étrangers. Caution de 20 000 MAD (chèque, espèces ou carte), restituée en fin de location sans dommage.</p>

          <h2 className="text-2xl font-bold text-[var(--blue)] mt-10">Véhicules disponibles</h2>
          <ul>
            <li><strong>Économiques</strong> : Sandero, Logan, Clio 5 — dès 300 MAD/jour</li>
            <li><strong>Compactes</strong> : Accent manuelle/auto — dès 350 MAD/jour</li>
            <li><strong>SUV</strong> : Duster, Creta, Tucson — dès 400 MAD/jour</li>
            <li><strong>7 places</strong> : Jogger — 400 MAD/jour</li>
          </ul>

          <h2 className="text-2xl font-bold text-[var(--blue)] mt-10">Itinéraires depuis Marrakech</h2>
          <ul>
            <li>Marrakech → Merzouga (road trip désert) — <Link href="/location-voiture-aller-simple" className="text-[var(--red)]">aller simple disponible</Link></li>
            <li>Marrakech → Essaouira (≈ 2h30)</li>
            <li>Marrakech → Ouarzazate / Ait Ben Haddou</li>
            <li>Ourika, cascades d&apos;Ouzoud</li>
          </ul>

          <h2 className="text-2xl font-bold text-[var(--blue)] mt-10">Conditions</h2>
          <ul>
            <li>Permis valide + 2 ans d&apos;ancienneté</li>
            <li>Caution 20 000 MAD — <Link href="/conditions" className="text-[var(--red)]">détails</Link></li>
            <li>Permis national OK pour étrangers</li>
            <li>Annulation gratuite 48h avant</li>
          </ul>

          <div className="mt-12 p-6 bg-[var(--blue)] text-white rounded-2xl text-center not-prose">
            <h3 className="text-xl font-bold mb-3">Réserver votre voiture à Marrakech</h3>
            <a href="https://wa.me/212661371670?text=Bonjour%2C%20je%20souhaite%20louer%20une%20voiture%20%C3%A0%20Marrakech" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[var(--red)] text-white font-bold px-8 py-3 rounded-lg">
              WhatsApp <i className="fa-brands fa-whatsapp" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 not-prose">
            <Link href="/location-voiture-merzouga" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-[var(--red)] hover:text-white">Merzouga</Link>
            <Link href="/location-voiture-errachidia" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-[var(--red)] hover:text-white">Errachidia</Link>
            <Link href="/location-voiture-aller-simple" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-[var(--red)] hover:text-white">Aller simple</Link>
            <Link href="/vehicules/dacia-duster" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-[var(--red)] hover:text-white">Duster</Link>
            <Link href="/faq" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-[var(--red)] hover:text-white">FAQ</Link>
            <Link href="/conditions" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-[var(--red)] hover:text-white">Conditions</Link>
            <Link href="/blog/marrakech-merzouga" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-[var(--red)] hover:text-white">Road trip Merzouga</Link>
          </div>
        </section>
      </main>
      <Footer />
      <a href="https://wa.me/212661371670" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg text-2xl">
        <i className="fa-brands fa-whatsapp" />
      </a>
    </>
  );
}
