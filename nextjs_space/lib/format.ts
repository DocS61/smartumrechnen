export function formatNumber(num: number | null | undefined, decimals: number = 6): string {
  if (num == null || isNaN(num)) return '0'
  const n = Number(num)
  if (Math.abs(n) < 0.000001 && n !== 0) {
    return n?.toExponential?.(2) ?? '0'
  }
  // Remove trailing zeros
  const fixed = n?.toFixed?.(decimals) ?? '0'
  return parseFloat(fixed)?.toLocaleString?.('de-DE', { maximumFractionDigits: decimals }) ?? '0'
}
