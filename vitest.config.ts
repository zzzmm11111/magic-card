import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    include: ['tests/unit/**/*.spec.ts'],
    globals: true,
    setupFiles: ['tests/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.ts', 'src/**/*.vue'],
      exclude: ['src/main.ts', 'src/env.d.ts', 'src/**/*.d.ts', 'src/auto-imports.d.ts', 'src/components.d.ts'],
    },
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
