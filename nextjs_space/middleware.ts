import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Behind reverse proxies (Traefik/Coolify), the original host
  // is in x-forwarded-host, not in the host header
  const forwardedHost = request.headers.get('x-forwarded-host')
  const host = forwardedHost || request.headers.get('host') || ''

  // Redirect www to non-www
  if (host.startsWith('www.')) {
    const nonWwwHost = host.replace(/^www\./, '')
    const proto = request.headers.get('x-forwarded-proto') || 'https'
    const path = request.nextUrl.pathname + request.nextUrl.search
    return NextResponse.redirect(`${proto}://${nonWwwHost}${path}`, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except static files and internal Next.js paths
    '/((?!_next/static|_next/image|favicon\\.svg|sw\\.js|manifest\\.json|og-image\\.png|opengraph-image).*)',
  ],
}
