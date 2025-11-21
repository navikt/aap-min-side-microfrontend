import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    // @ts-ignore
    react(),
    // @ts-ignore
    tsconfigPaths(),
    {
      name: 'css-stub',
      transform(_code, id) {
        if (id.endsWith('.css')) {
          return { code: 'export default {}' };
        }
      },
    },
  ],
  test: {
    environment: 'jsdom',
    globals: true,
  },
});
