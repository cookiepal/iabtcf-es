const terser = require('@rollup/plugin-terser');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
  input: './src/stub.js',
  output: {
    dir: 'lib',
    format: 'es',
  },
  plugins: [
    commonjs(),
    terser(),
  ],
};
