import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum – SmartUmrechnen',
  description: 'Impressum und Angaben gemäß § 5 DDG für SmartUmrechnen.',
  alternates: { canonical: '/impressum' },
}

export default function ImpressumPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        <div className="max-w-[800px] mx-auto px-4 py-12">
          <h1 className="font-display text-3xl font-bold tracking-tight mb-8">Impressum</h1>

          <div className="space-y-8 text-sm leading-relaxed text-foreground/90">
            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-base mb-3">Angaben gemäß § 5 DDG</h2>
              <p>Dr. Hartmut Sauer<br />Weithartstraße 6<br />88512 Mengen<br />Deutschland</p>
            </section>

            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-base mb-3">Kontakt</h2>
              <p>E-Mail: hello@new-level-life.de</p>
              <p className="mt-2 text-muted-foreground">
                Bitte nutzen Sie für sämtliche Anfragen ausschließlich die oben genannte E-Mail-Adresse.
                Wir bemühen uns, Ihre Anfrage innerhalb von 48 Stunden zu beantworten.
              </p>
            </section>

            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-base mb-3">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
              <p>Dr. Hartmut Sauer<br />Weithartstraße 6<br />88512 Mengen</p>
            </section>

            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-base mb-3">Haftung für Inhalte</h2>
              <p>
                Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
                Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
                Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
                10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
              <p className="mt-3">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
                bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
                konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
                Inhalte umgehend entfernen.
              </p>
            </section>

            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-base mb-3">Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
                Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
                Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p className="mt-3">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
                Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                umgehend entfernen.
              </p>
            </section>

            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-base mb-3">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="mt-3">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
                beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
                Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
