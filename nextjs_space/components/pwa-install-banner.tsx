'use client'

import { useState, useEffect } from 'react'
import { X, Share, Download, Smartphone } from 'lucide-react'

const DISMISS_KEY = 'pwa-install-dismissed'
const DISMISS_DURATION = 7 * 24 * 60 * 60 * 1000 // 7 Tage

type DeviceType = 'ios' | 'android' | 'other'

function getDeviceType(): DeviceType {
  if (typeof window === 'undefined') return 'other'
  const ua = navigator.userAgent || ''
  if (/iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
    return 'ios'
  }
  if (/Android/.test(ua)) {
    return 'android'
  }
  return 'other'
}

function isStandalone(): boolean {
  if (typeof window === 'undefined') return false
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as any).standalone === true
  )
}

function isMobile(): boolean {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

function Step({ number, children }: { number: number; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
        {number}
      </span>
      <p className="text-sm leading-relaxed">{children}</p>
    </div>
  )
}

export function PWAInstallBanner() {
  const [visible, setVisible] = useState(false)
  const [showGuide, setShowGuide] = useState(false)
  const [device, setDevice] = useState<DeviceType>('other')

  useEffect(() => {
    if (!isMobile() || isStandalone()) return

    const det = getDeviceType()
    if (det === 'other') return
    setDevice(det)

    try {
      const dismissed = localStorage.getItem(DISMISS_KEY)
      if (dismissed) {
        const ts = parseInt(dismissed, 10)
        if (Date.now() - ts < DISMISS_DURATION) return
      }
    } catch {}

    const timer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    setVisible(false)
    setShowGuide(false)
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()))
    } catch {}
  }

  if (!visible) return null

  return (
    <>
      {/* CTA-Banner – rechts unten, links Platz für Usercentrics-Button */}
      {!showGuide && (
        <div className="fixed bottom-4 right-4 left-16 z-40 animate-fade-in md:hidden">
          <div className="bg-card border border-border rounded-xl shadow-lg p-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Smartphone className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium leading-tight">App installieren</p>
              <p className="text-xs text-muted-foreground leading-tight mt-0.5">Direkt vom Homescreen starten</p>
            </div>
            <button
              onClick={() => setShowGuide(true)}
              className="px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-lg flex-shrink-0 hover:bg-primary/90 transition-colors"
            >
              So geht&apos;s
            </button>
            <button
              onClick={handleDismiss}
              className="p-1 text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
              aria-label="Schließen"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Anleitung als Bottom-Sheet */}
      {showGuide && (
        <div className="fixed inset-0 z-50 flex items-end justify-center md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={handleDismiss} />
          <div className="relative w-full max-w-md bg-card rounded-t-2xl shadow-2xl p-5 pb-8 animate-fade-in">
            <button
              onClick={handleDismiss}
              className="absolute top-3 right-3 p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Download className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg">SmartUmrechnen installieren</h3>
              <p className="text-sm text-muted-foreground mt-1">Schneller Zugriff direkt vom Homescreen</p>
            </div>

            {device === 'ios' ? (
              <div className="space-y-4">
                <Step number={1}>
                  Tippe unten in Safari auf das{' '}
                  <strong className="inline-flex items-center gap-1">
                    Teilen-Symbol
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-muted rounded">
                      <Share className="w-3.5 h-3.5" />
                    </span>
                  </strong>
                </Step>
                <Step number={2}>
                  Scrolle und wähle{' '}
                  <strong>{'\u201e'}Zum Home-Bildschirm{'\u201c'}</strong>
                </Step>
                <Step number={3}>
                  Tippe oben rechts auf <strong>{'\u201e'}Hinzufügen{'\u201c'}</strong> – fertig!
                </Step>
              </div>
            ) : (
              <div className="space-y-4">
                <Step number={1}>
                  Tippe oben rechts auf das{' '}
                  <strong className="inline-flex items-center gap-1">
                    Menü
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-muted rounded">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="5" r="2" />
                        <circle cx="12" cy="12" r="2" />
                        <circle cx="12" cy="19" r="2" />
                      </svg>
                    </span>
                  </strong>
                </Step>
                <Step number={2}>
                  Wähle{' '}
                  <strong>{'\u201e'}Zum Startbildschirm hinzufügen{'\u201c'}</strong>{' '}
                  oder <strong>{'\u201e'}App installieren{'\u201c'}</strong>
                </Step>
                <Step number={3}>
                  Bestätige mit <strong>{'\u201e'}Installieren{'\u201c'}</strong> – fertig!
                </Step>
              </div>
            )}

            <div className="mt-5 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                Die App funktioniert offline und verbraucht keinen Speicherplatz.
              </p>
            </div>

            <button
              onClick={handleDismiss}
              className="w-full mt-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Später erinnern
            </button>
          </div>
        </div>
      )}
    </>
  )
}
