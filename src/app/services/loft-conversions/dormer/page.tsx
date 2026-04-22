import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Dormer Loft Conversion London | Rear Dormer Specialists | Albert Construction",
  description:
    "Expert dormer loft conversion builders in London. Rear dormers for Victorian & Edwardian terraces. Fixed-price quotes, permitted development, 20+ years experience. Call today.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/services/loft-conversions/dormer",
  },
  openGraph: {
    title: "Dormer Loft Conversion London | Rear Dormer Specialists | Albert Construction",
    description:
      "Expert dormer loft conversion builders in London. Rear dormers for Victorian & Edwardian terraces. Fixed-price quotes, permitted development, 20+ years experience.",
    url: "https://albertconstructionltd.co.uk/services/loft-conversions/dormer",
  },
};

const faqs = [
  {
    question: "What is a rear dormer loft conversion?",
    answer: "A rear dormer loft conversion adds a box-shaped structure to the rear slope of your roof, extending outward and upward to create full standing headroom across most of the new room. Unlike a Velux conversion (which simply adds windows within the existing roof slope), a dormer physically increases the volume of the loft by pushing the roof outward. It is by far the most common loft conversion type in London because Victorian and Edwardian terraces typically do not have enough existing head height for a Velux conversion.",
  },
  {
    question: "Does a rear dormer need planning permission in London?",
    answer: "Most rear dormer loft conversions qualify under permitted development — meaning no planning application is required. Under PD rules, the dormer must not extend beyond the existing roof slope at the front of the house, the volume added must be within permitted limits (40m³ for terraced properties, 50m³ for semis and detached), and the dormer must use materials that are similar in appearance to the existing house. Properties in conservation areas, flats, and listed buildings do not benefit from PD rights and need a full planning application. We confirm your PD status during the free site survey.",
  },
  {
    question: "How much does a rear dormer loft conversion cost in London?",
    answer: "A rear dormer loft conversion in London typically costs £38,000–£55,000. The lower end applies to straightforward terraced properties with good access and a standard specification. The upper end reflects larger dormers, properties with complex roof structures, properties in conservation areas where matching materials cost more, or higher-specification windows and finishes. Our fixed-price quotation covers everything: structural engineering, building control, scaffolding, structural steelwork, roofing, dormer construction, windows, insulation, staircase, first-fix electrics and plumbing, and plastering.",
  },
  {
    question: "How long does a rear dormer loft conversion take?",
    answer: "A rear dormer loft conversion typically takes 8–12 weeks from start to handover. This covers scaffolding erection (week 1), structural steelwork and dormer frame (weeks 2–3), roofing and weatherproofing (weeks 3–4), windows and external finishes (week 4–5), insulation and staircase (weeks 5–6), first-fix electrics and plumbing (weeks 6–7), plastering (weeks 7–8), and second-fix and snagging (weeks 9–10+). We provide a project programme in your quotation.",
  },
  {
    question: "Can you build a dormer on a conservation area property?",
    answer: "Yes, but you will need planning permission rather than permitted development. In conservation areas, councils typically require the dormer to be set back from the ridge so it is not visible from the street, to use materials that match or complement the existing roof (plain clay tiles rather than concrete, for example), and to avoid any cladding that looks out of character. The planning process typically takes 8–10 weeks. We have built dormer conversions in conservation areas across Islington, Hackney, Camden, and Hammersmith and can advise on what is and is not likely to be approved.",
  },
  {
    question: "What is included in a dormer loft conversion?",
    answer: "Our fixed-price dormer loft conversion quotation includes: structural engineer calculations and drawings, building control application and all inspection fees, scaffolding (erection, hire, and dismantling), structural ridge beam, floor joists, and steelwork, dormer frame construction and flat roof with EPDM membrane, dormer cheek cladding (tile-hanging or render to match existing), dormer window(s) to your specification, roof tiles reinstated to match existing, full insulation to building regulation standards (roof, floor, and walls), loft access staircase, first-fix electrics (lighting, sockets, smoke detectors), first-fix plumbing for en-suite, and plastering throughout. The price we quote is the price you pay.",
  },
];

