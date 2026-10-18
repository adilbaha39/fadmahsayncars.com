import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { pageMetadata } from "@/lib/seo";
import { localizedPath } from "@/lib/i18n";

const locale = "en" as const;
const PAGE_URL_PATH = "/blog/marrakech-merzouga";

export const metadata: Metadata = pageMetadata({
  locale,
  path: PAGE_URL_PATH,
  title: 'Car rental Marrakech-Merzouga: one-way',
  description: 'Planning a one-way car rental Marrakech Merzouga? Discover the route, stages and suitable vehicle, then book easily.',
  image: "/images/location-voiture-aeroport-maroc.webp",
});

export default function ArticlePage() {
  const lp = (p: string) => localizedPath(p, locale);
  return (
    <>
      <Navbar locale={locale} />
      <main className="mt-[70px]">
        <section className="bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white py-16 px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Car rental Marrakech-Merzouga: one-way</h1>
          </div>
        </section>
        <article className="py-16 px-4 md:px-10 max-w-3xl mx-auto text-gray-700 space-y-5 leading-relaxed">
          <img src="/images/location-voiture-aeroport-maroc.webp" alt='Car rental Marrakech-Merzouga: one-way' className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg mb-8" />

          <p>
            Dreaming of linking Marrakech to the Merzouga desert with full freedom? Renting a car is often a flexible way to enjoy the landscapes, stop where you want and travel at your own pace. A one-way car rental from Marrakech to Merzouga allows you, when conditions allow, to start in Marrakech and return the vehicle in Merzouga without going back to the starting point. This guide explains how to prepare your trip, choose the right vehicle and request an offer suited to your dates.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">Marrakech to Merzouga by car: what you need to know</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Distance and route</h3>
          <p>
            The distance between Marrakech and Merzouga depends on the route you choose, tourist detours, stops and the exact pickup and drop-off points. Travel time also varies with driving pace, traffic, weather and travel conditions. It is best to check the exact route before departure and confirm with the agency according to dates, vehicle and rental contract.
          </p>
          <p>
            To prepare your departure, see our{" "}
            <Link href={lp("/location-voiture-marrakech")} className="text-[var(--red)] font-semibold hover:underline">Marrakech car rental</Link> page.
            You can also read the{" "}
            <Link href={lp("/location-voiture-merzouga")} className="text-[var(--red)] font-semibold hover:underline">Merzouga car rental</Link> page for arrival.
          </p>

          <h3 className="text-lg font-semibold text-[var(--blue)]">Main stages of the trip</h3>
          <p>
            A road trip between Marrakech and Merzouga offers many stop options. Depending on your wishes and time available, you may consider stages such as Aït Ben Haddou, Ouarzazate, the Dades Valley, the Todra Gorges, Erfoud and finally Merzouga. Not all stages are mandatory: the itinerary should match your pace, the season and your travel conditions.
          </p>

          <h3 className="text-lg font-semibold text-[var(--blue)]">How to organise the road trip?</h3>
          <p>
            To enjoy the journey, plan regular breaks, book some accommodation in advance and keep margin in your schedule. Download offline maps and check the weather before leaving. A well-prepared itinerary helps you travel more calmly and avoid packing too many stages into one day.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">One-way rental Marrakech–Merzouga: how it works</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">One-way, return to Marrakech or private transfer</h3>
          <p>
            <Link href={lp("/location-voiture-aller-simple")} className="text-[var(--red)] font-semibold hover:underline">One-way car rental</Link>{" "}
            means picking up the vehicle in Marrakech and returning it in Merzouga when this option is available for your dates and model. It can suit travellers who want to continue in the South without returning to Marrakech.
          </p>
          <p>
            A rental with return to Marrakech suits those who prefer a loop. A private transfer with driver can be an alternative if you prefer not to drive.
          </p>
          <p>
            Any one-way fees, conditions, availability and extras must be confirmed with the agency before booking.
          </p>

          <h3 className="text-lg font-semibold text-[var(--blue)]">Points to check before booking</h3>
          <ul className="list-disc list-inside space-y-2 ml-1">
            <li>exact pickup location;</li>
            <li>exact drop-off location;</li>
            <li>possible one-way or cross-city fees;</li>
            <li>mileage in the contract;</li>
            <li>insurance cover and excesses;</li>
            <li>deposit amount;</li>
            <li>pickup and return times;</li>
            <li>any restrictions on the vehicle or route.</li>
          </ul>
          <p>
            See our{" "}
            <Link href={lp("/conditions")} className="text-[var(--red)] font-semibold hover:underline">rental terms</Link>{" "}
            and request clear confirmation before confirming.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">Which car for Marrakech–Merzouga?</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">City car or sedan</h3>
          <p>
            A city car can suit mainly paved roads, light luggage and few passengers. A sedan often offers more comfort and space on long drives. Choice depends on group size, luggage and planned route.
          </p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">SUV: comfort and versatility</h3>
          <p>
            An SUV usually offers a higher driving position, more space and good road comfort. Always check the exact model specs. Not every SUV is a true 4x4: some are two-wheel drive and mainly for paved roads.
          </p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Dacia Duster or equivalent</h3>
          <p>
            The{" "}
            <Link href={lp("/vehicules/dacia-duster")} className="text-[var(--red)] font-semibold hover:underline">Dacia Duster</Link>{" "}
            or similar is often requested for space and versatility. Do not assume every version is a true 4x4. Specs depend on the version actually available.
          </p>
          <p>
            You can also check{" "}
            <Link href={lp("/vehicules/hyundai-creta")} className="text-[var(--red)] font-semibold hover:underline">Hyundai Creta</Link>{" "}
            and{" "}
            <Link href={lp("/vehicules/hyundai-tucson")} className="text-[var(--red)] font-semibold hover:underline">Hyundai Tucson</Link>, then ask the agency which model fits your route best.
          </p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Do you need a true 4x4?</h3>
          <p>
            A true 4x4 is not always required to reach Merzouga on main roads. Need depends on season, road condition and planned detours. Driving on dunes or some tracks may be forbidden or not covered by insurance. Do not use unauthorised routes without clear confirmation of rental conditions.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">Practical tips for driving to Merzouga</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Documents and vehicle condition</h3>
          <p>
            Before departure, check your driving licence, ID or passport, rental contract and insurance details. Do a vehicle check-in and photograph any marks or scratches before starting.
          </p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Luggage, water and breaks</h3>
          <p>
            Bring water, snacks, a basic first-aid kit and clothes for temperature changes. Match the car to passengers and luggage volume. Take regular breaks to stay alert.
          </p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Maps, fuel and careful driving</h3>
          <p>
            Download offline maps and plan main stages. Check fuel stops along the route and avoid rushing. Always adapt to weather, road condition and fatigue.
          </p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Tracks, dunes and insurance</h3>
          <p>
            Driving on dunes or tracks may be prohibited or not insured. Check the contract before departure and do not go off-road without clear authorisation.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">How to book a Marrakech–Merzouga car rental?</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Information to send the agency</h3>
          <ul className="list-disc list-inside space-y-2 ml-1">
            <li>pickup and return dates;</li>
            <li>pickup place in Marrakech;</li>
            <li>return place in Merzouga;</li>
            <li>number of travellers;</li>
            <li>preferred vehicle type;</li>
            <li>expected pickup time.</li>
          </ul>
          <p>
            Vehicle availability and one-way conditions must be confirmed for your dates, model and contract.
          </p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Sample WhatsApp message</h3>
          <div className="bg-gray-50 border rounded-xl p-4 text-sm space-y-1">
            <p>Hello, I would like a one-way car rental from Marrakech to Merzouga.</p>
            <p>Dates:</p>
            <p>Pickup location:</p>
            <p>Drop-off location:</p>
            <p>Number of travellers:</p>
            <p>Vehicle type:</p>
            <p>Pickup time:</p>
          </div>
          <p>
            For any question, use the{" "}
            <Link href={lp("/contact")} className="text-[var(--red)] font-semibold hover:underline">Contact</Link>{" "}
            page or WhatsApp.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">FAQ car rental Marrakech Merzouga</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Can I rent in Marrakech and return in Merzouga?</h3>
          <p>That can be a one-way rental. Possibility, conditions and fees must be confirmed for your dates, vehicle and contract.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Which vehicle for a Marrakech–Merzouga road trip?</h3>
          <p>It depends on passengers, luggage and route. A city car, sedan or SUV may suit. Ask the agency for advice.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Is one-way available for every vehicle?</h3>
          <p>Not necessarily. Some models may have special conditions. Confirm availability for your dates and vehicle.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Can I drive on dunes or tracks with a rental car?</h3>
          <p>Dunes or tracks may be forbidden or not covered by insurance. Check terms before departure and avoid unauthorised areas.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">What information should I prepare to book?</h3>
          <p>Dates, pickup and return places, number of travellers, vehicle type and preferred time. Then send your request via WhatsApp.</p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">Conclusion: prepare your trip and request a quote</h2>
          <p>
            A one-way car rental from Marrakech to Merzouga can be a practical way to organise a trip in southern Morocco. Prepare your route, choose a suitable vehicle and verify conditions before confirming.
          </p>
          <p>
            Planning Marrakech to Merzouga? Contact Fadma Hsayn Cars on WhatsApp to check conditions, available vehicle and an offer for your dates.
          </p>

          <div className="mt-8 p-6 bg-[var(--blue)] text-white rounded-2xl text-center">
            <a
              href="https://wa.me/212661371670"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--red)] hover:bg-[#c01820] text-white font-bold px-8 py-3 rounded-lg transition"
            >
              WhatsApp
            </a>
          </div>
        </article>
      </main>
      <Footer locale={locale} />
    </>
  );
}
