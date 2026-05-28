'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

// Separate component for tracking page views (needs useSearchParams which requires Suspense)
function GAPageViewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!GA_ID || !pathname) return
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
    ;(window as any).gtag?.('config', GA_ID, { page_path: url })
  }, [pathname, searchParams])

  return null
}

export function GoogleAnalytics() {
  if (!GA_ID) return null

  return (
    <>
      {/* Google Consent Mode: Default auf denied setzen BEVOR gtag.js lädt */}
      <Script
        id="ga-consent-default"
        strategy="beforeInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'wait_for_update': 2000
          });
          gtag('set', 'ads_data_redaction', true);
        `}
      </Script>

      {/* gtag.js laden */}
      <Script
        id="ga-gtag"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      {/* GA konfigurieren */}
      <Script
        id="ga-config"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            anonymize_ip: true,
            send_page_view: true
          });
        `}
      </Script>

      {/* Usercentrics Consent-Änderungen abhören */}
      <Script
        id="uc-consent-listener"
        strategy="afterInteractive"
      >
        {`
          window.addEventListener('UC_UI_CMP_EVENT', function(e) {
            if (e && e.detail && e.detail.type === 'ACCEPT_ALL') {
              gtag('consent', 'update', {
                'analytics_storage': 'granted',
                'ad_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted'
              });
            } else if (e && e.detail && e.detail.type === 'DENY_ALL') {
              gtag('consent', 'update', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied'
              });
            } else if (e && e.detail && e.detail.type === 'SAVE') {
              // Granulare Einwilligung: UC prüft einzelne Services
              if (typeof UC_UI !== 'undefined') {
                var analyticsConsent = UC_UI.getServicesBaseInfo()
                  .some(function(s) {
                    return s.name && s.name.toLowerCase().indexOf('google analytics') !== -1 && s.consent && s.consent.status === true;
                  });
                var adConsent = UC_UI.getServicesBaseInfo()
                  .some(function(s) {
                    return s.name && s.name.toLowerCase().indexOf('adsense') !== -1 && s.consent && s.consent.status === true;
                  });
                gtag('consent', 'update', {
                  'analytics_storage': analyticsConsent ? 'granted' : 'denied',
                  'ad_storage': adConsent ? 'granted' : 'denied',
                  'ad_user_data': adConsent ? 'granted' : 'denied',
                  'ad_personalization': adConsent ? 'granted' : 'denied'
                });
              }
            }
          });
        `}
      </Script>

      {/* SPA Page View Tracking */}
      <Suspense fallback={null}>
        <GAPageViewTracker />
      </Suspense>
    </>
  )
}
