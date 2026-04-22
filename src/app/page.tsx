import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TrustBar } from "@/components/TrustBar";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";

export const metadata: Metadata = {
  title: "Builders London | Loft Conversions & House Extensions | Albert Construction",
  description:
    "Trusted London builders for loft conversions, house extensions, kitchen & bathroom renovations. Fixed prices, no subcontractors, 9.7/10 on Checkatrade. Free site survey.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/",
  },
  openGraph: {
    title: "Builders London | Loft Conversions & House Extensions | Albert Construction",
    description:
      "Trusted London builders for loft conversions, house extensions, kitchen & bathroom renovations. Fixed prices, no subcontractors, 9.7/10 on Checkatrade. Free site survey.",
    url: "https://albertconstructionltd.co.uk/",
  },
  twitter: {
    title: "Builders London | Loft Conversions & House Extensions | Albert Construction",
    description:
      "Trusted London builders for loft conversions, house extensions, kitchen & bathroom renovations. Fixed prices, no subcontractors, 9.7/10 on Checkatrade. Free site survey.",
  },
};

const services = [
  {
    title: "Loft Conversions",
    href: "/services/loft-conversions",
    description: "Dormer, hip-to-gable, and mansard conversions — a full extra floor without touching your garden.",
    image: "/images/exterior_loft_dormer_dark_cladding.webp",
  },
  {
    title: "Extensions",
    href: "/services/extensions",
    description: "Single and double storey extensions built with our own team, fixed price, from foundations to handover.",
    image: "/images/exterior_stone_house_glass_extension.webp",
  },
  {
    title: "Renovations",
    href: "/services/general-renovations",
    description: "Full property transformations — structural alterations, kitchen, bathroom, flooring, and decoration under one contract.",
    image: "/images/interior_kitchen_openplan_dark_cabinets_orange_chairs.webp",
  },
  {
    title: "Commercial Fit-Outs",
    href: "/services/commercial-offices",
    description: "Offices, restaurants, and retail fit-outs delivered on programme with one team managing all trades.",
    image: "/images/interior_commercial_lapolpetta_restaurant.webp",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Free Site Survey",
    description:
      "We visit your property, assess the site, and give you an honest view of what is achievable — including planning requirements, structural implications, and a realistic timescale.",
  },
  {
    step: "02",
    title: "Fixed-Price Quotation",
    description:
      "You receive a fully itemised written quotation — foundations, materials, structural steelwork, building control fees, and finishing. The price we quote is the price you pay.",
  },
  {
    step: "03",
    title: "Build With Our Own Team",
    description:
      "Albert Construction manages every trade on site. No subcontractor surprises. Weekly updates, a named contact throughout, and a site left tidy each evening.",
  },
  {
    step: "04",
    title: "Handover & 2-Year Guarantee",
    description:
      "We walk every room with you before the job is finished. Your project is covered by our 2-year workmanship guarantee and backed by £10M public liability insurance.",
  },
];

const whyChooseUs = [
  {
    title: "Ltd Company",
    description: "Albert Construction Ltd is a Companies House registered limited company. Full financial accountability and a legal entity you can hold to its contract.",
  },
  {
    title: "£10M Insurance",
    description: "£10 million public liability insurance on every project. Your home and your neighbours are protected throughout the build.",
  },
  {
    title: "2-Year Guarantee",
    description: "Every project comes with a written 2-year workmanship guarantee. If something is not right, we come back and fix it.",
  },
  {
    title: "No Subcontractors",
    description: "Our own experienced team handles every trade. You will not have strangers on your site who have never seen the drawings.",
  },
  {
    title: "9.7/10 on Checkatrade",
    description: "29 verified reviews from real homeowners across London. We are vetted, background-checked, and independently reviewed.",
  },
  {
    title: "Fixed-Price Contracts",
    description: "The price in your quotation is the price on your final invoice. We do not add costs after work starts.",
  },
];

