import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/seo";
import { localizedPath } from "@/lib/i18n";

const locale = "es" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/blog/marrakech-merzouga",
  title: 'Alquiler coche Marrakech-Merzouga: solo ida',
  description: '¿Prepara un alquiler solo ida Marrakech Merzouga? Descubra la ruta, las etapas y el vehículo adecuado, luego reserve fácilmente.',
  image: "/images/location-voiture-aeroport-maroc.webp",
});

export default function ArticlePage() {
  const lp = (p: string) => localizedPath(p, locale);
  return (
    <>
      <Navbar locale={locale} />
      <main className="mt-[70px]">
        <section className="bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white py-16 px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Alquiler coche Marrakech-Merzouga: solo ida</h1>
          </div>
        </section>
        <article className="py-16 px-4 md:px-10 max-w-3xl mx-auto text-gray-700 space-y-5 leading-relaxed">
          <img src="/images/location-voiture-aeroport-maroc.webp" alt='Alquiler coche Marrakech-Merzouga: solo ida' className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg mb-8" />

          <p>
            ¿Sueña con unir Marrakech al desierto de Merzouga con total libertad? Alquilar un coche suele ser una solución flexible para disfrutar del paisaje, parar donde quiera y viajar a su ritmo. Un alquiler de coche solo ida de Marrakech a Merzouga permite, cuando las condiciones lo permiten, empezar en Marrakech y devolver el vehículo en Merzouga sin volver al punto de partida. En esta guía: cómo preparar el trayecto, elegir el vehículo adecuado y solicitar una oferta según sus fechas.
          </p>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">Marrakech a Merzouga en coche: lo esencial</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Distancia e itinerario</h3>
          <p>
            La distancia entre Marrakech y Merzouga depende del itinerario, desvíos turísticos, paradas y del lugar exacto de recogida y devolución. La duración varía según el ritmo de conducción, el tráfico, el clima y las condiciones del viaje. Conviene verificar el itinerario antes de salir y confirmar con la agencia según fechas, vehículo y contrato.
          </p>
          <p>
            Consulte nuestra página de{" "}
            <Link href={lp("/location-voiture-marrakech")} className="text-[var(--red)] font-semibold hover:underline">alquiler de coches Marrakech</Link>
            {" "}y la de{" "}
            <Link href={lp("/location-voiture-merzouga")} className="text-[var(--red)] font-semibold hover:underline">alquiler de coches Merzouga</Link>.
          </p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Etapas principales</h3>
          <p>
            Un road trip entre Marrakech y Merzouga ofrece paradas como Aït Ben Haddou, Ouarzazate, el valle del Dadès, las gargantas del Todra, Erfoud y Merzouga. No todas son obligatorias: adapte el itinerario a su ritmo, la estación y sus condiciones de viaje.
          </p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Cómo organizar el viaje</h3>
          <p>
            Planifique pausas regulares, reserve algunos alojamientos con antelación y deje margen en la agenda. Descargue mapas offline y revise el tiempo antes de salir.
          </p>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">Alquiler solo ida Marrakech–Merzouga</h2>
          <p>
            El{" "}
            <Link href={lp("/location-voiture-aller-simple")} className="text-[var(--red)] font-semibold hover:underline">alquiler solo ida</Link>
            {" "}consiste en recoger el vehículo en Marrakech y devolverlo en Merzouga cuando la fórmula está disponible. Las tarifas, condiciones y disponibilidad deben confirmarse con la agencia. Consulte las{" "}
            <Link href={lp("/conditions")} className="text-[var(--red)] font-semibold hover:underline">condiciones de alquiler</Link>.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-1">
            <li>lugar exacto de recogida;</li>
            <li>lugar exacto de devolución;</li>
            <li>posibles gastos de solo ida;</li>
            <li>kilometraje del contrato;</li>
            <li>seguro y franquicias;</li>
            <li>importe de la fianza;</li>
            <li>horarios de recogida y devolución;</li>
            <li>restricciones del vehículo o del itinerario.</li>
          </ul>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">¿Qué coche elegir?</h2>
          <p>
            Un utilitario puede bastar en carreteras asfaltadas con poco equipaje. Un sedán ofrece más confort. Un SUV suele dar más espacio y una posición de conducción más alta. No todos los SUV son 4x4. Modelos frecuentes:{" "}
            <Link href={lp("/vehicules/dacia-duster")} className="text-[var(--red)] font-semibold hover:underline">Dacia Duster</Link>,{" "}
            <Link href={lp("/vehicules/hyundai-creta")} className="text-[var(--red)] font-semibold hover:underline">Hyundai Creta</Link>,{" "}
            <Link href={lp("/vehicules/hyundai-tucson")} className="text-[var(--red)] font-semibold hover:underline">Hyundai Tucson</Link>.
          </p>
          <p>
            Conducir en dunas o algunas pistas puede estar prohibido o no cubierto por el seguro. No circule fuera de vías autorizadas sin confirmación clara.
          </p>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">Consejos prácticos</h2>
          <p>Verifique permiso, documento de identidad, contrato y seguro. Fotografíe el estado del vehículo. Lleve agua, haga pausas y use mapas offline.</p>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">Cómo reservar</h2>
          <ul className="list-disc list-inside space-y-2 ml-1">
            <li>fechas de recogida y devolución;</li>
            <li>lugar de recogida en Marrakech;</li>
            <li>lugar de devolución en Merzouga;</li>
            <li>número de viajeros;</li>
            <li>tipo de vehículo;</li>
            <li>hora prevista de recogida.</li>
          </ul>
          <div className="bg-gray-50 border rounded-xl p-4 text-sm space-y-1 my-4">
            <p>Hola, deseo un alquiler solo ida de Marrakech a Merzouga.</p>
            <p>Fechas / Recogida / Devolución / Viajeros / Vehículo / Hora:</p>
          </div>
          <p>
            Contacte por{" "}
            <Link href={lp("/contact")} className="text-[var(--red)] font-semibold hover:underline">Contacto</Link>
            {" "}o WhatsApp.
          </p>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">FAQ</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">¿Puedo recoger en Marrakech y devolver en Merzouga?</h3>
          <p>Puede corresponder a un alquiler solo ida. Condiciones y gastos se confirman según fechas, vehículo y contrato.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">¿El solo ida está disponible para todos los vehículos?</h3>
          <p>No necesariamente. Algunos modelos tienen condiciones especiales.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">¿Se puede conducir en dunas?</h3>
          <p>Puede estar prohibido o no asegurado. Revise las condiciones antes de salir.</p>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">Conclusión</h2>
          <p>
            Un alquiler solo ida Marrakech–Merzouga puede facilitar un viaje por el sur de Marruecos. Prepare el itinerario, elija un vehículo adecuado y verifique las condiciones. Contacte a Fadma Hsayn Cars por WhatsApp para una propuesta según sus fechas.
          </p>

          <div className="mt-8 p-6 bg-[var(--blue)] text-white rounded-2xl text-center">
            <a href="https://wa.me/212661371670" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[var(--red)] text-white font-bold px-8 py-3 rounded-lg">
              WhatsApp
            </a>
          </div>
        </article>
      </main>
      <Footer locale={locale} />
    </>
  );
}
