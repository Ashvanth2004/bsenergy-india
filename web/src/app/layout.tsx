import type { Metadata, Viewport } from "next";
import "./globals.css";
import { companyConfig, contactConfig } from "@/config/contact";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B1624",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bsenergy-india.com"),
  title: "BS Energy India | Industrial Heating & Energy Solutions",
  description:
    "BS Energy India is a manufacturer, exporter, trader and service provider of industrial burners, chimneys, burner controllers, hot water generators, heat recovery systems, thermal fluid heaters, industrial pipelines and fabrication services.",
  keywords: [
    "BS Energy India",
    "Industrial Burners",
    "Burner Controllers",
    "Industrial Pipeline Fabrication",
    "Hot Water Generators",
    "Heat Recovery Systems",
    "Thermal Fluid Heaters",
    "Industrial Chimneys",
    "Ahmedabad Gujarat Engineering",
  ],
  authors: [{ name: "BS Energy India" }],
  creator: "BS Energy India",
  publisher: "BS Energy India",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: "BS Energy India | Industrial Heating & Energy Solutions",
    description:
      "Reliable Industrial Energy & Heating Solutions. Industrial burners, controllers, pipelines, recovery systems, and custom fabrication.",
    url: "https://bsenergy-india.com",
    siteName: "BS Energy India",
    images: [
      {
        url: "/images/Industrial Burner.png",
        width: 1200,
        height: 630,
        alt: "BS Energy India - Industrial Burners",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BS Energy India | Industrial Heating & Energy Solutions",
    description:
      "Reliable Industrial Energy & Heating Solutions. Industrial burners, controllers, pipelines, recovery systems, and custom fabrication.",
    images: ["/images/Industrial Burner.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: companyConfig.name,
    description:
      "Manufacturer, exporter, trader and service provider of industrial burners, chimneys, burner controllers, hot water generators, heat recovery systems, thermal fluid heaters, industrial pipelines and fabrication services.",
    foundingDate: "2007",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "India",
    },
    telephone: contactConfig.phone,
    email: contactConfig.email,
    url: "https://bsenergy-india.com",
    areaServed: "Global & Domestic",
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0B1624] text-[#F3F5F7] antialiased selection:bg-[#FF6B00] selection:text-black min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
