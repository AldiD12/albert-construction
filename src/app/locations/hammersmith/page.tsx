import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const locationData = getLocationBySlug("hammersmith")!;

export const metadata: Metadata = {
  title: "Builders in Hammersmith | Extensions, Lofts & Renovations | Albert Construction",
  description:
    "Experienced builders in Hammersmith (W6, W14) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/locations/hammersmith",
  },
  openGraph: {
    title: "Builders in Hammersmith | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Experienced builders in Hammersmith (W6, W14) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
    url: "https://albertconstructionltd.co.uk/locations/hammersmith",
  },
  twitter: {
    title: "Builders in Hammersmith | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Experienced builders in Hammersmith (W6, W14) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  },
};

export default function HammersmithPage() {
  return (
    <LocationPage
      location={locationData.name}
      locationData={locationData}
      description="Hammersmith and Fulham (W6 and W14) contains some of the most architecturally varied property in West London — mid-Victorian terraces around Ravenscourt Park and Brook Green, mansion flats and period townhouses near the river, and converted warehouse and industrial buildings that have been transformed into residential and commercial spaces. Albert Construction works across the area on house extensions, loft conversions, kitchen refits, and full bathroom renovations. Many streets in Hammersmith fall within conservation areas: Brook Green, Ravenscourt Park, and several riverside terraces are all covered. In these areas, permitted development rights are restricted and even minor external alterations — from adding a dormer to changing window frames — require full planning consent. We manage this process directly: pre-application advice, full submissions, and follow-through with the council. The quality of external detailing matters here, and our team works with brick and lime to match the original materials where required. For commercial projects, Hammersmith's mix of period buildings and modern office blocks creates real opportunity — we carry out office fit-outs and interior commercial refurbishments across W6 and W14. Whether it is a restaurant fit-out, an office reconfiguration, or a residential renovation, the approach is the same: in-house trades, a fixed price, and one person managing the whole job."
      heroImage="/images/interior_commercial_glazed_dining_fitout.webp"
      galleryImages={[
        { src: "/images/exterior_extension_rear_garden_wide.webp", alt: "Rear extension in Hammersmith" },
        { src: "/images/interior_kitchen_openplan_dark_cabinets_orange_chairs.webp", alt: "Kitchen extension in Hammersmith" },
        { src: "/images/interior_bathroom_freestanding_bath.webp", alt: "Bathroom renovation in Hammersmith" },
      ]}
    />
  );
}
