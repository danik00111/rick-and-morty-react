import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "development" ? "/" : "/rick-and-morty-react/",
  build: {
    rollupOptions: {
      // extra hook to copy index.html → 404.html
      // only needed for GitHub Pages
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
}))

// Wonky. https://stackoverflow.com/a/79656173