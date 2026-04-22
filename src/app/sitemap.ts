import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://albertconstructionltd.co.uk";

  const services = [
    "loft-conversions",
    "extensions",
    "general-renovations",
    "commercial-offices",
    "bathroom-renovations",
    "kitchen-fitting",
    "plastering",
    "painting-decorating",
    "roofing",
  ];

  const locationSlugs = [
    // North London
    "barnet",
    "finchley",
    "enfield",
    "wood-green",
    "islington",
    // North West London
    "edgware",
    "stanmore",
    "harrow",
    "wembley",
    // West London
    "ealing",
    "acton",
    "hammersmith",
    // East London
    "hackney",
    "stratford",
    "ilford",
    // South London
    "brixton",
    "croydon",
    "lewisham",
    // Inner / Central
    "camden",
    // Outer / Home Counties
    "watford",
    "st-albans",
  ];

  const loftSubPages = [
    "dormer",
    "hip-to-gable",
    "mansard",
  ];

  const guides = [
    "loft-conversion-cost-london",
    "house-extension-cost-london",
    "planning-permission-loft-conversion-london",
    "party-wall-agreement-london",
    "bathroom-renovation-cost-london",
  ];

  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/gallery`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/locations`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/guides`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    ...services.map((slug) => ({
      url: `${base}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...loftSubPages.map((slug) => ({
      url: `${base}/services/loft-conversions/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...locationSlugs.map((slug) => ({
      url: `${base}/locations/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...guides.map((slug) => ({
      url: `${base}/guides/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
