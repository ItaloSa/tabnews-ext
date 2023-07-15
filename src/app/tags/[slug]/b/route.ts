import { makeBadge } from 'badge-maker';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const postSlug = request.nextUrl.searchParams.get('p')

  // console.log(request.headers) // gets where request comes from
  // console.log(request.nextUrl)
  console.log({postSlug, params})

  const format = {
    label: 'tag',
    message: params.slug || 'unknown',
    color: 'green',
  };

  const svg = makeBadge(format);  

  return new Response(svg, {
    headers: {
      'Content-Type': `image/svg+xml`,
    },
  });
}
