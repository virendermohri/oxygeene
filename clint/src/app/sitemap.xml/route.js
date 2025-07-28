export async function GET() {
  const baseUrl = 'https://carekwik.com';

  const staticUrls = [
    '/',
    '/about',
    '/contact-us',
    '/signup',
    '/login',
    '/medical-equipment',
    '/privacy-policy',
    '/terms',
  ];

  const dynamicUrls = [
    // Physiotherapy
    '/physiotherapy-at-home',
    '/physiotherapy-at-home/chandigarh',
    '/physiotherapy-at-home/mohali',
    '/physiotherapy-at-home/panchkula',

    // Elder Care
    '/elder-care-at-home',
    '/elder-care-at-home/chandigarh',
    '/elder-care-at-home/mohali',
    '/elder-care-at-home/panchkula',


    // Mother & Baby Care
    '/mother-baby-care-at-home',
    '/mother-baby-care-at-home/chandigarh',
    '/mother-baby-care-at-home/mohali',
    '/mother-baby-care-at-home/panchkula',

    // ICU at Home
    '/icu-at-home',
    '/icu-at-home/chandigarh',
    '/icu-at-home/mohali',
    '/icu-at-home/panchkula',

    // Lab Test
    '/lab-test-at-home',
    '/lab-test-at-home/chandigarh',
    '/lab-test-at-home/mohali',
    '/lab-test-at-home/panchkula',
    
    //Nursing at home
    '/nursing-care-at-home',
    '/nursing-care-at-home/chandigarh',
    '/nursing-care-at-home/mohali',
    '/nursing-care-at-home/panchkula',
  ];

  const urls = [...staticUrls, ...dynamicUrls]
    .map(
      path => `
    <url>
      <loc>${baseUrl}${path}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>`
    )
    .join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
