import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { NearbyLocations } from "@/components/NearbyLocations";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import type { LocationData } from "@/data/locations";

interface LocationPageProps {
  location: string;
  description: string;
  heroImage: string;
  galleryImages: { src: string; alt: string }[];
  locationData: LocationData;
}

const services = [
  {
    title: "Extensions",
    href: "/services/extensions",
    description: "Single and double storey extensions that transform your living space.",
    image: "/images/exterior_extension_rear_house_complete.webp",
  },
  {
    title: "Loft Conversions",
    href: "/services/loft-conversions",
    description: "Dormer, hip-to-gable, and mansard conversions to maximise your home.",
    image: "/images/interior_loft_velux_skylights_white.webp",
  },
  {
    title: "Bathrooms",
    href: "/services/bathroom-renovations",
    description: "Complete bathroom renovations from design through to final finish.",
    image: "/images/interior_bathroom_freestanding_bath.webp",
  },
  {
    title: "Kitchens",
    href: "/services/kitchen-fitting",
    description: "Full kitchen fitting including plumbing, electrics, and tiling.",
    image: "/images/interior_kitchen_dark_openplan_wide.webp",
  },
];

const trustBadges = [
  {
    title: "Ltd Company",
    description: "Companies House registered limited company. Full accountability and transparency.",
  },
  {
    title: "£10M Insurance",
    description: "£10 million public liability insurance. Complete peace of mind for every project.",
  },
  {
    title: "Checkatrade 9.7/10",
    description: "29 verified reviews. Vetted and trusted by homeowners across London.",
  },
  {
    title: "2-Year Guarantee",
    description: "Every project backed by our comprehensive 2-year workmanship guarantee.",
  },
  {
    title: "20+ years experience",
    description: "Over two decades of delivering extensions, lofts, and renovations to the highest standard.",
  },
];

