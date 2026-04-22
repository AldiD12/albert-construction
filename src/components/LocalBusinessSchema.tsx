import type { LocationData } from "@/data/locations";

interface LocalBusinessSchemaProps {
  location: LocationData;
}

export function LocalBusinessSchema({ location }: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "Albert Construction Ltd",
    telephone: "+447478606507",
    email: "albertconstructionltd@outlook.com",
    url: `https://albertconstructionltd.co.uk/locations/${location.slug}`,
    description: "Family-run building company in London specializing in extensions, loft conversions, bathrooms, and complete renovations.",
    image: "https://albertconstructionltd.co.uk/images/exterior_extension_rear_house_complete.webp",
    foundingDate: "2013",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "GB",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "9.7",
      bestRating: "10",
      worstRating: "1",
      ratingCount: "29",
      reviewCount: "29",
    },
    sameAs: [
      "https://www.checkatrade.com/trades/albertconstructionltd",
    ],
    award: "Checkatrade Approved & Verified",
    knowsAbout: [
      "House Extensions",
      "Loft Conversions",
      "Structural Engineering",
      "Kitchen Extensions",
      "Bathroom Design",
      "Home Renovations"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Albert Construction Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "House Extensions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Loft Conversions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Renovations" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchen Fitting" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plastering & Rendering" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Office Fit-Outs" } },
      ],
    },
    priceRange: "£££",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: location.coordinates.lat,
        longitude: location.coordinates.lng,
      },
      geoRadius: "25000",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
