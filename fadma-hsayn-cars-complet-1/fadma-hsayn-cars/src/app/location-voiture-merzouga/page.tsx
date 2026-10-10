import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Location Voiture Merzouga | SUV & 4x4 Désert",
  description:
    "Location de voiture à Merzouga. SUV et 4x4 adaptés au désert. Prise en charge à Merzouga ou à l'aéroport Errachidia. Kilométrage illimité, assurance incluse.",
  keywords: [
    "location voiture Merzouga",
    "location 4x4 Merzouga",
    "location SUV Merzouga",
    "car rental Merzouga",
    "location voiture désert Maroc",
  ],
  alternates: { canonical: "https://fadmahsayncars.com/location-voiture-merzouga" },
  openGraph: {
    title: "Location Voiture Merzouga | SUV & 4x4 Désert",
    description: "Location SUV et 4x4 à Merzouga. Kilométrage illimité, assurance incluse.",
    url: "https://fadmahsayncars.com/location-voiture-merzouga",
    images: ["/images/sora4.jpeg"],
  },
};

export default function MerzougaPage() {
  return (
    <>
      <Navbar />
      <main className="mt-[70px]">
        <section className="bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white py-16 px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb
              items={[
                { name: "Accueil", url: "https://fadmahsayncars.com/" },
                { name: "Location voiture Merzouga", url: "https://fadmahsayncars.com/location-voiture-merzouga" },
              ]}
            />
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              Location de voiture à Merzouga
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-8">
              Explorez le désert d&apos;Erg Chebbi en toute liberté. SUV et véhicules adaptés aux routes du Sud marocain.
            </p>
            <a
              href="https://wa.me/212661371670?text=Bonjour%2C%20je%20souhaite%20louer%20une%20voiture%20%C3%A0%20Merzouga"
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
            <img src="/images/sora4.jpeg" alt="Location voiture Merzouga désert Erg Chebbi" className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg" />
          </div>
          <h2 className="text-2xl font-bold text-[var(--blue)] mb-6">Louer une voiture à Merzouga pour explorer le désert</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Merzouga est la porte d&apos;entrée vers les dunes d&apos;Erg Chebbi, l&apos;un des plus beaux paysages désertiques du Maroc. 
              Disposer d&apos;une voiture sur place vous permet de vous déplacer librement entre les hôtels, les campements, 
              et les sites d&apos;intérêt (lacs saisonniers, villages berbères, etc.).
            </p>
            <p>
              Fadma Hsayn Cars propose une agence à Merzouga avec des véhicules adaptés aux conditions du Sud : 
              Duster, Creta, Tucson et autres SUV. Vous pouvez également récupérer votre voiture à l&apos;aéroport d&apos;Errachidia 
              et la restituer à Merzouga (ou l&apos;inverse).
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
            <img src="/images/cars1.jpeg" alt="Dacia Duster location Merzouga" className="w-full h-36 object-cover rounded-xl shadow" />
            <img src="/images/cars16.jpeg" alt="Hyundai Creta location Merzouga" className="w-full h-36 object-cover rounded-xl shadow" />
            <img src="/images/cars18.jpeg" alt="Duster automatique Merzouga" className="w-full h-36 object-cover rounded-xl shadow hidden md:block" />
          </div>
          
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 my-8">
            <p className="text-gray-700"><strong>Agence principale à Merzouga.</strong> C&apos;est notre point central. La prise en charge et la restitution se font à Merzouga sans frais de livraison supplémentaires liés à l&apos;aéroport.</p>
          </div>

          <h2 className="text-2xl font-bold text-[var(--blue)] mt-12 mb-6">Véhicules recommandés pour Merzouga</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Dacia Duster", price: "400-450 MAD/jour", why: "Idéal pour les pistes et les routes du désert" },
              { name: "Hyundai Creta / Tucson", price: "450-600 MAD/jour", why: "Confort et puissance pour les longs trajets" },
              { name: "Dacia Jogger 7 places", price: "400 MAD/jour", why: "Parfait pour les familles ou groupes" },
              { name: "Clio 5 / Sandero", price: "300 MAD/jour", why: "Économique pour les trajets route bitumée" },
            ].map((v, i) => (
              <div key={i} className="border rounded-xl p-5">
                <h3 className="font-bold text-[var(--blue)]">{v.name}</h3>
                <p className="text-[var(--red)] font-semibold text-sm mt-1">{v.price}</p>
                <p className="text-sm text-gray-600 mt-2">{v.why}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[var(--blue)] mt-12 mb-6">Options de prise en charge</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Prise en charge directement à Merzouga (agence)</li>
            <li>Prise en charge à l&apos;aéroport d&apos;Errachidia + trajet vers Merzouga</li>
            <li>Possibilité d&apos;aller simple (Marrakech → Merzouga ou Errachidia → Merzouga)</li>
          </ul>

          
          <h2 className="text-2xl font-bold text-[var(--blue)] mt-12 mb-6">Merzouga : porte du désert d&apos;Erg Chebbi</h2>
          <div className="text-gray-700 space-y-4 leading-relaxed">
            <p>
              Merzouga attire les voyageurs du monde entier pour ses dunes dorées, ses couchers de soleil et ses nuits étoilées. 
              Une voiture sur place vous permet d&apos;atteindre votre hôtel ou campement en toute autonomie, 
              de visiter les villages berbères, les lacs saisonniers (Dayet Srji) et de gérer votre rythme.
            </p>
            <p>
              Nous recommandons un SUV pour plus de confort. La location aller simple depuis 
              <a href="/location-voiture-errachidia" className="text-[var(--red)] font-semibold"> Errachidia</a> ou 
              <a href="/location-voiture-marrakech" className="text-[var(--red)] font-semibold"> Marrakech</a> est possible. 
              Consultez aussi notre guide <a href="/blog/errachidia-merzouga" className="text-[var(--red)] font-semibold">Errachidia → Merzouga</a>.
            </p>
          </div>

          <div className="mt-12 p-6 bg-[var(--blue)] text-white rounded-2xl text-center">
            <h3 className="text-xl font-bold mb-3">Réservez votre voiture pour Merzouga</h3>
            <a
              href="https://wa.me/212661371670?text=Bonjour%2C%20je%20souhaite%20louer%20une%20voiture%20%C3%A0%20Merzouga"
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
              <Link href="/location-voiture-errachidia" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-[var(--red)] hover:text-white transition">Location Errachidia</Link>
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