const locationFaqs: Record<string, { question: string; answer: string }[]> = {
  "St Albans": [
    {
      question: "Can I extend my home in a St Albans conservation area?",
      answer: "Yes, but permitted development rights are often restricted in St Albans conservation areas like the city centre and Marshalswick. You will likely need a full planning application, and materials must match the existing property — for example, matching brickwork on a Victorian terrace. We have experience working within these restrictions and handle the entire planning process for you.",
    },
    {
      question: "What type of loft conversion suits a 1930s semi in St Albans?",
      answer: "A rear dormer is the most popular choice for 1930s semis in St Albans. It creates full standing headroom and enough space for a double bedroom with en-suite. Many St Albans semis qualify under permitted development so no planning permission is needed, but we check this during your free site survey.",
    },
    {
      question: "How much does a house extension cost in St Albans?",
      answer: "A single-storey rear extension in St Albans typically costs between £35,000 and £55,000 depending on size and specification. Costs can be slightly higher than surrounding areas because many St Albans properties require heritage-sensitive materials to match existing brickwork and rooflines. We provide a detailed fixed-price quotation after your free site survey — the price we quote is the price you pay.",
    },
    {
      question: "Do you work on Georgian and Victorian properties in St Albans?",
      answer: "Yes. We regularly work on older properties around St Albans including Georgian townhouses near the cathedral and Victorian terraces in the city centre. These properties often need underpinning, specialist brickwork, and careful structural engineering — all of which our team handles in-house.",
    },
  ],
  "Watford": [
    {
      question: "What challenges do Victorian terraces in Watford present for extensions?",
      answer: "Victorian terraces in areas like Nascot Wood and West Watford often have narrow side returns and shallow rear gardens. A side-return extension or rear infill can add significant kitchen and dining space without eating into your garden. We also commonly remove the internal wall between the front and back reception rooms to create an open-plan layout with structural steelwork.",
    },
    {
      question: "Do I need a party wall agreement for an extension in Watford?",
      answer: "If your extension is being built on or near a shared boundary — which covers most terraced and semi-detached houses in Watford — yes, you will need a party wall agreement with your neighbour. We guide you through the process and can recommend experienced party wall surveyors in the Watford area.",
    },
    {
      question: "How long does a full house renovation take in Watford?",
      answer: "A full house renovation including kitchen, bathroom, and extension typically takes 16-22 weeks. For a standalone kitchen or bathroom renovation, expect 2-4 weeks. We provide a detailed project timeline in your quotation and keep you updated with regular progress photos.",
    },
    {
      question: "Can you convert a loft on a post-war semi in Watford?",
      answer: "Yes. Post-war semis — common across Watford estates built in the 1950s-1970s — usually have enough ridge height for a dormer loft conversion. We assess the existing roof structure, floor joists, and head height during your free site survey to confirm what is possible.",
    },
  ],
  "Edgware": [
    {
      question: "Can I build a double-storey extension on my Edgware home?",
      answer: "Many detached and semi-detached homes in Edgware have the plot size and garden depth to support a double-storey rear extension. Permitted development allows certain double-storey extensions without planning permission, but the rear wall cannot extend more than 3 metres and must be at least 7 metres from the rear boundary. We check all of this during your free site survey.",
    },
    {
      question: "What if my Edgware property has narrow side access?",
      answer: "Narrow side access is common in Edgware, especially on properties around Burnt Oak and Broadfields. We plan deliveries and skip placement carefully to avoid disrupting neighbours. For very tight access, we use smaller equipment and stage materials in phases. This is something we assess and plan for before work starts.",
    },
    {
      question: "How much does a bathroom renovation cost in Edgware?",
      answer: "A full bathroom renovation in Edgware typically costs between £5,000 and £15,000 depending on the size and specification. This includes strip-out, plumbing, tiling, fixture installation, and finishing. Premium finishes with underfloor heating cost more. We provide a fixed-price quotation with no hidden costs.",
    },
    {
      question: "Do you handle all trades for a renovation in Edgware?",
      answer: "Yes. Our in-house team handles every trade — plumbing, electrics, plastering, tiling, carpentry, and decorating. You deal with one team from start to finish. No subcontractors turning up unannounced.",
    },
  ],
  "Stanmore": [
    {
      question: "Are double-storey extensions popular in Stanmore?",
      answer: "Very. Stanmore has a high proportion of larger detached and semi-detached family homes where a double-storey extension adds serious value — often £100,000+ in property value for a £60,000-75,000 build cost. Many homeowners in Stanmore combine a ground-floor kitchen extension with an additional bedroom and en-suite above.",
    },
    {
      question: "Can you convert the loft on a detached house in Stanmore?",
      answer: "Yes. Detached homes in Stanmore — particularly the larger executive-style properties around Bentley Priory and Canons Park — often have excellent loft conversion potential. Hip-to-gable conversions are popular as they maximise usable space by squaring off the sloping roof ends. We assess feasibility during your free site survey.",
    },
    {
      question: "How do you manage larger renovation projects in Stanmore?",
      answer: "For larger projects — say a full extension plus loft conversion plus kitchen and bathrooms — Our team personally manages the programme of works, sequencing each trade so there is no downtime. We provide a detailed project plan before starting and keep you updated with weekly progress reports and photos.",
    },
    {
      question: "Do I need planning permission for a rear extension in Stanmore?",
      answer: "Many single-storey rear extensions in Stanmore fall under permitted development rights. However, if your home is in a conservation area or if the extension exceeds the size limits (4m for detached, 3m for semi-detached), a full planning application is needed. We handle all of this for you.",
    },
  ],
  "Barnet": [
    {
      question: "Are there planning restrictions for extensions in Barnet conservation areas?",
      answer: "Yes. Parts of Barnet — including Monken Hadley, Chipping Barnet High Street, and areas around the Old Courthouse — are conservation areas where permitted development rights are removed or restricted. You will need a full planning application, and the design must respect the character of the area. We have experience navigating Barnet Council's planning requirements.",
    },
    {
      question: "What type of extension works best on an Edwardian semi in Barnet?",
      answer: "Edwardian semis in Barnet typically suit a rear extension — either single or double storey — that opens up the kitchen-dining area into the garden. Many homeowners also combine this with a side-return extension to maximise the ground floor. Structural steelwork removes the internal walls while maintaining the property's character.",
    },
    {
      question: "How much does a loft conversion cost in Barnet?",
      answer: "A dormer loft conversion in Barnet typically costs between £38,000 and £55,000. Hip-to-gable conversions on semi-detached homes cost slightly more at £45,000 to £65,000. The exact price depends on the roof structure, access, and your specification. We provide a detailed fixed-price quotation after your free site survey.",
    },
    {
      question: "Do you work on 1930s detached properties in Barnet?",
      answer: "Yes. 1930s detached homes are one of the most common property types we work on in Barnet. They typically have good-sized plots that allow for generous rear and side extensions, and the original roof structure usually accommodates a loft conversion well.",
    },
  ],
  "Harrow": [
    {
      question: "Does Harrow's hilly terrain affect extension foundations?",
      answer: "It can. Properties on sloping ground — particularly around Harrow on the Hill — sometimes need deeper foundations or stepped footings to reach stable ground. Mature tree roots near the building line can also affect foundation depth. Our structural engineer assesses ground conditions during your site survey and designs the foundations accordingly.",
    },
    {
      question: "Can I extend a Victorian terrace near Harrow town centre?",
      answer: "Yes. Victorian terraces around Harrow town centre often benefit from rear extensions and loft conversions. Side-return infills are popular for opening up narrow kitchen layouts. You will likely need a party wall agreement with your neighbours, which we guide you through.",
    },
    {
      question: "How long does a kitchen fitting take in Harrow?",
      answer: "A typical kitchen fitting takes 2-3 weeks including strip-out, plumbing, electrics, unit installation, worktop fitting, tiling, and finishing. If the kitchen is part of a larger extension project, we schedule the kitchen install towards the end so the new space is watertight and plastered first.",
    },
    {
      question: "What is included in your fixed-price quotation?",
      answer: "Everything. Our quotation covers all materials, labour, structural engineering fees, building control fees, skip hire, and scaffolding. There are no hidden extras. If something unexpected arises — like discovering asbestos or rotten joists — we discuss it with you before any additional costs are agreed.",
    },
  ],
  "Wembley": [
    {
      question: "Do I need a party wall agreement for building work in Wembley?",
      answer: "Almost certainly. Wembley is predominantly terraced and semi-detached housing, which means most extensions and loft conversions will affect a shared wall or boundary. A party wall agreement is a legal requirement under the Party Wall Act 1996. We guide you through the notice process and can recommend local party wall surveyors.",
    },
    {
      question: "What type of extensions work on 1930s semis in Wembley?",
      answer: "The most popular option for 1930s semis in Wembley is a single-storey rear extension that opens up the kitchen-dining area — typically 3-4 metres deep. Many homeowners also convert the loft at the same time, creating a new bedroom and en-suite above. Combining both projects saves on scaffolding and overall build time.",
    },
    {
      question: "Can you renovate a flat in Wembley?",
      answer: "Yes. We have recently completed a full flat renovation in HA9 including plastering, tiling, kitchen, bathroom, electrical and plumbing work. Flat renovations require careful coordination of trades to minimise disruption to neighbours. We manage the entire process and keep the site tidy throughout.",
    },
    {
      question: "How much does an extension cost in Wembley?",
      answer: "A single-storey rear extension in Wembley typically costs between £30,000 and £48,000 depending on size and specification. Double-storey extensions range from £45,000 to £70,000. We provide free site surveys and fixed-price quotations — the price we quote is the price you pay.",
    },
  ],
  "Wood Green": [
    {
      question: "What adds the most value to a Victorian terrace in Wood Green?",
      answer: "A rear extension combined with a loft conversion typically adds the most value per pound spent. Victorian terraces in Wood Green often have untapped potential — opening up the ground floor into a modern kitchen-diner and adding a loft bedroom with en-suite can add significant value. Many of our Wood Green clients do both projects together to save on costs.",
    },
    {
      question: "Are there planning restrictions in the Noel Park Conservation Area?",
      answer: "Yes. If your property is within the Noel Park Conservation Area in Wood Green, permitted development rights are restricted. Extensions and alterations visible from the street may need planning permission, and designs must respect the original architecture. We have experience working within these restrictions and handle all planning applications.",
    },
    {
      question: "Can you convert a loft on a Victorian terrace in Wood Green?",
      answer: "Yes. Most Victorian terraces in Wood Green have enough ridge height for a rear dormer loft conversion, which creates a full bedroom with en-suite bathroom. Many qualify under permitted development so no planning permission is needed — unless you are in a conservation area. We confirm this during your free site survey.",
    },
    {
      question: "Do you work on ex-council properties in Wood Green?",
      answer: "Yes. We regularly work on ex-council flats and houses across Wood Green. Common projects include full bathroom and kitchen renovations, plastering, and decorating. Our team handles every trade in-house so you get consistent quality throughout.",
    },
  ],
  "Finchley": [
    {
      question: "What type of loft conversion suits a 1930s semi in Finchley?",
      answer: "A hip-to-gable conversion with a rear dormer is the most popular choice for 1930s semis in Finchley. It squares off the sloping side of the roof and adds a box dormer at the rear, creating a large master bedroom with en-suite. Many qualify under permitted development — no planning permission needed — and we confirm this during your free site survey.",
    },
    {
      question: "Can I build a double-storey extension on a Finchley Victorian terrace?",
      answer: "Yes. Victorian terraces in East Finchley and North Finchley often have rear gardens that accommodate a double-storey extension. The ground floor adds kitchen-dining space and the first floor adds a bedroom — typically more cost-effective than doing two single-storey projects at different times. We handle structural engineer calculations, party wall notices, and building control as standard.",
    },
    {
      question: "Do I need a party wall agreement for building work in Finchley?",
      answer: "For most terraced and semi-detached properties in Finchley, yes. Any extension or loft conversion that involves work on or near a shared wall or boundary requires a party wall notice to neighbours under the Party Wall Act 1996. We explain the process clearly and manage all notices and surveyor communications on your behalf.",
    },
    {
      question: "How much does a house extension cost in Finchley?",
      answer: "A single-storey rear extension in Finchley typically costs £35,000–£52,000. A double-storey extension ranges from £52,000–£75,000. The exact price depends on the size, ground conditions, and your specification. Our quotation is fully fixed-price and itemised — the number we give you is the number you pay.",
    },
  ],
  "Enfield": [
    {
      question: "Are there planning restrictions for extensions in Enfield Town?",
      answer: "Yes. Many properties around Enfield Town, Chase Side, and Forty Hill have Article 4 directions in place, which remove permitted development rights for roof alterations and external changes. A full planning application is required for these properties. We advise on this during your free consultation and manage the submission if needed.",
    },
    {
      question: "Can I convert a post-war semi in Enfield into a larger home?",
      answer: "Absolutely. Post-war semis across Bush Hill Park, Southbury, and eastern EN3 typically have generous rear gardens and enough ridge height for a dormer loft conversion. A single or double-storey rear extension combined with a loft conversion can add two or three rooms without touching the front of the property. Most qualify under permitted development.",
    },
    {
      question: "Do you handle planning applications with Enfield Council?",
      answer: "Yes. For properties where permitted development rights are restricted — particularly in and around Enfield Town — we manage the full planning application including drawings, design-and-access statements, and communication with the council's planning officers. You do not need to deal with the council directly.",
    },
    {
      question: "How much does a loft conversion cost in Enfield?",
      answer: "A dormer loft conversion in Enfield typically costs £38,000–£55,000. A hip-to-gable with rear dormer on a semi-detached property ranges from £45,000–£65,000. Prices depend on the roof structure, access, and your finish specification. We provide a fixed-price quotation after your free site survey.",
    },
  ],
  "Islington": [
    {
      question: "Can I extend my Victorian terrace in Islington?",
      answer: "Yes, but planning is critical. A large proportion of Islington is covered by conservation area designations — Barnsbury, Canonbury, Highbury, and parts of Holloway all have restricted permitted development. Most extensions and loft alterations need a full planning application with materials and design approved by Islington Council. We have extensive experience with Islington's planning requirements and manage the full process.",
    },
    {
      question: "How much does a loft conversion cost in Islington?",
      answer: "A rear dormer loft conversion in Islington typically costs £42,000–£60,000 — slightly higher than outer London due to the complexity of working in conservation areas and the material specifications often required. A mansard conversion on a Victorian terrace in Islington ranges from £55,000–£80,000. Our quotation is fixed-price and covers all planning, structural, and build costs.",
    },
    {
      question: "Do you work on Georgian townhouses in Islington?",
      answer: "Yes. Georgian townhouses in Barnsbury, Canonbury, and De Beauvoir are among the most architecturally sensitive properties we work on. We use lime mortar, period-appropriate brickwork, and traditional detailing where required by the council. All structural alterations — including basement extensions and internal wall removals — are engineered in-house.",
    },
    {
      question: "Can you fit out a flat or commercial space in Islington?",
      answer: "Yes. We carry out full flat refurbishments across N1 and N7 — new kitchens, bathrooms, replastering, flooring, and decoration under one contract. We also undertake commercial fit-outs in the area, including office reconfigurations and hospitality builds in Islington's growing Angel and Upper Street corridor.",
    },
  ],
  "Ealing": [
    {
      question: "What type of extension works best on an Edwardian semi in Ealing?",
      answer: "Double-storey rear extensions are extremely popular on Edwardian semis in W5 and W13 — the rear gardens are typically long enough, the structure is solid, and doing two storeys at once is significantly more cost-effective than two separate projects. A double-storey adds a larger kitchen below and an additional bedroom above. We handle structural calculations, party wall notices, and building control as standard.",
    },
    {
      question: "Are there conservation area restrictions in Ealing?",
      answer: "Yes. Streets around Walpole Park, Pitzhanger Manor, and parts of north Ealing Broadway have conservation area status. In these areas, external alterations including extensions and roof changes need full planning consent rather than permitted development. We manage Ealing Council planning applications and have a track record of approvals in sensitive areas.",
    },
    {
      question: "How much does a loft conversion cost in Ealing?",
      answer: "A rear dormer loft conversion in Ealing typically costs £38,000–£55,000. A hip-to-gable with rear dormer on an Edwardian semi ranges from £45,000–£65,000. The exact price depends on the roof structure, access, and your finish specification. We provide a fully itemised fixed-price quotation after your free site survey.",
    },
    {
      question: "Do you work on 1930s detached homes in Ealing?",
      answer: "Yes. 1930s detached homes in the quieter streets around W13 and towards Hanwell are excellent candidates for extensions. The plots are wide, gardens are usually generous, and there is often room for a double-storey rear extension without dominating the rear elevation. Many qualify under permitted development.",
    },
  ],
  "Acton": [
    {
      question: "What building work suits Victorian terraces in Acton?",
      answer: "Rear extensions and rear dormer loft conversions are the most practical and valuable works for Victorian terraces in W3. A rear extension opens up the tight kitchen layout and connects the ground floor to the garden. A dormer loft creates a bedroom with en-suite at the top of the house. Both are frequently done together — saving on scaffolding costs and total build time.",
    },
    {
      question: "Do I need a party wall agreement for building work in Acton?",
      answer: "For the terraced properties that make up most of Acton, yes — both neighbouring properties will need to receive party wall notices before work on a shared wall or boundary begins. We serve the notices, explain the process to all parties, and manage any surveyor involvement. It is included as part of how we run every project.",
    },
    {
      question: "Can you renovate a converted flat in Acton?",
      answer: "Yes. We regularly carry out full interior refurbishments of converted flats across W3 — new kitchen, new bathroom, replastering, flooring, and full decoration under one contract. Flat renovations require careful coordination to avoid disrupting other residents in the building, which our team manages as standard.",
    },
    {
      question: "How much does a rear extension cost in Acton?",
      answer: "A single-storey rear extension in Acton typically costs £32,000–£48,000 depending on depth and specification. If you combine it with a dormer loft conversion at the same time, the combined cost is usually £65,000–£85,000 — significantly less than the two projects done separately. We provide a fixed-price quotation with no hidden costs.",
    },
  ],
  "Hammersmith": [
    {
      question: "Can I extend my property in a Hammersmith conservation area?",
      answer: "Yes, but you will need full planning consent rather than permitted development for most changes. Brook Green, Ravenscourt Park, and several riverside streets in W6 have conservation area designations where even replacing windows requires approval. We manage Hammersmith & Fulham Council applications and are experienced working within their design requirements for materials, rooflines, and external detailing.",
    },
    {
      question: "Do you carry out commercial fit-outs in Hammersmith?",
      answer: "Yes. Hammersmith has a strong commercial property market and we carry out office fit-outs, restaurant refurbishments, and retail unit builds across W6 and W14. We work outside normal business hours where needed to minimise disruption, and all commercial work is managed in-house with a fixed price from day one.",
    },
    {
      question: "How much does a loft conversion cost in Hammersmith?",
      answer: "A rear dormer loft conversion in Hammersmith typically costs £42,000–£60,000. Conservation area properties may cost slightly more due to material requirements and the planning process. We include all costs — planning, structural engineer, building control, and build — in a single fixed-price quotation.",
    },
    {
      question: "Can you renovate a mansion flat in Hammersmith?",
      answer: "Yes. Mansion flats and period conversion flats are common across W6 and W14, and we carry out complete interior refurbishments — new kitchen, bathroom, replastering, flooring, and full decoration. We coordinate with building management where required and work within the hours allowed by the lease.",
    },
  ],
  "Hackney": [
    {
      question: "What adds the most value to a Victorian terrace in Hackney?",
      answer: "A rear extension that opens up the kitchen-dining area is typically the single highest-value improvement for Victorian terraces in E8 and E9. Combined with a rear dormer loft conversion adding a bedroom and en-suite, the two projects together can add substantial value — often significantly more than the build cost in Hackney's rising market. Many qualify under permitted development.",
    },
    {
      question: "Are there planning restrictions in Stoke Newington or De Beauvoir?",
      answer: "Yes. Stoke Newington and De Beauvoir are both conservation areas where Hackney Council restricts permitted development. External alterations, roof changes, and extensions in these areas require full planning consent. We manage Hackney Council applications and have experience working within their conservation area design guidance.",
    },
    {
      question: "Do you carry out commercial fit-outs in Hackney?",
      answer: "Yes. Hackney has a large stock of converted railway arches, warehouse spaces, and studio units that require commercial fit-out work — mezzanine installations, commercial kitchen builds, bar fits, and office configurations. We handle all trades in-house and provide fixed-price quotations for commercial projects of all sizes.",
    },
    {
      question: "How much does a house extension cost in Hackney?",
      answer: "A single-storey rear extension in Hackney typically costs £35,000–£55,000. The exact price depends on depth, ground conditions, and finishes. Conservation area properties may need specific materials that affect cost. Our quotation is fixed-price and itemised — no hidden costs, no provisional sums.",
    },
  ],
  "Stratford": [
    {
      question: "Can I extend a Victorian terrace in Stratford or Forest Gate?",
      answer: "Yes. Victorian terraces in E15 around Forest Gate and Maryland are well-suited to rear extensions and dormer loft conversions. The plots are tight but the structures are solid. Most qualify under permitted development, though party wall notices are required for work on shared walls. We handle the full process from notices to building control sign-off.",
    },
    {
      question: "Do you carry out flat renovations in Stratford?",
      answer: "Yes. We regularly carry out complete flat refurbishments across E15 and E20 — new kitchen, new bathroom, replastering throughout, new flooring, and full decoration managed under a single contract. Flat renovations near Westfield and the Olympic Park are a growing part of our work in this area.",
    },
    {
      question: "Do you do commercial fit-outs in Stratford?",
      answer: "Yes. Stratford's rapid development around the Olympic Park and Westfield has created strong demand for commercial fit-outs — café and restaurant builds, office reconfigurations, and retail unit refurbishments. We provide fixed-price quotations and manage every trade in-house.",
    },
    {
      question: "How much does a loft conversion cost in Stratford?",
      answer: "A rear dormer loft conversion in Stratford typically costs £36,000–£52,000. The exact price depends on the roof structure, access, and your finish specification. We provide a fully itemised fixed-price quotation after your free site survey — the price we quote is the price you pay.",
    },
  ],
  "Ilford": [
    {
      question: "What type of loft conversion suits a 1930s semi in Ilford?",
      answer: "A hip-to-gable with rear dormer is the most popular choice for Ilford's wide-fronted 1930s semis. It converts the sloping hip end to a vertical gable wall and adds a rear dormer, creating a large master bedroom suite with en-suite bathroom. Many qualify under permitted development — no planning application needed. We confirm feasibility during your free site survey.",
    },
    {
      question: "Can I build a double-storey extension on my Ilford property?",
      answer: "Yes. Many properties in IG1, IG2, and IG3 have generous rear gardens and detached or semi-detached structures that suit double-storey extensions well. A double-storey adds both a larger kitchen at ground level and an additional bedroom above — and doing both floors at once is significantly cheaper than two separate projects. Most qualify under permitted development.",
    },
    {
      question: "How much does a house extension cost in Ilford?",
      answer: "A single-storey rear extension in Ilford typically costs £32,000–£50,000. A double-storey extension ranges from £50,000–£72,000. Ilford's larger plot sizes mean these are often generous extensions — and the value uplift reflects it. Our quotation is fixed-price and includes all structural, building control, and build costs.",
    },
    {
      question: "Do you handle party wall notices for Ilford projects?",
      answer: "Yes. For semi-detached and terraced properties — which make up most of Ilford — party wall notices are required before work on a shared boundary or wall begins. We serve the correct notices, explain the process to your neighbours, and manage any surveyor involvement. This is included as standard in how we run every project.",
    },
  ],
  "Brixton": [
    {
      question: "Are there conservation area restrictions in Brixton?",
      answer: "Yes. Several streets in SW2 and SW9 fall within Lambeth Council conservation areas where permitted development rights are restricted. Extensions, roof alterations, and external changes in these streets need full planning consent. We manage Lambeth Council planning applications and have experience producing designs that satisfy their conservation area requirements.",
    },
    {
      question: "What type of extension works best on a Victorian terrace in Brixton?",
      answer: "A rear extension is the most practical and highest-value improvement for Victorian terraces in Brixton — opening up the kitchen, removing the rear wall, and connecting the ground floor to the garden. Many also have enough ridge height for a dormer loft conversion adding a bedroom with en-suite. Doing both together saves on scaffolding and total cost.",
    },
    {
      question: "Do you carry out commercial fit-outs in Brixton?",
      answer: "Yes. Brixton's hospitality and food scene creates strong demand for commercial fit-outs — kitchen builds, bar installations, restaurant and café fits. We work in-house across all trades and provide fixed-price quotations. We also work outside normal hours where needed to fit around trading schedules.",
    },
    {
      question: "How much does a bathroom renovation cost in Brixton?",
      answer: "A full bathroom renovation in Brixton typically costs £6,000–£14,000 depending on size and specification. This includes strip-out, waterproofing, tiling, plumbing, fixtures, and finishing. Our quotation is fixed-price and itemised — no surprises when the invoice arrives.",
    },
  ],
  "Croydon": [
    {
      question: "What type of loft conversion suits a 1930s semi in Croydon?",
      answer: "A hip-to-gable with rear dormer is the most popular choice for Croydon's 1930s semis — particularly in Norbury, Thornton Heath, and Sanderstead. It maximises the usable loft area and creates a proper master suite at the top of the house. Many qualify under permitted development, and Croydon's larger plots mean there is usually good access for materials and scaffold.",
    },
    {
      question: "Can I build a double-storey extension in Croydon?",
      answer: "Yes. Many CR0 and CR7 properties have the rear garden depth for a double-storey extension without coming close to the rear boundary limits. A double-storey adds a larger kitchen below and an additional bedroom above — and combining both floors in one project is significantly cheaper than two separate builds. Most qualify under permitted development.",
    },
    {
      question: "Do you carry out commercial fit-outs near East Croydon?",
      answer: "Yes. Croydon town centre and the East Croydon station area have strong commercial demand and we carry out office fit-outs, retail unit refurbishments, and hospitality builds in the area. All work is managed in-house, fixed-price from quotation.",
    },
    {
      question: "How much does a house extension cost in Croydon?",
      answer: "A single-storey rear extension in Croydon typically costs £30,000–£48,000 — slightly more competitive pricing than inner London due to plot sizes and access. A double-storey ranges from £48,000–£70,000. We provide a fixed-price, itemised quotation after your free site survey.",
    },
  ],
  "Lewisham": [
    {
      question: "Are there planning restrictions in Blackheath or Hither Green?",
      answer: "Blackheath has significant conservation area coverage where permitted development is restricted for roof alterations and extensions. Hither Green and Lee are generally more straightforward for permitted development. We check the planning status of your specific property during the free site survey and advise on whether a planning application is needed before any work starts.",
    },
    {
      question: "What type of extension suits Victorian terraces in Lewisham?",
      answer: "Rear extensions are the most common and impactful improvement for Victorian terraces in SE13 and SE6 — opening up the kitchen and connecting the ground floor to the garden. The same properties usually have enough roof pitch for a rear dormer loft conversion. Combining both projects saves significantly on scaffolding and reduces total disruption.",
    },
    {
      question: "How much does a loft conversion cost in Lewisham?",
      answer: "A rear dormer loft conversion in Lewisham typically costs £36,000–£52,000. A hip-to-gable conversion on an Edwardian semi ranges from £44,000–£62,000. The exact price depends on the roof structure, access, and specification. Our quotation is fixed-price and itemised — the number we quote is the number you pay.",
    },
    {
      question: "Do you work on Edwardian semis in Catford?",
      answer: "Yes. Edwardian semis in Catford and Bellingham are among the best candidates for double-storey extensions in South East London — wide-fronted, solid brick, and with rear gardens that typically accommodate a 3–4 metre extension without difficulty. Many qualify under permitted development and the value uplift is strong in this part of SE London.",
    },
  ],
  "Camden": [
    {
      question: "Can I extend my home in a Camden conservation area?",
      answer: "Yes, but virtually every significant alteration in Camden requires full planning consent — the borough has one of the highest proportions of conservation area coverage in London. Permitted development rights are removed across most of Barnsbury, Canonbury, Primrose Hill, and the mews streets around NW1. We manage the full planning process including pre-application advice, heritage statements, and submission to Camden Council.",
    },
    {
      question: "Do you work with lime mortar and period materials in Camden?",
      answer: "Yes. Camden's planning officers routinely require lime mortar for repointing, lime-based plaster for internal finishes, and traditional brickwork for extensions on period properties. Our team is experienced with these materials and understands why they matter — not just to satisfy the planners, but because older solid-wall buildings genuinely behave differently to modern construction.",
    },
    {
      question: "Can you reconfigure the basement or rear reception of a Georgian terrace in Camden?",
      answer: "Yes. This is one of the most common projects we carry out in NW1 — opening up Victorian or Georgian rear reception rooms to create a proper kitchen-diner, often extending into a small rear addition. RSJ steel beam installation, structural calculations, and building control sign-off are all managed in-house. For listed properties we also manage the listed building consent application.",
    },
    {
      question: "How much does a house extension cost in Camden?",
      answer: "Extensions in Camden typically cost more than equivalent work in outer London — period materials, planning complexity, and conservation area requirements all add to the build cost. A rear extension on a Victorian terrace in NW1 or NW5 typically costs £45,000–£68,000 for a single storey. Our quotation is fully fixed-price and covers all planning, structural, and build costs.",
    },
  ],
};

