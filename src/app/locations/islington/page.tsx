import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const locationData = getLocationBySlug("islington")!;

export const metadata: Metadata = {
  title: "Builders in Islington | Extensions, Lofts & Renovations | Albert Construction",
  description:
    "Experienced builders in Islington (N1, N7) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/locations/islington",
  },
  openGraph: {
    title: "Builders in Islington | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Experienced builders in Islington (N1, N7) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
    url: "https://albertconstructionltd.co.uk/locations/islington",
  },
  twitter: {
    title: "Builders in Islington | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Experienced builders in Islington (N1, N7) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  },
};

export default function IslingtonPage() {
  return (
    <LocationPage
      location={locationData.name}
      locationData={locationData}
      description="Islington is one of London's most densely built inner boroughs — Georgian townhouses along the Barnsbury streets, Victorian terraces throughout Highbury and Holloway, and the converted warehouse and mansion flat stock around Angel and Canonbury. Albert Construction works across N1 and N7, delivering house extensions, loft conversions, kitchen installations, and bathroom renovations in properties that require real planning experience and careful building practice. Islington Council operates some of the strictest conservation area controls in London. Much of Barnsbury, Canonbury, Highbury Fields, and the Cloudesley Estate is covered by conservation area designations where permitted development rights are removed — any extension, roof alteration, or external change needs full planning consent. We're experienced working within Islington's planning requirements: choosing materials that satisfy the council's character assessments, preparing heritage impact statements where needed, and managing the full application on your behalf. For Georgian townhouses, we also work with lime mortar, traditional brickwork, and period-sensitive detailing — the council notices the difference and so do the buildings. If you have a Victorian terrace in Highbury or a conversion flat in Angel that needs updating, we handle the full scope: new kitchen, bathroom, structural alterations, plastering, and decorating — managed as one project with one fixed price."
      heroImage="/images/interior_kitchen_openplan_dark_cabinets_orange_chairs.webp"
      galleryImages={[
        { src: "/images/exterior_extension_rear_house_complete.webp", alt: "Rear extension in Islington" },
        { src: "/images/interior_bathroom_round_mirror_tiles.webp", alt: "Bathroom renovation in Islington" },
        { src: "/images/interior_loft_skylight_wood_floor.webp", alt: "Loft conversion in Islington" },
      ]}
    />
  );
}
