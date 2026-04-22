import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const locationData = getLocationBySlug("barnet")!;

export const metadata: Metadata = {
  title: "Builders in Barnet | Extensions, Lofts & Renovations | Albert Construction",
  description:
    "Local builders in Barnet for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/locations/barnet",
  },
  openGraph: {
    title: "Builders in Barnet | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Local builders in Barnet for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
    url: "https://albertconstructionltd.co.uk/locations/barnet",
  },
  twitter: {
    title: "Builders in Barnet | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Local builders in Barnet for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  },
};

export default function BarnetPage() {
  return (
    <LocationPage
      location={locationData.name}
      locationData={locationData}
      description="Barnet is one of London's largest boroughs, and its housing stock reflects that variety — from Edwardian semis around East Barnet to 1930s detached homes in New Barnet and conservation area properties near Monken Hadley. Albert Construction works across the whole borough, building extensions, converting lofts, and renovating kitchens and bathrooms to a standard that matches the quality of homes here. We understand Barnet Council's planning requirements well — particularly the additional restrictions that apply in conservation areas where permitted development rights don't automatically apply. If your project needs a full planning application, we manage the process for you. Every project is run by our own team. No subcontractors, no surprises — just consistent workmanship backed by a 2-year guarantee and £10 million public liability insurance."
      heroImage="/images/exterior_extension_rear_garden_wide.webp"
      galleryImages={[
        { src: "/images/exterior_extension_rear_garden_artificial_grass.webp", alt: "Rear extension with garden completed in Barnet" },
        { src: "/images/interior_kitchen_dark_openplan_wide.webp", alt: "Open plan kitchen installation in Barnet" },
        { src: "/images/interior_bathroom_round_mirror_tiles.webp", alt: "Bathroom renovation in Barnet" },
      ]}
    />
  );
}
