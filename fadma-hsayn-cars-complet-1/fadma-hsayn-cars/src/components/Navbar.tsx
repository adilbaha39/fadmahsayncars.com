"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getDict } from "@/data/i18n-dict";
import { localizedPath, type Locale } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({ locale = "fr" as Locale }: { locale?: Locale }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = getDict(locale).nav;
  const lp = (p: string) => localizedPath(p, locale);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: t.home },
    { href: "/location-voiture-marrakech", label: t.marrakech },
    { href: "/location-voiture-merzouga", label: t.merzouga },
    { href: "/location-voiture-errachidia", label: t.errachidia },
    { href: "/location-voiture-aller-simple", label: t.oneWay },
    { href: "/faq", label: t.faq },
    { href: "/blog", label: t.blog },
    { href: "/conditions", label: t.conditions },
    { href: "/contact", label: t.contact },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[70px] flex items-center justify-between px-4 md:px-10 transition-all ${
          isScrolled ? "bg-white/95 backdrop-blur shadow-lg" : "bg-white/95 backdrop-blur shadow"
        }`}
      >
        <Link href={lp("/")} className="flex items-center gap-2">
          <img src="/images/logo-fadma-hsayn-cars.webp" alt="Fadma Hsayn Cars" className="h-12 w-auto object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="text-[11px] font-bold text-[var(--blue)] tracking-wider">FADMA HSAYN</span>
            <span className="text-[9px] font-medium text-[var(--red)] tracking-wide">CARS</span>
          </div>
        </Link>

        <ul className="hidden xl:flex items-center gap-4 list-none text-[12px] font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={lp(l.href)} className="hover:text-[var(--red)] transition">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LanguageSwitcher current={locale} />
          </div>
          <a
            href="tel:+212661371670"
            className="hidden md:flex items-center gap-2 border-2 border-[var(--red)] text-[var(--red)] rounded-full px-3 py-1.5 text-[12px] font-semibold hover:bg-[var(--red)] hover:text-white transition"
          >
            <i className="fa-solid fa-phone" /> +212 6 61 37 16 70
          </a>
          <button className="xl:hidden flex flex-col gap-1.5 p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            <span className={`block w-6 h-0.5 bg-[var(--text-dark)] transition ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[var(--text-dark)] transition ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[var(--text-dark)] transition ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed top-[70px] left-0 right-0 bg-white z-40 shadow-xl p-5 flex flex-col gap-1 xl:hidden max-h-[80vh] overflow-y-auto">
          <div className="mb-2 sm:hidden">
            <LanguageSwitcher current={locale} />
          </div>
          {links.map((l) => (
            <Link
              key={l.href}
              href={lp(l.href)}
              onClick={() => setMobileOpen(false)}
              className="py-3 px-4 rounded-lg text-[14px] font-medium hover:bg-gray-100"
            >
              {l.label}
            </Link>
          ))}
          <a href="tel:+212661371670" className="mt-2 py-3 text-center bg-gradient-to-r from-[var(--red)] to-[#c01820] text-white rounded-lg font-semibold">
            +212 6 61 37 16 70
          </a>
        </div>
      )}
    </>
  );
}
