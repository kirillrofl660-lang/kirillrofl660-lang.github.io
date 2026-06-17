import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

// Палитра бренда:
// #CDB08E — тёплый тан (акцент)
// #BFB6A6 — светлый грейж
// #AAAAA4 — нейтральный серый
// #4A4944 — тёмный графит (тёмные секции/текст)
// #11100B — почти чёрный (самый тёмный)

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
          50: { value: '#f6f5f3' },
          100: { value: '#eceae6' },
          200: { value: '#d8d5cf' },
          300: { value: '#bfb6a6' },
          400: { value: '#aaaaa4' },
          500: { value: '#6e6d67' },
          600: { value: '#57564f' },
          700: { value: '#4a4944' },
          800: { value: '#2c2b25' },
          900: { value: '#1c1b14' },
          950: { value: '#11100b' },
        },
        bronze: {
          50: { value: '#faf6ef' },
          100: { value: '#f3ebdd' },
          200: { value: '#e4d2b6' },
          300: { value: '#cdb08e' },
          400: { value: '#bf9b6f' },
          500: { value: '#ab8458' },
          600: { value: '#8f6c45' },
          700: { value: '#735636' },
          800: { value: '#564129' },
          900: { value: '#3a2c1b' },
          950: { value: '#221a0f' },
        },
        taupe: {
          50: { value: '#f6f5f2' },
          100: { value: '#eceae4' },
          200: { value: '#ddd9cf' },
          300: { value: '#c7c1b3' },
          400: { value: '#bfb6a6' },
          500: { value: '#aaaaa4' },
          600: { value: '#86857e' },
          700: { value: '#66655f' },
          800: { value: '#4a4944' },
          900: { value: '#2c2b25' },
        },
        sand: {
          50: { value: '#f7f6f3' },
          100: { value: '#efece6' },
          200: { value: '#e3ded4' },
          300: { value: '#d2ccbf' },
          400: { value: '#bfb6a6' },
          500: { value: '#aaaaa4' },
          600: { value: '#86857e' },
          700: { value: '#66655f' },
          800: { value: '#4a4944' },
          900: { value: '#2c2b25' },
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: '{colors.bronze.600}' },
          contrast: { value: '{colors.sand.50}' },
          fg: { value: '{colors.bronze.700}' },
          muted: { value: '{colors.bronze.100}' },
          subtle: { value: '{colors.bronze.50}' },
          emphasized: { value: '{colors.bronze.700}' },
          focusRing: { value: '{colors.bronze.500}' },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
