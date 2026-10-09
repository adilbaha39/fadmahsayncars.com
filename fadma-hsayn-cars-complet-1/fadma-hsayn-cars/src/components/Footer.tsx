import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-6 px-4 md:px-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-gray-200">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/images/logo.png" alt="Fadma Hsayn Cars" className="h-12" />
            <div className="flex flex-col leading-tight">
              <span className="text-[11px] font-bold text-[var(--blue)]">FADMA HSAYN</span>
              <span className="text-[9px] font-medium text-[var(--red)]">CARS</span>
            </div>
          </div>
          <p className="text-[12px] text-gray-500 leading-relaxed mb-4 max-w-[230px]">
            Votre partenaire de confiance pour la location de voitures dans les aéroports du Maroc.
          </p>
          <div className="flex gap-2">
            <a href="https://wa.me/212661371670" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition" aria-label="WhatsApp">
              <i className="fa-brands fa-whatsapp" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-[13px] font-bold text-[var(--blue)] uppercase tracking-wide mb-4">LIENS RAPIDES</h4>
          <ul className="space-y-2 text-[13px] text-gray-500">
            <li><Link href="/" className="hover:text-[var(--red)]">Accueil</Link></li>
            <li><Link href="/location-voiture-marrakech" className="hover:text-[var(--red)]">Marrakech</Link></li>
            <li><Link href="/location-voiture-merzouga" className="hover:text-[var(--red)]">Merzouga</Link></li>
            <li><Link href="/location-voiture-errachidia" className="hover:text-[var(--red)]">Errachidia</Link></li>
            <li><Link href="/faq" className="hover:text-[var(--red)]">FAQ</Link></li>
            <li><Link href="/conditions" className="hover:text-[var(--red)]">Conditions</Link></li>
            <li><Link href="/blog/marrakech-merzouga" className="hover:text-[var(--red)]">Road trip Merzouga</Link></li>
            <li><Link href="/blog/errachidia-merzouga" className="hover:text-[var(--red)]">Errachidia → Merzouga</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--red)]">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[13px] font-bold text-[var(--blue)] uppercase tracking-wide mb-4">NOS SERVICES</h4>
          <ul className="space-y-2 text-[13px] text-gray-500">
            <li><Link href="/location-voiture-marrakech" className="hover:text-[var(--red)]">Location aéroport Marrakech</Link></li>
            <li><Link href="/location-voiture-merzouga" className="hover:text-[var(--red)]">Location Merzouga</Link></li>
            <li><Link href="/location-voiture-errachidia" className="hover:text-[var(--red)]">Location aéroport Errachidia</Link></li>
            <li><Link href="/location-voiture-aller-simple" className="hover:text-[var(--red)]">Location aller simple</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[13px] font-bold text-[var(--blue)] uppercase tracking-wide mb-4">CONTACTEZ-NOUS</h4>
          <div className="space-y-3 text-[13px] text-gray-500">
            <div className="flex items-center gap-2"><i className="fa-solid fa-phone text-[var(--blue)]" /> +212 6 61 37 16 70</div>
            <div className="flex items-center gap-2"><i className="fa-brands fa-whatsapp text-green-500" /> +212 6 61 37 16 70</div>
            <div className="flex items-center gap-2"><i className="fa-solid fa-envelope text-[var(--red)]" /> fadmahsayncarrs@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="text-center pt-6 text-[12px] text-gray-500">© 2026 FADMA HSAYN CARS. Tous droits réservés.</div>
    </footer>
  );
}
