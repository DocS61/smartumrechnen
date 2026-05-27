'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { History, Trash2, Star, Clock } from 'lucide-react'
import { getHistory, clearHistory, getFavorites, type HistoryEntry, type FavoriteEntry } from '@/lib/local-storage'
import { categories } from '@/lib/converter-data'
import { formatNumber } from '@/lib/format'
import { FadeIn } from '@/components/ui/animate'
import Link from 'next/link'
import { toast } from 'sonner'

export function HistoryPanel() {
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [favorites, setFavorites] = useState<FavoriteEntry[]>([])
  const [tab, setTab] = useState<'history' | 'favorites'>('history')

  useEffect(() => {
    setHistory(getHistory())
    setFavorites(getFavorites())
  }, [])

  const handleClear = () => {
    clearHistory()
    setHistory([])
    toast.success('Verlauf gelöscht')
  }

  const getCatName = (slug: string): string => {
    return categories?.find((c: any) => c?.slug === slug)?.name ?? slug ?? ''
  }

  const getCatColor = (slug: string): string => {
    return categories?.find((c: any) => c?.slug === slug)?.color ?? '#0EA5E9'
  }

  return (
    <FadeIn>
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Zuletzt & Favoriten</CardTitle>
            {tab === 'history' && (history?.length ?? 0) > 0 && (
              <Button variant="ghost" size="sm" onClick={handleClear} className="text-destructive">
                <Trash2 className="w-3.5 h-3.5 mr-1" /> Löschen
              </Button>
            )}
          </div>
          <div className="flex gap-1 mt-2">
            <button
              onClick={() => setTab('history')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm transition-all ${
                tab === 'history' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}
            >
              <Clock className="w-3.5 h-3.5" /> Verlauf
            </button>
            <button
              onClick={() => setTab('favorites')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm transition-all ${
                tab === 'favorites' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}
            >
              <Star className="w-3.5 h-3.5" /> Favoriten ({favorites?.length ?? 0})
            </button>
          </div>
        </CardHeader>
        <CardContent>
          {tab === 'history' ? (
            (history?.length ?? 0) === 0 ? (
              <p className="text-sm text-muted-foreground py-4 text-center">Noch keine Umrechnungen durchgeführt.</p>
            ) : (
              <div className="space-y-2 max-h-[300px] overflow-y-auto">
                {(history ?? []).slice(0, 10).map((h: HistoryEntry) => (
                  <Link key={h?.id} href={`/umrechner/${h?.category ?? ''}`}>
                    <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div>
                        <Badge variant="outline" className="text-xs mb-1" style={{ borderColor: getCatColor(h?.category ?? '') }}>
                          {getCatName(h?.category ?? '')}
                        </Badge>
                        <p className="text-sm font-mono">{formatNumber(h?.fromValue ?? 0)} {h?.fromUnit ?? ''} → {formatNumber(h?.toValue ?? 0)} {h?.toUnit ?? ''}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )
          ) : (
            (favorites?.length ?? 0) === 0 ? (
              <p className="text-sm text-muted-foreground py-4 text-center">Noch keine Favoriten gespeichert.</p>
            ) : (
              <div className="space-y-2">
                {(favorites ?? []).map((f: FavoriteEntry, i: number) => (
                  <Link key={i} href={`/umrechner/${f?.category ?? ''}`}>
                    <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div>
                        <Badge variant="outline" className="text-xs mb-1" style={{ borderColor: getCatColor(f?.category ?? '') }}>
                          {getCatName(f?.category ?? '')}
                        </Badge>
                        <p className="text-sm font-mono">{f?.fromUnit ?? ''} → {f?.toUnit ?? ''}</p>
                      </div>
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    </div>
                  </Link>
                ))}
              </div>
            )
          )}
        </CardContent>
      </Card>
    </FadeIn>
  )
}
