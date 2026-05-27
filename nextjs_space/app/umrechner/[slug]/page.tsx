import { categories } from '@/lib/converter-data'
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
  return {
    title: `${cat?.name ?? ''} Umrechner – SmartUmrechnen`,
    description: `Kostenloser ${cat?.name ?? ''}-Umrechner: ${cat?.description ?? ''}. Schnell, präzise und offline verfügbar.`,
    openGraph: {
      title: `${cat?.name ?? ''} Umrechner – SmartUmrechnen`,
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
