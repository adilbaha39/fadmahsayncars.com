import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Conditions de location | Caution & Assurance",
  description:
    "Conditions de location de voiture au Maroc : caution 20 000 MAD, assurance incluse, permis, annulation, kilométrage illimité. Tout est transparent.",
  openGraph: {
    type: "website",
    title: "Conditions de location | Caution & Assurance",
    description: "Caution 20 000 MAD, assurance incluse, kilométrage illimité, annulation gratuite 48h. Conditions claires.",
    url: "https://fadmahsayncars.com/conditions",
    images: ["/images/cars1.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conditions de location | Caution & Assurance",
    description: "Caution 20 000 MAD, assurance incluse, kilométrage illimité, annulation gratuite 48h. Conditions claires.",
  },
  alternates: { canonical: "https://fadmahsayncars.com/conditions" },
};

export default function ConditionsPage() {
  return (
    <>
      <Navbar />
      <main className="mt-[70px]">
        <section className="bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white py-16 px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm text-white/70 mb-4">
              <Link href="/" className="hover:text-white">Accueil</Link> → Conditions
            </nav>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Conditions de location</h1>
            <p className="text-lg text-white/90">Tout ce que vous devez savoir avant de réserver : caution, assurance, documents, annulation.</p>
          </div>
        </section>

        <section className="py-16 px-4 md:px-10 max-w-3xl mx-auto space-y-10 text-gray-700">
          <div>
            <h2 className="text-xl font-bold text-[var(--blue)] mb-3">1. Documents requis</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Permis de conduire valide avec au moins 2 ans d&apos;ancienneté</li>
              <li>Pièce d&apos;identité ou passeport</li>
              <li>Pour les étrangers : permis national accepté (permis international non obligatoire)</li>
              <li>Pas de limite d&apos;âge supérieure</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--blue)] mb-3">2. Caution (dépôt de garantie)</h2>
            <p className="mb-3">Le montant de la caution est de <strong>20 000 MAD</strong>.</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Payable par chèque, espèces ou carte bancaire</li>
              <li>Restituée intégralement à la fin de la location si aucun dommage n&apos;est constaté</li>
              <li>En cas de dommage, le montant retenu correspond aux réparations selon le constat</li>
              <li>Le même montant s&apos;applique pour la plupart des véhicules (nous confirmer pour les SUV premium)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--blue)] mb-3">3. Assurance</h2>
            <p>L&apos;assurance est <strong>incluse</strong> dans le tarif de location. Elle couvre les risques de base. Pour les détails sur d&apos;éventuelles franchises (franchise / excess), contactez-nous avant la réservation.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--blue)] mb-3">4. Kilométrage</h2>
            <p>Le kilométrage est <strong>illimité</strong>. Vous pouvez parcourir le Maroc sans restriction de distance.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--blue)] mb-3">5. Annulation</h2>
            <p>Annulation <strong>gratuite jusqu&apos;à 48 heures</strong> avant la prise en charge. Au-delà, des frais peuvent s&apos;appliquer selon les cas.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--blue)] mb-3">6. Paiement</h2>
            <p>Nous acceptons le paiement en <strong>espèces</strong> ou par <strong>carte bancaire</strong>.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--blue)] mb-3">7. Carburant et état du véhicule</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Le véhicule est remis avec un niveau de carburant défini (généralement plein ou demi-plein)</li>
              <li>Il doit être rendu avec le même niveau</li>
              <li>Un état des lieux est fait au départ et au retour</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--blue)] mb-3">8. Location aller simple</h2>
            <p>Possible entre Marrakech, Merzouga et Errachidia. Un supplément peut s&apos;appliquer pour le retour du véhicule. <Link href="/location-voiture-aller-simple" className="text-[var(--red)] font-semibold">Voir la page aller simple</Link>.</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl text-center">
            <p className="mb-4">Une question sur les conditions ?</p>
            <a href="https://wa.me/212661371670" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[var(--red)] text-white font-bold px-6 py-3 rounded-lg">
              Nous contacter <i className="fa-brands fa-whatsapp" />
            </a>
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
