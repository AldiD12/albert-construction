import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const locationData = getLocationBySlug("hackney")!;

export const metadata: Metadata = {
  title: "Builders in Hackney | Extensions, Lofts & Renovations | Albert Construction",
  description:
    "Local builders in Hackney (E8, E9) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/locations/hackney",
  },
  openGraph: {
    title: "Builders in Hackney | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Local builders in Hackney (E8, E9) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
    url: "https://albertconstructionltd.co.uk/locations/hackney",
  },
  twitter: {
    title: "Builders in Hackney | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Local builders in Hackney (E8, E9) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  },
};

export default function HackneyPage() {
  return (
    <LocationPage
      location={locationData.name}
      locationData={locationData}
      description="Hackney (E8 and E9) has seen sustained property investment over the past decade, and the conversion and extension work Albert Construction carries out there reflects how much potential exists in the housing stock. Victorian terraces line the streets around London Fields, Hackney Wick, and Victoria Park — properties where a rear extension transforms a narrow kitchen into a full kitchen-dining-living space with garden access, and a rear dormer loft conversion creates a bedroom-and-bathroom suite that many homeowners would otherwise have to move for. Hackney also has a significant stock of Georgian townhouses in the Stokey and De Beauvoir areas — larger properties where planning sensitivity matters. Stoke Newington and parts of De Beauvoir are conservation areas, and any external alterations require careful design and council approval. We handle the full application process and have experience producing drawings and statements that satisfy Hackney Council's design officers. Commercial work is also something Albert Construction does in Hackney — the area has a high concentration of converted railway arches, warehouse units, and studio spaces that require fit-out work ranging from mezzanine installations to full commercial kitchen builds. Whether residential or commercial, our approach is the same: every trade under one roof, fixed price from day one, and no handoffs to subcontractors mid-project."
      heroImage="/images/exterior_extension_rear_garden_artificial_grass.webp"
      galleryImages={[
        { src: "/images/interior_kitchen_dark_openplan_wide.webp", alt: "Open-plan kitchen extension in Hackney" },
        { src: "/images/interior_loft_skylight_wood_floor.webp", alt: "Loft conversion in Hackney" },
        { src: "/images/interior_bathroom_round_mirror_tiles.webp", alt: "Bathroom renovation in Hackney" },
      ]}
    />
  );
}
