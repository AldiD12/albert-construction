import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "House Extensions London | Albert Construction",
  description:
    "Single & double storey house extensions across London. Fixed-price quotations, no subcontractors, full structural engineering and building control sign-off. 9.7/10 on Checkatrade.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/services/extensions",
  },
  openGraph: {
    title: "House Extensions London | Albert Construction",
    description:
      "Single & double storey house extensions across London. Fixed-price quotations, no subcontractors, full structural engineering and building control sign-off. 9.7/10 on Checkatrade.",
    url: "https://albertconstructionltd.co.uk/services/extensions",
  },
  twitter: {
    title: "House Extensions London | Albert Construction",
    description:
      "Single & double storey house extensions across London. Fixed-price quotations, no subcontractors, full structural engineering and building control sign-off. 9.7/10 on Checkatrade.",
  },
};

export default function ExtensionsPage() {
  return (
    <ServicePage
      serviceType="House Extensions"
      serviceSlug="extensions"
      heroTitle="House Extensions"
      heroHighlight="London"
      heroDescription="We build single and double storey extensions across London — handling everything from your planning application and party wall notices through to foundations, structural steelwork, and building control sign-off. One experienced team on your site from groundworks to handover, with a fixed price you can rely on."
      heroImage="/images/exterior_extension_rear_house_complete.webp"
      heroImageAlt="Completed rear house extension with pitched roof and brickwork by Albert Construction in London"
      whatWeOfferIntro="No two London properties are the same — and neither is any extension we build. Whether you are adding a rear kitchen extension in Barnet or a side-return in Islington, we scope our approach around your home, your household, and your budget."
      features={[
        {
          title: "Single Storey Rear Extensions",
          description:
            "The most popular way to gain significant ground-floor space without losing your whole garden. We excavate and pour new foundations, build the walls, and tie the new roof into your existing structure — with structural engineer sign-off at every stage. Typical footprint: 3–6 metres deep.",
        },
        {
          title: "Double Storey Extensions",
          description:
            "When you need space on two floors simultaneously, a double storey extension delivers the best cost per square metre of any build type. We handle the planning application, structural steelwork, party wall notices, and building control inspection — you do not need to coordinate multiple professionals.",
        },
        {
          title: "Open-Plan Layouts & Steel Beams",
          description:
            "Removing the back wall and installing RSJ steel beams to create a continuous kitchen-dining-living space is one of the most impactful changes we make to a London home. Our structural engineer specifies the exact beam size; we supply and install it as part of the build.",
        },
        {
          title: "Full Structural & Compliance Package",
          description:
            "We work with a senior structural engineer on every project — accurate RSJ sizing, calculated foundation depths, underpinning where the ground demands it, and a building control application that passes inspection. You get the compliance paperwork alongside the finished building.",
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Free Site Survey",
          description:
            "We visit your property, take measurements, walk through your vision, and give you an honest assessment — including likely planning requirements, party wall obligations, and realistic timescales.",
        },
        {
          step: "02",
          title: "Fixed-Price Quotation",
          description:
            "Your written quote breaks down every cost: groundworks, materials, structural steelwork, building control fees, scaffolding, and finishing. No allowances, no TBC lines — a price that holds.",
        },
        {
          step: "03",
          title: "Build & Weekly Updates",
          description:
            "Albert Construction manages the entire build with our own team. You get a named contact, weekly progress updates, and a site that is left tidy and secure each evening.",
        },
        {
          step: "04",
          title: "Handover & 2-Year Guarantee",
          description:
            "We walk every room with you before the job is finished. Your extension is covered by our 2-year workmanship guarantee and backed by £10M public liability insurance.",
        },
      ]}
      galleryImages={[
        { src: "/images/exterior_extension_side_return_brick_grass.webp", alt: "Side return extension with brickwork and new windows by Albert Construction" },
        { src: "/images/exterior_extension_rear_garden_wide.webp", alt: "Rear extension with completed roof and guttering by Albert Construction" },
        { src: "/images/exterior_extension_rear_garden_artificial_grass.webp", alt: "Rear extension with artificial grass garden completed in London" },
      ]}
      review={{
        rating: 10,
        title: "Excellent work from start to finish",
        text: "Excellent work carried out on our property. The team handled the bathroom, tiling, loft conversion and extension, and the quality of workmanship was excellent throughout. Everything was well organised, completed as agreed, and finished to a very high standard. They were punctual, respectful, and communicated clearly from start to finish. The final result exceeded our expectations.",
        jobLocation: "NW4",
        verified: true,
      }}
      ctaTitle="Ready to Extend Your Home?"
      ctaDescription="Get a free site survey and fixed-price quotation for your house extension. No obligation, no hidden costs."
      faqs={[
        {
          question: "Do I need planning permission for a house extension?",
          answer:
            "It depends on the size and type. Single-storey rear extensions up to 4 metres deep (detached) or 3 metres (semi/terrace) usually fall under permitted development and do not need planning permission. Double-storey extensions almost always need a full application. Properties in conservation areas have additional restrictions. We check all of this during your free site survey and handle the application if one is required.",
        },
        {
          question: "What is a party wall agreement and when do I need one?",
          answer:
            "A party wall agreement is a legal notice required under the Party Wall Act 1996 when your extension is built on or within 3–6 metres of a shared boundary. This applies to most semi-detached and terraced houses in London. You must serve notice on neighbours at least two months before starting work on the boundary wall. We guide you through the process and can recommend experienced surveyors.",
        },
        {
          question: "How much does a house extension cost in London?",
          answer:
            "A single-storey rear extension typically costs £35,000–£55,000, while a double-storey extension ranges from £50,000–£80,000. The final price depends on size, ground conditions, structural complexity, and your choice of finishes. Our quotation is fixed-price and itemised — it includes foundations, structural steelwork, building control fees, scaffolding, and skip hire.",
        },
        {
          question: "What is an RSJ steel beam and will my extension need one?",
          answer:
            "An RSJ (Rolled Steel Joist) is a structural steel beam that carries the load above when walls are removed to open the extension into the house. Almost every rear extension that connects to the existing ground floor needs at least one RSJ. Our structural engineer calculates the exact size and specification, and installation is included in your quotation.",
        },
        {
          question: "How long will the extension take from start to finish?",
          answer:
            "A single-storey rear extension typically takes 10–14 weeks. A double-storey extension takes 14–20 weeks. These timelines cover groundwork, foundations, brickwork, roofing, first-fix plumbing and electrics, plastering, second-fix, and finishing. We build realistic buffers into every project plan.",
        },
      ]}
    />
  );
}
