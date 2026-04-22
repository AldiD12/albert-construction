import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Mansard Loft Conversion London | Maximum Volume Specialists | Albert Construction",
  description:
    "Mansard loft conversion builders in London. Maximum volume for Victorian terraces — near-vertical rear wall, flat roof, up to 85m³ of new space. Planning advice included. Free quote.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/services/loft-conversions/mansard",
  },
  openGraph: {
    title: "Mansard Loft Conversion London | Maximum Volume Specialists | Albert Construction",
    description:
      "Mansard loft conversion builders in London. Maximum volume for Victorian terraces — near-vertical rear wall, flat roof, up to 85m³ of new space. Planning advice included.",
    url: "https://albertconstructionltd.co.uk/services/loft-conversions/mansard",
  },
};

const faqs = [
  {
    question: "What is a mansard loft conversion?",
    answer: "A mansard loft conversion replaces the rear roof slope with a near-vertical wall (typically angled at 72°) and a flat or shallow-pitched roof. Rather than adding a box dormer within the existing slope, the mansard rebuilds the entire rear roof plane — creating the maximum possible internal volume. The result looks like an additional storey has been added at roof level. Mansard conversions are particularly associated with inner London Victorian terraces in areas like Camden, Islington, Hackney, and Brixton.",
  },
  {
    question: "Does a mansard loft conversion need planning permission?",
    answer: "Yes — in almost all cases. Because a mansard changes the roofline significantly and is visible from the rear of the property, it does not qualify under standard permitted development rights. A full planning application is required. In conservation areas, the council will typically require the mansard wall to be set back from the ridge (so it is not visible from the street), and will specify materials — usually lead or zinc for the flat roof, and a particular type of window or door at the rear. Planning typically takes 8–12 weeks. We work with experienced architectural designers who handle mansard planning applications regularly and know what each London council is likely to accept.",
  },
  {
    question: "How much does a mansard loft conversion cost in London?",
    answer: "A mansard loft conversion in London typically costs £55,000–£85,000. The wide range reflects the size of the roof being replaced, the specification of the rear wall and flat roof (lead or zinc flat roof costs more than EPDM membrane), the complexity of planning requirements in conservation areas, and whether the rear wall includes a full-height glazed element. Our fixed-price quotation covers all structural engineering, planning application support, building control, scaffolding, structural steelwork, full rear wall construction, flat roof with appropriate membrane, windows, insulation, staircase, first-fix services, and plastering.",
  },
  {
    question: "How long does a mansard loft conversion take?",
    answer: "A mansard conversion typically takes 14–18 weeks from start to handover. The additional time compared to a dormer reflects the greater extent of the structural work — the entire rear roof slope is being rebuilt rather than just a box structure added to it. Planning approval (if not yet granted) typically adds 8–12 weeks before construction can begin. We always advise starting the planning process as early as possible so it does not delay the build.",
  },
  {
    question: "Which properties suit a mansard loft conversion?",
    answer: "Mansard conversions are most commonly built on Victorian and Edwardian terraced properties in inner London — particularly those with low ridge heights where a standard dormer would give limited headroom, or where maximum floor area is the priority. They are also used on semi-detached properties in inner London where planning permission is required regardless (conservation areas, Article 4 directions). If your property is a 1930s semi in an outer London suburb, a hip-to-gable with rear dormer will almost certainly give you more space for less money under permitted development.",
  },
  {
    question: "How much more space does a mansard create compared to a dormer?",
    answer: "Significantly more. A rear dormer on a Victorian terrace typically creates 18–22m² of usable floor space. A mansard on the same property typically creates 30–45m² — more than double. The mansard's near-vertical rear wall means the full height is usable all the way to the rear of the room, rather than tapering with the existing roof slope. This makes a mansard feel much more like a conventional room than a loft — and can accommodate not just a bedroom and en-suite but a second bedroom or a study as well.",
  },
];

