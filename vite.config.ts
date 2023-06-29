import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import {visualizer} from 'rollup-plugin-visualizer';
import {PluginOption, defineConfig} from 'vite';

export default defineConfig(() => {
  const plugins: PluginOption = [react(), basicSsl()];

  if (process.env.STATS === 'true') {
    plugins.push(
      visualizer({
        open: true,
      }),
    );
  }

  return {
    base: '/nederland',
    server: {
      open: true,
      port: 3000,
      host: true,
      https: true,
    },
    build: {},
    plugins,
  };
});
