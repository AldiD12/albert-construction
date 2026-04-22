import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Party Wall Agreement London | Complete Guide 2026 | Albert Construction",
  description:
    "Do you need a party wall agreement for a loft conversion or house extension in London? Full 2026 guide covering the Party Wall Act, notice requirements, costs, and timelines.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/guides/party-wall-agreement-london",
  },
  openGraph: {
    title: "Party Wall Agreement London | Complete Guide 2026 | Albert Construction",
    description:
      "Everything you need to know about party wall agreements in London — when you need one, how to serve notice, and what happens if a neighbour objects.",
    url: "https://albertconstructionltd.co.uk/guides/party-wall-agreement-london",
  },
  twitter: {
    title: "Party Wall Agreement London | Complete Guide 2026",
    description:
      "Do you need a party wall agreement for your London loft conversion or extension? Full guide covering notices, costs, and timelines.",
  },
};

const faqs = [
  {
    question: "What is the Party Wall Act and when does it apply?",
    answer: "The Party Wall etc. Act 1996 is legislation that regulates construction work affecting shared walls (party walls), boundaries, and the excavation of foundations near neighbouring properties. It applies to loft conversions where structural work is carried out on a wall shared with a neighbour, rear extensions where new foundations are dug within 3 metres of a neighbouring structure, and any work to or near a boundary wall. The Act requires you to notify affected neighbours before starting work and gives them the right to appoint a surveyor if they have concerns.",
  },
  {
    question: "Do I need a party wall agreement for a loft conversion?",
    answer: "Most loft conversions on terraced and semi-detached houses require party wall notices because the structural work — cutting into the party wall to install the new floor joists (often called &apos;flitch beams&apos; or joist hangers into the party wall), and sometimes raising the party wall to create the dormer — directly affects the shared wall. Notice must be served on adjoining owners at least 2 months before the planned start date for party wall work. We flag this during your free site survey and can recommend experienced party wall surveyors.",
  },
  {
    question: "What is a party wall notice and how is it served?",
    answer: "A party wall notice is a formal written notification served on your neighbour(s) informing them of the intended works under the Party Wall Act. It must describe the work clearly, include the proposed start date, and be served the required notice period in advance (2 months for party wall work, 1 month for boundary line and excavation work). Notices must be served to each adjoining owner — if a property is jointly owned, all owners must be notified. Serving notice by hand or recorded post is standard. We can help you understand what notices are required for your specific project.",
  },
  {
    question: "What happens after I serve a party wall notice?",
    answer: "Your neighbour has 14 days to respond. They can: (1) Consent in writing — meaning you can proceed without a party wall award; (2) Dissent and agree to share a single agreed surveyor; (3) Dissent and appoint their own surveyor (you then appoint yours, and together they draw up a party wall award). If there is no response within 14 days, a dispute is deemed to have been raised and the surveyor appointment process begins automatically. The party wall award sets out how and when the work will be carried out and is legally binding.",
  },
  {
    question: "How much does a party wall agreement cost in London?",
    answer: "Party wall surveyors in London typically charge £700–£1,500 per surveyor for a straightforward loft conversion or single-storey extension. If your neighbour dissents and appoints their own surveyor, you are generally liable for both surveyors&apos; reasonable fees — meaning the total party wall cost can be £1,400–£3,000. More complex projects (deeper excavations, multiple adjoining owners, commercial neighbours) cost more. We always factor realistic party wall costs into our quotation so there are no surprises.",
  },
  {
    question: "Can my neighbour stop my loft conversion or extension using the Party Wall Act?",
    answer: "No — the Party Wall Act cannot be used to prevent works from going ahead. It only regulates how and when the work is carried out, and ensures your neighbour&apos;s interests are protected. Even if your neighbour dissents and appoints a surveyor, a party wall award will ultimately be issued and the work can proceed. The process does, however, add time (typically 6–10 weeks) and cost to the project if a neighbour dissents rather than consents.",
  },
  {
    question: "Do I need a party wall agreement if I own an end-of-terrace house?",
    answer: "It depends on the specific work. End-of-terrace properties still share one party wall with the neighbouring terraced house — structural work affecting that wall still requires notice. However, the end-of-terrace gable wall is usually your own wall (not shared), so hip-to-gable loft conversions on that side may not require party wall notice unless you are excavating new foundations within 3 metres of the neighbour&apos;s structure. We assess this as part of your free site survey.",
  },
];

