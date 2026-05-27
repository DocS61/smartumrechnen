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
      </div>
    </footer>
  )
}
