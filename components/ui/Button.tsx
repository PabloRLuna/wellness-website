import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
}

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  const baseClasses = 'rounded-none font-medium tracking-wide transition-all duration-300'
  
  const variants = {
    primary: 'bg-warm-brown text-white hover:bg-opacity-90 hover:shadow-lg',
    secondary: 'border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white'
  }
  
  const sizes = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3',
    lg: 'px-10 py-4 text-lg'
  }
  
  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
