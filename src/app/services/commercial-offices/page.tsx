import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Commercial Fit-Outs London | Albert Construction",
  description:
    "Commercial office and restaurant fit-outs across London. Partitioning, flooring, electrics, plumbing, and decoration — one team from first fix to handover. VAT registered, £10M insured.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/services/commercial-offices",
  },
  openGraph: {
    title: "Commercial Fit-Outs London | Albert Construction",
    description:
      "Commercial office and restaurant fit-outs across London. Partitioning, flooring, electrics, plumbing, and decoration — one team from first fix to handover. VAT registered, £10M insured.",
    url: "https://albertconstructionltd.co.uk/services/commercial-offices",
  },
  twitter: {
    title: "Commercial Fit-Outs London | Albert Construction",
    description:
      "Commercial office and restaurant fit-outs across London. Partitioning, flooring, electrics, plumbing, and decoration — one team from first fix to handover. VAT registered, £10M insured.",
  },
};

export default function CommercialOfficesPage() {
  return (
    <ServicePage
      serviceType="Commercial Offices"
      serviceSlug="commercial-offices"
      heroTitle="Commercial"
      heroHighlight="Fit-Outs London"
      heroDescription="Albert Construction fits out offices, restaurants, cafés, and retail units across London. We handle the full scope — structural alterations, partitioning, suspended ceilings, commercial flooring, M&E, and decoration — as a single contractor rather than a string of separate trades your project manager has to chase."
      heroImage="/images/interior_commercial_lapolpetta_restaurant.webp"
      heroImageAlt="La Polpetta restaurant commercial fit-out completed by Albert Construction in London"
      whatWeOfferIntro="Commercial clients need a builder who understands programme, minimum disruption to neighbouring occupiers, and the difference between a CAT A and CAT B fit-out. We have delivered both, and we treat commercial deadlines with the same seriousness you do."
      features={[
        {
          title: "Partitioning & Space Planning",
          description:
            "Demountable and permanent office partitions, acoustic pods, glass frontages, and new internal walls to your space plan. We work from your architect's drawings or help you develop a layout if you do not have one — assessing structural implications before committing anything to paper.",
        },
        {
          title: "Suspended Ceilings & Commercial Flooring",
          description:
            "Grid ceilings, plasterboard soffits, and bulkheads to contain M&E and achieve the right room heights. Commercial flooring in LVT, carpet tile, polished concrete, and porcelain — selected for the traffic levels and acoustic requirements of each zone.",
        },
        {
          title: "Mechanical & Electrical",
          description:
            "First-fix and second-fix electrical to Part P, data cabling containment, LED lighting design and installation, emergency lighting, and fire alarm connections. Plumbing for kitchenettes, server room cooling, and washroom facilities — all coordinated with the ceiling and partition programme.",
        },
        {
          title: "Commercial Kitchens & Welfare Facilities",
          description:
            "Restaurant and café kitchen builds to Environmental Health standards, including extraction, fire suppression, and grease trap installations. Office kitchenettes, accessible WCs, and shower facilities fitted to building regulations requirements.",
        },
        {
          title: "Shopfront & Restaurant Fit-Outs",
          description:
            "We have fitted out restaurants, cafés, and retail units across London — La Polpetta, bar counter builds, mezzanine structures, and glazed dining extensions. Commercial interior work requires different detailing from residential and we treat it accordingly.",
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Site Survey & Scope Review",
          description:
            "We visit the shell space or existing fit-out, review your architect's drawings or brief, and identify any structural or M&E constraints before pricing.",
        },
        {
          step: "02",
          title: "Fixed-Price Quotation",
          description:
            "Your quotation is broken down by trade and phase — enabling you to value-engineer individual elements without losing sight of the overall programme. No provisional sums.",
        },
        {
          step: "03",
          title: "Programmed Build",
          description:
            "We produce a detailed programme before starting. Commercial sites have fixed handover dates — we plan to hit them, not recover from them. Out-of-hours and weekend working available where required.",
        },
        {
          step: "04",
          title: "Handover & Certification",
          description:
            "We hand over with all certification in place — electrical installation certificate, building control sign-off, and a snagging list cleared to zero before the keys change hands.",
        },
      ]}
      galleryImages={[
        { src: "/images/interior_commercial_lapolpetta_restaurant.webp", alt: "La Polpetta restaurant commercial fit-out by Albert Construction" },
        { src: "/images/interior_commercial_glazed_dining_fitout.webp", alt: "Commercial glazed dining area fit-out in London" },
        { src: "/images/interior_commercial_cafe_mezzanine_fitout.webp", alt: "Commercial café with mezzanine level fit-out by Albert Construction" },
      ]}
      review={{
        rating: 10,
        title: "Shop extension and refurbishment",
        text: "Albert is a very experienced, hard working and trustful builder. He completed all the planned works on time and spot on budget, with no extras added. Highly recommended!",
        jobLocation: "SW11",
        verified: true,
      }}
      ctaTitle="Planning a Commercial Fit-Out?"
      ctaDescription="Get a free site survey and fixed-price quotation for your commercial project. No obligation, no hidden costs."
      faqs={[
        {
          question: "What is the difference between a CAT A and CAT B fit-out?",
          answer:
            "A CAT A fit-out takes a shell-and-core building to a standard that is ready for a tenant — raised floors, suspended ceilings, basic M&E distribution, and decorated walls. CAT B is the tenant's own fit-out on top of that — partitioning, branding, furniture integration, and bespoke features. We deliver both, and we work with shell-and-core landlords who need CAT A completed to tenant specification.",
        },
        {
          question: "Can you work out of hours to minimise disruption?",
          answer:
            "Yes. For offices in multi-tenanted buildings or restaurants that need to reopen on a deadline, we regularly work evenings, weekends, and overnight. This is costed and agreed upfront — there are no surprise claims for unsociable-hours working once the project is underway.",
        },
        {
          question: "Do you work with architects and interior designers?",
          answer:
            "Frequently. We are experienced at working from professional drawings and specifications, coordinating with the design team on RFIs, and flagging buildability issues before they become site problems. We are also comfortable being appointed directly by clients who do not have a designer and need us to interpret a brief.",
        },
        {
          question: "Are you VAT registered for commercial invoicing?",
          answer:
            "Yes. Albert Construction Ltd is VAT registered and a Companies House limited company. We invoice with a full VAT breakdown and can work within CIS if required by your accountant.",
        },
        {
          question: "How long does a commercial office fit-out take?",
          answer:
            "A 1,000 sq ft office CAT B fit-out typically takes 4–6 weeks. A restaurant fit-out from shell to opening typically takes 8–12 weeks depending on the complexity of the kitchen, extraction, and structural elements. We produce a programme before starting so you have a fixed handover date to plan your launch or move-in around.",
        },
      ]}
    />
  );
}
