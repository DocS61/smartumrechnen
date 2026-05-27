'use client'

export interface HistoryEntry {
  id: string
  category: string
  fromUnit: string
  toUnit: string
  fromValue: number
  toValue: number
  timestamp: number
}

export interface FavoriteEntry {
  category: string
  fromUnit: string
  toUnit: string
}

const HISTORY_KEY = 'smartumrechnen_history'
const FAVORITES_KEY = 'smartumrechnen_favorites'
const CURRENCY_CACHE_KEY = 'smartumrechnen_currency_cache'
const MAX_HISTORY = 50

function safeGetItem(key: string): string | null {
  try {
    if (typeof window === 'undefined') return null
    return localStorage?.getItem?.(key) ?? null
  } catch {
    return null
  }
}

function safeSetItem(key: string, value: string): void {
  try {
    if (typeof window === 'undefined') return
    localStorage?.setItem?.(key, value)
  } catch {
    // Storage full or unavailable
  }
}

export function getHistory(): HistoryEntry[] {
  try {
    const raw = safeGetItem(HISTORY_KEY)
    if (!raw) return []
    return JSON.parse(raw) ?? []
  } catch {
    return []
  }
}

export function addHistory(entry: Omit<HistoryEntry, 'id' | 'timestamp'>): void {
  const history = getHistory()
  // Deduplizierung: Überspringen wenn der letzte Eintrag identisch ist
  const last = history?.[0]
  if (
    last &&
    last.category === entry.category &&
    last.fromUnit === entry.fromUnit &&
    last.toUnit === entry.toUnit &&
    last.fromValue === entry.fromValue &&
    last.toValue === entry.toValue
  ) {
    return
  }
  const newEntry: HistoryEntry = {
    ...(entry ?? {}),
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    timestamp: Date.now(),
  }
  const updated = [newEntry, ...(history ?? [])].slice(0, MAX_HISTORY)
  safeSetItem(HISTORY_KEY, JSON.stringify(updated))
}

export function clearHistory(): void {
  safeSetItem(HISTORY_KEY, '[]')
}

export function getFavorites(): FavoriteEntry[] {
  try {
    const raw = safeGetItem(FAVORITES_KEY)
    if (!raw) return []
    return JSON.parse(raw) ?? []
  } catch {
    return []
  }
}

export function toggleFavorite(entry: FavoriteEntry): boolean {
  const favorites = getFavorites()
  const idx = favorites?.findIndex?.((f: FavoriteEntry) =>
    f?.category === entry?.category && f?.fromUnit === entry?.fromUnit && f?.toUnit === entry?.toUnit
  ) ?? -1
  if (idx >= 0) {
    favorites.splice(idx, 1)
    safeSetItem(FAVORITES_KEY, JSON.stringify(favorites))
    return false
  } else {
    safeSetItem(FAVORITES_KEY, JSON.stringify([...(favorites ?? []), entry]))
    return true
  }
}

export function isFavorite(entry: FavoriteEntry): boolean {
  const favorites = getFavorites()
  return (favorites ?? []).some((f: FavoriteEntry) =>
    f?.category === entry?.category && f?.fromUnit === entry?.fromUnit && f?.toUnit === entry?.toUnit
  )
}

export function getCachedCurrencyRates(): { rates: Record<string, number>; timestamp: number } | null {
  try {
    const raw = safeGetItem(CURRENCY_CACHE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export function setCachedCurrencyRates(rates: Record<string, number>): void {
  safeSetItem(CURRENCY_CACHE_KEY, JSON.stringify({ rates, timestamp: Date.now() }))
}

export function getSmartSuggestions(): string[] {
  const history = getHistory()
  const catCount: Record<string, number> = {}
  ;(history ?? []).forEach((h: HistoryEntry) => {
    const cat = h?.category ?? ''
    catCount[cat] = (catCount[cat] ?? 0) + 1
  })
  return Object.entries(catCount ?? {})
    .sort(([, a]: any, [, b]: any) => (b ?? 0) - (a ?? 0))
    .slice(0, 5)
    .map(([slug]: any) => slug ?? '')
}
