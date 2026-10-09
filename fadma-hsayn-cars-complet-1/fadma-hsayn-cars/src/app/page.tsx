"use client";

import { useState } from "react";
import Link from "next/link";
import { cars, agencies } from "@/data/cars";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    vehicle: "",
    pickup: "",
    returnLoc: "",
    pickupDate: "",
    returnDate: "",
    notes: "",
  });

  const openBooking = (carName = "") => {
    setForm((f) => ({ ...f, vehicle: carName }));
    setBookingOpen(true);
  };

  const submitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.phone || !form.pickup || !form.pickupDate || !form.returnDate) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }
    if (form.returnDate <= form.pickupDate) {
      alert("La date de retour doit être après la date de prise en charge");
      return;
    }
    const today = new Date().toISOString().slice(0, 10);
    if (form.pickupDate < today) {
      alert("La date de prise en charge ne peut pas être dans le passé");
      return;
    }
    let msg = `🚗 *Nouvelle Réservation - Fadma Hsayn Cars*\n\n`;
    msg += `👤 *Nom:* ${form.fullName}\n`;
    msg += `📞 *Téléphone:* ${form.phone}\n`;
    if (form.vehicle) msg += `🚘 *Véhicule:* ${form.vehicle}\n`;
    msg += `📍 *Prise en charge:* ${form.pickup}\n`;
    if (form.returnLoc) msg += `🏁 *Restitution:* ${form.returnLoc}\n`;
    msg += `📅 *Date de départ:* ${form.pickupDate}\n`;
    msg += `📅 *Date de retour:* ${form.returnDate}\n`;
    if (form.notes) msg += `📝 *Remarques:* ${form.notes}\n`;

    window.open(`https://wa.me/212661371670?text=${encodeURIComponent(msg)}`, "_blank");
    setBookingOpen(false);
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section id="home" className="mt-[70px] relative min-h-[calc(100vh-70px)] max-h-[680px] overflow-hidden bg-[#e8eef5]">
        <img src="/images/sora1.jpeg" alt="Location voiture aéroport Marrakech Menara" className="absolute inset-0 w-full h-full object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/97 via-white/80 to-transparent" />
        <div className="relative z-10 p-8 md:p-12 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--blue)] leading-tight mb-4">
            VOTRE VOYAGE
            <span className="block text-[var(--red)]">COMMENCE</span>
            DÈS VOTRE ARRIVÉE
          </h1>
          <p className="text-[14px] text-gray-600 max-w-xs mb-6">
            Location de voitures à Marrakech, Merzouga et Errachidia. Livraison aéroport, assurance incluse, kilométrage illimité.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <Link href="/location-voiture-marrakech" className="text-sm bg-[var(--blue)] text-white px-4 py-2 rounded-lg hover:bg-[var(--dark)] transition">Marrakech</Link>
            <Link href="/location-voiture-merzouga" className="text-sm bg-[var(--blue)] text-white px-4 py-2 rounded-lg hover:bg-[var(--dark)] transition">Merzouga</Link>
            <Link href="/location-voiture-errachidia" className="text-sm bg-[var(--blue)] text-white px-4 py-2 rounded-lg hover:bg-[var(--dark)] transition">Errachidia</Link>
            <Link href="/location-voiture-aller-simple" className="text-sm border border-[var(--blue)] text-[var(--blue)] px-4 py-2 rounded-lg hover:bg-[var(--blue)] hover:text-white transition">Aller simple</Link>
          </div>
          <div className="flex gap-6 flex-wrap">
            {[
              { icon: "fa-plane-arrival", text: "Livraison à l'aéroport" },
              { icon: "fa-shield-halved", text: "Assurance incluse" },
              { icon: "fa-headset", text: "Support 24/7" },
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
            <label className="block text-[11px] font-semibold mb-1.5">Lieu de prise en charge</label>
            <select
              value={form.pickup}
              onChange={(e) => setForm({ ...form, pickup: e.target.value })}
              className="w-full border border-gray-300 rounded-md py-2.5 px-3 text-[13px] outline-none focus:border-[var(--blue)]"
            >
              <option value="">Sélectionnez un aéroport</option>
              <option value="Aéroport Marrakech Menara">Aéroport Marrakech Menara</option>
              <option value="Merzouga">Merzouga</option>
              <option value="Aéroport Errachidia">Aéroport Errachidia</option>
            </select>
          </div>
          <div className="flex-1 min-w-[140px]">
            <label className="block text-[11px] font-semibold mb-1.5">Date de départ</label>
            <input
              type="date"
              value={form.pickupDate}
              onChange={(e) => setForm({ ...form, pickupDate: e.target.value })}
              className="w-full border border-gray-300 rounded-md py-2.5 px-3 text-[13px] outline-none focus:border-[var(--blue)]"
            />
          </div>
          <div className="flex-1 min-w-[140px]">
            <label className="block text-[11px] font-semibold mb-1.5">Date de retour</label>
            <input
              type="date"
              value={form.returnDate}
              onChange={(e) => setForm({ ...form, returnDate: e.target.value })}
              className="w-full border border-gray-300 rounded-md py-2.5 px-3 text-[13px] outline-none focus:border-[var(--blue)]"
            />
          </div>
          <button onClick={() => openBooking()} className="bg-gradient-to-r from-[var(--red)] to-[#c01820] text-white font-bold text-[12px] uppercase px-6 py-3 rounded-md flex items-center gap-2 hover:shadow-lg transition">
            RÉSERVER MAINTENANT <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>

      {/* Agencies */}
      <section id="agencies" className="py-16 px-4 md:px-10 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--blue)] uppercase tracking-wide">— NOS AGENCES —</h2>
          <p className="text-[13px] text-gray-500 mt-2">Nous sommes présents dans les principaux aéroports du Maroc</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {agencies.map((a) => (
            <Link
              key={a.id}
              href={
                a.id === "marrakech" ? "/location-voiture-marrakech" :
                a.id === "merzouga" ? "/location-voiture-merzouga" :
                "/location-voiture-errachidia"
              }
              className="rounded-xl shadow-md overflow-hidden bg-white hover:-translate-y-2 transition duration-300 group block"
            >
              <img src={`/images/${a.image}`} alt={a.name.fr} className="w-full h-48 object-cover group-hover:scale-105 transition duration-500" />
              <div className="p-5 relative">
                <div className="absolute -top-5 left-5 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow border-2 border-gray-200 text-[var(--blue)] group-hover:border-[var(--red)] group-hover:text-[var(--red)] transition">
                  <i className={`fa-solid ${a.type === "airport" ? "fa-plane" : "fa-map-location-dot"}`} />
                </div>
                <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mt-3 block">{a.label.fr}</span>
                <h3 className="text-lg font-extrabold text-[var(--blue)] mt-1 mb-3 uppercase">{a.name.fr}</h3>
                <span className="text-[13px] font-semibold text-[var(--red)] inline-flex items-center gap-1">
                  Voir la page <i className="fa-solid fa-arrow-right text-xs" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Fleet */}
      <section id="fleet" className="py-16 px-4 md:px-10 bg-[var(--gray-light)]">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--blue)] uppercase tracking-wide">— NOTRE FLOTTE —</h2>
          <p className="text-[13px] text-gray-500 mt-2">Une large sélection de véhicules adaptés à tous vos besoins</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-xl p-4 shadow-md text-center hover:-translate-y-2 hover:shadow-xl transition duration-300 border-2 border-transparent hover:border-red-100">
              <Link href={`/vehicules/${car.slug}`}>
                <img src={`/images/${car.image}`} alt={`Location ${car.fullName} Maroc`} className="w-full h-32 object-cover rounded-lg mb-3" />
                <h3 className="text-[13px] font-bold uppercase tracking-wide mb-2 hover:text-[var(--red)]">{car.name}</h3>
              </Link>
              <div className="flex justify-center gap-3 text-[11px] text-gray-500 mb-2">
                <span className="flex items-center gap-1">
                  <i className="fa-solid fa-gears" /> {car.transmission === "manual" ? "Manuelle" : "Automatique"}
                </span>
                <span className="flex items-center gap-1">
                  <i className="fa-solid fa-users" /> {car.seats} Places
                </span>
              </div>
              <div className="text-[15px] font-bold text-[var(--red)] mb-3">
                {car.price} MAD <span className="text-[12px] font-normal text-gray-400">/ jour</span>
              </div>
              <div className="flex flex-col gap-2">
                <Link href={`/vehicules/${car.slug}`} className="w-full py-2 border border-gray-300 text-gray-600 rounded-md text-[12px] font-semibold hover:border-[var(--blue)] hover:text-[var(--blue)] transition text-center">
                  Voir détails
                </Link>
                <button
                  onClick={() => openBooking(car.name)}
                  className="w-full py-2 border border-[var(--red)] text-[var(--red)] rounded-md text-[12px] font-semibold hover:bg-[var(--red)] hover:text-white transition flex items-center justify-center gap-1"
                >
                  Réserver <i className="fa-solid fa-arrow-right text-xs" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 px-4 md:px-10 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--blue)] uppercase tracking-wide">— INFORMATIONS PRATIQUES —</h2>
          <p className="text-[13px] text-gray-500 mt-2">Tout ce que vous devez savoir avant de louer</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {[
            { icon: "fa-id-card", color: "blue", title: "Permis de conduire", text: "Permis valide avec 2 ans d'ancienneté minimum. Pas de limite d'âge." },
            { icon: "fa-money-bill-wave", color: "red", title: "Caution", text: "Caution de 20 000 MAD (chèque, espèces ou carte). Restituée si aucun dommage." },
            { icon: "fa-credit-card", color: "green", title: "Modes de paiement", text: "Paiement accepté en espèces ou par carte bancaire." },
            { icon: "fa-globe", color: "orange", title: "Étrangers", text: "Permis national accepté sans permis international." },
          ].map((card, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-md hover:-translate-y-2 transition border-2 border-transparent hover:border-red-50">
              <div className={`w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center text-xl ${
                card.color === "blue" ? "bg-blue-100 text-[var(--blue)]" :
                card.color === "red" ? "bg-red-100 text-[var(--red)]" :
                card.color === "green" ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-500"
              }`}>
                <i className={`fa-solid ${card.icon}`} />
              </div>
              <h4 className="text-[14px] font-bold text-[var(--blue)] mb-2">{card.title}</h4>
              <p className="text-[12px] text-gray-500 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/faq" className="text-[var(--red)] font-semibold hover:underline">
            Voir toutes les questions fréquentes →
          </Link>
        </div>
      </section>

      {/* Features */}
      <div className="bg-white py-10 px-4 border-t border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-around gap-4">
          {[
            { icon: "fa-percent", color: "red", title: "Tarifs compétitifs", text: "Meilleur rapport qualité / prix" },
            { icon: "fa-infinity", color: "blue", title: "Kilométrage illimité", text: "Roulez sans limite" },
            { icon: "fa-shield-halved", color: "green", title: "Assurance incluse", text: "Voyagez en toute tranquillité" },
            { icon: "fa-calendar-xmark", color: "orange", title: "Annulation gratuite", text: "Jusqu'à 48h avant" },
            { icon: "fa-headset", color: "purple", title: "Support 24/7", text: "Nous sommes là pour vous" },
          ].map((f, i) => (
            <div key={i} className="flex items-start gap-3 p-3 max-w-[200px] hover:bg-gray-50 rounded-xl transition">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-lg ${
                f.color === "red" ? "bg-red-100 text-[var(--red)]" :
                f.color === "blue" ? "bg-blue-100 text-[var(--blue)]" :
                f.color === "green" ? "bg-green-100 text-green-600" :
                f.color === "orange" ? "bg-orange-100 text-orange-500" : "bg-purple-100 text-purple-600"
              }`}>
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

      {/* CTA */}
      <section className="py-16 px-4 md:px-10 bg-[var(--gray-light)]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-[var(--blue)] mb-3">Prêt à prendre la route ?</h2>
            <p className="text-[14px] text-gray-500 mb-6">Réservez maintenant et profitez d&apos;un service fiable et professionnel à Marrakech, Merzouga ou Errachidia.</p>
            <button onClick={() => openBooking()} className="bg-gradient-to-r from-[var(--red)] to-[#c01820] text-white font-bold text-[13px] uppercase px-8 py-3.5 rounded-md hover:shadow-lg transition">
              RÉSERVER MAINTENANT
            </button>
          </div>
          <div className="hidden md:block">
            <img src="/images/cars1.jpeg" alt="Location voiture Maroc" className="w-full max-w-sm float-car" />
          </div>
        </div>
      </section>

      <Footer />

      <a
        href="https://wa.me/212661371670"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition text-2xl"
        aria-label="WhatsApp"
      >
        <i className="fa-brands fa-whatsapp" />
      </a>

      {bookingOpen && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4" onClick={() => setBookingOpen(false)}>
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setBookingOpen(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">✕</button>
            <h2 className="text-xl font-extrabold text-[var(--blue)] text-center mb-6">Formulaire de Réservation</h2>
            <form onSubmit={submitBooking} className="space-y-4">
              <div>
                <label className="block text-[12px] font-semibold mb-1">Nom complet *</label>
                <input required value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} className="w-full border border-gray-300 rounded-lg py-2.5 px-3 text-[13px] outline-none focus:border-[var(--blue)]" />
              </div>
              <div>
                <label className="block text-[12px] font-semibold mb-1">Numéro de téléphone *</label>
                <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full border border-gray-300 rounded-lg py-2.5 px-3 text-[13px] outline-none focus:border-[var(--blue)]" placeholder="+212 6 XX XX XX XX" />
              </div>
              <div>
                <label className="block text-[12px] font-semibold mb-1">Véhicule souhaité</label>
                <input value={form.vehicle} readOnly className="w-full border border-gray-300 rounded-lg py-2.5 px-3 text-[13px] bg-gray-50" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] font-semibold mb-1">Lieu de prise en charge *</label>
                  <select required value={form.pickup} onChange={(e) => setForm({ ...form, pickup: e.target.value })} className="w-full border border-gray-300 rounded-lg py-2.5 px-3 text-[13px]">
                    <option value="">Sélectionnez</option>
                    <option value="Aéroport Marrakech Menara">Aéroport Marrakech Menara</option>
                    <option value="Merzouga">Merzouga</option>
                    <option value="Aéroport Errachidia">Aéroport Errachidia</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[12px] font-semibold mb-1">Lieu de restitution</label>
                  <select value={form.returnLoc} onChange={(e) => setForm({ ...form, returnLoc: e.target.value })} className="w-full border border-gray-300 rounded-lg py-2.5 px-3 text-[13px]">
                    <option value="">Sélectionnez</option>
                    <option value="Aéroport Marrakech Menara">Aéroport Marrakech Menara</option>
                    <option value="Merzouga">Merzouga</option>
                    <option value="Aéroport Errachidia">Aéroport Errachidia</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] font-semibold mb-1">Date de prise en charge *</label>
                  <input required type="date" value={form.pickupDate} onChange={(e) => setForm({ ...form, pickupDate: e.target.value })} className="w-full border border-gray-300 rounded-lg py-2.5 px-3 text-[13px]" />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold mb-1">Date de restitution *</label>
                  <input required type="date" value={form.returnDate} onChange={(e) => setForm({ ...form, returnDate: e.target.value })} className="w-full border border-gray-300 rounded-lg py-2.5 px-3 text-[13px]" />
                </div>
              </div>
              <div>
                <label className="block text-[12px] font-semibold mb-1">Remarques / Notes</label>
                <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="w-full border border-gray-300 rounded-lg py-2.5 px-3 text-[13px] min-h-[80px]" />
              </div>
              <button type="submit" className="w-full py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-[14px] uppercase rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition">
                ENVOYER VIA WHATSAPP <i className="fa-brands fa-whatsapp" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
