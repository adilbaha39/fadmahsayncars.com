import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/seo";
import { localizedPath } from "@/lib/i18n";

const locale = "es" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/blog/errachidia-merzouga",
  title: 'Alquiler coche Errachidia-Merzouga: aeropuerto y solo ida',
  description: '¿Prepara alquiler desde el aeropuerto de Errachidia a Merzouga? Trayecto, solo ida y vehículo adecuado.',
  image: "/images/location-voiture-errachidia.webp",
});

export default function ArticlePage() {
  const lp = (p: string) => localizedPath(p, locale);
  return (
    <>
      <Navbar locale={locale} />
      <main className="mt-[70px]">
        <section className="bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white py-16 px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Alquiler coche Errachidia-Merzouga: aeropuerto y solo ida</h1>
          </div>
        </section>
        <article className="py-16 px-4 md:px-10 max-w-3xl mx-auto text-gray-700 space-y-5 leading-relaxed">
          <img src="/images/location-voiture-errachidia.webp" alt='Alquiler coche Errachidia-Merzouga: aeropuerto y solo ida' className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg mb-8" />

          <p>
            El aeropuerto de Errachidia suele elegirse para llegar a Merzouga y Erg Chebbi sin pasar por Marrakech. Un{" "}
            <strong>alquiler de coche Errachidia Merzouga</strong> permite recoger un vehículo cerca del aeropuerto y continuar hacia Merzouga a su ritmo. Cuando las condiciones lo permiten, un{" "}
            <Link href={lp("/location-voiture-aller-simple")} className="text-[var(--red)] font-semibold hover:underline">alquiler solo ida</Link>
            {" "}permite devolver el coche en Merzouga.
          </p>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">Errachidia a Merzouga en coche</h2>
          <p>
            Errachidia es una puerta aérea práctica hacia la zona de Merzouga. Alquilar a la llegada da más libertad. Consulte{" "}
            <Link href={lp("/location-voiture-errachidia")} className="text-[var(--red)] font-semibold hover:underline">alquiler aeropuerto Errachidia</Link>
            {" "}y{" "}
            <Link href={lp("/location-voiture-merzouga")} className="text-[var(--red)] font-semibold hover:underline">alquiler Merzouga</Link>.
          </p>
          <p>
            La distancia y duración dependen del punto de recogida, itinerario, paradas y clima. Confirme con la agencia. La entrega vinculada al aeropuerto de Errachidia tiene condiciones y tarifas a confirmar al reservar.
          </p>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">Solo ida Errachidia–Merzouga</h2>
          <p>
            Recogida en Errachidia o aeropuerto y devolución en Merzouga cuando esté disponible. Ver{" "}
            <Link href={lp("/location-voiture-aller-simple")} className="text-[var(--red)] font-semibold hover:underline">solo ida</Link>
            {" "}y{" "}
            <Link href={lp("/conditions")} className="text-[var(--red)] font-semibold hover:underline">condiciones</Link>.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-1">
            <li>lugar de recogida y devolución;</li>
            <li>gastos de entrega y solo ida;</li>
            <li>kilometraje, seguro y fianza;</li>
            <li>horarios y restricciones.</li>
          </ul>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">Elección del vehículo</h2>
          <p>
            <Link href={lp("/vehicules/dacia-duster")} className="text-[var(--red)] font-semibold hover:underline">Duster</Link>
            {" · "}
            <Link href={lp("/vehicules/hyundai-creta")} className="text-[var(--red)] font-semibold hover:underline">Creta</Link>
            {" · "}
            <Link href={lp("/vehicules/hyundai-tucson")} className="text-[var(--red)] font-semibold hover:underline">Tucson</Link>.
            No todo SUV es 4x4. Las dunas pueden estar prohibidas o sin cobertura de seguro.
          </p>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">Reservar</h2>
          <p>
            Envíe fechas, recogida (¿aeropuerto?), devolución, vuelo, viajeros y tipo de vehículo por WhatsApp o{" "}
            <Link href={lp("/contact")} className="text-[var(--red)] font-semibold hover:underline">Contacto</Link>.
          </p>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">FAQ</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">¿Puedo alquilar en el aeropuerto de Errachidia para Merzouga?</h3>
          <p>Sí, con entrega vinculada al aeropuerto. Condiciones y tarifas se confirman según fechas.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">¿Puedo devolver en Merzouga?</h3>
          <p>Sí cuando el solo ida está disponible y tras confirmar condiciones.</p>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">Conclusión</h2>
          <p>
            Alquilar entre Errachidia y Merzouga facilita la llegada al desierto. Prepare fechas y detalles del aeropuerto y confirme con Fadma Hsayn Cars por WhatsApp.
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
