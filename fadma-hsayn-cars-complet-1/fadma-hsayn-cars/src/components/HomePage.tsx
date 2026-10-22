"use client";

import { useState } from "react";
import Link from "next/link";
import { cars } from "@/data/cars";
import { getCarDescription } from "@/data/cars-i18n";
import { getDict, getHomeUI } from "@/data/i18n-dict";
import { localizedPath, type Locale } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage({ locale }: { locale: Locale }) {
  const t = getHomeUI(locale);
  const nav = getDict(locale).nav;
  const common = getDict(locale).common;
  const lp = (p: string) => localizedPath(p, locale);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    vehicle: "",
    pickup: "",
    returnLoc: "",
    pickupDate: "",
    returnDate: "",
    notes: "",
  });
  const [showForm, setShowForm] = useState(false);

  const openBooking = (vehicle = "") => {
    setForm((f) => ({ ...f, vehicle }));
    setShowForm(true);
  };

  const sendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      form.name && `Name: ${form.name}`,
      form.phone && `Phone: ${form.phone}`,
      form.vehicle && `Vehicle: ${form.vehicle}`,
      form.pickup && `Pickup: ${form.pickup}`,
      form.returnLoc && `Return: ${form.returnLoc}`,
      form.pickupDate && `From: ${form.pickupDate}`,
      form.returnDate && `To: ${form.returnDate}`,
      form.notes && `Notes: ${form.notes}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/212661371670?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const agencyMeta = [
    {
      id: "marrakech",
      href: "/location-voiture-marrakech",
      name: t.agencyMarrakech,
      label: t.labelAirport,
      image: "location-voiture-marrakech-jamaa-elfna.webp",
      icon: "fa-plane",
    },
    {
      id: "merzouga",
      href: "/location-voiture-merzouga",
      name: t.agencyMerzouga,
      label: t.labelDesert,
      image: "location-voiture-merzouga-desert.webp",
      icon: "fa-map-location-dot",
    },
    {
      id: "errachidia",
      href: "/location-voiture-errachidia",
      name: t.agencyErrachidia,
      label: t.labelAirport,
      image: "location-voiture-errachidia.webp",
      icon: "fa-plane",
    },
  ];

  const faqLinkLabel =
    locale === "fr"
      ? "Voir toutes les questions fréquentes →"
      : locale === "en"
        ? "See all frequently asked questions →"
        : locale === "ar"
          ? "عرض جميع الأسئلة الشائعة ←"
          : "Ver todas las preguntas frecuentes →";

  return (
    <>
      <Navbar locale={locale} />
      <main>
        {/* Hero */}
        <section id="home" className="mt-[70px] relative min-h-[calc(100vh-70px)] max-h-[680px] overflow-hidden bg-[#e8eef5]">
          <img
            src="/images/location-voiture-aeroport-maroc.webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-right opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="relative z-10 p-8 md:p-12 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--blue)] leading-tight mb-4">
              {t.heroTitle1}
              <span className="block text-[var(--red)]">{t.heroTitle2}</span>
              {t.heroTitle3}
            </h1>
            <p className="text-[14px] text-gray-600 max-w-xs mb-6">{t.heroSub}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Link href={lp("/location-voiture-marrakech")} className="text-sm bg-[var(--blue)] text-white px-4 py-2 rounded-lg hover:bg-[var(--dark)] transition">
                {nav.marrakech}
              </Link>
              <Link href={lp("/location-voiture-merzouga")} className="text-sm bg-[var(--blue)] text-white px-4 py-2 rounded-lg hover:bg-[var(--dark)] transition">
                {nav.merzouga}
              </Link>
              <Link href={lp("/location-voiture-errachidia")} className="text-sm bg-[var(--blue)] text-white px-4 py-2 rounded-lg hover:bg-[var(--dark)] transition">
                {nav.errachidia}
              </Link>
              <Link
                href={lp("/location-voiture-aller-simple")}
                className="text-sm border border-[var(--blue)] text-[var(--blue)] px-4 py-2 rounded-lg hover:bg-[var(--blue)] hover:text-white transition"
              >
                {nav.oneWay}
              </Link>
            </div>
            <div className="flex gap-6 flex-wrap">
              {[
                { icon: "fa-plane-arrival", text: t.badgeDelivery },
                { icon: "fa-shield-halved", text: t.badgeInsurance },
                { icon: "fa-headset", text: t.badgeSupport },
              ].map((b, i) => (
                <div key={i} className="flex flex-col items-center gap-2 text-center">
                  <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md text-[var(--blue)] text-lg">
                    <i className={`fa-solid ${b.icon}`} />
                  </div>
                  <span className="text-[11px] font-medium max-w-[70px]">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Bar */}
        <div className="bg-white shadow-lg py-5 px-4 md:px-10">
          <div className="max-w-6xl mx-auto flex flex-wrap gap-3 items-end justify-center">
            <div className="flex-1 min-w-[150px]">
              <label className="block text-[11px] font-semibold mb-1.5">{t.pickupLabel}</label>
              <select className="w-full border border-gray-300 rounded-md py-2.5 px-3 text-[13px] outline-none focus:border-[var(--blue)]">
                <option>{t.selectAirport}</option>
                <option>{t.airportMarrakech}</option>
                <option>{t.merzouga}</option>
                <option>{t.airportErrachidia}</option>
              </select>
            </div>
            <div className="flex-1 min-w-[140px]">
              <label className="block text-[11px] font-semibold mb-1.5">{t.pickupDateLabel}</label>
              <input type="date" className="w-full border border-gray-300 rounded-md py-2.5 px-3 text-[13px] outline-none focus:border-[var(--blue)]" />
            </div>
            <div className="flex-1 min-w-[140px]">
              <label className="block text-[11px] font-semibold mb-1.5">{t.returnDateLabel}</label>
              <input type="date" className="w-full border border-gray-300 rounded-md py-2.5 px-3 text-[13px] outline-none focus:border-[var(--blue)]" />
            </div>
            <button
              onClick={() => openBooking()}
              className="bg-gradient-to-r from-[var(--red)] to-[#c01820] text-white font-bold text-[12px] uppercase px-6 py-3 rounded-md flex items-center gap-2 hover:shadow-lg transition"
            >
              {t.bookNow} <i className="fa-solid fa-arrow-right" />
            </button>
          </div>
        </div>

        {/* Agencies */}
        <section id="agencies" className="py-16 px-4 md:px-10 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--blue)] uppercase tracking-wide">{t.agenciesTitle}</h2>
            <p className="text-[13px] text-gray-500 mt-2">{t.agenciesSub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {agencyMeta.map((a) => (
              <Link
                key={a.id}
                href={lp(a.href)}
                className="rounded-xl shadow-md overflow-hidden bg-white hover:-translate-y-2 transition duration-300 group block border-2 border-transparent hover:border-red-50"
              >
                <img src={`/images/${a.image}`} alt={a.name} className="w-full h-48 object-cover group-hover:scale-105 transition duration-500" />
                <div className="p-5 relative">
                  <div className="absolute -top-5 left-5 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow border-2 border-gray-200 text-[var(--blue)] group-hover:border-[var(--red)] group-hover:text-[var(--red)] transition">
                    <i className={`fa-solid ${a.icon}`} />
                  </div>
                  <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mt-3 block">{a.label}</span>
                  <h3 className="text-lg font-extrabold text-[var(--blue)] mt-1 mb-3 uppercase">{a.name}</h3>
                  <span className="text-[13px] font-semibold text-[var(--red)] inline-flex items-center gap-1">
                    {t.seePage} <i className="fa-solid fa-arrow-right text-xs" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Fleet — original dense grid */}
        <section id="fleet" className="py-16 px-4 md:px-10 bg-[var(--gray-light)]">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--blue)] uppercase tracking-wide">{t.fleetTitle}</h2>
            <p className="text-[13px] text-gray-500 mt-2">{t.fleetSub}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {cars.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-xl p-4 shadow-md text-center hover:-translate-y-2 hover:shadow-xl transition duration-300 border-2 border-transparent hover:border-red-100"
              >
                <Link href={lp(`/vehicules/${car.slug}`)}>
                  <img
                    src={`/images/${car.image}`}
                    alt={`${car.fullName}`}
                    className="w-full h-36 object-cover rounded-lg mb-3"
                  />
                  <h3 className="text-[13px] font-bold uppercase tracking-wide mb-2 hover:text-[var(--red)]">{car.name}</h3>
                </Link>
                <div className="flex justify-center gap-3 text-[11px] text-gray-500 mb-2">
                  <span className="flex items-center gap-1">
                    <i className="fa-solid fa-gears" />{" "}
                    {car.transmission === "automatic" ? common.automatic : common.manual}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fa-solid fa-users" /> {car.seats} {common.seats}
                  </span>
                </div>
                <div className="text-[15px] font-bold text-[var(--red)] mb-3">
                  {car.price} MAD <span className="text-[12px] font-normal text-gray-400">{common.day}</span>
                </div>
                <p className="text-[11px] text-gray-400 line-clamp-2 mb-3 px-1">{getCarDescription(car.slug, locale)}</p>
                <div className="flex flex-col gap-2">
                  <Link
                    href={lp(`/vehicules/${car.slug}`)}
                    className="w-full py-2 border border-gray-300 text-gray-600 rounded-md text-[12px] font-semibold hover:border-[var(--blue)] hover:text-[var(--blue)] transition text-center"
                  >
                    {t.details}
                  </Link>
                  <button
                    onClick={() => openBooking(car.fullName)}
                    className="w-full py-2 border border-[var(--red)] text-[var(--red)] rounded-md text-[12px] font-semibold hover:bg-[var(--red)] hover:text-white transition flex items-center justify-center gap-1"
                  >
                    {t.reserve} <i className="fa-solid fa-arrow-right text-xs" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Info Cards — original style */}
        <section className="py-16 px-4 md:px-10 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--blue)] uppercase tracking-wide">{t.infoTitle}</h2>
            <p className="text-[13px] text-gray-500 mt-2">{t.infoSub}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { icon: "fa-id-card", color: "blue", title: t.info1t, text: t.info1d },
              { icon: "fa-money-bill-wave", color: "red", title: t.info2t, text: t.info2d },
              { icon: "fa-credit-card", color: "green", title: t.info3t, text: t.info3d },
              { icon: "fa-globe", color: "orange", title: t.info4t, text: t.info4d },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:-translate-y-2 transition border-2 border-transparent hover:border-red-50"
              >
                <div
                  className={`w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center text-xl ${
                    card.color === "blue"
                      ? "bg-blue-100 text-[var(--blue)]"
                      : card.color === "red"
                        ? "bg-red-100 text-[var(--red)]"
                        : card.color === "green"
                          ? "bg-green-100 text-green-600"
                          : "bg-orange-100 text-orange-500"
                  }`}
                >
                  <i className={`fa-solid ${card.icon}`} />
                </div>
                <h4 className="text-[14px] font-bold text-[var(--blue)] mb-2">{card.title}</h4>
                <p className="text-[12px] text-gray-500 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={lp("/faq")} className="text-[var(--red)] font-semibold hover:underline">
              {faqLinkLabel}
            </Link>
          </div>
        </section>

        {/* Features bar — original */}
        <div className="bg-white py-10 px-4 border-t border-gray-200">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-around gap-4">
            {[
              { icon: "fa-percent", color: "red", title: t.f1t, text: t.f1d },
              { icon: "fa-infinity", color: "blue", title: t.f2t, text: t.f2d },
              { icon: "fa-shield-halved", color: "green", title: t.f3t, text: t.f3d },
              { icon: "fa-calendar-xmark", color: "orange", title: t.f4t, text: t.f4d },
              { icon: "fa-headset", color: "purple", title: t.f5t, text: t.f5d },
            ].map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-3 max-w-[200px] hover:bg-gray-50 rounded-xl transition">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-lg ${
                    f.color === "red"
                      ? "bg-red-100 text-[var(--red)]"
                      : f.color === "blue"
                        ? "bg-blue-100 text-[var(--blue)]"
                        : f.color === "green"
                          ? "bg-green-100 text-green-600"
                          : f.color === "orange"
                            ? "bg-orange-100 text-orange-500"
                            : "bg-purple-100 text-purple-600"
                  }`}
                >
                  <i className={`fa-solid ${f.icon}`} />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-[var(--blue)]">{f.title}</h4>
                  <p className="text-[11px] text-gray-500">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <section className="py-16 px-4 text-center bg-[var(--gray-light)]">
          <h2 className="text-2xl font-extrabold text-[var(--blue)] mb-2">{t.reviewsTitle}</h2>
          <p className="text-yellow-500 text-xl mb-2">★★★★★</p>
          <p className="text-gray-600 mb-4">{t.reviewsSub}</p>
          <a
            href="https://maps.app.goo.gl/2LELrDsP27MXXt3K9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--blue)] font-semibold underline"
          >
            {t.seeReviews}
          </a>
        </section>

        {/* CTA — original 2 columns + car image */}
        <section className="py-16 px-4 md:px-10 bg-white">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-[var(--blue)] mb-3">{t.ctaTitle}</h2>
              <p className="text-[14px] text-gray-500 mb-6">{t.ctaText}</p>
              <button
                onClick={() => openBooking()}
                className="bg-gradient-to-r from-[var(--red)] to-[#c01820] text-white font-bold text-[13px] uppercase px-8 py-3.5 rounded-md hover:shadow-lg transition"
              >
                {t.bookNow}
              </button>
            </div>
            <div className="hidden md:block">
              <img
                src="/images/location-dacia-duster-marrakech.webp"
                alt="Fadma Hsayn Cars"
                className="w-full max-w-sm mx-auto"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />

      <a
        href="https://wa.me/212661371670"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition"
        aria-label="WhatsApp"
      >
        <i className="fa-brands fa-whatsapp" />
      </a>

      {showForm && (
        <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4" onClick={() => setShowForm(false)}>
          <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-extrabold text-[var(--blue)] text-center mb-6">{t.formTitle}</h3>
            <form onSubmit={sendWhatsApp} className="space-y-3">
              <div>
                <label className="block text-[12px] font-semibold mb-1">{t.fullName}</label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border border-gray-300 rounded-lg py-2.5 px-3 text-[13px]" />
              </div>
              <div>
                <label className="block text-[12px] font-semibold mb-1">{t.phone}</label>
                <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full border border-gray-300 rounded-lg py-2.5 px-3 text-[13px]" />
              </div>
              <div>
                <label className="block text-[12px] font-semibold mb-1">{t.vehicle}</label>
                <input value={form.vehicle} onChange={(e) => setForm({ ...form, vehicle: e.target.value })} className="w-full border border-gray-300 rounded-lg py-2.5 px-3 text-[13px] bg-gray-50" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] font-semibold mb-1">{t.pickupPlace}</label>
                  <select required value={form.pickup} onChange={(e) => setForm({ ...form, pickup: e.target.value })} className="w-full border border-gray-300 rounded-lg py-2.5 px-3 text-[13px]">
                    <option value="">{t.select}</option>
                    <option value={t.airportMarrakech}>{t.airportMarrakech}</option>
                    <option value={t.merzouga}>{t.merzouga}</option>
                    <option value={t.airportErrachidia}>{t.airportErrachidia}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[12px] font-semibold mb-1">{t.returnPlace}</label>
                  <select value={form.returnLoc} onChange={(e) => setForm({ ...form, returnLoc: e.target.value })} className="w-full border border-gray-300 rounded-lg py-2.5 px-3 text-[13px]">
                    <option value="">{t.select}</option>
                    <option value={t.airportMarrakech}>{t.airportMarrakech}</option>
                    <option value={t.merzouga}>{t.merzouga}</option>
                    <option value={t.airportErrachidia}>{t.airportErrachidia}</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] font-semibold mb-1">{t.pickupDate}</label>
                  <input required type="date" value={form.pickupDate} onChange={(e) => setForm({ ...form, pickupDate: e.target.value })} className="w-full border border-gray-300 rounded-lg py-2.5 px-3 text-[13px]" />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold mb-1">{t.returnDate}</label>
                  <input required type="date" value={form.returnDate} onChange={(e) => setForm({ ...form, returnDate: e.target.value })} className="w-full border border-gray-300 rounded-lg py-2.5 px-3 text-[13px]" />
                </div>
              </div>
              <div>
                <label className="block text-[12px] font-semibold mb-1">{t.notes}</label>
                <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="w-full border border-gray-300 rounded-lg py-2.5 px-3 text-[13px] min-h-[80px]" />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-[14px] uppercase rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition"
              >
                {t.sendWa} <i className="fa-brands fa-whatsapp" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
