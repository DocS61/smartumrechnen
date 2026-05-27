'use client'

export function AdBanner({ slot }: { slot?: string }) {
  // AdSense placeholder - replace with actual AdSense code when ready
  return (
    <div className="w-full flex justify-center">
      <div
        className="w-full max-w-[728px] h-[90px] rounded-lg bg-muted/50 border border-dashed border-border flex items-center justify-center"
        data-ad-slot={slot ?? 'default'}
      >
        <span className="text-xs text-muted-foreground">Werbung</span>
      </div>
    </div>
  )
}
