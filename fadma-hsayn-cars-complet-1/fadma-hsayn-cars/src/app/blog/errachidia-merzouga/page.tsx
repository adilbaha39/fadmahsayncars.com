import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

const PAGE_URL = "https://fadmahsayncars.com/blog/errachidia-merzouga";
const TITLE = "Location voiture Errachidia-Merzouga : aéroport et aller simple";
const DESCRIPTION =
  "Vous préparez une location voiture Errachidia Merzouga depuis l'aéroport ? Découvrez le trajet, l'aller simple et le véhicule adapté, puis demandez votre devis.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "location voiture Errachidia Merzouga",
    "location voiture aéroport Errachidia",
    "Errachidia à Merzouga en voiture",
    "aéroport Errachidia Merzouga",
    "location aller simple Errachidia Merzouga",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Fadma Hsayn Cars",
    images: ["/images/sora3.jpeg"],
    locale: "fr_MA",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/sora3.jpeg"],
  },
};

const faqItems = [
  {
    q: "Peut-on louer une voiture à l'aéroport d'Errachidia pour aller à Merzouga ?",
    a: "Oui, une location avec livraison aéroport Errachidia peut permettre de rejoindre Merzouga. Les conditions, les frais de livraison et la disponibilité doivent être confirmés selon vos dates et le véhicule choisi.",
  },
  {
    q: "Peut-on rendre la voiture à Merzouga (aller simple) ?",
    a: "La restitution à Merzouga peut correspondre à une location aller simple, lorsque cette formule est disponible. Les conditions et les éventuels frais doivent être vérifiés avec l'agence avant la réservation.",
  },
  {
    q: "Combien de temps faut-il pour aller d'Errachidia à Merzouga ?",
    a: "La durée dépend de l'itinéraire exact, des conditions de circulation, de la météo et du rythme de conduite. Demandez confirmation à l'agence selon votre point de prise en charge et de restitution.",
  },
  {
    q: "Quel véhicule choisir pour Errachidia-Merzouga ?",
    a: "Le choix dépend du nombre de voyageurs, des bagages et de l'itinéraire. Une citadine, une berline ou un SUV peuvent convenir. Demandez conseil à l'agence pour un modèle adapté.",
  },
  {
    q: "Quelles informations envoyer pour réserver ?",
    a: "Préparez les dates, le lieu de prise en charge (aéroport Errachidia ou autre), le lieu de restitution, le nombre de voyageurs, le type de véhicule et l'heure souhaitée, puis contactez l'agence via WhatsApp.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${PAGE_URL}#article`,
      headline: TITLE,
      description: DESCRIPTION,
      image: "https://fadmahsayncars.com/images/sora3.jpeg",
      author: { "@type": "Organization", name: "Fadma Hsayn Cars" },
      publisher: {
        "@type": "Organization",
        name: "Fadma Hsayn Cars",
        logo: {
          "@type": "ImageObject",
          url: "https://fadmahsayncars.com/images/logo.png",
        },
      },
      datePublished: "2026-10-08",
      dateModified: "2026-10-11",
      mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
      inLanguage: "fr-MA",
      articleSection: "Voyage et location de voitures",
      keywords:
        "location voiture Errachidia Merzouga, aéroport Errachidia, location aller simple",
    },
    {
      "@type": "Organization",
      name: "Fadma Hsayn Cars",
      url: "https://fadmahsayncars.com",
      telephone: "+212661371670",
      logo: "https://fadmahsayncars.com/images/logo.png",
      sameAs: ["https://maps.app.goo.gl/2LELrDsP27MXXt3K9"],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://fadmahsayncars.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://fadmahsayncars.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Location voiture Errachidia-Merzouga",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function BlogErrachidiaMerzouga() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="mt-[70px]">
        <section className="bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white py-16 px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb
              items={[
                { name: "Accueil", url: "https://fadmahsayncars.com/" },
                { name: "Blog", url: "https://fadmahsayncars.com/blog" },
                {
                  name: "Errachidia → Merzouga",
                  url: PAGE_URL,
                },
              ]}
            />
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
              Location voiture Errachidia-Merzouga : aéroport et aller simple
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Trajet depuis l&apos;aéroport d&apos;Errachidia, choix du véhicule
              et restitution éventuelle à Merzouga.
            </p>
          </div>
        </section>

        <article className="py-16 px-4 md:px-10 max-w-3xl mx-auto text-gray-700 space-y-5 leading-relaxed">
          <div className="mb-8">
            <img
              src="/images/sora3.jpeg"
              alt="Location voiture aéroport Errachidia Merzouga"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <p>
            L&apos;aéroport d&apos;Errachidia est souvent choisi par les
            voyageurs qui souhaitent rejoindre Merzouga et le désert
            d&apos;Erg Chebbi sans passer par Marrakech. Une{" "}
            <strong>location voiture Errachidia Merzouga</strong> permet de
            récupérer un véhicule près de l&apos;aéroport et de poursuivre
            vers Merzouga à votre rythme. Lorsque les conditions le
            permettent, une formule{" "}
            <Link
              href="/location-voiture-aller-simple"
              className="text-[var(--red)] font-semibold hover:underline"
            >
              location voiture aller simple
            </Link>{" "}
            peut aussi permettre de restituer le véhicule à Merzouga. Ce guide
            vous aide à préparer le trajet, choisir un véhicule adapté et
            formuler une demande claire à l&apos;agence.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">
            Errachidia à Merzouga en voiture : ce qu&apos;il faut savoir
          </h2>

          <h3 className="text-lg font-semibold text-[var(--blue)]">
            Pourquoi partir d&apos;Errachidia ?
          </h3>
          <p>
            Pour de nombreux voyageurs, Errachidia est le point d&apos;arrivée
            aérien le plus pratique pour rejoindre la région de Merzouga.
            Louer une voiture dès l&apos;arrivée offre plus de liberté pour
            rejoindre votre hébergement, vous déplacer dans la zone et gérer
            votre planning sans dépendre uniquement des transferts collectifs.
          </p>
          <p>
            Consultez notre page{" "}
            <Link
              href="/location-voiture-errachidia"
              className="text-[var(--red)] font-semibold hover:underline"
            >
              location voiture aéroport Errachidia
            </Link>{" "}
            pour les informations sur la prise en charge, et la page{" "}
            <Link
              href="/location-voiture-merzouga"
              className="text-[var(--red)] font-semibold hover:underline"
            >
              location voiture Merzouga
            </Link>{" "}
            pour préparer votre arrivée côté désert.
          </p>

          <h3 className="text-lg font-semibold text-[var(--blue)]">
            Distance, durée et itinéraire
          </h3>
          <p>
            La distance et la durée entre Errachidia et Merzouga dépendent du
            point exact de prise en charge, de l&apos;itinéraire, des arrêts et
            des conditions de circulation. La météo et le rythme de conduite
            influencent aussi le temps de trajet. Il est préférable de demander
            confirmation à l&apos;agence selon vos dates et de vérifier
            l&apos;itinéraire avant le départ.
          </p>

          <h3 className="text-lg font-semibold text-[var(--blue)]">
            Livraison aéroport Errachidia
          </h3>
          <p>
            Fadma Hsayn Cars propose une livraison liée à l&apos;aéroport
            d&apos;Errachidia. Les modalités précises (lieu de remise des clés,
            horaires, frais de livraison) doivent être confirmées lors de la
            réservation. Indiquez l&apos;heure d&apos;arrivée de votre vol afin
            que l&apos;agence puisse organiser la prise en charge dans les
            meilleures conditions possibles.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">
            Location aller simple Errachidia-Merzouga
          </h2>

          <h3 className="text-lg font-semibold text-[var(--blue)]">
            Comment fonctionne l&apos;aller simple ?
          </h3>
          <p>
            L&apos;aller simple consiste, lorsque la formule est disponible, à
            prendre le véhicule à Errachidia (ou à l&apos;aéroport) et à le
            restituer à Merzouga, sans revenir au point de départ. Cette option
            peut convenir si vous séjournez à Merzouga puis poursuivez votre
            voyage autrement, ou si vous prévoyez un retour différent.
          </p>
          <p>
            Les frais éventuels, la disponibilité selon le modèle et les
            conditions du contrat doivent être vérifiés avant toute
            confirmation. Pour le détail du service, consultez la page{" "}
            <Link
              href="/location-voiture-aller-simple"
              className="text-[var(--red)] font-semibold hover:underline"
            >
              location voiture aller simple
            </Link>
            .
          </p>

          <h3 className="text-lg font-semibold text-[var(--blue)]">
            Points à vérifier avant de réserver
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-1">
            <li>le lieu exact de prise en charge (aéroport ou autre) ;</li>
            <li>le lieu exact de restitution à Merzouga ;</li>
            <li>les éventuels frais de livraison et de restitution ;</li>
            <li>le kilométrage prévu au contrat ;</li>
            <li>l&apos;assurance et les éventuelles franchises ;</li>
            <li>le dépôt de garantie ;</li>
            <li>les horaires de remise et de retour du véhicule ;</li>
            <li>les restrictions liées au véhicule ou à l&apos;itinéraire.</li>
          </ul>
          <p>
            Consultez également les{" "}
            <Link
              href="/conditions"
              className="text-[var(--red)] font-semibold hover:underline"
            >
              conditions de location
            </Link>{" "}
            et demandez une confirmation écrite ou WhatsApp avant de valider.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">
            Quelle voiture choisir pour Errachidia-Merzouga ?
          </h2>

          <h3 className="text-lg font-semibold text-[var(--blue)]">
            Citadine, berline ou SUV
          </h3>
          <p>
            Une citadine peut suffire pour un trajet principalement sur route
            goudronnée, avec peu de bagages. Une berline offre souvent plus de
            confort sur la distance. Un SUV apporte généralement plus
            d&apos;espace et une position de conduite plus haute. Tous les SUV
            ne sont pas des 4x4 : vérifiez les caractéristiques du modèle
            proposé.
          </p>

          <h3 className="text-lg font-semibold text-[var(--blue)]">
            Modèles souvent demandés
          </h3>
          <p>
            Le{" "}
            <Link
              href="/vehicules/dacia-duster"
              className="text-[var(--red)] font-semibold hover:underline"
            >
              Dacia Duster
            </Link>
            , le{" "}
            <Link
              href="/vehicules/hyundai-creta"
              className="text-[var(--red)] font-semibold hover:underline"
            >
              Hyundai Creta
            </Link>{" "}
            ou le{" "}
            <Link
              href="/vehicules/hyundai-tucson"
              className="text-[var(--red)] font-semibold hover:underline"
            >
              Hyundai Tucson
            </Link>{" "}
            sont fréquemment consultés pour ce type de trajet. La disponibilité
            dépend des dates. Demandez à l&apos;agence quel véhicule correspond
            le mieux à votre groupe et à votre bagage.
          </p>

          <h3 className="text-lg font-semibold text-[var(--blue)]">
            Pistes, dunes et assurance
          </h3>
          <p>
            La conduite sur les dunes ou certaines pistes peut être interdite
            ou non couverte par l&apos;assurance. Ne quittez pas les axes
            autorisés sans confirmation claire des conditions de location. Un
            véhicule confortable sur route principale n&apos;est pas
            automatiquement adapté ou autorisé hors route.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">
            Conseils pratiques
          </h2>

          <h3 className="text-lg font-semibold text-[var(--blue)]">
            Documents et état des lieux
          </h3>
          <p>
            Préparez un permis valide, une pièce d&apos;identité ou un
            passeport, et lisez le contrat avant de signer. Faites un état des
            lieux du véhicule et photographiez d&apos;éventuelles traces avant
            le départ.
          </p>

          <h3 className="text-lg font-semibold text-[var(--blue)]">
            Eau, pauses et conduite
          </h3>
          <p>
            Emportez de l&apos;eau, surtout en période chaude. Prévoyez des
            pauses et adaptez votre vitesse à l&apos;état de la route et à la
            fatigue. Téléchargez des cartes hors ligne et repérez les stations
            service sur votre itinéraire.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">
            Comment réserver une location voiture Errachidia Merzouga ?
          </h2>

          <h3 className="text-lg font-semibold text-[var(--blue)]">
            Informations à envoyer
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-1">
            <li>dates de prise en charge et de restitution ;</li>
            <li>lieu de prise en charge (aéroport Errachidia ou autre) ;</li>
            <li>lieu de restitution (Merzouga ou autre) ;</li>
            <li>numéro et heure de vol, si applicable ;</li>
            <li>nombre de voyageurs ;</li>
            <li>type de véhicule souhaité.</li>
          </ul>

          <h3 className="text-lg font-semibold text-[var(--blue)]">
            Exemple de message WhatsApp
          </h3>
          <div className="bg-gray-50 border rounded-xl p-4 text-sm space-y-1">
            <p>
              Bonjour, je souhaite louer une voiture d&apos;Errachidia vers
              Merzouga.
            </p>
            <p>Dates :</p>
            <p>Prise en charge (aéroport Errachidia ?) :</p>
            <p>Restitution (Merzouga / aller simple ?) :</p>
            <p>Vol / heure d&apos;arrivée :</p>
            <p>Nombre de voyageurs :</p>
            <p>Type de véhicule :</p>
          </div>
          <p>
            Utilisez la page{" "}
            <Link
              href="/contact"
              className="text-[var(--red)] font-semibold hover:underline"
            >
              Contact
            </Link>{" "}
            ou le bouton WhatsApp ci-dessous pour envoyer votre demande.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">
            FAQ location voiture Errachidia Merzouga
          </h2>
          <div className="space-y-5">
            {faqItems.map((item, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold text-[var(--blue)]">
                  {item.q}
                </h3>
                <p className="mt-1">{item.a}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">
            Conclusion : préparez votre trajet depuis Errachidia
          </h2>
          <p>
            Une location de voiture entre Errachidia et Merzouga peut
            simplifier l&apos;arrivée au désert et vous laisser plus de
            liberté sur place. Préparez vos dates, précisez la prise en charge
            aéroport et la restitution éventuelle à Merzouga, puis demandez
            confirmation des conditions avant de réserver.
          </p>
          <p>
            Contactez Fadma Hsayn Cars sur WhatsApp pour vérifier la
            disponibilité, le véhicule et les modalités adaptées à votre vol et
            à vos dates.
          </p>

          <div className="mt-8 p-6 bg-[var(--blue)] text-white rounded-2xl text-center">
            <a
              href="https://wa.me/212661371670?text=Bonjour%2C%20je%20souhaite%20une%20location%20voiture%20Errachidia%20Merzouga"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--red)] hover:bg-[#c01820] text-white font-bold px-8 py-3 rounded-lg transition"
            >
              Demander un devis sur WhatsApp{" "}
              <i className="fa-brands fa-whatsapp text-xl" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 pt-6 border-t">
            <Link
              href="/location-voiture-errachidia"
              className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-[var(--red)] hover:text-white transition"
            >
              Errachidia
            </Link>
            <Link
              href="/location-voiture-merzouga"
              className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-[var(--red)] hover:text-white transition"
            >
              Merzouga
            </Link>
            <Link
              href="/location-voiture-aller-simple"
              className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-[var(--red)] hover:text-white transition"
            >
              Aller simple
            </Link>
            <Link
              href="/blog/marrakech-merzouga"
              className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-[var(--red)] hover:text-white transition"
            >
              Marrakech → Merzouga
            </Link>
            <Link
              href="/blog"
              className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-[var(--red)] hover:text-white transition"
            >
              Blog
            </Link>
          </div>
        </article>
      </main>
      <Footer />
      <a
        href="https://wa.me/212661371670?text=Bonjour%2C%20je%20souhaite%20une%20location%20voiture%20Errachidia%20Merzouga"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg text-2xl"
        aria-label="WhatsApp"
      >
        <i className="fa-brands fa-whatsapp" />
      </a>
    </>
  );
}
