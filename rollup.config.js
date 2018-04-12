// import resolve from 'rollup-plugin-node-resolve';
// import babel from 'rollup-plugin-babel';

export default {
  input: 'index.js',
  output: {
    file: 'confirm.js',
    format: 'umd',
    name: 'confirm'
  },
  // plugins: [
  // 	resolve(),
  //   babel({
  //     exclude: 'node_modules/**'
  //   })
  // ]
}