import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Areas We Cover | London Builders | Albert Construction",
  description:
    "Albert Construction serves homeowners and businesses across London — North, South, East, West, and Central. Extensions, loft conversions, renovations, and commercial fit-outs.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/locations",
  },
  openGraph: {
    title: "Areas We Cover | London Builders | Albert Construction",
    description:
      "Albert Construction serves homeowners and businesses across London — North, South, East, West, and Central. Extensions, loft conversions, renovations, and commercial fit-outs.",
    url: "https://albertconstructionltd.co.uk/locations",
  },
  twitter: {
    title: "Areas We Cover | London Builders | Albert Construction",
    description:
      "Albert Construction serves homeowners and businesses across London — North, South, East, West, and Central. Extensions, loft conversions, renovations, and commercial fit-outs.",
  },
};

const locationGroups = [
  {
    zone: "North London",
    locations: [
      { name: "Barnet", href: "/locations/barnet", postcode: "EN4 / EN5" },
      { name: "Finchley", href: "/locations/finchley", postcode: "N2 / N3 / N12" },
      { name: "Enfield", href: "/locations/enfield", postcode: "EN1 / EN2 / EN3" },
      { name: "Wood Green", href: "/locations/wood-green", postcode: "N22" },
      { name: "Islington", href: "/locations/islington", postcode: "N1 / N7" },
    ],
  },
  {
    zone: "North West London",
    locations: [
      { name: "Edgware", href: "/locations/edgware", postcode: "HA8" },
      { name: "Stanmore", href: "/locations/stanmore", postcode: "HA7" },
      { name: "Harrow", href: "/locations/harrow", postcode: "HA1 / HA2 / HA3" },
      { name: "Wembley", href: "/locations/wembley", postcode: "HA0 / HA9" },
    ],
  },
  {
    zone: "West London",
    locations: [
      { name: "Ealing", href: "/locations/ealing", postcode: "W5 / W13" },
      { name: "Acton", href: "/locations/acton", postcode: "W3" },
      { name: "Hammersmith", href: "/locations/hammersmith", postcode: "W6 / W14" },
    ],
  },
  {
    zone: "East London",
    locations: [
      { name: "Hackney", href: "/locations/hackney", postcode: "E8 / E9" },
      { name: "Stratford", href: "/locations/stratford", postcode: "E15 / E20" },
      { name: "Ilford", href: "/locations/ilford", postcode: "IG1 / IG2 / IG3" },
    ],
  },
  {
    zone: "South London",
    locations: [
      { name: "Brixton", href: "/locations/brixton", postcode: "SW2 / SW9" },
      { name: "Croydon", href: "/locations/croydon", postcode: "CR0 / CR7" },
      { name: "Lewisham", href: "/locations/lewisham", postcode: "SE13 / SE6" },
    ],
  },
  {
    zone: "Central London",
    locations: [
      { name: "Camden", href: "/locations/camden", postcode: "NW1 / NW5" },
    ],
  },
];

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-headline text-[2.75rem] md:text-[3.5rem] leading-[1.1] tracking-tight font-black text-primary mb-6">
            Areas We{" "}
            <span className="text-secondary italic">Cover</span>
          </h1>
          <p className="text-lg text-charcoal leading-relaxed max-w-2xl mx-auto">
            London-based builders serving homeowners and businesses across the capital — from house extensions and loft conversions to full renovations and commercial fit-outs.
          </p>
        </div>
      </section>

      {/* Locations by Zone */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto space-y-12">
          {locationGroups.map((group) => (
            <div key={group.zone}>
              <h2 className="font-headline text-xl font-bold text-primary mb-5 pb-3 border-b border-outline-variant/30">
                {group.zone}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {group.locations.map((location) => (
                  <Link
                    key={location.href}
                    href={location.href}
                    className="group bg-white border border-outline-variant/30 rounded-lg p-5 md:p-6 transition-colors hover:border-secondary"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-headline font-bold text-base text-primary group-hover:text-secondary transition-colors">
                        {location.name}
                      </h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-muted group-hover:text-secondary transition-colors flex-shrink-0 mt-1"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </div>
                    <p className="text-xs text-muted font-label">{location.postcode}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Don't See Your Area */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-3xl mx-auto">
          <div className="bg-surface-container-low rounded-lg p-8 md:p-12 text-center">
            <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-4 tracking-tight">
              Don&apos;t See Your Area?
            </h2>
            <p className="text-charcoal leading-relaxed mb-8 max-w-lg mx-auto">
              We cover all of London. If your area isn&apos;t listed, get in touch — we&apos;re likely able to help.
            </p>
            <Link
              href="/contact"
              className="bg-secondary text-white font-label font-bold py-4 px-10 rounded-full inline-flex items-center justify-center gap-2 transition-transform active:scale-95 hover:bg-secondary/90"
            >
              Get in Touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-primary py-20 md:py-28 mx-6 mb-20 md:mb-28 rounded-lg overflow-hidden">
        <div className="relative z-10 text-center px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/80 text-lg font-body mb-10 max-w-md mx-auto">
            Get a free site survey and fixed-price quotation. No obligation, no
            hidden costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-secondary text-white font-label font-bold py-4 px-10 rounded-full inline-block transition-transform active:scale-95 hover:bg-secondary/90"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:07478606507"
              className="border-2 border-white text-white font-label font-bold py-4 px-10 rounded-full inline-block transition-colors hover:bg-white hover:text-primary"
            >
              Call 07478 606 507
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
