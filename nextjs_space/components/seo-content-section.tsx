import { Card, CardContent } from '@/components/ui/card'
import { FadeIn } from '@/components/ui/animate'
import { BookOpen, Table2, HelpCircle, ArrowRight, Equal } from 'lucide-react'
import Link from 'next/link'
import type { SEOContent, FAQ } from '@/lib/seo-content'

// Erklärungstext-Sektion
export function ExplanationSection({ content }: { content: SEOContent }) {
  const { explanation } = content
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-8">
      <FadeIn>
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-primary" />
          <h2 className="font-display font-semibold text-lg">{explanation.title}</h2>
        </div>
        <Card>
          <CardContent className="p-5 md:p-6 space-y-4">
            {explanation.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-muted-foreground leading-relaxed">{p}</p>
            ))}
            {explanation.formula && (
              <div className="mt-4 p-3 bg-muted/50 rounded-lg border border-border">
                <p className="text-xs font-medium text-muted-foreground mb-1">Formeln</p>
                <p className="text-sm font-mono font-medium">{explanation.formula}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </FadeIn>
    </section>
  )
}

// Referenztabelle
export function ReferenceTable({ content }: { content: SEOContent }) {
  const { table } = content
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-4">
      <FadeIn>
        <div className="flex items-center gap-2 mb-4">
          <Table2 className="w-5 h-5 text-primary" />
          <h2 className="font-display font-semibold text-lg">{table.title}</h2>
        </div>
        <Card>
          <CardContent className="p-0 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground">{table.fromLabel}</th>
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground">{table.toLabel}</th>
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-2.5 font-medium">{row.from}</td>
                    <td className="px-4 py-2.5 text-muted-foreground">{row.to}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </FadeIn>
    </section>
  )
}

// FAQ-Sektion mit JSON-LD Schema
export function FAQSection({ faqs, title }: { faqs: FAQ[]; title?: string }) {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-8">
      <FadeIn>
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-primary" />
          <h2 className="font-display font-semibold text-lg">{title ?? 'Häufige Fragen'}</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Card key={i}>
              <CardContent className="p-4 md:p-5">
                <h3 className="font-semibold text-sm mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </FadeIn>

      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  )
}

