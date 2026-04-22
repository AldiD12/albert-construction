import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const locationData = getLocationBySlug("brixton")!;

export const metadata: Metadata = {
  title: "Builders in Brixton | Extensions, Lofts & Renovations | Albert Construction",
  description:
    "Trusted builders in Brixton (SW2, SW9) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/locations/brixton",
  },
  openGraph: {
    title: "Builders in Brixton | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Trusted builders in Brixton (SW2, SW9) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
    url: "https://albertconstructionltd.co.uk/locations/brixton",
  },
  twitter: {
    title: "Builders in Brixton | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Trusted builders in Brixton (SW2, SW9) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  },
};

export default function BrixtonPage() {
  return (
    <LocationPage
      location={locationData.name}
      locationData={locationData}
      description="Brixton (SW2 and SW9) has a dense mix of Victorian terraces, Edwardian semis, mansion blocks, and converted flats — property that has increased significantly in value over recent years, making extensions and conversions a smart investment. Albert Construction works across the area on house extensions, loft conversions, kitchen installations, and complete bathroom renovations. Victorian terraces in Brixton are well-suited to rear extensions — adding a proper kitchen-dining room where the current layout is cramped and dark. Many also have the roof pitch for a rear dormer loft conversion, creating an additional bedroom and bathroom without moving or extending into the garden. A number of streets in SW2 and SW9 fall within conservation areas where Lambeth Council restricts permitted development. We handle full planning applications for these properties, including heritage design statements and material schedules where required. For mansion blocks and converted flats, our work is typically full interior refurbishment — new kitchen, new bathroom, replastering, flooring, and decoration — managed under a single contract and carried out by our in-house team. We also carry out commercial fit-outs in Brixton's growing number of food and hospitality venues: kitchen builds, bar installations, dining room fit-outs. Everything is fixed price, one contact, in-house from start to finish."
      heroImage="/images/exterior_extension_rear_garden_artificial_grass.webp"
      galleryImages={[
        { src: "/images/exterior_extension_side_return_brick_grass.webp", alt: "Side return extension in Brixton" },
        { src: "/images/interior_kitchen_dark_openplan_wide.webp", alt: "Open-plan kitchen in Brixton" },
        { src: "/images/interior_bathroom_freestanding_bath.webp", alt: "Bathroom renovation in Brixton" },
      ]}
    />
  );
}
