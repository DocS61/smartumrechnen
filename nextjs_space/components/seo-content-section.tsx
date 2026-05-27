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
