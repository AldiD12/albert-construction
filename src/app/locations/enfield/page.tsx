import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const locationData = getLocationBySlug("enfield")!;

export const metadata: Metadata = {
  title: "Builders in Enfield | Extensions, Lofts & Renovations | Albert Construction",
  description:
    "Trusted builders in Enfield (EN1, EN2, EN3) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/locations/enfield",
  },
  openGraph: {
    title: "Builders in Enfield | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Trusted builders in Enfield (EN1, EN2, EN3) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
    url: "https://albertconstructionltd.co.uk/locations/enfield",
  },
  twitter: {
    title: "Builders in Enfield | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Trusted builders in Enfield (EN1, EN2, EN3) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  },
};

export default function EnfieldPage() {
  return (
    <LocationPage
      location={locationData.name}
      locationData={locationData}
      description="Enfield covers a wide area stretching from Enfield Town in the west through Bush Hill Park and Winchmore Hill to the eastern edges near Brimsdown and Ponders End. The housing reflects that variety — conservation-listed Georgian and Victorian properties around the Town centre and Chase Side, large 1930s semis across Bush Hill Park, and extensive post-war estates in the eastern parts of EN3. Albert Construction works throughout this range, handling house extensions, loft conversions, kitchen renovations, and full bathroom refits. Enfield Town and the streets around Forty Hill require careful planning attention — many properties have Article 4 directions removing permitted development rights, particularly for roof alterations and external changes that would be visible from the street. We handle the full planning application process for these properties and have experience working within the council's design requirements. For post-war semis in the eastern boroughs, permitted development is more straightforward — rear extensions and dormer loft conversions are usually approvable without a formal application. Whatever the property type, we provide structural engineer calculations, building control submissions, and full project management in-house. No subcontractors, no passing work off. One crew, one contact."
      heroImage="/images/exterior_extension_rear_garden_artificial_grass.webp"
      galleryImages={[
        { src: "/images/exterior_extension_side_return_brick_grass.webp", alt: "Extension completed in Enfield" },
        { src: "/images/interior_bathroom_freestanding_bath.webp", alt: "Bathroom renovation in Enfield" },
        { src: "/images/interior_kitchen_dark_openplan_wide.webp", alt: "Open-plan kitchen extension in Enfield" },
      ]}
    />
  );
}
