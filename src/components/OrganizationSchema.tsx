export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": "https://albertconstructionltd.co.uk/#organization",
    name: "Albert Construction Ltd",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "9.7",
      bestRating: "10",
      worstRating: "1",
      ratingCount: "29",
      reviewCount: "29",
    },
    url: "https://albertconstructionltd.co.uk",
    telephone: "+447478606507",
    email: "albertconstructionltd@outlook.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "GB",
    },
    logo: "https://albertconstructionltd.co.uk/images/logo.png",
    image: "https://albertconstructionltd.co.uk/images/exterior_extension_rear_house_complete.webp",
    sameAs: [
      "https://www.checkatrade.com/trades/albertconstructionltd",
    ],
    award: "Checkatrade Approved & Verified",
    vatID: "268304985",
    member: [
      {
        "@type": "Organization",
        "name": "Checkatrade"
      }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Albert Construction Ltd Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Loft Conversions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "House Extensions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Renovations" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Offices" } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