function getLocationFaqs(location: string) {
  return locationFaqs[location] || [
    {
      question: `How much does a house extension cost in ${location}?`,
      answer: `Extension costs in ${location} vary depending on size, complexity, and specification. A single-storey rear extension typically ranges from £30,000 to £50,000, while double-storey extensions range from £45,000 to £75,000. We provide free site surveys and detailed fixed-price quotations with no hidden costs.`,
    },
    {
      question: `Do I need planning permission for building work in ${location}?`,
      answer: `Many extensions and loft conversions in ${location} fall under permitted development rights and do not require planning permission. However, this depends on the size, position, and your property type. We assess planning requirements during your free consultation and handle all applications if needed.`,
    },
    {
      question: `How long does a typical project take in ${location}?`,
      answer: `A single-storey extension typically takes 10-14 weeks from foundations to completion. Loft conversions usually take 8-12 weeks. Bathroom renovations take 2-4 weeks. We provide a detailed project timeline in your quotation and keep you updated throughout.`,
    },
  ];
}

export function LocationPage({ location, description, heroImage, galleryImages, locationData }: LocationPageProps) {
  const faqs = getLocationFaqs(location);

  const housingTypesText = locationData.housingTypes.length > 1
    ? `${locationData.housingTypes.slice(0, -1).join(', ')} and ${locationData.housingTypes.slice(-1)}`
    : locationData.housingTypes[0];

  const landmarksText = locationData.landmarks.length > 1
    ? `${locationData.landmarks[0]} or ${locationData.landmarks[1]}`
    : locationData.landmarks[0];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <LocalBusinessSchema location={locationData} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Locations", href: "/locations" },
          { label: location },
        ]}
      />

      {/* Hero Section */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <div>
            <h1 className="font-headline text-[2.75rem] md:text-[3.5rem] leading-[1.1] tracking-tight font-black mb-6 text-primary">
              Builders in{" "}
              <span className="text-secondary italic">{location}</span>
            </h1>
            <p className="text-lg text-charcoal mb-4 leading-relaxed max-w-lg">
              {description}
            </p>
            <p className="text-base text-charcoal/80 mb-8 leading-relaxed max-w-lg">
              Operating locally across {location}, we have extensive experience extending and renovating{" "}
              {housingTypesText}. Whether your property is near {landmarksText}, we understand the local architecture perfectly.{" "}
              <span className="font-semibold">{locationData.localChallenge}</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contact"
                className="bg-secondary text-white font-label font-bold py-4 px-8 rounded-full text-center inline-flex items-center justify-center gap-2 transition-transform active:scale-95 hover:bg-secondary/90"
                aria-label={`Get a free quote for building work in ${location}`}
              >
                Get a Free Quote
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <a
                href="tel:07478606507"
                className="border-2 border-primary text-primary font-label font-bold py-4 px-8 rounded-full text-center inline-flex items-center justify-center gap-2 transition-colors hover:bg-primary hover:text-white"
                aria-label="Call Albert Construction on 07478 606 507"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call 07478 606 507
              </a>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <Image
              src={heroImage}
              alt={`Building project completed by Albert Construction in ${location}`}
              width={800}
              height={600}
              className="w-full aspect-[4/3] object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mb-20 md:mb-28">
        <div className="px-6 mb-10 max-w-7xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary tracking-tight">
            Our Services in {location}
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative rounded-lg overflow-hidden"
                aria-label={`View ${service.title} services in ${location}`}
              >
                <Image
                  src={service.image}
                  alt={`${service.title} in ${location} by Albert Construction`}
                  width={400}
                  height={530}
                  className="w-full aspect-[3/4] object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-primary p-5">
                  <h3 className="font-headline font-bold text-lg text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm font-label">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-surface-container-low py-20 md:py-28 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-12 tracking-tight text-center">
            Why {location} Homeowners Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustBadges.map((badge) => (
              <div
                key={badge.title}
                className="bg-white rounded-lg p-8 shadow-sm border border-outline-variant/20"
              >
                <h3 className="font-headline font-bold text-lg text-primary mb-3">
                  {badge.title}
                </h3>
                <p className="text-charcoal text-base leading-relaxed">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <h2 className="font-headline text-3xl md:text-4xl font-black text-primary tracking-tight">
              Our Work in {location}
            </h2>
            <Link
              href="/gallery"
              className="font-label font-bold text-secondary text-sm hover:underline underline-offset-4"
              aria-label="View all project gallery photos"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="rounded-lg overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="w-full aspect-[3/2] object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-12 tracking-tight text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white border border-outline-variant/20 rounded-lg overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-headline font-bold text-primary hover:text-secondary transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 ml-4 transition-transform group-open:rotate-180">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-charcoal text-base leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Locations */}
      <NearbyLocations nearbySlugs={locationData.nearby} />

      {/* CTA Section */}
      <section className="relative bg-primary py-20 md:py-28 mx-6 mb-20 md:mb-28 rounded-lg overflow-hidden">
        <div className="relative z-10 text-center px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
            Ready to Start Your Project in {location}?
          </h2>
          <p className="text-white/80 text-lg font-body mb-10 max-w-md mx-auto">
            Get a free site survey and fixed-price quotation. No obligation, no hidden costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-secondary text-white font-label font-bold py-4 px-10 rounded-full inline-block transition-transform active:scale-95 hover:bg-secondary/90"
              aria-label={`Get a free quote for your project in ${location}`}
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:07478606507"
              className="border-2 border-white text-white font-label font-bold py-4 px-10 rounded-full inline-block transition-colors hover:bg-white hover:text-primary"
              aria-label="Call Albert Construction on 07478 606 507"
            >
              Call 07478 606 507
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
