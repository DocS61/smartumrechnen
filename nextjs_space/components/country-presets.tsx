'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Globe, Plane } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { FadeIn } from '@/components/ui/animate'

interface CountryPreset {
  id: string
  name: string
  flag: string
  conversions: { label: string; from: string; to: string; example: string }[]
}

const PRESETS: CountryPreset[] = [
  {
    id: 'usa', name: 'USA-Reise', flag: '🇺🇸',
    conversions: [
      { label: 'Länge', from: 'km', to: 'Meilen', example: '100 km = 62,14 mi' },
      { label: 'Temperatur', from: '°C', to: '°F', example: '20°C = 68°F' },
      { label: 'Gewicht', from: 'kg', to: 'Pfund', example: '80 kg = 176,37 lb' },
      { label: 'Volumen', from: 'Liter', to: 'Gallonen', example: '1 L = 0,264 gal' },
      { label: 'Geschwindigkeit', from: 'km/h', to: 'mph', example: '100 km/h = 62,14 mph' },
    ],
  },
  {
    id: 'uk', name: 'UK-Reise', flag: '🇬🇧',
    conversions: [
      { label: 'Länge', from: 'km', to: 'Meilen', example: '100 km = 62,14 mi' },
      { label: 'Gewicht', from: 'kg', to: 'Stone', example: '80 kg = 12,6 st' },
      { label: 'Volumen', from: 'Liter', to: 'UK-Gallonen', example: '1 L = 0,22 gal' },
      { label: 'Temperatur', from: '°C', to: '°F', example: '20°C = 68°F' },
    ],
  },
  {
    id: 'schweiz', name: 'Schweiz', flag: '🇨🇭',
    conversions: [
      { label: 'Währung', from: 'EUR', to: 'CHF', example: 'Live-Kurs verfügbar' },
      { label: 'Kraftstoff', from: 'l/100km', to: 'Preis/km', example: 'Berechne Kosten' },
    ],
  },
  {
    id: 'japan', name: 'Japan-Reise', flag: '🇯🇵',
    conversions: [
      { label: 'Währung', from: 'EUR', to: 'JPY', example: 'Live-Kurs verfügbar' },
      { label: 'Schuhe', from: 'EU', to: 'cm', example: 'EU 42 = 26,5 cm' },
      { label: 'Kleidung', from: 'EU', to: 'JP', example: 'Größenumrechnung' },
    ],
  },
]

export function CountryPresets() {
  const [activePreset, setActivePreset] = useState('usa')
  const preset = PRESETS?.find((p: CountryPreset) => p?.id === activePreset) ?? PRESETS[0]

  return (
    <FadeIn>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Plane className="w-4 h-4 text-primary" />
            Länder-Presets
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4 flex-wrap">
            {PRESETS.map((p: CountryPreset) => (
              <button
                key={p?.id}
                onClick={() => setActivePreset(p?.id ?? '')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  activePreset === p?.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                <span>{p?.flag ?? ''}</span> {p?.name ?? ''}
              </button>
            ))}
          </div>

          <div className="space-y-2">
            {(preset?.conversions ?? []).map((c: any, i: number) => (
              <div key={i} className="flex items-center justify-between px-4 py-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">{c?.label ?? ''}</Badge>
                  <span className="text-sm text-muted-foreground">{c?.from ?? ''} → {c?.to ?? ''}</span>
                </div>
                <span className="text-sm font-mono">{c?.example ?? ''}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  )
}
