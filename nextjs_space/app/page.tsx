import { HomeContent } from '@/components/home-content'
import { SiteHeader } from '@/components/site-header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SmartUmrechnen – Kostenloser Online-Umrechner für 15 Einheiten',
  description: 'Rechne Länge, Gewicht, Temperatur, Währung, Fläche, Volumen, Geschwindigkeit und 8 weitere Kategorien sofort um. Kostenlos, präzise, mit Live-Kursen und Offline-Modus.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SmartUmrechnen – Kostenloser Online-Umrechner für 15 Einheiten',
    description: 'Rechne Länge, Gewicht, Temperatur, Währung und 11 weitere Kategorien sofort um. Kostenlos, präzise und offline verfügbar.',
    type: 'website',
    locale: 'de_DE',
  },
}

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <HomeContent />
    </>
  )
}
