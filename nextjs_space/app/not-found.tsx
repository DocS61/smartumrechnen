import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Seite nicht gefunden – SmartUmrechnen',
  description: 'Die angeforderte Seite wurde nicht gefunden.',
}

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-[70vh] flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="text-7xl font-bold text-primary/20 mb-4">404</div>
          <h1 className="font-display text-2xl font-bold tracking-tight mb-3">
            Seite nicht gefunden
          </h1>
          <p className="text-muted-foreground mb-8">
            Die angeforderte Seite existiert leider nicht. Vielleicht findest du, was du suchst, bei unseren Umrechnern.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
            >
              Zur Startseite
            </Link>
            <Link
              href="/#alle"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
            >
              Alle Umrechner
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
