import type { Metadata } from "next";
import { Bebas_Neue, Barlow } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const barlow = Barlow({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Peel Excavation Services | Foundation Excavation & Demolition Contractors | GTA",
  description:
    "30+ years of excavation experience. Foundation digging, demolition, site preparation & grading across Mississauga, Milton, Oakville, Burlington, Hamilton, Vaughan, Markham & Caledon. Owner-operated fleet. Licensed & insured.",
  keywords:
    "excavation contractors GTA, foundation excavation Mississauga, demolition Milton, site preparation Oakville, basement digging Burlington, grading Hamilton, excavation Vaughan, land clearing Markham, excavation Caledon",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://peelexcavation.ca",
    siteName: "Peel Excavation Services",
    title: "Peel Excavation Services | Foundation Excavation & Demolition Contractors | GTA",
    description:
      "30+ years of excavation experience. Owner-operated fleet serving contractors and builders across Mississauga, Milton, Oakville, Burlington, Hamilton, Vaughan, Markham & Caledon.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Peel Excavation Services",
  description:
    "Excavation, demolition, foundation digging, grading and land clearing in Mississauga, Brampton and Caledon.",
  url: "https://peelexcavation.ca",
  telephone: "+1-647-321-9437",
  email: "info@peelexcavation.ca",
  areaServed: [
    { "@type": "City", name: "Mississauga" },
    { "@type": "City", name: "Milton" },
    { "@type": "City", name: "Oakville" },
    { "@type": "City", name: "Burlington" },
    { "@type": "City", name: "Hamilton" },
    { "@type": "City", name: "Vaughan" },
    { "@type": "City", name: "Richmond Hill" },
    { "@type": "City", name: "Markham" },
    { "@type": "City", name: "Caledon" },
    { "@type": "City", name: "Bolton" },
    { "@type": "City", name: "Georgetown" },
    { "@type": "AdministrativeArea", name: "Greater Toronto Area" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Excavation Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Excavation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Demolition" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Foundation Digging" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Grading" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Land Clearing" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${barlow.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "hsl(60 6% 8%)",
              border: "1px solid hsl(40 5% 16%)",
              color: "hsl(36 33% 93%)",
            },
          }}
        />
      </body>
    </html>
  );
}
