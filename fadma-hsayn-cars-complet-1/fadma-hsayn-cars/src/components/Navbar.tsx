"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 h-[70px] flex items-center justify-between px-4 md:px-10 transition-all ${isScrolled ? "bg-white/95 backdrop-blur shadow-lg" : "bg-white/95 backdrop-blur shadow"}`}>
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Fadma Hsayn Cars" className="h-12 w-auto object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="text-[11px] font-bold text-[var(--blue)] tracking-wider">FADMA HSAYN</span>
            <span className="text-[9px] font-medium text-[var(--red)] tracking-wide">CARS</span>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-6 list-none text-[13px] font-medium">
          <li><Link href="/" className="hover:text-[var(--red)] transition">Accueil</Link></li>
          <li><Link href="/location-voiture-marrakech" className="hover:text-[var(--red)] transition">Marrakech</Link></li>
          <li><Link href="/location-voiture-merzouga" className="hover:text-[var(--red)] transition">Merzouga</Link></li>
          <li><Link href="/location-voiture-errachidia" className="hover:text-[var(--red)] transition">Errachidia</Link></li>
          <li><Link href="/location-voiture-aller-simple" className="hover:text-[var(--red)] transition">Aller simple</Link></li>
          <li><Link href="/faq" className="hover:text-[var(--red)] transition">FAQ</Link></li>
          <li><Link href="/conditions" className="hover:text-[var(--red)] transition">Conditions</Link></li>
        </ul>

        <div className="flex items-center gap-3">
          <a href="tel:+212661371670" className="hidden md:flex items-center gap-2 border-2 border-[var(--red)] text-[var(--red)] rounded-full px-4 py-2 text-[13px] font-semibold hover:bg-[var(--red)] hover:text-white transition">
            <i className="fa-solid fa-phone" /> +212 6 61 37 16 70
          </a>
          <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            <span className={`block w-6 h-0.5 bg-[var(--text-dark)] transition ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[var(--text-dark)] transition ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[var(--text-dark)] transition ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed top-[70px] left-0 right-0 bg-white z-40 shadow-xl p-5 flex flex-col gap-2 lg:hidden">
          <Link href="/" onClick={() => setMobileOpen(false)} className="py-3 px-4 rounded-lg text-[14px] font-medium hover:bg-gray-100">Accueil</Link>
          <Link href="/location-voiture-marrakech" onClick={() => setMobileOpen(false)} className="py-3 px-4 rounded-lg text-[14px] font-medium hover:bg-gray-100">Marrakech</Link>
          <Link href="/location-voiture-merzouga" onClick={() => setMobileOpen(false)} className="py-3 px-4 rounded-lg text-[14px] font-medium hover:bg-gray-100">Merzouga</Link>
          <Link href="/location-voiture-errachidia" onClick={() => setMobileOpen(false)} className="py-3 px-4 rounded-lg text-[14px] font-medium hover:bg-gray-100">Errachidia</Link>
          <Link href="/location-voiture-aller-simple" onClick={() => setMobileOpen(false)} className="py-3 px-4 rounded-lg text-[14px] font-medium hover:bg-gray-100">Aller simple</Link>
          <Link href="/faq" onClick={() => setMobileOpen(false)} className="py-3 px-4 rounded-lg text-[14px] font-medium hover:bg-gray-100">FAQ</Link>
          <Link href="/conditions" onClick={() => setMobileOpen(false)} className="py-3 px-4 rounded-lg text-[14px] font-medium hover:bg-gray-100">Conditions</Link>
          <a href="tel:+212661371670" className="mt-2 py-3 text-center bg-gradient-to-r from-[var(--red)] to-[#c01820] text-white rounded-lg font-semibold">+212 6 61 37 16 70</a>
        </div>
      )}
    </>
  );
}
