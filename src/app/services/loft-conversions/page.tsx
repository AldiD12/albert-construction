import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Loft Conversions London | Albert Construction",
  description:
    "Dormer, hip-to-gable, and mansard loft conversions in London. Fixed price, no subcontractors, full building control sign-off. 9.7/10 on Checkatrade from 29 verified reviews.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/services/loft-conversions",
  },
  openGraph: {
    title: "Loft Conversions London | Albert Construction",
    description:
      "Dormer, hip-to-gable, and mansard loft conversions in London. Fixed price, no subcontractors, full building control sign-off. 9.7/10 on Checkatrade from 29 verified reviews.",
    url: "https://albertconstructionltd.co.uk/services/loft-conversions",
  },
  twitter: {
    title: "Loft Conversions London | Albert Construction",
    description:
      "Dormer, hip-to-gable, and mansard loft conversions in London. Fixed price, no subcontractors, full building control sign-off. 9.7/10 on Checkatrade from 29 verified reviews.",
  },
};

export default function LoftConversionsPage() {
  return (
    <ServicePage
      serviceType="Loft Conversions"
      serviceSlug="loft-conversions"
      heroTitle="Loft Conversions"
      heroHighlight="London"
      heroDescription="Converting a loft adds a full extra floor to your home without touching your garden. Albert Construction builds dormer, hip-to-gable, and mansard conversions across London — managing structural drawings, building control, party wall notices, and every trade from steelwork to final decoration under one roof."
      heroImage="/images/interior_loft_velux_skylights_white.webp"
      heroImageAlt="Bright loft conversion with Velux skylights and white finish by Albert Construction in London"
      whatWeOfferIntro="A loft conversion is the most cost-effective way to add a bedroom and en-suite to a London house. We have completed dozens across the city and know exactly what each roof type needs — from the first structural assessment to the moment you move your furniture in."
      features={[
        {
          title: "Rear Dormer Conversions",
          description:
            "The most popular conversion type in London. A dormer extends outward from the rear roof slope, creating a full-height room with a vertical back wall. The result is a proper bedroom with an en-suite rather than a cramped loft room — and it typically falls within permitted development so no planning permission is needed.",
        },
        {
          title: "Hip-to-Gable Conversions",
          description:
            "If your house has a hipped roof — common on 1930s semis across outer London — the sloping side wall is significantly limiting your usable floor area. We rebuild that side as a vertical gable end, unlocking the full width of the loft. Most hip-to-gable projects are combined with a rear dormer for maximum headroom.",
        },
        {
          title: "Mansard Conversions",
          description:
            "A mansard replaces most of the existing roof with near-vertical walls at the rear, creating a box-like top floor that maximises every square metre of floor area. Mansards typically need planning permission but are the right choice when you want the largest possible conversion on a terraced or semi-detached London property.",
        },
        {
          title: "Velux & Structural Steelwork",
          description:
            "Every loft conversion needs new structural steelwork to carry the floor joists, and most benefit from Velux or dormer windows for light. We handle the steel specification, supply, and installation — along with insulation to Part L, fire doors, and a staircase that meets Part K building regulations.",
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Free Loft Assessment",
          description:
            "We visit, measure your ridge height and floor joists, check your roof structure type, and tell you exactly which conversion is achievable — and which gives you the best value for your property.",
        },
        {
          step: "02",
          title: "Fixed-Price Quotation",
          description:
            "Your written quotation covers structural steelwork, insulation, roofing, plastering, electrics, plumbing for the en-suite, staircase, building control fees, and finishing. One number, no surprises.",
        },
        {
          step: "03",
          title: "Build & Project Management",
          description:
            "Our team manages every trade on site. Scaffolding goes up, the structural frame is installed, then roofing, first-fix, plastering, and second-fix follow in sequence — typically over 8–12 weeks.",
        },
        {
          step: "04",
          title: "Building Control Sign-Off & Guarantee",
          description:
            "We obtain your building control completion certificate before we hand over the keys. The conversion is covered by our 2-year workmanship guarantee and £10M public liability insurance.",
        },
      ]}
      galleryImages={[
        { src: "/images/interior_loft_velux_skylights_white.webp", alt: "Completed loft conversion with Velux skylights by Albert Construction" },
        { src: "/images/interior_loft_skylight_wood_floor.webp", alt: "Loft room with skylight and premium wood floor by Albert Construction" },
        { src: "/images/exterior_loft_dormer_framing_construction.webp", alt: "Dormer loft conversion structural framing in progress by Albert Construction" },
      ]}
      relatedLinks={[
        { title: "Dormer Loft Conversions", href: "/services/loft-conversions/dormer", description: "The most popular type in London — full headroom, rear-facing windows, and permitted development in most cases." },
        { title: "Hip-to-Gable Conversions", href: "/services/loft-conversions/hip-to-gable", description: "Ideal for 1930s semis with hipped roofs — extend the sloping side to a vertical gable and unlock the full loft width." },
        { title: "Mansard Conversions", href: "/services/loft-conversions/mansard", description: "Maximum floor area for terraced and semi-detached properties — near-vertical rear walls and a flat roof deck." },
      ]}
      review={{
        rating: 10,
        title: "Loft Conversion",
        text: "Albert Construction did a loft conversion for me and I can wholeheartedly say they are absolutely amazing. The work was completed quickly and the quality was excellent. I have recommended them to many friends.",
        jobLocation: "DA16",
        verified: true,
      }}
      ctaTitle="Ready to Convert Your Loft?"
      ctaDescription="Get a free loft assessment and fixed-price quotation. No obligation, no hidden costs."
      faqs={[
        {
          question: "Do I need planning permission for a loft conversion?",
          answer:
            "Most dormer and Velux loft conversions fall under permitted development — no planning permission needed — provided the dormer does not project forward of the front roof slope, and the total volume added is within 40 cubic metres (terraced) or 50 cubic metres (detached/semi). Properties in conservation areas and mansard conversions usually need a full planning application. We check this during your free site visit.",
        },
        {
          question: "How do I know if my loft can be converted?",
          answer:
            "The key factor is head height. You need a minimum of 2.2 metres from the top of the ceiling joists to the underside of the ridge beam. Most London houses built before 2000 have enough height. We also check whether your roof uses cut timber or trussed rafters (trussed roofs need more structural work), and assess staircase positioning. All of this is covered in your free site visit.",
        },
        {
          question: "What is the difference between a dormer and a hip-to-gable conversion?",
          answer:
            "A dormer extends outward from the rear roof slope, adding headroom and floor area at the back of the loft. A hip-to-gable extends the sloping side of the roof to a vertical wall, increasing the overall width of the usable space. Hip-to-gable is only possible on semi-detached and detached homes with hipped roofs. Many clients combine both for maximum space — a hip-to-gable with a rear dormer.",
        },
        {
          question: "How much does a loft conversion cost in London?",
          answer:
            "A rear dormer loft conversion typically costs £38,000–£55,000. A hip-to-gable with rear dormer ranges from £45,000–£65,000. Mansard conversions start from around £55,000. Prices depend on the existing roof structure, staircase opening, and your finish choices for the bedroom and en-suite. Our fixed-price quotation includes structural steelwork, insulation, plastering, electrics, plumbing, staircase, and building control fees.",
        },
        {
          question: "Will the loft conversion affect my neighbours?",
          answer:
            "If your conversion involves work on or near a party wall — common on terraced and semi-detached houses — you will need to serve a party wall notice at least two months before work starts. Rear dormers on terraced houses can sometimes affect neighbours' light, though this is rarely a planning issue under permitted development. We walk you through every obligation during your consultation.",
        },
      ]}
    />
  );
}
