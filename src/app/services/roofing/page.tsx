import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Roofing Services London | Albert Construction",
  description:
    "New pitched roofs, flat roofing, dormer construction, repairs, and guttering across London. All roofing work by our own team — fixed price, £10M insured, 9.7/10 on Checkatrade.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/services/roofing",
  },
  openGraph: {
    title: "Roofing Services London | Albert Construction",
    description:
      "New pitched roofs, flat roofing, dormer construction, repairs, and guttering across London. All roofing work by our own team — fixed price, £10M insured, 9.7/10 on Checkatrade.",
    url: "https://albertconstructionltd.co.uk/services/roofing",
  },
  twitter: {
    title: "Roofing Services London | Albert Construction",
    description:
      "New pitched roofs, flat roofing, dormer construction, repairs, and guttering across London. All roofing work by our own team — fixed price, £10M insured, 9.7/10 on Checkatrade.",
  },
};

export default function RoofingPage() {
  return (
    <ServicePage
      serviceType="Roofing"
      serviceSlug="roofing"
      heroTitle="Roofing Services"
      heroHighlight="London"
      heroDescription="Albert Construction builds and repairs roofs across London — pitched roofs on new extensions, flat roofs over rear additions, dormer roof structures on loft conversions, and repairs to existing properties. Roofing is part of almost every project we undertake, and we do it ourselves rather than subcontracting it out."
      heroImage="/images/exterior_extension_rear_garden_wide.webp"
      heroImageAlt="Completed rear extension with new pitched roof and guttering by Albert Construction"
      whatWeOfferIntro="A roof leak is one of the most damaging things that can happen to a London property. We take roofing seriously — proper felt underlays, correctly fixed battens, correct tile gauge, and lead flashings dressed properly rather than filled with mastic and left to fail in two years."
      features={[
        {
          title: "Pitched Roofs for Extensions",
          description:
            "Every rear extension we build gets a properly constructed pitched or mono-pitch roof — structural rafters, breathable felt underlay, battens, and tiles or slates to match your existing property. We match brick and tile to the original where material is available, or advise on complementary alternatives.",
        },
        {
          title: "Flat Roofing — EPDM & GRP",
          description:
            "We specify and install EPDM rubber or GRP fibreglass flat roofing systems on extensions and outbuildings. Both offer 25+ year service lives when installed correctly with proper falls, upstands, and drip edges. We do not use felt on new flat roofs — it is a false economy.",
        },
        {
          title: "Dormer Roof Construction",
          description:
            "Dormers are the most leak-prone element of a loft conversion if not built and waterproofed correctly. We build the structural cheeks, back gutter, and lead apron as part of every dormer we construct — not as an afterthought — and we guarantee them watertight.",
        },
        {
          title: "Roof Repairs & Leak Investigations",
          description:
            "Finding the source of a roof leak is often harder than fixing it. Water enters at one point and travels to another before appearing inside. We investigate properly — checking flashings, valley gutters, ridge mortar, and underfelt — before quoting a repair, so we fix the cause rather than the symptom.",
        },
        {
          title: "Guttering, Fascias & Soffits",
          description:
            "Blocked or damaged guttering causes more damp problems in London houses than most people realise. We install and replace uPVC and cast-iron guttering, fascias, and soffits — clearing the old system properly and setting correct falls so water runs to the downpipe rather than pooling.",
        },
        {
          title: "Lead Flashings & Valleys",
          description:
            "Lead flashing around chimney stacks, parapet walls, and where roofs meet walls is the most common source of roof leaks in older London properties. We dress lead to the correct Code thickness, step-flash into mortar joints, and seal with proper lead trim rather than mastic.",
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Free Roof Inspection",
          description:
            "We get up on the roof and inspect it properly — not from ground level with binoculars. We report what we find, photograph any defects, and explain the options before any work is agreed.",
        },
        {
          step: "02",
          title: "Fixed-Price Quotation",
          description:
            "Your quote specifies the materials, the system, and exactly what is included. No provisional sums for 'additional repairs found during work' — we identify them during the inspection.",
        },
        {
          step: "03",
          title: "Scaffolded & Safe Installation",
          description:
            "All work at height is done from properly erected scaffolding. We do not use ladders for anything beyond access. The scaffold goes up, the roof is completed, and it comes down when the job is signed off.",
        },
        {
          step: "04",
          title: "Inspection & Guarantee",
          description:
            "We inspect every element before the scaffold is struck — there is no second chance once it is down. Your new roof or repair is covered by our 2-year guarantee and £10M insurance.",
        },
      ]}
      galleryImages={[
        { src: "/images/exterior_extension_rear_house_complete.webp", alt: "Completed pitched roof on rear extension by Albert Construction" },
        { src: "/images/exterior_loft_dormer_framing_construction.webp", alt: "Dormer loft conversion roof construction in progress" },
        { src: "/images/exterior_extension_rear_garden_wide.webp", alt: "Extension with new roof and guttering system by Albert Construction" },
      ]}
      review={{
        rating: 10,
        title: "Shop extension and refurbishment",
        text: "Albert is a very experienced, hard working and trustful builder. He completed all the planned works on time and spot on budget, with no extras added. Highly recommended!",
        jobLocation: "SW11",
        verified: true,
      }}
      ctaTitle="Need a Roof Survey?"
      ctaDescription="Get a free roof inspection and fixed-price quotation for your roofing project. No obligation, no hidden costs."
      faqs={[
        {
          question: "How do I know if my flat roof needs replacing or just repairing?",
          answer:
            "Age is the first indicator — felt flat roofs have a 10–15 year lifespan. If your felt is blistering, cracking, or has been patched multiple times, replacement is more cost-effective than another repair. EPDM and GRP systems last 25+ years and cost more upfront but significantly less over time. We advise honestly on this during the inspection.",
        },
        {
          question: "My roof is leaking but I can't find where — can you help?",
          answer:
            "Yes. Leak investigations are part of our roofing service. Water almost always travels from the entry point before it appears inside, so you need someone who looks at flashings, valley gutters, ridge joints, and felt condition — not just the obvious crack. We investigate, photograph what we find, and quote a targeted repair.",
        },
        {
          question: "Do you replace like-for-like tiles on an extension to match the house?",
          answer:
            "Where possible, yes. For common London brick types and roof tiles (e.g. handmade clay, concrete interlocking, or Welsh slate), we source matching materials. Where an exact match is not available — particularly on older properties — we advise on the closest alternative and show you samples before ordering.",
        },
        {
          question: "Do you need planning permission for a new roof or re-roof?",
          answer:
            "A like-for-like re-roof generally does not need planning permission. Changing the roof material significantly, altering the pitch, or working on a listed building may require consent. We check during the survey and flag anything that needs a pre-application inquiry before work starts.",
        },
        {
          question: "What is the difference between EPDM and GRP flat roofing?",
          answer:
            "EPDM is a rubber membrane laid in large sheets — flexible, highly UV-resistant, and very good on roofs with penetrations or complex shapes. GRP (fibreglass) is a rigid laminate that is incredibly hard-wearing and ideal for flat roofs with foot traffic. Both are long-life systems. We specify EPDM or GRP based on the roof area, shape, and how it will be used.",
        },
      ]}
    />
  );
}
