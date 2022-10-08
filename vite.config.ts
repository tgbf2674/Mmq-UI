// @ts-nocheck
import { md } from './plugin/md'
import { demo } from './plugin/demo'
import vue from '@vitejs/plugin-vue'

export default {
  base: './',
  assetsDir: 'assets',
  plugins: [vue(), demo(), md()]
};
