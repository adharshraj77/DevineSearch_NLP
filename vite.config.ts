import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    chunkSizeWarningLimit: 300000, // Increase from default 500KB
    assetsInlineLimit: 0, // Disable inlining of assets
  },
  server: {
    fs: {
      // Allow serving files from the project root
      allow: ['..']
    }
  }
});
