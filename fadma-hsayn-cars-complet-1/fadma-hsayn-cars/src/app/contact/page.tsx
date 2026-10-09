import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Contact - Location voiture Maroc",
  description: "Contactez Fadma Hsayn Cars : WhatsApp et téléphone +212 6 61 37 16 70, email fadmahsayncarrs@gmail.com. Marrakech, Merzouga, Errachidia.",
  openGraph: {
    type: "website",
    title: "Contact - Location voiture Maroc",
    description: "Contactez Fadma Hsayn Cars par WhatsApp au +212 6 61 37 16 70. Marrakech, Merzouga, Errachidia.",
    url: "https://fadmahsayncars.com/contact",
    images: ["/images/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Location voiture Maroc",
    description: "Contactez Fadma Hsayn Cars par WhatsApp au +212 6 61 37 16 70. Marrakech, Merzouga, Errachidia.",
  },
  alternates: { canonical: "https://fadmahsayncars.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="mt-[70px]">
        <section className="bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white py-16 px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb
              items={[
                { name: "Accueil", url: "https://fadmahsayncars.com/" },
                { name: "Contact", url: "https://fadmahsayncars.com/contact" },
              ]}
            />
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Contactez-nous</h1>
            <p className="text-lg text-white/90">Réponse rapide par WhatsApp, téléphone ou email.</p>
          </div>
        </section>
        <section className="py-16 px-4 md:px-10 max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                <i className="fa-brands fa-whatsapp text-3xl text-green-500 mt-1" />
                <div>
                  <h2 className="font-bold text-[var(--blue)]">WhatsApp</h2>
                  <a href="https://wa.me/212661371670" className="text-[var(--red)] font-semibold text-lg">+212 6 61 37 16 70</a>
                  <p className="text-sm text-gray-500 mt-1">Le moyen le plus rapide pour réserver</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                <i className="fa-solid fa-phone text-2xl text-[var(--blue)] mt-1" />
                <div>
                  <h2 className="font-bold text-[var(--blue)]">Téléphone</h2>
                  <a href="tel:+212661371670" className="text-[var(--red)] font-semibold text-lg">+212 6 61 37 16 70</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                <i className="fa-solid fa-envelope text-2xl text-[var(--red)] mt-1" />
                <div>
                  <h2 className="font-bold text-[var(--blue)]">Email</h2>
                  <a href="mailto:fadmahsayncarrs@gmail.com" className="text-[var(--red)] font-semibold">fadmahsayncarrs@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="font-bold text-[var(--blue)] text-xl">Nos agences</h2>
              <Link href="/location-voiture-marrakech" className="block p-4 border rounded-xl hover:border-[var(--red)] transition">
                <strong>Aéroport Marrakech Menara</strong>
                <p className="text-sm text-gray-500">Prise en charge aéroport</p>
              </Link>
              <Link href="/location-voiture-merzouga" className="block p-4 border rounded-xl hover:border-[var(--red)] transition">
                <strong>Merzouga</strong>
                <p className="text-sm text-gray-500">Agence désert</p>
              </Link>
              <Link href="/location-voiture-errachidia" className="block p-4 border rounded-xl hover:border-[var(--red)] transition">
                <strong>Aéroport Errachidia</strong>
                <p className="text-sm text-gray-500">Prise en charge aéroport</p>
              </Link>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a href="https://wa.me/212661371670" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[var(--red)] text-white font-bold px-8 py-4 rounded-lg">
              Écrire sur WhatsApp <i className="fa-brands fa-whatsapp text-xl" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <a href="https://wa.me/212661371670" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg text-2xl">
        <i className="fa-brands fa-whatsapp" />
      </a>
    </>
  );
}
