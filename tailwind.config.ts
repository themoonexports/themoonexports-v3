import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      textShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.5)',
        'md': '0 2px 4px rgba(0, 0, 0, 0.6)',
        'lg': '0 4px 8px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [
    // Add plugin for custom text shadow utilities
    function({ addUtilities }: any) {
      addUtilities({
        '.text-shadow-sm': {
          'text-shadow': '0 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          'text-shadow': '0 2px 4px rgba(0, 0, 0, 0.6)',
        },
        '.text-shadow-lg': {
          'text-shadow': '0 4px 8px rgba(0, 0, 0, 0.7)',
        },
      })
    },
  ],
}

export default config