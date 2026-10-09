import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Location Voiture Aéroport Errachidia | Dès 300 MAD",
  description:
    "Location de voiture à l'aéroport d'Errachidia (Moulay Ali Cherif). Idéal pour rejoindre Merzouga. Assurance incluse, kilométrage illimité, support 24/7.",
  keywords: [
    "location voiture aéroport Errachidia",
    "location voiture Errachidia",
    "Errachidia Airport car rental",
    "location voiture Errachidia Merzouga",
  ],
  alternates: { canonical: "https://fadmahsayncars.com/location-voiture-errachidia" },
  openGraph: {
    title: "Location Voiture Aéroport Errachidia | Dès 300 MAD",
    description: "Louez une voiture à l'aéroport d'Errachidia pour rejoindre Merzouga.",
    url: "https://fadmahsayncars.com/location-voiture-errachidia",
    images: ["/images/sora3.jpeg"],
  },
};

export default function ErrachidiaPage() {
  return (
    <>
      <Navbar />
      <main className="mt-[70px]">
        <section className="bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white py-16 px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb
              items={[
                { name: "Accueil", url: "https://fadmahsayncars.com/" },
                { name: "Location voiture Errachidia", url: "https://fadmahsayncars.com/location-voiture-errachidia" },
              ]}
            />
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              Location de voiture à l&apos;aéroport d&apos;Errachidia
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-8">
              Arrivée à l&apos;aéroport Moulay Ali Cherif ? Récupérez votre voiture et partez vers Merzouga ou le Sud marocain en toute liberté.
            </p>
            <a
              href="https://wa.me/212661371670?text=Bonjour%2C%20je%20souhaite%20louer%20une%20voiture%20%C3%A0%20l%27a%C3%A9roport%20d%27Errachidia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--red)] hover:bg-[#c01820] text-white font-bold px-8 py-4 rounded-lg transition"
            >
              Réserver maintenant via WhatsApp <i className="fa-brands fa-whatsapp text-xl" />
            </a>
          </div>
        </section>

        <section className="py-16 px-4 md:px-10 max-w-4xl mx-auto">
          <div className="mb-8">
            <img src="/images/sora3.jpeg" alt="Aéroport Errachidia location de voiture" className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg" />
          </div>
          <h2 className="text-2xl font-bold text-[var(--blue)] mb-6">Aéroport Errachidia → Merzouga en voiture</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              L&apos;aéroport d&apos;Errachidia (Moulay Ali Cherif) est le point d&apos;arrivée le plus proche de Merzouga. 
              La distance est d&apos;environ 1h30 à 2h de route. Louer une voiture dès votre arrivée vous permet 
              d&apos;éviter les transferts collectifs et de gérer votre emploi du temps librement.
            </p>
            <p>
              Fadma Hsayn Cars assure la prise en charge à l&apos;aéroport d&apos;Errachidia et peut également 
              vous proposer une restitution à Merzouga (location aller simple).
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[var(--blue)] mt-12 mb-6">Avantages de la location à Errachidia</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Prise en charge directe à l&apos;aéroport</li>
            <li>Possibilité d&apos;aller simple vers Merzouga ou Marrakech</li>
            <li>Véhicules adaptés aux routes du Sud (SUV recommandés)</li>
            <li>Assurance incluse et kilométrage illimité</li>
            <li>Support 24/7</li>
          </ul>

          <h2 className="text-2xl font-bold text-[var(--blue)] mt-12 mb-6">Tarifs indicatifs</h2>
          <p className="text-gray-700 mb-4">
            À partir de <strong>300 MAD/jour</strong> pour une citadine, 
            <strong> 400-450 MAD/jour</strong> pour un Duster, 
            et jusqu&apos;à <strong>600 MAD/jour</strong> pour un Tucson.
          </p>

          <div className="mt-12 p-6 bg-[var(--blue)] text-white rounded-2xl text-center">
            <h3 className="text-xl font-bold mb-3">Réservez votre voiture à Errachidia</h3>
            <a
              href="https://wa.me/212661371670?text=Bonjour%2C%20je%20souhaite%20louer%20une%20voiture%20%C3%A0%20Errachidia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--red)] hover:bg-[#c01820] text-white font-bold px-8 py-3 rounded-lg transition"
            >
              Contacter via WhatsApp <i className="fa-brands fa-whatsapp" />
            </a>
          </div>

          <div className="mt-12 pt-8 border-t">
            <h3 className="font-bold text-[var(--blue)] mb-4">Voir aussi</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/location-voiture-marrakech" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-[var(--red)] hover:text-white transition">Location Marrakech</Link>
              <Link href="/location-voiture-merzouga" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-[var(--red)] hover:text-white transition">Location Merzouga</Link>
              <Link href="/location-voiture-aller-simple" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-[var(--red)] hover:text-white transition">Aller simple</Link>
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
