import { MetadataRoute } from "next";
import { dictionaries } from "./dictionaries/all";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.keys(dictionaries).map(l => (
    {
      url: `https://baristalive.cz/${l}`,
      lastModified: new Date(),
    }))
}
