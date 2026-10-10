import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ - Location de voiture au Maroc",
  description:
    "Toutes les réponses à vos questions sur la location de voiture à Marrakech, Merzouga et Errachidia : permis, caution, assurance, kilométrage, annulation...",
  openGraph: {
    type: "website",
    title: "FAQ - Location de voiture au Maroc",
    description: "Réponses sur la caution, l'assurance, le permis et la location à Marrakech, Merzouga et Errachidia.",
    url: "https://fadmahsayncars.com/faq",
    images: ["/images/cars1.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - Location de voiture au Maroc",
    description: "Réponses sur la caution, l'assurance, le permis et la location à Marrakech, Merzouga et Errachidia.",
  },
  alternates: {
    canonical: "https://fadmahsayncars.com/faq",
  },
};

const faqs = [
  {
    q: "Quels documents sont nécessaires pour louer une voiture ?",
    a: "Un permis de conduire valide avec au moins 2 ans d'ancienneté. Pour les étrangers, le permis national est accepté (permis international non obligatoire).",
  },
  {
    q: "Y a-t-il une limite d'âge ?",
    a: "Non, il n'y a pas de limite d'âge supérieure. L'exigence principale est d'avoir un permis valide depuis au moins 2 ans.",
  },
  {
    q: "Quel est le montant de la caution ?",
    a: "La caution est de 20 000 MAD. Elle peut être versée par chèque, en espèces ou par carte bancaire. Elle est restituée à la fin de la location si aucun dommage n'est constaté.",
  },
  {
    q: "L'assurance est-elle incluse ?",
    a: "Oui, l'assurance est incluse dans le tarif. Pour plus de détails sur les garanties et d'éventuelles franchises, contactez-nous.",
  },
  {
    q: "Le kilométrage est-il limité ?",
    a: "Non, le kilométrage est illimité. Vous pouvez parcourir le Maroc sans restriction de distance.",
  },
  {
    q: "Puis-je récupérer la voiture à l'aéroport ?",
    a: "Agence principale à Merzouga. Livraison aéroport Marrakech : 1 200 MAD. Livraison aéroport Errachidia : 500 MAD.",
  },
  {
    q: "Proposez-vous la location aller simple (one-way) ?",
    a: "Oui. Vous pouvez récupérer le véhicule dans une ville (Marrakech, Errachidia, Merzouga) et le restituer dans une autre. Un supplément peut s'appliquer.",
  },
  {
    q: "Quelle est la politique d'annulation ?",
    a: "L'annulation est gratuite jusqu'à 48 heures avant la prise en charge.",
  },
  {
    q: "Quels modes de paiement acceptez-vous ?",
    a: "Nous acceptons le paiement en espèces et par carte bancaire.",
  },
  {
    q: "Puis-je voyager dans le désert avec le véhicule ?",
    a: "Oui, nos SUV (Duster, Creta, Tucson...) sont adaptés aux routes du Sud. Nous recommandons un SUV pour les trajets vers Merzouga et les pistes.",
  },
  {
    q: "Proposez-vous des sièges enfants ?",
    a: "Oui, sur demande. Indiquez-le lors de votre réservation.",
  },
  {
    q: "Comment réserver ?",
    a: "Contactez-nous via WhatsApp au +212 6 61 37 16 70 en indiquant vos dates, le lieu de prise en charge et le type de véhicule souhaité.",
  },
];

export default function FAQPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="mt-[70px]">
        <section className="bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white py-16 px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm text-white/70 mb-4">
              <Link href="/" className="hover:text-white">Accueil</Link> → FAQ
            </nav>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              Questions fréquentes
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Tout ce que vous devez savoir avant de louer une voiture avec Fadma Hsayn Cars.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 md:px-10 max-w-3xl mx-auto">
          <div className="mb-10">
            <img src="/images/cars1.jpeg" alt="FAQ location voiture Maroc Fadma Hsayn Cars" className="w-full h-48 object-cover rounded-2xl shadow" />
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h2 className="text-lg font-bold text-[var(--blue)] mb-2">{faq.q}</h2>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-[var(--blue)] mb-3">Vous avez une autre question ?</h3>
            <p className="text-gray-600 mb-6">Contactez-nous directement, nous vous répondons rapidement.</p>
            <a
              href="https://wa.me/212661371670"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--red)] hover:bg-[#c01820] text-white font-bold px-8 py-3 rounded-lg transition"
            >
              WhatsApp <i className="fa-brands fa-whatsapp" />
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
