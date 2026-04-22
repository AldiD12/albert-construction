import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Bathroom Renovation Cost London 2026 | Full Price Guide | Albert Construction",
  description:
    "How much does a bathroom renovation cost in London in 2026? Full price breakdown covering labour, tiles, fixtures, en-suites and wet rooms. Fixed-price quotes from Albert Construction.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/guides/bathroom-renovation-cost-london",
  },
  openGraph: {
    title: "Bathroom Renovation Cost London 2026 | Full Price Guide | Albert Construction",
    description:
      "How much does a bathroom renovation cost in London in 2026? Full breakdown of labour, fixtures, tiles and timelines.",
    url: "https://albertconstructionltd.co.uk/guides/bathroom-renovation-cost-london",
  },
  twitter: {
    title: "Bathroom Renovation Cost London 2026 | Full Price Guide",
    description:
      "Bathroom renovation costs in London 2026 — labour, tiles, fixtures, en-suites and wet rooms explained.",
  },
};

const faqs = [
  {
    question: "What is included in a full bathroom renovation in London?",
    answer: "A full bathroom renovation includes: stripping out all existing fixtures and fittings, removing old tiles and floor covering, tanking (waterproof membrane to walls and floor where required), first-fix plumbing (repositioning or extending soil and water pipes), first-fix electrics (rewiring, adding circuits for underfloor heating, extractor, shaver sockets), plastering or skimming, tiling to walls and floor, second-fix plumbing (fitting bath/shower tray/basin/toilet and connecting to supply and waste), second-fix electrics (fitting lights, switches, heated towel rail), and silicon sealing and finishing. Albert Construction manages all trades — there is no separate plumber, tiler, or electrician to coordinate.",
  },
  {
    question: "How much does a small bathroom renovation cost in London?",
    answer: "A small bathroom (typically 2–4m²) renovation costs £4,500–£8,000 in London for a mid-range finish. This covers full strip-out, tanking, tiling, a new bath or shower enclosure, basin, toilet, heated towel rail, and all plumbing and electrical work. Budget finishes (basic sanitaryware from B&Q, standard porcelain tiles) sit at the lower end; premium finishes (large-format stone-effect tiles, freestanding bath, underfloor heating) push costs toward £10,000–£14,000+.",
  },
  {
    question: "How much does an en-suite bathroom cost to fit in London?",
    answer: "An en-suite conversion typically costs £5,000–£9,000 in London, depending on whether a partition wall needs to be built and whether plumbing needs to be extended from the main stack. An en-suite added within a loft conversion (where we are already doing first-fix plumbing as part of the loft) is typically at the lower end of this range because the plumbing runs are already being made. A standalone en-suite conversion in an existing bedroom requires more structural and plumbing work.",
  },
  {
    question: "How much does a wet room cost in London?",
    answer: "A wet room costs £6,000–£12,000 in London — more than a standard shower room because the floor requires a built-up screed with a linear or centre drain, and the entire floor and lower walls must be tanked to a higher specification. The floor also needs to be cut and made good around the new drain. Wet rooms are increasingly popular in loft conversion en-suites where space is limited and a traditional shower tray and enclosure would be tight.",
  },
  {
    question: "Can I supply my own bathroom fixtures and tiles?",
    answer: "Yes — we are happy to work with customer-supplied sanitaryware, tiles, and fixtures. Many of our clients purchase their own products from suppliers like Victorian Plumbing, Bathstore, or Porcelanosa. We advise on specification requirements (minimum tile thickness for wet areas, compatible basin waste sizes, etc.) before you order. We can also source and supply everything if you prefer — we have trade accounts and can often supply quality products at competitive prices.",
  },
  {
    question: "How long does a bathroom renovation take in London?",
    answer: "A full bathroom renovation typically takes 7–12 working days from strip-out to snagging. Day 1–2: strip-out, make good any structural issues. Day 3: tanking and first-fix plumbing. Day 4: first-fix electrics. Day 5–6: plastering and drying time. Day 7–9: tiling. Day 10–11: second-fix plumbing and electrics. Day 12: snagging and final clean. The bathroom is generally unusable for 8–10 days, which we discuss during survey so you can plan accordingly.",
  },
  {
    question: "Do I need planning permission for a bathroom renovation in London?",
    answer: "No — bathroom renovations are covered by permitted development and do not require planning permission. However, if your property is listed, any internal alterations (including new tiling or fixtures) may require listed building consent. Building regulations approval is required for certain elements: notifiable electrical work (new circuits or consumer unit work), new plumbing connections to a soil stack, and in some cases underfloor heating. We ensure all notifiable work is properly certified as part of our service.",
  },
];

