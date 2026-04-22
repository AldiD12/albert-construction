import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const locationData = getLocationBySlug("acton")!;

export const metadata: Metadata = {
  title: "Builders in Acton | Extensions, Lofts & Renovations | Albert Construction",
  description:
    "Trusted builders in Acton (W3) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/locations/acton",
  },
  openGraph: {
    title: "Builders in Acton | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Trusted builders in Acton (W3) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
    url: "https://albertconstructionltd.co.uk/locations/acton",
  },
  twitter: {
    title: "Builders in Acton | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Trusted builders in Acton (W3) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  },
};

export default function ActonPage() {
  return (
    <LocationPage
      location={locationData.name}
      locationData={locationData}
      description="Acton (W3) has changed considerably in recent years, and the building work that follows reflects that. Victorian and Edwardian terraces run in tight rows across most of the area — particularly around South Acton, Horn Lane, and the streets east of Acton High Street. These properties suit rear extensions and loft conversions well: the rear layouts are compact and dark, and adding space at the back or creating a usable room at the top is often the most cost-effective way to improve the property significantly. A typical project in Acton is a single-storey rear extension opening up the kitchen into the garden, combined with a rear dormer loft conversion to create a bedroom with en-suite. Because these are terraced properties, party wall agreements with both adjoining neighbours are required before work begins — we serve the notices, explain the process to all parties, and manage any surveyor involvement. Acton also has a growing number of converted flats in larger period buildings where Albert Construction carries out full interior refurbishments: kitchen replacement, bathroom refit, replastering, and full redecoration — all managed by our own team. No subcontracting, no delays waiting for trades to line up. The job runs from start to finish with one crew and one project price."
      heroImage="/images/exterior_loft_dormer_framing_construction.webp"
      galleryImages={[
        { src: "/images/exterior_extension_side_return_brick_grass.webp", alt: "Side return extension in Acton" },
        { src: "/images/interior_kitchen_white_units_complete.webp", alt: "Kitchen renovation in Acton" },
        { src: "/images/interior_bathroom_white_tiled.webp", alt: "Bathroom renovation in Acton" },
      ]}
    />
  );
}
