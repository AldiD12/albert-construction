import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const locationData = getLocationBySlug("camden")!;

export const metadata: Metadata = {
  title: "Builders in Camden | Extensions, Lofts & Renovations | Albert Construction",
  description:
    "Experienced builders in Camden (NW1, NW5) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/locations/camden",
  },
  openGraph: {
    title: "Builders in Camden | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Experienced builders in Camden (NW1, NW5) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
    url: "https://albertconstructionltd.co.uk/locations/camden",
  },
  twitter: {
    title: "Builders in Camden | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Experienced builders in Camden (NW1, NW5) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  },
};

export default function CamdenPage() {
  return (
    <LocationPage
      location={locationData.name}
      locationData={locationData}
      description="Camden (NW1 and NW5) is one of London's most conservation-sensitive boroughs — Georgian and early Victorian terraces dominate the streets around Primrose Hill, Kentish Town, and the Camden Town area, and a very high proportion of the borough falls within designated conservation areas. Albert Construction works in Camden with the experience this demands: planning expertise, period-appropriate materials, and a team that understands how to work within heritage constraints without sacrificing quality or functionality. Conservation areas in Camden cover much of what makes the area architecturally distinctive — the Camden Square neighbourhood, the Primrose Hill streets, and the mews houses behind the main roads around NW1. In these areas, permitted development rights are removed entirely, and even routine alterations require full planning consent. We manage the process from pre-application to decision, preparing heritage statements and design-and-access documentation where required. We also work with lime mortar and traditional brick for external works, which Camden's planning officers require when repointing or extending period properties. For interior work — kitchen renovations, bathroom refits, replastering — Camden properties often need as much attention as the outside. Georgian floor plans were not designed for modern kitchens, and reconfiguring a basement or rear reception to create a functional kitchen-diner is something we do regularly. Structural alterations, RSJ installation, and full fit-out all in-house, fixed price."
      heroImage="/images/interior_kitchen_openplan_dark_cabinets_orange_chairs.webp"
      galleryImages={[
        { src: "/images/exterior_extension_rear_house_complete.webp", alt: "Rear extension in Camden" },
        { src: "/images/interior_bathroom_freestanding_bath.webp", alt: "Bathroom renovation in Camden" },
        { src: "/images/interior_loft_skylight_wood_floor.webp", alt: "Loft conversion in Camden" },
      ]}
    />
  );
}
