import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Aéroport Errachidia à Merzouga | Distance & Location",
  description:
    "Comment aller de l'aéroport d'Errachidia à Merzouga en voiture : distance, durée, location aller simple, quel véhicule choisir. Dès 300 MAD/jour.",
  keywords: [
    "Errachidia Merzouga en voiture",
    "aéroport Errachidia Merzouga",
    "location voiture Errachidia Merzouga",
    "trajet Errachidia désert",
    "transfer Errachidia Merzouga",
  ],
  openGraph: {
    type: "article",
    title: "Aéroport Errachidia à Merzouga | Distance & Location",
    description: "De l'aéroport d'Errachidia à Merzouga en 1h30-2h. Location voiture et aller simple disponibles.",
    url: "https://fadmahsayncars.com/blog/errachidia-merzouga",
    images: ["/images/sora3.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aéroport Errachidia à Merzouga | Distance & Location",
    description: "De l'aéroport d'Errachidia à Merzouga en 1h30-2h. Location voiture et aller simple disponibles.",
  },
  alternates: { canonical: "https://fadmahsayncars.com/blog/errachidia-merzouga" },
};

export default function BlogErrachidiaMerzouga() {
  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Aéroport Errachidia à Merzouga : distance, durée et location",
            description: "De l'aéroport d'Errachidia à Merzouga en 1h30-2h. Location voiture et aller simple.",
            image: "https://fadmahsayncars.com/images/sora3.jpeg",
            author: { "@type": "Organization", name: "Fadma Hsayn Cars" },
            publisher: {
              "@type": "Organization",
              name: "Fadma Hsayn Cars",
              logo: { "@type": "ImageObject", url: "https://fadmahsayncars.com/images/logo.png" },
            },
            datePublished: "2026-10-08",
            dateModified: "2026-10-09",
            mainEntityOfPage: "https://fadmahsayncars.com/blog/errachidia-merzouga",
          }),
        }}
      />
      <main className="mt-[70px]">
        <section className="bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white py-16 px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb
              items={[
                { name: "Accueil", url: "https://fadmahsayncars.com/" },
                { name: "Blog", url: "https://fadmahsayncars.com/blog/marrakech-merzouga" },
                { name: "Errachidia → Merzouga", url: "https://fadmahsayncars.com/blog/errachidia-merzouga" },
              ]}
            />
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
              Errachidia → Merzouga en voiture
            </h1>
            <p className="text-lg text-white/90">
              Le trajet le plus court vers les dunes d&apos;Erg Chebbi : environ 1h30 à 2h de route.
            </p>
          </div>
        </section>

        <article className="py-16 px-4 md:px-10 max-w-3xl mx-auto text-gray-700 space-y-6 leading-relaxed">
          <div className="mb-8">
            <img src="/images/sora3.jpeg" alt="Aéroport Errachidia vers Merzouga en voiture" className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg" />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <img src="/images/sora4.jpeg" alt="Merzouga Erg Chebbi désert" className="w-full h-40 object-cover rounded-xl shadow" />
            <img src="/images/cars1.jpeg" alt="SUV location Errachidia Merzouga" className="w-full h-40 object-cover rounded-xl shadow" />
          </div>

          <p>
            L&apos;aéroport d&apos;Errachidia (Moulay Ali Cherif) est le point d&apos;arrivée le plus proche de Merzouga. 
            La distance est d&apos;environ <strong>100 à 120 km</strong>, soit <strong>1h30 à 2h</strong> de route selon les conditions. 
            C&apos;est l&apos;option idéale si vous voulez rejoindre le désert rapidement sans passer par Marrakech.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)]">Pourquoi louer une voiture à Errachidia ?</h2>
          <p>
            Les transferts collectifs existent, mais une voiture de location vous donne la liberté d&apos;arriver à l&apos;heure que vous voulez, 
            de vous arrêter en route, et de vous déplacer facilement une fois à Merzouga (hôtels, campements, lacs saisonniers).
          </p>
          <p>
            Fadma Hsayn Cars propose la <Link href="/location-voiture-errachidia" className="text-[var(--red)] font-semibold">prise en charge à l&apos;aéroport d&apos;Errachidia</Link>{" "}
            et la possibilité de restituer le véhicule à <Link href="/location-voiture-merzouga" className="text-[var(--red)] font-semibold">Merzouga</Link>{" "}
            (location <Link href="/location-voiture-aller-simple" className="text-[var(--red)] font-semibold">aller simple</Link>).
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)]">Quel véhicule choisir ?</h2>
          <p>
            La route est globalement bonne. Une citadine suffit, mais un <strong>SUV</strong> (Duster, Creta) est plus confortable 
            et rassurant si vous prévoyez des pistes autour de Merzouga.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/vehicules/dacia-duster" className="text-[var(--red)]">Dacia Duster</Link> — idéal désert</li>
            <li><Link href="/vehicules/hyundai-creta" className="text-[var(--red)]">Hyundai Creta</Link> — confort automatique</li>
            <li><Link href="/vehicules/dacia-sandero" className="text-[var(--red)]">Sandero / Clio</Link> — budget serré</li>
          </ul>

          <h2 className="text-xl font-bold text-[var(--blue)]">Conseils pratiques</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Réservez avant votre vol pour être sûr d&apos;avoir un véhicule à l&apos;arrivée</li>
            <li>Indiquez l&apos;heure d&apos;arrivée de votre vol lors de la réservation WhatsApp</li>
            <li>Faites le plein à Errachidia si besoin (stations plus rares près des dunes)</li>
            <li>Prévoir de l&apos;eau, surtout en été</li>
          </ul>

          <h2 className="text-xl font-bold text-[var(--blue)]">Aller simple Errachidia → Merzouga</h2>
          <p>
            Très demandé : vous récupérez la voiture à l&apos;aéroport et la rendez à Merzouga en fin de séjour 
            (ou l&apos;inverse si vous prenez un vol retour depuis Errachidia). Un supplément peut s&apos;appliquer.
          </p>

          <div className="mt-10 p-6 bg-[var(--blue)] text-white rounded-2xl text-center">
            <h3 className="text-xl font-bold mb-3">Louer une voiture Errachidia → Merzouga</h3>
            <a href="https://wa.me/212661371670?text=Bonjour%2C%20je%20souhaite%20une%20voiture%20Errachidia%20Merzouga" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[var(--red)] text-white font-bold px-8 py-3 rounded-lg">
              Réserver via WhatsApp <i className="fa-brands fa-whatsapp" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/location-voiture-errachidia" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-[var(--red)] hover:text-white">Location Errachidia</Link>
            <Link href="/location-voiture-merzouga" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-[var(--red)] hover:text-white">Location Merzouga</Link>
            <Link href="/location-voiture-aller-simple" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-[var(--red)] hover:text-white">Aller simple</Link>
            <Link href="/blog/marrakech-merzouga" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-[var(--red)] hover:text-white">Road trip Marrakech</Link>
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
