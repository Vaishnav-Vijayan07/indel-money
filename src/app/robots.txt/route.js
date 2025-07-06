export async function GET() {
  return new Response(
    `User-agent: *
Disallow:
Sitemap: https://indelmoney.com/sitemap.xml
`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
