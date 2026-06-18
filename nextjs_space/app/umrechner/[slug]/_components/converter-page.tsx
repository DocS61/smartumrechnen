'use client'

import { getCategoryBySlug, categories, type ConverterCategory } from '@/lib/converter-data'
import { COMPOUND_NAMES, RELATED_CATEGORIES } from '@/lib/constants'
import { ConverterShell } from '@/components/converter-shell'
import { ConversionChart } from '@/components/conversion-chart'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { FadeIn, SlideIn, HoverLift } from '@/components/ui/animate'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState, useCallback } from 'react'
import { SiteFooter } from '@/components/site-footer'
import { ExplanationSection, ReferenceTable, FAQSection, SourcesSection } from '@/components/seo-content-section'
import { seoContentMap } from '@/lib/seo-content'

// Special converters
import { CurrencyConverter } from '@/components/converters/currency-converter'
import { ClothingConverter } from '@/components/converters/clothing-converter'
import { ShoeConverter } from '@/components/converters/shoe-converter'
import { CookingConverter } from '@/components/converters/cooking-converter'
import { VitaminConverter } from '@/components/converters/vitamin-converter'
import { FuelConverter } from '@/components/converters/fuel-converter'

interface ConverterPageProps {
  slug: string
}

export function ConverterPage({ slug }: ConverterPageProps) {
  const cat = getCategoryBySlug(slug ?? '')
  if (!cat) return <div className="p-8 text-center">Kategorie nicht gefunden.</div>

  const Icon = cat?.icon
  // Intelligente Auswahl verwandter Kategorien
  const relatedSlugs = RELATED_CATEGORIES[slug] ?? []
  const relatedCats = relatedSlugs
    .map(s => (categories ?? []).find((c: ConverterCategory) => c?.slug === s))
    .filter((c): c is ConverterCategory => !!c)
    .slice(0, 4)

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="max-w-[1200px] mx-auto px-4 py-10">
          <FadeIn>
            <div className="flex items-center gap-4 mb-2">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${cat?.color ?? '#0EA5E9'}15` }}
              >
                {Icon && <Icon className="w-6 h-6" style={{ color: cat?.color ?? '#0EA5E9' }} />}
              </div>
              <div>
                <h1 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                  {COMPOUND_NAMES[slug] ?? `${cat?.name ?? ''}-Umrechner`}
                </h1>
                <p className="text-muted-foreground text-sm">{cat?.description ?? ''}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Converter */}
      <section className="max-w-[1200px] mx-auto px-4 -mt-2">
        {renderConverter(cat)}
      </section>

      {/* SEO Content */}
      {seoContentMap[slug] && (
        <>
          <ExplanationSection content={seoContentMap[slug]} />
          <ReferenceTable content={seoContentMap[slug]} />
        </>
      )}

      {/* FAQ */}
      {seoContentMap[slug]?.faqs && (
        <FAQSection faqs={seoContentMap[slug].faqs} />
      )}

      {/* Quellenverweise */}
      <SourcesSection slug={slug} />

      {/* Related Converters */}
      <section className="max-w-[1200px] mx-auto px-4 py-8 pb-16">
        <SlideIn from="bottom">
          <h2 className="font-display font-semibold text-lg mb-4">Weitere Umrechner</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedCats.map((c: ConverterCategory) => {
              const RelIcon = c?.icon
              return (
                <Link key={c?.slug} href={`/umrechner/${c?.slug}`}>
                  <HoverLift>
                    <Card className="cursor-pointer group">
                      <CardContent className="p-4 flex items-center gap-3">
                        {RelIcon && <RelIcon className="w-5 h-5" style={{ color: c?.color ?? '#0EA5E9' }} />}
                        <span className="text-sm font-medium group-hover:text-primary transition-colors">{c?.shortName ?? ''}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-muted-foreground ml-auto" />
                      </CardContent>
                    </Card>
                  </HoverLift>
                </Link>
              )
            })}
          </div>
        </SlideIn>
      </section>

      <SiteFooter />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: `${COMPOUND_NAMES[slug] ?? `${cat?.name ?? ''}-Umrechner`} - SmartUmrechnen`,
            description: cat?.description ?? '',
            applicationCategory: 'UtilityApplication',
            operatingSystem: 'All',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
            inLanguage: 'de',
          }),
        }}
      />
    </main>
  )
}

function renderConverter(cat: ConverterCategory) {
  switch (cat?.slug) {
    case 'waehrung':
      return <CurrencyConverter />
    case 'kleidergroessen':
      return <ClothingConverter />
    case 'schuhgroessen':
      return <ShoeConverter />
    case 'kochmasse':
      return <CookingConverter />
    case 'vitamine':
      return <VitaminConverter />
    case 'kraftstoffverbrauch':
      return <FuelConverter />
    default:
      return (
        <div className="space-y-6">
          <ConverterShell
            categorySlug={cat?.slug ?? ''}
            categoryName={cat?.name ?? ''}
            categoryColor={cat?.color ?? '#0EA5E9'}
            units={cat?.units ?? []}
            defaultFrom={cat?.defaultFrom ?? ''}
            defaultTo={cat?.defaultTo ?? ''}
          />
          <ConversionChart
            units={cat?.units ?? []}
            fromUnit={cat?.defaultFrom ?? ''}
            value={1}
            convert={(value: number, from: string, to: string) => {
              const fromDef = (cat?.units ?? [])?.find((u: any) => u?.id === from)
              const toDef = (cat?.units ?? [])?.find((u: any) => u?.id === to)
              if (!fromDef?.toBase || !toDef?.fromBase) return value
              return toDef.fromBase(fromDef.toBase(value))
            }}
            color={cat?.color ?? '#0EA5E9'}
          />
        </div>
      )
  }
}
