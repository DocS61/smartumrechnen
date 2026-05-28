'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense, useRef, useState } from 'react'

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

// Inject gtag.js and configure GA4 via DOM manipulation
function GAScriptLoader() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (!GA_ID || mounted) return
    setMounted(true)

    // Ensure dataLayer and gtag exist
    window.dataLayer = window.dataLayer || []
    if (!window.gtag) {
      window.gtag = function (...args: any[]) {
        window.dataLayer.push(args)
      }
    }

    // Load gtag.js
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    script.async = true
    document.head.appendChild(script)

    // Configure GA4
    window.gtag('js', new Date())
    window.gtag('config', GA_ID, {
      anonymize_ip: true,
      send_page_view: true,
    })

  }, [mounted])

  return null
}

// SPA Page View Tracking – sendet page_view bei Route-Wechsel
function PageViewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!GA_ID || !pathname) return
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
    ;(window as any).gtag?.('config', GA_ID, { page_path: url })
  }, [pathname, searchParams])

  return null
}

export function GAPageViewTracker() {
  if (!GA_ID) return null
  return (
    <>
      <GAScriptLoader />
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  )
}

// TypeScript declarations
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}
