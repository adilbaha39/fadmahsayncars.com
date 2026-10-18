import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDict } from "@/data/i18n-dict";
import { pageMetadata } from "@/lib/seo";

const locale = "es" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/conditions",
  title: getDict(locale).conditions.title,
  description: getDict(locale).conditions.description,
});

export default function Page() {
  const t = getDict(locale);
  return (
    <>
      <Navbar locale={locale} />
      <main className="mt-[70px] py-16 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-[var(--blue)] mb-6">{t.conditions.title}</h1>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>Permiso de conducir válido desde hace al menos 2 años. Se acepta el permiso nacional para extranjeros.</p>
          <p>Fianza: 20.000 MAD (cheque, efectivo o tarjeta), devuelta si no hay daños.</p>
          <p>Seguro incluido. Kilometraje ilimitado. Cancelación gratuita hasta 48h antes de la recogida.</p>
          <p>Entrega aeropuerto: Marrakech 1.200 MAD · Errachidia 500 MAD. Agencia principal en Merzouga.</p>
          <p>Alquiler solo ida entre Marrakech, Merzouga y Errachidia sujeto a confirmación.</p>
        </div>
        <a href="https://wa.me/212661371670" className="inline-block mt-10 bg-[var(--red)] text-white font-bold px-6 py-3 rounded-lg">
          {t.common.bookWhatsApp}
        </a>
      </main>
      <Footer locale={locale} />
    </>
  );
}
