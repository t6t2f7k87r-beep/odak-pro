 import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        absoluteUrl(siteConfig.logo),
        absoluteUrl(siteConfig.ogImage),
        absoluteUrl("/images/hero/russia.jpg"),
        absoluteUrl("/images/universities/lomonosov.jpg"),
        absoluteUrl("/images/universities/spbu.jpg"),
        absoluteUrl("/images/universities/kazan.jpg"),
        absoluteUrl("/images/universities/bauman.jpg"),
        absoluteUrl("/images/universities/rudn.jpg"),
        absoluteUrl("/images/universities/itmo.jpg"),
      ],
    },
  ];
}
