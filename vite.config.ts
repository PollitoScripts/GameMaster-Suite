import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Ruleta-Multiplayer/', // 👈 ¡Solo el nombre del repositorio entre barras diagonales!
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});