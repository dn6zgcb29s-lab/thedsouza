/**
 * Single place the site's public routes are declared. Every entry appears in
 * the sitemap, in this order.
 */

export const routes = [
  { path: "/", priority: 1 },
  { path: "/projects/home-datacenter", priority: 0.8 },
  { path: "/projects/epping-tennis-club", priority: 0.8 },
  { path: "/projects/thedsouza-com", priority: 0.8 },
  { path: "/projects/gvi-home-lab", priority: 0.8 },
  { path: "/jg", priority: 0.8 },
] as const;

export type RoutePath = (typeof routes)[number]["path"];
