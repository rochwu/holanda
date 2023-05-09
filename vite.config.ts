import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    server: {
      open: true,
      port: 3000,
      host: true,
    },
    build: {},
    plugins: [react()],
  };
});
