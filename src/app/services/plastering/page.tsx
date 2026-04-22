import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Plastering Services London | Albert Construction",
  description:
    "Professional plastering for extensions, renovations, and new builds across London. Skimming, rendering, dry-lining, and period repairs. Fixed price, 9.7/10 on Checkatrade.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/services/plastering",
  },
  openGraph: {
    title: "Plastering Services London | Albert Construction",
    description:
      "Professional plastering for extensions, renovations, and new builds across London. Skimming, rendering, dry-lining, and period repairs. Fixed price, 9.7/10 on Checkatrade.",
    url: "https://albertconstructionltd.co.uk/services/plastering",
  },
  twitter: {
    title: "Plastering Services London | Albert Construction",
    description:
      "Professional plastering for extensions, renovations, and new builds across London. Skimming, rendering, dry-lining, and period repairs. Fixed price, 9.7/10 on Checkatrade.",
  },
};

export default function PlasteringPage() {
  return (
    <ServicePage
      serviceType="Plastering"
      serviceSlug="plastering"
      heroTitle="Plastering Services"
      heroHighlight="London"
      heroDescription="Plastering is the trade that separates a finished room from a building site. Albert Construction plasters every room we build — extensions, loft conversions, full renovations — and we take standalone plastering jobs too, from a single skim to a whole-house replaster."
      heroImage="/images/interior_loft_velux_skylights_white.webp"
      heroImageAlt="Freshly plastered loft conversion room ready for decoration by Albert Construction"
      whatWeOfferIntro="A poor plaster job shows immediately once paint goes on — ripples, cracks, uneven joins. Our plasterers work to a flat, tight finish across every surface, because the quality of everything that follows depends on it."
      features={[
        {
          title: "Skim Coating",
          description:
            "A two-coat skim over plasterboard or existing walls gives you a flat, paint-ready surface. We gauge the background carefully before applying — the right bonding agent on the right surface is what prevents cracking over time.",
        },
        {
          title: "Dry-Lining & Plasterboard",
          description:
            "Dot-and-dab onto masonry or timber-framed stud walls, taped and jointed, and skimmed to a smooth finish. Used throughout extensions and loft conversions as the standard substrate for plastering. We also install acoustic and thermal boards where the spec requires it.",
        },
        {
          title: "Full Property Replastering",
          description:
            "Old plaster that is blown, stained, or cracked beyond repair needs hacking off and starting again. We work floor by floor through a property, keeping dust contained, re-lathing where necessary on older timber-framed walls, and returning rooms in sequence so you can start decorating while we continue elsewhere.",
        },
        {
          title: "External Sand & Cement Rendering",
          description:
            "We apply render to extension walls and gable ends — scratch coat and top coat — finished flat or with a textured or monocouche painted finish. Properly applied render with the correct mix and expansion joints does not crack. We do it correctly rather than quickly.",
        },
        {
          title: "Period & Patch Repairs",
          description:
            "Victorian and Edwardian properties have lime-based plaster that behaves differently from modern gypsum. We match materials and techniques to the existing substrate — using NHL lime mortars for patch repairs in older properties rather than forcing a gypsum skim that will crack at the join.",
        },
        {
          title: "Plastering Within Larger Projects",
          description:
            "On our extension and renovation projects, plastering is the stage that makes every room feel finished. We coordinate plastering with the first-fix and second-fix sequence so there is no waiting and no rework — the right walls are boarded and plastered at exactly the right point in the programme.",
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Free Site Assessment",
          description:
            "We visit and assess the substrate — existing plaster, plasterboard, bare brick, or render — and advise on the right approach for each surface. Some walls need hacking off; others just need a skim. We tell you honestly.",
        },
        {
          step: "02",
          title: "Fixed-Price Quotation",
          description:
            "Your quote covers preparation, bonding, plasterboard supply and fixing where needed, the number of coats, and finishing. Room by room, so you can see the breakdown.",
        },
        {
          step: "03",
          title: "Plastering in the Right Conditions",
          description:
            "We plaster once the heating is on or the property is sealed from the weather. Plastering in cold or damp conditions causes failures — we will tell you if conditions are not right rather than pushing ahead.",
        },
        {
          step: "04",
          title: "Inspection & Guarantee",
          description:
            "We check every wall under a raking light before leaving. Any patches or tram lines are dealt with before the job is signed off. Our work is covered by our 2-year guarantee.",
        },
      ]}
      galleryImages={[
        { src: "/images/interior_loft_velux_skylights_white.webp", alt: "Freshly plastered loft conversion room by Albert Construction" },
        { src: "/images/interior_loft_skylight_wood_floor.webp", alt: "Plastered and finished loft room with skylight and wood floor" },
        { src: "/images/interior_kitchen_white_units_complete.webp", alt: "Plastered walls in completed kitchen renovation by Albert Construction" },
      ]}
      ctaTitle="Need Plastering Done Right?"
      ctaDescription="Get a free assessment and fixed-price quotation for your plastering project. No obligation, no hidden costs."
      faqs={[
        {
          question: "How long does plaster take to dry before you can decorate?",
          answer:
            "Fresh plaster needs a minimum of 4 weeks to dry fully before painting with standard emulsion. You can spot it — new plaster goes from a dark brown to a consistent pale pink as it dries. Painting too early traps moisture and causes staining and adhesion failure. We advise a mist coat of diluted emulsion first, then two full coats once the plaster is completely dry.",
        },
        {
          question: "Why is my plaster cracking after it dried?",
          answer:
            "Hairline shrinkage cracks in new plaster are normal and usually seal with paint. Larger cracks, or cracks at joins, suggest the substrate was not properly prepared — either the bonding agent was missed, the background was too dry or too wet, or a gypsum skim was applied over lime plaster without a suitable key. We diagnose the cause before replastering rather than just covering it up.",
        },
        {
          question: "Should I skim over old plaster or hack it off?",
          answer:
            "It depends on the condition. If the existing plaster is solid and well-bonded, a skim is fine. If it sounds hollow when you tap it, it has blown away from the wall and needs removing. Skimming over blown plaster delays the problem — it will crack again. We test every wall during the site assessment and advise accordingly.",
        },
        {
          question: "Can you plaster around pipes and cables that have already been chased in?",
          answer:
            "Yes. First-fix trades (plumber and electrician) should always run their pipes and cables before plastering starts, so the chases can be filled and the plaster applied in one operation. On our renovation projects we sequence it this way. On standalone plastering jobs, we coordinate with your other contractors to make sure first-fix is finished before we start.",
        },
        {
          question: "Do you work on listed buildings or conservation areas?",
          answer:
            "Yes, and we approach them carefully. Listed buildings and properties in conservation areas often require lime-based plaster rather than modern gypsum — the specification may be part of the listing conditions. We use the appropriate materials and can advise on what is required for your property type.",
        },
      ]}
    />
  );
}
