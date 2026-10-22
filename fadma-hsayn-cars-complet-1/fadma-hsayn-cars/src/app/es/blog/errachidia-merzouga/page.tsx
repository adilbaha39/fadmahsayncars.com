import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { pageMetadata } from "@/lib/seo";

const PAGE_URL = "https://fadmahsayncars.com/es/blog/errachidia-merzouga";
const TITLE = "Alquiler de coche Errachidia–Merzouga: aeropuerto y desierto";
const DESCRIPTION =
  "Alquile un coche desde el aeropuerto de Errachidia a Merzouga: ruta, solo ida, entrega 500 MAD y consejos con Fadma Hsayn Cars.";

export const metadata: Metadata = pageMetadata({
  locale: "es",
  path: "/blog/errachidia-merzouga",
  title: TITLE,
  description: DESCRIPTION,
  image: "/images/location-voiture-errachidia.webp",
});

const faqItems = [
  { q: "¿Puedo recoger en el aeropuerto de Errachidia y devolver en Merzouga?", a: "Sí, según disponibilidad. Es una opción solo ida habitual. Confirme tarifas y horarios con la agencia." },
  { q: "¿Cuánto cuesta la entrega en el aeropuerto de Errachidia?", a: "La entrega en el aeropuerto de Errachidia cuesta 500 MAD." },
  { q: "¿Cuánto dura el trayecto Errachidia–Merzouga?", a: "A menudo unas dos horas según paradas y condiciones. Prefiera conducir de día." },
  { q: "¿Qué vehículo para Errachidia–Merzouga?", a: "Los SUV suelen preferirse; utilitarios y sedanes pueden convenir en asfalto. Consulte a la agencia." },
  { q: "¿Qué enviar por WhatsApp?", a: "Número de vuelo y hora de llegada, fechas, lugar de devolución, pasajeros y tipo de vehículo." },
];

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: TITLE,
    description: DESCRIPTION,
    image: "https://fadmahsayncars.com/images/location-voiture-errachidia.webp",
    author: { "@type": "Organization", name: "Fadma Hsayn Cars" },
    publisher: { "@type": "Organization", name: "Fadma Hsayn Cars", logo: { "@type": "ImageObject", url: "https://fadmahsayncars.com/images/logo-fadma-hsayn-cars.webp" } },
    mainEntityOfPage: PAGE_URL,
    inLanguage: "es",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <Navbar locale="es" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="mt-[70px]">
        <section className="bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white py-16 px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb items={[
              { name: "Inicio", url: "https://fadmahsayncars.com/es" },
              { name: "Blog", url: "https://fadmahsayncars.com/es/blog" },
              { name: "Errachidia → Merzouga", url: PAGE_URL },
            ]} />
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{TITLE}</h1>
            <p className="text-lg text-white/90 max-w-2xl">Recogida en aeropuerto, carretera al desierto y opciones solo ida.</p>
          </div>
        </section>

        <article className="py-16 px-4 md:px-10 max-w-3xl mx-auto text-gray-700 space-y-5 leading-relaxed">
          <div className="mb-8">
            <img src="/images/location-voiture-errachidia.webp" alt="Alquiler Errachidia Merzouga" className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg" />
          </div>
          <p>
            El aeropuerto de Errachidia (Moulay Ali Cherif) es una puerta práctica hacia Merzouga y Erg Chebbi. Alquilar un coche a la llegada le permite llegar a las dunas a su ritmo y gestionar su horario sin depender solo de traslados colectivos. Fadma Hsayn Cars ofrece entrega en el aeropuerto y la opción de devolver en Merzouga cuando las condiciones lo permiten.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">Errachidia a Merzouga en coche</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Ruta y duración</h3>
          <p>La carretera desde Errachidia hacia Merzouga es un itinerario clásico del sur. El tiempo de conducción suele rondar las dos horas según paradas y clima. Prefiera la luz del día.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Entrega en aeropuerto</h3>
          <p>La entrega en el aeropuerto de Errachidia cuesta 500 MAD. Indique número de vuelo y hora de llegada para organizar la entrega con fluidez.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">¿Por qué esta opción?</h3>
          <p>Llegar a Errachidia acorta el acceso al desierto frente a conducir desde Marrakech el mismo día. Con un coche de alquiler mantiene su autonomía en torno a Erg Chebbi.</p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">Solo ida Errachidia → Merzouga</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Cómo funciona</h3>
          <p>Recogida en Errachidia (aeropuerto o ciudad) y devolución en la agencia principal de Merzouga. La disponibilidad depende de fechas y vehículo. Puede aplicarse un suplemento — pida confirmación escrita (WhatsApp) antes de reservar.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Condiciones a verificar</h3>
          <ul className="list-disc list-inside space-y-2 ml-1">
            <li>puntos de recogida y devolución;</li>
            <li>tarifa de entrega aeropuerto (500 MAD);</li>
            <li>fianza (20.000 MAD);</li>
            <li>seguro y kilometraje;</li>
            <li>posible suplemento solo ida;</li>
            <li>cancelación (gratuita hasta 48h antes).</li>
          </ul>
          <p><Link href="/es/conditions" className="text-[var(--red)] font-semibold hover:underline">Condiciones de alquiler</Link></p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">¿Qué vehículo?</h2>
          <p>Los SUV (Duster, Creta, Tucson…) suelen apreciarse en el sur. Utilitarios y sedanes pueden convenir en itinerarios asfaltados. Para familias, pregunte por 7 plazas si hay disponibilidad.</p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">Información práctica</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Documentos</h3>
          <p>Permiso válido con al menos 2 años. Permiso nacional aceptado para extranjeros. DNI o pasaporte. Pago en efectivo o con tarjeta.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Ejemplo WhatsApp</h3>
          <div className="bg-gray-50 border rounded-xl p-5 text-sm whitespace-pre-line">
            {`Hola, aterrizo en el aeropuerto de Errachidia y quiero un alquiler hacia Merzouga.
Vuelo: ...
Hora de llegada: ...
Fechas: ...
Devolución: Merzouga
Pasajeros: ...
Vehículo: ...`}
          </div>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">FAQ Errachidia–Merzouga</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-5 shadow-sm bg-white">
                <h3 className="text-lg font-semibold text-[var(--blue)]">{item.q}</h3>
                <p className="mt-2">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white rounded-2xl text-center">
            <h2 className="text-2xl font-extrabold mb-3">¿Aterriza en Errachidia?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">Contacte Fadma Hsayn Cars por WhatsApp para confirmar disponibilidad, entrega en aeropuerto y condiciones hacia Merzouga.</p>
            <a href="https://wa.me/212661371670" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[var(--red)] text-white font-bold px-8 py-3 rounded-lg">
              Pedir presupuesto por WhatsApp <i className="fa-brands fa-whatsapp text-xl" />
            </a>
          </div>
        </article>
      </main>
      <Footer locale="es" />
      <a href="https://wa.me/212661371670" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center text-2xl shadow-lg" aria-label="WhatsApp">
        <i className="fa-brands fa-whatsapp" />
      </a>
    </>
  );
}
