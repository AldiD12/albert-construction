import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Loft Conversion Cost London 2026 | Full Price Guide | Albert Construction",
  description:
    "How much does a loft conversion cost in London in 2026? Dormer, hip-to-gable, and mansard prices explained with a full breakdown of what's included. Free fixed-price quotes.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/guides/loft-conversion-cost-london",
  },
  openGraph: {
    title: "Loft Conversion Cost London 2026 | Full Price Guide | Albert Construction",
    description:
      "How much does a loft conversion cost in London in 2026? Dormer, hip-to-gable, and mansard prices explained with a full breakdown of what's included.",
    url: "https://albertconstructionltd.co.uk/guides/loft-conversion-cost-london",
  },
  twitter: {
    title: "Loft Conversion Cost London 2026 | Full Price Guide | Albert Construction",
    description:
      "How much does a loft conversion cost in London in 2026? Dormer, hip-to-gable, and mansard prices explained.",
  },
};

const faqs = [
  {
    question: "What is the cheapest type of loft conversion in London?",
    answer: "A Velux/rooflight conversion is the cheapest option — typically £22,000–£35,000 — because it does not alter the roof structure. However, it only works if your existing loft has enough head height (2.2m minimum from floor to ridge). Most London terraces and semis do not have sufficient height for this to be practical, which is why dormer conversions are far more common.",
  },
  {
    question: "Does a loft conversion add value in London?",
    answer: "Yes — consistently. A loft conversion that adds a bedroom and en-suite typically increases a London property's value by 15–25%. On a £600,000 property that is £90,000–£150,000 in added value for a build cost of £38,000–£65,000. The return on investment is stronger in London than almost anywhere else in the UK because of the base property values.",
  },
  {
    question: "Do I need planning permission for a loft conversion in London?",
    answer: "Most dormer and hip-to-gable loft conversions qualify under permitted development — meaning no planning permission is needed, provided the dormer does not extend forward of the existing roof slope at the front, and the volume added is within limits (40m³ for terraced, 50m³ for semi/detached). Properties in conservation areas, flats, and listed buildings typically need a full planning application. We check all of this during your free site survey.",
  },
  {
    question: "How long does a loft conversion take in London?",
    answer: "A rear dormer loft conversion typically takes 8–12 weeks from start to completion. A hip-to-gable with rear dormer takes 10–14 weeks. This covers scaffolding, structural steelwork, roofing, dormer construction, insulation, first-fix electrics and plumbing, plastering, second-fix, and snagging. We provide a detailed timeline in your quotation.",
  },
  {
    question: "What is included in your loft conversion price?",
    answer: "Our fixed-price quotation includes: structural engineer calculations and drawings, building control application and inspection fees, scaffolding, all structural steelwork including ridge beam and floor joists, roofing (dormer cheeks, flat roof membrane, tiles to match existing), insulation (roof, floor, and walls to building regulation standards), staircase, first-fix and second-fix electrics (lighting, sockets, smoke detectors), first-fix plumbing for en-suite, Velux or dormer windows, plastering throughout, and snagging. The price we quote is the price you pay.",
  },
  {
    question: "What is not included in the loft conversion price?",
    answer: "Our loft conversion price does not include bathroom fixtures and fittings (bath, toilet, basin, taps, tiles — these are quoted separately when you choose your specification), kitchen work on lower floors, decoration (we can quote this separately), or any structural work discovered during the build that could not be identified during the survey — though we discuss this immediately and agree the cost before proceeding.",
  },
  {
    question: "Can I get a loft conversion on a flat in London?",
    answer: "Flats cannot have loft conversions — the loft space belongs to the building, not an individual flat. If you own the freehold of a house that has been converted into flats, a loft conversion may be possible subject to planning permission and agreement with other leaseholders. We can advise on feasibility during a free consultation.",
  },
];

