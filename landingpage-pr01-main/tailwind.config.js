/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: '#D81B60', // Vibrant magenta inspired by primary textiles
          light: '#F06292',
          dark: '#AD1457',
        },
        primary: {
          blue: '#1A5276', // Deep blue from Majorelle Garden
          terracotta: '#C35A38', // Terracotta/clay color common in primary architecture
          sand: '#E4CA9C', // Warm sand color
          mint: '#5B8C7D', // primary mint color
          gold: '#D4AF37', // Gold for luxury touch
        },
        banking: {
          dark: '#1E293B', // Professional dark blue
          light: '#F8FAFC', // Clean light background
          accent: '#10B981', // Success/money green
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-playfair)', 'serif'],
        arabic: ['var(--font-tajawal)', 'sans-serif'],
      },
      backgroundImage: {
        'primary-pattern': "url('/img/primary-pattern.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'primary': '0 4px 14px 0 rgba(0, 121, 107, 0.39)',
      },
      borderRadius: {
        'primary': '0.5rem 1.5rem 0.5rem 1.5rem',
      },
    },
  },
  plugins: [],
}