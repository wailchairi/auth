import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // Enables access via local IP (e.g., 192.168.x.x)
  },
  plugins: [
    react(),
    tailwindcss({
      config: {
        theme: {
          extend: {
            fontFamily: {
              sans: ['Outfit', 'sans-serif'], // Sets Outfit globally
            },
          },
        },
      },
    }),
  ],
})
