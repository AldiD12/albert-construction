import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const locationData = getLocationBySlug("stanmore")!;

export const metadata: Metadata = {
  title: "Builders in Stanmore | Extensions, Lofts & Renovations | Albert Construction",
  description:
    "Trusted builders in Stanmore for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/locations/stanmore",
  },
  openGraph: {
    title: "Builders in Stanmore | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Trusted builders in Stanmore for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
    url: "https://albertconstructionltd.co.uk/locations/stanmore",
  },
  twitter: {
    title: "Builders in Stanmore | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Trusted builders in Stanmore for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  },
};

export default function StanmorePage() {
  return (
    <LocationPage
      location={locationData.name}
      locationData={locationData}
      description="Stanmore is one of North West London's more spacious suburbs — characterised by larger detached homes, generous plots, and tree-lined streets around Canons Park and Bentley Priory. That space translates into real opportunity for serious building projects. Double-storey rear extensions are popular here because the garden depth allows it and the property value makes the investment worthwhile. Hip-to-gable loft conversions are equally common, squaring off the roof ends of semi-detached homes to create full-width loft rooms with space for a bedroom, bathroom, and study. Albert Construction regularly takes on larger programmes of work in Stanmore — combining an extension, loft conversion, and full interior renovation into a single managed project. That approach saves time and money compared to phasing the work across different contractors. We handle structural engineering, building control, party wall notices, and every trade in-house. One team, one programme, one fixed price."
      heroImage="/images/exterior_extension_rear_garden_artificial_grass.webp"
      galleryImages={[
        { src: "/images/exterior_extension_rear_house_complete.webp", alt: "Double storey extension completed in Stanmore" },
        { src: "/images/interior_kitchen_dark_openplan_wide.webp", alt: "Open plan kitchen extension in Stanmore" },
        { src: "/images/interior_loft_velux_skylights_white.webp", alt: "Loft conversion in Stanmore" },
      ]}
    />
  );
}
