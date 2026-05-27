'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { ArrowLeftRight, RefreshCw, WifiOff, Wifi, Copy, Check, Star, StarOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'
import { getCachedCurrencyRates, setCachedCurrencyRates, addHistory, toggleFavorite, isFavorite } from '@/lib/local-storage'
import { formatNumber } from '@/lib/format'
import { FadeIn } from '@/components/ui/animate'

const CURRENCIES = [
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'USD', name: 'US-Dollar', symbol: '$' },
  { code: 'GBP', name: 'Britisches Pfund', symbol: '£' },
  { code: 'JPY', name: 'Japanischer Yen', symbol: '¥' },
  { code: 'CHF', name: 'Schweizer Franken', symbol: 'CHF' },
  { code: 'CAD', name: 'Kanadischer Dollar', symbol: 'C$' },
  { code: 'AUD', name: 'Australischer Dollar', symbol: 'A$' },
  { code: 'CNY', name: 'Chinesischer Yuan', symbol: '¥' },
  { code: 'INR', name: 'Indische Rupie', symbol: '₹' },
  { code: 'BRL', name: 'Brasilianischer Real', symbol: 'R$' },
  { code: 'KRW', name: 'Südkoreanischer Won', symbol: '₩' },
  { code: 'MXN', name: 'Mexikanischer Peso', symbol: 'Mex$' },
  { code: 'SEK', name: 'Schwedische Krone', symbol: 'kr' },
  { code: 'NOK', name: 'Norwegische Krone', symbol: 'kr' },
  { code: 'DKK', name: 'Dänische Krone', symbol: 'kr' },
  { code: 'PLN', name: 'Polnischer Zloty', symbol: 'zł' },
  { code: 'CZK', name: 'Tschechische Krone', symbol: 'Kč' },
  { code: 'HUF', name: 'Ungarischer Forint', symbol: 'Ft' },
  { code: 'TRY', name: 'Türkische Lira', symbol: '₺' },
  { code: 'THB', name: 'Thailändischer Baht', symbol: '฿' },
  { code: 'SGD', name: 'Singapur-Dollar', symbol: 'S$' },
  { code: 'HKD', name: 'Hongkong-Dollar', symbol: 'HK$' },
  { code: 'NZD', name: 'Neuseeland-Dollar', symbol: 'NZ$' },
  { code: 'ZAR', name: 'Südafrikanischer Rand', symbol: 'R' },
]

