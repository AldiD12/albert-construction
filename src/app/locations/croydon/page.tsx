import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const locationData = getLocationBySlug("croydon")!;

export const metadata: Metadata = {
  title: "Builders in Croydon | Extensions, Lofts & Renovations | Albert Construction",
  description:
    "Local builders in Croydon (CR0, CR7) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/locations/croydon",
  },
  openGraph: {
    title: "Builders in Croydon | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Local builders in Croydon (CR0, CR7) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
    url: "https://albertconstructionltd.co.uk/locations/croydon",
  },
  twitter: {
    title: "Builders in Croydon | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Local builders in Croydon (CR0, CR7) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  },
};

export default function CroydonPage() {
  return (
    <LocationPage
      location={locationData.name}
      locationData={locationData}
      description="Croydon covers an enormous area of South London — Victorian semis in Thornton Heath and Norbury, larger 1930s detached and semi-detached homes around Purley and Sanderstead, post-war estates in New Addington and Selsdon, and the ongoing regeneration of Croydon town centre itself. Albert Construction works throughout CR0 and CR7, handling house extensions, loft conversions, kitchen renovations, and bathroom refits. The 1930s semis that fill much of mid-Croydon are some of the best candidates for extension work in South London — generous plots, detached structures with real side access, and roof pitches that work for hip-to-gable loft conversions with rear dormers. Double-storey rear extensions on these properties create a larger kitchen on the ground floor and an additional bedroom above, and in most cases this qualifies as permitted development without a planning application. Croydon town centre is changing rapidly, and Albert Construction also carries out commercial work in the area: office fit-outs, retail unit refurbishments, and hospitality builds. Whether it is a family home in Norbury or a commercial premises near East Croydon station, we manage the full project in-house — structural engineer, building control, every trade, fixed price."
      heroImage="/images/exterior_extension_rear_garden_wide.webp"
      galleryImages={[
        { src: "/images/exterior_extension_rear_house_complete.webp", alt: "Rear extension in Croydon" },
        { src: "/images/interior_loft_skylight_wood_floor.webp", alt: "Loft conversion in Croydon" },
        { src: "/images/interior_kitchen_white_units_complete.webp", alt: "Kitchen renovation in Croydon" },
      ]}
    />
  );
}
