import { DM_Sans, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { ChunkLoadErrorHandler } from '@/components/chunk-load-error-handler'
import { PWARegister } from '@/components/pwa-register'
import { PWAInstallBanner } from '@/components/pwa-install-banner'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL ?? 'https://smartumrechnen.de'),
  title: 'SmartUmrechnen – Intelligente Einheiten-Umrechnung',
  description: 'SmartUmrechnen bietet 15 professionelle Umrechner für Länge, Gewicht, Temperatur, Währung, Fläche, Volumen und mehr. Kostenlos, schnell und offline verfügbar.',
  keywords: 'Umrechner, Einheiten, Länge, Gewicht, Temperatur, Währung, Fläche, Volumen, Geschwindigkeit, online, kostenlos',
  authors: [{ name: 'SmartUmrechnen' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'SmartUmrechnen – Intelligente Einheiten-Umrechnung',
    description: 'Kostenloser Online-Umrechner mit 15 Kategorien. Smart-Vorschläge, Live-Währungskurse und Offline-Modus.',
    type: 'website',
    locale: 'de_DE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0EA5E9" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="alternate" hrefLang="de" href="https://smartumrechnen.de" />
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      <body className={`${dmSans.variable} ${jakartaSans.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <ChunkLoadErrorHandler />
          <PWARegister />
          <PWAInstallBanner />
        </ThemeProvider>
      </body>
    </html>
  )
}
