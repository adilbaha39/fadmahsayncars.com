import type { Locale } from "@/lib/i18n";

export type Dict = {
  nav: {
    home: string; marrakech: string; merzouga: string; errachidia: string;
    oneWay: string; faq: string; blog: string; conditions: string; contact: string;
  };
  common: {
    bookWhatsApp: string; from: string; day: string; seats: string;
    manual: string; automatic: string; seeMore: string; readArticle: string;
    deliveryMarrakech: string; deliveryErrachidia: string; agencyMerzouga: string;
    reviewsTitle: string; reviewsSub: string; seeGoogleReviews: string;
    readyTitle: string; readyText: string; bookNow: string;
  };
  home: {
    title: string; description: string; h1: string; subtitle: string;
    fleet: string; fleetSub: string; agencies: string; info: string; infoSub: string;
  };
  cities: {
    marrakechTitle: string; marrakechDesc: string;
    merzougaTitle: string; merzougaDesc: string;
    errachidiaTitle: string; errachidiaDesc: string;
    oneWayTitle: string; oneWayDesc: string;
  };
  footer: {
    desc: string; quickLinks: string; services: string; rights: string;
  };
  faq: { title: string; description: string };
  contact: { title: string; description: string; whatsapp: string; phone: string; email: string };
  conditions: { title: string; description: string };
  blog: {
    title: string; description: string;
    mmTitle: string; mmDesc: string;
    emTitle: string; emDesc: string;
  };
};

