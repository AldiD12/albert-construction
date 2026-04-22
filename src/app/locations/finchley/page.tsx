import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const locationData = getLocationBySlug("finchley")!;

export const metadata: Metadata = {
  title: "Builders in Finchley | Extensions, Lofts & Renovations | Albert Construction",
  description:
    "Local builders in Finchley (N2, N3, N12) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/locations/finchley",
  },
  openGraph: {
    title: "Builders in Finchley | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Local builders in Finchley (N2, N3, N12) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
    url: "https://albertconstructionltd.co.uk/locations/finchley",
  },
  twitter: {
    title: "Builders in Finchley | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Local builders in Finchley (N2, N3, N12) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  },
};

export default function FinchleyPage() {
  return (
    <LocationPage
      location={locationData.name}
      locationData={locationData}
      description="Finchley — covering N2, N3, and N12 — is one of North London's most established residential areas, with a housing stock that ranges from compact Victorian terraces in East Finchley to wide 1930s semis along the Finchley Road and larger Edwardian detached homes in the streets around Coppetts Road and Woodside Park. Albert Construction works regularly across all three Finchley postcodes, carrying out house extensions, loft conversions, full kitchen installations, and bathroom renovations. The 1930s semis that dominate much of central Finchley are well-suited to double-storey rear extensions — the rear garden is typically long enough, the structure is solid, and adding two storeys at once is far more cost-effective than doing it in two separate projects. Many of these properties also have the roof pitch for a hip-to-gable loft conversion with rear dormer, creating a large master bedroom suite at the top of the house. Victorian terraces in East Finchley suit rear and side-return extensions — particularly where the kitchen sits in the back reception room and the layout feels cut off from the garden. Most extension and loft work in Finchley qualifies under permitted development, but party wall agreements with neighbours are almost always required and we manage that entire process. One point of contact, fixed price, every trade in-house."
      heroImage="/images/exterior_extension_rear_house_complete.webp"
      galleryImages={[
        { src: "/images/exterior_extension_rear_garden_wide.webp", alt: "Rear extension with bi-fold doors in Finchley" },
        { src: "/images/interior_loft_skylight_wood_floor.webp", alt: "Loft conversion completed in Finchley" },
        { src: "/images/interior_kitchen_white_units_complete.webp", alt: "Kitchen renovation in Finchley" },
      ]}
    />
  );
}
