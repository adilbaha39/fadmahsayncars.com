import Link from "next/link";
import { getDict } from "@/data/i18n-dict";
import { localizedPath, type Locale } from "@/lib/i18n";

export default function Footer({ locale = "fr" as Locale }: { locale?: Locale }) {
  const t = getDict(locale);
  const lp = (p: string) => localizedPath(p, locale);

  return (
    <footer className="bg-[var(--blue)] text-white pt-12 pb-6 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-8">
        <div>
          <h3 className="font-bold text-lg mb-3">Fadma Hsayn Cars</h3>
          <p className="text-sm text-white/80 leading-relaxed">{t.footer.desc}</p>
          <p className="text-sm mt-3 text-white/90">{t.common.agencyMerzouga}</p>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-sm uppercase tracking-wide">{t.footer.quickLinks}</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href={lp("/")} className="hover:text-white">{t.nav.home}</Link></li>
            <li><Link href={lp("/location-voiture-marrakech")} className="hover:text-white">{t.nav.marrakech}</Link></li>
            <li><Link href={lp("/location-voiture-merzouga")} className="hover:text-white">{t.nav.merzouga}</Link></li>
            <li><Link href={lp("/location-voiture-errachidia")} className="hover:text-white">{t.nav.errachidia}</Link></li>
            <li><Link href={lp("/location-voiture-aller-simple")} className="hover:text-white">{t.nav.oneWay}</Link></li>
            <li><Link href={lp("/blog")} className="hover:text-white">{t.nav.blog}</Link></li>
            <li><Link href={lp("/faq")} className="hover:text-white">{t.nav.faq}</Link></li>
            <li><Link href={lp("/contact")} className="hover:text-white">{t.nav.contact}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-sm uppercase tracking-wide">{t.footer.services}</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href={lp("/location-voiture-marrakech")} className="hover:text-white">{t.common.deliveryMarrakech}</Link></li>
            <li><Link href={lp("/location-voiture-errachidia")} className="hover:text-white">{t.common.deliveryErrachidia}</Link></li>
            <li><Link href={lp("/conditions")} className="hover:text-white">{t.nav.conditions}</Link></li>
          </ul>
          <p className="mt-4 text-sm">
            <a href="https://wa.me/212661371670" className="hover:underline">WhatsApp: +212 6 61 37 16 70</a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/20 pt-4 text-center text-xs text-white/60">
        © 2026 Fadma Hsayn Cars. {t.footer.rights}
      </div>
    </footer>
  );
}
