import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const locationData = getLocationBySlug("lewisham")!;

export const metadata: Metadata = {
  title: "Builders in Lewisham | Extensions, Lofts & Renovations | Albert Construction",
  description:
    "Trusted builders in Lewisham (SE13, SE6) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/locations/lewisham",
  },
  openGraph: {
    title: "Builders in Lewisham | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Trusted builders in Lewisham (SE13, SE6) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
    url: "https://albertconstructionltd.co.uk/locations/lewisham",
  },
  twitter: {
    title: "Builders in Lewisham | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Trusted builders in Lewisham (SE13, SE6) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  },
};

export default function LewishamPage() {
  return (
    <LocationPage
      location={locationData.name}
      locationData={locationData}
      description="Lewisham (SE13 and SE6) runs from the older Victorian and Edwardian streets around Blackheath and Hither Green through to the more recent developments near Lewisham town centre and Catford. It is an area where property values have risen steadily, making the case for investing in an extension or loft conversion stronger than ever. Albert Construction works regularly in the area on house extensions, loft conversions, kitchen installations, and bathroom refits. Victorian terraces around Hither Green and Lee are well-suited to rear extensions that open up the kitchen and connect the ground floor to the garden. The same properties usually have enough roof pitch for a rear dormer loft conversion — creating a bedroom and en-suite at the top of the house without touching the garden footprint. Blackheath has significant conservation area coverage, and extensions or roof alterations in these streets need full planning consent rather than permitted development. We manage the application process directly and have experience working within Lewisham Council's design guidance. Edwardian semis in Catford suit double-storey extensions — a rear extension across two storeys gives two new rooms for less cost than two separate projects. Party wall agreements are always required for terraced and semi-detached properties, and we handle all the notices and paperwork as standard."
      heroImage="/images/exterior_extension_rear_garden_artificial_grass.webp"
      galleryImages={[
        { src: "/images/exterior_extension_side_return_brick_grass.webp", alt: "Side return extension in Lewisham" },
        { src: "/images/interior_loft_velux_skylights_white.webp", alt: "Loft conversion in Lewisham" },
        { src: "/images/interior_bathroom_round_mirror_tiles.webp", alt: "Bathroom renovation in Lewisham" },
      ]}
    />
  );
}
