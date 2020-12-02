const { compilerOptions } = require('./tsconfig.json')

function resolverAlias() {
  const aliasKeys = Object.keys(compilerOptions.paths).map(value => value.replace('/*', ''));
  const aliasValues = Object.values(compilerOptions.paths).map(value => value[0].replace('/*', ''));

  const currentAlias = {}
  aliasKeys.forEach((value, index) => {
    currentAlias[value] = aliasValues[index];
  });

  return currentAlias;
}

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '12.19.0'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      "@babel/plugin-proposal-class-properties", { "loose": true }
    ],
    [
      "@babel/plugin-proposal-object-rest-spread", { "loose": true }
    ],
    [
      'module-resolver', {
        alias: resolverAlias()
      }
    ]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
