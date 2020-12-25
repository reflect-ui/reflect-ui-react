import * as react from 'react';
import * as reactDom from 'react-dom';

import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import packageJSON from './package.json';

const input = './src/index.ts';
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

process.env.BABEL_ENV = 'production';

export default [
  {
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions,
      }),
      commonjs({
        include: 'node_modules/**',
        namedExports: {
          react: Object.keys(react),
          'react-dom': Object.keys(reactDom),
        },
      }),
      babel({
        include: ['src/**/*'],
        runtimeHelpers: true,
        presets: [
          [
            'react-app',
            {
              flow: false,
              typescript: true,
            },
          ],
        ],
        extensions,
      }),
    ],
    output: {
      file: packageJSON.main,
      format: 'es',
    },
    input,
  },
];
