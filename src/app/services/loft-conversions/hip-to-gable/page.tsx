import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Hip-to-Gable Loft Conversion London | 1930s Semi Specialists | Albert Construction",
  description:
    "Hip-to-gable loft conversion builders in London. The best loft conversion for 1930s semis and detached homes. Fixed-price quotes, permitted development. Free site survey.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/services/loft-conversions/hip-to-gable",
  },
  openGraph: {
    title: "Hip-to-Gable Loft Conversion London | 1930s Semi Specialists | Albert Construction",
    description:
      "Hip-to-gable loft conversion builders in London. The best loft conversion for 1930s semis and detached homes. Fixed-price quotes, permitted development.",
    url: "https://albertconstructionltd.co.uk/services/loft-conversions/hip-to-gable",
  },
};

const faqs = [
  {
    question: "What is a hip-to-gable loft conversion?",
    answer: "A hip-to-gable loft conversion extends the sloping side of a hipped roof (the hip) to create a vertical gable wall. On a typical 1930s semi or detached house, the side of the roof slopes inward from the ridge down to the eaves — this cuts deeply into the usable loft volume. Converting the hip to a gable eliminates this slope and replaces it with a vertical wall, dramatically increasing the floor area available at usable head height. The result is a much larger room than would otherwise be possible.",
  },
  {
    question: "Which properties suit a hip-to-gable loft conversion?",
    answer: "Hip-to-gable conversions are ideal for 1930s semi-detached and detached houses — the housing type that dominates North West London (Edgware, Stanmore, Harrow, Wembley), West London (Ealing, Acton), and East London (Ilford, Stratford). These properties were built with hipped roofs specifically because the hipped style was fashionable in that era. Victorian terraced properties have gable ends already (the party wall typically forms the gable), so they do not need a hip-to-gable — they suit rear dormers instead.",
  },
  {
    question: "Does a hip-to-gable loft conversion need planning permission?",
    answer: "On a semi-detached or detached house, a hip-to-gable conversion typically qualifies under permitted development — no planning application required, provided the volume added stays within permitted limits (50m³ for semis and detached, 40m³ for terraced) and the materials are similar in appearance to the existing house. Most homeowners combine the hip-to-gable with a rear dormer, and this combined conversion can still qualify under PD. Properties in conservation areas or Article 4 direction areas need a planning application. We confirm your PD eligibility during the free site survey.",
  },
  {
    question: "How much does a hip-to-gable loft conversion cost in London?",
    answer: "A hip-to-gable only conversion typically costs £45,000–£65,000 in London. The most popular option is a combined hip-to-gable and rear dormer — this creates significantly more floor space and costs £50,000–£72,000. The price varies with the size of the conversion, the complexity of the existing roof structure, and the specification. Our fixed-price quotation covers structural engineering, building control, scaffolding, all structural steelwork, gable construction, dormer (if included), roofing, windows, insulation, staircase, first-fix services, and plastering.",
  },
  {
    question: "How long does a hip-to-gable loft conversion take?",
    answer: "A hip-to-gable only conversion typically takes 10–12 weeks. A combined hip-to-gable and rear dormer takes 12–16 weeks. The extra time compared to a simple dormer reflects the additional structural work of building the new gable wall and extending the ridge. We provide a detailed project programme in your quotation so you know the sequence and timing of every stage.",
  },
  {
    question: "Should I combine the hip-to-gable with a rear dormer?",
    answer: "Almost always yes. The hip-to-gable alone gives you more floor area at one end of the loft but does not add full headroom across the whole space. Adding a rear dormer creates a room that has full standing height from front to back — much more liveable. The combined project costs roughly 15–20% more than the hip-to-gable alone but can nearly double the usable floor area. On a 1930s semi in Edgware, Harrow, or Ealing, the combined conversion typically creates 25–35m² of new floor space — enough for a large master bedroom with dressing area and en-suite bathroom.",
  },
];

