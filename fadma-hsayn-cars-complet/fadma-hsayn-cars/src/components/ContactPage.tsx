import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDict } from "@/data/i18n-dict";
import { localizedPath, type Locale } from "@/lib/i18n";
import Link from "next/link";

const copy: Record<Locale, { title: string; intro: string; agenciesTitle: string; hours: string }> = {
  fr: {
    title: "Contactez-nous",
    intro: "Une question, une réservation ou un devis ? Réponse rapide sur WhatsApp.",
    agenciesTitle: "Nos agences",
    hours: "Support disponible 7j/7 — réponse rapide sur WhatsApp",
  },
  en: {
    title: "Contact us",
    intro: "A question, a booking or a quote? Quick reply on WhatsApp.",
    agenciesTitle: "Our locations",
    hours: "Support available 7 days a week — quick reply on WhatsApp",
  },
  ar: {
    title: "اتصل بنا",
    intro: "سؤال، حجز أو عرض سعر؟ رد سريع عبر واتساب.",
    agenciesTitle: "مواقعنا",
    hours: "دعم متاح 7 أيام في الأسبوع — رد سريع عبر واتساب",
  },
  es: {
    title: "Contacto",
    intro: "¿Una pregunta, una reserva o un presupuesto? Respuesta rápida por WhatsApp.",
    agenciesTitle: "Nuestras ubicaciones",
    hours: "Soporte disponible 7 días — respuesta rápida por WhatsApp",
  },
};

export default function ContactPage({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const c = copy[locale];
  const lp = (p: string) => localizedPath(p, locale);
  return (
    <>
      <Navbar locale={locale} />
      <main className="mt-[70px]">
        <section className="bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white py-16 px-4 md:px-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">{c.title}</h1>
            <p className="text-white/90 text-lg">{c.intro}</p>
          </div>
        </section>
        <section className="py-16 px-4 md:px-10 max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4 items-start p-4 border rounded-xl">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-[#25D366] text-xl">
                  <i className="fa-brands fa-whatsapp" />
                </div>
                <div>
                  <h2 className="font-bold text-[var(--blue)]">{t.contact.whatsapp}</h2>
                  <a href="https://wa.me/212661371670" className="text-[var(--red)] font-semibold">+212 6 61 37 16 70</a>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 border rounded-xl">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[var(--blue)] text-xl">
                  <i className="fa-solid fa-phone" />
                </div>
                <div>
                  <h2 className="font-bold text-[var(--blue)]">{t.contact.phone}</h2>
                  <a href="tel:+212661371670" className="text-gray-700">+212 6 61 37 16 70</a>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 border rounded-xl">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-[var(--red)] text-xl">
                  <i className="fa-solid fa-envelope" />
                </div>
                <div>
                  <h2 className="font-bold text-[var(--blue)]">{t.contact.email}</h2>
                  <a href="mailto:fadmahsayncarrs@gmail.com" className="text-gray-700 break-all">fadmahsayncarrs@gmail.com</a>
                </div>
              </div>
              <p className="text-sm text-gray-500">{c.hours}</p>
            </div>
            <div className="p-6 bg-[var(--gray-light)] rounded-2xl">
              <h2 className="font-bold text-[var(--blue)] text-xl mb-4">{c.agenciesTitle}</h2>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <Link href={lp("/location-voiture-merzouga")} className="font-semibold text-[var(--red)] hover:underline">{t.nav.merzouga}</Link>
                  <span className="block text-sm text-gray-500">{t.common.agencyMerzouga}</span>
                </li>
                <li>
                  <Link href={lp("/location-voiture-marrakech")} className="font-semibold text-[var(--red)] hover:underline">{t.nav.marrakech}</Link>
                  <span className="block text-sm text-gray-500">{t.common.deliveryMarrakech}</span>
                </li>
                <li>
                  <Link href={lp("/location-voiture-errachidia")} className="font-semibold text-[var(--red)] hover:underline">{t.nav.errachidia}</Link>
                  <span className="block text-sm text-gray-500">{t.common.deliveryErrachidia}</span>
                </li>
              </ul>
              <a href="https://wa.me/212661371670" className="inline-block mt-6 bg-[var(--red)] text-white font-bold px-6 py-3 rounded-lg w-full text-center">
                {t.common.bookWhatsApp}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
