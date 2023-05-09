import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {visualizer} from 'rollup-plugin-visualizer';

export default defineConfig(() => {
  return {
    server: {
      open: true,
      port: 3000,
      host: true,
    },
    build: {},
    plugins: [react(), visualizer()],
  };
});
