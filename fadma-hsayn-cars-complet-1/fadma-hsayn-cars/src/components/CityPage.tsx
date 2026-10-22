import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDict } from "@/data/i18n-dict";
import { localizedPath, type Locale } from "@/lib/i18n";

export type CityKey = "marrakech" | "merzouga" | "errachidia" | "oneWay";

const cityConfig: Record<
  CityKey,
  {
    path: string;
    titleKey: "marrakechTitle" | "merzougaTitle" | "errachidiaTitle" | "oneWayTitle";
    descKey: "marrakechDesc" | "merzougaDesc" | "errachidiaDesc" | "oneWayDesc";
    img: string;
  }
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

/** Rich content — French first, then full EN / AR / ES */
const body: Record<CityKey, Record<Locale, { h2: string; p: string }[]>> = {
  marrakech: {
    fr: [
      {
        h2: "Location de voiture à l'aéroport de Marrakech Menara",
        p: "Fadma Hsayn Cars propose la location de voiture avec livraison à l'aéroport de Marrakech Menara. Dès votre arrivée, vous pouvez récupérer un véhicule adapté à vos besoins : citadine, berline ou SUV. Les frais de livraison à l'aéroport de Marrakech s'élèvent à 1 200 MAD. Notre agence principale se trouve à Merzouga ; le service à Marrakech est organisé pour vous faire gagner du temps dès la sortie de l'avion.",
      },
      {
        h2: "Une flotte pour la ville et les road trips",
        p: "Notre flotte comprend des modèles économiques et des SUV robustes (Dacia Duster, Hyundai Creta, Hyundai Tucson, Renault Clio, Dacia Logan, Jogger 7 places, etc.). Que vous restiez à Marrakech ou que vous partiez vers Merzouga, Ouarzazate ou le désert, nous vous aidons à choisir le véhicule le plus adapté au nombre de passagers, aux bagages et au type de routes.",
      },
      {
        h2: "Conditions claires et transparentes",
        p: "L'assurance est incluse dans le tarif. Le kilométrage est illimité. La caution s'élève à 20 000 MAD (chèque, espèces ou carte) et est restituée si aucun dommage n'est constaté. L'annulation est gratuite jusqu'à 48 heures avant la prise en charge. Un permis valide avec au moins 2 ans d'ancienneté est requis ; le permis national des visiteurs étrangers est accepté.",
      },
      {
        h2: "Aller simple Marrakech → Merzouga",
        p: "Vous pouvez récupérer la voiture à Marrakech et la restituer à Merzouga (location aller simple), selon disponibilités et conditions. C'est la solution idéale pour un road trip vers Erg Chebbi sans revenir au point de départ. Un supplément peut s'appliquer selon les dates et le véhicule — à confirmer avant réservation via WhatsApp.",
      },
      {
        h2: "Comment réserver ?",
        p: "Contactez-nous sur WhatsApp (+212 6 61 37 16 70) en indiquant vos dates, l'heure d'arrivée du vol si besoin, le type de véhicule souhaité et le lieu de restitution. Nous confirmons la disponibilité, le tarif et les conditions par écrit avant votre arrivée.",
      },
    ],
    en: [
      {
        h2: "Car rental at Marrakech Menara Airport",
        p: "Fadma Hsayn Cars offers car rental with delivery at Marrakech Menara Airport. On arrival, you can pick up a vehicle suited to your needs: city car, sedan or SUV. Delivery at Marrakech airport costs 1,200 MAD. Our main agency is in Merzouga; the Marrakech service is organised so you save time as soon as you leave the plane.",
      },
      {
        h2: "A fleet for the city and road trips",
        p: "Our fleet includes economy models and sturdy SUVs (Dacia Duster, Hyundai Creta, Hyundai Tucson, Renault Clio, Dacia Logan, Jogger 7 seats, etc.). Whether you stay in Marrakech or head to Merzouga, Ouarzazate or the desert, we help you choose the right vehicle for passengers, luggage and road type.",
      },
      {
        h2: "Clear and transparent conditions",
        p: "Insurance is included. Mileage is unlimited. The deposit is 20,000 MAD (cheque, cash or card) and is returned if no damage is found. Free cancellation up to 48 hours before pickup. A valid licence held for at least 2 years is required; foreign visitors' national licences are accepted.",
      },
      {
        h2: "One-way Marrakech → Merzouga",
        p: "You can pick up the car in Marrakech and return it in Merzouga (one-way rental), subject to availability and conditions. Ideal for a road trip to Erg Chebbi without going back to the start. A supplement may apply depending on dates and vehicle — confirm before booking on WhatsApp.",
      },
      {
        h2: "How to book?",
        p: "Contact us on WhatsApp (+212 6 61 37 16 70) with your dates, flight arrival time if needed, preferred vehicle and return location. We confirm availability, price and terms in writing before you arrive.",
      },
    ],
    ar: [
      {
        h2: "كراء السيارات في مطار مراكش المنارة",
        p: "تقدم Fadma Hsayn Cars كراء السيارات مع التوصيل في مطار مراكش المنارة. عند وصولك يمكنك استلام سيارة تناسب احتياجك: حضرية أو سيدان أو SUV. رسوم التوصيل في مطار مراكش 1200 درهم. وكالتنا الرئيسية في مرزوكة؛ خدمة مراكش منظمة لتوفير الوقت فور خروجك من الطائرة.",
      },
      {
        h2: "أسطول للمدينة والرحلات البرية",
        p: "يشمل أسطولنا طرازات اقتصادية وSUV قوية (داسيا داستر، هيونداي كريتا، هيونداي توسان، رينو كليو، داسيا لوغان، جوغر 7 مقاعد...). سواء بقيت في مراكش أو توجهت إلى مرزوكة أو ورزازات أو الصحراء، نساعدك في اختيار السيارة الأنسب لعدد الركاب والأمتعة ونوع الطرق.",
      },
      {
        h2: "شروط واضحة وشفافة",
        p: "التأمين مشمول في السعر. الكيلومترات غير محدودة. الوديعة 20 000 درهم (شيك أو نقد أو بطاقة) وتُسترجع إن لم يُلاحظ ضرر. إلغاء مجاني حتى 48 ساعة قبل الاستلام. رخصة سارية منذ سنتين على الأقل مطلوبة؛ تُقبل رخصة الزوار الأجانب الوطنية.",
      },
      {
        h2: "اتجاه واحد مراكش ← مرزوكة",
        p: "يمكنك استلام السيارة في مراكش وإرجاعها في مرزوكة (كراء باتجاه واحد) حسب التوفر والشروط. حل مثالي لرحلة نحو إرغ شبي دون العودة لنقطة البداية. قد يُطبق مكمل حسب التواريخ والسيارة — أكّد قبل الحجز عبر واتساب.",
      },
      {
        h2: "كيف تحجز؟",
        p: "تواصل معنا عبر واتساب (+212 6 61 37 16 70) مع التواريخ ووقت وصول الرحلة إن لزم ونوع السيارة ومكان الإرجاع. نؤكد التوفر والسعر والشروط كتابياً قبل وصولك.",
      },
    ],
    es: [
      {
        h2: "Alquiler de coche en el aeropuerto Marrakech Menara",
        p: "Fadma Hsayn Cars ofrece alquiler de coches con entrega en el aeropuerto Marrakech Menara. A su llegada puede recoger un vehículo según sus necesidades: utilitario, sedán o SUV. La entrega en el aeropuerto de Marrakech cuesta 1.200 MAD. Nuestra agencia principal está en Merzouga; el servicio en Marrakech está organizado para ahorrarle tiempo al salir del avión.",
      },
      {
        h2: "Una flota para la ciudad y los road trips",
        p: "Nuestra flota incluye modelos económicos y SUV robustos (Dacia Duster, Hyundai Creta, Hyundai Tucson, Renault Clio, Dacia Logan, Jogger 7 plazas, etc.). Tanto si se queda en Marrakech como si parte hacia Merzouga, Ouarzazate o el desierto, le ayudamos a elegir el vehículo adecuado según pasajeros, equipaje y tipo de carreteras.",
      },
      {
        h2: "Condiciones claras y transparentes",
        p: "El seguro está incluido. El kilometraje es ilimitado. La fianza es de 20.000 MAD (cheque, efectivo o tarjeta) y se devuelve si no hay daños. Cancelación gratuita hasta 48 horas antes de la recogida. Se requiere permiso válido con al menos 2 años; se acepta el permiso nacional de visitantes extranjeros.",
      },
      {
        h2: "Solo ida Marrakech → Merzouga",
        p: "Puede recoger el coche en Marrakech y devolverlo en Merzouga (alquiler solo ida), según disponibilidad y condiciones. Ideal para un road trip hacia Erg Chebbi sin volver al punto de partida. Puede aplicarse un suplemento según fechas y vehículo — confirme antes de reservar por WhatsApp.",
      },
      {
        h2: "¿Cómo reservar?",
        p: "Contáctenos por WhatsApp (+212 6 61 37 16 70) indicando fechas, hora de llegada del vuelo si hace falta, tipo de vehículo y lugar de devolución. Confirmamos disponibilidad, tarifa y condiciones por escrito antes de su llegada.",
      },
    ],
  },
  merzouga: {
    fr: [
      {
        h2: "Agence principale à Merzouga",
        p: "Fadma Hsayn Cars a son agence principale à Merzouga, au cœur du désert et à proximité d'Erg Chebbi. La prise en charge et la restitution se font sur place. C'est le point de départ idéal pour explorer les dunes, les villages environnants et les routes du Sud marocain en toute liberté.",
      },
      {
        h2: "Véhicules adaptés au désert et aux routes du Sud",
        p: "Nous recommandons souvent un SUV (Dacia Duster, Hyundai Creta, Tucson…) pour les trajets vers et autour de Merzouga. Les conditions concernant les pistes et les dunes doivent être clarifiées avant le départ : certaines zones ne sont pas adaptées à tous les véhicules. Notre équipe vous conseille selon votre itinéraire.",
      },
      {
        h2: "Arrivée via Errachidia ou depuis Marrakech",
        p: "Si vous atterrissez à l'aéroport d'Errachidia, la livraison est possible (500 MAD). Depuis Marrakech, une location aller simple jusqu'à Merzouga peut être organisée. Dans les deux cas, indiquez vos horaires pour que la remise du véhicule se fasse dans les meilleures conditions.",
      },
      {
        h2: "Tarifs et conditions",
        p: "Assurance incluse, kilométrage illimité, caution 20 000 MAD. Annulation gratuite jusqu'à 48 h avant la prise en charge. Permis valide (2 ans minimum) ; permis national accepté pour les étrangers. Paiement en espèces ou par carte.",
      },
      {
        h2: "Réserver à Merzouga",
        p: "Envoyez un message WhatsApp avec vos dates, le nombre de voyageurs et le type de véhicule. Nous confirmons la disponibilité et les conditions avant votre arrivée dans le désert.",
      },
    ],
    en: [
      {
        h2: "Main agency in Merzouga",
        p: "Fadma Hsayn Cars has its main agency in Merzouga, in the heart of the desert near Erg Chebbi. Pickup and return are on site. It is the ideal base to explore the dunes, nearby villages and southern Moroccan roads freely.",
      },
      {
        h2: "Vehicles suited to the desert and southern roads",
        p: "We often recommend an SUV (Dacia Duster, Hyundai Creta, Tucson…) for trips to and around Merzouga. Terms for tracks and dunes must be clarified before departure: some areas are not suitable for every vehicle. Our team advises you according to your itinerary.",
      },
      {
        h2: "Arrival via Errachidia or from Marrakech",
        p: "If you land at Errachidia airport, delivery is available (500 MAD). From Marrakech, a one-way rental to Merzouga can be arranged. In both cases, share your schedule so vehicle handover goes smoothly.",
      },
      {
        h2: "Rates and conditions",
        p: "Insurance included, unlimited mileage, deposit 20,000 MAD. Free cancellation up to 48h before pickup. Valid licence (minimum 2 years); national licence accepted for foreign visitors. Cash or card payment.",
      },
      {
        h2: "Book in Merzouga",
        p: "Send a WhatsApp message with your dates, number of travellers and vehicle type. We confirm availability and terms before you arrive in the desert.",
      },
    ],
    ar: [
      {
        h2: "الوكالة الرئيسية في مرزوكة",
        p: "لدى Fadma Hsayn Cars وكالتها الرئيسية في مرزوكة، في قلب الصحراء قرب إرغ شبي. الاستلام والإرجاع في المكان. قاعدة مثالية لاستكشاف الكثبان والقرى المجاورة وطرق جنوب المغرب بحرية.",
      },
      {
        h2: "سيارات مناسبة للصحراء وطرق الجنوب",
        p: "غالباً نوصي بـ SUV (داسيا داستر، هيونداي كريتا، توسان…) للرحلات نحو مرزوكة وحولها. يجب توضيح شروط المسارات والكثبان قبل الانطلاق: بعض المناطق غير مناسبة لكل السيارات. فريقنا ينصحك حسب مسارك.",
      },
      {
        h2: "الوصول عبر الرشيدية أو من مراكش",
        p: "إن هبطت في مطار الرشيدية، التوصيل متاح (500 درهم). من مراكش يمكن تنظيم كراء باتجاه واحد إلى مرزوكة. في الحالتين أرسل مواعيدك ليسير تسليم السيارة بسلاسة.",
      },
      {
        h2: "الأسعار والشروط",
        p: "تأمين مشمول، كيلومترات غير محدودة، وديعة 20 000 درهم. إلغاء مجاني حتى 48 ساعة قبل الاستلام. رخصة سارية (سنتان على الأقل)؛ تُقبل الرخصة الوطنية للأجانب. الدفع نقداً أو بالبطاقة.",
      },
      {
        h2: "الحجز في مرزوكة",
        p: "أرسل رسالة واتساب مع التواريخ وعدد المسافرين ونوع السيارة. نؤكد التوفر والشروط قبل وصولك إلى الصحراء.",
      },
    ],
    es: [
      {
        h2: "Agencia principal en Merzouga",
        p: "Fadma Hsayn Cars tiene su agencia principal en Merzouga, en el corazón del desierto cerca de Erg Chebbi. Recogida y devolución in situ. Base ideal para explorar dunas, pueblos cercanos y carreteras del sur de Marruecos con libertad.",
      },
      {
        h2: "Vehículos adaptados al desierto y al sur",
        p: "A menudo recomendamos un SUV (Dacia Duster, Hyundai Creta, Tucson…) para viajes hacia y alrededor de Merzouga. Las condiciones sobre pistas y dunas deben aclararse antes de partir: algunas zonas no convienen a todos los vehículos. Nuestro equipo le asesora según su itinerario.",
      },
      {
        h2: "Llegada por Errachidia o desde Marrakech",
        p: "Si aterriza en el aeropuerto de Errachidia, la entrega está disponible (500 MAD). Desde Marrakech se puede organizar un alquiler solo ida hasta Merzouga. En ambos casos indique horarios para una entrega fluida.",
      },
      {
        h2: "Tarifas y condiciones",
        p: "Seguro incluido, kilometraje ilimitado, fianza 20.000 MAD. Cancelación gratuita hasta 48h antes de la recogida. Permiso válido (mínimo 2 años); permiso nacional aceptado para extranjeros. Pago en efectivo o con tarjeta.",
      },
      {
        h2: "Reservar en Merzouga",
        p: "Envíe un mensaje de WhatsApp con fechas, número de viajeros y tipo de vehículo. Confirmamos disponibilidad y condiciones antes de su llegada al desierto.",
      },
    ],
  },
  errachidia: {
    fr: [
      {
        h2: "Location avec livraison à l'aéroport d'Errachidia",
        p: "L'aéroport d'Errachidia (Moulay Ali Cherif) est la porte d'entrée pratique vers Merzouga et le désert d'Erg Chebbi. Fadma Hsayn Cars propose la livraison sur place pour 500 MAD. Indiquez l'heure d'arrivée de votre vol afin d'organiser la prise en charge sans stress.",
      },
      {
        h2: "Vers Merzouga en toute liberté",
        p: "Depuis Errachidia, la route vers Merzouga est un classique du Sud. Un véhicule fiable vous permet d'arrêter-vous selon vos envies et de gérer votre rythme. Les SUV sont souvent appréciés pour ce trajet ; nous disposons aussi de citadines et berlines selon disponibilité.",
      },
      {
        h2: "Aller simple Errachidia → Merzouga",
        p: "Vous pouvez récupérer la voiture à Errachidia et la rendre à Merzouga si les dates et le véhicule le permettent. Confirmez toujours les conditions et d'éventuels frais supplémentaires avant de valider la réservation.",
      },
      {
        h2: "Ce qui est inclus",
        p: "Assurance incluse, kilométrage illimité, caution 20 000 MAD. Annulation gratuite jusqu'à 48 h avant. Permis valide (2 ans min.). Paiement espèces ou carte. Agence principale à Merzouga pour la restitution et le suivi.",
      },
      {
        h2: "Réserver pour Errachidia",
        p: "Sur WhatsApp, précisez le numéro de vol, l'heure d'arrivée, la durée de location et le lieu de restitution souhaité. Nous vous répondons avec une confirmation claire.",
      },
    ],
    en: [
      {
        h2: "Rental with delivery at Errachidia Airport",
        p: "Errachidia Airport (Moulay Ali Cherif) is a practical gateway to Merzouga and the Erg Chebbi desert. Fadma Hsayn Cars offers on-site delivery for 500 MAD. Share your flight arrival time so we can organise a smooth handover.",
      },
      {
        h2: "To Merzouga at your own pace",
        p: "From Errachidia, the road to Merzouga is a classic of the South. A reliable vehicle lets you stop when you want and set your own pace. SUVs are often preferred for this trip; we also have city cars and sedans subject to availability.",
      },
      {
        h2: "One-way Errachidia → Merzouga",
        p: "You can pick up the car in Errachidia and return it in Merzouga if dates and vehicle allow. Always confirm terms and any extra fees before confirming the booking.",
      },
      {
        h2: "What is included",
        p: "Insurance included, unlimited mileage, deposit 20,000 MAD. Free cancellation up to 48h before. Valid licence (min. 2 years). Cash or card. Main agency in Merzouga for return and follow-up.",
      },
      {
        h2: "Book for Errachidia",
        p: "On WhatsApp, specify flight number, arrival time, rental duration and preferred return location. We reply with a clear confirmation.",
      },
    ],
    ar: [
      {
        h2: "كراء مع توصيل في مطار الرشيدية",
        p: "مطار الرشيدية (مولاي علي الشريف) بوابة عملية نحو مرزوكة وصحراء إرغ شبي. تقدم Fadma Hsayn Cars التوصيل في المكان بـ 500 درهم. أرسل وقت وصول رحلتك لتنظيم التسليم دون توتر.",
      },
      {
        h2: "نحو مرزوكة بإيقاعك",
        p: "من الرشيدية، الطريق إلى مرزوكة كلاسيكي في الجنوب. سيارة موثوقة تتيح لك التوقف كما تشاء. غالباً تُفضَّل سيارات SUV لهذه الرحلة؛ لدينا أيضاً حضريات وسيدان حسب التوفر.",
      },
      {
        h2: "اتجاه واحد الرشيدية ← مرزوكة",
        p: "يمكنك استلام السيارة في الرشيدية وإرجاعها في مرزوكة إن سمحت التواريخ والسيارة. أكّد دائماً الشروط وأي رسوم إضافية قبل تأكيد الحجز.",
      },
      {
        h2: "ما يشمله العرض",
        p: "تأمين مشمول، كيلومترات غير محدودة، وديعة 20 000 درهم. إلغاء مجاني حتى 48 ساعة قبل. رخصة سارية (سنتان على الأقل). نقد أو بطاقة. الوكالة الرئيسية في مرزوكة للإرجاع والمتابعة.",
      },
      {
        h2: "الحجز لمطار الرشيدية",
        p: "عبر واتساب حدّد رقم الرحلة ووقت الوصول ومدة الكراء ومكان الإرجاع المطلوب. نرد بتأكيد واضح.",
      },
    ],
    es: [
      {
        h2: "Alquiler con entrega en el aeropuerto de Errachidia",
        p: "El aeropuerto de Errachidia (Moulay Ali Cherif) es una puerta práctica hacia Merzouga y el desierto de Erg Chebbi. Fadma Hsayn Cars ofrece entrega in situ por 500 MAD. Indique la hora de llegada del vuelo para organizar la entrega sin estrés.",
      },
      {
        h2: "Hacia Merzouga a su ritmo",
        p: "Desde Errachidia, la carretera a Merzouga es un clásico del sur. Un vehículo fiable le permite parar a voluntad. Los SUV suelen preferirse para este trayecto; también disponemos de utilitarios y sedanes según disponibilidad.",
      },
      {
        h2: "Solo ida Errachidia → Merzouga",
        p: "Puede recoger el coche en Errachidia y devolverlo en Merzouga si las fechas y el vehículo lo permiten. Confirme siempre las condiciones y posibles suplementos antes de validar la reserva.",
      },
      {
        h2: "Qué está incluido",
        p: "Seguro incluido, kilometraje ilimitado, fianza 20.000 MAD. Cancelación gratuita hasta 48h antes. Permiso válido (mín. 2 años). Efectivo o tarjeta. Agencia principal en Merzouga para devolución y seguimiento.",
      },
      {
        h2: "Reservar para Errachidia",
        p: "Por WhatsApp indique número de vuelo, hora de llegada, duración del alquiler y lugar de devolución. Respondemos con una confirmación clara.",
      },
    ],
  },
  oneWay: {
    fr: [
      {
        h2: "Qu'est-ce que la location aller simple ?",
        p: "La location aller simple permet de récupérer le véhicule dans une ville et de le restituer dans une autre, sans revenir au point de départ. Chez Fadma Hsayn Cars, les trajets les plus demandés sont Marrakech → Merzouga et Errachidia → Merzouga.",
      },
      {
        h2: "Pour qui est-ce utile ?",
        p: "Idéal pour un road trip vers le désert, un circuit Sud, ou si votre vol arrive à Marrakech / Errachidia et que vous poursuivez vers Merzouga. Vous évitez les transferts multiples et gardez votre autonomie sur place.",
      },
      {
        h2: "Conditions et supplément",
        p: "La disponibilité dépend des dates et du véhicule. Un supplément peut s'appliquer pour l'aller simple. Caution, assurance, kilométrage et état des lieux restent soumis au contrat habituel. Tout doit être confirmé par écrit (WhatsApp) avant réservation.",
      },
      {
        h2: "Comment préparer votre demande",
        p: "Indiquez : date et lieu de prise en charge, date et lieu de restitution, nombre de passagers, type de véhicule souhaité, et si une livraison aéroport est nécessaire (Marrakech 1 200 MAD, Errachidia 500 MAD).",
      },
      {
        h2: "Réserver un aller simple",
        p: "Contactez Fadma Hsayn Cars sur WhatsApp avec ces informations. Nous vérifions la faisabilité et vous envoyons une proposition claire avant votre voyage.",
      },
    ],
    en: [
      {
        h2: "What is a one-way rental?",
        p: "One-way rental means picking up the vehicle in one city and returning it in another, without going back to the start. At Fadma Hsayn Cars, the most requested routes are Marrakech → Merzouga and Errachidia → Merzouga.",
      },
      {
        h2: "Who is it for?",
        p: "Ideal for a desert road trip, a southern circuit, or if your flight lands in Marrakech / Errachidia and you continue to Merzouga. You avoid multiple transfers and keep your independence on site.",
      },
      {
        h2: "Conditions and supplement",
        p: "Availability depends on dates and vehicle. A supplement may apply for one-way. Deposit, insurance, mileage and inspection remain under the usual contract. Everything must be confirmed in writing (WhatsApp) before booking.",
      },
      {
        h2: "How to prepare your request",
        p: "State: pickup date and place, return date and place, number of passengers, preferred vehicle type, and whether airport delivery is needed (Marrakech 1,200 MAD, Errachidia 500 MAD).",
      },
      {
        h2: "Book a one-way rental",
        p: "Contact Fadma Hsayn Cars on WhatsApp with this information. We check feasibility and send a clear offer before your trip.",
      },
    ],
    ar: [
      {
        h2: "ما هو الكراء باتجاه واحد؟",
        p: "الكراء باتجاه واحد يعني استلام السيارة في مدينة وإرجاعها في أخرى دون العودة لنقطة البداية. عند Fadma Hsayn Cars أكثر المسارات طلباً هي مراكش ← مرزوكة والرشيدية ← مرزوكة.",
      },
      {
        h2: "لمن يناسب؟",
        p: "مثالي لرحلة صحراوية أو مسار في الجنوب، أو إن هبطت طائرتك في مراكش/الرشيدية وتواصل نحو مرزوكة. تتجنب التنقلات المتعددة وتحافظ على استقلاليتك في المكان.",
      },
      {
        h2: "الشروط والمكمل",
        p: "التوفر حسب التواريخ والسيارة. قد يُطبق مكمل للاتجاه الواحد. الوديعة والتأمين والكيلومترات والفحص تبقى وفق العقد المعتاد. يجب تأكيد كل شيء كتابياً (واتساب) قبل الحجز.",
      },
      {
        h2: "كيف تجهّز طلبك",
        p: "حدّد: تاريخ ومكان الاستلام، تاريخ ومكان الإرجاع، عدد الركاب، نوع السيارة، وهل تحتاج توصيل المطار (مراكش 1200 درهم، الرشيدية 500 درهم).",
      },
      {
        h2: "احجز كراء باتجاه واحد",
        p: "تواصل مع Fadma Hsayn Cars عبر واتساب بهذه المعلومات. نتحقق من الإمكانية ونرسل عرضاً واضحاً قبل سفرك.",
      },
    ],
    es: [
      {
        h2: "¿Qué es el alquiler solo ida?",
        p: "El alquiler solo ida permite recoger el vehículo en una ciudad y devolverlo en otra, sin volver al punto de partida. En Fadma Hsayn Cars, las rutas más solicitadas son Marrakech → Merzouga y Errachidia → Merzouga.",
      },
      {
        h2: "¿Para quién es útil?",
        p: "Ideal para un road trip al desierto, un circuito del sur, o si su vuelo llega a Marrakech / Errachidia y continúa hacia Merzouga. Evita traslados múltiples y mantiene su autonomía in situ.",
      },
      {
        h2: "Condiciones y suplemento",
        p: "La disponibilidad depende de fechas y vehículo. Puede aplicarse un suplemento por solo ida. Fianza, seguro, kilometraje e inventario siguen el contrato habitual. Todo debe confirmarse por escrito (WhatsApp) antes de reservar.",
      },
      {
        h2: "Cómo preparar su solicitud",
        p: "Indique: fecha y lugar de recogida, fecha y lugar de devolución, número de pasajeros, tipo de vehículo, y si necesita entrega en aeropuerto (Marrakech 1.200 MAD, Errachidia 500 MAD).",
      },
      {
        h2: "Reservar solo ida",
        p: "Contacte Fadma Hsayn Cars por WhatsApp con esta información. Comprobamos la viabilidad y enviamos una propuesta clara antes de su viaje.",
      },
    ],
  },
};

