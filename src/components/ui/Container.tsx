'use client'

import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'sm' | 'lg' | 'xl' | 'full'
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'default', ...props }, ref) => {
    const sizes = {
      default: 'max-w-7xl',
      sm: 'max-w-3xl',
      lg: 'max-w-5xl',
      xl: 'max-w-7xl',
      full: 'max-w-full'
    }

    return (
      <div
        ref={ref}
        className={cn(
          'mx-auto w-full px-4 md:px-8',
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)

Container.displayName = 'Container'

export { Container }