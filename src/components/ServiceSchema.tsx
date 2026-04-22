interface ServiceSchemaProps {
  serviceType: string;
  description: string;
  url: string;
}

export function ServiceSchema({ serviceType, description, url }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    description,
    image: "https://albertconstructionltd.co.uk/images/og-default.webp",
    url: `https://albertconstructionltd.co.uk${url}`,
    "@id": `https://albertconstructionltd.co.uk${url}#service`,
    offers: {
      "@type": "Offer",
      priceRange: "£££",
    },
    provider: {
      "@type": "GeneralContractor",
      name: "Albert Construction Ltd",
      telephone: "+447478606507",
      url: "https://albertconstructionltd.co.uk",
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "London"
      },
      {
        "@type": "AdministrativeArea",
        name: "Greater London"
      }
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
