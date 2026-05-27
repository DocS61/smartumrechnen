import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'SmartUmrechnen – Kostenloser Online-Umrechner für 15 Einheiten'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0c4a6e 0%, #0e7490 40%, #0ea5e9 100%)',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: -80, right: -80, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 250, height: 250, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', display: 'flex' }} />
        <div style={{ position: 'absolute', top: 120, left: 100, width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex' }} />

        {/* Logo area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <div style={{
            width: 64, height: 64, borderRadius: 16,
            background: 'rgba(255,255,255,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 32, fontWeight: 800, color: 'white',
          }}>
            SU
          </div>
          <span style={{ fontSize: 36, fontWeight: 700, color: 'white', letterSpacing: -1 }}>
            SmartUmrechnen
          </span>
        </div>

        {/* Main title */}
        <div style={{
          fontSize: 52, fontWeight: 800, color: 'white',
          textAlign: 'center', lineHeight: 1.2, maxWidth: 900,
          letterSpacing: -1, marginBottom: 16,
          display: 'flex',
        }}>
          Intelligente Einheiten-Umrechnung
        </div>

        {/* Subtitle */}
        <div style={{
          fontSize: 24, color: 'rgba(255,255,255,0.8)',
          textAlign: 'center', maxWidth: 700,
          display: 'flex',
        }}>
          15 Umrechner · Live-Kurse · Kostenlos · Offline verfügbar
        </div>

        {/* Category pills */}
        <div style={{ display: 'flex', gap: 10, marginTop: 36, flexWrap: 'wrap', justifyContent: 'center', maxWidth: 900 }}>
          {['Länge', 'Gewicht', 'Temperatur', 'Währung', 'Fläche', 'Volumen', 'Geschwindigkeit', 'Kleidung', 'Schuhe', 'Kochen'].map((name) => (
            <div key={name} style={{
              padding: '8px 18px', borderRadius: 20,
              background: 'rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.9)',
              fontSize: 16, fontWeight: 600,
              display: 'flex',
            }}>
              {name}
            </div>
          ))}
          <div style={{
            padding: '8px 18px', borderRadius: 20,
            background: 'rgba(255,255,255,0.12)',
            color: 'rgba(255,255,255,0.9)',
            fontSize: 16, fontWeight: 600,
            display: 'flex',
          }}>
            +5 mehr
          </div>
        </div>

        {/* Domain */}
        <div style={{
          position: 'absolute', bottom: 28,
          fontSize: 18, color: 'rgba(255,255,255,0.5)',
          fontWeight: 600, letterSpacing: 1,
          display: 'flex',
        }}>
          smartumrechnen.de
        </div>
      </div>
    ),
    { ...size }
  )
}
