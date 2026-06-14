import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import type { Metadata } from 'next'
import { Calculator, Shield, Zap, Globe, BookOpen, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Über uns – SmartUmrechnen',
  description: 'Erfahre mehr über SmartUmrechnen: Wer steckt hinter dem Projekt, unsere Methodik und warum du unseren Umrechnungen vertrauen kannst.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'Über uns – SmartUmrechnen',
    description: 'Erfahre mehr über SmartUmrechnen: Wer steckt hinter dem Projekt, unsere Methodik und warum du unseren Umrechnungen vertrauen kannst.',
    type: 'website',
    locale: 'de_DE',
  },
}

const VALUES = [
  {
    icon: Shield,
    title: 'Genauigkeit',
    text: 'Alle Umrechnungsfaktoren basieren auf international anerkannten Standards (SI-Einheitensystem, ISO-Normen) und werden regelmäßig geprüft.',
  },
  {
    icon: Zap,
    title: 'Geschwindigkeit',
    text: 'Alle Berechnungen laufen direkt in deinem Browser – ohne Server-Anfragen. Das Ergebnis erscheint sofort während der Eingabe.',
  },
  {
    icon: Globe,
    title: 'Verfügbarkeit',
    text: 'SmartUmrechnen funktioniert auf jedem Gerät, in jedem Browser und dank Progressive Web App (PWA) sogar ohne Internetverbindung.',
  },
  {
    icon: BookOpen,
    title: 'Transparenz',
    text: 'Wir erklären die Hintergründe: Woher kommen die Einheiten? Wie lauten die Formeln? Jeder Umrechner enthält redaktionelle Erklärungstexte und FAQs.',
  },
]

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        <div className="max-w-[800px] mx-auto px-4 py-12">
          <h1 className="font-display text-3xl font-bold tracking-tight mb-4">Über SmartUmrechnen</h1>
          <p className="text-lg text-muted-foreground mb-10">
            SmartUmrechnen ist ein unabhängiges, deutschsprachiges Projekt für präzise Einheiten-Umrechnung – kostenlos, werbefrei nutzbar und ohne Registrierung.
          </p>

          {/* Mission */}
          <section className="p-6 rounded-xl border border-border bg-card mb-8">
            <h2 className="font-semibold text-xl mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-primary" />
              Unsere Mission
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-foreground/90">
              <p>
                Im Alltag stoßen wir ständig auf unterschiedliche Maßeinheiten: Beim Online-Shopping aus den USA werden Maße in Zoll und Pfund angegeben, Rezepte aus dem englischsprachigen Raum verwenden Cups und Ounces, und wer internationale Nachrichten liest, begegnet Temperaturen in Fahrenheit.
              </p>
              <p>
                SmartUmrechnen wurde entwickelt, um diese Umrechnungen so einfach, schnell und verlässlich wie möglich zu machen. Unser Ziel: Ein einziges Tool, das alle gängigen Einheiten abdeckt – von klassischen physikalischen Größen wie Länge, Gewicht und Temperatur bis hin zu Alltagsthemen wie Kleidergrößen, Kochmaße und Vitamineinheiten.
              </p>
              <p>
                Dabei legen wir besonderen Wert auf <strong>inhaltliche Qualität</strong>: Jeder unserer 15 Umrechner wird von redaktionellen Erklärungstexten begleitet, die die Hintergründe der Maßeinheiten beleuchten – von der historischen Entstehung bis zur modernen Definition.
              </p>
            </div>
          </section>

          {/* Wer steckt dahinter */}
          <section className="p-6 rounded-xl border border-border bg-card mb-8">
            <h2 className="font-semibold text-xl mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Wer steckt dahinter?
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-foreground/90">
              <p>
                SmartUmrechnen wird von <strong>Dr. Hartmut Sauer</strong> betrieben – einem promovierten Naturwissenschaftler mit langjähriger Erfahrung in der Analyse und Aufbereitung technischer Daten. Die Verbindung aus wissenschaftlichem Hintergrund und dem Anspruch, komplexe Sachverhalte verständlich darzustellen, spiegelt sich in jedem Aspekt des Projekts wider.
              </p>
              <p>
                Das Projekt ist als unabhängige Informationsplattform konzipiert und wird kontinuierlich weiterentwickelt. Neue Umrechner, zusätzliche Hintergrundartikel und technische Verbesserungen werden regelmäßig veröffentlicht.
              </p>
            </div>
          </section>

          {/* Methodik & Datengrundlage */}
          <section className="p-6 rounded-xl border border-border bg-card mb-8">
            <h2 className="font-semibold text-xl mb-4">Methodik & Datengrundlage</h2>
            <div className="space-y-4 text-sm leading-relaxed text-foreground/90">
              <p>
                Die Umrechnungsfaktoren in SmartUmrechnen stammen aus offiziellen und wissenschaftlich anerkannten Quellen:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>SI-Einheitensystem</strong> – Das Internationale Einheitensystem, herausgegeben vom Bureau International des Poids et Mesures (BIPM), bildet die Grundlage für alle physikalischen Umrechnungen.</li>
                <li><strong>Währungskurse</strong> – Live-Wechselkurse werden über die Frankfurter API (Datenquelle: Europäische Zentralbank) bezogen und automatisch aktualisiert.</li>
                <li><strong>Kleider- und Schuhgrößen</strong> – Basieren auf den gängigen Größentabellen der jeweiligen Märkte (EU, US, UK) und werden aus offiziellen Branchenstandards abgeleitet.</li>
                <li><strong>Vitamineinheiten</strong> – Die Umrechnung zwischen IU (International Units), Mikrogramm und Milligramm folgt den Definitionen der WHO und der U.S. Pharmacopeia.</li>
                <li><strong>Kochmaße</strong> – Die Umrechnungen berücksichtigen die in Nordamerika und Europa gebräuchlichen Definitionen (US customary vs. metrisch).</li>
              </ul>
              <p>
                Alle Berechnungen werden clientseitig durchgeführt – deine Eingaben verlassen nie deinen Browser. Es werden keine Nutzerdaten an Server übertragen oder gespeichert.
              </p>
            </div>
          </section>

          {/* Werte */}
          <section className="mb-8">
            <h2 className="font-semibold text-xl mb-6">Unsere Werte</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VALUES.map((v) => {
                const Icon = v.icon
                return (
                  <div key={v.title} className="p-5 rounded-xl border border-border bg-card">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">{v.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Kontakt-Hinweis */}
          <section className="p-6 rounded-xl border border-border bg-card">
            <h2 className="font-semibold text-xl mb-3">Feedback & Kontakt</h2>
            <p className="text-sm text-foreground/90 leading-relaxed">
              Du hast einen Fehler entdeckt, einen Verbesserungsvorschlag oder eine Frage? Wir freuen uns über jede Rückmeldung.
              Nutze unser{' '}
              <a href="/kontakt" className="text-primary hover:underline font-medium">Kontaktformular</a>{' '}
              oder schreibe eine E-Mail an{' '}
              <a href="mailto:hello@new-level-life.de" className="text-primary hover:underline font-medium">hello@new-level-life.de</a>.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
