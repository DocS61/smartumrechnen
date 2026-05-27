'use client'

import React from 'react'

export function FadeIn({
  children, delay = 0, duration = 0.4, className,
}: {
  children: React.ReactNode; delay?: number; duration?: number; className?: string
}) {
  return (
    <div
      className={`animate-fade-in ${className ?? ''}`}
      style={{ animationDelay: `${delay}s`, animationDuration: `${duration}s` }}
    >
      {children}
    </div>
  )
}

export function ScaleIn({
  children, delay = 0, className,
}: {
  children: React.ReactNode; delay?: number; className?: string
}) {
  return (
    <div
      className={`animate-scale-in ${className ?? ''}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}

export function SlideIn({
  children, from = 'bottom', delay = 0, className,
}: {
  children: React.ReactNode; from?: 'bottom' | 'top' | 'left' | 'right'; delay?: number; className?: string
}) {
  const animClass = from === 'left' ? 'animate-slide-in-left'
    : from === 'right' ? 'animate-slide-in-right'
    : from === 'top' ? 'animate-slide-in-top'
    : 'animate-fade-in'
  return (
    <div
      className={`${animClass} ${className ?? ''}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}

export function Stagger({
  children, staggerDelay = 0.08, className,
}: {
  children: React.ReactNode; staggerDelay?: number; className?: string
}) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, i) => {
        if (!React.isValidElement(child)) return child
        return React.cloneElement(child as React.ReactElement<any>, {
          style: { ...(child.props?.style ?? {}), animationDelay: `${i * staggerDelay}s` },
        })
      })}
    </div>
  )
}

export function StaggerItem({
  children, className, style,
}: {
  children: React.ReactNode; className?: string; style?: React.CSSProperties
}) {
  return (
    <div
      className={`animate-stagger-item ${className ?? ''}`}
      style={style}
    >
      {children}
    </div>
  )
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