export default function MansardLoftConversionPage() {
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
    name: "Mansard Loft Conversion London",
    description: "Mansard loft conversion builders in London. Maximum volume for Victorian terraces — near-vertical rear wall, flat roof, planning advice included.",
    provider: {
      "@type": "GeneralContractor",
      name: "Albert Construction Ltd",
      url: "https://albertconstructionltd.co.uk",
      telephone: "+447478606507",
    },
    areaServed: { "@type": "City", name: "London" },
    serviceType: "Mansard Loft Conversion",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <Breadcrumbs items={[
        { label: "Services", href: "/services" },
        { label: "Loft Conversions", href: "/services/loft-conversions" },
        { label: "Mansard Loft Conversion" },
      ]} />

      {/* Hero */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto">
          <p className="font-label text-xs uppercase tracking-widest text-secondary mb-4 font-bold">Loft Conversions · London</p>
          <h1 className="font-headline text-[2.5rem] md:text-[3.25rem] leading-[1.1] tracking-tight font-black mb-6 text-primary">
            Mansard Loft Conversion{" "}
            <span className="text-secondary italic">London</span>
          </h1>
          <p className="text-lg text-charcoal leading-relaxed mb-8 max-w-2xl">
            A mansard conversion delivers the maximum possible loft space — rebuilding the rear roof as a near-vertical wall and flat roof, creating a room that rivals an extra full storey. The premium loft conversion for inner London Victorian terraces.
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
            src="/images/interior_loft_velux_skylights_white.webp"
            alt="Completed mansard loft conversion interior with Velux skylights in London"
            width={900}
            height={500}
            className="w-full rounded-2xl object-cover aspect-video"
          />
        </div>
      </section>

      {/* What is it */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-6 tracking-tight">The Most Space You Can Create in a Loft</h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-4 text-charcoal leading-relaxed">
              <p>Where a dormer adds a box structure to the existing roof slope, a mansard goes further — it replaces the entire rear roof slope with a near-vertical wall (typically 72° from horizontal) and a flat or shallow-pitched roof. The volume created is dramatically larger.</p>
              <p>A standard rear dormer on a Victorian terrace might create 18–22m² of usable floor area, with headroom tapering at the front of the room. A mansard on the same property can create 35–45m² — genuinely room-sized space with full headroom from front to back.</p>
              <p>This makes the mansard the natural choice when you need more than just a bedroom — when you want a master suite with generous dressing space and a full bathroom, or two usable rooms on the loft floor, or a home office alongside a bedroom.</p>
            </div>
            <div>
              <Image
                src="/images/interior_loft_skylight_wood_floor.webp"
                alt="Spacious mansard loft room with wood floor in London"
                width={450}
                height={350}
                className="w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Planning callout */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-surface-container-low border-l-4 border-secondary rounded-xl p-8">
            <h2 className="font-headline text-xl font-black text-primary mb-4">Planning Permission — What to Expect</h2>
            <p className="text-charcoal leading-relaxed mb-4">Mansard conversions almost always require a full planning application — they do not qualify under permitted development because they alter the roofline significantly. The planning process typically takes 8–10 weeks for a straightforward application and 10–14 weeks in conservation areas.</p>
            <p className="text-charcoal leading-relaxed mb-4">In conservation areas, the council typically requires the mansard wall to be set back from the ridge (so it is invisible from the street), and specifies sympathetic materials — often zinc or lead for the flat roof rather than a membrane. These requirements add some cost but result in a conversion that is architecturally more refined.</p>
            <p className="text-charcoal leading-relaxed">We work with architectural designers who handle mansard planning applications in London regularly and know what each borough is likely to approve. We can also advise on whether a pre-application enquiry with the council would be worthwhile before spending money on full drawings.</p>
          </div>
        </div>
      </section>

      {/* Mansard vs dormer comparison */}
      <section className="px-6 mb-16 md:mb-20 bg-surface-container-low py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-8 tracking-tight">Mansard vs Dormer — Key Differences</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="font-headline font-bold p-4 text-sm">Feature</th>
                  <th className="font-headline font-bold p-4 text-sm">Rear Dormer</th>
                  <th className="font-headline font-bold p-4 text-sm">Mansard</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Typical floor area", dormer: "18–22m²", mansard: "30–45m²" },
                  { feature: "Headroom", dormer: "Full at rear, tapers at front", mansard: "Full height throughout" },
                  { feature: "Planning needed", dormer: "Usually PD (no planning)", mansard: "Always planning needed" },
                  { feature: "Typical cost", dormer: "£38,000–£55,000", mansard: "£55,000–£85,000" },
                  { feature: "Build time", dormer: "8–12 weeks", mansard: "14–18 weeks" },
                  { feature: "Best for", dormer: "Victorian terraces, standard bedrooms", mansard: "Maximum space, inner London, conservation areas" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-surface-container-low"}>
                    <td className="p-4 font-headline font-bold text-primary text-sm">{row.feature}</td>
                    <td className="p-4 text-charcoal text-sm">{row.dormer}</td>
                    <td className="p-4 font-bold text-secondary text-sm">{row.mansard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-4 tracking-tight">What&apos;s Included in Our Mansard Quote</h2>
          <p className="text-charcoal mb-8 leading-relaxed">Our fixed-price quotation covers every element of the build from scaffold to snagging.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Structural engineer calculations & drawings",
              "Planning application support (architect drawings)",
              "Building control application & inspection fees",
              "Scaffolding (erection, hire & dismantling)",
              "Ridge beam & all structural steelwork",
              "Mansard rear wall construction (72° angle)",
              "Flat roof — insulation & EPDM, zinc, or lead membrane",
              "Mansard windows or glazed rear elevation",
              "Residual roof tiles reinstated to match existing",
              "Full thermal insulation to building regulations",
              "New loft access staircase",
              "First-fix electrics — sockets, lights, smoke alarms",
              "First-fix plumbing for en-suite",
              "Plastering throughout",
              "Building control sign-off & completion certificate",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-surface-container-low rounded-lg p-4">
                <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                <span className="text-charcoal text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-6 mb-16 md:mb-20 bg-surface-container-low py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-10 tracking-tight">Mansard Loft Conversion FAQs</h2>
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
              { label: "Dormer Loft Conversion", href: "/services/loft-conversions/dormer" },
              { label: "Hip-to-Gable Loft Conversion", href: "/services/loft-conversions/hip-to-gable" },
              { label: "All Loft Conversions", href: "/services/loft-conversions" },
              { label: "Loft Conversion Cost London", href: "/guides/loft-conversion-cost-london" },
              { label: "Loft Conversions in Camden", href: "/locations/camden" },
              { label: "Loft Conversions in Islington", href: "/locations/islington" },
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
          <h2 className="font-headline text-2xl md:text-3xl font-black mb-4">Interested in a Mansard Conversion?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
            We visit your property, assess the roof structure and planning prospects, and provide a detailed fixed-price quotation. Free, no obligation — and we will tell you honestly if a dormer would serve you just as well for less.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-secondary text-white font-label font-bold py-4 px-8 rounded-full text-center inline-flex items-center justify-center gap-2 transition-transform active:scale-95 hover:bg-secondary/90">
              Book a Free Site Survey
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
