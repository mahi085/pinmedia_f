import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'spa-fallback',
      apply: 'serve',
      configResolved(config) {
        this.config = config
      },
      configureServer(server) {
        return () => {
          server.middlewares.use((req, res, next) => {
            // Skip for static files and API routes
            const filePath = req.url.split('?')[0]
            if (
              filePath.match(/\.(js|css|json|svg|png|jpg|jpeg|gif|ico|woff|woff2|eot|ttf|otf)$/) ||
              filePath.startsWith('/@') ||
              filePath.startsWith('/node_modules')
            ) {
              next()
            } else if (!filePath.includes('.')) {
              // For all other requests (routes without file extensions), serve index.html
              req.url = '/index.html'
              next()
            } else {
              next()
            }
          })
        }
      }
    }
  ],
  appType: 'spa',
})
