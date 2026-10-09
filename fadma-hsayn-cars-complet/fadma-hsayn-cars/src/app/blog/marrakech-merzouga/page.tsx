import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Marrakech à Merzouga en Voiture | Itinéraire & Conseils",
  description:
    "Comment aller de Marrakech à Merzouga en voiture : distance, durée, étapes, quel véhicule choisir. Location aller simple disponible.",
  keywords: [
    "Marrakech Merzouga en voiture",
    "road trip Marrakech Merzouga",
    "itinéraire Marrakech Merzouga",
    "location voiture Marrakech Merzouga",
    "aller Marrakech désert",
  ],
  openGraph: {
    type: "article",
    title: "Marrakech à Merzouga en Voiture | Itinéraire & Conseils",
    description: "Road trip Marrakech-Merzouga : distance, étapes, quel véhicule choisir. Location aller simple disponible.",
    url: "https://fadmahsayncars.com/blog/marrakech-merzouga",
    images: ["/images/sora1.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marrakech à Merzouga en Voiture | Itinéraire & Conseils",
    description: "Road trip Marrakech-Merzouga : distance, étapes, quel véhicule choisir. Location aller simple disponible.",
  },
  alternates: { canonical: "https://fadmahsayncars.com/blog/marrakech-merzouga" },
};

export default function BlogMarrakechMerzouga() {
  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Marrakech à Merzouga en voiture : itinéraire et conseils",
            description: "Road trip Marrakech-Merzouga : distance, étapes, quel véhicule choisir. Location aller simple disponible.",
            image: "https://fadmahsayncars.com/images/sora1.jpeg",
            author: { "@type": "Organization", name: "Fadma Hsayn Cars" },
            publisher: {
              "@type": "Organization",
              name: "Fadma Hsayn Cars",
              logo: { "@type": "ImageObject", url: "https://fadmahsayncars.com/images/logo.png" },
            },
            datePublished: "2026-10-08",
            dateModified: "2026-10-09",
            mainEntityOfPage: "https://fadmahsayncars.com/blog/marrakech-merzouga",
          }),
        }}
      />
      <main className="mt-[70px]">
        <section className="bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white py-16 px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm text-white/70 mb-4">
              <Link href="/" className="hover:text-white">Accueil</Link> → Blog → Marrakech → Merzouga
            </nav>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
              Road trip Marrakech → Merzouga en voiture
            </h1>
            <p className="text-lg text-white/90">Distance, durée, étapes et conseils pour réussir votre trajet vers le désert.</p>
          </div>
        </section>

        <article className="py-16 px-4 md:px-10 max-w-3xl mx-auto text-gray-700 space-y-6 leading-relaxed">
          <div className="mb-8">
            <img src="/images/sora1.jpeg" alt="Road trip Marrakech à Merzouga en voiture" className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg" />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <img src="/images/cars1.jpeg" alt="SUV pour Marrakech Merzouga" className="w-full h-40 object-cover rounded-xl shadow" />
            <img src="/images/sora4.jpeg" alt="Désert Merzouga Erg Chebbi" className="w-full h-40 object-cover rounded-xl shadow" />
          </div>
          <p>
            Le trajet de Marrakech à Merzouga est l&apos;un des road trips les plus populaires au Maroc. 
            Environ <strong>9 à 10 heures</strong> de route (environ 560 km), avec des paysages spectaculaires : 
            Atlas, vallées, kasbahs et enfin les dunes d&apos;Erg Chebbi.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)]">Quel véhicule choisir ?</h2>
          <p>
            Pour ce long trajet, un <strong>SUV</strong> (Duster, Creta, Tucson) est recommandé : plus confortable, 
            meilleure garde au sol et plus rassurant sur certaines portions. Une citadine reste possible si vous restez sur l&apos;asphalte.
          </p>
          <p>
            Consultez nos pages :{" "}
            <Link href="/vehicules/dacia-duster" className="text-[var(--red)] font-semibold">Dacia Duster</Link>,{" "}
            <Link href="/vehicules/hyundai-creta" className="text-[var(--red)] font-semibold">Hyundai Creta</Link>,{" "}
            <Link href="/vehicules/hyundai-tucson" className="text-[var(--red)] font-semibold">Hyundai Tucson</Link>.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)]">Étapes conseillées</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Marrakech → Ait Ben Haddou / Ouarzazate (pause kasbah)</li>
            <li>Ouarzazate → Tinghir / Gorges du Todra</li>
            <li>Tinghir → Erfoud → Merzouga</li>
          </ol>
          <p>Beaucoup de voyageurs font le trajet en 2 jours avec une nuit à Ouarzazate ou Tinghir.</p>

          <h2 className="text-xl font-bold text-[var(--blue)]">Location aller simple</h2>
          <p>
            Vous pouvez récupérer la voiture à <Link href="/location-voiture-marrakech" className="text-[var(--red)] font-semibold">Marrakech</Link>{" "}
            et la restituer à <Link href="/location-voiture-merzouga" className="text-[var(--red)] font-semibold">Merzouga</Link>{" "}
            (ou l&apos;inverse). Idéal si vous continuez ensuite vers Errachidia pour un vol.{" "}
            <Link href="/location-voiture-aller-simple" className="text-[var(--red)] font-semibold">Voir la location aller simple</Link>.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)]">Conseils pratiques</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Partez tôt le matin pour éviter de conduire de nuit</li>
            <li>Faites le plein à Marrakech et surveillez les stations sur la route</li>
            <li>Emportez de l&apos;eau et des collations</li>
            <li>Respectez les limitations et la prudence dans les cols de l&apos;Atlas</li>
          </ul>

          <div className="mt-10 p-6 bg-[var(--blue)] text-white rounded-2xl text-center">
            <h3 className="text-xl font-bold mb-3">Louez votre voiture pour Marrakech → Merzouga</h3>
            <a href="https://wa.me/212661371670?text=Bonjour%2C%20je%20souhaite%20une%20voiture%20pour%20Marrakech%20Merzouga" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[var(--red)] text-white font-bold px-8 py-3 rounded-lg">
              Réserver via WhatsApp <i className="fa-brands fa-whatsapp" />
            </a>
          </div>
        </article>
      </main>
      <Footer />
      <a href="https://wa.me/212661371670" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg text-2xl">
        <i className="fa-brands fa-whatsapp" />
      </a>
    </>
  );
}
