export async function getServerSideProps({ res }) {
  // your sitemap generation logic
  res.setHeader('Content-Type', 'text/xml');
  res.write('your sitemap XML here');
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
export async function GET() {
  const services = [
    { name: "Elder Care" },
    { name: "Mother Baby Care" },
    { name: "Nursing Care" },
    { name: "Physiotherapy" },
    { name: "Doctor Consultation" },
    { name: "ICU at Home Critical Care" },
    { name: "Vaccination" },
    { name: "Lab Tests" },
    { name: "Counselling" },
  ];

  const serviceUrls = services.map(service => {
    const slug = service.name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-]/g, '');
    return `
      <url>
        <loc>https://carekwik.com/services/${slug}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>`;
  }).join('');

  const staticUrls = [
    '/',
    '/about',
    '/contact-us',
    '/signup',
    '/login',
    '/medical-equipment'
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
    ${serviceUrls}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
