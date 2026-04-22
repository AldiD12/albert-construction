import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const locationData = getLocationBySlug("harrow")!;

export const metadata: Metadata = {
  title: "Builders in Harrow | Extensions, Lofts & Renovations | Albert Construction",
  description:
    "Trusted builders in Harrow for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/locations/harrow",
  },
  openGraph: {
    title: "Builders in Harrow | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Trusted builders in Harrow for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
    url: "https://albertconstructionltd.co.uk/locations/harrow",
  },
  twitter: {
    title: "Builders in Harrow | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Trusted builders in Harrow for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  },
};

export default function HarrowPage() {
  return (
    <LocationPage
      location={locationData.name}
      locationData={locationData}
      description="Harrow is a borough of real variety — from the Victorian terraces around South Harrow and Rayners Lane to the larger detached homes near Harrow on the Hill and Pinner. Albert Construction works across the whole area, carrying out house extensions, loft conversions, kitchen installations, and full bathroom renovations. The hilly terrain in parts of Harrow means foundations sometimes need more engineering thought than a flat site — our structural engineer comes out on every survey to assess ground conditions and design accordingly. For most terraced and semi-detached properties, party wall agreements are required before work starts on any shared boundary, and we walk every client through that process clearly before anything else happens. Whether you are looking to open up a narrow Victorian kitchen, add a dormer loft bedroom, or extend the rear of your 1930s semi into the garden, our in-house team handles every trade — plumbing, electrics, plastering, tiling, and joinery. One contact, fixed price, 2-year guarantee."
      heroImage="/images/interior_kitchen_openplan_dark_cabinets_orange_chairs.webp"
      galleryImages={[
        { src: "/images/exterior_extension_rear_house_complete.webp", alt: "House extension completed in Harrow" },
        { src: "/images/interior_loft_skylight_wood_floor.webp", alt: "Loft conversion bedroom in Harrow" },
        { src: "/images/interior_bathroom_white_tiled.webp", alt: "Bathroom renovation in Harrow" },
      ]}
    />
  );
}
