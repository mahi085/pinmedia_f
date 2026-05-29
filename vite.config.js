import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    // This tells Vite to serve index.html for any non-file routes
    // allowing React Router to handle client-side routing
    fallback: {
      index: 'index.html',
    },
  },
  // Marks this as a SPA (Single Page Application)
  appType: 'spa',
})
