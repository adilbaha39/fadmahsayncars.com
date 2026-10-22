import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { pageMetadata } from "@/lib/seo";

const PAGE_URL = "https://fadmahsayncars.com/en/blog/errachidia-merzouga";
const TITLE = "Car rental Errachidia–Merzouga: airport and desert";
const DESCRIPTION =
  "Rent a car from Errachidia airport to Merzouga: route, one-way option, delivery 500 MAD and practical tips with Fadma Hsayn Cars.";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/blog/errachidia-merzouga",
  title: TITLE,
  description: DESCRIPTION,
  image: "/images/location-voiture-errachidia.webp",
});

const faqItems = [
  {
    q: "Can I pick up at Errachidia airport and return in Merzouga?",
    a: "Yes, subject to availability. This is a common one-way option. Confirm fees and times with the agency.",
  },
  {
    q: "How much is delivery at Errachidia airport?",
    a: "Airport delivery at Errachidia is 500 MAD.",
  },
  {
    q: "How long is the drive from Errachidia to Merzouga?",
    a: "Often around two hours depending on stops and conditions. Prefer daylight driving.",
  },
  {
    q: "Which vehicle for Errachidia–Merzouga?",
    a: "SUV models are often preferred; city cars and sedans may suit paved roads. Ask the agency for your dates.",
  },
  {
    q: "What to send on WhatsApp?",
    a: "Flight number and arrival time, rental dates, return place (Merzouga or other), passengers and vehicle type.",
  },
];

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: TITLE,
    description: DESCRIPTION,
    image: "https://fadmahsayncars.com/images/location-voiture-errachidia.webp",
    author: { "@type": "Organization", name: "Fadma Hsayn Cars" },
    publisher: {
      "@type": "Organization",
      name: "Fadma Hsayn Cars",
      logo: { "@type": "ImageObject", url: "https://fadmahsayncars.com/images/logo-fadma-hsayn-cars.webp" },
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
                { name: "Errachidia → Merzouga", url: PAGE_URL },
              ]}
            />
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{TITLE}</h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Airport pickup, road to the desert and one-way rental options.
            </p>
          </div>
        </section>

        <article className="py-16 px-4 md:px-10 max-w-3xl mx-auto text-gray-700 space-y-5 leading-relaxed">
          <div className="mb-8">
            <img
              src="/images/location-voiture-errachidia.webp"
              alt="Car rental Errachidia Merzouga"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <p>
            Errachidia Airport (Moulay Ali Cherif) is a practical gateway to Merzouga and Erg Chebbi. Renting a car on arrival lets you reach the dunes at your own pace, stop in villages and manage your schedule without depending on collective transfers. Fadma Hsayn Cars offers delivery at the airport and the option to return in Merzouga when conditions allow.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">
            Errachidia to Merzouga by car
          </h2>

          <h3 className="text-lg font-semibold text-[var(--blue)]">Route and duration</h3>
          <p>
            The road from Errachidia toward Merzouga is a classic southern itinerary. Driving time is often around two hours depending on stops, traffic and weather. Prefer daylight and check conditions before setting off.
          </p>

          <h3 className="text-lg font-semibold text-[var(--blue)]">Airport delivery</h3>
          <p>
            Delivery at Errachidia airport costs 500 MAD. Share your flight number and arrival time so handover can be organised smoothly. Pickup can also be arranged at an agreed point in town when relevant.
          </p>

          <h3 className="text-lg font-semibold text-[var(--blue)]">Why this option?</h3>
          <p>
            Flying into Errachidia shortens the desert access compared with driving all the way from Marrakech on the same day. Combined with a rental car, you keep independence on site and around Erg Chebbi.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">
            One-way Errachidia → Merzouga
          </h2>

          <h3 className="text-lg font-semibold text-[var(--blue)]">How it works</h3>
          <p>
            Pick up at Errachidia (airport or town) and return at the main agency in Merzouga. Availability depends on dates and vehicle. A one-way supplement may apply — always request written confirmation (WhatsApp) before booking.
          </p>

          <h3 className="text-lg font-semibold text-[var(--blue)]">Conditions to verify</h3>
          <ul className="list-disc list-inside space-y-2 ml-1">
            <li>exact pickup and return points;</li>
            <li>airport delivery fee (500 MAD);</li>
            <li>deposit (20,000 MAD);</li>
            <li>insurance and mileage terms;</li>
            <li>any one-way supplement;</li>
            <li>cancellation rules (free up to 48h before).</li>
          </ul>
          <p>
            See also our{" "}
            <Link href="/en/conditions" className="text-[var(--red)] font-semibold hover:underline">
              rental conditions
            </Link>
            .
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">Which vehicle?</h2>

          <h3 className="text-lg font-semibold text-[var(--blue)]">SUV and other categories</h3>
          <p>
            SUVs (Duster, Creta, Tucson…) are often appreciated for southern roads. City cars and sedans can suit mainly paved itineraries with moderate luggage. For families, ask about 7-seat options when available.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">Practical information</h2>

          <h3 className="text-lg font-semibold text-[var(--blue)]">Documents</h3>
          <p>
            Valid driving licence with at least 2 years. National licence accepted for foreign visitors. ID or passport required. Payment by cash or card.
          </p>

          <h3 className="text-lg font-semibold text-[var(--blue)]">Sample WhatsApp message</h3>
          <div className="bg-gray-50 border rounded-xl p-5 text-sm whitespace-pre-line">
            {`Hello, I land at Errachidia airport and want a rental toward Merzouga.
Flight: ...
Arrival time: ...
Dates: ...
Return: Merzouga
Passengers: ...
Vehicle: ...`}
          </div>
          <p>
            Use{" "}
            <Link href="/en/contact" className="text-[var(--red)] font-semibold hover:underline">
              contact
            </Link>{" "}
            or the WhatsApp button below to send your request.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">
            FAQ Errachidia–Merzouga rental
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
            <h2 className="text-2xl font-extrabold mb-3">Landing in Errachidia?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Contact Fadma Hsayn Cars on WhatsApp to confirm availability, airport delivery and conditions for Merzouga.
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
      <a href="https://wa.me/212661371670" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center text-2xl shadow-lg" aria-label="WhatsApp">
        <i className="fa-brands fa-whatsapp" />
      </a>
    </>
  );
}
