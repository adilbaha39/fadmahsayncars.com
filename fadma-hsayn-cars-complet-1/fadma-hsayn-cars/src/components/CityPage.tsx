import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDict } from "@/data/i18n-dict";
import { localizedPath, type Locale } from "@/lib/i18n";

export type CityKey = "marrakech" | "merzouga" | "errachidia" | "oneWay";

const cityConfig: Record<
  CityKey,
  { path: string; titleKey: "marrakechTitle" | "merzougaTitle" | "errachidiaTitle" | "oneWayTitle"; descKey: "marrakechDesc" | "merzougaDesc" | "errachidiaDesc" | "oneWayDesc"; img: string }
> = {
  marrakech: {
    path: "/location-voiture-marrakech",
    titleKey: "marrakechTitle",
    descKey: "marrakechDesc",
    img: "location-voiture-marrakech-jamaa-elfna.webp",
  },
  merzouga: {
    path: "/location-voiture-merzouga",
    titleKey: "merzougaTitle",
    descKey: "merzougaDesc",
    img: "location-voiture-merzouga-desert.webp",
  },
  errachidia: {
    path: "/location-voiture-errachidia",
    titleKey: "errachidiaTitle",
    descKey: "errachidiaDesc",
    img: "location-voiture-errachidia.webp",
  },
  oneWay: {
    path: "/location-voiture-aller-simple",
    titleKey: "oneWayTitle",
    descKey: "oneWayDesc",
    img: "location-voiture-marrakech-jamaa-elfna.webp",
  },
};

