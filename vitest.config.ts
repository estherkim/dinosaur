/// <reference types="vitest" />

import preact from '@preact/preset-vite';
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    environment: 'happy-dom',
    globals: true,
    watch: false,
  },
  plugins: [preact()],
})
