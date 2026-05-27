'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shirt, Users } from 'lucide-react'
import { FadeIn } from '@/components/ui/animate'

type Gender = 'damen' | 'herren'

const SIZES: Record<Gender, { eu: string; us: string; uk: string }[]> = {
  damen: [
    { eu: '32 (XXS)', us: '0', uk: '4' },
    { eu: '34 (XS)', us: '2', uk: '6' },
    { eu: '36 (S)', us: '4', uk: '8' },
    { eu: '38 (M)', us: '6', uk: '10' },
    { eu: '40 (M)', us: '8', uk: '12' },
    { eu: '42 (L)', us: '10', uk: '14' },
    { eu: '44 (L)', us: '12', uk: '16' },
    { eu: '46 (XL)', us: '14', uk: '18' },
    { eu: '48 (XXL)', us: '16', uk: '20' },
    { eu: '50 (3XL)', us: '18', uk: '22' },
  ],
  herren: [
    { eu: '44 (XS)', us: '34', uk: '34' },
    { eu: '46 (S)', us: '36', uk: '36' },
    { eu: '48 (M)', us: '38', uk: '38' },
    { eu: '50 (L)', us: '40', uk: '40' },
    { eu: '52 (L)', us: '42', uk: '42' },
    { eu: '54 (XL)', us: '44', uk: '44' },
    { eu: '56 (XXL)', us: '46', uk: '46' },
    { eu: '58 (3XL)', us: '48', uk: '48' },
    { eu: '60 (4XL)', us: '50', uk: '50' },
  ],
}

export function ClothingConverter() {
  const [gender, setGender] = useState<Gender>('damen')
  const [selectedIdx, setSelectedIdx] = useState(2)

  const sizes = SIZES?.[gender] ?? []
  const selected = sizes?.[selectedIdx]

  return (
    <FadeIn>
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => { setGender('damen'); setSelectedIdx(2) }}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-all ${
                gender === 'damen' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <Users className="w-4 h-4" /> Damen
            </button>
            <button
              onClick={() => { setGender('herren'); setSelectedIdx(2) }}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-all ${
                gender === 'herren' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <Shirt className="w-4 h-4" /> Herren
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
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-muted">
                <div className="text-xs text-muted-foreground mb-1">🇪🇺 EU</div>
                <div className="text-xl font-bold font-mono">{selected?.eu ?? ''}</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted">
                <div className="text-xs text-muted-foreground mb-1">🇺🇸 US</div>
                <div className="text-xl font-bold font-mono">{selected?.us ?? ''}</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted">
                <div className="text-xs text-muted-foreground mb-1">🇬🇧 UK</div>
                <div className="text-xl font-bold font-mono">{selected?.uk ?? ''}</div>
              </div>
            </div>
          )}

          {/* Full table */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">EU</th>
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">US</th>
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">UK</th>
                </tr>
              </thead>
              <tbody>
                {sizes.map((s: any, i: number) => (
                  <tr
                    key={i}
                    onClick={() => setSelectedIdx(i)}
                    className={`border-b border-border/50 cursor-pointer transition-colors ${
                      i === selectedIdx ? 'bg-primary/10' : 'hover:bg-muted/50'
                    }`}
                  >
                    <td className="py-2 px-3 font-mono">{s?.eu ?? ''}</td>
                    <td className="py-2 px-3 font-mono">{s?.us ?? ''}</td>
                    <td className="py-2 px-3 font-mono">{s?.uk ?? ''}</td>
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