/** Paragraphs per city per locale - matching French depth */
const body: Record<CityKey, Record<Locale, string[]>> = {
  marrakech: {
    fr: [
      "Louez votre voiture avec livraison à l'aéroport de Marrakech Menara. Frais de livraison : 1 200 MAD.",
      "Notre flotte comprend des citadines, berlines et SUV (Duster, Creta, Tucson…) adaptés à la ville et aux road trips vers Merzouga.",
      "Assurance incluse, kilométrage illimité. Caution 20 000 MAD. Annulation gratuite jusqu'à 48h avant la prise en charge.",
      "Option aller simple disponible : récupérez à Marrakech et restituez à Merzouga selon disponibilité et conditions.",
      "Agence principale à Merzouga. Contactez-nous sur WhatsApp pour confirmer les dates, le véhicule et les conditions.",
    ],
    en: [
      "Rent your car with delivery at Marrakech Menara airport. Delivery fee: 1,200 MAD.",
      "Our fleet includes city cars, sedans and SUVs (Duster, Creta, Tucson…) suited to the city and road trips to Merzouga.",
      "Insurance included, unlimited mileage. Deposit 20,000 MAD. Free cancellation up to 48h before pickup.",
      "One-way option available: pick up in Marrakech and return in Merzouga subject to availability and conditions.",
      "Main agency in Merzouga. Contact us on WhatsApp to confirm dates, vehicle and terms.",
    ],
    ar: [
      "اكتر سيارتك مع توصيل في مطار مراكش المنارة. رسوم التوصيل: 1200 درهم.",
      "أسطولنا يشمل سيارات حضرية وسيدان وSUV (داستر، كريتا، توسان…) مناسبة للمدينة والرحلات نحو مرزوكة.",
      "تأمين مشمول وكيلومترات غير محدودة. وديعة 20 000 درهم. إلغاء مجاني حتى 48 ساعة قبل الاستلام.",
      "خيار الاتجاه الواحد متاح: استلام في مراكش وإرجاع في مرزوكة حسب التوفر والشروط.",
      "الوكالة الرئيسية في مرزوكة. تواصل معنا عبر واتساب لتأكيد التواريخ والسيارة والشروط.",
    ],
    es: [
      "Alquile su coche con entrega en el aeropuerto Marrakech Menara. Tarifa de entrega: 1.200 MAD.",
      "Nuestra flota incluye utilitarios, sedanes y SUV (Duster, Creta, Tucson…) para la ciudad y road trips a Merzouga.",
      "Seguro incluido, kilometraje ilimitado. Fianza 20.000 MAD. Cancelación gratuita hasta 48h antes de la recogida.",
      "Opción solo ida disponible: recogida en Marrakech y devolución en Merzouga según disponibilidad y condiciones.",
      "Agencia principal en Merzouga. Contáctenos por WhatsApp para confirmar fechas, vehículo y condiciones.",
    ],
  },
  merzouga: {
    fr: [
      "Agence principale à Merzouga. Prise en charge et restitution sur place, près du désert et d'Erg Chebbi.",
      "SUV recommandés pour les routes du Sud (Duster, Creta, Tucson…). Vérifiez les conditions concernant pistes et dunes.",
      "Idéal si vous arrivez via l'aéroport d'Errachidia ou depuis Marrakech en aller simple.",
      "Assurance incluse, kilométrage illimité, caution 20 000 MAD. Annulation gratuite jusqu'à 48h avant.",
      "Réservez via WhatsApp en indiquant vos dates et le type de véhicule souhaité.",
    ],
    en: [
      "Main agency in Merzouga. Pickup and return on site, near the desert and Erg Chebbi.",
      "SUVs recommended for southern roads (Duster, Creta, Tucson…). Check terms for tracks and dunes.",
      "Ideal if you arrive via Errachidia airport or from Marrakech on a one-way rental.",
      "Insurance included, unlimited mileage, deposit 20,000 MAD. Free cancellation up to 48h before.",
      "Book via WhatsApp with your dates and preferred vehicle type.",
    ],
    ar: [
      "الوكالة الرئيسية في مرزوكة. استلام وإرجاع في المكان، قرب الصحراء وإرغ شبي.",
      "نوصي بسيارات SUV لطرق الجنوب (داستر، كريتا، توسان…). راجع الشروط بخصوص المسارات والكثبان.",
      "مثالي إن وصلت عبر مطار الرشيدية أو من مراكش بكراء باتجاه واحد.",
      "تأمين مشمول، كيلومترات غير محدودة، وديعة 20 000 درهم. إلغاء مجاني حتى 48 ساعة قبل.",
      "احجز عبر واتساب مع تواريخك ونوع السيارة المطلوبة.",
    ],
    es: [
      "Agencia principal en Merzouga. Recogida y devolución in situ, cerca del desierto y Erg Chebbi.",
      "SUV recomendados para el sur (Duster, Creta, Tucson…). Verifique condiciones sobre pistas y dunas.",
      "Ideal si llega por el aeropuerto de Errachidia o desde Marrakech con alquiler solo ida.",
      "Seguro incluido, kilometraje ilimitado, fianza 20.000 MAD. Cancelación gratuita hasta 48h antes.",
      "Reserve por WhatsApp indicando fechas y tipo de vehículo.",
    ],
  },
  errachidia: {
    fr: [
      "Livraison aéroport Errachidia : 500 MAD. Porte d'entrée pratique vers Merzouga et Erg Chebbi.",
      "Indiquez l'heure d'arrivée de votre vol pour organiser la prise en charge dans les meilleures conditions.",
      "Aller simple vers Merzouga disponible selon dates et véhicule.",
      "Assurance incluse, kilométrage illimité, caution 20 000 MAD.",
      "Contactez Fadma Hsayn Cars sur WhatsApp pour confirmer disponibilité et conditions.",
    ],
    en: [
      "Errachidia airport delivery: 500 MAD. Practical gateway to Merzouga and Erg Chebbi.",
      "Share your flight arrival time so we can organise handover smoothly.",
      "One-way to Merzouga available depending on dates and vehicle.",
      "Insurance included, unlimited mileage, deposit 20,000 MAD.",
      "Contact Fadma Hsayn Cars on WhatsApp to confirm availability and terms.",
    ],
    ar: [
      "توصيل مطار الرشيدية: 500 درهم. بوابة عملية نحو مرزوكة وإرغ شبي.",
      "أرسل وقت وصول رحلتك لتنظيم التسليم في أفضل الظروف.",
      "اتجاه واحد إلى مرزوكة متاح حسب التواريخ والسيارة.",
      "تأمين مشمول، كيلومترات غير محدودة، وديعة 20 000 درهم.",
      "تواصل مع Fadma Hsayn Cars عبر واتساب لتأكيد التوفر والشروط.",
    ],
    es: [
      "Entrega aeropuerto Errachidia: 500 MAD. Puerta práctica hacia Merzouga y Erg Chebbi.",
      "Indique la hora de llegada del vuelo para organizar la entrega.",
      "Solo ida a Merzouga disponible según fechas y vehículo.",
      "Seguro incluido, kilometraje ilimitado, fianza 20.000 MAD.",
      "Contacte Fadma Hsayn Cars por WhatsApp para confirmar disponibilidad y condiciones.",
    ],
  },
  oneWay: {
    fr: [
      "Location aller simple : récupérez le véhicule dans une ville et restituez-le dans une autre (ex. Marrakech → Merzouga, Errachidia → Merzouga).",
      "Un supplément peut s'appliquer selon les dates et le véhicule. À confirmer avec l'agence avant réservation.",
      "Vérifiez caution, assurance, kilométrage et points exacts de prise en charge / restitution dans le contrat.",
      "Idéal pour un road trip vers le désert sans revenir au point de départ.",
      "Contactez-nous sur WhatsApp avec vos dates, lieux et type de véhicule.",
    ],
    en: [
      "One-way rental: pick up in one city and return in another (e.g. Marrakech → Merzouga, Errachidia → Merzouga).",
      "A supplement may apply depending on dates and vehicle. Confirm with the agency before booking.",
      "Check deposit, insurance, mileage and exact pickup/return points in the contract.",
      "Ideal for a desert road trip without returning to the start point.",
      "Contact us on WhatsApp with your dates, locations and vehicle type.",
    ],
    ar: [
      "كراء باتجاه واحد: استلام في مدينة وإرجاع في أخرى (مثلاً مراكش → مرزوكة، الرشيدية → مرزوكة).",
      "قد يُطبق مكمل حسب التواريخ والسيارة. أكّد مع الوكالة قبل الحجز.",
      "تحقق من الوديعة والتأمين والكيلومترات ونقاط الاستلام/الإرجاع في العقد.",
      "مثالي لرحلة صحراوية دون العودة لنقطة البداية.",
      "تواصل معنا عبر واتساب مع التواريخ والأماكن ونوع السيارة.",
    ],
    es: [
      "Alquiler solo ida: recogida en una ciudad y devolución en otra (p. ej. Marrakech → Merzouga, Errachidia → Merzouga).",
      "Puede aplicarse un suplemento según fechas y vehículo. Confirme con la agencia antes de reservar.",
      "Verifique fianza, seguro, kilometraje y puntos exactos de recogida/devolución en el contrato.",
      "Ideal para un road trip al desierto sin volver al punto de partida.",
      "Contáctenos por WhatsApp con fechas, lugares y tipo de vehículo.",
    ],
  },
};

