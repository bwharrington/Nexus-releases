import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

/** Copy index.html → 404.html so GitHub Pages serves the SPA for deep links. */
function spaFallback() {
  return {
    name: 'spa-fallback',
    closeBundle() {
      const index = resolve(__dirname, 'dist/index.html')
      const fallback = resolve(__dirname, 'dist/404.html')
      if (existsSync(index)) {
        copyFileSync(index, fallback)
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/Nexus-releases/',
  plugins: [react(), spaFallback()],
})