export const dict: Record<Locale, Dict> = {
  fr: {
    nav: {
      home: "Accueil", marrakech: "Marrakech", merzouga: "Merzouga", errachidia: "Errachidia",
      oneWay: "Aller simple", faq: "FAQ", blog: "Blog", conditions: "Conditions", contact: "Contact",
    },
    common: {
      bookWhatsApp: "Réserver sur WhatsApp", from: "Dès", day: "/ jour", seats: "Places",
      manual: "Manuelle", automatic: "Automatique", seeMore: "Voir plus", readArticle: "Lire l'article →",
      deliveryMarrakech: "Livraison aéroport Marrakech : 1 200 MAD",
      deliveryErrachidia: "Livraison aéroport Errachidia : 500 MAD",
      agencyMerzouga: "Agence principale à Merzouga",
      reviewsTitle: "Avis clients", reviewsSub: "5,0 / 5 — 29 avis sur Google",
      seeGoogleReviews: "Voir nos 29 avis sur Google",
      readyTitle: "Prêt à prendre la route ?",
      readyText: "Réservez maintenant à Marrakech, Merzouga ou Errachidia.",
      bookNow: "RÉSERVER MAINTENANT",
    },
    home: {
      title: "Location Voiture Maroc | Marrakech, Merzouga & Errachidia",
      description: "Location à Merzouga, Marrakech et Errachidia. Agence Merzouga. Livraison aéroport Marrakech 1 200 MAD, Errachidia 500 MAD.",
      h1: "Location de voitures au Maroc",
      subtitle: "Marrakech · Merzouga · Errachidia — Assurance incluse, kilométrage illimité",
      fleet: "Notre flotte", fleetSub: "Véhicules adaptés à tous vos trajets",
      agencies: "Nos agences", info: "Informations pratiques", infoSub: "Avant de louer",
    },
    cities: {
      marrakechTitle: "Location Voiture Aéroport Marrakech | Dès 300 MAD",
      marrakechDesc: "Livraison aéroport Marrakech : 1 200 MAD. Assurance incluse, kilométrage illimité. Dès 300 MAD/jour.",
      merzougaTitle: "Location Voiture Merzouga | SUV & 4x4 Désert",
      merzougaDesc: "Agence principale à Merzouga. SUV et véhicules pour le désert. Prise en charge sur place.",
      errachidiaTitle: "Location Voiture Aéroport Errachidia | Dès 300 MAD",
      errachidiaDesc: "Livraison aéroport Errachidia : 500 MAD. Idéal pour rejoindre Merzouga.",
      oneWayTitle: "Location Voiture Aller Simple au Maroc",
      oneWayDesc: "Récupérez à Marrakech ou Errachidia, restituez à Merzouga. Conditions selon dates et véhicule.",
    },
    footer: {
      desc: "Location de voitures à Merzouga, Marrakech et Errachidia. Votre partenaire de confiance.",
      quickLinks: "Liens rapides", services: "Services", rights: "Tous droits réservés.",
    },
    faq: { title: "FAQ - Location de voiture au Maroc", description: "Réponses sur permis, caution, livraison aéroport et aller simple." },
    contact: { title: "Contact - Fadma Hsayn Cars", description: "Contactez Fadma Hsayn Cars par WhatsApp, téléphone ou email.", whatsapp: "WhatsApp", phone: "Téléphone", email: "Email" },
    conditions: { title: "Conditions de location", description: "Conditions de location, caution, livraison et aller simple chez Fadma Hsayn Cars." },
    blog: {
      title: "Blog - Guides location voiture Maroc",
      description: "Guides : Marrakech à Merzouga, aéroport Errachidia à Merzouga.",
      mmTitle: "Location voiture Marrakech-Merzouga : aller simple",
      mmDesc: "Location voiture Marrakech Merzouga en aller simple : itinéraire, véhicule et réservation.",
      emTitle: "Location voiture Errachidia-Merzouga : aéroport et aller simple",
      emDesc: "Location depuis l'aéroport d'Errachidia vers Merzouga : trajet, aller simple et conseils.",
    },
  },
  en: {
    nav: {
      home: "Home", marrakech: "Marrakech", merzouga: "Merzouga", errachidia: "Errachidia",
      oneWay: "One-way", faq: "FAQ", blog: "Blog", conditions: "Terms", contact: "Contact",
    },
    common: {
      bookWhatsApp: "Book on WhatsApp", from: "From", day: "/ day", seats: "Seats",
      manual: "Manual", automatic: "Automatic", seeMore: "See more", readArticle: "Read article →",
      deliveryMarrakech: "Marrakech airport delivery: 1,200 MAD",
      deliveryErrachidia: "Errachidia airport delivery: 500 MAD",
      agencyMerzouga: "Main agency in Merzouga",
      reviewsTitle: "Customer reviews", reviewsSub: "5.0 / 5 — 29 Google reviews",
      seeGoogleReviews: "See our 29 Google reviews",
      readyTitle: "Ready to hit the road?",
      readyText: "Book now in Marrakech, Merzouga or Errachidia.",
      bookNow: "BOOK NOW",
    },
    home: {
      title: "Car Rental Morocco | Marrakech, Merzouga & Errachidia",
      description: "Car rental in Merzouga, Marrakech and Errachidia. Main agency Merzouga. Airport delivery Marrakech 1,200 MAD, Errachidia 500 MAD.",
      h1: "Car rental in Morocco",
      subtitle: "Marrakech · Merzouga · Errachidia — Insurance included, unlimited mileage",
      fleet: "Our fleet", fleetSub: "Vehicles for every trip",
      agencies: "Our locations", info: "Practical information", infoSub: "Before you rent",
    },
    cities: {
      marrakechTitle: "Car Rental Marrakech Airport | From 300 MAD",
      marrakechDesc: "Marrakech airport delivery: 1,200 MAD. Insurance included, unlimited mileage. From 300 MAD/day.",
      merzougaTitle: "Car Rental Merzouga | SUV for the Desert",
      merzougaDesc: "Main agency in Merzouga. SUVs and cars for the desert. Pickup on site.",
      errachidiaTitle: "Car Rental Errachidia Airport | From 300 MAD",
      errachidiaDesc: "Errachidia airport delivery: 500 MAD. Ideal to reach Merzouga.",
      oneWayTitle: "One-Way Car Rental in Morocco",
      oneWayDesc: "Pick up in Marrakech or Errachidia, drop off in Merzouga. Terms depend on dates and vehicle.",
    },
    footer: {
      desc: "Car rental in Merzouga, Marrakech and Errachidia. Your trusted partner.",
      quickLinks: "Quick links", services: "Services", rights: "All rights reserved.",
    },
    faq: { title: "FAQ - Car rental in Morocco", description: "Answers about licence, deposit, airport delivery and one-way rental." },
    contact: { title: "Contact - Fadma Hsayn Cars", description: "Contact Fadma Hsayn Cars via WhatsApp, phone or email.", whatsapp: "WhatsApp", phone: "Phone", email: "Email" },
    conditions: { title: "Rental terms", description: "Rental conditions, deposit, delivery and one-way at Fadma Hsayn Cars." },
    blog: {
      title: "Blog - Car rental guides Morocco",
      description: "Guides: Marrakech to Merzouga, Errachidia airport to Merzouga.",
      mmTitle: "Car rental Marrakech-Merzouga: one-way",
      mmDesc: "One-way car rental Marrakech to Merzouga: route, vehicle and booking.",
      emTitle: "Car rental Errachidia-Merzouga: airport and one-way",
      emDesc: "Rental from Errachidia airport to Merzouga: trip, one-way and tips.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية", marrakech: "مراكش", merzouga: "مرزوكة", errachidia: "الرشيدية",
      oneWay: "اتجاه واحد", faq: "أسئلة", blog: "مدونة", conditions: "الشروط", contact: "اتصل بنا",
    },
    common: {
      bookWhatsApp: "احجز عبر واتساب", from: "ابتداء من", day: "/ يوم", seats: "مقاعد",
      manual: "يدوي", automatic: "أوتوماتيك", seeMore: "المزيد", readArticle: "اقرأ المقال ←",
      deliveryMarrakech: "توصيل مطار مراكش: 1200 درهم",
      deliveryErrachidia: "توصيل مطار الرشيدية: 500 درهم",
      agencyMerzouga: "الوكالة الرئيسية في مرزوكة",
      reviewsTitle: "آراء الزبناء", reviewsSub: "5,0 / 5 — 29 تقييم على Google",
      seeGoogleReviews: "شاهد 29 تقييماً على Google",
      readyTitle: "مستعد للانطلاق؟",
      readyText: "احجز الآن في مراكش أو مرزوكة أو الرشيدية.",
      bookNow: "احجز الآن",
    },
    home: {
      title: "كراء السيارات في المغرب | مراكش، مرزوكة والرشيدية",
      description: "كراء السيارات في مرزوكة ومراكش والرشيدية. الوكالة في مرزوكة. توصيل مطار مراكش 1200 درهم، الرشيدية 500 درهم.",
      h1: "كراء السيارات في المغرب",
      subtitle: "مراكش · مرزوكة · الرشيدية — تأمين شامل وكيلومترات غير محدودة",
      fleet: "أسطولنا", fleetSub: "سيارات لكل الرحلات",
      agencies: "مواقعنا", info: "معلومات عملية", infoSub: "قبل الكراء",
    },
    cities: {
      marrakechTitle: "كراء سيارات مطار مراكش | من 300 درهم",
      marrakechDesc: "توصيل مطار مراكش: 1200 درهم. تأمين وكيلومترات غير محدودة. من 300 درهم/يوم.",
      merzougaTitle: "كراء سيارات مرزوكة | SUV للصحراء",
      merzougaDesc: "الوكالة الرئيسية في مرزوكة. سيارات SUV للصحراء. استلام في المكان.",
      errachidiaTitle: "كراء سيارات مطار الرشيدية | من 300 درهم",
      errachidiaDesc: "توصيل مطار الرشيدية: 500 درهم. مثالي للوصول إلى مرزوكة.",
      oneWayTitle: "كراء سيارة باتجاه واحد في المغرب",
      oneWayDesc: "استلام في مراكش أو الرشيدية وإرجاع في مرزوكة. الشروط حسب التواريخ والسيارة.",
    },
    footer: {
      desc: "كراء السيارات في مرزوكة ومراكش والرشيدية. شريككم الموثوق.",
      quickLinks: "روابط سريعة", services: "الخدمات", rights: "جميع الحقوق محفوظة.",
    },
    faq: { title: "أسئلة شائعة - كراء السيارات في المغرب", description: "إجابات حول الرخصة والوديعة والتوصيل للمطار والكراء باتجاه واحد." },
    contact: { title: "اتصل بنا - Fadma Hsayn Cars", description: "تواصل مع Fadma Hsayn Cars عبر واتساب أو الهاتف أو البريد.", whatsapp: "واتساب", phone: "الهاتف", email: "البريد" },
    conditions: { title: "شروط الكراء", description: "شروط الكراء والوديعة والتوصيل والاتجاه الواحد لدى Fadma Hsayn Cars." },
    blog: {
      title: "المدونة - أدلة كراء السيارات في المغرب",
      description: "أدلة: مراكش إلى مرزوكة، مطار الرشيدية إلى مرزوكة.",
      mmTitle: "كراء سيارة مراكش-مرزوكة: اتجاه واحد",
      mmDesc: "كراء باتجاه واحد من مراكش إلى مرزوكة: المسار والسيارة والحجز.",
      emTitle: "كراء سيارة الرشيدية-مرزوكة: المطار واتجاه واحد",
      emDesc: "كراء من مطار الرشيدية إلى مرزوكة: الرحلة والاتجاه الواحد والنصائح.",
    },
  },
  es: {
    nav: {
      home: "Inicio", marrakech: "Marrakech", merzouga: "Merzouga", errachidia: "Errachidia",
      oneWay: "Solo ida", faq: "FAQ", blog: "Blog", conditions: "Condiciones", contact: "Contacto",
    },
    common: {
      bookWhatsApp: "Reservar por WhatsApp", from: "Desde", day: "/ día", seats: "Plazas",
      manual: "Manual", automatic: "Automático", seeMore: "Ver más", readArticle: "Leer artículo →",
      deliveryMarrakech: "Entrega aeropuerto Marrakech: 1.200 MAD",
      deliveryErrachidia: "Entrega aeropuerto Errachidia: 500 MAD",
      agencyMerzouga: "Agencia principal en Merzouga",
      reviewsTitle: "Opiniones de clientes", reviewsSub: "5,0 / 5 — 29 reseñas en Google",
      seeGoogleReviews: "Ver nuestras 29 reseñas en Google",
      readyTitle: "¿Listo para salir a la carretera?",
      readyText: "Reserve ahora en Marrakech, Merzouga o Errachidia.",
      bookNow: "RESERVAR AHORA",
    },
    home: {
      title: "Alquiler de coches Marruecos | Marrakech, Merzouga y Errachidia",
      description: "Alquiler en Merzouga, Marrakech y Errachidia. Agencia en Merzouga. Entrega aeropuerto Marrakech 1.200 MAD, Errachidia 500 MAD.",
      h1: "Alquiler de coches en Marruecos",
      subtitle: "Marrakech · Merzouga · Errachidia — Seguro incluido, kilometraje ilimitado",
      fleet: "Nuestra flota", fleetSub: "Vehículos para todos los trayectos",
      agencies: "Nuestras ubicaciones", info: "Información práctica", infoSub: "Antes de alquilar",
    },
    cities: {
      marrakechTitle: "Alquiler coche aeropuerto Marrakech | Desde 300 MAD",
      marrakechDesc: "Entrega aeropuerto Marrakech: 1.200 MAD. Seguro y kilometraje ilimitado. Desde 300 MAD/día.",
      merzougaTitle: "Alquiler coche Merzouga | SUV desierto",
      merzougaDesc: "Agencia principal en Merzouga. SUV y vehículos para el desierto. Recogida in situ.",
      errachidiaTitle: "Alquiler coche aeropuerto Errachidia | Desde 300 MAD",
      errachidiaDesc: "Entrega aeropuerto Errachidia: 500 MAD. Ideal para llegar a Merzouga.",
      oneWayTitle: "Alquiler de coche solo ida en Marruecos",
      oneWayDesc: "Recogida en Marrakech o Errachidia, devolución en Merzouga. Condiciones según fechas y vehículo.",
    },
    footer: {
      desc: "Alquiler de coches en Merzouga, Marrakech y Errachidia. Su socio de confianza.",
      quickLinks: "Enlaces rápidos", services: "Servicios", rights: "Todos los derechos reservados.",
    },
    faq: { title: "FAQ - Alquiler de coches en Marruecos", description: "Respuestas sobre permiso, fianza, entrega en aeropuerto y solo ida." },
    contact: { title: "Contacto - Fadma Hsayn Cars", description: "Contacte Fadma Hsayn Cars por WhatsApp, teléfono o email.", whatsapp: "WhatsApp", phone: "Teléfono", email: "Email" },
    conditions: { title: "Condiciones de alquiler", description: "Condiciones, fianza, entrega y solo ida en Fadma Hsayn Cars." },
    blog: {
      title: "Blog - Guías alquiler de coches Marruecos",
      description: "Guías: Marrakech a Merzouga, aeropuerto Errachidia a Merzouga.",
      mmTitle: "Alquiler coche Marrakech-Merzouga: solo ida",
      mmDesc: "Alquiler solo ida Marrakech a Merzouga: ruta, vehículo y reserva.",
      emTitle: "Alquiler coche Errachidia-Merzouga: aeropuerto y solo ida",
      emDesc: "Alquiler desde el aeropuerto de Errachidia a Merzouga: viaje, solo ida y consejos.",
    },
  },
};

