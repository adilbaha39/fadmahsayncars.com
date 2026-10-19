import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDict } from "@/data/i18n-dict";
import type { Locale } from "@/lib/i18n";

const sections: Record<Locale, { title: string; intro: string; items: { h: string; p: string }[] }> = {
  fr: {
    title: "Conditions de location",
    intro: "Tout est transparent : caution, assurance, permis, annulation et livraison.",
    items: [
      { h: "1. Documents requis", p: "Permis de conduire valide avec au moins 2 ans d'ancienneté. Pour les étrangers, le permis national est accepté (permis international non obligatoire). Pièce d'identité ou passeport requis." },
      { h: "2. Caution (dépôt de garantie)", p: "La caution est de 20 000 MAD. Elle peut être versée par chèque, en espèces ou par carte bancaire. Elle est restituée à la fin de la location si aucun dommage n'est constaté." },
      { h: "3. Assurance", p: "L'assurance est incluse dans le tarif. Pour le détail des garanties et d'éventuelles franchises, contactez-nous avant la réservation." },
      { h: "4. Kilométrage", p: "Le kilométrage est illimité. Vous pouvez parcourir le Maroc sans restriction de distance." },
      { h: "5. Annulation", p: "L'annulation est gratuite jusqu'à 48 heures avant la prise en charge." },
      { h: "6. Paiement", p: "Nous acceptons le paiement en espèces et par carte bancaire." },
      { h: "7. Carburant et état du véhicule", p: "Le véhicule est remis avec un niveau de carburant convenu au contrat. Restituez-le dans le même état. Un état des lieux est effectué à la prise en charge et à la restitution." },
      { h: "8. Location aller simple", p: "Récupération dans une ville (Marrakech, Errachidia, Merzouga) et restitution dans une autre possible. Un supplément peut s'appliquer selon dates et véhicule — à confirmer avant réservation." },
      { h: "9. Agence et frais de livraison", p: "Agence principale à Merzouga. Livraison aéroport Marrakech : 1 200 MAD. Livraison aéroport Errachidia : 500 MAD. Les modalités exactes sont confirmées à la réservation." },
    ],
  },
  en: {
    title: "Rental terms",
    intro: "Everything is clear: deposit, insurance, licence, cancellation and delivery.",
    items: [
      { h: "1. Required documents", p: "Valid driving licence held for at least 2 years. For foreign visitors, a national licence is accepted (international permit not mandatory). ID or passport required." },
      { h: "2. Deposit", p: "The deposit is 20,000 MAD. Payable by cheque, cash or card. Returned at the end of the rental if no damage is found." },
      { h: "3. Insurance", p: "Insurance is included in the rate. For cover details and possible excesses, contact us before booking." },
      { h: "4. Mileage", p: "Mileage is unlimited. You can travel across Morocco without distance restriction." },
      { h: "5. Cancellation", p: "Free cancellation up to 48 hours before pickup." },
      { h: "6. Payment", p: "We accept cash and bank card." },
      { h: "7. Fuel and vehicle condition", p: "The vehicle is handed over with the fuel level agreed in the contract. Return it in the same condition. A check-in and check-out inspection is carried out." },
      { h: "8. One-way rental", p: "Pickup in one city (Marrakech, Errachidia, Merzouga) and return in another is possible. A supplement may apply depending on dates and vehicle — confirm before booking." },
      { h: "9. Agency and delivery fees", p: "Main agency in Merzouga. Marrakech airport delivery: 1,200 MAD. Errachidia airport delivery: 500 MAD. Exact arrangements are confirmed when booking." },
    ],
  },
  ar: {
    title: "شروط الكراء",
    intro: "كل شيء واضح: الوديعة، التأمين، الرخصة، الإلغاء والتوصيل.",
    items: [
      { h: "1. الوثائق المطلوبة", p: "رخصة قيادة سارية منذ سنتين على الأقل. للأجانب تُقبل الرخصة الوطنية (رخصة دولية غير إلزامية). بطاقة تعريف أو جواز سفر مطلوب." },
      { h: "2. الوديعة", p: "الوديعة 20 000 درهم. يمكن دفعها بشيك أو نقداً أو بطاقة. تُسترجع في نهاية الكراء إن لم يُلاحظ ضرر." },
      { h: "3. التأمين", p: "التأمين مشمول في السعر. لتفاصيل الضمانات والتحمل، اتصل بنا قبل الحجز." },
      { h: "4. الكيلومترات", p: "الكيلومترات غير محدودة. يمكنك التجول في المغرب دون قيد مسافة." },
      { h: "5. الإلغاء", p: "إلغاء مجاني حتى 48 ساعة قبل الاستلام." },
      { h: "6. الدفع", p: "نقبل الدفع نقداً وبالبطاقة البنكية." },
      { h: "7. الوقود وحالة السيارة", p: "تُسلَّم السيارة بمستوى وقود متفق عليه في العقد. أرجعها بنفس الحالة. يتم فحص عند الاستلام والإرجاع." },
      { h: "8. كراء باتجاه واحد", p: "الاستلام في مدينة (مراكش، الرشيدية، مرزوكة) والإرجاع في أخرى ممكن. قد يُطبق مكمل حسب التواريخ والسيارة — أكّد قبل الحجز." },
      { h: "9. الوكالة ورسوم التوصيل", p: "الوكالة الرئيسية في مرزوكة. توصيل مطار مراكش: 1200 درهم. توصيل مطار الرشيدية: 500 درهم. التفاصيل تُؤكَّد عند الحجز." },
    ],
  },
  es: {
    title: "Condiciones de alquiler",
    intro: "Todo es transparente: fianza, seguro, permiso, cancelación y entrega.",
    items: [
      { h: "1. Documentos requeridos", p: "Permiso de conducir válido con al menos 2 años. Para extranjeros se acepta el permiso nacional (internacional no obligatorio). DNI o pasaporte requerido." },
      { h: "2. Fianza", p: "La fianza es de 20.000 MAD. Puede pagarse con cheque, efectivo o tarjeta. Se devuelve al final del alquiler si no hay daños." },
      { h: "3. Seguro", p: "El seguro está incluido en la tarifa. Para detalles de coberturas y posibles franquicias, contáctenos antes de reservar." },
      { h: "4. Kilometraje", p: "El kilometraje es ilimitado. Puede recorrer Marruecos sin restricción de distancia." },
      { h: "5. Cancelación", p: "Cancelación gratuita hasta 48 horas antes de la recogida." },
      { h: "6. Pago", p: "Aceptamos efectivo y tarjeta bancaria." },
      { h: "7. Combustible y estado del vehículo", p: "El vehículo se entrega con el nivel de combustible acordado en el contrato. Devuélvalo en el mismo estado. Se realiza un inventario a la recogida y a la devolución." },
      { h: "8. Alquiler solo ida", p: "Recogida en una ciudad (Marrakech, Errachidia, Merzouga) y devolución en otra posible. Puede aplicarse un suplemento según fechas y vehículo — confirme antes de reservar." },
      { h: "9. Agencia y tarifas de entrega", p: "Agencia principal en Merzouga. Entrega aeropuerto Marrakech: 1.200 MAD. Entrega aeropuerto Errachidia: 500 MAD. Las modalidades se confirman al reservar." },
    ],
  },
};

export default function ConditionsPage({ locale }: { locale: Locale }) {
  const s = sections[locale];
  const t = getDict(locale);
  return (
    <>
      <Navbar locale={locale} />
      <main className="mt-[70px]">
        <section className="bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white py-16 px-4 md:px-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">{s.title}</h1>
            <p className="text-white/90 text-lg">{s.intro}</p>
          </div>
        </section>
        <section className="py-16 px-4 md:px-10 max-w-3xl mx-auto space-y-10 text-gray-700">
          {s.items.map((item, i) => (
            <div key={i}>
              <h2 className="text-xl font-bold text-[var(--blue)] mb-3">{item.h}</h2>
              <p className="leading-relaxed">{item.p}</p>
            </div>
          ))}
          <a href="https://wa.me/212661371670" className="inline-block mt-4 bg-[var(--red)] text-white font-bold px-6 py-3 rounded-lg">
            {t.common.bookWhatsApp}
          </a>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
