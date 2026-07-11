import { fileURLToPath } from 'node:url';
import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './vitest.setup.ts',
  },
  resolve: {
    alias: {
      '@test-utils': fileURLToPath(new URL('./test-utils', import.meta.url)),
    },
  },
});
