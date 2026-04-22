import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Kitchen Fitting London | Albert Construction",
  description:
    "Full kitchen fitting across London — units, plumbing, electrics, worktops, and tiling by one team. Fixed price, no subcontractors, 9.7/10 on Checkatrade.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/services/kitchen-fitting",
  },
  openGraph: {
    title: "Kitchen Fitting London | Albert Construction",
    description:
      "Full kitchen fitting across London — units, plumbing, electrics, worktops, and tiling by one team. Fixed price, no subcontractors, 9.7/10 on Checkatrade.",
    url: "https://albertconstructionltd.co.uk/services/kitchen-fitting",
  },
  twitter: {
    title: "Kitchen Fitting London | Albert Construction",
    description:
      "Full kitchen fitting across London — units, plumbing, electrics, worktops, and tiling by one team. Fixed price, no subcontractors, 9.7/10 on Checkatrade.",
  },
};

export default function KitchenFittingPage() {
  return (
    <ServicePage
      serviceType="Kitchen Fitting"
      serviceSlug="kitchen-fitting"
      heroTitle="Kitchen Fitting"
      heroHighlight="London"
      heroDescription="A kitchen renovation involves more trades than almost any other room — carpentry, plumbing, electrics, tiling, and plastering. Albert Construction manages all of them as one team, so your kitchen is fitted in the right sequence, on schedule, and to the standard you can see in our gallery."
      heroImage="/images/interior_kitchen_dark_openplan_wide.webp"
      heroImageAlt="Wide open-plan kitchen with dark units and integrated appliances fitted by Albert Construction"
      whatWeOfferIntro="We fit kitchens from all major suppliers — Howdens, Wren, IKEA, Magnet, or bespoke — and handle every associated trade ourselves. No waiting for a separate electrician or plumber to become available. One team, one schedule, one point of contact."
      features={[
        {
          title: "Full Kitchen Installation",
          description:
            "Base units, wall cabinets, tall units, end panels, cornices, and plinths — fitted level, plumb, and square. Every door and drawer adjusted before we move on. We work from your kitchen supplier's plan and flag any issues with the layout before anything is fixed to the wall.",
        },
        {
          title: "Plumbing & Gas Safe Electrics",
          description:
            "Sink waste and supply connections, dishwasher plumbing, Gas Safe boiler and hob connections, and all electrical work to Part P standards — including oven circuits, hob isolation, extractor wiring, and under-cabinet lighting. Everything is tested and certified before sign-off.",
        },
        {
          title: "Worktops — Templated & Fitted",
          description:
            "We template quartz, granite, and marble worktops on-site once units are level, then supply and fit. For laminate and solid wood, we cut and finish on-site. Island units are built, levelled, and plumbed to your plan. Upstands and splashbacks are fitted last once all adjacent trades are complete.",
        },
        {
          title: "Tiling & Splashbacks",
          description:
            "From classic metro tiles behind the hob to large-format porcelain that runs wall to wall, we cut precisely, set to perfectly level lines, and grout to a clean, consistent finish. Feature splashbacks in glass or mirrored tiles are fitted with the same care as standard ceramic.",
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Free Site Visit",
          description:
            "We review your kitchen space, your existing plumbing and electrical positions, and your supplier's layout plan — flagging anything that needs adjusting before work starts.",
        },
        {
          step: "02",
          title: "Fixed-Price Quotation",
          description:
            "Your quote covers strip-out, first-fix plumbing and electrics, unit installation, worktop templating and fitting, tiling, second-fix, and snagging. Supplier delivery is coordinated to arrive when we are ready to install.",
        },
        {
          step: "03",
          title: "Installation in the Right Order",
          description:
            "Strip-out, first-fix plumbing and electrics, unit installation, worktop template, worktop fitting, tiling, second-fix, and snagging — each stage completed properly before the next begins.",
        },
        {
          step: "04",
          title: "Final Inspection & Guarantee",
          description:
            "We check every door, drawer, appliance connection, and grout line before we hand over. Your kitchen is covered by our 2-year workmanship guarantee and £10M public liability insurance.",
        },
      ]}
      galleryImages={[
        { src: "/images/interior_kitchen_openplan_dark_cabinets_orange_chairs.webp", alt: "Open-plan kitchen with dark cabinets fitted by Albert Construction" },
        { src: "/images/interior_kitchen_white_island_complete.webp", alt: "White kitchen with island and marble worktop by Albert Construction" },
        { src: "/images/interior_kitchen_white_units_complete.webp", alt: "Crisp white kitchen units with tiled backsplash fitted in London" },
      ]}
      review={{
        rating: 10,
        title: "Complete refurbishment of kitchen",
        text: "I am delighted with the work carried out by Albert and his team. During the weeks that it took to complete the job Albert was closely involved on a daily basis ensuring that everything was done properly and efficiently. Albert was always available to answer my questions.",
        jobLocation: "SM6",
        verified: true,
      }}
      ctaTitle="Ready to Transform Your Kitchen?"
      ctaDescription="Get a free site visit and fixed-price quotation for your kitchen fitting. No obligation, no hidden costs."
      faqs={[
        {
          question: "How long does a kitchen fitting take?",
          answer:
            "A straightforward kitchen replacement takes 2–3 weeks. That covers strip-out, first-fix plumbing and electrics, unit installation, worktop templating and fitting, tiling, second-fix, and snagging. If the kitchen is part of a larger extension or involves wall removal, the kitchen install happens in the final 2–3 weeks once the new space is plastered and dry.",
        },
        {
          question: "Can you fit a kitchen I have already purchased?",
          answer:
            "Yes. We regularly fit kitchens from Howdens, Wickes, IKEA, Wren, Magnet, and bespoke manufacturers. We review your kitchen plan and delivery schedule before starting, and coordinate so units arrive when we are ready to install. If you have not purchased yet, we can advise on suppliers that offer good value at your budget level.",
        },
        {
          question: "Do I need to move out during a kitchen fitting?",
          answer:
            "No. We set up a temporary kitchen area — usually in your living room or utility room — with your kettle, microwave, and a temporary water supply for washing up. We keep the work area contained and leave the site tidy at the end of each day. Most clients stay at home throughout.",
        },
        {
          question: "What worktop materials do you recommend?",
          answer:
            "Quartz (Silestone, Caesarstone, Compac) is the most popular choice — durable, low-maintenance, and available in a wide range of colours. Granite offers natural stone with excellent heat resistance. Laminate has improved significantly and delivers great value at lower budgets. We template all worktops on-site once units are levelled to ensure a perfect fit.",
        },
        {
          question: "Can you remove a wall to create an open-plan kitchen?",
          answer:
            "Yes. If the wall is load-bearing, we install an RSJ steel beam — sized by our structural engineer — to carry the load above. This is one of the most popular kitchen upgrades we carry out, and it completely transforms the feel of the ground floor. Building control sign-off is included in the quotation.",
        },
      ]}
    />
  );
}
