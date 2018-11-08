import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import tslint from 'rollup-plugin-tslint';

const rollApp = {
  input: 'src/my-element.ts',
  output: [{
    file: 'src/my-element.ts',
    format: 'es',
    plugins: [
      resolve(),
      tslint('./tslint.json'),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
  }],
  plugins: [],
};

export default [rollApp];
