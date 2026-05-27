export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'

const FALLBACK_RATES: Record<string, number> = {
  EUR: 1, USD: 1.16, GBP: 0.87, JPY: 185.5, CHF: 0.92,
  CAD: 1.61, AUD: 1.63, CNY: 7.89, INR: 111.37, BRL: 5.87,
  KRW: 1745.2, MXN: 20.15, SEK: 10.79, NOK: 10.80, DKK: 7.47,
  PLN: 4.24, CZK: 24.28, HUF: 354.83, TRY: 53.42, THB: 37.96,
  SGD: 1.49, HKD: 9.12, NZD: 1.98, ZAR: 19.04
}

export async function GET() {
  try {
    const res = await fetch('https://api.frankfurter.app/latest?from=EUR', {
      next: { revalidate: 3600 },
    })
    if (!res.ok) throw new Error('API error')
    const data = await res.json()
    const rates: Record<string, number> = { EUR: 1, ...(data?.rates ?? {}) }
    return NextResponse.json({ rates, live: true })
  } catch {
    return NextResponse.json({ rates: FALLBACK_RATES, live: false })
  }
}
