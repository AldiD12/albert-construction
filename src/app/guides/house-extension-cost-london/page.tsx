import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "House Extension Cost London 2026 | Full Price Guide | Albert Construction",
  description:
    "How much does a house extension cost in London in 2026? Single storey, double storey, side return and wrap-around prices explained with a full breakdown of what's included. Free fixed-price quotes.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/guides/house-extension-cost-london",
  },
  openGraph: {
    title: "House Extension Cost London 2026 | Full Price Guide | Albert Construction",
    description:
      "How much does a house extension cost in London in 2026? Single storey, double storey, and side return prices explained with a full breakdown of what's included.",
    url: "https://albertconstructionltd.co.uk/guides/house-extension-cost-london",
  },
  twitter: {
    title: "House Extension Cost London 2026 | Full Price Guide | Albert Construction",
    description:
      "How much does a house extension cost in London in 2026? Single and double storey, side return, and wrap-around prices explained.",
  },
};

const faqs = [
  {
    question: "How much does a single storey extension cost in London?",
    answer: "A single storey rear extension in London typically costs £35,000–£75,000 depending on size, specification, and the complexity of the existing structure. A straightforward 3m x 4m kitchen extension on a Victorian terrace sits at the lower end. A large open-plan kitchen-diner with glazed roof lantern, bi-fold doors, and high-end finishes sits at the top. Our fixed price quotation covers everything from foundations and structural steelwork to plastering and building control sign-off.",
  },
  {
    question: "How much does a double storey extension cost in London?",
    answer: "Double storey rear extensions typically cost £80,000–£160,000 in London. The upper floor adds relatively modest cost compared to a second single storey build — so a double storey is very often the best value per square metre. You typically get two full rooms (e.g. a kitchen-diner below and a bedroom or bathroom above) for around 50–60% more than a single storey equivalent.",
  },
  {
    question: "Do I need planning permission for an extension in London?",
    answer: "Many single storey rear extensions qualify under permitted development — meaning no planning application is required. Under current PD rights, a single storey rear extension can extend up to 3m from the original rear wall for terraced and semi-detached homes (6m under the prior approval neighbour consultation scheme), or 4m for detached houses (8m under prior approval). Double storey extensions, side extensions wider than half the original house width, and extensions in conservation areas almost always require a full planning application. We handle all of this and confirm what route applies to your property during your free site survey.",
  },
  {
    question: "How long does a house extension take in London?",
    answer: "A single storey rear extension typically takes 10–14 weeks from groundworks to handover. A double storey extension takes 14–20 weeks. This covers groundworks and foundations, structural steelwork and blockwork, roofing, windows and doors, first-fix electrics and plumbing, insulation, plastering, second-fix, and snagging. We give you a project programme in your quotation so you know exactly when each stage will happen.",
  },
  {
    question: "Does a house extension add value in London?",
    answer: "Yes — consistently. A well-executed rear extension that creates an open-plan kitchen-diner typically adds 10–15% to a London property's value. On a £700,000 property, that is £70,000–£105,000 in added value. Double storey extensions that add a bedroom and bathroom can add 15–20%. The return on investment is particularly strong in London because the base property values are high relative to build costs.",
  },
  {
    question: "What is included in your extension price?",
    answer: "Our fixed-price quotation covers: structural engineer calculations and drawings, building control application and inspection fees (not planning fees), all groundworks and foundations, structural steelwork including steel beams and padstones, blockwork cavity walls, flat roof or pitched roof structure and covering, guttering and downpipes, windows and external doors to your specification, cavity wall and roof insulation to building regulation standards, internal stud walls, first-fix electrics (consumer unit upgrade if required, circuits, sockets, lighting points), first-fix plumbing for any new bathrooms or kitchens, plastering and screeding, and all snagging. The price we quote is the price you pay.",
  },
  {
    question: "What is not included in the extension price?",
    answer: "Our extension price does not include: planning application fees (typically £258 for a householder application) or planning drawings (architect fees are separate unless we quote the full package), kitchen units and appliances, bathroom fixtures and fittings (bath, toilet, basin, tiles, taps), floor finishes (we quote these separately if required), and decoration. We are transparent about this from the first conversation.",
  },
];

