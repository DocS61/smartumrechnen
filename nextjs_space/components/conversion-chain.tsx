'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { type UnitDef } from '@/lib/converter-data'
import { formatNumber } from '@/lib/format'
import { Link2 } from 'lucide-react'

interface ConversionChainProps {
  units: UnitDef[]
  fromUnit: string
  value: number
  convert: (value: number, from: string, to: string) => number
  color: string
}

export function ConversionChain({ units, fromUnit, value, convert, color }: ConversionChainProps) {
  const safeUnits = units ?? []

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <Link2 className="w-4 h-4" style={{ color }} />
          Umrechnungskette
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {safeUnits
            .filter((u: UnitDef) => u?.id !== fromUnit)
            .map((u: UnitDef) => {
              const result = convert(value, fromUnit, u?.id ?? '')
              return (
                <div
                  key={u?.id}
                  className="flex items-center justify-between px-4 py-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <span className="text-sm text-muted-foreground">{u?.name ?? ''}</span>
                  <span className="font-mono font-semibold text-sm">
                    {formatNumber(result)} <span className="text-muted-foreground">{u?.symbol ?? ''}</span>
                  </span>
                </div>
              )
            })}
        </div>
      </CardContent>
    </Card>
  )
}