export default function CityPage({ locale, city }: { locale: Locale; city: CityKey }) {
  const cfg = cityConfig[city];
  const t = getDict(locale);
  const lp = (p: string) => localizedPath(p, locale);
  const sections = body[city][locale];
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
        <section className="py-12 px-4 max-w-3xl mx-auto space-y-10 text-gray-700 leading-relaxed">
          <img src={`/images/${cfg.img}`} alt={title} className="w-full h-56 md:h-72 object-cover rounded-2xl" />
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="text-xl font-bold text-[var(--blue)] mb-3">{s.h2}</h2>
              <p>{s.p}</p>
            </div>
          ))}
          <p className="pt-2 border-t border-gray-100 pt-6">
            <Link href={lp("/faq")} className="text-[var(--red)] font-semibold">
              {t.nav.faq}
            </Link>
            {" · "}
            <Link href={lp("/conditions")} className="text-[var(--red)] font-semibold">
              {t.nav.conditions}
            </Link>
            {" · "}
            <Link href={lp("/contact")} className="text-[var(--red)] font-semibold">
              {t.nav.contact}
            </Link>
            {" · "}
            <Link href={lp("/location-voiture-aller-simple")} className="text-[var(--red)] font-semibold">
              {t.nav.oneWay}
            </Link>
          </p>
          <a
            href="https://wa.me/212661371670"
            className="inline-block mt-2 bg-[var(--red)] text-white font-bold px-6 py-3 rounded-lg"
          >
            {t.common.bookWhatsApp}
          </a>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
