'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Pill, Info } from 'lucide-react'
import { formatNumber } from '@/lib/format'
import { FadeIn } from '@/components/ui/animate'

interface VitaminDef {
  id: string
  name: string
  iu_to_mcg: number // 1 IU = ? µg
  mcg_to_mg: number // always 1000
  info: string
}

const VITAMINS: VitaminDef[] = [
  { id: 'D3', name: 'Vitamin D3', iu_to_mcg: 0.025, mcg_to_mg: 0.001, info: '1 IU = 0,025 µg Cholecalciferol' },
  { id: 'D2', name: 'Vitamin D2', iu_to_mcg: 0.025, mcg_to_mg: 0.001, info: '1 IU = 0,025 µg Ergocalciferol' },
  { id: 'A_retinol', name: 'Vitamin A (Retinol)', iu_to_mcg: 0.3, mcg_to_mg: 0.001, info: '1 IU = 0,3 µg Retinol' },
  { id: 'A_beta', name: 'Vitamin A (β-Carotin)', iu_to_mcg: 0.6, mcg_to_mg: 0.001, info: '1 IU = 0,6 µg β-Carotin' },
  { id: 'E_alpha', name: 'Vitamin E (α-Tocopherol)', iu_to_mcg: 670, mcg_to_mg: 0.001, info: '1 IU = 0,67 mg natürliches α-Tocopherol' },
  { id: 'E_synth', name: 'Vitamin E (synthetisch)', iu_to_mcg: 450, mcg_to_mg: 0.001, info: '1 IU = 0,45 mg dl-α-Tocopherol' },
  { id: 'C', name: 'Vitamin C', iu_to_mcg: 50, mcg_to_mg: 0.001, info: '1 IU = 50 µg Ascorbinsäure' },
]

export function VitaminConverter() {
  const [selectedVitamin, setSelectedVitamin] = useState('D3')
  const [inputValue, setInputValue] = useState('1000')
  const [inputUnit, setInputUnit] = useState<'iu' | 'mcg' | 'mg'>('iu')

  const vitamin = VITAMINS?.find((v: VitaminDef) => v?.id === selectedVitamin) ?? VITAMINS[0]
  const numValue = parseFloat(inputValue) || 0

  // Convert everything to IU first, then to all units
  let iu = 0
  if (inputUnit === 'iu') iu = numValue
  else if (inputUnit === 'mcg') iu = numValue / (vitamin?.iu_to_mcg ?? 1)
  else if (inputUnit === 'mg') iu = (numValue * 1000) / (vitamin?.iu_to_mcg ?? 1)

  const mcg = iu * (vitamin?.iu_to_mcg ?? 0)
  const mg = mcg / 1000

  return (
    <div className="space-y-6">
      <FadeIn>
        <Card>
          <CardContent className="p-6">
            <div className="mb-6">
              <label className="text-sm font-medium text-muted-foreground mb-2 block">Vitamin wählen</label>
              <select
                value={selectedVitamin}
                onChange={(e: any) => setSelectedVitamin(e?.target?.value ?? 'D3')}
                className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm"
              >
                {VITAMINS.map((v: VitaminDef) => <option key={v?.id} value={v?.id}>{v?.name}</option>)}
              </select>
            </div>

            <div className="flex items-center gap-2 p-3 mb-6 rounded-lg bg-primary/5 border border-primary/10">
              <Info className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{vitamin?.info ?? ''}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Wert eingeben</label>
                <Input
                  type="number"
                  value={inputValue}
                  onChange={(e: any) => setInputValue(e?.target?.value ?? '')}
                  className="text-xl font-mono h-12"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Einheit</label>
                <div className="flex gap-2">
                  {(['iu', 'mcg', 'mg'] as const).map((unit: string) => (
                    <button
                      key={unit}
                      onClick={() => setInputUnit(unit as any)}
                      className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all ${
                        inputUnit === unit ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      {unit === 'iu' ? 'IU' : unit === 'mcg' ? 'µg' : 'mg'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className={`text-center p-4 rounded-lg ${inputUnit === 'iu' ? 'bg-primary/10 ring-2 ring-primary/30' : 'bg-muted'}`}>
                <div className="text-xs text-muted-foreground mb-1">IU</div>
                <div className="text-lg font-bold font-mono">{formatNumber(iu, 2)}</div>
              </div>
              <div className={`text-center p-4 rounded-lg ${inputUnit === 'mcg' ? 'bg-primary/10 ring-2 ring-primary/30' : 'bg-muted'}`}>
                <div className="text-xs text-muted-foreground mb-1">µg</div>
                <div className="text-lg font-bold font-mono">{formatNumber(mcg, 4)}</div>
              </div>
              <div className={`text-center p-4 rounded-lg ${inputUnit === 'mg' ? 'bg-primary/10 ring-2 ring-primary/30' : 'bg-muted'}`}>
                <div className="text-xs text-muted-foreground mb-1">mg</div>
                <div className="text-lg font-bold font-mono">{formatNumber(mg, 6)}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  )
}
