import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { pageMetadata } from "@/lib/seo";

const PAGE_URL = "https://fadmahsayncars.com/es/blog/marrakech-merzouga";
const TITLE = "Alquiler de coche Marrakech–Merzouga: guía solo ida";
const DESCRIPTION =
  "¿Planifica un alquiler solo ida de Marrakech a Merzouga? Ruta, vehículo, condiciones y consejos de reserva con Fadma Hsayn Cars.";

export const metadata: Metadata = pageMetadata({
  locale: "es",
  path: "/blog/marrakech-merzouga",
  title: TITLE,
  description: DESCRIPTION,
  image: "/images/location-voiture-aeroport-maroc.webp",
});

const faqItems = [
  { q: "¿Puedo alquilar en Marrakech y devolver en Merzouga?", a: "Sí, puede ser un alquiler solo ida. La posibilidad, tarifas y condiciones dependen de fechas, vehículo y contrato — confirme siempre con la agencia." },
  { q: "¿Qué vehículo para un road trip Marrakech–Merzouga?", a: "Utilitario, sedán o SUV según pasajeros, equipaje y carreteras. Los SUV suelen recomendarse para el sur. Pida consejo a la agencia." },
  { q: "¿El solo ida está disponible para todos los coches?", a: "No siempre. Depende de la flota y del calendario. Confirme antes de reservar." },
  { q: "¿Cuánto cuesta la entrega en el aeropuerto de Marrakech?", a: "La entrega en Marrakech Menara cuesta 1.200 MAD." },
  { q: "¿Qué enviar por WhatsApp?", a: "Fechas, lugares de recogida y devolución, número de viajeros, tipo de vehículo y hora preferida." },
];

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: TITLE,
    description: DESCRIPTION,
    image: "https://fadmahsayncars.com/images/location-voiture-aeroport-maroc.webp",
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
              { name: "Marrakech → Merzouga", url: PAGE_URL },
            ]} />
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{TITLE}</h1>
            <p className="text-lg text-white/90 max-w-2xl">Itinerario, elección del vehículo y alquiler solo ida entre Marrakech y Merzouga.</p>
          </div>
        </section>

        <article className="py-16 px-4 md:px-10 max-w-3xl mx-auto text-gray-700 space-y-5 leading-relaxed">
          <div className="mb-8">
            <img src="/images/location-voiture-aeroport-maroc.webp" alt="Alquiler coche Marrakech Merzouga" className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg" />
          </div>
          <p>
            ¿Sueña con unir Marrakech al desierto de Merzouga con total libertad? Alquilar un coche suele ser la opción más flexible para disfrutar del paisaje, parar donde quiera y viajar a su ritmo. Un alquiler solo ida de Marrakech a Merzouga permite empezar en Marrakech y devolver el vehículo en Merzouga sin volver al punto de partida — cuando las condiciones lo permiten. Esta guía explica cómo preparar el viaje, elegir el vehículo y solicitar una oferta para sus fechas.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">Marrakech a Merzouga en coche: lo esencial</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Distancia e itinerario</h3>
          <p>La distancia depende de la ruta, desvíos turísticos, paradas y puntos exactos de recogida y devolución. El tiempo de conducción suele ser un día completo con pausas. Planifique conducir de día y evite prisas en montaña o desierto.</p>
          <p>Las rutas habituales cruzan el Alto Atlas y el sur (por ejemplo vía Ouarzazate y los valles del Draa o del Ziz). Compruebe siempre el estado de las carreteras y el tiempo.</p>

          <h3 className="text-lg font-semibold text-[var(--blue)]">¿Por qué alquilar un coche?</h3>
          <p>El coche le da libertad para parar en kasbahs, miradores y pueblos. Frente a un autobús de horario fijo, usted elige el ritmo. El solo ida (Marrakech → Merzouga) evita devolver el coche al origen si su estancia continúa en el desierto.</p>
          <p>Un traslado privado con conductor sigue siendo una alternativa si prefiere no conducir. Tarifas de devolución en otra ciudad, condiciones y disponibilidad deben confirmarse con la agencia antes de reservar.</p>

          <h3 className="text-lg font-semibold text-[var(--blue)]">Condiciones a verificar antes de reservar</h3>
          <ul className="list-disc list-inside space-y-2 ml-1">
            <li>lugar exacto de recogida;</li>
            <li>lugar exacto de devolución;</li>
            <li>posibles tarifas por devolución en otra ciudad;</li>
            <li>kilometraje del contrato;</li>
            <li>seguros y posibles franquicias;</li>
            <li>importe de la fianza;</li>
            <li>horarios de recogida y devolución;</li>
            <li>restricciones del vehículo o del itinerario.</li>
          </ul>
          <p>Consulte las <Link href="/es/conditions" className="text-[var(--red)] font-semibold hover:underline">condiciones de alquiler</Link> y pida confirmación precisa antes de validar.</p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">¿Qué coche para Marrakech–Merzouga?</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Utilitario o sedán</h3>
          <p>Un utilitario puede convenir en carreteras asfaltadas, con poco equipaje y pocos viajeros. Un sedán ofrece más confort y espacio en largas distancias.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">SUV: confort y versatilidad</h3>
          <p>Un SUV (Dacia Duster, Hyundai Creta o Tucson) suele preferirse para el sur y los accesos a Merzouga. Mayor altura y espacio ayudan con el equipaje. Confirme si pistas o dunas están permitidas para el modelo elegido.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Opciones familiares y 7 plazas</h3>
          <p>Para grupos mayores, un 7 plazas como el Dacia Jogger puede ser adecuado si hay disponibilidad. Reserve con antelación en temporada alta.</p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">Alquiler solo ida Marrakech → Merzouga</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Cómo funciona</h3>
          <p>Recogida en Marrakech (aeropuerto o punto acordado) y devolución en Merzouga en la agencia. Entrega en Marrakech Menara: 1.200 MAD. Agencia principal en Merzouga. Puede aplicarse un suplemento solo ida según fechas y vehículo.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">¿Para quién?</h3>
          <p>Ideal si vuela a Marrakech, conduce al desierto y se queda en Merzouga sin volver al norte con el mismo coche. También útil para road trips hacia Erg Chebbi.</p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">Consejos prácticos</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Documentos y fianza</h3>
          <p>Permiso válido con al menos 2 años; permiso nacional aceptado para extranjeros. Fianza 20.000 MAD (efectivo, cheque o tarjeta), devuelta si no hay daños. Seguro incluido; kilometraje ilimitado según condiciones. Cancelación gratuita hasta 48h antes.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Combustible, descanso y seguridad</h3>
          <p>Reposte en ciudades importantes. Planifique pausas. Conduzca con prudencia en montaña y evite la noche si es posible. Respete las normas de tráfico.</p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">Cómo pedir presupuesto</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Información a preparar</h3>
          <p>Indique: fecha y lugar de recogida, fecha y lugar de devolución, viajeros, tipo de vehículo y hora de vuelo si necesita entrega en aeropuerto.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Ejemplo de mensaje WhatsApp</h3>
          <div className="bg-gray-50 border rounded-xl p-5 text-sm whitespace-pre-line">
            {`Hola, deseo un alquiler solo ida de Marrakech a Merzouga.
Fechas: ...
Recogida: aeropuerto / ciudad Marrakech
Devolución: Merzouga
Pasajeros: ...
Vehículo: SUV / sedán / ...`}
          </div>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">FAQ alquiler Marrakech Merzouga</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-5 shadow-sm bg-white">
                <h3 className="text-lg font-semibold text-[var(--blue)]">{item.q}</h3>
                <p className="mt-2">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white rounded-2xl text-center">
            <h2 className="text-2xl font-extrabold mb-3">¿Listo para planificar Marrakech → Merzouga?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">Contacte Fadma Hsayn Cars por WhatsApp para comprobar condiciones, vehículos y presupuesto.</p>
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
