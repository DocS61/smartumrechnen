import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Behind reverse proxies (Traefik/Coolify), the original host
  // may be in x-forwarded-host or host header
  const forwardedHost = request.headers.get('x-forwarded-host')
  const hostHeader = request.headers.get('host')
  const host = forwardedHost || hostHeader || ''

  // Debug logging to identify which header carries the www hostname
  console.log('[Middleware] x-forwarded-host:', forwardedHost, '| host:', hostHeader, '| resolved:', host, '| url:', request.url)

  // Redirect www to non-www
  if (host.startsWith('www.')) {
    const nonWwwHost = host.replace(/^www\./, '')
    const proto = request.headers.get('x-forwarded-proto') || 'https'
    const path = request.nextUrl.pathname + request.nextUrl.search
    const redirectUrl = `${proto}://${nonWwwHost}${path}`
    console.log('[Middleware] Redirecting to:', redirectUrl)
    return NextResponse.redirect(redirectUrl, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except static files and internal Next.js paths
    '/((?!_next/static|_next/image|favicon\\.svg|sw\\.js|manifest\\.json|og-image\\.png|opengraph-image).*)',
  ],
}
