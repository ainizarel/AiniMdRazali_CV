import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/AiniMdRazali_CV/', 
  build: {
    outDir: 'dist', // Vite uses 'dist' by default; no need to specify unless you want to customize it
  },
  rollupOptions: {
    external: [
      'bootstrap',
      'bootstrap/js/src/dropdown', 
      'bootstrap/js/src/modal',
      'vue-chartjs'
    ] 
  },
});