const galleryImages = [
  { src: "/images/exterior_stone_house_glass_extension.webp", alt: "Stone house with contemporary glass extension" },
  { src: "/images/interior_kitchen_dark_island_finish.webp", alt: "Dark kitchen island with marble worktop and premium finish" },
  { src: "/images/interior_bathroom_freestanding_bath.webp", alt: "Luxury bathroom with freestanding bath and bespoke tiling" },
  { src: "/images/exterior_glazed_roof_extension_wide.webp", alt: "Wide glazed roof extension" },
  { src: "/images/interior_commercial_lapolpetta_restaurant.webp", alt: "Commercial restaurant fit-out by Albert Construction" },
  { src: "/images/interior_staircase_glass_balustrade.webp", alt: "Contemporary staircase with glass balustrade" },
];

const areas = [
  { name: "North London", href: "/locations/barnet" },
  { name: "North West London", href: "/locations/edgware" },
  { name: "West London", href: "/locations/ealing" },
  { name: "East London", href: "/locations/hackney" },
  { name: "South London", href: "/locations/brixton" },
  { name: "South East London", href: "/locations/lewisham" },
  { name: "South West London", href: "/locations/croydon" },
  { name: "Central London", href: "/locations/camden" },
];

const faqs = [
  {
    question: "What areas of London do you cover?",
    answer:
      "We work across all London boroughs — North, South, East, West, and Central. Our team is London-based and we do not apply travel premiums within Greater London. We also cover parts of the Home Counties within approximately 20 miles of the M25.",
  },
  {
    question: "How do I get a quote for my project?",
    answer:
      "Call or message us to arrange a free site visit. We come to your property, take measurements, and discuss your plans in detail. You receive a written fixed-price quotation — fully itemised — within a few days of the visit.",
  },
  {
    question: "Do you handle planning permission applications?",
    answer:
      "Yes. For extensions and loft conversions that require planning permission, we manage the application or work alongside your architect to submit it. Many projects fall under permitted development rights and do not require a formal application — we check this during your site survey.",
  },
  {
    question: "How long does a typical build take?",
    answer:
      "A single-storey rear extension takes 10–14 weeks. A loft conversion takes 8–12 weeks. A full bathroom renovation takes 2–3 weeks. A kitchen fitting takes 2–3 weeks. We provide a detailed programme with your quotation so you can plan around it.",
  },
  {
    question: "What insurance and credentials do you have?",
    answer:
      "Albert Construction Ltd is a Companies House registered limited company with £10 million public liability insurance. We are Checkatrade verified with a 9.7/10 rating from 29 independent reviews. All work comes with a 2-year workmanship guarantee.",
  },
  {
    question: "Do you use subcontractors on your projects?",
    answer:
      "No. Our own team handles every trade — brickwork, roofing, plumbing, electrics, plastering, tiling, and decoration. This is what lets us maintain quality and schedule. You will not have unfamiliar people turning up on your site unannounced.",
  },
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <div>
            <h1 className="font-headline text-[2.75rem] md:text-[3.5rem] leading-[1.1] tracking-tight font-black mb-6 text-primary">
              London Builders You Can{" "}
              <span className="text-secondary italic hand-drawn-underline">
                Actually Trust
              </span>
            </h1>
            <p className="text-lg text-charcoal mb-8 leading-relaxed max-w-lg">
              Extensions, loft conversions, and full renovations across London. Fixed prices, our own team on every job, and a 9.7/10 rating from 29 verified Checkatrade reviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contact"
                className="bg-secondary text-white font-label font-bold py-4 px-8 rounded-full text-center inline-flex items-center justify-center gap-2 transition-transform active:scale-95 hover:bg-secondary/90"
                aria-label="Get a free quote for your building project"
              >
                Get a Free Quote
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <a
                href="tel:07478606507"
                className="border-2 border-primary text-primary font-label font-bold py-4 px-8 rounded-full text-center inline-flex items-center justify-center gap-2 transition-colors hover:bg-primary hover:text-white"
                aria-label="Call Albert Construction Ltd on 07478 606 507"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call 07478 606 507
              </a>
            </div>
          </div>
          <div className="mt-8 md:mt-0 grid grid-cols-2 gap-3">
            <Image
              src="/images/exterior_glazed_roof_extension_wide.webp"
              alt="Glazed roof extension by Albert Construction London"
              width={500}
              height={600}
              className="w-full aspect-[3/4] object-cover rounded-lg"
              priority
            />
            <div className="flex flex-col gap-3">
              <Image
                src="/images/interior_kitchen_dark_island_finish.webp"
                alt="Premium kitchen island by Albert Construction London"
                width={500}
                height={350}
                className="w-full aspect-[4/3] object-cover rounded-lg flex-1"
                priority
              />
              <Image
                src="/images/interior_bathroom_freestanding_bath.webp"
                alt="Luxury bathroom renovation by Albert Construction London"
                width={500}
                height={350}
                className="w-full aspect-[4/3] object-cover rounded-lg flex-1"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Why Albert Section */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-8 tracking-tight">
            One Team. One Contract. No Surprises.
          </h2>
          <div className="space-y-4 text-lg text-charcoal leading-relaxed mb-10">
            <p>
              Most building problems in London come from the same source: too many contractors, none of whom own the outcome. A plumber who does not coordinate with the tiler. An electrician who turns up after the plasterer has already finished. A project manager who is managing from a distance.
            </p>
            <p>
              Albert Construction works differently. Our team handles brickwork, structural steelwork, plumbing, electrics, plastering, tiling, and decoration — in sequence, on one programme, under one contract. When something needs resolving, there is one person to call.
            </p>
          </div>
          <div className="bg-surface-container-low rounded-lg p-8 md:p-10">
            <p className="font-headline font-bold text-xl text-primary mb-4">
              9.7/10 from 29 Independent Reviews
            </p>
            <p className="text-charcoal leading-relaxed">
              Every review on our Checkatrade profile is from a verified customer — independently contacted and asked to rate the work. We have never had a review removed or disputed. That record comes from doing the job properly, not from managing the feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Services */}
      <section className="mb-20 md:mb-28">
        <div className="px-6 mb-10 max-w-7xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary tracking-tight">
            What We Build
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative rounded-lg overflow-hidden"
              >
                <Image
                  src={service.image}
                  alt={`${service.title} by Albert Construction Ltd`}
                  width={400}
                  height={530}
                  className="w-full aspect-[3/4] object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-primary p-5">
                  <h3 className="font-headline font-bold text-lg text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-base font-label">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width photo strip */}
      <section className="mb-20 md:mb-28 overflow-hidden">
        <div className="flex gap-3 px-6 max-w-7xl mx-auto">
          <div className="flex-1 min-w-0">
            <Image
              src="/images/exterior_extension_rear_house_complete.webp"
              alt="Rear extension completed in London"
              width={400} height={500}
              className="w-full aspect-[3/4] object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="flex-1 min-w-0">
            <Image
              src="/images/interior_commercial_cafe_mezzanine_fitout.webp"
              alt="Commercial café mezzanine fit-out"
              width={400} height={500}
              className="w-full aspect-[3/4] object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="flex-[2] min-w-0 hidden sm:block">
            <Image
              src="/images/interior_kitchen_dark_openplan_wide.webp"
              alt="Open plan kitchen extension in London"
              width={800} height={500}
              className="w-full aspect-[3/4] object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="flex-1 min-w-0 hidden md:block">
            <Image
              src="/images/interior_loft_skylight_wood_floor.webp"
              alt="Loft conversion with skylight and wood floor"
              width={400} height={500}
              className="w-full aspect-[3/4] object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="flex-1 min-w-0 hidden lg:block">
            <Image
              src="/images/exterior_side_return_grass_complete.webp"
              alt="Completed side return extension with garden"
              width={400} height={500}
              className="w-full aspect-[3/4] object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-surface-container-low py-20 md:py-28 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-12 tracking-tight text-center">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <span className="font-headline text-6xl font-black text-secondary/20 mb-4 block">
                  {step.step}
                </span>
                <h3 className="font-headline font-bold text-lg text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-charcoal text-base leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-12 tracking-tight text-center">
            Why Choose Albert Construction
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ltd Company */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-outline-variant/20">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3 className="font-headline font-bold text-lg text-primary mb-3">{whyChooseUs[0].title}</h3>
              <p className="text-charcoal text-base leading-relaxed">{whyChooseUs[0].description}</p>
            </div>

            {/* £10M Insurance */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-outline-variant/20">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="font-headline font-bold text-lg text-primary mb-3">{whyChooseUs[1].title}</h3>
              <p className="text-charcoal text-base leading-relaxed">{whyChooseUs[1].description}</p>
            </div>

            {/* 2-Year Guarantee */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-outline-variant/20">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="font-headline font-bold text-lg text-primary mb-3">{whyChooseUs[2].title}</h3>
              <p className="text-charcoal text-base leading-relaxed">{whyChooseUs[2].description}</p>
            </div>

            {/* 20+ Years Experience */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-outline-variant/20">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="font-headline font-bold text-lg text-primary mb-3">{whyChooseUs[3].title}</h3>
              <p className="text-charcoal text-base leading-relaxed">{whyChooseUs[3].description}</p>
            </div>

            {/* Checkatrade Verified */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-outline-variant/20">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="font-headline font-bold text-lg text-primary mb-3">{whyChooseUs[4].title}</h3>
              <p className="text-charcoal text-base leading-relaxed">{whyChooseUs[4].description}</p>
            </div>

            {/* VAT Registered */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-outline-variant/20">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3 className="font-headline font-bold text-lg text-primary mb-3">{whyChooseUs[5].title}</h3>
              <p className="text-charcoal text-base leading-relaxed">{whyChooseUs[5].description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <h2 className="font-headline text-3xl md:text-4xl font-black text-primary tracking-tight">
              Recent Projects
            </h2>
            <Link
              href="/gallery"
              className="font-label font-bold text-secondary text-sm hover:underline underline-offset-4"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`rounded-lg overflow-hidden ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={i === 0 ? 700 : 400}
                  className={`w-full object-cover hover:scale-105 transition-transform duration-500 ${
                    i === 0 ? "aspect-[4/3] md:aspect-auto md:h-full" : "aspect-[3/2]"
                  }`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checkatrade Reviews */}
      <ReviewsCarousel />

      {/* Stats Section */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-12 tracking-tight text-center">
            20+ Years of Building Trust and Quality
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 text-center">
            <div className="flex flex-col items-center">
              <span className="font-headline text-5xl font-black text-primary tracking-tighter">20+</span>
              <span className="font-label text-[10px] uppercase tracking-widest text-muted mt-2">
                Years Exp.
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-headline text-5xl font-black text-secondary tracking-tighter">
                9.7/10
              </span>
              <span className="font-label text-[10px] uppercase tracking-widest text-muted mt-2">
                Checkatrade Rating
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-headline text-5xl font-black text-primary tracking-tighter">£10M</span>
              <span className="font-label text-[10px] uppercase tracking-widest text-muted mt-2">
                Insurance Cover
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-headline text-5xl font-black text-primary tracking-tighter">29</span>
              <span className="font-label text-[10px] uppercase tracking-widest text-muted mt-2">
                Checkatrade Reviews
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-4 tracking-tight text-center">
            Areas We Cover
          </h2>
          <p className="text-center text-charcoal mb-10 max-w-xl mx-auto">
            London based — covering all areas across the capital
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {areas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="bg-white border border-outline-variant/20 rounded-lg p-5 text-center font-label font-bold text-primary hover:border-secondary hover:text-secondary transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-12 tracking-tight text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white border border-outline-variant/20 rounded-lg overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-headline font-bold text-primary hover:text-secondary transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="flex-shrink-0 ml-4 transition-transform group-open:rotate-180"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-charcoal leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="relative bg-primary py-20 md:py-28 mx-6 mb-20 md:mb-28 rounded-lg overflow-hidden">
        <div className="relative z-10 text-center px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/80 text-lg font-body mb-10 max-w-md mx-auto">
            Get a free site survey and fixed-price quotation. No obligation, no hidden costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-secondary text-white font-label font-bold py-4 px-10 rounded-full inline-block transition-transform active:scale-95 hover:bg-secondary/90"
              aria-label="Get a free quote for your building project"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:07478606507"
              className="border-2 border-white text-white font-label font-bold py-4 px-10 rounded-full inline-block transition-colors hover:bg-white hover:text-primary"
              aria-label="Call Albert Construction Ltd on 07478 606 507"
            >
              Call 07478 606 507
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
