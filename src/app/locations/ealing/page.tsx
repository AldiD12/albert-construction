import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const locationData = getLocationBySlug("ealing")!;

export const metadata: Metadata = {
  title: "Builders in Ealing | Extensions, Lofts & Renovations | Albert Construction",
  description:
    "Local builders in Ealing (W5, W13) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/locations/ealing",
  },
  openGraph: {
    title: "Builders in Ealing | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Local builders in Ealing (W5, W13) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
    url: "https://albertconstructionltd.co.uk/locations/ealing",
  },
  twitter: {
    title: "Builders in Ealing | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Local builders in Ealing (W5, W13) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  },
};

export default function EalingPage() {
  return (
    <LocationPage
      location={locationData.name}
      locationData={locationData}
      description="Ealing — W5 and W13 — is one of West London's most desirable areas, and its housing reflects the ambition people bring to it. Large Edwardian semis dominate the streets around Ealing Broadway and Pitzhanger Manor; Victorian terraces run through West Ealing; 1930s detached and semi-detached homes fill the quieter streets toward Hanwell and Northolt Road. Albert Construction covers the whole area for house extensions, loft conversions, kitchen renovations, and bathroom refits. The Edwardian semis that characterise much of W5 have excellent extension potential — wide rear gardens, solid brick construction, and room to go double-storey without dominating the rear elevation. We regularly carry out rear extensions combined with kitchen knockthroughs on these properties, and a hip-to-gable loft conversion on an Edwardian semi can add a bedroom, dressing room, and full bathroom at the top of the house. Ealing has a number of conservation areas — particularly around the older streets north of the Broadway and near Walpole Park — where the council applies tighter design rules. We manage the full planning process for these applications and have a track record of approvals. For all other projects, permitted development covers most standard extensions and rear dormers. Everything is managed in-house: structural engineer, building control, every trade from foundations to final coat."
      heroImage="/images/exterior_extension_rear_garden_wide.webp"
      galleryImages={[
        { src: "/images/exterior_extension_rear_house_complete.webp", alt: "Rear extension completed in Ealing" },
        { src: "/images/interior_kitchen_dark_openplan_wide.webp", alt: "Open-plan kitchen extension in Ealing" },
        { src: "/images/interior_loft_velux_skylights_white.webp", alt: "Loft conversion in Ealing" },
      ]}
    />
  );
}
