import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const locationData = getLocationBySlug("wembley")!;

export const metadata: Metadata = {
  title: "Builders in Wembley | Extensions, Lofts & Renovations | Albert Construction",
  description:
    "Trusted builders in Wembley for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/locations/wembley",
  },
  openGraph: {
    title: "Builders in Wembley | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Trusted builders in Wembley for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
    url: "https://albertconstructionltd.co.uk/locations/wembley",
  },
  twitter: {
    title: "Builders in Wembley | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Trusted builders in Wembley for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  },
};

export default function WembleyPage() {
  return (
    <LocationPage
      location={locationData.name}
      locationData={locationData}
      description="Wembley — spanning HA0 and HA9 — is a densely built area with a strong mix of 1930s semis, terraced streets, and newer apartment blocks. Most building projects here involve shared walls and boundaries, which means party wall agreements with neighbours are almost always required before work begins. Albert Construction handles this straightforwardly — we explain what is needed, serve the correct notices, and manage any surveyor communications. Common projects in Wembley include single-storey rear extensions to open up kitchen-dining areas, dormer loft conversions to create additional bedrooms, and full bathroom and kitchen renovations on properties that have not been updated in years. We have also carried out full flat renovations in the area — replastering, new kitchens, bathrooms, and electrical upgrades across an entire property. Everything is managed by our in-house team. No subcontractors, no gaps between trades — just a consistent crew who keep the site clean and the work moving."
      heroImage="/images/interior_kitchen_dark_openplan_wide.webp"
      galleryImages={[
        { src: "/images/exterior_extension_rear_garden_wide.webp", alt: "Rear extension with bi-fold doors in Wembley" },
        { src: "/images/interior_bathroom_freestanding_bath.webp", alt: "Bathroom renovation in Wembley" },
        { src: "/images/interior_kitchen_openplan_dark_cabinets_orange_chairs.webp", alt: "Kitchen extension completed in Wembley" },
      ]}
    />
  );
}
