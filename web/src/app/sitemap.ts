import { MetadataRoute } from "next";
import { PRODUCTS_DATA } from "@/data/siteData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bsenergy-india.com";

  const productUrls = PRODUCTS_DATA.map((product) => ({
    url: `${baseUrl}/#products`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...productUrls,
  ];
}
