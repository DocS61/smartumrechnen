'use client'

import React from 'react'

// Animation wrappers - pure pass-through to ensure content is always visible.
// Subtle entrance animations are applied via CSS classes only when JS is loaded.
// No opacity manipulation in any state to prevent invisible content.

export function FadeIn({
  children, delay = 0, duration = 0.4, className,
}: {
  children: React.ReactNode; delay?: number; duration?: number; className?: string
}) {
  return <div className={className}>{children}</div>
}

export function ScaleIn({
  children, delay = 0, className,
}: {
  children: React.ReactNode; delay?: number; className?: string
}) {
  return <div className={className}>{children}</div>
}

export function SlideIn({
  children, from = 'bottom', delay = 0, className,
}: {
  children: React.ReactNode; from?: 'bottom' | 'top' | 'left' | 'right'; delay?: number; className?: string
}) {
  return <div className={className}>{children}</div>
}

export function Stagger({
  children, staggerDelay = 0.08, className,
}: {
  children: React.ReactNode; staggerDelay?: number; className?: string
}) {
  return <div className={className}>{children}</div>
}

export function StaggerItem({
  children, className, style,
}: {
  children: React.ReactNode; className?: string; style?: React.CSSProperties
}) {
  return <div className={className} style={style}>{children}</div>
}

export function HoverLift({
  children, className,
}: {
  children: React.ReactNode; className?: string
}) {
  return (
    <div className={`transition-all duration-150 ease-out hover:-translate-y-0.5 hover:shadow-lg ${className ?? ''}`}>
      {children}
    </div>
  )
}

export function PressScale({
  children, className,
}: {
  children: React.ReactNode; className?: string
}) {
  return (
    <div className={`active:scale-[0.98] transition-transform duration-100 ${className ?? ''}`}>
      {children}
    </div>
  )
}

export function SkeletonPulse({ className }: { className?: string }) {
  return (
    <div className={`rounded-md bg-muted animate-pulse ${className ?? ''}`} />
  )
}
