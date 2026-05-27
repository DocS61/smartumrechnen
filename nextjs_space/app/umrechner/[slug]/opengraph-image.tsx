import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'SmartUmrechnen Umrechner'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Category data (duplicated here since we can't import Lucide icons in OG context)
const CATEGORIES: Record<string, { name: string; compound: string; description: string; color: string; emoji: string }> = {
  laenge: { name: 'Länge', compound: 'Längen-Umrechner', description: 'Meter, Kilometer, Zoll, Fuß, Meilen und mehr', color: '#0EA5E9', emoji: '📏' },
  gewicht: { name: 'Gewicht & Masse', compound: 'Gewichts-Umrechner', description: 'Kilogramm, Gramm, Pfund, Unzen, Tonnen', color: '#8B5CF6', emoji: '⚖️' },
  temperatur: { name: 'Temperatur', compound: 'Temperatur-Umrechner', description: 'Celsius, Fahrenheit und Kelvin', color: '#EF4444', emoji: '🌡️' },
  waehrung: { name: 'Währung', compound: 'Währungs-Umrechner', description: 'Live-Wechselkurse für über 30 Währungen', color: '#10B981', emoji: '💱' },
  flaeche: { name: 'Fläche', compound: 'Flächen-Umrechner', description: 'Quadratmeter, Hektar, Acre und mehr', color: '#F59E0B', emoji: '📐' },
  volumen: { name: 'Volumen', compound: 'Volumen-Umrechner', description: 'Liter, Milliliter, Gallonen, Kubik', color: '#06B6D4', emoji: '🧪' },
  geschwindigkeit: { name: 'Geschwindigkeit', compound: 'Geschwindigkeits-Umrechner', description: 'km/h, m/s, mph, Knoten, Mach', color: '#EC4899', emoji: '⚡' },
  kleidergroessen: { name: 'Kleidergrößen', compound: 'Kleidergrößen-Umrechner', description: 'EU, US und UK Größen für Damen & Herren', color: '#A855F7', emoji: '👔' },
  schuhgroessen: { name: 'Schuhgrößen', compound: 'Schuhgrößen-Umrechner', description: 'EU, US, UK und cm Schuhgrößen', color: '#F97316', emoji: '👟' },
  kochmasse: { name: 'Kochmaße', compound: 'Kochmaß-Umrechner', description: 'Tassen, Esslöffel, Teelöffel, Gramm, ml', color: '#84CC16', emoji: '🍳' },
  vitamine: { name: 'Vitamin-Umrechnung', compound: 'Vitamin-Umrechner', description: 'IU, mg und µg für Vitamin D3, A, E und mehr', color: '#14B8A6', emoji: '💊' },
  datengroessen: { name: 'Datengrößen', compound: 'Datengrößen-Umrechner', description: 'Byte, KB, MB, GB, TB, Bit', color: '#6366F1', emoji: '💾' },
  kraftstoffverbrauch: { name: 'Kraftstoffverbrauch', compound: 'Kraftstoffverbrauchs-Umrechner', description: 'l/100km, mpg, km/l mit Kostenberechnung', color: '#D946EF', emoji: '⛽' },
  druck: { name: 'Druck', compound: 'Druck-Umrechner', description: 'Bar, PSI, Pascal, Atmosphäre, Torr', color: '#0891B2', emoji: '🔧' },
  leistung: { name: 'Leistung', compound: 'Leistungs-Umrechner', description: 'Watt, Kilowatt, PS, Horsepower', color: '#EA580C', emoji: '⚡' },
}

export function generateImageMetadata({ params }: { params: { slug: string } }) {
  const cat = CATEGORIES[params.slug]
  return [
    {
      id: params.slug,
      alt: cat ? `${cat.compound} – SmartUmrechnen` : 'SmartUmrechnen Umrechner',
      size,
      contentType,
    },
  ]
}

export default function OGImage({ params }: { params: { slug: string } }) {
  const cat = CATEGORIES[params.slug]
  if (!cat) {
    return new ImageResponse(
      (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0e7490', color: 'white', fontSize: 48, fontFamily: 'system-ui' }}>
          SmartUmrechnen
        </div>
      ),
      { ...size }
    )
  }

  const color = cat.color

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
          background: `linear-gradient(145deg, #0f172a 0%, #1e293b 50%, ${color}22 100%)`,
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Accent circle */}
        <div style={{
          position: 'absolute', top: -100, right: -100,
          width: 400, height: 400, borderRadius: '50%',
          background: `${color}15`,
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute', bottom: -80, left: -80,
          width: 300, height: 300, borderRadius: '50%',
          background: `${color}10`,
          display: 'flex',
        }} />

        {/* Top bar: logo */}
        <div style={{
          position: 'absolute', top: 32, left: 40,
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            background: 'rgba(255,255,255,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, fontWeight: 800, color: 'white',
          }}>
            SU
          </div>
          <span style={{ fontSize: 20, fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>
            SmartUmrechnen
          </span>
        </div>

        {/* Emoji icon */}
        <div style={{
          fontSize: 72, marginBottom: 16, display: 'flex',
          filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
        }}>
          {cat.emoji}
        </div>

        {/* Category name */}
        <div style={{
          fontSize: 56, fontWeight: 800, color: 'white',
          textAlign: 'center', lineHeight: 1.2,
          letterSpacing: -1, marginBottom: 8,
          display: 'flex',
        }}>
          {cat.compound}
        </div>

        {/* Description */}
        <div style={{
          fontSize: 24, color: 'rgba(255,255,255,0.65)',
          textAlign: 'center', maxWidth: 700,
          display: 'flex',
        }}>
          {cat.description}
        </div>

        {/* Badge */}
        <div style={{
          marginTop: 32, padding: '10px 28px',
          borderRadius: 24,
          background: `${color}30`,
          border: `2px solid ${color}50`,
          color: color,
          fontSize: 18, fontWeight: 700,
          display: 'flex',
        }}>
          Kostenlos · Schnell · Offline
        </div>

        {/* Domain */}
        <div style={{
          position: 'absolute', bottom: 28,
          fontSize: 16, color: 'rgba(255,255,255,0.35)',
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
