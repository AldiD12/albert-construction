import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const locationData = getLocationBySlug("edgware")!;

export const metadata: Metadata = {
  title: "Builders in Edgware | Extensions, Lofts & Renovations | Albert Construction",
  description:
    "Local builders in Edgware for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/locations/edgware",
  },
  openGraph: {
    title: "Builders in Edgware | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Local builders in Edgware for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
    url: "https://albertconstructionltd.co.uk/locations/edgware",
  },
  twitter: {
    title: "Builders in Edgware | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Local builders in Edgware for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  },
};

export default function EdgwarePage() {
  return (
    <LocationPage
      location={locationData.name}
      locationData={locationData}
      description="Edgware sits at the northern end of the Northern line and has a strong mix of 1930s semis, detached family homes, and newer developments across HA8. Many properties here have generous rear gardens — ideal for single or double storey extensions — but narrow side access between buildings requires careful planning of deliveries, skips, and scaffolding positioning. Albert Construction has completed numerous projects in Edgware, from rear kitchen extensions with bi-fold doors to full dormer loft conversions creating new master bedrooms with en-suites. We also work on full property renovations for homeowners who have bought older stock and want to modernise throughout — new kitchen, bathrooms, replastering, and decorating in one managed programme. Everything is handled by our own team. No subcontractors appear unannounced — you always know who is on site and what they are doing. Fixed price from the outset, with a detailed programme so you can plan around the work."
      heroImage="/images/exterior_extension_rear_garden_wide.webp"
      galleryImages={[
        { src: "/images/exterior_loft_dormer_dark_cladding.webp", alt: "Loft conversion completed in Edgware" },
        { src: "/images/interior_kitchen_dark_pendant_lights.webp", alt: "Kitchen installation in Edgware" },
        { src: "/images/interior_bathroom_round_mirror_tiles.webp", alt: "Bathroom renovation in Edgware" },
      ]}
    />
  );
}