export function getDict(locale: Locale): Dict {
  return dict[locale] || dict.fr;
}


/** Full homepage UI strings matching French layout */
export type HomeUI = {
  heroTitle1: string;
  heroTitle2: string;
  heroTitle3: string;
  heroSub: string;
  badgeDelivery: string;
  badgeInsurance: string;
  badgeSupport: string;
  pickupLabel: string;
  pickupDateLabel: string;
  returnDateLabel: string;
  selectAirport: string;
  bookNow: string;
  agenciesTitle: string;
  agenciesSub: string;
  seePage: string;
  fleetTitle: string;
  fleetSub: string;
  reserve: string;
  details: string;
  infoTitle: string;
  infoSub: string;
  info1t: string; info1d: string;
  info2t: string; info2d: string;
  info3t: string; info3d: string;
  info4t: string; info4d: string;
  f1t: string; f1d: string;
  f2t: string; f2d: string;
  f3t: string; f3d: string;
  f4t: string; f4d: string;
  f5t: string; f5d: string;
  reviewsTitle: string;
  reviewsSub: string;
  seeReviews: string;
  ctaTitle: string;
  ctaText: string;
  formTitle: string;
  fullName: string;
  phone: string;
  vehicle: string;
  pickupPlace: string;
  returnPlace: string;
  pickupDate: string;
  returnDate: string;
  notes: string;
  sendWa: string;
  select: string;
  airportMarrakech: string;
  merzouga: string;
  airportErrachidia: string;
  agencyMarrakech: string;
  agencyMerzouga: string;
  agencyErrachidia: string;
  labelAirport: string;
  labelDesert: string;
};

