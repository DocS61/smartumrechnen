'use client'

import Link from 'next/link'
import { Calculator } from 'lucide-react'
import { useState, useEffect } from 'react'

export function SiteFooter() {
  const [year, setYear] = useState(2026)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <Calculator className="w-5 h-5 text-primary" />
            <span className="font-display font-bold group-hover:text-primary transition-colors">SmartUmrechnen</span>
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <Link href="/#alle" className="hover:text-foreground transition-colors">Alle Umrechner</Link>
            <Link href="/impressum" className="hover:text-foreground transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</Link>
            <Link href="/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link>
          </nav>
          <p className="text-sm text-muted-foreground text-center">
            © {year} SmartUmrechnen
          </p>
        </div>

        {/* Schwester-Projekt */}
        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Du planst eine Hochzeit oder ein besonderes Event?
          </p>
          <a
            href="https://namensreue.de"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group"
          >
            <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </span>
            Entdecke namensreue.de – Dein Namensänderungs-Guide
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
