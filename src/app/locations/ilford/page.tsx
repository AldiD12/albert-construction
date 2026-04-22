import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const locationData = getLocationBySlug("ilford")!;

export const metadata: Metadata = {
  title: "Builders in Ilford | Extensions, Lofts & Renovations | Albert Construction",
  description:
    "Local builders in Ilford (IG1, IG2, IG3) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/locations/ilford",
  },
  openGraph: {
    title: "Builders in Ilford | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Local builders in Ilford (IG1, IG2, IG3) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
    url: "https://albertconstructionltd.co.uk/locations/ilford",
  },
  twitter: {
    title: "Builders in Ilford | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Local builders in Ilford (IG1, IG2, IG3) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  },
};

export default function IlfordPage() {
  return (
    <LocationPage
      location={locationData.name}
      locationData={locationData}
      description="Ilford — covering IG1, IG2, and IG3 — is one of East London's largest residential areas and has some of the most substantial housing stock in Greater London. 1930s semis dominate the majority of the area: wide-fronted, solid-brick properties with long rear gardens and hipped roofs that are ideal for loft conversions. Victorian terraces fill the older streets around Ilford town centre, and detached family homes sit in the quieter parts of IG2 and IG3 toward Gants Hill and Newbury Park. Albert Construction works regularly throughout Ilford, carrying out house extensions, loft conversions, kitchen renovations, and complete bathroom refits. The 1930s semis that characterise most of the area have excellent extension potential — a double-storey rear extension adds a bedroom and a larger kitchen at the same time, and a hip-to-gable loft conversion with rear dormer can create a full master suite. Many of these projects qualify under permitted development, reducing cost and timescale. For Victorian terraces closer to the town centre, rear extensions and side returns are the practical route to adding space. We handle party wall notices, structural engineer calculations, building control sign-off, and every trade from groundworks to decoration. Ilford's generous plot sizes mean these are often larger projects than comparable work in more central areas — and the value uplift reflects that."
      heroImage="/images/exterior_extension_rear_garden_wide.webp"
      galleryImages={[
        { src: "/images/exterior_extension_rear_garden_artificial_grass.webp", alt: "Rear extension with garden in Ilford" },
        { src: "/images/interior_loft_velux_skylights_white.webp", alt: "Loft conversion in Ilford" },
        { src: "/images/interior_kitchen_openplan_dark_cabinets_orange_chairs.webp", alt: "Kitchen extension in Ilford" },
      ]}
    />
  );
}
