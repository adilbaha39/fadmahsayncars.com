import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/seo";
import { localizedPath } from "@/lib/i18n";

const locale = "en" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/blog/errachidia-merzouga",
  title: 'Car rental Errachidia-Merzouga: airport and one-way',
  description: 'Planning Errachidia Merzouga car rental from the airport? Discover the trip, one-way option and suitable vehicle, then request a quote.',
  image: "/images/location-voiture-errachidia.webp",
});

export default function ArticlePage() {
  const lp = (p: string) => localizedPath(p, locale);
  return (
    <>
      <Navbar locale={locale} />
      <main className="mt-[70px]">
        <section className="bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white py-16 px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Car rental Errachidia-Merzouga: airport and one-way</h1>
          </div>
        </section>
        <article className="py-16 px-4 md:px-10 max-w-3xl mx-auto text-gray-700 space-y-5 leading-relaxed">
          <img src="/images/location-voiture-errachidia.webp" alt='Car rental Errachidia-Merzouga: airport and one-way' className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg mb-8" />

          <p>
            Errachidia airport is often chosen by travellers who want to reach Merzouga and Erg Chebbi without going through Marrakech. An{" "}
            <strong>Errachidia Merzouga car rental</strong> lets you pick up a vehicle near the airport and continue to Merzouga at your own pace. When conditions allow, a{" "}
            <Link href={lp("/location-voiture-aller-simple")} className="text-[var(--red)] font-semibold hover:underline">one-way rental</Link>{" "}
            can also let you return the car in Merzouga. This guide helps you prepare the trip, choose a suitable vehicle and send a clear request to the agency.
          </p>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">Errachidia to Merzouga by car: what to know</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Why start from Errachidia?</h3>
          <p>
            For many travellers, Errachidia is the most practical air gateway to the Merzouga area. Renting a car on arrival gives more freedom to reach your accommodation, move around the region and manage your schedule without relying only on shared transfers.
          </p>
          <p>
            See our{" "}
            <Link href={lp("/location-voiture-errachidia")} className="text-[var(--red)] font-semibold hover:underline">Errachidia airport car rental</Link>{" "}
            page for pickup details, and{" "}
            <Link href={lp("/location-voiture-merzouga")} className="text-[var(--red)] font-semibold hover:underline">Merzouga car rental</Link>{" "}
            for the desert side.
          </p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Distance, duration and route</h3>
          <p>
            Distance and duration between Errachidia and Merzouga depend on the exact pickup point, route, stops and traffic. Weather and driving pace also affect travel time. Confirm with the agency for your dates and check the route before departure.
          </p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Errachidia airport delivery</h3>
          <p>
            Fadma Hsayn Cars offers delivery related to Errachidia airport. Exact arrangements (key handover place, hours, delivery fee) must be confirmed when booking. Share your flight arrival time so the agency can organise pickup in the best conditions possible.
          </p>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">One-way rental Errachidia–Merzouga</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">How one-way works</h3>
          <p>
            One-way means, when available, picking up in Errachidia (or at the airport) and returning in Merzouga without going back to the start. It can suit stays in Merzouga followed by a different return. Fees, availability by model and contract terms must be checked before confirmation. See{" "}
            <Link href={lp("/location-voiture-aller-simple")} className="text-[var(--red)] font-semibold hover:underline">one-way car rental</Link>.
          </p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Points to verify</h3>
          <ul className="list-disc list-inside space-y-2 ml-1">
            <li>exact pickup place (airport or other);</li>
            <li>exact return place in Merzouga;</li>
            <li>delivery and possible one-way fees;</li>
            <li>contract mileage;</li>
            <li>insurance and excesses;</li>
            <li>deposit;</li>
            <li>handover and return hours;</li>
            <li>vehicle or route restrictions.</li>
          </ul>
          <p>
            Also read the{" "}
            <Link href={lp("/conditions")} className="text-[var(--red)] font-semibold hover:underline">rental terms</Link>{" "}
            and request confirmation before booking.
          </p>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">Which car for Errachidia–Merzouga?</h2>
          <p>
            A city car can work on mainly paved roads with light luggage. A sedan often offers more comfort. An SUV usually gives more space and a higher driving position. Not every SUV is a 4x4 — check the model offered.
          </p>
          <p>
            Models often requested:{" "}
            <Link href={lp("/vehicules/dacia-duster")} className="text-[var(--red)] font-semibold hover:underline">Dacia Duster</Link>,{" "}
            <Link href={lp("/vehicules/hyundai-creta")} className="text-[var(--red)] font-semibold hover:underline">Hyundai Creta</Link>,{" "}
            <Link href={lp("/vehicules/hyundai-tucson")} className="text-[var(--red)] font-semibold hover:underline">Hyundai Tucson</Link>.
            Availability depends on dates.
          </p>
          <p>
            Driving on dunes or some tracks may be forbidden or not insured. Stay on authorised roads without clear confirmation of the contract.
          </p>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">How to book</h2>
          <ul className="list-disc list-inside space-y-2 ml-1">
            <li>pickup and return dates;</li>
            <li>pickup place (Errachidia airport or other);</li>
            <li>return place (Merzouga or other);</li>
            <li>flight number and arrival time if relevant;</li>
            <li>number of travellers;</li>
            <li>preferred vehicle type.</li>
          </ul>
          <div className="bg-gray-50 border rounded-xl p-4 text-sm space-y-1 my-4">
            <p>Hello, I would like a car rental from Errachidia to Merzouga.</p>
            <p>Dates / Pickup / Return / Flight time / Travellers / Vehicle:</p>
          </div>
          <p>
            Use{" "}
            <Link href={lp("/contact")} className="text-[var(--red)] font-semibold hover:underline">Contact</Link>{" "}
            or WhatsApp to send your request.
          </p>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">FAQ</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Can I rent at Errachidia airport for Merzouga?</h3>
          <p>Yes, airport-related delivery can allow you to reach Merzouga. Conditions, delivery fees and availability must be confirmed for your dates and vehicle.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">Can I return the car in Merzouga (one-way)?</h3>
          <p>Return in Merzouga can be a one-way rental when available. Conditions and fees must be checked with the agency before booking.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">How long is Errachidia to Merzouga?</h3>
          <p>Duration depends on exact route, traffic, weather and driving pace. Confirm with the agency for your pickup and return points.</p>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">Conclusion</h2>
          <p>
            Renting between Errachidia and Merzouga can simplify arrival in the desert and give more freedom on site. Prepare dates, airport pickup and possible Merzouga return, then confirm conditions before booking with Fadma Hsayn Cars on WhatsApp.
          </p>

          <div className="mt-8 p-6 bg-[var(--blue)] text-white rounded-2xl text-center">
            <a href="https://wa.me/212661371670" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[var(--red)] text-white font-bold px-8 py-3 rounded-lg">
              WhatsApp
            </a>
          </div>
        </article>
      </main>
      <Footer locale={locale} />
    </>
  );
}
