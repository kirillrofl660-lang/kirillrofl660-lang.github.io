import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

// Палитра бренда («фейерверк»):
// #030408 — глубокий чёрный (фон/текст)
// #620125 — насыщенный бордово-красный
// #E51F50 — яркий малиновый (акцент)
// #DF594B — тёплый кораллово-красный
// #F5B9A9 — нежный персиковый (светлый фон)

const config = defineConfig({
  globalCss: {
    'html, body': {
      margin: 0,
      padding: 0,
      bg: 'sand.50',
      color: 'graphite.900',
      fontFamily: 'body',
    },
    '*::selection': {
      bg: 'bronze.500',
      color: 'sand.50',
    },
    '::-webkit-scrollbar': { width: '10px' },
    '::-webkit-scrollbar-track': { bg: 'sand.100' },
    '::-webkit-scrollbar-thumb': {
      bg: 'taupe.400',
      borderRadius: '999px',
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: "'Space Grotesk', system-ui, sans-serif" },
        body: { value: "'Manrope', system-ui, sans-serif" },
      },
      colors: {
        graphite: {
          50: { value: '#f9f3f4' },
          100: { value: '#f2e1e5' },
          200: { value: '#e3c0c9' },
          300: { value: '#cd91a1' },
          400: { value: '#a8556a' },
          500: { value: '#7e2d44' },
          600: { value: '#620125' },
          700: { value: '#44011a' },
          800: { value: '#260210' },
          900: { value: '#100109' },
          950: { value: '#030408' },
        },
        bronze: {
          50: { value: '#fff1ee' },
          100: { value: '#ffdfd8' },
          200: { value: '#fbbfb3' },
          300: { value: '#f5b9a9' },
          400: { value: '#df594b' },
          500: { value: '#e51f50' },
          600: { value: '#c10f3f' },
          700: { value: '#9a0d34' },
          800: { value: '#6f0a26' },
          900: { value: '#4a0719' },
          950: { value: '#2a040e' },
        },
        taupe: {
          50: { value: '#fff3f0' },
          100: { value: '#ffe2db' },
          200: { value: '#fcc7bd' },
          300: { value: '#f3a597' },
          400: { value: '#df594b' },
          500: { value: '#c8413a' },
          600: { value: '#a8302f' },
          700: { value: '#842727' },
          800: { value: '#5f1d1e' },
          900: { value: '#3f1516' },
        },
        sand: {
          50: { value: '#fff6f1' },
          100: { value: '#ffe9df' },
          200: { value: '#f5b9a9' },
          300: { value: '#f0a18d' },
          400: { value: '#e6826d' },
          500: { value: '#df594b' },
          600: { value: '#c8413a' },
          700: { value: '#9e3030' },
          800: { value: '#742525' },
          900: { value: '#4d1a1a' },
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: '{colors.bronze.500}' },
          contrast: { value: '{colors.sand.50}' },
          fg: { value: '{colors.bronze.700}' },
          muted: { value: '{colors.bronze.100}' },
          subtle: { value: '{colors.bronze.50}' },
          emphasized: { value: '{colors.bronze.600}' },
          focusRing: { value: '{colors.bronze.500}' },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
