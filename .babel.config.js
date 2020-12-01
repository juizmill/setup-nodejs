const { compilerOptions } = require('./tsconfig.json')

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 12
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', { alias: tsconfig.paths }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
