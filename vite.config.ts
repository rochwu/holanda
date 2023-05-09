import {PluginOption, defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {visualizer} from 'rollup-plugin-visualizer';

export default defineConfig(() => {
  const plugins: PluginOption = [react()];

  if (process.env.STATS === 'true') {
    plugins.push(
      visualizer({
        open: true,
      }),
    );
  }

  return {
    server: {
      open: true,
      port: 3000,
      host: true,
    },
    build: {},
    plugins,
  };
});
