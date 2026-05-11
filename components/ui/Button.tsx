import React from 'react'
import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
}

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  const baseClasses = 'rounded-none font-medium tracking-wide transition-all duration-700'
  
  const buttonVariants = {
    variant: {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      outline: 'btn-outline',
    },
    size: {
      sm: 'px-8 py-3 text-sm',
      md: 'px-10 py-4',
      lg: 'px-14 py-5 text-lg',
    },
  }
  
  return (
    <button
      className={cn(
        baseClasses,
        buttonVariants.variant[variant],
        buttonVariants.size[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
