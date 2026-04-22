import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Planning Permission for Loft Conversions London | 2026 Guide | Albert Construction",
  description:
    "Do you need planning permission for a loft conversion in London? Full 2026 guide covering permitted development rights, conservation areas, volume limits, and when to apply. Free advice.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/guides/planning-permission-loft-conversion-london",
  },
  openGraph: {
    title: "Planning Permission for Loft Conversions London | 2026 Guide | Albert Construction",
    description:
      "Do you need planning permission for a loft conversion in London? Full 2026 guide covering permitted development rights, conservation areas, and volume limits.",
    url: "https://albertconstructionltd.co.uk/guides/planning-permission-loft-conversion-london",
  },
  twitter: {
    title: "Planning Permission for Loft Conversions London | 2026 Guide",
    description:
      "Everything you need to know about planning permission for loft conversions in London in 2026.",
  },
};

const faqs = [
  {
    question: "Do most loft conversions in London need planning permission?",
    answer: "No — the majority of loft conversions in London are carried out under permitted development (PD) rights, meaning no planning application is required. Rear dormers, hip-to-gable conversions, and rooflight-only conversions typically qualify. However, PD rights do not apply to flats, maisonettes, or any house in a conservation area, Article 4 direction area, or listed building. We check your specific situation during a free site survey.",
  },
  {
    question: "What are the permitted development volume limits for loft conversions?",
    answer: "Under permitted development, the additional roof space created must not exceed 40 cubic metres for a terraced house, or 50 cubic metres for a semi-detached or detached house. These limits are cumulative — meaning any previous loft extensions or roof alterations count towards the total. The dormer must not extend forward of the existing principal elevation (the front roof slope), and must not be higher than the existing roof ridge.",
  },
  {
    question: "I live in a conservation area — can I still do a loft conversion?",
    answer: "Yes, but a full planning application is required. In conservation areas, any alteration to the roof that is visible from the public highway needs planning consent. This typically means rear dormers that are not visible from the street may still be approvable, but you cannot rely on permitted development. We have completed loft conversions in conservation areas across London — Islington, Barnet, Hammersmith, and others — and can advise on the planning prospects for your specific property.",
  },
  {
    question: "What is an Article 4 Direction and does it affect my loft conversion?",
    answer: "An Article 4 Direction is a designation that removes permitted development rights from an area — usually because of its architectural or historic character. Several London boroughs have applied Article 4 Directions to residential streets, particularly in and around conservation areas. If your property is in an Article 4 area, you will need a planning application for works that would otherwise be permitted development. Your local council's planning portal will show whether your property is affected.",
  },
  {
    question: "Does a loft conversion always need building regulations approval?",
    answer: "Yes, always — regardless of whether planning permission is required. Building regulations cover the structural aspects (floor joists, ridge beam, steelwork), fire safety (fire doors, mains-wired smoke alarms, protected escape route), insulation to Part L standards, and the new staircase. You cannot legally use a loft conversion as habitable space without building control sign-off. We handle the building regulations application and manage inspections at every stage as part of our service.",
  },
  {
    question: "What is a lawful development certificate and do I need one?",
    answer: "A Lawful Development Certificate (LDC) is a formal confirmation from the council that your loft conversion is lawful under permitted development — it is not planning permission, but it is a written record that the council agrees your works comply with PD rules. An LDC is not legally required to proceed, but it is strongly recommended if you plan to sell your property. Buyers' solicitors routinely ask for evidence that alterations were carried out lawfully, and an LDC is the cleanest way to provide that.",
  },
  {
    question: "How long does planning permission take for a loft conversion in London?",
    answer: "If planning permission is required, the statutory determination period is 8 weeks for a householder application. In practice, many London boroughs take 10–12 weeks due to workloads, and applications in conservation areas or for listed buildings can take longer. We work with experienced planning consultants and can prepare pre-application enquiries where appropriate to reduce the risk of refusal.",
  },
];

