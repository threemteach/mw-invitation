import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // relative path ensures works on GitHub Pages AND Vercel seamlessly
  build: {
    sourcemap: false, // Disables sourcemaps so users cannot view original source code in DevTools
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2,
      },
      mangle: {
        toplevel: true, // Obfuscates/mangles top-level variables and functions
      },
      format: {
        comments: false, // Strips comments
      },
    },
  },
})
