'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Users, Footprints } from 'lucide-react'
import { FadeIn } from '@/components/ui/animate'

type Gender = 'damen' | 'herren'

const SHOE_SIZES: Record<Gender, { eu: string; us: string; uk: string; cm: string }[]> = {
  damen: [
    { eu: '35', us: '5', uk: '2.5', cm: '22.5' },
    { eu: '36', us: '5.5', uk: '3.5', cm: '23' },
    { eu: '37', us: '6.5', uk: '4', cm: '23.5' },
    { eu: '38', us: '7.5', uk: '5', cm: '24.5' },
    { eu: '39', us: '8', uk: '5.5', cm: '25' },
    { eu: '40', us: '9', uk: '6.5', cm: '25.5' },
    { eu: '41', us: '9.5', uk: '7', cm: '26' },
    { eu: '42', us: '10.5', uk: '8', cm: '27' },
    { eu: '43', us: '11', uk: '8.5', cm: '27.5' },
  ],
  herren: [
    { eu: '39', us: '6.5', uk: '6', cm: '25' },
    { eu: '40', us: '7', uk: '6.5', cm: '25.5' },
    { eu: '41', us: '8', uk: '7', cm: '26' },
    { eu: '42', us: '8.5', uk: '7.5', cm: '26.5' },
    { eu: '43', us: '9.5', uk: '8.5', cm: '27.5' },
    { eu: '44', us: '10', uk: '9', cm: '28' },
    { eu: '45', us: '11', uk: '10', cm: '29' },
    { eu: '46', us: '12', uk: '11', cm: '30' },
    { eu: '47', us: '13', uk: '12', cm: '30.5' },
  ],
}

export function ShoeConverter() {
  const [gender, setGender] = useState<Gender>('damen')
  const [selectedIdx, setSelectedIdx] = useState(3)

  const sizes = SHOE_SIZES?.[gender] ?? []
  const selected = sizes?.[selectedIdx]

  return (
    <FadeIn>
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => { setGender('damen'); setSelectedIdx(3) }}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-all ${
                gender === 'damen' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <Users className="w-4 h-4" /> Damen
            </button>
            <button
              onClick={() => { setGender('herren'); setSelectedIdx(3) }}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-all ${
                gender === 'herren' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <Footprints className="w-4 h-4" /> Herren
            </button>
          </div>

          <div className="mb-6">
            <label className="text-sm font-medium text-muted-foreground mb-2 block">EU-Größe wählen</label>
            <select
              value={selectedIdx}
              onChange={(e: any) => setSelectedIdx(parseInt(e?.target?.value ?? '0'))}
              className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm"
            >
              {sizes.map((s: any, i: number) => (
                <option key={i} value={i}>EU {s?.eu ?? ''}</option>
              ))}
            </select>
          </div>

          {selected && (
            <div className="grid grid-cols-4 gap-3">
              {[
                { label: '🇪🇺 EU', val: selected?.eu },
                { label: '🇺🇸 US', val: selected?.us },
                { label: '🇬🇧 UK', val: selected?.uk },
                { label: '📏 cm', val: selected?.cm },
              ].map((item: any, i: number) => (
                <div key={i} className="text-center p-4 rounded-lg bg-muted">
                  <div className="text-xs text-muted-foreground mb-1">{item?.label}</div>
                  <div className="text-xl font-bold font-mono">{item?.val ?? ''}</div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">EU</th>
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">US</th>
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">UK</th>
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">cm</th>
                </tr>
              </thead>
              <tbody>
                {sizes.map((s: any, i: number) => (
                  <tr key={i} onClick={() => setSelectedIdx(i)} className={`border-b border-border/50 cursor-pointer transition-colors ${i === selectedIdx ? 'bg-primary/10' : 'hover:bg-muted/50'}`}>
                    <td className="py-2 px-3 font-mono">{s?.eu}</td>
                    <td className="py-2 px-3 font-mono">{s?.us}</td>
                    <td className="py-2 px-3 font-mono">{s?.uk}</td>
                    <td className="py-2 px-3 font-mono">{s?.cm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  )
}
