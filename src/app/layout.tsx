import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppFAB from "@/components/whatsapp-fab";
import { siteConfig } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "VisitPoomala | Discover Kerala's Hidden Gem in Thrissur",
    template: "%s | VisitPoomala",
  },
  description:
    "Discover the untouched beauty of Poomala, Kerala's hidden gem. Explore serene dams, cascading waterfalls, and breathtaking viewpoints in the heart of Thrissur district.",
  keywords: [
    "Poomala",
    "Kerala",
    "Thrissur",
    "Poomala Dam",
    "Vattayi Waterfalls",
    "Cheppara Viewpoint",
    "Kerala tourism",
    "Thrissur travel",
    "Western Ghats",
    "Kerala hidden gems",
    "nature tourism Kerala",
    "weekend getaway Thrissur",
  ],
  authors: [{ name: "VisitPoomala Team" }],
  creator: "VisitPoomala",
  publisher: "VisitPoomala",
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "VisitPoomala | Discover Kerala's Hidden Gem in Thrissur",
    description:
      "Discover the untouched beauty of Poomala, Kerala's hidden gem. Explore serene dams, cascading waterfalls, and breathtaking viewpoints in the heart of Thrissur district.",
    images: [
      {
        url: "/IMG-20251101-WA0013.jpg",
        width: 1200,
        height: 630,
        alt: "Panoramic view of Poomala hills and reservoir",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VisitPoomala | Discover Kerala's Hidden Gem in Thrissur",
    description:
      "Discover the untouched beauty of Poomala, Kerala's hidden gem in Thrissur district.",
    images: ["/IMG-20251101-WA0013.jpg"],
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
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Poomala, Thrissur",
    "geo.position": "10.5874;76.2412",
    "ICBM": "10.5874, 76.2412",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/places?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VisitPoomala",
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.whatsapp,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Poomala",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.5874,
    longitude: 76.2412,
  },
  image: `${siteConfig.url}/IMG-20251101-WA0013.jpg`,
  sameAs: [
    siteConfig.social.instagram,
    siteConfig.social.facebook,
    siteConfig.social.twitter,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <WhatsAppFAB />
        <Toaster />
      </body>
    </html>
  );
}
