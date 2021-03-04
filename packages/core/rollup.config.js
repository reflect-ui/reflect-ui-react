import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import packageJSON from './package.json';

const input = './src/index.ts';
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

process.env.BABEL_ENV = 'production';

export default [{
    plugins: [
        typescript(),
        peerDepsExternal(),
        resolve({
            extensions,
        }),
        commonjs({
            include: 'node_modules/**',
        }),
        babel({
            include: ['src/**/*'],
            babelHelpers: 'runtime',
            presets: [
                [
                    'react-app', {
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
        format: 'commonjs',
    },
    input,
}, ];