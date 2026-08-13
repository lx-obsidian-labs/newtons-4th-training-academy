'use client'

import { cn } from '@/lib/utils'
import { forwardRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  disabled?: boolean
  className?: string
  children?: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, href, type = 'button', onClick, disabled }, ref) => {
    const variants = {
      primary: 'bg-gradient-to-r from-gold to-yellow-500 text-industrial-black shadow-lg hover:shadow-gold/30',
      secondary: 'border-2 border-gold text-gold hover:bg-gold hover:text-industrial-black',
      ghost: 'text-white/80 hover:text-gold'
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-8 py-4 text-base',
      lg: 'px-10 py-5 text-lg'
    }

    const classes = cn(
      'font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2',
      variants[variant],
      sizes[size],
      disabled && 'opacity-50 cursor-not-allowed',
      className
    )

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      )
    }

    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={onClick}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        className={classes}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button }