export default function PlanningPermissionLoftConversionPage() {
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
          { label: "Planning Permission for Loft Conversions London" },
        ]}
      />

      <article className="px-6 pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <p className="font-label text-xs uppercase tracking-widest text-secondary mb-4 font-bold">
              Planning Guide
            </p>
            <h1 className="font-headline text-[2.5rem] md:text-[3rem] leading-[1.1] tracking-tight font-black mb-6 text-primary">
              Planning Permission for Loft Conversions in London
            </h1>
            <p className="text-lg text-charcoal leading-relaxed">
              Most London loft conversions go ahead under permitted development — no planning application needed. But several situations require full planning permission, and getting it wrong can mean costly remedial work or problems when you come to sell. This guide explains the rules clearly.
            </p>
          </header>

          {/* Section: Permitted Development */}
          <section className="mb-12">
            <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-4 tracking-tight">
              Permitted Development: The Default Route
            </h2>
            <p className="text-charcoal leading-relaxed mb-4">
              Permitted development (PD) rights allow homeowners to make certain changes to their property without a planning application. For loft conversions, PD covers dormers, hip-to-gable alterations, and rooflight installations — provided specific limits and conditions are met.
            </p>
            <p className="text-charcoal leading-relaxed mb-4">
              The key PD limits for loft conversions are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-charcoal mb-4">
              <li>Volume added must not exceed <strong>40m³ for terraced houses</strong>, or <strong>50m³ for semi-detached and detached houses</strong></li>
              <li>No extension beyond the plane of the existing front roof slope</li>
              <li>No addition higher than the existing roof ridge</li>
              <li>No verandas, balconies, or raised platforms</li>
              <li>Side-facing windows must be obscure glazed and non-opening below 1.7m</li>
            </ul>
            <p className="text-charcoal leading-relaxed">
              These limits are cumulative — if a previous owner already added a dormer that used part of the volume allowance, your remaining allowance is reduced accordingly.
            </p>
          </section>

          {/* Section: When You Need Full Planning */}
          <section className="mb-12">
            <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-4 tracking-tight">
              When Full Planning Permission Is Required
            </h2>
            <p className="text-charcoal leading-relaxed mb-4">
              Planning permission is required if any of the following apply to your property:
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-surface-container-low rounded-lg p-5">
                <h3 className="font-headline font-bold text-primary mb-2">Conservation Areas</h3>
                <p className="text-charcoal text-sm leading-relaxed">
                  Dormer extensions visible from a highway require planning consent in all conservation areas. Rear dormers not visible from the street may still be permissible, but PD cannot be relied upon — a planning application or pre-application enquiry is required.
                </p>
              </div>
              <div className="bg-surface-container-low rounded-lg p-5">
                <h3 className="font-headline font-bold text-primary mb-2">Article 4 Direction Areas</h3>
                <p className="text-charcoal text-sm leading-relaxed">
                  Some London boroughs have removed PD rights from residential streets using Article 4 Directions. Check your property on your local council&apos;s planning portal to confirm whether this applies to you.
                </p>
              </div>
              <div className="bg-surface-container-low rounded-lg p-5">
                <h3 className="font-headline font-bold text-primary mb-2">Listed Buildings</h3>
                <p className="text-charcoal text-sm leading-relaxed">
                  Listed building consent is required for any works to a listed property, in addition to planning permission. This applies to the whole building including internal works.
                </p>
              </div>
              <div className="bg-surface-container-low rounded-lg p-5">
                <h3 className="font-headline font-bold text-primary mb-2">Flats and Maisonettes</h3>
                <p className="text-charcoal text-sm leading-relaxed">
                  Permitted development rights do not apply to flats or maisonettes. Any loft conversion on a flat requires planning permission, which in most cases will not be granted because the loft is part of the building, not the individual flat.
                </p>
              </div>
              <div className="bg-surface-container-low rounded-lg p-5">
                <h3 className="font-headline font-bold text-primary mb-2">Volume Exceeded</h3>
                <p className="text-charcoal text-sm leading-relaxed">
                  If your proposed conversion would take the total added volume above 40m³ (terraced) or 50m³ (semi/detached), a planning application is required even for a standard property type.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Building Regulations */}
          <section className="mb-12">
            <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-4 tracking-tight">
              Building Regulations: Required Even Without Planning Permission
            </h2>
            <p className="text-charcoal leading-relaxed mb-4">
              Planning permission and building regulations are separate systems. Even if your loft conversion qualifies under permitted development, it still requires building regulations approval. Building regulations cover:
            </p>
            <ul className="list-disc list-inside space-y-2 text-charcoal mb-4">
              <li>Structural calculations and adequacy of floor joists and steelwork</li>
              <li>Thermal insulation to Part L standards</li>
              <li>Fire safety: escape route, fire doors, mains-wired smoke alarms</li>
              <li>Staircase dimensions and headroom</li>
              <li>Electrical installation (Part P)</li>
            </ul>
            <p className="text-charcoal leading-relaxed">
              Albert Construction manages the building regulations application, structural engineer sign-off, and all inspections as part of every loft conversion project. You receive a completion certificate from the building inspector, which is essential documentation when you sell.
            </p>
          </section>

          {/* Section: Lawful Development Certificate */}
          <section className="mb-12">
            <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-4 tracking-tight">
              Lawful Development Certificates: Worth Getting
            </h2>
            <p className="text-charcoal leading-relaxed mb-4">
              A Lawful Development Certificate (LDC) is an optional document — a formal written confirmation from your local council that your loft conversion is lawful under permitted development. It is not planning permission, and you do not need one to start building.
            </p>
            <p className="text-charcoal leading-relaxed mb-4">
              However, we strongly recommend applying for an LDC before or during the build. When you sell your property, buyers&apos; solicitors will ask how roof alterations were approved. Without an LDC, you&apos;ll need to rely on a statutory declaration and possibly indemnity insurance, which can complicate and delay a sale. An LDC costs approximately £206 and takes 8 weeks to obtain.
            </p>
          </section>

          {/* FAQ Section */}
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
              Not Sure Whether You Need Planning Permission?
            </h2>
            <p className="text-white/80 mb-8 max-w-md mx-auto">
              We check permitted development eligibility, conservation area status, and Article 4 directions as part of every free site survey — at no cost to you.
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
