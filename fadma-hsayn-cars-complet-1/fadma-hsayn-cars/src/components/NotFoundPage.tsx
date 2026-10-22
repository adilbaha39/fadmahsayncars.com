import Link from "next/link";
import { localizedPath, type Locale } from "@/lib/i18n";
import { getDict } from "@/data/i18n-dict";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const copy: Record<
  Locale,
  { title: string; text: string; home: string; marrakech: string; merzouga: string; contact: string }
> = {
  fr: {
    title: "Page introuvable",
    text: "La page que vous recherchez n'existe pas ou a été déplacée. Retournez à l'accueil ou contactez-nous sur WhatsApp.",
    home: "Accueil",
    marrakech: "Location Marrakech",
    merzouga: "Location Merzouga",
    contact: "Contact",
  },
  en: {
    title: "Page not found",
    text: "The page you are looking for does not exist or has been moved. Go back home or contact us on WhatsApp.",
    home: "Home",
    marrakech: "Rent in Marrakech",
    merzouga: "Rent in Merzouga",
    contact: "Contact",
  },
  ar: {
    title: "الصفحة غير موجودة",
    text: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها. عد إلى الرئيسية أو تواصل معنا عبر واتساب.",
    home: "الرئيسية",
    marrakech: "كراء مراكش",
    merzouga: "كراء مرزوكة",
    contact: "اتصل بنا",
  },
  es: {
    title: "Página no encontrada",
    text: "La página que busca no existe o se ha movido. Vuelva al inicio o contáctenos por WhatsApp.",
    home: "Inicio",
    marrakech: "Alquiler Marrakech",
    merzouga: "Alquiler Merzouga",
    contact: "Contacto",
  },
};

export default function NotFoundPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const t = getDict(locale);
  const lp = (p: string) => localizedPath(p, locale);

  return (
    <>
      <Navbar locale={locale} />
      <main className="mt-[70px] min-h-[calc(100vh-70px)] flex flex-col items-center justify-center px-4 bg-white text-center py-16">
        <p className="text-7xl md:text-8xl font-extrabold text-[var(--blue)] mb-2">404</p>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">{c.title}</h1>
        <p className="text-gray-500 mb-10 max-w-md leading-relaxed">{c.text}</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href={lp("/")}
            className="px-6 py-3 bg-[var(--red)] text-white font-bold rounded-lg hover:bg-[#c01820] transition"
          >
            {c.home}
          </Link>
          <Link
            href={lp("/location-voiture-marrakech")}
            className="px-6 py-3 border border-[var(--blue)] text-[var(--blue)] font-bold rounded-lg hover:bg-[var(--blue)] hover:text-white transition"
          >
            {c.marrakech}
          </Link>
          <Link
            href={lp("/location-voiture-merzouga")}
            className="px-6 py-3 border border-[var(--blue)] text-[var(--blue)] font-bold rounded-lg hover:bg-[var(--blue)] hover:text-white transition"
          >
            {c.merzouga}
          </Link>
          <Link
            href={lp("/contact")}
            className="px-6 py-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:border-[var(--blue)] hover:text-[var(--blue)] transition"
          >
            {c.contact}
          </Link>
          <a
            href="https://wa.me/212661371670"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#25D366] text-white font-bold rounded-lg hover:opacity-90 transition inline-flex items-center gap-2"
          >
            <i className="fa-brands fa-whatsapp" /> WhatsApp
          </a>
        </div>
        <p className="mt-10 text-sm text-gray-400">{t.common.agencyMerzouga}</p>
      </main>
      <Footer locale={locale} />
    </>
  );
}
