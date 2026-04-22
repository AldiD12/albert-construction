import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Albert Construction | 20+ years experience | London",
  description:
    "London-based building company. 20+ years experience in loft conversions, extensions, renovations & commercial offices. Companies House registered. VAT registered. 9.7/10 Checkatrade. £10M insured.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/about",
  },
  openGraph: {
    title: "About Albert Construction | 20+ years experience | London",
    description:
      "London-based building company. 20+ years experience in loft conversions, extensions, renovations & commercial offices. Companies House registered. VAT registered. 9.7/10 Checkatrade. £10M insured.",
    url: "https://albertconstructionltd.co.uk/about",
  },
  twitter: {
    title: "About Albert Construction | 20+ years experience | London",
    description:
      "London-based building company. 20+ years experience in loft conversions, extensions, renovations & commercial offices. Companies House registered. VAT registered. 9.7/10 Checkatrade. £10M insured.",
  },
};

const values = [
  {
    title: "Craftsmanship First",
    description:
      "We judge every project by the standard we would accept in our own home. That means doing the groundwork properly, using the right materials, and not cutting corners to recover schedule.",
  },
  {
    title: "Honest Communication",
    description:
      "We tell clients what is achievable, what is not, and what things will cost — before work starts. A builder who surprises you with problems mid-project is a builder who did not look hard enough at the beginning.",
  },
  {
    title: "Fixed Prices & Written Guarantees",
    description:
      "Every quote is written, itemised, and fixed. Every project comes with a 2-year workmanship guarantee in writing. There is no ambiguity about what we committed to or what we stand behind.",
  },
];

const credentials = [
  {
    value: "Ltd",
    label: "Companies House Registered",
    detail: "",
  },
  {
    value: "£10M",
    label: "Public Liability",
    detail: "Insurance",
  },
  {
    value: "9.7/10",
    label: "Checkatrade",
    detail: "Rating",
  },
  {
    value: "2yr",
    label: "Workmanship",
    detail: "Guarantee",
  },
  {
    value: "20+",
    label: "Years of",
    detail: "Experience",
  },
];

const showcaseImages = [
  {
    src: "/images/interior_staircase_glass_balustrade.webp",
    alt: "Modern glass balustrade staircase installed by Albert Construction",
  },
  {
    src: "/images/interior_renovation_bay_window_stained_glass.webp",
    alt: "Period bay window renovation with restored stained glass details",
  },
  {
    src: "/images/interior_commercial_cafe_mezzanine_fitout.webp",
    alt: "Commercial café mezzanine fit-out completed by Albert Construction",
  },
];

function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Albert Construction Ltd",
    jobTitle: "Director",
    worksFor: {
      "@type": "Organization",
      "@id": "https://albertconstructionltd.co.uk/#organization",
      name: "Albert Construction Ltd",
    },
    sameAs: ["https://www.checkatrade.com/trades/albertconstructionltd"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function AboutPage() {
  return (
    <>
      <PersonSchema />
      {/* Hero Section */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:gap-16 md:items-center">
          <div>
            <p className="font-label text-xs uppercase tracking-widest text-secondary mb-4 font-bold">
              About Albert Construction
            </p>
            <h1 className="font-headline text-[2.75rem] md:text-[3.5rem] leading-[1.1] tracking-tight font-black mb-6 text-primary">
              London Builders{" "}
              <span className="text-secondary italic">
                Built on Reputation
              </span>
            </h1>
            <p className="text-lg text-charcoal leading-relaxed max-w-lg">
              Albert Construction Ltd is a London-based building company with over two decades of projects behind us — extensions, loft conversions, full renovations, and commercial fit-outs. We are Companies House registered, £10M insured, and rated 9.7/10 by 29 independently verified Checkatrade customers.
            </p>
          </div>
          <div className="mt-10 md:mt-0">
            <Image
              src="/images/exterior_glazed_roof_extension_wide.webp"
              alt="Modern glazed roof extension showcasing Albert Construction craftsmanship in London"
              width={800}
              height={600}
              className="w-full aspect-[4/3] object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:gap-16 md:items-center">
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-8 tracking-tight">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-charcoal leading-relaxed">
              <p>
                Albert Construction started as a small team taking on residential renovation work across North and West London. Over two decades, the scope has grown significantly — we now build extensions, loft conversions, full house renovations, and commercial fit-outs — but the approach has not changed: our own people on every job, accountable to one client.
              </p>
              <p>
                We have worked on Victorian terraces in Islington, 1930s semis in Harrow, purpose-built flats in Croydon, and restaurant fit-outs in South West London. Every project is different, and we treat each one as though our reputation depends on it — because it does.
              </p>
              <p>
                Our 9.7/10 Checkatrade rating comes from 29 independently verified reviews. We have never asked a customer to revise a review or submitted a dispute. That record is the most honest thing we can show you about how we work.
              </p>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <Image
              src="/images/interior_loft_skylight_wood_floor.webp"
              alt="Loft conversion with skylights and wooden flooring by Albert Construction"
              width={700}
              height={500}
              className="w-full aspect-[4/3] object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-surface-container-low py-20 md:py-28 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-4 tracking-tight text-center">
            Our Values
          </h2>
          <p className="text-center text-charcoal mb-14 max-w-xl mx-auto">
            The principles that guide every project we take on.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quality Without Compromise */}
            <div className="bg-white rounded-lg p-10 shadow-sm border border-outline-variant/20 text-center">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="font-headline font-bold text-xl text-primary mb-4">
                {values[0].title}
              </h3>
              <p className="text-charcoal leading-relaxed">
                {values[0].description}
              </p>
            </div>

            {/* Transparency & Honesty */}
            <div className="bg-white rounded-lg p-10 shadow-sm border border-outline-variant/20 text-center">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="font-headline font-bold text-xl text-primary mb-4">
                {values[1].title}
              </h3>
              <p className="text-charcoal leading-relaxed">
                {values[1].description}
              </p>
            </div>

            {/* One Team, Start to Finish */}
            <div className="bg-white rounded-lg p-10 shadow-sm border border-outline-variant/20 text-center">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="font-headline font-bold text-xl text-primary mb-4">
                {values[2].title}
              </h3>
              <p className="text-charcoal leading-relaxed">
                {values[2].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Albert Construction Difference */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-4 tracking-tight text-center">
            The Albert Construction Difference
          </h2>
          <p className="text-center text-charcoal mb-14 max-w-xl mx-auto">
            Credentials and guarantees that give you complete peace of mind.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {credentials.map((item) => (
              <div
                key={item.label}
                className="bg-surface-container-low rounded-lg p-6 md:p-8 text-center flex flex-col items-center justify-center"
              >
                <span className="font-headline text-4xl md:text-5xl font-black text-primary tracking-tighter mb-2">
                  {item.value}
                </span>
                <span className="font-label text-[11px] uppercase tracking-widest text-muted leading-tight">
                  {item.label}
                </span>
                <span className="font-label text-[11px] uppercase tracking-widest text-muted leading-tight">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {showcaseImages.map((img) => (
              <div key={img.src} className="rounded-lg overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="w-full aspect-[3/2] object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
