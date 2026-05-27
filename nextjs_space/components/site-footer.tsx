import Link from 'next/link'
import { Calculator } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-primary" />
            <span className="font-display font-bold">SmartUmrechnen</span>
          </div>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/impressum" className="hover:text-foreground transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</Link>
            <Link href="/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link>
          </nav>
          <p className="text-sm text-muted-foreground text-center">
            © 2026 SmartUmrechnen
          </p>
        </div>
      </div>
    </footer>
  )
}
