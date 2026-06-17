import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

// Палитра бренда:
// #FDE0B8 — кремово-персиковый (светлый фон)
// #FC9A64 — коралл/оранж (акцент)
// #C17C75 — терракота
// #7B515F — сливовый мов
// #23131E — тёмный сливовый (почти чёрный)

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
          50: { value: '#f8f3f5' },
          100: { value: '#efe2e8' },
          200: { value: '#dcc6d0' },
          300: { value: '#c2a1b0' },
          400: { value: '#9d7383' },
          500: { value: '#7b515f' },
          600: { value: '#5e3c49' },
          700: { value: '#432a35' },
          800: { value: '#311e27' },
          900: { value: '#23131e' },
          950: { value: '#160b12' },
        },
        bronze: {
          50: { value: '#fff5ec' },
          100: { value: '#ffe6d0' },
          200: { value: '#fed1a9' },
          300: { value: '#febd83' },
          400: { value: '#fc9a64' },
          500: { value: '#f47c3e' },
          600: { value: '#d8612a' },
          700: { value: '#b14a20' },
          800: { value: '#8a391b' },
          900: { value: '#5f2814' },
          950: { value: '#38160b' },
        },
        taupe: {
          50: { value: '#f8f1f0' },
          100: { value: '#f0e0dd' },
          200: { value: '#e3c6c1' },
          300: { value: '#d2a39c' },
          400: { value: '#c17c75' },
          500: { value: '#a8645e' },
          600: { value: '#874e4a' },
          700: { value: '#693d3a' },
          800: { value: '#4c2d2b' },
          900: { value: '#321e1d' },
        },
        sand: {
          50: { value: '#fff8ee' },
          100: { value: '#fdedd6' },
          200: { value: '#fde0b8' },
          300: { value: '#f6cf9e' },
          400: { value: '#e9b277' },
          500: { value: '#d59456' },
          600: { value: '#b5763f' },
          700: { value: '#8f5c33' },
          800: { value: '#6b4528' },
          900: { value: '#47301d' },
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: '{colors.bronze.400}' },
          contrast: { value: '{colors.graphite.900}' },
          fg: { value: '{colors.bronze.700}' },
          muted: { value: '{colors.bronze.100}' },
          subtle: { value: '{colors.bronze.50}' },
          emphasized: { value: '{colors.bronze.500}' },
          focusRing: { value: '{colors.bronze.500}' },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
