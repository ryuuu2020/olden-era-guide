import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://olden-era-guide.vercel.app";
  const pages = [
    "", "/factions", "/factions/temple", "/factions/necropolis", "/factions/grove",
    "/factions/hive", "/factions/schism", "/factions/dungeon", "/heroes",
    "/beginners-guide", "/combat", "/buildings", "/skills", "/spells",
    "/artifacts", "/tier-list", "/tips", "/news", "/faq", "/about", "/privacy", "/terms",
  ];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/news" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : path.startsWith("/factions") ? 0.8 : 0.6,
  }));
}
