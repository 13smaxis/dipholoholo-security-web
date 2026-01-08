import { defineConfig } from 'vite'

// Move Vite cache out of node_modules to avoid OneDrive/Windows locks
export default defineConfig({
  cacheDir: '.vite-cache'
})
