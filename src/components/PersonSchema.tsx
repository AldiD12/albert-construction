export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://albertconstructionltd.co.uk/#director",
    name: "Albert Construction Ltd",
    jobTitle: "Director",
    worksFor: {
      "@id": "https://albertconstructionltd.co.uk/#organization"
    },
    url: "https://albertconstructionltd.co.uk",
    sameAs: [
      "https://www.checkatrade.com/trades/albertconstructionltd"
    ],
    knowsAbout: [
      "Residential Construction",
      "Loft Conversions",
      "House Extensions",
      "Home Renovations",
      "Commercial Office Fit-outs",
      "Project Management"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
