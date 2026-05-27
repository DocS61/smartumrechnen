'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Plane, RefreshCw, TrendingUp, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { FadeIn } from '@/components/ui/animate'
import { getCachedCurrencyRates } from '@/lib/local-storage'
import { formatNumber } from '@/lib/format'

interface CountryPreset {
  id: string
  name: string
  flag: string
  currency: { code: string; name: string; symbol: string }
  conversions: { label: string; from: string; to: string; example: string; slug: string }[]
}

const PRESETS: CountryPreset[] = [
  {
    id: 'usa', name: 'USA', flag: '🇺🇸',
    currency: { code: 'USD', name: 'US-Dollar', symbol: '$' },
    conversions: [
      { label: 'Entfernung', from: 'km', to: 'Meilen', example: '100 km = 62,14 mi', slug: 'laenge' },
      { label: 'Geschwindigkeit', from: 'km/h', to: 'mph', example: '100 km/h = 62,14 mph', slug: 'geschwindigkeit' },
      { label: 'Temperatur', from: '°C', to: '°F', example: '20°C = 68°F', slug: 'temperatur' },
      { label: 'Gewicht', from: 'kg', to: 'Pfund', example: '80 kg = 176,37 lb', slug: 'gewicht' },
      { label: 'Volumen', from: 'Liter', to: 'US-Gallonen', example: '1 L = 0,264 gal', slug: 'volumen' },
    ],
  },
  {
    id: 'uk', name: 'Großbritannien', flag: '🇬🇧',
    currency: { code: 'GBP', name: 'Britisches Pfund', symbol: '£' },
    conversions: [
      { label: 'Entfernung', from: 'km', to: 'Meilen', example: '100 km = 62,14 mi', slug: 'laenge' },
      { label: 'Gewicht', from: 'kg', to: 'Stone', example: '80 kg = 12,6 st', slug: 'gewicht' },
      { label: 'Volumen', from: 'Liter', to: 'Imp. Gallonen', example: '1 L = 0,22 gal', slug: 'volumen' },
      { label: 'Temperatur', from: '°C', to: '°F', example: '20°C = 68°F', slug: 'temperatur' },
    ],
  },
  {
    id: 'schweiz', name: 'Schweiz', flag: '🇨🇭',
    currency: { code: 'CHF', name: 'Schweizer Franken', symbol: 'CHF' },
    conversions: [
      { label: 'Währung', from: 'EUR', to: 'CHF', example: 'Wechselkurs siehe oben', slug: 'waehrung' },
    ],
  },
  {
    id: 'tuerkei', name: 'Türkei', flag: '🇹🇷',
    currency: { code: 'TRY', name: 'Türkische Lira', symbol: '₺' },
    conversions: [
      { label: 'Währung', from: 'EUR', to: 'TRY', example: 'Wechselkurs siehe oben', slug: 'waehrung' },
    ],
  },
  {
    id: 'thailand', name: 'Thailand', flag: '🇹🇭',
    currency: { code: 'THB', name: 'Thailändischer Baht', symbol: '฿' },
    conversions: [
      { label: 'Kleidung', from: 'EU', to: 'Asiatisch', example: 'Oft 1–2 Größen größer', slug: 'kleidergroessen' },
      { label: 'Schuhe', from: 'EU', to: 'cm', example: 'EU 42 = 26,5 cm', slug: 'schuhgroessen' },
    ],
  },
  {
    id: 'japan', name: 'Japan', flag: '🇯🇵',
    currency: { code: 'JPY', name: 'Japanischer Yen', symbol: '¥' },
    conversions: [
      { label: 'Kleidung', from: 'EU', to: 'JP', example: 'EU M ≈ JP L', slug: 'kleidergroessen' },
      { label: 'Schuhe', from: 'EU', to: 'cm', example: 'EU 42 = 26,5 cm', slug: 'schuhgroessen' },
    ],
  },
]

export function CountryPresets() {
  const [activePreset, setActivePreset] = useState('usa')
  const [rates, setRates] = useState<Record<string, number>>({})
  const [ratesLoading, setRatesLoading] = useState(true)

  const fetchRates = useCallback(async () => {
    setRatesLoading(true)
    try {
      const res = await fetch('/api/rates')
      if (!res?.ok) throw new Error('API-Fehler')
      const data = await res?.json()
      setRates(data?.rates ?? {})
    } catch {
      const cached = getCachedCurrencyRates()
      if (cached?.rates) {
        setRates(cached.rates)
      } else {
        setRates({ EUR: 1, USD: 1.08, GBP: 0.86, JPY: 162.5, CHF: 0.94, TRY: 34.5, THB: 37.8 })
      }
    } finally {
      setRatesLoading(false)
    }
  }, [])

  useEffect(() => { fetchRates() }, [fetchRates])

  const preset = PRESETS?.find((p: CountryPreset) => p?.id === activePreset) ?? PRESETS[0]

  const getExchangeRate = (currencyCode: string): string => {
    if (ratesLoading) return '...'
    if (currencyCode === 'EUR') return '1,00 € (Eurozone)'
    const rate = rates?.[currencyCode]
    if (!rate) return '–'
    return formatNumber(rate, 2)
  }

  return (
    <FadeIn>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Plane className="w-4 h-4 text-primary" />
            Länder-Presets für Reisende
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

          {/* Wechselkurs-Anzeige */}
          <div className="mb-4 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Aktueller Wechselkurs</span>
              </div>
              <button onClick={fetchRates} disabled={ratesLoading} className="p-1 rounded hover:bg-primary/10 transition-colors">
                <RefreshCw className={`w-3.5 h-3.5 text-muted-foreground ${ratesLoading ? 'animate-spin' : ''}`} />
              </button>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold font-mono text-primary">
                {preset?.currency?.code === 'EUR'
                  ? '1,00'
                  : getExchangeRate(preset?.currency?.code ?? '')}
              </span>
              <span className="text-sm text-muted-foreground">
                {preset?.currency?.symbol} {preset?.currency?.code}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {preset?.currency?.code === 'EUR'
                ? 'Gleiches Währungsgebiet – kein Geldwechsel nötig!'
                : `1 EUR = ${getExchangeRate(preset?.currency?.code ?? '')} ${preset?.currency?.name}`}
            </p>
          </div>

          <div className="space-y-2">
            {(preset?.conversions ?? []).map((c: any, i: number) => (
              <Link
                key={i}
                href={`/umrechner/${c?.slug ?? ''}`}
                className="flex items-center justify-between px-4 py-3 rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">{c?.label ?? ''}</Badge>
                  <span className="text-sm text-muted-foreground">{c?.from ?? ''} → {c?.to ?? ''}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-mono">{c?.example ?? ''}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  )
}
