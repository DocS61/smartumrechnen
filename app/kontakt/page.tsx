import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Kontakt – SmartUmrechnen',
  description: 'Kontaktiere das SmartUmrechnen-Team. Fragen, Feedback oder Verbesserungsvorschläge – wir freuen uns auf deine Nachricht.',
  alternates: { canonical: '/kontakt' },
  openGraph: {
    title: 'Kontakt – SmartUmrechnen',
    description: 'Kontaktiere das SmartUmrechnen-Team. Fragen, Feedback oder Verbesserungsvorschläge.',
    type: 'website',
    locale: 'de_DE',
  },
}

export default function KontaktPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        <div className="max-w-[800px] mx-auto px-4 py-12">
          <h1 className="font-display text-3xl font-bold tracking-tight mb-4">Kontakt</h1>
          <p className="text-lg text-muted-foreground mb-10">
            Du hast eine Frage, einen Verbesserungsvorschlag oder möchtest einen Fehler melden? Schreib uns – wir antworten in der Regel innerhalb von 48 Stunden.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <ContactForm />
            </div>
            <div className="space-y-6">
              <div className="p-5 rounded-xl border border-border bg-card">
                <h2 className="font-semibold text-base mb-3">Direkt per E-Mail</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Du kannst uns auch direkt schreiben:
                </p>
                <a href="mailto:hello@new-level-life.de" className="text-sm text-primary hover:underline font-medium mt-2 block">
                  hello@new-level-life.de
                </a>
              </div>
              <div className="p-5 rounded-xl border border-border bg-card">
                <h2 className="font-semibold text-base mb-3">Häufige Anliegen</h2>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Fehler bei einer Umrechnung</li>
                  <li>• Vorschlag für neue Einheiten</li>
                  <li>• Fragen zur Datenschutzerklärung</li>
                  <li>• Feedback zur Bedienbarkeit</li>
                  <li>• Kooperationsanfragen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
