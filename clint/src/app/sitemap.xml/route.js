// app/sitemap/route.js

export async function GET() {
  const staticUrls = [
    '/',
    '/services',
    '/about',
    '/contact-us',
    '/signup',
    '/login',
    '/medical-equipment',
    '/privacy-policy',
    '/terms'
  ].map(path => `
    <url>
      <loc>https://carekwik.com${path}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
  `).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticUrls}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