export default function HipToGableLoftConversionPage() {
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
    name: "Hip-to-Gable Loft Conversion London",
    description: "Hip-to-gable loft conversion builders in London. Specialists in 1930s semis and detached homes across North West, West, and East London.",
    provider: {
      "@type": "GeneralContractor",
      name: "Albert Construction Ltd",
      url: "https://albertconstructionltd.co.uk",
      telephone: "+447478606507",
    },
    areaServed: { "@type": "City", name: "London" },
    serviceType: "Hip-to-Gable Loft Conversion",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <Breadcrumbs items={[
        { label: "Services", href: "/services" },
        { label: "Loft Conversions", href: "/services/loft-conversions" },
        { label: "Hip-to-Gable Loft Conversion" },
      ]} />

      {/* Hero */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto">
          <p className="font-label text-xs uppercase tracking-widest text-secondary mb-4 font-bold">Loft Conversions · London</p>
          <h1 className="font-headline text-[2.5rem] md:text-[3.25rem] leading-[1.1] tracking-tight font-black mb-6 text-primary">
            Hip-to-Gable Loft Conversion{" "}
            <span className="text-secondary italic">London</span>
          </h1>
          <p className="text-lg text-charcoal leading-relaxed mb-8 max-w-2xl">
            The hip-to-gable is the definitive loft conversion for 1930s semis and detached homes. It transforms a hipped roof into a full-width room — and combined with a rear dormer, creates genuinely large living space under permitted development.
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
            src="/images/exterior_loft_dormer_dark_cladding.webp"
            alt="Hip-to-gable loft conversion on a 1930s semi in London"
            width={900}
            height={500}
            className="w-full rounded-2xl object-cover aspect-video"
          />
        </div>
      </section>

      {/* Explanation */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-6 tracking-tight">Why the Hip-to-Gable Works So Well on 1930s Semis</h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-4 text-charcoal leading-relaxed">
              <p>1930s semi-detached houses have a hipped roof — the sides slope inward from the ridge, creating a pyramid-like shape. This is attractive from the outside but means the loft tapers sharply on both sides, leaving very little usable headroom.</p>
              <p>A hip-to-gable conversion removes the sloping hip on the side of the house and replaces it with a vertical gable wall. This is usually built in brick to match the existing walls below, or rendered to match the existing render. The result is a loft room that is full width from one side — dramatically more space than would otherwise be possible.</p>
              <p>Most homeowners also add a rear dormer at the same time, which brings the headroom fully up across the back of the room. The combined effect is a loft that can comfortably house a master bedroom, a dressing area, and a full bathroom — transforming a 3-bedroom house into a 4-bedroom home.</p>
            </div>
            <div>
              <Image
                src="/images/interior_loft_skylight_wood_floor.webp"
                alt="Completed loft room with skylight and wood floor in London"
                width={450}
                height={350}
                className="w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Options comparison */}
      <section className="px-6 mb-16 md:mb-20 bg-surface-container-low py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-8 tracking-tight">Hip-to-Gable Options</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8">
              <p className="font-label text-xs uppercase tracking-widest text-secondary font-bold mb-3">Option A</p>
              <h3 className="font-headline font-black text-primary text-xl mb-3">Hip-to-Gable Only</h3>
              <p className="text-charcoal text-sm leading-relaxed mb-4">Converts the hipped side to a gable wall, increasing the floor area significantly. Headroom at the back of the loft is limited by the remaining rear roof slope unless you are very lucky with the original ridge height.</p>
              <p className="text-secondary font-bold font-headline text-xl">£45,000 – £65,000</p>
              <p className="text-muted text-sm mt-1">Best for: properties with a naturally high ridge, or where permitted development volume is already at the limit</p>
            </div>
            <div className="bg-primary rounded-2xl p-8 text-white">
              <p className="font-label text-xs uppercase tracking-widest text-secondary font-bold mb-3">Option B · Most Popular</p>
              <h3 className="font-headline font-black text-xl mb-3">Hip-to-Gable + Rear Dormer</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">Combines the hip-to-gable with a rear dormer that gives full standing height across the whole room. Creates 25–35m² of genuinely usable space — enough for a master bedroom, dressing area, and en-suite bathroom.</p>
              <p className="text-secondary font-bold font-headline text-xl">£50,000 – £72,000</p>
              <p className="text-white/50 text-sm mt-1">Best for: 1930s semis where maximum space is the priority</p>
            </div>
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-4 tracking-tight">What&apos;s Included</h2>
          <p className="text-charcoal mb-8 leading-relaxed">Our fixed-price quotation covers every element of the build from scaffold to snagging.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Structural engineer calculations & drawings",
              "Building control application & inspection fees",
              "Scaffolding (erection, hire & dismantling)",
              "Ridge extension & structural steelwork",
              "New gable wall construction (brick or rendered block)",
              "Rear dormer frame, flat roof & EPDM membrane (if included)",
              "Dormer cladding and window(s)",
              "Roof tiles reinstated to match existing",
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
          <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-10 tracking-tight">Hip-to-Gable FAQs</h2>
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
              { label: "Mansard Loft Conversion", href: "/services/loft-conversions/mansard" },
              { label: "All Loft Conversions", href: "/services/loft-conversions" },
              { label: "Loft Conversion Cost London", href: "/guides/loft-conversion-cost-london" },
              { label: "Loft Conversions in Edgware", href: "/locations/edgware" },
              { label: "Loft Conversions in Harrow", href: "/locations/harrow" },
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
          <h2 className="font-headline text-2xl md:text-3xl font-black mb-4">Is Your Home Suitable for a Hip-to-Gable?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
            We visit your property, measure the roof, confirm your permitted development rights, and provide a detailed fixed-price quotation. No obligation, no charge.
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
