/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D9A400',
          50: '#FEF9E7',
          100: '#FCF0C4',
          200: '#F9E189',
          300: '#F5CE4A',
          400: '#F0BC1A',
          500: '#D9A400',
          600: '#B08400',
          700: '#866400',
          800: '#5C4500',
          900: '#332700',
        },
        industrial: {
          black: '#111111',
          gray: '#5E646B',
          steel: '#3A3F47',
          charcoal: '#1E1E1E',
        }
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        heading: ['Anton', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(217, 164, 0, 0.4)' },
          '50%': { boxShadow: '0 0 0 15px rgba(217, 164, 0, 0)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}