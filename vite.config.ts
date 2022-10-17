// @ts-nocheck
import { md } from './plugin/md'
import { demo } from './plugin/demo'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config';

export default defineConfig({
  base: './',
  assetsDir: 'assets',
  plugins: [vue(), demo(), md()],
  test: {
    environment: 'happy-dom',
    coverage: {
      reporter: ['text', 'json', 'html'],
    }
  }
});
