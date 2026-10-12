import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Blog - Guides location voiture Maroc",
  description:
    "Guides pratiques : Marrakech à Merzouga en voiture, aéroport Errachidia à Merzouga. Conseils, itinéraires et location.",
  alternates: { canonical: "https://fadmahsayncars.com/blog" },
  openGraph: {
    title: "Blog - Guides location voiture Maroc",
    description: "Itinéraires et conseils pour louer une voiture au Maroc.",
    url: "https://fadmahsayncars.com/blog",
    images: ["/images/sora1.jpeg"],
  },
};

const posts = [
  {
    href: "/blog/marrakech-merzouga",
    title: "Location voiture Marrakech-Merzouga : aller simple",
    desc: "Location aller simple Marrakech → Merzouga : itinéraire, choix du véhicule et conseils pour réserver.",
    image: "/images/sora1.jpeg",
  },
  {
    href: "/blog/errachidia-merzouga",
    title: "Location voiture Errachidia-Merzouga : aéroport et aller simple",
    desc: "Location depuis l'aéroport d'Errachidia vers Merzouga : trajet, aller simple et conseils pour réserver.",
    image: "/images/sora3.jpeg",
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <Navbar />
      <main className="mt-[70px]">
        <section className="bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white py-16 px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb
              items={[
                { name: "Accueil", url: "https://fadmahsayncars.com/" },
                { name: "Blog", url: "https://fadmahsayncars.com/blog" },
              ]}
            />
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Blog & Guides</h1>
            <p className="text-lg text-white/90">Itinéraires et conseils pour votre location de voiture au Maroc.</p>
          </div>
        </section>

        <section className="py-16 px-4 md:px-10 max-w-4xl mx-auto">
          <div className="grid gap-8">
            {posts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="flex flex-col sm:flex-row gap-5 bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[var(--red)] transition"
              >
                <img src={post.image} alt={post.title} className="w-full sm:w-56 h-44 object-cover shrink-0" />
                <div className="p-5 flex flex-col justify-center">
                  <h2 className="text-xl font-bold text-[var(--blue)] mb-2">{post.title}</h2>
                  <p className="text-sm text-gray-600 mb-3">{post.desc}</p>
                  <span className="text-[var(--red)] font-semibold text-sm">Lire l&apos;article →</span>
                </div>
              </Link>
            ))}
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
