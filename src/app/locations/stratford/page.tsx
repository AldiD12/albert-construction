import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const locationData = getLocationBySlug("stratford")!;

export const metadata: Metadata = {
  title: "Builders in Stratford | Extensions, Lofts & Renovations | Albert Construction",
  description:
    "Trusted builders in Stratford (E15, E20) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/locations/stratford",
  },
  openGraph: {
    title: "Builders in Stratford | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Trusted builders in Stratford (E15, E20) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
    url: "https://albertconstructionltd.co.uk/locations/stratford",
  },
  twitter: {
    title: "Builders in Stratford | Extensions, Lofts & Renovations | Albert Construction",
    description:
      "Trusted builders in Stratford (E15, E20) for house extensions, loft conversions, kitchen fitting, and bathroom renovations. Ltd company, £10M insured, 9.7/10 Checkatrade. Free site survey.",
  },
};

export default function StratfordPage() {
  return (
    <LocationPage
      location={locationData.name}
      locationData={locationData}
      description="Stratford (E15 and E20) sits at a meeting point between older East London housing stock and the newer regeneration that followed the 2012 Olympics. The area contains Victorian terraces in Forest Gate and Maryland, large post-war estate properties across West Ham and Plaistow, and newer apartment developments around the Olympic Park and Westfield. Albert Construction works across this mix, adapting the approach to what each property needs. Victorian terraces in E15 are good candidates for rear extensions and loft conversions — the plots are tight but the structures are solid, and these works qualify under permitted development in most cases. Post-war semi-detached and terraced properties often have more garden space than they use and benefit from single-storey rear extensions that extend the kitchen into a proper open-plan ground floor. For flat owners and apartment renovations, we carry out complete interior refurbishments — new kitchens, new bathrooms, full replastering, new flooring, and decoration — managed as a single contract. Stratford is also increasingly commercial: we undertake office fit-outs, café and restaurant refurbishments, and retail unit build-outs in the area. Everything is run by our own team. You deal with one person throughout, prices are fixed at the start, and every trade from groundworks to final snagging is managed in-house."
      heroImage="/images/exterior_extension_rear_house_complete.webp"
      galleryImages={[
        { src: "/images/exterior_loft_dormer_framing_construction.webp", alt: "Loft conversion in progress in Stratford" },
        { src: "/images/interior_kitchen_white_units_complete.webp", alt: "Kitchen renovation in Stratford" },
        { src: "/images/interior_bathroom_white_tiled.webp", alt: "Bathroom renovation in Stratford" },
      ]}
    />
  );
}
