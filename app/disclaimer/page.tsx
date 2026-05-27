import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer – SmartUmrechnen',
  description: 'Haftungsausschluss für die Nutzung der Umrechnungsdienste von SmartUmrechnen.',
  alternates: { canonical: '/disclaimer' },
}

export default function DisclaimerPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        <div className="max-w-[800px] mx-auto px-4 py-12">
          <h1 className="font-display text-3xl font-bold tracking-tight mb-8">Disclaimer</h1>

          <div className="space-y-8 text-sm leading-relaxed text-foreground/90">
            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-base mb-3">1. Allgemeiner Haftungsausschluss</h2>
              <p>
                Die auf SmartUmrechnen bereitgestellten Umrechnungen, Berechnungen und Informationen dienen
                ausschließlich zu allgemeinen Informationszwecken. Obwohl wir uns um Genauigkeit und Aktualität
                bemühen, übernehmen wir keine Gewähr für die Richtigkeit, Vollständigkeit oder Zuverlässigkeit
                der angezeigten Ergebnisse.
              </p>
            </section>

            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-base mb-3">2. Keine professionelle Beratung</h2>
              <p>
                Die auf dieser Website bereitgestellten Umrechnungen und Informationen stellen keine professionelle
                Beratung dar und ersetzen keine fachkundige Beratung in den Bereichen:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Medizin/Gesundheit:</strong> Die Vitamin-Umrechnungen (IU, mg, µg) dienen nur zur
                Orientierung. Für Dosierungsempfehlungen wenden Sie sich bitte an Ihren Arzt oder Apotheker.</li>
                <li><strong>Finanzen:</strong> Wechselkurse werden in Echtzeit abgerufen, können jedoch von den
                tatsächlichen Kursen Ihrer Bank oder Ihres Wechseldienstes abweichen. Für finanzielle Entscheidungen
                konsultieren Sie bitte Ihren Finanzberater.</li>
                <li><strong>Technik/Ingenieurwesen:</strong> Für sicherheitsrelevante oder technische Berechnungen
                (z. B. Druck, Leistung) verwenden Sie bitte kalibrierte Fachsoftware.</li>
              </ul>
            </section>

            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-base mb-3">3. Wechselkurse und Echtzeit-Daten</h2>
              <p>
                Die angezeigten Wechselkurse werden über externe APIs (Frankfurter API / Europäische Zentralbank)
                bereitgestellt. Wir haben keinen Einfluss auf die Verfügbarkeit oder Genauigkeit dieser Daten.
                Im Offline-Modus werden die zuletzt abgerufenen Kurse angezeigt, die veraltet sein können.
                Wechselkurse können sich jederzeit ändern und von den tatsächlich angewandten Kursen bei Banken
                und Finanzdienstleistern abweichen.
              </p>
            </section>

            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-base mb-3">4. Kleider- und Schuhgrößen</h2>
              <p>
                Die angegebenen Größentabellen für Kleidung und Schuhe (einschließlich Kindergrößen) basieren auf
                allgemeinen Richtwerten. Tatsächliche Größen können je nach Hersteller, Marke, Schnitt und Region
                erheblich variieren. Wir empfehlen, vor dem Kauf stets die Größentabelle des jeweiligen Herstellers
                zu konsultieren.
              </p>
            </section>

            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-base mb-3">5. Kochmaße und Lebensmittel</h2>
              <p>
                Umrechnungen von Kochmaßen (Tassen, Esslöffel, Teelöffel etc.) sind Näherungswerte. Das tatsächliche
                Gewicht kann je nach Zutat, Feuchtigkeit und Verdichtung variieren. Für präzise Back- und Kochrezepte
                empfehlen wir die Verwendung einer Küchenwaage.
              </p>
            </section>

            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-base mb-3">6. Vitamin-Umrechnungen</h2>
              <p>
                Die Vitamin-Umrechnungen (IU ↔ mg ↔ µg) basieren auf international anerkannten Umrechnungsfaktoren.
                Dennoch können unterschiedliche Quellen leicht abweichende Faktoren verwenden. Die angezeigten Werte
                stellen keine medizinische Empfehlung dar. Für Dosierungsfragen wenden Sie sich bitte an qualifiziertes
                medizinisches Fachpersonal.
              </p>
            </section>

            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-base mb-3">7. Rundung und Genauigkeit</h2>
              <p>
                Alle Umrechnungsergebnisse unterliegen computerüblichen Rundungen. Bei sehr großen oder sehr kleinen
                Werten können Rundungsfehler auftreten. Für wissenschaftliche oder hochpräzise Anwendungen empfehlen
                wir spezialisierte Fachsoftware.
              </p>
            </section>

            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-base mb-3">8. Haftungsbeschränkung</h2>
              <p>
                Die Nutzung dieser Website erfolgt auf eigene Gefahr. In keinem Fall haften wir für direkte,
                indirekte, zufällige, besondere oder Folgeschäden, die sich aus der Nutzung oder der Unmöglichkeit
                der Nutzung dieser Website oder der darauf bereitgestellten Informationen ergeben, unabhängig davon,
                ob die Haftung auf Vertrag, Delikt, Gefährdungshaftung oder einer anderen Rechtsgrundlage beruht.
              </p>
            </section>

            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-base mb-3">9. Änderungen</h2>
              <p>
                Wir behalten uns das Recht vor, diesen Disclaimer jederzeit und ohne vorherige Ankündigung zu ändern.
                Die Nutzung der Website nach einer solchen Änderung gilt als Zustimmung zu dem geänderten Disclaimer.
              </p>
              <p className="mt-3 text-muted-foreground">Stand: Mai 2026</p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
