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
    { id: "marrakech", href: "/location-voiture-marrakech", name: t.agencyMarrakech, label: t.labelAirport, image: "location-voiture-marrakech-jamaa-elfna.webp", icon: "fa-plane" },
    { id: "merzouga", href: "/location-voiture-merzouga", name: t.agencyMerzouga, label: t.labelDesert, image: "location-voiture-merzouga-desert.webp", icon: "fa-map-location-dot" },
    { id: "errachidia", href: "/location-voiture-errachidia", name: t.agencyErrachidia, label: t.labelAirport, image: "location-voiture-errachidia.webp", icon: "fa-plane" },
  ];

  return (
    <>
      <Navbar locale={locale} />
      <main>
        <section id="home" className="mt-[70px] relative min-h-[calc(100vh-70px)] max-h-[680px] overflow-hidden bg-[#e8eef5]">
          <img src="/images/location-voiture-aeroport-maroc.webp" alt="" className="absolute inset-0 w-full h-full object-cover object-right opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="relative z-10 p-8 md:p-12 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--blue)] leading-tight mb-4">
              {t.heroTitle1}
              <span className="block text-[var(--red)]">{t.heroTitle2}</span>
              {t.heroTitle3}
            </h1>
            <p className="text-[14px] text-gray-600 max-w-xs mb-6">{t.heroSub}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Link href={lp("/location-voiture-marrakech")} className="text-sm bg-[var(--blue)] text-white px-4 py-2 rounded-lg">{nav.marrakech}</Link>
              <Link href={lp("/location-voiture-merzouga")} className="text-sm bg-[var(--blue)] text-white px-4 py-2 rounded-lg">{nav.merzouga}</Link>
              <Link href={lp("/location-voiture-errachidia")} className="text-sm bg-[var(--blue)] text-white px-4 py-2 rounded-lg">{nav.errachidia}</Link>
              <Link href={lp("/location-voiture-aller-simple")} className="text-sm border border-[var(--blue)] text-[var(--blue)] px-4 py-2 rounded-lg">{nav.oneWay}</Link>
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

        <div className="bg-white shadow-lg py-5 px-4 md:px-10">
          <div className="max-w-6xl mx-auto flex flex-wrap gap-3 items-end justify-center">
            <div className="flex-1 min-w-[150px]">
              <label className="block text-[11px] font-semibold mb-1.5">{t.pickupLabel}</label>
              <select className="w-full border border-gray-300 rounded-md py-2.5 px-3 text-[13px]">
                <option>{t.selectAirport}</option>
                <option>{t.airportMarrakech}</option>
                <option>{t.merzouga}</option>
                <option>{t.airportErrachidia}</option>
              </select>
            </div>
            <div className="flex-1 min-w-[140px]">
              <label className="block text-[11px] font-semibold mb-1.5">{t.pickupDateLabel}</label>
              <input type="date" className="w-full border border-gray-300 rounded-md py-2.5 px-3 text-[13px]" />
            </div>
            <div className="flex-1 min-w-[140px]">
              <label className="block text-[11px] font-semibold mb-1.5">{t.returnDateLabel}</label>
              <input type="date" className="w-full border border-gray-300 rounded-md py-2.5 px-3 text-[13px]" />
            </div>
            <button onClick={() => openBooking()} className="bg-gradient-to-r from-[var(--red)] to-[#c01820] text-white font-bold text-[12px] uppercase px-6 py-3 rounded-md flex items-center gap-2">
              {t.bookNow} <i className="fa-solid fa-arrow-right" />
            </button>
          </div>
        </div>

        <section id="agencies" className="py-16 px-4 md:px-10 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--blue)] uppercase tracking-wide">{t.agenciesTitle}</h2>
            <p className="text-[13px] text-gray-500 mt-2">{t.agenciesSub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {agencyMeta.map((a) => (
              <Link key={a.id} href={lp(a.href)} className="rounded-xl shadow-md overflow-hidden bg-white hover:-translate-y-2 transition duration-300 group block">
                <img src={`/images/${a.image}`} alt={a.name} className="w-full h-48 object-cover group-hover:scale-105 transition duration-500" />
                <div className="p-5 relative">
                  <div className="absolute -top-5 left-5 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow border-2 border-gray-200 text-[var(--blue)]">
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

        <section id="fleet" className="py-16 px-4 md:px-10 bg-[var(--gray-light)]">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--blue)] uppercase tracking-wide">{t.fleetTitle}</h2>
            <p className="text-[13px] text-gray-500 mt-2">{t.fleetSub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cars.map((car) => (
              <div key={car.slug} className="bg-white rounded-2xl p-4 shadow hover:shadow-md transition">
                <img src={`/images/${car.image}`} alt={car.fullName} className="w-full h-52 object-cover rounded-lg mb-3" />
                <h3 className="font-bold uppercase text-sm">{car.name}</h3>
                <p className="text-[var(--red)] font-bold text-sm mt-1">
                  {getDict(locale).common.from} {car.price} MAD {getDict(locale).common.day}
                </p>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{getCarDescription(car.slug, locale)}</p>
                <div className="flex gap-2 mt-3">
                  <Link href={lp(`/vehicules/${car.slug}`)} className="flex-1 py-2 border border-gray-300 text-center text-[12px] font-semibold rounded-md">
                    {t.details}
                  </Link>
                  <button onClick={() => openBooking(car.fullName)} className="flex-1 py-2 border border-[var(--red)] text-[var(--red)] text-[12px] font-semibold rounded-md">
                    {t.reserve}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-4 md:px-10 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--blue)] uppercase tracking-wide">{t.infoTitle}</h2>
            <p className="text-[13px] text-gray-500 mt-2">{t.infoSub}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: "fa-id-card", title: t.info1t, text: t.info1d, color: "blue" },
              { icon: "fa-money-bill-wave", title: t.info2t, text: t.info2d, color: "red" },
              { icon: "fa-credit-card", title: t.info3t, text: t.info3d, color: "green" },
              { icon: "fa-globe", title: t.info4t, text: t.info4d, color: "orange" },
            ].map((card, i) => (
              <div key={i} className="p-5 rounded-xl border bg-gray-50">
                <i className={`fa-solid ${card.icon} text-2xl text-[var(--blue)] mb-3`} />
                <h3 className="font-bold text-[var(--blue)] mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-4 md:px-10 bg-[var(--gray-light)]">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto text-center">
            {[
              { icon: "fa-percent", title: t.f1t, text: t.f1d },
              { icon: "fa-infinity", title: t.f2t, text: t.f2d },
              { icon: "fa-shield-halved", title: t.f3t, text: t.f3d },
              { icon: "fa-calendar-xmark", title: t.f4t, text: t.f4d },
              { icon: "fa-headset", title: t.f5t, text: t.f5d },
            ].map((f, i) => (
              <div key={i} className="p-4">
                <i className={`fa-solid ${f.icon} text-2xl text-[var(--red)] mb-2`} />
                <h3 className="font-bold text-sm text-[var(--blue)]">{f.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-4 text-center bg-white">
          <h2 className="text-2xl font-extrabold text-[var(--blue)] mb-2">{t.reviewsTitle}</h2>
          <p className="text-yellow-500 mb-4">★★★★★ {t.reviewsSub}</p>
          <a href="https://maps.app.goo.gl/2LELrDsP27MXXt3K9" target="_blank" rel="noopener noreferrer" className="text-[var(--blue)] font-semibold underline">
            {t.seeReviews}
          </a>
        </section>

        <section className="py-16 px-4 bg-[var(--gray-light)] text-center">
          <h2 className="text-3xl font-extrabold text-[var(--blue)] mb-3">{t.ctaTitle}</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">{t.ctaText}</p>
          <button onClick={() => openBooking()} className="inline-block bg-[var(--red)] text-white font-bold px-8 py-3 rounded-md">
            {t.bookNow}
          </button>
        </section>
      </main>
      <Footer locale={locale} />

      <a href="https://wa.me/212661371670" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center text-2xl shadow-lg" aria-label="WhatsApp">
        <i className="fa-brands fa-whatsapp" />
      </a>

      {showForm && (
        <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4" onClick={() => setShowForm(false)}>
          <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold text-[var(--blue)] mb-4">{t.formTitle}</h3>
            <form onSubmit={sendWhatsApp} className="space-y-3">
              <div>
                <label className="block text-[12px] font-semibold mb-1">{t.fullName}</label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border rounded-lg py-2.5 px-3 text-[13px]" />
              </div>
              <div>
                <label className="block text-[12px] font-semibold mb-1">{t.phone}</label>
                <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full border rounded-lg py-2.5 px-3 text-[13px]" />
              </div>
              <div>
                <label className="block text-[12px] font-semibold mb-1">{t.vehicle}</label>
                <input value={form.vehicle} onChange={(e) => setForm({ ...form, vehicle: e.target.value })} className="w-full border rounded-lg py-2.5 px-3 text-[13px]" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] font-semibold mb-1">{t.pickupPlace}</label>
                  <select required value={form.pickup} onChange={(e) => setForm({ ...form, pickup: e.target.value })} className="w-full border rounded-lg py-2.5 px-3 text-[13px]">
                    <option value="">{t.select}</option>
                    <option value={t.airportMarrakech}>{t.airportMarrakech}</option>
                    <option value={t.merzouga}>{t.merzouga}</option>
                    <option value={t.airportErrachidia}>{t.airportErrachidia}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[12px] font-semibold mb-1">{t.returnPlace}</label>
                  <select value={form.returnLoc} onChange={(e) => setForm({ ...form, returnLoc: e.target.value })} className="w-full border rounded-lg py-2.5 px-3 text-[13px]">
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
                  <input required type="date" value={form.pickupDate} onChange={(e) => setForm({ ...form, pickupDate: e.target.value })} className="w-full border rounded-lg py-2.5 px-3 text-[13px]" />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold mb-1">{t.returnDate}</label>
                  <input required type="date" value={form.returnDate} onChange={(e) => setForm({ ...form, returnDate: e.target.value })} className="w-full border rounded-lg py-2.5 px-3 text-[13px]" />
                </div>
              </div>
              <div>
                <label className="block text-[12px] font-semibold mb-1">{t.notes}</label>
                <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="w-full border rounded-lg py-2.5 px-3 text-[13px]" rows={2} />
              </div>
              <button type="submit" className="w-full bg-[var(--red)] text-white font-bold py-3 rounded-lg">{t.sendWa}</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
