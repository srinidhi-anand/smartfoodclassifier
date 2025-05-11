import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'build',
    emptyOutDir: true, // also necessary
  }, 
  server: {
         host: '0.0.0.0',
         port: Number(process.env.VITE_PORT) || 5173,
        allowedHosts: ['dlclassifier.onrender.com']
       },
})
