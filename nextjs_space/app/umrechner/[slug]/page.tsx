import { categories } from '@/lib/converter-data'
import { SiteHeader } from '@/components/site-header'
import { ConverterPage } from './_components/converter-page'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export const dynamic = 'force-static'

const COMPOUND_NAMES: Record<string, string> = {
  laenge: 'Längen-Umrechner',
  gewicht: 'Gewichts-Umrechner',
  temperatur: 'Temperatur-Umrechner',
  waehrung: 'Währungs-Umrechner',
  flaeche: 'Flächen-Umrechner',
  volumen: 'Volumen-Umrechner',
  geschwindigkeit: 'Geschwindigkeits-Umrechner',
  kleidergroessen: 'Kleidergrößen-Umrechner',
  schuhgroessen: 'Schuhgrößen-Umrechner',
  kochmasse: 'Kochmaß-Umrechner',
  vitamine: 'Vitamin-Umrechner',
  datengroessen: 'Datengrößen-Umrechner',
  kraftstoffverbrauch: 'Kraftstoffverbrauchs-Umrechner',
  druck: 'Druck-Umrechner',
  leistung: 'Leistungs-Umrechner',
}

export async function generateStaticParams() {
  return (categories ?? []).map((c: any) => ({ slug: c?.slug ?? '' }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const cat = categories?.find((c: any) => c?.slug === params?.slug)
  if (!cat) return { title: 'Umrechner' }
  const compoundName = COMPOUND_NAMES[params?.slug] ?? `${cat?.name ?? ''}-Umrechner`
  return {
    title: `${compoundName} – SmartUmrechnen`,
    description: `Kostenloser ${compoundName}: ${cat?.description ?? ''}. Schnell, präzise und offline verfügbar.`,
    openGraph: {
      title: `${compoundName} – SmartUmrechnen`,
      description: cat?.description ?? '',
      type: 'website',
      locale: 'de_DE',
    },
  }
}

export default function ConverterPageWrapper({ params }: { params: { slug: string } }) {
  const cat = categories?.find((c: any) => c?.slug === params?.slug)
  if (!cat) return notFound()

  return (
    <>
      <SiteHeader />
      <ConverterPage slug={params?.slug ?? ''} />
    </>
  )
}
