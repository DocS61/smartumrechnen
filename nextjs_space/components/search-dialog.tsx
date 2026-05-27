'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Search, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { searchIndex, type SearchEntry } from '@/lib/search-data'

export function SearchDialog() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchEntry[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Keyboard shortcut: Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(true)
      }
      if (e.key === 'Escape') {
        setOpen(false)
        setQuery('')
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
    }
  }, [open])

  // Close on click outside
  useEffect(() => {
    if (!open) return
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
        setQuery('')
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  const search = useCallback((q: string) => {
    setQuery(q)
    if (!q.trim()) {
      setResults([])
      return
    }
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean)
    const scored = searchIndex
      .map((entry) => {
        const searchable = [
          entry.label.toLowerCase(),
          entry.description.toLowerCase(),
          ...entry.keywords.map((k) => k.toLowerCase()),
        ].join(' ')
        let score = 0
        for (const term of terms) {
          if (searchable.includes(term)) {
            score += 1
            // Bonus for label match
            if (entry.label.toLowerCase().includes(term)) score += 2
            // Bonus for exact keyword match
            if (entry.keywords.some((k) => k.toLowerCase() === term)) score += 3
          }
        }
        return { entry, score }
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12)
      .map((r) => r.entry)

    // Deduplicate by label+slug
    const seen = new Set<string>()
    const unique = scored.filter((e) => {
      const key = `${e.label}-${e.slug}`
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })

    setResults(unique)
  }, [])

  const handleSelect = () => {
    setOpen(false)
    setQuery('')
    setResults([])
  }

  return (
    <>
      {/* Search trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 h-9 px-3 rounded-lg border border-input bg-background/60 hover:bg-muted text-sm text-muted-foreground transition-colors cursor-pointer"
      >
        <Search className="w-4 h-4" />
        <span className="hidden sm:inline">Suche...</span>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono bg-muted rounded border border-border ml-2">
          ⌘K
        </kbd>
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-[15vh]">
          <div
            ref={containerRef}
            className="w-full max-w-[560px] mx-4 bg-background rounded-xl border border-border shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-4 border-b border-border">
              <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => search(e.target.value)}
                placeholder="Einheit, Umrechner oder Kürzel suchen..."
                className="flex-1 h-14 bg-transparent text-base outline-none placeholder:text-muted-foreground"
                autoComplete="off"
              />
              {query && (
                <button onClick={() => { setQuery(''); setResults([]) }} className="p-1 rounded-md hover:bg-muted">
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              )}
            </div>

            {/* Results */}
            {results.length > 0 && (
              <div className="max-h-[400px] overflow-y-auto p-2">
                {results.map((entry, idx) => (
                  <Link
                    key={`${entry.slug}-${idx}`}
                    href={`/umrechner/${entry.slug}`}
                    onClick={handleSelect}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium">{entry.label}</div>
                      <div className="text-xs text-muted-foreground truncate">{entry.description}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </Link>
                ))}
              </div>
            )}

            {/* Empty state */}
            {query && results.length === 0 && (
              <div className="p-8 text-center text-sm text-muted-foreground">
                Keine Ergebnisse für „{query}“ gefunden.
              </div>
            )}

            {/* No query hint */}
            {!query && (
              <div className="p-6 text-center text-sm text-muted-foreground">
                <p>Suche nach Einheiten, Kürzeln oder Umrechnern</p>
                <p className="text-xs mt-1">z. B. „PSI“, „Kilogramm“, „Vitamin D3“, „EUR“</p>
              </div>
            )}

            {/* Footer */}
            <div className="px-4 py-2 border-t border-border flex items-center gap-4 text-[11px] text-muted-foreground">
              <span>ESC zum Schließen</span>
              <span>↑↓ Navigieren</span>
              <span>↵ Öffnen</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
