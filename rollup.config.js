import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

const babelConfig = {
  babelrc: false,
  presets: [['@babel/preset-env', { targets: 'defaults, IE >= 10, Safari >= 5.1' }]]
}

export default [{
  input: 'lib/index.js',
  output: { file: 'build/qrcode.js', format: 'cjs'},
  plugins: [commonjs(), resolve(), babel(babelConfig), terser()]
}]
