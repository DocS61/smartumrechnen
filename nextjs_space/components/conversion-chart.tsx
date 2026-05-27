'use client'

import dynamic from 'next/dynamic'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart3 } from 'lucide-react'
import { type UnitDef } from '@/lib/converter-data'
import { formatNumber } from '@/lib/format'

const BarChartComponent = dynamic(() => import('@/components/bar-chart-visual'), { ssr: false, loading: () => <div className="h-[250px] flex items-center justify-center text-muted-foreground text-sm">Diagramm wird geladen...</div> })

interface ConversionChartProps {
  units: UnitDef[]
  fromUnit: string
  value: number
  convert: (value: number, from: string, to: string) => number
  color: string
}

export function ConversionChart({ units, fromUnit, value, convert, color }: ConversionChartProps) {
  const safeUnits = units ?? []
  const chartData = safeUnits
    .filter((u: UnitDef) => u?.id !== fromUnit)
    .map((u: UnitDef) => ({
      name: `${u?.name ?? ''} (${u?.symbol ?? ''})`,
      value: convert(value, fromUnit, u?.id ?? ''),
    }))
    .filter((d: any) => isFinite(d?.value ?? 0) && Math.abs(d?.value ?? 0) < 1e12)
    .slice(0, 8)

  if ((chartData?.length ?? 0) === 0) return null

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <BarChart3 className="w-4 h-4" style={{ color }} />
          Vergleichsdiagramm
        </CardTitle>
      </CardHeader>
      <CardContent>
        <BarChartComponent data={chartData} color={color} />
      </CardContent>
    </Card>
  )
}
