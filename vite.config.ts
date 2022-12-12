// @ts-nocheck
import { md } from './plugin/md'
import { demo } from './plugin/demo'
import vue from '@vitejs/plugin-vue'
import {configDefaults, defineConfig} from 'vitest/config';

export default defineConfig({
  base: './',
  assetsDir: 'assets',
  plugins: [vue(), demo(), md()],
  build: {
    rollupOptions: {
      output: {
        manualChunks:{
          '@element-plus/icons-vue': ['@element-plus/icons-vue']
        }
      }
    }
  },
  test: {
    environment: 'happy-dom',
    coverage: {
      reporter: ['text', 'json', 'html'],
    }
  }
});
