import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Location Voiture Aller Simple au Maroc",
  description:
    "Location de voiture aller simple au Maroc : Marrakech → Merzouga, Errachidia → Merzouga, et plus. Récupérez à un aéroport et restituez dans une autre ville.",
  keywords: [
    "location voiture aller simple Maroc",
    "location voiture Marrakech Merzouga",
    "location voiture Errachidia Merzouga",
    "one way car rental Morocco",
    "location voiture sans retour",
  ],
  openGraph: {
    type: "website",
    title: "Location Voiture Aller Simple au Maroc",
    description: "Récupérez à Marrakech ou Errachidia, restituez à Merzouga. Location aller simple sans retour au point de départ.",
    url: "https://fadmahsayncars.com/location-voiture-aller-simple",
    images: ["/images/sora2.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Location Voiture Aller Simple au Maroc",
    description: "Récupérez à Marrakech ou Errachidia, restituez à Merzouga. Location aller simple sans retour au point de départ.",
  },
  alternates: {
    canonical: "https://fadmahsayncars.com/location-voiture-aller-simple",
  },
};

export default function OneWayPage() {
  return (
    <>
      <Navbar />
      <main className="mt-[70px]">
        <section className="bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white py-16 px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb
              items={[
                { name: "Accueil", url: "https://fadmahsayncars.com/" },
                { name: "Location aller simple", url: "https://fadmahsayncars.com/location-voiture-aller-simple" },
              ]}
            />
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              Location de voiture aller simple au Maroc
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-8">
              Prenez votre voiture à Marrakech ou Errachidia et restituez-la à Merzouga (ou l&apos;inverse). 
              Idéal pour les road trips sans retour au point de départ.
            </p>
            <a
              href="https://wa.me/212661371670?text=Bonjour%2C%20je%20souhaite%20une%20location%20aller%20simple"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--red)] hover:bg-[#c01820] text-white font-bold px-8 py-4 rounded-lg transition"
            >
              Demander un devis via WhatsApp <i className="fa-brands fa-whatsapp text-xl" />
            </a>
          </div>
        </section>

        <section className="py-16 px-4 md:px-10 max-w-4xl mx-auto">
          <div className="mb-8">
            <img src="/images/sora2.jpeg" alt="Location voiture aller simple Maroc Marrakech Merzouga" className="w-full h-64 object-cover rounded-2xl shadow-lg" />
          </div>
          <h2 className="text-2xl font-bold text-[var(--blue)] mb-6">Qu&apos;est-ce que la location aller simple ?</h2>
          <p className="text-gray-700 mb-6">
            La location aller simple (one-way) vous permet de récupérer le véhicule dans une ville 
            et de le rendre dans une autre. C&apos;est la solution idéale pour les voyageurs qui arrivent 
            à Marrakech ou Errachidia et souhaitent terminer leur séjour à Merzouga (ou inversement).
          </p>

          <h2 className="text-2xl font-bold text-[var(--blue)] mt-12 mb-6">Trajets disponibles</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { from: "Marrakech", to: "Merzouga", note: "Road trip classique vers le désert" },
              { from: "Merzouga", to: "Marrakech", note: "Retour vers la ville rouge" },
              { from: "Errachidia", to: "Merzouga", note: "Le plus court (≈ 1h30-2h)" },
              { from: "Merzouga", to: "Errachidia", note: "Pour un vol retour depuis Errachidia" },
              { from: "Marrakech", to: "Errachidia", note: "Sur demande" },
              { from: "Errachidia", to: "Marrakech", note: "Sur demande" },
            ].map((t, i) => (
              <div key={i} className="border rounded-xl p-5">
                <h3 className="font-bold text-[var(--blue)]">{t.from} → {t.to}</h3>
                <p className="text-sm text-gray-600 mt-1">{t.note}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[var(--blue)] mt-12 mb-6">Conditions et frais</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Un supplément peut s&apos;appliquer selon le trajet (frais de retour du véhicule)</li>
            <li>Les tarifs sont communiqués sur devis selon les dates et le véhicule</li>
            <li>Mêmes conditions de caution et d&apos;assurance que la location classique</li>
            <li>Réservation recommandée à l&apos;avance, surtout en haute saison</li>
          </ul>

          <div className="mt-12 p-6 bg-[var(--blue)] text-white rounded-2xl text-center">
            <h3 className="text-xl font-bold mb-3">Demandez votre devis aller simple</h3>
            <p className="mb-6 opacity-90">Indiquez-nous les villes de départ et d&apos;arrivée, les dates et le type de véhicule.</p>
            <a
              href="https://wa.me/212661371670?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20une%20location%20aller%20simple"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--red)] hover:bg-[#c01820] text-white font-bold px-8 py-3 rounded-lg transition"
            >
              Contacter via WhatsApp <i className="fa-brands fa-whatsapp" />
            </a>
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
