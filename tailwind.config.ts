import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
      },
      borderRadius: {
        'button': '4px'
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            code: {
              backgroundColor: '#f6f8fa',
              padding: '0.2em 0.4em',
              borderRadius: '3px',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  safelist: [
    'bg-blue-100',
    'bg-green-100',
    'bg-purple-100',
    'bg-red-100',
    'bg-yellow-100',
    'bg-pink-100',
    'text-blue-600',
    'text-green-600',
    'text-purple-600',
    'text-red-600',
    'text-yellow-600',
    'text-pink-600',
    'hover:bg-blue-50',
    'hover:bg-green-50',
    'hover:bg-purple-50',
    'hover:bg-red-50',
    'hover:bg-yellow-50',
    'hover:bg-pink-50',
  ],
  plugins: [
    typography,
  ],
}

export default config 