import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const locationData = getLocationBySlug("wood-green")!;

export const metadata: Metadata = {
  title: "Builders in Wood Green | Extensions, Lofts & Renovations | Albert Construction",
  description:
    "Local builders in Wood Green for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/locations/wood-green",
  },
  openGraph: {
    title: "Builders in Wood Green | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Local builders in Wood Green for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
    url: "https://albertconstructionltd.co.uk/locations/wood-green",
  },
  twitter: {
    title: "Builders in Wood Green | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Local builders in Wood Green for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  },
};

export default function WoodGreenPage() {
  return (
    <LocationPage
      location={locationData.name}
      locationData={locationData}
      description="Wood Green (N22) is a busy, well-connected part of North London with a high proportion of Victorian and Edwardian terraces — exactly the type of property where a rear extension or loft conversion adds serious value per pound spent. Albert Construction works regularly in Wood Green and the surrounding streets, helping homeowners unlock space that is currently going unused. A rear dormer loft conversion on a typical Wood Green terrace creates a full double bedroom with en-suite and often qualifies under permitted development — meaning no planning permission needed. Rear extensions open up narrow ground-floor layouts into proper kitchen-dining rooms with access to the garden. For properties within the Noel Park Conservation Area, permitted development rights are restricted, but we handle the full planning application and design requirements. We also carry out complete renovations on ex-council properties and converted flats across the area — kitchens, bathrooms, plastering, and decorating all handled by the same team from start to finish."
      heroImage="/images/exterior_extension_rear_house_complete.webp"
      galleryImages={[
        { src: "/images/exterior_loft_dormer_framing_construction.webp", alt: "Loft conversion in progress in Wood Green" },
        { src: "/images/interior_kitchen_white_units_complete.webp", alt: "Kitchen renovation in Wood Green" },
        { src: "/images/interior_bathroom_round_mirror_tiles.webp", alt: "Bathroom renovation in Wood Green" },
      ]}
    />
  );
}
