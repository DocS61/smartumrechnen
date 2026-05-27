'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calculator, Menu, X, History, Star, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { categories } from '@/lib/converter-data'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  if (!mounted && typeof window !== 'undefined') {
    setTimeout(() => setMounted(true), 0)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-16 px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <Calculator className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
            Smart<span className="text-primary">Umrechnen</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {(categories ?? []).slice(0, 6).map((cat: any) => (
            <Link key={cat?.slug} href={`/umrechner/${cat?.slug}`}>
              <Button variant="ghost" size="sm" className="text-sm">
                {cat?.shortName ?? ''}
              </Button>
            </Link>
          ))}
          <Link href="/#alle">
            <Button variant="ghost" size="sm" className="text-sm text-muted-foreground">
              Alle 15 →
            </Button>
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Theme umschalten"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          )}

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Calculator className="w-5 h-5 text-primary" />
                  <span className="font-display font-bold text-lg">SmartUmrechnen</span>
                </div>
                <nav className="flex flex-col gap-1">
                  {(categories ?? []).map((cat: any) => {
                    const Icon = cat?.icon
                    return (
                      <Link
                        key={cat?.slug}
                        href={`/umrechner/${cat?.slug}`}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors"
                      >
                        {Icon && <Icon className="w-4 h-4" style={{ color: cat?.color ?? '#0EA5E9' }} />}
                        <span className="text-sm font-medium">{cat?.name ?? ''}</span>
                      </Link>
                    )
                  })}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
