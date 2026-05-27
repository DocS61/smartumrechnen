import { categories } from '@/lib/converter-data'
import { COMPOUND_NAMES } from '@/lib/constants'
import { SiteHeader } from '@/components/site-header'
import { ConverterPage } from './_components/converter-page'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export const dynamic = 'force-static'

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
    alternates: {
      canonical: `/umrechner/${params?.slug}`,
    },
    openGraph: {
      title: `${compoundName} – SmartUmrechnen`,
      description: `Kostenloser ${compoundName}: ${cat?.description ?? ''}. Schnell, präzise und offline verfügbar.`,
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
