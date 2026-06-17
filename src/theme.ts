import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

// Палитра бренда:
// #363233 — графит (тёмный фон/текст)
// #613708 — тёмная бронза
// #895C20 — бронза (акцент)
// #A38976 — тёплый таупе
// #CABCAC — песочный/крем

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
          50: { value: '#f6f5f5' },
          100: { value: '#e7e5e5' },
          200: { value: '#c9c5c5' },
          300: { value: '#a39d9d' },
          400: { value: '#6f6a6a' },
          500: { value: '#4a4546' },
          600: { value: '#3f3b3c' },
          700: { value: '#363233' },
          800: { value: '#2a2728' },
          900: { value: '#1f1c1d' },
          950: { value: '#141213' },
        },
        bronze: {
          50: { value: '#faf4ea' },
          100: { value: '#f1e2c9' },
          200: { value: '#e3c393' },
          300: { value: '#d2a25c' },
          400: { value: '#b07a35' },
          500: { value: '#895c20' },
          600: { value: '#744d1b' },
          700: { value: '#613708' },
          800: { value: '#4d2c07' },
          900: { value: '#3a2105' },
          950: { value: '#241403' },
        },
        taupe: {
          50: { value: '#f7f3f0' },
          100: { value: '#ece3dc' },
          200: { value: '#d9c8bb' },
          300: { value: '#c3aa97' },
          400: { value: '#a38976' },
          500: { value: '#8f7362' },
          600: { value: '#785e50' },
          700: { value: '#604a40' },
          800: { value: '#4a3a33' },
          900: { value: '#382c27' },
        },
        sand: {
          50: { value: '#faf7f3' },
          100: { value: '#f2ece4' },
          200: { value: '#e7dccf' },
          300: { value: '#cabcac' },
          400: { value: '#b9a791' },
          500: { value: '#a38976' },
          600: { value: '#8a6f5d' },
          700: { value: '#6f5849' },
          800: { value: '#534239' },
          900: { value: '#3a2f29' },
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
