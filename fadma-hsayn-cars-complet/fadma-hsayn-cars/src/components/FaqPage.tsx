import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDict } from "@/data/i18n-dict";
import { faqByLocale } from "@/data/cars-i18n";
import type { Locale } from "@/lib/i18n";

export default function FaqPage({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const items = faqByLocale[locale];
  return (
    <>
      <Navbar locale={locale} />
      <main className="mt-[70px]">
        <section className="bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white py-16 px-4 md:px-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">{t.faq.title}</h1>
            <p className="text-white/90 text-lg">{t.faq.description}</p>
          </div>
        </section>
        <section className="py-16 px-4 md:px-10 max-w-3xl mx-auto space-y-6">
          {items.map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-xl p-5 shadow-sm bg-white">
              <h2 className="text-lg font-bold text-[var(--blue)] mb-2">{item.q}</h2>
              <p className="text-gray-700 leading-relaxed">{item.a}</p>
            </div>
          ))}
          <a href="https://wa.me/212661371670" className="inline-block mt-6 bg-[var(--red)] text-white font-bold px-6 py-3 rounded-lg">
            {t.common.bookWhatsApp}
          </a>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