export default function PartyWallAgreementLondonPage() {
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
          { label: "Party Wall Agreement London" },
        ]}
      />

      <article className="px-6 pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <p className="font-label text-xs uppercase tracking-widest text-secondary mb-4 font-bold">
              Legal Guide
            </p>
            <h1 className="font-headline text-[2.5rem] md:text-[3rem] leading-[1.1] tracking-tight font-black mb-6 text-primary">
              Party Wall Agreements in London: What You Need to Know
            </h1>
            <p className="text-lg text-charcoal leading-relaxed">
              Most loft conversions and house extensions on terraced or semi-detached London properties trigger the Party Wall Act. Understanding the process early prevents delays and surprises once your project is underway.
            </p>
          </header>

          {/* Section: What is a party wall */}
          <section className="mb-12">
            <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-4 tracking-tight">
              What Is a Party Wall?
            </h2>
            <p className="text-charcoal leading-relaxed mb-4">
              A party wall is a wall that stands on the boundary between two properties and is shared between them — typically the wall between two terraced or semi-detached houses. The Party Wall etc. Act 1996 also covers party structures (like a floor between flats), boundary walls built on the line of junction, and excavations near neighbouring buildings.
            </p>
            <p className="text-charcoal leading-relaxed">
              The Act applies to England and Wales. In London, virtually every terraced and semi-detached house has at least one party wall, meaning most loft conversions and side or rear extensions involving structural work will require party wall notices.
            </p>
          </section>

          {/* Section: Types of Notice */}
          <section className="mb-12">
            <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-4 tracking-tight">
              Types of Party Wall Notice
            </h2>
            <div className="space-y-4 mb-6">
              <div className="bg-surface-container-low rounded-lg p-5">
                <h3 className="font-headline font-bold text-primary mb-2">Party Structure Notice (Section 3)</h3>
                <p className="text-charcoal text-sm leading-relaxed">
                  Required for work directly on a party wall — cutting into it, raising it, underpinning it, or demolishing and rebuilding it. Notice must be served at least <strong>2 months</strong> before the planned start date. Most relevant to loft conversions.
                </p>
              </div>
              <div className="bg-surface-container-low rounded-lg p-5">
                <h3 className="font-headline font-bold text-primary mb-2">Line of Junction Notice (Section 1)</h3>
                <p className="text-charcoal text-sm leading-relaxed">
                  Required when you intend to build a new wall at the boundary — for example, a new side extension wall built up to but not on the boundary. Notice period: <strong>1 month</strong>.
                </p>
              </div>
              <div className="bg-surface-container-low rounded-lg p-5">
                <h3 className="font-headline font-bold text-primary mb-2">Adjacent Excavation Notice (Section 6)</h3>
                <p className="text-charcoal text-sm leading-relaxed">
                  Required when excavating foundations within 3 metres of a neighbour&apos;s building to a depth greater than the neighbour&apos;s existing foundations, or within 6 metres under a 45-degree line from the base of the neighbour&apos;s foundation. Notice period: <strong>1 month</strong>. Most relevant to rear extensions with strip or pad foundations.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Timeline */}
          <section className="mb-12">
            <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-4 tracking-tight">
              Typical Party Wall Timeline
            </h2>
            <div className="space-y-3">
              {[
                { week: "Weeks 1–2", action: "Party wall notices served on all adjoining owners" },
                { week: "Weeks 2–4", action: "Neighbour responds (14 days from service)" },
                { week: "If consented", action: "No further party wall action needed — work can proceed" },
                { week: "If dissented", action: "Surveyors appointed by each party within 10 days" },
                { week: "Weeks 4–8", action: "Surveyors carry out schedule of condition and prepare party wall award" },
                { week: "Week 8+", action: "Award issued — work can proceed on the agreed terms" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="font-label text-xs font-bold text-secondary bg-secondary/10 rounded px-2 py-1 whitespace-nowrap mt-0.5">{item.week}</span>
                  <p className="text-charcoal text-sm leading-relaxed">{item.action}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Costs */}
          <section className="mb-12">
            <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-4 tracking-tight">
              Party Wall Costs: What to Budget
            </h2>
            <p className="text-charcoal leading-relaxed mb-4">
              If your neighbour consents to the works, the process is essentially free — you do not need surveyors. If a neighbour dissents, surveyors are required and their fees become your liability.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-container-low">
                    <th className="text-left p-3 font-headline font-bold text-primary border border-outline-variant/20">Scenario</th>
                    <th className="text-left p-3 font-headline font-bold text-primary border border-outline-variant/20">Typical Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-outline-variant/20 text-charcoal">Neighbour consents</td>
                    <td className="p-3 border border-outline-variant/20 text-charcoal">£0 (no surveyors needed)</td>
                  </tr>
                  <tr className="bg-surface-container-low/50">
                    <td className="p-3 border border-outline-variant/20 text-charcoal">Agreed single surveyor</td>
                    <td className="p-3 border border-outline-variant/20 text-charcoal">£700–£1,200</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-outline-variant/20 text-charcoal">Two separate surveyors (one each)</td>
                    <td className="p-3 border border-outline-variant/20 text-charcoal">£1,400–£3,000+</td>
                  </tr>
                  <tr className="bg-surface-container-low/50">
                    <td className="p-3 border border-outline-variant/20 text-charcoal">Multiple adjoining owners</td>
                    <td className="p-3 border border-outline-variant/20 text-charcoal">Add £500–£1,000 per additional owner</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-charcoal text-sm leading-relaxed">
              Albert Construction always identifies party wall obligations during your free site survey and includes an allowance in your project quote so you have a realistic total budget from day one.
            </p>
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
              We Handle Party Wall Notices for You
            </h2>
            <p className="text-white/80 mb-8 max-w-md mx-auto">
              During your free site survey we identify all party wall obligations for your project, advise on likely neighbour responses, and recommend trusted local party wall surveyors.
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