export default function LoftConversionCostLondonPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Loft Conversion Cost London 2026 — Full Price Guide",
    description: "How much does a loft conversion cost in London in 2026? Complete price breakdown by conversion type.",
    author: { "@type": "Organization", name: "Albert Construction Ltd" },
    publisher: {
      "@type": "Organization",
      name: "Albert Construction Ltd",
      url: "https://albertconstructionltd.co.uk",
    },
    datePublished: "2026-01-01",
    dateModified: "2026-04-01",
    mainEntityOfPage: "https://albertconstructionltd.co.uk/guides/loft-conversion-cost-london",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Loft Conversion Cost London" }]} />

      {/* Hero */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto">
          <p className="font-label text-xs uppercase tracking-widest text-secondary mb-4 font-bold">Price Guide · Updated 2026</p>
          <h1 className="font-headline text-[2.5rem] md:text-[3.25rem] leading-[1.1] tracking-tight font-black mb-6 text-primary">
            Loft Conversion Cost{" "}
            <span className="text-secondary italic">London 2026</span>
          </h1>
          <p className="text-lg text-charcoal leading-relaxed mb-8 max-w-2xl">
            A complete breakdown of what loft conversions actually cost in London — by type, by area, and by what is and is not included. No vague ranges. Real prices from a London builder who does this work every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-secondary text-white font-label font-bold py-4 px-8 rounded-full text-center inline-flex items-center justify-center gap-2 transition-transform active:scale-95 hover:bg-secondary/90">
              Get a Free Fixed-Price Quote
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <a href="tel:07478606507" className="border-2 border-primary text-primary font-label font-bold py-4 px-8 rounded-full text-center transition-colors hover:bg-primary hover:text-white">
              Call 07478 606 507
            </a>
          </div>
        </div>
      </section>

      {/* Price Summary Table */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-8 tracking-tight">Loft Conversion Prices at a Glance</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="font-headline font-bold p-4 text-sm">Conversion Type</th>
                  <th className="font-headline font-bold p-4 text-sm">Typical London Price</th>
                  <th className="font-headline font-bold p-4 text-sm">Best For</th>
                  <th className="font-headline font-bold p-4 text-sm">Planning</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "Velux / Rooflight", price: "£22,000 – £35,000", bestFor: "Properties with 2.2m+ existing headroom", planning: "Usually PD" },
                  { type: "Rear Dormer", price: "£38,000 – £55,000", bestFor: "Victorian & Edwardian terraces", planning: "Usually PD" },
                  { type: "Hip-to-Gable", price: "£45,000 – £65,000", bestFor: "1930s semis & detached homes", planning: "Usually PD" },
                  { type: "Hip-to-Gable + Dormer", price: "£50,000 – £72,000", bestFor: "Maximum space on semis", planning: "Usually PD" },
                  { type: "Mansard", price: "£55,000 – £85,000", bestFor: "Victorian terraces, maximum volume", planning: "Planning needed" },
                  { type: "L-Shaped Dormer", price: "£48,000 – £70,000", bestFor: "Victorian terraces with rear return", planning: "Usually PD" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-surface-container-low"}>
                    <td className="p-4 font-headline font-bold text-primary text-sm">{row.type}</td>
                    <td className="p-4 font-bold text-secondary text-sm">{row.price}</td>
                    <td className="p-4 text-charcoal text-sm">{row.bestFor}</td>
                    <td className="p-4 text-charcoal text-sm">{row.planning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted mt-4">PD = Permitted Development (no planning application required). Prices include structural engineering, building control, scaffolding, and full build. Excludes bathroom fixtures and decoration.</p>
        </div>
      </section>

      {/* Detailed breakdown */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto space-y-14">

          <div>
            <h2 className="font-headline text-2xl font-black text-primary mb-4 tracking-tight">Rear Dormer Loft Conversion Cost London</h2>
            <Image src="/images/exterior_loft_dormer_framing_construction.webp" alt="Rear dormer loft conversion construction in London" width={800} height={450} className="w-full rounded-lg mb-6 object-cover aspect-video" />
            <p className="text-charcoal leading-relaxed mb-4">A rear dormer is the most common loft conversion in London — particularly on Victorian and Edwardian terraces. It adds a box-shaped structure to the rear roof slope, creating full standing headroom and room for a proper bedroom with en-suite. Most rear dormers qualify under permitted development.</p>
            <p className="text-charcoal leading-relaxed mb-4"><strong>Typical cost: £38,000–£55,000.</strong> The lower end applies to straightforward terraced properties with good access. The higher end reflects larger dormers, complex roof structures, or conservation area materials requirements. Our quotation covers everything: structural steelwork, roofing, dormer window, insulation, staircase, first-fix services, plastering, and building control sign-off.</p>
            <p className="text-charcoal leading-relaxed">The bathroom within the loft is quoted separately once you have chosen your specification — typically £5,000–£12,000 for a full en-suite with shower, toilet, and basin.</p>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-black text-primary mb-4 tracking-tight">Hip-to-Gable Loft Conversion Cost London</h2>
            <Image src="/images/interior_loft_skylight_wood_floor.webp" alt="Completed loft room with skylight and wood floor in London" width={800} height={450} className="w-full rounded-lg mb-6 object-cover aspect-video" />
            <p className="text-charcoal leading-relaxed mb-4">A hip-to-gable conversion extends the sloping side (the hip) of the roof to a vertical gable wall, dramatically increasing the usable floor area. It is the most popular option for 1930s semis and detached homes across North West, West, and East London. Most qualify under permitted development.</p>
            <p className="text-charcoal leading-relaxed mb-4"><strong>Hip-to-gable only: £45,000–£65,000.</strong> Most homeowners combine this with a rear dormer to maximise the space — a combined hip-to-gable and rear dormer typically costs £50,000–£72,000 and creates a genuinely large loft floor that fits a master bedroom, dressing area, and full bathroom.</p>
            <p className="text-charcoal leading-relaxed">On a 1930s semi in Edgware, Harrow, Ilford, or Ealing, this combination adds more value than almost any other single building project.</p>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-black text-primary mb-4 tracking-tight">Mansard Loft Conversion Cost London</h2>
            <Image src="/images/interior_loft_velux_skylights_white.webp" alt="Loft conversion room with Velux skylights in London" width={800} height={450} className="w-full rounded-lg mb-6 object-cover aspect-video" />
            <p className="text-charcoal leading-relaxed mb-4">A mansard conversion replaces the entire rear roof slope with a near-vertical wall (typically 72°) and a flat or shallow-pitched roof, creating the maximum possible internal volume. It is the most expensive type but also delivers the most space and is common on Victorian terraces in inner London — Camden, Islington, Hackney, and Brixton.</p>
            <p className="text-charcoal leading-relaxed mb-4"><strong>Typical cost: £55,000–£85,000.</strong> Mansard conversions almost always require a full planning application — they change the roofline significantly. In conservation areas, the council will specify materials and may require the mansard to be set back from the ridge line so it is not visible from the street.</p>
            <p className="text-charcoal leading-relaxed">The build is more complex than a standard dormer — which is reflected in the price — but the resulting space is often equivalent to an additional full storey.</p>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-black text-primary mb-4 tracking-tight">What Affects the Cost of a Loft Conversion in London?</h2>
            <div className="space-y-4">
              {[
                { factor: "Roof structure", detail: "Cut-timber roofs (common in pre-1960s houses) are straightforward to convert. Trussed rafter roofs (common post-1960s) require the trusses to be restructured with steelwork, which adds £3,000–£8,000 to the cost." },
                { factor: "Head height", detail: "Less than 2.2m from floor joists to ridge means a dormer is essential to create usable space. Lower ridge heights sometimes mean the dormer needs to be taller and wider to achieve the minimum room height inside, which increases cost." },
                { factor: "Access and scaffold", detail: "Tight terraced streets with no rear access mean all materials go through the house or over the roof. This adds time and cost — typically £1,500–£3,000 more than a property with easy rear access." },
                { factor: "Conservation area", detail: "Conservation areas often require specific materials — matching brick or slate, timber windows rather than uPVC, lead-dressed dormers. These materials cost more and the planning process adds time (8–12 weeks for a decision)." },
                { factor: "En-suite specification", detail: "A basic en-suite (shower, toilet, basin, standard tiles) adds £5,000–£8,000. A premium en-suite with underfloor heating, large-format tiles, and high-end fixtures adds £10,000–£16,000." },
                { factor: "Staircase position", detail: "The staircase is included in our quotation but the position matters. If the new stair needs to go somewhere awkward — through a bedroom or over an existing stair — structural work to accommodate it adds cost." },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-secondary pl-5 py-1">
                  <p className="font-headline font-bold text-primary mb-1">{item.factor}</p>
                  <p className="text-charcoal text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-black text-primary mb-4 tracking-tight">What Is Included in Our Loft Conversion Price?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Structural engineer calculations & drawings",
                "Building control application & inspection fees",
                "Scaffolding — erection, hire, and dismantling",
                "All structural steelwork (ridge beam, floor joists)",
                "Roofing — dormer cheeks, flat roof, tiles to match",
                "Insulation to Part L building regulation standard",
                "Dormer or Velux windows",
                "New staircase with handrail and balustrade",
                "First-fix and second-fix electrics (lighting, sockets, smoke alarms)",
                "First-fix plumbing for en-suite (if applicable)",
                "Plastering throughout — walls and ceiling",
                "Snagging and final sign-off",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-surface-container-low rounded p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-secondary flex-shrink-0 mt-0.5"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  <span className="text-charcoal text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted mt-4">Not included: bathroom fixtures and fittings, decoration, planning application fees (where required — typically £206 for householder applications).</p>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-10 tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white border border-outline-variant/20 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-headline font-bold text-primary hover:text-secondary transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 ml-4 transition-transform group-open:rotate-180"><polyline points="6 9 12 15 18 9"/></svg>
                </summary>
                <div className="px-6 pb-6 text-charcoal leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-xl font-black text-primary mb-6 tracking-tight">Related Guides & Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "Loft Conversions Service", href: "/services/loft-conversions", desc: "Full service page — types, process, and reviews" },
              { label: "Dormer Loft Conversions", href: "/services/loft-conversions/dormer", desc: "Detailed guide to dormer conversions in London" },
              { label: "Hip-to-Gable Conversions", href: "/services/loft-conversions/hip-to-gable", desc: "Best option for 1930s semis across London" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="group bg-white border border-outline-variant/30 rounded-lg p-5 hover:border-secondary transition-colors">
                <p className="font-headline font-bold text-primary group-hover:text-secondary mb-1 transition-colors">{item.label}</p>
                <p className="text-sm text-muted">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-primary py-20 md:py-28 mx-6 mb-20 md:mb-28 rounded-lg overflow-hidden">
        <div className="relative z-10 text-center px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-white mb-6 leading-tight">Get Your Fixed-Price Loft Conversion Quote</h2>
          <p className="text-white/80 text-lg font-body mb-10 max-w-md mx-auto">Free site survey. Detailed quotation within 48 hours. The price we quote is the price you pay.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-secondary text-white font-label font-bold py-4 px-10 rounded-full inline-block transition-transform active:scale-95 hover:bg-secondary/90">Get a Free Quote</Link>
            <a href="tel:07478606507" className="border-2 border-white text-white font-label font-bold py-4 px-10 rounded-full inline-block transition-colors hover:bg-white hover:text-primary">Call 07478 606 507</a>
          </div>
        </div>
      </section>
    </>
  );
}
