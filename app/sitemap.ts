import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

// Dynamically discover all page routes at build time
function getRoutes(): string[] {
  const appDir = path.join(process.cwd(), 'app');
  const routes: string[] = [];

  function walk(dir: string, prefix: string = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      if (entry.name.startsWith('(') && entry.name.endsWith(')')) continue;
      if (entry.name.startsWith('_')) continue;
      if (entry.name === 'api') continue;

      const fullPath = path.join(dir, entry.name);
      const pagePath = path.join(fullPath, 'page.tsx');
      const pagePathJs = path.join(fullPath, 'page.jsx');
      const pagePathJsOnly = path.join(fullPath, 'page.js');
      const route = prefix === '' ? `/${entry.name}` : `${prefix}/${entry.name}`;

      if (
        fs.existsSync(pagePath) ||
        fs.existsSync(pagePathJs) ||
        fs.existsSync(pagePathJsOnly)
      ) {
        routes.push(route);
      }

      walk(fullPath, route);
    }
  }

  walk(appDir);
  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://olden-era-guide.vercel.app';
  const routes = getRoutes();

  const allRoutes = routes.includes('') ? routes : ['', ...routes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-06-28'),
    changeFrequency: route === '' ? 'weekly' : route === '/news' ? 'weekly' : 'monthly',
    priority:
      route === ''
        ? 1.0
        : route.startsWith('/factions')
          ? 0.8
          : route === '/beginners-guide' || route === '/tier-list'
            ? 0.9
            : 0.7,
  }));
}
