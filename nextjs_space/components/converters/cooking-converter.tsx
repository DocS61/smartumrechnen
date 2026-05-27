'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeftRight, CookingPot } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { formatNumber } from '@/lib/format'
import { FadeIn } from '@/components/ui/animate'

interface CookingUnit {
  id: string
  name: string
  symbol: string
  ml: number // conversion to ml
}

const COOKING_UNITS: CookingUnit[] = [
  { id: 'ml', name: 'Milliliter', symbol: 'ml', ml: 1 },
  { id: 'l', name: 'Liter', symbol: 'L', ml: 1000 },
  { id: 'tl', name: 'Teelöffel', symbol: 'TL', ml: 5 },
  { id: 'el', name: 'Esslöffel', symbol: 'EL', ml: 15 },
  { id: 'tasse', name: 'Tasse (US)', symbol: 'cup', ml: 236.588 },
  { id: 'tasse_de', name: 'Tasse (DE, 150ml)', symbol: 'Tasse', ml: 150 },
  { id: 'fl_oz', name: 'Flüssigunze', symbol: 'fl oz', ml: 29.5735 },
  { id: 'pint', name: 'Pint (US)', symbol: 'pt', ml: 473.176 },
  { id: 'quart', name: 'Quart (US)', symbol: 'qt', ml: 946.353 },
  { id: 'gallone', name: 'Gallone (US)', symbol: 'gal', ml: 3785.41 },
]

const COMMON_CONVERSIONS = [
  { name: '1 Tasse Mehl', value: '125 g' },
  { name: '1 Tasse Zucker', value: '200 g' },
  { name: '1 Tasse Butter', value: '227 g' },
  { name: '1 EL Öl', value: '14 g' },
  { name: '1 EL Honig', value: '21 g' },
  { name: '1 TL Salz', value: '6 g' },
  { name: '1 TL Backpulver', value: '4 g' },
  { name: '1 Prise Salz', value: '~0.4 g' },
]

export function CookingConverter() {
  const [fromUnit, setFromUnit] = useState('tasse')
  const [toUnit, setToUnit] = useState('ml')
  const [inputValue, setInputValue] = useState('1')

  const convert = (val: number, from: string, to: string): number => {
    const fromDef = COOKING_UNITS?.find((u: CookingUnit) => u?.id === from)
    const toDef = COOKING_UNITS?.find((u: CookingUnit) => u?.id === to)
    if (!fromDef || !toDef || !toDef?.ml) return 0
    return (val * (fromDef?.ml ?? 1)) / (toDef?.ml ?? 1)
  }

  const numValue = parseFloat(inputValue) || 0
  const result = convert(numValue, fromUnit, toUnit)
  const fromDef = COOKING_UNITS?.find((u: CookingUnit) => u?.id === fromUnit)
  const toDef = COOKING_UNITS?.find((u: CookingUnit) => u?.id === toUnit)

  return (
    <div className="space-y-6">
      <FadeIn>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-4 items-end">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Von</label>
                <select value={fromUnit} onChange={(e: any) => setFromUnit(e?.target?.value ?? '')} className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm">
                  {COOKING_UNITS.map((u: CookingUnit) => <option key={u?.id} value={u?.id}>{u?.name} ({u?.symbol})</option>)}
                </select>
                <Input type="number" value={inputValue} onChange={(e: any) => setInputValue(e?.target?.value ?? '')} className="text-2xl font-mono h-14" />
              </div>
              <div className="flex justify-center py-2">
                <Button variant="outline" size="icon" onClick={() => { setFromUnit(toUnit); setToUnit(fromUnit) }} className="rounded-full h-10 w-10">
                  <ArrowLeftRight className="w-4 h-4" />
                </Button>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Nach</label>
                <select value={toUnit} onChange={(e: any) => setToUnit(e?.target?.value ?? '')} className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm">
                  {COOKING_UNITS.map((u: CookingUnit) => <option key={u?.id} value={u?.id}>{u?.name} ({u?.symbol})</option>)}
                </select>
                <div className="h-14 px-4 rounded-lg bg-muted flex items-center">
                  <span className="text-2xl font-mono font-semibold" style={{ color: '#84CC16' }}>{formatNumber(result, 2)}</span>
                  <span className="ml-2 text-muted-foreground text-sm">{toDef?.symbol ?? ''}</span>
                </div>
              </div>
            </div>

            {/* All cooking units */}
            <div className="mt-6 pt-4 border-t border-border">
              <h4 className="text-sm font-medium mb-3 text-muted-foreground flex items-center gap-2"><CookingPot className="w-4 h-4" /> Umrechnungskette</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {COOKING_UNITS.filter((u: CookingUnit) => u?.id !== fromUnit).map((u: CookingUnit) => (
                  <div key={u?.id} className="flex items-center justify-between px-3 py-2 rounded-lg bg-muted/50 text-sm">
                    <span className="text-muted-foreground">{u?.symbol}</span>
                    <span className="font-mono">{formatNumber(convert(numValue, fromUnit, u?.id ?? ''), 2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      <FadeIn delay={0.1}>
        <Card>
          <CardContent className="p-6">
            <h4 className="text-sm font-semibold mb-4">Häufige Küchen-Umrechnungen</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {COMMON_CONVERSIONS.map((c: any, i: number) => (
                <div key={i} className="flex items-center justify-between px-4 py-3 rounded-lg bg-muted/50">
                  <span className="text-sm">{c?.name}</span>
                  <Badge variant="secondary" className="font-mono">{c?.value}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  )
}