export default function DormerLoftConversionPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dormer Loft Conversion London",
    description: "Expert rear dormer loft conversion builders in London for Victorian and Edwardian terraces. Fixed-price, permitted development, full build including structural engineering.",
    provider: {
      "@type": "GeneralContractor",
      name: "Albert Construction Ltd",
      url: "https://albertconstructionltd.co.uk",
      telephone: "+447478606507",
    },
    areaServed: { "@type": "City", name: "London" },
    serviceType: "Dormer Loft Conversion",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <Breadcrumbs items={[
        { label: "Services", href: "/services" },
        { label: "Loft Conversions", href: "/services/loft-conversions" },
        { label: "Dormer Loft Conversion" },
      ]} />

      {/* Hero */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto">
          <p className="font-label text-xs uppercase tracking-widest text-secondary mb-4 font-bold">Loft Conversions · London</p>
          <h1 className="font-headline text-[2.5rem] md:text-[3.25rem] leading-[1.1] tracking-tight font-black mb-6 text-primary">
            Dormer Loft Conversion{" "}
            <span className="text-secondary italic">London</span>
          </h1>
          <p className="text-lg text-charcoal leading-relaxed mb-8 max-w-2xl">
            The rear dormer is London&apos;s most popular loft conversion — and for good reason. It transforms the dead space in a Victorian or Edwardian terrace into a full-height bedroom with en-suite, usually under permitted development, in 8–12 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-secondary text-white font-label font-bold py-4 px-8 rounded-full text-center inline-flex items-center justify-center gap-2 transition-transform active:scale-95 hover:bg-secondary/90">
              Get a Free Quote
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <a href="tel:07478606507" className="border-2 border-primary text-primary font-label font-bold py-4 px-8 rounded-full text-center transition-colors hover:bg-primary hover:text-white">
              Call 07478 606 507
            </a>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/images/exterior_loft_dormer_framing_construction.webp"
            alt="Rear dormer loft conversion under construction in London"
            width={900}
            height={500}
            className="w-full rounded-2xl object-cover aspect-video"
          />
        </div>
      </section>

      {/* What is a dormer */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-6 tracking-tight">What Is a Dormer Loft Conversion?</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-charcoal leading-relaxed">
              <p>A dormer loft conversion adds a box-shaped structure to the rear roof slope, pushing outward and upward to create a room with full standing headroom. The dormer has vertical walls, a flat roof (or shallow-pitched roof), and one or more windows facing into the garden.</p>
              <p>This is the most common loft conversion in London precisely because Victorian and Edwardian terraces — which make up the majority of inner London&apos;s housing stock — have sloped roofs that do not provide enough head height without a structural alteration. The dormer solves this completely.</p>
              <p>The result is a genuine habitable room: a bedroom, a study, or a home office, typically with space for an en-suite bathroom. Most rear dormers are built under permitted development — no planning application required.</p>
            </div>
            <div className="space-y-4">
              <Image
                src="/images/exterior_loft_dormer_dark_cladding.webp"
                alt="Completed rear dormer loft conversion with dark cladding in London"
                width={450}
                height={300}
                className="w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="px-6 mb-16 md:mb-20 bg-surface-container-low py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-4 tracking-tight">What&apos;s Included in Our Dormer Loft Conversion</h2>
          <p className="text-charcoal mb-8 leading-relaxed">Our fixed-price quotation covers every element of the build from scaffold to snagging. No hidden extras.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Structural engineer calculations & drawings",
              "Building control application & inspection fees",
              "Scaffolding (erection, hire & dismantling)",
              "Ridge beam, floor joists & structural steelwork",
              "Dormer timber frame construction",
              "Flat roof — insulation & EPDM membrane",
              "Dormer cheek cladding or tile hanging",
              "Dormer window(s) to your specification",
              "Roof tiles reinstated to match existing",
              "Full thermal insulation to building regulations",
              "New loft access staircase",
              "First-fix electrics — sockets, lights, smoke alarms",
              "First-fix plumbing for en-suite",
              "Plastering throughout",
              "Building control sign-off & completion certificate",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4">
                <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                <span className="text-charcoal text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Completed room */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-6 tracking-tight">The Finished Room</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <Image
                src="/images/interior_loft_skylight_wood_floor.webp"
                alt="Completed loft room with skylight and wood floor"
                width={450}
                height={300}
                className="w-full rounded-xl object-cover mb-6"
              />
              <Image
                src="/images/interior_loft_velux_skylights_white.webp"
                alt="Loft conversion with Velux skylights and white walls"
                width={450}
                height={300}
                className="w-full rounded-xl object-cover"
              />
            </div>
            <div className="space-y-4 text-charcoal leading-relaxed">
              <p>Once the dormer structure is complete, we fit the staircase, plaster every surface, and complete the electrical and plumbing second-fix. The room is handed to you ready for decoration and furnishing.</p>
              <p>A typical rear dormer on a Victorian terrace creates a room of 16–22m² — large enough for a double bedroom, a generous wardrobe, and an en-suite bathroom. On wider plots, the room can be even larger.</p>
              <p>We work with you on the staircase position early in the design process — this has the biggest impact on how the room and the floor below function together. Getting this right from the start avoids compromises later.</p>
              <div className="mt-6 p-5 bg-surface-container-low rounded-xl">
                <p className="font-headline font-bold text-primary text-lg mb-1">Typical cost</p>
                <p className="text-secondary font-bold text-2xl font-headline">£38,000 – £55,000</p>
                <p className="text-charcoal text-sm mt-1">Fixed price. Includes everything above. En-suite bathroom fixtures quoted separately.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-6 mb-16 md:mb-20 bg-surface-container-low py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-10 tracking-tight">Dormer Loft Conversion FAQs</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-headline font-bold text-primary text-lg mb-3">{faq.question}</h3>
                <p className="text-charcoal leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-black text-primary mb-8 tracking-tight">Related Services & Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Hip-to-Gable Loft Conversion", href: "/services/loft-conversions/hip-to-gable" },
              { label: "Mansard Loft Conversion", href: "/services/loft-conversions/mansard" },
              { label: "All Loft Conversions", href: "/services/loft-conversions" },
              { label: "Loft Conversion Cost London", href: "/guides/loft-conversion-cost-london" },
              { label: "House Extensions", href: "/services/house-extensions" },
              { label: "Get a Free Quote", href: "/contact" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="block bg-surface-container-low rounded-lg p-4 text-primary font-label font-bold text-sm hover:bg-primary hover:text-white transition-colors">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-4xl mx-auto bg-primary rounded-2xl p-10 md:p-14 text-white text-center">
          <h2 className="font-headline text-2xl md:text-3xl font-black mb-4">Ready to Start Your Dormer Conversion?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
            We visit your property, confirm permitted development eligibility, and provide a detailed fixed-price quotation. Free, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-secondary text-white font-label font-bold py-4 px-8 rounded-full text-center inline-flex items-center justify-center gap-2 transition-transform active:scale-95 hover:bg-secondary/90">
              Get a Free Quote
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <a href="tel:07478606507" className="border-2 border-white text-white font-label font-bold py-4 px-8 rounded-full text-center transition-colors hover:bg-white hover:text-primary">
              Call 07478 606 507
            </a>
          </div>
          <p className="text-white/50 text-sm mt-6">Free site visit · Fixed-price quotation · No obligation</p>
        </div>
      </section>
    </>
  );
}
