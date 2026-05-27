'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

interface BarChartVisualProps {
  data: { name: string; value: number }[]
  color: string
}

function CustomXTick({ x, y, payload }: any) {
  const text = payload?.value ?? ''
  // Split at '(' to get name and symbol
  const match = text.match(/^(.+?)\s*\((.+)\)$/)
  if (match) {
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={12} textAnchor="middle" fontSize={9} fill="currentColor" className="fill-foreground">
          {match[1].trim()}
        </text>
        <text x={0} y={0} dy={23} textAnchor="middle" fontSize={8} fill="currentColor" className="fill-muted-foreground" opacity={0.7}>
          ({match[2]})
        </text>
      </g>
    )
  }
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={12} textAnchor="middle" fontSize={9} fill="currentColor" className="fill-foreground">
        {text}
      </text>
    </g>
  )
}

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-background border border-border rounded-lg px-3 py-2 shadow-md">
      <p className="text-xs font-medium text-foreground mb-1">{label}</p>
      <p className="text-xs text-muted-foreground">
        Wert: <span className="font-mono font-semibold text-foreground">{typeof payload[0]?.value === 'number' ? payload[0].value.toLocaleString('de-DE') : payload[0]?.value}</span>
      </p>
    </div>
  )
}

export default function BarChartVisual({ data, color }: BarChartVisualProps) {
  const safeData = data ?? []

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={safeData} margin={{ top: 5, right: 10, left: 10, bottom: 45 }}>
          <XAxis
            dataKey="name"
            tickLine={false}
            tick={<CustomXTick />}
            interval={0}
          />
          <YAxis
            tickLine={false}
            tick={{ fontSize: 10 }}
            label={{ value: 'Wert', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fontSize: 11 } }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="value" name="Wert" fill={color ?? '#0EA5E9'} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
