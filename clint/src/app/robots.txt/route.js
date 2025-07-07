export async function GET() {
  const content = `
User-agent: *
Allow: /
Disallow: /management/bookings
Sitemap: https://carekwik.com/sitemap.xml
`;

  return new Response(content.trim(), {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
