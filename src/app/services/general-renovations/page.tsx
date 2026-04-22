import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Home Renovations London | Albert Construction",
  description:
    "Complete home renovations and refurbishments across London. Full property transformations, structural alterations, open-plan layouts, and premium finishes. Fixed price, 9.7/10 on Checkatrade.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/services/general-renovations",
  },
  openGraph: {
    title: "Home Renovations London | Albert Construction",
    description:
      "Complete home renovations and refurbishments across London. Full property transformations, structural alterations, open-plan layouts, and premium finishes. Fixed price, 9.7/10 on Checkatrade.",
    url: "https://albertconstructionltd.co.uk/services/general-renovations",
  },
  twitter: {
    title: "Home Renovations London | Albert Construction",
    description:
      "Complete home renovations and refurbishments across London. Full property transformations, structural alterations, open-plan layouts, and premium finishes. Fixed price, 9.7/10 on Checkatrade.",
  },
};

export default function GeneralRenovationsPage() {
  return (
    <ServicePage
      serviceType="General Renovations"
      serviceSlug="general-renovations"
      heroTitle="Home Renovations"
      heroHighlight="London"
      heroDescription="Whether you have just bought a tired London property or want to transform the one you are in, Albert Construction handles the whole scope — structural work, new kitchen and bathroom, plastering, flooring, and decoration — as a single coordinated project rather than a string of separate contractors."
      heroImage="/images/interior_kitchen_dark_openplan_wide.webp"
      heroImageAlt="Open-plan renovation with dark kitchen units completed by Albert Construction in London"
      whatWeOfferIntro="The most expensive thing in any renovation is poor coordination — tradespeople waiting on each other, rework because something was done out of sequence, delays while you chase different contractors. Albert Construction removes all of that by managing every trade in-house, on one schedule."
      features={[
        {
          title: "Full Property Transformations",
          description:
            "We have completed full gut-renovations of London houses and flats — taking a property back to brick across multiple floors and rebuilding it to a modern standard. Every project starts with a detailed scope of works so there are no surprises once work begins.",
        },
        {
          title: "Structural Alterations & Open-Plan Layouts",
          description:
            "Removing load-bearing walls and installing RSJ steel beams to create open-plan ground floors is one of the most impactful changes we make during a renovation. Our structural engineer handles calculations; we handle supply, installation, and building control sign-off.",
        },
        {
          title: "Flat & Apartment Refurbishments",
          description:
            "Flat renovations in London require careful sequencing around building management rules — protected hours, goods lift bookings, skip permits. We have done enough of these to know the logistics, and we manage all of it so you do not have to.",
        },
        {
          title: "Period Property Restorations",
          description:
            "Victorian and Edwardian houses need a builder who understands lime mortar, original cornicing, bay window structural repairs, and solid wall insulation options. We combine modern building practice with genuine respect for period detail — restoring character features where possible.",
        },
        {
          title: "Flooring & Bespoke Carpentry",
          description:
            "Engineered hardwood, porcelain, natural stone, and solid wood floors are laid once all wet trades are finished. We also build bespoke carpentry — fitted wardrobes, alcove shelving, kitchen islands, and feature staircases — as part of the renovation rather than an afterthought.",
        },
        {
          title: "Decoration & Final Finishes",
          description:
            "The renovation finishes when every surface is painted, every skirting is mitred, and every silicone line is clean. We do not hand over a building site — we hand over a finished home.",
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Free Property Walk-Through",
          description:
            "We visit your property, go through every room, and produce a detailed scope of works so you can see exactly what is included and in what order.",
        },
        {
          step: "02",
          title: "Fixed-Price Quotation",
          description:
            "Your quotation breaks down every element — structural work, kitchen, bathroom, plastering, flooring, electrics, plumbing, and decoration. One price, fully itemised, with no provisional sums.",
        },
        {
          step: "03",
          title: "Managed Build Programme",
          description:
            "We run the site, coordinate the trade sequence, manage materials delivery, and keep you updated weekly. You have one contact number throughout the project.",
        },
        {
          step: "04",
          title: "Handover & 2-Year Guarantee",
          description:
            "We do a full walk-through with you at the end and address any snagging items before we close the project. Every element of the renovation is covered by our 2-year workmanship guarantee and £10M insurance.",
        },
      ]}
      galleryImages={[
        { src: "/images/interior_kitchen_dark_openplan_wide.webp", alt: "Open-plan renovation with dark kitchen units by Albert Construction" },
        { src: "/images/interior_staircase_glass_balustrade.webp", alt: "Staircase renovation with glass balustrade by Albert Construction" },
        { src: "/images/interior_loft_skylight_wood_floor.webp", alt: "Loft room renovation with hardwood floor and skylight" },
        { src: "/images/interior_kitchen_white_island_complete.webp", alt: "Full kitchen renovation with island completed by Albert Construction" },
      ]}
      review={{
        rating: 10,
        title: "Completely renovated house",
        text: "Very reliable guys. Everything discussed was completed to an amazing standard. They were honest, hard working and very approachable. Definitely will use them again.",
        jobLocation: "SM5",
        verified: true,
      }}
      ctaTitle="Ready to Renovate?"
      ctaDescription="Get a free walk-through and fixed-price quotation for your home renovation. No obligation, no hidden costs."
      faqs={[
        {
          question: "How do you price a full renovation?",
          answer:
            "We visit the property and produce a detailed scope of works before quoting. This typically takes 60–90 minutes for a full house. The quotation breaks down every trade — structural work, kitchen, bathroom, plastering, electrics, flooring, and decoration — so you can see exactly what you are paying for. We do not use provisional sums or allowances.",
        },
        {
          question: "How long does a full home renovation take?",
          answer:
            "A full renovation of a 3-bedroom London terrace typically takes 12–20 weeks depending on the scope of structural work and the specification of finishes. A flat refurbishment usually takes 6–10 weeks. We produce a room-by-room programme before work starts so you can plan around it.",
        },
        {
          question: "Can I live in the property during the renovation?",
          answer:
            "It depends on the scope. For a full gut renovation, most clients move out for the first 4–6 weeks of structural and wet trades work. For lighter refurbishments — a new kitchen, bathroom, and decoration — many clients stay throughout. We advise honestly on this during the initial walk-through.",
        },
        {
          question: "Do you handle planning permission for structural changes?",
          answer:
            "Most internal structural work — removing walls, installing steel beams — falls under building regulations rather than planning permission and does not require a planning application. Where planning permission is needed (e.g. for extensions or certain loft works), we manage the application or work with your architect to do so.",
        },
        {
          question: "What areas of London do you cover?",
          answer:
            "We work across all London boroughs — North, South, East, and West. Our team is London-based and we do not charge travel premiums within Greater London. For location-specific information, see our locations pages.",
        },
      ]}
    />
  );
}
