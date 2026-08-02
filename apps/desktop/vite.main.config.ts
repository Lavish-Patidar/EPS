import { defineConfig } from 'vite';
import { builtinModules } from 'module';

export default defineConfig({
  build: {
    sourcemap: true,
    outDir: 'dist/main',
    target: 'node20',
    rollupOptions: {
      external: [...builtinModules, 'electron'],
    },
  },
});
