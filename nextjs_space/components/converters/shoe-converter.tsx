'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Users, Footprints, Baby } from 'lucide-react'
import { FadeIn } from '@/components/ui/animate'

type Category = 'damen' | 'herren' | 'kinder'

const SHOE_SIZES: Record<Category, { eu: string; us: string; uk: string; cm: string }[]> = {
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
  kinder: [
    { eu: '18', us: '3C', uk: '2', cm: '11' },
    { eu: '19', us: '4C', uk: '3', cm: '11.5' },
    { eu: '20', us: '4.5C', uk: '3.5', cm: '12.5' },
    { eu: '21', us: '5.5C', uk: '4.5', cm: '13' },
    { eu: '22', us: '6C', uk: '5', cm: '13.5' },
    { eu: '23', us: '7C', uk: '6', cm: '14' },
    { eu: '24', us: '8C', uk: '7', cm: '14.5' },
    { eu: '25', us: '8.5C', uk: '7.5', cm: '15.5' },
    { eu: '26', us: '9.5C', uk: '8.5', cm: '16' },
    { eu: '27', us: '10C', uk: '9', cm: '16.5' },
    { eu: '28', us: '11C', uk: '10', cm: '17' },
    { eu: '29', us: '11.5C', uk: '10.5', cm: '17.5' },
    { eu: '30', us: '12.5C', uk: '11.5', cm: '18.5' },
    { eu: '31', us: '13C', uk: '12', cm: '19' },
    { eu: '32', us: '1Y', uk: '13', cm: '20' },
    { eu: '33', us: '2Y', uk: '1', cm: '20.5' },
    { eu: '34', us: '3Y', uk: '2', cm: '21' },
    { eu: '35', us: '3.5Y', uk: '2.5', cm: '21.5' },
  ],
}

const CATEGORY_CONFIG: Record<Category, { label: string; icon: typeof Users }> = {
  damen: { label: 'Damen', icon: Users },
  herren: { label: 'Herren', icon: Footprints },
  kinder: { label: 'Kinder', icon: Baby },
}

export function ShoeConverter() {
  const [category, setCategory] = useState<Category>('damen')
  const [selectedIdx, setSelectedIdx] = useState(3)

  const sizes = SHOE_SIZES?.[category] ?? []
  const selected = sizes?.[selectedIdx]

  const handleCategoryChange = (cat: Category) => {
    setCategory(cat)
    setSelectedIdx(cat === 'kinder' ? 5 : 3)
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

          {category === 'kinder' && (
            <div className="mb-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 text-sm text-blue-700 dark:text-blue-300">
              <strong>Hinweis:</strong> Kindergrößen variieren je nach Hersteller. EU 18–31 entspricht Kleinkindern (ca. 0–6 Jahre), EU 32–35 entspricht Schulkindern (ca. 6–10 Jahre).
            </div>
          )}

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
