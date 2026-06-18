'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calculator, ArrowRight, Sparkles, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { categories } from '@/lib/converter-data'
import { getSmartSuggestions, getHistory } from '@/lib/local-storage'
import { FadeIn, SlideIn, Stagger, StaggerItem, HoverLift } from '@/components/ui/animate'
import { HistoryPanel } from '@/components/history-panel'
import { CountryPresets } from '@/components/country-presets'
import { SiteFooter } from '@/components/site-footer'
import { PopularConversions, FAQSection } from '@/components/seo-content-section'
import { popularConversions, homeFAQs } from '@/lib/seo-content'

export function HomeContent() {
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [hasHistory, setHasHistory] = useState(false)

  useEffect(() => {
    const s = getSmartSuggestions()
    setSuggestions(s ?? [])
    setHasHistory((getHistory()?.length ?? 0) > 0)
  }, [])

  const DEFAULT_SUGGESTIONS = ['laenge', 'gewicht', 'temperatur', 'waehrung', 'flaeche']

  const suggestedCategories = (() => {
    const userSlugs = suggestions ?? []
    // Ergänze mit Defaults, falls weniger als 5 Vorschläge
    const combined = [...userSlugs]
    for (const slug of DEFAULT_SUGGESTIONS) {
      if (combined.length >= 5) break
      if (!combined.includes(slug)) combined.push(slug)
    }
    return categories?.filter((c: any) => combined.includes(c?.slug))
      .sort((a: any, b: any) => combined.indexOf(a?.slug) - combined.indexOf(b?.slug))
  })()

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-[1200px] mx-auto px-4 py-16 md:py-24">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="secondary" className="mb-4 px-4 py-1.5">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                15 professionelle Umrechner
              </Badge>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Intelligente <span className="text-primary">Einheiten</span>-Umrechnung
              </h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Schnell, präzise und kostenlos. Von Länge über Währung bis Vitamine –
                alles an einem Ort mit Smart-Vorschlägen und Offline-Modus.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  100 % kostenlos
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Ohne Anmeldung
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Offline verfügbar
                </span>
              </div>
              <div className="flex justify-center gap-3">
                <Link href="#alle">
                  <Button size="lg" className="gap-2">
                    <Calculator className="w-4 h-4" />
                    Alle Umrechner
                  </Button>
                </Link>
                <Link href="/umrechner/waehrung">
                  <Button size="lg" variant="outline" className="gap-2">
                    Live-Währung
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Smart Suggestions – immer sichtbar mit Defaults */}
      {(suggestedCategories?.length ?? 0) > 0 && (
        <section className="max-w-[1200px] mx-auto px-4 py-8">
          <SlideIn from="left">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h2 className="font-display font-semibold text-lg">{(suggestions?.length ?? 0) > 0 ? 'Deine häufigsten Umrechner' : 'Beliebte Umrechner'}</h2>
            </div>
          </SlideIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {(suggestedCategories ?? []).map((cat: any, i: number) => {
              const Icon = cat?.icon
              return (
                <Link key={cat?.slug} href={`/umrechner/${cat?.slug}`}>
                  <HoverLift>
                    <Card className="h-full cursor-pointer border-primary/20">
                      <CardContent className="p-4 text-center">
                        {Icon && <Icon className="w-6 h-6 mx-auto mb-2" style={{ color: cat?.color ?? '#0EA5E9' }} />}
                        <p className="text-sm font-medium">{cat?.shortName ?? ''}</p>
                      </CardContent>
                    </Card>
                  </HoverLift>
                </Link>
              )
            })}
          </div>
        </section>
      )}

      {/* All Categories */}
      <section id="alle" className="max-w-[1200px] mx-auto px-4 py-12">
        <FadeIn>
          <h2 className="font-display text-2xl font-bold tracking-tight mb-2">Alle Umrechner</h2>
          <p className="text-muted-foreground mb-8">Wähle eine Kategorie, um sofort loszulegen.</p>
        </FadeIn>

        <Stagger staggerDelay={0.05}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(categories ?? []).map((cat: any) => {
              const Icon = cat?.icon
              return (
                <StaggerItem key={cat?.slug}>
                  <Link href={`/umrechner/${cat?.slug}`}>
                    <HoverLift>
                      <Card className="h-full cursor-pointer group">
                        <CardContent className="p-5 flex items-start gap-4">
                          <div
                            className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${cat?.color ?? '#0EA5E9'}15` }}
                          >
                            {Icon && <Icon className="w-5 h-5" style={{ color: cat?.color ?? '#0EA5E9' }} />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm mb-0.5 group-hover:text-primary transition-colors">
                              {cat?.name ?? ''}
                            </h3>
                            <p className="text-xs text-muted-foreground line-clamp-2">
                              {cat?.description ?? ''}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                        </CardContent>
                      </Card>
                    </HoverLift>
                  </Link>
                </StaggerItem>
              )
            })}
          </div>
        </Stagger>
      </section>

      {/* Häufige Umrechnungen */}
      <PopularConversions conversions={popularConversions} />

      {/* FAQ */}
      <FAQSection faqs={homeFAQs} title="Häufige Fragen zu SmartUmrechnen" />

      {/* Bottom: Presets + History */}
      <section className="max-w-[1200px] mx-auto px-4 py-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CountryPresets />
          <HistoryPanel />
        </div>
      </section>

      <SiteFooter />

      {/* JSON-LD WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'SmartUmrechnen',
            url: 'https://smartumrechnen.de',
            description: 'Kostenloser Online-Umrechner für 15 Einheiten: Länge, Gewicht, Temperatur, Währung und mehr.',
            applicationCategory: 'UtilityApplication',
            operatingSystem: 'All',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
            inLanguage: 'de',
            author: { '@type': 'Person', name: 'Dr. Hartmut Sauer' },
          }),
        }}
      />
    </main>
  )
}
