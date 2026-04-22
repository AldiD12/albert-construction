import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileStickyFooter } from "@/components/MobileStickyFooter";
import { OrganizationSchema } from "@/components/OrganizationSchema";
import { PersonSchema } from "@/components/PersonSchema";
import { CookieConsent } from "@/components/CookieConsent";
import { Analytics } from "@/components/Analytics";
import { Epilogue, Manrope, Noto_Serif } from "next/font/google";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-epilogue",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://albertconstructionltd.co.uk"),
  title: {
    default: "Albert Construction Ltd | Loft Conversions & Extensions London",
    template: "%s | Albert Construction Ltd"
  },
  description: "Albert Construction Ltd — trusted London builders for loft conversions, house extensions, and full renovations. 9.7/10 on Checkatrade, fixed prices, no subcontractors. Free site survey.",
  keywords: ["builders London", "loft conversions London", "house extensions London", "home renovations London", "loft conversion cost London", "house extension cost London", "builders near me London", "Albert Construction Ltd"],
  authors: [{ name: "Albert Construction Ltd" }],
  creator: "Albert Construction Ltd",
  publisher: "Albert Construction Ltd",
  verification: {
    // Replace with your actual Google Search Console verification code
    // Get it from: Search Console → Add property → HTML tag method
    google: "REPLACE_WITH_GSC_VERIFICATION_CODE",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    siteName: "Albert Construction Ltd",
    type: "website",
    locale: "en_GB",
    url: "https://albertconstructionltd.co.uk",
    images: [{
      url: "/images/og-default.webp",
      width: 1200,
      height: 630,
      alt: "Albert Construction Ltd - Premium Construction Services London"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Albert Construction Ltd | Loft Conversions & Extensions London",
    description: "Premier building company in London. Loft conversions, extensions, renovations & commercial offices.",
    images: ["/images/og-default.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${notoSerif.variable} ${epilogue.variable} ${manrope.variable} font-body antialiased selection:bg-secondary/30`}>
        <OrganizationSchema />
        <PersonSchema />
        <Analytics />
        <Navbar />
        <main className="pt-24 overflow-x-hidden">{children}</main>
        <Footer />
        <MobileStickyFooter />
        <CookieConsent />
      </body>
    </html>
  );
}