// Quellenverweise für E-E-A-T
export function SourcesSection({ slug }: { slug: string }) {
  const SOURCES: Record<string, { name: string; url: string; description: string }[]> = {
    laenge: [
      { name: 'BIPM – Bureau International des Poids et Mesures', url: 'https://www.bipm.org', description: 'Definition des Meters und aller SI-Basiseinheiten' },
      { name: 'NIST – National Institute of Standards and Technology', url: 'https://www.nist.gov', description: 'US-amerikanische Referenz für Maßeinheiten' },
    ],
    gewicht: [
      { name: 'BIPM – Internationales Einheitensystem (SI)', url: 'https://www.bipm.org/en/measurement-units', description: 'Definition des Kilogramms über die Planck-Konstante' },
      { name: 'PTB – Physikalisch-Technische Bundesanstalt', url: 'https://de.wikipedia.org/wiki/Physikalisch-Technische_Bundesanstalt', description: 'Deutsches Metrologieinstitut' },
    ],
    temperatur: [
      { name: 'BIPM – Kelvin-Definition', url: 'https://www.bipm.org', description: 'SI-Definition der Temperatureinheit Kelvin' },
      { name: 'WMO – World Meteorological Organization', url: 'https://public.wmo.int', description: 'Internationale Standards für Temperaturmessung' },
    ],
    waehrung: [
      { name: 'Europäische Zentralbank (EZB)', url: 'https://www.ecb.europa.eu', description: 'Referenzkurse für Währungsumrechnung' },
      { name: 'Frankfurter API', url: 'https://www.frankfurter.app', description: 'Datenquelle für Live-Wechselkurse (basierend auf EZB-Daten)' },
    ],
    flaeche: [
      { name: 'SI-Einheitensystem (BIPM)', url: 'https://www.bipm.org', description: 'Quadratmeter als abgeleitete SI-Einheit' },
    ],
    volumen: [
      { name: 'SI-Einheitensystem (BIPM)', url: 'https://www.bipm.org', description: 'Liter und Kubikmeter als Volumeneinheiten' },
    ],
    geschwindigkeit: [
      { name: 'SI-Einheitensystem (BIPM)', url: 'https://www.bipm.org', description: 'Meter pro Sekunde als SI-Geschwindigkeitseinheit' },
      { name: 'ICAO – Int. Zivilluftfahrtorganisation', url: 'https://www.icao.int', description: 'Verwendung von Knoten in der Luftfahrt' },
    ],
    kleidergroessen: [
      { name: 'EN 13402 – Europäische Größenbezeichnung', url: 'https://en.wikipedia.org/wiki/EN_13402', description: 'Europäischer Standard für Konfektionsgrößen' },
    ],
    schuhgroessen: [
      { name: 'ISO 9407 – Shoe sizes (Mondopoint)', url: 'https://en.wikipedia.org/wiki/Shoe_size', description: 'Internationaler Standard zur Schuhgrößenbestimmung' },
    ],
    kochmasse: [
      { name: 'USDA FoodData Central', url: 'https://fdc.nal.usda.gov', description: 'US-Standardmaße für Kochrezepte und Nährwerte' },
    ],
    vitamine: [
      { name: 'WHO – World Health Organization', url: 'https://www.who.int', description: 'Internationale Definition von IU (International Units)' },
      { name: 'U.S. Pharmacopeia (USP)', url: 'https://www.usp.org', description: 'Standardisierung von Vitamin-Einheiten' },
    ],
    datengroessen: [
      { name: 'IEC 80000-13 – Binäre Präfixe', url: 'https://en.wikipedia.org/wiki/ISO/IEC_80000', description: 'Internationaler Standard für binäre Präfixe (KiB, MiB, GiB)' },
      { name: 'IEEE / SI-Präfixe', url: 'https://www.bipm.org', description: 'Dezimale Präfixe für Datenmengen (KB, MB, GB)' },
    ],
    kraftstoffverbrauch: [
      { name: 'EU-Verordnung 715/2007', url: 'https://eur-lex.europa.eu', description: 'Europäische Norm zur Angabe des Kraftstoffverbrauchs in l/100km' },
    ],
    druck: [
      { name: 'SI-Einheitensystem (BIPM)', url: 'https://www.bipm.org', description: 'Pascal als SI-Einheit des Drucks' },
      { name: 'DWD – Deutscher Wetterdienst', url: 'https://www.dwd.de', description: 'Verwendung von hPa in der Meteorologie' },
    ],
    leistung: [
      { name: 'EU-Richtlinie 80/181/EWG', url: 'https://eur-lex.europa.eu', description: 'Verpflichtende Angabe der Motorleistung in kW seit 2010' },
      { name: 'SI-Einheitensystem (BIPM)', url: 'https://www.bipm.org', description: 'Watt als SI-Einheit der Leistung' },
    ],
  }

  const sources = SOURCES[slug]
  if (!sources) return null

  return (
    <section className="max-w-[1200px] mx-auto px-4 py-6">
      <FadeIn>
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-4 h-4 text-muted-foreground" />
          <h3 className="font-semibold text-sm text-muted-foreground">Quellen & Standards</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {sources.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="block p-3 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors group">
              <p className="text-sm font-medium group-hover:text-primary transition-colors">{s.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{s.description}</p>
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}

// Häufige Umrechnungen für die Startseite
export function PopularConversions({ conversions }: { conversions: { from: string; to: string; slug: string }[] }) {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-8">
      <FadeIn>
        <div className="flex items-center gap-2 mb-2">
          <Equal className="w-5 h-5 text-primary" />
          <h2 className="font-display font-semibold text-lg">Häufige Umrechnungen</h2>
        </div>
        <p className="text-muted-foreground text-sm mb-4">Die wichtigsten Umrechnungen auf einen Blick – direkt nutzbar.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          {conversions.map((c, i) => (
            <Link key={i} href={`/umrechner/${c.slug}`}>
              <Card className="h-full cursor-pointer group hover:border-primary/30 transition-colors">
                <CardContent className="p-3.5 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">{c.from}</p>
                    <p className="text-xs text-primary font-semibold">= {c.to}</p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
