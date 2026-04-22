import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const locationData = getLocationBySlug("st-albans")!;

export const metadata: Metadata = {
  title: "Builders Covering St Albans | Extensions, Lofts & Renovations | Albert Construction",
  description:
    "Albert Construction are London-based builders who regularly work in St Albans (AL1, AL2, AL3) — house extensions, loft conversions, kitchen fitting, and bathroom renovations. Conservation area experience. 9.7/10 Checkatrade.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/locations/st-albans",
  },
  openGraph: {
    title: "Builders Covering St Albans | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Albert Construction are London-based builders who regularly work in St Albans — house extensions, loft conversions, kitchen fitting, and bathroom renovations. Conservation area experience. 9.7/10 Checkatrade.",
    url: "https://albertconstructionltd.co.uk/locations/st-albans",
  },
  twitter: {
    title: "Builders Covering St Albans | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Albert Construction are London-based builders who regularly work in St Albans — house extensions, loft conversions, kitchen fitting, and bathroom renovations.",
  },
};

export default function StAlbansPage() {
  return (
    <LocationPage
      location={locationData.name}
      locationData={locationData}
      description="Albert Construction are London-based builders who regularly travel to St Albans for house extensions, loft conversions, kitchen renovations, and bathroom refits across AL1, AL2, and AL3. St Albans is one of the most architecturally varied areas we work in — Georgian townhouses close to the cathedral, Victorian terraces throughout the city centre streets, 1930s semis across the residential suburbs, and larger detached family homes toward Marshalswick and London Colney. Conservation area planning is a significant factor in St Albans — much of the city centre and the areas immediately surrounding the cathedral are designated, which removes permitted development rights and requires full planning consent for any external alteration. We have extensive experience working within St Albans City and District Council's heritage requirements: matching brickwork to existing Victorian and Georgian stock, preparing heritage impact statements, and managing applications that satisfy the council's character assessments. For properties outside conservation areas, permitted development covers most standard rear extensions and dormer loft conversions without a planning application. The 1930s semis that fill much of suburban St Albans are excellent candidates for hip-to-gable loft conversions combined with rear dormers — adding a full bedroom suite at the top of the house. Our in-house team handles every trade, fixed price from survey to handover."
      heroImage="/images/exterior_extension_rear_house_complete.webp"
      galleryImages={[
        { src: "/images/exterior_extension_rear_garden_artificial_grass.webp", alt: "Rear extension completed in St Albans" },
        { src: "/images/interior_kitchen_dark_island_finish.webp", alt: "Kitchen renovation in St Albans" },
        { src: "/images/interior_bathroom_freestanding_bath.webp", alt: "Premium bathroom renovation in St Albans" },
      ]}
    />
  );
}
