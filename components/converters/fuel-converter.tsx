'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Fuel, Calculator, Euro } from 'lucide-react'
import { formatNumber } from '@/lib/format'
import { FadeIn } from '@/components/ui/animate'

export function FuelConverter() {
  const [l100km, setL100km] = useState('7')
  const [fuelPrice, setFuelPrice] = useState('1.75')
  const [distance, setDistance] = useState('100')

  const l100 = parseFloat(l100km) || 0
  const price = parseFloat(fuelPrice) || 0
  const dist = parseFloat(distance) || 0

  // Conversions
  const kml = l100 > 0 ? 100 / l100 : 0
  const mpgUS = l100 > 0 ? 235.215 / l100 : 0
  const mpgUK = l100 > 0 ? 282.481 / l100 : 0

  // Cost calculation
  const fuelNeeded = (dist * l100) / 100
  const totalCost = fuelNeeded * price
  const costPerKm = l100 > 0 ? (l100 * price) / 100 : 0

  return (
    <div className="space-y-6">
      <FadeIn>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <Fuel className="w-4 h-4" style={{ color: '#D946EF' }} /> Verbrauch umrechnen
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Verbrauch (l/100km)</label>
                <Input type="number" value={l100km} onChange={(e: any) => setL100km(e?.target?.value ?? '')} className="font-mono" step="0.1" />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-3 rounded-lg bg-muted">
                  <div className="text-xs text-muted-foreground mb-1">km/L</div>
                  <div className="font-bold font-mono">{formatNumber(kml, 2)}</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted">
                  <div className="text-xs text-muted-foreground mb-1">mpg (US)</div>
                  <div className="font-bold font-mono">{formatNumber(mpgUS, 1)}</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted">
                  <div className="text-xs text-muted-foreground mb-1">mpg (UK)</div>
                  <div className="font-bold font-mono">{formatNumber(mpgUK, 1)}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      <FadeIn delay={0.1}>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <Euro className="w-4 h-4" style={{ color: '#D946EF' }} /> Kostenberechnung
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Verbrauch (l/100km)</label>
                <Input type="number" value={l100km} onChange={(e: any) => setL100km(e?.target?.value ?? '')} className="font-mono" step="0.1" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Kraftstoffpreis (€/L)</label>
                <Input type="number" value={fuelPrice} onChange={(e: any) => setFuelPrice(e?.target?.value ?? '')} className="font-mono" step="0.01" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Strecke (km)</label>
                <Input type="number" value={distance} onChange={(e: any) => setDistance(e?.target?.value ?? '')} className="font-mono" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-muted">
                <div className="text-xs text-muted-foreground mb-1">Benötigter Kraftstoff</div>
                <div className="text-xl font-bold font-mono" style={{ color: '#D946EF' }}>{formatNumber(fuelNeeded, 1)} L</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted">
                <div className="text-xs text-muted-foreground mb-1">Gesamtkosten</div>
                <div className="text-xl font-bold font-mono" style={{ color: '#D946EF' }}>{formatNumber(totalCost, 2)} €</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted">
                <div className="text-xs text-muted-foreground mb-1">Kosten pro km</div>
                <div className="text-xl font-bold font-mono" style={{ color: '#D946EF' }}>{formatNumber(costPerKm, 2)} €</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  )
}
