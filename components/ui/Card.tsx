import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  variant?: 'default' | 'elevated' | 'dark' | 'sage'
}

export const cardVariants = {
  variant: {
    default: 'card-atmospheric',
    elevated: 'card-atmospheric shadow-atmospheric-lg',
    dark: 'card-dark',
    sage: 'card-sage',
  },
}

export function Card({ children, className, hover = false, variant = 'default' }: CardProps) {
  return (
    <div
      className={cn(
        cardVariants.variant[variant],
        hover && 'hover-lift',
        className
      )}
    >
      {children}
    </div>
  )
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn('space-y-4', className)}>
      {children}
    </div>
  )
}

interface CardTitleProps {
  children: ReactNode
  className?: string
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3 className={cn('heading-serif-small text-charcoal', className)}>
      {children}
    </h3>
  )
}

interface CardDescriptionProps {
  children: ReactNode
  className?: string
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn('body-text', className)}>
      {children}
    </p>
  )
}
