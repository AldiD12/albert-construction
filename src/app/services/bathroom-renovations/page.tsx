import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Bathroom Renovations London | Albert Construction",
  description:
    "Complete bathroom renovations across London — strip-out to final finish. Tiling, plumbing, underfloor heating, all by one team. Fixed price, 9.7/10 on Checkatrade.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/services/bathroom-renovations",
  },
  openGraph: {
    title: "Bathroom Renovations London | Albert Construction",
    description:
      "Complete bathroom renovations across London — strip-out to final finish. Tiling, plumbing, underfloor heating, all by one team. Fixed price, 9.7/10 on Checkatrade.",
    url: "https://albertconstructionltd.co.uk/services/bathroom-renovations",
  },
  twitter: {
    title: "Bathroom Renovations London | Albert Construction",
    description:
      "Complete bathroom renovations across London — strip-out to final finish. Tiling, plumbing, underfloor heating, all by one team. Fixed price, 9.7/10 on Checkatrade.",
  },
};

export default function BathroomRenovationsPage() {
  return (
    <ServicePage
      serviceType="Bathroom Renovations"
      serviceSlug="bathroom-renovations"
      heroTitle="Bathroom Renovations"
      heroHighlight="London"
      heroDescription="We renovate bathrooms from strip-out to finished tile — no coordinating separate plumbers, electricians, and tilers. Albert Construction handles every trade in sequence, so your bathroom is done in 2–3 weeks and done properly, with a finish that lasts."
      heroImage="/images/interior_bathroom_freestanding_bath.webp"
      heroImageAlt="Luxury bathroom renovation with freestanding bath and floor-to-ceiling tiling by Albert Construction"
      whatWeOfferIntro="Most bathroom renovation problems come from splitting the work between separate tradespeople who do not coordinate. We solve that by putting one team in charge of everything — plumbing, electrics, waterproofing, tiling, and fixtures — so there are no gaps, no delays, and no callbacks."
      features={[
        {
          title: "Full Bathroom Strip-Out & Redesign",
          description:
            "We remove everything — tiles, sanitaryware, flooring, and partition walls if needed — then rebuild to your new layout. Repositioning a toilet, moving a shower to the opposite wall, or adding a walk-in wet room: we plan it on paper first, then execute it precisely.",
        },
        {
          title: "Tanking & Professional Tiling",
          description:
            "Every wet area we tile is first tanked with a waterproof membrane. This is non-negotiable — it is the only way to guarantee the tiles and grout will not leak into the wall structure over time. We work in ceramic, porcelain, marble, large-format stone, and mosaic.",
        },
        {
          title: "First & Second Fix Plumbing",
          description:
            "New waste runs, hot and cold supplies, pressure-tested before any wall is closed up. We install basins, toilets, baths, and showers — including concealed cisterns, thermostatic shower valves, and freestanding baths — with every fitting checked for leaks before we tile around it.",
        },
        {
          title: "Underfloor Heating & Electrics",
          description:
            "Electric underfloor heating beneath the tiles makes a real difference in a London bathroom — no radiator to work around, warm feet from the first tile. We also run new lighting circuits, extractor fans, and shaving points, all to Part P standards.",
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Free Site Visit",
          description:
            "We visit, assess your existing bathroom layout and pipework, and discuss the changes you want. You get an honest view on what is achievable and what will work best in the space.",
        },
        {
          step: "02",
          title: "Fixed-Price Quotation",
          description:
            "Your quote covers strip-out, first-fix plumbing and electrics, tanking, tiling, fixtures, and finishing. Fixture supply is optional — many clients choose their own sanitaryware and we install it.",
        },
        {
          step: "03",
          title: "Renovation in Sequence",
          description:
            "Strip-out, plumbing and electrics, waterproofing, tiling, fixtures, grouting, silicone, and snagging — in the right order, by the right people, without gaps between trades.",
        },
        {
          step: "04",
          title: "Final Check & Guarantee",
          description:
            "We test every fixture and inspect every grout line before we call the job done. Your renovation is covered by our 2-year workmanship guarantee and £10M public liability insurance.",
        },
      ]}
      galleryImages={[
        { src: "/images/interior_bathroom_freestanding_bath.webp", alt: "Freestanding bath renovation completed by Albert Construction in London" },
        { src: "/images/interior_bathroom_round_mirror_tiles.webp", alt: "Bathroom with round mirror and floor-to-ceiling tiling by Albert Construction" },
        { src: "/images/interior_bathroom_white_tiled.webp", alt: "Clean white bathroom renovation with chrome fixtures completed in London" },
      ]}
      review={{
        rating: 10,
        title: "Renovated flat — new bathroom, kitchen, tiles, plastering",
        text: "Albert and team worked very well with commitment, enthusiasm, honesty, loads of patience and with compassion ensuring the end product was to our expectations. Work was of a high standard. Take great pride in their work.",
        jobLocation: "TW5",
        verified: true,
      }}
      ctaTitle="Ready to Renovate Your Bathroom?"
      ctaDescription="Get a free site visit and fixed-price quotation for your bathroom renovation. No obligation, no hidden costs."
      faqs={[
        {
          question: "How long does a bathroom renovation take?",
          answer:
            "A standard bathroom renovation takes 2–3 weeks. The sequence is: day 1–2 strip-out, days 3–5 first-fix plumbing and electrics, days 6–8 tanking and floor preparation, days 9–12 tiling, then second-fix plumbing, fixture installation, grouting, silicone, and snagging. Bathrooms with layout changes or large-format stone tiling may take up to 4 weeks.",
        },
        {
          question: "How much does a bathroom renovation cost in London?",
          answer:
            "A full bathroom renovation typically costs £6,000–£12,000 for a standard family bathroom and £8,000–£18,000 for a larger or premium-spec bathroom. This covers strip-out, plumbing, electrics, waterproofing, tiling, fixtures, and finishing. Underfloor heating adds roughly £500–£800. Our quotation is fixed-price and itemised so you know exactly where every pound goes.",
        },
        {
          question: "Do you supply the bathroom fixtures or do I choose my own?",
          answer:
            "Either works. Many clients choose their own sanitaryware, tiles, and taps from suppliers like Victorian Plumbing, Bathstore, or Porcelanosa, and we install them. We can also recommend suppliers based on your budget and style. We just need fixture selections confirmed before the tiling stage so everything fits correctly.",
        },
        {
          question: "What is tanking and does my bathroom need it?",
          answer:
            "Tanking is a waterproof membrane applied to walls and floors in wet areas — particularly around showers and baths. It stops water seeping through tiles and grout into the wall structure, which causes damp, mould, and eventually structural damage. Every bathroom we renovate is tanked in all wet zones. It is not optional — it is the difference between a renovation that lasts ten years and one that fails in two.",
        },
        {
          question: "Can you move the toilet, shower, or bath to a different position?",
          answer:
            "Yes. Repositioning fixtures requires rerouting waste pipes and water supply, which we handle during first-fix plumbing. Moving a toilet is the most complex (it needs a sufficient fall to the soil stack), but it is achievable in most London bathrooms. We advise on what works during your free site visit.",
        },
      ]}
    />
  );
}
