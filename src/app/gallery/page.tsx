import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery | Our Work | Albert Construction",
  description:
    "Browse our portfolio of extensions, loft conversions, kitchens, bathrooms, commercial fit-outs, and interior finishing across London.",
  alternates: {
    canonical: "https://albertconstructionltd.co.uk/gallery",
  },
  openGraph: {
    title: "Gallery | Our Work | Albert Construction",
    description:
      "Browse our portfolio of extensions, loft conversions, kitchens, bathrooms, commercial fit-outs, and interior finishing across London.",
    url: "https://albertconstructionltd.co.uk/gallery",
  },
  twitter: {
    title: "Gallery | Our Work | Albert Construction",
    description:
      "Browse our portfolio of extensions, loft conversions, kitchens, bathrooms, commercial fit-outs, and interior finishing across London.",
  },
};

const categories = [
  {
    title: "Extensions & Structural Work",
    slug: "extensions",
    images: [
      { src: "/images/exterior_extension_rear_house_complete.webp", alt: "Completed rear extension with pitched roof and brickwork", span: true },
      { src: "/images/exterior_extension_side_return_brick_grass.webp", alt: "Side return extension with brickwork and new window frames", span: false },
      { src: "/images/exterior_extension_rear_garden_wide.webp", alt: "Rear extension with completed roof and guttering system", span: false },
      { src: "/images/exterior_extension_rear_garden_artificial_grass.webp", alt: "Rear extension with artificial grass garden and clean finish", span: false },
      { src: "/images/exterior_extension_side_greenery.webp", alt: "Side extension with greenery and landscaping", span: false },
      { src: "/images/exterior_side_return_grass_complete.webp", alt: "Completed side return extension with garden and exterior finish", span: true },
      { src: "/images/exterior_glazed_roof_extension_wide.webp", alt: "Glazed roof extension wide angle view", span: false },
      { src: "/images/exterior_stone_house_glass_extension.webp", alt: "Stone house with contemporary glass extension", span: false },
      { src: "/images/exterior_loft_dormer_framing_construction.webp", alt: "Dormer loft conversion structural framing under construction", span: false },
      { src: "/images/exterior_loft_dormer_dark_cladding.webp", alt: "Completed dormer loft conversion with dark cladding", span: true },
      { src: "/images/exterior_house_roof_front_view.webp", alt: "Front view of property roof line and facade", span: false },
    ],
  },
  {
    title: "Kitchen Transformations",
    slug: "kitchens",
    images: [
      { src: "/images/interior_kitchen_openplan_dark_cabinets_orange_chairs.webp", alt: "Open-plan kitchen with dark cabinets and statement orange chairs", span: true },
      { src: "/images/interior_kitchen_dark_openplan_wide.webp", alt: "Wide open-plan kitchen with dark units and integrated appliances", span: false },
      { src: "/images/interior_kitchen_dark_island_wide.webp", alt: "Dark kitchen with large island unit and pendant lighting", span: false },
      { src: "/images/interior_kitchen_dark_island_finish.webp", alt: "Dark kitchen island with marble worktop and high-end finish", span: true },
      { src: "/images/interior_kitchen_dark_pendant_lights.webp", alt: "Kitchen with dark cabinetry and feature pendant lighting", span: false },
      { src: "/images/interior_kitchen_white_island_complete.webp", alt: "White kitchen with island unit and marble worktop", span: false },
      { src: "/images/interior_kitchen_white_units_complete.webp", alt: "Crisp white kitchen units with clean finish and tiled backsplash", span: false },
      { src: "/images/interior_kitchen_design_render_island.webp", alt: "Kitchen design render showing island layout", span: true },
    ],
  },
  {
    title: "Bathroom Renovations",
    slug: "bathrooms",
    images: [
      { src: "/images/interior_bathroom_freestanding_bath.webp", alt: "Luxury bathroom with freestanding bath and premium tiling", span: true },
      { src: "/images/interior_bathroom_round_mirror_tiles.webp", alt: "Bathroom with round mirror, vanity, and floor-to-ceiling tiling", span: false },
      { src: "/images/interior_bathroom_white_tiled.webp", alt: "Clean white bathroom with chrome fixtures and marble tiling", span: false },
      { src: "/images/interior_bathroom_white_suite.webp", alt: "Contemporary white bathroom suite with full tiling", span: true },
    ],
  },
  {
    title: "Loft Conversions",
    slug: "lofts",
    images: [
      { src: "/images/interior_loft_velux_skylights_white.webp", alt: "Bright loft conversion room with Velux skylights and white finish", span: true },
      { src: "/images/interior_loft_skylight_wood_floor.webp", alt: "Loft room with skylight and premium wood floor", span: false },
      { src: "/images/interior_staircase_glass_balustrade.webp", alt: "Contemporary staircase with glass balustrade serving a loft conversion", span: false },
      { src: "/images/interior_renovation_bay_window_stained_glass.webp", alt: "Renovated bay window with original stained glass feature", span: true },
    ],
  },
  {
    title: "Commercial Fit-Outs",
    slug: "commercial",
    images: [
      { src: "/images/interior_commercial_lapolpetta_restaurant.webp", alt: "La Polpetta restaurant fit-out completed by Albert Construction", span: true },
      { src: "/images/interior_commercial_restaurant_entrance.webp", alt: "Commercial restaurant entrance and shopfront fit-out", span: false },
      { src: "/images/interior_commercial_bar_restaurant_fitout.webp", alt: "Bar and restaurant interior fit-out with bespoke lighting", span: false },
      { src: "/images/interior_commercial_bar_shelving_orange.webp", alt: "Commercial bar interior with bespoke shelving and feature radiator", span: false },
      { src: "/images/interior_commercial_glazed_dining_fitout.webp", alt: "Commercial glazed dining area fit-out", span: false },
      { src: "/images/interior_commercial_cafe_mezzanine_fitout.webp", alt: "Commercial café with mezzanine level fit-out", span: true },
    ],
  },
];

import { GalleryClient } from "@/components/GalleryClient";

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 mb-16 md:mb-24 mt-20 md:mt-28">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-[2.75rem] md:text-[3.5rem] leading-[1.1] tracking-tight font-black text-primary mb-6">
            Our{" "}
            <span className="text-secondary italic hand-drawn-underline">
              Work
            </span>
          </h1>
          <p className="text-lg text-charcoal leading-relaxed max-w-2xl mx-auto">
            Every project tells a story of craftsmanship. Browse extensions, loft
            conversions, kitchens, bathrooms, commercial fit-outs, and more &mdash; all
            completed by our team across London.
          </p>
        </div>
      </section>

      <GalleryClient categories={categories} />

      {/* CTA Section */}
      <section className="relative bg-primary py-20 md:py-28 mx-6 mb-20 md:mb-28 rounded-lg overflow-hidden mt-32">
        <div className="relative z-10 text-center px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
            Like What You See?
          </h2>
          <p className="text-white/80 text-lg font-body mb-10 max-w-md mx-auto">
            Get a free site survey and fixed-price quotation for your project.
            No obligation, no hidden costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-secondary text-white font-label font-bold py-4 px-10 rounded-full inline-flex items-center justify-center gap-2 transition-transform active:scale-95 hover:bg-secondary/90"
            >
              Get a Free Quote
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <a
              href="tel:07478606507"
              className="border-2 border-white text-white font-label font-bold py-4 px-10 rounded-full inline-flex items-center justify-center gap-2 transition-colors hover:bg-white hover:text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call 07478 606 507
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
