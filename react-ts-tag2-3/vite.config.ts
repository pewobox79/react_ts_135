import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import * as path from 'path';

// Quelle für Alias setup: https://dev.to/avxkim/setup-path-aliases-w-react-vite-ts-poa
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias: [{find: '@', replacement: path.resolve(__dirname, 'src') }],
  }

})
