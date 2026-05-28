import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung – SmartUmrechnen',
  description: 'Datenschutzerklärung gemäß DSGVO für SmartUmrechnen.',
  alternates: { canonical: '/datenschutz' },
}

export default function DatenschutzPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        <div className="max-w-[800px] mx-auto px-4 py-12">
          <h1 className="font-display text-3xl font-bold tracking-tight mb-8">Datenschutzerklärung</h1>

          <div className="space-y-8 text-sm leading-relaxed text-foreground/90">
            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-base mb-3">1. Verantwortlicher</h2>
              <p>
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer datenschutzrechtlicher
                Bestimmungen ist:
              </p>
              <p className="mt-3">
                Dr. Hartmut Sauer<br />Weithartstraße 6<br />88512 Mengen<br />Deutschland
              </p>
              <p className="mt-3">E-Mail: hello@new-level-life.de</p>
            </section>

            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-base mb-3">2. Einwilligungsverwaltung (Consent Management)</h2>
              <p>
                Diese Website nutzt die Consent-Management-Plattform <strong>Usercentrics</strong> (Usercentrics GmbH,
                Sendlinger Straße 7, 80331 München), um Ihre Einwilligung zur Speicherung von Cookies und zur
                Verarbeitung personenbezogener Daten einzuholen und zu verwalten. Beim Besuch der Website wird ein
                sogenannter Consent-Banner angezeigt, über den Sie Ihre Einwilligungen erteilen oder verweigern können.
              </p>
              <p className="mt-3">
                Usercentrics speichert Ihre Einwilligungsentscheidung in einem Cookie auf Ihrem Endgerät. Dieses Cookie
                enthält keine personenbezogenen Daten, sondern lediglich die Information, welche Einwilligungen Sie
                erteilt oder verweigert haben. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO
                (rechtliche Verpflichtung) in Verbindung mit Art. 7 Abs. 1 DSGVO (Nachweis der Einwilligung).
              </p>
              <p className="mt-3">
                Sie können Ihre Einwilligungseinstellungen jederzeit über das Consent-Banner anpassen, das Sie über
                den Link im Footer der Website erneut aufrufen können. Weitere Informationen finden Sie in der{' '}
                <a href="https://usercentrics.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Datenschutzerklärung von Usercentrics</a>.
              </p>
            </section>

            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-base mb-3">3. Allgemeines zur Datenverarbeitung</h2>
              <p>
                Diese Website verarbeitet personenbezogene Daten grundsätzlich nur, soweit dies zur Bereitstellung einer
                funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung
                personenbezogener Daten erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in
                solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich
                ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.
              </p>
            </section>

            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-base mb-3">4. Hosting und Content Delivery</h2>
              <p>
                Diese Website wird bei der <strong>Hetzner Online GmbH</strong> (Industriestr. 25, 91710 Gunzenhausen,
                Deutschland) gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf
                den Servern von Hetzner in Deutschland gespeichert. Hierbei kann es sich v.a. um IP-Adressen,
                Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe
                und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
              <p className="mt-3">
                Hetzner verarbeitet die Daten in unserem Auftrag und ist vertraglich verpflichtet, die Daten
                ausschließlich nach unserer Weisung zu verarbeiten und ein angemessenes Schutzniveau zu gewährleisten.
                Wir haben einen Auftragsverarbeitungsvertrag (AVV) mit Hetzner geschlossen. Weitere Informationen
                finden Sie in der{' '}
                <a href="https://www.hetzner.com/de/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Datenschutzerklärung von Hetzner</a>.
              </p>
              <p className="mt-3">
                Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden
                Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten
                Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </section>

            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-base mb-3">5. Zugriffsdaten und Server-Logfiles</h2>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien,
                die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="mt-3">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Grundlage für die
                Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, der die Verarbeitung von Daten zur Erfüllung eines
                Vertrags oder vorvertraglicher Maßnahmen gestattet.
              </p>
            </section>

            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-base mb-3">6. Lokale Speicherung (LocalStorage)</h2>
              <p>
                Diese Website verwendet die sogenannte LocalStorage-Technologie Ihres Browsers. Dabei werden Daten
                ausschließlich lokal auf Ihrem Gerät gespeichert und nicht an unsere Server übertragen. Diese Daten
                umfassen:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Ihren Umrechnungsverlauf (letzte Berechnungen)</li>
                <li>Ihre Favoriten (bevorzugte Umrechner)</li>
                <li>Zwischengespeicherte Wechselkurse für den Offline-Modus</li>
                <li>Ihre Designpräferenz (hell/dunkel)</li>
              </ul>
              <p className="mt-3">
                Diese Daten verlassen zu keinem Zeitpunkt Ihr Gerät. Sie können die gespeicherten Daten jederzeit über
                die Einstellungen Ihres Browsers löschen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                Interesse an einer benutzerfreundlichen Gestaltung).
              </p>
            </section>

            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-base mb-3">7. Externe APIs</h2>
              <p>
                Für die Währungsumrechnung verwenden wir die Frankfurter API (api.frankfurter.app), einen öffentlich
                zugänglichen Dienst der Europäischen Zentralbank. Beim Abruf von Wechselkursen wird Ihre IP-Adresse
                an diesen Dienst übermittelt. Weitere Informationen finden Sie in der Datenschutzerklärung des
                jeweiligen Anbieters.
              </p>
              <p className="mt-3">
                Die Nutzung erfolgt auf Grundlage unseres berechtigten Interesses an der Bereitstellung aktueller
                Wechselkurse gemäß Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </section>

            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-base mb-3">8. Google Fonts (lokal)</h2>
              <p>
                Diese Website nutzt Schriftarten ("Google Fonts"), die lokal eingebunden werden. Es findet keine
                Verbindung zu Servern von Google statt. Es werden keine Daten an Google übertragen.
              </p>
            </section>

            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-base mb-3">9. Google AdSense</h2>
              <p>
                Diese Website kann Werbeanzeigen über Google AdSense enthalten. Google AdSense verwendet Cookies und
                Web Beacons, um relevante Werbung zu schalten. Google kann hierbei Informationen (einschließlich Ihrer
                IP-Adresse) an Server in den USA übertragen und dort speichern.
              </p>
              <p className="mt-3">
                Google AdSense wird erst nach Ihrer ausdrücklichen Einwilligung über unseren Consent-Manager
                (Usercentrics) aktiviert. Sie können Ihre Einwilligung jederzeit über das Consent-Banner widerrufen.
                Darüber hinaus können Sie die Verwendung von Cookies durch Google über die Seite
                zur <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-primary underline">Google-Datenschutzerklärung für Werbung</a> deaktivieren.
                Rechtsgrundlage ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
              </p>
            </section>

            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-base mb-3">10. SSL-/TLS-Verschlüsselung</h2>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine
                SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile
                des Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </section>

            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-base mb-3">11. Ihre Rechte</h2>
              <p>Sie haben gemäß DSGVO folgende Rechte:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Auskunft</strong> (Art. 15 DSGVO) – Recht auf Auskunft über Ihre gespeicherten Daten</li>
                <li><strong>Berichtigung</strong> (Art. 16 DSGVO) – Recht auf Berichtigung unrichtiger Daten</li>
                <li><strong>Löschung</strong> (Art. 17 DSGVO) – Recht auf Löschung Ihrer Daten</li>
                <li><strong>Einschränkung</strong> (Art. 18 DSGVO) – Recht auf Einschränkung der Verarbeitung</li>
                <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO) – Recht auf Datenübertragung</li>
                <li><strong>Widerspruch</strong> (Art. 21 DSGVO) – Recht auf Widerspruch gegen die Verarbeitung</li>
              </ul>
              <p className="mt-3">
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: hello@new-level-life.de
              </p>
            </section>

            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-base mb-3">12. Beschwerderecht bei einer Aufsichtsbehörde</h2>
              <p>
                Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen das
                Recht auf Beschwerde bei einer Aufsichtsbehörde zu, wenn Sie der Ansicht sind, dass die Verarbeitung
                der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
              </p>
            </section>

            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="font-semibold text-base mb-3">13. Aktualität und Änderung dieser Datenschutzerklärung</h2>
              <p>
                Diese Datenschutzerklärung ist aktuell gültig (Stand: Mai 2026). Durch die Weiterentwicklung unserer
                Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden,
                diese Datenschutzerklärung zu ändern.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}