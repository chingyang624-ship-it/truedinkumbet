import type { APIRoute } from 'astro';
import {
  articles,
  getArticleSlug,
  isArticleIndexable,
} from '@components/blog/casino-review/CasinoReviewArticleContent';

const SITE_URL = 'https://truedinkumbetaucasino.com';
const LAST_MODIFIED = '2026-08-10';

const staticPaths = [
  '/',
  '/about/',
  '/app-download/',
  '/blog/category/casino-review/',
  '/crypto-casino/',
  '/e-wallet-casino/',
  '/fishing/',
  '/info-centre/',
  '/live-casino/',
  '/responsible-gaming/',
  '/reviews/',
  '/slots/',
  '/sports/',
  '/terms-conditions/',
];

const articlePaths = [...new Set(articles.filter(isArticleIndexable).map((article) =>
  `/blog/casino-review/${getArticleSlug(article)}/`
))];

export const GET: APIRoute = () => {
  const urls = [...staticPaths, ...articlePaths]
    .map((path) => `  <url>\n    <loc>${SITE_URL}${path}</loc>\n    <lastmod>${LAST_MODIFIED}</lastmod>\n  </url>`)
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    },
  );
};
