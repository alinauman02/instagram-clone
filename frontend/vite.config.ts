import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgrPlugin from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgrPlugin(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint src/ --ext .ts,.tsx',
      },
    }),
  ],
  server: {
    port: 3000,
    open: '/',
  },
});