export default function HouseExtensionCostLondonPage() {
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
    headline: "House Extension Cost London 2026 — Full Price Guide",
    description: "How much does a house extension cost in London in 2026? Complete price breakdown by extension type.",
    author: { "@type": "Organization", name: "Albert Construction Ltd" },
    publisher: {
      "@type": "Organization",
      name: "Albert Construction Ltd",
      url: "https://albertconstructionltd.co.uk",
    },
    datePublished: "2026-01-01",
    dateModified: "2026-04-01",
    mainEntityOfPage: "https://albertconstructionltd.co.uk/guides/house-extension-cost-london",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "House Extension Cost London" }]} />

      {/* Hero */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto">
          <p className="font-label text-xs uppercase tracking-widest text-secondary mb-4 font-bold">Price Guide · Updated 2026</p>
          <h1 className="font-headline text-[2.5rem] md:text-[3.25rem] leading-[1.1] tracking-tight font-black mb-6 text-primary">
            House Extension Cost{" "}
            <span className="text-secondary italic">London 2026</span>
          </h1>
          <p className="text-lg text-charcoal leading-relaxed mb-8 max-w-2xl">
            A complete breakdown of what house extensions actually cost in London — by type, by size, and by what is and is not included. Real prices from a London builder who does this work every week.
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
          <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-8 tracking-tight">Extension Prices at a Glance</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="font-headline font-bold p-4 text-sm">Extension Type</th>
                  <th className="font-headline font-bold p-4 text-sm">Typical London Price</th>
                  <th className="font-headline font-bold p-4 text-sm">Best For</th>
                  <th className="font-headline font-bold p-4 text-sm">Planning</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "Single Storey Rear", price: "£35,000 – £75,000", bestFor: "Kitchen-diner, extra reception room", planning: "Often PD" },
                  { type: "Double Storey Rear", price: "£80,000 – £160,000", bestFor: "Kitchen below + bedroom/bathroom above", planning: "Planning needed" },
                  { type: "Side Return Extension", price: "£40,000 – £80,000", bestFor: "Victorian terraces with side alley", planning: "Often PD" },
                  { type: "Wrap-Around Extension", price: "£75,000 – £140,000", bestFor: "Rear + side combined, maximum ground floor", planning: "Often PD / sometimes planning" },
                  { type: "Over-Structure Extension", price: "£50,000 – £95,000", bestFor: "Building above garage or flat-roofed extension", planning: "Usually planning needed" },
                  { type: "Basement Extension", price: "£90,000 – £200,000+", bestFor: "Inner London, premium properties", planning: "Usually planning needed" },
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
          <p className="text-sm text-muted mt-4">PD = Permitted Development (no planning application required). Prices include structural engineering, building control, scaffolding, and full build. Excludes kitchen/bathroom fixtures, floor finishes, and decoration.</p>
        </div>
      </section>

      {/* Detailed breakdowns */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto space-y-14">

          <div>
            <h2 className="font-headline text-2xl font-black text-primary mb-4 tracking-tight">Single Storey Rear Extension Cost London</h2>
            <Image src="/images/exterior_extension_rear_house_complete.webp" alt="Completed single storey rear extension on a London terrace" width={800} height={450} className="w-full rounded-lg mb-6 object-cover aspect-video" />
            <p className="text-charcoal leading-relaxed mb-4">The single storey rear extension is the most common building project in London. It typically extends the kitchen into the garden to create an open-plan kitchen-diner — transforming the way a house lives and adding significant market value. Victorian and Edwardian terraces, 1930s semis, and post-war houses all suit this extension type.</p>
            <p className="text-charcoal leading-relaxed mb-4"><strong>Typical cost: £35,000–£75,000.</strong> A 3m deep extension with a flat roof, two sets of bi-fold doors, and a standard specification sits at the lower end. A 6m deep extension with a glazed roof lantern, full-width bifolds, underfloor heating, and a high-end kitchen opening sits at the upper end. Our fixed-price quotation covers foundations, steelwork, walls, flat roof membrane, glazing, insulation, first-fix services, plastering, and building control.</p>
            <p className="text-charcoal leading-relaxed">Under the prior approval (neighbour consultation) scheme, terraced and semi-detached houses can extend up to 6m without planning permission — provided no neighbour objects. We manage the prior approval process for you.</p>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-black text-primary mb-4 tracking-tight">Double Storey Rear Extension Cost London</h2>
            <Image src="/images/exterior_extension_with_rendered_walls.webp" alt="Double storey rear extension with rendered walls in London" width={800} height={450} className="w-full rounded-lg mb-6 object-cover aspect-video" />
            <p className="text-charcoal leading-relaxed mb-4">A double storey rear extension adds a ground floor room and a first floor room in one project. The most common combination is a kitchen-diner below and a master bedroom or bathroom above. Because the groundworks, foundations, and structural steelwork are shared between both floors, a double storey extension offers significantly better value per square metre than two separate single storey projects.</p>
            <p className="text-charcoal leading-relaxed mb-4"><strong>Typical cost: £80,000–£160,000.</strong> The wide range reflects the size of the extension, the complexity of the existing structure, and the specification of finishes. Double storey extensions almost always require a full planning application — the process typically takes 8–12 weeks. We can recommend planning consultants and work with your architect on the drawings.</p>
            <p className="text-charcoal leading-relaxed">The value uplift can be substantial: adding a bedroom and bathroom to a 3-bedroom London house moves it into the 4-bedroom market, which typically commands a price premium of £80,000–£150,000 in most London postcodes.</p>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-black text-primary mb-4 tracking-tight">Side Return Extension Cost London</h2>
            <Image src="/images/interior_open_plan_kitchen_extension.webp" alt="Open-plan kitchen created by side return extension in London" width={800} height={450} className="w-full rounded-lg mb-6 object-cover aspect-video" />
            <p className="text-charcoal leading-relaxed mb-4">Victorian terraces — which dominate inner London from Islington and Hackney to Brixton and Hammersmith — were built with a narrow side alley alongside the rear projection of the kitchen. Infilling this alley with a side return extension widens the ground floor by typically 1.5m–2.5m, transforming a narrow galley kitchen into a genuine open-plan space without touching the garden.</p>
            <p className="text-charcoal leading-relaxed mb-4"><strong>Typical cost: £40,000–£80,000.</strong> The cost depends primarily on the length of the side return, the type of roof (glazed roof light is popular here — it brings natural light into the centre of the plan), and the complexity of the party wall work. Because you are building against the neighbour's wall, a Party Wall Agreement is usually required — we advise on this and can recommend surveyors.</p>
            <p className="text-charcoal leading-relaxed">Side returns often qualify under permitted development, though in conservation areas you may need planning consent for roof glazing or rendered finishes.</p>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-black text-primary mb-4 tracking-tight">Wrap-Around Extension Cost London</h2>
            <Image src="/images/exterior_extension_rear_house_complete.webp" alt="Wrap-around extension combining rear and side in London" width={800} height={450} className="w-full rounded-lg mb-6 object-cover aspect-video" />
            <p className="text-charcoal leading-relaxed mb-4">A wrap-around extension combines a rear extension with a side return infill in a single L-shaped structure. This creates the maximum possible ground floor footprint on a terraced or semi-detached house without going upwards. The result is usually a very large open-plan kitchen, dining, and living space that connects to the garden across the full width of the plot.</p>
            <p className="text-charcoal leading-relaxed mb-4"><strong>Typical cost: £75,000–£140,000.</strong> The L-shaped footprint requires more complex steelwork and roofing than a simple rear extension — but the cost-per-square-metre remains very competitive because the two elements share structural elements. A glazed corner, overhead roof lights, or a combination of flat roof and pitched roof sections are common with this extension type.</p>
            <p className="text-charcoal leading-relaxed">Wrap-arounds can sometimes be done under permitted development — it depends on the extent of the rear and side elements individually. We confirm this at the survey stage before any design work starts.</p>
          </div>

        </div>
      </section>

      {/* Cost factors */}
      <section className="px-6 mb-16 md:mb-20 bg-surface-container-low py-16 -mx-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-10 tracking-tight">What Affects the Cost of a House Extension in London?</h2>
          <div className="space-y-6">
            {[
              {
                title: "Size of the extension",
                body: "The most obvious factor. A 3m × 4m extension is about 12m². A 6m × 5m extension is 30m² — more than double the floor area. Build costs scale roughly (but not exactly) with floor area: larger extensions spread the fixed costs of scaffolding, project management, and structural steelwork across more square metres, so cost per m² generally falls as size increases.",
              },
              {
                title: "Foundation type",
                body: "Most London extensions use traditional strip foundations at 1m–1.5m depth. Where there are large trees nearby (common in London), building control may require deeper trench fill foundations or even piled foundations — which adds £3,000–£10,000. We arrange a trial pit inspection if there is any uncertainty.",
              },
              {
                title: "Party wall position",
                body: "Extensions adjacent to a neighbour's wall trigger the Party Wall Act 1996. This requires serving a notice and, if the neighbour appoints their own surveyor, paying their surveyor's fees (typically £800–£1,500). We advise on timing and can recommend party wall surveyors who work efficiently and fairly.",
              },
              {
                title: "Roof type and glazing",
                body: "A simple flat roof with EPDM membrane is the most cost-effective. A lantern roof light or full-width glazed roof (popular for kitchen extensions) adds £4,000–£12,000 but transforms the quality of natural light inside. A pitched roof to match the existing house costs slightly more than flat but can be easier to get through planning in some conservation areas.",
              },
              {
                title: "Structural complexity",
                body: "Removing a load-bearing wall to create an open-plan space between the old kitchen and the new extension requires a steel beam — typically £1,500–£4,500 including engineer design, supply, and installation. We always include this in the quotation when it is needed rather than showing it as a surprise variation.",
              },
              {
                title: "Specification and finishes",
                body: "The structural shell is broadly similar across projects — it is the finishes that drive cost variation. Bi-fold doors range from £3,000 (aluminium, mid-range) to £8,000+ (premium thermally broken aluminium or steel). Underfloor heating adds £2,500–£5,000. Polished concrete floors add more than porcelain tiles. We quote to your specification so you control this variable.",
              },
            ].map((factor, i) => (
              <div key={i} className="border-l-4 border-secondary pl-6">
                <h3 className="font-headline font-bold text-primary text-lg mb-2">{factor.title}</h3>
                <p className="text-charcoal leading-relaxed">{factor.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-4 tracking-tight">What's Included in Our Extension Quote?</h2>
          <p className="text-charcoal mb-8 leading-relaxed">Our fixed-price quotations are comprehensive. We do not itemise down to every brick — but we also do not hide costs that other builders treat as variations. Here is what is always included:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Structural engineer calculations & drawings",
              "Building control application & inspection fees",
              "Scaffolding (erection, hire & dismantling)",
              "All groundworks & strip/trench-fill foundations",
              "Structural steelwork — beams, padstones, posts",
              "Cavity blockwork walls with DPC and cavity ties",
              "Flat roof structure, insulation & EPDM/GRP membrane",
              "Guttering, downpipes & soakaways",
              "External windows & doors to agreed specification",
              "All insulation to current building regulation standards",
              "Internal stud partitions and doorframes",
              "First-fix electrics — circuits, sockets, lighting points",
              "First-fix plumbing for new bathrooms or kitchen",
              "Plastering — walls and ceilings throughout",
              "Concrete floor screed (where applicable)",
              "Building control sign-off and completion certificate",
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
          <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-10 tracking-tight">Frequently Asked Questions</h2>
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
          <h2 className="font-headline text-2xl font-black text-primary mb-8 tracking-tight">Related Guides & Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Loft Conversion Cost London", href: "/guides/loft-conversion-cost-london" },
              { label: "House Extensions Service", href: "/services/house-extensions" },
              { label: "Loft Conversions Service", href: "/services/loft-conversions" },
              { label: "General Renovations", href: "/services/general-renovations" },
              { label: "Extensions in Barnet", href: "/locations/barnet" },
              { label: "Extensions in Islington", href: "/locations/islington" },
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
          <h2 className="font-headline text-2xl md:text-3xl font-black mb-4">Get Your Fixed-Price Extension Quote</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
            We visit your property, assess the feasibility, and provide a detailed fixed-price quotation — no vague ranges, no hidden costs. The quote is free and there is no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-secondary text-white font-label font-bold py-4 px-8 rounded-full text-center inline-flex items-center justify-center gap-2 transition-transform active:scale-95 hover:bg-secondary/90">
              Request a Free Quote
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
