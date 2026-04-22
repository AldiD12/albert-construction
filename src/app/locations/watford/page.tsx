import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const locationData = getLocationBySlug("watford")!;

export const metadata: Metadata = {
  title: "Builders Covering Watford | Extensions, Lofts & Renovations | Albert Construction",
  description:
    "Albert Construction are London-based builders who regularly work in Watford (WD17, WD18) — house extensions, loft conversions, kitchen fitting, and bathroom renovations. £10M insured, 9.7/10 Checkatrade.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/locations/watford",
  },
  openGraph: {
    title: "Builders Covering Watford | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Albert Construction are London-based builders who regularly work in Watford — house extensions, loft conversions, kitchen fitting, and bathroom renovations. £10M insured, 9.7/10 Checkatrade.",
    url: "https://albertconstructionltd.co.uk/locations/watford",
  },
  twitter: {
    title: "Builders Covering Watford | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Albert Construction are London-based builders who regularly work in Watford — house extensions, loft conversions, kitchen fitting, and bathroom renovations.",
  },
};

export default function WatfordPage() {
  return (
    <LocationPage
      location={locationData.name}
      locationData={locationData}
      description="Albert Construction are London-based builders who regularly travel to Watford and the surrounding area for house extensions, loft conversions, kitchen renovations, and full bathroom refits. Watford's housing stock spans Victorian terraces around Nascot Wood and West Watford, 1930s semis throughout the residential areas toward Oxhey and Carpenders Park, and post-war estates further out toward South Oxhey. The Victorian terraces are particularly suited to side-return and rear extensions that open up narrow kitchen layouts into full kitchen-dining spaces — a transformation that adds significant value. Many also have enough ridge height for a rear dormer loft conversion under permitted development, adding a bedroom and en-suite without a planning application. For the 1930s semis that dominate mid-Watford, double-storey rear extensions and hip-to-gable loft conversions are among the most popular projects we carry out. Watford Council's planning department is straightforward to work with outside the town centre conservation area, and permitted development covers most standard extension and loft work. Where a full application is needed, we manage it from pre-application to decision. Every project is run by our own team — no subcontractors — fixed price, 2-year written guarantee."
      heroImage="/images/exterior_extension_rear_garden_wide.webp"
      galleryImages={[
        { src: "/images/exterior_extension_side_return_brick_grass.webp", alt: "Side return extension completed near Watford" },
        { src: "/images/interior_kitchen_dark_openplan_wide.webp", alt: "Open plan kitchen renovation in Watford" },
        { src: "/images/interior_bathroom_white_suite.webp", alt: "Bathroom renovation completed in Watford" },
      ]}
    />
  );
}
