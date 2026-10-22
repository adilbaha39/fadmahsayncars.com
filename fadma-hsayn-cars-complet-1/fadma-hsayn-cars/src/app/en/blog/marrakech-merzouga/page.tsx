import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { pageMetadata } from "@/lib/seo";

const PAGE_URL = "https://fadmahsayncars.com/en/blog/marrakech-merzouga";
const TITLE = "Car rental Marrakech–Merzouga: one-way guide";
const DESCRIPTION =
  "Planning a one-way car rental from Marrakech to Merzouga? Route, vehicle choice, conditions and booking tips with Fadma Hsayn Cars.";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/blog/marrakech-merzouga",
  title: TITLE,
  description: DESCRIPTION,
  image: "/images/location-voiture-aeroport-maroc.webp",
});

const faqItems = [
  {
    q: "Can I rent in Marrakech and return in Merzouga?",
    a: "Yes, this can be a one-way rental. Possibility, fees and conditions depend on dates, vehicle and contract — always confirm with the agency before booking.",
  },
  {
    q: "Which vehicle for a Marrakech–Merzouga road trip?",
    a: "City car, sedan or SUV depending on passengers, luggage and roads. SUVs are often recommended for the south. Ask the agency for advice.",
  },
  {
    q: "Is one-way available for every car?",
    a: "Not always. Availability depends on the fleet and schedule. Confirm before booking.",
  },
  {
    q: "What does Marrakech airport delivery cost?",
    a: "Delivery at Marrakech Menara airport is 1,200 MAD.",
  },
  {
    q: "What should I send on WhatsApp?",
    a: "Dates, pickup and return places, number of travellers, vehicle type and preferred time.",
  },
];

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: TITLE,
    description: DESCRIPTION,
    image: "https://fadmahsayncars.com/images/location-voiture-aeroport-maroc.webp",
    author: { "@type": "Organization", name: "Fadma Hsayn Cars" },
    publisher: {
      "@type": "Organization",
      name: "Fadma Hsayn Cars",
      logo: {
        "@type": "ImageObject",
        url: "https://fadmahsayncars.com/images/logo-fadma-hsayn-cars.webp",
      },
    },
    mainEntityOfPage: PAGE_URL,
    inLanguage: "en",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Navbar locale="en" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="mt-[70px]">
        <section className="bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white py-16 px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb
              items={[
                { name: "Home", url: "https://fadmahsayncars.com/en" },
                { name: "Blog", url: "https://fadmahsayncars.com/en/blog" },
                { name: "Marrakech → Merzouga", url: PAGE_URL },
              ]}
            />
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{TITLE}</h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Route, vehicle choice and one-way rental between Marrakech and Merzouga.
            </p>
          </div>
        </section>

        <article className="py-16 px-4 md:px-10 max-w-3xl mx-auto text-gray-700 space-y-5 leading-relaxed">
          <div className="mb-8">
            <img
              src="/images/location-voiture-aeroport-maroc.webp"
              alt="Car rental Marrakech Merzouga one-way"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <p>
            Dream of linking Marrakech to the Merzouga desert with full freedom? Renting a car is often the most flexible way to enjoy the landscapes, stop where you want and travel at your own pace. A one-way rental from Marrakech to Merzouga lets you start in Marrakech and return the vehicle in Merzouga without going back to the start — when conditions allow. This guide explains how to prepare the trip, choose the right vehicle and request an offer suited to your dates.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">
            Marrakech to Merzouga by car: what you need to know
          </h2>

          <h3 className="text-lg font-semibold text-[var(--blue)]">Distance and route</h3>
          <p>
            The distance between Marrakech and Merzouga depends on the itinerary, tourist detours, stops and the exact pickup and return points. Driving time is often a full day when including breaks. Plan to drive in daylight and avoid rushing mountain or desert sections.
          </p>
          <p>
            Popular routes cross the High Atlas and the south (for example via Ouarzazate and the Draa or Ziz valleys depending on the itinerary). Always check road conditions and weather before departure.
          </p>

          <h3 className="text-lg font-semibold text-[var(--blue)]">Why rent a car for this trip?</h3>
          <p>
            A rental car gives you freedom to stop at kasbahs, viewpoints and villages. Compared with a fixed bus schedule, you choose your pace. One-way rental (Marrakech → Merzouga) avoids returning the car to the start when your stay continues in the desert.
          </p>
          <p>
            A private transfer with a driver remains an alternative if you prefer not to drive. Any fees for return in another city, conditions, availability and supplements must be checked with the agency before booking.
          </p>

          <h3 className="text-lg font-semibold text-[var(--blue)]">Conditions to check before booking</h3>
          <p>Before confirming a one-way rental, verify the following:</p>
          <ul className="list-disc list-inside space-y-2 ml-1">
            <li>exact pickup location;</li>
            <li>exact return location;</li>
            <li>any fees for return in another city;</li>
            <li>mileage terms in the contract;</li>
            <li>insurance cover and possible excess;</li>
            <li>deposit amount;</li>
            <li>pickup and return times;</li>
            <li>any vehicle or route restrictions.</li>
          </ul>
          <p>
            For the rules that apply, see our{" "}
            <Link href="/en/conditions" className="text-[var(--red)] font-semibold hover:underline">
              rental conditions
            </Link>{" "}
            and ask for a precise confirmation before validating your booking.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">
            Which car for Marrakech–Merzouga?
          </h2>

          <h3 className="text-lg font-semibold text-[var(--blue)]">City car or sedan</h3>
          <p>
            A city car can suit a trip mainly on paved roads, with light luggage and few passengers. A sedan offers more comfort and space on long distances. The choice depends on group size, luggage and planned stops.
          </p>

          <h3 className="text-lg font-semibold text-[var(--blue)]">SUV: comfort and versatility</h3>
          <p>
            An SUV (for example Dacia Duster, Hyundai Creta or Tucson) is often preferred for southern roads and approaches to Merzouga. Higher ground clearance and space help with luggage and varying road quality. Confirm with the agency whether tracks or dunes are allowed for the chosen model.
          </p>

          <h3 className="text-lg font-semibold text-[var(--blue)]">Family and 7-seat options</h3>
          <p>
            For larger groups, a 7-seater such as the Dacia Jogger can be suitable when available. Book early in high season.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">
            One-way rental Marrakech → Merzouga
          </h2>

          <h3 className="text-lg font-semibold text-[var(--blue)]">How it works</h3>
          <p>
            You pick up in Marrakech (airport or agreed point) and return in Merzouga at the agency. Delivery at Marrakech Menara airport costs 1,200 MAD. Our main agency is in Merzouga. A one-way supplement may apply depending on dates and vehicle.
          </p>

          <h3 className="text-lg font-semibold text-[var(--blue)]">Who is it for?</h3>
          <p>
            Ideal if you fly into Marrakech, drive to the desert and stay in Merzouga without returning north in the same car. Also useful for southbound road trips ending at Erg Chebbi.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">Practical tips</h2>

          <h3 className="text-lg font-semibold text-[var(--blue)]">Documents and deposit</h3>
          <p>
            Valid licence held for at least 2 years; national licence accepted for foreign visitors. Deposit 20,000 MAD (cash, cheque or card), returned if no damage. Insurance included; unlimited mileage under standard terms. Free cancellation up to 48 hours before pickup.
          </p>

          <h3 className="text-lg font-semibold text-[var(--blue)]">Fuel, rest and safety</h3>
          <p>
            Fill up in major towns. Plan rest stops. Drive carefully in the mountains and avoid night driving when possible. Respect local traffic rules and speed limits.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">How to request a quote</h2>

          <h3 className="text-lg font-semibold text-[var(--blue)]">Information to prepare</h3>
          <p>
            Share: pickup date and place, return date and place, number of travellers, preferred vehicle type, and flight arrival time if airport delivery is needed.
          </p>

          <h3 className="text-lg font-semibold text-[var(--blue)]">Sample WhatsApp message</h3>
          <div className="bg-gray-50 border rounded-xl p-5 text-sm whitespace-pre-line">
            {`Hello, I would like a one-way rental from Marrakech to Merzouga.
Dates: ...
Pickup: Marrakech airport / city
Return: Merzouga
Passengers: ...
Vehicle: SUV / sedan / ...`}
          </div>
          <p>
            Use the{" "}
            <Link href="/en/contact" className="text-[var(--red)] font-semibold hover:underline">
              contact page
            </Link>{" "}
            or the WhatsApp button below to send your request.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">
            FAQ car rental Marrakech Merzouga
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-5 shadow-sm bg-white">
                <h3 className="text-lg font-semibold text-[var(--blue)]">{item.q}</h3>
                <p className="mt-2">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white rounded-2xl text-center">
            <h2 className="text-2xl font-extrabold mb-3">Ready to plan Marrakech → Merzouga?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Contact Fadma Hsayn Cars on WhatsApp to check conditions, available vehicles and a quote for your dates.
            </p>
            <a
              href="https://wa.me/212661371670"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--red)] text-white font-bold px-8 py-3 rounded-lg"
            >
              Request a quote on WhatsApp <i className="fa-brands fa-whatsapp text-xl" />
            </a>
          </div>
        </article>
      </main>
      <Footer locale="en" />
      <a
        href="https://wa.me/212661371670"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center text-2xl shadow-lg"
        aria-label="WhatsApp"
      >
        <i className="fa-brands fa-whatsapp" />
      </a>
    </>
  );
}
