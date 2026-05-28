import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''

  // Redirect www to non-www
  if (host.startsWith('www.')) {
    const nonWwwHost = host.replace(/^www\./, '')
    const url = request.nextUrl.clone()
    url.host = nonWwwHost
    url.protocol = 'https'
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except static files and internal Next.js paths
    '/((?!_next/static|_next/image|favicon\\.svg|sw\\.js|manifest\\.json|og-image\\.png|opengraph-image).*)',
  ],
}
