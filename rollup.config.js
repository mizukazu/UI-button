import typescript from 'rollup-plugin-typescript';

export default {
  input: './src/components/button/index.ts',
  output: {
    file: './dist/js/components/button/index.js',
    format: 'es'
  },
  plugins: [
    typescript()
  ]
}