export function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState('EUR')
  const [toCurrency, setToCurrency] = useState('USD')
  const [inputValue, setInputValue] = useState('1')
  const [rates, setRates] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState(true)
  const [isOnline, setIsOnline] = useState(true)
  const [lastUpdate, setLastUpdate] = useState<string>('')
  const [copied, setCopied] = useState(false)
  const [isFav, setIsFav] = useState(false)
  const userInteracted = useRef(false)
  const initialRender = useRef(true)

  const fetchRates = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('https://api.frankfurter.app/latest?from=EUR')
      if (!res?.ok) throw new Error('API-Fehler')
      const data = await res?.json()
      const newRates: Record<string, number> = { EUR: 1, ...(data?.rates ?? {}) }
      setRates(newRates)
      setCachedCurrencyRates(newRates)
      setIsOnline(true)
      setLastUpdate(new Date().toLocaleString('de-DE'))
    } catch {
      const cached = getCachedCurrencyRates()
      if (cached?.rates) {
        setRates(cached.rates)
        setIsOnline(false)
        setLastUpdate(new Date(cached?.timestamp ?? 0).toLocaleString('de-DE') + ' (offline)')
      } else {
        setRates({ EUR: 1, USD: 1.08, GBP: 0.86, JPY: 162.5, CHF: 0.94 })
        setIsOnline(false)
        setLastUpdate('Fallback-Kurse')
      }
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchRates() }, [fetchRates])

  useEffect(() => {
    setIsFav(isFavorite({ category: 'waehrung', fromUnit: fromCurrency, toUnit: toCurrency }))
  }, [fromCurrency, toCurrency])

  const convert = (value: number, from: string, to: string): number => {
    const fromRate = rates?.[from] ?? 1
    const toRate = rates?.[to] ?? 1
    if (!fromRate) return 0
    return (value / fromRate) * toRate
  }

  const numValue = parseFloat(inputValue) || 0
  const result = convert(numValue, fromCurrency, toCurrency)

  const handleSwap = () => {
    userInteracted.current = true
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  const handleCopy = () => {
    const toDef = CURRENCIES?.find((c: any) => c?.code === toCurrency)
    navigator?.clipboard?.writeText?.(`${formatNumber(result, 2)} ${toDef?.code ?? ''}`)
    setCopied(true)
    toast.success('Kopiert!')
    setTimeout(() => setCopied(false), 2000)
  }

  const handleFavorite = () => {
    const newState = toggleFavorite({ category: 'waehrung', fromUnit: fromCurrency, toUnit: toCurrency })
    setIsFav(newState)
    toast.success(newState ? 'Favorit hinzugefügt' : 'Favorit entfernt')
  }

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
      return
    }
    if (numValue !== 0 && Object.keys(rates ?? {}).length > 0 && userInteracted.current) {
      addHistory({ category: 'waehrung', fromUnit: fromCurrency, toUnit: toCurrency, fromValue: numValue, toValue: result })
      userInteracted.current = false
    }
  }, [result, fromCurrency, toCurrency, numValue])

  return (
    <div className="space-y-6">
      <FadeIn>
        <Card>
          <CardContent className="p-6">
            {/* Online Status */}
            <div className="flex items-center gap-2 mb-4">
              {isOnline ? (
                <Badge variant="secondary" className="text-xs flex items-center gap-1">
                  <Wifi className="w-3 h-3 text-green-500" /> Live-Kurse
                </Badge>
              ) : (
                <Badge variant="outline" className="text-xs flex items-center gap-1">
                  <WifiOff className="w-3 h-3 text-orange-500" /> Offline-Modus
                </Badge>
              )}
              {lastUpdate && <span className="text-xs text-muted-foreground">Aktualisiert: {lastUpdate}</span>}
              <Button variant="ghost" size="icon" onClick={fetchRates} disabled={loading} className="ml-auto h-8 w-8">
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              </Button>
            </div>

            {/* Converter */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-4 items-end">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Von</label>
                <select
                  value={fromCurrency}
                  onChange={(e: any) => { userInteracted.current = true; setFromCurrency(e?.target?.value ?? 'EUR') }}
                  className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {CURRENCIES.map((c: any) => (
                    <option key={c?.code} value={c?.code}>{c?.code} – {c?.name}</option>
                  ))}
                </select>
                <Input
                  type="number"
                  value={inputValue}
                  onChange={(e: any) => { userInteracted.current = true; setInputValue(e?.target?.value ?? '') }}
                  className="text-2xl font-mono h-14"
                  placeholder="Betrag eingeben..."
                />
              </div>

              <div className="flex justify-center py-2">
                <Button variant="outline" size="icon" onClick={handleSwap} className="rounded-full h-10 w-10">
                  <ArrowLeftRight className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Nach</label>
                <select
                  value={toCurrency}
                  onChange={(e: any) => { userInteracted.current = true; setToCurrency(e?.target?.value ?? 'USD') }}
                  className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {CURRENCIES.map((c: any) => (
                    <option key={c?.code} value={c?.code}>{c?.code} – {c?.name}</option>
                  ))}
                </select>
                <div className="h-14 px-4 rounded-lg bg-muted flex items-center">
                  <span className="text-2xl font-mono font-semibold text-green-600 dark:text-green-400">
                    {loading ? '...' : formatNumber(result, 2)}
                  </span>
                  <span className="ml-2 text-muted-foreground text-sm">{toCurrency}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-border">
              <Button variant="outline" size="sm" onClick={handleCopy}>
                {copied ? <Check className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
                Kopieren
              </Button>
              <Button variant="outline" size="sm" onClick={handleFavorite}>
                {isFav ? <StarOff className="w-4 h-4 mr-1" /> : <Star className="w-4 h-4 mr-1" />}
                {isFav ? 'Entfernen' : 'Favorit'}
              </Button>
              <div className="ml-auto">
                <Badge variant="secondary" className="font-mono text-xs">
                  1 {fromCurrency} = {loading ? '...' : formatNumber(convert(1, fromCurrency, toCurrency), 4)} {toCurrency}
                </Badge>
              </div>
            </div>

            {/* All rates chain */}
            {!loading && (
              <div className="mt-6 pt-4 border-t border-border">
                <h3 className="text-sm font-medium mb-3 text-muted-foreground">Alle Kurse für 1 {fromCurrency}:</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                  {CURRENCIES.filter((c: any) => c?.code !== fromCurrency).map((c: any) => (
                    <div key={c?.code} className="flex items-center justify-between px-3 py-2 rounded-lg bg-muted/50 text-sm gap-2">
                      <div className="flex flex-col min-w-0">
                        <span className="font-medium text-foreground">{c?.symbol} {c?.code}</span>
                        <span className="text-xs text-muted-foreground truncate">{c?.name}</span>
                      </div>
                      <span className="font-mono font-semibold whitespace-nowrap">{formatNumber(convert(1, fromCurrency, c?.code ?? ''), 4)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  )
}
