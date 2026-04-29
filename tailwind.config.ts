import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // All semantic colors use CSS variables so dark mode works automatically
        bg:           'rgb(var(--color-bg) / <alpha-value>)',
        'bg-2':       'rgb(var(--color-bg-2) / <alpha-value>)',
        'bg-3':       'rgb(var(--color-bg-3) / <alpha-value>)',
        'bg-dark':    '#171717',
        'bg-dark-2':  '#1e1e1e',
        'bg-footer':  '#0c1828',
        'border-footer': '#1a2e45',
        fg:           'rgb(var(--color-fg) / <alpha-value>)',
        'fg-muted':   'rgb(var(--color-fg-muted) / <alpha-value>)',
        'fg-light':   '#ebe7e7',
        accent:       'rgb(var(--color-accent) / <alpha-value>)',
        'accent-hover': 'rgb(var(--color-accent-hover) / <alpha-value>)',
        'accent-light': 'rgb(var(--color-accent-light) / <alpha-value>)',
        border:       'rgb(var(--color-border) / <alpha-value>)',
        amber:        'rgb(var(--color-amber) / <alpha-value>)',
        'amber-light': 'rgb(var(--color-amber-light) / <alpha-value>)',
        'border-dark': '#2a2a2a',
      },
      fontFamily: {
        display: ['var(--font-bricolage)', 'system-ui', 'sans-serif'],
        body:    ['var(--font-figtree)', 'system-ui', 'sans-serif'],
        sans:    ['var(--font-figtree)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        'blue-sm':    '0 0 0 1px rgba(33,114,181,0.2), 0 4px 16px rgba(33,114,181,0.1)',
        'blue-md':    '0 0 0 1px rgba(33,114,181,0.3), 0 8px 32px rgba(33,114,181,0.15)',
        card:         '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.08), 0 16px 48px rgba(0,0,0,0.06)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        pulse:     'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