export default function CityPage({ locale, city }: { locale: Locale; city: CityKey }) {
  const cfg = cityConfig[city];
  const t = getDict(locale);
  const lp = (p: string) => localizedPath(p, locale);
  const paragraphs = body[city][locale];
  const title = t.cities[cfg.titleKey];
  const desc = t.cities[cfg.descKey];

  return (
    <>
      <Navbar locale={locale} />
      <main className="mt-[70px]">
        <section className="bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{title}</h1>
            <p className="text-lg text-white/90">{desc}</p>
          </div>
        </section>
        <section className="py-12 px-4 max-w-3xl mx-auto space-y-4 text-gray-700 leading-relaxed">
          <img src={`/images/${cfg.img}`} alt={title} className="w-full h-56 object-cover rounded-2xl mb-4" />
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="pt-2">
            <Link href={lp("/faq")} className="text-[var(--red)] font-semibold">{t.nav.faq}</Link>
            {" · "}
            <Link href={lp("/conditions")} className="text-[var(--red)] font-semibold">{t.nav.conditions}</Link>
            {" · "}
            <Link href={lp("/contact")} className="text-[var(--red)] font-semibold">{t.nav.contact}</Link>
            {" · "}
            <Link href={lp("/location-voiture-aller-simple")} className="text-[var(--red)] font-semibold">{t.nav.oneWay}</Link>
          </p>
          <a href="https://wa.me/212661371670" className="inline-block mt-4 bg-[var(--red)] text-white font-bold px-6 py-3 rounded-lg">
            {t.common.bookWhatsApp}
          </a>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
