import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fadmahsayncars.com"),
  title: {
    default: "Location Voiture Maroc | Marrakech, Merzouga & Errachidia",
    template: "%s | Fadma Hsayn Cars",
  },
  description:
    "Louez une voiture à Marrakech, Merzouga ou Errachidia. Aéroport, assurance, kilométrage illimité. Réservation rapide via WhatsApp.",
  keywords: [
    "location voiture Marrakech",
    "location voiture aéroport Marrakech",
    "location voiture Marrakech Menara",
    "location voiture Merzouga",
    "location voiture aéroport Errachidia",
    "location voiture aller simple Maroc",
    "location voiture Marrakech Merzouga",
    "location Dacia Duster Marrakech",
  ],
  authors: [{ name: "Fadma Hsayn Cars" }],
  creator: "Fadma Hsayn Cars",
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://fadmahsayncars.com",
    siteName: "Fadma Hsayn Cars",
    title: "Fadma Hsayn Cars - Location de voitures au Maroc",
    description:
      "Location de voitures dans les aéroports de Marrakech, Merzouga et Errachidia. Assurance incluse, kilométrage illimité, support 24/7.",
    images: [
      {
        url: "/images/sora1.jpeg",
        width: 1200,
        height: 630,
        alt: "Fadma Hsayn Cars - Location de voitures au Maroc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fadma Hsayn Cars - Location de voitures au Maroc",
    description: "Location de voitures à Marrakech, Merzouga et Errachidia. Réservez maintenant.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://fadmahsayncars.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={poppins.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "CarRental",
                  "@id": "https://fadmahsayncars.com/#business",
                  name: "Fadma Hsayn Cars",
                  alternateName: "فضمة احسين كارز",
                  description: "Location de voitures dans les aéroports de Marrakech, Merzouga et Errachidia. Assurance incluse, kilométrage illimité, support 24/7.",
                  url: "https://fadmahsayncars.com",
                  telephone: "+212661371670",
                  email: "fadmahsayncarrs@gmail.com",
                  image: "https://fadmahsayncars.com/images/logo.png",
                  logo: "https://fadmahsayncars.com/images/logo.png",
                  priceRange: "300-600 MAD",
                  currenciesAccepted: "MAD",
                  paymentAccepted: "Cash, Credit Card",
                  openingHoursSpecification: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                    opens: "00:00",
                    closes: "23:59",
                  },
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "MA",
                    addressRegion: "Marrakech-Safi",
                    addressLocality: "Marrakech",
                  },
                  areaServed: [
                    { "@type": "City", name: "Marrakech" },
                    { "@type": "City", name: "Merzouga" },
                    { "@type": "City", name: "Errachidia" },
                  ],
                  
                },
                {
                  "@type": "Organization",
                  "@id": "https://fadmahsayncars.com/#organization",
                  name: "Fadma Hsayn Cars",
                  url: "https://fadmahsayncars.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://fadmahsayncars.com/images/logo.png",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+212661371670",
                    contactType: "customer service",
                    availableLanguage: ["French", "Arabic", "English"],
                    areaServed: "MA",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://fadmahsayncars.com/#website",
                  url: "https://fadmahsayncars.com",
                  name: "Fadma Hsayn Cars",
                  publisher: { "@id": "https://fadmahsayncars.com/#organization" },
                  inLanguage: "fr-MA",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
