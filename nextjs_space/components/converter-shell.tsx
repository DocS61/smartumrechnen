'use client'

import { useState, useEffect, useCallback } from 'react'
import { ArrowLeftRight, Star, StarOff, Copy, Check, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'
import { type UnitDef } from '@/lib/converter-data'
import { addHistory, toggleFavorite, isFavorite } from '@/lib/local-storage'
import { formatNumber } from '@/lib/format'
import { FadeIn } from '@/components/ui/animate'
import { ConversionChain } from '@/components/conversion-chain'

interface ConverterShellProps {
  categorySlug: string
  categoryName: string
  categoryColor: string
  units: UnitDef[]
  defaultFrom: string
  defaultTo: string
}

export function ConverterShell({
  categorySlug,
  categoryName,
  categoryColor,
  units,
  defaultFrom,
  defaultTo,
}: ConverterShellProps) {
  const safeUnits = units ?? []
  const [fromUnit, setFromUnit] = useState(defaultFrom ?? safeUnits?.[0]?.id ?? '')
  const [toUnit, setToUnit] = useState(defaultTo ?? safeUnits?.[1]?.id ?? '')
  const [inputValue, setInputValue] = useState('1')
  const [isFav, setIsFav] = useState(false)
  const [copied, setCopied] = useState(false)
  const [showChain, setShowChain] = useState(false)

  useEffect(() => {
    setIsFav(isFavorite({ category: categorySlug, fromUnit, toUnit }))
  }, [categorySlug, fromUnit, toUnit])

  const convert = useCallback((value: number, from: string, to: string): number => {
    if (!from || !to || from === to) return value
    const fromDef = safeUnits?.find((u: UnitDef) => u?.id === from)
    const toDef = safeUnits?.find((u: UnitDef) => u?.id === to)
    if (!fromDef?.toBase || !toDef?.fromBase) return value
    const baseValue = fromDef.toBase(value)
    return toDef.fromBase(baseValue)
  }, [safeUnits])

  const numValue = parseFloat(inputValue) || 0
  const result = convert(numValue, fromUnit, toUnit)

  const handleSwap = () => {
    setFromUnit(toUnit)
    setToUnit(fromUnit)
  }

  const handleCopy = () => {
    const toUnitDef = safeUnits?.find((u: UnitDef) => u?.id === toUnit)
    navigator?.clipboard?.writeText?.(`${formatNumber(result)} ${toUnitDef?.symbol ?? ''}`)
    setCopied(true)
    toast.success('In die Zwischenablage kopiert!')
    setTimeout(() => setCopied(false), 2000)
  }

  const handleFavorite = () => {
    const newState = toggleFavorite({ category: categorySlug, fromUnit, toUnit })
    setIsFav(newState)
    toast.success(newState ? 'Zu Favoriten hinzugefügt' : 'Aus Favoriten entfernt')
  }

  useEffect(() => {
    if (numValue !== 0) {
      addHistory({
        category: categorySlug,
        fromUnit,
        toUnit,
        fromValue: numValue,
        toValue: result,
      })
    }
  }, [result])

  const fromUnitDef = safeUnits?.find((u: UnitDef) => u?.id === fromUnit)
  const toUnitDef = safeUnits?.find((u: UnitDef) => u?.id === toUnit)

  return (
    <div className="space-y-6">
      <FadeIn>
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            {/* Input Section */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-4 items-end">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Von</label>
                <select
                  value={fromUnit}
                  onChange={(e: any) => setFromUnit(e?.target?.value ?? '')}
                  className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {safeUnits.map((u: UnitDef) => (
                    <option key={u?.id} value={u?.id}>{u?.name} ({u?.symbol})</option>
                  ))}
                </select>
                <Input
                  type="number"
                  value={inputValue}
                  onChange={(e: any) => setInputValue(e?.target?.value ?? '')}
                  className="text-2xl font-mono h-14"
                  placeholder="Wert eingeben..."
                />
              </div>

              <div className="flex justify-center py-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleSwap}
                  className="rounded-full h-10 w-10"
                  aria-label="Einheiten tauschen"
                >
                  <ArrowLeftRight className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Nach</label>
                <select
                  value={toUnit}
                  onChange={(e: any) => setToUnit(e?.target?.value ?? '')}
                  className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {safeUnits.map((u: UnitDef) => (
                    <option key={u?.id} value={u?.id}>{u?.name} ({u?.symbol})</option>
                  ))}
                </select>
                <div className="h-14 px-4 rounded-lg bg-muted flex items-center">
                  <span className="text-2xl font-mono font-semibold" style={{ color: categoryColor }}>
                    {formatNumber(result)}
                  </span>
                  <span className="ml-2 text-muted-foreground text-sm">{toUnitDef?.symbol ?? ''}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-border">
              <Button variant="outline" size="sm" onClick={handleCopy}>
                {copied ? <Check className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
                Kopieren
              </Button>
              <Button variant="outline" size="sm" onClick={handleFavorite}>
                {isFav ? <StarOff className="w-4 h-4 mr-1" /> : <Star className="w-4 h-4 mr-1" />}
                {isFav ? 'Entfernen' : 'Favorit'}
              </Button>
              <Button variant="outline" size="sm" onClick={() => setShowChain(!showChain)}>
                <BarChart3 className="w-4 h-4 mr-1" />
                {showChain ? 'Kette ausblenden' : 'Alle Einheiten'}
              </Button>
              <div className="ml-auto">
                <Badge variant="secondary" className="font-mono text-xs">
                  1 {fromUnitDef?.symbol ?? ''} = {formatNumber(convert(1, fromUnit, toUnit))} {toUnitDef?.symbol ?? ''}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Conversion Chain */}
      {showChain && (
        <FadeIn>
          <ConversionChain
            units={safeUnits}
            fromUnit={fromUnit}
            value={numValue}
            convert={convert}
            color={categoryColor}
          />
        </FadeIn>
      )}
    </div>
  )
}
