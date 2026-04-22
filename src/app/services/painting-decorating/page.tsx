import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Painting & Decorating London | Albert Construction",
  description:
    "Interior and exterior painting and decorating across London. Proper preparation, premium finishes, and clean results — as the final stage of renovations or as a standalone project. 9.7/10 on Checkatrade.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/services/painting-decorating",
  },
  openGraph: {
    title: "Painting & Decorating London | Albert Construction",
    description:
      "Interior and exterior painting and decorating across London. Proper preparation, premium finishes, and clean results — as the final stage of renovations or as a standalone project. 9.7/10 on Checkatrade.",
    url: "https://albertconstructionltd.co.uk/services/painting-decorating",
  },
  twitter: {
    title: "Painting & Decorating London | Albert Construction",
    description:
      "Interior and exterior painting and decorating across London. Proper preparation, premium finishes, and clean results — as the final stage of renovations or as a standalone project. 9.7/10 on Checkatrade.",
  },
};

export default function PaintingDecoratingPage() {
  return (
    <ServicePage
      serviceType="Painting & Decorating"
      serviceSlug="painting-decorating"
      heroTitle="Painting &amp; Decorating"
      heroHighlight="London"
      heroDescription="Decoration is the final trade on every project we build, and we apply the same standards to it as everything that came before. Albert Construction handles interior and exterior painting and decorating across London — as the finishing stage of a renovation or extension, or as a standalone project."
      heroImage="/images/interior_loft_velux_skylights_white.webp"
      heroImageAlt="Freshly decorated loft conversion room with white walls and Velux skylights by Albert Construction"
      whatWeOfferIntro="The quality of a paint finish depends almost entirely on preparation — filling, sanding, priming, and caulking the joints between plaster and woodwork. We do that groundwork properly before a roller goes near the wall, which is why our finishes look different from a fast job."
      features={[
        {
          title: "Interior Painting",
          description:
            "Ceilings, walls, and woodwork — all filled and sanded before painting. We use trade-quality materials (Dulux Trade, Johnstone's, Little Greene) and apply the number of coats the surface requires rather than the minimum we can get away with. Cutting in at ceiling lines and architraves is done by hand, not masked and rushed.",
        },
        {
          title: "Exterior Painting & Decoration",
          description:
            "London weather puts exterior paint under constant pressure. We prepare timber windows, doors, and fascias by stripping flaking paint, priming bare timber, and applying exterior-grade gloss or satinwood in multiple coats. Masonry and render are painted with breathable masonry paint that lets the wall dry out rather than trapping moisture.",
        },
        {
          title: "Feature Walls & Specialist Finishes",
          description:
            "Colour consultations, lime wash, chalky emulsions, metallic finishes, and colour-drenching — painting a room in a single bold colour ceiling to floor, including doors and architraves — are all within our scope. We mix colours, show swatches on the actual wall before committing, and apply specialist paints correctly.",
        },
        {
          title: "Wallpaper Hanging",
          description:
            "Pattern matching, seaming at internal corners, working around light switches and sockets, and getting wallpaper perfectly plumb — these are the parts that separate a professional hang from a DIY job. We hang paper, fabric, and vinyl wallcoverings, including specialist heritage papers in period properties.",
        },
        {
          title: "Full Property Redecoration",
          description:
            "A full redecoration of a London house — ceilings, walls, woodwork, and doors — typically takes 2–3 weeks. We work room by room to minimise disruption, move and replace furniture, and leave each room finished before moving to the next.",
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Free Site Visit",
          description:
            "We assess the surfaces, note any significant preparation work (blown plaster, stained ceilings, bare timber), and quote for the full scope — including preparation — so there are no surprises.",
        },
        {
          step: "02",
          title: "Fixed-Price Quotation",
          description:
            "Your quote specifies every room, the prep work required, number of coats, and the paint specification. We do not quote a low rate and then add preparation as an extra.",
        },
        {
          step: "03",
          title: "Preparation First",
          description:
            "Filling, sanding, spot priming, masking, and protecting floors before a single tin is opened. We spend as long preparing as we do painting — that is why the finish lasts.",
        },
        {
          step: "04",
          title: "Clean Handover",
          description:
            "We remove all masking, clean up any splashes, and replace furniture before calling a room complete. You do not need to clean up after us.",
        },
      ]}
      galleryImages={[
        { src: "/images/interior_staircase_glass_balustrade.webp", alt: "Staircase and hallway decorated by Albert Construction" },
        { src: "/images/interior_loft_velux_skylights_white.webp", alt: "Newly decorated loft room with white walls and skylights" },
        { src: "/images/interior_loft_skylight_wood_floor.webp", alt: "Finished and decorated loft conversion room by Albert Construction" },
      ]}
      ctaTitle="Ready to Transform Your Space?"
      ctaDescription="Get a free consultation and fixed-price quotation for your painting and decorating. No obligation, no hidden costs."
      faqs={[
        {
          question: "How long does it take to decorate a house?",
          answer:
            "A full redecoration of a 3-bedroom London terraced house — ceilings, walls, and woodwork throughout — typically takes 2–3 weeks with a two-person team. Individual rooms take 2–4 days each. The timeline is longer if significant preparation work is needed (filling, sanding, or priming bare plaster after replastering).",
        },
        {
          question: "Should I choose the paint or do you supply it?",
          answer:
            "Either works. We are happy to work from a colour palette you have chosen — from any paint brand — and we can advise on finishes (matt, eggshell, satinwood) for different surfaces. If you would prefer us to specify the colours and supply the paint, we can do that too. We use Dulux Trade, Johnstone's, and Little Greene as standard.",
        },
        {
          question: "Do I need to move out while you decorate?",
          answer:
            "No. We work room by room, move furniture aside (and replace it), keep dust contained with door seals and dust sheets, and leave each room usable at the end of each day. Modern low-odour paints make the process considerably less disruptive than it used to be.",
        },
        {
          question: "Can you paint over damp or stained walls?",
          answer:
            "Not without treating the underlying cause first. Painting over a damp patch seals nothing — the damp continues, the paint bubbles, and you are back to square one. We identify the source (leaking gutters, bridged cavity, condensation) and fix it before decorating. Stained ceilings from old leaks need a stain-block primer before they are painted — otherwise the stain bleeds through any colour.",
        },
        {
          question: "Do you decorate after your own building work?",
          answer:
            "Yes. On all our renovation, extension, and loft conversion projects, decoration is the final stage. It is included in your project quotation as a separate line item so you can see the cost clearly. Having the same company decorate that plastered the walls means any imperfections found during preparation are fixed at no extra cost.",
        },
      ]}
    />
  );
}
