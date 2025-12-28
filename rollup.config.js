import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'default'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      exports: 'default'
    }
  ],
  external: ['react', 'react-dom'],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx']
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-react'
      ],
      extensions: ['.js', '.jsx']
    }),
    commonjs(),
    postcss({
      extract: true,
      minimize: true
    })
  ]
};