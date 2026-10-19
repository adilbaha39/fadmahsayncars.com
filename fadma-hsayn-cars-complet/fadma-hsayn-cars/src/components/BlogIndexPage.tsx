import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDict } from "@/data/i18n-dict";
import { localizedPath, type Locale } from "@/lib/i18n";

const intro: Record<Locale, string> = {
  fr: "Guides pratiques pour organiser votre location et vos trajets au Maroc.",
  en: "Practical guides to organise your rental and trips in Morocco.",
  ar: "أدلة عملية لتنظيم الكراء ورحلاتك في المغرب.",
  es: "Guías prácticas para organizar su alquiler y viajes en Marruecos.",
};

export default function BlogIndexPage({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const lp = (p: string) => localizedPath(p, locale);
  const posts = [
    {
      href: "/blog/marrakech-merzouga",
      title: t.blog.mmTitle,
      desc: t.blog.mmDesc,
      img: "location-voiture-aeroport-maroc.webp",
    },
    {
      href: "/blog/errachidia-merzouga",
      title: t.blog.emTitle,
      desc: t.blog.emDesc,
      img: "location-voiture-errachidia.webp",
    },
  ];
  return (
    <>
      <Navbar locale={locale} />
      <main className="mt-[70px]">
        <section className="bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white py-16 px-4 md:px-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">{t.blog.title}</h1>
            <p className="text-white/90 text-lg">{intro[locale]}</p>
          </div>
        </section>
        <section className="py-16 px-4 md:px-10 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.href}
                href={lp(post.href)}
                className="block rounded-2xl overflow-hidden border shadow-sm hover:shadow-lg transition group"
              >
                <img src={`/images/${post.img}`} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition duration-500" />
                <div className="p-5">
                  <h2 className="text-xl font-bold text-[var(--blue)] mb-2">{post.title}</h2>
                  <p className="text-sm text-gray-600 mb-3">{post.desc}</p>
                  <span className="text-[var(--red)] font-semibold text-sm">{t.common.readArticle}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
