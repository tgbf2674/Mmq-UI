import esbuild from 'rollup-plugin-esbuild'
import vue from '@vitejs/plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass'
import {terser} from 'rollup-plugin-terser'
import dts from 'rollup-plugin-dts'

export default {
  input: 'src/lib/index.ts',
  output: [{
    globals: {
      vue: 'Vue',
      mitt: 'mitt',
     '@vue/runtime-core': 'runtimeCore',
      '@vue/reactivity': 'reactivity'
    },
    name: 'mmq',
    file: 'dist/lib/mmqUI.js',
    format: 'umd',
    plugins: [terser()]
  }, {
    name: 'mmq',
    file: 'dist/lib/mmqUI.esm.js',
    format: 'es',
    plugins: [terser()]
  }, {
      name: 'mmq',
      file: 'index.d.ts',
      format: 'esm',
      plugins: [dts(),terser()]
    }
  ],
  plugins: [
    scss({include: /\.scss$/, sass: dartSass}),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015'
    }),
    vue({
      include: /\.vue$/,
    })
  ],
}
