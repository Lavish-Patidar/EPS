import { defineConfig } from 'vite';
import { builtinModules } from 'module';

export default defineConfig({
  build: {
    sourcemap: true,
    outDir: 'dist/preload',
    target: 'node20',
    rollupOptions: {
      external: [...builtinModules, 'electron'],
    },
  },
});
