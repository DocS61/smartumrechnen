'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Shirt, Users, Baby } from 'lucide-react'
import { FadeIn } from '@/components/ui/animate'

type Category = 'damen' | 'herren' | 'kinder'

interface SizeEntry {
  eu: string
  us: string
  uk: string
  alter?: string
  hoehe?: string
}

const SIZES: Record<Category, SizeEntry[]> = {
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
  kinder: [
    { eu: '50/56', us: '0–3M', uk: '0–3M', alter: '0–3 Mon.', hoehe: '50–56 cm' },
    { eu: '62/68', us: '3–6M', uk: '3–6M', alter: '3–6 Mon.', hoehe: '62–68 cm' },
    { eu: '74/80', us: '6–12M', uk: '6–12M', alter: '6–12 Mon.', hoehe: '74–80 cm' },
    { eu: '86/92', us: '18–24M', uk: '18–24M', alter: '1–2 J.', hoehe: '86–92 cm' },
    { eu: '98/104', us: '2T–4T', uk: '2–3', alter: '2–4 J.', hoehe: '98–104 cm' },
    { eu: '110/116', us: '4–5', uk: '4–5', alter: '4–6 J.', hoehe: '110–116 cm' },
    { eu: '122/128', us: '6–7', uk: '6–7', alter: '6–8 J.', hoehe: '122–128 cm' },
    { eu: '134/140', us: '8–10', uk: '8–9', alter: '8–10 J.', hoehe: '134–140 cm' },
    { eu: '146/152', us: '10–12', uk: '10–11', alter: '10–12 J.', hoehe: '146–152 cm' },
    { eu: '158/164', us: '14–16', uk: '12–13', alter: '12–14 J.', hoehe: '158–164 cm' },
    { eu: '170/176', us: '16–18', uk: '14–15', alter: '14–16 J.', hoehe: '170–176 cm' },
  ],
}

const CATEGORY_CONFIG: Record<Category, { label: string; icon: typeof Users }> = {
  damen: { label: 'Damen', icon: Users },
  herren: { label: 'Herren', icon: Shirt },
  kinder: { label: 'Kinder', icon: Baby },
}

export function ClothingConverter() {
  const [category, setCategory] = useState<Category>('damen')
  const [selectedIdx, setSelectedIdx] = useState(2)

  const sizes = SIZES?.[category] ?? []
  const selected = sizes?.[selectedIdx]
  const isKinder = category === 'kinder'

  const handleCategoryChange = (cat: Category) => {
    setCategory(cat)
    setSelectedIdx(2)
  }

  return (
    <FadeIn>
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-2 mb-6">
            {(Object.keys(CATEGORY_CONFIG) as Category[]).map((cat) => {
              const config = CATEGORY_CONFIG[cat]
              const Icon = config.icon
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-all ${
                    category === cat ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  <Icon className="w-4 h-4" /> {config.label}
                </button>
              )
            })}
          </div>

          {isKinder && (
            <div className="mb-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 text-sm text-blue-700 dark:text-blue-300">
              <strong>Hinweis:</strong> Kindergrößen basieren auf der Körperhöhe. Die Angaben sind Richtwerte – Kinder wachsen unterschiedlich schnell.
            </div>
          )}

          <div className="mb-6">
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              {isKinder ? 'EU-Größe / Alter wählen' : 'EU-Größe wählen'}
            </label>
            <select
              value={selectedIdx}
              onChange={(e: any) => setSelectedIdx(parseInt(e?.target?.value ?? '0'))}
              className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm"
            >
              {sizes.map((s: any, i: number) => (
                <option key={i} value={i}>
                  EU {s?.eu ?? ''}{s?.alter ? ` (${s.alter})` : ''}
                </option>
              ))}
            </select>
          </div>

          {selected && (
            <div className={`grid ${isKinder ? 'grid-cols-2 sm:grid-cols-5' : 'grid-cols-3'} gap-3`}>
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
              {isKinder && selected?.alter && (
                <div className="text-center p-4 rounded-lg bg-muted">
                  <div className="text-xs text-muted-foreground mb-1">👶 Alter</div>
                  <div className="text-xl font-bold font-mono">{selected.alter}</div>
                </div>
              )}
              {isKinder && selected?.hoehe && (
                <div className="text-center p-4 rounded-lg bg-muted">
                  <div className="text-xs text-muted-foreground mb-1">📏 Höhe</div>
                  <div className="text-xl font-bold font-mono">{selected.hoehe}</div>
                </div>
              )}
            </div>
          )}

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">EU</th>
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">US</th>
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">UK</th>
                  {isKinder && <th className="text-left py-2 px-3 text-muted-foreground font-medium">Alter</th>}
                  {isKinder && <th className="text-left py-2 px-3 text-muted-foreground font-medium">Höhe</th>}
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
                    {isKinder && <td className="py-2 px-3 font-mono text-muted-foreground">{s?.alter ?? ''}</td>}
                    {isKinder && <td className="py-2 px-3 font-mono text-muted-foreground">{s?.hoehe ?? ''}</td>}
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