export const homeUI: Record<"fr" | "en" | "ar" | "es", HomeUI> = {
  fr: {
    heroTitle1: "VOTRE VOYAGE",
    heroTitle2: "COMMENCE",
    heroTitle3: "DÈS VOTRE ARRIVÉE",
    heroSub: "Location à Merzouga, Marrakech et Errachidia. Livraison aéroport Marrakech 1 200 MAD, Errachidia 500 MAD. Assurance incluse, livraison selon ville, kilométrage illimité.",
    badgeDelivery: "Livraison sur place",
    badgeInsurance: "Assurance incluse",
    badgeSupport: "Support 24/7",
    pickupLabel: "Lieu de prise en charge",
    pickupDateLabel: "Date de départ",
    returnDateLabel: "Date de retour",
    selectAirport: "Sélectionnez un aéroport",
    bookNow: "RÉSERVER MAINTENANT",
    agenciesTitle: "— NOS AGENCES —",
    agenciesSub: "Nous sommes présents dans les principaux aéroports du Maroc",
    seePage: "Voir la page",
    fleetTitle: "— NOTRE FLOTTE —",
    fleetSub: "Une large sélection de véhicules adaptés à tous vos besoins",
    reserve: "Réserver",
    details: "Détails",
    infoTitle: "— INFORMATIONS PRATIQUES —",
    infoSub: "Tout ce que vous devez savoir avant de louer",
    info1t: "Permis de conduire",
    info1d: "Permis valide avec 2 ans d'ancienneté minimum. Pas de limite d'âge.",
    info2t: "Caution",
    info2d: "Caution de 20 000 MAD (chèque, espèces ou carte). Restituée si aucun dommage.",
    info3t: "Modes de paiement",
    info3d: "Paiement accepté en espèces ou par carte bancaire.",
    info4t: "Étrangers",
    info4d: "Permis national accepté sans permis international.",
    f1t: "Tarifs compétitifs", f1d: "Meilleur rapport qualité / prix",
    f2t: "Kilométrage illimité", f2d: "Roulez sans limite",
    f3t: "Assurance incluse", f3d: "Voyagez en toute tranquillité",
    f4t: "Annulation gratuite", f4d: "Jusqu'à 48h avant",
    f5t: "Support 24/7", f5d: "Nous sommes là pour vous",
    reviewsTitle: "Avis clients",
    reviewsSub: "5,0 / 5 — 29 avis sur Google",
    seeReviews: "Voir nos 29 avis sur Google",
    ctaTitle: "Prêt à prendre la route ?",
    ctaText: "Réservez maintenant et profitez d'un service fiable à Marrakech, Merzouga et Errachidia.",
    formTitle: "Formulaire de Réservation",
    fullName: "Nom complet *",
    phone: "Numéro de téléphone *",
    vehicle: "Véhicule souhaité",
    pickupPlace: "Lieu de prise en charge *",
    returnPlace: "Lieu de restitution",
    pickupDate: "Date de prise en charge *",
    returnDate: "Date de restitution *",
    notes: "Remarques / Notes",
    sendWa: "ENVOYER VIA WHATSAPP",
    select: "Sélectionnez",
    airportMarrakech: "Aéroport Marrakech Menara",
    merzouga: "Merzouga",
    airportErrachidia: "Aéroport Errachidia",
    agencyMarrakech: "Agence Aéroport Marrakech",
    agencyMerzouga: "Agence Merzouga",
    agencyErrachidia: "Agence Aéroport Errachidia",
    labelAirport: "Aéroport",
    labelDesert: "Désert",
  },
  en: {
    heroTitle1: "YOUR JOURNEY",
    heroTitle2: "STARTS",
    heroTitle3: "ON ARRIVAL",
    heroSub: "Rental in Merzouga, Marrakech and Errachidia. Marrakech airport delivery 1,200 MAD, Errachidia 500 MAD. Insurance included, unlimited mileage.",
    badgeDelivery: "On-site delivery",
    badgeInsurance: "Insurance included",
    badgeSupport: "Support 24/7",
    pickupLabel: "Pickup location",
    pickupDateLabel: "Start date",
    returnDateLabel: "Return date",
    selectAirport: "Select an airport",
    bookNow: "BOOK NOW",
    agenciesTitle: "— OUR LOCATIONS —",
    agenciesSub: "We are present at the main airports of Morocco",
    seePage: "See page",
    fleetTitle: "— OUR FLEET —",
    fleetSub: "A wide selection of vehicles for every need",
    reserve: "Book",
    details: "Details",
    infoTitle: "— PRACTICAL INFORMATION —",
    infoSub: "Everything you need to know before renting",
    info1t: "Driving licence",
    info1d: "Valid licence with at least 2 years. No upper age limit.",
    info2t: "Deposit",
    info2d: "Deposit of 20,000 MAD (cheque, cash or card). Returned if no damage.",
    info3t: "Payment methods",
    info3d: "Cash or bank card accepted.",
    info4t: "Foreign visitors",
    info4d: "National licence accepted, international permit not required.",
    f1t: "Competitive rates", f1d: "Best value for money",
    f2t: "Unlimited mileage", f2d: "Drive without limit",
    f3t: "Insurance included", f3d: "Travel with peace of mind",
    f4t: "Free cancellation", f4d: "Up to 48h before",
    f5t: "Support 24/7", f5d: "We are here for you",
    reviewsTitle: "Customer reviews",
    reviewsSub: "5.0 / 5 — 29 Google reviews",
    seeReviews: "See our 29 Google reviews",
    ctaTitle: "Ready to hit the road?",
    ctaText: "Book now and enjoy a reliable service in Marrakech, Merzouga and Errachidia.",
    formTitle: "Booking form",
    fullName: "Full name *",
    phone: "Phone number *",
    vehicle: "Preferred vehicle",
    pickupPlace: "Pickup location *",
    returnPlace: "Return location",
    pickupDate: "Pickup date *",
    returnDate: "Return date *",
    notes: "Notes",
    sendWa: "SEND VIA WHATSAPP",
    select: "Select",
    airportMarrakech: "Marrakech Menara Airport",
    merzouga: "Merzouga",
    airportErrachidia: "Errachidia Airport",
    agencyMarrakech: "Marrakech Airport desk",
    agencyMerzouga: "Merzouga agency",
    agencyErrachidia: "Errachidia Airport desk",
    labelAirport: "Airport",
    labelDesert: "Desert",
  },
  ar: {
    heroTitle1: "رحلتك",
    heroTitle2: "تبدأ",
    heroTitle3: "من وصولك",
    heroSub: "كراء في مرزوكة ومراكش والرشيدية. توصيل مطار مراكش 1200 درهم، الرشيدية 500 درهم. تأمين مشمول وكيلومترات غير محدودة.",
    badgeDelivery: "توصيل في المكان",
    badgeInsurance: "تأمين مشمول",
    badgeSupport: "دعم 24/7",
    pickupLabel: "مكان الاستلام",
    pickupDateLabel: "تاريخ البداية",
    returnDateLabel: "تاريخ الإرجاع",
    selectAirport: "اختر مطاراً",
    bookNow: "احجز الآن",
    agenciesTitle: "— مواقعنا —",
    agenciesSub: "متواجدون في أهم مطارات المغرب",
    seePage: "عرض الصفحة",
    fleetTitle: "— أسطولنا —",
    fleetSub: "تشكيلة واسعة من السيارات لكل الاحتياجات",
    reserve: "احجز",
    details: "التفاصيل",
    infoTitle: "— معلومات عملية —",
    infoSub: "كل ما تحتاج معرفته قبل الكراء",
    info1t: "رخصة القيادة",
    info1d: "رخصة سارية منذ سنتين على الأقل. لا حد أقصى للعمر.",
    info2t: "الوديعة",
    info2d: "وديعة 20 000 درهم (شيك أو نقد أو بطاقة). تُسترجع إن لم يُلاحظ ضرر.",
    info3t: "طرق الدفع",
    info3d: "نقداً أو بالبطاقة البنكية.",
    info4t: "الأجانب",
    info4d: "تُقبل الرخصة الوطنية دون رخصة دولية إلزامية.",
    f1t: "أسعار تنافسية", f1d: "أفضل قيمة مقابل السعر",
    f2t: "كيلومترات غير محدودة", f2d: "قد بدون حد",
    f3t: "تأمين مشمول", f3d: "سافر براحة بال",
    f4t: "إلغاء مجاني", f4d: "حتى 48 ساعة قبل",
    f5t: "دعم 24/7", f5d: "نحن هنا من أجلك",
    reviewsTitle: "آراء الزبناء",
    reviewsSub: "5,0 / 5 — 29 تقييماً على Google",
    seeReviews: "شاهد 29 تقييماً على Google",
    ctaTitle: "مستعد للانطلاق؟",
    ctaText: "احجز الآن واستفد من خدمة موثوقة في مراكش ومرزوكة والرشيدية.",
    formTitle: "نموذج الحجز",
    fullName: "الاسم الكامل *",
    phone: "رقم الهاتف *",
    vehicle: "السيارة المطلوبة",
    pickupPlace: "مكان الاستلام *",
    returnPlace: "مكان الإرجاع",
    pickupDate: "تاريخ الاستلام *",
    returnDate: "تاريخ الإرجاع *",
    notes: "ملاحظات",
    sendWa: "إرسال عبر واتساب",
    select: "اختر",
    airportMarrakech: "مطار مراكش المنارة",
    merzouga: "مرزوكة",
    airportErrachidia: "مطار الرشيدية",
    agencyMarrakech: "وكالة مطار مراكش",
    agencyMerzouga: "وكالة مرزوكة",
    agencyErrachidia: "وكالة مطار الرشيدية",
    labelAirport: "مطار",
    labelDesert: "صحراء",
  },
  es: {
    heroTitle1: "SU VIAJE",
    heroTitle2: "EMPIEZA",
    heroTitle3: "A SU LLEGADA",
    heroSub: "Alquiler en Merzouga, Marrakech y Errachidia. Entrega aeropuerto Marrakech 1.200 MAD, Errachidia 500 MAD. Seguro incluido, kilometraje ilimitado.",
    badgeDelivery: "Entrega in situ",
    badgeInsurance: "Seguro incluido",
    badgeSupport: "Soporte 24/7",
    pickupLabel: "Lugar de recogida",
    pickupDateLabel: "Fecha de inicio",
    returnDateLabel: "Fecha de devolución",
    selectAirport: "Seleccione un aeropuerto",
    bookNow: "RESERVAR AHORA",
    agenciesTitle: "— NUESTRAS UBICACIONES —",
    agenciesSub: "Estamos presentes en los principales aeropuertos de Marruecos",
    seePage: "Ver página",
    fleetTitle: "— NUESTRA FLOTA —",
    fleetSub: "Amplia selección de vehículos para todas las necesidades",
    reserve: "Reservar",
    details: "Detalles",
    infoTitle: "— INFORMACIÓN PRÁCTICA —",
    infoSub: "Todo lo que debe saber antes de alquilar",
    info1t: "Permiso de conducir",
    info1d: "Permiso válido con al menos 2 años. Sin límite de edad superior.",
    info2t: "Fianza",
    info2d: "Fianza de 20.000 MAD (cheque, efectivo o tarjeta). Devuelta si no hay daños.",
    info3t: "Formas de pago",
    info3d: "Efectivo o tarjeta bancaria.",
    info4t: "Extranjeros",
    info4d: "Permiso nacional aceptado, internacional no obligatorio.",
    f1t: "Tarifas competitivas", f1d: "Mejor relación calidad-precio",
    f2t: "Kilometraje ilimitado", f2d: "Conduzca sin límite",
    f3t: "Seguro incluido", f3d: "Viaje con tranquilidad",
    f4t: "Cancelación gratuita", f4d: "Hasta 48h antes",
    f5t: "Soporte 24/7", f5d: "Estamos para usted",
    reviewsTitle: "Opiniones de clientes",
    reviewsSub: "5,0 / 5 — 29 reseñas en Google",
    seeReviews: "Ver nuestras 29 reseñas en Google",
    ctaTitle: "¿Listo para salir a la carretera?",
    ctaText: "Reserve ahora y disfrute de un servicio fiable en Marrakech, Merzouga y Errachidia.",
    formTitle: "Formulario de reserva",
    fullName: "Nombre completo *",
    phone: "Teléfono *",
    vehicle: "Vehículo deseado",
    pickupPlace: "Lugar de recogida *",
    returnPlace: "Lugar de devolución",
    pickupDate: "Fecha de recogida *",
    returnDate: "Fecha de devolución *",
    notes: "Notas",
    sendWa: "ENVIAR POR WHATSAPP",
    select: "Seleccione",
    airportMarrakech: "Aeropuerto Marrakech Menara",
    merzouga: "Merzouga",
    airportErrachidia: "Aeropuerto Errachidia",
    agencyMarrakech: "Mostrador aeropuerto Marrakech",
    agencyMerzouga: "Agencia Merzouga",
    agencyErrachidia: "Mostrador aeropuerto Errachidia",
    labelAirport: "Aeropuerto",
    labelDesert: "Desierto",
  },
};

export function getHomeUI(locale: "fr" | "en" | "ar" | "es"): HomeUI {
  return homeUI[locale] || homeUI.fr;
}
