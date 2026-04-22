import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Building Guides London | Costs, Planning & Advice | Albert Construction",
  description:
    "Free guides on loft conversion costs, house extension costs, planning permission, and everything else you need to know before building in London. Written by working builders.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/guides",
  },
  openGraph: {
    title: "Building Guides London | Costs, Planning & Advice | Albert Construction",
    description:
      "Free guides on loft conversion costs, house extension costs, planning permission, and everything else you need to know before building in London. Written by working builders.",
    url: "https://albertconstructionltd.co.uk/guides",
  },
};

const guides = [
  {
    title: "Loft Conversion Cost London 2026",
    description: "A complete breakdown of what loft conversions cost in London — Velux, dormer, hip-to-gable, mansard and L-shaped. Real prices with a full explanation of what is and is not included.",
    href: "/guides/loft-conversion-cost-london",
    tag: "Cost Guide",
    readTime: "8 min read",
  },
  {
    title: "House Extension Cost London 2026",
    description: "How much does a house extension cost in London? Single storey, double storey, side return, and wrap-around prices explained with factors that affect the cost and what every quote should include.",
    href: "/guides/house-extension-cost-london",
    tag: "Cost Guide",
    readTime: "8 min read",
  },
  {
    title: "Planning Permission for Loft Conversions London",
    description: "Do you need planning permission for a loft conversion? Full 2026 guide covering permitted development rights, volume limits, conservation areas, Article 4 directions, and Lawful Development Certificates.",
    href: "/guides/planning-permission-loft-conversion-london",
    tag: "Planning Guide",
    readTime: "6 min read",
  },
  {
    title: "Party Wall Agreements London — Complete Guide",
    description: "Most London loft conversions and extensions trigger the Party Wall Act. This guide explains what notices to serve, what happens if a neighbour dissents, timelines, and what a party wall surveyor costs.",
    href: "/guides/party-wall-agreement-london",
    tag: "Legal Guide",
    readTime: "6 min read",
  },
  {
    title: "Bathroom Renovation Cost London 2026",
    description: "How much does a bathroom renovation cost in London? Full breakdown covering small bathrooms, en-suite conversions, wet rooms, fixture quality levels, and what drives the price up or down.",
    href: "/guides/bathroom-renovation-cost-london",
    tag: "Cost Guide",
    readTime: "6 min read",
  },
];

const comingSoon = [
  "How to Choose a Builder in London",
  "Loft Conversion vs House Extension — Which Adds More Value?",
  "Building Regulations for Loft Conversions in London",
];

export default function GuidesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Guides" }]} />

      {/* Hero */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto">
          <p className="font-label text-xs uppercase tracking-widest text-secondary mb-4 font-bold">Free Building Guides · London</p>
          <h1 className="font-headline text-[2.5rem] md:text-[3.25rem] leading-[1.1] tracking-tight font-black mb-6 text-primary">
            Building Guides{" "}
            <span className="text-secondary italic">for London Homeowners</span>
          </h1>
          <p className="text-lg text-charcoal leading-relaxed max-w-2xl">
            Practical, honest guides on costs, planning, and what to expect from a building project in London — written by builders who do this work every week. No vague ranges, no filler.
          </p>
        </div>
      </section>

      {/* Guides list */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-black text-primary mb-8 tracking-tight">Published Guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="group block bg-white border border-charcoal/10 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow hover:border-secondary/40">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-secondary/10 text-secondary font-label font-bold text-xs px-3 py-1 rounded-full">{guide.tag}</span>
                  <span className="text-muted text-xs font-label">{guide.readTime}</span>
                </div>
                <h3 className="font-headline font-black text-primary text-xl mb-3 group-hover:text-secondary transition-colors leading-tight">{guide.title}</h3>
                <p className="text-charcoal text-sm leading-relaxed mb-6">{guide.description}</p>
                <span className="text-secondary font-label font-bold text-sm inline-flex items-center gap-2">
                  Read the guide
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coming soon */}
      <section className="px-6 mb-16 md:mb-20 bg-surface-container-low py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-black text-primary mb-4 tracking-tight">Coming Soon</h2>
          <p className="text-charcoal mb-8 leading-relaxed">More guides are in progress. If there is something specific you would like us to cover, <Link href="/contact" className="text-secondary underline underline-offset-2">get in touch</Link>.</p>
          <div className="space-y-3">
            {comingSoon.map((title, i) => (
              <div key={i} className="flex items-center gap-4 bg-white rounded-xl p-5">
                <div className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <span className="text-charcoal font-label font-bold text-sm">{title}</span>
                <span className="ml-auto text-muted text-xs font-label bg-surface-container-low rounded-full px-3 py-1">Coming soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-4xl mx-auto bg-primary rounded-2xl p-10 md:p-14 text-white text-center">
          <h2 className="font-headline text-2xl md:text-3xl font-black mb-4">Ready to Talk About Your Project?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
            The guides cover the general principles — for advice specific to your property, call us or request a free site survey. We are happy to talk through feasibility before you commit to anything.
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
        </div>
      </section>
    </>
  );
}