export default function BathroomRenovationCostLondonPage() {
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

      <Breadcrumbs
        items={[
          { label: "Guides", href: "/guides" },
          { label: "Bathroom Renovation Cost London" },
        ]}
      />

      <article className="px-6 pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <p className="font-label text-xs uppercase tracking-widest text-secondary mb-4 font-bold">
              Cost Guide
            </p>
            <h1 className="font-headline text-[2.5rem] md:text-[3rem] leading-[1.1] tracking-tight font-black mb-6 text-primary">
              Bathroom Renovation Cost London 2026
            </h1>
            <p className="text-lg text-charcoal leading-relaxed">
              Bathroom renovation costs in London range from around £4,500 for a small, straightforward refresh to £15,000+ for a premium wet room or full en-suite conversion. This guide breaks down what drives the cost and what a realistic budget looks like for different scopes.
            </p>
          </header>

          {/* Price Table */}
          <section className="mb-12">
            <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-6 tracking-tight">
              Bathroom Renovation Cost Summary — London 2026
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse mb-4">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left p-3 font-headline font-bold border border-outline-variant/20">Project Type</th>
                    <th className="text-left p-3 font-headline font-bold border border-outline-variant/20">Mid-Range</th>
                    <th className="text-left p-3 font-headline font-bold border border-outline-variant/20">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "Small bathroom refresh (2–4m²)", mid: "£4,500–£7,000", premium: "£8,000–£12,000" },
                    { type: "Full family bathroom (4–6m²)", mid: "£6,000–£9,000", premium: "£10,000–£15,000" },
                    { type: "En-suite conversion", mid: "£5,000–£8,000", premium: "£9,000–£14,000" },
                    { type: "Wet room", mid: "£6,000–£9,000", premium: "£10,000–£16,000" },
                    { type: "Loft conversion en-suite", mid: "£4,500–£7,500", premium: "£8,000–£12,000" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 1 ? "bg-surface-container-low/50" : ""}>
                      <td className="p-3 border border-outline-variant/20 text-charcoal font-medium">{row.type}</td>
                      <td className="p-3 border border-outline-variant/20 text-charcoal">{row.mid}</td>
                      <td className="p-3 border border-outline-variant/20 text-charcoal">{row.premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Prices are for labour and materials (all trades included) but exclude sanitaryware and tiles unless otherwise agreed. London 2026 market rates.
            </p>
          </section>

          {/* What drives the cost */}
          <section className="mb-12">
            <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-4 tracking-tight">
              What Drives Bathroom Renovation Cost in London?
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Fixture Repositioning",
                  desc: "Moving a toilet or basin to a new position requires extending or rerouting the soil stack and waste pipes — this adds £500–£1,500 depending on the complexity of the routing. Keeping fixtures in the same position reduces cost significantly.",
                },
                {
                  title: "Tile Specification",
                  desc: "Standard porcelain tiles (30×60cm) are straightforward and efficient to lay. Large-format tiles (60×120cm or 120×120cm) require a flatter substrate, more waste, and more time to cut — adding 20–30% to tiling labour. Natural stone requires sealing and more careful installation.",
                },
                {
                  title: "Underfloor Heating",
                  desc: "Electric mat underfloor heating for a bathroom adds approximately £600–£900 installed (mat, thermostat, wiring). Wet underfloor heating (water-fed) is rarely used in bathrooms due to installation complexity but costs £1,500–£2,500.",
                },
                {
                  title: "Structural Work",
                  desc: "If the bathroom requires a new stud partition wall (for an en-suite conversion), expect to add £400–£800 for the partition, boarding, and plastering. Any floor strengthening needed for a freestanding bath or wet room screed adds further cost.",
                },
                {
                  title: "Sanitaryware Quality",
                  desc: "Budget sanitaryware (toilet, basin, shower tray) from trade suppliers can be sourced for £400–£700. Mid-range (Roca, Ideal Standard, Crosswater) runs £800–£1,800. Premium brands (Villeroy & Boch, Duravit, Hansgrohe) add £2,000–£5,000+ for a full set.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-surface-container-low rounded-lg p-5">
                  <h3 className="font-headline font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-charcoal text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-8 tracking-tight">
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 ml-4 transition-transform group-open:rotate-180">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-charcoal text-base leading-relaxed">{faq.answer}</div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary rounded-lg p-10 text-center">
            <h2 className="font-headline text-2xl font-black text-white mb-4">
              Get a Fixed Price for Your Bathroom Renovation
            </h2>
            <p className="text-white/80 mb-8 max-w-md mx-auto">
              We survey, quote, and build — all trades included, fixed price, no subcontractors. Book a free site survey and get a full written quotation within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-secondary text-white font-label font-bold py-4 px-8 rounded-full inline-block transition-transform active:scale-95 hover:bg-secondary/90"
              >
                Book a Free Site Survey
              </Link>
              <a
                href="tel:07478606507"
                className="border-2 border-white text-white font-label font-bold py-4 px-8 rounded-full inline-block transition-colors hover:bg-white hover:text-primary"
              >
                Call 07478 606 507
              </a>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
