import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white text-center">
      <h1 className="text-6xl font-extrabold text-[var(--blue)] mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-3">Page introuvable</h2>
      <p className="text-gray-500 mb-8 max-w-md">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link href="/" className="px-6 py-3 bg-[var(--red)] text-white font-bold rounded-lg hover:bg-[#c01820] transition">
          Accueil
        </Link>
        <Link href="/location-voiture-marrakech" className="px-6 py-3 border border-[var(--blue)] text-[var(--blue)] font-bold rounded-lg hover:bg-[var(--blue)] hover:text-white transition">
          Location Marrakech
        </Link>
        <a href="https://wa.me/212661371670" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#25D366] text-white font-bold rounded-lg hover:opacity-90 transition">
          WhatsApp
        </a>
      </div>
    </div>
  );
}
